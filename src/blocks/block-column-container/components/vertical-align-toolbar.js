/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

const DEFAULT_ALIGN_CONTROLS = [
	{
        icon: "arrow-up-alt2",
        title: __("Vertical Align Top", "c9-blocks"),
        align: "top"
    },
    {
        icon: "minus",
        title: __("Vertical Align Middle", "c9-blocks"),
        align: "center"
    },
    {
        icon: "arrow-down-alt2",
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
			label={__("Change Vertical Alignment")}
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
