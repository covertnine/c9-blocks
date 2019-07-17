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

		return (
			<InspectorControls>
			</InspectorControls>
		);
	}
}
