const { Icon } = wp.components;
const { withDispatch } = wp.data;
const { useState } = wp.element;
import HoverIntent from "react-hoverintent";

const LayoutButton = ({
	label,
	icon,
	description,
	preview,
	recommended,
	layout,
	resetBlocks,
	insertBlocks,
	open,
	close,
	onHover
}) => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	return (
		<button
			className={hovered ? "c9-layout-button c9-hovered" : "c9-layout-button"}
			onClick={() => {
				open();
				resetBlocks([]);
				setTimeout(() => {
					insertBlocks(layout);
					close();
				}, 0);
				onHover(null);
			}}
			onFocus={() => onHover(layout)}
			onMouseEnter={() => onHover(layout)}
			onMouseLeave={() => onHover(null)}
			onBlur={() => onHover(null)}
		>
			<HoverIntent
				onMouseOver={toggleHover}
				onMouseOut={toggleHover}
				onBlur={toggleHover}
				onFocus={toggleHover}
				sensitivity={10}
				interval={200}
				timeout={250}
			>
				<div className="c9-icon-and-about">
					{preview ? (
						<img src={preview} alt="layout preview"></img>
					) : (
						<Icon icon={icon} />
					)}
					<div className="c9-layout-button-content">
						<h3>{label}</h3>
						<p>{description}</p>
					</div>
				</div>
			</HoverIntent>
			<div className="c9-recommended">
				{recommended && (
					<p className="c9-includes">
						<strong>includes: </strong>
						{recommended}
					</p>
				)}
			</div>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { resetBlocks, insertBlocks } = dispatch("core/block-editor");

	return {
		resetBlocks,
		insertBlocks
	};
})(LayoutButton);
