/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

import icons from "../../../../assets/c9-vertical-alignment-icons";

const DEFAULT_ALIGN_CONTROLS = [
	{
        icon: icons.top,
        title: __("Vertical Align Top", "c9-blocks"),
        align: "top"
    },
    {
        icon: icons.center,
        title: __("Vertical Align Middle", "c9-blocks"),
        align: "center"
    },
    {
        icon: icons.bottom,
        title: __("Vertical Align Bottom", "c9-blocks"),
        align: "bottom"
    }
];

export function VerticalAlignmentToolbar({
	value,
	onChange,
	alignControls = DEFAULT_ALIGN_CONTROLS
}) {
	function applyOrUnset(align) {
		return () => onChange(value === align ? undefined : align);
	}

	return (
		<Toolbar
			label={__("Change Vertical Alignment", "c9-blocks")}
			controls={alignControls.map(control => {
				const { align } = control;
				const isActive = value === align;

				return {
					...control,
					isActive,
					onClick: applyOrUnset(align)
				};
			})}
		/>
	);
}

export default VerticalAlignmentToolbar;
