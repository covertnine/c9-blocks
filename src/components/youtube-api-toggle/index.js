/* eslint-disable camelcase */

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { ToggleControl } = wp.components;
const { withDispatch } = wp.data;

class YoutubeAPIToggle extends Component {
	constructor() {
		super(...arguments);
		this.saveConfig = this.saveConfig.bind(this);
		this.state = {
			isSaving: false,
			youtubeAPIDisabled: c9_blocks_params.disable_youtube_api === 'true',
		};
	}

	/**
	 * Stores current color configuration to plugin settings.
	 */
	saveConfig(value) {
		if (false === this.state.isSaving) {
			this.setState({ isSaving: true });
			const settingModel = new wp.api.models.Settings({
				c9_blocks_disable_youtube_api: JSON.stringify(value),
			});
			// eslint-disable-next-line no-unused-vars
			settingModel.save().then((response) => {
				this.setState({ isSaving: false, youtubeAPIDisabled: value });
				c9_blocks_params.c9_blocks_disable_youtube_api = JSON.stringify(value);
			});
		}
	}

	render() {
		const { youtubeAPIDisabled } = this.state;

		return (
			<ToggleControl
				checked={youtubeAPIDisabled}
				onChange={(value) => {
					this.saveConfig(value);
				}}
			/>
		);
	}
}

export default withDispatch((dispatch) => {
	const { updateSettings } = dispatch('core/block-editor');
	return {
		updateSettings,
	};
})(YoutubeAPIToggle);
