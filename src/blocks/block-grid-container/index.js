/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import Deprecated from "./deprecated";

/**
 * Styles
 */
import "./styles/style.scss";
import "./styles/editor.scss";

import Icon from "../../../assets/icon-c9-grid.svg";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/grid", {
	title: __("C9 Grid", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		anchor: true
	},
	keywords: [__("responsive", "c9-blocks")],

	description: __(
		"C9 Grids with column containers help display content for all types of devices.",
		"c9-blocks"
	),

	example: {
		attributes: {
			rows: 1
		},
		innerBlocks: [
			{
				name: "c9-blocks/column-container",
				attributes: {
					columns: 2,
					layout: "c9-2-col-equal",
					containerWidth: "container-narrow",
					align: "narrow",
					columnsGap: 10
				},

				innerBlocks: [
					{
						name: "c9-blocks/column",
						attributes: {},
						innerBlocks: [
							{
								name: "core/image",
								attributes: {
									sizeSlug: "large",
									url:
										"https://work.covertnine.com/wp-content/uploads/2020/07/set-of-tool-wrench-162553-55.jpg"
								}
							},
							{
								name: "c9-blocks/heading",
								attributes: {
									heading: "Use C9 Grids",
									subheading: "for responsive content",
									addSubheading: true,
									tagLevel: 3
								}
							},
							{
								name: "core/paragraph",
								attributes: {
									content:
										"To make your content responsive for all devices, put them inside of C9 Grids. That way, your users will see a scaled down version of your site that's laid out for a smaller screen automatically."
								}
							},
							{
								name: "core/buttons",
								attributes: {},

								innerBlocks: [
									{
										name: "core/button",
										attributes: {}
									},
									{
										name: "core/button",
										attributes: {}
									}
								]
							}
						]
					},
					{
						name: "c9-blocks/column",
						attributes: {},
						innerBlocks: [
							{
								name: "core/image",
								attributes: {
									sizeSlug: "large",
									url:
										"https://work.covertnine.com/wp-content/uploads/2020/07/clark-young-fQxMGkYXqFU-unsplash-55.jpg"
								}
							},
							{
								name: "c9-blocks/heading",
								attributes: {
									heading: "Column Responsiveness",
									subheading: "Enable or Disable it",
									addSubheading: true,
									tagLevel: 3
								}
							},
							{
								name: "core/paragraph",
								attributes: {
									content:
										"To make your content responsive for all devices, put them inside of C9 Grids. That way, your users will see a scaled down version of your site that's laid out for a smaller screen automatically."
								}
							},
							{
								name: "core/buttons",
								attributes: {},

								innerBlocks: [
									{
										name: "core/button",
										attributes: {}
									},
									{
										name: "core/button",
										attributes: {}
									}
								]
							}
						]
					}
				]
			}
		]
	},

	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { isBlockSelected, hasSelectedInnerBlock } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		}),
		withDispatch(dispatch => {
			const { toggleSelection } = dispatch("core/block-editor");

			return {
				onResizeStart: () => toggleSelection(false),
				onResizeStop: () => toggleSelection(true)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	},

	deprecated: Deprecated
});
