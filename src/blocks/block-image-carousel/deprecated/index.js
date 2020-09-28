import SaveDeprecated from "./save.deprecated";
import attributes from "../attributes";

const Deprecated = [
	{
		attributes: attributes,
		save: props => {
			return <SaveDeprecated {...props} />;
		}
	}
];

export default Deprecated;
