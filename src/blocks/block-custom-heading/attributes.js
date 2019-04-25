const attributes = {
	heading: {
		type: "string",
		source: "text",
		default: "Heading Content Here"
	},
	subheading: {
		type: "string",
		source: "text",
		default: "Subheading Content Here"
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
	}
};

export default attributes;
