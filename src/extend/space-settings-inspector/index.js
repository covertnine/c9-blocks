/**
 * Import CSS
 */
import "./editor.scss";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, Button } = wp.components;

/**
 * Internal dependencies
 */
import { paddingOptions, marginOptions, c9SpacingConfig } from "./utils";

/**
 * External dependencies
 */
import assign from "lodash/assign";
import classnames from "classnames";
let initialOpenPanel = false;
import React from "react";

/**
 * Selected Core Blocks to extend
 */
const supportedBlocks = [
	"core/paragraph",
	"core/group",
	"core/heading",
	"core/buttons",
	"core/button",
	"core/spacer",
	"core/quote",
	"core/pullquote"
];

/**
 * Selected C9 Blocks to extend
 */
const supportedC9Blocks = ["c9-blocks/heading", "c9-blocks/column"];

/**
 * Check if core block may be extended.
 *
 * @param {String} name - block name.
 *
 * @return {Boolean} block supported.
 */
export default function checkTargetBlock(name) {
	return (
		name &&
		((/^core/.test(name) && -1 !== supportedBlocks.indexOf(name)) ||
			(/^c9-blocks/.test(name) && -1 !== supportedC9Blocks.indexOf(name)))
	);
}

/**
 * Extend gutenberg block attributes with Show/Hide.
 *
 * @param {Object} settings Original block settings.
 * @param {string} name Original block name.
 *
 * @return {Object} Filtered block settings.
 */
function addAttribute(settings, name) {
	const allow = checkTargetBlock(name);

	if (allow) {
		if (!settings.attributes.c9PaddingSpaceSettings) {
			settings.attributes.c9PaddingSpaceSettings = {
				type: "object",
				default: {
					linked: true,
					icon: "admin-links",
					top: "-1",
					bottom: "-1",
					left: "-1",
					right: "-1"
				}
			};

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes.c9PaddingSpaceSettings =
							settings.attributes.c9PaddingSpaceSettings;
					}
				});
			}
		}
		if (!settings.attributes.c9MarginSpaceSettings) {
			settings.attributes.c9MarginSpaceSettings = {
				type: "object",
				default: {
					linked: true,
					icon: "admin-links",
					top: "-1",
					bottom: "-1"
				}
			};

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes.c9MarginSpaceSettings =
							settings.attributes.c9MarginSpaceSettings;
					}
				});
			}
		}
	}
	return settings;
}

