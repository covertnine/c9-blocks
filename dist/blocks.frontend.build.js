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
    var spinTargets = document.querySelectorAll("[data-animate='spin']");
    var moveXTargets = document.querySelectorAll("[data-animate='moveX']");
    var moveYTargets = document.querySelectorAll("[data-animate='moveY']");

    // target spins
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = spinTargets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            gsap.to(element, {
                scrollTrigger: element,
                rotation: 360,
                duration: 3,
                delay: element.dataset.animateDelay
            });
        }

        // target move x
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = moveXTargets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _element = _step2.value;

            gsap.to(_element, {
                scrollTrigger: _element,
                rotation: 360,
                duration: 3,
                delay: _element.dataset.animateDelay
            });
        }

        // target move y
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = moveYTargets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _element2 = _step3.value;

            gsap.to(_element2, {
                scrollTrigger: _element2,
                rotation: 360,
                duration: 3,
                delay: _element2.dataset.animateDelay
            });
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTE4YTVkOTdjNTM2ZDllM2RkNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC9mcm9udGVuZC5qcyJdLCJuYW1lcyI6WyJyZWFkeVlvdXR1YmUiLCJwbGF5ZXJJRCIsInZpZGVvSUQiLCJZVCIsIlBsYXllciIsInBsYXllciIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiYXV0b2hpZGUiLCJ3bW9kZSIsImhkIiwiZW5hYmxlanNhcGkiLCJsb29wIiwic2hvd2luZm8iLCJpdl9sb2FkX3BvbGljeSIsInJlbCIsIm1vZGVzdGJyYW5kaW5nIiwicGxheWxpc3QiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uUGxheWVyUmVhZHkiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJtdXRlIiwicGxheVZpZGVvIiwiZiIsInBhcmVudE5vZGUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlkIiwiJCIsIndpbmRvdyIsImpRdWVyeSIsImVhY2giLCJzZWxmIiwiY2hlY2siLCJvbiIsImNzcyIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJzcGluVGFyZ2V0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb3ZlWFRhcmdldHMiLCJtb3ZlWVRhcmdldHMiLCJlbGVtZW50IiwidG8iLCJzY3JvbGxUcmlnZ2VyIiwicm90YXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZGF0YXNl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O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWlDckQsOEJBQW9CUixZQUFwQixtSUFBa0M7QUFBQSxnQkFBekJDLFNBQXlCOztBQUM5QlAsaUJBQUtRLEVBQUwsQ0FBUUQsU0FBUixFQUFpQjtBQUNiRSwrQkFBZUYsU0FERjtBQUViRywwQkFBVSxHQUZHO0FBR2JDLDBCQUFVLENBSEc7QUFJYkMsdUJBQU9MLFVBQVFNLE9BQVIsQ0FBZ0JDO0FBSlYsYUFBakI7QUFNSDtBQXhDb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlDeEQsQ0F6Q0QsRSIsImZpbGUiOiIuL2Rpc3QvYmxvY2tzLmZyb250ZW5kLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDc4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMThhNWQ5N2M1MzZkOWUzZGQ0YyIsIi8qKlxuICogR3V0ZW5iZXJnIEJsb2NrcyBGcm9udGVuZCBKU1xuICpcbiAqIEFsbCBibG9ja3MgZnJvbnRlbmQgcmVsYXRlZCBKYXZhU2NyaXB0IGZpbGVzIHNob3VsZCBiZSBpbXBvcnRlZCBoZXJlLlxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0IFwiLi9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanNcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9hbmltYXRpb25zLXBhbmVsL2Zyb250ZW5kLmpzXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vKipcbiAqIEJsb2NrIEZyb250ZW5kXG4gKi9cblxuZnVuY3Rpb24gcmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKSB7XG5cdGlmIChZVCAmJiBZVC5QbGF5ZXIpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRsZXQgcGxheWVyID0gbmV3IFlULlBsYXllcihwbGF5ZXJJRCwge1xuXHRcdFx0cGxheWVyVmFyczoge1xuXHRcdFx0XHRhdXRvcGxheTogMSxcblx0XHRcdFx0Y29udHJvbHM6IDAsXG5cdFx0XHRcdGRpc2FibGVrYjogMCxcblx0XHRcdFx0YXV0b2hpZGU6IDEsXG5cdFx0XHRcdHdtb2RlOiBcIm9wYXF1ZVwiLFxuXHRcdFx0XHRoZDogMSxcblx0XHRcdFx0ZW5hYmxlanNhcGk6IDEsXG5cdFx0XHRcdGxvb3A6IDEsXG5cdFx0XHRcdHNob3dpbmZvOiAwLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRcdGl2X2xvYWRfcG9saWN5OiAzLFxuXHRcdFx0XHRyZWw6IDAsXG5cdFx0XHRcdG1vZGVzdGJyYW5kaW5nOiAxLFxuXHRcdFx0XHRwbGF5bGlzdDogdmlkZW9JRFxuXHRcdFx0fSxcblx0XHRcdHZpZGVvSWQ6IHZpZGVvSUQsXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0b25SZWFkeTogb25QbGF5ZXJSZWFkeVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIHBsYXllciBpcyByZWFkeS5cbmZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0ZXZlbnQudGFyZ2V0Lm11dGUoKTtcblx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXG5cdC8vIHRoaXMgLmM5LXZpZGVvIGVsZW1lbnQgLT4gLmM5LWVtYmVkLWNvbnRhaW5lciAtPiAuYzktdmlkZW8tY29udGFpbmVyXG5cdC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcblx0ZXZlbnQudGFyZ2V0LmYucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjOS12aWRlb1wiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbWJlZHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcGxheWVySUQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cdFx0bGV0IGlkID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcInZpZGVvLWlkXCIpO1xuXHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgaWQpO1xuXHR9XG5cblx0Ly8gaWYgdmlkZW8gY3VzdG9tIGVsZW1lbnRzIGFyZSBwcmVzZW50XG5cdGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5cdCQoXCIuYzktdmlkZW8tY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgY2hlY2sgPSAkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5sZW5ndGg7XG5cdFx0aWYgKDAgPCBjaGVjaykge1xuXHRcdFx0JChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykub24oXCJjYW5wbGF5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHNlbGYpLmNzcyh7IG9wYWNpdHk6IDEgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzIiwiLyoqXG4gKiBBbmltYXRpb25zIEZyb250ZW5kXG4gKi9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gc2ltcGxlIHRpbWVsaW5lIHNldHVwc1xuICAgIGNvbnN0IGdzYXAgPSB3aW5kb3cuZ3NhcDtcbiAgICBjb25zdCBTY3JvbGxUcmlnZ2VyID0gd2luZG93LlNjcm9sbFRyaWdnZXI7XG4gICAgLy8gcmVnaXN0ZXIgcGx1Z2luXG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICBjb25zdCBzcGluVGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbmltYXRlPSdzcGluJ11cIik7XG4gICAgY29uc3QgbW92ZVhUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1hdGU9J21vdmVYJ11cIik7XG4gICAgY29uc3QgbW92ZVlUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFuaW1hdGU9J21vdmVZJ11cIik7XG5cbiAgICAvLyB0YXJnZXQgc3BpbnNcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIHNwaW5UYXJnZXRzKSB7XG4gICAgICAgIGdzYXAudG8oZWxlbWVudCwge1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjogZWxlbWVudCxcbiAgICAgICAgICAgIHJvdGF0aW9uOiAzNjAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMyxcbiAgICAgICAgICAgIGRlbGF5OiBlbGVtZW50LmRhdGFzZXQuYW5pbWF0ZURlbGF5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBtb3ZlIHhcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIG1vdmVYVGFyZ2V0cykge1xuICAgICAgICBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IGVsZW1lbnQsXG4gICAgICAgICAgICByb3RhdGlvbjogMzYwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgICAgICBkZWxheTogZWxlbWVudC5kYXRhc2V0LmFuaW1hdGVEZWxheVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgbW92ZSB5XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBtb3ZlWVRhcmdldHMpIHtcbiAgICAgICAgZ3NhcC50byhlbGVtZW50LCB7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiBlbGVtZW50LFxuICAgICAgICAgICAgcm90YXRpb246IDM2MCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICAgICAgZGVsYXk6IGVsZW1lbnQuZGF0YXNldC5hbmltYXRlRGVsYXlcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25zLXBhbmVsL2Zyb250ZW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==