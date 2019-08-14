/**
 * CTA Wrapper
 */

// Setup the block
const { Component } = wp.element;

const { applyFilters } = wp.hooks;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a CallToAction wrapper Component
 */
export default class CallToAction extends Component {
	constructor() {
		super(...arguments);
	}

	c9BackgroundStyles(url, size, bgColor, opacity, align, blend, focalPoint, selected = true) {
		const styles = {};

		if (bgColor) {
			styles.backgroundColor = this.hexToRGBA(bgColor, opacity);
		}

		if (align) {
			styles.textAlign = align;
		}

		if (url) {
			if (selected) {
				styles.backgroundImage = `url(${url})`;
			} else {
				styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`;
			}
			styles.backgroundBlendMode = `${blend}`;

			if (focalPoint) {
				styles.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y *
					100}%`;
			}

			if (size.length > 0) {
				styles.backgroundSize = size;
			}
		}

		return styles;
	}

	hexToRGBA(hex, alpha) {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		var opacity;

		if (alpha === 10) {
			opacity = 1;
		} else {
			opacity = "." + alpha;
		}

		return `rgba(${r},${g},${b},${opacity})`;
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonAlignment,
				ctaTextFontSize,
				ctaWidth,
				ctaBackgroundColor,
				ctaBackgroundOpacity,
				imgURL,
				imgSize,
				blendMode,
				focalPoint
			},
			className = "",
			isSelectedBlockInRoot
		} = this.props;

		const styles = {
			backgroundColor: ctaBackgroundColor ? ctaBackgroundColor : undefined,
			textAlign: buttonAlignment ? buttonAlignment : undefined
		};

		return (
			<div
				style={this.c9BackgroundStyles(
					imgURL,
					imgSize,
					ctaBackgroundColor,
					ctaBackgroundOpacity,
					buttonAlignment,
					blendMode,
					focalPoint,
					isSelectedBlockInRoot
				)}
				className={classnames(
					[
						applyFilters("c9-blocks.blocks.className", className),
						"c9-block-cta",
						"container",
						!!imgURL ? "c9-cta-has-background" : null
					],
					{
						["c9-font-size-" + ctaTextFontSize]: ctaTextFontSize,
						["align" + ctaWidth]: ctaWidth
					}
				)}
			>
				<div className="row">{this.props.children}</div>
			</div>
		);
	}
}
