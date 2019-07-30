const attributes = {
	tabActive: {
		type: "string",
		default: "tab-1"
	},
	buttonsAlign: {
		type: "string",
		default: "start"
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
	},
	ver: {
		type: "number"
	},
	tabBackgroundColor: {
		type: "string"
	},
	tabTextColor: {
		type: "string"
	},
	tabContentBackgroundColor: {
		type: "string"
	},
	verticalAlign: {
		type: "string"
	}
};

export default attributes;
