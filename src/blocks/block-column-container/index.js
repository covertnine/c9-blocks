/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";

/**
 * Styles
 */
import "./styles/style.scss";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType, createBlock } = wp.blocks;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import _times from "lodash/times";
import _dropRight from "lodash/dropRight";
import _filter from "lodash/filter";

registerBlockType("c9-blocks/column-container", {
	title: __("C9 Column Container", "c9-blocks"),
	icon: "columns",
	category: "common",
	parent: [
		"c9-blocks/grid-container",
		"c9-blocks/carousel-slide",
		"c9-blocks/horizontal-tabs-tab",
		"c9-blocks/toggles-toggle"
	],
	supports: {
		// fill in features
		className: false,
		anchor: true,
		reusable: false
	},
	keywords: [__("container", "c9-blocks"), __("responsive", "c9-blocks")],
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
			const {
				isBlockSelected,
				hasSelectedInnerBlock,
				getBlockHierarchyRootClientId,
				getBlock
			} = select("core/block-editor");

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
				rootBlock: clientId
					? getBlock(getBlockHierarchyRootClientId(clientId))
					: null
			};
		}),
		withDispatch((dispatch, ownProps, registry) => {
			const { toggleSelection } = dispatch("core/block-editor");

			/**
			 * Updates the column count, including necessary revisions to child Column
			 * blocks to grant required or redistribute available space.
			 *
			 * @param {number} previousColumns Previous column count.
			 * @param {number} newColumns      New column count.
			 */
			const updateColumns = (previousColumns, newColumns) => {
				const { clientId } = ownProps;
				const { replaceInnerBlocks } = dispatch("core/block-editor");
				const { getBlocks } = registry.select("core/block-editor");

				let innerBlocks = getBlocks(clientId);

				// Redistribute available width for existing inner blocks.
				const isAddingColumn = newColumns > previousColumns;

				if (isAddingColumn) {
					innerBlocks = [
						...innerBlocks,
						..._times(newColumns - previousColumns, () => {
							return createBlock("c9-blocks/column");
						})
					];
				} else {
					// The removed column will be the last of the inner blocks.
					innerBlocks = _dropRight(innerBlocks, previousColumns - newColumns);
				}

				replaceInnerBlocks(clientId, innerBlocks, false);
			};

			/**
			 * Removes self from innerBlocks
			 *
			 * @param {string} parentId parent block id
			 */
			const removeSelf = parentId => {
				const { clientId } = ownProps;
				const { replaceInnerBlocks, updateBlockAttributes } = dispatch(
					"core/block-editor"
				);
				const { getBlock, getBlocks } = registry.select("core/block-editor");

				const parentBlock = getBlock(parentId);

				let innerBlocks = getBlocks(parentId);
				innerBlocks = _filter(
					innerBlocks,
					value => value.clientId !== clientId
				);

				if ("c9-blocks/grid" === parentBlock.name) {
					const rows = parentBlock.attributes.rows;
					if (1 === rows) {
						innerBlocks.push(createBlock("c9-blocks/column-container"));
					} else {
						updateBlockAttributes(parentId, { rows: rows - 1 });
					}
				}

				replaceInnerBlocks(parentId, innerBlocks, false);
			};

			return {
				onResizeStart: () => toggleSelection(false),
				onResizeStop: () => toggleSelection(true),
				updateColumns,
				removeSelf
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	},

	deprecated: [
		{
			attributes: {
				...attributes,
				minScreenHeight: {
					type: "number",
					default: 0
				}
			},
			save: props => {
				return <Save {...props} />;
			},
			supports: {
				className: false,
				anchor: true,
				reusable: false
			}
		}
	]
});

/* Add the vertical column alignment class to the column container block. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if ("c9-blocks/column-container" === blockName) {
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
