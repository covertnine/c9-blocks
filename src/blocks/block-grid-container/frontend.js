/* eslint-disable no-undef */
function readyYoutube(player_id, video_id) {
	if (typeof YT !== "undefined" && YT && YT.Player) {
		// eslint-disable-next-line no-unused-vars
		let player = new YT.Player(player_id, {
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
				modestbranding: 1,
				playlist: video_id
			},
			videoId: video_id,
			events: {
				onReady: onPlayerReady
			}
		});
	} else {
		setTimeout(readyYoutube, 100);
	}
}

// API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.mute();

	let vids = document.getElementsByClassName("c9-video-container");
	for (let i = 0; i < vids.length; i++) {
		vids[i].style.opacity = 1;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let embeds = document.getElementsByClassName("c9-video");
	for (let i = 0; i < embeds.length; i++) {
		let player_id = embeds[i].getAttribute("id");
		let id = embeds[i].getAttribute("video-id");
		readyYoutube(player_id, id);
	}

	// if video custom elements are present
	const $ = window.jQuery;

	$(".c9-video-container").each(function() {
		const self = this;
		const check = $(".c9-video-custom", this).length;
		if (check > 0) {
			$(".c9-video-custom", this).on("canplay", function() {
				$(self).css({ opacity: 1 });
			});
		}
	});
});
