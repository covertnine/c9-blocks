// Import block dependencies and components
import classnames from "classnames";

import Inspector from "./components/inspector";
import CallToAction from "./components/cta";

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	RichText
} = wp.editor;

// Register components
const { IconButton, Dashicon } = wp.components;

// Components
const { __ } = wp.i18n;

export default class Edit extends Component {

    constructor() {
        super(...arguments);
    }

    layoutClass(ctaWidth, textOrButton) {
        if (ctaWidth == "two-thirds") {
            if (textOrButton == "text") {
                return "col-md-8";
            }
            return "col-md-4";
        } else if (ctaWidth == "three-quarters") {
            if (textOrButton == "text") {
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
				ctaTextFontSize,
				ctaWidth,
				ctaTextColor,
				ctaLayout
			},
			isSelected,
			setAttributes
		} = this.props;

		return (
			// Show the alignment toolbar on focus
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ctaWidth}
						onChange={ctaWidth => setAttributes({ ctaWidth })}
						controls={["center", "wide", "full"]}
					/>
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
								"c9-font-size-" + ctaTextFontSize
							)}
							style={{
								color: ctaTextColor
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
							formattingControls={[]}
							className={classnames(
								"wp-block-button__link",
								buttonShape,
								buttonSize
							)}
							style={{
								color: buttonTextColor,
								backgroundColor: buttonBackgroundColor
							}}
							onChange={value => setAttributes({ buttonText: value })}
						/>
						{isSelected && (
							<form
								key="form-link"
								className={`blocks-button__inline-link c9-button-${buttonAlignment}`}
								onSubmit={event => event.preventDefault()}
								style={{
									textAlign: buttonAlignment
								}}
							>
								<Dashicon icon={"admin-links"} />
								<URLInput
									className="button-url"
									value={buttonUrl}
									onChange={value => setAttributes({ buttonUrl: value })}
								/>
								<IconButton
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