const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, InspectorControls, PanelColorSettings } = wp.editor;
const { BaseControl, PanelBody, RangeControl, ToggleControl } = wp.components;
const { ContrastChecker } = wp.blockEditor;

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
			wrapAround
		} = attributes;

		return (
			<InspectorControls>
				<BaseControl />
				<PanelBody title={__("Layout", "c9-blocks")} initialOpen={true}>
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

								if (carouselRef.current && slideTarget > 0) {
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
				{/* <PanelColorSettings
					title={__("Block Color Settings", "c9-blocks")}
					initialOpen={true}
					colorSettings={[
						{
							value: blockBackgroundColor,
							onChange: value =>
								setAttributes({ blockBackgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							backgroundColor: tabContentBackgroundColor,
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__("Tab Color Settings", "c9-blocks")}
					initialOpen={false}
					colorSettings={[
						{
							value: tabBackgroundColor,
							onChange: value => setAttributes({ tabBackgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						},
						{
							value: tabTextColor,
							onChange: value => setAttributes({ tabTextColor: value }),
							label: __("Text Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							textColor: tabTextColor,
							backgroundColor: tabBackgroundColor,
							fallbackTextColor: "black",
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__("Tab Content Color Settings", "c9-blocks")}
					initialOpen={false}
					colorSettings={[
						{
							value: tabContentBackgroundColor,
							onChange: value =>
								setAttributes({ tabContentBackgroundColor: value }),
							label: __("Background Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							backgroundColor: tabContentBackgroundColor,
							fallbackBackgroundColor: "white"
						}}
					/>
				</PanelColorSettings> */}
			</InspectorControls>
		);
	}
}
