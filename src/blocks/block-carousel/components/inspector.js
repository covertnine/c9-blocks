/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { BaseControl, PanelBody, RangeControl, ToggleControl, SelectControl } = wp.components;

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
			verticalAlign,
			slideMaxHeight,
			transitionType
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

					<SelectControl
						label={__("Transition type", "c9-blocks")}
						value={transitionType}
						options={ [
							{ label: __("Slide", "c9-blocks"), value: "slide" },
							{ label: __("Fade", "c9-blocks"), value: "fade" },
							{ label: __("None", "c9-blocks"), value: "none" },
						] }
						onChange={transitionType => setAttributes({ transitionType })}
					/>

					<hr />

					<RangeControl
						label={__("Height in pixels", "c9-blocks")}
						value={slideMaxHeight}
						onChange={slideMaxHeight => setAttributes({ slideMaxHeight })}
						min={0}
						max={5000}
					/>

					<hr />

					<p className="components-base-control__label">
						Vertical alignment for slides
					</p>
					<VerticalAlignmentToolbar
						value={verticalAlign}
						onChange={value => {
							setAttributes({ verticalAlign: value });
						}}
					/>

					<ToggleControl
						label={__("Wrap around", "c9-blocks")}
						checked={wrapAround}
						onChange={wrapAround => setAttributes({ wrapAround })}
					/>
					<ToggleControl
						label={__("Enable auto slide", "c9-blocks")}
						checked={autoSlide}
						onChange={autoSlide => setAttributes({ autoSlide })}
					/>
					{autoSlide && (
						<RangeControl
							label={__("Time in between slides (ms)", "c9-blocks")}
							value={slideTime}
							onChange={slideTime => setAttributes({ slideTime })}
							min={0}
							step={100}
							max={100000}
						/>
					)}
					<ToggleControl
						label={__("Show controls", "c9-blocks")}
						checked={showControls}
						onChange={showControls => setAttributes({ showControls })}
					/>
					<ToggleControl
						label={__("Show indicators", "c9-blocks")}
						checked={showIndicators}
						onChange={showIndicators => setAttributes({ showIndicators })}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
