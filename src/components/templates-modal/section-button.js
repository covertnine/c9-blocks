const { Icon } = wp.components;
const { withDispatch } = wp.data;

const SectionButton = ({
	label,
	icon,
	preview,
	section,
	insertBlocks,
	close
}) => {
	return (
		<button
			onClick={() => {
				insertBlocks(section);
				close();
			}}
		>
			{preview ? (
				<div class="c9-section-preview">
					<img src={preview} alt="section preview"></img>
				</div>
			) : (
				<Icon icon={icon} />
			)}
			<span>{label}</span>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { insertBlocks } = dispatch("core/editor");

	return {
		insertBlocks
	};
})(SectionButton);
