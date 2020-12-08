/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { ToolbarGroup, ToolbarButton } = wp.components;

/**
 * External dependencies
 */
import range from "lodash/range";

/**
 * Create a HeadingToolbar wrapper Component
 */
class HeadingToolbar extends Component {
	createLevelControl(targetLevel, selectedLevel, onChange) {
		return <ToolbarButton
			icon={"heading"}
			// translators: %s: heading level e.g: "1", "2", "3"
			title={sprintf(__("Heading %d"), targetLevel)}
			isActive={targetLevel === selectedLevel}
			onClick={() => onChange(targetLevel)}
			subscript={String(targetLevel)}
		/>;
	}

	render() {
		const {
			minLevel,
			maxLevel,
			selectedLevel,
			onChange,
			isCollapsed = true
		} = this.props;

		return (
			<ToolbarGroup
				isCollapsed={false}
				icon="heading"
			>
				{range(minLevel, maxLevel).map(index =>
					this.createLevelControl(index, selectedLevel, onChange)
				)}
			</ToolbarGroup>
		);
	}
}

export default HeadingToolbar;
