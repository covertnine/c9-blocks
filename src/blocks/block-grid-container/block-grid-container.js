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
const { withSelect } = wp.data;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("c9-blocks/grid", {
	title: __("C9 Grid", "c9-blocks"),
	description: __("A responsive grid for columns of content", "c9-blocks"),
	icon: "editor-table",
	category: "c9-blocks",
	supports: {
		// fill in features
		align: ["wide", "full"]
	},
	keywords: [__("responsive", "c9-blocks")],
	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { isBlockSelected, hasSelectedInnerBlock } = select("core/editor");

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
	}
});
