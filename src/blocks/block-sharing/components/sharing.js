/**
 * Sharing Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

const { applyFilters } = wp.hooks;

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
