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
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("covertnine-blocks/tabs", {
	title: __("Covertnine Tabs", "covertnine-blocks"),
	description: __("Responsive tabs for content", "covertnine-blocks"),
	icon: "category",
	category: "covertnine-blocks",
	supports: {
		// fill in features
	},
	keywords: [
		__("tabs", "covertnine-blocks"),
		__("container", "covertnine-blocks"),
		__("responsive", "covertnine-blocks")
	],
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
