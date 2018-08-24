 /**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    MediaUpload,
} = wp.editor;
const {
    RadioControl,
    IconButton,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: {containerImgURL, radioControl, containerImgID, containerImgAlt}, setAttributes } = this.props;
        console.log('inspector image url', containerImgURL);
        console.log('inspector radio control', radioControl);

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
                <MediaUpload
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
                        { __( 'Select Image' ) }
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
            </InspectorControls>
        );
    }
}
