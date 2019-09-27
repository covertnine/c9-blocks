/* eslint-disable no-useless-escape */
/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import RemoveButton from "../../components/remove-button";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { IconButton, Tooltip } = wp.components;
const { RichText, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { applyFilters } = wp.hooks;
const { select, dispatch } = wp.data;
const { withInstanceId } = wp.compose;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import slugify from "slugify";

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.getTabsTemplate = this.getTabsTemplate.bind(this);
		this.getTabs = this.getTabs.bind(this);
		this.isUniqueSlug = this.isUniqueSlug.bind(this);
		this.getUniqueSlug = this.getUniqueSlug.bind(this);
	}

	/**
	 * Returns the layouts configuration for a given number of tabs.
	 *
	 * @param {number} attributes tabs attributes.
	 *
	 * @return {Object[]} Tabs layout configuration.
	 */
	getTabsTemplate() {
		const { instanceId } = this.props;
		const { tabsData = [], tabActive } = this.props.attributes;
		const result = [];

		tabsData.forEach(tabData => {
			result.push([
				"c9-blocks/horizontal-tabs-tab",
				{ ...tabData, tabActive, id: instanceId }
			]);
		});

		return result;
	}

	/**
	 * Grabs inner blocks (tabs) of this horizontal tabs container.
	 */
	getTabs() {
		return this.props.block.innerBlocks;
	}

	/**
	 * Returns a boolean whether or not given slug is unique.
	 *
	 * @param {string} slug Lowercase alphanumeric with dashes for naming of a tab.
	 * @param {string} ignoreClientId Origin client Id where the slug is to be assigned.
	 *
	 * @return {boolean} If given slug is unique.
	 */
	isUniqueSlug(slug, ignoreClientId) {
		const tabs = this.getTabs();
		let isUnique = true;

		tabs.forEach(tabProps => {
			if (
				tabProps.clientId !== ignoreClientId &&
				tabProps.attributes.slug === slug
			) {
				isUnique = false;
			}
		});

		return isUnique;
	}

	/**
	 * Returns a unique slug for the horizontal tab to reference the tab by.
	 *
	 * @param {string} newTitle Title of tab.
	 * @param {object} tabData Innerblock tab to be named.
	 *
	 * @return {string} Unique slug.
	 */
	getUniqueSlug(newTitle, tabData) {
		let newSlug = "";
		let i = 0;

		while (!newSlug || !this.isUniqueSlug(newSlug, tabData.clientId)) {
			if (newSlug) {
				i += 1;
			}
			newSlug = slugify(`tab-${newTitle}${i ? `-${i}` : ""}`, {
				replacement: "-",
				lower: true,
				remove: /[\/#$%^&*+=~.,<>{}\\|`[\]()'"?!:;@]/g
			});
		}

		return newSlug;
	}

	render() {
		const {
			attributes,
			setAttributes,
			updateBlockAttributes,
			isSelectedBlockInRoot,
			block,
			className = "",
			clientId,
			instanceId
		} = this.props;

		const {
			tabActive,
			buttonsAlign,
			tabsData = [],
			tabBackgroundColor,
			tabTextColor,
			tabContentBackgroundColor,
			blockBackgroundColor
		} = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });

			// eslint-disable-next-line no-unused-vars
			for (let child of block.innerBlocks) {
				if (instanceId != child.attributes.id) {
					updateBlockAttributes(child.clientId, { id: instanceId });
				}
			}
		}

		const tabs = this.getTabs();

		let align;
		if ("start" == buttonsAlign) {
			align = "left";
		} else if ("end" == buttonsAlign) {
			align = "right";
		} else {
			align = buttonsAlign;
		}

		select("core/editor")
			.getBlocksByClientId(clientId)[0]
			.innerBlocks.forEach(function(block) {
				dispatch("core/editor").updateBlockAttributes(block.clientId, {
					tabActive
				});
			});

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={align}
						onChange={value => {
							if ("left" == value) {
								setAttributes({ buttonsAlign: "start" });
							} else if ("right" == value) {
								setAttributes({ buttonsAlign: "end" });
							} else {
								setAttributes({ buttonsAlign: value });
							}
						}}
						controls={["left", "center", "right"]}
					/>
				</BlockControls>

				<Inspector {...this.props} />
				<div
					className={applyFilters("c9-blocks.blocks.className", className)}
					data-tab-active={tabActive}
					style={{
						backgroundColor: blockBackgroundColor
					}}
				>
					<ul
						className={classnames(
							"nav nav-tabs d-flex",
							buttonsAlign ? `justify-content-${buttonsAlign}` : "nav-justified"
						)}
						role="tablist"
					>
						{tabsData.map((tabData, i) => {
							const { slug, title } = tabData;
							const selected = tabActive === slug;

							return (
								<li className="nav-item">
									<RichText
										style={{
											backgroundColor: tabBackgroundColor,
											color: tabTextColor
										}}
										tagName="a"
										data-toggle="tab"
										role="tab"
										href={`#tab-${slug}-${instanceId}`}
										className={classnames("nav-link", selected ? "active" : "")}
										id={`tab-button-${slug}`}
										placeholder={__("Tab label", "c9-blocks")}
										value={title}
										unstableOnFocus={() => setAttributes({ tabActive: slug })}
										onChange={value => {
											if (tabs[i]) {
												const newSlug = this.getUniqueSlug(value, tabs[i]);
												const newTabsData = tabsData.map(
													(oldTabData, newIndex) => {
														if (i === newIndex) {
															return {
																...oldTabData,
																...{
																	title: value,
																	slug: newSlug
																}
															};
														}

														return oldTabData;
													}
												);

												setAttributes({
													tabActive: newSlug,
													tabsData: newTabsData
												});
												updateBlockAttributes(tabs[i].clientId, {
													slug: newSlug
												});
											}
										}}
										formattingControls={["bold", "italic", "strikethrough"]}
										keepPlaceholderOnFocus
									/>
									<RemoveButton
										show={isSelectedBlockInRoot}
										tooltipText={__("Remove tab?", "c9-blocks")}
										onRemove={() => {
											if (1 >= block.innerBlocks.length) {
												this.props.removeBlock(block.clientId);
											} else if (block.innerBlocks[i]) {
												this.props.removeBlock(block.innerBlocks[i].clientId);

												if (tabsData[i]) {
													const newTabsData = Object.assign([], tabsData);
													newTabsData.splice(i, 1);

													setAttributes({
														tabsData: newTabsData
													});
												}
											}
										}}
									/>
								</li>
							);
						})}
						{isSelectedBlockInRoot ? (
							<Tooltip text={__("Add Tab", "c9-blocks")}>
								<IconButton
									icon={"insert"}
									onClick={() => {
										const newTabsData = [];
										const newDataLength = tabsData.length + 1;

										for (let k = 0; k < newDataLength; k += 1) {
											if (tabsData[k]) {
												newTabsData.push(tabsData[k]);
											} else {
												newTabsData.push({
													slug: `tab-${k + 1}`,
													title: `Tab ${k + 1}`
												});
											}
										}

										setAttributes({ tabsData: newTabsData });
									}}
								/>
							</Tooltip>
						) : (
							""
						)}
					</ul>
					<div
						className="c9-tabs-content tab-content"
						style={{
							backgroundColor: tabContentBackgroundColor
						}}
					>
						<InnerBlocks
							template={this.getTabsTemplate()}
							templateLock="all"
							allowedBlocks={["c9-blocks/horizontal-tabs-tab"]}
						/>
					</div>
				</div>
				<style>
					{`
                    [data-block="${this.props.clientId}"] > .c9-horizontal-tabs > .tab-content > .editor-inner-blocks > .editor-block-list__layout [data-tab="${tabActive}"] {
                        display: block;
                    }
                    `}
				</style>
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
