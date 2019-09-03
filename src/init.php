<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package C9 Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Add custom block category.
add_filter(
	'block_categories',
	function ( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'c9-blocks',
					'title' => __( 'COVERT NINE Blocks', 'c9-blocks' ),
					'icon'  => '',
				),
			),
			$categories
		);
	},
	10,
	2
);

/**
 * Initialize the blocks
 */
function c9_blocks_loader() {
	/**
	 * Load Social Block PHP
	 */
	require_once plugin_dir_path( __FILE__ ) . 'blocks/block-sharing/index.php';

	/**
	 * Load Post Grid PHP
	 */
	require_once plugin_dir_path( __FILE__ ) . 'blocks/block-post-grid/index.php';
}
add_action( 'plugins_loaded', 'c9_blocks_loader' );


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function c9_blocks_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'c9-blocks-style', // Handle.
		plugins_url( '/dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array(), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function c9_blocks_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'c9_blocks_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function c9_blocks_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'c9_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// update category, e.g. add icon and dequeue core blocks we don't want users using.
	wp_enqueue_script(
		'c9_blocks-update-category',
		plugins_url( 'dist/blocks.update-category.build.js', dirname( __FILE__ ) ),
		array( 'wp-hooks', 'wp-blocks', 'wp-components', 'wp-plugins', 'wp-edit-post', 'wp-element' )
	);

	c9_check_bootstrap();

	// Youtube Player API.
	wp_enqueue_script(
		'youtube-api',
		'https://www.youtube.com/player_api',
		false
	);

	wp_enqueue_style(
		'c9_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function c9_blocks_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'c9_blocks_cgb_editor_assets', 9999 );


/**
 * Initialize the blocks frontend
 */
function c9_blocks_front_assets() {
	// Youtube Player API.
	wp_enqueue_script(
		'youtube-api',
		'https://www.youtube.com/player_api',
		false
	);

	// jQuery for frontend.
	wp_enqueue_script(
		'jquery',
		'https://code.jquery.com/jquery-3.3.1.slim.min.js',
		false
	);

	// blocks frontend.
	wp_enqueue_script(
		'c9_blocks-frontend',
		plugins_url( 'dist/blocks.frontend.build.js', dirname( __FILE__ ) ),
		array( 'youtube-api', 'wp-element', 'wp-blocks', 'wp-i18n' )
	);

	c9_check_bootstrap();
}

// Hook: c9 Blocks Frontend.
add_action( 'wp_enqueue_scripts', 'c9_blocks_front_assets' );


/**
 * Add image sizes
 */
function c9_blocks_image_sizes() {
	// Post Grid Block.
	add_image_size( 'ab-block-post-grid-landscape', 600, 400, true );
	add_image_size( 'ab-block-post-grid-square', 600, 600, true );
}
add_action( 'after_setup_theme', 'c9_blocks_image_sizes' );

/**
 * Utility function, check for bootstrap for common handle names, if no match, enqueue bootstrap
 */
function c9_check_bootstrap() {
	$bootstrap_handles = array( 'bootstrap', 'bootstrap-css', 'bootstrapcss', 'bootstrap4', 'bootstrap4css', 'bootstrap4-css' );

	/**
	 * Utility function, check for bootstrap for common handle names, if no match, enqueue bootstrap
	 *
	 * @param string $handle The handle to check.
	 */
	function check_bootstrap_exist( $handle ) {
		return wp_style_is( $handle, 'queue' ) || wp_style_is( $handle, 'done' );
	}

	$checks = array_filter(
		array_map( 'check_bootstrap_exist', $bootstrap_handles ),
		function ( $c ) {
			return $c;
		}
	);

	// if any of them matches, then array length of $check > 0.
	if ( sizeof( $checks ) === 0 ) {
		// Styles.
		wp_enqueue_style(
			'bootstrap-css',
			'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
			array(),
			'4.3.1'
		);

		wp_enqueue_script(
			'bootstrap-js',
			'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
			array(),
			'4.3.1'
		);
	}
}
