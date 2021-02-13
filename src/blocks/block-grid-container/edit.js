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
const { Button } = wp.components;

/**
 * External Dependencies.
 */
import memoize from "memize";
import times from "lodash/times";
import cryptoRandomString from "crypto-random-string";

const ALLOWED_BLOCKS = ["c9-blocks/column-container"];

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

	/**
	 * Generates the child (row) column container blocks.
	 */
	getRowsTemplate = memoize(rows => {
		return times(rows, () => ["c9-blocks/column-container"]);
	});

	render() {
		const {
			attributes,
			setAttributes,
			isSelectedBlockInRoot,
			updateRows
		} = this.props;

		const { rows } = attributes;

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

export default Edit;
