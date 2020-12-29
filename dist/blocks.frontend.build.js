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
	console.log('The YouTube IFrame Player API fired an onError event with error code: ' + data.data);
	var iframe = data.target.getIframe();
	iframe.parentNode.parentNode.style.opacity = 0;
	// The error still flashes for a split second, can't stop it but let's atleast make it less jarring:
	iframe.parentNode.parentNode.style.transition = '300ms';
	// In case you want to target it with css:
	iframe.parentNode.parentNode.dataset.c9VideoContainerError = data.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanMiXSwibmFtZXMiOlsicmVhZHlZb3V0dWJlIiwicGxheWVySUQiLCJ2aWRlb0lEIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsImRpc2FibGVrYiIsImF1dG9oaWRlIiwid21vZGUiLCJoZCIsImVuYWJsZWpzYXBpIiwibG9vcCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJyZWwiLCJtb2Rlc3RicmFuZGluZyIsInBsYXlsaXN0IiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5Iiwib25FcnJvciIsIm9uUGxheWVyRXJyb3IiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJtdXRlIiwicGxheVZpZGVvIiwiZ2V0SWZyYW1lIiwicGFyZW50Tm9kZSIsInN0eWxlIiwib3BhY2l0eSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwidHJhbnNpdGlvbiIsImRhdGFzZXQiLCJjOVZpZGVvQ29udGFpbmVyRXJyb3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlkIiwiJCIsIndpbmRvdyIsImpRdWVyeSIsImVhY2giLCJzZWxmIiwiY2hlY2siLCJvbiIsImNzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztR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dUJnRCxFQUF2QjtBQUNBOztBQUVEO0FBQ0EsS0FBTUMsSUFBSUMsT0FBT0MsTUFBakI7O0FBRUFGLEdBQUUscUJBQUYsRUFBeUJHLElBQXpCLENBQThCLFlBQVc7QUFDeEMsTUFBTUMsT0FBTyxJQUFiO0FBQ0EsTUFBTUMsUUFBUUwsRUFBRSxrQkFBRixFQUFzQixJQUF0QixFQUE0QkgsTUFBMUM7QUFDQSxNQUFJLElBQUlRLEtBQVIsRUFBZTtBQUNkTCxLQUFFLGtCQUFGLEVBQXNCLElBQXRCLEVBQTRCTSxFQUE1QixDQUErQixTQUEvQixFQUEwQyxZQUFXO0FBQ3BETixNQUFFSSxJQUFGLEVBQVFHLEdBQVIsQ0FBWSxFQUFFdkIsU0FBUyxDQUFYLEVBQVo7QUFDQSxJQUZEO0FBR0E7QUFDRCxFQVJEO0FBU0EsQ0FwQkQsRTs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJsb2Nrcy5mcm9udGVuZC5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Zyb250ZW5kLmpzXCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogXCJvcGFxdWVcIixcblx0XHRcdFx0aGQ6IDEsXG5cdFx0XHRcdGVuYWJsZWpzYXBpOiAxLFxuXHRcdFx0XHRsb29wOiAxLFxuXHRcdFx0XHRzaG93aW5mbzogMCxcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMyxcblx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMSxcblx0XHRcdFx0cGxheWxpc3Q6IHZpZGVvSURcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0lkOiB2aWRlb0lELFxuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXG5cdFx0XHRcdG9uRXJyb3I6IG9uUGxheWVyRXJyb3IsXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCk7XG5cdFx0fSwgMTAwKTtcblx0fVxufVxuXG4vLyBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gcGxheWVyIGlzIHJlYWR5LlxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xuXHRldmVudC50YXJnZXQubXV0ZSgpO1xuXHRldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG5cblx0Ly8gdGhpcyAuYzktdmlkZW8gZWxlbWVudCAtPiAuYzktZW1iZWQtY29udGFpbmVyIC0+IC5jOS12aWRlby1jb250YWluZXJcblx0Ly8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuXHRldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG4vLyBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gaWYgdGhlIHZpZGVvIHBsYXllciBoYXMgYW4gZXJyb3IuXG5mdW5jdGlvbiBvblBsYXllckVycm9yKGRhdGEpIHtcblx0Y29uc29sZS5sb2coJ1RoZSBZb3VUdWJlIElGcmFtZSBQbGF5ZXIgQVBJIGZpcmVkIGFuIG9uRXJyb3IgZXZlbnQgd2l0aCBlcnJvciBjb2RlOiAnICsgZGF0YS5kYXRhKTtcblx0Y29uc3QgaWZyYW1lID0gZGF0YS50YXJnZXQuZ2V0SWZyYW1lKCk7XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cdC8vIFRoZSBlcnJvciBzdGlsbCBmbGFzaGVzIGZvciBhIHNwbGl0IHNlY29uZCwgY2FuJ3Qgc3RvcCBpdCBidXQgbGV0J3MgYXRsZWFzdCBtYWtlIGl0IGxlc3MgamFycmluZzpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJzMwMG1zJztcblx0Ly8gSW4gY2FzZSB5b3Ugd2FudCB0byB0YXJnZXQgaXQgd2l0aCBjc3M6XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5jOVZpZGVvQ29udGFpbmVyRXJyb3IgPSBkYXRhLmRhdGE7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRsZXQgZW1iZWRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImM5LXZpZGVvXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGVtYmVkcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBwbGF5ZXJJRCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcblx0XHRsZXQgaWQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwidmlkZW8taWRcIik7XG5cdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCBpZCk7XG5cdH1cblxuXHQvLyBpZiB2aWRlbyBjdXN0b20gZWxlbWVudHMgYXJlIHByZXNlbnRcblx0Y29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cblx0JChcIi5jOS12aWRlby1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBjaGVjayA9ICQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLmxlbmd0aDtcblx0XHRpZiAoMCA8IGNoZWNrKSB7XG5cdFx0XHQkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5vbihcImNhbnBsYXlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoc2VsZikuY3NzKHsgb3BhY2l0eTogMSB9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8qKlxuICogR3V0ZW5iZXJnIEJsb2NrcyBGcm9udGVuZCBKU1xuICpcbiAqIEFsbCBibG9ja3MgZnJvbnRlbmQgcmVsYXRlZCBKYXZhU2NyaXB0IGZpbGVzIHNob3VsZCBiZSBpbXBvcnRlZCBoZXJlLlxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cbiAqXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXG4gKi9cblxuaW1wb3J0IFwiLi9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanNcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=