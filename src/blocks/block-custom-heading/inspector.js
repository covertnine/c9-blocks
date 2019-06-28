/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar } = wp.editor;
const { ContrastChecker } = wp.blockEditor;

const { compose } = wp.compose;

import HeadingToolbar from "./heading-toolbar";

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
			attributes: { heading, subheading, wrapper, level, textAlign, weight, color }
		} = this.props;

		const weightTypes = [
			{ value: "light", label: __("Light (300)", "covertnine-blocks") },
			{ value: "normal", label: __("Normal (400)", "covertnine-blocks") },
			{ value: "bold", label: __("Bold (700)", "covertnine-blocks") }
		];

		// Update color values
		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={__("Heading Options", "covertnine-blocks")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Font Weight", "covertnine-blocks")}
						help={__("Choose between light, normal, or bold.")}
						options={weightTypes}
						value={weight}
						onChange={value => setAttributes({ weight: value })}
					/>

					<hr />

					<p>{__("Font Size")}</p>
					<HeadingToolbar
						minLevel={1}
						maxLevel={7}
						selectedLevel={level}
						onChange={newLevel => setAttributes({ level: newLevel })}
					/>

					<p>{__("Text Alignment")}</p>
					<AlignmentToolbar
						value={textAlign}
						onChange={value => setAttributes({ textAlign: value })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Color Settings")}
					initialOpen={false}
					colorSettings={[
						{
							value: color.backgroundColor,
							onChange: (value) => console.log(value),
							label: __("Background Color")
						},
						{
							value: color.textColor,
							onChange: (value) => console.log(value),
							label: __("Text Color")
						}
					]}
				>
					<ContrastChecker
						{...{
							textColor: color.textColor,
							backgroundColor: color.backgroundColor,
							fallbackTextColor: "black",
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
			</InspectorControls>
		);
	}
}

export default Inspector;
