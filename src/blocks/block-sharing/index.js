/**
 * Internal dependencies
 */
import Edit from "./edit";

/**
 * Styles
 */
import "./styles/style.scss";
import "./styles/editor.scss";

import Icon from "../../../assets/icon-c9-social-share.svg";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/social-share", {
	title: __("C9 Social Share", "c9-blocks"),
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
