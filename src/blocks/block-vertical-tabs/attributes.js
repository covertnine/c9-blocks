/**
 * Block Attributes
 */
const attributes = {
	tabActive: {
		type: "string",
		default: "tab-1"
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
	instanceId: {
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
	blockBackgroundColor: {
		type: "string"
	},
	verticalAlign: {
		type: "string"
	},
	textAlign: {
		type: "string"
	}
};

export default attributes;
