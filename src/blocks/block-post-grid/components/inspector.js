/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import compact from "lodash/compact";
import map from "lodash/map";

// Import block components
const { InspectorControls, ColorPalette } = wp.editor;

// Import Inspector components
const {
	PanelBody,
	QueryControls,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl
} = wp.components;

const { addQueryArgs } = wp.url;

const { apiFetch } = wp;

const MAX_POSTS_COLUMNS = 4;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
		this.state = { categoriesList: [] };
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

		const { order, orderBy, postTypes, bgColor, bgOpacity } = attributes;

		const { categoriesList } = this.state;

		// Thumbnail options
		const imageCropOptions = [
			{ value: "landscape", label: __("Landscape", "c9-blocks") },
			{ value: "square", label: __("Square", "c9-blocks") }
		];

		// Post type options
		const postTypeOptions = JSON.parse(postTypes).map(p => {
			return {
				value: p,
				label: __(p.charAt(0).toUpperCase() + p.slice(1), "c9-blocks")
			};
		});

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

		// Check for posts
		const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

		// Check the post type
		const isPost = "post" === attributes.postType;

		// Add instruction text to the select
		const c9ImageSizeSelect = {
			value: "selectimage",
			label: __("Select image size")
		};

		// // Add the landscape image size to the select
		// const c9ImageSizeLandscape = {
		// 	value: "c9-post-grid-image-landscape",
		// 	label: __("C9 Grid Landscape")
		// };

		// // Add the square image size to the select
		// const c9ImageSizeSquare = {
		// 	value: "c9-post-grid-image-square",
		// 	label: __("C9 Grid Square")
		// };

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
			return "full";
		};

		return (
			<InspectorControls>
				<PanelBody
					title={__("Post and Page Grid Settings", "c9-blocks")}
					className={isPost ? null : "c9-blocks-hide-query"}
				>
					<SelectControl
						label={__("Content Type", "c9-blocks")}
						options={postTypeOptions}
						value={attributes.postType}
						onChange={value => this.props.setAttributes({ postType: value })}
					/>
					<QueryControls
						{...{ order, orderBy }}
						numberOfItems={attributes.postsToShow}
						categoriesList={categoriesList}
						selectedCategoryId={attributes.categories}
						onOrderChange={value => setAttributes({ order: value })}
						onOrderByChange={value => setAttributes({ orderBy: value })}
						onCategoryChange={value =>
							setAttributes({ categories: "" !== value ? value : undefined })
						}
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
							min={2}
							max={
								!hasPosts
									? MAX_POSTS_COLUMNS
									: Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
							}
						/>
					)}
				</PanelBody>
				<PanelBody
					title={__("Post and Page Grid Content", "c9-blocks")}
					initialOpen={false}
				>
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
					{attributes.displayPostImage && (
						<Fragment>
							<SelectControl
								label={__("Featured Image Style", "c9-blocks")}
								options={imageCropOptions}
								value={attributes.imageCrop}
								onChange={value =>
									this.props.setAttributes({ imageCrop: value })
								}
							/>
						</Fragment>
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
					title={__("Post and Page Grid Markup", "c9-blocks")}
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
