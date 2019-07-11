const attributes = {
	columns: {
		type: "number",
		default: 1
	},
	containerWidth: {
		type: "string",
		default: "container"
	},
	verticalAlign: {
		type: "string",
		default: "center"
	},
	containerImgURL: {
		type: "string"
	},
	// true evaluates to backgroundSize cover, false to backgroundSize contain
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
		default: "60"
	},
	containerMargin: {
		type: "object",
		default: {
			linked: true,
			unit: "px",
			top: "25",
			bottom: "25",
			left: "25",
			right: "25"
		}
	},
	containerPadding: {
		type: "object",
		default: {
			linked: true,
			icon: "admin-links",
			unit: "px",
			top: "25",
			bottom: "25",
			left: "25",
			right: "25"
		}
	},
	focalPoint: {
		type: "object",
		default: undefined
	},
	videoType: {
		type: "string",
		default: "upload"
	},
	containerVideoURL: {
		type: "string",
		default: ""
	},
	containerVideoID: {
		type: "string",
		default: ""
	},
	cannotEmbed: {
		type: "boolean",
		default: false
	}
};

export default attributes;