/**
 * Override props assigned to save component to inject custom styles.
 * This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function addSaveProps(extraProps, blockType, attributes) {
	if (attributes.c9PaddingSpaceSettings && attributes.c9MarginSpaceSettings) {
		const result = c9SpacingConfig(
			attributes.c9PaddingSpaceSettings,
			attributes.c9MarginSpaceSettings
		);
		assign(extraProps, {
			className: classnames(extraProps.className, result)
		});
	}

	return extraProps;
}

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom attribute if needed.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent(OriginalComponent => {
	class C9ShowHideWrapper extends Component {
		constructor() {
			super(...arguments);
			const {
				attributes: { c9PaddingSpaceSettings, c9MarginSpaceSettings },
				setAttributes
			} = this.props;

			this.setAttributes = setAttributes;
			this.linkedPaddingRef = React.createRef();
			this.togglePaddingLinkage = this.togglePaddingLinkage.bind(this);
			this.linkedMarginRef = React.createRef();
			this.toggleMarginLinkage = this.toggleMarginLinkage.bind(this);

			this.state = {
				c9PaddingSpaceSettings: c9PaddingSpaceSettings,
				c9MarginSpaceSettings: c9MarginSpaceSettings,
				setAttributes: setAttributes
			};
		}

		updatePadding = (position, value) => {
			if (this.state.c9PaddingSpaceSettings.linked) {
				let spacingObject = {
					linked: this.state.c9PaddingSpaceSettings.linked,
					unit: this.state.c9PaddingSpaceSettings.unit,
					top: value,
					bottom: value,
					left: value,
					right: value,
					icon: this.state.c9PaddingSpaceSettings.icon
				};
				this.setState({ c9PaddingSpaceSettings: spacingObject });
				this.setAttributes({ c9PaddingSpaceSettings: spacingObject });
			} else {
				let spacingObject = Object.assign(
					{},
					this.state.c9PaddingSpaceSettings
				);
				spacingObject[position] = value;
				this.setState({ c9PaddingSpaceSettings: spacingObject });
				this.setAttributes({ c9PaddingSpaceSettings: spacingObject });
			}
		};

		togglePaddingLinkage = () => {
			let {
				attributes: { c9PaddingSpaceSettings }
			} = this.props;

			c9PaddingSpaceSettings = Object.assign({}, c9PaddingSpaceSettings);
			c9PaddingSpaceSettings.linked = !c9PaddingSpaceSettings.linked;
			c9PaddingSpaceSettings.icon = c9PaddingSpaceSettings.linked
				? "admin-links"
				: "editor-unlink";
			this.setState({ c9PaddingSpaceSettings });
			this.setAttributes({ c9PaddingSpaceSettings });
		};

		toggleMarginLinkage = () => {
			let {
				attributes: { c9MarginSpaceSettings }
			} = this.props;

			c9MarginSpaceSettings = Object.assign({}, c9MarginSpaceSettings);
			c9MarginSpaceSettings.linked = !c9MarginSpaceSettings.linked;
			c9MarginSpaceSettings.icon = c9MarginSpaceSettings.linked
				? "admin-links"
				: "editor-unlink";
			this.setState({ c9MarginSpaceSettings });
			this.setAttributes({ c9MarginSpaceSettings });
		};

		updateMargin = (position, value) => {
			if (this.state.c9MarginSpaceSettings.linked) {
				let spacingObject = {
					linked: this.state.c9MarginSpaceSettings.linked,
					unit: this.state.c9MarginSpaceSettings.unit,
					top: value,
					bottom: value,
					left: value,
					right: value,
					icon: this.state.c9MarginSpaceSettings.icon
				};
				this.setState({ c9MarginSpaceSettings: spacingObject });
				this.setAttributes({ c9MarginSpaceSettings: spacingObject });
			} else {
				let spacingObject = Object.assign({}, this.state.c9MarginSpaceSettings);
				spacingObject[position] = value;
				this.setState({ c9MarginSpaceSettings: spacingObject });
				this.setAttributes({ c9MarginSpaceSettings: spacingObject });
			}
		};

		render() {
			const props = this.props;
			const blockName = props.name;
			const allow = checkTargetBlock(blockName);

			if (!allow) {
				return <OriginalComponent {...props} />;
			}

			const {
				attributes: { c9PaddingSpaceSettings, c9MarginSpaceSettings }
			} = this.props;

			// add new Show/Hide controls.
			return (
				<Fragment>
					<OriginalComponent {...props} />
					<InspectorControls>
						<PanelBody
							title={
								<Fragment>
									<span> {__("Spacing Options", "c9-blocks")} </span>
									<span className="c9-ext-badge"> ext </span>
								</Fragment>
							}
							initialOpen={initialOpenPanel}
							onToggle={() => {
								initialOpenPanel = !initialOpenPanel;
							}}
						>
							<h5 className="padding-label">Padding</h5>

							<p className="components-base-control__label">
								Configure between different levels of padding for each side.
							</p>

							<div className="padding-top-wrapper">
								<SelectControl
									options={paddingOptions}
									value={c9PaddingSpaceSettings.top}
									onChange={value => this.updatePadding("top", value)}
								/>
							</div>
							<div className="padding-sides-wrapper">
								<SelectControl
									options={paddingOptions}
									value={c9PaddingSpaceSettings.left}
									onChange={value => this.updatePadding("left", value)}
								/>
								<Button
									label={__("Linked Padding Toggle", "c9-blocks")}
									icon={this.state.c9PaddingSpaceSettings.icon}
									onClick={this.togglePaddingLinkage}
									ref={this.state.linkedPaddingRef}
								/>
								<SelectControl
									options={paddingOptions}
									value={c9PaddingSpaceSettings.right}
									onChange={value => this.updatePadding("right", value)}
								/>
							</div>
							<div className="padding-bottom-wrapper">
								<SelectControl
									options={paddingOptions}
									value={c9PaddingSpaceSettings.bottom}
									onChange={value => this.updatePadding("bottom", value)}
								/>
							</div>

							<hr />

							<h5 className="margin-label">Margins</h5>

							<p className="components-base-control__label">
								Configure between different levels of margin for top and bottom
								sides.
							</p>

							<div className="margin-top-wrapper">
								<SelectControl
									options={marginOptions}
									value={c9MarginSpaceSettings.top}
									onChange={value => this.updateMargin("top", value)}
								/>
							</div>
							<div className="margin-sides-wrapper">
								<Button
									label={__("Linked Padding Toggle", "c9-blocks")}
									icon={this.state.c9MarginSpaceSettings.icon}
									onClick={this.toggleMarginLinkage}
									ref={this.state.linkedMarginRef}
								/>
							</div>
							<div className="margin-bottom-wrapper">
								<SelectControl
									options={marginOptions}
									value={c9MarginSpaceSettings.bottom}
									onChange={value => this.updateMargin("bottom", value)}
								/>
							</div>
						</PanelBody>
					</InspectorControls>
				</Fragment>
			);
		}
	}

	return C9ShowHideWrapper;
}, "withInspectorControl");

const withClientIdClassName = createHigherOrderComponent(BlockListBlock => {
	return props => {
		let result = [];
		const { attributes } = props;
		if (attributes.c9PaddingSpaceSettings && attributes.c9MarginSpaceSettings) {
			result = c9SpacingConfig(
				attributes.c9PaddingSpaceSettings,
				attributes.c9MarginSpaceSettings
			);
		}
		return (
			<BlockListBlock
				{...props}
				className={classnames(props.className, result)}
			/>
		);
	};
}, "withClientIdClassName");

// Init filters.
addFilter(
	"blocks.registerBlockType",
	"c9-blocks/space-settings/additional-attributes",
	addAttribute
);
addFilter(
	"editor.BlockEdit",
	"c9-blocks/space-settings/additional-attributes",
	withInspectorControl
);
addFilter(
	"editor.BlockListBlock",
	"c9-blocks/space-settings/additional-attributes",
	withClientIdClassName
);
addFilter(
	"blocks.getSaveContent.extraProps",
	"c9-blocks/space-settings/save-props",
	addSaveProps
);
