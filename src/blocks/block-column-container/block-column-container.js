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
registerBlockType("c9-blocks/column-container", {
	title: __("C9 Column Container", "c9-blocks"),
	description: __("A responsive container for columns of content", "c9-blocks"),
	icon: "layout",
	category: "common",
	parent: ["c9-blocks/grid-container"],
	supports: {
		// fill in features
	},
	keywords: [__("container", "c9-blocks"), __("responsive", "c9-blocks")],
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
