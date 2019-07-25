/**
 * Tab Wrapper
 */

// Setup the block
const { Component } = wp.element;

const { Path, SVG } = wp.components;
const { __ } = wp.i18n;

const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;
const { applyFilters } = wp.hooks;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Tab wrapper Component
 */
export default class Tab extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { tabActive, slug } = this.props.attributes;
		// eslint-disable-next-line no-unused-vars
		let { className = "" } = this.props;

		className = classnames(
			applyFilters("c9-blocks.blocks.className", className),
			"tab-pane fade",
			tabActive === slug ? "show active" : null
		);

		return (
			<div className={className} role="tabpanel" id={`tab-${slug}`} aria-labelledby={slug}>
				<InnerBlocks
					templateLock={false}
					templateInsertUpdatesSelection={false}
				/>
			</div>
		);
	}
}

registerBlockType("c9-blocks/tabs-tab-v2", {
	title: __("C9 Tab V2", "c9-blocks"),

	category: "common",

	parent: ["c9-blocks/tabs-v2"],

	icon: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
		</SVG>
	),

	description: __("A single tab within the tabs block."),

	supports: {
		inserter: false
	},

	attributes: {
		slug: {
			type: "string"
		},
		tabActive: {
			type: "string"
		}
	},

	edit: Tab,

	getEditWrapperProps(attributes) {
		return { "data-tab": attributes.slug };
	},

	save: function(props) {
		const { slug, tabActive } = props.attributes;
		let { className = "" } = props;

		className = classnames(
			applyFilters("c9-blocks.blocks.className", className),
			"tab-pane fade",
			tabActive === slug ? "show active" : null
		);

		return (
			<div className={className} role="tabpanel" id={`tab-${slug}`} aria-labelledby={slug}>
				<InnerBlocks.Content />
			</div>
		);
	}
});
