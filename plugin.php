<?php

/**
 * Plugin Name: C9 Blocks
 * Plugin URI: https://www.covertnine.com
 * Description: 10 new Gutenberg blocks with section templates and page templates. With C9 Blocks + Themes, the digital agency is built right into the code.
 * Author: COVERT NINE
 * Author URI: https://www.covertnine.com
 * Version: 1.4.5
 * License: GPLv3
 * Text Domain: c9-blocks
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package C9 Blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'src/init.php';

/**
 * Adds a redirect option during plugin activation on non-multisite installs.
 *
 * @param bool $network_wide Whether or not the plugin is being network activated.
 */
function c9_blocks_activate($network_wide = false)
{
	// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Only used to do a redirect. False positive.
	if (!$network_wide && !isset($_GET['activate-multi'])) {
		add_option('c9_blocks_do_activation_redirect', true);
	}
}
register_activation_hook(__FILE__, 'c9_blocks_activate');


/**
 * Redirect to the C9 Blocks Getting Started page on single plugin activation.
 */
function c9_blocks_redirect()
{
	if (get_option('c9_blocks_do_activation_redirect', false)) {
		delete_option('c9_blocks_do_activation_redirect');
		wp_safe_redirect(esc_url(admin_url('themes.php?page=c9-blocks-getting-started')));
		exit;
	}
}
add_action('admin_init', 'c9_blocks_redirect');
