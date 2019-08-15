// External Dependencies.
import classnames from "classnames";

const { applyFilters } = wp.hooks;

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	createIndicators(slides, id) {
		let indicators = [];
		for (let i = 1; i <= slides; i++) {
			indicators.push(
				<li data-target={`#c9-carousel-indicator-${id}`} data-slide-to={i} className={i == 1 ? "active" : null} />
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
			wrapAround
		} = this.props.attributes;

		const { className = "" } = this.props;

		return (
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
				<div className="carousel-inner">
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
			</div>
		);
	}
}
