/**
 * Internal dependencies
 */
import CustomHeading from "./components/custom-heading";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;

/**
 * External Dependencies.
 */
import classnames from "classnames";

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	/**
	 * Returns appropriate css class for given type, displayLevel, tagLevel, override values.
	 *
	 * @param {string} type Type of text - Heading, Subheading, Text-XL
	 * @param {number} displayLevel Custom tag level.
	 * @param {string} tagLevel Base tag level by default.
	 * @param {boolean} override Toggle between using just the base class or overriding the style.
	 *
	 * @return {string} Appropriate css class based on configuration.
	 */
	c9TextStyleConfig(type, display, tag, override) {
		if (!override && "c9-txl display-" != type) {
			return type.split(" ")[0];
		} else if (0 == display) {
			return `${type}${tag}`;
		} else {
			return `${type}${display}`;
		}
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				heading,
				subheading,
				textColor,
				subTextColor,
				tagLevel,
				type,
				displayLevel,
				weight,
				overrideStyle,
				addSubheading
			}
		} = this.props;

		// Save the block markup for the front end
		return (
			<CustomHeading {...this.props}>
				<RichText.Content
					tagName={`h${tagLevel}`}
					className={classnames([
						this.c9TextStyleConfig(type, displayLevel, tagLevel, overrideStyle),
						weight ? `font-weight-${weight}` : null
					])}
					style={{
						color: textColor
					}}
					value={heading}
				/>

				{addSubheading && (
					<div
						className={((type, display, tag) => {
							if (0 == display) {
								return `${type}${tag}`;
							} else {
								return `${type}${display}`;
							}
						})(type, displayLevel, tagLevel)}
					>
						<small className="text-muted" style={{ color: subTextColor }}>
							{subheading.startsWith("&nbsp;")
								? subheading
								: "&nbsp;" + subheading}
						</small>
					</div>
				)}
			</CustomHeading>
		);
	}
}
