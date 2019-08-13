/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar } = wp.editor;
const { ContrastChecker } = wp.blockEditor;

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

		// Update color values
		return (
			<InspectorControls key="inspector">
				<PanelBody title={__("Card Options", "c9-blocks")} />

				<PanelColorSettings
					title={__("Color Settings", "c9-blocks")}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: value => setAttributes({ backgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						},
						{
							value: textColor,
							onChange: value => setAttributes({ textColor: value }),
							label: __("Text Color", "c9-blocks")
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
