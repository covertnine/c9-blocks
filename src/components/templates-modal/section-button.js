const { Icon } = wp.components;
const { withDispatch } = wp.data;
const { decodeEntities } = wp.htmlEntities;

const SectionButton = ({
	label,
	icon,
	description,
	preview,
	section,
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
					insertBlocks(section);
					close();
				}, 0);
				onHover(null);
			}}
			onFocus={() => onHover(section)}
			onMouseEnter={() => onHover(section)}
			onMouseLeave={() => onHover(null)}
			onBlur={() => onHover(null)}
		>
			{preview ? (
				<div className="c9-section-preview">
					<img src={preview} alt="section preview"></img>
				</div>
			) : (
				<Icon icon={icon} />
			)}
			<span>{decodeEntities(label)}</span>
			<p className="c9-template-description">{decodeEntities(description)}</p>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { insertBlocks } = dispatch("core/block-editor");

	return {
		insertBlocks
	};
})(SectionButton);
