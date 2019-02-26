/**
 * BLOCK: Atomic Blocks Sharing
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import ShareLinks from './components/sharing';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Import Fontawesome Icon
import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
import { makeIcon } from '../../helpers/awesomeGenerator'
const iconEl = makeIcon(faShareSquare)

// Components
const { __ } = wp.i18n; 

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
} = wp.components;

// Register the block
registerBlockType( 'covertnine-blocks/cortex-share', {
	title: __( 'Cortex Social Share', 'covertnine-blocks' ),
	description: __( 'Add sharing buttons to your posts and pages.', 'covertnine-blocks' ),
	icon: iconEl,
	category: 'covertnine-blocks',
	keywords: [
		__( 'share', 'covertnine-blocks' ),
		__( 'social', 'covertnine-blocks' ),
		__( 'cortex', 'covertnine-blocks' ),
	],

	// Render the block components
	edit: props => {

		// Setup the props
		const {
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = props;

		const {
			twitter,
			facebook,
			google,
			linkedin,
			pinterest,
			email,
			reddit,
			shareAlignment,
			shareButtonStyle,
			shareButtonShape,
			shareButtonColor,
		} = props.attributes;

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ shareAlignment }
					onChange={ ( value ) => {
						setAttributes( { shareAlignment: value } );
					} }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...props }
			/>,
			// Show the button markup in the editor
			<ShareLinks { ...props }>
				<ul class="ab-share-list">
				{ twitter &&
					<li>
						<a className='ab-share-twitter'>
							<i class="fab fa-twitter"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share on Twitter', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}

				{ facebook &&
					<li>
						<a className='ab-share-facebook'>
							<i class="fab fa-facebook-f"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share on Facebook', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}

				{ google &&
					<li>
						<a className='ab-share-google'>
							<i class="fab fa-google"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share on Google', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}

				{ pinterest &&
					<li>
						<a className='ab-share-pinterest'>
							<i class="fab fa-pinterest-p"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share on Pinterest', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}

				{ linkedin &&
					<li>
						<a className='ab-share-linkedin'>
							<i class="fab fa-linkedin"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share on LinkedIn', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}

				{ reddit &&
					<li>
						<a className='ab-share-reddit'>
							<i class="fab fa-reddit-alien"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share on reddit', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}

				{ email &&
					<li>
						<a className='ab-share-email'>
							<i class="fas fa-envelope"></i>
							<span className={ 'ab-social-text' }>
								{ __( 'Share via Email', 'covertnine-blocks' ) }
							</span>
						</a>
					</li>
				}
				</ul>
			</ShareLinks>
		];
	},

	// Render via PHP
	save() {
		return null;
	},
} );
