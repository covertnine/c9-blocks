/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// External Dependencies.
import React from "react";

// Internal Dependencies.
import RemoveButton from "./remove-button";

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
	}

	render() {
		const {
			attributes,
			setAttributes,
			isSelected,
			isSelectedBlockInRoot
		} = this.props;

		const { heading, active } = attributes;

		return (
			<Fragment>
				<BlockControls>
					<Toolbar
						controls={[
							{
								icon: "laptop",
								title: __("Collapse"),
								onClick: () => {
									this.toggleBtnRef.current.click();
									setAttributes({ active: !active });
								},
								isActive: active
							}
						]}
					/>
				</BlockControls>
				<div className={"c9-toggles-toggle"}>
					<div
						className="c9-toggles-item-heading"
					>
						<h2 className="mb-0">
							<RichText
								tagName="button"
								type="button"
								className="c9-toggles-toggle-label btn btn-link"
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
								onClick={() => setAttributes({ active: !active })}
								ref={this.toggleBtnRef}
								data-toggle="collapse"
								data-target={`#collapse${attributes.toggleNumber}-${attributes.id}`}
							>
								<span className="fas fa-angle-right" />
							</button>
							<RemoveButton
								show={isSelectedBlockInRoot}
								tooltipText={__("Remove accordion item?")}
								onRemove={() => {
									this.props.removeBlock(this.props.clientId);
								}}
								style={{
									top: "10px"
								}}
							/>
						</h2>
					</div>
					<div
						className="c9-toggles-item-content collapse"
						id={`collapse${attributes.toggleNumber}-${attributes.id}`}
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
	description: __("A single item within a accordion block."),
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
			default: "Accordion Item"
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
					data-toggle="collapse"
					data-target={`#collapse${toggleNumber}-${id}`}
				>
					<h2 className="mb-0">
						<RichText.Content
							tagName="button"
							type="button"
							className="c9-toggles-toggle-label btn btn-link"
							value={heading}
						/>
						<span className="c9-accordion-item-collapse">
							<span className="fas fa-angle-right" />
						</span>
					</h2>
				</div>
				<div
					className="c9-toggles-item-content collapse"
					id={`collapse${toggleNumber}-${id}`}
					data-parent={`#accordion-${id}`}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
