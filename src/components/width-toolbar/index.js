/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

/**
 * Control Settings
 */
const DEFAULT_WIDTH_CONTROLS = [
	{
		icon: "align-center",
		title: __("Narrow Width", "c9-blocks"),
		width: "narrow"
	},
	{
		icon: "align-wide",
		title: __("Wide Width", "c9-blocks"),
		width: "wide"
	},
	{
		icon: "align-full-width",
		title: __("Full Width", "c9-blocks"),
		width: "full"
	}
];


/**
 * Create a Width Toolbar Component
 */
export function WidthToolbar({
	value,
	onChange,
	widthControls = DEFAULT_WIDTH_CONTROLS
}) {
	function applyOrUnset(width) {
		return () => onChange(value === width ? undefined : width);
	}

	return (
		<Toolbar
			label={__("Change Widths", "c9-blocks")}
			controls={widthControls.map(control => {
				const { width } = control;
				const isActive = value === width;

				return {
					...control,
					isActive,
					onClick: applyOrUnset(width)
				};
			})}
		/>
	);
}

export default WidthToolbar;
