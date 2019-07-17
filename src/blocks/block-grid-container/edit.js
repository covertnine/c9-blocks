/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const { IconButton, Tooltip } = wp.components;

const { RichText, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;

// External Dependencies.
import classnames from "classnames";

export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		return (
			<Fragment>
				<BlockControls>
				</BlockControls>

				<Inspector {...this.props} />
			</Fragment>
		);
	}
}
