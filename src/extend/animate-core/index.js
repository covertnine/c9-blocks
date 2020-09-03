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
const { InspectorControls } = wp.blockEditor;

/**
 * Internal dependencies
 */
import AnimationPanel from "../../components/animations-panel";

/**
 * External dependencies
 */
import assign from "lodash/assign";

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
						settings.deprecated[i].attributes[k] = settings.attributes[k];
					}
				});
			}
		}
	}
	return settings;
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
	class C9AnimateWrapper extends Component {
		render() {
			const props = this.props;
			const blockName = props.name;
			const allow = checkCoreBlock(blockName);

			if (!allow) {
				return <OriginalComponent {...props} />;
			}

			const {
				setAttributes,
				attributes: {
					enableAnimate,
					animateVal,
					animateDelay,
					animateSpeed,
					animateScrub
				}
			} = this.props;

			// add new animation controls.
			return (
				<Fragment>
					<OriginalComponent {...props} />

					<InspectorControls>
						<AnimationPanel
							target={`#block-${this.props.clientId}`}
							enableAnimate={enableAnimate}
							animateVal={animateVal}
							animateDelay={animateDelay}
							animateSpeed={animateSpeed}
							animateScrub={animateScrub}
							setAttributes={setAttributes}
						/>
					</InspectorControls>
				</Fragment>
			);
		}
	}

	return C9AnimateWrapper;
}, "withInspectorControl");

// Init filters.
addFilter(
	"blocks.registerBlockType",
	"c9-blocks/animate/additional-attributes",
	addAttribute
);
addFilter(
	"editor.BlockEdit",
	"c9-blocks/animate/additional-attributes",
	withInspectorControl
);
