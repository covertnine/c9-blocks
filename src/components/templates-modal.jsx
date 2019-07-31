const { Component } = wp.element;
const { Modal } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		return (
			<Modal {...this.props}>
				<p>Fill</p>
			</Modal>
		);
	}
}

const TemplatesModalWithSelect = compose([
	withDispatch(dispatch => {
		const { resetBlocks, insertBlocks } = dispatch("core/editor");
		return {
			resetBlocks,
			insertBlocks
		};
	})
])(TemplatesModal);

export { TemplatesModalWithSelect as TemplatesModal };
