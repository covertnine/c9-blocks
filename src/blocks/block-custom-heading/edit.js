// External Dependencies.
import classnames from "classnames";

// Register editor components
const { AlignmentToolbar, BlockControls, RichText } = wp.editor;

// Extend component
const { Fragment } = wp.element;

// Components
import CustomHeading from "./components/custom-heading";
import Inspector from "./components/inspector";
import HeadingToolbar from "./components/heading-toolbar";
const { __ } = wp.i18n;

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class Edit extends Component {
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
			setAttributes,
			attributes: {
				heading,
				displayLevel,
				tagLevel,
				textAlign,
				backgroundColor,
				textColor,
				type,
				weight,
				overrideStyle
			}
		} = this.props;

		// Save the block markup for the front end
		return (
			<Fragment>
				<BlockControls>
					{/* <BlockAlignmentToolbar
					/> */}

					<AlignmentToolbar
						value={textAlign}
						onChange={value => setAttributes({ textAlign: value })}
					/>

					<HeadingToolbar
						minLevel={1}
						maxLevel={7}
						selectedLevel={tagLevel}
						onChange={newLevel => setAttributes({ tagLevel: newLevel })}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...this.props }} />
				<CustomHeading {...this.props}>
					<RichText
						tagName={`h${tagLevel}`}
						className={classnames([
							this.cortexTextStyleConfig(
								type,
								displayLevel,
								tagLevel,
								overrideStyle
							),
							`font-weight-${weight}`,
							`text-${textAlign}`
						])}
						style={{
							backgroundColor: backgroundColor,
							color: textColor
						}}
						keepPlaceholderOnFocus={true}
						placeholder={__("Write heading…")}
						value={heading}
						onChange={value => setAttributes({ heading: value })}
					/>
				</CustomHeading>
			</Fragment>
		);
	}
}
