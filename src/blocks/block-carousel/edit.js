/**
 * Internal dependencies
 */
import Inspector from "./components/inspector";
import RemoveButton from "./components/remove-button";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const { IconButton, Tooltip } = wp.components;

const { RichText, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;

const { applyFilters } = wp.hooks;

const { select, dispatch } = wp.data;

const { withInstanceId } = wp.compose;

// External Dependencies.
import classnames from "classnames";

class Edit extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			setAttributes,
			updateBlockAttributes,
			isSelectedBlockInRoot,
			block,
			className = "",
			clientId,
			instanceId
		} = this.props;

		const {} = attributes;

		if (instanceId != attributes.instanceId) {
			setAttributes({ instanceId });

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
				<div className={applyFilters("c9-blocks.blocks.className", className)}>
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="0"
								className="active"
							/>
							<li data-target="#carouselExampleIndicators" data-slide-to="1" />
							<li data-target="#carouselExampleIndicators" data-slide-to="2" />
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
							<div className="carousel-item">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
							<div className="carousel-item">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withInstanceId(Edit);
