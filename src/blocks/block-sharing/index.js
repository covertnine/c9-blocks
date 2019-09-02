import Edit from "./edit";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Import Fontawesome Icon
import Icon from "../../../assets/icon-c9-social-share.svg";

// Components
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("c9-blocks/social-share", {
	title: __("C9 Social Share", "c9-blocks"),
	description: __("Add sharing buttons to your posts and pages.", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	keywords: [
		__("share", "c9-blocks"),
		__("social", "c9-blocks")
	],

	// Render the block components
	edit: Edit,

	// Render via PHP
	save() {
		return null;
	}
});
