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
 * Set C9 blocks settings.
 */
function load_settings() {
	// Register setting.
	register_setting(
		'c9_blocks_colors',
		'c9_blocks_colors',
		array(
			'type'              => 'string',
			'description'       => __( 'Config C9 Blocks Color Palette', 'c9-blocks' ),
			'sanitize_callback' => 'sanitize_text_field',
			'show_in_rest'      => true,
			'default'           => '',
		)
	);

	// Register setting.
	register_setting(
		'c9_orig_colors',
		'c9_orig_colors',
		array(
			'type'              => 'array',
			'items'             => 'string',
			'description'       => __( 'Config Theme Color Palette', 'c9-blocks' ),
			'sanitize_callback' => function( $colors ) {
				return array_map( 'esc_attr', $colors );
			},
			'show_in_rest'      => true,
			'default'           => array(),
		)
	);
}

add_action( 'admin-init', 'load_settings' );
add_action( 'rest_api_init', 'load_settings' );

/**
 * Load Gutenberg Palette
 */
function load_color_palette() {
	$theme_palette = get_theme_support( 'editor-color-palette' );
	update_option( 'c9_orig_colors', $theme_palette );

	$palette = json_decode( get_option( 'c9_blocks_colors' ) );
	if ( $palette && is_object( $palette ) && isset( $palette->palette ) && is_array( $palette->palette ) ) {
		$san_palette = array();
		foreach ( $palette->palette as $item ) {
			$san_palette[] = array(
				'color' => $item->color,
				'name'  => $item->name,
				'slug'  => $item->slug,
			);
		}
		if ( isset( $san_palette[0] ) ) {
			if ( ( isset( $palette->override ) && true !== $palette->override ) || ! isset( $palette->override ) ) {
				if ( is_array( $theme_palette ) ) {
					$newpalette = array_merge( reset( $theme_palette ), $san_palette );
				} else {
					$default_palette = array(
						array(
							'name'  => __( 'Pale pink', 'c9-blocks' ),
							'slug'  => 'pale-pink',
							'color' => '#f78da7',
						),
						array(
							'name'  => __( 'Vivid red', 'c9-blocks' ),
							'slug'  => 'vivid-red',
							'color' => '#cf2e2e',
						),
						array(
							'name'  => __( 'Luminous vivid orange', 'c9-blocks' ),
							'slug'  => 'luminous-vivid-orange',
							'color' => '#ff6900',
						),
						array(
							'name'  => __( 'Luminous vivid amber', 'c9-blocks' ),
							'slug'  => 'luminous-vivid-amber',
							'color' => '#fcb900',
						),
						array(
							'name'  => __( 'Light green cyan', 'c9-blocks' ),
							'slug'  => 'light-green-cyan',
							'color' => '#7bdcb5',
						),
						array(
							'name'  => __( 'Vivid green cyan', 'c9-blocks' ),
							'slug'  => 'vivid-green-cyan',
							'color' => '#00d084',
						),
						array(
							'name'  => __( 'Pale cyan blue', 'c9-blocks' ),
							'slug'  => 'pale-cyan-blue',
							'color' => '#8ed1fc',
						),
						array(
							'name'  => __( 'Vivid cyan blue', 'c9-blocks' ),
							'slug'  => 'vivid-cyan-blue',
							'color' => '#0693e3',
						),
						array(
							'name'  => __( 'Very light gray', 'c9-blocks' ),
							'slug'  => 'very-light-gray',
							'color' => '#eeeeee',
						),
						array(
							'name'  => __( 'Cyan bluish gray', 'c9-blocks' ),
							'slug'  => 'cyan-bluish-gray',
							'color' => '#abb8c3',
						),
						array(
							'name'  => __( 'Very dark gray', 'c9-blocks' ),
							'slug'  => 'very-dark-gray',
							'color' => '#313131',
						),
					);
					$newpalette      = array_merge( $default_palette, $san_palette );
				}
			} else {
				$newpalette = $san_palette;
			}
			add_theme_support( 'editor-color-palette', $newpalette );
		}
	}
}

add_action( 'after_setup_theme', 'load_color_palette', 999 );

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

	// Add local variables to reference.
	wp_localize_script(
		'c9_blocks-cgb-block-js',
		'c9_blocks_params',
		array(
			'colors'      => get_option( 'c9_blocks_colors' ),
			'orig_colors' => get_option( 'c9_orig_colors' ),
		)
	);

	// Add local variables to reference.
	wp_localize_script(
		'c9_blocks-update-category',
		'c9_blocks_params',
		array(
			'colors'      => get_option( 'c9_blocks_colors' ),
			'orig_colors' => get_option( 'c9_orig_colors' ),
		)
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
