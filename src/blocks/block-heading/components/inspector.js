/**
 * Internal dependencies
 */
import HeadingToolbar from "./heading-toolbar";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ContrastChecker, AlignmentToolbar } = wp.blockEditor;
const { InspectorControls, ColorPalette, PanelColorSettings } = wp.blockEditor;
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
				subTextColor,
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
			{ value: "", label: __("Same as Tag", "c9-blocks") },
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
				<PanelBody>
					<p className="components-base-control__label">
						{__("Subheading Options", "c9-blocks")}
					</p>
					<ToggleControl
						label={__("Enable Additional Subheading", "c9-blocks")}
						checked={addSubheading}
						onChange={value => setAttributes({ addSubheading: value })}
					/>
					{addSubheading && (
						<Fragment>
							<p className="components-base-control__label">
								{__("Subheading Colors", "c9-blocks")}
							</p>
							<ColorPalette
								value={subTextColor}
								onChange={subTextColor => setAttributes({ subTextColor })}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody>
					<p>{__("Element Tag Type", "c9-blocks")}</p>
					<HeadingToolbar
						isCollapsed={false}
						minLevel={1}
						maxLevel={7}
						selectedLevel={tagLevel}
						onChange={newLevel => setAttributes({ tagLevel: newLevel })}
					/>

					<hr />

					<SelectControl
						label={__("Font Type", "c9-blocks")}
						help={__(
							"Choose between heading, subheading, or text-xl.",
							"c9-blocks"
						)}
						options={fontTypes}
						value={type}
						onChange={value => setAttributes({ type: value })}
					/>

					<ToggleControl
						label={__("Override Base Tag Style", "c9-blocks")}
						checked={overrideStyle}
						onChange={value => setAttributes({ overrideStyle: value })}
					/>

					{overrideStyle && (
						<SelectControl
							label={__("Font Size", "c9-blocks")}
							help={__("Choose between different heading sizes.", "c9-blocks")}
							options={sizeTypes}
							value={displayLevel}
							onChange={newLevel => setAttributes({ displayLevel: newLevel })}
						/>
					)}
				</PanelBody>

				<PanelBody>
					<p className="components-base-control__label">
						{__("Text Settings", "c9-blocks")}
					</p>

					<p>{__("Text Alignment", "c9-blocks")}</p>
					<AlignmentToolbar
						value={textAlign}
						onChange={value => setAttributes({ textAlign: value })}
					/>

					<hr />

					<SelectControl
						label={__("Font Weight", "c9-blocks")}
						help={__("Choose between light, normal, or bold.", "c9-blocks")}
						options={weightTypes}
						value={weight}
						onChange={value => setAttributes({ weight: value })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Color Settings", "c9-blocks")}
					initialOpen={false}
					colorSettings={[
						{
							value: textColor,
							onChange: value => setAttributes({ textColor: value }),
							label: __("Text Color", "c9-blocks")
						},
						{
							value: backgroundColor,
							onChange: value => setAttributes({ backgroundColor: value }),
							label: __("Background Color", "c9-blocks")
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
