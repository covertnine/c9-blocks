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
 * Internal Dependencies.
 */
import { initDataAttributes } from "../../../components/animations-panel/utils";

/**
 * Create a C9CustomHeading wrapper Component
 */
export default class C9CustomHeading extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			attributes: { textAlign, anchor },
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
				id={anchor ? anchor : null}
				{...initDataAttributes(attributes)}
			>
				{this.props.children}
			</div>
		);
	}
}
