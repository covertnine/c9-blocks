<?php
/**
 * Plugin Name: COVERT NINE Blocks
 * Plugin URI: https://www.covertnine.com
 * Description: COVERT NINE blocks for cortextoo WordPress theme
 * Author: COVERT NINE
 * Author URI: https://www.covertnine.com
 * Version: 1.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
