/**
 * Internal dependencies
 */
import SettingsSpacer from "../../../components/settings-spacer";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { ContrastChecker, FontSizePicker } = wp.blockEditor;
const { InspectorControls, MediaUpload, ColorPalette, PanelColorSettings } = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	Button,
	RadioControl,
	FocalPointPicker
} = wp.components;

/**
 * External Dependencies.
 */
import React from "react";

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);

		this.linkedPaddingRef = React.createRef();
		this.togglePaddingLinkage = this.togglePaddingLinkage.bind(this);
		this.linkedMarginRef = React.createRef();
		this.toggleMarginLinkage = this.toggleMarginLinkage.bind(this);

		const {
			attributes: { ctaPadding, ctaMargin },
			setAttributes
		} = this.props;

		this.setAttributes = setAttributes;

		this.state = {
			ctaPadding: ctaPadding,
			ctaMargin: ctaMargin,
			setAttributes: setAttributes
		};
	}

	togglePaddingLinkage = () => {
		let {
			attributes: { ctaPadding }
		} = this.props;

		ctaPadding = Object.assign({}, ctaPadding);
		ctaPadding.linked = !ctaPadding.linked;
		ctaPadding.icon = ctaPadding.linked ? "admin-links" : "editor-unlink";
		this.setState({ ctaPadding });
		this.setAttributes({ ctaPadding });
	};

	setPaddingUnit = value => {
		const {
			attributes: { ctaPadding }
		} = this.props;

		let spacingObject = Object.assign({}, ctaPadding);
		spacingObject.unit = value;
		this.setState({ ctaPadding: spacingObject });
		this.setAttributes({ ctaPadding: spacingObject });
	};

	updatePadding = (position, value) => {
		if (this.state.ctaPadding.linked) {
			let spacingObject = {
				linked: this.state.ctaPadding.linked,
				unit: this.state.ctaPadding.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.state.ctaPadding.icon
			};
			this.setState({ ctaPadding: spacingObject });
			this.setAttributes({ ctaPadding: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.state.ctaPadding);
			spacingObject[position] = value;
			this.setState({ ctaPadding: spacingObject });
			this.setAttributes({ ctaPadding: spacingObject });
		}
	};

	toggleMarginLinkage = () => {
		let {
			attributes: { ctaMargin }
		} = this.props;

		ctaMargin = Object.assign({}, ctaMargin);
		ctaMargin.linked = !ctaMargin.linked;
		ctaMargin.icon = ctaMargin.linked ? "admin-links" : "editor-unlink";
		this.setState({ ctaMargin });
		this.setAttributes({ ctaMargin });
	};

	setMarginUnit = value => {
		const {
			attributes: { ctaMargin }
		} = this.props;

		let spacingObject = Object.assign({}, ctaMargin);
		spacingObject.unit = value;
		this.setState({ ctaMargin: spacingObject });
		this.setAttributes({ ctaMargin: spacingObject });
	};

	updateMargin = (position, value) => {
		if (this.state.ctaMargin.linked) {
			let spacingObject = {
				linked: this.state.ctaMargin.linked,
				unit: this.state.ctaMargin.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.state.ctaMargin.icon
			};
			this.setState({ ctaMargin: spacingObject });
			this.setAttributes({ ctaMargin: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.state.ctaMargin);
			spacingObject[position] = value;
			this.setState({ ctaMargin: spacingObject });
			this.setAttributes({ ctaMargin: spacingObject });
		}
	};

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
			ctaPadding,
			ctaMargin,
			dropCap,
			imgURL,
			imgID,
			imgAttach,
			imgSize,
			focalPoint,
			blendMode,
			type
		} = this.props.attributes;

		const {
			fontSize,
			setAttributes,
			setFontSize,
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
			{ value: "square", label: __("Square") },
			{ value: "round", label: __("Round") },
			{ value: "outline", label: __("Outline") }
		];

		const paddingOptions = [
			{ value: "-1", label: __("None", "c9-blocks") },
			{ value: "0", label: __("Padding 0", "c9-blocks") },
			{ value: "1", label: __("Padding 1", "c9-blocks") },
			{ value: "2", label: __("Padding 2", "c9-blocks") },
			{ value: "3", label: __("Padding 3", "c9-blocks") },
			{ value: "4", label: __("Padding 4", "c9-blocks") },
			{ value: "5", label: __("Padding 5", "c9-blocks") },
			{ value: "auto", label: __("Auto", "c9-blocks") }
		];

		const marginOptions = [
			{ value: "-1", label: __("None", "c9-blocks") },
			{ value: "0", label: __("Margin 0", "c9-blocks") },
			{ value: "1", label: __("Margin 1", "c9-blocks") },
			{ value: "2", label: __("Margin 2", "c9-blocks") },
			{ value: "3", label: __("Margin 3", "c9-blocks") },
			{ value: "4", label: __("Margin 4", "c9-blocks") },
			{ value: "5", label: __("Margin 5", "c9-blocks") },
			{ value: "auto", label: __("Auto", "c9-blocks") }
		];

		const fontTypes = [
			{ value: "c9-p", label: __("Paragraph", "c9-blocks") },
			{ value: "c9-h", label: __("Heading", "c9-blocks") },
			{
				value: "c9-sh",
				label: __("Subheading", "c9-blocks")
			}
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
				<PanelBody title={ __( 'Text Settings' ) } className="blocks-font-size">
					<FontSizePicker
						value={ fontSize.size }
						onChange={ setFontSize }
					/>
					<ToggleControl
						label={ __( 'Drop Cap' ) }
						checked={ !! dropCap }
						onChange={ () => setAttributes( { dropCap: ! dropCap } ) }
						help={ dropCap ?
							__( 'Showing large initial letter.' ) :
							__( 'Toggle to show a large initial letter.' )
						}
					/>
				</PanelBody>
				<PanelBody>
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

				<PanelBody>
					<p className="components-base-control__label">
						{__("Button Configurations", "c9-blocks")}
					</p>
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

				<PanelBody>
					<p className="components-base-control__label">
						{__("CTA Text Options")}
					</p>
					<SelectControl
						label={__("Font Type", "c9-blocks")}
						help={__(
							"Choose between paragraph, heading, or subheading.",
							"c9-blocks"
						)}
						options={fontTypes}
						value={type}
						onChange={value => setAttributes({ type: value })}
					/>
				</PanelBody>

				<PanelColorSettings
					initialOpen={false}
					title={__("Message Text Color", "c9-blocks")}
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
					title={__("Button Colors", "c9-blocks")}
					colorSettings={[
						{
							value: buttonTextColor,
							onChange: value => setAttributes({ buttonTextColor: value }),
							label: __("Button Text Color", "c9-blocks")
						},
						{
							value: buttonBackgroundColor,
							onChange: value =>
								setAttributes({ buttonBackgroundColor: value }),
							label: __("Button Color", "c9-blocks")
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

				<SettingsSpacer />

				<PanelBody
					title={__("Spacing Options", "c9-blocks")}
					initialOpen={false}
				>
					<h5 className="padding-label">{__("Padding", "c9-blocks")}</h5>

					<p className="components-base-control__label">
						{__(
							"Configure between different levels of padding for each side.",
							"c9-blocks"
						)}
					</p>

					<div className="padding-top-wrapper">
						<SelectControl
							options={paddingOptions}
							value={ctaPadding.top}
							onChange={value => this.updatePadding("top", value)}
						/>
					</div>
					<div className="padding-sides-wrapper">
						<SelectControl
							options={paddingOptions}
							value={ctaPadding.left}
							onChange={value => this.updatePadding("left", value)}
						/>
						<Button
							label={__("Linked Padding Toggle", "c9-blocks")}
							icon={this.state.ctaPadding.icon}
							onClick={this.togglePaddingLinkage}
							ref={this.state.linkedPaddingRef}
						/>
						<SelectControl
							options={paddingOptions}
							value={ctaPadding.right}
							onChange={value => this.updatePadding("right", value)}
						/>
					</div>
					<div className="padding-bottom-wrapper">
						<SelectControl
							options={paddingOptions}
							value={ctaPadding.bottom}
							onChange={value => this.updatePadding("bottom", value)}
						/>
					</div>

					<hr />

					<h5 className="margin-label">Margins</h5>

					<p className="components-base-control__label">
						{__(
							"Configure between different levels of margin for top and bottom sides.",
							"c9-blocks"
						)}
					</p>

					<div className="margin-top-wrapper">
						<SelectControl
							options={marginOptions}
							value={ctaMargin.top}
							onChange={value => this.updateMargin("top", value)}
						/>
					</div>
					<div className="margin-sides-wrapper">
						<Button
							label={__("Linked Padding Toggle", "c9-blocks")}
							icon={this.state.ctaMargin.icon}
							onClick={this.toggleMarginLinkage}
							ref={this.state.linkedMarginRef}
						/>
					</div>
					<div className="margin-bottom-wrapper">
						<SelectControl
							options={marginOptions}
							value={ctaMargin.bottom}
							onChange={value => this.updateMargin("bottom", value)}
						/>
					</div>
				</PanelBody>

				<PanelBody
					title={__("Background Settings", "c9-blocks")}
					initialOpen={false}
				>
					<MediaUpload
						id="bg-image-select"
						label={__("Background Image", "c9-blocks")}
						onSelect={onSelectImage}
						type="image"
						value={imgID}
						render={({ open }) => (
							<div>
								<Button
									label={__("Edit image", "c9-blocks")}
									icon="format-image"
									onClick={open}
								>
									{__("Background Image", "c9-blocks")}
								</Button>

								{imgURL && !!imgURL.length && (
									<div>
										<Button
											label={__("Remove Image", "c9-blocks")}
											icon="dismiss"
											onClick={onRemoveImage}
										>
											{__("Remove", "c9-blocks")}
										</Button>

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
