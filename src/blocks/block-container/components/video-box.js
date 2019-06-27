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
	}

	canPlay() {
		if (this.videoRef && this.videoRef.current) {
			// console.log(this.videoRef.current);

			let element = this.videoRef.current;
			element.style.opacity = 1;
		}
	}

	render() {
		const {
			attributes: {
				verticalAlign,
				containerImgURL,
				containerImgID,
				containerWidth,
				bgImgSize,
				bgImgAttach,
				overlayHue,
				overlayOpacity,
				bgImgPosX,
				bgImgPosY,
				blendMode,
				containerPadding,
				columns,
				minScreenHeight,
				focalPoint,
				videoType,
				containerVideoURL,
				cannotEmbed,
				previewHTML
			},
			setAttributes
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
				<div
					id="player"
					video-url={containerVideoURL}
					style={cortexVideoStyles(
						videoType,
						containerVideoURL,
						minScreenHeight
					)}
				/>
			);
		}
	}
}
