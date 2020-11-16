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

import Icon from "../../../assets/icon-c9-anything-carousel.svg";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/carousel", {
	title: __("C9 Carousel", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		// fill in features
	},
	keywords: [__("carousel", "c9-blocks"), __("responsive", "c9-blocks")],
	description: __(
		"Display animated carousel of any kind of content including columns, videos, images, buttons, and text.",
		"c9-blocks"
	),
	example: {
		attributes: {
			slides: 3,
			autoSlide: false,
			slideMaxHeight: 728.140625,
			slideEqualHeight: true,
			slideSizes: [728.140625, 728.140625, 728.140625]
		},
		innerBlocks: [
			{
				name: "c9-blocks/carousel-slide",
				attributes: {
					id: 0,
					slideActive: 0,
					slides: 3
				},
				innerBlocks: [
					{
						name: "core/image",
						attributes: {
							sizeSlug: "large",
							url:
								"https://work.covertnine.com/wp-content/uploads/2020/07/jezael-melgoza-HYQvV8wWX18-unsplash-55-1024x638-1.jpg"
						}
					},
					{
						name: "c9-blocks/heading",
						attributes: {
							heading: "Headline H1-H6",
							tagLevel: 3
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Use the anything carousel for columns of content that can be cycled through automatically, or paused until a user clicks the arrows or indicators. Show or hide indicators, and customize the number of slides with inspector settings."
						}
					}
				]
			},
			{
				name: "c9-blocks/carousel-slide",
				attributes: {
					id: 1,
					slideActive: 0,
					slides: 3
				},
				innerBlocks: [
					{
						name: "core/image",
						attributes: {
							sizeSlug: "large",
							url:
								"https://work.covertnine.com/wp-content/uploads/2020/07/jezael-melgoza-HYQvV8wWX18-unsplash-55-1024x638-1.jpg"
						}
					},
					{
						name: "c9-blocks/heading",
						attributes: {
							heading: "Headline H1-H6",
							tagLevel: 3
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Use the anything carousel for columns of content that can be cycled through automatically, or paused until a user clicks the arrows or indicators. Show or hide indicators, and customize the number of slides with inspector settings."
						}
					}
				]
			},
			{
				name: "c9-blocks/carousel-slide",
				attributes: {
					id: 2,
					slideActive: 0,
					slides: 3
				},
				innerBlocks: [
					{
						name: "core/image",
						attributes: {
							sizeSlug: "large",
							url:
								"https://work.covertnine.com/wp-content/uploads/2020/07/jezael-melgoza-HYQvV8wWX18-unsplash-55-1024x638-1.jpg"
						}
					},
					{
						name: "c9-blocks/heading",
						attributes: {
							heading: "Headline H1-H6",
							tagLevel: 3
						}
					},
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Use the anything carousel for columns of content that can be cycled through automatically, or paused until a user clicks the arrows or indicators. Show or hide indicators, and customize the number of slides with inspector settings."
						}
					}
				]
			}
		]
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
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
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
