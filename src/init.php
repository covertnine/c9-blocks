<?php

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Add custom block category
add_filter('block_categories', function ($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'covertnine-blocks',
                'title' => __('Covertnine Blocks', 'covertnine-blocks'),
            ),
        )
    );
}, 10, 2);

/**
 * Initialize the blocks
 */
function cortex_blocks_loader()
{

    /**
     * Load Social Block PHP
     */
    require_once plugin_dir_path(__FILE__) . 'blocks/block-sharing/index.php';

    /**
     * Load Post Grid PHP
     */
    require_once plugin_dir_path(__FILE__) . 'blocks/block-post-grid/index.php';
}
add_action('plugins_loaded', 'cortex_blocks_loader');


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function cortex_blocks_cgb_block_assets()
{
    // Styles.
    wp_enqueue_style(
        'c9-blocks-style', // Handle.
        plugins_url('/dist/blocks.style.build.css', dirname(__FILE__)), // Block style CSS.
        array(), // Dependency to include the CSS after it.
        filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.style.build.css') // Version: filemtime — Gets file modification time.
    );
} // End function cortex_blocks_cgb_block_assets().

// Hook: Frontend assets.
add_action('enqueue_block_assets', 'cortex_blocks_cgb_block_assets');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function cortex_blocks_cgb_editor_assets()
{
    // Scripts.
    wp_enqueue_script(
        'cortex_blocks-cgb-block-js', // Handle.
        plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
        array('wp-blocks', 'wp-i18n', 'wp-element'), // Dependencies, defined above.
        filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.build.js'), // Version: filemtime — Gets file modification time.
        true // Enqueue the script in the footer.
    );

    //dequeue core blocks we don't want users using
    wp_enqueue_script(
        'cortex_blocks-deregister-blocks',
        plugins_url('/src/deregister-blocks.js', dirname(__FILE__)),
        array('wp-blocks')
    );

    // Styles.
    wp_enqueue_style(
        'bootstrap-css',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        array('wp-blocks', 'wp-il8n', 'wp-element'),
        true
    );
    wp_enqueue_style(
        'cortex_blocks-cgb-block-editor-css', // Handle.
        plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
        array('wp-edit-blocks') // Dependency to include the CSS after it.
        // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
    );
} // End function cortex_blocks_cgb_editor_assets().

// Hook: Editor assets.
add_action('enqueue_block_editor_assets', 'cortex_blocks_cgb_editor_assets', 9999);


/**
 * Initialize the blocks frontend
 */
function cortex_blocks_front_assets()
{
    // Youtube Player API
    wp_enqueue_script(
        'youtube-api',
        'https://www.youtube.com/iframe_api',
        false
    );

    // blocks frontend
    wp_enqueue_script(
        'cortex_blocks-frontend',
        plugins_url('dist/blocks.front.build.js', dirname(__FILE__)),
        array('youtube-api', 'wp-element', 'wp-blocks', 'wp-i18n')
    );

    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', array(''), '4.3.1');
}

// Hook: Cortex Blocks Frontend
add_action('wp_enqueue_scripts', 'cortex_blocks_front_assets');


/**
 * Add image sizes
 */
function cortex_blocks_image_sizes()
{
    // Post Grid Block.
    add_image_size('ab-block-post-grid-landscape', 600, 400, true);
    add_image_size('ab-block-post-grid-square', 600, 600, true);
}
add_action('after_setup_theme', 'cortex_blocks_image_sizes');
