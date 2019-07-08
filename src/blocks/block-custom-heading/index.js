/**
 * BLOCK: Covertnine Blocks Custom Heading
 */

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./inspector";
import CustomHeading from "./custom-heading";

import HeadingToolbar from "./heading-toolbar";

// Import Icon
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { makeIcon } from "../../helpers/awesomeGenerator";
const iconEl = makeIcon(faHeading);

// Components
const { __ } = wp.i18n;

// Extend component
const { Fragment } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const { AlignmentToolbar, BlockControls, RichText } = wp.editor;

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
			attributes: {
				heading,
				subheading,
				displayLevel,
				tagLevel,
				textAlign,
				backgroundColor,
				textColor,
				type,
				weight
			}
		} = props;

		// Save the block markup for the front end
		return (
			<Fragment>
				<BlockControls>
					{/* <BlockAlignmentToolbar
					/> */}

					<AlignmentToolbar
						value={textAlign}
						onChange={value => setAttributes({ textAlign: value })}
					/>

					<HeadingToolbar
						minLevel={1}
						maxLevel={7}
						selectedLevel={displayLevel}
						onChange={newLevel => setAttributes({ displayLevel: newLevel })}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...props }} />
				<CustomHeading {...props}>
					{heading && subheading && (
						<RichText
							tagName={`h${tagLevel}`}
							className={classnames([
								`${type}${displayLevel}`,
								`font-weight-${weight}`,
								`text-${textAlign}`
							])}
							style={{
								backgroundColor: backgroundColor,
								color: textColor
							}}
							placeholder={"Start writing"}
							value={heading}
							onChange={value => setAttributes({ heading: value })}
						/>
					)}
				</CustomHeading>
			</Fragment>
		);
	},

	// Save the attributes and markup
	save: function(props) {
		// Setup the attributes
		const {
			heading,
			subheading,
			backgroundColor,
			textColor,
			tagLevel,
			type,
			displayLevel,
			weight,
			textAlign
		} = props.attributes;

		// Save the block markup for the front end
		return (
			<Fragment>
				<CustomHeading {...props}>
					{heading && subheading && (
						<RichText.Content
							tagName={`h${tagLevel}`}
							className={classnames([
								`${type}${displayLevel}`,
								`font-weight-${weight}`,
								`text-${textAlign}`
							])}
							style={{
								backgroundColor: backgroundColor,
								color: textColor
							}}
							value={heading}
						/>
					)}
				</CustomHeading>
			</Fragment>
		);
	}
});
