/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	Button,
	Popover,
	ColorIndicator,
	ColorPicker,
	TextControl,
	Tooltip
} = wp.components;

class CustomPalette extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			isVisible: false,
			color: "",
			name: ""
		};
	}

	/**
	 * Inits the color and name of color passed in.
	 */
	componentDidMount() {
		this.setState({ color: this.props.colorValue, name: this.props.nameValue });
	}

	/**
	 * Enable visibility.
	 */
	toggleVisible = () => {
		this.setState({ isVisible: true });
	};

	/**
	 * Disable visibility.
	 */
	toggleClose = () => {
		if (true === this.state.isVisible) {
			this.setState({ isVisible: false });
			this.props.onSave(this.state.color, this.state.name);
		}
	};

	/**
	 * Update current color.
	 */
	changeColor = value => {
		this.setState({ color: value });
	};

	render() {
		return (
			<div className="c9-custom-color-settings-container">
				{this.state.isVisible && (
					<Popover
						position="top left"
						className="popover-color"
						onClose={this.toggleClose}
					>
						<ColorPicker
							color={
								undefined === this.state.color || "" === this.state.color
									? this.props.colorValue
									: this.state.color
							}
							onChangeComplete={color => this.changeColor(color.hex)}
							disableAlpha
						/>
						<TextControl
							label={__("Name:")}
							value={
								undefined === this.state.name || "" === this.state.name
									? this.props.nameValue
									: this.state.name
							}
							onChange={value => this.setState({ name: value })}
						/>
					</Popover>
				)}
				{this.state.isVisible && (
					<Tooltip text={__("Edit Color")}>
						<Button
							className={"c9-color-icon-indicate"}
							onClick={this.toggleClose}
						>
							<ColorIndicator
								className="c9-advanced-color-indicate"
								colorValue={
									"transparent" === this.state.color ||
									undefined === this.state.color ||
									"" === this.state.color
										? this.props.colorDefault
										: this.state.color
								}
							/>
						</Button>
					</Tooltip>
				)}
				{!this.state.isVisible && (
					<Tooltip text={__("Edit Color")}>
						<Button
							className={"c9-color-icon-indicate"}
							onClick={this.toggleVisible}
						>
							<ColorIndicator
								className="c9-advanced-color-indicate"
								colorValue={
									"transparent" === this.state.color ||
									undefined === this.state.color ||
									"" === this.state.color
										? this.props.colorDefault
										: this.state.color
								}
							/>
						</Button>
					</Tooltip>
				)}
			</div>
		);
	}
}
export default CustomPalette;
