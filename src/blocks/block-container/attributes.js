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
		type: "boolean",
		default: true
	},
	// true evaluates to backgroundAttachment scroll, false to fixed
	bgImgAttach: {
		type: "boolen",
		default: true
	},
	overlayHue: {
		type: "string",
		default: undefined
	},
	overlayOpacity: {
		type: "number",
		default: "5"
	},
	bgImgPosX: {
		type: "number",
		default: "5"
	},
	bgImgPosY: {
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
			// 'linked': true,
			// 'unit': 'px',
			// 'top': '25',
			// 'bottom': '25',
			// 'left': '25',
			// 'right': '25',
		}
	}
};

export default attributes;
