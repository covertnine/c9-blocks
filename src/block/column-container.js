/**
 * Block dependencies
 */
import classnames from 'classnames';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Dashicon, Tooltips, Button, PanelBody, Toolbar, withNotices } = wp.components;
const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks, BlockAlignmentToolbar, BlockControls } = wp.editor;


registerBlockType( 'covertnine-blocks/column-containers', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Container', 'cortex-blocks' ),
	description: __( 'A responsive container for columns of content', 'cortex-blocks' ),
	icon: 'columns',
	category: 'layout',
	keywords: [
		__( 'column', 'cortex-blocks' ),
		__( 'container', 'cortex-blocks'),
		__( 'responsive', 'cortex-blocks' ),
	],
	attributes: {
		columnContainer: {
			type: 'string',
			default: 'container',
		},
	},


	edit: props => {
		const {attributes: columnContainer, className, setAttributes } = props;

		// Creates a column container that can take other blocks
		return (
				<div className={ className }>
/*                    <BlockControls key="custom-controls">
                        <Toolbar>
                            <Tooltip text={ __( 'Normal Width', 'cortex-blocks' )  }>
                                <Button
                                    className={ classnames(
                                        'components-icon-button',
                                        'components-toolbar__control',
                                        { 'is-active': highContrast },
                                    ) }
                                    onClick={ () => setAttributes( { highContrast: ! highContrast } ) }
                                >
                                    { icon }
                                </Button>
                            </Tooltip>
                        </Toolbar>
                    </BlockControls>*/
					<div class="row">
						<div>
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

