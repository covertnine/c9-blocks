const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Modal, TabPanel, Tooltip, Icon } = wp.components;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { createBlock, rawHandler } = wp.blocks;

import LayoutButton from "./layout-button.jsx";
import SectionButton from "./section-button.jsx";
import "./editor.scss";

// templates
import templateMarkups from "./templates-markup";

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);
	}

	markupToBlock(templateObj, canUserUseUnfilteredHTML) {
		let blockObj = Object.assign({}, templateObj);
		for (let key of Object.keys(blockObj)) {
			blockObj[key] = rawHandler({
				HTML: blockObj[key],
				mode: "BLOCKS",
				canUserUseUnfilteredHTML
			});
		}

		return blockObj;
	}

	render() {
		const { resetBlocks, canUserUseUnfilteredHTML } = this.props;

		// define section and layout templates

		const sections = {
			test: [
				createBlock("core/cover", { align: "full" }),
				createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				})
			],
			// convert markup to actual blocks
			...this.markupToBlock(templateMarkups["sections"], canUserUseUnfilteredHTML)
		};

		const layouts = {
			default: [createBlock("core/paragraph", {})],
			hero: [
				createBlock("core/cover", { align: "full" }),
				createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				}),
				createBlock("c9-blocks/grid", {}, [
					createBlock("c9-blocks/column-container", {
						columns: 3,
						layout: "c9-3-col-equal"
					})
				])
			],
			featured: [
				createBlock("core/heading", {}),
				createBlock("core/spacer", { height: "10" }),
				createBlock("core/media-text", { align: "full" }),
				createBlock("core/spacer", { height: "40" }),
				createBlock("core/quote", {}),
				createBlock("core/spacer", { height: "20" }),
				createBlock("core/media-text", { mediaPosition: "right" }),
				createBlock("core/paragraph", {
					placeholder: __("Layout Switcher", "c9-blocks")
				})
			],
			nested: [
				createBlock("c9-blocks/grid", {}, [
					createBlock(
						"c9-blocks/column-container",
						{ columns: 3, layout: "c9-3-col-equal" },
						[
							createBlock("c9-blocks/column", {}, [
								createBlock("core/button", { text: "Make this Recipe" })
							])
						]
					)
				])
			],
			// convert markup to actual blocks
			...this.markupToBlock(templateMarkups["layouts"], canUserUseUnfilteredHTML)
		};

		return (
			<Modal
				className="c9-templates-modal"
				position="top"
				size="lg"
				{...this.props}
			>
				<TabPanel
					className="c9-template-tabs c9-component-modal-tab-panel"
					tabs={[
						{
							name: "sections",
							title: (
								<Tooltip
									text={__(
										"Simple sections to construct your page.",
										"c9-blocks"
									)}
								>
									<span>{__("Sections")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						},
						{
							name: "pages",
							title: (
								<Tooltip
									text={__("Pre-designed ready to use pages.", "c9-blocks")}
								>
									<span>{__("Pages")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						},
						{
							name: "local",
							title: (
								<Tooltip text={__("My Templates.", "c9-blocks")}>
									<span>{__("Saved Layouts")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						}
					]}
				>
					{tab => {
						switch (tab.name) {
							case "sections":
								return (
									<Fragment>
										<p>{tab.title}</p>
										<div className="c9-section-options">
											<SectionButton
												icon="wordpress"
												label={__("Test", "c9-blocks")}
												section={sections.test}
											/>
											<button
												onClick={() => {
													resetBlocks([]);
												}}
												className="btn btn-danger"
											>
												<Icon icon="trash" />
												<span>{__("Clear page", "c9-blocks")}</span>
											</button>
										</div>
									</Fragment>
								);
							case "pages":
								return (
									<Fragment>
										<p>{tab.title}</p>
										<div className="c9-layout-options">
											<LayoutButton
												icon="wordpress"
												label={__("Hero", "c9-blocks")}
												layout={layouts.hero}
											/>
											<LayoutButton
												icon="wordpress"
												label={__("Featured", "c9-blocks")}
												layout={layouts.featured}
											/>
											<LayoutButton
												icon="wordpress"
												label={__("Nested", "c9-blocks")}
												layout={layouts.nested}
											/>
											<LayoutButton
												icon="wordpress"
												label={__("Markdown", "c9-blocks")}
												layout={layouts.markdown}
											/>
											<button
												onClick={() => {
													resetBlocks([]);
												}}
												className="btn btn-danger"
											>
												<Icon icon="trash" />
												<span>{__("Clear page", "c9-blocks")}</span>
											</button>
										</div>
									</Fragment>
								);
							default:
								return <p>Coming Soon...</p>;
						}
					}}
				</TabPanel>
			</Modal>
		);
	}
}

const TemplatesModalWithSelect = compose([
	withSelect((select, { clientId }) => {
		const { getBlock, canUserUseUnfilteredHTML } = select("core/editor");
		const block = getBlock(clientId);
		return {
			block,
			canUserUseUnfilteredHTML: canUserUseUnfilteredHTML()
		};
	}),
	withDispatch(dispatch => {
		const { resetBlocks, insertBlocks } = dispatch("core/editor");
		return {
			resetBlocks,
			insertBlocks
		};
	})
])(TemplatesModal);

export { TemplatesModalWithSelect as TemplatesModal };
