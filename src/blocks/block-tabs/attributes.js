const attributes = {
	tabActive: {
		type: "string",
		default: "tab-1"
	},
	buttonsAlign: {
		type: "string",
		default: "left"
	},
	tabsData: {
		type: "array",
		default: [
			{
				slug: "tab-1",
				title: "Tab 1"
			},
			{
				slug: "tab-2",
				title: "Tab 2"
			}
		]
	}
};

export default attributes;
