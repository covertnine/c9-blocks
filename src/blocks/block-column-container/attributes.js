const attributes = {
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
		type: 'number',
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
		default: "container-fluid"
	},
	verticalAlign: {
		type: "string",
		default: "center"
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
		default: "20"
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
	focalPoint: {
		type: "object",
		default: {
			x: 0.5,
			y: 0.5
		}
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
