const { Icon } = wp.components;
const { withDispatch } = wp.data;

const SectionButton = ({ label, icon, section, insertBlocks }) => {
	return (
		<button
			onClick={() => {
                insertBlocks(section);
			}}
		>
			<Icon icon={icon} />
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
