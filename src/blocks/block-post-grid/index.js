/**
 * Internal dependencies
 */
import Edit from "./edit";

/**
 * Styles
 */
import "./styles/style.scss";

import Icon from "../../../assets/icon-c9-post-grid.svg";

/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { compose } = wp.compose;
const { withSelect } = wp.data;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";

registerBlockType("c9-blocks/post-grid", {
	icon: Icon,
	parent: ["c9-blocks/post-container"],
	/* Add alignment to block wrapper. */
	supports: {
		inserter: false,
		reusable: false
	},
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

	edit: compose([
		withSelect((select, props) => {
			const {
				order,
				categories,
				tags,
				filterByCategory,
				filterByTag
			} = props.attributes;

			const { getEntityRecords, getMedia } = select("core", "c9-blocks");

			const setCategories = filterByCategory ? categories : undefined;
			const setTags = filterByTag ? tags : undefined;

			const latestPostsQuery = pickBy(
				{
					categories: setCategories,
					tags: setTags,
					order,
					orderby: props.attributes.orderBy,
					// eslint-disable-next-line camelcase
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
				),
				getMedia
			};
		})
	])(Edit),

	// Render via PHP
	save() {
		return null;
	}
});

/* Add the vertical column alignment class to the column container block. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if ("c9-blocks/post-grid" === blockName) {
				return (
					<BlockListBlock
						{...props}
						className={classnames(
							props.attributes.verticalAlign
								? "c9-is-vertically-aligned-" + props.attributes.verticalAlign
								: "c9-is-vertically-aligned-top",
							props.attributes.containerWidth
						)}
					/>
				);
			} else {
				return <BlockListBlock {...props} />;
			}
		};
	},
	"withClientIdClassName"
);

wp.hooks.addFilter(
	"editor.BlockListBlock",
	"c9-blocks/add-vertical-align-class",
	withClientIdClassName
);
