/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

import memoize from "memize";
import times from "lodash/times";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

const { InnerBlocks, BlockControls } = wp.editor;

const { applyFilters } = wp.hooks;

const { withInstanceId } = wp.compose;

const ALLOWED_BLOCKS = ["c9-blocks/carousel-slide"];

// External Dependencies.
import classnames from "classnames";

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	createIndicators(slides, id) {
		let indicators = [];
		for (let i = 1; i <= slides; i++) {
			indicators.push(
				<li data-target={`#c9-carousel-indicator-${id}`} data-slide-to={i} />
			);
		}

		return indicators;
	}

	getSlidesTemplate = memoize(slides => {
		return times(slides, () => ["c9-blocks/carousel-slide"]);
	});

	render() {
		const {
			attributes,
			setAttributes,
			updateBlockAttributes,
			block,
			className = "",
			instanceId
		} = this.props;

		const { autoSlide, slides, showControls, showIndicators } = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });

			for (let child of block.innerBlocks) {
				if (instanceId != child.attributes.id) {
					updateBlockAttributes(child.clientId, { id: instanceId });
				}
			}
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
				>
					{showIndicators && (
						<ol className="carousel-indicators">
							{this.createIndicators(slides, instanceId)}
						</ol>
					)}
					<div className="carousel-inner">
						<InnerBlocks
							className="test"
							template={this.getSlidesTemplate(slides)}
							templateLock="all"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</div>
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
