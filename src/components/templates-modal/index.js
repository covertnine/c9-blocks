const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Modal, TabPanel, Tooltip, Icon } = wp.components;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { rawHandler } = wp.blocks;
const apiFetch = wp.apiFetch;
import startCase from "lodash/startCase";
import LayoutButton from "./layout-button";
import SectionButton from "./section-button";
import "./editor.scss";

// templates
import templateMarkups from "./templates-markup";

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);

		this.getReusableBlocks = this.getReusableBlocks.bind(this);

		this.state = {
			reusables: []
		};

		this.getReusableBlocks();
	}

	async getReusableBlocks() {
		const { canUserUseUnfilteredHTML } = this.props;

		const postType = await apiFetch({ path: `/wp/v2/types/wp_block` });
		const reusables = await apiFetch({ path: `/wp/v2/${postType.rest_base}` });

		const blocks = reusables.map(item => {
			return {
				name: item.title.raw,
				content: rawHandler({
					HTML: item.content.raw,
					mode: "BLOCKS",
					canUserUseUnfilteredHTML
				})
			};
		});

		this.setState({
			reusables: blocks
		});
	}

	markupToBlock(templateObj, canUserUseUnfilteredHTML) {
		let blockObj = Object.assign({}, templateObj);
		// eslint-disable-next-line no-unused-vars
		for (let key of Object.keys(blockObj)) {
			blockObj[key] = rawHandler({
				HTML: blockObj[key].markup,
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
			// convert markup to actual blocks
			...this.markupToBlock(templateMarkups.sections, canUserUseUnfilteredHTML)
		};

		const layouts = {
			// convert markup to actual blocks
			...this.markupToBlock(templateMarkups.layouts, canUserUseUnfilteredHTML)
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
							name: "blocks",
							title: (
								<Tooltip text={__("My Templates.", "c9-blocks")}>
									<span>{__("Saved Blocks")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						}
					]}
					initialTabName={this.props.initial}
				>
					{tab => {
						switch (tab.name) {
							case "sections":
								return (
									<Fragment>
										<p>{tab.title}</p>
										<div className="c9-section-options">
											{Object.keys(sections).map(k => (
												<SectionButton
													icon={templateMarkups.sections[k].icon}
													label={__(startCase(k), "c9-blocks")}
													section={sections[k]}
												/>
											))}
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
											{Object.keys(layouts).map(k => (
												<LayoutButton
													icon={templateMarkups.layouts[k].icon}
													label={__(startCase(k), "c9-blocks")}
													layout={layouts[k]}
												/>
											))}
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
								return (
									<Fragment>
										<p>{tab.title}</p>
										<div className="c9-section-options">
											{this.state.reusables.map(obj => (
												<SectionButton
													icon="wordpress"
													label={__(obj.name, "c9-blocks")}
													section={obj.content}
												/>
											))}
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
