/**
 * Internal dependencies
 */
import VerticalAlignmentToolbar from "../../../components/vertical-alignment-toolbar";
import classnames from "classnames";
// import HideWhenChildBlocks from './hide-when-child-blocks';
// InnerBlocks.HideWhenChildBlocks = HideWhenChildBlocks;

/**
 * WordPress dependencies
 */
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;
const { InnerBlocks, BlockControls, useBlockProps } = wp.blockEditor;
const { registerBlockType, getBlockType, getBlockTypes } = wp.blocks;
const { AlignmentToolbar } = wp.blockEditor;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { applyFilters } = wp.hooks;

/**
 * Create a Column wrapper Component
 */
const Column = props => {
	const {
		attributes: { textAlign, verticalAlign },
		setAttributes,
		className,
		block,
		hasChildBlocks,
		updateBlockAttributes
	} = props;

	const ALLOWED_BLOCKS = getBlockTypes()
		.map(block => block.name)
		.filter(
			name => "c9-blocks/grid" != name && "c9-blocks/column-container" != name
		);

	// Disable width toolbars for children when inside this block.
	const disableToolbarTraversal = root => {
		if (root) {
			if (
				("c9-blocks/cta" === root.name ||
					"c9-blocks/post-grid" === root.name) &&
				!root.attributes.disableToolbar
			) {
				updateBlockAttributes(root.clientId, { disableToolbar: true });
			}
			// eslint-disable-next-line no-unused-vars
			for (let child of root.innerBlocks) {
				disableToolbarTraversal(child);
			}
		}
	};

	// perform traversal only on children
	// eslint-disable-next-line no-unused-vars
	disableToolbarTraversal(block);

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={value => setAttributes({ textAlign: value })}
				/>
				<VerticalAlignmentToolbar
					value={verticalAlign}
					onChange={value => {
						setAttributes({ verticalAlign: value });
					}}
				/>
			</BlockControls>
			<div
				className={classnames(
					className,
					"c9-block-layout-column",
					"c9-column",
					textAlign ? `text-${textAlign}` : null,
					verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null
				)}
			>
				<div className="c9-column-innner">
					<InnerBlocks
						templateLock={false}
						allowedBlocks={ALLOWED_BLOCKS}
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</div>
		</Fragment>
	);
};

registerBlockType("c9-blocks/column", {
	title: __("Column", "c9-blocks"),

	category: "common",

	parent: ["c9-blocks/column-container"],

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
		textAlign: {
			type: "string",
			default: "left"
		},
		verticalAlign: {
			type: "string"
		}
	},

	edit: compose([
		withSelect((select, ownProps) => {
			const {
				getBlock,
				isBlockSelected,
				hasSelectedInnerBlock,
				getBlockOrder
			} = select("core/block-editor");

			const { clientId } = ownProps;

			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
				hasChildBlocks: 0 < getBlockOrder(clientId).length
			};
		}),
		withDispatch(dispatch => {
			const { updateBlockAttributes, removeBlock } = dispatch(
				"core/block-editor"
			);

			return {
				updateBlockAttributes,
				removeBlock
			};
		})
	])(Column),

	save: props => {
		const {
			attributes: { textAlign, verticalAlign }
		} = props;

		const extraProps = useBlockProps
			? useBlockProps.save()
			: applyFilters(
					"blocks.getSaveContent.extraProps",
					props,
					getBlockType("c9-blocks/column"),
					props.attributes
			  );

		return (
			<div
				{...extraProps}
				className={classnames(
					"c9-block-layout-column",
					"c9-column",
					textAlign ? `text-${textAlign}` : null,
					verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null
				)}
			>
				<div className="c9-column-innner">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});

/* Add the vertical column alignment class to the block wrapper. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if ("c9-blocks/column" === blockName) {
				return (
					<BlockListBlock
						{...props}
						className={
							props.attributes.verticalAlign
								? "c9-is-vertically-aligned-" + props.attributes.verticalAlign
								: "c9-is-vertically-aligned-top"
						}
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
