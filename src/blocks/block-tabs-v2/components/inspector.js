const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar ,InspectorControls } = wp.editor;
const {
	BaseControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			setAttributes
		} = this.props;

		const { buttonsAlign } = attributes;

		return (
			<InspectorControls>
				<BaseControl label={__("Tabs Align")}>
					<AlignmentToolbar
						value={buttonsAlign}
						onChange={value => setAttributes({ buttonsAlign: value })}
						controls={["left", "center", "right"]}
					/>
				</BaseControl>
			</InspectorControls>
		);
	}
}
