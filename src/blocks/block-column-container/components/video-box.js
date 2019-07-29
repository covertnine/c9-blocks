/**
 * Internal block libraries
 */
// import CustomRadio from './custom-radio';

import React from "react";
const { Component } = wp.element;

/**
 * Create an VideoBox Controls wrapper Component
 */
export default class VideoBox extends Component {
	constructor() {
		super(...arguments);
		this.videoRef = React.createRef();

		const {
			attributes: { containerVideoURL, preview, containerVideoID },
			setAttributes
		} = this.props;

		this.containerVideoURL = containerVideoURL;
		this.containerVideoID = containerVideoID;
		this.setAttributes = setAttributes;
		this.preview = preview;

		this.canPlay = this.canPlay.bind(this);
		this.setYoutube = this.setYoutube.bind(this);
	}

	setYoutube() {
		if (!this.containerVideoID || window.YT) {
			return;
		}

		let video_id = this.containerVideoID;

		let loadYT = window.YT;

		if (!loadYT) {
			loadYT = new Promise(resolve => {
				const tag = document.createElement("script");
				tag.src = "https://www.youtube.com/iframe_api";
				const firstScriptTag = document.getElementsByTagName("script")[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				window.onYouTubeIframeAPIReady = () => resolve(window.YT);
			});
			loadYT.then(YT => {
				let player = new YT.Player("player", {
					playerVars: {
						autoplay: 1,
						controls: 0,
						disablekb: 0,
						autohide: 1,
						wmode: "opaque",
						hd: 1,
						enablejsapi: 1,
						loop: 1,
						showinfo: 0,
						iv_load_policy: 3,
						rel: 0,
						playlist: video_id,
						playsinline: 1,
						modestbranding: 1
					},
					videoId: video_id,
					events: {
						onReady: this.onPlayerReady
					}
				});
				this.setAttributes({ preview: player });
			});
		}
	}

	// API will call this function when the video player is ready.
	onPlayerReady(event) {
		event.target.mute();

		event.target.getIframe().style.opacity = 1;
	}

	canPlay() {
		if (this.videoRef && this.videoRef.current) {
			// console.log(this.videoRef.current);

			let element = this.videoRef.current;
			element.style.opacity = 1;
		}
	}
	componentDidMount() {
		const {
			attributes: { preview }
		} = this.props;

		let loadYT = window.YT;
		if (loadYT && (!preview || !preview.i)) {
			let video_id = this.containerVideoID;

			let player = new loadYT.Player("player", {
				playerVars: {
					autoplay: 1,
					controls: 0,
					disablekb: 0,
					autohide: 1,
					wmode: "opaque",
					hd: 1,
					enablejsapi: 1,
					loop: 1,
					showinfo: 0,
					iv_load_policy: 3,
					rel: 0,
					playlist: video_id,
					playsinline: 1,
					modestbranding: 1
				},
				videoId: video_id,
				events: {
					onReady: this.onPlayerReady
				}
			});

			this.setAttributes({ preview: player });
			this.preview = player;
		}
	}

	render() {
		const {
			attributes: {
				minScreenHeight,
				videoType,
				containerVideoURL,
				containerVideoID
			}
		} = this.props;

		const c9VideoStyles = (videoType, containerVideoURL, minScreenHeight) => {
			const styles = {};
			styles.minHeight = `${minScreenHeight}vh`;

			return styles;
		};

		if (containerVideoURL && videoType == "upload") {
			return (
				// eslint-disable-next-line jsx-a11y/media-has-caption
				<video
					id="containerVideo"
					className="c9-video"
					playsinline="playsinline"
					autoPlay="autoplay"
					muted="muted"
					loop="loop"
					onCanPlayThrough={this.canPlay}
					ref={this.videoRef}
					style={c9VideoStyles(videoType, containerVideoURL, minScreenHeight)}
				>
					<source src={`${containerVideoURL}`} type="video/mp4" />
				</video>
			);
		} else {
			// return <WpEmbedPreview html={previewHTML} />;
			return (
				<div dangerouslySetInnerHTML={this.setYoutube()}>
					<div
						id="player"
						className="c9-video"
						video-id={containerVideoID}
						style={c9VideoStyles(videoType, containerVideoURL, minScreenHeight)}
					/>
				</div>
			);
		}
	}
}
