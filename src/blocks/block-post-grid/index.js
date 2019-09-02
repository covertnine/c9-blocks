/**
 * BLOCK: Post and Page Grid
 */

import classnames from "classnames";

// Import block dependencies and components
import Edit from "./edit";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Register block controls
const { registerBlockType } = wp.blocks;

import Icon from "../../../assets/icon-c9-post-grid.svg";

const { compose } = wp.compose;
const { withSelect } = wp.data;

import isUndefined from "lodash/isUndefined";
import pickBy from "lodash/pickBy";

// Register the block
registerBlockType("c9-blocks/post-grid", {
	icon: Icon,
	parent: "c9-blocks/post-container",
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

	edit: compose([
		withSelect((select, props) => {
			const { order, categories } = props.attributes;

			const { getEntityRecords } = select("core", "c9-blocks");

			const latestPostsQuery = pickBy(
				{
					categories,
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
				)
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
