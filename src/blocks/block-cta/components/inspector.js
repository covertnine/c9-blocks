/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const { ContrastChecker } = wp.blockEditor;

// Import block components
const { InspectorControls, PanelColorSettings, MediaUpload } = wp.editor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
	RadioControl
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
			ctaTextColor,
			ctaLayout,
			dimRatio,
			imgURL,
			imgID
		} = this.props.attributes;

		const {
			setAttributes,
			buttonTextColor,
			buttonBackgroundColor
		} = this.props;

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
				<PanelColorSettings
					title={__("Text Color Settings", "c9-blocks")}
					initialOpen={true}
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
					title={__("Button Color Settings", "c9-blocks")}
					initialOpen={true}
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
				<PanelBody title={__("Layout", "c9-blocks")} initialOpen={false}>
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
					title={__("Background Options", "c9-blocks")}
					initialOpen={false}
				>
					<p>{__("Select a background image:", "c9-blocks")}</p>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={imgID}
						render={({ open }) => (
							<div>
								<IconButton
									className="c9-cta-inspector-media"
									label={__("Edit image", "c9-blocks")}
									icon="format-image"
									onClick={open}
								>
									{__("Select Image", "c9-blocks")}
								</IconButton>

								{imgURL && !!imgURL.length && (
									<IconButton
										className="c9-cta-inspector-media"
										label={__("Remove Image", "c9-blocks")}
										icon="dismiss"
										onClick={onRemoveImage}
									>
										{__("Remove", "c9-blocks")}
									</IconButton>
								)}
							</div>
						)}
					/>

					{imgURL && !!imgURL.length && (
						<RangeControl
							label={__("Image Opacity", "c9-blocks")}
							value={dimRatio}
							onChange={value => setAttributes({ dimRatio: value })}
							min={0}
							max={100}
							step={10}
						/>
					)}

					<PanelColorSettings
						title={__("Background Color", "c9-blocks")}
						initialOpen={false}
						colorSettings={[
							{
								value: ctaBackgroundColor,
								onChange: value => setAttributes({ ctaBackgroundColor: value }),
								label: __("Overlay Color", "c9-blocks")
							}
						]}
					/>
				</PanelBody>

				<PanelBody
					title={__("Button Options", "c9-blocks")}
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
			</InspectorControls>
		);
	}
}
