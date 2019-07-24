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

	cortexTextStyleConfig(type, display, tag, override) {
		if (!override) {
			return "";
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
						this.cortexTextStyleConfig(
							type,
							displayLevel,
							tagLevel,
							overrideStyle
						),
						weight ? `font-weight-${weight}` : null,
						textAlign ? `text-${textAlign}` : "text-left"
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
