/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToolbarGroup, ToolbarButton } = wp.components;

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
		<ToolbarGroup
			label={__("Pause?", "c9-blocks")}
		>
			{PauseControls.map(control => {
				const { pause } = control;
				return <ToolbarButton
					{...control}
					isActive={value === pause}
					onClick={applyOrUnset(pause)}
				/>
			})}
		</ToolbarGroup>
	);
}

export default PauseToolbar;
