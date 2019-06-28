function onYouTubeIframeAPIReady() {
	console.log("ts");
}

function readyYoutube(video_id) {
	if (typeof YT !== "undefined" && YT && YT.Player) {
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

    event.target.getIframe().style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function() {
	let vid = document.getElementById("containerVideo");
	if (vid) {
		vid.style.opacity = 1;
	}

    let url = document.getElementById("player").getAttribute("video-url");
    
    console.log(url);

	let video_id = url.split("v=")[1];
	let ampersandPosition = video_id.indexOf("&");
	if (ampersandPosition != -1) {
		video_id = video_id.substring(0, ampersandPosition);
	}

	console.log(video_id);

	// create the player and replace the div

	function onYouTubeIframeAPIReady() {
		console.log("ts");
	}

	readyYoutube(video_id);
});
