/**
 * WordPress dependencies
 */
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;
const { registerBlockType, getBlockTypes } = wp.blocks;

// Register editor components
const { AlignmentToolbar, BlockControls } = wp.editor;

// Extend component
const { Fragment } = wp.element;

import VerticalAlignmentToolbar from "./vertical-align-toolbar";
import classnames from "classnames";

registerBlockType("c9-blocks/column", {
	title: __("Column", "c9-blocks"),
	
	icon: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
		</SVG>
	),

	description: __("A single column within the columns block.", "c9-blocks"),

	supports: {
		inserter: false,
		className: false
	},

	attributes: {
		textAlign: {
			type: "string",
			default: "left"
		},
		verticalAlign: {
			type: "string"
		}
	},

	edit: props => {
		const {
			attributes: { textAlign, verticalAlign },
			setAttributes,
			className
		} = props;

		const ALLOWED_BLOCKS = getBlockTypes()
			.map(block => block.name)
			.filter(
				name => name != "c9-blocks/grid" && name != "c9-blocks/column-container"
			);

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={textAlign}
						onChange={value => setAttributes({ textAlign: value })}
					/>
					<VerticalAlignmentToolbar
						value={verticalAlign}
						onChange={value => {
							setAttributes({ verticalAlign: value });
						}}
					/>
				</BlockControls>
				<div
					className={classnames(
						className,
						"c9-block-layout-column",
						"c9-column",
						textAlign ? `text-${textAlign}` : null,
						verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null
					)}
				>
					<div className="c9-column-innner">
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
							templateLock={false}
							templateInsertUpdatesSelection={false}
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	save: props => {
		const {
			attributes: { textAlign, verticalAlign }
		} = props;

		return (
			<div
				className={classnames(
					"c9-block-layout-column",
					"c9-column",
					textAlign ? `text-${textAlign}` : null,
					verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null
				)}
			>
				<div className="c9-column-innner">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});

/* Add the vertical column alignment class to the block wrapper. */
const withClientIdClassName = wp.compose.createHigherOrderComponent(
	BlockListBlock => {
		return props => {
			const blockName = props.block.name;

			if (blockName === "c9-blocks/column") {
				return (
					<BlockListBlock
						{...props}
						className={
							props.attributes.verticalAlign
								? "c9-is-vertically-aligned-" + props.attributes.verticalAlign
								: "c9-is-vertically-aligned-top"
						}
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
