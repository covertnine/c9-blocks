/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import BlockSelector from "../../components/block-selector";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment, createElement } = wp.element;
const { InnerBlocks, BlockControls } = wp.blockEditor;
const { applyFilters } = wp.hooks;
const { Button } = wp.components;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import cryptoRandomString from "crypto-random-string";

const ALLOWED_BLOCKS = ["c9-blocks/toggles-toggle"];

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.checkToggleCountAndUpdate = this.checkToggleCountAndUpdate.bind(this);
		this.checkBlockIdAndUpdate = this.checkBlockIdAndUpdate.bind(this);
	}

	componentDidMount() {
		this.checkToggleCountAndUpdate();
	}
	componentDidUpdate() {
		this.checkToggleCountAndUpdate();
		this.checkBlockIdAndUpdate();
	}

	/**
	 * Removes event hooks assigned on creation.
	 */
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

	/**
	 * Generates the child toggle blocks.
	 */
	getTogglesTemplate = (toggleCount, id) => {
		const result = [];

		for (let k = 1; k <= toggleCount; k++) {
			result.push(["c9-blocks/toggles-toggle", { toggleNumber: k, id }]);
		}

		return result;
	};

	/**
	 * Checks if there has been change in toggle count, if so update attributes and adjust classes.
	 */
	checkToggleCountAndUpdate() {
		const {
			attributes: { toggleCount },
			block,
			setAttributes,
			updateBlockAttributes
		} = this.props;

		if (block && toggleCount !== block.innerBlocks.length) {
			setAttributes({
				toggleCount: block.innerBlocks.length
			});

			let k = 1;

			// eslint-disable-next-line no-unused-vars
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

	checkBlockIdAndUpdate() {
		const {
			attributes,
			setAttributes,
			block,
			updateBlockAttributes
		} = this.props;

		const { instanceId } = attributes;

		// check for possible id collision
		if (
			instanceId !== undefined &&
			1 <
				document.querySelectorAll(`#accordion-${attributes.instanceId}`).length
		) {
			const newInstanceId = parseInt(
				cryptoRandomString({ length: 4, type: "numeric" })
			);

			setAttributes({
				instanceId: newInstanceId,
				anchor: `accordion-${newInstanceId}`
			});

			if (block) {
				// eslint-disable-next-line no-unused-vars
				for (let child of block.innerBlocks) {
					if (newInstanceId != child.attributes.id) {
						updateBlockAttributes(child.clientId, { id: newInstanceId });
					}
				}
			}
		}
	}

	render() {
		const {
			attributes,
			isSelectedBlockInRoot,
			addToggle,
			className = "",
			setAttributes
		} = this.props;

		const { toggleCount } = attributes;

		let instanceId = attributes.instanceId;

		if (instanceId === undefined) {
			// set default random id if not set
			instanceId = this.props.instanceId;
			setAttributes({ instanceId });
		}

		return (
			<Fragment>
				<BlockControls key="controls"></BlockControls>
				<Inspector {...this.props} />
				<BlockSelector text="Toggles" />
				<div
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"accordion"
					)}
					id={`accordion-${instanceId}`}
				>
					{createElement(
						"div",
						{},
						// Workaround logic for this bug https://github.com/WordPress/gutenberg/issues/9897
						"undefined" !== typeof this.props.insertBlocksAfter
							? createElement(InnerBlocks, {
									allowedBlocks: ALLOWED_BLOCKS,
									template: this.getTogglesTemplate(toggleCount, instanceId)
							  })
							: createElement("div")
					)}
				</div>
				{isSelectedBlockInRoot ? (
					<div className="c9-toggles-add-item">
						<Button
							icon="insert"
							onClick={() => {
								addToggle(instanceId);
							}}
						>
							{__("Add Toggle", "c9-blocks")}
						</Button>
					</div>
				) : (
					""
				)}
			</Fragment>
		);
	}
}

export default Edit;
