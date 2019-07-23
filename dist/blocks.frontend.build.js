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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_block_tabs_frontend_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_block_tabs_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__blocks_block_tabs_frontend_js__);
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
/* 3 */
/***/ (function(module, exports) {

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

	let id = document.getElementById("player");
	
	if (!id) {
		return;
	}

	id = id.getAttribute("video-id");

	// create the player and replace the div

	readyYoutube(id);
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function() {
	const $ = window.jQuery;

	const pageHash = window.location.hash;

	$(".tabs:not(.tabs-ready)").each(function() {
		const $this = $(this);
		const tabsActive = $this.attr("data-tab-active");

		// pageHash

		$this.addClass("tabs-ready");

		// click action
		$this.on("click", ".tabs-buttons-item", function(e) {
			e.preventDefault();

			const $thisBtn = $(this);
			const tabName = $thisBtn.attr("data-tab") || this.hash;

			activateTab($this, tabName);
		});

		// activate by page hash
		let tabActivated = false;
		if (pageHash) {
			tabActivated = activateTab($this, pageHash);
		}

		if (!tabActivated && tabsActive) {
			tabActivated = activateTab($this, `#${tabsActive}`);
		}
	});
});

function activateTab($tabs, tabName) {
	let $activeBtn = false;
	const $activeTab = $tabs
		.children(".tabs-content")
		.children(`[data-tab="${tabName.replace(/^#/, "")}"]`);

	$activeBtn = $tabs.find(".tabs-buttons").find(`[href="${tabName}"]`);

	if (!$activeBtn || !$activeBtn.length || !$activeTab.length) {
		return false;
	}

	$activeBtn
		.addClass("tabs-buttons-item-active")
		.siblings()
		.removeClass("tabs-buttons-item-active");

	$activeTab
		.addClass("tab-active")
		.siblings()
		.removeClass("tab-active");

	return true;
}


/***/ })
/******/ ]);