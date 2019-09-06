<?php
/**
 * Test `layout_endpoints`.
 *
 * @package C9 Blocks
 */

/**
 * Confirms if saved block layout endpoint exists
 */
class Layout_Endpoints extends \WP_UnitTestCase {
	/**
	 * The REST API server instance.
	 *
	 * @var \WP_REST_Server
	 */
	private $server;
	/**
	 * Gutenberg Saved Blocks REST API namespace.
	 *
	 * @var string
	 */
	private $namespace = '/wp/v2';
	/**
	 * REST API routes.
	 *
	 * @var array
	 */
	private $routes;
	/**
	 * Sets up the test environment.
	 */
	// public function setUp() {
	// parent::setUp();
	// **
	// * WP_Rest_Server instance.
	// *
	// * @var WP_REST_Server $wp_rest_server
	// */
	// global $wp_rest_server;
	// $wp_rest_server = new \WP_REST_Server();
	// $this->server   = $wp_rest_server;
	// do_action( 'rest_api_init' );
	// $this->routes = $this->server->get_routes();
	// }
	// /**
	// * Tests that the gutenberg namespace exists in the REST API.
	// */
	// public function test_namespace_exists() {
	// $this->assertArrayHasKey( $this->namespace, $this->routes );
	// }
	// /**
	// * Tests the retrieval of favorite layouts.
	// */
	// public function test_saved_block_exists() {
	// $request  = new \WP_REST_Request( 'GET', '/wp/v2/types/wp_block' );
	// $response = $this->server->dispatch( $request );
	// $this->assertNotNull( $response->get_data() );
	// }
	// /**
	// * Tests the retrieval of posts.
	// */
	// public function test_saved_post_categories_exists() {
	// $request  = new \WP_REST_Request( 'GET', '/wp/v2/categories' );
	// $response = $this->server->dispatch( $request );
	// $this->assertNotNull( $response->get_data() );
	// }.
}
