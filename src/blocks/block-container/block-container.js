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
import "./styles/style.scss";
import attributes from "./attributes";
// import containerBar from './components/toolbar';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { Fragment } = wp.element;

const ALLOWED_BLOCKS = ["covertnine-blocks/column"];

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize(columns => {
	return times(columns, () => ["covertnine-blocks/column"]);
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
				bgImgPosY,
				bgImgPosX,
				verticalAlign,
				containerImgURL,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				overlayHue,
				overlayOpacity,
				blendMode,
				containerPadding,
				columns,
				minScreenHeight
			},
			setAttributes
		} = props;

		// Creates a column container that can take other blocks
		return [
			<Fragment>
				<Inspector {...{ setAttributes, ...props }} />,
				<div
					className={classnames(containerWidth)}
					style={cortexBackgroundStyles(
						containerImgURL,
						verticalAlign,
						bgImgSize,
						bgImgAttach,
						bgImgPosX,
						bgImgPosY,
						overlayHue,
						overlayOpacity,
						blendMode,
						minScreenHeight,
						containerPadding
					)}
				>
					<div className="row no-gutter">
						<InnerBlocks
							template={getColumnsTemplate(columns)}
							templateLock="all"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</div>
				</div>
			</Fragment>
		];
	},

	save: props => {
		const {
			attributes: {
				bgImgPosY,
				bgImgPosX,
				verticalAlign,
				containerImgURL,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				overlayHue,
				overlayOpacity,
				blendMode,
				containerPadding,
				minScreenHeight
			}
		} = props;

		// const containerWidth3 = containerWidth;

		return (
			<div>
				<div
					className={classnames(containerWidth)}
					style={cortexBackgroundStyles(
						containerImgURL,
						verticalAlign,
						bgImgSize,
						bgImgAttach,
						bgImgPosX,
						bgImgPosY,
						overlayHue,
						overlayOpacity,
						blendMode,
						minScreenHeight,
						containerPadding
					)}
				>
					<div className="row no-gutter">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	} //end save
}); //end registerBlockType

function cortexBackgroundStyles(
	url,
	vertAlign,
	size,
	attachment,
	posX,
	posY,
	hue,
	opacity,
	blend,
	height,
	padding
) {
	const styles = {};

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

	// styles.display = 'flex';
	if (vertAlign) {
		styles.alignItems = vertAlign;
	}

	if (url) {
		(styles.backgroundImage = `url(${url})`),
			(styles.backgroundSize = size ? "cover" : "contain");
		styles.backgroundAttachment = attachment ? "scroll" : "fixed";

		styles.backgroundPositionX = posX > 0 ? `${posX}0%` : "0";
		styles.backgroundPositionY = posY > 0 ? `${posY}0%` : "0";

		styles.backgroundBlendMode = `${blend}`;
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

	return `rgba(${r},${g},${b},.${alpha})`;
}
