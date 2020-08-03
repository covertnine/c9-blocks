/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { BaseControl, PanelBody, RangeControl, ToggleControl } = wp.components;

import VerticalAlignmentToolbar from "../../../components/vertical-alignment-toolbar";

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { attributes, setAttributes } = this.props;

		const {
			slides,
			autoSlide,
			showControls,
			showIndicators,
			wrapAround,
			slideTime,
			slideEqualHeight,
			verticalAlign
		} = attributes;

		return (
			<InspectorControls>
				<BaseControl />
				<PanelBody>
					<RangeControl
						label={__("Number of slides to produce", "c9-blocks")}
						value={slides}
						onChange={value => {
							const { carouselRef, slideTarget } = this.props;
							const $ = window.jQuery;

							if (carouselRef.current && value < slides && 0 < slideTarget) {
								$(carouselRef.current).carousel("prev");
							}

							setAttributes({ slides: value });
						}}
						min={1}
						max={20}
						help={__(
							"Note: Changing the slide count can cause loss of content.",
							"c9-blocks"
						)}
					/>

					<hr />

					<ToggleControl
						label={__("Wrap Around", "c9-blocks")}
						checked={wrapAround}
						onChange={wrapAround => setAttributes({ wrapAround })}
					/>
					<ToggleControl
						label={__("Enable Auto Slide", "c9-blocks")}
						checked={autoSlide}
						onChange={autoSlide => setAttributes({ autoSlide })}
					/>
					{autoSlide && (
						<RangeControl
							label={__("Time in between slides (ms)", "c9-blocks")}
							value={slideTime}
							onChange={slideTime => setAttributes({ slideTime })}
							min={0}
							max={1000000}
						/>
					)}
					<ToggleControl
						label={__("Show Controls", "c9-blocks")}
						checked={showControls}
						onChange={showControls => setAttributes({ showControls })}
					/>
					<ToggleControl
						label={__("Show indicators", "c9-blocks")}
						checked={showIndicators}
						onChange={showIndicators => setAttributes({ showIndicators })}
					/>
					<ToggleControl
						label={__("Set slides to have equal height", "c9-blocks")}
						checked={slideEqualHeight}
						onChange={slideEqualHeight => setAttributes({ slideEqualHeight })}
					/>
					{slideEqualHeight ? (
						<Fragment>
							<p className="components-base-control__label">
								Vertical alignment for slides
							</p>
							<VerticalAlignmentToolbar
								value={verticalAlign}
								onChange={value => {
									setAttributes({ verticalAlign: value });
								}}
							/>
						</Fragment>
					) : null}
				</PanelBody>
			</InspectorControls>
		);
	}
}
