/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import Container from "./components/container";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.editor;
const { withInstanceId } = wp.compose;
const { IconButton } = wp.components;

/**
 * External Dependencies.
 */
import memoize from "memize";
import times from "lodash/times";

const ALLOWED_BLOCKS = ["c9-blocks/column-container"];

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	getRowsTemplate = memoize(rows => {
		return times(rows, () => ["c9-blocks/column-container"]);
	});

	render() {
		const {
			instanceId,
			attributes,
			setAttributes,
			isSelectedBlockInRoot
		} = this.props;

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
				{isSelectedBlockInRoot && (
					<div className="c9-add-remove-rows">
						<IconButton
							label={__("Remove Image", "c9-blocks")}
							icon="dismiss"
							onClick={() => {
								if (1 < rows) {
									setAttributes({ rows: rows - 1 });
								}
							}}
						>
							{__("Remove Row", "c9-blocks")}
						</IconButton>
						<IconButton
							label={__("Remove Image", "c9-blocks")}
							icon="plus-alt"
							onClick={() => {
								if (20 > rows) {
									setAttributes({ rows: rows + 1 });
								}
							}}
						>
							{__("Add Row", "c9-blocks")}
						</IconButton>
					</div>
				)}
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
