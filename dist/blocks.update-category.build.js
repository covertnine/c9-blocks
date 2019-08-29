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
/******/ 	return __webpack_require__(__webpack_require__.s = 405);
/******/ })
/************************************************************************/
/******/ ({

/***/ 196:
/*!*********************************************!*\
  !*** ./src/stores/twitter/prepare-query.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(/*! qs */ 413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);


function prepareQuery(type, data) {
    var additionalData = __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data, { encode: false });
    var query = '/c9-blocks/get_twitter_' + type + '/' + (additionalData ? '?' + additionalData : '');

    return query;
}

/***/ }),

/***/ 197:
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ 33);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),

/***/ 198:
/*!***************************************!*\
  !*** ./src/stores/twitter/actions.js ***!
  \***************************************/
/*! exports provided: apiFetch, setTwitterFeed, setTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["apiFetch"] = apiFetch;
/* harmony export (immutable) */ __webpack_exports__["setTwitterFeed"] = setTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["setTwitterProfile"] = setTwitterProfile;
function apiFetch(request) {
	return {
		type: "API_FETCH",
		request: request
	};
}

function setTwitterFeed(query, feed) {
	return {
		type: "SET_TWITTER_FEED",
		query: query,
		feed: feed
	};
}

function setTwitterProfile(query, profile) {
	return {
		type: "SET_TWITTER_PROFILE",
		query: query,
		profile: profile
	};
}

/***/ }),

/***/ 199:
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 418);


/***/ }),

/***/ 2:
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 200:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ 33:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ 34:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 405:
/*!********************************!*\
  !*** ./src/update-category.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__ = __webpack_require__(/*! ./update-category/deregister-blocks */ 406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__ = __webpack_require__(/*! ./update-category/register-filters */ 407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__ = __webpack_require__(/*! ./update-category/register-styles */ 408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_stores__ = __webpack_require__(/*! ./update-category/register-stores */ 409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sidebar__ = __webpack_require__(/*! ./components/sidebar */ 420);
/**
 * Internal dependencies
 */
var updateCategory = wp.blocks.updateCategory;
var _wp$components = wp.components,
    G = _wp$components.G,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;

/**
 * Icon
 */

var logo = wp.element.createElement(
	SVG,
	{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 234.92 174.65" },
	wp.element.createElement(
		"defs",
		null,
		wp.element.createElement(
			"style",
			null,
			".cls-1{fill-rule:evenodd;fill:url(#linear-gradient);}"
		),
		wp.element.createElement(
			"linearGradient",
			{
				id: "linear-gradient",
				x1: "79.12",
				y1: "23.81",
				x2: "166.4",
				y2: "158.22",
				gradientUnits: "userSpaceOnUse"
			},
			wp.element.createElement("stop", { offset: "0", stopColor: "#61cae5" }),
			wp.element.createElement("stop", { offset: "0.12", stopColor: "#64c6e1" }),
			wp.element.createElement("stop", { offset: "0.25", stopColor: "#6dbad3" }),
			wp.element.createElement("stop", { offset: "0.39", stopColor: "#7ba7bd" }),
			wp.element.createElement("stop", { offset: "0.54", stopColor: "#8f8b9f" }),
			wp.element.createElement("stop", { offset: "0.68", stopColor: "#a96877" }),
			wp.element.createElement("stop", { offset: "0.83", stopColor: "#c93d48" }),
			wp.element.createElement("stop", { offset: "0.92", stopColor: "#df1f26" })
		)
	),
	wp.element.createElement(
		"title",
		null,
		"c9-feather-logo-icon"
	),
	wp.element.createElement(
		G,
		{ id: "Layer_2", "data-name": "Layer 2" },
		wp.element.createElement(
			G,
			{ id: "logo_gradient", "data-name": "logo gradient" },
			wp.element.createElement(Path, {
				className: "cls-1",
				d: "M47,138.06C40.37,123.9,40.84,36.41,83.54,22.4c0,0-15.64,7.29-10.12,27.45,7.2-13.68,20.33-37.22,57.77-43.46,24-2.89-13.15,1.1-6,22.22.24-8.88,59.41-45,108-19.81C246.43,104.69,177,110.06,177,110.06h0s14.95,2.38,23.83-.5c-9.12,39.84-63.13,42.14-63.13,42.14s20.51,5.11,34.92,2.47c-49.45,32.4-116.86-4.86-116.86-4.86-.27.08-.83-.43-1.58-1.31l112-78a25.09,25.09,0,1,0-6-6.27L79.9,120.4l-2.23-3.25-30.59,21M183.72,33.74a16.25,16.25,0,1,1-18.84,13.17,16.24,16.24,0,0,1,18.84-13.17ZM54.17,148l-.39-.55.43.52,0,0Zm-34.43-6.55,8.45-5.5,5.5,8.44-8.44,5.5-5.51-8.44Zm-4.37,14.87-5.5-8.44,8.45-5.5,5.5,8.44-8.45,5.5ZM5.5,162.79,0,154.34l8.45-5.5,5.5,8.44L5.5,162.79Zm46.86-13.87L13.41,174.65,6.46,164.31,45,139.3l7.33,9.62Z"
			})
		)
	)
);

if (updateCategory) {
	updateCategory("c9-blocks", { icon: logo });
}







/***/ }),

/***/ 406:
/*!**************************************************!*\
  !*** ./src/update-category/deregister-blocks.js ***!
  \**************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var unregisterBlockType = wp.blocks.unregisterBlockType;


var loadBlocksEditor = null;

if ("undefined" !== typeof window._wpLoadBlockEditor) {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if ("undefined" !== typeof window._wpLoadGutenbergEditor) {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(function () {
		unregisterBlockType("core/verse");
		// unregisterBlockType("core/columns");
	});
}

/***/ }),

/***/ 407:
/*!*************************************************!*\
  !*** ./src/update-category/register-filters.js ***!
  \*************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var addFilter = wp.hooks.addFilter;


function formatClassName(className) {
	var result = className.replace("wp-block-c9-blocks", "c9");
	return result;
}

addFilter("c9-blocks.editor.className", "c9-blocks/format-classname", formatClassName);
addFilter("c9-blocks.blocks.className", "c9-blocks/format-classname", formatClassName);

/***/ }),

/***/ 408:
/*!************************************************!*\
  !*** ./src/update-category/register-styles.js ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// const { registerBlockStyle } = wp.blocks;

var loadBlocksEditor = null;

if ("undefined" !== typeof window._wpLoadBlockEditor) {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if ("undefined" !== typeof window._wpLoadGutenbergEditor) {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(function () {
		// registerBlockStyle("core/button", {
		// 	name: "custom-button-style",
		// 	label: "My Button Style"
		// });
	});
}

/***/ }),

/***/ 409:
/*!************************************************!*\
  !*** ./src/update-category/register-stores.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_twitter__ = __webpack_require__(/*! ../stores/twitter */ 410);


/***/ }),

/***/ 410:
/*!*************************************!*\
  !*** ./src/stores/twitter/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(/*! ./reducer */ 411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(/*! ./selectors */ 412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(/*! ./actions */ 198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(/*! ./controls */ 416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__(/*! ./resolvers */ 417);






var registerStore = wp.data.registerStore;


registerStore("c9-blocks/twitter", {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
	controls: __WEBPACK_IMPORTED_MODULE_3__controls__,
	resolvers: __WEBPACK_IMPORTED_MODULE_4__resolvers__
});

/***/ }),

/***/ 411:
/*!***************************************!*\
  !*** ./src/stores/twitter/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { feeds: {}, profiles: {} };
	var action = arguments[1];

	switch (action.type) {
		case "SET_TWITTER_FEED":
			if (!state.feeds[action.query] && action.feed) {
				state.feeds[action.query] = action.feed;
			}
			break;
		case "SET_TWITTER_PROFILE":
			if (!state.profiles[action.query] && action.profile) {
				state.profiles[action.query] = action.profile;
			}
			break;
		// no default
	}

	return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ 412:
/*!*****************************************!*\
  !*** ./src/stores/twitter/selectors.js ***!
  \*****************************************/
/*! exports provided: getTwitterFeed, getTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTwitterFeed"] = getTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["getTwitterProfile"] = getTwitterProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 196);


function getTwitterFeed(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("feed", data);

	return state.feeds[query];
}

function getTwitterProfile(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("profile", data);

	return state.profiles[query];
}

/***/ }),

/***/ 413:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 414);
var parse = __webpack_require__(/*! ./parse */ 415);
var formats = __webpack_require__(/*! ./formats */ 197);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 414:
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 33);
var formats = __webpack_require__(/*! ./formats */ 197);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) { // eslint-disable-line func-name-matching
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint'; // eslint-disable-line valid-typeof
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 415:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 33);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 416:
/*!****************************************!*\
  !*** ./src/stores/twitter/controls.js ***!
  \****************************************/
/*! exports provided: API_FETCH */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["API_FETCH"] = API_FETCH;
var _wp = wp,
    apiFetch = _wp.apiFetch;


function API_FETCH(_ref) {
	var request = _ref.request;

	return apiFetch(request).then(function (fetchedData) {
		if (fetchedData && fetchedData.success && fetchedData.response) {
			return fetchedData.response;
		}
		return false;
	});
}

/***/ }),

/***/ 417:
/*!*****************************************!*\
  !*** ./src/stores/twitter/resolvers.js ***!
  \*****************************************/
/*! exports provided: getTwitterFeed, getTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTwitterFeed"] = getTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["getTwitterProfile"] = getTwitterProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(/*! ./actions */ 198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 196);


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTwitterFeed),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTwitterProfile);




function getTwitterFeed(data) {
	var query, feed;
	return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTwitterFeed$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					query = Object(__WEBPACK_IMPORTED_MODULE_2__prepare_query__["a" /* default */])("feed", data);
					_context.next = 3;
					return __WEBPACK_IMPORTED_MODULE_1__actions__["apiFetch"]({ path: query });

				case 3:
					feed = _context.sent;
					return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__actions__["setTwitterFeed"](query, feed));

				case 5:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}

function getTwitterProfile(data) {
	var query, profile;
	return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTwitterProfile$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					query = Object(__WEBPACK_IMPORTED_MODULE_2__prepare_query__["a" /* default */])("profile", data);
					_context2.next = 3;
					return __WEBPACK_IMPORTED_MODULE_1__actions__["apiFetch"]({ path: query });

				case 3:
					profile = _context2.sent;
					return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__actions__["setTwitterProfile"](query, profile));

				case 5:
				case "end":
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/***/ }),

