/* eslint-disable react/jsx-no-target-blank */
/**
 * External dependencies
 */
import moment from "moment";
import classnames from "classnames";
import Inspector from "./components/inspector";
import PostGridImage from "./components/image";

import WidthToolbar from "./components/width-toolbar";
import VerticalAlignmentToolbar from "./components/vertical-align-toolbar";

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { Placeholder, Spinner, Toolbar } = wp.components;

const { BlockControls } = wp.editor;

const { applyFilters } = wp.hooks;

export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	truncate(str, no_words) {
		return str
			.split(" ")
			.splice(0, no_words)
			.join(" ");
	}

	render() {
		const {
			attributes,
			setAttributes,
			latestPosts,
			className = ""
		} = this.props;

		// Check if there are posts
		const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

		// Check the post type
		const isPost = attributes.postType === "post";

		let currWidth;
		if (attributes.align.length != 0) {
			if (attributes.containerWidth == "container") {
				currWidth = "wide";
			} else if (attributes.containerWidth == "container-fluid") {
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
						label={__("Cortex Blocks Post and Page Grid", "c9-blocks")}
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
				isActive: attributes.postLayout === "grid"
			},
			{
				icon: "list-view",
				title: __("List View", "c9-blocks"),
				onClick: () => setAttributes({ postLayout: "list" }),
				isActive: attributes.postLayout === "list"
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
				<WidthToolbar
						value={currWidth}
						onChange={value => {
							if (value == "wide") {
								setAttributes({ containerWidth: "container", align: "wide" });
							} else if (value == "full") {
								setAttributes({
									containerWidth: "container-fluid",
									align: "full"
								});
							} else if (value == "narrow") {
								setAttributes({
									containerWidth: "container-narrow",
									align: "narrow"
								});
							} else {
								setAttributes({ containerWidth: "container", align: "" });
							}
						}}
					/>
					<VerticalAlignmentToolbar
						value={attributes.verticalAlign}
						onChange={value => {
							setAttributes({ verticalAlign: value });
						}}
					/>
					<Toolbar controls={layoutControls} />
				</BlockControls>
				<SectionTag
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"c9-block-post-grid"
					)}
				>
					{attributes.displaySectionTitle && attributes.sectionTitle && (
						<SectionTitleTag className="c9-post-grid-section-title">
							{attributes.sectionTitle}
						</SectionTitleTag>
					)}

					<div
						className={classnames({
							"is-grid": attributes.postLayout === "grid",
							"is-list": attributes.postLayout === "list",
							[`columns-${attributes.columns}`]:
								attributes.postLayout === "grid",
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
														dateTime={moment(post.date_gmt)
															.utc()
															.format()}
														className={"c9-block-post-grid-date"}
													>
														{moment(post.date_gmt)
															.local()
															.format("MMMM DD, Y", "c9-blocks")}
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
