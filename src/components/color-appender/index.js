/* eslint-disable no-undef */
/* eslint-disable camelcase */

/**
 * Internal dependencies
 */
import CustomPalette from "../custom-palette";

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ToggleControl, Dashicon, Button, Tooltip } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

/**
 * External Dependencies.
 */
import get from "lodash/get";

class ColorAppender extends Component {
	constructor() {
		super(...arguments);
		this.saveConfig = this.saveConfig.bind(this);
		this.saveC9Colors = this.saveC9Colors.bind(this);
		this.saveColors = this.saveColors.bind(this);
		this.c9ColorUniqueID = -1;
		this.state = {
			isSaving: false,
			c9Colors: c9_blocks_params.colors
				? JSON.parse(c9_blocks_params.colors)
				: { palette: [], override: false },
			origColors: c9_blocks_params.orig_colors
				? c9_blocks_params.orig_colors[0]
				: [],
			colors: ""
		};
	}

	/**
	 * Retrieves base theme colors and initiates the unique id assigner for custom colors.
	 */
	componentDidMount() {
		if (!this.state.colors) {
			this.setState({ colors: this.props.baseColors });
		}

		this.c9ColorUniqueID = this.state.c9Colors
			? this.state.c9Colors.palette.length
			: 0;
	}

	/**
	 * Stores current color configuration to plugin settings.
	 */
	saveConfig() {
		if (false === this.state.isSaving) {
			this.setState({ isSaving: true });
			const config = this.state.c9Colors;
			const settingModel = new wp.api.models.Settings({
				c9_blocks_colors: JSON.stringify(config)
			});
			// eslint-disable-next-line no-unused-vars
			settingModel.save().then(response => {
				this.setState({ isSaving: false, c9Colors: config });
				c9_blocks_params.colors = JSON.stringify(config);
				this.props.updateSettings({ colors: this.state.colors });
			});
		}
	}

	/**
	 * Updates the C9 Colors palette.
	 *
	 * @param {Object} value Color configuration.
	 * @param {number} index Location to update.
	 */
	saveC9Colors(value, index) {
		const { c9Colors } = this.state;
		c9Colors.palette[index] = { ...c9Colors[index], ...value };
		this.setState({
			c9Colors
		});
	}

	/**
	 * Updates the overall colors palette.
	 *
	 * @param {Object} value Color configuration.
	 * @param {number} index Location to update.
	 */
	saveColors(value, index) {
		const { colors } = this.state;
		colors[index] = value;

		this.setState({ colors });
	}

	render() {
		const { c9Colors, colors, origColors } = this.state;

		const nonEditables = [];
		const editables = [];

		Array.from(this.state.colors).map(curr => {
			if (
				undefined !== curr.slug &&
				"covertnine-palette" === curr.slug.substr(0, 18)
			) {
				editables.push(curr);
			} else {
				nonEditables.push(curr);
			}
		});

		return (
			<div className="c9-block-default-palette">
				{colors && (
					<div className="components-color-palette">
						<p className="components-base-control__label">Theme Colors</p>
						{nonEditables.map(curr => (
							<div
								key={curr.slug}
								className="components-color-palette__item-wrapper"
							>
								<Tooltip
									text={
										curr.name ||
										// translators: %s: color hex code e.g: "#f00".
										sprintf(__("Color code: %s"), curr.color)
									}
								>
									<div
										className="components-color-palette__item"
										style={{ color: curr.color }}
									>
										<Dashicon icon="lock" />
									</div>
								</Tooltip>
							</div>
						))}
					</div>
				)}
				<hr />
				{colors && (
					<div className="components-color-palette">
						<p className="components-base-control__label">C9 Block Colors</p>
						{editables.map((curr, index) => (
							<div
								key={curr.slug}
								className="components-color-palette__item-wrapper"
							>
								<CustomPalette
									nameValue={
										curr.name ? curr.name : __("Color") + " " + index + 1
									}
									colorValue={curr.color ? curr.color : "#ffffff"}
									onSave={(value, title) => {
										this.saveC9Colors(
											{ color: value, name: title, slug: curr.slug },
											index
										);
										this.saveColors(
											{ color: value, name: title, slug: curr.slug },
											(nonEditables.length ? nonEditables.length : 0) + index
										);
										this.saveConfig();
									}}
								/>
							</div>
						))}
						{0 < c9Colors.palette.length && (
							<div className="c9-colors-remove-last">
								<Tooltip text={__("Remove Last Color")}>
									<Button
										type="button"
										isDestructive
										onClick={() => {
											c9Colors.palette.pop();
											colors.pop();
											this.c9ColorUniqueID -= 1;
											this.setState({ c9Colors: c9Colors });
											this.setState({ colors: colors });
											this.saveConfig();
										}}
										aria-label={__("Remove Last Color")}
									>
										<Dashicon icon="editor-removeformatting" />
									</Button>
								</Tooltip>
							</div>
						)}
					</div>
				)}
				<div className="c9-colors-add-new">
					<Button
						type="button"
						isPrimary
						disabled={this.state.isSaving}
						onClick={() => {
							if (this.state.isSaving) {
								return;
							}
							if (undefined === c9Colors.palette) {
								c9Colors.palette = [];
							}
							let id = this.c9ColorUniqueID;
							c9Colors.palette.push({
								color: "#888888",
								name: __("Color") + " " + id,
								slug: "covertnine-palette-" + id
							});
							colors.push({
								color: "#888888",
								name: __("Color") + " " + id,
								slug: "covertnine-palette-" + id
							});
							this.c9ColorUniqueID += 1;
							this.setState({ c9Colors: c9Colors });
							this.setState({ colors: colors });
							this.saveConfig();
						}}
						aria-label={__("Add Color")}
					>
						{__("Add Color")}
					</Button>
				</div>
				{undefined !== c9Colors.palette && undefined !== c9Colors.palette[0] && (
					<Fragment>
						<ToggleControl
							label={__("Use only C9 Blocks Colors?")}
							checked={
								undefined !== c9Colors.override ? c9Colors.override : false
							}
							onChange={value => {
								let newColors;
								const newC9Colors = this.state.c9Colors;
								if (true === value) {
									newColors = newC9Colors.palette;
									newC9Colors.override = true;
								} else {
									newC9Colors.override = false;
									newColors = [...origColors, ...newC9Colors.palette];
								}
								this.setState({ c9Colors: newC9Colors });
								this.setState({ colors: newColors });
								this.saveConfig();
							}}
						/>
					</Fragment>
				)}
			</div>
		);
	}
}
export default compose([
	withSelect(select => {
		const { getSettings } = select("core/block-editor");
		const settings = getSettings();
		return {
			baseColors: get(settings, ["colors"], [])
		};
	}),
	withDispatch(dispatch => {
		const { updateSettings } = dispatch("core/block-editor");
		return {
			updateSettings
		};
	})
])(ColorAppender);