/***/ 418:
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 419);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 419:
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ 420:
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__ = __webpack_require__(/*! ../../../assets/c9-feather-logo-gray.svg */ 423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_modal__ = __webpack_require__(/*! ../templates-modal */ 424);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    Dashicon = _wp$components.Dashicon;






var C9 = function (_Component) {
	_inherits(C9, _Component);

	function C9() {
		_classCallCheck(this, C9);

		var _this = _possibleConstructorReturn(this, (C9.__proto__ || Object.getPrototypeOf(C9)).apply(this, arguments));

		_this.state = {
			isModalOpen: false
		};
		return _this;
	}

	_createClass(C9, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var isModalOpen = this.state.isModalOpen;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					PluginSidebarMoreMenuItem,
					{
						icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__["a" /* default */], { style: { width: "20px", margin: "0 10px 0 6px" } }),
						target: "c9-blocks"
					},
					__("COVERT NINE Blocks", "c9-blocks")
				),
				wp.element.createElement(
					PluginSidebar,
					{
						name: "c9-blocks",
						id: "c9-blocks",
						title: __("COVERT NINE Blocks", "c9-blocks")
					},
					wp.element.createElement(
						PanelBody,
						{ className: "plugin-c9-panel" },
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "templates" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-schedule" }),
							__("Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "custom-code" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-editor-code" }),
							__("CSS & JavaScript", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "customizer" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-admin-settings" }),
							__("Customizer", "c9-blocks")
						)
					)
				),
				"templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					}
				}) : ""
			);
		}
	}]);

	return C9;
}(Component);

registerPlugin("c9-blocks", {
	icon: wp.element.createElement(
		"div",
		{ className: "c9-plugin-icon" },
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__["a" /* default */], null)
	),
	render: C9
});

/***/ }),

/***/ 421:
/*!********************************************!*\
  !*** ./src/components/sidebar/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 422);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 200)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 422:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/sidebar/editor.scss ***!
  \***********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 34)(false);
// Module
exports.push([module.i, ".edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg{display:block;height:16px}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg *{stroke:initial !important}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg [fill=\"#fff\"]{fill:#fff !important}.edit-post-pinned-plugins .components-icon-button .c9-plugin-icon span{margin:-2px}.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon span [fill=\"#fff\"]{fill:#555d66 !important}.plugin-c9-panel .plugin-c9-panel-button{display:block;width:100%;height:auto;padding:15px 10px;margin-bottom:16px;flex-shrink:0;overflow:hidden;color:inherit;text-align:center;cursor:pointer;background:none;border:1px solid;border-radius:4px;transition:0.2s color, 0.2s background-color, 0.2s border-color, 0.2s box-shadow}.plugin-c9-panel .plugin-c9-panel-button,.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{border-color:rgba(79,89,105,0.2);box-shadow:none}.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{color:#191e23;background-color:#f8f9f9}.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled{color:#191e23;border-color:#007fac;box-shadow:0 0 0 2px #00a0d2}.plugin-c9-panel .plugin-c9-panel-button span{display:block;margin:0 auto;margin-top:3px;text-align:center;height:24px}\n", ""]);


/***/ }),

/***/ 423:
/*!*****************************************!*\
  !*** ./assets/c9-feather-logo-gray.svg ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
  "data-name": "Layer 2"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
  d: "M47 138.06C40.37 123.9 40.84 36.41 83.54 22.4c0 0-15.64 7.29-10.12 27.45 7.2-13.68 20.33-37.22 57.77-43.46 24-2.89-13.15 1.1-6 22.22.24-8.88 59.41-45 108-19.81C246.43 104.69 177 110.06 177 110.06s14.95 2.38 23.83-.5c-9.12 39.84-63.13 42.14-63.13 42.14s20.51 5.11 34.92 2.47c-49.45 32.4-116.86-4.86-116.86-4.86-.27.08-.83-.43-1.58-1.31l112-78a25.09 25.09 0 10-6-6.27L79.9 120.4l-2.23-3.25-30.59 21M183.72 33.74a16.25 16.25 0 11-18.84 13.17 16.24 16.24 0 0118.84-13.17zM54.17 148l-.39-.55.43.52zm-34.43-6.55l8.45-5.5 5.5 8.44-8.44 5.5-5.51-8.44zm-4.37 14.87l-5.5-8.44 8.45-5.5 5.5 8.44-8.45 5.5zm-9.87 6.47L0 154.34l8.45-5.5 5.5 8.44-8.45 5.51zm46.86-13.87l-38.95 25.73-6.95-10.34L45 139.3l7.33 9.62z",
  fill: "#121212",
  fillRule: "evenodd",
  "data-name": "logo dark grey"
}));

var SvgC9FeatherLogoGray = function SvgC9FeatherLogoGray(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({
    viewBox: "0 0 234.92 174.65"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["a"] = (SvgC9FeatherLogoGray);

/***/ }),

/***/ 424:
/*!*************************************************!*\
  !*** ./src/components/templates-modal/index.js ***!
  \*************************************************/
/*! exports provided: TemplatesModal */
/*! exports used: TemplatesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesModalWithSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_button__ = __webpack_require__(/*! ./layout-button */ 425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_button__ = __webpack_require__(/*! ./section-button */ 426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_markup__ = __webpack_require__(/*! ./templates-markup */ 429);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Modal = _wp$components.Modal,
    TabPanel = _wp$components.TabPanel,
    Tooltip = _wp$components.Tooltip,
    Icon = _wp$components.Icon;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var _wp$blocks = wp.blocks,
    createBlock = _wp$blocks.createBlock,
    rawHandler = _wp$blocks.rawHandler;

var apiFetch = wp.apiFetch;




// templates


var TemplatesModal = function (_Component) {
	_inherits(TemplatesModal, _Component);

	function TemplatesModal() {
		_classCallCheck(this, TemplatesModal);

		var _this = _possibleConstructorReturn(this, (TemplatesModal.__proto__ || Object.getPrototypeOf(TemplatesModal)).apply(this, arguments));

		_this.getReusableBlocks = _this.getReusableBlocks.bind(_this);

		_this.state = {
			reusables: []
		};

		_this.getReusableBlocks();
		return _this;
	}

	_createClass(TemplatesModal, [{
		key: "getReusableBlocks",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var canUserUseUnfilteredHTML, postType, reusables, blocks;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								canUserUseUnfilteredHTML = this.props.canUserUseUnfilteredHTML;
								_context.next = 3;
								return apiFetch({ path: "/wp/v2/types/wp_block" });

							case 3:
								postType = _context.sent;
								_context.next = 6;
								return apiFetch({ path: "/wp/v2/" + postType.rest_base });

							case 6:
								reusables = _context.sent;
								blocks = reusables.map(function (item) {
									return {
										name: item.title.raw,
										content: rawHandler({
											HTML: item.content.raw,
											mode: "BLOCKS",
											canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
										})
									};
								});


								this.setState({
									reusables: blocks
								});

							case 9:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getReusableBlocks() {
				return _ref.apply(this, arguments);
			}

			return getReusableBlocks;
		}()
	}, {
		key: "markupToBlock",
		value: function markupToBlock(templateObj, canUserUseUnfilteredHTML) {
			var blockObj = Object.assign({}, templateObj);
			// eslint-disable-next-line no-unused-vars
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(blockObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					blockObj[key] = rawHandler({
						HTML: blockObj[key],
						mode: "BLOCKS",
						canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
					});
				}
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

			return blockObj;
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    resetBlocks = _props.resetBlocks,
			    canUserUseUnfilteredHTML = _props.canUserUseUnfilteredHTML;

			// define section and layout templates

			var sections = Object.assign({
				test: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				})]
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].sections, canUserUseUnfilteredHTML));

			var layouts = Object.assign({
				default: [createBlock("core/paragraph", {})],
				hero: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				}), createBlock("c9-blocks/grid", {}, [createBlock("c9-blocks/column-container", {
					columns: 3,
					layout: "c9-3-col-equal"
				})])],
				featured: [createBlock("core/heading", {}), createBlock("core/spacer", { height: "10" }), createBlock("core/media-text", { align: "full" }), createBlock("core/spacer", { height: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { height: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", {
					placeholder: __("Layout Switcher", "c9-blocks")
				})],
				nested: [createBlock("c9-blocks/grid", {}, [createBlock("c9-blocks/column-container", { columns: 3, layout: "c9-3-col-equal" }, [createBlock("c9-blocks/column", {}, [createBlock("core/button", { text: "Make this Recipe" })])])])]
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].layouts, canUserUseUnfilteredHTML));

			return wp.element.createElement(
				Modal,
				_extends({
					className: "c9-templates-modal",
					position: "top",
					size: "lg"
				}, this.props),
				wp.element.createElement(
					TabPanel,
					{
						className: "c9-template-tabs c9-component-modal-tab-panel",
						tabs: [{
							name: "sections",
							title: wp.element.createElement(
								Tooltip,
								{
									text: __("Simple sections to construct your page.", "c9-blocks")
								},
								wp.element.createElement(
									"span",
									null,
									__("Sections")
								)
							),
							className: "c9-template-tabs-tab"
						}, {
							name: "pages",
							title: wp.element.createElement(
								Tooltip,
								{
									text: __("Pre-designed ready to use pages.", "c9-blocks")
								},
								wp.element.createElement(
									"span",
									null,
									__("Pages")
								)
							),
							className: "c9-template-tabs-tab"
						}, {
							name: "local",
							title: wp.element.createElement(
								Tooltip,
								{ text: __("My Templates.", "c9-blocks") },
								wp.element.createElement(
									"span",
									null,
									__("Saved Layouts")
								)
							),
							className: "c9-template-tabs-tab"
						}]
					},
					function (tab) {
						switch (tab.name) {
							case "sections":
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-section-options" },
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__section_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Test", "c9-blocks"),
											section: sections.test
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
							case "pages":
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-layout-options" },
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Hero", "c9-blocks"),
											layout: layouts.hero
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Featured", "c9-blocks"),
											layout: layouts.featured
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Nested", "c9-blocks"),
											layout: layouts.nested
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Markdown", "c9-blocks"),
											layout: layouts.markdown
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("bgTest", "c9-blocks"),
											layout: layouts.testBg
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
							default:
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-section-options" },
										_this2.state.reusables.map(function (obj) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__section_button__["a" /* default */], {
												icon: "wordpress",
												label: __(obj.name, "c9-blocks"),
												section: obj.content
											});
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
						}
					}
				)
			);
		}
	}]);

	return TemplatesModal;
}(Component);

var TemplatesModalWithSelect = compose([withSelect(function (select, _ref2) {
	var clientId = _ref2.clientId;

	var _select = select("core/editor"),
	    getBlock = _select.getBlock,
	    canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML;

	var block = getBlock(clientId);
	return {
		block: block,
		canUserUseUnfilteredHTML: canUserUseUnfilteredHTML()
	};
}), withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    resetBlocks = _dispatch.resetBlocks,
	    insertBlocks = _dispatch.insertBlocks;

	return {
		resetBlocks: resetBlocks,
		insertBlocks: insertBlocks
	};
})])(TemplatesModal);



