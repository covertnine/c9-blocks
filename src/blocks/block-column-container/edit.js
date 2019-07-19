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
			attributes: { verticalAlign, containerWidth },
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

		const widthControls = [
			{
				icon: "align-center",
				title: __("Narrow Width", "c9-blocks"),
				isActive: containerWidth === "container-narrow",
				onClick: () => setAttributes({ containerWidth: "container-narrow" })
			},
			{
				icon: "align-wide",
				title: __("Wide Width", "c9-blocks"),
				isActive: containerWidth === "container",
				onClick: () => setAttributes({ containerWidth: "container" })
			},
			{
				icon: "align-full-width",
				title: __("Full Width", "c9-blocks"),
				isActive: containerWidth === "container-fluid",
				onClick: () => setAttributes({ containerWidth: "container-fluid" })
			}
		];

		return (
			<Fragment>
				<BlockControls key="controls">
					<Toolbar controls={widthControls} />
					<Toolbar controls={verticalAlignControls} />
				</BlockControls>
				<Inspector {...this.props} />

				<Container {...this.props}>
					<p>stuff</p>
				</Container>
			</Fragment>
		);
	}
}
