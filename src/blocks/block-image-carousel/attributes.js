/**
 * Block Attributes
 */
const attributes = {
	instanceId: {
		type: "number"
	},
	slides: {
		type: "number",
		default: 3
	},
	showControls: {
		type: "boolean",
		default: true
	},
	showIndicators: {
		type: "boolean",
		default: true
	},
	autoSlide: {
		type: "boolean",
		default: true
	},
	wrapAround: {
		type: "boolean",
		default: true
	},
	url: {
		type: "array",
		default: [null, null, null]
	},
	link: {
		type: "array",
		default: [null, null, null]
	},
	id: {
		type: "array",
		default: [null, null, null]
	},
	captionTitle: {
		type: "array",
		default: [null, null, null]
	},
	captionContent: {
		type: "array",
		default: [null, null, null]
	},
	slideTime: {
		type: "number",
		default: 5000
	},
	isResponsive: {
		type: "boolean",
		default: false
	},
	slideMaxHeight: {
		type: "number",
		default: 250
	},
	slideCustomHeight: {
		type: "boolean",
		default: false
	},
	verticalAlign: {
		type: "string"
	},
	align: {
		type: "string",
		default: ""
	},
	containerWidth: {
		type: "string",
		default: "container"
	},
	transitionType: {
		type: "string",
		default: "slide"
	},
	linkTarget: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "target"
	},
	rel: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "rel"
	}
};

export default attributes;
