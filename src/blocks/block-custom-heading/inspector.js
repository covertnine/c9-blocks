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
	PanelColorSettings
} = wp.editor;

// Import Inspector components
const {
	PanelBody,
	SelectControl,
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
			attributes: {
				heading,
				subheading,
				wrapper,
				level,
				textAlign,
				type,
				weight,
				backgroundColor,
				textColor
			}
		} = this.props;

		const weightTypes = [
			{ value: "light", label: __("Light (300)", "covertnine-blocks") },
			{ value: "normal", label: __("Normal (400)", "covertnine-blocks") },
			{ value: "bold", label: __("Bold (700)", "covertnine-blocks") }
		];

		const fontTypes = [
			{ value: "display-", label: __("Display", "covertnine-blocks") },
			{ value: "h", label: __("Heading", "covertnine-blocks") },
			{ value: "", label: __("Body", "covertnine-blocks") }
		];

		let maxLevel = 7;
		if (type != "h") {
			maxLevel = 5;
		}

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

					<SelectControl
						label={__("Font Type", "covertnine-blocks")}
						help={__("Choose between heading, display, or body.")}
						options={fontTypes}
						value={type}
						onChange={value => setAttributes({ type: value })}
					/>

					<hr />

					{!!type && (
						<div>
							<p>{__("Font Size")}</p>
							<HeadingToolbar
								minLevel={1}
								maxLevel={maxLevel}
								selectedLevel={level}
								type={type}
								onChange={newLevel => setAttributes({ level: newLevel })}
							/>
						</div>
					)}

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
							value: backgroundColor,
							onChange: value => setAttributes({ backgroundColor: value }),
							label: __("Background Color")
						},
						{
							value: textColor,
							onChange: value => setAttributes({ textColor: value }),
							label: __("Text Color")
						}
					]}
				>
					<ContrastChecker
						{...{
							textColor: textColor,
							backgroundColor: backgroundColor,
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
