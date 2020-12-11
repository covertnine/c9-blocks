/* eslint-disable no-undef */

/**
 * Block Frontend
 */

function readyYoutube(playerID, videoID) {
	if (YT && YT.Player) {
		// eslint-disable-next-line no-unused-vars
		let player = new YT.Player(playerID, {
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
				// eslint-disable-next-line camelcase
				iv_load_policy: 3,
				rel: 0,
				modestbranding: 1,
				playlist: videoID
			},
			videoId: videoID,
			events: {
				onReady: onPlayerReady,
				onError: onPlayerError,
			}
		});
	} else {
		setTimeout(function() {
			readyYoutube(playerID, videoID);
		}, 100);
	}
}

// API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.mute();
	event.target.playVideo();

	// this .c9-video element -> .c9-embed-container -> .c9-video-container
	// console.log(event.target)
	event.target.getIframe().parentNode.parentNode.style.opacity = 1;
}

// API will call this function if the video player has an error.
function onPlayerError(data) {
	console.log('The YouTube IFrame Player API fired an onError event with error code: ' + data.data);
	const iframe = data.target.getIframe();
	iframe.parentNode.parentNode.style.opacity = 0;
	// The error still flashes for a split second, can't stop it but let's atleast make it less jarring:
	iframe.parentNode.parentNode.style.transition = '300ms';
	// In case you want to target it with css:
	iframe.parentNode.parentNode.dataset.c9VideoContainerError = data.data;
}

document.addEventListener("DOMContentLoaded", function() {
	let embeds = document.getElementsByClassName("c9-video");
	for (let i = 0; i < embeds.length; i++) {
		let playerID = embeds[i].getAttribute("id");
		let id = embeds[i].getAttribute("video-id");
		readyYoutube(playerID, id);
	}

	// if video custom elements are present
	const $ = window.jQuery;

	$(".c9-video-container").each(function() {
		const self = this;
		const check = $(".c9-video-custom", this).length;
		if (0 < check) {
			$(".c9-video-custom", this).on("canplay", function() {
				$(self).css({ opacity: 1 });
			});
		}
	});
});
