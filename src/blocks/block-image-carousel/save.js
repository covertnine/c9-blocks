/* eslint-disable jsx-a11y/alt-text */
// External Dependencies.
import classnames from "classnames";

const { applyFilters } = wp.hooks;

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	createSlides(slides) {
		const { url, captionTitle, captionContent } = this.props.attributes;

		let template = [];
		for (let i = 0; i < slides; i++) {
			template.push(
				<div className={classnames("carousel-item", 0 == i ? "active" : null)}>
					<Fragment>
						{url[i] && <img src={url[i]} className="d-block w-100" />}
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

	render() {
		const {
			showIndicators,
			autoSlide,
			slides,
			showControls,
			instanceId,
			wrapAround,
			slideTime
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
