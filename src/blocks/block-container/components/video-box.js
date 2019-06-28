/**
 * Internal block libraries
 */
// import CustomRadio from './custom-radio';

import React from "react";
const { Component } = wp.element;

import WpEmbedPreview from "./wp-embed-preview";

/**
 * Create an VideoBox Controls wrapper Component
 */
export default class VideoBox extends Component {
	constructor() {
		super(...arguments);
		this.videoRef = React.createRef();
		this.canPlay = this.canPlay.bind(this);
		this.setYoutube = this.setYoutube.bind(this);

		const {
			attributes: { containerVideoURL, preview },
			setAttributes
		} = this.props;

		this.containerVideoURL = containerVideoURL;
		this.setAttributes = setAttributes;
		this.preview = preview;
	}

	setYoutube() {
		if (!this.containerVideoURL || window.YT) {
			return;
		}

		let video_id = this.containerVideoURL.split("v=")[1];
		let ampersandPosition = video_id.indexOf("&");
		if (ampersandPosition != -1) {
			video_id = video_id.substring(0, ampersandPosition);
		}

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
	componentDidMount () {
		const {
			attributes: { preview }
		} = this.props;

		let loadYT = window.YT;
		if (loadYT && !preview.i) {
			let video_id = this.containerVideoURL.split("v=")[1];
			let ampersandPosition = video_id.indexOf("&");
			if (ampersandPosition != -1) {
				video_id = video_id.substring(0, ampersandPosition);
			}

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
			}
		} = this.props;

		const cortexVideoStyles = (
			videoType,
			containerVideoURL,
			minScreenHeight
		) => {
			const styles = {};
			styles.opacity = 0;
			styles.transition = "5000ms";
			styles.width = "100%";

			styles.position = "absolute";
			styles.left = 0;
			styles.top = 0;
			styles.minHeight = `${minScreenHeight}vh`;

			return styles;
		};

		if (containerVideoURL && videoType == "upload") {
			return (
				<video
					id="containerVideo"
					playsinline="playsinline"
					autoPlay="autoplay"
					muted="muted"
					loop="loop"
					onCanPlayThrough={this.canPlay}
					ref={this.videoRef}
					style={cortexVideoStyles(
						videoType,
						containerVideoURL,
						minScreenHeight
					)}
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
						video-url={containerVideoURL}
						style={cortexVideoStyles(
							videoType,
							containerVideoURL,
							minScreenHeight
						)}
					/>
				</div>
			);
		}
	}
}
