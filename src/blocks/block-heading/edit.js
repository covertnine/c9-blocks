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
import SubheadingToolbar from "./components/subheading-toolbar";
const { __ } = wp.i18n;

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class Edit extends Component {
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
				overrideStyle,
				subheading,
				addSubheading
			}
		} = this.props;

		// Save the block markup for the front end
		return (
			<Fragment>
				<BlockControls>
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
					<SubheadingToolbar
						value={addSubheading}
						onChange={value => {
							setAttributes({ addSubheading: value });
						}}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...this.props }} />
				<CustomHeading {...this.props}>
					<RichText
						tagName={`h${tagLevel}`}
						className={classnames([
							this.c9TextStyleConfig(
								type,
								displayLevel,
								tagLevel,
								overrideStyle
							),
							weight ? `font-weight-${weight}` : null
						])}
						style={{
							backgroundColor: backgroundColor,
							color: textColor
						}}
						keepPlaceholderOnFocus={true}
						placeholder={__("Write heading…", "c9-blocks")}
						value={heading}
						onChange={value => setAttributes({ heading: value })}
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
							<RichText
								tagName="small"
								className="text-muted"
								placeholder={__("Write subheading…", "c9-blocks")}
								value={subheading}
								onChange={value => setAttributes({ subheading: value })}
							/>
						</div>
					)}
				</CustomHeading>
			</Fragment>
		);
	}
}
