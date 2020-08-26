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
/******/ 	return __webpack_require__(__webpack_require__.s = 478);
/******/ })
/************************************************************************/
/******/ ({

/***/ 478:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(/*! ./blocks/block-grid-container/frontend.js */ 479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_animations_panel_frontend_js__ = __webpack_require__(/*! ./components/animations-panel/frontend.js */ 480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_animations_panel_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_animations_panel_frontend_js__);
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

/***/ 479:
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

/* eslint-disable no-undef */

/**
 * Block Frontend
 */

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
				onReady: onPlayerReady
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
	event.target.f.parentNode.parentNode.style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", function () {
	var embeds = document.getElementsByClassName("c9-video");
	for (var i = 0; i < embeds.length; i++) {
		var playerID = embeds[i].getAttribute("id");
		var id = embeds[i].getAttribute("video-id");
		readyYoutube(playerID, id);
	}

	// if video custom elements are present
	var $ = window.jQuery;

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

/***/ 480:
/*!*****************************************************!*\
  !*** ./src/components/animations-panel/frontend.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

/**
 * Animations Frontend
 */

document.addEventListener("DOMContentLoaded", function () {
    // simple timeline setups
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    // register plugin
    gsap.registerPlugin(ScrollTrigger);

    // console.log("test");

    // target spins
    gsap.to("[data-animate='spin'", {
        scrollTrigger: "[data-animate='spin'",
        rotation: 360,
        duration: 3
    });

    // target move x
    gsap.to("[data-animate='moveX'", {
        scrollTrigger: "[data-animate='moveX'",
        x: 100,
        duration: 3
    });

    // target move y
    gsap.to("[data-animate='moveY'", {
        scrollTrigger: "[data-animate='moveY'",
        y: 100,
        duration: 3
    });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGZkZmQ1YmE2YmY3NjUzZDQ4NjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC9mcm9udGVuZC5qcyJdLCJuYW1lcyI6WyJyZWFkeVlvdXR1YmUiLCJwbGF5ZXJJRCIsInZpZGVvSUQiLCJZVCIsIlBsYXllciIsInBsYXllciIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiYXV0b2hpZGUiLCJ3bW9kZSIsImhkIiwiZW5hYmxlanNhcGkiLCJsb29wIiwic2hvd2luZm8iLCJpdl9sb2FkX3BvbGljeSIsInJlbCIsIm1vZGVzdGJyYW5kaW5nIiwicGxheWxpc3QiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJtdXRlIiwicGxheVZpZGVvIiwiZiIsInBhcmVudE5vZGUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlkIiwiJCIsIndpbmRvdyIsImpRdWVyeSIsImVhY2giLCJzZWxmIiwiY2hlY2siLCJvbiIsImNzcyIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJ0byIsInNjcm9sbFRyaWdnZXIiLCJyb3RhdGlvbiIsImR1cmF0aW9uIiwieCIsInkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LFFBQU1lLE9BQU9QLE9BQU9PLElBQXBCO0FBQ0EsUUFBTUMsZ0JBQWdCUixPQUFPUSxhQUE3QjtBQUNBO0FBQ0FELFNBQUtFLGNBQUwsQ0FBb0JELGFBQXBCOztBQUVBOztBQUVBO0FBQ0FELFNBQUtHLEVBQUwsQ0FBUSxzQkFBUixFQUFnQztBQUM1QkMsdUJBQWUsc0JBRGE7QUFFNUJDLGtCQUFVLEdBRmtCO0FBRzVCQyxrQkFBVTtBQUhrQixLQUFoQzs7QUFNQTtBQUNBTixTQUFLRyxFQUFMLENBQVEsdUJBQVIsRUFBaUM7QUFDN0JDLHVCQUFlLHVCQURjO0FBRTdCRyxXQUFHLEdBRjBCO0FBRzdCRCxrQkFBVTtBQUhtQixLQUFqQzs7QUFNQTtBQUNBTixTQUFLRyxFQUFMLENBQVEsdUJBQVIsRUFBaUM7QUFDN0JDLHVCQUFlLHVCQURjO0FBRTdCSSxXQUFHLEdBRjBCO0FBRzdCRixrQkFBVTtBQUhtQixLQUFqQztBQUtILENBN0JELEUiLCJmaWxlIjoiLi9kaXN0L2Jsb2Nrcy5mcm9udGVuZC5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ3OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGZkZmQ1YmE2YmY3NjUzZDQ4NjUiLCIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3MgRnJvbnRlbmQgSlNcbiAqXG4gKiBBbGwgYmxvY2tzIGZyb250ZW5kIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCBcIi4vYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC9mcm9udGVuZC5qc1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogXCJvcGFxdWVcIixcblx0XHRcdFx0aGQ6IDEsXG5cdFx0XHRcdGVuYWJsZWpzYXBpOiAxLFxuXHRcdFx0XHRsb29wOiAxLFxuXHRcdFx0XHRzaG93aW5mbzogMCxcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMyxcblx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMSxcblx0XHRcdFx0cGxheWxpc3Q6IHZpZGVvSURcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0lkOiB2aWRlb0lELFxuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdG9uUmVhZHk6IG9uUGxheWVyUmVhZHlcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSB2aWRlbyBwbGF5ZXIgaXMgcmVhZHkuXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG5cdGV2ZW50LnRhcmdldC5tdXRlKCk7XG5cdGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcblxuXHQvLyB0aGlzIC5jOS12aWRlbyBlbGVtZW50IC0+IC5jOS1lbWJlZC1jb250YWluZXIgLT4gLmM5LXZpZGVvLWNvbnRhaW5lclxuXHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG5cdGV2ZW50LnRhcmdldC5mLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGxldCBlbWJlZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYzktdmlkZW9cIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZW1iZWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHBsYXllcklEID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdGxldCBpZCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJ2aWRlby1pZFwiKTtcblx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIGlkKTtcblx0fVxuXG5cdC8vIGlmIHZpZGVvIGN1c3RvbSBlbGVtZW50cyBhcmUgcHJlc2VudFxuXHRjb25zdCAkID0gd2luZG93LmpRdWVyeTtcblxuXHQkKFwiLmM5LXZpZGVvLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGNoZWNrID0gJChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykubGVuZ3RoO1xuXHRcdGlmICgwIDwgY2hlY2spIHtcblx0XHRcdCQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLm9uKFwiY2FucGxheVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChzZWxmKS5jc3MoeyBvcGFjaXR5OiAxIH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIi8qKlxuICogQW5pbWF0aW9ucyBGcm9udGVuZFxuICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vIHNpbXBsZSB0aW1lbGluZSBzZXR1cHNcbiAgICBjb25zdCBnc2FwID0gd2luZG93LmdzYXA7XG4gICAgY29uc3QgU2Nyb2xsVHJpZ2dlciA9IHdpbmRvdy5TY3JvbGxUcmlnZ2VyO1xuICAgIC8vIHJlZ2lzdGVyIHBsdWdpblxuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIik7XG4gICAgXG4gICAgLy8gdGFyZ2V0IHNwaW5zXG4gICAgZ3NhcC50byhcIltkYXRhLWFuaW1hdGU9J3NwaW4nXCIsIHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjogXCJbZGF0YS1hbmltYXRlPSdzcGluJ1wiLFxuICAgICAgICByb3RhdGlvbjogMzYwLFxuICAgICAgICBkdXJhdGlvbjogM1xuICAgIH0pO1xuXG4gICAgLy8gdGFyZ2V0IG1vdmUgeFxuICAgIGdzYXAudG8oXCJbZGF0YS1hbmltYXRlPSdtb3ZlWCdcIiwge1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiBcIltkYXRhLWFuaW1hdGU9J21vdmVYJ1wiLFxuICAgICAgICB4OiAxMDAsXG4gICAgICAgIGR1cmF0aW9uOiAzXG4gICAgfSk7XG5cbiAgICAvLyB0YXJnZXQgbW92ZSB5XG4gICAgZ3NhcC50byhcIltkYXRhLWFuaW1hdGU9J21vdmVZJ1wiLCB7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IFwiW2RhdGEtYW5pbWF0ZT0nbW92ZVknXCIsXG4gICAgICAgIHk6IDEwMCxcbiAgICAgICAgZHVyYXRpb246IDNcbiAgICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC9mcm9udGVuZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=