/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InspectorControls } = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<InspectorControls>
			</InspectorControls>
		);
	}
}
