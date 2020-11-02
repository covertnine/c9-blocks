/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;
const { useBlockProps } = wp.blockEditor;

/**
 * External Dependencies.
 */
import classnames from "classnames";

/**
 * Create a C9CustomHeading wrapper Component
 */
export default class C9CustomHeading extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: { textAlign, anchor },
			className = ""
		} = this.props;

		return (
			<div
				{...useBlockProps.save()}
				className={classnames(
					"section-heading",
					applyFilters("c9-blocks.blocks.className", className),
					textAlign ? `text-${textAlign}` : "text-left"
				)}
				style={{ backgroundColor: this.props.attributes.backgroundColor }}
				id={anchor ? anchor : null}
			>
				{this.props.children}
			</div>
		);
	}
}
