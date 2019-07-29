import classnames from "classnames";

/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.editor;
const { applyFilters } = wp.hooks;
const { IconButton } = wp.components;

const ALLOWED_BLOCKS = ["c9-blocks/toggles-toggle"];

const getTogglesTemplate = (toggleCount, id) => {
	const result = [];

	for (let k = 1; k <= toggleCount; k++) {
		result.push(["c9-blocks/toggles-toggle", { toggleNumber: k, id }]);
	}

	return result;
};

export default class Edit extends Component {
	constructor() {
		super(...arguments);

		this.id = this.props.attributes.ver;

		if (this.id == null) {
			this.id = new Date().getTime();
			this.props.setAttributes({ ver: this.id });
		}

		this.checkToggleCountAndUpdate = this.checkToggleCountAndUpdate.bind(this);
	}

	componentDidMount() {
		this.checkToggleCountAndUpdate();
	}
	componentDidUpdate() {
		this.checkToggleCountAndUpdate();
	}

	checkToggleCountAndUpdate() {
		const {
			attributes: { toggleCount },
			block,
			setAttributes,
			updateBlockAttributes
		} = this.props;

		if (toggleCount !== block.innerBlocks.length) {
			setAttributes({
				toggleCount: block.innerBlocks.length
			});

			let k = 1;

			for (let child of block.innerBlocks) {
				if (child.attributes.toggleNumber != k) {
					updateBlockAttributes(child.clientId, { toggleNumber: k });
				}
				k += 1;
			}
		}
	}

	render() {
		const {
			attributes: { toggleCount },
			isSelectedBlockInRoot,
			addToggle,
			className = ""
		} = this.props;

		return (
			<Fragment>
				<BlockControls key="controls" />
				<Inspector {...this.props} />
				<div
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"accordion"
					)}
					id={`accordion-${this.id}`}
				>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={getTogglesTemplate(toggleCount, this.id)}
					/>
				</div>
				{isSelectedBlockInRoot ? (
					<div className="c9-toggles-add-item">
						<IconButton
							icon="insert"
							onClick={() => {
								addToggle(this.id);
							}}
						>
							{__("Add Toggle", "c9-blocks")}
						</IconButton>
					</div>
				) : (
					""
				)}
			</Fragment>
		);
	}
}
