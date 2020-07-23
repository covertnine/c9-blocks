/**
 * Import CSS
 */
import "./editor.scss";

/**
 * Internal dependencies
 */
import checkCoreBlock from "../check-core-block";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody, BaseControl } = wp.components;

/**
 * External dependencies
 */
import assign from "lodash/assign";
let initialOpenPanel = false;

/**
 * Extend gutenberg block attributes with FC.
 *
 * @param {Object} settings Original block settings.
 * @param {string} name Original block name.
 *
 * @return {Object} Filtered block settings.
 */
function addAttribute(settings, name) {
	const allow = checkCoreBlock(name);

	if (allow) {
		if (!settings.attributes.c9FC) {
			settings.attributes.c9FC = {
				type: "string",
				default: ""
			};

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes.c9FC = settings.attributes.c9FC;
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
	if (attributes.c9FC) {
		assign(extraProps, { style: { color: attributes.c9FC } });
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
	class C9FCWrapper extends Component {
		constructor() {
			super(...arguments);

			const { c9FC = "" } = this.props.attributes;

			this.state = {
				fontColor: c9FC
			};

			this.updateData = this.updateData.bind(this);
		}

		updateData(newData) {
			const { c9FC } = this.props.attributes;

			const { setAttributes } = this.props;

			const newState = { ...this.state, ...newData };

			let newAttribute = "";

			if (newState.fontColor) {
				newAttribute = newState.fontColor;
			}

			this.setState(newData);

			if (c9FC !== newAttribute) {
				setAttributes({ c9FC: newAttribute });
			}
		}

		render() {
			const props = this.props;
			const blockName = props.name;
			const allow = checkCoreBlock(blockName);

			if (!allow) {
				return <OriginalComponent {...props} />;
			}

			// add new FC controls.
			return (
				<Fragment>
					<OriginalComponent {...props} setState={this.setState} />

					<InspectorControls>
						<PanelBody
							title={
								<Fragment>
									<span>{__("Font Colors")}</span>
									<span className="c9-ext-badge">ext</span>
								</Fragment>
							}
							initialOpen={initialOpenPanel}
							onToggle={() => {
								initialOpenPanel = !initialOpenPanel;
							}}
						>
							<ColorPalette
								label={__("Font Color", "c9-blocks")}
								value={this.state.fontColor}
								onChange={fontColor => this.updateData({ fontColor })}
							/>
							<BaseControl
								help={__(
									"Color settings will only take effect once you are on the preview or live page, and not while you're in editing mode."
								)}
							/>
						</PanelBody>
					</InspectorControls>
				</Fragment>
			);
		}
	}

	return C9FCWrapper;
}, "withInspectorControl");

// Init filters.
addFilter(
	"blocks.registerBlockType",
	"c9-blocks/fc/additional-attributes",
	addAttribute
);
addFilter(
	"editor.BlockEdit",
	"c9-blocks/fc/additional-attributes",
	withInspectorControl
);
addFilter(
	"blocks.getSaveContent.extraProps",
	"c9-blocks/fc/save-props",
	addSaveProps
);
