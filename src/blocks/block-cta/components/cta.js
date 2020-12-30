/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;

/**
 * External Dependencies.
 */
import classnames from "classnames";

/**
 * Create a CallToAction wrapper Component
 */
export default class CallToAction extends Component {
	constructor() {
		super(...arguments);
	}

	c9SpacingConfig(padding, margin) {
		let classes = [];
		// abstract side class assignment
		function assignSideClasses(sideClass, level) {
			if (-1 != level) {
				classes.push(`${sideClass}-${level}`);
			}
		}

		// padding
		if (
			padding.top === padding.left &&
			padding.top === padding.bottom &&
			padding.top === padding.right &&
			-1 != padding.top
		) {
			classes.push(`p-${padding.top}`);
		} else if (padding.top === padding.bottom && 0 <= padding.top) {
			classes.push(`py-${padding.top}`);
			assignSideClasses("pl", padding.left);
			assignSideClasses("pr", padding.right);
		} else if (padding.left === padding.right && 0 <= padding.left) {
			classes.push(`px-${padding.left}`);
			assignSideClasses("pt", padding.top);
			assignSideClasses("pb", padding.bottom);
		} else {
			["top", "bottom", "left", "right"].map(s =>
				assignSideClasses(`p${s[0]}`, padding[s])
			);
		}

		// margin
		if (margin.top === margin.bottom && -1 != margin.top) {
			classes.push(`my-${margin.top}`);
		} else {
			["top", "bottom"].map(s => assignSideClasses(`m${s[0]}`, margin[s]));
		}

		return classes;
	}

	c9BackgroundStyles(
		url,
		size,
		bgColor,
		opacity,
		align,
		blend,
		focalPoint,
		selected = true
	) {
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

			if (0 < size.length) {
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

		if (10 === alpha) {
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
				ctaWidth,
				ctaBackgroundColor,
				ctaBackgroundOpacity,
				imgURL,
				imgSize,
				blendMode,
				focalPoint,
				ctaPadding,
				ctaMargin,
				align
			},
			className = "",
			isSelectedBlockInRoot,
			save = false,
			...otherProps
		} = this.props;

		let ctaAlign;
		if (save && 0 != align.length) {
			if ("container" == ctaWidth) {
				ctaAlign = "alignwide";
			} else if ("container-fluid" == ctaWidth) {
				ctaAlign = "alignfull";
			} else {
				ctaAlign = null;
			}
		}

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
					applyFilters("c9-blocks.blocks.className", className),
					"c9-block-cta",
					save ? ctaWidth : null,
					ctaAlign,
					this.c9SpacingConfig(ctaPadding, ctaMargin),
					// eslint-disable-next-line no-extra-boolean-cast
					!!imgURL ? "c9-cta-has-background" : null
				)}
				{...otherProps}
			>
				<div className="row">{this.props.children}</div>
			</div>
		);
	}
}
