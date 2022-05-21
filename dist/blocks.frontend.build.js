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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/block-grid-container/frontend.js":
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-undef */

/**
 * Block Frontend
 */

function readyManual(playerID, videoID, jQuery) {
	var videoDiv = jQuery("#" + playerID);
	var style = videoDiv.attr("style");
	// create the youtube iframe manually without API
	var youtubeIframe = jQuery("<iframe id=\"" + playerID + "\" class=\"c9-video\" video-id=\"" + videoID + "\" style=\"" + style + "\" frameborder=\"0\" allowfullscreen=\"1\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" title=\"YouTube video player\" src=\"https://www.youtube.com/embed/" + videoID + "?autoplay=1&controls=0&disablekb=0&autohide=1&wmode=opaque&hd=1&loop=1&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&playlist=" + videoID + "&widgetid=1&mute=1\"></iframe>");
	youtubeIframe.on("load", function () {
		this.parentNode.parentNode.style.opacity = 1;
	});
	videoDiv.replaceWith(youtubeIframe);
}

function readyYoutube(playerID, videoID) {
	if (YT && YT.Player) {
		// eslint-disable-next-line no-unused-vars
		var player = new YT.Player(playerID, {
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
				onError: onPlayerError
			}
		});
	} else {
		setTimeout(function () {
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
	console.log("The YouTube IFrame Player API fired an onError event with error code: " + data.data);
	var iframe = data.target.getIframe();
	iframe.parentNode.parentNode.style.opacity = 0;
	// The error still flashes for a split second, can't stop it but let's atleast make it less jarring:
	iframe.parentNode.parentNode.style.transition = "300ms";
	// In case you want to target it with css:
	iframe.parentNode.parentNode.dataset.c9VideoContainerError = data.data;
}

document.addEventListener("DOMContentLoaded", function () {
	var youtubeAPIDisabled = c9_blocks_params.disable_youtube_api === "true";
	var $ = window.jQuery;
	var embeds = document.getElementsByClassName("c9-video");
	for (var i = 0; i < embeds.length; i++) {
		var playerID = embeds[i].getAttribute("id");
		var id = embeds[i].getAttribute("video-id");
		if (youtubeAPIDisabled) {
			readyManual(playerID, id, $);
		} else {
			readyYoutube(playerID, id);
		}
	}

	// if video custom elements are present

	$(".c9-video-container").each(function () {
		var self = this;
		var check = $(".c9-video-custom", this).length;
		if (0 < check) {
			$(".c9-video-custom", this).on("canplay", function () {
				$(self).css({ opacity: 1 });
			});
		}
	});
});

/***/ }),

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_block_grid_container_frontend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/block-grid-container/frontend.js */ "./src/blocks/block-grid-container/frontend.js");
/* harmony import */ var _blocks_block_grid_container_frontend_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_grid_container_frontend_js__WEBPACK_IMPORTED_MODULE_0__);
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanMiXSwibmFtZXMiOlsicmVhZHlNYW51YWwiLCJwbGF5ZXJJRCIsInZpZGVvSUQiLCJqUXVlcnkiLCJ2aWRlb0RpdiIsInN0eWxlIiwiYXR0ciIsInlvdXR1YmVJZnJhbWUiLCJvbiIsInBhcmVudE5vZGUiLCJvcGFjaXR5IiwicmVwbGFjZVdpdGgiLCJyZWFkeVlvdXR1YmUiLCJZVCIsIlBsYXllciIsInBsYXllciIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiYXV0b2hpZGUiLCJ3bW9kZSIsImhkIiwiZW5hYmxlanNhcGkiLCJsb29wIiwic2hvd2luZm8iLCJpdl9sb2FkX3BvbGljeSIsInJlbCIsIm1vZGVzdGJyYW5kaW5nIiwicGxheWxpc3QiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJvbkVycm9yIiwib25QbGF5ZXJFcnJvciIsInNldFRpbWVvdXQiLCJldmVudCIsInRhcmdldCIsIm11dGUiLCJwbGF5VmlkZW8iLCJnZXRJZnJhbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlmcmFtZSIsInRyYW5zaXRpb24iLCJkYXRhc2V0IiwiYzlWaWRlb0NvbnRhaW5lckVycm9yIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwieW91dHViZUFQSURpc2FibGVkIiwiYzlfYmxvY2tzX3BhcmFtcyIsImRpc2FibGVfeW91dHViZV9hcGkiLCIkIiwid2luZG93IiwiZW1iZWRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsImVhY2giLCJzZWxmIiwiY2hlY2siLCJjc3MiXSwibWFwcGluZ3MiOiI7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K0IsU0FBL0IsRUFBMEMsWUFBVztBQUNwRDhDLE1BQUVTLElBQUYsRUFBUUUsR0FBUixDQUFZLEVBQUV2RCxTQUFTLENBQVgsRUFBWjtBQUNBLElBRkQ7QUFHQTtBQUNELEVBUkQ7QUFTQSxDQXpCRCxFOzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYmxvY2tzLmZyb250ZW5kLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZnJvbnRlbmQuanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vKipcbiAqIEJsb2NrIEZyb250ZW5kXG4gKi9cblxuZnVuY3Rpb24gcmVhZHlNYW51YWwocGxheWVySUQsIHZpZGVvSUQsIGpRdWVyeSkge1xuXHRjb25zdCB2aWRlb0RpdiA9IGpRdWVyeShgIyR7cGxheWVySUR9YCk7XG5cdGNvbnN0IHN0eWxlID0gdmlkZW9EaXYuYXR0cihcInN0eWxlXCIpO1xuXHQvLyBjcmVhdGUgdGhlIHlvdXR1YmUgaWZyYW1lIG1hbnVhbGx5IHdpdGhvdXQgQVBJXG5cdGxldCB5b3V0dWJlSWZyYW1lID0galF1ZXJ5KFxuXHRcdGA8aWZyYW1lIGlkPVwiJHtwbGF5ZXJJRH1cIiBjbGFzcz1cImM5LXZpZGVvXCIgdmlkZW8taWQ9XCIke3ZpZGVvSUR9XCIgc3R5bGU9XCIke3N0eWxlfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj1cIjFcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lEfT9hdXRvcGxheT0xJmNvbnRyb2xzPTAmZGlzYWJsZWtiPTAmYXV0b2hpZGU9MSZ3bW9kZT1vcGFxdWUmaGQ9MSZsb29wPTEmc2hvd2luZm89MCZpdl9sb2FkX3BvbGljeT0zJnJlbD0wJm1vZGVzdGJyYW5kaW5nPTEmcGxheWxpc3Q9JHt2aWRlb0lEfSZ3aWRnZXRpZD0xJm11dGU9MVwiPjwvaWZyYW1lPmBcblx0KTtcblx0eW91dHViZUlmcmFtZS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDE7XG5cdH0pO1xuXHR2aWRlb0Rpdi5yZXBsYWNlV2l0aCh5b3V0dWJlSWZyYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKSB7XG5cdGlmIChZVCAmJiBZVC5QbGF5ZXIpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRsZXQgcGxheWVyID0gbmV3IFlULlBsYXllcihwbGF5ZXJJRCwge1xuXHRcdFx0cGxheWVyVmFyczoge1xuXHRcdFx0XHRhdXRvcGxheTogMSxcblx0XHRcdFx0Y29udHJvbHM6IDAsXG5cdFx0XHRcdGRpc2FibGVrYjogMCxcblx0XHRcdFx0YXV0b2hpZGU6IDEsXG5cdFx0XHRcdHdtb2RlOiBcIm9wYXF1ZVwiLFxuXHRcdFx0XHRoZDogMSxcblx0XHRcdFx0ZW5hYmxlanNhcGk6IDEsXG5cdFx0XHRcdGxvb3A6IDEsXG5cdFx0XHRcdHNob3dpbmZvOiAwLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRcdGl2X2xvYWRfcG9saWN5OiAzLFxuXHRcdFx0XHRyZWw6IDAsXG5cdFx0XHRcdG1vZGVzdGJyYW5kaW5nOiAxLFxuXHRcdFx0XHRwbGF5bGlzdDogdmlkZW9JRFxuXHRcdFx0fSxcblx0XHRcdHZpZGVvSWQ6IHZpZGVvSUQsXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0b25SZWFkeTogb25QbGF5ZXJSZWFkeSxcblx0XHRcdFx0b25FcnJvcjogb25QbGF5ZXJFcnJvclxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIHBsYXllciBpcyByZWFkeS5cbmZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0ZXZlbnQudGFyZ2V0Lm11dGUoKTtcblx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXG5cdC8vIHRoaXMgLmM5LXZpZGVvIGVsZW1lbnQgLT4gLmM5LWVtYmVkLWNvbnRhaW5lciAtPiAuYzktdmlkZW8tY29udGFpbmVyXG5cdC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcblx0ZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIGlmIHRoZSB2aWRlbyBwbGF5ZXIgaGFzIGFuIGVycm9yLlxuZnVuY3Rpb24gb25QbGF5ZXJFcnJvcihkYXRhKSB7XG5cdGNvbnNvbGUubG9nKFxuXHRcdFwiVGhlIFlvdVR1YmUgSUZyYW1lIFBsYXllciBBUEkgZmlyZWQgYW4gb25FcnJvciBldmVudCB3aXRoIGVycm9yIGNvZGU6IFwiICtcblx0XHRcdGRhdGEuZGF0YVxuXHQpO1xuXHRjb25zdCBpZnJhbWUgPSBkYXRhLnRhcmdldC5nZXRJZnJhbWUoKTtcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMDtcblx0Ly8gVGhlIGVycm9yIHN0aWxsIGZsYXNoZXMgZm9yIGEgc3BsaXQgc2Vjb25kLCBjYW4ndCBzdG9wIGl0IGJ1dCBsZXQncyBhdGxlYXN0IG1ha2UgaXQgbGVzcyBqYXJyaW5nOlxuXHRpZnJhbWUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLnRyYW5zaXRpb24gPSBcIjMwMG1zXCI7XG5cdC8vIEluIGNhc2UgeW91IHdhbnQgdG8gdGFyZ2V0IGl0IHdpdGggY3NzOlxuXHRpZnJhbWUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuYzlWaWRlb0NvbnRhaW5lckVycm9yID0gZGF0YS5kYXRhO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0Y29uc3QgeW91dHViZUFQSURpc2FibGVkID0gYzlfYmxvY2tzX3BhcmFtcy5kaXNhYmxlX3lvdXR1YmVfYXBpID09PSBcInRydWVcIjtcblx0Y29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cdGxldCBlbWJlZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYzktdmlkZW9cIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZW1iZWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHBsYXllcklEID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdGxldCBpZCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJ2aWRlby1pZFwiKTtcblx0XHRpZiAoeW91dHViZUFQSURpc2FibGVkKSB7XG5cdFx0XHRyZWFkeU1hbnVhbChwbGF5ZXJJRCwgaWQsICQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIGlkKTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZiB2aWRlbyBjdXN0b20gZWxlbWVudHMgYXJlIHByZXNlbnRcblxuXHQkKFwiLmM5LXZpZGVvLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGNoZWNrID0gJChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykubGVuZ3RoO1xuXHRcdGlmICgwIDwgY2hlY2spIHtcblx0XHRcdCQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLm9uKFwiY2FucGxheVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChzZWxmKS5jc3MoeyBvcGFjaXR5OiAxIH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzIEZyb250ZW5kIEpTXG4gKlxuICogQWxsIGJsb2NrcyBmcm9udGVuZCByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==