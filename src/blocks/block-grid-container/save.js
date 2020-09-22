/**
 * Internal dependencies
 */
import ResizableContainer from "./components/resizable-container";

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
			<ResizableContainer {...this.props}>
				<InnerBlocks.Content />
			</ResizableContainer>
		);
	}
}
