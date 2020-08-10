/**
 * Internal dependencies
 */
import SettingsSpacer from "../../../components/settings-spacer";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, ColorPalette } = wp.blockEditor;
const {
	PanelBody,
	QueryControls,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	Button
} = wp.components;
const { addQueryArgs } = wp.url;
const { apiFetch } = wp;

/**
 * External Dependencies.
 */
import React from "react";
import compact from "lodash/compact";
import map from "lodash/map";

const MAX_POSTS_COLUMNS = 4;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
		const {
			attributes: { bgPadding, bgMargin },
			setAttributes
		} = this.props;

		this.setAttributes = setAttributes;

		this.linkedPaddingRef = React.createRef();
		this.togglePaddingLinkage = this.togglePaddingLinkage.bind(this);
		this.linkedMarginRef = React.createRef();
		this.toggleMarginLinkage = this.toggleMarginLinkage.bind(this);

		this.state = {
			bgPadding: bgPadding,
			bgMargin: bgMargin,
			setAttributes: setAttributes,
			categoriesList: []
		};
	}

	componentDidMount() {
		this.stillMounted = true;
		this.fetchRequest = apiFetch({
			// eslint-disable-next-line camelcase
			path: addQueryArgs("/wp/v2/categories", { per_page: -1 })
		})
			.then(categoriesList => {
				if (this.stillMounted) {
					this.setState({ categoriesList });
				}
			})
			.catch(() => {
				if (this.stillMounted) {
					this.setState({ categoriesList: [] });
				}
			});
	}

	componentWillUnmount() {
		this.stillMounted = false;
	}

	togglePaddingLinkage = () => {
		let {
			attributes: { bgPadding }
		} = this.props;

		bgPadding = Object.assign({}, bgPadding);
		bgPadding.linked = !bgPadding.linked;
		bgPadding.icon = bgPadding.linked ? "admin-links" : "editor-unlink";
		this.setState({ bgPadding });
		this.setAttributes({ bgPadding });
	};

	setPaddingUnit = value => {
		const {
			attributes: { bgPadding }
		} = this.props;

		let spacingObject = Object.assign({}, bgPadding);
		spacingObject.unit = value;
		this.setState({ bgPadding: spacingObject });
		this.setAttributes({ bgPadding: spacingObject });
	};

	updatePadding = (position, value) => {
		if (this.state.bgPadding.linked) {
			let spacingObject = {
				linked: this.state.bgPadding.linked,
				unit: this.state.bgPadding.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.state.bgPadding.icon
			};
			this.setState({ bgPadding: spacingObject });
			this.setAttributes({ bgPadding: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.state.bgPadding);
			spacingObject[position] = value;
			this.setState({ bgPadding: spacingObject });
			this.setAttributes({ bgPadding: spacingObject });
		}
	};

	toggleMarginLinkage = () => {
		let {
			attributes: { bgMargin }
		} = this.props;

		bgMargin = Object.assign({}, bgMargin);
		bgMargin.linked = !bgMargin.linked;
		bgMargin.icon = bgMargin.linked ? "admin-links" : "editor-unlink";
		this.setState({ bgMargin });
		this.setAttributes({ bgMargin });
	};

	setMarginUnit = value => {
		const {
			attributes: { bgMargin }
		} = this.props;

		let spacingObject = Object.assign({}, bgMargin);
		spacingObject.unit = value;
		this.setState({ bgMargin: spacingObject });
		this.setAttributes({ bgMargin: spacingObject });
	};

	updateMargin = (position, value) => {
		if (this.state.bgMargin.linked) {
			let spacingObject = {
				linked: this.state.bgMargin.linked,
				unit: this.state.bgMargin.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.state.bgMargin.icon
			};
			this.setState({ bgMargin: spacingObject });
			this.setAttributes({ bgMargin: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.state.bgMargin);
			spacingObject[position] = value;
			this.setState({ bgMargin: spacingObject });
			this.setAttributes({ bgMargin: spacingObject });
		}
	};

	/* Get the available image sizes */
	imageSizeSelect() {
		const getSettings = wp.data.select("core/editor").getEditorSettings();

		return compact(
			map(getSettings.imageSizes, ({ name, slug }) => {
				return {
					value: slug,
					label: name
				};
			})
		);
	}

	render() {
		// Setup the attributes
		const { attributes, setAttributes, latestPosts } = this.props;

		const {
			order,
			orderBy,
			categories,
			postTypes,
			tagsList,
			bgColor,
			bgOpacity,
			bgMargin,
			bgPadding
		} = attributes;

		const { categoriesList } = this.state;

		// Post type options
		const postTypeOptions = JSON.parse(postTypes).map(p => {
			return {
				value: p,
				label: __(p.charAt(0).toUpperCase() + p.slice(1), "c9-blocks")
			};
		});

		// Category type options
		const categoriesTypeOptions = [
			{ value: "", label: __("All categories", "c9-blocks") }
		].concat(
			categoriesList.map(c => {
				return {
					value: c.id,
					label: __(c.name, "c9-blocks")
				};
			})
		);

		// Tag type options
		const tagsListOptions = [
			{ value: "", label: __("All tags", "c9-blocks") }
		].concat(
			JSON.parse(tagsList).map(t => {
				return {
					value: t.term_id,
					label: __(t.name, "c9-blocks")
				};
			})
		);

		// console.log(tagsListOptions)

		// Section title tags
		const sectionTags = [
			{ value: "div", label: __("div", "c9-blocks") },
			{ value: "header", label: __("header", "c9-blocks") },
			{ value: "section", label: __("section", "c9-blocks") },
			{ value: "article", label: __("article", "c9-blocks") },
			{ value: "main", label: __("main", "c9-blocks") },
			{ value: "aside", label: __("aside", "c9-blocks") },
			{ value: "footer", label: __("footer", "c9-blocks") }
		];

		// Section title tags
		const sectionTitleTags = [
			{ value: "h2", label: __("H2", "c9-blocks") },
			{ value: "h3", label: __("H3", "c9-blocks") },
			{ value: "h4", label: __("H4", "c9-blocks") },
			{ value: "h5", label: __("H5", "c9-blocks") },
			{ value: "h6", label: __("H6", "c9-blocks") }
		];

		const paddingOptions = [
			{ value: "-1", label: __("None", "c9-blocks") },
			{ value: "0", label: __("Padding 0", "c9-blocks") },
			{ value: "1", label: __("Padding 1", "c9-blocks") },
			{ value: "2", label: __("Padding 2", "c9-blocks") },
			{ value: "3", label: __("Padding 3", "c9-blocks") },
			{ value: "4", label: __("Padding 4", "c9-blocks") },
			{ value: "5", label: __("Padding 5", "c9-blocks") },
			{ value: "auto", label: __("Auto", "c9-blocks") }
		];

		const marginOptions = [
			{ value: "-1", label: __("None", "c9-blocks") },
			{ value: "0", label: __("Margin 0", "c9-blocks") },
			{ value: "1", label: __("Margin 1", "c9-blocks") },
			{ value: "2", label: __("Margin 2", "c9-blocks") },
			{ value: "3", label: __("Margin 3", "c9-blocks") },
			{ value: "4", label: __("Margin 4", "c9-blocks") },
			{ value: "5", label: __("Margin 5", "c9-blocks") },
			{ value: "auto", label: __("Auto", "c9-blocks") }
		];

		// Check for posts
		const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

		// Check the post type
		const isPost = "post" === attributes.postType;

		// Add instruction text to the select
		const c9ImageSizeSelect = {
			value: "selectimage",
			label: __("Select image size")
		};

		// Get the image size options
		const imageSizeOptions = this.imageSizeSelect();

		// Combine the objects
		// imageSizeOptions.push(c9ImageSizeSquare, c9ImageSizeLandscape);
		imageSizeOptions.unshift(c9ImageSizeSelect);

		const imageSizeValue = () => {
			for (let i = 0; i < imageSizeOptions.length; i++) {
				if (imageSizeOptions[i].value === attributes.imageSize) {
					return attributes.imageSize;
				}
			}
			return "large";
		};

		return (
			<InspectorControls>
				<PanelBody className={isPost ? null : "c9-blocks-hide-query"}>
					<SelectControl
						label={__("Content Type", "c9-blocks")}
						options={postTypeOptions}
						value={attributes.postType}
						onChange={value => this.props.setAttributes({ postType: value })}
					/>
					<QueryControls
						numberOfItems={attributes.postsToShow}
						onNumberOfItemsChange={value =>
							setAttributes({ postsToShow: value })
						}
					/>
					<RangeControl
						label={__("Number of items to offset", "c9-blocks")}
						value={attributes.offset}
						onChange={value => setAttributes({ offset: value })}
						min={0}
						max={20}
					/>
					{"grid" === attributes.postLayout && (
						<RangeControl
							label={__("Columns", "c9-blocks")}
							value={attributes.columns}
							onChange={value => setAttributes({ columns: value })}
							min={1}
							max={
								!hasPosts
									? MAX_POSTS_COLUMNS
									: Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
							}
						/>
					)}
				</PanelBody>
				<PanelBody title={__("Grid Content", "c9-blocks")} initialOpen={false}>
					<ToggleControl
						label={__("Filter by Category", "c9-blocks")}
						checked={attributes.filterByCategory}
						onChange={() =>
							this.props.setAttributes({
								filterByCategory: !attributes.filterByCategory
							})
						}
					/>
					{attributes.filterByCategory ? (
						<SelectControl
							label={__("Category", "c9-blocks")}
							options={categoriesTypeOptions}
							value={attributes.categories}
							onChange={value =>
								setAttributes({ categories: "" !== value ? value : undefined })
							}
						/>
					) : null}

					<ToggleControl
						label={__("Filter by Tag", "c9-blocks")}
						checked={attributes.filterByTag}
						onChange={() =>
							this.props.setAttributes({
								filterByTag: !attributes.filterByTag
							})
						}
					/>
					{attributes.filterByTag ? (
						<SelectControl
							label={__("Tag", "c9-blocks")}
							options={tagsListOptions}
							value={attributes.tags}
							onChange={value =>
								setAttributes({ tags: "" !== value ? value : undefined })
							}
						/>
					) : null}

					<hr />

					<QueryControls
						{...{ order, orderBy }}
						onOrderChange={value => setAttributes({ order: value })}
						onOrderByChange={value => setAttributes({ orderBy: value })}
					/>

					<ToggleControl
						label={__("Display Section Title", "c9-blocks")}
						checked={attributes.displaySectionTitle}
						onChange={() =>
							this.props.setAttributes({
								displaySectionTitle: !attributes.displaySectionTitle
							})
						}
					/>
					{attributes.displaySectionTitle && (
						<TextControl
							label={__("Section Title", "c9-blocks")}
							type="text"
							value={attributes.sectionTitle}
							onChange={value =>
								this.props.setAttributes({ sectionTitle: value })
							}
						/>
					)}
					<ToggleControl
						label={__("Display Featured Image", "c9-blocks")}
						checked={attributes.displayPostImage}
						onChange={() =>
							this.props.setAttributes({
								displayPostImage: !attributes.displayPostImage
							})
						}
					/>
					{attributes.displayPostImage && (
						<SelectControl
							label={__("Image Size", "c9-blocks")}
							value={imageSizeValue()}
							options={imageSizeOptions}
							onChange={value => this.props.setAttributes({ imageSize: value })}
						/>
					)}
					<ToggleControl
						label={__("Display Title", "c9-blocks")}
						checked={attributes.displayPostTitle}
						onChange={() =>
							this.props.setAttributes({
								displayPostTitle: !attributes.displayPostTitle
							})
						}
					/>
					{isPost && (
						<ToggleControl
							label={__("Display Author", "c9-blocks")}
							checked={attributes.displayPostAuthor}
							onChange={() =>
								this.props.setAttributes({
									displayPostAuthor: !attributes.displayPostAuthor
								})
							}
						/>
					)}
					{isPost && (
						<ToggleControl
							label={__("Display Date", "c9-blocks")}
							checked={attributes.displayPostDate}
							onChange={() =>
								this.props.setAttributes({
									displayPostDate: !attributes.displayPostDate
								})
							}
						/>
					)}
					<ToggleControl
						label={__("Display Excerpt", "c9-blocks")}
						checked={attributes.displayPostExcerpt}
						onChange={() =>
							this.props.setAttributes({
								displayPostExcerpt: !attributes.displayPostExcerpt
							})
						}
					/>
					{attributes.displayPostExcerpt && (
						<RangeControl
							label={__("Excerpt Length", "c9-blocks")}
							value={attributes.excerptLength}
							onChange={value => setAttributes({ excerptLength: value })}
							min={0}
							max={150}
						/>
					)}
					<ToggleControl
						label={__("Display Continue Reading Link", "c9-blocks")}
						checked={attributes.displayPostLink}
						onChange={() =>
							this.props.setAttributes({
								displayPostLink: !attributes.displayPostLink
							})
						}
					/>
					{attributes.displayPostLink && (
						<TextControl
							label={__("Customize Continue Reading Text", "c9-blocks")}
							type="text"
							value={attributes.readMoreText}
							onChange={value =>
								this.props.setAttributes({ readMoreText: value })
							}
						/>
					)}
				</PanelBody>
				<PanelBody
					title={__("Grid Markup", "c9-blocks")}
					initialOpen={false}
					className="c9-block-post-grid-markup-settings"
				>
					<SelectControl
						label={__("Post Grid Section Tag", "c9-blocks")}
						options={sectionTags}
						value={attributes.sectionTag}
						onChange={value => this.props.setAttributes({ sectionTag: value })}
						help={__(
							"Change the post grid section tag to match your content hierarchy.",
							"c9-blocks"
						)}
					/>
					{attributes.sectionTitle && (
						<SelectControl
							label={__("Section Title Heading Tag", "c9-blocks")}
							options={sectionTitleTags}
							value={attributes.sectionTitleTag}
							onChange={value =>
								this.props.setAttributes({ sectionTitleTag: value })
							}
							help={__(
								"Change the post/page section title tag to match your content hierarchy.",
								"c9-blocks"
							)}
						/>
					)}
					{attributes.displayPostTitle && (
						<SelectControl
							label={__("Post Title Heading Tag", "c9-blocks")}
							options={sectionTitleTags}
							value={attributes.postTitleTag}
							onChange={value =>
								this.props.setAttributes({ postTitleTag: value })
							}
							help={__(
								"Change the post/page title tag to match your content hierarchy.",
								"c9-blocks"
							)}
						/>
					)}
				</PanelBody>
				<SettingsSpacer />
				<PanelBody
					title={__("Spacing Options", "c9-blocks")}
					initialOpen={false}
				>
					<h5 className="padding-label">{__("Padding", "c9-blocks")}</h5>

					<p className="components-base-control__label">
						{__(
							"Configure between different levels of padding for each side.",
							"c9-blocks"
						)}
					</p>

					<div className="padding-top-wrapper">
						<SelectControl
							options={paddingOptions}
							value={bgPadding.top}
							onChange={value => this.updatePadding("top", value)}
						/>
					</div>
					<div className="padding-sides-wrapper">
						<SelectControl
							options={paddingOptions}
							value={bgPadding.left}
							onChange={value => this.updatePadding("left", value)}
						/>
						<Button
							label={__("Linked Padding Toggle", "c9-blocks")}
							icon={this.state.bgPadding.icon}
							onClick={this.togglePaddingLinkage}
							ref={this.state.linkedPaddingRef}
						/>
						<SelectControl
							options={paddingOptions}
							value={bgPadding.right}
							onChange={value => this.updatePadding("right", value)}
						/>
					</div>
					<div className="padding-bottom-wrapper">
						<SelectControl
							options={paddingOptions}
							value={bgPadding.bottom}
							onChange={value => this.updatePadding("bottom", value)}
						/>
					</div>

					<hr />

					<h5 className="margin-label">Margins</h5>

					<p className="components-base-control__label">
						{__(
							"Configure between different levels of margin for top and bottom sides.",
							"c9-blocks"
						)}
					</p>

					<div className="margin-top-wrapper">
						<SelectControl
							options={marginOptions}
							value={bgMargin.top}
							onChange={value => this.updateMargin("top", value)}
						/>
					</div>
					<div className="margin-sides-wrapper">
						<Button
							label={__("Linked Padding Toggle", "c9-blocks")}
							icon={this.state.bgMargin.icon}
							onClick={this.toggleMarginLinkage}
							ref={this.state.linkedMarginRef}
						/>
					</div>
					<div className="margin-bottom-wrapper">
						<SelectControl
							options={marginOptions}
							value={bgMargin.bottom}
							onChange={value => this.updateMargin("bottom", value)}
						/>
					</div>
				</PanelBody>
				<PanelBody
					title={__("Color Settings", "c9-blocks")}
					initialOpen={false}
				>
					<span>{__("Background Color", "c9-blocks")}</span>
					<ColorPalette
						label={__("Overlay Color", "c9-blocks")}
						value={bgColor}
						onChange={bgColor => setAttributes({ bgColor })}
					/>

					{bgColor && !!bgColor.length && (
						<RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label={__("Opacity", "c9-blocks")}
							value={bgOpacity}
							onChange={bgOpacity => setAttributes({ bgOpacity })}
							min={1}
							max={10}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		);
	}
}
