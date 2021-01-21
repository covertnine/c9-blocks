/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

/**
 * External Dependencies.
 */
import classnames from "classnames";

/**
 * Create a Tab wrapper Component
 */
export default class Tab extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { tabActive, slug, id } = this.props.attributes;
		// eslint-disable-next-line no-unused-vars
		let { className = "", hasChildBlocks } = this.props;

		className = classnames(
			className,
			"c9-horizontal-tabs-tab",
			"tab-pane fade",
			tabActive === slug ? "show active" : null
		);

		return (
			<div
				className={className}
				role="tabpanel"
				id={`htab-${slug}-${id}`}
				aria-labelledby={`tab-button-${slug}`}
			>
				<InnerBlocks
					// temp fix for innerblock not showing up on initial render
					renderAppender={
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
					templateLock={false}
					templateInsertUpdatesSelection={false}
				/>
			</div>
		);
	}
}

registerBlockType("c9-blocks/horizontal-tabs-tab", {
	title: __("C9 Horizontal Tab", "c9-blocks"),

	category: "common",

	parent: ["c9-blocks/horizontal-tabs"],

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
		slug: {
			type: "string"
		},
		tabActive: {
			type: "string"
		},
		id: {
			type: "number"
		}
	},

	edit: withSelect((select, ownProps) => {
		const { getBlockOrder } = select("core/block-editor");

		const { clientId } = ownProps;

		return {
			hasChildBlocks: 0 < getBlockOrder(clientId).length
		};
	})(Tab),

	getEditWrapperProps(attributes) {
		return { "data-tab": attributes.slug };
	},

	// Render via PHP
	save() {
		return <InnerBlocks.Content />;
	},

	deprecated: [
		{
			supports: {
				inserter: false,
				className: false
			},
			attributes: {
				slug: {
					type: "string"
				},
				tabActive: {
					type: "string"
				},
				id: {
					type: "number"
				}
			},
			save: function(props) {
				const { slug, tabActive, id } = props.attributes;
				let { className = "" } = props;

				className = classnames(
					"c9-horizontal-tabs-tab",
					"tab-pane fade",
					tabActive === slug ? "show active" : null
				);

				return (
					<div
						className={className}
						role="tabpanel"
						id={`htab-${slug}-${id}`}
						aria-labelledby={`tab-button-${slug}`}
					>
						<InnerBlocks.Content />
					</div>
				);
			}
		},
		{
			supports: {
				inserter: false,
				className: false
			},
			attributes: {
				slug: {
					type: "string"
				},
				tabActive: {
					type: "string"
				},
				id: {
					type: "number"
				}
			},
			save: function(props) {
				const { slug, tabActive, id } = props.attributes;
				let { className = "" } = props;

				className = classnames(
					"c9-horizontal-tabs-tab",
					"tab-pane fade",
					tabActive === slug ? "show active" : null
				);

				return (
					<div
						className={className}
						role="tabpanel"
						id={`htab-${slug}-${id}`}
						aria-labelledby={slug}
					>
						<InnerBlocks.Content />
					</div>
				);
			}
		}
	]
});
