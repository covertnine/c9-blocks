/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

import Icon from "../../../../assets/icon-c9-subheading-enable-toolbar-icon";

/**
 * Control Settings
 */
const DEFAULT_ENABLE_CONTROLS = [
	{
		icon: Icon,
		title: __("Enable Subheading", "c9-blocks"),
		enabled: true
	}
];

/**
 * Create an Subheading Toolbar wrapper Component
 */
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
			label={__("Change Vertical Alignment", "c9-blocks")}
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
