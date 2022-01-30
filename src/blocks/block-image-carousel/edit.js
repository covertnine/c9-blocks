/* eslint-disable jsx-a11y/alt-text */

/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import PauseToolBar from "../../components/pause-toolbar";
import VerticalAlignmentToolbar from "../../components/vertical-alignment-toolbar";
import WidthToolbar from "../../components/width-toolbar";
import SwapSlideToolbar from "./components/swap-slide-toolbar";
import ResizableCarouselContainer from "./components/resizable-carousel-container";
import URLPicker from "./components/url-picker";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls, RichText, MediaPlaceholder } = wp.blockEditor;
const { isBlobURL } = wp.blob;
const { Button } = wp.components;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import get from "lodash/get";
import pick from "lodash/pick";
import React from "react";

const ALLOWED_MEDIA_TYPES = ["image"];
const DEFAULT_SIZE_SLUG = "large";
const NEW_TAB_REL = "noreferrer noopener";

class Edit extends Component {
	constructor({ autoSlide, wrapAround, slideTime }) {
		super(...arguments);

		this.carouselRef = React.createRef();

		this.state = {
			auto: autoSlide,
			wrap: wrapAround,
			time: slideTime,
			slideActive: 0,
			slideTarget: 0,
			pause: false
		};

		this.onSelectImage = this.onSelectImage.bind(this);
		this.onSelectURL = this.onSelectURL.bind(this);
		this.createIndicators = this.createIndicators.bind(this);
		this.createSlides = this.createSlides.bind(this);
	}

	setRef = input => {
		this.carouselRef.current = input;
	};

	/**
	 * Adds event handler to keep track of active slide.
	 */
	componentDidMount() {
		const $ = window.jQuery;
		let self = this;

		$(this.carouselRef.current).on("slide.bs.carousel", function({ to }) {
			self.setState({ slideTarget: to, slideActive: to });
			$("> .c9-add-remove-rows button", `#block-${self.props.clientId}`).attr(
				"aria-label",
				`Remove Current Slide (#${to + 1})`
			);
			if ($("> .c9-add-remove-rows button", `#block-${self.props.clientId}`).get(0)) {
				$("> .c9-add-remove-rows button", `#block-${self.props.clientId}`).get(0)
					.lastChild.nodeValue = `Remove Current Slide (#${to + 1})`;
			}
		});
	}

	/**
	 * Removes event hooks assigned on creation.
	 */
	componentWillUnmount() {
		const $ = window.jQuery;

		$(this.carouselRef.current).off("slide.bs.carousel", "**");
	}

	/**
	 * Checks if re-rendering is needed for component.
	 * Denies updates if slide active is not valid, i.e less than 0 or greater than num slides.
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (
			nextState.slideActive !== this.state.slideActive &&
			this.props.attributes.slides === nextProps.attributes.slides
		) {
			return 0 >= nextState.slideActive;
		}

		return true;
	}

	/**
	 * Checks if settings for carousel changed by comparing them to current state.
	 * If so, update state and carousel directly using the react ref.
	 */
	componentDidUpdate() {
		const { auto, wrap, time, pause } = this.state;
		const { autoSlide, wrapAround, slideTime } = this.props.attributes;
		const $ = window.jQuery;

		if (0 > this.state.slideActive) {
			this.setState({ slideTarget: 0, slideActive: 0 });
		}

		if ($(this.carouselRef.current).data()["bs.carousel"]) {
			let options = $(this.carouselRef.current).data()["bs.carousel"]._config;

			if (pause && false != auto) {
				options.interval = false;
				this.setState({ auto: false });
			} else if (!pause && auto != autoSlide) {
				let interval = autoSlide ? slideTime : false;
				options.interval = interval;
				this.setState({ auto: autoSlide });

				if (autoSlide && time != slideTime) {
					this.setState({ time: slideTime });
				}
			} else if (autoSlide && time != slideTime) {
				options.interval = slideTime;
				this.setState({ time: slideTime });
			}

			if (wrap != wrapAround) {
				options.wrap = wrapAround;
				this.setState({ wrap: wrapAround });
			}
		}
	}

