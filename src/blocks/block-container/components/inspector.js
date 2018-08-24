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
    PanelColor,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: {containerImgURL, containerImgID, containerImgAlt, radioControl, bgImgSize, colorPaletteControl}, setAttributes } = this.props;

        const onSelectImage = img => {
          setAttributes( {
            containerImgID: img.id,
            containerImgURL: img.url,
            containerImgAlt: img.alt,
          } );
        };

        const onRemoveImage = () => {
          setAttributes({
            containerImgID: null,
            containerImgURL: null,
            containerImgAlt: null,
          });
        }

        return (
            <InspectorControls>
                <RadioControl
                    label={ __( 'Container Width', 'cortex-blocks' ) }
                    selected={ radioControl }
                    options={ [
                        { label: 'Fluid Width', value: 'container-fluid' },
                        { label: 'Normal Width', value: 'container' },
                        { label: 'Narrow Width', value: 'container-narrow' },
                    ] }
                    onChange={ radioControl => setAttributes( { radioControl } ) }
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
                   <RadioControl
                    label={ __( 'Background Size', 'cortex-blocks' ) }
                    selected={ bgImgSize }
                    options={ [
                        { label: 'Contain', value: 'contain' },
                        { label: 'Cover', value: 'cover' },
                        { label: 'Tile', value: 'tile' },
                    ] }
                    onChange={ bgImgSize => setAttributes( { bgImgSize } ) }
                />
                 <PanelColor
                    title={ __( 'Overlay Color', 'cortex-blocks' ) }
                    colorValue={ colorPaletteControl }
                >
                    <ColorPalette
                        value={ colorPaletteControl }
                        onChange={ colorPaletteControl => setAttributes( { colorPaletteControl } ) }
                    />
                </PanelColor>
                </PanelBody>
            </InspectorControls>
        );
    }
}
