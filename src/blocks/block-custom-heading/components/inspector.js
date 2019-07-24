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
const { PanelBody, SelectControl, ToggleControl } = wp.components;

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
				tagLevel,
				overrideStyle,
				addSubheading
			}
		} = this.props;

		const weightTypes = [
			{ value: undefined, label: __("Default", "c9-blocks") },
			{ value: "light", label: __("Light (300)", "c9-blocks") },
			{ value: "normal", label: __("Normal (400)", "c9-blocks") },
			{ value: "bold", label: __("Bold (700)", "c9-blocks") }
		];

		const fontTypes = [
			{ value: "c9-h h", label: __("Heading", "c9-blocks") },
			{
				value: "c9-sh subhead-h",
				label: __("Subheading", "c9-blocks")
			},
			{ value: "c9-txl display-", label: __("Text-XL", "c9-blocks") }
		];

		const sizeTypes = [
			{ value: "0", label: __("Same as Tag", "c9-blocks") },
			{ value: "1", label: __("H1", "c9-blocks") },
			{ value: "2", label: __("H2", "c9-blocks") },
			{ value: "3", label: __("H3", "c9-blocks") },
			{ value: "4", label: __("H4", "c9-blocks") },
			{ value: "5", label: __("H5", "c9-blocks") },
			{ value: "6", label: __("H6", "c9-blocks") }
		];

		// Update color values
		return (
			<InspectorControls key="inspector">
				<PanelBody title={__("Heading Options", "c9-blocks")}>
					<p>{__("Element Tag Type")}</p>
					<HeadingToolbar
						minLevel={1}
						maxLevel={7}
						selectedLevel={tagLevel}
						onChange={newLevel => setAttributes({ tagLevel: newLevel })}
					/>

					<hr />

					<SelectControl
						label={__("Font Type", "c9-blocks")}
						help={__("Choose between heading, subheading, or text-xl.")}
						options={fontTypes}
						value={type}
						onChange={value => setAttributes({ type: value })}
					/>

					<hr />

					<ToggleControl
						label={__("Override Base Tag Style", "c9-blocks")}
						checked={overrideStyle}
						onChange={value => setAttributes({ overrideStyle: value })}
					/>

					{overrideStyle && (
						<SelectControl
							label={__("Font Size", "c9-blocks")}
							help={__("Choose between different heading sizes.")}
							options={sizeTypes}
							value={displayLevel}
							onChange={newLevel => setAttributes({ displayLevel: newLevel })}
						/>
					)}
				</PanelBody>

				<PanelBody title={__("Text Settings", "c9-blocks")} initialOpen={false}>
					<SelectControl
						label={__("Font Weight", "c9-blocks")}
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

				<PanelBody
					title={__("Subheading Options", "c9-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Enable Additional Subheading", "c9-blocks")}
						checked={addSubheading}
						onChange={value => setAttributes({ addSubheading: value })}
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
