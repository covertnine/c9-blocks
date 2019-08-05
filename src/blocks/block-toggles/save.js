import classnames from "classnames";
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;

const { InnerBlocks } = wp.editor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { className = "" } = this.props;
		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					"accordion"
				)}
				id={`accordion-${this.props.attributes.instanceId}`}
			>
				<InnerBlocks.Content />
			</div>
		);
	}
}
