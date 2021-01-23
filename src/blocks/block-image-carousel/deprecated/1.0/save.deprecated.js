/* eslint-disable jsx-a11y/alt-text */

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
const { applyFilters } = wp.hooks;

/**
 * External Dependencies.
 */
import classnames from "classnames";

export default class Save extends Component {
	constructor() {
		super(...arguments);
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
		let indicators = [];
		for (let i = 0; i < slides; i++) {
			indicators.push(
				<li
					data-target={`#c9-image-carousel-indicator-${id}`}
					data-slide-to={i}
					className={0 == i ? "active" : null}
				/>
			);
		}

		return indicators;
	}

	/**
	 * Generates the slides using the given images.
	 */
	createSlides(slides) {
		const {
			url,
			id,
			captionTitle,
			captionContent,
			isResponsive
		} = this.props.attributes;

		let template = [];
		for (let i = 0; i < slides; i++) {
			template.push(
				<div className={classnames("carousel-item", 0 == i ? "active" : null)}>
					<Fragment>
						{url[i] && (
							<img
								src={url[i]}
								className={classnames(
									"d-block w-100",
									isResponsive && id[i] ? `wp-image-${id[i]}` : null
								)}
							/>
						)}
						{(captionTitle[i] || captionContent[i]) && (
							<div className={classnames("carousel-caption d-none d-md-block")}>
								{captionTitle[i] && (
									<RichText.Content tagName="h5" value={captionTitle[i]} />
								)}
								{captionContent[i] && (
									<RichText.Content tagName="p" value={captionContent[i]} />
								)}
							</div>
						)}
					</Fragment>
				</div>
			);
		}

		return template;
	}

	render() {
		const {
			showIndicators,
			autoSlide,
			slides,
			showControls,
			instanceId,
			wrapAround,
			slideTime,
			slideEqualHeight,
			slideMaxHeight,
			verticalAlign
		} = this.props.attributes;

		const { className = "" } = this.props;

		return (
			<div
				id={`c9-image-carousel-indicator-${instanceId}`}
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					"carousel slide"
				)}
				data-ride="carousel"
				data-interval={autoSlide ? slideTime : false}
				data-wrap={wrapAround}
				style={
					0 <= slideMaxHeight && slideEqualHeight
						? { height: slideMaxHeight }
						: {}
				}
			>
				{showIndicators && (
					<ol className="carousel-indicators">
						{this.createIndicators(slides, instanceId)}
					</ol>
				)}
				<div
					className={classnames(
						"carousel-inner",
						verticalAlign ? "c9-is-vertically-aligned-" + verticalAlign : null
					)}
				>
					{this.createSlides(slides)}
				</div>
				{showControls && (
					<Fragment>
						<a
							className="carousel-control-prev"
							href={`#c9-image-carousel-indicator-${instanceId}`}
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href={`#c9-image-carousel-indicator-${instanceId}`}
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</Fragment>
				)}
			</div>
		);
	}
}
