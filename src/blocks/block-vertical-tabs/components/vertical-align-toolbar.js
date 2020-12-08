/**
 * Internal dependencies
 */
import icons from "../../../../assets/c9-vertical-alignment-icons";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToolbarGroup, ToolbarButton } = wp.components;

/**
 * Control Settings
 */
const DEFAULT_ALIGN_CONTROLS = [
	{
		icon: icons.top,
		title: __("Vertical Align Top", "c9-blocks"),
		align: "start"
	},
	{
		icon: icons.center,
		title: __("Vertical Align Middle", "c9-blocks"),
		align: "center"
	},
	{
		icon: icons.bottom,
		title: __("Vertical Align Bottom", "c9-blocks"),
		align: "end"
	}
];

/**
 * Create a Vertical Alignment Toolbar Component
 */
export function VerticalAlignmentToolbar({
	value,
	onChange,
	alignControls = DEFAULT_ALIGN_CONTROLS
}) {
	function applyOrUnset(align) {
		return () => onChange(value === align ? undefined : align);
	}

	return (
		<ToolbarGroup
			label={__("Change Vertical Alignment", "c9-blocks")}
		>
			{alignControls.map(control => {
				const { align } = control;
				return <ToolbarButton
					{...control}
					isActive={value === align}
					onClick={applyOrUnset(align)}
				/>
			})}
		</ToolbarGroup>
	);
}

export default VerticalAlignmentToolbar;
