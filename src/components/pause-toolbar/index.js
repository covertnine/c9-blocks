/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

/**
 * Control Settings
 */
const DEFAULT_PAUSE_CONTROLS = [
	{
		icon: "controls-pause",
		title: __("Pause", "c9-blocks"),
		pause: true
	},
];

/**
 * Create a Width Toolbar Component
 */
export function PauseToolbar({
	value,
	onChange,
	PauseControls = DEFAULT_PAUSE_CONTROLS
}) {
	function applyOrUnset(pause) {
		return () => onChange(value === pause ? false : pause);
	}

	return (
		<Toolbar
			label={__("Pause?", "c9-blocks")}
			controls={PauseControls.map(control => {
				const { pause } = control;
				const isActive = value === pause;

				return {
					...control,
					isActive,
					onClick: applyOrUnset(pause)
				};
			})}
		/>
	);
}

export default PauseToolbar;
