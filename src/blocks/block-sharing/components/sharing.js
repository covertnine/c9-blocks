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
 * Create a ShareLinks wrapper Component
 */
export default class ShareLinks extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: {
				shareButtonStyle,
				shareButtonShape,
				shareButtonSize,
				shareButtonColor,
				shareAlignment
			},
			className = ""
		} = this.props;

		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					shareButtonStyle,
					shareButtonShape,
					shareButtonSize,
					shareButtonColor,
					shareAlignment,
					"c9-block-sharing"
				)}
			>
				{this.props.children}
			</div>
		);
	}
}
