
/**
 * Internal dependencies
 */
import ResizableContainer from "./components/resizable-container";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

/**
 * External dependencies
 */
import classnames from "classnames";

export default class Save extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: { columnsGap, responsiveToggle, flipColumnsMobile, columnMaxWidth }
		} = this.props;

		return (
			<ResizableContainer {...this.props}>
				<div
					className={classnames(
						"c9-layout-column-wrap",
						"c9-block-layout-column-gap-" + columnsGap,
						responsiveToggle ? "c9-is-responsive-column" : null,
						flipColumnsMobile ? "c9-mobile-flip" : null
					)}
					style={{
						maxWidth: columnMaxWidth ? columnMaxWidth : null
					}}
				>
					<InnerBlocks.Content />
				</div>
			</ResizableContainer>
		);
	}
}
