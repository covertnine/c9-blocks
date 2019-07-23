// Import block dependencies and components
import Edit from "./edit";
import Save from "./save";

import attributes from "./attributes";
import classnames from "classnames";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Components
const { __ } = wp.i18n;

const { compose } = wp.compose;
const { withSelect } = wp.data;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("c9-blocks/column-container", {
	title: __("C9 Column Container", "c9-blocks"),
	description: __("A responsive container for columns of content", "c9-blocks"),
	icon: "columns",
	category: "common",
	parent: ["c9-blocks/grid-container"],
	supports: {
		// fill in features
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
			const { isBlockSelected, hasSelectedInnerBlock } = select("core/editor");

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	}
});

/* Add the vertical column alignment class to the column container block. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if (blockName === "c9-blocks/column-container") {
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
