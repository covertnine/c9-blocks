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
/******/ 	return __webpack_require__(__webpack_require__.s = 401);
/******/ })
/************************************************************************/
/******/ ({

/***/ 401:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(/*! ./blocks/block-grid-container/frontend.js */ 402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_block_toggles_frontend_js__ = __webpack_require__(/*! ./blocks/block-toggles/frontend.js */ 403);
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

/***/ 402:
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

/* eslint-disable no-undef */
function readyYoutube(player_id, video_id) {
	if (YT && YT.Player) {
		// eslint-disable-next-line no-unused-vars
		var player = new YT.Player(player_id, {
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
		setTimeout(function () {
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

document.addEventListener("DOMContentLoaded", function () {
	var embeds = document.getElementsByClassName("c9-video");
	for (var i = 0; i < embeds.length; i++) {
		var player_id = embeds[i].getAttribute("id");
		var id = embeds[i].getAttribute("video-id");
		readyYoutube(player_id, id);
	}

	// if video custom elements are present
	var $ = window.jQuery;

	$(".c9-video-container").each(function () {
		var self = this;
		var check = $(".c9-video-custom", this).length;
		if (check > 0) {
			$(".c9-video-custom", this).on("canplay", function () {
				$(self).css({ opacity: 1 });
			});
		}
	});
});

/***/ }),

/***/ 403:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUxNDEzNmRkM2NmNzBmNDNlZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9jay10b2dnbGVzL2Zyb250ZW5kLmpzIl0sIm5hbWVzIjpbInJlYWR5WW91dHViZSIsInBsYXllcl9pZCIsInZpZGVvX2lkIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsImRpc2FibGVrYiIsImF1dG9oaWRlIiwid21vZGUiLCJoZCIsImVuYWJsZWpzYXBpIiwibG9vcCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJyZWwiLCJtb2Rlc3RicmFuZGluZyIsInBsYXlsaXN0IiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5Iiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwibXV0ZSIsInBsYXlWaWRlbyIsImEiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJvcGFjaXR5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZW1iZWRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJlYWNoIiwic2VsZiIsImNoZWNrIiwib24iLCJjc3MiLCIkdGhpcyIsImFkZENsYXNzIiwiYXR0ciIsImljb25JZCIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQSxTQUFTQSxZQUFULENBQXNCQyxTQUF0QixFQUFpQ0MsUUFBakMsRUFBMkM7QUFDMUMsS0FBSUMsTUFBTUEsR0FBR0MsTUFBYixFQUFxQjtBQUNwQjtBQUNBLE1BQUlDLFNBQVMsSUFBSUYsR0FBR0MsTUFBUCxDQUFjSCxTQUFkLEVBQXlCO0FBQ3JDSyxlQUFZO0FBQ1hDLGNBQVUsQ0FEQztBQUVYQyxjQUFVLENBRkM7QUFHWEMsZUFBVyxDQUhBO0FBSVhDLGNBQVUsQ0FKQztBQUtYQyxXQUFPLFFBTEk7QUFNWEMsUUFBSSxDQU5PO0FBT1hDLGlCQUFhLENBUEY7QUFRWEMsVUFBTSxDQVJLO0FBU1hDLGNBQVUsQ0FUQztBQVVYQyxvQkFBZ0IsQ0FWTDtBQVdYQyxTQUFLLENBWE07QUFZWEMsb0JBQWdCLENBWkw7QUFhWEMsY0FBVWpCO0FBYkMsSUFEeUI7QUFnQnJDa0IsWUFBU2xCLFFBaEI0QjtBQWlCckNtQixXQUFRO0FBQ1BDLGFBQVNDO0FBREY7QUFqQjZCLEdBQXpCLENBQWI7QUFxQkEsRUF2QkQsTUF1Qk87QUFDTkMsYUFBVyxZQUFXO0FBQ3JCeEIsZ0JBQWFDLFNBQWIsRUFBd0JDLFFBQXhCO0FBQ0EsR0FGRCxFQUVHLEdBRkg7QUFHQTtBQUNEOztBQUVEO0FBQ0EsU0FBU3FCLGFBQVQsQ0FBdUJFLEtBQXZCLEVBQThCO0FBQzdCQSxPQUFNQyxNQUFOLENBQWFDLElBQWI7QUFDQUYsT0FBTUMsTUFBTixDQUFhRSxTQUFiOztBQUVBO0FBQ0FILE9BQU1DLE1BQU4sQ0FBYUcsQ0FBYixDQUFlQyxVQUFmLENBQTBCQSxVQUExQixDQUFxQ0MsS0FBckMsQ0FBMkNDLE9BQTNDLEdBQXFELENBQXJEO0FBQ0E7O0FBRURDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3hELEtBQUlDLFNBQVNGLFNBQVNHLHNCQUFULENBQWdDLFVBQWhDLENBQWI7QUFDQSxNQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsT0FBT0csTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3ZDLE1BQUlwQyxZQUFZa0MsT0FBT0UsQ0FBUCxFQUFVRSxZQUFWLENBQXVCLElBQXZCLENBQWhCO0FBQ0EsTUFBSUMsS0FBS0wsT0FBT0UsQ0FBUCxFQUFVRSxZQUFWLENBQXVCLFVBQXZCLENBQVQ7QUFDQXZDLGVBQWFDLFNBQWIsRUFBd0J1QyxFQUF4QjtBQUNBOztBQUVEO0FBQ0EsS0FBTUMsSUFBSUMsT0FBT0MsTUFBakI7O0FBRUFGLEdBQUUscUJBQUYsRUFBeUJHLElBQXpCLENBQThCLFlBQVc7QUFDeEMsTUFBTUMsT0FBTyxJQUFiO0FBQ0EsTUFBTUMsUUFBUUwsRUFBRSxrQkFBRixFQUFzQixJQUF0QixFQUE0QkgsTUFBMUM7QUFDQSxNQUFJUSxRQUFRLENBQVosRUFBZTtBQUNkTCxLQUFFLGtCQUFGLEVBQXNCLElBQXRCLEVBQTRCTSxFQUE1QixDQUErQixTQUEvQixFQUEwQyxZQUFXO0FBQ3BETixNQUFFSSxJQUFGLEVBQVFHLEdBQVIsQ0FBWSxFQUFFaEIsU0FBUyxDQUFYLEVBQVo7QUFDQSxJQUZEO0FBR0E7QUFDRCxFQVJEO0FBU0EsQ0FwQkQsRTs7Ozs7Ozs7Ozs7QUN6Q0FDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3hELEtBQU1PLElBQUlDLE9BQU9DLE1BQWpCOztBQUVBRixHQUFFLGdEQUFGLEVBQW9ERyxJQUFwRCxDQUF5RCxZQUFXO0FBQ25FLE1BQU1LLFFBQVFSLEVBQUUsSUFBRixDQUFkO0FBQ0FRLFFBQU1DLFFBQU4sQ0FBZSx1QkFBZjs7QUFFQTtBQUNBLE1BQU1WLEtBQUtDLEVBQUUsbUNBQUYsRUFBdUMsSUFBdkMsRUFBNkNVLElBQTdDLENBQWtELElBQWxELENBQVg7O0FBRUE7QUFDQSxNQUFNQyxTQUFTWCxFQUFFLDBCQUFGLEVBQThCLElBQTlCLEVBQW9DVSxJQUFwQyxDQUF5QyxJQUF6QyxDQUFmOztBQUVBO0FBQ0FWLFVBQU1ELEVBQU4sRUFBWU8sRUFBWixDQUFlLGtCQUFmLEVBQW1DLFlBQU07QUFDeENOLFdBQU1XLE1BQU4sMkNBQW9EQyxXQUFwRCxDQUNDLHVCQUREO0FBR0EsR0FKRDtBQUtBWixVQUFNRCxFQUFOLEVBQVlPLEVBQVosQ0FBZSxrQkFBZixFQUFtQyxZQUFNO0FBQ3hDTixXQUFNVyxNQUFOLDJDQUFvREMsV0FBcEQsQ0FDQyx1QkFERDtBQUdBLEdBSkQ7QUFLQSxFQXJCRDtBQXNCQSxDQXpCRCxFIiwiZmlsZSI6Ii4vZGlzdC9ibG9ja3MuZnJvbnRlbmQuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU1MTQxMzZkZDNjZjcwZjQzZWQyIiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzIEZyb250ZW5kIEpTXG4gKlxuICogQWxsIGJsb2NrcyBmcm9udGVuZCByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qc1wiXG5pbXBvcnQgXCIuL2Jsb2Nrcy9ibG9jay10b2dnbGVzL2Zyb250ZW5kLmpzXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuZnVuY3Rpb24gcmVhZHlZb3V0dWJlKHBsYXllcl9pZCwgdmlkZW9faWQpIHtcblx0aWYgKFlUICYmIFlULlBsYXllcikge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdGxldCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHBsYXllcl9pZCwge1xuXHRcdFx0cGxheWVyVmFyczoge1xuXHRcdFx0XHRhdXRvcGxheTogMSxcblx0XHRcdFx0Y29udHJvbHM6IDAsXG5cdFx0XHRcdGRpc2FibGVrYjogMCxcblx0XHRcdFx0YXV0b2hpZGU6IDEsXG5cdFx0XHRcdHdtb2RlOiBcIm9wYXF1ZVwiLFxuXHRcdFx0XHRoZDogMSxcblx0XHRcdFx0ZW5hYmxlanNhcGk6IDEsXG5cdFx0XHRcdGxvb3A6IDEsXG5cdFx0XHRcdHNob3dpbmZvOiAwLFxuXHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMyxcblx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMSxcblx0XHRcdFx0cGxheWxpc3Q6IHZpZGVvX2lkXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9JZDogdmlkZW9faWQsXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0b25SZWFkeTogb25QbGF5ZXJSZWFkeVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVyX2lkLCB2aWRlb19pZCk7XG5cdFx0fSwgMTAwKTtcblx0fVxufVxuXG4vLyBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gcGxheWVyIGlzIHJlYWR5LlxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xuXHRldmVudC50YXJnZXQubXV0ZSgpO1xuXHRldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG5cblx0Ly8gdGhpcyAuYzktdmlkZW8gZWxlbWVudCAtPiAuYzktZW1iZWQtY29udGFpbmVyIC0+IC5jOS12aWRlby1jb250YWluZXJcblx0ZXZlbnQudGFyZ2V0LmEucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjOS12aWRlb1wiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbWJlZHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcGxheWVyX2lkID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdGxldCBpZCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJ2aWRlby1pZFwiKTtcblx0XHRyZWFkeVlvdXR1YmUocGxheWVyX2lkLCBpZCk7XG5cdH1cblxuXHQvLyBpZiB2aWRlbyBjdXN0b20gZWxlbWVudHMgYXJlIHByZXNlbnRcblx0Y29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cblx0JChcIi5jOS12aWRlby1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBjaGVjayA9ICQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLmxlbmd0aDtcblx0XHRpZiAoY2hlY2sgPiAwKSB7XG5cdFx0XHQkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5vbihcImNhbnBsYXlcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoc2VsZikuY3NzKHsgb3BhY2l0eTogMSB9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0Y29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cblx0JChcIi5jOS10b2dnbGVzLXRvZ2dsZTpub3QoLnRvZ2dsZS1jb2xsYXBzZS1yZWFkeSlcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0JHRoaXMuYWRkQ2xhc3MoXCJ0b2dnbGUtY29sbGFwc2UtcmVhZHlcIik7XG5cblx0XHQvLyBncmFiIGNvbGxhcHNlIGlkXG5cdFx0Y29uc3QgaWQgPSAkKFwiLmM5LXRvZ2dsZXMtaXRlbS1jb250ZW50LmNvbGxhcHNlXCIsIHRoaXMpLmF0dHIoXCJpZFwiKTtcblxuXHRcdC8vIGdyYWIgcm90YXRlIGFycm93IGlkXG5cdFx0Y29uc3QgaWNvbklkID0gJChcIi5jOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiLCB0aGlzKS5hdHRyKFwiaWRcIik7XG5cblx0XHQvLyBpbnNlcnQgaG9vayBpbnRvIGNvbGxhcHNlIGFuZCBleHBhbmQgZXZlbnRcblx0XHQkKGAjJHtpZH1gKS5vbihcInNob3cuYnMuY29sbGFwc2VcIiwgKCkgPT4ge1xuXHRcdFx0JChgIyR7aWNvbklkfSBzcGFuLmM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZSA+IHN2Z2ApLnRvZ2dsZUNsYXNzKFxuXHRcdFx0XHRcImM5LXRvZ2dsZS1pdGVtLWV4cGFuZFwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdCQoYCMke2lkfWApLm9uKFwiaGlkZS5icy5jb2xsYXBzZVwiLCAoKSA9PiB7XG5cdFx0XHQkKGAjJHtpY29uSWR9IHNwYW4uYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlID4gc3ZnYCkudG9nZ2xlQ2xhc3MoXG5cdFx0XHRcdFwiYzktdG9nZ2xlLWl0ZW0tZXhwYW5kXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2Jsb2NrLXRvZ2dsZXMvZnJvbnRlbmQuanMiXSwic291cmNlUm9vdCI6IiJ9