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

import Icon from "../../../assets/icon-c9-toggles.svg";

import cryptoRandomString from "crypto-random-string";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType, createBlock } = wp.blocks;

registerBlockType("c9-blocks/toggles", {
	title: __("C9 Toggles", "c9-blocks"),
	icon: Icon,
	category: "c9-blocks",
	supports: {
		anchor: true
	},
	styles: [
		{ name: "default", label: __("Default", "c9-blocks") },
		{
			name: "toggles-small",
			label: __("Small", "c9-blocks"),
			isSecondary: true
		}
	],
	keywords: [__("responsive", "c9-blocks")],
	description: __(
		"Hide or show content with a toggleable heading link. Great for FAQ content.",
		"c9-blocks"
	),
	example: {
		attributes: {
			toggleCount: 3
		},
		innerBlocks: [
			{
				name: "c9-blocks/toggles-toggle",
				attributes: {
					toggleNumber: 1,
					heading: [
						{
							type: "span",
							props: {
								children: ["What are Toggles?"]
							}
						}
					]
				},
				innerBlocks: [
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis."
						}
					}
				]
			},
			{
				name: "c9-blocks/toggles-toggle",
				attributes: {
					toggleNumber: 2,
					heading: [
						{
							type: "span",
							props: {
								children: ["How do you open them?"]
							}
						}
					]
				},
				innerBlocks: [
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis."
						}
					}
				]
			},
			{
				name: "c9-blocks/toggles-toggle",
				attributes: {
					toggleNumber: 3,
					heading: [
						{
							type: "span",
							props: {
								children: ["Duplicate as needed."]
							}
						}
					]
				},
				innerBlocks: [
					{
						name: "core/paragraph",
						attributes: {
							content:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis."
						}
					}
				]
			}
		]
	},
	attributes,
	// Render the block components
	edit: compose([
		withSelect((select, ownProps) => {
			const { getBlock, isBlockSelected, hasSelectedInnerBlock } = select(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
				instanceId: parseInt(cryptoRandomString({ length: 4, type: "numeric" }))
			};
		}),
		withDispatch((dispatch, ownProps) => {
			const { insertBlock, updateBlockAttributes } = dispatch(
				"core/block-editor"
			);

			const { clientId } = ownProps;

			return {
				updateBlockAttributes,
				addToggle: id =>
					insertBlock(
						createBlock("c9-blocks/toggles-toggle", { id }),
						undefined,
						clientId
					)
			};
		})
	])(Edit),

	// Save the attributes and markup
	save: props => {
		return <Save {...props} />;
	}
});
