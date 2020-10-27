const { BlockIcon } = wp.blockEditor;
const { withDispatch } = wp.data;

const ReusableButton = ({
	label,
	icon,
	reusable,
	insertBlocks,
	open,
	close,
	onHover
}) => {
	return (
		<button
			onClick={() => {
				open();
				setTimeout(() => {
					insertBlocks(reusable);
					close();
				}, 0);
				onHover(null);
			}}
			onFocus={() => onHover(reusable)}
			onMouseEnter={() => onHover(reusable)}
			onMouseLeave={() => onHover(null)}
			onBlur={() => onHover(null)}
		>
			<BlockIcon icon={icon} />
			<span className="c9-reusable-label">{label}</span>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { insertBlocks } = dispatch("core/block-editor");

	return {
		insertBlocks
	};
})(ReusableButton);
