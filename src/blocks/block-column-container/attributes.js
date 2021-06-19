/**
 * Block Attributes
 */
const attributes = {
	align: {
		type: "string",
		default: ""
	},
	columns: {
		type: "number"
	},
	columnMaxWidth: {
		type: "number"
	},
	centerColumns: {
		type: "boolean",
		default: true
	},
	columnsGap: {
		type: "number",
		default: 2
	},
	responsiveToggle: {
		type: "boolean",
		default: true
	},
	layout: {
		type: "string"
	},
	containerWidth: {
		type: "string",
		default: "container"
	},
	verticalAlign: {
		type: "string"
	},
	containerImgURL: {
		type: "string"
	},
	bgImgSize: {
		type: "string",
		default: "cover"
	},
	bgCustomX: {
		type: "object",
		default: {
			size: "auto",
			unit: "px"
		}
	},
	bgCustomY: {
		type: "object",
		default: {
			size: "auto",
			unit: "px"
		}
	},
	bgImgRepeat: {
		type: "string",
		default: "no-repeat"
	},
	// true evaluates to backgroundAttachment scroll, false to fixed
	bgImgAttach: {
		type: "boolean",
		default: false
	},
	overlayHue: {
		type: "string",
		default: undefined
	},
	overlayOpacity: {
		type: "number",
		default: "5"
	},
	blendMode: {
		type: "string",
		default: "overlay"
	},
	linkedValToggle: {
		type: "boolean",
		default: true
	},
	minScreenHeight: {
		type: "number",
		default: 10
	},
	containerMargin: {
		type: "object",
		default: {
			linked: true,
			icon: "admin-links",
			top: "-1",
			bottom: "-1"
		}
	},
	containerPadding: {
		type: "object",
		default: {
			linked: true,
			icon: "admin-links",
			top: "-1",
			bottom: "-1",
			left: "-1",
			right: "-1"
		}
	},
	containerHue: {
		type: "string",
		default: undefined
	},
	containerOpacity: {
		type: "number",
		default: 10
	},
	focalPoint: {
		type: "object",
		default: {
			x: 0.5,
			y: 0.5
		}
	},
	bgImgSizeMobile: {
		type: "string",
		default: "cover"
	},
	focalPointMobile: {
		type: "object",
		default: {
			x: 0.5,
			y: 0.5
		}
	},
	overrideMobile: {
		type: "boolean",
		default: false
	},
	bgCustomXMobile: {
		type: "object",
		default: {
			size: "auto",
			unit: "px"
		}
	},
	bgCustomYMobile: {
		type: "object",
		default: {
			size: "auto",
			unit: "px"
		}
	},
	flipColumnsMobile: {
		type: "boolean",
		default: false
	},
};

export default attributes;
