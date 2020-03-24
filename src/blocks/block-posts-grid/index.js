/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import Deprecated from "./deprecated";

import Icon from "../../../assets/icon-c9-post-grid.svg";

/**
 * Styles
 */
import "./styles/style.scss";
import "./styles/editor.scss";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/posts-grid", {
	title: __("C9 Posts Grid", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		// fill in features
	},
	keywords: [__("responsive", "c9-blocks")],
	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { isBlockSelected, hasSelectedInnerBlock } = select("core/block-editor");

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	},

	deprecated: Deprecated
});
