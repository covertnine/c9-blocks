/**
 * WordPress dependencies
 */
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;

/**
 * Internal dependencies
 */
import WidthToolbar from '../../components/width-toolbar';
import { c9AlignConfig } from './utils';

/**
 * External dependencies
 */
import assign from 'lodash/assign';
import classnames from 'classnames';
import React from 'react';

/**
 * Selected Core Blocks to extend
 */
const supportedBlocks = ['core/cover'];

/**
 * Selected C9 Blocks to extend
 */
const supportedC9Blocks = [];

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
		if (!settings.attributes.c9ContainerWidth) {
			settings.attributes.c9ContainerWidth = {
				type: 'string',
				default: 'container',
			};

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes.c9ContainerWidth = {
							type: 'string',
							default: '',
						};
					}
				});
			}
		}

		if (!settings.attributes.c9Align) {
			settings.attributes.c9Align = {
				type: 'string',
				default: '',
			};

			// add to deprecated items.
			if (settings.deprecated && settings.deprecated.length) {
				settings.deprecated.forEach((item, i) => {
					if (settings.deprecated[i].attributes) {
						settings.deprecated[i].attributes.c9Align =
							settings.attributes.c9Align;
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
	if (attributes.c9ContainerWidth !== '') {
		const result = c9AlignConfig(
			attributes.c9ContainerWidth,
			attributes.c9Align
		);
		assign(extraProps, {
			className: classnames(
				extraProps.className,
				result,
				attributes.c9ContainerWidth
			),
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
const withInspectorControl = createHigherOrderComponent((OriginalComponent) => {
	class C9ShowHideWrapper extends Component {
		constructor() {
			super(...arguments);
		}

		render() {
			const props = this.props;
			const blockName = props.name;
			const allow = checkTargetBlock(blockName);

			if (!allow) {
				return <OriginalComponent {...props} />;
			}

			const {
				setAttributes,
				attributes: { c9Align, c9ContainerWidth },
			} = this.props;

			let currWidth;
			if (0 != c9Align.length) {
				if ('container' == c9ContainerWidth) {
					currWidth = 'wide';
				} else if ('container-fluid' == c9ContainerWidth) {
					currWidth = 'full';
				} else {
					currWidth = 'narrow';
				}
			}

			// add new Show/Hide controls.
			return (
				<Fragment>
					<BlockControls>
						<WidthToolbar
							value={currWidth}
							onChange={(value) => {
								if ('wide' == value) {
									setAttributes({
										c9ContainerWidth: 'container',
										c9Align: 'wide',
									});
								} else if ('full' == value) {
									setAttributes({
										c9ContainerWidth: 'container-fluid',
										c9Align: 'full',
									});
								} else if ('narrow' == value) {
									setAttributes({
										c9ContainerWidth: 'container-narrow',
										c9Align: 'narrow',
									});
								} else {
									setAttributes({ c9ContainerWidth: 'container', c9Align: '' });
								}
							}}
						/>
					</BlockControls>
					<OriginalComponent {...props} />
				</Fragment>
			);
		}
	}

	return C9ShowHideWrapper;
}, 'withInspectorControl');

const withClientIdClassName = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		let result = '';
		const { attributes } = props;
		if (attributes.c9ContainerWidth) {
			result = c9AlignConfig(attributes.c9ContainerWidth, attributes.c9Align);
		}
		return (
			<BlockListBlock
				{...props}
				className={classnames(
					props.className,
					result,
					attributes.c9ContainerWidth
				)}
			/>
		);
	};
}, 'withClientIdClassName');

// Init filters.
addFilter(
	'blocks.registerBlockType',
	'c9-blocks/align-settings/additional-attributes',
	addAttribute
);
addFilter(
	'editor.BlockEdit',
	'c9-blocks/align-settings/additional-attributes',
	withInspectorControl
);
addFilter(
	'editor.BlockListBlock',
	'c9-blocks/align-settings/additional-attributes',
	withClientIdClassName
);
addFilter(
	'blocks.getSaveContent.extraProps',
	'c9-blocks/align-settings/save-props',
	addSaveProps
);
