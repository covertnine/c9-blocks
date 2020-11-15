/**
 * Internal dependencies
 */
import CustomHeading from "./components/custom-heading";
import Inspector from "./components/inspector";
import HeadingToolbar from "./components/heading-toolbar";
import SubheadingToolbar from "./components/subheading-toolbar";

/**
 * WordPress dependencies
 */
const { BlockControls, RichText, AlignmentToolbar } = wp.blockEditor;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * External Dependencies.
 */
import classnames from "classnames";

export default class Edit extends Component {
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
	c9TextStyleConfig(type, displayLevel, tagLevel, override) {
		if (!override && "c9-txl display-" != type) {
			return type.split(" ")[0];
		} else if (0 == displayLevel) {
			return `${type}${tagLevel}`;
		} else {
			return `${type}${displayLevel}`;
		}
	}

	render() {
		// Setup the attributes
		const {
			setAttributes,
			isCollapsed,
			isSelectedBlockInRoot,
			attributes: {
				heading,
				displayLevel,
				tagLevel,
				textAlign,
				backgroundColor,
				textColor,
				subTextColor,
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
					<SubheadingToolbar
						value={addSubheading}
						onChange={value => {
							setAttributes({ addSubheading: value });
						}}
					/>
				</BlockControls>
				<Inspector {...this.props} />
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
								if (0 == display) {
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
								style={{
									color: subTextColor
								}}
								keepPlaceholderOnFocus={true}
								value={subheading}
								onChange={value => setAttributes({ subheading: value })}
							/>
						</div>
					)}
				</CustomHeading>
				{isSelectedBlockInRoot && (
					<div className="c9-heading-size-selector">
						<HeadingToolbar
							minLevel={1}
							maxLevel={7}
							selectedLevel={tagLevel}
							onChange={newLevel => setAttributes({ tagLevel: newLevel })}
							isCollapsed={isCollapsed}
						/>
					</div>
				)}
			</Fragment>
		);
	}
}
