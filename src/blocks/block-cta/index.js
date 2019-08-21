import Edit from "./edit";
import Save from "./save";

// Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Import Icon
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { makeIcon } from "../../components/awesomeGenerator";
const iconEl = makeIcon(faExclamationCircle);

// Components
const { __ } = wp.i18n;

const { compose } = wp.compose;
const { withSelect } = wp.data;

// Register block
const { registerBlockType } = wp.blocks;

import attributes from "./attributes";

// Register the block
registerBlockType("c9-blocks/cta", {
	title: __("C9 Call To Action", "c9-blocks"),
	description: __(
		"Add a call to action section with text and a button.",
		"c9-blocks"
	),
	icon: iconEl,
	category: "c9-blocks",
	keywords: [__("call to action", "c9-blocks"), __("cta", "c9-blocks")],

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
			const { isBlockSelected, hasSelectedInnerBlock } = select("core/editor");

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
					<BlockListBlock
						{...props}
						className={props.attributes.ctaWidth}
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
	"c9-blocks/add-container-class",
	withClientIdClassName
);
