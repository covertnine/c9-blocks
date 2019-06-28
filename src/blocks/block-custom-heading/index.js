/**
 * BLOCK: Covertnine Blocks Custom Heading
 */

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./inspector";
import CustomHeading from "./custom-heading";

import HeadingToolbar from './heading-toolbar';

// Import Icon
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { makeIcon } from "../../helpers/awesomeGenerator";
const iconEl = makeIcon(faHeading);

// Components
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar
} = wp.components;

import attributes from "./attributes";

// Register the block
registerBlockType("covertnine-blocks/c9-custom-heading", {
	title: __("Covertnine Custom Section Heading", "covertnine-blocks"),
	description: __("Add a custom Section Heading.", "covertnine-blocks"),
	icon: iconEl,
	category: "covertnine-blocks",
	keywords: [
		__("custom heading", "covertnine-blocks"),
		__("cortex", "covertnine-blocks"),
		__("covertnine", "covertnine-blocks")
	],

	attributes: attributes,

	// Render the block components
	edit: function(props) {
		// Setup the attributes
		const {
			setAttributes,
			attributes: { heading, subheading, wrapper, level }
		} = props;

		// Save the block markup for the front end
		return (
			<Fragment>
				<BlockControls>
					{/* <BlockAlignmentToolbar
					/> */}

					<AlignmentToolbar />
					<HeadingToolbar
						minLevel={1}
						maxLevel={7}
						selectedLevel={level}
						onChange={newLevel => setAttributes({ level: newLevel })}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...props }} />
				<CustomHeading {...props}>
					{heading && subheading && (
						<RichText.Content tagName="h3" value={heading + subheading} />
					)}
				</CustomHeading>
			</Fragment>
		);
	},

	// Save the attributes and markup
	save: function(props) {
		// Setup the attributes
		const { heading, subheading, wrapper } = props.attributes;

		// Save the block markup for the front end
		return (
			<Fragment>
				<CustomHeading {...props}>
					{heading && subheading && (
						<RichText.Content tagName="h3" value={heading + subheading} />
					)}
				</CustomHeading>
			</Fragment>
		);
	}
});
