/**
 * Selected Core Blocks to extend
 */
const supportedBlocks = [
	"core/paragraph",
	"core/image",
	"core/list",
	"core/button"
];

/**
 * Check if core block may be extended.
 *
 * @param {String} name - block name.
 *
 * @return {Boolean} block supported.
 */
export default function checkCoreBlock(name) {
	return name && /^core/.test(name) && -1 !== supportedBlocks.indexOf(name);
}

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
 * Default attributes
 */
const defaultAttributes = {
	enableAnimate: {
		type: "boolean",
		default: false
	},
	animateVal: {
		type: "string",
		default: "fade"
	},
	animateDelay: {
		type: "number",
		default: 0
	},
	animateSpeed: {
		type: "number",
		default: 2000
	},
	animateScrub: {
		type: "boolean",
		default: false
	}
};

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
		const keys = Object.keys(defaultAttributes);

		for (let k of keys) {
			if (!(k in settings.attributes)) {
				settings.attributes[k] = defaultAttributes[k];
			}

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes[k]= settings.attributes[k];
					}
				});
			}
		}

		// console.log(settings)
	}
	return settings;
}

// Init filters.
addFilter(
	"blocks.registerBlockType",
	"c9-blocks/animate/additional-attributes",
	addAttribute
);

