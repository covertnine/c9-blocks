<?php
/**
 * Plugin Name: C9 Blocks
 * Plugin URI: https://www.covertnine.com
 * Description: COVERT NINE blocks for C9 WordPress theme using a combination of Bootstrap + CSS Grid
 * Author: COVERT NINE
 * Author URI: https://www.covertnine.com
 * Version: 1.0.1
 * License: GPL2+
 * Text Domain: c9-blocks
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package C9 Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
