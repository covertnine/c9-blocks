/**
 * Container Wrapper
 */

// Setup the block
const { Component } = wp.element;
const { applyFilters } = wp.hooks;

// Import block dependencies and components
import classnames from "classnames";
import VideoBox from "./video-box";

/**
 * Create a Container wrapper Component
 */
export default class Container extends Component {
	constructor() {
		super(...arguments);
	}

	c9SpacingConfig(padding, margin) {
		let classes = [];
		// abstract side class assignment
		function assignSideClasses(sideClass, level) {
			if (level != -1) {
				classes.push(`${sideClass}-${level}`);
			}
		}

		// padding
		if (
			padding.top === padding.left &&
			padding.top === padding.bottom &&
			padding.top === padding.right &&
			padding.top != -1
		) {
			classes.push(`p-${padding.top}`);
		} else if (padding.top === padding.bottom && padding.top >= 0) {
			classes.push(`py-${padding.top}`);
			assignSideClasses("pl", padding.left);
			assignSideClasses("pr", padding.right);
		} else if (padding.left === padding.right && padding.left >= 0) {
			classes.push(`px-${padding.left}`);
			assignSideClasses("pt", padding.top);
			assignSideClasses("pb", padding.bottom);
		} else {
			["top", "bottom", "left", "right"].map(s =>
				assignSideClasses(`p${s[0]}`, padding[s])
			);
		}

		// margin
		if (margin.top === margin.bottom && margin.top != -1) {
			classes.push(`my-${margin.top}`);
		} else {
			["top", "bottom"].map(s => assignSideClasses(`m${s[0]}`, margin[s]));
		}

		return classes;
	}

	c9ContainerStyles(height, hue, opacity) {
		const styles = {};

		if (height) {
			styles.minHeight = `${height}vh`;
		}

		if (hue) {
			styles.backgroundColor = this.hexToRGBA(hue, opacity);
		}

		return styles;
	}

	c9BackgroundStyles(
		url,
		size,
		bgX,
		bgY,
		repeat,
		blend,
		focalPoint,
		selected = true
	) {
		const styles = {};

		if (focalPoint) {
			styles.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y *
				100}%`;
		}

		if (url) {
			if (selected) {
				styles.backgroundImage = `url(${url})`;
			} else {
				styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`;
			}
			styles.backgroundRepeat = repeat;
			styles.backgroundBlendMode = `${blend}`;
		}
		if (size.length > 0) {
			styles.backgroundSize = size;
		} else {
			let horizontal =
				bgX.size != "auto" ? `${bgX.size}${bgX.unit}` : `${bgX.size}`;
			let vertical =
				bgY.size != "auto" ? `${bgY.size}${bgY.unit}` : `${bgY.size}`;
			styles.backgroundSize = `${horizontal} ${vertical}`;
		}

		return styles;
	}

	c9OverlayStyles(hue, opacity) {
		const styles = {};

		if (hue) {
			styles.backgroundColor = this.hexToRGBA(hue, opacity);
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
		const {
			attributes: {
				containerImgURL,
				bgImgSize,
				bgImgAttach,
				bgImgRepeat,
				bgCustomX,
				bgCustomY,
				overlayHue,
				containerHue,
				containerOpacity,
				overlayOpacity,
				blendMode,
				containerPadding,
				containerMargin,
				minScreenHeight,
				focalPoint,
				containerVideoURL,
				containerVideoID,
				cannotEmbed
			},
			className = "",
			isSelectedBlockInRoot
		} = this.props;

		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					this.c9SpacingConfig(containerPadding, containerMargin),
					bgImgAttach ? "c9-fixed" : "c9-scroll",
					containerImgURL ? "c9-post-container-has-background" : null,
					(!!containerVideoURL || !!containerVideoID) && !cannotEmbed
						? "c9-post-container-has-video"
						: null
				)}
				style={this.c9ContainerStyles(
					minScreenHeight,
					containerHue,
					containerOpacity
				)}
			>
				{(!!containerVideoURL || !!containerVideoID) && !cannotEmbed && (
					<VideoBox {...this.props} />
				)}
				{!!containerImgURL && (
					<div
						className="c9-image-container"
						style={this.c9BackgroundStyles(
							containerImgURL,
							bgImgSize,
							bgCustomX,
							bgCustomY,
							bgImgRepeat,
							blendMode,
							focalPoint,
							isSelectedBlockInRoot
						)}
					/>
				)}
				{!!overlayHue && (
					<div
						className="c9-overlay-container"
						style={this.c9OverlayStyles(overlayHue, overlayOpacity)}
					/>
				)}
				{this.props.children}
			</div>
		);
	}
}
