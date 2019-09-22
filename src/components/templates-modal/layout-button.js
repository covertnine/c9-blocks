const { Icon } = wp.components;
const { withDispatch } = wp.data;

const LayoutButton = ({
	label,
	icon,
	preview,
	layout,
	resetBlocks,
	insertBlocks
}) => {
	return (
		<button
			onClick={() => {
				resetBlocks([]);
				insertBlocks(layout);
			}}
		>
			{preview ? (
				<img src={preview} alt="layout preview"></img>
			) : (
				<Icon icon={icon} />
			)}
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
