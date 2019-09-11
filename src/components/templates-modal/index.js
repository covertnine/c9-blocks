/**
 * Internal dependencies
 */
import startCase from "lodash/startCase";
import LayoutButton from "./layout-button";
import SectionButton from "./section-button";
import TemplateMarkups from "./templates-markup";
import LargeModal from "../large-modal";

/**
 * Styles
 */
import "./editor.scss";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { TabPanel, Tooltip, Icon, Spinner } = wp.components;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { rawHandler } = wp.blocks;
const apiFetch = wp.apiFetch;

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);

		this.getReusableBlocks = this.getReusableBlocks.bind(this);

		this.state = {
			activeTab: this.props.initial,
			reusables: [],
			sections: [],
			layouts: [],
			loading: true
		};

		this.getReusableBlocks();
	}

	componentDidMount() {
		const self = this;
		setTimeout(() => {
			const { canUserUseUnfilteredHTML } = self.state;

			// define section and layout templates
			const sections = {
				// convert markup to actual blocks
				...self.markupToBlock(
					TemplateMarkups.sections,
					canUserUseUnfilteredHTML
				)
			};

			self.setState({ sections });

			const layouts = {
				// convert markup to actual blocks
				...self.markupToBlock(TemplateMarkups.layouts, canUserUseUnfilteredHTML)
			};

			self.setState({ layouts, loading: false });
		}, 0);
	}

	/**
	 * Retrieves reusable blocks and update state.
	 */
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

	/**
	 * Returns updated template object based on given new template.
	 *
	 * @param {Object} templateObj Original template object with markup.
	 * @param {boolean} canUserUseUnfilteredHTML Self implied.
	 *
	 * @return {Object} Updated template object with markup converted to blocks.
	 */
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
		const { sections, layouts, loading } = this.state;

		// convert above to React DOM elements
		const sectionItems = Object.keys(sections).map(k => (
			<SectionButton
				close={() => {
					const { sections } = this.state;
					sections[k] = rawHandler({
						HTML: TemplateMarkups.sections[k].markup,
						mode: "BLOCKS",
						canUserUseUnfilteredHTML
					});

					this.setState({ sections });
				}}
				icon={TemplateMarkups.sections[k].icon}
				label={__(startCase(k), "c9-blocks")}
				section={sections[k]}
			/>
		));

		const layoutItems = Object.keys(layouts).map(k => (
			<LayoutButton
				icon={TemplateMarkups.layouts[k].icon}
				label={__(startCase(k), "c9-blocks")}
				layout={layouts[k]}
			/>
		));

		return (
			<LargeModal {...this.props}>
				<TabPanel
					className="c9-template-tabs c9-component-modal-tab-panel"
					tabs={[
						{
							name: "section-templates",
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
							name: "page-templates",
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
							name: "saved-blocks",
							title: (
								<Tooltip text={__("My Templates.", "c9-blocks")}>
									<span>{__("Saved Blocks")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						}
					]}
					initialTabName={this.props.initial}
					onSelect={tabName => this.setState({ activeTab: tabName })}
				>
					{tab => {
						if (loading) {
							return (
								<div className="c9-loading-wrapper">
									<Spinner />
								</div>
							);
						}

						switch (tab.name) {
							case "section-templates":
								return (
									<Fragment>
										<p>{tab.title}</p>
										<div className="c9-section-options">
											{sectionItems}
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
							case "page-templates":
								return (
									<Fragment>
										<p>{tab.title}</p>
										<div className="c9-layout-options">
											{layoutItems}
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
			</LargeModal>
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
		const { resetBlocks } = dispatch("core/editor");
		return {
			resetBlocks
		};
	})
])(TemplatesModal);

export { TemplatesModalWithSelect as TemplatesModal };
