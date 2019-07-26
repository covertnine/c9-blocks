/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

import Icon from "../../../../assets/text-muted-icon";

const DEFAULT_ENABLE_CONTROLS = [
	{
        icon: Icon,
        title: __("Enable Subheading", "c9-blocks"),
        enabled: true
    }
];

export function SubheadingToolbar({
	value,
	onChange,
	enableControls = DEFAULT_ENABLE_CONTROLS
}) {
	function applyOrUnset(enabled) {
		return () => onChange(value === enabled ? false : enabled);
	}

	return (
		<Toolbar
			label={__("Change Vertical Alignment")}
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

export default SubheadingToolbar;
