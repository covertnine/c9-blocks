<?php
/**
 * Test `dist_file_exist`
 *
 * @package C9 Blocks
 */

/**
 * Confirms if built files are in the dist folder
 */
class Dist_File_Exist_Test extends WP_UnitTestCase {

	/**
	 * Tests if dist contains all files
	 */
	function test_vendor_script_filename() {
		$cases = array( 'blocks.build.js', 'blocks.editor.build.css', 'blocks.frontend.build.js', 'blocks.build.css', 'blocks.vendors.build.js' );

		$path  = dirname( __DIR__ ) . '/dist';
		$files = scandir( $path );
		$files = array_diff( scandir( $path ), array( '.', '..' ) );

		$check = true;

		foreach ( $cases as $c ) {
			if ( ! in_array( $c, $files, true ) ) {
				$check = false;
			}
		}

		$this->assertTrue(
			$check
		);
	}
}
