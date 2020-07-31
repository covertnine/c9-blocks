/**
 * Block Attributes
 */
const attributes = {
	instanceId: {
		type: "number"
	},
	slides: {
		type: "number",
		default: undefined
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
	slideTime: {
		type: "number",
		default: 5000
	},
	slideMaxHeight: {
		type: "number",
		default: -1
	},
	slideEqualHeight: {
		type: "boolean",
		default: false
	},
	slideSizes: {
		type: "array",
		default: []
	},
	verticalAlign: {
		type: "string"
	}
};

export default attributes;
