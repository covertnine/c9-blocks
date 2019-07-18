/**
 * BLOCK: Post and Page Grid
 */

// Import block dependencies and components
import edit from "./components/edit";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Components
const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register alignments
const validAlignments = ["center", "wide", "full"];

// Register the block
registerBlockType("c9-blocks/ab-post-grid", {
	title: __("Post and Page Grid", "c9-blocks"),
	description: __(
		"Add a grid or list of customizable posts or pages.",
		"c9-blocks"
	),
	icon: "grid-view",
	category: "c9-blocks",
	keywords: [
		__("post", "c9-blocks"),
		__("page", "c9-blocks"),
		__("grid", "c9-blocks")
	],

	getEditWrapperProps(attributes) {
		const { align } = attributes;
		if (-1 !== validAlignments.indexOf(align)) {
			return { "data-align": align };
		}
	},

	edit,

	// Render via PHP
	save() {
		return null;
	}
});
