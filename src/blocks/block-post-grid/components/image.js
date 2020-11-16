/* eslint-disable react/jsx-no-target-blank */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const { Placeholder, Dashicon } = wp.components;

/**
 * External Dependencies.
 */
import get from "lodash/get";
import classnames from "classnames";

/**
 * Create a PostGridImage wrapper Component
 */
export default class PostGridImage extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			imageUrl: "",
			imageLoaded: false
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.imgSize !== prevProps.imgSize) {
			this.setImageUrl();
		}
	}

	componentDidMount() {
		/**
		 * Set the image URL on load and when state changes.
		 */
		wp.data.subscribe(() => {
			this.setImageUrl();
		});
	}

	setImageUrl() {
		let imageUrl = this.getImageUrl();

		if (!imageUrl) {
			imageUrl = this.getFullImageSize();
		}

		if (imageUrl) {
			this.setState({
				imageUrl,
				imageLoaded: true
			});
		}
	}

	getImageUrl() {
		return get(
			/* getMedia accepts an image id and returns an object with all the image data. */
			this.props.getMedia(this.props.imgID),
			[
				"media_details",
				"sizes",
				this.props.imgSize /* Get the image slug from the inspector. */,
				"source_url" /* Return the url of the image size. */
			]
			/* A default image url can be passed here. */
		);
	}

	/* Get the full image size value as a placeholder. */
	getFullImageSize() {
		return get(
			/* getMedia accepts an image id and returns an object with all the image data. */
			this.props.getMedia(this.props.imgID),
			[
				"media_details",
				"sizes",
				"full" /* Get the full image size. */,
				"source_url" /* Return the url of the full image size. */
			]
		);
	}

	render() {
		return (
			<Fragment>
				<div className={classnames("c9-block-post-grid-image")}>
					<a href={this.props.imgLink} target="_blank" rel="bookmark">
						<img
							src={
								this.state.imageUrl
									? this.state.imageUrl
									: this.props.imgSizeLandscape
							}
							alt={this.props.imgAlt}
							className={this.props.imgClass}
						/>
					</a>

					{/* If we don't have the selected image size, show a warning */
					!this.getImageUrl() &&
						this.state.imageLoaded &&
						"selectimage" !== this.props.imgSize && (
							<Fragment>
								<div className={"c9-post-grid-no-image-icon"}>
									<Dashicon icon={"warning"} />
								</div>

								<Placeholder className={"c9-post-grid-no-image-placeholder"}>
									<Dashicon icon={"info"} />
									<div className="components-placeholder__label">
										{__(
											"There is no image generated for the selected image size, so a fallback image size is being used.",
											"c9-blocks"
										)}
									</div>
									<div className="c9-post-grid-image-help">
										<a
											target="_blank"
											rel="noreferrer noopener"
											aria-label={__(
												"Learn more about image sizes (opens in a new tab)",
												"c9-blocks"
											)}
											href="https://github.com"
										>
											{__("Learn more ", "c9-blocks")}
											<span>&rarr;</span>
										</a>
									</div>
								</Placeholder>
							</Fragment>
						)}
				</div>
			</Fragment>
		);
	}
}
