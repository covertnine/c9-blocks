const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, InspectorControls } = wp.editor;
const { BaseControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { attributes, setAttributes } = this.props;

		const { buttonsAlign } = attributes;

		let align;
		if (buttonsAlign == "start") {
			align = "left";
		} else if (buttonsAlign == "end") {
			align = "right";
		} else {
			align = buttonsAlign;
		}

		return (
			<InspectorControls>
				<BaseControl label={__("Tabs Align")}>
					<AlignmentToolbar
						value={align}
						onChange={value => {
							if (value == "left") {
								setAttributes({ buttonsAlign: "start" });
							} else if (value == "right") {
								setAttributes({ buttonsAlign: "end" });
							} else {
								setAttributes({ buttonsAlign: value });
							}
						}}
						controls={["left", "center", "right"]}
					/>
				</BaseControl>
			</InspectorControls>
		);
	}
}
