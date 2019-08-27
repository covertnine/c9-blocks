/**
 * Slide Wrapper
 */

// Setup the block
const { Component } = wp.element;

const { Path, SVG } = wp.components;
const { __ } = wp.i18n;

const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Slide wrapper Component
 */
class Slide extends Component {
	constructor() {
		super(...arguments);
		const { slideActive } = this.props.attributes;

		this.state = {
			slideActive
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (
			nextState.slideActive !== this.state.slideActive &&
			this.props.attributes.slides === nextProps.attributes.slides
		) {
			return false;
		}

		return true;
	}

	componentDidUpdate() {
		console.log(this.props);
		if (this.state.slideActive != this.props.attributes.slideActive) {
			this.setState({ slideActive: this.props.attributes.slideActive });
		}
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		let { className = "" } = this.props;

		console.log(this.props.attributes, this.props.clientId);

		className = classnames(className, "c9-carousel-slide");

		return (
			<div className={classnames(className, this.props.attributes.id)}>
				<InnerBlocks
					templateLock={false}
					templateInsertUpdatesSelection={false}
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

	description: __("A single tab within the tabs block."),

	supports: {
		inserter: false,
		className: false
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
		}
	},

	edit: Slide,

	save: function(props) {
		const { slideActive } = props.attributes;
		let { className = "" } = props;

		className = classnames(
			className,
			"c9-carousel-slide",
			"carousel-item",
			slideActive ? "active" : null
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
								: null
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
