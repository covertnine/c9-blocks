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
	constructor(props) {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			attributes: { heading, subheading, wrapper, type, level, textAlign, weight }
		} = this.props;

		const className = classnames(["section-heading"]);

		return (
			// <div className={className ? className : undefined}>
			<div className={classnames([`${type}${level}`, `font-weight-${weight}`])} style={{ textAlign }}>
				{this.props.children}
			</div>
		);
	}
}
