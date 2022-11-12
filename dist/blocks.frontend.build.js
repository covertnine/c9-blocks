/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block-grid-container/frontend.js":
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/* eslint-disable no-undef */

/**
 * Block Frontend
 */

function readyManual(playerID, videoID, jQuery) {
  var videoDiv = jQuery("#".concat(playerID));
  var style = videoDiv.attr('style');
  // create the youtube iframe manually without API
  var youtubeIframe = jQuery("<iframe id=\"".concat(playerID, "\" class=\"c9-video\" video-id=\"").concat(videoID, "\" style=\"").concat(style, "\" frameborder=\"0\" allowfullscreen=\"1\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" title=\"YouTube video player\" src=\"https://www.youtube.com/embed/").concat(videoID, "?autoplay=1&controls=0&disablekb=0&autohide=1&wmode=opaque&hd=1&loop=1&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&playlist=").concat(videoID, "&widgetid=1&mute=1\"></iframe>"));
  youtubeIframe.on('load', function () {
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
        wmode: 'opaque',
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
  console.log('The YouTube IFrame Player API fired an onError event with error code: ' + data.data);
  var iframe = data.target.getIframe();
  iframe.parentNode.parentNode.style.opacity = 0;
  // The error still flashes for a split second, can't stop it but let's atleast make it less jarring:
  iframe.parentNode.parentNode.style.transition = '300ms';
  // In case you want to target it with css:
  iframe.parentNode.parentNode.dataset.c9VideoContainerError = data.data;
}
document.addEventListener('DOMContentLoaded', function () {
  var youtubeAPIDisabled = c9_blocks_params.disable_youtube_api === 'true';
  var $ = window.jQuery;
  var embeds = document.getElementsByClassName('c9-video');
  for (var i = 0; i < embeds.length; i++) {
    var playerID = embeds[i].getAttribute('id');
    var id = embeds[i].getAttribute('video-id');
    if (youtubeAPIDisabled) {
      readyManual(playerID, id, $);
    } else {
      readyYoutube(playerID, id);
    }
  }

  // if video custom elements are present

  $('.c9-video-container').each(function () {
    var self = this;
    var check = $('.c9-video-custom', this).length;
    if (0 < check) {
      $('.c9-video-custom', this).on('canplay', function () {
        $(self).css({
          opacity: 1
        });
      });
    }
  });
});

/***/ }),

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks.frontend": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkc9_blocks"] = self["webpackChunkc9_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks.vendors"], function() { return __webpack_require__("./src/frontend.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDbERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBLDRGQUE0RixrREFBa0Q7VUFDOUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jOS1ibG9ja3MvLi9zcmMvYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzIiwid2VicGFjazovL2M5LWJsb2Nrcy8uL3NyYy9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbi8qKlxuICogQmxvY2sgRnJvbnRlbmRcbiAqL1xuXG5mdW5jdGlvbiByZWFkeU1hbnVhbChwbGF5ZXJJRCwgdmlkZW9JRCwgalF1ZXJ5KSB7XG5cdGNvbnN0IHZpZGVvRGl2ID0galF1ZXJ5KGAjJHtwbGF5ZXJJRH1gKTtcblx0Y29uc3Qgc3R5bGUgPSB2aWRlb0Rpdi5hdHRyKCdzdHlsZScpO1xuXHQvLyBjcmVhdGUgdGhlIHlvdXR1YmUgaWZyYW1lIG1hbnVhbGx5IHdpdGhvdXQgQVBJXG5cdGxldCB5b3V0dWJlSWZyYW1lID0galF1ZXJ5KFxuXHRcdGA8aWZyYW1lIGlkPVwiJHtwbGF5ZXJJRH1cIiBjbGFzcz1cImM5LXZpZGVvXCIgdmlkZW8taWQ9XCIke3ZpZGVvSUR9XCIgc3R5bGU9XCIke3N0eWxlfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj1cIjFcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lEfT9hdXRvcGxheT0xJmNvbnRyb2xzPTAmZGlzYWJsZWtiPTAmYXV0b2hpZGU9MSZ3bW9kZT1vcGFxdWUmaGQ9MSZsb29wPTEmc2hvd2luZm89MCZpdl9sb2FkX3BvbGljeT0zJnJlbD0wJm1vZGVzdGJyYW5kaW5nPTEmcGxheWxpc3Q9JHt2aWRlb0lEfSZ3aWRnZXRpZD0xJm11dGU9MVwiPjwvaWZyYW1lPmBcblx0KTtcblx0eW91dHViZUlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcblx0fSk7XG5cdHZpZGVvRGl2LnJlcGxhY2VXaXRoKHlvdXR1YmVJZnJhbWUpO1xufVxuXG5mdW5jdGlvbiByZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpIHtcblx0aWYgKFlUICYmIFlULlBsYXllcikge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdGxldCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHBsYXllcklELCB7XG5cdFx0XHRwbGF5ZXJWYXJzOiB7XG5cdFx0XHRcdGF1dG9wbGF5OiAxLFxuXHRcdFx0XHRjb250cm9sczogMCxcblx0XHRcdFx0ZGlzYWJsZWtiOiAwLFxuXHRcdFx0XHRhdXRvaGlkZTogMSxcblx0XHRcdFx0d21vZGU6ICdvcGFxdWUnLFxuXHRcdFx0XHRoZDogMSxcblx0XHRcdFx0ZW5hYmxlanNhcGk6IDEsXG5cdFx0XHRcdGxvb3A6IDEsXG5cdFx0XHRcdHNob3dpbmZvOiAwLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRcdGl2X2xvYWRfcG9saWN5OiAzLFxuXHRcdFx0XHRyZWw6IDAsXG5cdFx0XHRcdG1vZGVzdGJyYW5kaW5nOiAxLFxuXHRcdFx0XHRwbGF5bGlzdDogdmlkZW9JRCxcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0lkOiB2aWRlb0lELFxuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXG5cdFx0XHRcdG9uRXJyb3I6IG9uUGxheWVyRXJyb3IsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSB2aWRlbyBwbGF5ZXIgaXMgcmVhZHkuXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG5cdGV2ZW50LnRhcmdldC5tdXRlKCk7XG5cdGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcblxuXHQvLyB0aGlzIC5jOS12aWRlbyBlbGVtZW50IC0+IC5jOS1lbWJlZC1jb250YWluZXIgLT4gLmM5LXZpZGVvLWNvbnRhaW5lclxuXHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG5cdGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDE7XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiBpZiB0aGUgdmlkZW8gcGxheWVyIGhhcyBhbiBlcnJvci5cbmZ1bmN0aW9uIG9uUGxheWVyRXJyb3IoZGF0YSkge1xuXHRjb25zb2xlLmxvZyhcblx0XHQnVGhlIFlvdVR1YmUgSUZyYW1lIFBsYXllciBBUEkgZmlyZWQgYW4gb25FcnJvciBldmVudCB3aXRoIGVycm9yIGNvZGU6ICcgK1xuXHRcdFx0ZGF0YS5kYXRhXG5cdCk7XG5cdGNvbnN0IGlmcmFtZSA9IGRhdGEudGFyZ2V0LmdldElmcmFtZSgpO1xuXHRpZnJhbWUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuXHQvLyBUaGUgZXJyb3Igc3RpbGwgZmxhc2hlcyBmb3IgYSBzcGxpdCBzZWNvbmQsIGNhbid0IHN0b3AgaXQgYnV0IGxldCdzIGF0bGVhc3QgbWFrZSBpdCBsZXNzIGphcnJpbmc6XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUudHJhbnNpdGlvbiA9ICczMDBtcyc7XG5cdC8vIEluIGNhc2UgeW91IHdhbnQgdG8gdGFyZ2V0IGl0IHdpdGggY3NzOlxuXHRpZnJhbWUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuYzlWaWRlb0NvbnRhaW5lckVycm9yID0gZGF0YS5kYXRhO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRjb25zdCB5b3V0dWJlQVBJRGlzYWJsZWQgPSBjOV9ibG9ja3NfcGFyYW1zLmRpc2FibGVfeW91dHViZV9hcGkgPT09ICd0cnVlJztcblx0Y29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cdGxldCBlbWJlZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjOS12aWRlbycpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGVtYmVkcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBwbGF5ZXJJRCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG5cdFx0bGV0IGlkID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZSgndmlkZW8taWQnKTtcblx0XHRpZiAoeW91dHViZUFQSURpc2FibGVkKSB7XG5cdFx0XHRyZWFkeU1hbnVhbChwbGF5ZXJJRCwgaWQsICQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIGlkKTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZiB2aWRlbyBjdXN0b20gZWxlbWVudHMgYXJlIHByZXNlbnRcblxuXHQkKCcuYzktdmlkZW8tY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgY2hlY2sgPSAkKCcuYzktdmlkZW8tY3VzdG9tJywgdGhpcykubGVuZ3RoO1xuXHRcdGlmICgwIDwgY2hlY2spIHtcblx0XHRcdCQoJy5jOS12aWRlby1jdXN0b20nLCB0aGlzKS5vbignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JChzZWxmKS5jc3MoeyBvcGFjaXR5OiAxIH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzIEZyb250ZW5kIEpTXG4gKlxuICogQWxsIGJsb2NrcyBmcm9udGVuZCByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJibG9ja3MuZnJvbnRlbmRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2M5X2Jsb2Nrc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjOV9ibG9ja3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYmxvY2tzLnZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Zyb250ZW5kLmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZWFkeU1hbnVhbCIsInBsYXllcklEIiwidmlkZW9JRCIsImpRdWVyeSIsInZpZGVvRGl2Iiwic3R5bGUiLCJhdHRyIiwieW91dHViZUlmcmFtZSIsIm9uIiwicGFyZW50Tm9kZSIsIm9wYWNpdHkiLCJyZXBsYWNlV2l0aCIsInJlYWR5WW91dHViZSIsIllUIiwiUGxheWVyIiwicGxheWVyIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJkaXNhYmxla2IiLCJhdXRvaGlkZSIsIndtb2RlIiwiaGQiLCJlbmFibGVqc2FwaSIsImxvb3AiLCJzaG93aW5mbyIsIml2X2xvYWRfcG9saWN5IiwicmVsIiwibW9kZXN0YnJhbmRpbmciLCJwbGF5bGlzdCIsInZpZGVvSWQiLCJldmVudHMiLCJvblJlYWR5Iiwib25QbGF5ZXJSZWFkeSIsIm9uRXJyb3IiLCJvblBsYXllckVycm9yIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwibXV0ZSIsInBsYXlWaWRlbyIsImdldElmcmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwidHJhbnNpdGlvbiIsImRhdGFzZXQiLCJjOVZpZGVvQ29udGFpbmVyRXJyb3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ5b3V0dWJlQVBJRGlzYWJsZWQiLCJjOV9ibG9ja3NfcGFyYW1zIiwiZGlzYWJsZV95b3V0dWJlX2FwaSIsIiQiLCJ3aW5kb3ciLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlkIiwiZWFjaCIsInNlbGYiLCJjaGVjayIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=