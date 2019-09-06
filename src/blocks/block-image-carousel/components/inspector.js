/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { BaseControl, PanelBody, RangeControl, ToggleControl } = wp.components;

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
			slideTime
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
								captionTitle,
								captionContent
							} = this.props.attributes;

							const $ = window.jQuery;

							if (value > url.length) {
								url.push(null);
								id.push(null);
								captionTitle.push(null);
								captionContent.push(null);

								setAttributes({ id, url, captionTitle, captionContent });
							} else {
								url.pop();
								id.pop();
								captionTitle.pop();
								captionContent.pop();

								setAttributes({ id, url, captionTitle, captionContent });

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
				</PanelBody>
			</InspectorControls>
		);
	}
}
