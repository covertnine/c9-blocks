/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import CallToAction from "./components/cta";
import WidthToolbar from "../../components/width-toolbar";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { URLInput } = wp.blockEditor;
const { BlockControls, RichText, withFontSizes, AlignmentToolbar } = wp.blockEditor;
const { Button, Dashicon } = wp.components;
const { compose } = wp.compose;
const { __ } = wp.i18n;

/**
 * External Dependencies.
 */
import classnames from "classnames";

/**
 * Browser dependencies
 */
const { getComputedStyle } = window;
const querySelector = window.document.querySelector.bind(document);

const PARAGRAPH_DROP_CAP_SELECTOR = "p.has-drop-cap";

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			hideForm: false
		};
	}

	// DropCap effect adapted from
	// https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/paragraph/edit.js
	useDropCapMinimumHeight(isDropCap) {
		let minimumHeight;
		const element = querySelector(PARAGRAPH_DROP_CAP_SELECTOR);
		if (isDropCap && element) {
			minimumHeight = getComputedStyle(element, "first-letter").height;
		} else if (minimumHeight) {
			minimumHeight = undefined;
		}

		return minimumHeight;
	}

	/**
	 * Returns appropriate css class for given width and text/button option.
	 *
	 * @param {string} ctaWidth Wideness of given field.
	 * @param {string} textOrButton Choice of text or button.
	 *
	 * @return {string} Appropriate css class based on configuration.
	 */
	layoutClass(ctaWidth, textOrButton) {
		if ("two-thirds" == ctaWidth) {
			if ("text" == textOrButton) {
				return "col-md-8";
			}
			return "col-md-4";
		} else if ("three-quarters" == ctaWidth) {
			if ("text" == textOrButton) {
				return "col-md-9";
			}
			return "col-md-3";
		}
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				ctaText,
				ctaWidth,
				ctaTextColor,
				ctaLayout,
				dropCap,
				align,
				type,
				disableToolbar
			},
			isSelectedBlockInRoot,
			setAttributes,
			fontSize
		} = this.props;

		const dropCapMinimumHeight = this.useDropCapMinimumHeight(dropCap);

		let currWidth;
		if (0 != align.length) {
			if ("container" == ctaWidth) {
				currWidth = "wide";
			} else if ("container-fluid" == ctaWidth) {
				currWidth = "full";
			} else {
				currWidth = "narrow";
			}
		}

		return (
			// Show the alignment toolbar on focus
			<Fragment>
				<BlockControls>
					{!disableToolbar && (
						<WidthToolbar
							value={currWidth}
							onChange={value => {
								if ("wide" == value) {
									setAttributes({ ctaWidth: "container", align: "wide" });
								} else if ("full" == value) {
									setAttributes({
										ctaWidth: "container-fluid",
										align: "full"
									});
								} else if ("narrow" == value) {
									setAttributes({
										ctaWidth: "container-narrow",
										align: "narrow"
									});
								} else {
									setAttributes({ ctaWidth: "container", align: "" });
								}
							}}
						/>
					)}
					<AlignmentToolbar
						value={buttonAlignment}
						onChange={value => {
							setAttributes({ buttonAlignment: value });
						}}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...this.props }} />
				<CallToAction {...this.props}>
					<div
						className={
							"c9-cta-content col-12 " + this.layoutClass(ctaLayout, "text")
						}
					>
						<RichText
							tagName="div"
							multiline="p"
							placeholder={__("Call To Action Text", "c9-blocks")}
							keepPlaceholderOnFocus
							value={ctaText}
							className={classnames(
								this.layoutClass(ctaLayout, "text"),
								"c9-cta-text",
								type,
								{
									"has-drop-cap": dropCap,
									[fontSize.class]: fontSize.class
								}
							)}
							style={{
								fontSize: fontSize.size ? fontSize.size + "px" : undefined,
								color: ctaTextColor,
								minHeight: dropCapMinimumHeight
							}}
							onChange={value => setAttributes({ ctaText: value })}
						/>
					</div>
					<div
						className={
							"c9-cta-content col-12 " + this.layoutClass(ctaLayout, "button")
						}
					>
						<RichText
							tagName="a"
							placeholder={__("Button text...", "c9-blocks")}
							keepPlaceholderOnFocus={true}
							value={buttonText}
							allowedFormats={[]}
							className={classnames(
								"wp-block-button__link",
								`c9-button-shape-${buttonShape}`,
								buttonSize
							)}
							style={{
								color: buttonTextColor,
								backgroundColor: buttonBackgroundColor
							}}
							onChange={value => setAttributes({ buttonText: value })}
						/>
						{isSelectedBlockInRoot && (
							<Button
								className="c9-cta-reveal-anchor"
								onClick={() =>
									this.setState({ hideForm: !this.state.hideForm })
								}
							>
								<Dashicon icon={"admin-links"} />
							</Button>
						)}
						{isSelectedBlockInRoot && !this.state.hideForm && (
							<form
								key="form-link"
								className={`blocks-button__inline-link c9-button-${buttonAlignment}`}
								onSubmit={event => event.preventDefault()}
								style={{
									textAlign: buttonAlignment
								}}
							>
								<URLInput
									className="button-url"
									value={buttonUrl}
									onChange={value => setAttributes({ buttonUrl: value })}
								/>
								<Button
									icon="editor-break"
									label={__("Apply", "c9-blocks")}
									type="submit"
								/>
							</form>
						)}
					</div>
				</CallToAction>
			</Fragment>
		);
	}
}

const CtaEdit = compose([withFontSizes("fontSize")])(Edit);

export default CtaEdit;
