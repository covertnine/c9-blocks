/**
 * Internal dependencies
 */
import classnames from "classnames";
import VideoBox from "./video-box";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

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

const postProcessMobileSize = value => {
	let z = value;

	if (0.33 >= value) {
		z = 0.25;
	} else if (0.66 >= value) {
		z = 0.5;
	} else {
		z = 0.75;
	}

	return z;
};

/**
 * Create a Container wrapper Component
 */
export default class Container extends Component {
	constructor() {
		super(...arguments);
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
				bgImgRepeat,
				bgCustomX,
				bgCustomY,
				overlayHue,
				overlayOpacity,
				blendMode,
				focalPoint,
				containerVideoURL,
				containerVideoID,
				cannotEmbed,
				overrideMobile,
				focalPointMobile,
				bgImgSizeMobile
			}
		} = this.props;

		return (
			<Fragment>
				{this.props.children}
				{!!overlayHue && (
					<div
						className="c9-overlay-container"
						style={this.c9OverlayStyles(overlayHue, overlayOpacity, blendMode)}
					/>
				)}
				{(!!containerVideoURL || !!containerVideoID) && !cannotEmbed && (
					<VideoBox {...this.props} />
				)}
				{!!containerImgURL && (
					<div
						className={classnames(
							"c9-image-container",
							overrideMobile
								? `c9-image-mobile-${
										MOBILE_Y_SIZE[postProcessMobileSize(focalPointMobile.y)]
								  }-${MOBILE_X_SIZE[postProcessMobileSize(focalPointMobile.x)]}`
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
			</Fragment>
		);
	}
}
