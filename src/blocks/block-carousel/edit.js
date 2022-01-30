/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import PauseToolBar from "../../components/pause-toolbar";
import VerticalAlignmentToolbar from "../../components/vertical-alignment-toolbar";
import WidthToolbar from "../../components/width-toolbar";
import SwapSlideToolbar from "./components/swap-slide-toolbar";
import ResizableCarouselContainer from "./components/resizable-carousel-container";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks, BlockControls } = wp.blockEditor;
const { Button } = wp.components;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import React from "react";
import memoize from "memize";
import times from "lodash/times";
import constant from "lodash/constant";

const ALLOWED_BLOCKS = ["c9-blocks/carousel-slide"];

class Edit extends Component {
	constructor() {
		super(...arguments);

		const { autoSlide, wrapAround, slideTime } = this.props.attributes;

		this.carouselRef = React.createRef();
		this.state = {
			auto: autoSlide,
			wrap: wrapAround,
			time: slideTime,
			active: 0,
			pause: false
		};

		this.createIndicators = this.createIndicators.bind(this);
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
			self.setState({ active: to });
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
		return (
			0 <= nextState.active && nextState.active < nextProps.attributes.slides
		);
	}

	/**
	 * Checks if settings for carousel changed by comparing them to current state.
	 * If so, update state and carousel directly using the react ref.
	 */
	componentDidUpdate() {
		const { block, updateBlockAttributes } = this.props;

		// eslint-disable-next-line no-unused-vars
		for (let child of block.innerBlocks) {
			if (child.attributes.slideActive !== this.state.active) {
				updateBlockAttributes(child.clientId, {
					slideActive: this.state.active
				});
			}
		}

		const { auto, wrap, time, pause } = this.state;
		const { autoSlide, wrapAround, slideTime } = this.props.attributes;
		const $ = window.jQuery;

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
	 * Returns the indicators layout configuration for a given amount of tabs.
	 *
	 * @param {number} slides Amount of indicators to create.
	 * @param {number} id Instance Id of this carousel block.
	 *
	 * @return {Object[]} Indicators layout configuration.
	 */
	createIndicators(slides, id) {
		const { active } = this.state;
		const { isSelectedBlockInRoot } = this.props;

		let indicators = [];
		for (let i = 0; i < slides; i++) {
			indicators.push(
				<li
					data-target={`#c9-carousel-indicator-${id}`}
					data-slide-to={i}
					className={classnames(
						i == active ? "active" : null,
						isSelectedBlockInRoot ? "editor-selected-controls-lift" : null
					)}
				/>
			);
		}

		return indicators;
	}

	/**
	 * Generates the child slide blocks.
	 */
	getSlidesTemplate = memoize(slides => {
		let sizes = times(slides, constant(-1));
		// console.log(sizes);
		const slideHeightCallback = (id, height) => {
			// console.log(id, height);
			sizes[id] = height;
			// console.log(sizes);
		};

		let templates = times(slides, id => [
			"c9-blocks/carousel-slide",
			{ id, slideActive: this.state.active, slides, slideHeightCallback }
		]);

		return templates;
	});

	render() {
		const { attributes, isSelectedBlockInRoot, setAttributes, swapSlide } = this.props;

		const {
			slides,
			showControls,
			showIndicators,
			verticalAlign,
			align,
			containerWidth
		} = attributes;

		const { pause, active } = this.state;

		let instanceId = attributes.instanceId;

		if (instanceId === undefined) {
			// set default random id if not set
			instanceId = this.props.instanceId;
			setAttributes({ instanceId });
		}

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
						swapSlide={swapSlide}
						activeSlide={active}
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
					slideTarget={this.state.active}
				/>
				<ResizableCarouselContainer
					{...this.props}
					pause={pause}
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
						<InnerBlocks
							template={this.getSlidesTemplate(slides)}
							templateLock="all"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</div>
					{showControls && (
						<Fragment>
							<a
								className={classnames(
									"carousel-control-prev",
									isSelectedBlockInRoot ? "editor-selected-controls-lift" : null
								)}
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
								className={classnames(
									"carousel-control-next",
									isSelectedBlockInRoot ? "editor-selected-controls-lift" : null
								)}
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
				</ResizableCarouselContainer>
				{isSelectedBlockInRoot && 1 < slides && (
					<div className="c9-add-remove-rows">
						<Button
							label={__(
								`Remove Current Slide (#${this.state.active + 1})`,
								"c9-blocks"
							)}
							icon="dismiss"
							onClick={() => {
								const { active } = this.state;
								swapSlide(active, slides - 1);
								setAttributes({ slides: slides - 1 });
								if (this.carouselRef.current && 0 < active) {
									const $ = window.jQuery;
									$(this.carouselRef.current).carousel("prev");
								}
							}}
						>
							{__(
								`Remove Current Slide (#${this.state.active + 1})`,
								"c9-blocks"
							)}
						</Button>
					</div>
				)}
			</Fragment>
		);
	}
}

export default Edit;
