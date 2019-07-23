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
import Save from "./save";

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
const { select } = wp.data;

const { applyFilters } = wp.hooks;

const ALLOWED_BLOCKS = ["c9-blocks/column"];

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize(columns => {
	return times(columns, () => [
		"c9-blocks/column",
		{ width: Math.round(12 / columns) }
	]);
});

registerBlockType("c9-blocks/column-containers", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("C9 Content Container", "c9-blocks"),
	description: __("A responsive container for columns of content", "c9-blocks"),
	icon: "columns",
	category: "c9-blocks",
	supports: {
		alignwide: true
	},
	keywords: [
		__("column", "c9-blocks"),
		__("container", "c9-blocks"),
		__("responsive", "c9-blocks")
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
			setAttributes,
			clientId,
			className = ""
		} = props;

		const { isBlockSelected, hasSelectedInnerBlock } = select("core/editor");

		let selected =
			isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true);

		const verticalAlignControls = [
			{
				icon: "arrow-up-alt2",
				title: __("Vertical Align Top", "c9-blocks"),
				isActive: verticalAlign === "flex-start",
				onClick: () => setAttributes({ verticalAlign: "flex-start" })
			},
			{
				icon: "minus",
				title: __("Vertical Align Bottom", "c9-blocks"),
				isActive: verticalAlign === "center",
				onClick: () => setAttributes({ verticalAlign: "center" })
			},
			{
				icon: "arrow-down-alt2",
				title: __("Vertical Align Middle", "c9-blocks"),
				isActive: verticalAlign === "flex-end",
				onClick: () => setAttributes({ verticalAlign: "flex-end" })
			}
		];

		const widthControls = [
			{
				icon: "align-center",
				title: __("Narrow Width", "c9-blocks"),
				isActive: containerWidth === "container-narrow",
				onClick: () => setAttributes({ containerWidth: "container-narrow" })
			},
			{
				icon: "align-wide",
				title: __("Wide Width", "c9-blocks"),
				isActive: containerWidth === "container",
				onClick: () => setAttributes({ containerWidth: "container" })
			},
			{
				icon: "align-full-width",
				title: __("Full Width", "c9-blocks"),
				isActive: containerWidth === "container-fluid",
				onClick: () => setAttributes({ containerWidth: "container-fluid" })
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
							focalPoint,
							selected
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
						focalPoint,
						selected
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
		return <Save {...props} />;
	} //end save
}); //end registerBlockType

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
