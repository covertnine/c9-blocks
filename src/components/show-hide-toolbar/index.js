/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToolbarGroup, ToolbarButton } = wp.components;

/**
 * Control Settings
 */
const DEFAULT_DISPLAY_CONTROLS = [
	{
		icon: "smartphone",
		title: __("Mobile", "c9-blocks")
	},
	{
		icon: "tablet",
		title: __("Tablet", "c9-blocks")
	},
	{
		icon: "desktop",
		title: __("Desktop", "c9-blocks")
	}
];

/**
 * Create a Show/Hide Toolbar Component
 */
export function ShowHideToolbar({
	value,
	onChange,
	displayControls = DEFAULT_DISPLAY_CONTROLS
}) {
	function applyOrUnset(display, i) {
		return () => onChange(value[i] === display ? [false, i] : [display, i]);
	}

	return (
		<ToolbarGroup
			label={__("Change Show/Hide Settings", "c9-blocks")}
		>
			{displayControls.map((control, i) => {
				return <ToolbarButton
					{...control}
					isActive={value[i]}
					onClick={applyOrUnset(true, i)}
				/>
			})}
		</ToolbarGroup>
	);
}

export default ShowHideToolbar;
