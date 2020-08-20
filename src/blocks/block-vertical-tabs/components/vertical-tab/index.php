<?php

/**
 * Server-side rendering for the vertical tab component block
 *
 * @since   1.1.7
 * @package C9 Blocks
 */

/**
 * Renders the post grid block on server.
 *
 * @param String $attributes  Pass the block attributes.
 * @param String $content  Markup for inner block content.
 */
function covertnine_blocks_render_vertical_tabs( $attributes, $content )
{
	$classes = 'c9-vertical-tabs-tab tab-pane fade';
	if ($attributes['tabActive'] === $attributes['slug']) {
		$classes .= ' show active';
	}

	$id         = 'vtab-' . $attributes['slug'] . '-' . $attributes['id'];
	$aria_label = 'tab-button-' . $attributes['slug'];

	$tab_markup = sprintf(
		'<div class="%1$s" role="tabpanel" id="%2$s" aria-labelledby="%3$s">',
		$classes,
		esc_attr($id),
		esc_attr($aria_label)
	);

	$tab_markup .= $content . '</div>';

	return $tab_markup;
}

/**
 * Registers the vertical tab component block on server
 */
function covertnine_blocks_register_vertical_tabs()
{
	/* Check if the register function exists */
	if (!function_exists( 'register_block_type' )) {
		return;
	}

	/* Block attributes */
	register_block_type( 'c9-blocks/vertical-tabs-tab', array(
		'title'           => __('C9 Vertical Tab', 'c9-blocks'),
		'category'        => 'common',
		'parent'          => 'c9-blocks/vertical-tabs',
		'attributes'      => array(
			'slug'          => array(
				'type' => 'string',
			),
			'tabActive'           => array(
				'type' => 'string',
			),
			'id'           => array(
				'type' => 'number',
			),
		),
		'render_callback' => 'covertnine_blocks_render_vertical_tabs'
	) );
}
add_action( 'init', 'covertnine_blocks_register_vertical_tabs' );
