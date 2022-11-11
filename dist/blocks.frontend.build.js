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
  const videoDiv = jQuery(`#${playerID}`);
  const style = videoDiv.attr("style");
  // create the youtube iframe manually without API
  let youtubeIframe = jQuery(`<iframe id="${playerID}" class="c9-video" video-id="${videoID}" style="${style}" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0&disablekb=0&autohide=1&wmode=opaque&hd=1&loop=1&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&playlist=${videoID}&widgetid=1&mute=1"></iframe>`);
  youtubeIframe.on("load", function () {
    this.parentNode.parentNode.style.opacity = 1;
  });
  videoDiv.replaceWith(youtubeIframe);
}
function readyYoutube(playerID, videoID) {
  if (YT && YT.Player) {
    // eslint-disable-next-line no-unused-vars
    let player = new YT.Player(playerID, {
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
  const iframe = data.target.getIframe();
  iframe.parentNode.parentNode.style.opacity = 0;
  // The error still flashes for a split second, can't stop it but let's atleast make it less jarring:
  iframe.parentNode.parentNode.style.transition = "300ms";
  // In case you want to target it with css:
  iframe.parentNode.parentNode.dataset.c9VideoContainerError = data.data;
}
document.addEventListener("DOMContentLoaded", function () {
  const youtubeAPIDisabled = c9_blocks_params.disable_youtube_api === "true";
  const $ = window.jQuery;
  let embeds = document.getElementsByClassName("c9-video");
  for (let i = 0; i < embeds.length; i++) {
    let playerID = embeds[i].getAttribute("id");
    let id = embeds[i].getAttribute("video-id");
    if (youtubeAPIDisabled) {
      readyManual(playerID, id, $);
    } else {
      readyYoutube(playerID, id);
    }
  }

  // if video custom elements are present

  $(".c9-video-container").each(function () {
    const self = this;
    const check = $(".c9-video-custom", this).length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmZyb250ZW5kLmJ1aWxkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVyxDQUFDQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0VBQy9DLE1BQU1DLFFBQVEsR0FBR0QsTUFBTSxDQUFFLElBQUdGLFFBQVMsRUFBQyxDQUFDO0VBQ3ZDLE1BQU1JLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ3BDO0VBQ0EsSUFBSUMsYUFBYSxHQUFHSixNQUFNLENBQ3hCLGVBQWNGLFFBQVMsZ0NBQStCQyxPQUFRLFlBQVdHLEtBQU0sME1BQXlNSCxPQUFRLHNJQUFxSUEsT0FBUSwrQkFBOEIsQ0FDNWM7RUFDREssYUFBYSxDQUFDQyxFQUFFLENBQUMsTUFBTSxFQUFFLFlBQVc7SUFDbkMsSUFBSSxDQUFDQyxVQUFVLENBQUNBLFVBQVUsQ0FBQ0osS0FBSyxDQUFDSyxPQUFPLEdBQUcsQ0FBQztFQUM3QyxDQUFDLENBQUM7RUFDRk4sUUFBUSxDQUFDTyxXQUFXLENBQUNKLGFBQWEsQ0FBQztBQUNwQztBQUVBLFNBQVNLLFlBQVksQ0FBQ1gsUUFBUSxFQUFFQyxPQUFPLEVBQUU7RUFDeEMsSUFBSVcsRUFBRSxJQUFJQSxFQUFFLENBQUNDLE1BQU0sRUFBRTtJQUNwQjtJQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJRixFQUFFLENBQUNDLE1BQU0sQ0FBQ2IsUUFBUSxFQUFFO01BQ3BDZSxVQUFVLEVBQUU7UUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDWEMsU0FBUyxFQUFFLENBQUM7UUFDWkMsUUFBUSxFQUFFLENBQUM7UUFDWEMsS0FBSyxFQUFFLFFBQVE7UUFDZkMsRUFBRSxFQUFFLENBQUM7UUFDTEMsV0FBVyxFQUFFLENBQUM7UUFDZEMsSUFBSSxFQUFFLENBQUM7UUFDUEMsUUFBUSxFQUFFLENBQUM7UUFDWDtRQUNBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsR0FBRyxFQUFFLENBQUM7UUFDTkMsY0FBYyxFQUFFLENBQUM7UUFDakJDLFFBQVEsRUFBRTNCO01BQ1gsQ0FBQztNQUNENEIsT0FBTyxFQUFFNUIsT0FBTztNQUNoQjZCLE1BQU0sRUFBRTtRQUNQQyxPQUFPLEVBQUVDLGFBQWE7UUFDdEJDLE9BQU8sRUFBRUM7TUFDVjtJQUNELENBQUMsQ0FBQztFQUNILENBQUMsTUFBTTtJQUNOQyxVQUFVLENBQUMsWUFBVztNQUNyQnhCLFlBQVksQ0FBQ1gsUUFBUSxFQUFFQyxPQUFPLENBQUM7SUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNSO0FBQ0Q7O0FBRUE7QUFDQSxTQUFTK0IsYUFBYSxDQUFDSSxLQUFLLEVBQUU7RUFDN0JBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEVBQUU7RUFDbkJGLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxTQUFTLEVBQUU7O0VBRXhCO0VBQ0E7RUFDQUgsS0FBSyxDQUFDQyxNQUFNLENBQUNHLFNBQVMsRUFBRSxDQUFDaEMsVUFBVSxDQUFDQSxVQUFVLENBQUNKLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLENBQUM7QUFDakU7O0FBRUE7QUFDQSxTQUFTeUIsYUFBYSxDQUFDTyxJQUFJLEVBQUU7RUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNWLHdFQUF3RSxHQUN2RUYsSUFBSSxDQUFDQSxJQUFJLENBQ1Y7RUFDRCxNQUFNRyxNQUFNLEdBQUdILElBQUksQ0FBQ0osTUFBTSxDQUFDRyxTQUFTLEVBQUU7RUFDdENJLE1BQU0sQ0FBQ3BDLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDSixLQUFLLENBQUNLLE9BQU8sR0FBRyxDQUFDO0VBQzlDO0VBQ0FtQyxNQUFNLENBQUNwQyxVQUFVLENBQUNBLFVBQVUsQ0FBQ0osS0FBSyxDQUFDeUMsVUFBVSxHQUFHLE9BQU87RUFDdkQ7RUFDQUQsTUFBTSxDQUFDcEMsVUFBVSxDQUFDQSxVQUFVLENBQUNzQyxPQUFPLENBQUNDLHFCQUFxQixHQUFHTixJQUFJLENBQUNBLElBQUk7QUFDdkU7QUFFQU8sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3hELE1BQU1DLGtCQUFrQixHQUFHQyxnQkFBZ0IsQ0FBQ0MsbUJBQW1CLEtBQUssTUFBTTtFQUMxRSxNQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ3BELE1BQU07RUFDdkIsSUFBSXFELE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxzQkFBc0IsQ0FBQyxVQUFVLENBQUM7RUFDeEQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUN2QyxJQUFJekQsUUFBUSxHQUFHdUQsTUFBTSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFJQyxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDM0MsSUFBSVQsa0JBQWtCLEVBQUU7TUFDdkJuRCxXQUFXLENBQUNDLFFBQVEsRUFBRTRELEVBQUUsRUFBRVAsQ0FBQyxDQUFDO0lBQzdCLENBQUMsTUFBTTtNQUNOMUMsWUFBWSxDQUFDWCxRQUFRLEVBQUU0RCxFQUFFLENBQUM7SUFDM0I7RUFDRDs7RUFFQTs7RUFFQVAsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNRLElBQUksQ0FBQyxZQUFXO0lBQ3hDLE1BQU1DLElBQUksR0FBRyxJQUFJO0lBQ2pCLE1BQU1DLEtBQUssR0FBR1YsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDSyxNQUFNO0lBQ2hELElBQUksQ0FBQyxHQUFHSyxLQUFLLEVBQUU7TUFDZFYsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDOUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFXO1FBQ3BEOEMsQ0FBQyxDQUFDUyxJQUFJLENBQUMsQ0FBQ0UsR0FBRyxDQUFDO1VBQUV2RCxPQUFPLEVBQUU7UUFBRSxDQUFDLENBQUM7TUFDNUIsQ0FBQyxDQUFDO0lBQ0g7RUFDRCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDckdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QyxvSEFBb0gsaURBQWlEO1dBQ3JLO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NsREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EsNEZBQTRGLGtEQUFrRDtVQUM5SSIsInNvdXJjZXMiOlsid2VicGFjazovL2M5LWJsb2Nrcy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5TWFudWFsKHBsYXllcklELCB2aWRlb0lELCBqUXVlcnkpIHtcblx0Y29uc3QgdmlkZW9EaXYgPSBqUXVlcnkoYCMke3BsYXllcklEfWApO1xuXHRjb25zdCBzdHlsZSA9IHZpZGVvRGl2LmF0dHIoXCJzdHlsZVwiKTtcblx0Ly8gY3JlYXRlIHRoZSB5b3V0dWJlIGlmcmFtZSBtYW51YWxseSB3aXRob3V0IEFQSVxuXHRsZXQgeW91dHViZUlmcmFtZSA9IGpRdWVyeShcblx0XHRgPGlmcmFtZSBpZD1cIiR7cGxheWVySUR9XCIgY2xhc3M9XCJjOS12aWRlb1wiIHZpZGVvLWlkPVwiJHt2aWRlb0lEfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW49XCIxXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JRH0/YXV0b3BsYXk9MSZjb250cm9scz0wJmRpc2FibGVrYj0wJmF1dG9oaWRlPTEmd21vZGU9b3BhcXVlJmhkPTEmbG9vcD0xJnNob3dpbmZvPTAmaXZfbG9hZF9wb2xpY3k9MyZyZWw9MCZtb2Rlc3RicmFuZGluZz0xJnBsYXlsaXN0PSR7dmlkZW9JRH0md2lkZ2V0aWQ9MSZtdXRlPTFcIj48L2lmcmFtZT5gXG5cdCk7XG5cdHlvdXR1YmVJZnJhbWUub24oXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9KTtcblx0dmlkZW9EaXYucmVwbGFjZVdpdGgoeW91dHViZUlmcmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogXCJvcGFxdWVcIixcblx0XHRcdFx0aGQ6IDEsXG5cdFx0XHRcdGVuYWJsZWpzYXBpOiAxLFxuXHRcdFx0XHRsb29wOiAxLFxuXHRcdFx0XHRzaG93aW5mbzogMCxcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMyxcblx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMSxcblx0XHRcdFx0cGxheWxpc3Q6IHZpZGVvSURcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0lkOiB2aWRlb0lELFxuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXG5cdFx0XHRcdG9uRXJyb3I6IG9uUGxheWVyRXJyb3Jcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSB2aWRlbyBwbGF5ZXIgaXMgcmVhZHkuXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG5cdGV2ZW50LnRhcmdldC5tdXRlKCk7XG5cdGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcblxuXHQvLyB0aGlzIC5jOS12aWRlbyBlbGVtZW50IC0+IC5jOS1lbWJlZC1jb250YWluZXIgLT4gLmM5LXZpZGVvLWNvbnRhaW5lclxuXHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG5cdGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDE7XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiBpZiB0aGUgdmlkZW8gcGxheWVyIGhhcyBhbiBlcnJvci5cbmZ1bmN0aW9uIG9uUGxheWVyRXJyb3IoZGF0YSkge1xuXHRjb25zb2xlLmxvZyhcblx0XHRcIlRoZSBZb3VUdWJlIElGcmFtZSBQbGF5ZXIgQVBJIGZpcmVkIGFuIG9uRXJyb3IgZXZlbnQgd2l0aCBlcnJvciBjb2RlOiBcIiArXG5cdFx0XHRkYXRhLmRhdGFcblx0KTtcblx0Y29uc3QgaWZyYW1lID0gZGF0YS50YXJnZXQuZ2V0SWZyYW1lKCk7XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cdC8vIFRoZSBlcnJvciBzdGlsbCBmbGFzaGVzIGZvciBhIHNwbGl0IHNlY29uZCwgY2FuJ3Qgc3RvcCBpdCBidXQgbGV0J3MgYXRsZWFzdCBtYWtlIGl0IGxlc3MgamFycmluZzpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uID0gXCIzMDBtc1wiO1xuXHQvLyBJbiBjYXNlIHlvdSB3YW50IHRvIHRhcmdldCBpdCB3aXRoIGNzczpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmM5VmlkZW9Db250YWluZXJFcnJvciA9IGRhdGEuZGF0YTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHlvdXR1YmVBUElEaXNhYmxlZCA9IGM5X2Jsb2Nrc19wYXJhbXMuZGlzYWJsZV95b3V0dWJlX2FwaSA9PT0gXCJ0cnVlXCI7XG5cdGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXHRsZXQgZW1iZWRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImM5LXZpZGVvXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGVtYmVkcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBwbGF5ZXJJRCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcblx0XHRsZXQgaWQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwidmlkZW8taWRcIik7XG5cdFx0aWYgKHlvdXR1YmVBUElEaXNhYmxlZCkge1xuXHRcdFx0cmVhZHlNYW51YWwocGxheWVySUQsIGlkLCAkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCBpZCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gaWYgdmlkZW8gY3VzdG9tIGVsZW1lbnRzIGFyZSBwcmVzZW50XG5cblx0JChcIi5jOS12aWRlby1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBjaGVjayA9ICQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLmxlbmd0aDtcblx0XHRpZiAoMCA8IGNoZWNrKSB7XG5cdFx0XHQkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5vbihcImNhbnBsYXlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoc2VsZikuY3NzKHsgb3BhY2l0eTogMSB9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8qKlxuICogR3V0ZW5iZXJnIEJsb2NrcyBGcm9udGVuZCBKU1xuICpcbiAqIEFsbCBibG9ja3MgZnJvbnRlbmQgcmVsYXRlZCBKYXZhU2NyaXB0IGZpbGVzIHNob3VsZCBiZSBpbXBvcnRlZCBoZXJlLlxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0IFwiLi9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanNcIjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJibG9ja3MuZnJvbnRlbmRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2M5X2Jsb2Nrc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjOV9ibG9ja3NcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiYmxvY2tzLnZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Zyb250ZW5kLmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZWFkeU1hbnVhbCIsInBsYXllcklEIiwidmlkZW9JRCIsImpRdWVyeSIsInZpZGVvRGl2Iiwic3R5bGUiLCJhdHRyIiwieW91dHViZUlmcmFtZSIsIm9uIiwicGFyZW50Tm9kZSIsIm9wYWNpdHkiLCJyZXBsYWNlV2l0aCIsInJlYWR5WW91dHViZSIsIllUIiwiUGxheWVyIiwicGxheWVyIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJkaXNhYmxla2IiLCJhdXRvaGlkZSIsIndtb2RlIiwiaGQiLCJlbmFibGVqc2FwaSIsImxvb3AiLCJzaG93aW5mbyIsIml2X2xvYWRfcG9saWN5IiwicmVsIiwibW9kZXN0YnJhbmRpbmciLCJwbGF5bGlzdCIsInZpZGVvSWQiLCJldmVudHMiLCJvblJlYWR5Iiwib25QbGF5ZXJSZWFkeSIsIm9uRXJyb3IiLCJvblBsYXllckVycm9yIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwibXV0ZSIsInBsYXlWaWRlbyIsImdldElmcmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwidHJhbnNpdGlvbiIsImRhdGFzZXQiLCJjOVZpZGVvQ29udGFpbmVyRXJyb3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ5b3V0dWJlQVBJRGlzYWJsZWQiLCJjOV9ibG9ja3NfcGFyYW1zIiwiZGlzYWJsZV95b3V0dWJlX2FwaSIsIiQiLCJ3aW5kb3ciLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlkIiwiZWFjaCIsInNlbGYiLCJjaGVjayIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=