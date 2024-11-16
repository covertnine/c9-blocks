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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsU0FBUyxFQUFFLFlBQVk7UUFDckQ4QyxDQUFDLENBQUNTLElBQUksQ0FBQyxDQUFDRSxHQUFHLENBQUM7VUFBRXZELE9BQU8sRUFBRTtRQUFFLENBQUMsQ0FBQztNQUM1QixDQUFDLENBQUM7SUFDSDtFQUNELENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQzs7Ozs7O1VDckdGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jOS1ibG9ja3MvLi9zcmMvYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jOS1ibG9ja3MvLi9zcmMvZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5TWFudWFsKHBsYXllcklELCB2aWRlb0lELCBqUXVlcnkpIHtcblx0Y29uc3QgdmlkZW9EaXYgPSBqUXVlcnkoYCMke3BsYXllcklEfWApO1xuXHRjb25zdCBzdHlsZSA9IHZpZGVvRGl2LmF0dHIoJ3N0eWxlJyk7XG5cdC8vIGNyZWF0ZSB0aGUgeW91dHViZSBpZnJhbWUgbWFudWFsbHkgd2l0aG91dCBBUElcblx0bGV0IHlvdXR1YmVJZnJhbWUgPSBqUXVlcnkoXG5cdFx0YDxpZnJhbWUgaWQ9XCIke3BsYXllcklEfVwiIGNsYXNzPVwiYzktdmlkZW9cIiB2aWRlby1pZD1cIiR7dmlkZW9JRH1cIiBzdHlsZT1cIiR7c3R5bGV9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPVwiMVwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSUR9P2F1dG9wbGF5PTEmY29udHJvbHM9MCZkaXNhYmxla2I9MCZhdXRvaGlkZT0xJndtb2RlPW9wYXF1ZSZoZD0xJmxvb3A9MSZzaG93aW5mbz0wJml2X2xvYWRfcG9saWN5PTMmcmVsPTAmbW9kZXN0YnJhbmRpbmc9MSZwbGF5bGlzdD0ke3ZpZGVvSUR9JndpZGdldGlkPTEmbXV0ZT0xXCI+PC9pZnJhbWU+YFxuXHQpO1xuXHR5b3V0dWJlSWZyYW1lLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9KTtcblx0dmlkZW9EaXYucmVwbGFjZVdpdGgoeW91dHViZUlmcmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogJ29wYXF1ZScsXG5cdFx0XHRcdGhkOiAxLFxuXHRcdFx0XHRlbmFibGVqc2FwaTogMSxcblx0XHRcdFx0bG9vcDogMSxcblx0XHRcdFx0c2hvd2luZm86IDAsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdFx0aXZfbG9hZF9wb2xpY3k6IDMsXG5cdFx0XHRcdHJlbDogMCxcblx0XHRcdFx0bW9kZXN0YnJhbmRpbmc6IDEsXG5cdFx0XHRcdHBsYXlsaXN0OiB2aWRlb0lELFxuXHRcdFx0fSxcblx0XHRcdHZpZGVvSWQ6IHZpZGVvSUQsXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0b25SZWFkeTogb25QbGF5ZXJSZWFkeSxcblx0XHRcdFx0b25FcnJvcjogb25QbGF5ZXJFcnJvcixcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIHBsYXllciBpcyByZWFkeS5cbmZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0ZXZlbnQudGFyZ2V0Lm11dGUoKTtcblx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXG5cdC8vIHRoaXMgLmM5LXZpZGVvIGVsZW1lbnQgLT4gLmM5LWVtYmVkLWNvbnRhaW5lciAtPiAuYzktdmlkZW8tY29udGFpbmVyXG5cdC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcblx0ZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIGlmIHRoZSB2aWRlbyBwbGF5ZXIgaGFzIGFuIGVycm9yLlxuZnVuY3Rpb24gb25QbGF5ZXJFcnJvcihkYXRhKSB7XG5cdGNvbnNvbGUubG9nKFxuXHRcdCdUaGUgWW91VHViZSBJRnJhbWUgUGxheWVyIEFQSSBmaXJlZCBhbiBvbkVycm9yIGV2ZW50IHdpdGggZXJyb3IgY29kZTogJyArXG5cdFx0XHRkYXRhLmRhdGFcblx0KTtcblx0Y29uc3QgaWZyYW1lID0gZGF0YS50YXJnZXQuZ2V0SWZyYW1lKCk7XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cdC8vIFRoZSBlcnJvciBzdGlsbCBmbGFzaGVzIGZvciBhIHNwbGl0IHNlY29uZCwgY2FuJ3Qgc3RvcCBpdCBidXQgbGV0J3MgYXRsZWFzdCBtYWtlIGl0IGxlc3MgamFycmluZzpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJzMwMG1zJztcblx0Ly8gSW4gY2FzZSB5b3Ugd2FudCB0byB0YXJnZXQgaXQgd2l0aCBjc3M6XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5jOVZpZGVvQ29udGFpbmVyRXJyb3IgPSBkYXRhLmRhdGE7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHlvdXR1YmVBUElEaXNhYmxlZCA9IGM5X2Jsb2Nrc19wYXJhbXMuZGlzYWJsZV95b3V0dWJlX2FwaSA9PT0gJ3RydWUnO1xuXHRjb25zdCAkID0gd2luZG93LmpRdWVyeTtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2M5LXZpZGVvJyk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZW1iZWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHBsYXllcklEID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZSgnaWQnKTtcblx0XHRsZXQgaWQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKCd2aWRlby1pZCcpO1xuXHRcdGlmICh5b3V0dWJlQVBJRGlzYWJsZWQpIHtcblx0XHRcdHJlYWR5TWFudWFsKHBsYXllcklELCBpZCwgJCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgaWQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGlmIHZpZGVvIGN1c3RvbSBlbGVtZW50cyBhcmUgcHJlc2VudFxuXG5cdCQoJy5jOS12aWRlby1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBjaGVjayA9ICQoJy5jOS12aWRlby1jdXN0b20nLCB0aGlzKS5sZW5ndGg7XG5cdFx0aWYgKDAgPCBjaGVjaykge1xuXHRcdFx0JCgnLmM5LXZpZGVvLWN1c3RvbScsIHRoaXMpLm9uKCdjYW5wbGF5JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHNlbGYpLmNzcyh7IG9wYWNpdHk6IDEgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBHdXRlbmJlcmcgQmxvY2tzIEZyb250ZW5kIEpTXG4gKlxuICogQWxsIGJsb2NrcyBmcm9udGVuZCByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBibG9jayBmb2xkZXIgaW4gdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZVxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2UgdGhpcyBpcyB0aGUgZmlsZSB0aGF0XG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cbiAqL1xuXG5pbXBvcnQgJy4vYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzJztcbiJdLCJuYW1lcyI6WyJyZWFkeU1hbnVhbCIsInBsYXllcklEIiwidmlkZW9JRCIsImpRdWVyeSIsInZpZGVvRGl2IiwiY29uY2F0Iiwic3R5bGUiLCJhdHRyIiwieW91dHViZUlmcmFtZSIsIm9uIiwicGFyZW50Tm9kZSIsIm9wYWNpdHkiLCJyZXBsYWNlV2l0aCIsInJlYWR5WW91dHViZSIsIllUIiwiUGxheWVyIiwicGxheWVyIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJkaXNhYmxla2IiLCJhdXRvaGlkZSIsIndtb2RlIiwiaGQiLCJlbmFibGVqc2FwaSIsImxvb3AiLCJzaG93aW5mbyIsIml2X2xvYWRfcG9saWN5IiwicmVsIiwibW9kZXN0YnJhbmRpbmciLCJwbGF5bGlzdCIsInZpZGVvSWQiLCJldmVudHMiLCJvblJlYWR5Iiwib25QbGF5ZXJSZWFkeSIsIm9uRXJyb3IiLCJvblBsYXllckVycm9yIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwibXV0ZSIsInBsYXlWaWRlbyIsImdldElmcmFtZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwidHJhbnNpdGlvbiIsImRhdGFzZXQiLCJjOVZpZGVvQ29udGFpbmVyRXJyb3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ5b3V0dWJlQVBJRGlzYWJsZWQiLCJjOV9ibG9ja3NfcGFyYW1zIiwiZGlzYWJsZV95b3V0dWJlX2FwaSIsIiQiLCJ3aW5kb3ciLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlkIiwiZWFjaCIsInNlbGYiLCJjaGVjayIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=