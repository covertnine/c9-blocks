 /**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    MediaUpload,
    ColorPalette,
} = wp.editor;
const {
    RadioControl,
    IconButton,
    PanelBody,
    PanelRow,
    RangeControl,
    ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: {containerImgURL, containerImgID, containerImgAlt, containerWidth, bgImgSize, bgImgAttach, overlayHue, overlayOpacity, bgImgPosX, bgImgPosY}, setAttributes } = this.props;

        const onSelectImage = img => {
          setAttributes( {
            containerImgURL: img.url,
          } );
        };

        const onRemoveImage = () => {
          setAttributes({
            containerImgURL: null,
            bgImgSize: 'cover',
          });
        }

        return (
            <InspectorControls>
                <RadioControl
                    label={ __( 'Container Width', 'cortex-blocks' ) }
                    selected={ containerWidth }
                    options={ [
                        { label: 'Fluid Width', value: 'container-fluid' },
                        { label: 'Normal Width', value: 'container' },
                        { label: 'Narrow Width', value: 'container-narrow' },
                    ] }
                    onChange={ containerWidth => setAttributes( { containerWidth } ) }
                />
                <PanelBody title={ __( 'Background' ) } initialOpen={ false }>
                    <MediaUpload
                      id="bg-image-select"
                      label={ __( 'Background Image', 'cortex-blocks' ) }
                      onSelect={ onSelectImage }
                      type="image"
                      value={ containerImgID }
                      render={ ( { open } ) => (
                        <div>
                          <IconButton
                            className="ab-container-inspector-media"
                            label={ __( 'Edit image' ) }
                            icon="format-image"
                            onClick={ open }
                          >
                            { __( 'Background Image' ) }
                          </IconButton>

                          { containerImgURL && !! containerImgURL.length && (
                            <IconButton
                              className="ab-container-inspector-media"
                              label={ __( 'Remove Image' ) }
                              icon="dismiss"
                              onClick={ onRemoveImage }
                            >
                              { __( 'Remove' ) }
                            </IconButton>
                          ) }
                        </div>
                      ) }
                    >
                    </MediaUpload>
                    { containerImgURL && !! containerImgURL.length && (
                      <div>
                      <RadioControl
                          label={ __( 'Background Size', 'cortex-blocks' ) }
                          selected={ bgImgSize }
                          options={ [
                              { label: 'Cover', value: 'cover' },
                              { label: 'Contain', value: 'contain'},
                          ] }
                          onChange={ bgImgSize => setAttributes( { bgImgSize } ) }
                        /> 
                       <RadioControl
                          label={ __( 'Background Attachment', 'cortex-blocks' ) }
                          selected={ bgImgAttach }
                          options={ [
                              { label: 'Scroll', value: 'scroll' },
                              { label: 'Fixed', value: 'fixed'},
                          ] }
                          onChange={ bgImgAttach => setAttributes( { bgImgAttach } ) }
                        />
                        </div>
                      ) }
                    { containerImgURL && bgImgSize === 'cover' && (
                      <div>
                        <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __( 'Horizontal Position', 'cortex-blocks' ) }
                        value={ bgImgPosX }
                        onChange={ bgImgPosX => setAttributes( { bgImgPosX } ) }
                        min={ 0 }
                        max={ 10 }
                        />
                        <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __( 'Vertical Position', 'cortex-blocks' ) }
                        value={ bgImgPosY }
                        onChange={ bgImgPosY => setAttributes( { bgImgPosY } ) }
                        min={ 0 }
                        max={ 10 }
                        />
                        </div>
                      ) }
                    <ColorPalette
                        label={ __( 'Overlay Color', 'cortex-blocks' ) }
                        value={ overlayHue }
                        onChange={ overlayHue => setAttributes( { overlayHue } ) }
                    />
                    { overlayHue && !! overlayHue.length && (
                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __( 'Opacity', 'cortex-blocks' ) }
                        value={ overlayOpacity }
                        onChange={ overlayOpacity => setAttributes( { overlayOpacity } ) }
                        min={ 1 }
                        max={ 10 }
                    />
                    ) }
                </PanelBody>
            </InspectorControls>
        );
    }
}
