import SaveDeprecated from "./save.deprecated";
import attributes from "../attributes";

const Deprecated = [
	{
		attributes: {
			...attributes,
			slideMaxHeight: {
				type: "number",
				default: -1
			},
			slideEqualHeight: {
				type: "boolean",
				default: false
			}
		},
		save: props => {
			return <SaveDeprecated {...props} />;
		}
	}
];

export default Deprecated;
