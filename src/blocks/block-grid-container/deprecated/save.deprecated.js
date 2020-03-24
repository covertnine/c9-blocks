/**
 * Internal dependencies
 */
import Container from "./container.deprecated";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<Container {...this.props}>
				<InnerBlocks.Content />
			</Container>
		);
	}
}
