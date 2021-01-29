/* eslint-disable jsx-a11y/alt-text */

import ResizableCarouselContainer from "./components/resizable-carousel-container";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;

/**
 * External Dependencies.
 */
import classnames from "classnames";
import isEmpty from "lodash/isEmpty";

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
			link,
			linkTarget,
			rel,
			captionTitle,
			captionContent,
			isResponsive
		} = this.props.attributes;

		const newRel = isEmpty(rel) ? undefined : rel;

		let template = [];
		for (let i = 0; i < slides; i++) {
			const Wrapper = link[i]
				? ({ children }) => (
						<a href={link[i]} target={linkTarget} rel={newRel}>
							{children}
						</a>
				  )
				: Fragment;

			template.push(
				<div className={classnames("carousel-item", 0 == i ? "active" : null)}>
					<Wrapper>
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
					</Wrapper>
				</div>
			);
		}

		return template;
	}

	render() {
		const {
			showIndicators,
			slides,
			showControls,
			instanceId,
			verticalAlign
		} = this.props.attributes;

		return (
			<ResizableCarouselContainer {...this.props}>
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
			</ResizableCarouselContainer>
		);
	}
}
