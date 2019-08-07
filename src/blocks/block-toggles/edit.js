import classnames from "classnames";

/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import ReverseToolbar from "./components/reverse-toolbar";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.editor;
const { applyFilters } = wp.hooks;
const { IconButton } = wp.components;
const { withInstanceId } = wp.compose;

const ALLOWED_BLOCKS = ["c9-blocks/toggles-toggle"];

const getTogglesTemplate = (toggleCount, id) => {
	const result = [];

	for (let k = 1; k <= toggleCount; k++) {
		result.push(["c9-blocks/toggles-toggle", { toggleNumber: k, id }]);
	}

	return result;
};

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.checkToggleCountAndUpdate = this.checkToggleCountAndUpdate.bind(this);
	}

	componentDidMount() {
		this.checkToggleCountAndUpdate();
	}
	componentDidUpdate() {
		this.checkToggleCountAndUpdate();
	}

	componentWillUnmount() {
		const $ = window.jQuery;

		$(".c9-toggles-toggle").each(function() {
			// grab collapse id
			const id = $(".c9-toggles-item-content.collapse", this).attr("id");

			// remove each hook from collapse and expand event
			$(`#${id}`).off("show.bs.collapse", "**");
			$(`#${id}`).off("hide.bs.collapse", "**");
		});
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

					if (
						child.attributes.toggleNumber &&
						child.attributes.toggleNumber > k
					) {
						const $ = window.jQuery;
						$(
							`div[data-block="${child.clientId}"] .c9-toggles-toggle`
						).removeClass("toggle-collapse-ready");
					}
				}
				k += 1;
			}
		}

		const $ = window.jQuery;

		setTimeout(() => {
			$(".c9-toggles-toggle:not(.toggle-collapse-ready)").each(function() {
				const $this = $(this);
				$this.addClass("toggle-collapse-ready");

				// grab collapse id
				const id = $(".c9-toggles-item-content.collapse", this).attr("id");

				// grab rotate arrow id
				const iconId = $(".c9-toggles-item-heading", this).attr("id");

				// insert hook into collapse and expand event
				$(`#${id}`).on("show.bs.collapse", () => {
					$(`#${iconId} button.c9-toggles-item-collapse > svg`).toggleClass(
						"c9-toggle-item-expand"
					);
				});
				$(`#${id}`).on("hide.bs.collapse", () => {
					$(`#${iconId} button.c9-toggles-item-collapse > svg`).toggleClass(
						"c9-toggle-item-expand"
					);
				});
			});
		}, 350);
	}

	render() {
		const {
			attributes,
			isSelectedBlockInRoot,
			setAttributes,
			addToggle,
			block,
			updateBlockAttributes,
			className = "",
			instanceId
		} = this.props;

		const { toggleCount, reverseToggle } = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });

			for (let child of block.innerBlocks) {
				if (instanceId != child.attributes.id) {
					updateBlockAttributes(child.clientId, { id: instanceId });
				}
			}
		}

		return (
			<Fragment>
				<BlockControls key="controls">
					<ReverseToolbar
						value={reverseToggle}
						onChange={value => {
							setAttributes({ reverseToggle: value });
						}}
					/>
				</BlockControls>
				<Inspector {...this.props} />
				<div
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"accordion",
						reverseToggle ? "c9-toggles-reverse" : null
					)}
					id={`accordion-${instanceId}`}
				>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={getTogglesTemplate(toggleCount, instanceId)}
					/>
				</div>
				{isSelectedBlockInRoot ? (
					<div className="c9-toggles-add-item">
						<IconButton
							icon="insert"
							onClick={() => {
								addToggle(instanceId);
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

export default withInstanceId(Edit);
