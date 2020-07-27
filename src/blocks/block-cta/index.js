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

import Icon from "../../../assets/icon-c9-cta-bar.svg";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { registerBlockType } = wp.blocks;

registerBlockType("c9-blocks/cta", {
	title: __("C9 Call To Action", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	keywords: [__("call to action", "c9-blocks"), __("cta", "c9-blocks")],

	description: __(
		"Get users to action with stylized text, colors, and buttons in one responsive block.",
		"c9-blocks"
	),

	attributes: attributes,

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
		withSelect((select, ownProps) => {
			const { isBlockSelected, hasSelectedInnerBlock } = select("core/block-editor");

			const { clientId } = ownProps;

			return {
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: Save
});

/* Add the container class to the cta block. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if ("c9-blocks/cta" === blockName) {
				return (
					<BlockListBlock {...props} className={props.attributes.ctaWidth} />
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
	"c9-blocks/add-container-class",
	withClientIdClassName
);
