const { Icon } = wp.components;
const { withDispatch } = wp.data;
const { decodeEntities } = wp.htmlEntities;

const SectionButton = ({
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
			{preview ? (
				<div className="c9-section-preview">
					<img src={preview} alt="section preview"></img>
				</div>
			) : (
				<Icon icon={icon} />
			)}
			<span>{decodeEntities(label)}</span>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { insertBlocks } = dispatch("core/editor");

	return {
		insertBlocks
	};
})(SectionButton);
