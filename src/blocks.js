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

/**
 * Register block category + side menu.
 */
import "./update-category";

/**
 * Block extensions.
 */
import "./extend";

// set locale
import "./blocks/i18n.js";

// main blocks
import "./blocks/block-sharing";
import "./blocks/block-cta";
import "./blocks/block-heading";
import "./blocks/block-grid-container";
import "./blocks/block-horizontal-tabs";
import "./blocks/block-vertical-tabs";
import "./blocks/block-toggles";
import "./blocks/block-posts-grid";
import "./blocks/block-carousel";
import "./blocks/block-image-carousel";

// child blocks
import "./blocks/block-column-container";
import "./blocks/block-column-container/components/column.js";
import "./blocks/block-horizontal-tabs/components/horizontal-tab";
import "./blocks/block-vertical-tabs/components/vertical-tab";
import "./blocks/block-toggles/components/toggle.js";
import "./blocks/block-carousel/components/slide.js";
import "./blocks/block-post-grid";
