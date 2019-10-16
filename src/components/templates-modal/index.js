/**
 * Internal dependencies
 */
import startCase from "lodash/startCase";
import LayoutButton from "./page-layout-button";
import SectionButton from "./section-button";
import ReusableButton from "./reusable-button";
import { PageTypeHeading } from "./page-type-heading";
import { TutButton } from "./tut-button";
import PageTypes from "./page-types";
import TemplateMarkups from "./templates-markup";
import LargeModal from "../large-modal";
import icons from "../../../assets/sidebar-icons";

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
const { rawHandler, getBlockType, createBlock } = wp.blocks;
const apiFetch = wp.apiFetch;
const { BlockPreview } = wp.blockEditor;

class TemplatesModal extends Component {
	constructor() {
		super(...arguments);

		this.getReusableBlocks = this.getReusableBlocks.bind(this);
		this.getTuts = this.getTuts.bind(this);

		this.state = {
			reusables: [],
			sections: this.props.sections,
			layouts: this.props.layouts,
			hoveredItem: null,
			PageTypes,
			loading: true,
			updating: false,
			msg: "",
			tuts: []
		};

		this.closeNotice = this.closeNotice.bind(this);

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
					...self.markupToBlock(
						TemplateMarkups.sections,
						canUserUseUnfilteredHTML
					)
				};

				self.setState({ sections });
				self.props.setSections(sections);

				const layouts = {
					// convert markup to actual blocks
					...self.markupToBlock(
						TemplateMarkups.layouts,
						canUserUseUnfilteredHTML
					)
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
		TemplateMarkups.reusables = reusables.map(item => {
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
			reusables: blocks
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
	 * Closes message when user wants to hide notice.
	 */
	closeNotice() {
		this.setState({ updating: false });
	}

	/**
	 * Pushes a message onto the modal.
	 */
	openNotice() {
		this.setState({ updating: true });
	}

	/**
	 * Set the update message.
	 */
	setMessage(msg) {
		this.setState({ msg });
	}

	render() {
		const { resetBlocks, canUserUseUnfilteredHTML } = this.props;
		const {
			sections,
			layouts,
			loading,
			updating,
			msg,
			hoveredItem
		} = this.state;

		const updateBar = (
			<div className="c9-notice components-notice is-success is-dismissible">
				<div className="components-notice__content">{msg}</div>
				<button
					type="button"
					aria-label="Dismiss this notice"
					className="components-button components-icon-button components-notice__dismiss"
					onClick={this.closeNotice}
				>
					<svg
						aria-hidden="true"
						role="img"
						focusable="false"
						className="dashicon dashicons-no"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path d="M12.12 10l3.53 3.53-2.12 2.12L10 12.12l-3.54 3.54-2.12-2.12L7.88 10 4.34 6.46l2.12-2.12L10 7.88l3.54-3.53 2.12 2.12z"></path>
					</svg>
				</button>
			</div>
		);

		// tutorial iframe
		const iframe =
			'<iframe src="https://www.covertnine.com/about" width="540" height="450"></iframe>';

		// convert above to React DOM elements
		const sectionItems = Object.keys(sections).map(k => {
			return (
				<SectionButton
					open={() => {
						this.setMessage("Updating page.");
						this.openNotice();
					}}
					close={() => {
						const { sections } = this.state;
						sections[k] = rawHandler({
							HTML: TemplateMarkups.sections[k].markup,
							mode: "BLOCKS",
							canUserUseUnfilteredHTML
						});
						this.setState({ sections });
						this.setMessage("Page updated.");
					}}
					icon={TemplateMarkups.sections[k].icon}
					preview={TemplateMarkups.sections[k].preview}
					label={__(
						startCase(TemplateMarkups.sections[k].title).replace("Plus", "+"),
						"c9-blocks"
					)}
					section={sections[k]}
				/>
			);
		});

		const pageTypes = [];

		// Build out the whole pagetypes thing with headings mixed in
		Object.keys(PageTypes).forEach(type => {
			const layoutsByType = Object.keys(TemplateMarkups.layouts).filter(k => {
				return TemplateMarkups.layouts[k].type === type;
			});

			const layoutItems = layoutsByType.map(name => {
				return (
					<LayoutButton
						open={() => {
							this.setMessage("Updating page.");
							this.openNotice();
						}}
						close={() => {
							const { layouts } = this.state;
							layouts[name] = rawHandler({
								HTML: TemplateMarkups.layouts[name].markup,
								mode: "BLOCKS",
								canUserUseUnfilteredHTML
							});

							this.setState({ layouts });
							this.setMessage("Page updated.");
						}}
						icon={TemplateMarkups.layouts[name].icon}
						preview={TemplateMarkups.layouts[name].preview}
						label={__(
							startCase(TemplateMarkups.layouts[name].title).replace(
								"Plus",
								"+"
							),
							"c9-blocks"
						)}
						layout={layouts[name]}
						description={TemplateMarkups.layouts[name].description}
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
								<Tooltip text={__("My Templates.", "c9-blocks")}>
									<span>{__("Saved Blocks")}</span>
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
						},
						{
							name: "clear-page",
							title: (
								<Fragment
									onClick={() => {
										resetBlocks([]);
									}}
									className="btn btn-danger btn-clear"
								>
									<Icon icon={icons.close} />
									<span>{__("Clear page", "c9-blocks")}</span>
								</Fragment>
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
										{updating && updateBar}
										<div className="c9-section-options">{sectionItems}</div>
									</Fragment>
								);
							case "page-templates":
								return (
									<Fragment>
										{updating && updateBar}
										{pageTypes}
									</Fragment>
								);
							case "saved-blocks":
								return (
									<Fragment>
										{updating && updateBar}
										<div className="c9-reusable-options">
											<div className="c9-reusable-list-container">
												<div className="c9-reusable-list">
													{this.state.reusables.map((obj, index) => {
														const blockType = getBlockType(obj.content[0].name);
														return (
															<ReusableButton
																icon={blockType.icon}
																label={__(obj.name, "c9-blocks")}
																section={obj.content}
																open={() => {
																	this.setMessage("Updating page.");
																	this.openNotice();
																}}
																close={() => {
																	const { reusables } = this.state;
																	reusables[index].content = rawHandler({
																		HTML: TemplateMarkups.reusables[index],
																		mode: "BLOCKS",
																		canUserUseUnfilteredHTML
																	});
																	this.setState({ reusables });
																	this.setMessage("Page updated.");
																}}
																mouseIn={() => {
																	this.setState({ hoveredItem: obj });
																	console.log(obj);
																}}
																mouseOut={() => {
																	this.setState({ hoveredItem: null });
																}}
															/>
														);
													})}
												</div>
												<a
													className="c9-modal-manage-reusable"
													href="edit.php?post_type=wp_block"
												>
													manage all reusable blocks
												</a>
											</div>
											<div className="c9-reusable-preview">
												{hoveredItem && <h1>preview</h1>}
												{/* <BlockPreview
													viewportWidth={500}
													blocks={TemplateMarkups.reusables[0]}
												/> */}
											</div>
										</div>
									</Fragment>
								);
							case "tutorial":
								return (
									<Fragment>
										<div className="c9-reusable-options">
											{this.state.tuts.map(tut => {
												return (
													<TutButton
														title={tut.title.rendered}
														url={tut.link}
													/>
												);
											})}
										</div>
									</Fragment>
								);
							default:
								return <Fragment>The page has been cleared.</Fragment>;
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
