/**
 * Internal dependencies
 */
const { updateCategory } = wp.blocks;

/**
 * Icon
 */
// import C9CategoryIcon from "../assets/c9-feather-logo-icon.svg";

// if (updateCategory) {
// 	updateCategory("covertnine-blocks", {
// 		icon: <C9CategoryIcon className="components-panel__icon" />
// 	});
// }

const { createElement } = wp.element;
const { SVG } = wp.components;

var circle = createElement("circle", {
	cx: 10,
	cy: 10,
	r: 10,
	fill: "red",
	stroke: "blue",
	strokeWidth: "10"
});
var svgIcon = createElement(
	SVG,
	{ width: 20, height: 20, viewBox: "0 0 20 20" },
	circle
);
updateCategory("my-category", { icon: svgIcon });
