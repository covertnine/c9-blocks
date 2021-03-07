/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";

/**
 * Styles
 */
import "./styles/style.scss";

import Icon from "../../../assets/icon-c9-tabs-horizontal.svg";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/horizontal-tabs", {
	title: __("C9 Horizontal Tabs", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		// fill in features
	},
	keywords: [
		__("tabs", "c9-blocks"),
		__("container", "c9-blocks"),
		__("responsive", "c9-blocks")
	],
	description: __(
		"Display tabbed content with a horizontal button interface for switching between multiple types of content.",
		"c9-blocks"
	),
	example: {
		attributes: {
			buttonsAlign: "center",
			tabsData: [
				{ slug: "tab-1", title: "Tab 1" },
				{ slug: "tab-2", title: "Tab 2" },
				{ slug: "tab-3", title: "Tab 3" }
			]
		},
		innerBlocks: [
			{
				name: "c9-blocks/horizontal-tabs-tab",
				attributes: { slug: "tab-1", tabActive: "tab-1" },
				innerBlocks: [
					{
						name: "c9-blocks/heading",
						attributes: {
							heading: "Tab Number One",
							tagLevel: 3
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Horizontal tabs can be aligned vertically inside of the tab container, and colors for tabs can be customized with labels, colors, and alignments. Almost any block can go inside of tabs themselves including buttons, text, videos, and image galleries."
						}
					}
				]
			},
			{
				name: "c9-blocks/horizontal-tabs-tab",
				attributes: { slug: "tab-2", tabActive: "tab-1" }
			},
			{
				name: "c9-blocks/horizontal-tabs-tab",
				attributes: { slug: "tab-3", tabActive: "tab-1" }
			}
		]
	},
	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
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
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	}
});
