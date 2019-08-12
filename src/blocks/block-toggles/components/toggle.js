/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// External Dependencies.
import React from "react";
import classnames from "classnames";

// Internal Dependencies.
import RemoveButton from "./remove-button";
import toggleOpenIcon from "../../../../assets/toggle-open";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Toolbar } = wp.components;
const { registerBlockType } = wp.blocks;

const { BlockControls, InnerBlocks, RichText } = wp.editor;

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class ToggleBlock extends Component {
	constructor() {
		super(...arguments);

		this.toggleBtnRef = React.createRef();
		this.toggleDisplayRef = React.createRef();
	}

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
			if (parentToggle.innerBlocks.length <= 1) {
				this.props.removeBlock(parentToggle.clientId);
			}
		}
	}

	getParentToggle(rootBlock) {
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
	}

	render() {
		const {
			attributes,
			setAttributes,
			isSelected,
			isSelectedBlockInRoot,
			className = ""
		} = this.props;

		const { heading, active } = attributes;

		if (
			!isSelectedBlockInRoot &&
			this.toggleDisplayRef.current != null &&
			!this.toggleDisplayRef.current.className.includes("show")
		) {
			setAttributes({
				active: false
			});
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar
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
				<div className={classnames("c9-toggles-toggle", className)}>
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
								formattingControls={["bold", "italic", "strikethrough"]}
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
								data-target={`#c9-toggles-collapse${attributes.toggleNumber}-${
									attributes.id
								}`}
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

										if (parentToggle.innerBlocks.length <= 1) {
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
						id={`c9-toggles-collapse${attributes.toggleNumber}-${
							attributes.id
						}`}
						data-parent={`#accordion-${attributes.id}`}
					>
						<InnerBlocks templateLock={false} />
					</div>
				</div>
			</Fragment>
		);
	}
}

registerBlockType("c9-blocks/toggles-toggle", {
	title: __("C9 Toggle Item"),
	parent: ["c9-blocks/toggles"],
	description: __("A single item within a toggles block."),
	icon: "minus",
	category: "c9-blocks",
	supports: {
		inserter: false,
		className: false
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
			} = select("core/editor");

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
			const { removeBlock } = dispatch("core/editor");

			return {
				removeBlock
			};
		})
	])(ToggleBlock),

	save: function(props) {
		const {
			attributes: { heading, toggleNumber, id }
		} = props;

		return (
			<div className={"c9-toggles-toggle"}>
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
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
