/* eslint-disable jsx-a11y/alt-text */
/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import RemoveButton from "./components/remove-button";
import React from "react";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls, MediaPlaceholder } = wp.editor;
const { applyFilters } = wp.hooks;
const { withInstanceId } = wp.compose;
const { isBlobURL } = wp.blob;
const { IconButton } = wp.components;

const ALLOWED_MEDIA_TYPES = ["image"];
const DEFAULT_SIZE_SLUG = "large";

// External Dependencies.
import classnames from "classnames";
import { get, pick } from "lodash";

class Edit extends Component {
	constructor({ autoSlide, wrapAround }) {
		super(...arguments);

		this.carouselRef = React.createRef();

		this.state = {
			captionFocused: false,
			auto: autoSlide,
			wrap: wrapAround,
			slideActive: 0,
			slideTarget: 0
		};

		this.onSelectImage = this.onSelectImage.bind(this);
		this.onSelectURL = this.onSelectURL.bind(this);
		this.createIndicators = this.createIndicators.bind(this);
		this.createSlides = this.createSlides.bind(this);
	}

	componentDidMount() {
		const $ = window.jQuery;
		let self = this;

		$(this.carouselRef.current).on("slide.bs.carousel", function({ to }) {
			self.setState({ slideTarget: to });
		});
	}

	componentDidUpdate() {
		const { auto, wrap, slideTarget } = this.state;
		const { autoSlide, wrapAround, slides } = this.props.attributes;
		const $ = window.jQuery;

		let options = $(this.carouselRef.current).data()["bs.carousel"]["_config"];

		if (auto != autoSlide) {
			let interval = autoSlide ? 5000 : false;
			options.interval = interval;
			this.setState({ auto: autoSlide });
		}

		if (wrap != wrapAround) {
			options.wrap = wrapAround;
			this.setState({ wrap: wrapAround });
		}

		if (slideTarget == slides) {
			this.setState({ slideActive: slides - 1, slideTarget: slides - 1 });
		}
	}

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

	onUploadError(message, i) {
		let { noticeOperations, url, id } = this.props;
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);

		// clone to new array
		url = [...url];
		id = [...id];

		url[i] = null;
		id[i] = null;

		this.props.setAttributes({
			url,
			id
		});
	}

	onSelectImage(media, i) {
		if (!media || !media.url) {
			let { url, id } = this.props.attributes;
			// clone to new array
			url = [...url];
			id = [...id];

			url[i] = undefined;
			id[i] = undefined;

			this.props.setAttributes({
				url,
				id
			});
			return;
		}

		let { id, url } = this.props.attributes;
		// clone to new array
		url = [...url];
		id = [...id];

		let mediaAttributes = this.pickRelevantMediaFiles(media);

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
		// clone to new array
		url = [...url];
		id = [...id];

		if (newURL !== url[i]) {
			url[i] = newURL;
			id[i] = undefined;
			this.props.setAttributes({
				url,
				id,
				sizeSlug: DEFAULT_SIZE_SLUG
			});
		}
	}

	createIndicators(slides, id) {
		let indicators = [];
		for (let i = 1; i <= slides; i++) {
			indicators.push(
				<li
					data-target={`#c9-carousel-indicator-${id}`}
					data-slide-to={i}
					className={i == this.state.slideActive ? "active" : null}
				/>
			);
		}

		return indicators;
	}

	createSlides(slides) {
		const { isSelectedBlockInRoot, setAttributes } = this.props;
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
				<div
					className={classnames(
						"carousel-item",
						i == this.state.slideActive ? "active" : null
					)}
				>
					{!url[i] ? (
						<MediaPlaceholder
							icon="format-gallery"
							labels={labels}
							onSelect={media => this.onSelectImage(media, i)}
							onSelectURL={newURL => this.onSelectURL(newURL, i)}
							onError={message => this.onUploadError(message, i)}
							accept="image/*"
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={{ id: id[i], src }}
							mediaPreview={mediaPreview}
							dropZoneUIOnly={url[i]}
						/>
					) : (
						<Fragment>
							<img src={url[i]} />
							{isSelectedBlockInRoot && (
								<div className="c9-remove-image">
									<IconButton
										label={__("Remove Image", "c9-blocks")}
										icon="dismiss"
										onClick={() => {
											// clone to new array
											let newUrl = [...url];
											let newId = [...id];

											newUrl[i] = null;
											newId[i] = null;

											setAttributes({ url: newUrl, id: newId });
										}}
									>
										{__("Remove", "c9-blocks")}
									</IconButton>
								</div>
							)}
						</Fragment>
					)}
				</div>
			);
		}

		return template;
	}

	render() {
		const {
			attributes,
			setAttributes,
			className = "",
			instanceId
		} = this.props;

		const {
			autoSlide,
			slides,
			wrapAround,
			showIndicators,
			showControls
		} = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });
		}

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
					ref={this.carouselRef}
				>
					<ol
						className={classnames(
							"carousel-indicators",
							!showIndicators ? "hide-indicator" : null
						)}
					>
						{this.createIndicators(slides, instanceId)}
					</ol>
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
