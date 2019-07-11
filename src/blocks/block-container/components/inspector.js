/* eslint-disable no-cond-assign */
/**
 * Internal block libraries
 */
// import CustomRadio from './custom-radio';

import React from "react";
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, MediaUpload, ColorPalette } = wp.editor;
const { select, dispatch } = wp.data;
const {
	RadioControl,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
	SelectControl,
	IconButton,
	Button,
	FocalPointPicker
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
		const {
			attributes: {
				containerPadding,
				containerVideoID,
				preview,
				bgCustomX,
				bgCustomY
			},
			setAttributes
		} = this.props;
		this.containerPadding = containerPadding;
		this.setAttributes = setAttributes;
		this.linkedRef = React.createRef();
		this.toggleLinkage = this.toggleLinkage.bind(this);
		this.ID = containerVideoID || "";
		this.preview = preview;
		this.customX = bgCustomX.size != "auto";
		this.customY = bgCustomY.size != "auto";
		this.bgCustomX = bgCustomX;
		this.bgCustomY = bgCustomY;
	}

	componentDidUpdate() {
		const {
			attributes: { preview }
		} = this.props;

		this.preview = preview;
	}

	toggleLinkage = spacingObject => {
		this.containerPadding.linked = !this.containerPadding.linked;
		this.containerPadding.icon = spacingObject.linked
			? "admin-links"
			: "editor-unlink";
		this.setState({ containerPadding: this.containerPadding });
		this.setAttributes({ containerPadding: this.containerPadding });
	};

	setUnit = value => {
		let spacingObject = Object.assign({}, this.containerPadding);
		spacingObject.unit = value;
		this.containerPadding = spacingObject;
		this.setState({ containerPadding: spacingObject });
		this.setAttributes({ containerPadding: spacingObject });
	};

	updateBgX = (position, value) => {
		let sizeObject = Object.assign({}, this.bgCustomX);

		sizeObject[position] = value;

		sizeObject[position] = value;
		this.bgCustomX = sizeObject;
		this.setState({ bgCustomX: sizeObject });
		this.setAttributes({ bgCustomX: sizeObject });
	};

	updateBgY = (position, value) => {
		let sizeObject = Object.assign({}, this.bgCustomY);

		sizeObject[position] = value;
		this.bgCustomY = sizeObject;
		this.setState({ bgCustomY: sizeObject });
		this.setAttributes({ bgCustomY: sizeObject });
	};

	updatePadding = (position, value) => {
		if (this.containerPadding.linked) {
			let spacingObject = {
				linked: this.containerPadding.linked,
				unit: this.containerPadding.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.containerPadding.icon
			};
			this.containerPadding = spacingObject;
			this.setState({ containerPadding: spacingObject });
			this.setAttributes({ containerPadding: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.containerPadding);
			spacingObject[position] = value;
			this.containerPadding = spacingObject;
			this.setState({ containerPadding: spacingObject });
			this.setAttributes({ containerPadding: spacingObject });
		}
	};

	updateID = value => {
		this.ID = value;
		this.setState({ ID: value });
	};

	submitID = () => {
		// parse submitted item, check if valid id
		let checkURL = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;
		let checkAlphaNumeric = /^[a-zA-Z0-9-_]+$/;
		let result;

		if ((result = this.ID.match(checkURL))) {
			this.setAttributes({ containerVideoID: result[1], cannotEmbed: false });
			this.ID = result[1];
			this.setState({ ID: result[1] });
		} else if ((result = this.ID.match(checkAlphaNumeric))) {
			this.setAttributes({ containerVideoID: result[0], cannotEmbed: false });
			this.ID = result[0];
			this.setState({ ID: result[0] });
		} else {
			if (this.preview && this.preview.i) {
				this.preview.destroy();
			}
			this.setAttributes({ cannotEmbed: true });
		}

		// check if player exists
		if (this.preview && this.preview.i) {
			this.preview.loadVideoById(this.ID);
		}
	};

	resetID = () => {
		this.ID = "";
		this.preview.destroy();
		this.setAttributes({
			containerVideoID: this.ID,
			cannotEmbed: false,
			preview: this.preview
		});
	};

	render() {
		const {
			clientId,
			attributes: {
				verticalAlign,
				containerImgURL,
				containerImgID,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				bgImgRepeat,
				overlayHue,
				overlayOpacity,
				blendMode,
				containerPadding,
				columns,
				minScreenHeight,
				focalPoint,
				videoType,
				containerVideoURL,
				cannotEmbed
			},
			setAttributes
		} = this.props;

		const cssUnits = [
			{ value: "px", label: __("Pixel (px)", "covertnine-blocks") },
			{ value: "%", label: __("Percent (%)", "covertnine-blocks") },
			{ value: "em", label: __("Em (em)", "covertnine-blocks") }
		];

		const sizeTypes = [
			{ value: "cover", label: __("Cover", "covertnine-blocks") },
			{ value: "contain", label: __("Contain", "covertnine-blocks") },
			{ value: "", label: __("Custom", "covertnine-blocks") }
		];

		const repeatTypes = [
			{ value: "no-repeat", label: __("no-repeat", "covertnine-blocks") },
			{ value: "repeat", label: __("repeat", "covertnine-blocks") },
			{ value: "round", label: __("round", "covertnine-blocks") },
			{ value: "space", label: __("space", "covertnine-blocks") }
		];

		const onSelectImage = img => {
			setAttributes({
				containerImgURL: img.url
			});
		};

		const onRemoveImage = () => {
			setAttributes({
				containerImgURL: null,
				bgImgSize: "cover"
			});
		};

		const onSelectVideo = video => {
			let replace = containerVideoURL && !!containerVideoURL.length;

			setAttributes({
				containerVideoURL: video.url,
				cannotEmbed: false
			});

			if (replace) {
				let vidElement = document.getElementById("containerVideo");
				vidElement.load();
				vidElement.play();
			}
		};

		const onRemoveVideo = () => {
			setAttributes({
				containerVideoURL: null
			});
		};

		return (
			<InspectorControls>
				<PanelBody title={__("Layout")} initialOpen={false}>
					<RadioControl
						label={__("Container Width", "covertnine-blocks")}
						selected={containerWidth}
						options={[
							{ label: "Full Width", value: "container-fluid" },
							{ label: "Normal Width", value: "container" },
							{ label: "Narrow Width", value: "container-narrow" }
						]}
						onChange={containerWidth => setAttributes({ containerWidth })}
					/>
					<RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={__("Minimum Height (vh)", "covertnine-blocks")}
						value={minScreenHeight}
						onChange={minScreenHeight => setAttributes({ minScreenHeight })}
						min={0}
						max={100}
					/>
					<RadioControl
						label={__("Vertically Align Content", "covertnine-blocks")}
						selected={verticalAlign}
						options={[
							{ label: "Top", value: "flex-start" },
							{ label: "Middle", value: "center" },
							{ label: "Bottom", value: "flex-end" },
							{ label: "Stretch", value: "stretch" },
							{ label: "Baseline", value: "baseline" }
						]}
						onChange={verticalAlign => setAttributes({ verticalAlign })}
					/>
					<RangeControl
						label={__("Columns")}
						value={columns}
						onChange={nextColumns => {
							let children = select("core/editor").getBlocksByClientId(
								clientId
							)[0].innerBlocks;
							let nextWidth = Math.round(12 / nextColumns);
							children.map(c =>
								dispatch("core/editor").updateBlockAttributes(c.clientId, {
									width: nextWidth
								})
							);
							setAttributes({
								columns: nextColumns
							});
						}}
						min={1}
						max={6}
					/>
				</PanelBody>
				<PanelBody title={__("Spacing")} initialOpen={false}>
					<h5 className="padding-label">Padding</h5>

					<SelectControl
						label={__("Padding Unit", "covertnine-blocks")}
						help={__("Choose between pixel, percent, or em units.")}
						options={cssUnits}
						value={containerPadding.unit}
						onChange={value => this.setUnit(value)}
					/>
					<hr />

					<div className="padding-top-wrapper">
						<RangeControl
							label={__("top")}
							value={containerPadding.top}
							onChange={padding => {
								this.updatePadding("top", padding);
							}}
							className="padding"
							min={0}
							max={300}
						/>
					</div>
					<div className="padding-sides-wrapper">
						<RangeControl
							label={__("left")}
							value={containerPadding.left}
							onChange={padding => {
								this.updatePadding("left", padding);
							}}
							className="padding"
							min={0}
							max={300}
						/>
						<IconButton
							label={__("Linked Padding Toggle", "covertnine-blocks")}
							icon={this.containerPadding.icon}
							onClick={() => this.toggleLinkage(this.containerPadding)}
							ref={this.linkedRef}
						/>
						<div className="padding-bottom-wrapper">
							<RangeControl
								label={__("right")}
								value={containerPadding.right}
								onChange={padding => {
									this.updatePadding("right", padding);
								}}
								className="padding"
								min={0}
								max={300}
							/>
						</div>
					</div>
					<RangeControl
						label={__("bottom")}
						value={containerPadding.bottom}
						onChange={padding => {
							this.updatePadding("bottom", padding);
						}}
						className="padding"
						min={0}
						max={300}
					/>
				</PanelBody>
				<PanelBody title={__("Background")} initialOpen={false}>
					<MediaUpload
						id="bg-image-select"
						label={__("Background Image", "covertnine-blocks")}
						onSelect={onSelectImage}
						type="image"
						value={containerImgID}
						render={({ open }) => (
							<div>
								<IconButton
									label={__("Edit image")}
									icon="format-image"
									onClick={open}
								>
									{__("Background Image")}
								</IconButton>

								{containerImgURL && !!containerImgURL.length && (
									<div>
										<IconButton
											label={__("Remove Image")}
											icon="dismiss"
											onClick={onRemoveImage}
										>
											{__("Remove")}
										</IconButton>

										<h5>Position</h5>
										<FocalPointPicker
											label={__("Focal Point Picker")}
											url={containerImgURL}
											value={focalPoint}
											onChange={value => setAttributes({ focalPoint: value })}
										/>

										<hr />

										<h5>Attachment</h5>
										<ToggleControl
											label={__("Scroll | Fixed", "covertnine-blocks")}
											checked={bgImgAttach}
											onChange={bgImgAttach => setAttributes({ bgImgAttach })}
										/>

										<hr />

										<h5>Overlay</h5>
										<span>Color Palette</span>
										<ColorPalette
											label={__("Overlay Color", "covertnine-blocks")}
											value={overlayHue}
											onChange={overlayHue => setAttributes({ overlayHue })}
										/>

										<hr />

										<div>
											<h5>Size</h5>
											<SelectControl
												help={__("Choose between cover, contain, or custom.")}
												options={sizeTypes}
												value={bgImgSize}
												onChange={value => setAttributes({ bgImgSize: value })}
											/>
											{!bgImgSize && (
												<div>
													<h5>Horizontal</h5>
													<ToggleControl
														label={__("Auto | Manual", "covertnine-blocks")}
														checked={this.customX}
														onChange={value => {
															this.customX = value;
															this.setState({ customX: value });

															if (value) {
																this.updateBgX("unit", "%");
																this.updateBgX("size", 100);
															} else {
																this.updateBgX("size", "auto");
															}
														}}
													/>
													{this.customX && (
														<div style={{ display: "flex" }}>
															<RangeControl
																value={this.bgCustomX.size}
																onChange={value =>
																	this.updateBgX("size", value)
																}
																className="bgSize"
																min={0}
																max={Number.MAX_SAFE_INTEGER}
															/>
															<SelectControl
																options={cssUnits}
																value={this.bgCustomX.unit}
																onChange={value =>
																	this.updateBgX("unit", value)
																}
																className="bgSize"
															/>
														</div>
													)}
													<h5>Vertical</h5>
													<ToggleControl
														label={__("Auto | Manual", "covertnine-blocks")}
														checked={this.customY}
														onChange={value => {
															this.customY = value;
															this.setState({ customY: value });

															if (value) {
																this.updateBgY("unit", "%");
																this.updateBgY("size", 100);
															} else {
																this.updateBgY("size", "auto");
															}
														}}
													/>
													{this.customY && (
														<div style={{ display: "flex" }}>
															<RangeControl
																value={this.bgCustomY.size}
																onChange={value =>
																	this.updateBgY("size", value)
																}
																className="bgSize"
																min={0}
																max={Number.MAX_SAFE_INTEGER}
															/>
															<SelectControl
																options={cssUnits}
																value={this.bgCustomY.unit}
																onChange={value =>
																	this.updateBgY("unit", value)
																}
																className="bgSize"
															/>
														</div>
													)}
												</div>
											)}
											<hr />

											<h5>Repeat</h5>
											<SelectControl
												help={__(
													"Choose between no-repeat, repeat, round or space."
												)}
												options={repeatTypes}
												value={bgImgRepeat}
												onChange={value =>
													setAttributes({ bgImgRepeat: value })
												}
											/>
										</div>
									</div>
								)}
							</div>
						)}
					/>

					{overlayHue && !!overlayHue.length && (
						<RangeControl
							beforeIcon="arrow-left-alt2"
							afterIcon="arrow-right-alt2"
							label={__("Opacity", "covertnine-blocks")}
							value={overlayOpacity}
							onChange={overlayOpacity => setAttributes({ overlayOpacity })}
							min={1}
							max={9}
						/>
					)}
					{overlayHue && containerImgURL && !!containerImgURL.length && (
						<SelectControl
							label={__("Blend Mode", "covertnine-blocks")}
							value={blendMode}
							options={[
								{ value: "overlay", label: __("Overlay", "covertnine-blocks") },
								{ value: "normal", label: __("Normal", "covertnine-blocks") },
								{
									value: "multiply",
									label: __("Multiply", "covertnine-blocks")
								},
								{ value: "screen", label: __("Screen", "covertnine-blocks") },
								{ value: "darken", label: __("Darken", "covertnine-blocks") },
								{ value: "lighten", label: __("Lighten", "covertnine-blocks") },
								{
									value: "color-dodge",
									label: __("Color Dodge", "covertnine-blocks")
								},
								{
									value: "color-burn",
									label: __("Color Burn", "covertnine-blocks")
								},
								{
									value: "hard-light",
									label: __("Hard Light", "covertnine-blocks")
								},
								{
									value: "soft-light",
									label: __("Soft Light", "covertnine-blocks")
								},
								{
									value: "difference",
									label: __("Difference", "covertnine-blocks")
								},
								{
									value: "exclusion",
									label: __("Exclusion", "covertnine-blocks")
								},
								{ value: "hue", label: __("Hue", "covertnine-blocks") },
								{
									value: "saturation",
									label: __("Saturation", "covertnine-blocks")
								},
								{ value: "color", label: __("Color", "covertnine-blocks") },
								{
									value: "luminosity",
									label: __("Luminosity", "covertnine-blocks")
								}
							]}
							onChange={blendMode => setAttributes({ blendMode })}
						/>
					)}
				</PanelBody>
				<PanelBody title={__("Video")} initialOpen={false}>
					<RadioControl
						label={__("Media Type", "covertnine-blocks")}
						selected={videoType}
						options={[
							{ label: "Upload File", value: "upload" },
							{ label: "Embed URL", value: "embed" }
						]}
						onChange={videoType => {
							setAttributes({
								videoType,
								containerVideoURL: "",
								containerVideoID: ""
							});
							this.ID = "";
							this.setState({ ID: "" });

							const {
								attributes: { preview }
							} = this.props;
							if (preview && preview.i) {
								preview.destroy();
							}
						}}
					/>

					<hr />

					{videoType == "upload" && (
						<MediaUpload
							id="bg-video-select"
							label={__("Background Video", "covertnine-blocks")}
							onSelect={onSelectVideo}
							type="video"
							value={containerImgID}
							allowedTypes={["video"]}
							render={({ open }) => (
								<div>
									<IconButton
										label={__("Edit Video")}
										icon="format-image"
										onClick={open}
									>
										{__("Background Video")}
									</IconButton>
								</div>
							)}
						/>
					)}

					{videoType == "upload" &&
						containerVideoURL &&
						!!containerVideoURL.length && (
							<div>
								<IconButton
									label={__("Remove Video")}
									icon="dismiss"
									onClick={onRemoveVideo}
								>
									{__("Remove")}
								</IconButton>
							</div>
						)}

					{videoType == "embed" && (
						<div>
							<TextControl
								label="YouTube URL or Youtube ID"
								value={this.ID}
								onChange={value => this.updateID(value)}
							/>

							{cannotEmbed && (
								<p className="text-danger">
									Given YouTube ID/URL is not correctly formatted!
								</p>
							)}

							<div>
								<Button
									isDefault
									onClick={() => this.submitID()}
									style={{ marginRight: "10px" }}
								>
									Set
								</Button>

								<Button isDefault onClick={() => this.resetID()}>
									Reset
								</Button>
							</div>
						</div>
					)}
				</PanelBody>
			</InspectorControls>
		);
	}
}
