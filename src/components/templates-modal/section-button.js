const { Icon } = wp.components;
const { withDispatch } = wp.data;

const SectionButton = ({ label, icon, section, insertBlocks, close }) => {
	return (
		<button
			onClick={() => {
				insertBlocks(section);
				close();
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
