const attributes = {
	heading: {
		type: "string",
		source: "text",
		default: ""
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
		type: "int",
		default: 1
	},
	displayLevel: {
		type: "string",
		default: ""
	},
	type: {
		type: "string",
		default: ""
	},
	backgroundColor: {
		type: "string"
	},
	textColor: {
		type: "string"
	},
	textAlign: {
		type: "string",
		default: "left"
	},
	weight: {
		type: "string",
		default: "normal"
	}
};

export default attributes;
