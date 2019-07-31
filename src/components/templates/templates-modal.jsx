const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Modal, Icon, TabPanel, Tooltip } = wp.components;
const { compose } = wp.compose;
const { withDispatch } = wp.data;
const { createBlock } = wp.blocks;

import "./editor.scss";

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const layouts = {
			default: [
				createBlock("core/")
			]
		}

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
								<Tooltip text={__("Simple sections to construct your page.", "c9-blocks")}>
									<span>{__("Sections")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						},
						{
							name: "pages",
							title: (
								<Tooltip text={__("Pre-designed ready to use pages.", "c9-blocks")}>
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
										<div className="c9-layout-options">
											<button
												onClick={() => console.log("Load hero layout")}
											>
												<Icon icon="wordpress" />
												<span>{__("Hero", "c9-blocks")}</span>
											</button>
											<button
												onClick={() => console.log("Load featured layout")}
											>
												<Icon icon="wordpress" />
												<span>{__("Featured", "c9-blocks")}</span>
											</button>
										</div>
									</Fragment>
								);
							case "pages":
								return (
									<Fragment>
										<p>{tab.title}</p>
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
	withDispatch(dispatch => {
		const { resetBlocks, insertBlocks } = dispatch("core/editor");
		return {
			resetBlocks,
			insertBlocks
		};
	})
])(TemplatesModal);

export { TemplatesModalWithSelect as TemplatesModal };
