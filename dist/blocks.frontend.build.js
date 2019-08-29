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
/******/ 	return __webpack_require__(__webpack_require__.s = 403);
/******/ })
/************************************************************************/
/******/ ({

/***/ 403:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(/*! ./blocks/block-grid-container/frontend.js */ 404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_block_toggles_frontend_js__ = __webpack_require__(/*! ./blocks/block-toggles/frontend.js */ 405);
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

/***/ 404:
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

/* eslint-disable no-undef */
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
	event.target.a.parentNode.parentNode.style.opacity = 1;
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

/***/ 405:
/*!**********************************************!*\
  !*** ./src/blocks/block-toggles/frontend.js ***!
  \**********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
	var $ = window.jQuery;

	$(".c9-toggles-toggle:not(.toggle-collapse-ready)").each(function () {
		var $this = $(this);
		$this.addClass("toggle-collapse-ready");

		// grab collapse id
		var id = $(".c9-toggles-item-content.collapse", this).attr("id");

		// grab rotate arrow id
		var iconId = $(".c9-toggles-item-heading", this).attr("id");

		// insert hook into collapse and expand event
		$("#" + id).on("show.bs.collapse", function () {
			$("#" + iconId + " span.c9-toggles-item-collapse > svg").toggleClass("c9-toggle-item-expand");
		});
		$("#" + id).on("hide.bs.collapse", function () {
			$("#" + iconId + " span.c9-toggles-item-collapse > svg").toggleClass("c9-toggle-item-expand");
		});
	});
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2M1MDgxNGNhODRlNTAwZmQ1NzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9jay10b2dnbGVzL2Zyb250ZW5kLmpzIl0sIm5hbWVzIjpbInJlYWR5WW91dHViZSIsInBsYXllcklEIiwidmlkZW9JRCIsIllUIiwiUGxheWVyIiwicGxheWVyIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJkaXNhYmxla2IiLCJhdXRvaGlkZSIsIndtb2RlIiwiaGQiLCJlbmFibGVqc2FwaSIsImxvb3AiLCJzaG93aW5mbyIsIml2X2xvYWRfcG9saWN5IiwicmVsIiwibW9kZXN0YnJhbmRpbmciLCJwbGF5bGlzdCIsInZpZGVvSWQiLCJldmVudHMiLCJvblJlYWR5Iiwib25QbGF5ZXJSZWFkeSIsInNldFRpbWVvdXQiLCJldmVudCIsInRhcmdldCIsIm11dGUiLCJwbGF5VmlkZW8iLCJhIiwicGFyZW50Tm9kZSIsInN0eWxlIiwib3BhY2l0eSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtYmVkcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCIkIiwid2luZG93IiwialF1ZXJ5IiwiZWFjaCIsInNlbGYiLCJjaGVjayIsIm9uIiwiY3NzIiwiJHRoaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJpY29uSWQiLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFH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TUssUUFBUVIsRUFBRSxJQUFGLENBQWQ7QUFDQVEsUUFBTUMsUUFBTixDQUFlLHVCQUFmOztBQUVBO0FBQ0EsTUFBTVYsS0FBS0MsRUFBRSxtQ0FBRixFQUF1QyxJQUF2QyxFQUE2Q1UsSUFBN0MsQ0FBa0QsSUFBbEQsQ0FBWDs7QUFFQTtBQUNBLE1BQU1DLFNBQVNYLEVBQUUsMEJBQUYsRUFBOEIsSUFBOUIsRUFBb0NVLElBQXBDLENBQXlDLElBQXpDLENBQWY7O0FBRUE7QUFDQVYsVUFBTUQsRUFBTixFQUFZTyxFQUFaLENBQWUsa0JBQWYsRUFBbUMsWUFBTTtBQUN4Q04sV0FBTVcsTUFBTiwyQ0FBb0RDLFdBQXBELENBQ0MsdUJBREQ7QUFHQSxHQUpEO0FBS0FaLFVBQU1ELEVBQU4sRUFBWU8sRUFBWixDQUFlLGtCQUFmLEVBQW1DLFlBQU07QUFDeENOLFdBQU1XLE1BQU4sMkNBQW9EQyxXQUFwRCxDQUNDLHVCQUREO0FBR0EsR0FKRDtBQUtBLEVBckJEO0FBc0JBLENBekJELEUiLCJmaWxlIjoiLi9kaXN0L2Jsb2Nrcy5mcm9udGVuZC5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQwMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2M1MDgxNGNhODRlNTAwZmQ1NzciLCIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3MgRnJvbnRlbmQgSlNcbiAqXG4gKiBBbGwgYmxvY2tzIGZyb250ZW5kIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCBcIi4vYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzXCJcbmltcG9ydCBcIi4vYmxvY2tzL2Jsb2NrLXRvZ2dsZXMvZnJvbnRlbmQuanNcIlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5mdW5jdGlvbiByZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpIHtcblx0aWYgKFlUICYmIFlULlBsYXllcikge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdGxldCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHBsYXllcklELCB7XG5cdFx0XHRwbGF5ZXJWYXJzOiB7XG5cdFx0XHRcdGF1dG9wbGF5OiAxLFxuXHRcdFx0XHRjb250cm9sczogMCxcblx0XHRcdFx0ZGlzYWJsZWtiOiAwLFxuXHRcdFx0XHRhdXRvaGlkZTogMSxcblx0XHRcdFx0d21vZGU6IFwib3BhcXVlXCIsXG5cdFx0XHRcdGhkOiAxLFxuXHRcdFx0XHRlbmFibGVqc2FwaTogMSxcblx0XHRcdFx0bG9vcDogMSxcblx0XHRcdFx0c2hvd2luZm86IDAsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdFx0aXZfbG9hZF9wb2xpY3k6IDMsXG5cdFx0XHRcdHJlbDogMCxcblx0XHRcdFx0bW9kZXN0YnJhbmRpbmc6IDEsXG5cdFx0XHRcdHBsYXlsaXN0OiB2aWRlb0lEXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9JZDogdmlkZW9JRCxcblx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRvblJlYWR5OiBvblBsYXllclJlYWR5XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCk7XG5cdFx0fSwgMTAwKTtcblx0fVxufVxuXG4vLyBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gcGxheWVyIGlzIHJlYWR5LlxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xuXHRldmVudC50YXJnZXQubXV0ZSgpO1xuXHRldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG5cblx0Ly8gdGhpcyAuYzktdmlkZW8gZWxlbWVudCAtPiAuYzktZW1iZWQtY29udGFpbmVyIC0+IC5jOS12aWRlby1jb250YWluZXJcblx0ZXZlbnQudGFyZ2V0LmEucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjOS12aWRlb1wiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbWJlZHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcGxheWVySUQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cdFx0bGV0IGlkID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcInZpZGVvLWlkXCIpO1xuXHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgaWQpO1xuXHR9XG5cblx0Ly8gaWYgdmlkZW8gY3VzdG9tIGVsZW1lbnRzIGFyZSBwcmVzZW50XG5cdGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5cdCQoXCIuYzktdmlkZW8tY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgY2hlY2sgPSAkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5sZW5ndGg7XG5cdFx0aWYgKDAgPCBjaGVjaykge1xuXHRcdFx0JChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykub24oXCJjYW5wbGF5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHNlbGYpLmNzcyh7IG9wYWNpdHk6IDEgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5cdCQoXCIuYzktdG9nZ2xlcy10b2dnbGU6bm90KC50b2dnbGUtY29sbGFwc2UtcmVhZHkpXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCR0aGlzLmFkZENsYXNzKFwidG9nZ2xlLWNvbGxhcHNlLXJlYWR5XCIpO1xuXG5cdFx0Ly8gZ3JhYiBjb2xsYXBzZSBpZFxuXHRcdGNvbnN0IGlkID0gJChcIi5jOS10b2dnbGVzLWl0ZW0tY29udGVudC5jb2xsYXBzZVwiLCB0aGlzKS5hdHRyKFwiaWRcIik7XG5cblx0XHQvLyBncmFiIHJvdGF0ZSBhcnJvdyBpZFxuXHRcdGNvbnN0IGljb25JZCA9ICQoXCIuYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiwgdGhpcykuYXR0cihcImlkXCIpO1xuXG5cdFx0Ly8gaW5zZXJ0IGhvb2sgaW50byBjb2xsYXBzZSBhbmQgZXhwYW5kIGV2ZW50XG5cdFx0JChgIyR7aWR9YCkub24oXCJzaG93LmJzLmNvbGxhcHNlXCIsICgpID0+IHtcblx0XHRcdCQoYCMke2ljb25JZH0gc3Bhbi5jOS10b2dnbGVzLWl0ZW0tY29sbGFwc2UgPiBzdmdgKS50b2dnbGVDbGFzcyhcblx0XHRcdFx0XCJjOS10b2dnbGUtaXRlbS1leHBhbmRcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0XHQkKGAjJHtpZH1gKS5vbihcImhpZGUuYnMuY29sbGFwc2VcIiwgKCkgPT4ge1xuXHRcdFx0JChgIyR7aWNvbklkfSBzcGFuLmM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZSA+IHN2Z2ApLnRvZ2dsZUNsYXNzKFxuXHRcdFx0XHRcImM5LXRvZ2dsZS1pdGVtLWV4cGFuZFwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9ibG9jay10b2dnbGVzL2Zyb250ZW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==