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
import "./styles/editor.scss";

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
			const { updateBlockAttributes, removeBlock } = dispatch("core/editor");

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
