 /**
 * External dependencies
 */
import memoize from 'memize';
import times  from 'lodash/times';
import classnames from 'classnames';

/**
 * Block dependencies
 */
import Inspector from './components/inspector';
import './styles/style.scss';
import attributes from './attributes';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Dashicon, Tooltip, Button, PanelBody, Toolbar, withNotices, G, SVG, Path } = wp.components;
const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { Fragment } = wp.element;

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize( ( columns ) => {
  return times( columns, () => [ 'covertnine-blocks/column' ] );
} );

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
    const { 
      attributes: { 
        bgImgPosY, 
        bgImgPosX, 
        containerImgURL, 
        containerWidth, 
        bgImgSize, 
        bgImgAttach, 
        overlayHue, 
        overlayOpacity, 
        blendMode,
        containerMargin,
        containerPadding,
        columns,
      }, 
      setAttributes, 
      className 
    } = props;
    // Creates a column container that can take other blocks
    return [
        <Inspector { ...{ setAttributes, ...props} } />,
        <div 
          className={ classnames(containerWidth) } 
          style={ cortexBackgroundStyles( 
                containerImgURL, 
                bgImgSize, 
                bgImgAttach, 
                bgImgPosX, 
                bgImgPosY, 
                overlayHue,
                overlayOpacity,
                blendMode,
                 ) } 
              >
          <div className="row">
            <div className={containerWidth}>
              <InnerBlocks
                template={ getColumnsTemplate( columns ) }
                templateLock="all"
                 />
            </div>
          </div>
        </div>
    ];
  },

  save: props => {
    const { 
      attributes: { 
        bgImgPosY, 
        bgImgPosX, 
        containerImgURL, 
        containerWidth, 
        bgImgSize, 
        bgImgAttach, 
        overlayHue, 
        overlayOpacity, 
        blendMode,
        containerMargin,
        containerPadding,
      }, 
      setAttributes, 
      className 
    } = props;
    
    const containerWidth3 = containerWidth;

    return (
        <div>
          <div className="row">
            <div 
              className={ classnames(containerWidth) } 
              style={ cortexBackgroundStyles( 
                containerImgURL, 
                bgImgSize, 
                bgImgAttach, 
                bgImgPosX, 
                bgImgPosY, 
                overlayHue,
                overlayOpacity,
                blendMode,
                 ) } 
              >
              <div className="col-xs-10">
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
    );
  }, //end save
} ); //end registerBlockType

function cortexBackgroundStyles( url, size, attachment, posX, posY, hue, opacity, blend ) {
  let styles = {};
  if ( url ) {
    styles.backgroundImage = `url(${ url })`, 
    styles.backgroundSize = size ? 'cover' : 'contain';
    styles.backgroundAttachment = attachment ? 'scroll' : 'fixed';
    
    styles.backgroundPositionX = posX > 0 ? `${posX}0%` : `0`;
    styles.backgroundPositionY = posY > 0 ? `${posY}0%` : `0`;

    styles.backgroundBlendMode = `${blend}`;
  } if ( hue ) {
    styles.backgroundColor = hexToRGBA(hue, opacity);
  }
  return styles;
}

function hexToRGBA(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r},${g},${b},.${alpha})`;
}
