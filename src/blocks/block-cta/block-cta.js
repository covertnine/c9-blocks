/**
 * BLOCK: Atomic Blocks Call-To-Action
 */

// Import block dependencies and components
import classnames from "classnames";
import Inspector from "./components/inspector";
import CallToAction from "./components/cta";

// Deprecated components
import deprecated from "./deprecated/deprecated";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Import Icon
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { makeIcon } from "../../helpers/awesomeGenerator";
const iconEl = makeIcon(faExclamationCircle);

// Components
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

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

import blockAttributes from "./attributes";

class C9CTABlock extends Component {
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
				imgURL,
				imgAlt,
				dimRatio,
				ctaLayout
			},
			isSelected,
			setAttributes
		} = this.props;

		const onSelectImage = img => {
			setAttributes({
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt
			});
		};

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
					{imgURL && !!imgURL.length && (
						<div className="c9-cta-image-wrap">
							<img
								className={classnames(
									"c9-cta-image",
									dimRatioToClass(dimRatio),
									{
										"has-background-dim": dimRatio !== 0
									}
								)}
								src={imgURL}
								alt={imgAlt}
							/>
						</div>
					)}

					<div
						className={
							"ab-cta-content col-12 " + layoutClass(ctaLayout, "text")
						}
					>
						<RichText
							tagName="div"
							multiline="p"
							placeholder={__("Call To Action Text", "c9-blocks")}
							keepPlaceholderOnFocus
							value={ctaText}
							className={classnames(
								layoutClass(ctaLayout, "text"),
								"ab-cta-text",
								"ab-font-size-" + ctaTextFontSize
							)}
							style={{
								color: ctaTextColor
							}}
							onChange={value => setAttributes({ ctaText: value })}
						/>
					</div>
					<div
						className={
							"ab-cta-content col-12 " + layoutClass(ctaLayout, "button")
						}
					>
						<RichText
							tagName="a"
							placeholder={__("Button text...", "c9-blocks")}
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
								className={`blocks-button__inline-link ab-button-${buttonAlignment}`}
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

// Register the block
registerBlockType("c9-blocks/c9-cta", {
	title: __("C9 Call To Action", "c9-blocks"),
	description: __(
		"Add a call to action section with text and a button.",
		"c9-blocks"
	),
	icon: iconEl,
	category: "c9-blocks",
	keywords: [
		__("call to action", "c9-blocks"),
		__("cta", "c9-blocks"),
		__("atomic", "c9-blocks")
	],

	attributes: blockAttributes,

	getEditWrapperProps({ ctaWidth }) {
		if ("left" === ctaWidth || "right" === ctaWidth || "full" === ctaWidth) {
			return { "data-align": ctaWidth };
		}
	},

	edit: C9CTABlock,

	// Save the attributes and markup
	save: function saveCta(props) {
		// Setup the attributes
		const {
			buttonText,
			buttonUrl,
			buttonAlignment,
			buttonBackgroundColor,
			buttonTextColor,
			buttonSize,
			buttonShape,
			buttonTarget,
			ctaTitle,
			ctaText,
			ctaTitleFontSize,
			titleFontSize,
			ctaTextFontSize,
			ctaWidth,
			ctaBackgroundColor,
			ctaTextColor,
			imgURL,
			imgID,
			imgAlt,
			dimRatio,
			ctaLayout
		} = props.attributes;

		// Save the block markup for the front end
		return (
			<CallToAction {...props}>
				{imgURL && !!imgURL.length && (
					<div className="c9-cta-image-wrap">
						<img
							className={classnames("c9-cta-image", dimRatioToClass(dimRatio), {
								"has-background-dim": dimRatio !== 0
							})}
							src={imgURL}
							alt={imgAlt}
						/>
					</div>
				)}

				<div
					className={"ab-cta-content col-12 " + layoutClass(ctaLayout, "text")}
				>
					{ctaText && (
						<RichText.Content
							tagName="div"
							className={classnames(
								"ab-cta-text",
								"ab-font-size-" + ctaTitleFontSize
							)}
							style={{
								color: ctaTextColor
							}}
							value={ctaText}
						/>
					)}
				</div>
				{buttonText && (
					<div
						className={
							"ab-cta-button col-12 " + layoutClass(ctaLayout, "button")
						}
					>
						<a
							href={buttonUrl}
							target={buttonTarget ? "_blank" : "_self"}
							rel="noopener noreferrer"
							className={classnames(
								"wp-block-button__link",
								buttonShape,
								buttonSize
							)}
							style={{
								color: buttonTextColor,
								backgroundColor: buttonBackgroundColor
							}}
						>
							<RichText.Content value={buttonText} />
						</a>
					</div>
				)}
			</CallToAction>
		);
	},

	deprecated: deprecated
});

function dimRatioToClass(ratio) {
	return ratio === 0 || ratio === 50
		? null
		: "has-background-dim-" + 10 * Math.round(ratio / 10);
}

function backgroundImageStyles(url) {
	return url ? { backgroundImage: `url(${url})` } : undefined;
}

function layoutClass(ctaWidth, textOrButton) {
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
