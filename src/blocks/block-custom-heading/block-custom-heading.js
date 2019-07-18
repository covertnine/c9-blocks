/**
 * BLOCK: Covertnine Blocks Custom Heading
 */

import Edit from "./edit";
import Save from "./save";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Import Icon
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { makeIcon } from "../../helpers/awesomeGenerator";
const iconEl = makeIcon(faHeading);

// Components
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

import attributes from "./attributes";

// Register the block
registerBlockType("c9-blocks/custom-heading", {
	title: __("Covertnine Custom Section Heading", "c9-blocks"),
	description: __("Add a custom Section Heading.", "c9-blocks"),
	icon: iconEl,
	category: "c9-blocks",
	supports: {
		align: ["wide", "full"]
	},
	keywords: [
		__("custom heading", "c9-blocks"),
		__("cortex", "c9-blocks"),
		__("covertnine", "c9-blocks")
	],

	attributes: attributes,

	// Render the block components
	edit: props => {
		return <Edit {...props} />;
	},

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	}
});

