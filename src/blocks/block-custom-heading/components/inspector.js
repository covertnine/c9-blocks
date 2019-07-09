/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar } = wp.editor;
const { ContrastChecker } = wp.blockEditor;

import HeadingToolbar from "./heading-toolbar";

// Import block components
const { InspectorControls, PanelColorSettings } = wp.editor;

// Import Inspector components
const { PanelBody, SelectControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			setAttributes,
			attributes: {
				displayLevel,
				textAlign,
				type,
				weight,
				backgroundColor,
				textColor,
				tagLevel
			}
		} = this.props;

		const weightTypes = [
			{ value: "light", label: __("Light (300)", "covertnine-blocks") },
			{ value: "normal", label: __("Normal (400)", "covertnine-blocks") },
			{ value: "bold", label: __("Bold (700)", "covertnine-blocks") }
		];

		const fontTypes = [
			{ value: "h", label: __("Heading", "covertnine-blocks") },
			{ value: "subhead subhead-h", label: __("Subheading", "covertnine-blocks") },
			{ value: "display-", label: __("Text-XL", "covertnine-blocks") }
		];

		const tagTypes = [
			{ value: 1, label: __("H1", "covertnine-blocks") },
			{ value: 2, label: __("H2", "covertnine-blocks") },
			{ value: 3, label: __("H3", "covertnine-blocks") },
			{ value: 4, label: __("H4", "covertnine-blocks") },
			{ value: 5, label: __("H5", "covertnine-blocks") },
			{ value: 6, label: __("H6", "covertnine-blocks") }
		];

		// Update color values
		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={__("Heading Options", "covertnine-blocks")}
				>
					<SelectControl
						label={__("Element Tag Type", "covertnine-blocks")}
						help={__("Choose between different heading tags.")}
						options={tagTypes}
						value={tagLevel}
						onChange={value => setAttributes({ tagLevel: value })}
					/>

					<hr />

					<SelectControl
						label={__("Font Text Type", "covertnine-blocks")}
						help={__("Choose between heading, subheading, or text-xl.")}
						options={fontTypes}
						value={type}
						onChange={value => setAttributes({ type: value })}
					/>

					<hr />

					<p>{__("Font Size")}</p>
					<HeadingToolbar
						minLevel={1}
						maxLevel={7}
						selectedLevel={displayLevel}
						onChange={newLevel => setAttributes({ displayLevel: newLevel })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Text Settings", "covertnine-blocks")}
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
