/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;

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
			twitter,
			facebook,
			instagram,
			instagramLink,
			tiktok,
			tiktokLink,
			linkedin,
			pinterest,
			email,
			reddit,
			shareButtonStyle,
			shareButtonShape,
			shareButtonSize,
			shareButtonColor
		} = this.props.attributes;

		// Button style values
		const buttonStyleOptions = [
			{ value: "c9-share-icon-text", label: __("Icon and Text") },
			{ value: "c9-share-icon-only", label: __("Icon Only") },
			{ value: "c9-share-text-only", label: __("Text Only") }
		];

		// Button shape values
		const buttonShapeOptions = [
			{ value: "c9-share-shape-square", label: __("Square") },
			{ value: "c9-share-shape-rounded", label: __("Rounded Square") },
			{ value: "c9-share-shape-circular", label: __("Circular") }
		];

		// Button size values
		const shareButtonSizeOptions = [
			{ value: "c9-share-size-small", label: __("Small") },
			{ value: "c9-share-size-medium", label: __("Medium") },
			{ value: "c9-share-size-large", label: __("Large") }
		];

		// Button color values
		const shareButtonColorOptions = [
			{ value: "c9-share-color-standard", label: __("Standard") },
			{ value: "c9-share-color-social", label: __("Social Colors") }
		];

		return (
			<InspectorControls key="inspector">
				<PanelBody>
					<p>{__("Enable or disable the sharing links you want to output.")}</p>

					<ToggleControl
						label={__("Twitter")}
						checked={!!twitter}
						onChange={() => this.props.setAttributes({ twitter: !twitter })}
					/>
					<ToggleControl
						label={__("Facebook")}
						checked={!!facebook}
						onChange={() => this.props.setAttributes({ facebook: !facebook })}
					/>
					<ToggleControl
						label={__("Instagram")}
						checked={!!instagram}
						onChange={() => this.props.setAttributes({ instagram: !instagram })}
					/>
					{
						instagram && (
							<TextControl
								label="Instagram Share Link"
								value={instagramLink}
								onChange={value => this.props.setAttributes({ instagramLink: value })}
							/>
						)
					}
					<ToggleControl
						label={__("Tiktok")}
						checked={!!tiktok}
						onChange={() => this.props.setAttributes({ tiktok: !tiktok })}
					/>
					{
						tiktok && (
							<TextControl
								label="Tiktok Share Link"
								value={tiktokLink}
								onChange={value => this.props.setAttributes({ tiktokLink: value })}
							/>
						)
					}
					<ToggleControl
						label={__("Pinterest")}
						checked={!!pinterest}
						onChange={() => this.props.setAttributes({ pinterest: !pinterest })}
					/>
					<ToggleControl
						label={__("LinkedIn")}
						checked={!!linkedin}
						onChange={() => this.props.setAttributes({ linkedin: !linkedin })}
					/>
					<ToggleControl
						label={__("Reddit")}
						checked={!!reddit}
						onChange={() => this.props.setAttributes({ reddit: !reddit })}
					/>
					<ToggleControl
						label={__("Email")}
						checked={!!email}
						onChange={() => this.props.setAttributes({ email: !email })}
					/>
				</PanelBody>

				<PanelBody>
					<p className="components-base-control__label">
						{__("Sharing Button Options", "c9-blocks")}
					</p>
					<SelectControl
						label={__("Button Style")}
						value={shareButtonStyle}
						options={buttonStyleOptions.map(({ value, label }) => ({
							value: value,
							label: label
						}))}
						onChange={value => {
							this.props.setAttributes({ shareButtonStyle: value });
						}}
					/>

					<SelectControl
						label={__("Button Shape")}
						value={shareButtonShape}
						options={buttonShapeOptions.map(({ value, label }) => ({
							value: value,
							label: label
						}))}
						onChange={value => {
							this.props.setAttributes({ shareButtonShape: value });
						}}
					/>

					<SelectControl
						label={__("Button Size")}
						value={shareButtonSize}
						options={shareButtonSizeOptions.map(({ value, label }) => ({
							value: value,
							label: label
						}))}
						onChange={value => {
							this.props.setAttributes({ shareButtonSize: value });
						}}
					/>

					<SelectControl
						label={__("Button Color")}
						value={shareButtonColor}
						options={shareButtonColorOptions.map(({ value, label }) => ({
							value: value,
							label: label
						}))}
						onChange={value => {
							this.props.setAttributes({ shareButtonColor: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
