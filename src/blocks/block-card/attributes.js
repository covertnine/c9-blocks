const attributes = {
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
	}
};

export default attributes;
