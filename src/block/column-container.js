/**
 * Block dependencies
 */
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;

registerBlockType( 'covertnine-blocks/column-containers', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Container' ),
	description: __( 'A responsive container for columns of content' ),
	icon: 'columns',
	category: 'layout',
	keywords: [
		__( 'column' ),
		__( 'container' ),
		__( 'responsive' ),
	],
	supports: {
		align: [ 'aligncenter', 'wide', 'full' ]
	},

	edit: props => {
		const {attributes: className } = props;
		// Creates a column container that can take other blocks
		return (
				<div className={ className }>
					<div class="row">
						<div class="container">
							<InnerBlocks />
						</div>
					</div>
				</div>
		);
	},

	save: function( className ) {

		return (
				<div>
					<div class="row">
						<div class="container">
						<InnerBlocks.Content />
						</div>
					</div>
				</div>
		);
	},
} );

