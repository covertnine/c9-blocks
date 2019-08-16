/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

import memoize from "memize";
import times from "lodash/times";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls, MediaPlaceholder } = wp.editor;
const { applyFilters } = wp.hooks;
const { withInstanceId } = wp.compose;
const { isBlobURL } = wp.blob;
const { speak } = wp.a11y;

const ALLOWED_MEDIA_TYPES = ["image"];
const DEFAULT_SIZE_SLUG = "large";

// External Dependencies.
import classnames from "classnames";
import { find, get, isEmpty, map, last, omit, pick } from "lodash";

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			captionFocused: false
		};

		this.onSelectImage = this.onSelectImage.bind(this);
		this.onSelectURL = this.onSelectURL.bind(this);
		this.createSlides = this.createSlides.bind(this);
	}

	getSlidesTemplate = memoize(slides => {
		let templates = times(slides, () => ["c9-blocks/carousel-slide"]);

		templates[0].push({ slideActive: true });

		return templates;
	});

	pickRelevantMediaFiles = image => {
		const imageProps = pick(image, ["alt", "id", "link", "caption"]);
		imageProps.url =
			get(image, ["sizes", "large", "url"]) ||
			get(image, ["media_details", "sizes", "large", "source_url"]) ||
			image.url;
		return imageProps;
	};

	isTemporaryImage = (id, url) => !id && isBlobURL(url);

	isExternalImage = (id, url) => url && !id && !isBlobURL(url);

	onUploadError(message) {
		const { noticeOperations } = this.props;
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);

		this.props.setAttributes({
			url: undefined,
			alt: undefined,
			id: undefined,
			caption: undefined
		});
	}

	onSelectImage(media, i) {
		if (!media || !media.url) {
			let { url, id } = this.props.attributes;

			url[i] = undefined;
			id[i] = undefined;

			this.props.setAttributes({
				url,
				alt,
				id: undefined,
				caption: undefined
			});
			return;
		}

		let { id, url, alt, caption } = this.props.attributes;

		let mediaAttributes = this.pickRelevantMediaFiles(media);

		// If the current image is temporary but an alt or caption text was meanwhile written by the user,
		// make sure the text is not overwritten.
		if (this.isTemporaryImage(id[i], url[i])) {
			if (alt) {
				mediaAttributes = omit(mediaAttributes, ["alt"]);
			}
			if (caption) {
				mediaAttributes = omit(mediaAttributes, ["caption"]);
			}
		}

		let additionalAttributes;
		// Reset the dimension attributes if changing to a different image.
		if (!media.id || media.id !== id[i]) {
			additionalAttributes = {
				width: undefined,
				height: undefined,
				sizeSlug: DEFAULT_SIZE_SLUG
			};
		} else {
			// Keep the same url when selecting the same file, so "Image Size" option is not changed.
			additionalAttributes = { url };
		}

		id[i] = mediaAttributes.id;
		url[i] = mediaAttributes.url;

		// update id, url attributes from mediaAttributes
		mediaAttributes.id = id;
		mediaAttributes.url = url;

		this.props.setAttributes({
			...mediaAttributes,
			...additionalAttributes
		});
	}

	onSelectURL(newURL, i) {
		let { url, id } = this.props.attributes;

		if (newURL !== url[i]) {
			url[i] = newURL;
			id[i] = undefined;
			this.props.setAttributes({
				url,
				id,
				sizeSlug: DEFAULT_SIZE_SLUG
			});

			console.log(this.props.attributes);
		}
	}

	createIndicators(slides, id) {
		let indicators = [];
		for (let i = 1; i <= slides; i++) {
			indicators.push(
				<li
					data-target={`#c9-carousel-indicator-${id}`}
					data-slide-to={i}
					className={i == 1 ? "active" : null}
				/>
			);
		}

		return indicators;
	}

	createSlides(slides) {
		const { id, url } = this.props.attributes;

		let template = [];
		for (let i = 0; i < slides; i++) {
			const labels = {
				title: !url[i] ? __("Image") : __("Edit image"),
				instructions: __(
					"Upload an image file, pick one from your media library, or add one with a URL."
				)
			};

			const mediaPreview = !!url[i] && (
				<img
					alt={__("Edit image")}
					title={__("Edit image")}
					className={"edit-image-preview"}
					src={url[i]}
				/>
			);

			const isExternal = this.isExternalImage(id[i], url[i]);

			const src = isExternal ? url[i] : undefined;

			template.push(
				<div className={classnames("carousel-item", i == 0 ? "active" : null)}>
					{!url[i] ?
					<MediaPlaceholder
						icon="format-gallery"
						labels={labels}
						onSelect={media => this.onSelectImage(media, i)}
						onSelectURL={newURL => this.onSelectURL(newURL, i)}
						onError={this.onUploadError}
						accept="image/*"
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={{ id: id[i], src }}
						mediaPreview={mediaPreview}
						dropZoneUIOnly={url[i]}
					/>
					:
					// eslint-disable-next-line jsx-a11y/alt-text
					<img src={ url[i] }/>
					}
				</div>
			);
		}

		return template;
	}

	render() {
		const {
			attributes,
			setAttributes,
			updateBlockAttributes,
			block,
			className = "",
			instanceId
		} = this.props;

		const {
			autoSlide,
			slides,
			wrapAround,
			showIndicators,
			showControls,
			id,
			url
		} = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });

			for (let child of block.innerBlocks) {
				if (instanceId != child.attributes.id) {
					updateBlockAttributes(child.clientId, { id: instanceId });
				}
			}
		}

		console.log(id, url);

		return (
			<Fragment>
				<BlockControls />

				<Inspector {...this.props} />
				<div
					id={`c9-carousel-indicator-${instanceId}`}
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"carousel slide"
					)}
					data-ride="carousel"
					data-interval={autoSlide ? 5000 : false}
					data-wrap={wrapAround}
				>
					{showIndicators && (
						<ol className="carousel-indicators">
							{this.createIndicators(slides, instanceId)}
						</ol>
					)}
					<div className="carousel-inner">{this.createSlides(slides)}</div>
					{showControls && (
						<Fragment>
							<a
								className="carousel-control-prev"
								href={`#c9-carousel-indicator-${instanceId}`}
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href={`#c9-carousel-indicator-${instanceId}`}
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Next</span>
							</a>
						</Fragment>
					)}
				</div>
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
