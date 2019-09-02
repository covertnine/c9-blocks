<?php
/**
 * Test `override_script`.
 *
 * @package C9 Blocks
 */

class Override_Script_Test extends WP_UnitTestCase {
	function setUp() {
		parent::setUp();
		wp_register_script(
			'c9-blocks-dummy-script',
			'https://example.com/original',
			array( 'original-dependency' ),
			'original-version',
			false
		);
	}
	function tearDown() {
		parent::tearDown();
		wp_deregister_script( 'c9-blocks-dummy-script' );
	}
	/**
	 * Tests that script is localized.
	 */
	function test_localizes_script() {
		c9_blocks_override_script(
			'c9-blocks-dummy-script',
			'https://example.com/',
			array( 'dependency' ),
			'version',
			false
		);
		global $wp_scripts;
		$script = $wp_scripts->query( 'c9-blocks-dummy-script', 'registered' );
		$this->assertEquals( array( 'dependency', 'wp-i18n' ), $script->deps );
	}
	/**
	 * Tests that script properties are overridden.
	 */
	function test_replaces_registered_properties() {
		c9_blocks_override_script(
			'c9-blocks-dummy-script',
			'https://example.com/updated',
			array( 'updated-dependency' ),
			'updated-version',
			true
		);
		global $wp_scripts;
		$script = $wp_scripts->query( 'c9-blocks-dummy-script', 'registered' );
		$this->assertEquals( 'https://example.com/updated', $script->src );
		$this->assertEquals( array( 'updated-dependency', 'wp-i18n' ), $script->deps );
		$this->assertEquals( 'updated-version', $script->ver );
		$this->assertEquals( 1, $script->extra['group'] );
	}
	/**
	 * Tests that new script registers normally if no handle by the name.
	 */
	function test_registers_new_script() {
		c9_blocks_override_script(
			'c9-blocks-second-dummy-script',
			'https://example.com/',
			array( 'dependency' ),
			'version',
			true
		);
		global $wp_scripts;
		$script = $wp_scripts->query( 'c9-blocks-second-dummy-script', 'registered' );
		$this->assertEquals( 'https://example.com/', $script->src );
		$this->assertEquals( array( 'dependency', 'wp-i18n' ), $script->deps );
		$this->assertEquals( 'version', $script->ver );
		$this->assertEquals( 1, $script->extra['group'] );
	}
}
