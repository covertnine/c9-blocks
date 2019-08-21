/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";

import memoize from "memize";
import times from "lodash/times";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

const { InnerBlocks, BlockControls } = wp.editor;

const { applyFilters } = wp.hooks;

const { withInstanceId } = wp.compose;

const ALLOWED_BLOCKS = ["c9-blocks/carousel-slide"];

// External Dependencies.
import classnames from "classnames";

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	getSlidesTemplate = memoize(slides => {
		let templates = times(slides, () => ["c9-blocks/carousel-slide"]);

		templates[0].push({slideActive: true});

		return templates;
	});

	render() {
		const {
			attributes,
			setAttributes,
			updateBlockAttributes,
			block,
			className = "",
			instanceId
		} = this.props;

		const { autoSlide, slides } = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });

			// eslint-disable-next-line no-unused-vars
			for (let child of block.innerBlocks) {
				if (instanceId != child.attributes.id) {
					updateBlockAttributes(child.clientId, { id: instanceId });
				}
			}
		}

		return (
			<Fragment>
				<BlockControls />

				<Inspector {...this.props} />
				<div
					id={`c9-carousel-indicator-${instanceId}`}
					className={classnames(
						applyFilters("c9-blocks.blocks.className", className),
						"carousel slide"
					)}
					data-ride="carousel"
					data-interval={autoSlide ? 5000 : false}
				>
					<div className="carousel-inner">
						<InnerBlocks
							className="test"
							template={this.getSlidesTemplate(slides)}
							templateLock="all"
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
