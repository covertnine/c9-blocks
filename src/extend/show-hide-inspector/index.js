/**
 * Import CSS
 */
import "./editor.scss";

/**
 * Internal dependencies
 */
import ShowHideToolbar from "../../components/show-hide-toolbar";

/**
 * WordPress dependencies
 */
const {
	__
} = wp.i18n;
const {
	addFilter
} = wp.hooks;
const {
	Component,
	Fragment
} = wp.element;
const {
	createHigherOrderComponent
} = wp.compose;
const {
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	BaseControl
} = wp.components;

/**
 * External dependencies
 */
import assign from "lodash/assign";
import classnames from "classnames";
let initialOpenPanel = false;

/**
 * Display classes
 */
const DISPLAY_CLASSES = ["d-none d-md-block", "d-md-none d-lg-block", "d-lg-none"]

/**
 * Selected Core Blocks to extend
 */
const supportedBlocks = [
	"core/paragraph",
	"core/image",
	"core/list",
	"core/group",
	"core/heading",
	"core/media-text",
	"core/buttons",
	"core/button",
	"core/spacer"
];

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
			/^c9-blocks/.test(name))
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
		if (!settings.attributes.c9ShowHideSettings) {
			settings.attributes.c9ShowHideSettings = {
				type: "array",
				default: [false, false, false]
			};

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes.c9ShowHideSettings = settings.attributes.c9ShowHideSettings;
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
	if (attributes.c9ShowHideSettings) {
		let result = "";
		for (let i = 0; i < DISPLAY_CLASSES.length; i++) {
			if (attributes.c9ShowHideSettings[i]) {
				if ((i + 1) < DISPLAY_CLASSES.length && attributes.c9ShowHideSettings[i + 1]) {
					result += ` ${DISPLAY_CLASSES[i].split(" ")[0]}`;
				} else {
					result += ` ${DISPLAY_CLASSES[i]}`;
				}
			}
		}
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

		render() {
			const props = this.props;
			const blockName = props.name;
			const allow = checkTargetBlock(blockName);

			if (!allow) {
				return <OriginalComponent {
					...props
				}
				/>;
			}

			const {
				setAttributes,
				attributes
			} = this.props;

			// add new Show/Hide controls.
			return ( <
				Fragment >
				<
				OriginalComponent {
					...props
				}
				/>

				<
				InspectorControls >
				<
				PanelBody title = {
					<
					Fragment >
					<
					span > {
						__("Device Visibility Settings")
					} < /span> <
					span className = "c9-ext-badge" > ext < /span> < /
					Fragment >
				}
				initialOpen = {
					initialOpenPanel
				}
				onToggle = {
					() => {
						initialOpenPanel = !initialOpenPanel;
					}
				} >
				<
				ShowHideToolbar value = {
					attributes.c9ShowHideSettings
				}
				onChange = {
					value => {
						let newSettings = [...attributes.c9ShowHideSettings];
						newSettings[value[1]] = value[0];
						setAttributes({
							c9ShowHideSettings: newSettings
						});
					}
				}
				/> <
				BaseControl help = {
					__(
						"Select the buttons above to hide the block on specific devices. Device visibility settings will only take effect once you are on the preview or live page, and not while you're in editing mode."
					)
				}
				/> < /
				PanelBody > <
				/InspectorControls> < /
				Fragment >
			);
		}
	}

	return C9ShowHideWrapper;
}, "withInspectorControl");

// Init filters.
addFilter(
	"blocks.registerBlockType",
	"c9-blocks/show-hide/additional-attributes",
	addAttribute
);
addFilter(
	"editor.BlockEdit",
	"c9-blocks/show-hide/additional-attributes",
	withInspectorControl
);
addFilter(
	"blocks.getSaveContent.extraProps",
	"c9-blocks/show-hide/save-props",
	addSaveProps
);
