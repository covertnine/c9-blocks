/**
 * BLOCK: Covertnine Blocks Custom Heading
 */

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./inspector";
import CustomHeading from "./custom-heading";

// Import Icon
import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { makeIcon } from "../../helpers/awesomeGenerator";
const iconEl = makeIcon( faHeading );

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText,
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar,
} = wp.components;

import attributes from "./attributes";

class C9CustomHeading extends Component {
	render() {
		// Setup the attributes
		const {
			setAttributes,
			buttonTextColor,
			buttonBackgroundColor,
			setButtonTextColor,
			setButtonBackgroundColor,
			className,
			attributes: { heading, subheading, wrapper },
		} = this.props;

		return [
			// Show the alignment toolbar on focus
			// <BlockControls>
			// 	<BlockAlignmentToolbar
			// 		value={ctaWidth}
			// 		onChange={ctaWidth => setAttributes({ ctaWidth })}
			// 		controls={['center', 'wide', 'full']}
			// 	/>
			// 	<AlignmentToolbar
			// 		value={buttonAlignment}
			// 		onChange={(value) => {
			// 			setAttributes({ buttonAlignment: value });
			// 		}}
			// 	/>
			// </BlockControls>
			// Show the block controls on focus
			<Inspector { ...{ setAttributes, ...this.props } } />,
			// Show the Button markup in the editor
			<CustomHeading { ...this.props }>
				{ heading && (
					<RichText
						tagName="h3"
						placeholder={ __( "Call To Action Text", "covertnine-blocks" ) }
						keepPlaceholderOnFocus
						value={ heading }
						onChange={ value => setAttributes( { heading: value } ) }
					/>
				) }
				{ subheading && (
					<RichText
						tagName="h4"
						placeholder={ __( "Call To Action Text", "covertnine-blocks" ) }
						keepPlaceholderOnFocus
						value={ subheading }
						onChange={ value => setAttributes( { subheading: value } ) }
					/>
				) }
			</CustomHeading>,
		];
	}
}

// Register the block
registerBlockType( "covertnine-blocks/c9-custom-heading", {
	title: __( "Covertnine Custom Section Heading", "covertnine-blocks" ),
	description: __( "Add a custom Section Heading.", "covertnine-blocks" ),
	icon: iconEl,
	category: "covertnine-blocks",
	keywords: [
		__( "custom heading", "covertnine-blocks" ),
		__( "cortex", "covertnine-blocks" ),
		__( "covertnine", "covertnine-blocks" ),
	],

	attributes: attributes,

	// Render the block components
	edit: function( props ) {
		// Setup the attributes
		const { heading, subheading, wrapper } = props.attributes;

		// Save the block markup for the front end
		return (
			<CustomHeading { ...props }>
				{ heading && subheading && (
					<RichText.Content tagName="h3" value={ heading + subheading } />
				) }
			</CustomHeading>
		);
	},

	// Save the attributes and markup
	save: function( props ) {
		// Setup the attributes
		const { heading, subheading, wrapper } = props.attributes;

		// Save the block markup for the front end
		return (
			<CustomHeading { ...props }>
				{ heading && subheading && (
					<RichText.Content tagName="h3" value={ heading + subheading } />
				) }
			</CustomHeading>
		);
	},
} );
