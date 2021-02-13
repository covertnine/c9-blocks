/**
 * Internal dependencies
 */
import RemoveButton from "../../../components/remove-button";
import toggleOpenIcon from "../../../../assets/toggle-open";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ToolbarGroup } = wp.components;
const { registerBlockType } = wp.blocks;
const { BlockControls, RichText, InnerBlocks } = wp.blockEditor;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

/**
 * External Dependencies.
 */
import React from "react";
import classnames from "classnames";

class Toggle extends Component {
	constructor() {
		super(...arguments);

		this.toggleBtnRef = React.createRef();
		this.toggleDisplayRef = React.createRef();
	}

	componentDidMount() {
		this.updateActiveStatus();
	}

	componentDidUpdate() {
		this.updateActiveStatus();
	}

	/**
	 * If this is last remaining toggle, remove the parent block as well.
	 */
	componentWillUnmount() {
		const { clientId } = this.props;
		const $ = window.jQuery;

		const id = $(
			`div[data-block="${clientId}"] .c9-toggles-toggle .c9-toggles-item-content.collapse`
		).attr("id");

		// remove each hook from collapse and expand event
		$(`#${id}`).off("show.bs.collapse", "**");
		$(`#${id}`).off("hide.bs.collapse", "**");

		const parentToggle = this.getParentToggle(this.props.rootBlock);
		if (parentToggle && parentToggle.clientId) {
			if (1 >= parentToggle.innerBlocks.length) {
				this.props.removeBlock(parentToggle.clientId);
			}
		}
	}

	/**
	 * Retrieves the parent block.
	 */
	getParentToggle = rootBlock => {
		const { block } = this.props;

		let result = false;

		if (rootBlock.innerBlocks && rootBlock.innerBlocks.length) {
			rootBlock.innerBlocks.forEach(item => {
				if (!result && item.clientId === block.clientId) {
					result = rootBlock;
				} else if (!result) {
					result = this.getParentToggle(item);
				}
			});
		}

		return result;
	};

	/**
	 * Check if toggle is active or not.
	 */
	updateActiveStatus = () => {
		const { setAttributes, isSelectedBlockInRoot } = this.props;

		if (
			!isSelectedBlockInRoot &&
			null != this.toggleDisplayRef.current &&
			!this.toggleDisplayRef.current.className.includes("show")
		) {
			setAttributes({ active: false });
		}
	};

	render() {
		const {
			attributes,
			setAttributes,
			isSelected,
			isSelectedBlockInRoot,
			className = ""
		} = this.props;

		const { heading, active, anchor } = attributes;

		return (
			<Fragment>
				<BlockControls>
					<ToolbarGroup
						controls={[
							{
								icon: toggleOpenIcon,
								title: __("Collapse"),
								onClick: () => {
									this.toggleBtnRef.current.click();
									let element = this.toggleDisplayRef.current;
									if (element) {
										setTimeout(() => {
											setAttributes({
												active: element.className.includes("show")
											});
										}, 350);
									}
								},
								isActive: active
							}
						]}
					/>
				</BlockControls>
				<div
					className={classnames("c9-toggles-toggle", className)}
					id={anchor ? anchor : null}
				>
					<div
						className="c9-toggles-item-heading"
						id={`c9-toggles-heading${attributes.toggleNumber}-${attributes.id}`}
					>
						<div className="mb-0">
							<RichText
								tagName="span"
								className="c9-toggles-toggle-label"
								placeholder={__("Collapsible Group Item…")}
								value={heading}
								onChange={value => {
									setAttributes({ heading: value });
								}}
								allowedFormats={["bold", "italic", "strikethrough"]}
								isSelected={isSelected}
								keepPlaceholderOnFocus
							/>
							<button
								className="c9-toggles-item-collapse"
								onClick={() => {
									let element = this.toggleDisplayRef;
									if (element) {
										setTimeout(() => {
											setAttributes({
												active: element.current.className.includes("show")
											});
										}, 350);
									}
								}}
								ref={this.toggleBtnRef}
								data-toggle="collapse"
								data-target={`#c9-toggles-collapse${attributes.toggleNumber}-${attributes.id}`}
							>
								<span className="fas fa-angle-right" />
							</button>
							<RemoveButton
								show={isSelectedBlockInRoot}
								tooltipText={__("Remove toggle item?")}
								onRemove={() => {
									const parentToggle = this.getParentToggle(
										this.props.rootBlock
									);
									if (parentToggle && parentToggle.clientId) {
										this.props.removeBlock(this.props.clientId);

										if (1 >= parentToggle.innerBlocks.length) {
											this.props.removeBlock(parentToggle.clientId);
										}
									}
								}}
								style={{
									top: "10px"
								}}
							/>
						</div>
					</div>
					<div
						className="c9-toggles-item-content collapse"
						ref={this.toggleDisplayRef}
						id={`c9-toggles-collapse${attributes.toggleNumber}-${attributes.id}`}
						data-parent={`#accordion-${attributes.id}`}
					>
						<div>
							<InnerBlocks templateLock={false} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

registerBlockType("c9-blocks/toggles-toggle", {
	title: __("C9 Toggle Item"),
	parent: ["c9-blocks/toggles"],
	icon: "minus",
	category: "common",
	supports: {
		inserter: false,
		className: false,
		anchor: true,
		reusable: false
	},
	attributes: {
		heading: {
			type: "array",
			source: "children",
			selector: ".c9-toggles-toggle-label",
			default: "Toggle Item"
		},
		active: {
			type: "boolean",
			default: false
		},
		toggleNumber: {
			type: "number"
		},
		id: {
			type: "number"
		}
	},

	edit: compose([
		withSelect((select, ownProps) => {
			const {
				getBlockHierarchyRootClientId,
				getBlock,
				isBlockSelected,
				hasSelectedInnerBlock
			} = select("core/block-editor");

			const { clientId } = ownProps;

			return {
				block: getBlock(clientId),
				isSelectedBlockInRoot:
					isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
				rootBlock: clientId
					? getBlock(getBlockHierarchyRootClientId(clientId))
					: null
			};
		}),
		withDispatch(dispatch => {
			const { removeBlock } = dispatch("core/block-editor");

			return {
				removeBlock
			};
		})
	])(Toggle),

	save: function(props) {
		const {
			attributes: { heading, toggleNumber, id, anchor }
		} = props;

		return (
			<div className={"c9-toggles-toggle"} id={anchor ? anchor : null}>
				<div
					className="c9-toggles-item-heading"
					id={`c9-toggles-heading${toggleNumber}-${id}`}
					data-toggle="collapse"
					data-target={`#c9-toggles-collapse${toggleNumber}-${id}`}
				>
					<div className="mb-0">
						<RichText.Content
							tagName="span"
							className="c9-toggles-toggle-label"
							value={heading}
						/>
						<span className="c9-toggles-item-collapse">
							<span className="fas fa-angle-right" />
						</span>
					</div>
				</div>
				<div
					className="c9-toggles-item-content collapse"
					id={`c9-toggles-collapse${toggleNumber}-${id}`}
					data-parent={`#accordion-${id}`}
				>
					<div>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	}
});
