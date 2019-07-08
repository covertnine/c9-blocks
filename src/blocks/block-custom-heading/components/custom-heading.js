/**
 * CTA Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a C9CustomHeading wrapper Component
 */
export default class C9CustomHeading extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		// const {
		// 	attributes: { heading, subheading, wrapper, type, displayLevel, textAlign, weight }
		// } = this.props;

		const className = classnames(["section-heading"]);

		return (
			// <div className={className ? className : undefined}>
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}