	/**
	 * Extracts relevant attributes from image.
	 *
	 * @param {Object} image Retrieved image.
	 *
	 * @return {Object} Processed image.
	 */
	pickRelevantMediaFiles = image => {
		const imageProps = pick(image, [
			"alt",
			"id",
			"link",
			"caption",
			"height",
			"width"
		]);
		imageProps.url =
			get(image, ["sizes", "large", "url"]) ||
			get(image, ["media_details", "sizes", "large", "source_url"]) ||
			image.url;
		return imageProps;
	};

	/**
	 * Checks if temporary image.
	 */
	isTemporaryImage = (id, url) => !id && isBlobURL(url);

	/**
	 * Checks if image is loaded externally.
	 */
	isExternalImage = (id, url) => url && !id && !isBlobURL(url);

	/**
	 * What to do on image upload error
	 *
	 * @param {string} message Error msg to display.
	 * @param {number} i Location of slide image was to be added.
	 */
	onUploadError(message, i) {
		let { noticeOperations, url, id, link } = this.props;
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);

		// clone to new array
		url = [...url];
		id = [...id];
		link = [...link];

		url[i] = null;
		id[i] = null;
		link[i] = null;

		this.props.setAttributes({
			url,
			id,
			link
		});
	}

	/**
	 * When uploading an image.
	 *
	 * @param {Object} media Image data.
	 * @param {number} i Location of image in the slides.
	 */
	onSelectImage(media, i) {
		if (!media || !media.url) {
			let { url, id, link } = this.props.attributes;
			// clone to new array
			url = [...url];
			id = [...id];
			link = [...link];

			url[i] = undefined;
			id[i] = undefined;
			link[i] = "";

			this.props.setAttributes({
				url,
				id,
				link
			});
			return;
		}

		let { id, url, link } = this.props.attributes;
		// clone to new array
		url = [...url];
		id = [...id];
		link = [...link];

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
		link[i] = "";

		// update id, url attributes from mediaAttributes
		mediaAttributes.id = id;
		mediaAttributes.url = url;

		this.props.setAttributes({
			...mediaAttributes,
			...additionalAttributes,
			link
		});

		this.calcAndSetSlideHeight(media.width, media.height);
	}

	/**
	 * Assigns the new image url to the block's attributes.
	 *
	 * @param {string} newURL URL of new image.
	 * @param {number} i Location to assign new URL to.
	 */
	onSelectURL(newURL, i) {
		// https://stackoverflow.com/questions/11442712/get-width-height-of-remote-image-from-url
		function getMeta(url, callback) {
			// eslint-disable-next-line no-undef
			var img = new Image();
			img.src = url;
			img.onload = function() {
				callback(this.width, this.height);
			};
		}

		let { url, id, link } = this.props.attributes;
		// clone to new array
		url = [...url];
		id = [...id];
		link = [...link];

		if (newURL !== url[i]) {
			url[i] = newURL;
			id[i] = undefined;
			link[i] = "";
			this.props.setAttributes({
				url,
				id,
				link,
				sizeSlug: DEFAULT_SIZE_SLUG
			});
		}

		getMeta(newURL, this.calcAndSetSlideHeight);
	}

	calcAndSetSlideHeight = (width, height) => {
		const targetWidth = document.querySelector(`#block-${this.props.clientId}`)
			.clientWidth;

		const ratio = width / height;
		const newHeight = Math.round(targetWidth / ratio);

		if (newHeight && newHeight > this.props.attributes.slideMaxHeight) {
			this.props.setAttributes({
				slideMaxHeight: newHeight
			});
		}
	};

	/**
	 * Returns the indicators layout configuration for a given amount of tabs.
	 *
	 * @param {number} slides Amount of indicators to create.
	 * @param {number} id Instance Id of this carousel block.
	 *
	 * @return {Object[]} Indicators layout configuration.
	 */
	createIndicators(slides, id) {
		const { slideActive, slideTarget } = this.state;
		const { isSelectedBlockInRoot } = this.props;
		const { url } = this.props.attributes;

		let indicators = [];
		for (let i = 0; i < slides; i++) {
			indicators.push(
				<li
					data-target={`#c9-image-carousel-indicator-${id}`}
					data-slide-to={i}
					className={classnames(
						i == slideActive ? "active" : null,
						url[slideTarget] && isSelectedBlockInRoot
							? "editor-selected-controls-lift"
							: null
					)}
				/>
			);
		}

		return indicators;
	}

	/**
	 * Generates the slides using the given images.
	 */
	createSlides(slides, allActive = false) {
		const { isSelectedBlockInRoot, setAttributes } = this.props;
		const {
			id,
			url,
			link,
			captionTitle,
			captionContent
		} = this.props.attributes;

		let template = [];
		let sizes = [];

		const refCallback = async element => {
			if (element && allActive) {
				let config = element.getBoundingClientRect();
				while (0 === config.height) {
					// wait and check again
					await new Promise(r => setTimeout(r, 500));
					config = element.getBoundingClientRect();
				}
				// console.log(config);
				sizes.push(config.height);
				if (sizes.length == slides) {
					// console.log("full", sizes);
					allActive = false;
					// set largest height to be attribute
					setAttributes({
						slideMaxHeight: Math.ceil(Math.max(...sizes) / 10) * 10
					});
				}
			}
		};

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
					ref={refCallback}
					className={classnames(
						"carousel-item",
						i == this.state.slideActive || allActive ? "active" : null
					)}
					style={
						allActive
							? {
									position: "absolute",
									left: "-10000em"
							  }
							: {}
					}
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
							<img src={url[i]} className="d-block w-100" />
							<div
								className={classnames(
									"carousel-caption d-none d-md-block",
									isSelectedBlockInRoot ? "editor-selected-lift" : null
								)}
							>
								<RichText
									tagName="h5"
									placeholder={__("Slide label", "c9-blocks")}
									value={captionTitle[i]}
									onChange={value => {
										let newCaptionTitle = [...captionTitle];
										newCaptionTitle[i] = value;

										setAttributes({
											captionTitle: newCaptionTitle
										});
									}}
									allowedFormats={["bold", "italic", "strikethrough"]}
									keepPlaceholderOnFocus
								/>
								<RichText
									tagName="p"
									placeholder={__(
										"Nulla vitae elit libero, a pharetra augue mollis interdum.",
										"c9-blocks"
									)}
									value={captionContent[i]}
									onChange={value => {
										let newCaptionContent = [...captionContent];
										newCaptionContent[i] = value;

										setAttributes({
											captionContent: newCaptionContent
										});
									}}
									allowedFormats={["bold", "italic", "strikethrough"]}
									keepPlaceholderOnFocus
								/>
							</div>
							{isSelectedBlockInRoot && (
								<div className="c9-remove-image">
									<Button
										label={__("Remove Image", "c9-blocks")}
										icon="dismiss"
										onClick={() => {
											// clone to new array
											let newUrl = [...url];
											let newId = [...id];
											let newLink = [...link];
											let newCaptionTitle = [...captionTitle];
											let newCaptionContent = [...captionContent];

											newUrl[i] = null;
											newId[i] = null;
											newLink[i] = null;
											newCaptionTitle[i] = null;
											newCaptionContent[i] = null;

											setAttributes({
												url: newUrl,
												id: newId,
												link: newLink,
												captionTitle: newCaptionTitle,
												captionContent: newCaptionContent
											});
										}}
									>
										{__("Remove", "c9-blocks")}
									</Button>
								</div>
							)}
						</Fragment>
					)}
				</div>
			);
		}

		return template;
	}

	/**
	 * Swaps slide contents given two indexes
	 */
	swapSlide = (index, targetIdx) => {
		// swap the index locations of two elements of an array using es6 destructuring assignment
		const swapArrayLocs = (arr, index1, index2) => {
			[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
		};

		const { setAttributes } = this.props;
		let { url, id, link, captionTitle, captionContent } = this.props.attributes;

		url = [...url];
		id = [...id];
		link = [...link];

		swapArrayLocs(url, index, targetIdx);
		swapArrayLocs(id, index, targetIdx);
		swapArrayLocs(link, index, targetIdx);
		swapArrayLocs(captionTitle, index, targetIdx);
		swapArrayLocs(captionContent, index, targetIdx);

		setAttributes({ id, url, link, captionTitle, captionContent });
	};

	render() {
		const { slideTarget, slideActive, pause } = this.state;

		const {
			attributes,
			setAttributes,
			isSelected,
			isSelectedBlockInRoot
		} = this.props;

		const {
			slides,
			showIndicators,
			showControls,
			url,
			link,
			verticalAlign,
			align,
			containerWidth,
			linkTarget,
			rel
		} = attributes;

		let instanceId = attributes.instanceId;

		if (instanceId === undefined) {
			// set default random id if not set
			instanceId = this.props.instanceId;
			setAttributes({ instanceId });
		}

		const SlidesComponent = this.createSlides(slides);

		let currWidth;
		if (0 != align.length) {
			if ("container" == containerWidth) {
				currWidth = "wide";
			} else if ("container-fluid" == containerWidth) {
				currWidth = "full";
			} else {
				currWidth = "narrow";
			}
		}

		return (
			<Fragment>
				<BlockControls>
					<SwapSlideToolbar
						swapSlide={this.swapSlide}
						slides={slides}
						carouselRef={this.carouselRef}
					/>
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
					<PauseToolBar
						value={pause}
						onChange={value => {
							this.setState({ pause: value });
						}}
					/>
					<VerticalAlignmentToolbar
						value={verticalAlign}
						onChange={value => {
							setAttributes({ verticalAlign: value });
						}}
					/>
				</BlockControls>

				<Inspector
					{...this.props}
					carouselRef={this.carouselRef}
					slideTarget={slideTarget}
				/>
				<ResizableCarouselContainer
					{...this.props}
					setRef={this.setRef}
					editMode={true}
				>
					<ol
						className={classnames(
							"carousel-indicators",
							!showIndicators ? "hide-indicator" : null
						)}
					>
						{this.createIndicators(slides, instanceId)}
					</ol>
					<div
						className={classnames(
							"carousel-inner",
							verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null
						)}
					>
						{SlidesComponent}
					</div>
					{showControls && (
						<Fragment>
							<a
								className={classnames(
									"carousel-control-prev",
									url[slideTarget] && isSelectedBlockInRoot
										? "editor-selected-controls-lift"
										: null
								)}
								href={`#c9-image-carousel-indicator-${instanceId}`}
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
								className={classnames(
									"carousel-control-next",
									url[slideTarget] && isSelectedBlockInRoot
										? "editor-selected-controls-lift"
										: null
								)}
								href={`#c9-image-carousel-indicator-${instanceId}`}
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
				</ResizableCarouselContainer>
				<URLPicker
					id={instanceId}
					startPause={() => this.setState({ pause: true })}
					url={link}
					setAttributes={setAttributes}
					isSelected={isSelected}
					opensInNewTab={"_blank" === linkTarget}
					onToggleOpenInNewTab={value => {
						const newLinkTarget = value ? "_blank" : undefined;

						let updatedRel = rel;
						if (newLinkTarget && !rel) {
							updatedRel = NEW_TAB_REL;
						} else if (!newLinkTarget && rel === NEW_TAB_REL) {
							updatedRel = undefined;
						}

						setAttributes({
							linkTarget: newLinkTarget,
							rel: updatedRel
						});
					}}
				/>
				{isSelectedBlockInRoot && 1 < slides && (
					<div className="c9-add-remove-rows">
						<Button
							label={__(
								`Remove Current Slide (#${slideActive + 1})`,
								"c9-blocks"
							)}
							icon="dismiss"
							onClick={() => {
								let {
									url,
									id,
									link,
									captionTitle,
									captionContent
								} = this.props.attributes;
								const { slideActive } = this.state;
								if (-1 < slideActive && slideActive < slides && 1 < slides) {
									const $ = window.jQuery;
									url = [...url];
									id = [...id];
									link = [...link];

									url.splice(slideActive, 1);
									id.splice(slideActive, 1);
									link.splice(slideActive, 1);
									captionTitle.splice(slideActive, 1);
									captionContent.splice(slideActive, 1);

									setAttributes({
										id,
										url,
										link,
										captionTitle,
										captionContent,
										slides: slides - 1
									});

									if (this.carouselRef.current && 0 < slideTarget) {
										$(this.carouselRef.current).carousel("prev");
									}
								}
							}}
						>
							{__(`Remove Current Slide (#${slideActive + 1})`, "c9-blocks")}
						</Button>
					</div>
				)}
			</Fragment>
		);
	}
}

export default Edit;
