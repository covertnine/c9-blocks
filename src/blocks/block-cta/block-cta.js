/**
 * Block Cortex CTA
 */
import Inspector from './components/block-cta-inspector';
import './styles/style.scss';
import attributes from './attributes';
import ctaIcon from '../../../assets/cta';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Dashicon, Tooltip, Button, PanelBody, Toolbar, withNotices, G, SVG, Path } = wp.components;
const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { Fragment } = wp.element;

registerBlockType('covertnine-blocks/cortex-cta', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Cortex CTA', 'covertnine-blocks'),
  description: __('Call to Action', 'covertnine-blocks'),
  icon: ctaIcon,
  category: 'layout',
  supports: {
    alignwide: true,
  },
  keywords: [
    __('cta', 'covertnine-blocks'),
    __('call', 'covertnine-blocks'),
    __('responsive', 'covertnine-blocks'),
  ],
  attributes,
  edit: props => {
    const {
      attributes: {
        buttonText,
        buttonUrl,
        buttonAlignment,
        buttonBackgroundColor,
        buttonTextColor,
        buttonSize,
        buttonShape,
        buttonTarget,
        ctaTitle,
        ctaText,
        ctaTitleFontSize,
        titleFontSize,
        ctaTextFontSize,
        ctaWidth,
        ctaBackgroundColor,
        ctaTextColor,
        imgURL,
        imgID,
        imgAlt,
        dimRatio,
      },
      attributes,
      isSelected,
      editable,
      className,
      setAttributes
    } = props;
    // Creates a column container that can take other blocks
    return [
      // Show the alignment toolbar on focus
      <BlockControls>
        <BlockAlignmentToolbar
          value={ctaWidth}
          onChange={ctaWidth => setAttributes({ ctaWidth })}
          controls={['center', 'wide', 'full']}
        />
        <AlignmentToolbar
          value={buttonAlignment}
          onChange={(value) => {
            setAttributes({ buttonAlignment: value });
          }}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector
        {...{ setAttributes, ...this.props }}
      />,
      // Show the button markup in the editor
      <CallToAction {...this.props}>
        {imgURL && !!imgURL.length && (
          <div class="cortex-cta-image-wrap">
            <img
              className={classnames(
                'cortex-cta-image',
                dimRatioToClass(dimRatio),
                {
                  'has-background-dim': dimRatio !== 0,
                }
              )}
              src={imgURL}
              alt={imgAlt}
            />
          </div>
        )}

        <div class="cortex-cta-content">
          <RichText
            tagName="h2"
            placeholder={__('Call-To-Action Title', 'covertnine-blocks')}
            keepPlaceholderOnFocus
            value={ctaTitle}
            className={classnames(
              'cortex-cta-title',
              'ab-font-size-' + titleFontSize,
            )}
            style={{
              color: ctaTextColor,
            }}
            onChange={(value) => setAttributes({ ctaTitle: value })}
          />
          <RichText
            tagName="div"
            multiline="p"
            placeholder={__('Call To Action Text', 'covertnine-blocks')}
            keepPlaceholderOnFocus
            value={ctaText}
            className={classnames(
              'cortex-cta-text',
              'ab-font-size-' + ctaTextFontSize,
            )}
            style={{
              color: ctaTextColor,
            }}
            onChange={(value) => setAttributes({ ctaText: value })}
          />
        </div>
        <div class="cortex-cta-button">
          <RichText
            tagName="span"
            placeholder={__('Button text...', 'covertnine-blocks')}
            value={buttonText}
            formattingControls={[]}
            className={classnames(
              'ab-button',
              buttonShape,
              buttonSize,
            )}
            style={{
              color: buttonTextColor,
              backgroundColor: buttonBackgroundColor,
            }}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          {isSelected && (
            <form
              key="form-link"
              className={`blocks-button__inline-link ab-button-${buttonAlignment}`}
              onSubmit={event => event.preventDefault()}
              style={{
                textAlign: buttonAlignment,
              }}
            >
              <Dashicon icon={'admin-links'} />
              <URLInput
                className="button-url"
                value={buttonUrl}
                onChange={(value) => setAttributes({ buttonUrl: value })}
              />
              <IconButton
                icon="editor-break"
                label={__('Apply', 'covertnine-blocks')}
                type="submit"
              />
            </form>
          )}
        </div>
      </CallToAction>
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
        minScreenHeight,
      },
      setAttributes,
      className
    } = props;

    const containerWidth3 = containerWidth;

    return (
      <div>
        <div
          className={classnames(containerWidth)}
          style={cortexBackgroundStyles(
            containerImgURL,
            bgImgSize,
            bgImgAttach,
            bgImgPosX,
            bgImgPosY,
            overlayHue,
            overlayOpacity,
            blendMode,
            minScreenHeight,
          )}
        >
          <div class="row no-gutter">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  }, //end save
}); //end registerBlockType

function cortexBackgroundStyles(url, size, attachment, posX, posY, hue, opacity, blend, height) {
  let styles = {};

  styles.minHeight = `${height}vh`;

  if (url) {
    styles.backgroundImage = `url(${url})`,
      styles.backgroundSize = size ? 'cover' : 'contain';
    styles.backgroundAttachment = attachment ? 'scroll' : 'fixed';

    styles.backgroundPositionX = posX > 0 ? `${posX}0%` : `0`;
    styles.backgroundPositionY = posY > 0 ? `${posY}0%` : `0`;

    styles.backgroundBlendMode = `${blend}`;

  } if (hue) {
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
