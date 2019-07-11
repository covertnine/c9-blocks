/**
 * BLOCK: Post and Page Grid
 */

// Import block dependencies and components
import edit from './components/edit';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Register block controls
const {
	registerBlockType,
} = wp.blocks;

// Register alignments
const validAlignments = [ 'center', 'wide', 'full' ];

// Register the block
registerBlockType( 'covertnine-blocks/ab-post-grid', {
	title: __( 'Post and Page Grid', 'covertnine-blocks' ),
	description: __( 'Add a grid or list of customizable posts or pages.', 'covertnine-blocks' ),
	icon: 'grid-view',
	category: 'covertnine-blocks',
	keywords: [
		__( 'post', 'covertnine-blocks' ),
		__( 'page', 'covertnine-blocks' ),
		__( 'grid', 'covertnine-blocks' ),
	],

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== validAlignments.indexOf( align ) ) {
			return { 'data-align': align };
		}
	},

	edit,

	// Render via PHP
	save() {
		return null;
	},
} );
