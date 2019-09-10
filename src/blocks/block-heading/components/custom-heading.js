/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;

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
			attributes: { textAlign },
			className = ""
		} = this.props;

		return (
			<div
				className={classnames(
					"section-heading",
					applyFilters("c9-blocks.blocks.className", className),
					textAlign ? `text-${textAlign}` : "text-left"
				)}
				style={{ backgroundColor: this.props.attributes.backgroundColor }}
			>
				{this.props.children}
			</div>
		);
	}
}
