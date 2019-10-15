const { BlockIcon } = wp.blockEditor;
const { withDispatch } = wp.data;

const ReusableButton = ({
	label,
	icon,
	preview,
	section,
	insertBlocks,
	open,
	close
}) => {
	return (
		<button
			onClick={() => {
				open();
				setTimeout(() => {
					insertBlocks(section);
					close();
				}, 0);
			}}
		>
			<BlockIcon icon={icon} />
			<span className="c9-reusable-label">{label}</span>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { insertBlocks } = dispatch("core/editor");

	return {
		insertBlocks
	};
})(ReusableButton);
