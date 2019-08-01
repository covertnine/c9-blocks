// External Dependencies.
import classnames from "classnames";

import CustomHeading from "./components/custom-heading";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	c9TextStyleConfig(type, display, tag, override) {
		if (!override) {
			return type.split(" ")[0];
		} else if (display == 0) {
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
				tagLevel,
				type,
				displayLevel,
				weight,
				textAlign,
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
							if (display == 0) {
								return `${type}${tag}`;
							} else {
								return `${type}${display}`;
							}
						})(type, displayLevel, tagLevel)}
					>
						<small className="text-muted">
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
