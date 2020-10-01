/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import ResizableContainer from "./components/resizable-container";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.blockEditor;
const { withInstanceId } = wp.compose;
const { Button } = wp.components;

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

	/**
	 * Generates the child (row) column container blocks.
	 */
	getRowsTemplate = memoize(rows => {
		return times(rows, () => ["c9-blocks/column-container"]);
	});

	render() {
		const {
			instanceId,
			attributes,
			setAttributes,
			isSelectedBlockInRoot,
			updateRows
		} = this.props;

		const { rows } = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });
		}

		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />

				<ResizableContainer {...this.props} editMode={true}>
					<InnerBlocks
						template={this.getRowsTemplate(rows)}
						templateLock="insert"
						allowedBlocks={ALLOWED_BLOCKS}
						__experimentalTagName="div"
						renderAppender={false}
					/>
				</ResizableContainer>
				{isSelectedBlockInRoot && (
					<div className="c9-add-remove-rows">
						<Button
							label={__("Remove Bottom Row", "c9-blocks")}
							icon="dismiss"
							onClick={() => {
								if (1 < rows) {
									setAttributes({ rows: rows - 1 });
									updateRows(rows, rows - 1);
								}
							}}
						>
							{__("Remove Bottom Row", "c9-blocks")}
						</Button>
						<Button
							label={__("Add Row", "c9-blocks")}
							icon="plus-alt"
							onClick={() => {
								if (20 > rows) {
									setAttributes({ rows: rows + 1 });
									updateRows(rows, rows + 1);
								}
							}}
						>
							{__("Add Row", "c9-blocks")}
						</Button>
					</div>
				)}
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
