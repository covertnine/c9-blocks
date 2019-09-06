/**
 * Internal dependencies
 */
import CallToAction from "./components/cta";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.editor;

/**
 * External Dependencies.
 */
import classnames from "classnames";

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

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

	dimRatioToClass(ratio) {
		return 0 === ratio || 50 === ratio
			? null
			: "has-background-dim-" + 10 * Math.round(ratio / 10);
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				buttonTarget,
				ctaText,
				ctaTextColor,
				imgURL,
				imgAlt,
				dimRatio,
				ctaLayout,
				type
			}
		} = this.props;

		return (
			<CallToAction {...this.props} save={true}>
				{imgURL && !!imgURL.length && (
					<div className="c9-cta-image-wrap">
						<img
							className={classnames(
								"c9-cta-image",
								this.dimRatioToClass(dimRatio),
								{
									"has-background-dim": 0 !== dimRatio
								}
							)}
							src={imgURL}
							alt={imgAlt}
						/>
					</div>
				)}

				<div
					className={
						"c9-cta-content col-12 " + this.layoutClass(ctaLayout, "text")
					}
				>
					{ctaText && (
						<RichText.Content
							tagName="div"
							className={classnames(
								"c9-cta-text",
								type
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
							"c9-cta-button col-12 " + this.layoutClass(ctaLayout, "button")
						}
					>
						<a
							href={buttonUrl}
							target={buttonTarget ? "_blank" : "_self"}
							rel="noopener noreferrer"
							className={classnames(
								"wp-block-button__link",
								`c9-button-shape-${buttonShape}`,
								buttonSize
							)}
							style={{
								color: buttonTextColor,
								backgroundColor: buttonBackgroundColor
							}}
						>
							<RichText.Content value={buttonText} />
							{buttonTarget && (
								<span className="sr-only">(Link opens in new window)</span>
							)}
						</a>
					</div>
				)}
			</CallToAction>
		);
	}
}
