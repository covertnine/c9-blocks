/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

/**
 * External Dependencies.
 */
import React from 'react';
import DOMPurify from 'dompurify'; // Import for sanitization

/**
 * Create a VideoBox Controls wrapper Component
 */
export default class VideoBox extends Component {
	constructor() {
		super(...arguments);
		this.videoRef = React.createRef();
		this.videoContainerRef = React.createRef();

		const {
			attributes: { containerVideoURL, preview, containerVideoID },
			setAttributes,
		} = this.props;

		this.containerVideoURL = DOMPurify.sanitize(containerVideoURL); // Sanitize URL
		this.containerVideoID = DOMPurify.sanitize(containerVideoID); // Sanitize ID
		this.setAttributes = setAttributes;
		this.preview = preview;

		this.canPlay = this.canPlay.bind(this);
		this.setYoutube = this.setYoutube.bind(this);
		this.onPlayerReady = this.onPlayerReady.bind(this);
	}

	setYoutube() {
		let { instanceId } = this.props.attributes;

		if (instanceId === undefined) {
			// Set default random id if not set
			instanceId = this.props.instanceId;
		}

		if (!this.containerVideoID) {
			return;
		}

		let videoID = this.containerVideoID;
		let sanitizedInstanceId = DOMPurify.sanitize(instanceId);

		let loadYT = window.YT;

		if (!loadYT) {
			loadYT = new Promise((resolve) => {
				const tag = document.createElement('script');
				tag.src = 'https://www.youtube.com/player_api';
				const firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				window.onYouTubeIframeAPIReady = () => resolve(window.YT);
			});
			loadYT.then((YT) => {
				let player = new YT.Player(`player-${videoID}-${sanitizedInstanceId}`, {
					playerVars: {
						autoplay: 1,
						controls: 0,
						disablekb: 0,
						autohide: 1,
						wmode: 'opaque',
						hd: 1,
						enablejsapi: 1,
						loop: 1,
						showinfo: 0,
						iv_load_policy: 3,
						rel: 0,
						modestbranding: 1,
						playlist: videoID,
					},
					videoId: videoID,
					events: {
						onReady: this.onPlayerReady,
					},
				});
				this.setAttributes({ preview: player });
				this.preview = player;
			});
		} else {
			let player = new loadYT.Player(`player-${videoID}-${sanitizedInstanceId}`, {
				playerVars: {
					autoplay: 1,
					controls: 0,
					disablekb: 0,
					autohide: 1,
					wmode: 'opaque',
					hd: 1,
					enablejsapi: 1,
					loop: 1,
					showinfo: 0,
					iv_load_policy: 3,
					rel: 0,
					modestbranding: 1,
					playlist: videoID,
				},
				videoId: videoID,
				events: {
					onReady: this.onPlayerReady,
				},
			});

			this.setAttributes({ preview: player });
			this.preview = player;
		}
	}

	// API will call this function when the video player is ready.
	onPlayerReady(event) {
		event.target.mute();

		if (this.videoContainerRef.current) {
			this.videoContainerRef.current.style.opacity = 1;
		}
	}

	canPlay() {
		if (this.videoContainerRef.current) {
			this.videoContainerRef.current.style.opacity = 1;
		}
	}

	componentDidMount() {
		const init = this.setYoutube;
		setTimeout(() => init(), 500);
	}

	render() {
		const {
			attributes: {
				minScreenHeight,
				videoType,
				containerVideoURL,
				containerVideoID,
				instanceId,
			},
		} = this.props;

		const sanitizedVideoURL = DOMPurify.sanitize(containerVideoURL); // Sanitize video URL
		const sanitizedInstanceId = DOMPurify.sanitize(instanceId);
		const sanitizedVideoID = DOMPurify.sanitize(containerVideoID);

		const c9VideoStyles = (videoType, containerVideoURL, minScreenHeight) => {
			const styles = {};
			styles.minHeight = `${DOMPurify.sanitize(minScreenHeight)}vh`;
			return styles;
		};

		if (sanitizedVideoURL && 'upload' === videoType) {
			return (
				<div
					className="c9-video-container d-none d-sm-block"
					ref={this.videoContainerRef}
				>
					<div className="c9-embed-container">
						<video
							id={`containerVideo-${sanitizedInstanceId}`}
							className="c9-video-custom"
							playsInline
							autoPlay
							muted
							loop
							onCanPlayThrough={this.canPlay}
							ref={this.videoRef}
							style={c9VideoStyles(videoType, sanitizedVideoURL, minScreenHeight)}
						>
							<source src={`${sanitizedVideoURL}`} type="video/mp4" />
						</video>
					</div>
				</div>
			);
		} else {
			return (
				<div
					className="c9-video-container d-none d-sm-block"
					ref={this.videoContainerRef}
				>
					<div className="c9-embed-container">
						<div
							id={`player-${sanitizedVideoID}-${sanitizedInstanceId}`}
							className="c9-video"
							video-id={sanitizedVideoID}
							style={c9VideoStyles(videoType, sanitizedVideoURL, minScreenHeight)}
						/>
					</div>
				</div>
			);
		}
	}
}