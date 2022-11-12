/******/ (function () {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ './src/blocks/block-grid-container/frontend.js':
			/*!*****************************************************!*\
  !*** ./src/blocks/block-grid-container/frontend.js ***!
  \*****************************************************/
			/***/ function (
				__unused_webpack_module,
				__unused_webpack_exports,
				__webpack_require__
			) {
				/* provided dependency */ var console = __webpack_require__(
					/*! ./node_modules/console-browserify/index.js */ './node_modules/console-browserify/index.js'
				);
				/* eslint-disable no-undef */

				/**
				 * Block Frontend
				 */

				function readyManual(playerID, videoID, jQuery) {
					const videoDiv = jQuery(`#${playerID}`);
					const style = videoDiv.attr('style');
					// create the youtube iframe manually without API
					let youtubeIframe = jQuery(
						`<iframe id="${playerID}" class="c9-video" video-id="${videoID}" style="${style}" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0&disablekb=0&autohide=1&wmode=opaque&hd=1&loop=1&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&playlist=${videoID}&widgetid=1&mute=1"></iframe>`
					);
					youtubeIframe.on('load', function () {
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
								wmode: 'opaque',
								hd: 1,
								enablejsapi: 1,
								loop: 1,
								showinfo: 0,
								// eslint-disable-next-line camelcase
								iv_load_policy: 3,
								rel: 0,
								modestbranding: 1,
								playlist: videoID,
							},
							videoId: videoID,
							events: {
								onReady: onPlayerReady,
								onError: onPlayerError,
							},
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
					console.log(
						'The YouTube IFrame Player API fired an onError event with error code: ' +
							data.data
					);
					const iframe = data.target.getIframe();
					iframe.parentNode.parentNode.style.opacity = 0;
					// The error still flashes for a split second, can't stop it but let's atleast make it less jarring:
					iframe.parentNode.parentNode.style.transition = '300ms';
					// In case you want to target it with css:
					iframe.parentNode.parentNode.dataset.c9VideoContainerError =
						data.data;
				}
				document.addEventListener('DOMContentLoaded', function () {
					const youtubeAPIDisabled =
						c9_blocks_params.disable_youtube_api === 'true';
					const $ = window.jQuery;
					let embeds = document.getElementsByClassName('c9-video');
					for (let i = 0; i < embeds.length; i++) {
						let playerID = embeds[i].getAttribute('id');
						let id = embeds[i].getAttribute('video-id');
						if (youtubeAPIDisabled) {
							readyManual(playerID, id, $);
						} else {
							readyYoutube(playerID, id);
						}
					}

					// if video custom elements are present

					$('.c9-video-container').each(function () {
						const self = this;
						const check = $('.c9-video-custom', this).length;
						if (0 < check) {
							$('.c9-video-custom', this).on('canplay', function () {
								$(self).css({
									opacity: 1,
								});
							});
						}
					});
				});

				/***/
			},

		/***/ './src/frontend.js':
			/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				'use strict';
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _blocks_block_grid_container_frontend_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./blocks/block-grid-container/frontend.js */ './src/blocks/block-grid-container/frontend.js'
					);
				/* harmony import */ var _blocks_block_grid_container_frontend_js__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						_blocks_block_grid_container_frontend_js__WEBPACK_IMPORTED_MODULE_0__
					);
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

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ id: moduleId,
			/******/ loaded: false,
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Flag the module as loaded
		/******/ module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = __webpack_modules__;
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/chunk loaded */
	/******/ !(function () {
		/******/ var deferred = [];
		/******/ __webpack_require__.O = function (result, chunkIds, fn, priority) {
			/******/ if (chunkIds) {
				/******/ priority = priority || 0;
				/******/ for (
					var i = deferred.length;
					i > 0 && deferred[i - 1][2] > priority;
					i--
				)
					deferred[i] = deferred[i - 1];
				/******/ deferred[i] = [chunkIds, fn, priority];
				/******/ return;
				/******/
			}
			/******/ var notFulfilled = Infinity;
			/******/ for (var i = 0; i < deferred.length; i++) {
				/******/ var chunkIds = deferred[i][0];
				/******/ var fn = deferred[i][1];
				/******/ var priority = deferred[i][2];
				/******/ var fulfilled = true;
				/******/ for (var j = 0; j < chunkIds.length; j++) {
					/******/ if (
						(priority & (1 === 0) || notFulfilled >= priority) &&
						Object.keys(__webpack_require__.O).every(function (key) {
							return __webpack_require__.O[key](chunkIds[j]);
						})
					) {
						/******/ chunkIds.splice(j--, 1);
						/******/
					} else {
						/******/ fulfilled = false;
						/******/ if (priority < notFulfilled) notFulfilled = priority;
						/******/
					}
					/******/
				}
				/******/ if (fulfilled) {
					/******/ deferred.splice(i--, 1);
					/******/ var r = fn();
					/******/ if (r !== undefined) result = r;
					/******/
				}
				/******/
			}
			/******/ return result;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/compat get default export */
	/******/ !(function () {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = function (module) {
			/******/ var getter =
				module && module.__esModule
					? /******/ function () {
							return module['default'];
					  }
					: /******/ function () {
							return module;
					  };
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ !(function () {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = function (exports, definition) {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/global */
	/******/ !(function () {
		/******/ __webpack_require__.g = (function () {
			/******/ if (typeof globalThis === 'object') return globalThis;
			/******/ try {
				/******/ return this || new Function('return this')();
				/******/
			} catch (e) {
				/******/ if (typeof window === 'object') return window;
				/******/
			}
			/******/
		})();
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ !(function () {
		/******/ __webpack_require__.o = function (obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop);
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ !(function () {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = function (exports) {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module',
				});
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/node module decorator */
	/******/ !(function () {
		/******/ __webpack_require__.nmd = function (module) {
			/******/ module.paths = [];
			/******/ if (!module.children) module.children = [];
			/******/ return module;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/jsonp chunk loading */
	/******/ !(function () {
		/******/ // no baseURI
		/******/
		/******/ // object to store loaded and loading chunks
		/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
		/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		/******/ var installedChunks = {
			/******/ 'blocks.frontend': 0,
			/******/
		};
		/******/
		/******/ // no chunk on demand loading
		/******/
		/******/ // no prefetching
		/******/
		/******/ // no preloaded
		/******/
		/******/ // no HMR
		/******/
		/******/ // no HMR manifest
		/******/
		/******/ __webpack_require__.O.j = function (chunkId) {
			return installedChunks[chunkId] === 0;
		};
		/******/
		/******/ // install a JSONP callback for chunk loading
		/******/ var webpackJsonpCallback = function (
			parentChunkLoadingFunction,
			data
		) {
			/******/ var chunkIds = data[0];
			/******/ var moreModules = data[1];
			/******/ var runtime = data[2];
			/******/ // add "moreModules" to the modules object,
			/******/ // then flag all "chunkIds" as loaded and fire callback
			/******/ var moduleId,
				chunkId,
				i = 0;
			/******/ if (
				chunkIds.some(function (id) {
					return installedChunks[id] !== 0;
				})
			) {
				/******/ for (moduleId in moreModules) {
					/******/ if (__webpack_require__.o(moreModules, moduleId)) {
						/******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
						/******/
					}
					/******/
				}
				/******/ if (runtime) var result = runtime(__webpack_require__);
				/******/
			}
			/******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
			/******/ for (; i < chunkIds.length; i++) {
				/******/ chunkId = chunkIds[i];
				/******/ if (
					__webpack_require__.o(installedChunks, chunkId) &&
					installedChunks[chunkId]
				) {
					/******/ installedChunks[chunkId][0]();
					/******/
				}
				/******/ installedChunks[chunkId] = 0;
				/******/
			}
			/******/ return __webpack_require__.O(result);
			/******/
		};
		/******/
		/******/ var chunkLoadingGlobal = (self['webpackChunkc9_blocks'] =
			self['webpackChunkc9_blocks'] || []);
		/******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		/******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
			null,
			chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
		);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/nonce */
	/******/ !(function () {
		/******/ __webpack_require__.nc = undefined;
		/******/
	})();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module depends on other loaded chunks and execution need to be delayed
	/******/ var __webpack_exports__ = __webpack_require__.O(
		undefined,
		['blocks.vendors'],
		function () {
			return __webpack_require__('./src/frontend.js');
		}
	);
	/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
	/******/
	/******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmZyb250ZW5kLmJ1aWxkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVyxDQUFDQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0VBQy9DLE1BQU1DLFFBQVEsR0FBR0QsTUFBTSxDQUFFLElBQUdGLFFBQVMsRUFBQyxDQUFDO0VBQ3ZDLE1BQU1JLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ3BDO0VBQ0EsSUFBSUMsYUFBYSxHQUFHSixNQUFNLENBQ3hCLGVBQWNGLFFBQVMsZ0NBQStCQyxPQUFRLFlBQVdHLEtBQU0sME1BQXlNSCxPQUFRLHNJQUFxSUEsT0FBUSwrQkFBOEIsQ0FDNWM7RUFDREssYUFBYSxDQUFDQyxFQUFFLENBQUMsTUFBTSxFQUFFLFlBQVk7SUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUNBLFVBQVUsQ0FBQ0osS0FBSyxDQUFDSyxPQUFPLEdBQUcsQ0FBQztFQUM3QyxDQUFDLENBQUM7RUFDRk4sUUFBUSxDQUFDTyxXQUFXLENBQUNKLGFBQWEsQ0FBQztBQUNwQztBQUVBLFNBQVNLLFlBQVksQ0FBQ1gsUUFBUSxFQUFFQyxPQUFPLEVBQUU7RUFDeEMsSUFBSVcsRUFBRSxJQUFJQSxFQUFFLENBQUNDLE1BQU0sRUFBRTtJQUNwQjtJQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJRixFQUFFLENBQUNDLE1BQU0sQ0FBQ2IsUUFBUSxFQUFFO01BQ3BDZSxVQUFVLEVBQUU7UUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDWEMsUUFBUSxFQUFFLENBQUM7UUFDWEMsU0FBUyxFQUFFLENBQUM7UUFDWkMsUUFBUSxFQUFFLENBQUM7UUFDWEMsS0FBSyxFQUFFLFFBQVE7UUFDZkMsRUFBRSxFQUFFLENBQUM7UUFDTEMsV0FBVyxFQUFFLENBQUM7UUFDZEMsSUFBSSxFQUFFLENBQUM7UUFDUEMsUUFBUSxFQUFFLENBQUM7UUFDWDtRQUNBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsR0FBRyxFQUFFLENBQUM7UUFDTkMsY0FBYyxFQUFFLENBQUM7UUFDakJDLFFBQVEsRUFBRTNCO01BQ1gsQ0FBQztNQUNENEIsT0FBTyxFQUFFNUIsT0FBTztNQUNoQjZCLE1BQU0sRUFBRTtRQUNQQyxPQUFPLEVBQUVDLGFBQWE7UUFDdEJDLE9BQU8sRUFBRUM7TUFDVjtJQUNELENBQUMsQ0FBQztFQUNILENBQUMsTUFBTTtJQUNOQyxVQUFVLENBQUMsWUFBWTtNQUN0QnhCLFlBQVksQ0FBQ1gsUUFBUSxFQUFFQyxPQUFPLENBQUM7SUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNSO0FBQ0Q7O0FBRUE7QUFDQSxTQUFTK0IsYUFBYSxDQUFDSSxLQUFLLEVBQUU7RUFDN0JBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEVBQUU7RUFDbkJGLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxTQUFTLEVBQUU7O0VBRXhCO0VBQ0E7RUFDQUgsS0FBSyxDQUFDQyxNQUFNLENBQUNHLFNBQVMsRUFBRSxDQUFDaEMsVUFBVSxDQUFDQSxVQUFVLENBQUNKLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLENBQUM7QUFDakU7O0FBRUE7QUFDQSxTQUFTeUIsYUFBYSxDQUFDTyxJQUFJLEVBQUU7RUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNWLHdFQUF3RSxHQUN2RUYsSUFBSSxDQUFDQSxJQUFJLENBQ1Y7RUFDRCxNQUFNRyxNQUFNLEdBQUdILElBQUksQ0FBQ0osTUFBTSxDQUFDRyxTQUFTLEVBQUU7RUFDdENJLE1BQU0sQ0FBQ3BDLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDSixLQUFLLENBQUNLLE9BQU8sR0FBRyxDQUFDO0VBQzlDO0VBQ0FtQyxNQUFNLENBQUNwQyxVQUFVLENBQUNBLFVBQVUsQ0FBQ0osS0FBSyxDQUFDeUMsVUFBVSxHQUFHLE9BQU87RUFDdkQ7RUFDQUQsTUFBTSxDQUFDcEMsVUFBVSxDQUFDQSxVQUFVLENBQUNzQyxPQUFPLENBQUNDLHFCQUFxQixHQUFHTixJQUFJLENBQUNBLElBQUk7QUFDdkU7QUFFQU8sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3pELE1BQU1DLGtCQUFrQixHQUFHQyxnQkFBZ0IsQ0FBQ0MsbUJBQW1CLEtBQUssTUFBTTtFQUMxRSxNQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ3BELE1BQU07RUFDdkIsSUFBSXFELE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxzQkFBc0IsQ0FBQyxVQUFVLENBQUM7RUFDeEQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUN2QyxJQUFJekQsUUFBUSxHQUFHdUQsTUFBTSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFJQyxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDM0MsSUFBSVQsa0JBQWtCLEVBQUU7TUFDdkJuRCxXQUFXLENBQUNDLFFBQVEsRUFBRTRELEVBQUUsRUFBRVAsQ0FBQyxDQUFDO0lBQzdCLENBQUMsTUFBTTtNQUNOMUMsWUFBWSxDQUFDWCxRQUFRLEVBQUU0RCxFQUFFLENBQUM7SUFDM0I7RUFDRDs7RUFFQTs7RUFFQVAsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNRLElBQUksQ0FBQyxZQUFZO0lBQ3pDLE1BQU1DLElBQUksR0FBRyxJQUFJO0lBQ2pCLE1BQU1DLEtBQUssR0FBR1YsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDSyxNQUFNO0lBQ2hELElBQUksQ0FBQyxHQUFHSyxLQUFLLEVBQUU7TUFDZFYsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDOUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQ3JEOEMsQ0FBQyxDQUFDUyxJQUFJLENBQUMsQ0FBQ0UsR0FBRyxDQUFDO1VBQUV2RCxPQUFPLEVBQUU7UUFBRSxDQUFDLENBQUM7TUFDNUIsQ0FBQyxDQUFDO0lBQ0g7RUFDRCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDckdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QyxvSEFBb0gsaURBQWlEO1dBQ3JLO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NsREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EsNEZBQTRGLGtEQUFrRDtVQUM5SSIsInNvdXJjZXMiOlsid2VicGFjazovL2M5LWJsb2Nrcy8uL3NyYy9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYzktYmxvY2tzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jOS1ibG9ja3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2M5LWJsb2Nrcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5TWFudWFsKHBsYXllcklELCB2aWRlb0lELCBqUXVlcnkpIHtcblx0Y29uc3QgdmlkZW9EaXYgPSBqUXVlcnkoYCMke3BsYXllcklEfWApO1xuXHRjb25zdCBzdHlsZSA9IHZpZGVvRGl2LmF0dHIoJ3N0eWxlJyk7XG5cdC8vIGNyZWF0ZSB0aGUgeW91dHViZSBpZnJhbWUgbWFudWFsbHkgd2l0aG91dCBBUElcblx0bGV0IHlvdXR1YmVJZnJhbWUgPSBqUXVlcnkoXG5cdFx0YDxpZnJhbWUgaWQ9XCIke3BsYXllcklEfVwiIGNsYXNzPVwiYzktdmlkZW9cIiB2aWRlby1pZD1cIiR7dmlkZW9JRH1cIiBzdHlsZT1cIiR7c3R5bGV9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPVwiMVwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSUR9P2F1dG9wbGF5PTEmY29udHJvbHM9MCZkaXNhYmxla2I9MCZhdXRvaGlkZT0xJndtb2RlPW9wYXF1ZSZoZD0xJmxvb3A9MSZzaG93aW5mbz0wJml2X2xvYWRfcG9saWN5PTMmcmVsPTAmbW9kZXN0YnJhbmRpbmc9MSZwbGF5bGlzdD0ke3ZpZGVvSUR9JndpZGdldGlkPTEmbXV0ZT0xXCI+PC9pZnJhbWU+YFxuXHQpO1xuXHR5b3V0dWJlSWZyYW1lLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9KTtcblx0dmlkZW9EaXYucmVwbGFjZVdpdGgoeW91dHViZUlmcmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogJ29wYXF1ZScsXG5cdFx0XHRcdGhkOiAxLFxuXHRcdFx0XHRlbmFibGVqc2FwaTogMSxcblx0XHRcdFx0bG9vcDogMSxcblx0XHRcdFx0c2hvd2luZm86IDAsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdFx0aXZfbG9hZF9wb2xpY3k6IDMsXG5cdFx0XHRcdHJlbDogMCxcblx0XHRcdFx0bW9kZXN0YnJhbmRpbmc6IDEsXG5cdFx0XHRcdHBsYXlsaXN0OiB2aWRlb0lELFxuXHRcdFx0fSxcblx0XHRcdHZpZGVvSWQ6IHZpZGVvSUQsXG5cdFx0XHRldmVudHM6IHtcblx0XHRcdFx0b25SZWFkeTogb25QbGF5ZXJSZWFkeSxcblx0XHRcdFx0b25FcnJvcjogb25QbGF5ZXJFcnJvcixcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIHZpZGVvSUQpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHZpZGVvIHBsYXllciBpcyByZWFkeS5cbmZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0ZXZlbnQudGFyZ2V0Lm11dGUoKTtcblx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXG5cdC8vIHRoaXMgLmM5LXZpZGVvIGVsZW1lbnQgLT4gLmM5LWVtYmVkLWNvbnRhaW5lciAtPiAuYzktdmlkZW8tY29udGFpbmVyXG5cdC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcblx0ZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuLy8gQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIGlmIHRoZSB2aWRlbyBwbGF5ZXIgaGFzIGFuIGVycm9yLlxuZnVuY3Rpb24gb25QbGF5ZXJFcnJvcihkYXRhKSB7XG5cdGNvbnNvbGUubG9nKFxuXHRcdCdUaGUgWW91VHViZSBJRnJhbWUgUGxheWVyIEFQSSBmaXJlZCBhbiBvbkVycm9yIGV2ZW50IHdpdGggZXJyb3IgY29kZTogJyArXG5cdFx0XHRkYXRhLmRhdGFcblx0KTtcblx0Y29uc3QgaWZyYW1lID0gZGF0YS50YXJnZXQuZ2V0SWZyYW1lKCk7XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cdC8vIFRoZSBlcnJvciBzdGlsbCBmbGFzaGVzIGZvciBhIHNwbGl0IHNlY29uZCwgY2FuJ3Qgc3RvcCBpdCBidXQgbGV0J3MgYXRsZWFzdCBtYWtlIGl0IGxlc3MgamFycmluZzpcblx0aWZyYW1lLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJzMwMG1zJztcblx0Ly8gSW4gY2FzZSB5b3Ugd2FudCB0byB0YXJnZXQgaXQgd2l0aCBjc3M6XG5cdGlmcmFtZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5jOVZpZGVvQ29udGFpbmVyRXJyb3IgPSBkYXRhLmRhdGE7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHlvdXR1YmVBUElEaXNhYmxlZCA9IGM5X2Jsb2Nrc19wYXJhbXMuZGlzYWJsZV95b3V0dWJlX2FwaSA9PT0gJ3RydWUnO1xuXHRjb25zdCAkID0gd2luZG93LmpRdWVyeTtcblx0bGV0IGVtYmVkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2M5LXZpZGVvJyk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZW1iZWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHBsYXllcklEID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZSgnaWQnKTtcblx0XHRsZXQgaWQgPSBlbWJlZHNbaV0uZ2V0QXR0cmlidXRlKCd2aWRlby1pZCcpO1xuXHRcdGlmICh5b3V0dWJlQVBJRGlzYWJsZWQpIHtcblx0XHRcdHJlYWR5TWFudWFsKHBsYXllcklELCBpZCwgJCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlYWR5WW91dHViZShwbGF5ZXJJRCwgaWQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGlmIHZpZGVvIGN1c3RvbSBlbGVtZW50cyBhcmUgcHJlc2VudFxuXG5cdCQoJy5jOS12aWRlby1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBjaGVjayA9ICQoJy5jOS12aWRlby1jdXN0b20nLCB0aGlzKS5sZW5ndGg7XG5cdFx0aWYgKDAgPCBjaGVjaykge1xuXHRcdFx0JCgnLmM5LXZpZGVvLWN1c3RvbScsIHRoaXMpLm9uKCdjYW5wbGF5JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHNlbGYpLmNzcyh7IG9wYWNpdHk6IDEgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3MgRnJvbnRlbmQgSlNcbiAqXG4gKiBBbGwgYmxvY2tzIGZyb250ZW5kIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9ja3MvYmxvY2stZ3JpZC1jb250YWluZXIvZnJvbnRlbmQuanMnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJsb2Nrcy5mcm9udGVuZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYzlfYmxvY2tzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2M5X2Jsb2Nrc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJibG9ja3MudmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZnJvbnRlbmQuanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlYWR5TWFudWFsIiwicGxheWVySUQiLCJ2aWRlb0lEIiwialF1ZXJ5IiwidmlkZW9EaXYiLCJzdHlsZSIsImF0dHIiLCJ5b3V0dWJlSWZyYW1lIiwib24iLCJwYXJlbnROb2RlIiwib3BhY2l0eSIsInJlcGxhY2VXaXRoIiwicmVhZHlZb3V0dWJlIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsImRpc2FibGVrYiIsImF1dG9oaWRlIiwid21vZGUiLCJoZCIsImVuYWJsZWpzYXBpIiwibG9vcCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJyZWwiLCJtb2Rlc3RicmFuZGluZyIsInBsYXlsaXN0IiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5Iiwib25FcnJvciIsIm9uUGxheWVyRXJyb3IiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJtdXRlIiwicGxheVZpZGVvIiwiZ2V0SWZyYW1lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZnJhbWUiLCJ0cmFuc2l0aW9uIiwiZGF0YXNldCIsImM5VmlkZW9Db250YWluZXJFcnJvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInlvdXR1YmVBUElEaXNhYmxlZCIsImM5X2Jsb2Nrc19wYXJhbXMiLCJkaXNhYmxlX3lvdXR1YmVfYXBpIiwiJCIsIndpbmRvdyIsImVtYmVkcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCJlYWNoIiwic2VsZiIsImNoZWNrIiwiY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==
