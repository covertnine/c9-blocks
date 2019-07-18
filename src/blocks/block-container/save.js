/**
 * Block dependencies
 */
import VideoBox from "./components/video-box";

// External Dependencies.
import classnames from "classnames";

const { applyFilters } = wp.hooks;

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	cortexTextStyleConfig(type, display, tag, override) {
		if (!override) {
			return "";
		} else if (display == 0) {
			return `${type}${tag}`;
		} else {
			return `${type}${display}`;
		}
	}

	render() {
		const {
			attributes: {
				verticalAlign,
				containerImgURL,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				bgImgRepeat,
				bgCustomX,
				bgCustomY,
				overlayHue,
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
			setAttributes,
			className = ""
		} = this.props;

		// const containerWidth3 = containerWidth;

		if ((!containerVideoURL && !containerVideoID) || cannotEmbed) {
			return (
				<div
					className={classnames(
						containerWidth,
						applyFilters("c9-blocks.blocks.className", className),
						cortexSpacingConfig(containerPadding, containerMargin)
					)}
					style={cortexBackgroundStyles(
						containerImgURL,
						verticalAlign,
						bgImgSize,
						bgCustomX,
						bgCustomY,
						bgImgAttach,
						bgImgRepeat,
						overlayHue,
						overlayOpacity,
						blendMode,
						minScreenHeight,
						focalPoint
					)}
				>
					<div className="row no-gutter" style={{ flexGrow: 1 }}>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		}

		return (
			<div
				className={classnames(
					containerWidth,
					applyFilters("c9-blocks.blocks.className", className),
					cortexSpacingConfig(containerPadding, containerMargin)
				)}
				style={cortexBackgroundStyles(
					containerImgURL,
					verticalAlign,
					bgImgSize,
					bgCustomX,
					bgCustomY,
					bgImgAttach,
					bgImgRepeat,
					overlayHue,
					overlayOpacity,
					blendMode,
					minScreenHeight,
					focalPoint
				)}
			>
				<VideoBox {...{ setAttributes, ...this.props }} />
				<div className="row no-gutter" style={{ flexGrow: 1 }}>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
}

function cortexSpacingConfig(padding, margin) {
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

function cortexBackgroundStyles(
	url,
	vertAlign,
	size,
	bgX,
	bgY,
	attachment,
	repeat,
	hue,
	opacity,
	blend,
	height,
	focalPoint,
	selected = true
) {
	const styles = {};
	styles.display = "flex";
	styles.position = "relative";

	if (height) {
		styles.minHeight = `${height}vh`;
	}

	if (focalPoint) {
		styles.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
	}

	// styles.display = 'flex';
	if (vertAlign) {
		styles.alignItems = vertAlign;
	}

	if (url) {
		if (selected) {
			styles.backgroundImage = `url(${url})`;
		} else {
			styles.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`;
		}
		styles.backgroundRepeat = repeat;
		styles.backgroundAttachment = attachment ? "fixed" : "scroll";
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
	if (hue) {
		styles.backgroundColor = hexToRGBA(hue, opacity);
	}

	return styles;
}

function hexToRGBA(hex, alpha) {
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
