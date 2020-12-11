/* eslint-disable react/jsx-no-target-blank */

/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import PostGridImage from "./components/image";
import WidthToolbar from "../../components/width-toolbar";
import VerticalAlignmentToolbar from "../../components/vertical-alignment-toolbar";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { decodeEntities } = wp.htmlEntities;
const { Placeholder, Spinner, ToolbarGroup } = wp.components;
const { BlockControls } = wp.blockEditor;
const { applyFilters } = wp.hooks;

/**
 * External dependencies
 */
import classnames from "classnames";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	/**
	 * Returns the background styles of the container.
	 *
	 * @param {string} hue Color of background in hexadecimal.
	 * @param {number} opacity Transparency of hue.
	 *
	 * @return {Object} Background styles.
	 */
	c9BgStyles(hue, opacity) {
		const styles = {};

		if (hue) {
			styles.backgroundColor = this.hexToRGBA(hue, opacity);
		}

		return styles;
	}

	/**
	 * Returns the rgba version of the hex and alpha combined.
	 *
	 * @param {string} hex Hexadecimal color.
	 * @param {number} alpha Transparency/Opacity value.
	 *
	 * @return {string} Rgba configuration.
	 */
	hexToRGBA(hex, alpha) {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);

		var opacity;

		if (10 === alpha) {
			opacity = 1;
		} else {
			opacity = "." + alpha;
		}

		return `rgba(${r},${g},${b},${opacity})`;
	}

	/**
	 * Returns the css classes to assign to block by spacing configuration.
	 *
	 * @param {Object} padding Amount of padding, configuration.
	 * @param {Object} margin Amount of margin, configuration.
	 *
	 * @return Css classes to assign to block.
	 */
	c9SpacingConfig(padding, margin) {
		let classes = [];
		// abstract side class assignment
		function assignSideClasses(sideClass, level) {
			if (-1 != level) {
				classes.push(`${sideClass}-${level}`);
			}
		}

		// padding
		if (
			padding.top === padding.left &&
			padding.top === padding.bottom &&
			padding.top === padding.right &&
			-1 != padding.top
		) {
			classes.push(`p-${padding.top}`);
		} else if (padding.top === padding.bottom && 0 <= padding.top) {
			classes.push(`py-${padding.top}`);
			assignSideClasses("pl", padding.left);
			assignSideClasses("pr", padding.right);
		} else if (padding.left === padding.right && 0 <= padding.left) {
			classes.push(`px-${padding.left}`);
			assignSideClasses("pt", padding.top);
			assignSideClasses("pb", padding.bottom);
		} else {
			["top", "bottom", "left", "right"].map(s =>
				assignSideClasses(`p${s[0]}`, padding[s])
			);
		}

		// margin
		if (margin.top === margin.bottom && -1 != margin.top) {
			classes.push(`my-${margin.top}`);
		} else {
			["top", "bottom"].map(s => assignSideClasses(`m${s[0]}`, margin[s]));
		}

		return classes;
	}

	/**
	 * Returns truncated version of post excerpt limited by given number of words.
	 *
	 * @param {string} str Original excerpt content of post.
	 * @param {number} noWords How many words to keep.
	 *
	 * @return {string} Truncated version of post excerpt.
	 */
	truncate(str, noWords) {
		return str
			.split(" ")
			.splice(0, noWords)
			.join(" ");
	}

	render() {
		const {
			attributes,
			setAttributes,
			latestPosts,
			className = ""
		} = this.props;

		const {
			bgColor,
			bgOpacity,
			bgMargin,
			bgPadding,
			disableToolbar
		} = attributes;

		// Check if there are posts
		const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

		// Check the post type
		const isPost = "post" === attributes.postType;

		let currWidth;
		if (0 != attributes.align.length) {
			if ("container" == attributes.containerWidth) {
				currWidth = "wide";
			} else if ("container-fluid" == attributes.containerWidth) {
				currWidth = "full";
			} else {
				currWidth = "narrow";
			}
		}

		if (!hasPosts) {
			return (
				<Fragment>
					<Inspector {...{ setAttributes, ...this.props }} />
					<Placeholder
						icon="admin-post"
						label={__("C9 Blocks Post Grid", "c9-blocks")}
					>
						{!Array.isArray(latestPosts) ? (
							<Spinner />
						) : (
							__("No posts found.", "c9-blocks")
						)}
					</Placeholder>
				</Fragment>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts =
			latestPosts.length > attributes.postsToShow
				? latestPosts.slice(0, attributes.postsToShow)
				: latestPosts;

		// Add toolbar controls to change layout
		const layoutControls = [
			{
				icon: "grid-view",
				title: __("Grid View", "c9-blocks"),
				onClick: () => setAttributes({ postLayout: "grid" }),
				isActive: "grid" === attributes.postLayout
			},
			{
				icon: "list-view",
				title: __("List View", "c9-blocks"),
				onClick: () => setAttributes({ postLayout: "list" }),
				isActive: "list" === attributes.postLayout
			}
		];

		// Get the section tag
		const SectionTag = attributes.sectionTag
			? attributes.sectionTag
			: "section";

		// Get the section title tag
		const SectionTitleTag = attributes.sectionTitleTag
			? attributes.sectionTitleTag
			: "h2";

		// Get the post title tag
		const PostTag = attributes.postTitleTag ? attributes.postTitleTag : "h3";

		return (
			<Fragment>
				<Inspector {...{ setAttributes, ...this.props }} />
				<BlockControls>
					{!disableToolbar && (
						<WidthToolbar
							value={currWidth}
							onChange={value => {
								if ("wide" == value) {
									setAttributes({ containerWidth: "container", align: "wide" });
								} else if ("full" == value) {
									setAttributes({
										containerWidth: "container-fluid",
										align: "full"
									});
								} else if ("narrow" == value) {
									setAttributes({
										containerWidth: "container-narrow",
										align: "narrow"
									});
								} else {
									setAttributes({ containerWidth: "container", align: "" });
								}
							}}
						/>
					)}
					<VerticalAlignmentToolbar
						value={attributes.verticalAlign}
						onChange={value => {
							setAttributes({ verticalAlign: value });
						}}
					/>
					<ToolbarGroup controls={layoutControls} />
				</BlockControls>
				<SectionTag
					style={this.c9BgStyles(bgColor, bgOpacity)}
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"c9-block-post-grid",
						this.c9SpacingConfig(bgPadding, bgMargin)
					)}
				>
					{attributes.displaySectionTitle && attributes.sectionTitle && (
						<SectionTitleTag className="c9-post-grid-section-title">
							{attributes.sectionTitle}
						</SectionTitleTag>
					)}

					<div
						className={classnames({
							"is-grid": "grid" === attributes.postLayout,
							"is-list": "list" === attributes.postLayout,
							[`columns-${attributes.columns}`]:
								"grid" === attributes.postLayout,
							"c9-post-grid-items": "c9-post-grid-items"
						})}
					>
						{displayPosts.map((post, i) => (
							<article
								key={i}
								id={"post-" + post.id}
								className={classnames(
									"post-" + post.id,
									post.featured_image_src && attributes.displayPostImage
										? "has-post-thumbnail"
										: null
								)}
							>
								{attributes.displayPostImage && post.featured_media ? (
									<PostGridImage
										{...this.props}
										imgAlt={
											decodeEntities(post.title.rendered.trim()) ||
											__("(Untitled)", "c9-blocks")
										}
										imgClass={`wp-image-${post.featured_media.toString()}`}
										imgID={post.featured_media.toString()}
										imgSize={attributes.imageSize}
										imgSizeLandscape={post.featured_image_src}
										imgSizeSquare={post.featured_image_src_square}
										imgLink={post.link}
									/>
								) : null}

								<div className="c9-block-post-grid-text">
									<header className="c9-block-post-grid-header">
										{attributes.displayPostTitle && (
											<PostTag className="c9-block-post-grid-title">
												<a href={post.link} target="_blank" rel="bookmark">
													{decodeEntities(post.title.rendered.trim()) ||
														__("(Untitled)", "c9-blocks")}
												</a>
											</PostTag>
										)}

										{isPost && (
											<div className="c9-block-post-grid-byline">
												{attributes.displayPostAuthor &&
													post.author_info.display_name && (
														<div className="c9-block-post-grid-author">
															<a
																className="c9-text-link"
																target="_blank"
																href={post.author_info.author_link}
															>
																{post.author_info.display_name}
															</a>
														</div>
													)}

												{attributes.displayPostDate && post.date_gmt && (
													<time
														dateTime={dayjs(post.date_gmt)
															.utc()
															.format()}
														className={"c9-block-post-grid-date"}
													>
														{dayjs(post.date_gmt)
															.local()
															.format("MMMM DD, YYYY", "c9-blocks")}
													</time>
												)}
											</div>
										)}
									</header>

									<div className="c9-block-post-grid-excerpt">
										{attributes.displayPostExcerpt && post.excerpt && (
											<div
												dangerouslySetInnerHTML={{
													__html: this.truncate(
														post.excerpt.rendered,
														attributes.excerptLength
													)
												}}
											/>
										)}

										{attributes.displayPostLink && (
											<p>
												<a
													className="c9-block-post-grid-more-link c9-text-link"
													href={post.link}
													target="_blank"
													rel="bookmark"
												>
													{attributes.readMoreText}
												</a>
											</p>
										)}
									</div>
								</div>
							</article>
						))}
					</div>
				</SectionTag>
			</Fragment>
		);
	}
}
