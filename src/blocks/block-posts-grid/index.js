/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import Deprecated from "./deprecated";

import Icon from "../../../assets/icon-c9-post-grid.svg";

/**
 * Styles
 */
import "./styles/style.scss";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { registerBlockType } = wp.blocks;

import cryptoRandomString from "crypto-random-string";

registerBlockType("c9-blocks/posts-grid", {
	title: __("C9 Posts Grid", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		// fill in features
	},
	keywords: [__("responsive", "c9-blocks")],
	description: __(
		"Display responsive grids with post content of any kind with filtering, sorting, and flexible layout settings. (Includes customizable outer container)",
		"c9-blocks"
	),
	example: {
		attributes: {},
		innerBlocks: [
			{
				name: "c9-blocks/post-grid",
				attributes: {
					displayPostDate: true,
					displayPostExcerpt: true,
					displayPostAuthor: true,
					displayPostLink: true,
					displaySectionTitle: true,
					columns: 3,
					excerptLength: 20,
					sectionTitle: "The Latest News",
					imageSize: "c9-feature-medium-crop"
				}
			}
		]
	},
	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { isBlockSelected, hasSelectedInnerBlock } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
				instanceId: parseInt(cryptoRandomString({ length: 4, type: "numeric" }))
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	},

	deprecated: Deprecated
});
