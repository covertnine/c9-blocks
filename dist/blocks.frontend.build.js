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
  var style = videoDiv.attr("style");
  // create the youtube iframe manually without API
  var youtubeIframe = jQuery("<iframe id=\"".concat(playerID, "\" class=\"c9-video\" video-id=\"").concat(videoID, "\" style=\"").concat(style, "\" frameborder=\"0\" allowfullscreen=\"1\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" title=\"YouTube video player\" src=\"https://www.youtube.com/embed/").concat(videoID, "?autoplay=1&controls=0&disablekb=0&autohide=1&wmode=opaque&hd=1&loop=1&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&playlist=").concat(videoID, "&widgetid=1&mute=1\"></iframe>"));
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NsREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EsNEZBQTRGLGtEQUFrRDtVQUM5SSIsInNvdXJjZXMiOlsid2VicGFjazovL2M5LWJsb2Nrcy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5TWFudWFsKHBsYXllcklELCB2aWRlb0lELCBqUXVlcnkpIHtcblx0Y29uc3QgdmlkZW9EaXYgPSBqUXVlcnkoYCMke3BsYXllcklEfWApO1xuXHRjb25zdCBzdHlsZSA9IHZpZGVvRGl2LmF0dHIoXCJzdHlsZVwiKTtcblx0Ly8gY3JlYXRlIHRoZSB5b3V0dWJlIGlmcmFtZSBtYW51YWxseSB3aXRob3V0IEFQSVxuXHRsZXQgeW91dHViZUlmcmFtZSA9IGpRdWVyeShcblx0XHRgPGlmcmFtZSBpZD1cIiR7cGxheWVySUR9XCIgY2xhc3M9XCJjOS12aWRlb1wiIHZpZGVvLWlkPVwiJHt2aWRlb0lEfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW49XCIxXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JRH0/YXV0b3BsYXk9MSZjb250cm9scz0wJmRpc2FibGVrYj0wJmF1dG9oaWRlPTEmd21vZGU9b3BhcXVlJmhkPTEmbG9vcD0xJnNob3dpbmZvPTAmaXZfbG9hZF9wb2xpY3k9MyZyZWw9MCZtb2Rlc3RicmFuZGluZz0xJnBsYXlsaXN0PSR7dmlkZW9JRH0md2lkZ2V0aWQ9MSZtdXRlPTFcIj48L2lmcmFtZT5gXG5cdCk7XG5cdHlvdXR1YmVJZnJhbWUub24oXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9KTtcblx0dmlkZW9EaXYucmVwbGFjZVdpdGgoeW91dHViZUlmcmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogXCJvcGFxdWVcIixcblx0XHRcdFx0aGQ6IDEsXG5cdFx0XHRcdGVuYWJsZWpzYXBpOiAxLFxuXHRcdFx0XHRsb29wOiAxLFxuXHRcdFx0XHRzaG93aW5mbzogMCxcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMyxcblx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMSxcblx0XHRcdFx0cGxheWxpc3Q6IHZpZGVvSURcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0lkOiB2aWRlb0lELFxuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXG5cdFx0XHRcdG9uRXJyb3I6IG9uUGxheWVyRXJyb3Jcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSB2aWRlbyBwbGF5ZXIgaXMgcmVhZHkuXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG5cdGV2ZW50LnRhcmdldC5tdXRlKCk7XG5cdGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcblxuXHQvLyB0aGlzIC5jOS12aWRlbyBlbGVtZW50IC0+IC5jOS1lbWJlZC1jb250YWluZXIgLT4gLmM5LXZpZGVvLWNvbnRhaW5lclxuXHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG5cdGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDE7XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiBpZiB0aGUgdmlkZW8gcGxheWVyIGhhcyBhbiBlcnJvci5cbmZ1bmN0aW9uIG9uUGxheWVyRXJyb3IoZGF0YSkge1xuXHRjb25zb2xlLmxvZyhcblx0XHRcIlRoZSBZb3VUdWJlIElGcmFtZSBQbGF5ZXIgQVBJIGZpcmVkIGFuIG9uRXJyb3IgZXZlbnQgd2l0aCBlcnJvciBjb2RlOiBcIiArXG5cdFx0XHRkYXRhLmRhdGFcblx0KTtcblx0Y29uc3QgaWZyYW1lID0gZGF0YS50YXJnZXQuZ2V0SWZyYW1lKCk7XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cdC8vIFRoZSBlcnJvciBzdGlsbCBmbGFzaGVzIGZvciBhIHNwbGl0IHNlY29uZCwgY2FuJ3Qgc3RvcCBpdCBidXQgbGV0J3MgYXRsZWFzdCBtYWtlIGl0IGxlc3MgamFycmluZzpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uID0gXCIzMDBtc1wiO1xuXHQvLyBJbiBjYXNlIHlvdSB3YW50IHRvIHRhcmdldCBpdCB3aXRoIGNzczpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmM5VmlkZW9Db250YWluZXJFcnJvciA9IGRhdGEuZGF0YTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHlvdXR1YmVBUElEaXNhYmxlZCA9IGM5X2Jsb2Nrc19wYXJhbXMuZGlzYWJsZV95b3V0dWJlX2FwaSA9PT0gXCJ0cnVlXCI7XG5cdGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXHRsZXQgZW1iZWRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImM5LXZpZGVvXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGVtYmVkcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBwbGF5ZXJJRCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcblx0XHRsZXQgaWQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwidmlkZW8taWRcIik7XG5cdFx0aWYgKHlvdXR1YmVBUElEaXNhYmxlZCkge1xuXHRcdFx0cmVhZHlNYW51YWwocGxheWVySUQsIGlkLCAkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCBpZCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gaWYgdmlkZW8gY3VzdG9tIGVsZW1lbnRzIGFyZSBwcmVzZW50XG5cblx0JChcIi5jOS12aWRlby1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBjaGVjayA9ICQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLmxlbmd0aDtcblx0XHRpZiAoMCA8IGNoZWNrKSB7XG5cdFx0XHQkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5vbihcImNhbnBsYXlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoc2VsZikuY3NzKHsgb3BhY2l0eTogMSB9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8qKlxuICogR3V0ZW5iZXJnIEJsb2NrcyBGcm9udGVuZCBKU1xuICpcbiAqIEFsbCBibG9ja3MgZnJvbnRlbmQgcmVsYXRlZCBKYXZhU2NyaXB0IGZpbGVzIHNob3VsZCBiZSBpbXBvcnRlZCBoZXJlLlxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0IFwiLi9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanNcIjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYmxvY2tzLmZyb250ZW5kXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjOV9ibG9ja3NcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYzlfYmxvY2tzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImJsb2Nrcy52ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9mcm9udGVuZC5qc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicmVhZHlNYW51YWwiLCJwbGF5ZXJJRCIsInZpZGVvSUQiLCJqUXVlcnkiLCJ2aWRlb0RpdiIsInN0eWxlIiwiYXR0ciIsInlvdXR1YmVJZnJhbWUiLCJvbiIsInBhcmVudE5vZGUiLCJvcGFjaXR5IiwicmVwbGFjZVdpdGgiLCJyZWFkeVlvdXR1YmUiLCJZVCIsIlBsYXllciIsInBsYXllciIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiYXV0b2hpZGUiLCJ3bW9kZSIsImhkIiwiZW5hYmxlanNhcGkiLCJsb29wIiwic2hvd2luZm8iLCJpdl9sb2FkX3BvbGljeSIsInJlbCIsIm1vZGVzdGJyYW5kaW5nIiwicGxheWxpc3QiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJvbkVycm9yIiwib25QbGF5ZXJFcnJvciIsInNldFRpbWVvdXQiLCJldmVudCIsInRhcmdldCIsIm11dGUiLCJwbGF5VmlkZW8iLCJnZXRJZnJhbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlmcmFtZSIsInRyYW5zaXRpb24iLCJkYXRhc2V0IiwiYzlWaWRlb0NvbnRhaW5lckVycm9yIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwieW91dHViZUFQSURpc2FibGVkIiwiYzlfYmxvY2tzX3BhcmFtcyIsImRpc2FibGVfeW91dHViZV9hcGkiLCIkIiwid2luZG93IiwiZW1iZWRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsImVhY2giLCJzZWxmIiwiY2hlY2siLCJjc3MiXSwic291cmNlUm9vdCI6IiJ9