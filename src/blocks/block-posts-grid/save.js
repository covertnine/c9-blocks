import Container from './components/container';

const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const { attributes } = this.props;
        const sanitizedAttributes = {
            ...attributes,
            containerVideoID: attributes.containerVideoID
                ? String(attributes.containerVideoID).replace(/[^a-zA-Z0-9-_]/g, '')
                : '',
        };

        return (
            <Container {...this.props} attributes={sanitizedAttributes}>
                <InnerBlocks.Content />
            </Container>
        );
    }
}