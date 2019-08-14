/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const { ContrastChecker } = wp.blockEditor;

// Import block components
const {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	ColorPalette
} = wp.editor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
	RadioControl,
	FocalPointPicker
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			buttonSize,
			buttonShape,
			buttonTarget,
			ctaBackgroundColor,
			ctaBackgroundOpacity,
			ctaTextColor,
			ctaLayout,
			imgURL,
			imgID,
			imgAttach,
			imgSize,
			focalPoint,
			blendMode
		} = this.props.attributes;

		const {
			setAttributes,
			buttonTextColor,
			buttonBackgroundColor
		} = this.props;

		const sizeTypes = [
			{ value: "cover", label: __("Cover", "c9-blocks") },
			{ value: "contain", label: __("Contain", "c9-blocks") }
		];

		// Button size values
		const buttonSizeOptions = [
			{ value: "c9-button-size-small", label: __("Small") },
			{ value: "c9-button-size-medium", label: __("Medium") },
			{ value: "c9-button-size-large", label: __("Large") },
			{ value: "c9-button-size-extralarge", label: __("Extra Large") }
		];

		// Button shape
		const buttonShapeOptions = [
			{ value: "round", label: __("Round") },
			{ value: "square", label: __("Square") },
			{ value: "outline", label: __("Outline") }
		];

		// Change the image
		const onSelectImage = img => {
			setAttributes({
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt
			});
		};

		// Clear the image
		const onRemoveImage = () => {
			setAttributes({
				imgID: null,
				imgURL: null,
				imgAlt: null
			});
		};

		return (
			<InspectorControls key="inspector">
				<PanelBody title={__("Layout", "c9-blocks")} initialOpen={true}>
					<RadioControl
						label={__("Content Width", "c9-blocks")}
						selected={ctaLayout}
						options={[
							{ label: "2/3", value: "two-thirds" },
							{ label: "3/4", value: "three-quarters" },
							{ label: "Full", value: "full" }
						]}
						onChange={ctaLayout => setAttributes({ ctaLayout })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Button Configurations", "c9-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Open link in new window", "c9-blocks")}
						checked={buttonTarget}
						onChange={() => setAttributes({ buttonTarget: !buttonTarget })}
					/>

					<SelectControl
						label={__("Button Size", "c9-blocks")}
						value={buttonSize}
						options={buttonSizeOptions.map(({ value, label }) => ({
							value: value,
							label: label
						}))}
						onChange={value => {
							setAttributes({ buttonSize: value });
						}}
					/>

					<SelectControl
						label={__("Button Shape", "c9-blocks")}
						value={buttonShape}
						options={buttonShapeOptions.map(({ value, label }) => ({
							value: value,
							label: label
						}))}
						onChange={value => {
							setAttributes({ buttonShape: value });
						}}
					/>
				</PanelBody>

				<PanelColorSettings
					initialOpen={false}
					title={__("Text Color", "c9-blocks")}
					colorSettings={[
						{
							value: ctaTextColor,
							onChange: value => setAttributes({ ctaTextColor: value }),
							label: __("Text Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							textColor: ctaTextColor,
							fallbackTextColor: "white"
						}}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					initialOpen={false}
					title={__("Button Color", "c9-blocks")}
					colorSettings={[
						{
							value: buttonBackgroundColor,
							onChange: value =>
								setAttributes({ buttonBackgroundColor: value }),
							label: __("Button Color", "c9-blocks")
						},
						{
							value: buttonTextColor,
							onChange: value => setAttributes({ buttonTextColor: value }),
							label: __("Button Text Color", "c9-blocks")
						}
					]}
				>
					<ContrastChecker
						{...{
							backgroundColor: buttonBackgroundColor,
							fallbackBackgroundColor: "black",
							textColor: buttonTextColor,
							fallbackTextColor: "white"
						}}
					/>
				</PanelColorSettings>

				<PanelBody title={__("Background", "c9-blocks")} initialOpen={false}>
					<MediaUpload
						id="bg-image-select"
						label={__("Background Image", "c9-blocks")}
						onSelect={onSelectImage}
						type="image"
						value={imgID}
						render={({ open }) => (
							<div>
								<IconButton
									label={__("Edit image", "c9-blocks")}
									icon="format-image"
									onClick={open}
								>
									{__("Background Image", "c9-blocks")}
								</IconButton>

								{imgURL && !!imgURL.length && (
									<div>
										<IconButton
											label={__("Remove Image", "c9-blocks")}
											icon="dismiss"
											onClick={onRemoveImage}
										>
											{__("Remove", "c9-blocks")}
										</IconButton>

										<h5>Position</h5>
										<FocalPointPicker
											label={__("Focal Point Picker", "c9-blocks")}
											url={imgURL}
											value={focalPoint}
											onChange={value => setAttributes({ focalPoint: value })}
										/>
									</div>
								)}

								<span>{__("Background Color", "c9-blocks")}</span>
								<ColorPalette
									label={__("Background Color", "c9-blocks")}
									value={ctaBackgroundColor}
									onChange={value =>
										setAttributes({ ctaBackgroundColor: value })
									}
								/>

								{ctaBackgroundColor && !!ctaBackgroundColor.length && (
									<RangeControl
										beforeIcon="arrow-left-alt2"
										afterIcon="arrow-right-alt2"
										label={__("Opacity", "c9-blocks")}
										value={ctaBackgroundOpacity}
										onChange={ctaBackgroundOpacity =>
											setAttributes({ ctaBackgroundOpacity })
										}
										min={1}
										max={10}
									/>
								)}

								{ctaBackgroundColor && imgURL && !!imgURL.length && (
									<SelectControl
										label={__("Blend Mode", "c9-blocks")}
										value={blendMode}
										options={[
											{ value: "overlay", label: __("Overlay", "c9-blocks") },
											{ value: "normal", label: __("Normal", "c9-blocks") },
											{
												value: "multiply",
												label: __("Multiply", "c9-blocks")
											},
											{ value: "screen", label: __("Screen", "c9-blocks") },
											{ value: "darken", label: __("Darken", "c9-blocks") },
											{ value: "lighten", label: __("Lighten", "c9-blocks") },
											{
												value: "color-dodge",
												label: __("Color Dodge", "c9-blocks")
											},
											{
												value: "color-burn",
												label: __("Color Burn", "c9-blocks")
											},
											{
												value: "hard-light",
												label: __("Hard Light", "c9-blocks")
											},
											{
												value: "soft-light",
												label: __("Soft Light", "c9-blocks")
											},
											{
												value: "difference",
												label: __("Difference", "c9-blocks")
											},
											{
												value: "exclusion",
												label: __("Exclusion", "c9-blocks")
											},
											{ value: "hue", label: __("Hue", "c9-blocks") },
											{
												value: "saturation",
												label: __("Saturation", "c9-blocks")
											},
											{ value: "color", label: __("Color", "c9-blocks") },
											{
												value: "luminosity",
												label: __("Luminosity", "c9-blocks")
											}
										]}
										onChange={blendMode => setAttributes({ blendMode })}
									/>
								)}

								<hr />

								{imgURL && !!imgURL.length && (
									<div>
										<h5>{__("Attachment", "c9-blocks")}</h5>
										<ToggleControl
											label={__("Scroll | Fixed", "c9-blocks")}
											checked={imgAttach}
											onChange={imgAttach => setAttributes({ imgAttach })}
										/>

										<hr />

										<div>
											<h5>{__("Size", "c9-blocks")}</h5>
											<SelectControl
												help={__(
													"Choose between cover or contain.",
													"c9-blocks"
												)}
												options={sizeTypes}
												value={imgSize}
												onChange={value => setAttributes({ imgSize: value })}
											/>
										</div>
									</div>
								)}
							</div>
						)}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
