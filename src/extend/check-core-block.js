const supportedBlocks = [
	"core/heading",
	"core/quote",
	"core/list",
	"core/table"
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
