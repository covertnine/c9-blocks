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
		const { className = "" } = this.props;

		return (
			<div
				className={classnames(
					applyFilters("c9-blocks.blocks.className", className),
					this.props.attributes.shareButtonStyle,
					this.props.attributes.shareButtonShape,
					this.props.attributes.shareButtonSize,
					this.props.attributes.shareButtonColor,
					this.props.attributes.shareAlignment,
					"ab-block-sharing"
				)}
			>
				{this.props.children}
			</div>
		);
	}
}
