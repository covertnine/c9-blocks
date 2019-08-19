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
 * Import global styles.
 */
import "./block-globals.style.scss";

import "./blocks/i18n.js";
import "./blocks/block-sharing/block-sharing.js";
import "./blocks/block-cta/block-cta.js";
import "./blocks/block-heading/block-heading.js";
import "./blocks/block-grid-container/block-grid-container.js";
import "./blocks/block-column-container/block-column-container.js";
import "./blocks/block-column-container/components/column.js";
import "./blocks/block-horizontal-tabs/block-horizontal-tabs.js";
import "./blocks/block-horizontal-tabs/components/horizontal-tab.js";
import "./blocks/block-vertical-tabs/block-vertical-tabs.js";
import "./blocks/block-vertical-tabs/components/vertical-tab.js";
import "./blocks/block-toggles/block-toggles.js";
import "./blocks/block-toggles/components/toggle.js";
import "./blocks/block-post-container/block-post-container.js";
import "./blocks/block-post-grid/block-post-grid.js";
import "./blocks/block-carousel/block-carousel.js";
import "./blocks/block-carousel/components/slide.js";
import "./blocks/block-image-carousel/block-image-carousel.js";
