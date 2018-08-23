 /**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
} = wp.editor;
const {
    RadioControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { radioControl }, setAttributes } = this.props;

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
            </InspectorControls>
        );
    }
}
