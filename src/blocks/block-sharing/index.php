<?php
/**
 * Server-side rendering for the sharing block
 *
 * @since   1.1.2
 * @package C9 Blocks
 */

/**
 * Register the block on the server
 */
function c9_blocks_register_sharing() {

	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Register the sharing block.
	register_block_type(
		'c9-blocks/social-share',
		array(
			'style'           => 'c9-blocks-style-css',
			'attributes'      => array(
				'facebook'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'instagram'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'instagramLink'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'tiktok'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'tiktokLink'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'twitter'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'linkedin'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'pinterest'        => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'email'            => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'reddit'           => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'shareAlignment'   => array(
					'type' => 'string',
				),
				'shareButtonStyle' => array(
					'type'    => 'string',
					'default' => 'c9-share-icon-only',
				),
				'shareButtonShape' => array(
					'type'    => 'string',
					'default' => 'c9-share-shape-circular',
				),
				'shareButtonSize'  => array(
					'type'    => 'string',
					'default' => 'c9-share-size-medium',
				),
				'shareButtonColor' => array(
					'type'    => 'string',
					'default' => 'c9-share-color-standard',
				),
			),
			'render_callback' => 'c9_blocks_render_sharing',
		)
	);
}
add_action( 'init', 'c9_blocks_register_sharing' );


/**
 * Add the pop-up share window to the footer
 */
function c9_blocks_social_icon_footer_script() { ?>
	<script type="text/javascript">
		function c9BlocksShare( url, title, w, h ){
			var left = ( window.innerWidth / 2 )-( w / 2 );
			var top  = ( window.innerHeight / 2 )-( h / 2 );
			return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=600, top='+top+', left='+left);
		}
	</script>
	<?php
}
add_action( 'wp_footer', 'c9_blocks_social_icon_footer_script' );

/**
 * Render the sharing links
 *
 * @param object $attributes Status of block.
 */
function c9_blocks_render_sharing( $attributes ) {
	global $post;

	// Setup the featured image.
	if ( has_post_thumbnail() ) {
		$thumbnail_id = get_post_thumbnail_id( $post->ID );
		$thumbnail    = $thumbnail_id ? current( wp_get_attachment_image_src( $thumbnail_id, 'large', true ) ) : '';
	} else {
		$thumbnail = null;
	}

	// Twitter share URL.
	$twitter_url = 'http://twitter.com/share?text=' . get_the_title() . '&url=' . get_the_permalink() . '';

	// Facebook share URL.
	$facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' . get_the_permalink() . '&title=' . get_the_title() . '';

	// LinkedIn share URL.
	$linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' . get_the_permalink() . '&title=' . get_the_title() . '';

	// Pinterest share URL.
	$pinterest_url = 'https://pinterest.com/pin/create/button/?&url=' . get_the_permalink() . '&description=' . get_the_title() . '&media=' . esc_url( $thumbnail ) . '';

	// Email URL.
	$email_url = 'mailto:?subject=' . get_the_title() . '&body=' . get_the_title() . '&mdash;' . get_the_permalink() . '';

	// Reddit URL.
	$reddit_url = 'https://www.reddit.com/submit?url=' . get_the_permalink() . '';

	// Build the share URLs.
	$share_url = '';

	if ( isset( $attributes['twitter'] ) && $attributes['twitter'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-twitter"
					title="%2$s">
					<i class="fab fa-twitter"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $twitter_url ),
			esc_html__( 'Share on Twitter', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['facebook'] ) && $attributes['facebook'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-facebook"
					title="%2$s">
					<i class="fab fa-facebook-f"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $facebook_url ),
			esc_html__( 'Share on Facebook', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['instagram'] ) && $attributes['instagram'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-instagram"
					title="%2$s">
					<i class="fab fa-instagram"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $attributes['instagramLink'] ),
			esc_html__( 'Share on Instagram', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['tiktok'] ) && $attributes['tiktok'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-tiktok"
					title="%2$s">
					<i class="fab fa-tiktok"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $attributes['tiktokLink'] ),
			esc_html__( 'Share on Tiktok', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['pinterest'] ) && $attributes['pinterest'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-pinterest"
					title="%2$s">
					<i class="fab fa-pinterest-p"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $pinterest_url ),
			esc_html__( 'Share on Pinterest', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['linkedin'] ) && $attributes['linkedin'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-linkedin"
					title="%2$s">
					<i class="fab fa-linkedin-in"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $linkedin_url ),
			esc_html__( 'Share on LinkedIn', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['reddit'] ) && $attributes['reddit'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="javascript:void(0)"
					onClick="javascript:c9BlocksShare(\'%1$s\', \'%2$s\', \'600\', \'600\')"
					class="c9-share-reddit"
					title="%2$s">
					<i class="fab fa-reddit-alien"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $reddit_url ),
			esc_html__( 'Share on Reddit', 'c9-blocks' )
		);
	}

	if ( isset( $attributes['email'] ) && $attributes['email'] ) {
		$share_url .= sprintf(
			'<li>
				<a
					href="%1$s"
					class="c9-share-email"
					title="%2$s">
					<i class="fas fa-envelope"></i> <span class="c9-social-text">%2$s</span>
					<span class="sr-only">(Link opens in new window)</span>
				</a>
			</li>',
			esc_url( $email_url ),
			esc_html__( 'Share via Email', 'c9-blocks' )
		);
	}

	// Render the list of share links.
	$block_content = sprintf(
		'<div class="c9-social-sharing c9-block-sharing %2$s %3$s %4$s %5$s %6$s">
			<ul class="c9-share-list">%1$s</ul>
		</div>',
		$share_url,
		isset( $attributes['shareButtonStyle'] ) ? $attributes['shareButtonStyle'] : null,
		isset( $attributes['shareButtonShape'] ) ? $attributes['shareButtonShape'] : null,
		isset( $attributes['shareButtonSize'] ) ? $attributes['shareButtonSize'] : null,
		isset( $attributes['shareButtonColor'] ) ? $attributes['shareButtonColor'] : null,
		isset( $attributes['shareAlignment'] ) ? $attributes['shareAlignment'] : null
	);

	return $block_content;
}
