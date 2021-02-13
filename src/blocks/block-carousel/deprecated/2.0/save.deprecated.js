import ResizableCarouselContainer from "./resizable-carousel-container.deprecated";

/**
 * External Dependencies.
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

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
					data-target={`#c9-carousel-indicator-${id}`}
					data-slide-to={i}
					className={0 === i ? "active" : null}
				/>
			);
		}

		return indicators;
	}

	render() {
		const {
			showIndicators,
			slides,
			showControls,
			instanceId,
			verticalAlign,
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
					<InnerBlocks.Content />
				</div>
				{showControls && (
					<Fragment>
						<a
							className="carousel-control-prev"
							href={`#c9-carousel-indicator-${instanceId}`}
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href={`#c9-carousel-indicator-${instanceId}`}
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
