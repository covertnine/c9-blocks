// External Dependencies.
import classnames from "classnames";

const { applyFilters } = wp.hooks;

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText, InnerBlocks } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			tabActive,
			buttonsAlign,
			tabsData = [],
			tabBackgroundColor,
			tabTextColor,
			tabContentBackgroundColor,
			blockBackgroundColor,
			instanceId
		} = this.props.attributes;

		const { className = "" } = this.props;

		return [
			<div
				className={applyFilters("c9-blocks.blocks.className", className)}
			>
			</div>
		];
	}
}