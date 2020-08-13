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

		this.state = {
			templateLock: "all",
			lockIcon: "editor-unlink",
			getTemplate: this.dummyTemplate
		};
	}

	componentDidMount() {
		this.setState({ getTemplate: this.getRowsTemplate });
	}

	// eslint-disable-next-line no-unused-vars
	dummyTemplate = rows => {
		return this.getRowsTemplate(rows + 1);
	};

	// temp fix until template re-rendering upon insertion is fixed
	setAndUnsetLock = () => {
		this.setState({
			templateLock: "insert",
			lockIcon: "admin-links"
		});
		// re-render immediately after next event cycle
		setTimeout(() => {
			this.setState({
				templateLock: "all",
				lockIcon: "editor-unlink"
			});
		});
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
			isSelectedBlockInRoot
		} = this.props;

		const { rows, lockMovement } = attributes;
		const { getTemplate } = this.state;

		const template = getTemplate(rows);

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });
		}

		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />

				<Container {...this.props}>
					<InnerBlocks
						template={template}
						templateLock={this.state.templateLock || "all"}
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</Container>
				{isSelectedBlockInRoot && (
					<div className="c9-add-remove-rows">
						{lockMovement && (
							<Fragment>
								<Button
									label={__("Remove Image", "c9-blocks")}
									icon="dismiss"
									onClick={() => {
										if (1 < rows) {
											setAttributes({ rows: rows - 1 });
											this.setAndUnsetLock();
										}
									}}
								>
									{__("Remove Bottom Row", "c9-blocks")}
								</Button>
								<Button
									label={__("Remove Image", "c9-blocks")}
									icon="plus-alt"
									onClick={() => {
										if (20 > rows) {
											setAttributes({ rows: rows + 1 });
											this.setAndUnsetLock();
										}
									}}
								>
									{__("Add Row", "c9-blocks")}
								</Button>
							</Fragment>
						)}
						<Button
							label={__("Swap Rows", "c9-blocks")}
							icon={this.state.lockIcon}
							onClick={() => {
								if (lockMovement) {
									this.setState({
										templateLock: "insert",
										lockIcon: "admin-links"
									});
									setAttributes({ lockMovement: false });
								} else {
									this.setState({
										templateLock: "all",
										lockIcon: "editor-unlink"
									});
									setAttributes({ lockMovement: true });
								}
							}}
						>
							{__(
								lockMovement ? "Unlock Row Movement" : "Lock Row Movement",
								"c9-blocks"
							)}
						</Button>
					</div>
				)}
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
