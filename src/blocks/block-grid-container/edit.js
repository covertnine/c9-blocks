/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import Container from "./components/container";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const { Toolbar } = wp.components;

const { InnerBlocks, BlockControls } = wp.editor;

const ALLOWED_BLOCKS = ["c9-blocks/column-container"];

export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: { verticalAlign },
			setAttributes
		} = this.props;

		const verticalAlignControls = [
			{
				icon: "arrow-up-alt2",
				title: __("Vertical Align Top", "c9-blocks"),
				isActive: verticalAlign === "flex-start",
				onClick: () => setAttributes({ verticalAlign: "flex-start" })
			},
			{
				icon: "minus",
				title: __("Vertical Align Bottom", "c9-blocks"),
				isActive: verticalAlign === "center",
				onClick: () => setAttributes({ verticalAlign: "center" })
			},
			{
				icon: "arrow-down-alt2",
				title: __("Vertical Align Middle", "c9-blocks"),
				isActive: verticalAlign === "flex-end",
				onClick: () => setAttributes({ verticalAlign: "flex-end" })
			}
		];

		return (
			<Fragment>
				<BlockControls key="controls">
					<Toolbar controls={verticalAlignControls} />
				</BlockControls>
				<Inspector {...this.props} />

				<Container {...this.props}>
					<InnerBlocks
						template={[["c9-blocks/column-container"]]}
						templateLock="all"
						allowedBlocks={ALLOWED_BLOCKS}
					/>
				</Container>
			</Fragment>
		);
	}
}
