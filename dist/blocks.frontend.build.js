/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block-grid-container/frontend.js":
/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
/***/ (function() {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
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


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUIsQ0FBQyxDQUFDO0lBQ0g7RUFDRCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7OztVQ3JHRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYzktYmxvY2tzLy4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzLy4vc3JjL2Zyb250ZW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbi8qKlxuICogQmxvY2sgRnJvbnRlbmRcbiAqL1xuXG5mdW5jdGlvbiByZWFkeU1hbnVhbChwbGF5ZXJJRCwgdmlkZW9JRCwgalF1ZXJ5KSB7XG5cdGNvbnN0IHZpZGVvRGl2ID0galF1ZXJ5KGAjJHtwbGF5ZXJJRH1gKTtcblx0Y29uc3Qgc3R5bGUgPSB2aWRlb0Rpdi5hdHRyKFwic3R5bGVcIik7XG5cdC8vIGNyZWF0ZSB0aGUgeW91dHViZSBpZnJhbWUgbWFudWFsbHkgd2l0aG91dCBBUElcblx0bGV0IHlvdXR1YmVJZnJhbWUgPSBqUXVlcnkoXG5cdFx0YDxpZnJhbWUgaWQ9XCIke3BsYXllcklEfVwiIGNsYXNzPVwiYzktdmlkZW9cIiB2aWRlby1pZD1cIiR7dmlkZW9JRH1cIiBzdHlsZT1cIiR7c3R5bGV9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPVwiMVwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSUR9P2F1dG9wbGF5PTEmY29udHJvbHM9MCZkaXNhYmxla2I9MCZhdXRvaGlkZT0xJndtb2RlPW9wYXF1ZSZoZD0xJmxvb3A9MSZzaG93aW5mbz0wJml2X2xvYWRfcG9saWN5PTMmcmVsPTAmbW9kZXN0YnJhbmRpbmc9MSZwbGF5bGlzdD0ke3ZpZGVvSUR9JndpZGdldGlkPTEmbXV0ZT0xXCI+PC9pZnJhbWU+YFxuXHQpO1xuXHR5b3V0dWJlSWZyYW1lLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcblx0fSk7XG5cdHZpZGVvRGl2LnJlcGxhY2VXaXRoKHlvdXR1YmVJZnJhbWUpO1xufVxuXG5mdW5jdGlvbiByZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpIHtcblx0aWYgKFlUICYmIFlULlBsYXllcikge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdGxldCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHBsYXllcklELCB7XG5cdFx0XHRwbGF5ZXJWYXJzOiB7XG5cdFx0XHRcdGF1dG9wbGF5OiAxLFxuXHRcdFx0XHRjb250cm9sczogMCxcblx0XHRcdFx0ZGlzYWJsZWtiOiAwLFxuXHRcdFx0XHRhdXRvaGlkZTogMSxcblx0XHRcdFx0d21vZGU6IFwib3BhcXVlXCIsXG5cdFx0XHRcdGhkOiAxLFxuXHRcdFx0XHRlbmFibGVqc2FwaTogMSxcblx0XHRcdFx0bG9vcDogMSxcblx0XHRcdFx0c2hvd2luZm86IDAsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdFx0aXZfbG9hZF9wb2xpY3k6IDMsXG5cdFx0XHRcdHJlbDogMCxcblx0XHRcdFx0bW9kZXN0YnJhbmRpbmc6IDEsXG5cdFx0XHRcdHBsYXlsaXN0OiB2aWRlb0lEXG5cdFx0XHR9LFxuXHRcdFx0dmlkZW9JZDogdmlkZW9JRCxcblx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRvblJlYWR5OiBvblBsYXllclJlYWR5LFxuXHRcdFx0XHRvbkVycm9yOiBvblBsYXllckVycm9yXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCk7XG5cdFx0fSwgMTAwKTtcblx0fVxufVxuXG4vLyBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgdmlkZW8gcGxheWVyIGlzIHJlYWR5LlxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xuXHRldmVudC50YXJnZXQubXV0ZSgpO1xuXHRldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG5cblx0Ly8gdGhpcyAuYzktdmlkZW8gZWxlbWVudCAtPiAuYzktZW1iZWQtY29udGFpbmVyIC0+IC5jOS12aWRlby1jb250YWluZXJcblx0Ly8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuXHRldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG4vLyBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gaWYgdGhlIHZpZGVvIHBsYXllciBoYXMgYW4gZXJyb3IuXG5mdW5jdGlvbiBvblBsYXllckVycm9yKGRhdGEpIHtcblx0Y29uc29sZS5sb2coXG5cdFx0XCJUaGUgWW91VHViZSBJRnJhbWUgUGxheWVyIEFQSSBmaXJlZCBhbiBvbkVycm9yIGV2ZW50IHdpdGggZXJyb3IgY29kZTogXCIgK1xuXHRcdFx0ZGF0YS5kYXRhXG5cdCk7XG5cdGNvbnN0IGlmcmFtZSA9IGRhdGEudGFyZ2V0LmdldElmcmFtZSgpO1xuXHRpZnJhbWUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuXHQvLyBUaGUgZXJyb3Igc3RpbGwgZmxhc2hlcyBmb3IgYSBzcGxpdCBzZWNvbmQsIGNhbid0IHN0b3AgaXQgYnV0IGxldCdzIGF0bGVhc3QgbWFrZSBpdCBsZXNzIGphcnJpbmc6XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IFwiMzAwbXNcIjtcblx0Ly8gSW4gY2FzZSB5b3Ugd2FudCB0byB0YXJnZXQgaXQgd2l0aCBjc3M6XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5jOVZpZGVvQ29udGFpbmVyRXJyb3IgPSBkYXRhLmRhdGE7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRjb25zdCB5b3V0dWJlQVBJRGlzYWJsZWQgPSBjOV9ibG9ja3NfcGFyYW1zLmRpc2FibGVfeW91dHViZV9hcGkgPT09IFwidHJ1ZVwiO1xuXHRjb25zdCAkID0gd2luZG93LmpRdWVyeTtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjOS12aWRlb1wiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbWJlZHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcGxheWVySUQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cdFx0bGV0IGlkID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcInZpZGVvLWlkXCIpO1xuXHRcdGlmICh5b3V0dWJlQVBJRGlzYWJsZWQpIHtcblx0XHRcdHJlYWR5TWFudWFsKHBsYXllcklELCBpZCwgJCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgaWQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGlmIHZpZGVvIGN1c3RvbSBlbGVtZW50cyBhcmUgcHJlc2VudFxuXG5cdCQoXCIuYzktdmlkZW8tY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgY2hlY2sgPSAkKFwiLmM5LXZpZGVvLWN1c3RvbVwiLCB0aGlzKS5sZW5ndGg7XG5cdFx0aWYgKDAgPCBjaGVjaykge1xuXHRcdFx0JChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykub24oXCJjYW5wbGF5XCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHNlbGYpLmNzcyh7IG9wYWNpdHk6IDEgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzIEZyb250ZW5kIEpTXG4gKlxuICogQWxsIGJsb2NrcyBmcm9udGVuZCByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qc1wiO1xuIl0sIm5hbWVzIjpbInJlYWR5TWFudWFsIiwicGxheWVySUQiLCJ2aWRlb0lEIiwialF1ZXJ5IiwidmlkZW9EaXYiLCJzdHlsZSIsImF0dHIiLCJ5b3V0dWJlSWZyYW1lIiwib24iLCJwYXJlbnROb2RlIiwib3BhY2l0eSIsInJlcGxhY2VXaXRoIiwicmVhZHlZb3V0dWJlIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsImRpc2FibGVrYiIsImF1dG9oaWRlIiwid21vZGUiLCJoZCIsImVuYWJsZWpzYXBpIiwibG9vcCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJyZWwiLCJtb2Rlc3RicmFuZGluZyIsInBsYXlsaXN0IiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5Iiwib25FcnJvciIsIm9uUGxheWVyRXJyb3IiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJtdXRlIiwicGxheVZpZGVvIiwiZ2V0SWZyYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZnJhbWUiLCJ0cmFuc2l0aW9uIiwiZGF0YXNldCIsImM5VmlkZW9Db250YWluZXJFcnJvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInlvdXR1YmVBUElEaXNhYmxlZCIsImM5X2Jsb2Nrc19wYXJhbXMiLCJkaXNhYmxlX3lvdXR1YmVfYXBpIiwiJCIsIndpbmRvdyIsImVtYmVkcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCJlYWNoIiwic2VsZiIsImNoZWNrIiwiY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==