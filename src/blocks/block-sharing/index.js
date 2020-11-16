/**
 * Internal dependencies
 */
import Edit from "./edit";

/**
 * Styles
 */
import "./styles/style.scss";

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
	description: __(
		"Add buttons for social media share links to any page or post with custom color and shape settings.",
		"c9-blocks"
	),
	example: {
		attributes: {
			linkedin: true,
			email: true,
			shareAlignment: "center",
			shareButtonColor: "c9-share-color-social"
		}
	},
	keywords: [__("share", "c9-blocks"), __("social", "c9-blocks")],

	// Render the block components
	edit: Edit,

	// Render via PHP
	save() {
		return null;
	}
});
