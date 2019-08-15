/**
 * BLOCK: Post and Page Grid
 */

// Import block dependencies and components
import Edit from "./edit";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Components
const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

const { compose } = wp.compose;
const { withSelect } = wp.data;

import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";

// Register the block
registerBlockType("c9-blocks/post-grid", {
	parent: ["c9-blocks/post-container"],
	title: __("C9 Post and Page Grid", "c9-blocks"),
	description: __(
		"Add a grid or list of customizable posts or pages.",
		"c9-blocks"
	),
	icon: "columns",
	category: "c9-blocks",
	keywords: [
		__("post", "c9-blocks"),
		__("page", "c9-blocks"),
		__("grid", "c9-blocks")
	],

	edit: compose([
		withSelect((select, props) => {
			const { order, categories } = props.attributes;
	
			const { getEntityRecords } = select("core", "c9-blocks");
	
			const latestPostsQuery = pickBy(
				{
					categories,
					order,
					orderby: props.attributes.orderBy,
					per_page: props.attributes.postsToShow,
					offset: props.attributes.offset
				},
				value => !isUndefined(value)
			);
	
			return {
				latestPosts: getEntityRecords(
					"postType",
					props.attributes.postType,
					latestPostsQuery
				)
			};
		})
	])(Edit),

	// Render via PHP
	save() {
		return null;
	}
});
