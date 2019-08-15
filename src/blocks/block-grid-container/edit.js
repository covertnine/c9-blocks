/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import Container from "./components/container";

/**
 * WordPress dependencies
 */

import memoize from "memize";
import times from "lodash/times";

const { Component, Fragment } = wp.element;

const { InnerBlocks, BlockControls } = wp.editor;

const { withInstanceId } = wp.compose;

const ALLOWED_BLOCKS = ["c9-blocks/column-container"];

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	getRowsTemplate = memoize(rows => {
		return times(rows, () => ["c9-blocks/column-container"]);
	});

	render() {
		const { instanceId, attributes, setAttributes } = this.props;

		const { rows } = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });
		}

		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />

				<Container {...this.props}>
					<InnerBlocks
						template={this.getRowsTemplate(rows)}
						templateLock="all"
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</Container>
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
