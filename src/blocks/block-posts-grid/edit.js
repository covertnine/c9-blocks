/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import Container from './components/container';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.blockEditor;

/**
 * External Dependencies.
 */
import cryptoRandomString from 'crypto-random-string';

const ALLOWED_BLOCKS = ['c9-blocks/post-grid'];

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	componentDidMount() {
		this.initializeInstanceId();
	}

	componentDidUpdate(prevProps) {
		this.checkBlockIdAndUpdate();
		this.initializeInstanceId(prevProps);
	}

	initializeInstanceId(prevProps = {}) {
		const { instanceId } = this.props.attributes;
		if (
			instanceId === undefined &&
			(!prevProps.attributes || instanceId !== prevProps.attributes.instanceId)
		) {
			const newInstanceId =
				this.props.instanceId ||
				parseInt(cryptoRandomString({ length: 4, type: 'numeric' }));
			this.props.setAttributes({ instanceId: newInstanceId });
		}
	}

	checkBlockIdAndUpdate = () => {
		const { attributes, setAttributes } = this.props;
		const { instanceId, containerVideoID } = attributes;

		if (
			instanceId !== undefined &&
			document.querySelectorAll(`#player-${containerVideoID}-${instanceId}`)
				.length > 1
		) {
			const newInstanceId = parseInt(
				cryptoRandomString({ length: 4, type: 'numeric' })
			);
			setAttributes({ instanceId: newInstanceId });
		}
	};

	render() {
		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />

				<Container {...this.props}>
					<InnerBlocks
						template={[['c9-blocks/post-grid']]}
						templateLock="all"
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</Container>
			</Fragment>
		);
	}
}

export default Edit;
