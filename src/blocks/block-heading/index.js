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

import Icon from "../../../assets/icon-c9-heading.svg";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { withViewportMatch } = wp.viewport;

registerBlockType("c9-blocks/heading", {
	title: __("C9 Heading", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		anchor: true
	},
	keywords: [
		__("heading", "c9-blocks"),
		__("c9", "c9-blocks"),
		__("covertnine", "c9-blocks")
	],

	description: __(
		"An advanced heading block with inline subheading font, custom colors, and style settings.",
		"c9-blocks"
	),

	example: {
		attributes: {
			heading: "Headlines H1-H6",
			subheading: "Subheading H1-H6",
			addSubheading: true,
			tagLevel: 3
		}
	},

	attributes: attributes,

	// Render the block components
	edit: compose(
		withViewportMatch({ isLargeViewport: "medium" }),
		withSelect((select, { clientId, isLargeViewport, isCollapsed }) => {
			const {
				getBlockRootClientId,
				getSettings,
				isBlockSelected,
				hasSelectedInnerBlock
			} = select("core/block-editor");
			const settings = getSettings();
			return {
				isCollapsed:
					isCollapsed ||
					!isLargeViewport ||
					(!settings.hasFixedToolbar && !!getBlockRootClientId(clientId)),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		})
	)(Edit),

	// Save the attributes and markup
	save: Save
});
