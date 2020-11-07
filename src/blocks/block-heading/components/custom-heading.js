/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;
const { useBlockProps } = wp.blockEditor;
const { getBlockType } = wp.blocks;

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

		const extraProps = useBlockProps
			? useBlockProps.save()
			: applyFilters(
					"blocks.getSaveContent.extraProps",
					this.props,
					getBlockType("c9-blocks/heading"),
					this.props.attributes
			  );

		return (
			<div
				{...extraProps}
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