/***/ }),

/***/ 425:
/*!*********************************************************!*\
  !*** ./src/components/templates-modal/layout-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var LayoutButton = function LayoutButton(_ref) {
	var label = _ref.label,
	    icon = _ref.icon,
	    layout = _ref.layout,
	    resetBlocks = _ref.resetBlocks,
	    insertBlocks = _ref.insertBlocks;

	return wp.element.createElement(
		"button",
		{
			onClick: function onClick() {
				resetBlocks([]);
				insertBlocks(layout);
			}
		},
		wp.element.createElement(Icon, { icon: icon }),
		wp.element.createElement(
			"span",
			null,
			label
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    resetBlocks = _dispatch.resetBlocks,
	    insertBlocks = _dispatch.insertBlocks;

	return {
		resetBlocks: resetBlocks,
		insertBlocks: insertBlocks
	};
})(LayoutButton));

/***/ }),

/***/ 426:
/*!**********************************************************!*\
  !*** ./src/components/templates-modal/section-button.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var SectionButton = function SectionButton(_ref) {
	var label = _ref.label,
	    icon = _ref.icon,
	    section = _ref.section,
	    insertBlocks = _ref.insertBlocks;

	return wp.element.createElement(
		"button",
		{
			onClick: function onClick() {
				insertBlocks(section);
			}
		},
		wp.element.createElement(Icon, { icon: icon }),
		wp.element.createElement(
			"span",
			null,
			label
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    insertBlocks = _dispatch.insertBlocks;

	return {
		insertBlocks: insertBlocks
	};
})(SectionButton));

/***/ }),

/***/ 427:
/*!****************************************************!*\
  !*** ./src/components/templates-modal/editor.scss ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 428);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 200)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 428:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/templates-modal/editor.scss ***!
  \*******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 34)(false);
// Module
exports.push([module.i, ".c9-templates-modal .components-modal__header{border-bottom:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs{margin-top:-24px}@media (min-width: 600px){.c9-templates-modal{min-width:600px;max-width:600px;margin-left:-300px;transform:none;top:112px}}@media (min-width: 840px){.c9-templates-modal{min-width:800px;max-width:800px;margin-left:-400px;transform:none}}.c9-templates-modal .components-modal__header .components-modal__icon-container svg{display:block;margin-right:10px}.c9-templates-modal .components-modal__header .components-modal__header-heading{font-weight:600}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options{display:grid;grid-column-gap:1rem;grid-row-gap:1rem;grid-template-columns:repeat(6, 1fr)}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button{border-width:1px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;border-radius:3px;box-shadow:inset 0 -1px 0 #ccc;padding:5px}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button:active,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button:active{border-color:#999;box-shadow:insert 0 1px 0 #999}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button span,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button span{display:block;font-size:0.8rem;padding:2px 0}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab{padding:12px 16px;color:inherit}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab:focus{outline:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab.is-active{position:relative;border-bottom:2px solid #00a0d2;z-index:1}\n", ""]);


/***/ }),

