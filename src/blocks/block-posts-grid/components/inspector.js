/* eslint-disable no-cond-assign */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, MediaUpload, ColorPalette } = wp.blockEditor;
const {
	RadioControl,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

/**
 * External Dependencies.
 */
import React from "react";
import debounce from "lodash/debounce";

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
		const {
			attributes: {
				containerPadding,
				containerMargin,
				containerVideoID,
				preview,
				bgCustomX,
				bgCustomY,
				bgCustomXMobile,
				bgCustomYMobile,
				focalPointMobile
			},
			setAttributes
		} = this.props;

		this.setAttributes = setAttributes;
		this.preview = preview;

		this.linkedPaddingRef = React.createRef();
		this.togglePaddingLinkage = this.togglePaddingLinkage.bind(this);
		this.linkedMarginRef = React.createRef();
		this.toggleMarginLinkage = this.toggleMarginLinkage.bind(this);

		this.state = {
			containerPadding: containerPadding,
			containerMargin: containerMargin,
			setAttributes: setAttributes,
			ID: containerVideoID || "",
			customX: "auto" != bgCustomX.size,
			customY: "auto" != bgCustomY.size,
			customXMobile: "auto" != bgCustomXMobile.size,
			customYMobile: "auto" != bgCustomYMobile.size,
			bgCustomX: bgCustomX,
			bgCustomY: bgCustomY,
			bgCustomXMobile: bgCustomXMobile,
			bgCustomYMobile: bgCustomYMobile,
			focalPointMobile: focalPointMobile
		};
	}

	componentDidUpdate() {
		const {
			attributes: { preview }
		} = this.props;

		this.preview = preview;
	}

	updateBgX = (position, value, mobile = false) => {
		let targ;
		if (mobile) {
			targ = this.state.bgCustomXMobile;
		} else {
			targ = this.state.bgCustomX;
		}

		let sizeObject = Object.assign({}, targ);

		sizeObject[position] = value;

		if (mobile) {
			this.setState({ bgCustomXMobile: sizeObject });
			this.setAttributes({ bgCustomXMobile: sizeObject });
		} else {
			this.setState({ bgCustomX: sizeObject });
			this.setAttributes({ bgCustomX: sizeObject });
		}
	};

	updateBgY = (position, value, mobile = false) => {
		let targ;
		if (mobile) {
			targ = this.state.bgCustomYMobile;
		} else {
			targ = this.state.bgCustomY;
		}

		let sizeObject = Object.assign({}, targ);

		sizeObject[position] = value;

		if (mobile) {
			this.setState({ bgCustomYMobile: sizeObject });
			this.setAttributes({ bgCustomYMobile: sizeObject });
		} else {
			this.setState({ bgCustomY: sizeObject });
			this.setAttributes({ bgCustomY: sizeObject });
		}
	};

	togglePaddingLinkage = () => {
		let {
			attributes: { containerPadding }
		} = this.props;

		containerPadding = Object.assign({}, containerPadding);
		containerPadding.linked = !containerPadding.linked;
		containerPadding.icon = containerPadding.linked
			? "admin-links"
			: "editor-unlink";
		this.setState({ containerPadding });
		this.setAttributes({ containerPadding });
	};

	setPaddingUnit = value => {
		const {
			attributes: { containerPadding }
		} = this.props;

		let spacingObject = Object.assign({}, containerPadding);
		spacingObject.unit = value;
		this.setState({ containerPadding: spacingObject });
		this.setAttributes({ containerPadding: spacingObject });
	};

	updatePadding = (position, value) => {
		if (this.state.containerPadding.linked) {
			let spacingObject = {
				linked: this.state.containerPadding.linked,
				unit: this.state.containerPadding.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.state.containerPadding.icon
			};
			this.setState({ containerPadding: spacingObject });
			this.setAttributes({ containerPadding: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.state.containerPadding);
			spacingObject[position] = value;
			this.setState({ containerPadding: spacingObject });
			this.setAttributes({ containerPadding: spacingObject });
		}
	};

	toggleMarginLinkage = () => {
		let {
			attributes: { containerMargin }
		} = this.props;

		containerMargin = Object.assign({}, containerMargin);
		containerMargin.linked = !containerMargin.linked;
		containerMargin.icon = containerMargin.linked
			? "admin-links"
			: "editor-unlink";
		this.setState({ containerMargin });
		this.setAttributes({ containerMargin });
	};

	setMarginUnit = value => {
		const {
			attributes: { containerMargin }
		} = this.props;

		let spacingObject = Object.assign({}, containerMargin);
		spacingObject.unit = value;
		this.setState({ containerMargin: spacingObject });
		this.setAttributes({ containerMargin: spacingObject });
	};

	updateMargin = (position, value) => {
		if (this.state.containerMargin.linked) {
			let spacingObject = {
				linked: this.state.containerMargin.linked,
				unit: this.state.containerMargin.unit,
				top: value,
				bottom: value,
				left: value,
				right: value,
				icon: this.state.containerMargin.icon
			};
			this.setState({ containerMargin: spacingObject });
			this.setAttributes({ containerMargin: spacingObject });
		} else {
			let spacingObject = Object.assign({}, this.state.containerMargin);
			spacingObject[position] = value;
			this.setState({ containerMargin: spacingObject });
			this.setAttributes({ containerMargin: spacingObject });
		}
	};

	updateID = value => {
		this.setState({ ID: value });
	};

	submitID = () => {
		// parse submitted item, check if valid id
		let checkURL = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;
		let checkAlphaNumeric = /^[a-zA-Z0-9-_]+$/;
		let result;

		if ((result = this.state.ID.match(checkURL))) {
			this.setAttributes({ containerVideoID: result[1], cannotEmbed: false });
			this.setState({ ID: result[1] });
		} else if ((result = this.state.ID.match(checkAlphaNumeric))) {
			this.setAttributes({ containerVideoID: result[0], cannotEmbed: false });
			this.setState({ ID: result[0] });
		} else {
			if (this.preview && this.preview.i) {
				this.preview.destroy();
			}
			this.setAttributes({ cannotEmbed: true });
		}

		// check if player exists
		if (this.preview && this.preview.i) {
			this.preview.loadVideoById(this.state.ID);
		}
	};

	resetID = () => {
		this.setState({ ID: "" });
		if (this.preview && this.preview.i) {
			this.preview.destroy();
			this.setAttributes({
				containerVideoID: "",
				cannotEmbed: false,
				preview: this.preview
			});
		}
	};

	render() {
		const {
			attributes: {
				containerImgURL,
				containerImgID,
				bgImgSize,
				bgImgAttach,
				bgImgRepeat,
				overlayHue,
				overlayOpacity,
				blendMode,
				containerPadding,
				containerMargin,
				minScreenHeight,
				focalPoint,
				videoType,
				containerVideoURL,
				cannotEmbed,
				containerHue,
				containerOpacity,
				instanceId,
				overrideMobile,
				bgImgSizeMobile
			},
			setAttributes
		} = this.props;

		const cssUnits = [
			{ value: "px", label: __("Pixel (px)", "c9-blocks") },
			{ value: "%", label: __("Percent (%)", "c9-blocks") },
			{ value: "em", label: __("Em (em)", "c9-blocks") }
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

		const sizeTypes = [
			{ value: "cover", label: __("Cover", "c9-blocks") },
			{ value: "contain", label: __("Contain", "c9-blocks") },
			{ value: "", label: __("Custom", "c9-blocks") }
		];

		const repeatTypes = [
			{ value: "no-repeat", label: __("no-repeat", "c9-blocks") },
			{ value: "repeat", label: __("repeat", "c9-blocks") },
			{ value: "round", label: __("round", "c9-blocks") },
			{ value: "space", label: __("space", "c9-blocks") }
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
				let vidElement = document.getElementById(
					`containerVideo-${instanceId}`
				);
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
				<BaseControl className="c9-container-base-control">
					<RangeControl
						className="c9-height-range-control"
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={__("Window Height (vh)", "c9-blocks")}
						value={minScreenHeight}
						onChange={minScreenHeight => setAttributes({ minScreenHeight })}
						min={10}
						max={100}
					/>
				</BaseControl>
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
							value={containerPadding.top}
							onChange={value => this.updatePadding("top", value)}
						/>
					</div>
					<div className="padding-sides-wrapper">
						<SelectControl
							options={paddingOptions}
							value={containerPadding.left}
							onChange={value => this.updatePadding("left", value)}
						/>
						<Button
							label={__("Linked Padding Toggle", "c9-blocks")}
							icon={this.state.containerPadding.icon}
							onClick={this.togglePaddingLinkage}
							ref={this.state.linkedPaddingRef}
						/>
						<SelectControl
							options={paddingOptions}
							value={containerPadding.right}
							onChange={value => this.updatePadding("right", value)}
						/>
					</div>
					<div className="padding-bottom-wrapper">
						<SelectControl
							options={paddingOptions}
							value={containerPadding.bottom}
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
							value={containerMargin.top}
							onChange={value => this.updateMargin("top", value)}
						/>
					</div>
					<div className="margin-sides-wrapper">
						<Button
							label={__("Linked Padding Toggle", "c9-blocks")}
							icon={this.state.containerMargin.icon}
							onClick={this.toggleMarginLinkage}
							ref={this.state.linkedMarginRef}
						/>
					</div>
					<div className="margin-bottom-wrapper">
						<SelectControl
							options={marginOptions}
							value={containerMargin.bottom}
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
						value={containerImgID}
						render={({ open }) => (
							<div>
								<Button
									label={__("Edit image", "c9-blocks")}
									icon="format-image"
									onClick={open}
								>
									{__("Background Image", "c9-blocks")}
								</Button>

								{containerImgURL && !!containerImgURL.length && (
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
											url={containerImgURL}
											value={focalPoint}
											onChange={value => setAttributes({ focalPoint: value })}
										/>
									</div>
								)}

								<span>{__("Background Color", "c9-blocks")}</span>
								<ColorPalette
									label={__("Overlay Color", "c9-blocks")}
									value={containerHue}
									onChange={containerHue => setAttributes({ containerHue })}
								/>

								{containerHue && !!containerHue.length && (
									<RangeControl
										beforeIcon="arrow-left-alt2"
										afterIcon="arrow-right-alt2"
										label={__("Opacity", "c9-blocks")}
										value={containerOpacity}
										onChange={containerOpacity =>
											setAttributes({ containerOpacity })
										}
										min={1}
										max={10}
									/>
								)}

								<span>{__("Color Overlay", "c9-blocks")}</span>
								<ColorPalette
									label={__("Overlay Color", "c9-blocks")}
									value={overlayHue}
									onChange={overlayHue => setAttributes({ overlayHue })}
								/>

								{overlayHue && !!overlayHue.length && (
									<RangeControl
										beforeIcon="arrow-left-alt2"
										afterIcon="arrow-right-alt2"
										label={__("Opacity", "c9-blocks")}
										value={overlayOpacity}
										onChange={overlayOpacity =>
											setAttributes({ overlayOpacity })
										}
										min={1}
										max={10}
									/>
								)}
								{overlayHue && (
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

								{containerImgURL && !!containerImgURL.length && (
									<div>
										<h5>{__("Attachment", "c9-blocks")}</h5>
										<ToggleControl
											label={__("Scroll | Fixed", "c9-blocks")}
											checked={bgImgAttach}
											onChange={bgImgAttach => setAttributes({ bgImgAttach })}
										/>

										<hr />

										<div>
											<h5>{__("Size", "c9-blocks")}</h5>
											<SelectControl
												help={__(
													"Choose between cover, contain, or custom.",
													"c9-blocks"
												)}
												options={sizeTypes}
												value={bgImgSize}
												onChange={value => setAttributes({ bgImgSize: value })}
											/>
											{!bgImgSize && (
												<div>
													<h5>{__("Horizontal", "c9-blocks")}</h5>
													<ToggleControl
														label={__("Auto | Manual", "c9-blocks")}
														checked={this.state.customX}
														onChange={value => {
															this.setState({ customX: value });

															if (value) {
																this.updateBgX("unit", "%");
																this.updateBgX("size", 100);
															} else {
																this.updateBgX("size", "auto");
															}
														}}
													/>
													{this.state.customX && (
														<div style={{ display: "flex" }}>
															<RangeControl
																value={this.state.bgCustomX.size}
																onChange={value =>
																	this.updateBgX("size", value)
																}
																className="bgSize"
																min={0}
																max={Number.MAX_SAFE_INTEGER}
															/>
															<SelectControl
																options={cssUnits}
																value={this.state.bgCustomX.unit}
																onChange={value =>
																	this.updateBgX("unit", value)
																}
																className="bgSize"
															/>
														</div>
													)}
													<h5>{__("Vertical", "c9-blocks")}</h5>
													<ToggleControl
														label={__("Auto | Manual", "c9-blocks")}
														checked={this.state.customY}
														onChange={value => {
															this.setState({ customY: value });

															if (value) {
																this.updateBgY("unit", "%");
																this.updateBgY("size", 100);
															} else {
																this.updateBgY("size", "auto");
															}
														}}
													/>
													{this.state.customY && (
														<div style={{ display: "flex" }}>
															<RangeControl
																value={this.state.bgCustomY.size}
																onChange={value =>
																	this.updateBgY("size", value)
																}
																className="bgSize"
																min={0}
																max={Number.MAX_SAFE_INTEGER}
															/>
															<SelectControl
																options={cssUnits}
																value={this.state.bgCustomY.unit}
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

											<h5>{__("Repeat", "c9-blocks")}</h5>
											<SelectControl
												help={__(
													"Choose between no-repeat, repeat, round or space.",
													"c9-blocks"
												)}
												options={repeatTypes}
												value={bgImgRepeat}
												onChange={value =>
													setAttributes({ bgImgRepeat: value })
												}
											/>
										</div>
										<h5>{__("Mobile Background", "c9-blocks")}</h5>
										<ToggleControl
											label={__("Same as Desktop | Change", "c9-blocks")}
											checked={overrideMobile}
											onChange={overrideMobile =>
												setAttributes({ overrideMobile })
											}
										/>

										{overrideMobile && (
											<PanelBody
												title={__("Mobile Background Settings", "c9-blocks")}
												initialOpen={true}
											>
												<h5>Position</h5>
												<FocalPointPicker
													className="c9-grid-mobile-focal"
													label={__("Focal Point Picker", "c9-blocks")}
													url={containerImgURL}
													value={this.state.focalPointMobile}
													onChange={value => {
														setAttributes({ focalPointMobile: value });
														this.setState({ focalPointMobile: value });

														debounce(value => {
															clearTimeout(this.timer);
															if (1 <= value.x || 0 >= value.x) {
																return;
															}
															if (1 <= value.y || 0 >= value.y) {
																return;
															}

															let x, y;
															if (0.33 >= value.x) {
																x = 0.25;
															} else if (0.66 >= value.x) {
																x = 0.5;
															} else {
																x = 0.75;
															}

															if (0.33 >= value.y) {
																y = 0.25;
															} else if (0.66 >= value.y) {
																y = 0.5;
															} else {
																y = 0.75;
															}

															// delay until last invoke
															let self = this;
															this.timer = setTimeout(() => {
																setAttributes({ focalPointMobile: { x, y } });
																self.setState({ focalPointMobile: { x, y } });
															}, 750);
														}, 250)(value);
													}}
												/>

												<hr />

												<h5>{__("Size", "c9-blocks")}</h5>
												<SelectControl
													help={__(
														"Choose between cover, contain, or custom.",
														"c9-blocks"
													)}
													options={sizeTypes}
													value={bgImgSizeMobile}
													onChange={value =>
														setAttributes({ bgImgSizeMobile: value })
													}
												/>

												{!bgImgSizeMobile && (
													<div>
														<h5>{__("Horizontal", "c9-blocks")}</h5>
														<ToggleControl
															label={__("Auto | Manual", "c9-blocks")}
															checked={this.state.customXMobile}
															onChange={value => {
																this.setState({ customXMobile: value });

																if (value) {
																	this.updateBgX("unit", "%", true);
																	this.updateBgX("size", 100, true);
																} else {
																	this.updateBgX("size", "auto", true);
																}
															}}
														/>
														{this.state.customXMobile && (
															<div style={{ display: "flex" }}>
																<RangeControl
																	value={this.state.bgCustomXMobile.size}
																	onChange={value =>
																		this.updateBgX("size", value, true)
																	}
																	className="bgSize"
																	min={0}
																	max={Number.MAX_SAFE_INTEGER}
																/>
																<SelectControl
																	options={cssUnits}
																	value={this.state.bgCustomXMobile.unit}
																	onChange={value =>
																		this.updateBgX("unit", value, true)
																	}
																	className="bgSize"
																/>
															</div>
														)}
														<h5>{__("Vertical", "c9-blocks")}</h5>
														<ToggleControl
															label={__("Auto | Manual", "c9-blocks")}
															checked={this.state.customYMobile}
															onChange={value => {
																this.setState({ customYMobile: value });

																if (value) {
																	this.updateBgY("unit", "%", true);
																	this.updateBgY("size", 100, true);
																} else {
																	this.updateBgY("size", "auto", true);
																}
															}}
														/>
														{this.state.customYMobile && (
															<div style={{ display: "flex" }}>
																<RangeControl
																	value={this.state.bgCustomYMobile.size}
																	onChange={value =>
																		this.updateBgY("size", value, true)
																	}
																	className="bgSize"
																	min={0}
																	max={Number.MAX_SAFE_INTEGER}
																/>
																<SelectControl
																	options={cssUnits}
																	value={this.state.bgCustomYMobile.unit}
																	onChange={value =>
																		this.updateBgY("unit", value, true)
																	}
																	className="bgSize"
																/>
															</div>
														)}
													</div>
												)}
											</PanelBody>
										)}
									</div>
								)}
							</div>
						)}
					/>
				</PanelBody>
				<PanelBody title={__("Video Options", "c9-blocks")} initialOpen={false}>
					<RadioControl
						label={__("Media Type", "c9-blocks")}
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

					{"upload" == videoType && (
						<MediaUpload
							id="bg-video-select"
							label={__("Background Video", "c9-blocks")}
							onSelect={onSelectVideo}
							type="video"
							value={containerImgID}
							allowedTypes={["video"]}
							render={({ open }) => (
								<div>
									<Button
										label={__("Edit Video", "c9-blocks")}
										icon="format-image"
										onClick={open}
									>
										{__("Background Video", "c9-blocks")}
									</Button>
								</div>
							)}
						/>
					)}

					{"upload" == videoType &&
						containerVideoURL &&
						!!containerVideoURL.length && (
							<div>
								<Button
									label={__("Remove Video", "c9-blocks")}
									icon="dismiss"
									onClick={onRemoveVideo}
								>
									{__("Remove", "c9-blocks")}
								</Button>
							</div>
						)}

					{"embed" == videoType && (
						<div>
							<TextControl
								label="YouTube URL or Youtube ID"
								value={this.state.ID}
								onChange={value => this.updateID(value)}
							/>

							{cannotEmbed && (
								<p className="text-danger">
									{__(
										"Given YouTube ID/URL is not correctly formatted!",
										"c9-blocks"
									)}
								</p>
							)}

							<div>
								<Button
									isSecondary
									onClick={() => this.submitID()}
									style={{ marginRight: "10px" }}
								>
									{__("Set", "c9-blocks")}
								</Button>

								<Button isSecondary onClick={() => this.resetID()}>
									{__("Reset", "c9-blocks")}
								</Button>
							</div>
						</div>
					)}
				</PanelBody>
			</InspectorControls>
		);
	}
}
