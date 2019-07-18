/**
 * BLOCK: Covertnine Blocks Custom Heading
 */

import Save from "./save";

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./components/inspector";
import CustomHeading from "./components/custom-heading";

import HeadingToolbar from "./components/heading-toolbar";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

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

const { applyFilters } = wp.hooks;

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
		// Setup the attributes
		const {
			setAttributes,
			attributes: {
				heading,
				displayLevel,
				tagLevel,
				textAlign,
				backgroundColor,
				textColor,
				type,
				weight,
				overrideStyle
			},
			className
		} = props;

		// console.log(className, props, "edit")

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
						selectedLevel={tagLevel}
						onChange={newLevel => setAttributes({ tagLevel: newLevel })}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...props }} />
				<CustomHeading {...props}>
					<RichText
						tagName={`h${tagLevel}`}
						className={classnames([
							cortexTextStyleConfig(
								type,
								displayLevel,
								tagLevel,
								overrideStyle
							),
							`font-weight-${weight}`,
							`text-${textAlign}`
						])}
						style={{
							backgroundColor: backgroundColor,
							color: textColor
						}}
						keepPlaceholderOnFocus={true}
						placeholder={__("Write heading…")}
						value={heading}
						onChange={value => setAttributes({ heading: value })}
					/>
				</CustomHeading>
			</Fragment>
		);
	},

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	}
});

function cortexTextStyleConfig(type, display, tag, override) {
	if (!override) {
		return "";
	} else if (display == 0) {
		return `${type}${tag}`;
	} else {
		return `${type}${display}`;
	}
}
