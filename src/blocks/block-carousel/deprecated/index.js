import SaveDeprecatedV1 from "./1.0/save.deprecated";
import SaveDeprecatedV2 from "./2.0/save.deprecated";
import SaveDeprecatedV3 from "./3.0/save.deprecated";
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
			return <SaveDeprecatedV1 {...props} />;
		}
	},
	{
		attributes,
		save: props => {
			return <SaveDeprecatedV2 {...props} />;
		}
	},
	{
		attributes,
		save: props => {
			return <SaveDeprecatedV3 {...props} />;
		}
	},
];

export default Deprecated;
