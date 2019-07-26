const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, InspectorControls, PanelColorSettings } = wp.editor;
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
			buttonsAlign,
			tabBackgroundColor,
			tabTextColor,
			tabContentBackgroundColor
		} = attributes;

		return (
			<InspectorControls>
				<BaseControl label={__("Tabs Align")}>
					<AlignmentToolbar
						value={buttonsAlign}
						onChange={value => setAttributes({ buttonsAlign: value })}
						controls={["left", "center", "right"]}
					/>
				</BaseControl>
				<PanelColorSettings
					title={__("Tab Color Settings")}
					initialOpen={false}
					colorSettings={[
						{
							value: tabBackgroundColor,
							onChange: value => setAttributes({ tabBackgroundColor: value }),
							label: __("Background Color")
						},
						{
							value: tabTextColor,
							onChange: value => setAttributes({ tabTextColor: value }),
							label: __("Text Color")
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
					title={__("Tab Content Color Settings")}
					initialOpen={false}
					colorSettings={[
						{
							value: tabContentBackgroundColor,
							onChange: value =>
								setAttributes({ tabContentBackgroundColor: value }),
							label: __("Background Color")
						}
					]}
				>
					<ContrastChecker
						{...{
							backgroundColor: tabContentBackgroundColor,
							fallbackTextColor: "black",
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
			</InspectorControls>
		);
	}
}
