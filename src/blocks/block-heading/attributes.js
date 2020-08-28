/**
 * Block Attributes
 */
const attributes = {
	isCollapsed: {
		type: "boolean",
		default: false
	},
	heading: {
		type: "string",
		default: ""
	},
	subheading: {
		type: "string",
		default: ""
	},
	addSubheading: {
		type: "boolean",
		default: false
	},
	wrapper: {
		type: "array",
		source: "query",
		selector: ".section-heading",
		query: {
			class: {
				type: "string",
				source: "attribute",
				attribute: "class"
			}
		}
	},
	tagLevel: {
		type: "number",
		default: 1
	},
	displayLevel: {
		type: "string",
		default: ""
	},
	type: {
		type: "string",
		default: "c9-h h"
	},
	backgroundColor: {
		type: "string"
	},
	textColor: {
		type: "string"
	},
	subTextColor: {
		type: "string"
	},
	textAlign: {
		type: "string",
		default: "left"
	},
	weight: {
		type: "string"
	},
	overrideStyle: {
		type: "boolean",
		default: false
	},
	enableAnimate: {
		type: "",
		default: false
	},
	animateVal: {
		type: "string",
		default: "spin"
	},
	animateDelay: {
		type: "number",
		default: 0
	},
	animateSpeed: {
		type: "number",
		default: 2000
	}
};

export default attributes;
