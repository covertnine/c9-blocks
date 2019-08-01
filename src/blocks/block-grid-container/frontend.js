/* eslint-disable no-undef */
function readyYoutube(video_id) {
	if (typeof YT !== "undefined" && YT && YT.Player) {
		// eslint-disable-next-line no-unused-vars
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
		vids[i].style.opacity = 1
	}
}

document.addEventListener("DOMContentLoaded", function() {
	let id = document.getElementById("player");

	if (!id) {
		return;
	}

	id = id.getAttribute("video-id");

	// create the player and replace the div

	readyYoutube(id);
});
