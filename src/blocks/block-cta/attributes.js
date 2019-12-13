/**
 * Block Attributes
 */

const attributes = {
	type: {
		type: "string",
		value: "c9-p"
	},
	buttonText: {
		type: "string"
	},
	buttonUrl: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "href"
	},
	buttonAlignment: {
		type: "string",
		default: "left"
	},
	buttonBackgroundColor: {
		type: "string"
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff"
	},
	buttonSize: {
		type: "string",
		default: "c9-button-size-medium"
	},
	buttonShape: {
		type: "string",
		default: "square"
	},
	buttonTarget: {
		type: "boolean",
		default: false
	},
	blendMode: {
		type: "string",
		default: "overlay"
	},
	ctaTitle: {
		type: "array",
		selector: ".c9-cta-title",
		source: "children"
	},
	ctaLayout: {
		type: "string",
		default: "two-thirds"
	},
	ctaMargin: {
		type: "object",
		default: {
			linked: true,
			icon: "admin-links",
			unit: "px",
			top: "-1",
			bottom: "-1"
		}
	},
	ctaPadding: {
		type: "object",
		default: {
			linked: true,
			icon: "admin-links",
			top: "5",
			bottom: "5",
			left: "5",
			right: "5"
		}
	},
	ctaTextFontSize: {
		type: "number"
	},
	ctaText: {
		type: "array",
		selector: ".c9-cta-text",
		source: "children"
	},
	ctaWidth: {
		type: "string",
		default: "container"
	},
	ctaBackgroundColor: {
		type: "string"
	},
	ctaBackgroundOpacity: {
		type: "number",
		default: 10
	},
	ctaTextColor: {
		type: "string"
	},
	imgURL: {
		type: "string",
		source: "attribute",
		attribute: "src",
		selector: "img"
	},
	imgID: {
		type: "number"
	},
	imgAlt: {
		type: "string",
		source: "attribute",
		attribute: "alt",
		selector: "img"
	},
	imgSize: {
		type: "string",
		default: "cover"
	},
	focalPoint: {
		type: "object",
		default: {
			x: 0.5,
			y: 0.5
		}
	},
	// true evaluates to backgroundAttachment fixed, false to scroll
	imgAttach: {
		type: "boolean",
		default: false
	},
	// Deprecated
	ctaTitleFontSize: {
		type: "string",
		default: "32"
	},
	align: {
		type: "string",
		default: ""
	},
	disableToolbar: {
		type: "boolean",
		default: false
	},
	fontSize: {
		type: "string"
	},
	customFontSize: {
		type: "number"
	},
	dropCap: {
		type: "boolean",
		default: false
	},
};

export default attributes;
