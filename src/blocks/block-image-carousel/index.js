/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import Deprecated from "./deprecated";

/**
 * Styles
 */
import "./styles/style.scss";

import Icon from "../../../assets/icon-c9-image-carousel.svg";

import cryptoRandomString from "crypto-random-string";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/image-carousel", {
	title: __("C9 Image Carousel", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		// fill in features
	},
	keywords: [__("carousel", "c9-blocks"), __("responsive", "c9-blocks")],
	description: __(
		"Display an animated carousel of images with captions with custom settings for navigation.",
		"c9-blocks"
	),
	example: {
		attributes: {
			autoSlide: false,
			url: [
				"https://work.covertnine.com/wp-content/uploads/2020/07/clark-young-fQxMGkYXqFU-unsplash-55.jpg",
				"https://work.covertnine.com/wp-content/uploads/2020/07/jezael-melgoza-HYQvV8wWX18-unsplash-55.jpg",
				"https://work.covertnine.com/wp-content/uploads/2020/07/set-of-tool-wrench-162553-55.jpg"
			],
			id: [null, null, null],
			captionTitle: [
				"Slide Caption Top",
				"Slide Caption Top",
				"Slide Caption Top"
			],
			captionContent: [
				"Slide Caption Bottom",
				"Slide Caption Bottom",
				"Slide Caption Bottom"
			],
			isResponsive: true,
			slideMaxHeight: 640,
			slideEqualHeight: true
		}
	},
	attributes,

	/* Add alignment to block wrapper. */
	getEditWrapperProps({ align }) {
		if (
			"full" === align ||
			"wide" === align ||
			"narrow" === align ||
			"" === align
		) {
			return { "data-align": align };
		}
	},

	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
				instanceId: parseInt(cryptoRandomString({ length: 4, type: "numeric" }))
			};
		}),
		withDispatch(dispatch => {
			const { updateBlockAttributes, removeBlock, toggleSelection } = dispatch(
				"core/block-editor"
			);

			return {
				updateBlockAttributes,
				removeBlock,
				onResizeStart: () => toggleSelection(false),
				onResizeStop: () => toggleSelection(true)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	},

	deprecated: Deprecated
});
