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
			attributes: { ver },
			className = ""
		} = this.props;
		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					"accordion"
				)}
				id={`accordion-${ver}`}
			>
				<InnerBlocks.Content />
			</div>
		);
	}
}
