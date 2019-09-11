const { Icon } = wp.components;
const { withDispatch } = wp.data;

const LayoutButton = ({ label, icon, layout, resetBlocks, insertBlocks, close }) => {
	return (
		<button
			onClick={() => {
                resetBlocks([]);
				insertBlocks(layout);
				close();
			}}
		>
			<Icon icon={icon} />
			<span>{label}</span>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { resetBlocks, insertBlocks } = dispatch("core/editor");

	return {
		resetBlocks,
		insertBlocks
	};
})(LayoutButton);
