
/**
 * Internal dependencies
 */
import Container from "./components/container";

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
			attributes: { columnsGap, responsiveToggle, columnMaxWidth }
		} = this.props;

		return (
			<Container {...this.props} save={true}>
				<div
					className={classnames(
						"c9-layout-column-wrap",
						"c9-block-layout-column-gap-" + columnsGap,
						responsiveToggle ? "c9-is-responsive-column" : null
					)}
					style={{
						maxWidth: columnMaxWidth ? columnMaxWidth : null
					}}
				>
					<InnerBlocks.Content />
				</div>
			</Container>
		);
	}
}
