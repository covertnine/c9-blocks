/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './components/inspector';
import './styles/style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Dashicon, Tooltip, Button, PanelBody, Toolbar, withNotices } = wp.components;
const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks } = wp.editor;

const attributes = {
    containerWidth: {
        type: 'string',
        default: 'container',
    },
    containerImgURL: {
        type: 'string',
    },
    // true evaluates to backgroundSize cover, false to backgroundSize contain
    bgImgSize: {
        type: 'boolean',
        default: true,
    },
    // true evaluates to backgroundAttachment scroll, false to fixed
    bgImgAttach: {
      type: 'boolen',
      default: true,
    },
    overlayHue: {
        type: 'string',
        default: undefined,
    },
    overlayOpacity: {
        type: 'number',
        default: '5',
    },
    bgImgPosX: {
      type: 'number',
      default: '5',
    },
    bgImgPosY: {
      type: 'number',
      default: '5',
    },
};

registerBlockType( 'covertnine-blocks/column-containers', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'Content Container', 'cortex-blocks' ),
  description: __( 'A responsive container for columns of content', 'cortex-blocks' ),
  icon: 'columns',
  category: 'layout',
  supports: {
    alignwide: true,
  },
  keywords: [
    __( 'column', 'cortex-blocks' ),
    __( 'container', 'cortex-blocks'),
    __( 'responsive', 'cortex-blocks' ),
  ],
  attributes,
  edit: props => {
    const { attributes: { bgImgPosY, bgImgPosX, containerImgURL, containerWidth, bgImgSize, bgImgAttach, overlayHue, overlayOpacity }, setAttributes, className } = props;
    // Creates a column container that can take other blocks
    return [
        <Inspector { ...{ setAttributes, ...props} } />,
        <div 
          className={ classnames('container', className) } 
          style={ cortexBackgroundStyles( containerImgURL, bgImgSize, bgImgAttach, bgImgPosX, bgImgPosY ) } 
          >
        <div className="container-overlay" style={ cortexOverlayStyles( overlayHue, overlayOpacity )} >
        </div>
          <div className="row">
            <div className={containerWidth}>
              <div className="col-xs-12">
                <InnerBlocks />
              </div>
            </div>
          </div>
        </div>
    ];
  },

  save: props => {
    const { attributes: { bgImgPosY, bgImgPosX, containerImgURL, containerWidth, bgImgSize, bgImgAttach, overlayHue, overlayOpacity}, setAttributes, className } = props;
    const containerWidth3 = containerWidth;

    return (
        <div>
        <div className="container-overlay" style={ cortexOverlayStyles( overlayHue, overlayOpacity )} >
        </div>
          <div className="row">
            <div 
              className={ classnames('container', className) } 
              style={ cortexBackgroundStyles( containerImgURL, bgImgSize, bgImgAttach, bgImgPosX, bgImgPosY ) } 
              >
              <div className="col-xs-12">
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
    );
  }, //end save
} ); //end registerBlockType

function cortexBackgroundStyles( url, size, attachment, posX, posY ) {
  if ( url ) {
    let styles = { 
      backgroundImage: `url(${ url })`, 
    }
    styles.backgroundSize = size ? 'cover' : 'contain';
    styles.backgroundAttachment = attachment ? 'scroll' : 'fixed';
    
    styles.backgroundPositionX = posX > 0 ? `${posX}0%` : `0`;
    styles.backgroundPositionY = posY > 0 ? `${posY}0%` : `0`;
    
    return styles;

  } else {
    return undefined;
  }
}

function cortexOverlayStyles( color, opacity ) {
  return color ?
  {
    backgroundColor: `${color}`,
    opacity: `.${opacity}`,
  } :
  undefined;
}
