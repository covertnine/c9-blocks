/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

const DEFAULT_ENABLE_CONTROLS = [
	{
        icon: "controls-repeat",
        title: __("Reverse Toggle", "c9-blocks"),
        enabled: true
    }
];

export function ReverseToolbar({
	value,
	onChange,
	enableControls = DEFAULT_ENABLE_CONTROLS
}) {
	function applyOrUnset(enabled) {
		return () => onChange(value === enabled ? false : enabled);
	}

	return (
		<Toolbar
			label={__("Flip Toggle Layout", "c9-blocks")}
			controls={enableControls.map(control => {
				const { enabled } = control;
				const isActive = value === enabled;

				return {
					...control,
					isActive,
					onClick: applyOrUnset(enabled)
				};
			})}
		/>
	);
}

export default ReverseToolbar;
