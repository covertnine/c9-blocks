/**
 * Block dependencies
 */
import './styles/style.scss';
import './styles/editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register block
 */
 export default registerBlockType(
    'cortex-blocks/richtext',
    {
        title: __( 'Cortex - Footnote', 'cortex-blocks' ),
        description: __( 'How to use the RichText component for building your own editable blocks.', 'cortex-blocks' ),
        category: 'common',
        keywords: [
            __( 'Banner', 'cortex-blocks' ),
            __( 'Call to Action', 'cortex-blocks' ),
            __( 'Message', 'cortex-blocks' ),
        ],
        attributes: {
            message: {
                type: 'array',
                source: 'children',
                selector: '.message-body',
            }
        },
        supports: {
          anchor: true
        },
        edit: props => {
            const { attributes: { message }, className, setAttributes } = props;
            const onChangeMessage = message => { setAttributes( { message } ) };
            return (
                <div className={ className }>
                    <h2>{ __( 'Call to Action', 'cortex-blocks' ) }</h2>
                    <RichText
                        tagName="div"
                        multiline="p"
                        placeholder={ __( 'Add your custom message', 'cortex-blocks' ) }
                      onChange={ onChangeMessage }
                      value={ message }
                  />
                </div>
            );
        },
        save: props => {
            const { attributes: { message } } = props;
            return (
                <div>
                    <h2>{ __( 'Call to Action', 'cortex-blocks' ) }</h2>
                    <div class="message-body">
                        { message }
                    </div>
                </div>
            );
        },
    },
);