/***/ 429:
/*!************************************************************!*\
  !*** ./src/components/templates-modal/templates-markup.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var templateMarkups = {
	layouts: {
		markdown: '<!-- wp:c9-blocks/carousel {"instanceId":0} -->\n<div id="c9-carousel-indicator-0" class="c9-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item active"><!-- wp:heading -->\n<h2>awdawd</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>waad</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:paragraph -->\n<p>awdawdaw</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:paragraph -->\n<p>awdadawdawdaw</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/carousel -->',
		testBg: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":80} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerImgURL":null,"focalPoint":{"x":0.511520737327189,"y":0.625}} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering Landing Page","subheading":"subheading","addSubheading":true,"textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h font-weight-light" style="color:#ffffff">Service Offering Landing Page</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"layout":"c9-3-col-equal","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerHue":"#ffffff"} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 1","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 1</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. </p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 2","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 2</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved X.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 3","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 3</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
	},
	sections: {}
};

/* harmony default export */ __webpack_exports__["a"] = (templateMarkups);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNlNWNlOWI4ODQ3ZmYzYzcyMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3ByZXBhcmUtcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXBkYXRlLWNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3Jlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzcz80MDNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2M5LWZlYXRoZXItbG9nby1ncmF5LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2xheW91dC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzcz8wZjQ1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvdGVtcGxhdGVzLW1hcmt1cC5qcyJdLCJuYW1lcyI6WyJwcmVwYXJlUXVlcnkiLCJ0eXBlIiwiZGF0YSIsImFkZGl0aW9uYWxEYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJlbmNvZGUiLCJxdWVyeSIsImFwaUZldGNoIiwicmVxdWVzdCIsInNldFR3aXR0ZXJGZWVkIiwiZmVlZCIsInNldFR3aXR0ZXJQcm9maWxlIiwicHJvZmlsZSIsInVwZGF0ZUNhdGVnb3J5Iiwid3AiLCJibG9ja3MiLCJjb21wb25lbnRzIiwiRyIsIlBhdGgiLCJTVkciLCJsb2dvIiwiaWNvbiIsInVucmVnaXN0ZXJCbG9ja1R5cGUiLCJsb2FkQmxvY2tzRWRpdG9yIiwid2luZG93IiwiX3dwTG9hZEJsb2NrRWRpdG9yIiwiX3dwTG9hZEd1dGVuYmVyZ0VkaXRvciIsInRoZW4iLCJhZGRGaWx0ZXIiLCJob29rcyIsImZvcm1hdENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInJlc3VsdCIsInJlcGxhY2UiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsInNlbGVjdG9ycyIsImFjdGlvbnMiLCJjb250cm9scyIsInJlc29sdmVycyIsInN0YXRlIiwiZmVlZHMiLCJwcm9maWxlcyIsImFjdGlvbiIsImdldFR3aXR0ZXJGZWVkIiwiZ2V0VHdpdHRlclByb2ZpbGUiLCJBUElfRkVUQ0giLCJmZXRjaGVkRGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhdGgiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbnMiLCJlZGl0UG9zdCIsIlBsdWdpblNpZGViYXIiLCJQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIiwiRnJhZ21lbnQiLCJlbGVtZW50IiwiX18iLCJpMThuIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiRGFzaGljb24iLCJDOSIsImFyZ3VtZW50cyIsImlzTW9kYWxPcGVuIiwid2lkdGgiLCJtYXJnaW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsIk1vZGFsIiwiVGFiUGFuZWwiLCJUb29sdGlwIiwiSWNvbiIsImNvbXBvc2UiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY3JlYXRlQmxvY2siLCJyYXdIYW5kbGVyIiwiVGVtcGxhdGVzTW9kYWwiLCJnZXRSZXVzYWJsZUJsb2NrcyIsImJpbmQiLCJyZXVzYWJsZXMiLCJjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwiLCJwcm9wcyIsInBvc3RUeXBlIiwicmVzdF9iYXNlIiwibWFwIiwibmFtZSIsIml0ZW0iLCJ0aXRsZSIsInJhdyIsImNvbnRlbnQiLCJIVE1MIiwibW9kZSIsInRlbXBsYXRlT2JqIiwiYmxvY2tPYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlzIiwia2V5IiwicmVzZXRCbG9ja3MiLCJzZWN0aW9ucyIsInRlc3QiLCJhbGlnbiIsInRleHQiLCJtYXJrdXBUb0Jsb2NrIiwidGVtcGxhdGVNYXJrdXBzIiwibGF5b3V0cyIsImRlZmF1bHQiLCJoZXJvIiwiY29sdW1ucyIsImxheW91dCIsImZlYXR1cmVkIiwiaGVpZ2h0IiwibWVkaWFQb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwibmVzdGVkIiwidGFiIiwibWFya2Rvd24iLCJ0ZXN0QmciLCJvYmoiLCJUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QiLCJzZWxlY3QiLCJjbGllbnRJZCIsImdldEJsb2NrIiwiYmxvY2siLCJkaXNwYXRjaCIsImluc2VydEJsb2NrcyIsIkxheW91dEJ1dHRvbiIsImxhYmVsIiwiU2VjdGlvbkJ1dHRvbiIsInNlY3Rpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7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Q0M7QUFKTyxFQURjO0FBT3ZCbEIsV0FBVTtBQVBhLENBQXhCOztBQVVlSyx3RUFBZixFIiwiZmlsZSI6Ii4vZGlzdC9ibG9ja3MudXBkYXRlLWNhdGVnb3J5LmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Y2U1Y2U5Yjg4NDdmZjNjNzIwYiIsImltcG9ydCBxcyBmcm9tICdxcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVRdWVyeSggdHlwZSwgZGF0YSApIHtcbiAgICBjb25zdCBhZGRpdGlvbmFsRGF0YSA9IHFzLnN0cmluZ2lmeSggZGF0YSwgeyBlbmNvZGU6IGZhbHNlIH0gKTtcbiAgICBjb25zdCBxdWVyeSA9IGAvYzktYmxvY2tzL2dldF90d2l0dGVyXyR7IHR5cGUgfS8keyBhZGRpdGlvbmFsRGF0YSA/IGA/JHsgYWRkaXRpb25hbERhdGEgfWAgOiAnJyB9YDtcblxuICAgIHJldHVybiBxdWVyeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9wcmVwYXJlLXF1ZXJ5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBwZXJjZW50VHdlbnRpZXMgPSAvJTIwL2c7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgRm9ybWF0ID0ge1xuICAgIFJGQzE3Mzg6ICdSRkMxNzM4JyxcbiAgICBSRkMzOTg2OiAnUkZDMzk4Nidcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbC5hc3NpZ24oXG4gICAge1xuICAgICAgICAnZGVmYXVsdCc6IEZvcm1hdC5SRkMzOTg2LFxuICAgICAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgICAgICBSRkMxNzM4OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZS5jYWxsKHZhbHVlLCBwZXJjZW50VHdlbnRpZXMsICcrJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUkZDMzk4NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIEZvcm1hdFxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0IGZ1bmN0aW9uIGFwaUZldGNoKHJlcXVlc3QpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBcIkFQSV9GRVRDSFwiLFxuXHRcdHJlcXVlc3Rcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFR3aXR0ZXJGZWVkKHF1ZXJ5LCBmZWVkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogXCJTRVRfVFdJVFRFUl9GRUVEXCIsXG5cdFx0cXVlcnksXG5cdFx0ZmVlZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHdpdHRlclByb2ZpbGUocXVlcnksIHByb2ZpbGUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBcIlNFVF9UV0lUVEVSX1BST0ZJTEVcIixcblx0XHRxdWVyeSxcblx0XHRwcm9maWxlXG5cdH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvYWN0aW9ucy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbnZhciBoZXhUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBhcnJheS5wdXNoKCclJyArICgoaSA8IDE2ID8gJzAnIDogJycpICsgaS50b1N0cmluZygxNikpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn0oKSk7XG5cbnZhciBjb21wYWN0UXVldWUgPSBmdW5jdGlvbiBjb21wYWN0UXVldWUocXVldWUpIHtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbal0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLm9ialtpdGVtLnByb3BdID0gY29tcGFjdGVkO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiBhcnJheVRvT2JqZWN0KHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSBvcHRpb25zICYmIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICgob3B0aW9ucyAmJiAob3B0aW9ucy5wbGFpbk9iamVjdHMgfHwgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpKSB8fCAhaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbdGFyZ2V0LCBzb3VyY2VdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgIWlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBtZXJnZVRhcmdldCA9IGFycmF5VG9PYmplY3QodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmIGlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRhcmdldCwgaSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SXRlbSA9IHRhcmdldFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SXRlbSAmJiB0eXBlb2YgdGFyZ2V0SXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gbWVyZ2UodGFyZ2V0SXRlbSwgaXRlbSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChoYXMuY2FsbChhY2MsIGtleSkpIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gbWVyZ2UoYWNjW2tleV0sIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBtZXJnZVRhcmdldCk7XG59O1xuXG52YXIgYXNzaWduID0gZnVuY3Rpb24gYXNzaWduU2luZ2xlU291cmNlKHRhcmdldCwgc291cmNlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBhY2Nba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRhcmdldCk7XG59O1xuXG52YXIgZGVjb2RlID0gZnVuY3Rpb24gKHN0ciwgZGVjb2RlciwgY2hhcnNldCkge1xuICAgIHZhciBzdHJXaXRob3V0UGx1cyA9IHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIC8vIHVuZXNjYXBlIG5ldmVyIHRocm93cywgbm8gdHJ5Li4uY2F0Y2ggbmVlZGVkOlxuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXMucmVwbGFjZSgvJVswLTlhLWZdezJ9L2dpLCB1bmVzY2FwZSk7XG4gICAgfVxuICAgIC8vIHV0Zi04XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJXaXRob3V0UGx1cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXM7XG4gICAgfVxufTtcblxudmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShzdHIsIGRlZmF1bHRFbmNvZGVyLCBjaGFyc2V0KSB7XG4gICAgLy8gVGhpcyBjb2RlIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgQnJpYW4gV2hpdGUgKG1zY2RleCkgZm9yIHRoZSBpby5qcyBjb3JlIHF1ZXJ5c3RyaW5nIGxpYnJhcnkuXG4gICAgLy8gSXQgaGFzIGJlZW4gYWRhcHRlZCBoZXJlIGZvciBzdHJpY3RlciBhZGhlcmVuY2UgdG8gUkZDIDM5ODZcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSBzdHI7XG4gICAgaWYgKHR5cGVvZiBzdHIgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdHIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICByZXR1cm4gZXNjYXBlKHN0cmluZykucmVwbGFjZSgvJXVbMC05YS1mXXs0fS9naSwgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyUyNiUyMycgKyBwYXJzZUludCgkMC5zbGljZSgyKSwgMTYpICsgJyUzQic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGMgPT09IDB4MkQgLy8gLVxuICAgICAgICAgICAgfHwgYyA9PT0gMHgyRSAvLyAuXG4gICAgICAgICAgICB8fCBjID09PSAweDVGIC8vIF9cbiAgICAgICAgICAgIHx8IGMgPT09IDB4N0UgLy8gflxuICAgICAgICAgICAgfHwgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIC8vIDAtOVxuICAgICAgICAgICAgfHwgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIC8vIGEtelxuICAgICAgICAgICAgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpIC8vIEEtWlxuICAgICAgICApIHtcbiAgICAgICAgICAgIG91dCArPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIGhleFRhYmxlW2NdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhDMCB8IChjID4+IDYpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHhEODAwIHx8IGMgPj0gMHhFMDAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhFMCB8IChjID4+IDEyKV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaSArPSAxO1xuICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNGRikgPDwgMTApIHwgKHN0cmluZy5jaGFyQ29kZUF0KGkpICYgMHgzRkYpKTtcbiAgICAgICAgb3V0ICs9IGhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG52YXIgY29tcGFjdCA9IGZ1bmN0aW9uIGNvbXBhY3QodmFsdWUpIHtcbiAgICB2YXIgcXVldWUgPSBbeyBvYmo6IHsgbzogdmFsdWUgfSwgcHJvcDogJ28nIH1dO1xuICAgIHZhciByZWZzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWVbaV07XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgcmVmcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IG9iajogb2JqLCBwcm9wOiBrZXkgfSk7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYWN0UXVldWUocXVldWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIGlzUmVnRXhwID0gZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBpc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuXG52YXIgY29tYmluZSA9IGZ1bmN0aW9uIGNvbWJpbmUoYSwgYikge1xuICAgIHJldHVybiBbXS5jb25jYXQoYSwgYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcnJheVRvT2JqZWN0OiBhcnJheVRvT2JqZWN0LFxuICAgIGFzc2lnbjogYXNzaWduLFxuICAgIGNvbWJpbmU6IGNvbWJpbmUsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBkZWNvZGU6IGRlY29kZSxcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gICAgaXNSZWdFeHA6IGlzUmVnRXhwLFxuICAgIG1lcmdlOiBtZXJnZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgdXBkYXRlQ2F0ZWdvcnkgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgRywgUGF0aCwgU1ZHIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIEljb25cbiAqL1xuXG5jb25zdCBsb2dvID0gKFxuXHQ8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIzNC45MiAxNzQuNjVcIj5cblx0XHQ8ZGVmcz5cblx0XHRcdDxzdHlsZT57YC5jbHMtMXtmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9YH08L3N0eWxlPlxuXHRcdFx0PGxpbmVhckdyYWRpZW50XG5cdFx0XHRcdGlkPVwibGluZWFyLWdyYWRpZW50XCJcblx0XHRcdFx0eDE9XCI3OS4xMlwiXG5cdFx0XHRcdHkxPVwiMjMuODFcIlxuXHRcdFx0XHR4Mj1cIjE2Ni40XCJcblx0XHRcdFx0eTI9XCIxNTguMjJcIlxuXHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzYxY2FlNVwiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMTJcIiBzdG9wQ29sb3I9XCIjNjRjNmUxXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3BDb2xvcj1cIiM2ZGJhZDNcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjM5XCIgc3RvcENvbG9yPVwiIzdiYTdiZFwiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNTRcIiBzdG9wQ29sb3I9XCIjOGY4YjlmXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC42OFwiIHN0b3BDb2xvcj1cIiNhOTY4NzdcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjgzXCIgc3RvcENvbG9yPVwiI2M5M2Q0OFwiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuOTJcIiBzdG9wQ29sb3I9XCIjZGYxZjI2XCIgLz5cblx0XHRcdDwvbGluZWFyR3JhZGllbnQ+XG5cdFx0PC9kZWZzPlxuXHRcdDx0aXRsZT5jOS1mZWF0aGVyLWxvZ28taWNvbjwvdGl0bGU+XG5cdFx0PEcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxuXHRcdFx0PEcgaWQ9XCJsb2dvX2dyYWRpZW50XCIgZGF0YS1uYW1lPVwibG9nbyBncmFkaWVudFwiPlxuXHRcdFx0XHQ8UGF0aFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNscy0xXCJcblx0XHRcdFx0XHRkPVwiTTQ3LDEzOC4wNkM0MC4zNywxMjMuOSw0MC44NCwzNi40MSw4My41NCwyMi40YzAsMC0xNS42NCw3LjI5LTEwLjEyLDI3LjQ1LDcuMi0xMy42OCwyMC4zMy0zNy4yMiw1Ny43Ny00My40NiwyNC0yLjg5LTEzLjE1LDEuMS02LDIyLjIyLjI0LTguODgsNTkuNDEtNDUsMTA4LTE5LjgxQzI0Ni40MywxMDQuNjksMTc3LDExMC4wNiwxNzcsMTEwLjA2aDBzMTQuOTUsMi4zOCwyMy44My0uNWMtOS4xMiwzOS44NC02My4xMyw0Mi4xNC02My4xMyw0Mi4xNHMyMC41MSw1LjExLDM0LjkyLDIuNDdjLTQ5LjQ1LDMyLjQtMTE2Ljg2LTQuODYtMTE2Ljg2LTQuODYtLjI3LjA4LS44My0uNDMtMS41OC0xLjMxbDExMi03OGEyNS4wOSwyNS4wOSwwLDEsMC02LTYuMjdMNzkuOSwxMjAuNGwtMi4yMy0zLjI1LTMwLjU5LDIxTTE4My43MiwzMy43NGExNi4yNSwxNi4yNSwwLDEsMS0xOC44NCwxMy4xNywxNi4yNCwxNi4yNCwwLDAsMSwxOC44NC0xMy4xN1pNNTQuMTcsMTQ4bC0uMzktLjU1LjQzLjUyLDAsMFptLTM0LjQzLTYuNTUsOC40NS01LjUsNS41LDguNDQtOC40NCw1LjUtNS41MS04LjQ0Wm0tNC4zNywxNC44Ny01LjUtOC40NCw4LjQ1LTUuNSw1LjUsOC40NC04LjQ1LDUuNVpNNS41LDE2Mi43OSwwLDE1NC4zNGw4LjQ1LTUuNSw1LjUsOC40NEw1LjUsMTYyLjc5Wm00Ni44Ni0xMy44N0wxMy40MSwxNzQuNjUsNi40NiwxNjQuMzEsNDUsMTM5LjNsNy4zMyw5LjYyWlwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0c+XG5cdFx0PC9HPlxuXHQ8L1NWRz5cbik7XG5cbmlmICh1cGRhdGVDYXRlZ29yeSkge1xuXHR1cGRhdGVDYXRlZ29yeShcImM5LWJsb2Nrc1wiLCB7IGljb246IGxvZ28gfSk7XG59XG5cbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L2RlcmVnaXN0ZXItYmxvY2tzXCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzXCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1zdHlsZXNcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0b3Jlc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91cGRhdGUtY2F0ZWdvcnkuanMiLCJjb25zdCB7IHVucmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxubGV0IGxvYWRCbG9ja3NFZGl0b3IgPSBudWxsO1xuXG5pZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkQmxvY2tFZGl0b3IpIHtcblx0Ly8gVXNpbmcgR3V0ZW5iZXJnIHBsdWdpblxuXHRsb2FkQmxvY2tzRWRpdG9yID0gd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcjtcbn0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yKSB7XG5cdC8vIFVzaW5nIFdQIGNvcmUgR3V0ZW5iZXJnXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEd1dGVuYmVyZ0VkaXRvcjtcbn1cblxuaWYgKGxvYWRCbG9ja3NFZGl0b3IpIHtcblx0bG9hZEJsb2Nrc0VkaXRvci50aGVuKCgpID0+IHtcblx0XHR1bnJlZ2lzdGVyQmxvY2tUeXBlKFwiY29yZS92ZXJzZVwiKTtcblx0XHQvLyB1bnJlZ2lzdGVyQmxvY2tUeXBlKFwiY29yZS9jb2x1bW5zXCIpO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJjb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XG5cbmZ1bmN0aW9uIGZvcm1hdENsYXNzTmFtZShjbGFzc05hbWUpIHtcblx0Y29uc3QgcmVzdWx0ID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJ3cC1ibG9jay1jOS1ibG9ja3NcIiwgXCJjOVwiKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuYWRkRmlsdGVyKFxuXHRcImM5LWJsb2Nrcy5lZGl0b3IuY2xhc3NOYW1lXCIsXG5cdFwiYzktYmxvY2tzL2Zvcm1hdC1jbGFzc25hbWVcIixcblx0Zm9ybWF0Q2xhc3NOYW1lXG4pO1xuYWRkRmlsdGVyKFxuXHRcImM5LWJsb2Nrcy5ibG9ja3MuY2xhc3NOYW1lXCIsXG5cdFwiYzktYmxvY2tzL2Zvcm1hdC1jbGFzc25hbWVcIixcblx0Zm9ybWF0Q2xhc3NOYW1lXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwiLy8gY29uc3QgeyByZWdpc3RlckJsb2NrU3R5bGUgfSA9IHdwLmJsb2NrcztcblxubGV0IGxvYWRCbG9ja3NFZGl0b3IgPSBudWxsO1xuXG5pZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkQmxvY2tFZGl0b3IpIHtcblx0Ly8gVXNpbmcgR3V0ZW5iZXJnIHBsdWdpblxuXHRsb2FkQmxvY2tzRWRpdG9yID0gd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcjtcbn0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yKSB7XG5cdC8vIFVzaW5nIFdQIGNvcmUgR3V0ZW5iZXJnXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEd1dGVuYmVyZ0VkaXRvcjtcbn1cblxuaWYgKGxvYWRCbG9ja3NFZGl0b3IpIHtcblx0bG9hZEJsb2Nrc0VkaXRvci50aGVuKCgpID0+IHtcblx0XHQvLyByZWdpc3RlckJsb2NrU3R5bGUoXCJjb3JlL2J1dHRvblwiLCB7XG5cdFx0Ly8gXHRuYW1lOiBcImN1c3RvbS1idXR0b24tc3R5bGVcIixcblx0XHQvLyBcdGxhYmVsOiBcIk15IEJ1dHRvbiBTdHlsZVwiXG5cdFx0Ly8gfSk7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1zdHlsZXMuanMiLCJpbXBvcnQgXCIuLi9zdG9yZXMvdHdpdHRlclwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1zdG9yZXMuanMiLCJpbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbnRyb2xzIGZyb20gXCIuL2NvbnRyb2xzXCI7XG5pbXBvcnQgKiBhcyByZXNvbHZlcnMgZnJvbSBcIi4vcmVzb2x2ZXJzXCI7XG5cbmNvbnN0IHsgcmVnaXN0ZXJTdG9yZSB9ID0gd3AuZGF0YTtcblxucmVnaXN0ZXJTdG9yZShcImM5LWJsb2Nrcy90d2l0dGVyXCIsIHtcblx0cmVkdWNlcixcblx0c2VsZWN0b3JzLFxuXHRhY3Rpb25zLFxuXHRjb250cm9scyxcblx0cmVzb2x2ZXJzXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsImZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IGZlZWRzOiB7fSwgcHJvZmlsZXM6IHt9IH0sIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlNFVF9UV0lUVEVSX0ZFRURcIjpcblx0XHRcdGlmICghc3RhdGUuZmVlZHNbYWN0aW9uLnF1ZXJ5XSAmJiBhY3Rpb24uZmVlZCkge1xuXHRcdFx0XHRzdGF0ZS5mZWVkc1thY3Rpb24ucXVlcnldID0gYWN0aW9uLmZlZWQ7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiU0VUX1RXSVRURVJfUFJPRklMRVwiOlxuXHRcdFx0aWYgKCFzdGF0ZS5wcm9maWxlc1thY3Rpb24ucXVlcnldICYmIGFjdGlvbi5wcm9maWxlKSB7XG5cdFx0XHRcdHN0YXRlLnByb2ZpbGVzW2FjdGlvbi5xdWVyeV0gPSBhY3Rpb24ucHJvZmlsZTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdC8vIG5vIGRlZmF1bHRcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9yZWR1Y2VyLmpzIiwiaW1wb3J0IHByZXBhcmVRdWVyeSBmcm9tIFwiLi9wcmVwYXJlLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUd2l0dGVyRmVlZChzdGF0ZSwgZGF0YSkge1xuXHRjb25zdCBxdWVyeSA9IHByZXBhcmVRdWVyeShcImZlZWRcIiwgZGF0YSk7XG5cblx0cmV0dXJuIHN0YXRlLmZlZWRzW3F1ZXJ5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR3aXR0ZXJQcm9maWxlKHN0YXRlLCBkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwicHJvZmlsZVwiLCBkYXRhKTtcblxuXHRyZXR1cm4gc3RhdGUucHJvZmlsZXNbcXVlcnldO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3NlbGVjdG9ycy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdEZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZGVmYXVsdEZvcm1hdF0sXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGluZGljZXM6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSh2KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ3N5bWJvbCdcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdiaWdpbnQnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhbGlkLXR5cGVvZlxufTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSggLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXRcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpIDogcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9uTnVsbGlzaFByaW1pdGl2ZShvYmopIHx8IHV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGVuY29kZVZhbHVlc09ubHkgPyBwcmVmaXggOiBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmosIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChpc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIG9iaktleXMgPSBzb3J0ID8ga2V5cy5zb3J0KHNvcnQpIDoga2V5cztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpIDogcHJlZml4LFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgICAgIGNoYXJzZXRcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodmFsdWVzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ICsgKGFsbG93RG90cyA/ICcuJyArIGtleSA6ICdbJyArIGtleSArICddJyksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxudmFyIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVuY29kZXIgIT09IG51bGwgJiYgb3B0cy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBjaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8IGRlZmF1bHRzLmNoYXJzZXQ7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZvcm1hdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKCFoYXMuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBmb3JtYXQgb3B0aW9uIHByb3ZpZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdCA9IG9wdHMuZm9ybWF0O1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cbiAgICB2YXIgZmlsdGVyID0gZGVmYXVsdHMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgaXNBcnJheShvcHRzLmZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0cy5maWx0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUXVlcnlQcmVmaXg6IHR5cGVvZiBvcHRzLmFkZFF1ZXJ5UHJlZml4ID09PSAnYm9vbGVhbicgPyBvcHRzLmFkZFF1ZXJ5UHJlZml4IDogZGVmYXVsdHMuYWRkUXVlcnlQcmVmaXgsXG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0cy5kZWxpbWl0ZXIsXG4gICAgICAgIGVuY29kZTogdHlwZW9mIG9wdHMuZW5jb2RlID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZSA6IGRlZmF1bHRzLmVuY29kZSxcbiAgICAgICAgZW5jb2RlcjogdHlwZW9mIG9wdHMuZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZW5jb2RlciA6IGRlZmF1bHRzLmVuY29kZXIsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHR5cGVvZiBvcHRzLmVuY29kZVZhbHVlc09ubHkgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlVmFsdWVzT25seSA6IGRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2tpcE51bGxzLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGUgPyBvcHRpb25zLmVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQsXG4gICAgICAgICAgICBvcHRpb25zLmFsbG93RG90cyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgY29tbWE6IGZhbHNlLFxuICAgIGRlY29kZXI6IHV0aWxzLmRlY29kZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBpZ25vcmVRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiBmYWxzZSxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBwYXJzZUFycmF5czogdHJ1ZSxcbiAgICBwbGFpbk9iamVjdHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpbnRlcnByZXROdW1lcmljRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIyhcXGQrKTsvZywgZnVuY3Rpb24gKCQwLCBudW1iZXJTdHIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobnVtYmVyU3RyLCAxMCkpO1xuICAgIH0pO1xufTtcblxuLy8gVGhpcyBpcyB3aGF0IGJyb3dzZXJzIHdpbGwgc3VibWl0IHdoZW4gdGhlIOKckyBjaGFyYWN0ZXIgb2NjdXJzIGluIGFuXG4vLyBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQgYm9keSBhbmQgdGhlIGVuY29kaW5nIG9mIHRoZSBwYWdlIGNvbnRhaW5pbmdcbi8vIHRoZSBmb3JtIGlzIGlzby04ODU5LTEsIG9yIHdoZW4gdGhlIHN1Ym1pdHRlZCBmb3JtIGhhcyBhbiBhY2NlcHQtY2hhcnNldFxuLy8gYXR0cmlidXRlIG9mIGlzby04ODU5LTEuIFByZXN1bWFibHkgYWxzbyB3aXRoIG90aGVyIGNoYXJzZXRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbi8vIHRoZSDinJMgY2hhcmFjdGVyLCBzdWNoIGFzIHVzLWFzY2lpLlxudmFyIGlzb1NlbnRpbmVsID0gJ3V0Zjg9JTI2JTIzMTAwMDMlM0InOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JylcblxuLy8gVGhlc2UgYXJlIHRoZSBwZXJjZW50LWVuY29kZWQgdXRmLTggb2N0ZXRzIHJlcHJlc2VudGluZyBhIGNoZWNrbWFyaywgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IGFjdHVhbGx5IGlzIHV0Zi04IGVuY29kZWQuXG52YXIgY2hhcnNldFNlbnRpbmVsID0gJ3V0Zjg9JUUyJTlDJTkzJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuXG52YXIgcGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nVmFsdWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgY2xlYW5TdHIgPSBvcHRpb25zLmlnbm9yZVF1ZXJ5UHJlZml4ID8gc3RyLnJlcGxhY2UoL15cXD8vLCAnJykgOiBzdHI7XG4gICAgdmFyIGxpbWl0ID0gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0O1xuICAgIHZhciBwYXJ0cyA9IGNsZWFuU3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBsaW1pdCk7XG4gICAgdmFyIHNraXBJbmRleCA9IC0xOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSB1dGY4IHNlbnRpbmVsIHdhcyBmb3VuZFxuICAgIHZhciBpO1xuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRpb25zLmNoYXJzZXQ7XG4gICAgaWYgKG9wdGlvbnMuY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmluZGV4T2YoJ3V0Zjg9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbaV0gPT09IGNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldID09PSBpc29TZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBza2lwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGkgPSBwYXJ0cy5sZW5ndGg7IC8vIFRoZSBlc2xpbnQgc2V0dGluZ3MgZG8gbm90IGFsbG93IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpID09PSBza2lwSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgICAgdmFyIGJyYWNrZXRFcXVhbHNQb3MgPSBwYXJ0LmluZGV4T2YoJ109Jyk7XG4gICAgICAgIHZhciBwb3MgPSBicmFja2V0RXF1YWxzUG9zID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogYnJhY2tldEVxdWFsc1BvcyArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPyBudWxsIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLCBwb3MpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKHBvcyArIDEpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgJiYgY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICB2YWwgPSBpbnRlcnByZXROdW1lcmljRW50aXRpZXModmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5jb21tYSAmJiB2YWwuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zcGxpdCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB1dGlscy5jb21iaW5lKG9ialtrZXldLCB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGVhZiA9IHZhbDtcblxuICAgIGZvciAodmFyIGkgPSBjaGFpbi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgb2JqO1xuICAgICAgICB2YXIgcm9vdCA9IGNoYWluW2ldO1xuXG4gICAgICAgIGlmIChyb290ID09PSAnW10nICYmIG9wdGlvbnMucGFyc2VBcnJheXMpIHtcbiAgICAgICAgICAgIG9iaiA9IFtdLmNvbmNhdChsZWFmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgICAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3QuY2hhckF0KDApID09PSAnWycgJiYgcm9vdC5jaGFyQXQocm9vdC5sZW5ndGggLSAxKSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCAtMSkgOiByb290O1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFyc2VBcnJheXMgJiYgY2xlYW5Sb290ID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9iaiA9IHsgMDogbGVhZiB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAhaXNOYU4oaW5kZXgpXG4gICAgICAgICAgICAgICAgJiYgcm9vdCAhPT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgU3RyaW5nKGluZGV4KSA9PT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgaW5kZXggPj0gMFxuICAgICAgICAgICAgICAgICYmIChvcHRpb25zLnBhcnNlQXJyYXlzICYmIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgICAgIG9ialtpbmRleF0gPSBsZWFmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGxlYWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZWFmID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBsZWFmO1xufTtcblxudmFyIHBhcnNlS2V5cyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdLZXlzKGdpdmVuS2V5LCB2YWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWdpdmVuS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZG90IG5vdGF0aW9uIHRvIGJyYWNrZXQgbm90YXRpb25cbiAgICB2YXIga2V5ID0gb3B0aW9ucy5hbGxvd0RvdHMgPyBnaXZlbktleS5yZXBsYWNlKC9cXC4oW14uW10rKS9nLCAnWyQxXScpIDogZ2l2ZW5LZXk7XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgYnJhY2tldHMgPSAvKFxcW1teW1xcXV0qXSkvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15bXFxdXSpdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gb3B0aW9ucy5kZXB0aCA+IDAgJiYgYnJhY2tldHMuZXhlYyhrZXkpO1xuICAgIHZhciBwYXJlbnQgPSBzZWdtZW50ID8ga2V5LnNsaWNlKDAsIHNlZ21lbnQuaW5kZXgpIDoga2V5O1xuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgdXNpbmcgcGxhaW4gb2JqZWN0cywgb3B0aW9uYWxseSBwcmVmaXgga2V5cyB0aGF0IHdvdWxkIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKG9wdGlvbnMuZGVwdGggPiAwICYmIChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc2VnbWVudFsxXS5zbGljZSgxLCAtMSkpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cbnZhciBub3JtYWxpemVQYXJzZU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRzLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBjaGFyc2V0ID0gdHlwZW9mIG9wdHMuY2hhcnNldCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5jaGFyc2V0IDogb3B0cy5jaGFyc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgYWxsb3dQcm90b3R5cGVzOiB0eXBlb2Ygb3B0cy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdHMuYWxsb3dQcm90b3R5cGVzIDogZGVmYXVsdHMuYWxsb3dQcm90b3R5cGVzLFxuICAgICAgICBhcnJheUxpbWl0OiB0eXBlb2Ygb3B0cy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgY29tbWE6IHR5cGVvZiBvcHRzLmNvbW1hID09PSAnYm9vbGVhbicgPyBvcHRzLmNvbW1hIDogZGVmYXVsdHMuY29tbWEsXG4gICAgICAgIGRlY29kZXI6IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0cy5kZWxpbWl0ZXIpID8gb3B0cy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiwgbm8tZXh0cmEtcGFyZW5zXG4gICAgICAgIGRlcHRoOiAodHlwZW9mIG9wdHMuZGVwdGggPT09ICdudW1iZXInIHx8IG9wdHMuZGVwdGggPT09IGZhbHNlKSA/ICtvcHRzLmRlcHRoIDogZGVmYXVsdHMuZGVwdGgsXG4gICAgICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBvcHRzLmlnbm9yZVF1ZXJ5UHJlZml4ID09PSB0cnVlLFxuICAgICAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IHR5cGVvZiBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgOiBkZWZhdWx0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMsXG4gICAgICAgIHBhcmFtZXRlckxpbWl0OiB0eXBlb2Ygb3B0cy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQsXG4gICAgICAgIHBhcnNlQXJyYXlzOiBvcHRzLnBhcnNlQXJyYXlzICE9PSBmYWxzZSxcbiAgICAgICAgcGxhaW5PYmplY3RzOiB0eXBlb2Ygb3B0cy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdHMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzLFxuICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHR5cGVvZiBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gdXRpbHMubWVyZ2Uob2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5jb21wYWN0KG9iaik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgeyBhcGlGZXRjaCB9ID0gd3A7XG5cbmV4cG9ydCBmdW5jdGlvbiBBUElfRkVUQ0goeyByZXF1ZXN0IH0pIHtcblx0cmV0dXJuIGFwaUZldGNoKHJlcXVlc3QpLnRoZW4oZmV0Y2hlZERhdGEgPT4ge1xuXHRcdGlmIChmZXRjaGVkRGF0YSAmJiBmZXRjaGVkRGF0YS5zdWNjZXNzICYmIGZldGNoZWREYXRhLnJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gZmV0Y2hlZERhdGEucmVzcG9uc2U7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCBwcmVwYXJlUXVlcnkgZnJvbSBcIi4vcHJlcGFyZS1xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldFR3aXR0ZXJGZWVkKGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJmZWVkXCIsIGRhdGEpO1xuXHRjb25zdCBmZWVkID0geWllbGQgYWN0aW9ucy5hcGlGZXRjaCh7IHBhdGg6IHF1ZXJ5IH0pO1xuXG5cdHJldHVybiBhY3Rpb25zLnNldFR3aXR0ZXJGZWVkKHF1ZXJ5LCBmZWVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRUd2l0dGVyUHJvZmlsZShkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwicHJvZmlsZVwiLCBkYXRhKTtcblx0Y29uc3QgcHJvZmlsZSA9IHlpZWxkIGFjdGlvbnMuYXBpRmV0Y2goeyBwYXRoOiBxdWVyeSB9KTtcblxuXHRyZXR1cm4gYWN0aW9ucy5zZXRUd2l0dGVyUHJvZmlsZShxdWVyeSwgcHJvZmlsZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVzb2x2ZXJzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IHJlZ2lzdGVyUGx1Z2luIH0gPSB3cC5wbHVnaW5zO1xuY29uc3QgeyBQbHVnaW5TaWRlYmFyLCBQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIH0gPSB3cC5lZGl0UG9zdDtcblxuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7IEJ1dHRvbiwgUGFuZWxCb2R5LCBEYXNoaWNvbiB9ID0gd3AuY29tcG9uZW50cztcblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmdcIjtcbmltcG9ydCB7IFRlbXBsYXRlc01vZGFsIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy1tb2RhbFwiO1xuXG5jbGFzcyBDOSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGlzTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW1cblx0XHRcdFx0XHRpY29uPXs8TG9nbyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIG1hcmdpbjogXCIwIDEwcHggMCA2cHhcIiB9fSAvPn1cblx0XHRcdFx0XHR0YXJnZXQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e19fKFwiQ09WRVJUIE5JTkUgQmxvY2tzXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHQ8L1BsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0+XG5cdFx0XHRcdDxQbHVnaW5TaWRlYmFyXG5cdFx0XHRcdFx0bmFtZT1cImM5LWJsb2Nrc1wiXG5cdFx0XHRcdFx0aWQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkNPVkVSVCBOSU5FIEJsb2Nrc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBcInRlbXBsYXRlc1wiIH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLXNjaGVkdWxlXCIgLz5cblx0XHRcdFx0XHRcdFx0e19fKFwiVGVtcGxhdGVzXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBcImN1c3RvbS1jb2RlXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtZWRpdG9yLWNvZGVcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJDU1MgJiBKYXZhU2NyaXB0XCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBcImN1c3RvbWl6ZXJcIiB9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1hZG1pbi1zZXR0aW5nc1wiIC8+XG5cdFx0XHRcdFx0XHRcdHtfXyhcIkN1c3RvbWl6ZXJcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QbHVnaW5TaWRlYmFyPlxuXHRcdFx0XHR7XCJ0ZW1wbGF0ZXNcIiA9PT0gaXNNb2RhbE9wZW4gPyAoXG5cdFx0XHRcdFx0PFRlbXBsYXRlc01vZGFsXG5cdFx0XHRcdFx0XHR0aXRsZT1cIlRlbXBsYXRlc1wiXG5cdFx0XHRcdFx0XHRpY29uPXs8RGFzaGljb24gaWNvbj17XCJzY2hlZHVsZVwifS8+fVxuXHRcdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHsvKiB7ICdjdXN0b20tY29kZScgPT09IGlzTW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tQ29kZU1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17ICgpID0+IHRoaXMuc2V0U3RhdGUoIHsgaXNNb2RhbE9wZW46IGZhbHNlIH0gKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICdjdXN0b21pemVyJyA9PT0gaXNNb2RhbE9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21pemVyTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gdGhpcy5zZXRTdGF0ZSggeyBpc01vZGFsT3BlbjogZmFsc2UgfSApIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfSAqL31cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5yZWdpc3RlclBsdWdpbihcImM5LWJsb2Nrc1wiLCB7XG5cdGljb246IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXBsdWdpbi1pY29uXCI+XG5cdFx0XHQ8TG9nbyAvPlxuXHRcdDwvZGl2PlxuXHQpLFxuXHRyZW5kZXI6IEM5XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246aG92ZXIgLmM5LXBsdWdpbi1pY29uIHN2Z3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxNnB4fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnICosLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbi5pcy10b2dnbGVkIC5jOS1wbHVnaW4taWNvbiBzdmcgKiwuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmcgKntzdHJva2U6aW5pdGlhbCAhaW1wb3J0YW50fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl0sLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbi5pcy10b2dnbGVkIC5jOS1wbHVnaW4taWNvbiBzdmcgW2ZpbGw9XFxcIiNmZmZcXFwiXSwuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmcgW2ZpbGw9XFxcIiNmZmZcXFwiXXtmaWxsOiNmZmYgIWltcG9ydGFudH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uIC5jOS1wbHVnaW4taWNvbiBzcGFue21hcmdpbjotMnB4fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3BhbiBbZmlsbD1cXFwiI2ZmZlxcXCJde2ZpbGw6IzU1NWQ2NiAhaW1wb3J0YW50fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b257ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvO3BhZGRpbmc6MTVweCAxMHB4O21hcmdpbi1ib3R0b206MTZweDtmbGV4LXNocmluazowO292ZXJmbG93OmhpZGRlbjtjb2xvcjppbmhlcml0O3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MXB4IHNvbGlkO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246MC4ycyBjb2xvciwgMC4ycyBiYWNrZ3JvdW5kLWNvbG9yLCAwLjJzIGJvcmRlci1jb2xvciwgMC4ycyBib3gtc2hhZG93fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b24sLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpob3ZlciwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246Zm9jdXM6ZW5hYmxlZCwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZSwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZTplbmFibGVke2JvcmRlci1jb2xvcjpyZ2JhKDc5LDg5LDEwNSwwLjIpO2JveC1zaGFkb3c6bm9uZX0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmhvdmVyLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246YWN0aXZlLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246YWN0aXZlOmVuYWJsZWR7Y29sb3I6IzE5MWUyMztiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5Zjl9LnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1cywucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzOmVuYWJsZWR7Y29sb3I6IzE5MWUyMztib3JkZXItY29sb3I6IzAwN2ZhYztib3gtc2hhZG93OjAgMCAwIDJweCAjMDBhMGQyfS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b24gc3BhbntkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87bWFyZ2luLXRvcDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjI0cHh9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudmFyIF9yZWYgPVxuLyojX19QVVJFX18qL1xuUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBcImRhdGEtbmFtZVwiOiBcIkxheWVyIDJcIlxufSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk00NyAxMzguMDZDNDAuMzcgMTIzLjkgNDAuODQgMzYuNDEgODMuNTQgMjIuNGMwIDAtMTUuNjQgNy4yOS0xMC4xMiAyNy40NSA3LjItMTMuNjggMjAuMzMtMzcuMjIgNTcuNzctNDMuNDYgMjQtMi44OS0xMy4xNSAxLjEtNiAyMi4yMi4yNC04Ljg4IDU5LjQxLTQ1IDEwOC0xOS44MUMyNDYuNDMgMTA0LjY5IDE3NyAxMTAuMDYgMTc3IDExMC4wNnMxNC45NSAyLjM4IDIzLjgzLS41Yy05LjEyIDM5Ljg0LTYzLjEzIDQyLjE0LTYzLjEzIDQyLjE0czIwLjUxIDUuMTEgMzQuOTIgMi40N2MtNDkuNDUgMzIuNC0xMTYuODYtNC44Ni0xMTYuODYtNC44Ni0uMjcuMDgtLjgzLS40My0xLjU4LTEuMzFsMTEyLTc4YTI1LjA5IDI1LjA5IDAgMTAtNi02LjI3TDc5LjkgMTIwLjRsLTIuMjMtMy4yNS0zMC41OSAyMU0xODMuNzIgMzMuNzRhMTYuMjUgMTYuMjUgMCAxMS0xOC44NCAxMy4xNyAxNi4yNCAxNi4yNCAwIDAxMTguODQtMTMuMTd6TTU0LjE3IDE0OGwtLjM5LS41NS40My41MnptLTM0LjQzLTYuNTVsOC40NS01LjUgNS41IDguNDQtOC40NCA1LjUtNS41MS04LjQ0em0tNC4zNyAxNC44N2wtNS41LTguNDQgOC40NS01LjUgNS41IDguNDQtOC40NSA1LjV6bS05Ljg3IDYuNDdMMCAxNTQuMzRsOC40NS01LjUgNS41IDguNDQtOC40NSA1LjUxem00Ni44Ni0xMy44N2wtMzguOTUgMjUuNzMtNi45NS0xMC4zNEw0NSAxMzkuM2w3LjMzIDkuNjJ6XCIsXG4gIGZpbGw6IFwiIzEyMTIxMlwiLFxuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIFwiZGF0YS1uYW1lXCI6IFwibG9nbyBkYXJrIGdyZXlcIlxufSkpO1xuXG52YXIgU3ZnQzlGZWF0aGVyTG9nb0dyYXkgPSBmdW5jdGlvbiBTdmdDOUZlYXRoZXJMb2dvR3JheShwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgdmlld0JveDogXCIwIDAgMjM0LjkyIDE3NC42NVwiXG4gIH0sIHByb3BzKSwgX3JlZik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmdDOUZlYXRoZXJMb2dvR3JheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmdcbi8vIG1vZHVsZSBpZCA9IDQyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBNb2RhbCwgVGFiUGFuZWwsIFRvb2x0aXAsIEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7IHdpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcbmNvbnN0IHsgY3JlYXRlQmxvY2ssIHJhd0hhbmRsZXIgfSA9IHdwLmJsb2NrcztcbmNvbnN0IGFwaUZldGNoID0gd3AuYXBpRmV0Y2g7XG5pbXBvcnQgTGF5b3V0QnV0dG9uIGZyb20gXCIuL2xheW91dC1idXR0b25cIjtcbmltcG9ydCBTZWN0aW9uQnV0dG9uIGZyb20gXCIuL3NlY3Rpb24tYnV0dG9uXCI7XG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5cbi8vIHRlbXBsYXRlc1xuaW1wb3J0IHRlbXBsYXRlTWFya3VwcyBmcm9tIFwiLi90ZW1wbGF0ZXMtbWFya3VwXCI7XG5cbmNsYXNzIFRlbXBsYXRlc01vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblxuXHRcdHRoaXMuZ2V0UmV1c2FibGVCbG9ja3MgPSB0aGlzLmdldFJldXNhYmxlQmxvY2tzLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmV1c2FibGVzOiBbXVxuXHRcdH07XG5cblx0XHR0aGlzLmdldFJldXNhYmxlQmxvY2tzKCk7XG5cdH1cblxuXHRhc3luYyBnZXRSZXVzYWJsZUJsb2NrcygpIHtcblx0XHRjb25zdCB7IGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHBvc3RUeXBlID0gYXdhaXQgYXBpRmV0Y2goeyBwYXRoOiBgL3dwL3YyL3R5cGVzL3dwX2Jsb2NrYCB9KTtcblx0XHRjb25zdCByZXVzYWJsZXMgPSBhd2FpdCBhcGlGZXRjaCh7IHBhdGg6IGAvd3AvdjIvJHtwb3N0VHlwZS5yZXN0X2Jhc2V9YCB9KTtcblxuXHRcdGNvbnN0IGJsb2NrcyA9IHJldXNhYmxlcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRuYW1lOiBpdGVtLnRpdGxlLnJhdyxcblx0XHRcdFx0Y29udGVudDogcmF3SGFuZGxlcih7XG5cdFx0XHRcdFx0SFRNTDogaXRlbS5jb250ZW50LnJhdyxcblx0XHRcdFx0XHRtb2RlOiBcIkJMT0NLU1wiLFxuXHRcdFx0XHRcdGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTFxuXHRcdFx0XHR9KVxuXHRcdFx0fTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmV1c2FibGVzOiBibG9ja3Ncblx0XHR9KTtcblx0fVxuXG5cdG1hcmt1cFRvQmxvY2sodGVtcGxhdGVPYmosIGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCkge1xuXHRcdGxldCBibG9ja09iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlT2JqKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoYmxvY2tPYmopKSB7XG5cdFx0XHRibG9ja09ialtrZXldID0gcmF3SGFuZGxlcih7XG5cdFx0XHRcdEhUTUw6IGJsb2NrT2JqW2tleV0sXG5cdFx0XHRcdG1vZGU6IFwiQkxPQ0tTXCIsXG5cdFx0XHRcdGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJsb2NrT2JqO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgcmVzZXRCbG9ja3MsIGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCB9ID0gdGhpcy5wcm9wcztcblxuXHRcdC8vIGRlZmluZSBzZWN0aW9uIGFuZCBsYXlvdXQgdGVtcGxhdGVzXG5cblx0XHRjb25zdCBzZWN0aW9ucyA9IHtcblx0XHRcdHRlc3Q6IFtcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL2NvdmVyXCIsIHsgYWxpZ246IFwiZnVsbFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvYnV0dG9uXCIsIHtcblx0XHRcdFx0XHR0ZXh0OiBfXyhcIkxheW91dCBTd2l0Y2hlclwiLCBcImM5LWJsb2Nrc1wiKSxcblx0XHRcdFx0XHRhbGlnbjogXCJjZW50ZXJcIlxuXHRcdFx0XHR9KVxuXHRcdFx0XSxcblx0XHRcdC8vIGNvbnZlcnQgbWFya3VwIHRvIGFjdHVhbCBibG9ja3Ncblx0XHRcdC4uLnRoaXMubWFya3VwVG9CbG9jayh0ZW1wbGF0ZU1hcmt1cHMuc2VjdGlvbnMsIGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTClcblx0XHR9O1xuXG5cdFx0Y29uc3QgbGF5b3V0cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtjcmVhdGVCbG9jayhcImNvcmUvcGFyYWdyYXBoXCIsIHt9KV0sXG5cdFx0XHRoZXJvOiBbXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9jb3ZlclwiLCB7IGFsaWduOiBcImZ1bGxcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL2J1dHRvblwiLCB7XG5cdFx0XHRcdFx0dGV4dDogX18oXCJMYXlvdXQgU3dpdGNoZXJcIiwgXCJjOS1ibG9ja3NcIiksXG5cdFx0XHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiYzktYmxvY2tzL2dyaWRcIiwge30sIFtcblx0XHRcdFx0XHRjcmVhdGVCbG9jayhcImM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyXCIsIHtcblx0XHRcdFx0XHRcdGNvbHVtbnM6IDMsXG5cdFx0XHRcdFx0XHRsYXlvdXQ6IFwiYzktMy1jb2wtZXF1YWxcIlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdF0pXG5cdFx0XHRdLFxuXHRcdFx0ZmVhdHVyZWQ6IFtcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL2hlYWRpbmdcIiwge30pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvc3BhY2VyXCIsIHsgaGVpZ2h0OiBcIjEwXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9tZWRpYS10ZXh0XCIsIHsgYWxpZ246IFwiZnVsbFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvc3BhY2VyXCIsIHsgaGVpZ2h0OiBcIjQwXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9xdW90ZVwiLCB7fSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9zcGFjZXJcIiwgeyBoZWlnaHQ6IFwiMjBcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL21lZGlhLXRleHRcIiwgeyBtZWRpYVBvc2l0aW9uOiBcInJpZ2h0XCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9wYXJhZ3JhcGhcIiwge1xuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBfXyhcIkxheW91dCBTd2l0Y2hlclwiLCBcImM5LWJsb2Nrc1wiKVxuXHRcdFx0XHR9KVxuXHRcdFx0XSxcblx0XHRcdG5lc3RlZDogW1xuXHRcdFx0XHRjcmVhdGVCbG9jayhcImM5LWJsb2Nrcy9ncmlkXCIsIHt9LCBbXG5cdFx0XHRcdFx0Y3JlYXRlQmxvY2soXG5cdFx0XHRcdFx0XHRcImM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHR7IGNvbHVtbnM6IDMsIGxheW91dDogXCJjOS0zLWNvbC1lcXVhbFwiIH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZUJsb2NrKFwiYzktYmxvY2tzL2NvbHVtblwiLCB7fSwgW1xuXHRcdFx0XHRcdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9idXR0b25cIiwgeyB0ZXh0OiBcIk1ha2UgdGhpcyBSZWNpcGVcIiB9KVxuXHRcdFx0XHRcdFx0XHRdKVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XSlcblx0XHRcdF0sXG5cdFx0XHQvLyBjb252ZXJ0IG1hcmt1cCB0byBhY3R1YWwgYmxvY2tzXG5cdFx0XHQuLi50aGlzLm1hcmt1cFRvQmxvY2sodGVtcGxhdGVNYXJrdXBzLmxheW91dHMsIGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTClcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRjbGFzc05hbWU9XCJjOS10ZW1wbGF0ZXMtbW9kYWxcIlxuXHRcdFx0XHRwb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRcdHNpemU9XCJsZ1wiXG5cdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGFiUGFuZWxcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjOS10ZW1wbGF0ZS10YWJzIGM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWxcIlxuXHRcdFx0XHRcdHRhYnM9e1tcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJzZWN0aW9uc1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogKFxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJTaW1wbGUgc2VjdGlvbnMgdG8gY29uc3RydWN0IHlvdXIgcGFnZS5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJTZWN0aW9uc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiYzktdGVtcGxhdGUtdGFicy10YWJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJwYWdlc1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogKFxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtfXyhcIlByZS1kZXNpZ25lZCByZWFkeSB0byB1c2UgcGFnZXMuXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIlBhZ2VzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjOS10ZW1wbGF0ZS10YWJzLXRhYlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBcImxvY2FsXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJNeSBUZW1wbGF0ZXMuXCIsIFwiYzktYmxvY2tzXCIpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIlNhdmVkIExheW91dHNcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImM5LXRlbXBsYXRlLXRhYnMtdGFiXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RhYiA9PiB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhYi5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzZWN0aW9uc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXNlY3Rpb24tb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWN0aW9uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlRlc3RcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uPXtzZWN0aW9ucy50ZXN0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJwYWdlc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWxheW91dC1vcHRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExheW91dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJIZXJvXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PXtsYXlvdXRzLmhlcm99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGF5b3V0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkZlYXR1cmVkXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PXtsYXlvdXRzLmZlYXR1cmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExheW91dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJOZXN0ZWRcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ9e2xheW91dHMubmVzdGVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExheW91dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJNYXJrZG93blwiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxheW91dD17bGF5b3V0cy5tYXJrZG93bn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMYXlvdXRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJ3b3JkcHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiYmdUZXN0XCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PXtsYXlvdXRzLnRlc3RCZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRCbG9ja3MoW10pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiQ2xlYXIgcGFnZVwiLCBcImM5LWJsb2Nrc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXNlY3Rpb24tb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnJldXNhYmxlcy5tYXAob2JqID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWN0aW9uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJ3b3JkcHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18ob2JqLm5hbWUsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uPXtvYmouY29udGVudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PC9UYWJQYW5lbD5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QgPSBjb21wb3NlKFtcblx0d2l0aFNlbGVjdCgoc2VsZWN0LCB7IGNsaWVudElkIH0pID0+IHtcblx0XHRjb25zdCB7IGdldEJsb2NrLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwgfSA9IHNlbGVjdChcImNvcmUvZWRpdG9yXCIpO1xuXHRcdGNvbnN0IGJsb2NrID0gZ2V0QmxvY2soY2xpZW50SWQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRibG9jayxcblx0XHRcdGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTDogY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0XHRjb25zdCB7IHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc2V0QmxvY2tzLFxuXHRcdFx0aW5zZXJ0QmxvY2tzXG5cdFx0fTtcblx0fSlcbl0pKFRlbXBsYXRlc01vZGFsKTtcblxuZXhwb3J0IHsgVGVtcGxhdGVzTW9kYWxXaXRoU2VsZWN0IGFzIFRlbXBsYXRlc01vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvaW5kZXguanMiLCJjb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHdpdGhEaXNwYXRjaCB9ID0gd3AuZGF0YTtcblxuY29uc3QgTGF5b3V0QnV0dG9uID0gKHsgbGFiZWwsIGljb24sIGxheW91dCwgcmVzZXRCbG9ja3MsIGluc2VydEJsb2NrcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0QmxvY2tzKFtdKTtcbiAgICAgICAgICAgICAgICBpbnNlcnRCbG9ja3MobGF5b3V0KTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbn0gLz5cblx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRjb25zdCB7IHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cblx0cmV0dXJuIHtcblx0XHRyZXNldEJsb2Nrcyxcblx0XHRpbnNlcnRCbG9ja3Ncblx0fTtcbn0pKExheW91dEJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvbGF5b3V0LWJ1dHRvbi5qcyIsImNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aERpc3BhdGNoIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBTZWN0aW9uQnV0dG9uID0gKHsgbGFiZWwsIGljb24sIHNlY3Rpb24sIGluc2VydEJsb2NrcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydEJsb2NrcyhzZWN0aW9uKTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbn0gLz5cblx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRjb25zdCB7IGluc2VydEJsb2NrcyB9ID0gZGlzcGF0Y2goXCJjb3JlL2VkaXRvclwiKTtcblxuXHRyZXR1cm4ge1xuXHRcdGluc2VydEJsb2Nrc1xuXHR9O1xufSkoU2VjdGlvbkJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvc2VjdGlvbi1idXR0b24uanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVye2JvcmRlci1ib3R0b206bm9uZX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFic3ttYXJnaW4tdG9wOi0yNHB4fUBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7LmM5LXRlbXBsYXRlcy1tb2RhbHttaW4td2lkdGg6NjAwcHg7bWF4LXdpZHRoOjYwMHB4O21hcmdpbi1sZWZ0Oi0zMDBweDt0cmFuc2Zvcm06bm9uZTt0b3A6MTEycHh9fUBtZWRpYSAobWluLXdpZHRoOiA4NDBweCl7LmM5LXRlbXBsYXRlcy1tb2RhbHttaW4td2lkdGg6ODAwcHg7bWF4LXdpZHRoOjgwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDt0cmFuc2Zvcm06bm9uZX19LmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVyIC5jb21wb25lbnRzLW1vZGFsX19pY29uLWNvbnRhaW5lciBzdmd7ZGlzcGxheTpibG9jazttYXJnaW4tcmlnaHQ6MTBweH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jb21wb25lbnRzLW1vZGFsX19oZWFkZXIgLmNvbXBvbmVudHMtbW9kYWxfX2hlYWRlci1oZWFkaW5ne2ZvbnQtd2VpZ2h0OjYwMH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucywuYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1zZWN0aW9uLW9wdGlvbnN7ZGlzcGxheTpncmlkO2dyaWQtY29sdW1uLWdhcDoxcmVtO2dyaWQtcm93LWdhcDoxcmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNiwgMWZyKX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucyBidXR0b24sLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbntib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6I2Q4ZDhkOCAjZDFkMWQxICNiYWJhYmE7Ym9yZGVyLXJhZGl1czozcHg7Ym94LXNoYWRvdzppbnNldCAwIC0xcHggMCAjY2NjO3BhZGRpbmc6NXB4fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbjphY3RpdmUsLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbjphY3RpdmV7Ym9yZGVyLWNvbG9yOiM5OTk7Ym94LXNoYWRvdzppbnNlcnQgMCAxcHggMCAjOTk5fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbiBzcGFuLC5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LXNlY3Rpb24tb3B0aW9ucyBidXR0b24gc3BhbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowLjhyZW07cGFkZGluZzoycHggMH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWJ7cGFkZGluZzoxMnB4IDE2cHg7Y29sb3I6aW5oZXJpdH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWI6Zm9jdXN7b3V0bGluZTpub25lfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmNvbXBvbmVudHMtdGFiLXBhbmVsX190YWJzIC5jOS10ZW1wbGF0ZS10YWJzLXRhYi5pcy1hY3RpdmV7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzAwYTBkMjt6LWluZGV4OjF9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgdGVtcGxhdGVNYXJrdXBzID0ge1xuXHRsYXlvdXRzOiB7XG5cdFx0bWFya2Rvd246XG5cdFx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxcbjxkaXYgaWQ9XCJjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGNsYXNzPVwiYzktY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjowLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PCEtLSB3cDpoZWFkaW5nIC0tPlxcbjxoMj5hd2Rhd2Q8L2gyPlxcbjwhLS0gL3dwOmhlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+d2FhZDwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MSxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+YXdkYXdkYXc8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjIsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPmF3ZGFkYXdkYXdkYXc8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbCAtLT4nLFxuXHRcdHRlc3RCZzpcblx0XHRcdCc8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxNSxcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZ1wiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo4LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6ODB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1maXhlZCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwdmhcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wiLFwiY29udGFpbmVySW1nVVJMXCI6bnVsbCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC41MTE1MjA3MzczMjcxODksXCJ5XCI6MC42MjV9fSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpzcGFjZXIgLS0+XFxuPGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VydmljZSBPZmZlcmluZyBMYW5kaW5nIFBhZ2VcIixcInN1YmhlYWRpbmdcIjpcInN1YmhlYWRpbmdcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+U2VydmljZSBPZmZlcmluZyBMYW5kaW5nIFBhZ2U8L2gxPjxkaXYgY2xhc3M9XCJjOS1oIGgxXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3N1YmhlYWRpbmc8L3NtYWxsPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjMsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJIdWVcIjpcIiNmZmZmZmZcIn0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS0zLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgMVwiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMTwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4gc3Vydml2YWwgc3RyYXRlZ2llcyB0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uwqA8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlcCAyXCIsXCJ0YWdMZXZlbFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oXCI+U3RlcCAyPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5BdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIFguPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgM1wiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMzwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+Q2FwaXRhbGl6ZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+J1xuXHR9LFxuXHRzZWN0aW9uczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlTWFya3VwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC90ZW1wbGF0ZXMtbWFya3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==