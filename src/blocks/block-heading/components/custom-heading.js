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
			attributes: {
				textAlign,
				anchor,
				enableAnimate,
				animateVal,
				animateDelay,
				animateSpeed
			},
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
				data-animate={enableAnimate ? animateVal : null}
				data-animate-delay={enableAnimate ? animateDelay : null}
				data-animate-speed={enableAnimate ? animateSpeed : null}
			>
				{this.props.children}
			</div>
		);
	}
}
