/**
 * WordPress dependencies
 */
const { Modal } = wp.components;

const LargeModal = props => (
	<Modal className="c9-templates-modal" position="top" size="lg" {...props}>
		{props.children}
	</Modal>
);

export default LargeModal;
