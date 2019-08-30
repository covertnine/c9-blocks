/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import Container from "./components/container";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

const { InnerBlocks, BlockControls } = wp.editor;

const { withInstanceId } = wp.compose;

const ALLOWED_BLOCKS = ["c9-blocks/post-grid"];

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { instanceId, attributes, setAttributes } = this.props;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });
		}

		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />

				<Container {...this.props}>
					<InnerBlocks
						template={[["c9-blocks/post-grid"]]}
						templateLock="all"
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</Container>
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
