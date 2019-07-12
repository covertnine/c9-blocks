/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
import "./blocks/i18n.js";
import "./blocks/block-container/block-container.js";
import "./blocks/block-footnote/block-footnote.js";
import "./blocks/block-container/components/column.js";
import "./blocks/block-sharing/block-sharing.js";
import "./blocks/block-cta/block-cta.js";
import "./blocks/block-custom-heading/block-custom-heading.js";
import "./blocks/block-card/block-card.js";
import "./blocks/block-post-grid/index.js";

function addBlockClassName(props, blockType) {
	if (blockType.name === "core/paragraph" || blockType.name === "covertnine-blocks/c9-custom-heading") {
        return Object.assign( props, { className: 'cortexnooutline' } );
	}
	return props;
}

wp.hooks.addFilter(
	"blocks.getSaveContent.extraProps",
	"cortex-blocks/add-block-class-name",
	addBlockClassName
);