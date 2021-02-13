/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import Container from "./components/container";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.blockEditor;

/**
 * External Dependencies.
 */
import cryptoRandomString from "crypto-random-string";

const ALLOWED_BLOCKS = ["c9-blocks/post-grid"];

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	componentDidUpdate() {
		this.checkBlockIdAndUpdate();
	}

	checkBlockIdAndUpdate = () => {
		const { attributes, setAttributes } = this.props;

		const { instanceId, containerVideoID } = attributes;

		// check for possible id collision
		if (
			instanceId !== undefined &&
			1 <
				document.querySelectorAll(`#player-${containerVideoID}-${instanceId}`)
					.length
		) {
			const newInstanceId = parseInt(
				cryptoRandomString({ length: 4, type: "numeric" })
			);

			setAttributes({
				instanceId: newInstanceId
			});
		}
	};

	render() {
		const { attributes, setAttributes } = this.props;
		let instanceId = attributes.instanceId;

		if (instanceId === undefined) {
			// set default random id if not set
			instanceId = this.props.instanceId;
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

export default Edit;
