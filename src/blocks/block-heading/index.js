/**
 * BLOCK: Covertnine Blocks Custom Heading
 */

import Edit from "./edit";
import Save from "./save";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Import Icon
import Icon from "../../../assets/icon-c9-heading.svg";

// Components
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

const { compose } = wp.compose;
const { withSelect } = wp.data;
const { withViewportMatch } = wp.viewport;

import attributes from "./attributes";

// Register the block
registerBlockType("c9-blocks/heading", {
	title: __("C9 Heading", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {},
	keywords: [
		__("heading", "c9-blocks"),
		__("c9", "c9-blocks"),
		__("covertnine", "c9-blocks")
	],

	attributes: attributes,

	// Render the block components
	edit: compose(
		withViewportMatch({ isLargeViewport: "medium" }),
		withSelect((select, { clientId, isLargeViewport, isCollapsed }) => {
			const { getBlockRootClientId, getSettings } = select("core/block-editor");
			const settings = getSettings();
			return {
				isCollapsed:
					isCollapsed ||
					!isLargeViewport ||
					(!settings.hasFixedToolbar && !!getBlockRootClientId(clientId))
			};
		})
	)(Edit),

	// Save the attributes and markup
	save: Save
});
