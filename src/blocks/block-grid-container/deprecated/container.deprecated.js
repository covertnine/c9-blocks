/**
 * Internal dependencies
 */
import classnames from "classnames";
import VideoBox from "../components/video-box";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;

const MOBILE_Y_SIZE = {
	0.25: "top",
	0.5: "center",
	0.75: "bottom"
};

const MOBILE_X_SIZE = {
	0.25: "left",
	0.5: "center",
	0.75: "right"
};

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

	c9ContainerStylesMobile(allowMobile, bgSize, bgX, bgY) {
		const styles = {};

		if (allowMobile && !bgSize) {
			styles["--mobile-height"] =
				"auto" != bgX.size ? `${bgX.size}${bgX.unit}` : `${bgX.size}`;
			styles["--mobile-width"] =
				"auto" != bgY.size ? `${bgY.size}${bgY.unit}` : `${bgY.size}`;
		}

		return styles;
	}

	c9BackgroundStyles(url, size, bgX, bgY, repeat, focalPoint) {
		const styles = {};

		if (focalPoint) {
			styles.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y *
				100}%`;
		}

		if (url) {
			styles.backgroundImage = `url(${url})`;
			styles.backgroundRepeat = repeat;
		}
		if (0 < size.length) {
			styles.backgroundSize = size;
		} else {
			let horizontal =
				"auto" != bgX.size ? `${bgX.size}${bgX.unit}` : `${bgX.size}`;
			let vertical =
				"auto" != bgY.size ? `${bgY.size}${bgY.unit}` : `${bgY.size}`;
			styles.backgroundSize = `${horizontal} ${vertical}`;
		}

		return styles;
	}

	c9OverlayStyles(hue, opacity, blend) {
		const styles = {};

		if (hue) {
			styles.backgroundColor = this.hexToRGBA(hue, opacity);
			styles.mixBlendMode = `${blend}`;
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
				cannotEmbed,
				anchor,
				overrideMobile,
				focalPointMobile,
				bgImgSizeMobile,
				bgCustomXMobile,
				bgCustomYMobile
			},
			className = ""
		} = this.props;

		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					this.c9SpacingConfig(containerPadding, containerMargin),
					bgImgAttach ? "c9-fixed" : "c9-scroll",
					containerImgURL ? "c9-grid-has-background" : null,
					(!!containerVideoURL || !!containerVideoID) && !cannotEmbed
						? "c9-grid-has-video"
						: null
				)}
				style={{
					...this.c9ContainerStyles(
						minScreenHeight,
						containerHue,
						containerOpacity
					),
					...this.c9ContainerStylesMobile(
						overrideMobile,
						bgImgSizeMobile,
						bgCustomXMobile,
						bgCustomYMobile
					)
				}}
				id={anchor ? anchor : null}
			>
				{(!!containerVideoURL || !!containerVideoID) && !cannotEmbed && (
					<VideoBox {...this.props} />
				)}
				{!!containerImgURL && (
					<div
						className={classnames(
							"c9-image-container",
							overrideMobile
								? `c9-image-mobile-${MOBILE_Y_SIZE[focalPointMobile.y]}-${
										MOBILE_X_SIZE[focalPointMobile.x]
								  }`
								: null,
							"cover" == bgImgSizeMobile ? "c9-image-mobile-size-cover" : null,
							"contain" == bgImgSizeMobile
								? "c9-image-mobile-size-contain"
								: null,
							!bgImgSizeMobile ? "c9-image-mobile-size-custom" : null
						)}
						style={this.c9BackgroundStyles(
							containerImgURL,
							bgImgSize,
							bgCustomX,
							bgCustomY,
							bgImgRepeat,
							focalPoint
						)}
					/>
				)}
				{!!overlayHue && (
					<div
						className="c9-overlay-container"
						style={this.c9OverlayStyles(overlayHue, overlayOpacity, blendMode)}
					/>
				)}
				{this.props.children}
			</div>
		);
	}
}
