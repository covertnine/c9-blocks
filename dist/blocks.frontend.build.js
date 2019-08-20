/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function() {
	const $ = window.jQuery;

	$(".c9-toggles-toggle:not(.toggle-collapse-ready)").each(function() {
		const $this = $(this);
		$this.addClass("toggle-collapse-ready");

		// grab collapse id
		const id = $(".c9-toggles-item-content.collapse", this).attr("id");

		// grab rotate arrow id
		const iconId = $(".c9-toggles-item-heading", this).attr("id");

		// insert hook into collapse and expand event
		$(`#${id}`).on("show.bs.collapse", () => {
			$(`#${iconId} span.c9-toggles-item-collapse > svg`).toggleClass(
				"c9-toggle-item-expand"
			);
		});
		$(`#${id}`).on("hide.bs.collapse", () => {
			$(`#${iconId} span.c9-toggles-item-collapse > svg`).toggleClass(
				"c9-toggle-item-expand"
			);
		});
	});
});


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_block_toggles_frontend_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_block_toggles_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__blocks_block_toggles_frontend_js__);
/**
 * Gutenberg Blocks Frontend JS
 *
 * All blocks frontend related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */




/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* eslint-disable no-undef */
function readyYoutube(player_id, video_id) {
	if (YT && YT.Player) {
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
		setTimeout(function() {
			readyYoutube(player_id, video_id);
		}, 100);
	}
}

// API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.mute();
	event.target.playVideo();

	// this .c9-video element -> .c9-embed-container -> .c9-video-container
	event.target.a.parentNode.parentNode.style.opacity = 1;
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


/***/ })

/******/ });