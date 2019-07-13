/**
 * External dependencies
 */
import memoize from "memize";
import times from "lodash/times";
import classnames from "classnames";

/**
 * Block dependencies
 */
import Inspector from "./components/inspector";
import VideoBox from "./components/video-box";
import attributes from "./attributes";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, BlockControls } = wp.editor;
const { Fragment } = wp.element;
const { Toolbar } = wp.components;

const ALLOWED_BLOCKS = ["covertnine-blocks/column"];

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize(columns => {
	return times(columns, () => [
		"covertnine-blocks/column",
		{ width: Math.round(12 / columns) }
	]);
});

registerBlockType("covertnine-blocks/column-containers", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("Covertnine Content Container", "covertnine-blocks"),
	description: __(
		"A responsive container for columns of content",
		"covertnine-blocks"
	),
	icon: "columns",
	category: "covertnine-blocks",
	supports: {
		alignwide: true
	},
	keywords: [
		__("column", "covertnine-blocks"),
		__("container", "covertnine-blocks"),
		__("responsive", "covertnine-blocks")
	],
	attributes,
	edit: props => {
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
				columns,
				minScreenHeight,
				focalPoint,
				containerVideoURL,
				containerVideoID,
				cannotEmbed
			},
			setAttributes
		} = props;

		const verticalAlignControls = [
			{
				icon: "arrow-up-alt2",
				title: __("Vertical Align Top", "covertnine-blocks"),
				isActive: verticalAlign === "flex-start",
				onClick: () => setAttributes({ verticalAlign: "flex-start" })
			},
			{
				icon: "minus",
				title: __("Vertical Align Bottom", "covertnine-blocks"),
				isActive: verticalAlign === "center",
				onClick: () => setAttributes({ verticalAlign: "center" })
			},
			{
				icon: "arrow-down-alt2",
				title: __("Vertical Align Middle", "covertnine-blocks"),
				isActive: verticalAlign === "flex-end",
				onClick: () => setAttributes({ verticalAlign: "flex-end" })
			}
		];

		const widthControls = [
			{
				icon: "align-center",
				title: __("Full Width", "covertnine-blocks"),
				isActive: containerWidth === "container-fluid",
				onClick: () => setAttributes({ containerWidth: "container-fluid" })
			},
			{
				icon: "align-wide",
				title: __("Normal Width", "covertnine-blocks"),
				isActive: containerWidth === "container",
				onClick: () => setAttributes({ containerWidth: "container" })
			},
			{
				icon: "align-full-width",
				title: __("Narrow Width", "covertnine-blocks"),
				isActive: containerWidth === "container-narrow",
				onClick: () => setAttributes({ containerWidth: "container-narrow" })
			}
		];

		if ((!containerVideoURL && !containerVideoID) || cannotEmbed) {
			return (
				<Fragment>
					<BlockControls key="controls">
						<Toolbar controls={widthControls} />
						<Toolbar controls={verticalAlignControls} />
					</BlockControls>
					<Inspector {...{ setAttributes, ...props }} />
					<div
						className={classnames(containerWidth)}
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
							containerPadding,
							containerMargin,
							focalPoint
						)}
					>
						<div className="row no-gutter" style={{ flexGrow: 1 }}>
							<InnerBlocks
								template={getColumnsTemplate(columns)}
								templateLock="all"
								allowedBlocks={ALLOWED_BLOCKS}
							/>
						</div>
					</div>
				</Fragment>
			);
		}

		// Creates a column container that can take other blocks
		return (
			<Fragment>
				<BlockControls key="controls">
					<Toolbar controls={widthControls} />
					<Toolbar controls={verticalAlignControls} />
				</BlockControls>
				<Inspector {...{ setAttributes, ...props }} />
				<div
					className={classnames(containerWidth)}
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
						containerPadding,
						containerMargin,
						focalPoint
					)}
				>
					<VideoBox {...{ setAttributes, ...props }} />
					<div className="row no-gutter" style={{ flexGrow: 1 }}>
						<InnerBlocks
							template={getColumnsTemplate(columns)}
							templateLock="all"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	save: props => {
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
			setAttributes
		} = props;

		// const containerWidth3 = containerWidth;

		if ((!containerVideoURL && !containerVideoID) || cannotEmbed) {
			return (
				<Fragment>
					<div
						className={classnames(containerWidth)}
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
							containerPadding,
							containerMargin,
							focalPoint
						)}
					>
						<div className="row no-gutter" style={{ flexGrow: 1 }}>
							<InnerBlocks.Content />
						</div>
					</div>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<div
					className={classnames(containerWidth)}
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
						containerPadding,
						containerMargin,
						focalPoint
					)}
				>
					<VideoBox {...{ setAttributes, ...props }} />
					<div className="row no-gutter" style={{ flexGrow: 1 }}>
						<InnerBlocks.Content />
					</div>
				</div>
			</Fragment>
		);
	} //end save
}); //end registerBlockType

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
	padding,
	margin,
	focalPoint
) {
	const styles = {};
	styles.display = "flex";
	styles.position = "relative";

	if (height) {
		styles.minHeight = `${height}vh`;
	}

	if (padding) {
		styles.paddingTop = padding.top ? `${padding.top}${padding.unit}` : 0;
		styles.paddingBottom = padding.bottom
			? `${padding.bottom}${padding.unit}`
			: 0;
		styles.paddingLeft = padding.left ? `${padding.left}${padding.unit}` : 0;
		styles.paddingRight = padding.right ? `${padding.right}${padding.unit}` : 0;
	}

	// if (margin) {
	// 	styles.marginTop = margin.top ? `${margin.top}${margin.unit}` : 0;
	// 	styles.marginBottom = margin.bottom ? `${margin.bottom}${margin.unit}` : 0;
	// 	styles.marginLeft = margin.left ? `${margin.left}${margin.unit}` : "auto";
	// 	styles.marginRight = margin.right ? `${margin.right}${margin.unit}` : "auto";
	// }

	if (focalPoint) {
		styles.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
	}

	// styles.display = 'flex';
	if (vertAlign) {
		styles.alignItems = vertAlign;
	}

	if (url) {
		styles.backgroundImage = `url(${url})`;
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
