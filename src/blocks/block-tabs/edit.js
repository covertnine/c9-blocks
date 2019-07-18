/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const { IconButton, Tooltip } = wp.components;

const { RichText, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;

const { applyFilters } = wp.hooks;

// External Dependencies.
import classnames from "classnames";
import slugify from "slugify";

export default class Edit extends Component {
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
		const { tabsData = [] } = this.props.attributes;
		const result = [];

		tabsData.forEach(tabData => {
			result.push(["c9-blocks/tabs-tab", tabData]);
		});

		return result;
	}

	getTabs() {
		return this.props.block.innerBlocks;
	}

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

	getUniqueSlug(newTitle, tabData) {
		let newSlug = "";
		let i = 0;

		while (!newSlug || !this.isUniqueSlug(newSlug, tabData.clientId)) {
			if (newSlug) {
				i += 1;
			}
			newSlug = slugify(`tab-${newTitle}${i ? `-${i}` : ""}`, {
				replacement: "-",
				lower: true
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
			className = ""
		} = this.props;

		const { tabActive, buttonsAlign, tabsData = [] } = attributes;

		const tabs = this.getTabs();

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={buttonsAlign}
						onChange={value => setAttributes({ buttonsAlign: value })}
						controls={["left", "center", "right"]}
					/>
				</BlockControls>

				<Inspector {...this.props} />
				<div
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"tabs"
					)}
					data-tab-active={tabActive}
				>
					<div
						className={classnames(
							"tabs-buttons",
							`tabs-buttons-align-${buttonsAlign}`
						)}
					>
						{tabsData.map((tabData, i) => {
							const { slug, title } = tabData;
							const selected = tabActive === slug;

							return (
								<div
									className={classnames(
										"tabs-buttons-item",
										selected ? "tabs-buttons-item-active" : ""
									)}
									key={`tab_button_${i}`}
								>
									<RichText
										tagName="span"
										placeholder={__("Tab label")}
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
								</div>
							);
						})}
						{isSelectedBlockInRoot ? (
							<Tooltip text={__("Add Tab")}>
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
					</div>
					<div className="tabs-content">
						<InnerBlocks
							template={this.getTabsTemplate()}
							templateLock="all"
							allowedBlocks={["c9-blocks/tabs-tab"]}
						/>
					</div>
				</div>
				<style>
					{`
                    [data-block="${
											this.props.clientId
										}"] > .tabs > .tabs-content > .editor-inner-blocks > .editor-block-list__layout [data-tab="${tabActive}"] {
                        display: block;
                    }
                    `}
				</style>
			</Fragment>
		);
	}
}
