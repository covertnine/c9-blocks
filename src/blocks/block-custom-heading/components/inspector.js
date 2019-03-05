/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

const { compose } = wp.compose;

// Import block components
const {
	InspectorControls,
	BlockDescription,
	withColors,
	ColorPalette,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;

// Import Inspector components
const {
	withFallbackStyles,
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
	RadioControl,
} = wp.components;

const { getComputedStyle } = window;

/**
 * Create an Inspector Controls wrapper Component
 */
class Inspector extends Component {

	constructor(props) {
		super(...arguments);
	}

	render() {

		// Setup the attributes
		const {
			attributes: {
				headingType,
				headingColor,
				subheadingTextColor,
				headingClass,
				subheadingClass,
				customHeaderRule,
			}
		} = this.props;

		const {
			setAttributes,
			buttonTextColor,
			buttonBackgroundColor,
			setButtonTextColor,
			setButtonBackgroundColor,
		} = this.props;


		// Update color values
		const onChangeBackgroundColor = value => setAttributes({ ctaBackgroundColor: value });
		const onChangeTextColor = value => setAttributes({ ctaTextColor: value });
		const onChangeButtonColor = value => setAttributes({ buttonBackgroundColor: value });
		const onChangeButtonTextColor = value => setAttributes({ buttonTextColor: value });

		return (
			<InspectorControls key="inspector">
				<PanelBody title={__('Heading Options', 'covertnine-blocks')} initialOpen={false}>
					<PanelColorSettings
						title={__('Heading Color', 'covertnine-blocks')}
						initialOpen={true}
						colorSettings={[{
							value: headingColor,
							onChange: onChangeTextColor,
							label: __('Text Color', 'covertnine-blocks'),
						}]}
					>
					</PanelColorSettings>
				</PanelBody>
				<PanelColorSettings
					title={__('Button Text Color', 'covertnine-blocks')}
					initialOpen={true}
					colorSettings={[{
						value: buttonTextColor.color,
						onChange: onChangeButtonTextColor,
						label: __('Button Text Color', 'covertnine-blocks'),
					}]}
				>
				</PanelColorSettings>
				<PanelBody title={__('Layout', 'covertnine-blocks')} initialOpen={false}>
					<RadioControl
						label={__('Content Width', 'covertnine-blocks')}
						selected={ctaLayout}
						options={[
							{ label: '2/3', value: 'two-thirds' },
							{ label: '3/4', value: 'three-quarters' },
							{ label: 'Full', value: 'full' },
						]}
						onChange={ctaLayout => setAttributes({ ctaLayout })}
					/>
				</PanelBody>

				<PanelBody title={__('Background Options', 'covertnine-blocks')} initialOpen={false}>
					<p>{__('Select a background image:', 'covertnine-blocks')}</p>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={imgID}
						render={({ open }) => (
							<div>
								<IconButton
									className="ab-cta-inspector-media"
									label={__('Edit image', 'covertnine-blocks')}
									icon="format-image"
									onClick={open}
								>
									{__('Select Image', 'covertnine-blocks')}
								</IconButton>

								{imgURL && !!imgURL.length && (
									<IconButton
										className="ab-cta-inspector-media"
										label={__('Remove Image', 'covertnine-blocks')}
										icon="dismiss"
										onClick={onRemoveImage}
									>
										{__('Remove', 'covertnine-blocks')}
									</IconButton>
								)}
							</div>
						)}
					>
					</MediaUpload>

					{imgURL && !!imgURL.length && (
						<RangeControl
							label={__('Image Opacity', 'covertnine-blocks')}
							value={dimRatio}
							onChange={(value) => this.props.setAttributes({ dimRatio: value })}
							min={0}
							max={100}
							step={10}
						/>
					)}

					<PanelColorSettings
						title={__('Background Color', 'covertnine-blocks')}
						initialOpen={false}
						colorSettings={[{
							value: ctaBackgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('Overlay Color', 'covertnine-blocks'),
						}]}
					>
					</PanelColorSettings>
				</PanelBody>

				<PanelBody title={__('Button Options', 'covertnine-blocks')} initialOpen={false}>
					<ToggleControl
						label={__('Open link in new window', 'covertnine-blocks')}
						checked={buttonTarget}
						onChange={() => this.props.setAttributes({ buttonTarget: !buttonTarget })}
					/>

					<SelectControl
						label={__('Button Size', 'covertnine-blocks')}
						value={buttonSize}
						options={buttonSizeOptions.map(({ value, label }) => ({
							value: value,
							label: label,
						}))}
						onChange={(value) => { this.props.setAttributes({ buttonSize: value }) }}
					/>

					<SelectControl
						label={__('Button Shape', 'covertnine-blocks')}
						value={buttonShape}
						options={buttonShapeOptions.map(({ value, label }) => ({
							value: value,
							label: label,
						}))}
						onChange={(value) => { this.props.setAttributes({ buttonShape: value }) }}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector
