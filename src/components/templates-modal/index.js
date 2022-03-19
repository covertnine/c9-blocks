/**
 * Internal dependencies
 */
import startCase from "lodash/startCase";
import LayoutButton from "./page-layout-button";
import SectionButton from "./section-button";
import ReusableButton from "./reusable-button";
import SectionTemplates from "./section-templates/section-templates";
import PageTemplates from "./page-templates/page-templates";
import PageTypes from "./page-templates/page-types";
import LargeModal from "../large-modal";
import icons from "../../../assets/sidebar-icons";
import PreviewPanel from "../preview-panel";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { TabPanel, Tooltip, Icon, Spinner } = wp.components;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { rawHandler, getBlockType } = wp.blocks;
const apiFetch = wp.apiFetch;
const { BlockPreview } = wp.blockEditor;
const { decodeEntities } = wp.htmlEntities;

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);

		this.getReusableBlocks = this.getReusableBlocks.bind(this);
		this.getTuts = this.getTuts.bind(this);
		this.setUpdateState = this.setUpdateState.bind(this);

		this.state = {
			reusables: [],
			sections: this.props.sections,
			layouts: this.props.layouts,
			hoveredItem: null,
			PageTypes,
			loading: true,
			updateState: "",
			tuts: [],
			reusableTemplates: null
		};

		this.getTuts();

		this.getReusableBlocks();
	}

	componentDidMount() {
		const self = this;
		setTimeout(() => {
			const { sections, layouts } = self.state;
			if (0 < Object.keys(sections).length && 0 < Object.keys(layouts).length) {
				self.setState({ loading: false });
			} else {
				const { canUserUseUnfilteredHTML } = self.state;

				// define section and layout templates
				const sections = {
					// convert markup to actual blocks
					...self.markupToBlock(SectionTemplates, canUserUseUnfilteredHTML)
				};

				self.setState({ sections });
				self.props.setSections(sections);

				const layouts = {
					// convert markup to actual blocks
					...self.markupToBlock(PageTemplates, canUserUseUnfilteredHTML)
				};

				self.setState({ layouts, loading: false });
				self.props.setLayouts(layouts);
			}
		}, 0);
	}

	/**
	 * Retrieves reusable blocks and update state.
	 */
	async getReusableBlocks() {
		const { canUserUseUnfilteredHTML } = this.props;

		const postType = await apiFetch({ path: `/wp/v2/types/wp_block` });
		const reusables = await apiFetch({
			path: `/wp/v2/${postType.rest_base}/?per_page=-1`
		});

		// Add Reusable Markup to Templates array to add block
		const reusableTemplates = reusables.map(item => {
			return item.content.raw;
		});

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
			reusables: blocks,
			reusableTemplates
		});
	}

	async getTuts() {
		// tuts endpoint created in init.php
		const tuts = await apiFetch({
			path: "c9-blocks/v1/tuts"
		});

		this.setState({
			tuts
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

	/**
	 * Set the update state.
	 */
	setUpdateState(updateState) {
		this.setState({ updateState });
	}

	render() {
		const { resetBlocks, canUserUseUnfilteredHTML } = this.props;
		const { sections, layouts, loading, updateState, hoveredItem } = this.state;

		const updateBar = (
			<div
				className={
					"c9-notice components-notice is-success is-dismissible " + updateState
				}
			>
				<div className="components-notice__content">Updating</div>
			</div>
		);

		const PageTypeHeading = ({ name, description }) => {
			return (
				<div className="c9-type-heading">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			);
		};

		const TutButton = ({ title, url, imgUrl }) => {
			return (
				<div className="c9-tut-wrapper">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={imgUrl} alt={`tutorial for ${title}`} />
						<h4>{decodeEntities(title)}</h4>
					</a>
				</div>
			);
		};

		const onHover = item => {
			// console.log(item);
			this.setState({ hoveredItem: item });
		};

		// convert above to React DOM elements
		const sectionItems = Object.keys(sections).map(k => {
			return (
				<SectionButton
					onHover={onHover}
					open={() => {
						this.setUpdateState("updating");
					}}
					close={() => {
						const { sections } = this.state;
						sections[k] = rawHandler({
							HTML: SectionTemplates[k].markup,
							mode: "BLOCKS",
							canUserUseUnfilteredHTML
						});
						this.setState({ sections });
						this.setUpdateState("updated");
					}}
					icon={SectionTemplates[k].icon}
					preview={SectionTemplates[k].preview}
					label={__(
						startCase(SectionTemplates[k].title).replace("Plus", "+"),
						"c9-blocks"
					)}
					description={SectionTemplates[k].description}
					section={sections[k]}
				/>
			);
		});

		const pageTypes = [];

		// Build out the whole pagetypes thing with headings mixed in
		Object.keys(PageTypes).forEach(type => {
			const layoutsByType = Object.keys(PageTemplates).filter(k => {
				return PageTemplates[k].type === type;
			});

			const layoutItems = layoutsByType.map(name => {
				return (
					<LayoutButton
						onHover={onHover}
						open={() => {
							this.setUpdateState("updating");
						}}
						close={() => {
							const { layouts } = this.state;
							layouts[name] = rawHandler({
								HTML: PageTemplates[name].markup,
								mode: "BLOCKS",
								canUserUseUnfilteredHTML
							});

							this.setState({ layouts });
							this.setUpdateState("updated");
						}}
						icon={PageTemplates[name].icon}
						preview={PageTemplates[name].preview}
						label={__(
							startCase(PageTemplates[name].title).replace("Plus", "+"),
							"c9-blocks"
						)}
						layout={layouts[name]}
						description={PageTemplates[name].description}
						recommended={PageTemplates[name].recommended}
					/>
				);
			});
			pageTypes.push(
				<Fragment>
					<PageTypeHeading name={type} description={PageTypes[type]} />
					<div className="c9-layout-options">{layoutItems}</div>
				</Fragment>
			);
		});

		return (
			<LargeModal {...this.props}>
				<TabPanel
					className="c9-template-tabs c9-component-modal-tab-panel"
					tabs={[
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
							name: "saved-blocks",
							title: (
								<Tooltip text={__("Saved Block Templates By User.", "c9-blocks")}>
									<span>{__("Saved")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						},
						{
							name: "tutorial",
							title: (
								<Tooltip text={__("How To's", "c9-blocks")}>
									<span>{__("Tutorials")}</span>
								</Tooltip>
							),
							className: "c9-template-tabs-tab"
						}
					]}
					initialTabName={this.props.initial}
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
										{updateBar}
										{hoveredItem && <PreviewPanel item={hoveredItem} />}
										<div className="c9-type-heading">
											<h2>{__("Section Templates")}</h2>
											<p>{__("Build a page for a specific audience one section at a time. Start with each section's goal, whether to inform, convince, watch, or browse your content.")}</p>
										</div>
										<div className="c9-section-options">{sectionItems}</div>
									</Fragment>
								);
							case "page-templates":
								return (
									<Fragment>
										{updateBar}
										{hoveredItem && <PreviewPanel item={hoveredItem} />}
										<div className="c9-page-options">{pageTypes}</div>
									</Fragment>
								);
							case "saved-blocks":
								return (
									<Fragment>
										{updateBar}
										{hoveredItem && <PreviewPanel item={hoveredItem} />}
										<div
											className={
												"c9-reusable-options " +
												(BlockPreview ? "c9-preview-enabled" : "")
											}
										>
											<div className="c9-reusable-list-container">
												<div className="c9-reusable-list">
													{this.state.reusables.map((obj, index) => {
														try {
															const blockType = getBlockType(obj.content[0].name);
															return (
																<ReusableButton
																	icon={blockType.icon}
																	label={__(obj.name, "c9-blocks")}
																	reusable={obj.content}
																	open={() => {
																		this.setUpdateState("updating");
																	}}
																	close={() => {
																		const { reusables } = this.state;
																		reusables[index].content = rawHandler({
																			HTML: this.state.reusableTemplates[index],
																			mode: "BLOCKS",
																			canUserUseUnfilteredHTML
																		});
																		this.setState({ reusables });
																		this.setUpdateState("updated");
																	}}
																	onHover={onHover}
																/>
															);
														} catch (error) {
															console.warn(`Invalid reusable block detected: ${obj} at index ${index}`);
															return null;
														}
													})}
												</div>
												<a
													className="c9-modal-manage-reusable"
													href="edit.php?post_type=wp_block"
												>
													manage all reusable blocks
												</a>
											</div>
										</div>
									</Fragment>
								);
							case "tutorial":
								return (
									<Fragment>
										<div className="c9-tutorials">
											{this.state.tuts.map(tut => {
												return (
													<TutButton
														title={tut.title.rendered}
														url={tut.link}
														imgUrl={tut.c9_feat_img_url}
													/>
												);
											})}
										</div>
									</Fragment>
								);
							case "clear-page":
								resetBlocks([]);
								return (
									<div className="c9-page-cleared">
										The page has been cleared.
									</div>
								);
							default:
								return (
									<Fragment>
										<div className="c9-tutorials">
											{this.state.tuts.map(tut => {
												return (
													<TutButton
														title={tut.title.rendered}
														url={tut.link}
														imgUrl={tut.c9_feat_img_url}
													/>
												);
											})}
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
		const { canUserUseUnfilteredHTML } = select("core/editor");
		const { getBlock } = select("core/block-editor");
		const block = getBlock(clientId);
		return {
			block,
			canUserUseUnfilteredHTML: canUserUseUnfilteredHTML()
		};
	}),
	withDispatch(dispatch => {
		const { resetBlocks } = dispatch("core/block-editor");
		return {
			resetBlocks
		};
	})
])(TemplatesModal);

export { TemplatesModalWithSelect as TemplatesModal };
