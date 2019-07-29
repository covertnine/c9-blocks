// Import block dependencies and components
import Edit from "./edit";
import Save from "./save";

import attributes from "./attributes";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Components
const { __ } = wp.i18n;

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

// Register block
const { registerBlockType, createBlock } = wp.blocks;

// Register the block
registerBlockType("c9-blocks/toggles", {
	title: __("C9 Toggles", "c9-blocks"),
	description: __(
		"A responsive set of toggles for lists of content",
		"c9-blocks"
	),
	icon: "editor-table",
	category: "c9-blocks",
	supports: {
		// fill in features
	},
	keywords: [__("responsive", "c9-blocks")],
	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select(
				"core/editor"
			);

			const { clientId } = ownProps;

			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		}),
		withDispatch((dispatch, ownProps) => {
			const { insertBlock, updateBlockAttributes } = dispatch("core/editor");

			const { clientId } = ownProps;

			return {
				updateBlockAttributes,
				addToggle: id =>
					insertBlock(
						createBlock("c9-blocks/toggles-toggle", { id }),
						undefined,
						clientId
					)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	}
});
