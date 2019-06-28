/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

const { compose } = wp.compose;

import HeadingToolbar from './heading-toolbar';

// Import block components
const {
	InspectorControls,
	BlockDescription,
	withColors,
	ColorPalette,
	PanelColorSettings
} = wp.editor;

// Import Inspector components
const {
	withFallbackStyles,
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
	RadioControl
} = wp.components;

const { getComputedStyle } = window;

/**
 * Create an Inspector Controls wrapper Component
 */
class Inspector extends Component {
	constructor(props) {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			setAttributes,
			buttonTextColor,
			buttonBackgroundColor,
			setButtonTextColor,
			setButtonBackgroundColor,
			level,
			attributes: { heading, subheading, wrapper }
		} = this.props;

		// Update color values
		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={__("Heading Options", "covertnine-blocks")}
					initialOpen={false}
				>
					<PanelColorSettings
						title={__("Heading Class", "covertnine-blocks")}
						initialOpen={true}
					/>
					<HeadingToolbar minLevel={ 1 } maxLevel={ 7 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
