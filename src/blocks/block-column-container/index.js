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
import "./styles/editor.scss";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;

/**
 * External Dependencies.
 */
import classnames from "classnames";

registerBlockType("c9-blocks/column-container", {
	title: __("C9 Column Container", "c9-blocks"),
	icon: "columns",
	category: "common",
	parent: ["c9-blocks/grid-container", "c9-blocks/carousel-slide"],
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
			const { isBlockSelected, hasSelectedInnerBlock } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		}),
		withDispatch(dispatch => {
			const { toggleSelection } = dispatch("core/block-editor");

			return {
				onResizeStart: () => toggleSelection(false),
				onResizeStop: () => toggleSelection(true)
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
