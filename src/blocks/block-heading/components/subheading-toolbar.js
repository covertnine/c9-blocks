/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToolbarGroup, ToolbarButton } = wp.components;

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
		<ToolbarGroup
			label={__("Subheading", "c9-blocks")}
		>
			{enableControls.map(control => {
				const { enabled } = control;
				return <ToolbarButton
					{...control}
					isActive={value === enabled}
					onClick={applyOrUnset(enabled)}
				/>
			})}
		</ToolbarGroup>
	);
}

export default SubheadingToolbar;
