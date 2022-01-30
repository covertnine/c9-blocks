import VerticalAlignmentToolbar from "../../../components/vertical-alignment-toolbar";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {
	BaseControl,
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl
} = wp.components;

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
			isResponsive,
			verticalAlign,
			slideMaxHeight,
			slideCustomHeight,
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
							let {
								url,
								id,
								link,
								captionTitle,
								captionContent
							} = this.props.attributes;

							const $ = window.jQuery;

							// clone to new array
							url = [...url];
							id = [...id];
							link = [...link];

							if (value === url.length) {
								return;
							}

							if (value > url.length) {
								url.push(null);
								id.push(null);
								link.push(null);
								captionTitle.push(null);
								captionContent.push(null);

								setAttributes({ id, url, link, captionTitle, captionContent });
							} else {
								url.pop();
								id.pop();
								link.pop();
								captionTitle.pop();
								captionContent.pop();

								setAttributes({ id, url, link, captionTitle, captionContent });

								if (carouselRef.current && 0 < slideTarget) {
									$(carouselRef.current).carousel("prev");
								}
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
						options={[
							{ label: __("Slide", "c9-blocks"), value: "slide" },
							{ label: __("Fade", "c9-blocks"), value: "fade" },
							{ label: __("None", "c9-blocks"), value: "none" }
						]}
						onChange={transitionType => setAttributes({ transitionType })}
					/>

					<hr />

					<ToggleControl
						label={__("Enable custom manual heights", "c9-blocks")}
						checked={slideCustomHeight}
						onChange={slideCustomHeight => setAttributes({ slideCustomHeight })}
					/>
					{slideCustomHeight && (
						<RangeControl
							label={__("Height in pixels", "c9-blocks")}
							value={slideMaxHeight}
							onChange={slideMaxHeight => setAttributes({ slideMaxHeight })}
							min={0}
							max={5000}
						/>
					)}

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
					<ToggleControl
						label={__("Responsive image loading", "c9-blocks")}
						checked={isResponsive}
						onChange={isResponsive => setAttributes({ isResponsive })}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
