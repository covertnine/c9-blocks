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
		const {
			attributes: { reverseToggle },
			className = ""
		} = this.props;
		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					"accordion",
					reverseToggle ? "c9-toggles-reverse" : null
				)}
				id={`accordion-${this.props.attributes.instanceId}`}
			>
				<InnerBlocks.Content />
			</div>
		);
	}
}
