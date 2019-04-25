/**
 * Internal block libraries
 */
// import CustomRadio from './custom-radio';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, MediaUpload, ColorPalette } = wp.editor;
const {
	RadioControl,
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	IconButton
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: {
				verticalAlign,
				containerImgURL,
				containerImgID,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				overlayHue,
				overlayOpacity,
				bgImgPosX,
				bgImgPosY,
				blendMode,
				containerPadding,
				columns,
				minScreenHeight
			},
			setAttributes
		} = this.props;

		const spacingPresets = [
			{
				name: "Extra Large",
				amount: "100",
				shortName: "xl"
			},
			{
				name: "Large",
				amount: "75",
				shortName: "lg"
			},
			{
				name: "Medium",
				amount: "50",
				shortName: "md"
			},
			{
				name: "Small",
				amount: "25",
				shortName: "sm"
			}
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

		const toggleLinkage = spacingObject => {
			console.log(spacingObject.linked);
			containerPadding.linked = !containerPadding.linked;
		};

		const updatePadding = (position, value) => {
			if (containerPadding.linked) {
				setAttributes({
					containerPadding: {
						linked: true,
						unit: "px",
						top: value,
						bottom: value,
						left: value,
						right: value
					}
				});
			} else {
				containerPadding.top = value;
				// containerPadding[position] = value;
			}
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
					<div className="padding-top-wrapper">
						<RangeControl
							label={__("top")}
							value={containerPadding.top}
							onChange={padding => {
								updatePadding("top", padding);
							}}
							className="padding"
							min={0}
							max={300}
						/>
					</div>
					<div className="padding-sides-wrapper">
						<RangeControl
							label={__("bottom")}
							value={containerPadding.bottom}
							onChange={padding => {
								updatePadding("bottom", padding);
							}}
							className="padding"
							min={0}
							max={300}
						/>
						<IconButton
							label={__("Linked Padding Toggle", "covertnine-blocks")}
							icon={containerPadding.linked ? "admin-links" : "editor-unlink"}
							onClick={() => toggleLinkage(containerPadding)}
						/>
						<RangeControl
							label={__("left")}
							value={containerPadding.left}
							onChange={padding => {
								updatePadding("left", padding);
							}}
							className="padding"
							min={0}
							max={300}
						/>
					</div>
					<div className="padding-bottom-wrapper">
						<RangeControl
							label={__("right")}
							value={containerPadding.right}
							onChange={padding => {
								updatePadding("right", padding);
							}}
							className="padding"
							min={0}
							max={300}
						/>
					</div>
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
									<IconButton
										label={__("Remove Image")}
										icon="dismiss"
										onClick={onRemoveImage}
									>
										{__("Remove")}
									</IconButton>
								)}
							</div>
						)}
					/>
					{containerImgURL && !!containerImgURL.length && (
						<div>
							<ToggleControl
								label={__("Contain | Cover", "covertnine-blocks")}
								checked={bgImgSize}
								onChange={bgImgSize => setAttributes({ bgImgSize })}
							/>
							<ToggleControl
								label={__("Fixed | Scroll", "covertnine-blocks")}
								checked={bgImgAttach}
								onChange={bgImgAttach => setAttributes({ bgImgAttach })}
							/>
						</div>
					)}
					{containerImgURL && bgImgSize && (
						<div>
							<RangeControl
								beforeIcon="arrow-left-alt2"
								afterIcon="arrow-right-alt2"
								label={__("Horizontal Position", "covertnine-blocks")}
								value={bgImgPosX}
								onChange={bgImgPosX => setAttributes({ bgImgPosX })}
								min={0}
								max={10}
							/>
							<RangeControl
								beforeIcon="arrow-left-alt2"
								afterIcon="arrow-right-alt2"
								label={__("Vertical Position", "covertnine-blocks")}
								value={bgImgPosY}
								onChange={bgImgPosY => setAttributes({ bgImgPosY })}
								min={0}
								max={10}
							/>
						</div>
					)}
					<span>Color Palette</span>
					<ColorPalette
						label={__("Overlay Color", "covertnine-blocks")}
						value={overlayHue}
						onChange={overlayHue => setAttributes({ overlayHue })}
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
			</InspectorControls>
		);
	}
}
