/**
 * C9 Blocks - Transform Controls
 *
 * Adds transform controls between the core heading/paragraph blocks and
 * the C9 heading block to speed up content formatting when switching
 * between a classic theme and the C9 themes (and vice-versa).
 *
 * - C9 Heading     -> Core Heading / Core Paragraph
 * - Core Heading   -> C9 Heading
 * - Core Paragraph -> C9 Heading
 */

const { getBlockType, createBlock } = wp.blocks;

const C9_HEADING_BLOCK = 'c9-blocks/heading';

/**
 * Convert a core heading/paragraph block into a C9 heading block.
 *
 * @param {Object}   attributes  The source block attributes.
 * @param {Object[]} innerBlocks The source block inner blocks.
 *
 * @return {Object} The new C9 heading block.
 */
const toC9Heading = (attributes, innerBlocks) =>
	createBlock(C9_HEADING_BLOCK, attributes, innerBlocks);

/**
 * Register the C9 heading transform controls.
 *
 * This runs after the C9 blocks have been registered, so the C9 heading
 * block type can be augmented with its transform definitions.
 */
const registerHeadingTransforms = () => {
	const headingBlockType = getBlockType(C9_HEADING_BLOCK);

	if (!headingBlockType) {
		return;
	}

	headingBlockType.transforms = {
		from: [
			{
				type: 'block',
				blocks: ['core/heading', 'core/paragraph'],
				transform: toC9Heading,
			},
		],
		to: ['core/heading', 'core/paragraph'],
	};
};

registerHeadingTransforms();
