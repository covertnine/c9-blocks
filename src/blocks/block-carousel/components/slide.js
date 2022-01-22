/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { registerBlockType, getBlockTypes } = wp.blocks;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import times from "lodash/times";
import constant from "lodash/constant";

/**
 * Create a Slide wrapper Component
 */
class Slide extends Component {
	constructor() {
		super(...arguments);
	}

	/**
	 * Checks if component needs to re-render, only re-renders when slide count has changed.
	 */
	shouldComponentUpdate(nextProps) {
		if (
			this.props.attributes.slideActive !== nextProps.attributes.slideActive &&
			this.props.attributes.slides === nextProps.attributes.slides
		) {
			return false;
		}

		return true;
	}

	processRootBlockData(sizes, height) {
		const { slides, id } = this.props.attributes;

		if (sizes === undefined) {
			return;
		}

		if (sizes.length !== slides) {
			let newSizes = times(slides, constant(-1));

			for (let i = 0; i < sizes.length; i++) {
				newSizes[i] = sizes[i];
			}
			newSizes[id] = height;

			return newSizes;
		} else {
			sizes[id] = height;
			return sizes;
		}
	}

	isSizeChanged(sizes, height) {
		const { id } = this.props.attributes;
		if (Array.isArray(sizes) && sizes.length > id) {
			if (Math.round(sizes[id]) === Math.round(height)) {
				return false;
			}
		}

		return true;
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		let {
			className = "",
			hasChildBlocks,
			rootBlock,
			updateBlockAttributes
		} = this.props;

		const ALLOWED_BLOCKS = getBlockTypes()
			.map(block => block.name)
			.filter(
				name =>
					"c9-blocks/carousel" != name && "c9-blocks/image-carousel" != name
			);

		const refCallback = async element => {
			const limit = 20;
			let currCount = 0;
			if (element) {
				let config = element.getBoundingClientRect();
				while (0 === config.height && currCount < limit) {
					currCount++;
					// wait and check again
					await new Promise(r => setTimeout(r, 500));
					config = element.getBoundingClientRect();
				}

				if (rootBlock) {
					if (!this.isSizeChanged(rootBlock.attributes.slideSizes,
						config.height)) {
						return;
					}

					const result = this.processRootBlockData(
						rootBlock.attributes.slideSizes,
						config.height
					);

					updateBlockAttributes(rootBlock.clientId, { slideSizes: result });
					// console.log(result);
				}
			}
		};

		className = classnames(className, "c9-carousel-slide");

		return (
			<div
				ref={refCallback}
				className={classnames(className, this.props.attributes.id)}
			>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					templateLock={false}
					templateInsertUpdatesSelection={false}
					renderAppender={
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
				/>
			</div>
		);
	}
}

registerBlockType("c9-blocks/carousel-slide", {
	title: __("C9 Carousel Slide", "c9-blocks"),

	category: "common",

	parent: ["c9-blocks/carousel"],

	icon: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
		</SVG>
	),

	supports: {
		inserter: false,
		className: false,
		reusable: false
	},

	attributes: {
		id: {
			type: "number"
		},
		slideActive: {
			type: "number"
		},
		slides: {
			type: "number"
		},
		slideEqualHeight: {
			type: "boolean"
		},
		slideHeightCallback: {
			type: "number"
		}
	},

	edit: compose([
		withSelect((select, ownProps) => {
			const { getBlockOrder, getBlock, getBlockHierarchyRootClientId } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				hasChildBlocks: 0 < getBlockOrder(clientId).length,
				rootBlock: clientId
					? getBlock(getBlockHierarchyRootClientId(clientId))
					: null
			};
		}),
		withDispatch(dispatch => {
			const { updateBlockAttributes } = dispatch("core/block-editor");

			return {
				updateBlockAttributes
			};
		})
	])(Slide),

	save: function (props) {
		const { id } = props.attributes;
		let { className = "" } = props;

		className = classnames(
			className,
			"c9-carousel-slide",
			"carousel-item",
			0 === id ? "active" : null
		);

		return (
			<div className={className}>
				<InnerBlocks.Content />
			</div>
		);
	}
});

/* Add the vertical column alignment class to the column container block. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if ("c9-blocks/carousel-slide" === blockName) {
				return (
					<BlockListBlock
						{...props}
						className={classnames(
							"carousel-item",
							props.attributes.slideActive === props.attributes.id
								? "active"
								: "c9-equal-height-check"
						)}
					/>
				);
			} else {
				return <BlockListBlock {...props} />;
			}
		};
	},
	"withClientIdClassName"
);

wp.hooks.addFilter(
	"editor.BlockListBlock",
	"c9-blocks/add-vertical-align-class",
	withClientIdClassName
);
