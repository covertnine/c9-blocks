/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, AlignmentToolbar, PanelColorSettings } = wp.blockEditor;
const { BaseControl } = wp.components;
const { ContrastChecker } = wp.blockEditor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { attributes, setAttributes } = this.props;

		const {
			textAlign,
			tabBackgroundColor,
			tabTextColor,
			tabContentBackgroundColor,
			blockBackgroundColor
		} = attributes;

		return (
			<InspectorControls>
				<BaseControl label={__("Tabs Align", "c9-blocks")}>
					<AlignmentToolbar
						value={textAlign}
						onChange={value => setAttributes({ textAlign: value })}
						controls={["left", "center", "right"]}
					/>
				</BaseControl>
				<PanelColorSettings
					title={__("Block Color Settings", "c9-blocks")}
					initialOpen={true}
					colorSettings={[
						{
							value: blockBackgroundColor,
							onChange: value => setAttributes({ blockBackgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							backgroundColor: blockBackgroundColor,
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__("Tab Color Settings", "c9-blocks")}
					initialOpen={false}
					colorSettings={[
						{
							value: tabBackgroundColor,
							onChange: value => setAttributes({ tabBackgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						},
						{
							value: tabTextColor,
							onChange: value => setAttributes({ tabTextColor: value }),
							label: __("Text Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							textColor: tabTextColor,
							backgroundColor: tabBackgroundColor,
							fallbackTextColor: "black",
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__("Tab Content Color Settings", "c9-blocks")}
					initialOpen={false}
					colorSettings={[
						{
							value: tabContentBackgroundColor,
							onChange: value =>
								setAttributes({ tabContentBackgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							backgroundColor: tabContentBackgroundColor,
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
			</InspectorControls>
		);
	}
}
