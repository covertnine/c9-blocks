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
/******/ 	return __webpack_require__(__webpack_require__.s = 404);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(/*! qs */ 412);
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

/***/ 2:
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

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

/***/ 404:
/*!********************************!*\
  !*** ./src/update-category.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__ = __webpack_require__(/*! ./update-category/deregister-blocks */ 405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__ = __webpack_require__(/*! ./update-category/register-filters */ 406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__ = __webpack_require__(/*! ./update-category/register-styles */ 407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_stores__ = __webpack_require__(/*! ./update-category/register-stores */ 408);
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

/***/ 405:
/*!**************************************************!*\
  !*** ./src/update-category/deregister-blocks.js ***!
  \**************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var unregisterBlockType = wp.blocks.unregisterBlockType;


var loadBlocksEditor = null;

if (typeof window._wpLoadBlockEditor !== "undefined") {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if (typeof window._wpLoadGutenbergEditor !== "undefined") {
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

/***/ 406:
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

/***/ 407:
/*!************************************************!*\
  !*** ./src/update-category/register-styles.js ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var registerBlockStyle = wp.blocks.registerBlockStyle;


var loadBlocksEditor = null;

if (typeof window._wpLoadBlockEditor !== "undefined") {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if (typeof window._wpLoadGutenbergEditor !== "undefined") {
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

/***/ 408:
/*!************************************************!*\
  !*** ./src/update-category/register-stores.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_twitter__ = __webpack_require__(/*! ../stores/twitter */ 409);


/***/ }),

/***/ 409:
/*!*************************************!*\
  !*** ./src/stores/twitter/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(/*! ./reducer */ 410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(/*! ./selectors */ 411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(/*! ./actions */ 198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(/*! ./controls */ 415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__(/*! ./resolvers */ 416);






var registerStore = wp.data.registerStore;


registerStore("c9-blocks/twitter", {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
	controls: __WEBPACK_IMPORTED_MODULE_3__controls__,
	resolvers: __WEBPACK_IMPORTED_MODULE_4__resolvers__
});

/***/ }),

/***/ 410:
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

/***/ 411:
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

/***/ 412:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 413);
var parse = __webpack_require__(/*! ./parse */ 414);
var formats = __webpack_require__(/*! ./formats */ 197);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 413:
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

/***/ 414:
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

/***/ 415:
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

/***/ 416:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 417);
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

/***/ 417:
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 418);


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

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 199)(content, options);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_button__ = __webpack_require__(/*! ./layout-button */ 425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_button__ = __webpack_require__(/*! ./section-button */ 426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_markup__ = __webpack_require__(/*! ./templates-markup */ 429);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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






// templates


var TemplatesModal = function (_Component) {
	_inherits(TemplatesModal, _Component);

	function TemplatesModal() {
		_classCallCheck(this, TemplatesModal);

		return _possibleConstructorReturn(this, (TemplatesModal.__proto__ || Object.getPrototypeOf(TemplatesModal)).apply(this, arguments));
	}

	_createClass(TemplatesModal, [{
		key: "markupToBlock",
		value: function markupToBlock(templateObj, canUserUseUnfilteredHTML) {
			var blockObj = Object.assign({}, templateObj);
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
			var _props = this.props,
			    resetBlocks = _props.resetBlocks,
			    canUserUseUnfilteredHTML = _props.canUserUseUnfilteredHTML;

			// define section and layout templates

			var sections = Object.assign({
				test: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
					text: __("Layout Switcher", "c9-blocks"),
					align: "center"
				})]
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_3__templates_markup__["a" /* default */]["sections"], canUserUseUnfilteredHTML));

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
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_3__templates_markup__["a" /* default */]["layouts"], canUserUseUnfilteredHTML));

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
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__section_button__["a" /* default */], {
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
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Hero", "c9-blocks"),
											layout: layouts.hero
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Featured", "c9-blocks"),
											layout: layouts.featured
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Nested", "c9-blocks"),
											layout: layouts.nested
										}),
										wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__layout_button__["a" /* default */], {
											icon: "wordpress",
											label: __("Markdown", "c9-blocks"),
											layout: layouts.markdown
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
									"p",
									null,
									"Coming Soon..."
								);
						}
					}
				)
			);
		}
	}]);

	return TemplatesModal;
}(Component);

var TemplatesModalWithSelect = compose([withSelect(function (select, _ref) {
	var clientId = _ref.clientId;

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

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 199)(content, options);

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
        markdown: "<!-- wp:c9-blocks/horizontal-tabs {\"tabActive\":\"tab-apple\",\"buttonsAlign\":\"center\",\"tabsData\":[{\"slug\":\"tab-apple\",\"title\":\"apple\"},{\"slug\":\"tab-banana\",\"title\":\"banana\"}],\"instanceId\":0} -->\n        <div class=\"c9-horizontal-tabs\" data-tab-active=\"tab-apple\"><ul class=\"nav nav-tabs d-flex justify-content-center\" role=\"tablist\"><li class=\"nav-item\"><a data-toggle=\"tab\" role=\"tab\" href=\"#tab-tab-apple-0\" class=\"nav-link active\" id=\"tab-button-tab-apple\">apple</a></li><li class=\"nav-item\"><a data-toggle=\"tab\" role=\"tab\" href=\"#tab-tab-banana-0\" class=\"nav-link\" id=\"tab-button-tab-banana\">banana</a></li></ul><div class=\"c9-tabs-content tab-content\"><!-- wp:c9-blocks/horizontal-tabs-tab {\"slug\":\"tab-apple\",\"tabActive\":\"tab-apple\",\"id\":0} -->\n        <div class=\"c9-horizontal-tabs-tab tab-pane fade show active\" role=\"tabpanel\" id=\"tab-tab-apple-0\" aria-labelledby=\"tab-apple\"><!-- wp:c9-blocks/heading {\"heading\":\"test\"} -->\n        <div class=\"section-heading c9-heading text-left\"><h1 class=\"h\">test</h1></div>\n        <!-- /wp:c9-blocks/heading --></div>\n        <!-- /wp:c9-blocks/horizontal-tabs-tab -->\n        \n        <!-- wp:c9-blocks/horizontal-tabs-tab {\"slug\":\"tab-banana\",\"tabActive\":\"tab-apple\",\"id\":0} -->\n        <div class=\"c9-horizontal-tabs-tab tab-pane fade\" role=\"tabpanel\" id=\"tab-tab-banana-0\" aria-labelledby=\"tab-banana\"><!-- wp:paragraph -->\n        <p>easdw</p>\n        <!-- /wp:paragraph --></div>\n        <!-- /wp:c9-blocks/horizontal-tabs-tab --></div></div>\n        <!-- /wp:c9-blocks/horizontal-tabs -->"
    },
    sections: {}
};

/* harmony default export */ __webpack_exports__["a"] = (templateMarkups);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzY0MmI3ZDhlMmQyMjUyZDI3MmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3ByZXBhcmUtcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXBkYXRlLWNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3Jlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzcz80MDNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2M5LWZlYXRoZXItbG9nby1ncmF5LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2xheW91dC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzcz8wZjQ1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvdGVtcGxhdGVzLW1hcmt1cC5qcyJdLCJuYW1lcyI6WyJwcmVwYXJlUXVlcnkiLCJ0eXBlIiwiZGF0YSIsImFkZGl0aW9uYWxEYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJlbmNvZGUiLCJxdWVyeSIsImFwaUZldGNoIiwicmVxdWVzdCIsInNldFR3aXR0ZXJGZWVkIiwiZmVlZCIsInNldFR3aXR0ZXJQcm9maWxlIiwicHJvZmlsZSIsInVwZGF0ZUNhdGVnb3J5Iiwid3AiLCJibG9ja3MiLCJjb21wb25lbnRzIiwiRyIsIlBhdGgiLCJTVkciLCJsb2dvIiwiaWNvbiIsInVucmVnaXN0ZXJCbG9ja1R5cGUiLCJsb2FkQmxvY2tzRWRpdG9yIiwid2luZG93IiwiX3dwTG9hZEJsb2NrRWRpdG9yIiwiX3dwTG9hZEd1dGVuYmVyZ0VkaXRvciIsInRoZW4iLCJhZGRGaWx0ZXIiLCJob29rcyIsImZvcm1hdENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInJlc3VsdCIsInJlcGxhY2UiLCJyZWdpc3RlckJsb2NrU3R5bGUiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsInNlbGVjdG9ycyIsImFjdGlvbnMiLCJjb250cm9scyIsInJlc29sdmVycyIsInN0YXRlIiwiZmVlZHMiLCJwcm9maWxlcyIsImFjdGlvbiIsImdldFR3aXR0ZXJGZWVkIiwiZ2V0VHdpdHRlclByb2ZpbGUiLCJBUElfRkVUQ0giLCJmZXRjaGVkRGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhdGgiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbnMiLCJlZGl0UG9zdCIsIlBsdWdpblNpZGViYXIiLCJQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIiwiRnJhZ21lbnQiLCJlbGVtZW50IiwiX18iLCJpMThuIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiRGFzaGljb24iLCJDOSIsImFyZ3VtZW50cyIsImlzTW9kYWxPcGVuIiwid2lkdGgiLCJtYXJnaW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsIk1vZGFsIiwiVGFiUGFuZWwiLCJUb29sdGlwIiwiSWNvbiIsImNvbXBvc2UiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY3JlYXRlQmxvY2siLCJyYXdIYW5kbGVyIiwiVGVtcGxhdGVzTW9kYWwiLCJ0ZW1wbGF0ZU9iaiIsImNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCIsImJsb2NrT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsImtleSIsIkhUTUwiLCJtb2RlIiwicHJvcHMiLCJyZXNldEJsb2NrcyIsInNlY3Rpb25zIiwidGVzdCIsImFsaWduIiwidGV4dCIsIm1hcmt1cFRvQmxvY2siLCJ0ZW1wbGF0ZU1hcmt1cHMiLCJsYXlvdXRzIiwiZGVmYXVsdCIsImhlcm8iLCJjb2x1bW5zIiwibGF5b3V0IiwiZmVhdHVyZWQiLCJoZWlnaHQiLCJtZWRpYVBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJuZXN0ZWQiLCJuYW1lIiwidGl0bGUiLCJ0YWIiLCJtYXJrZG93biIsIlRlbXBsYXRlc01vZGFsV2l0aFNlbGVjdCIsInNlbGVjdCIsImNsaWVudElkIiwiZ2V0QmxvY2siLCJibG9jayIsImRpc3BhdGNoIiwiaW5zZXJ0QmxvY2tzIiwiTGF5b3V0QnV0dG9uIiwibGFiZWwiLCJTZWN0aW9uQnV0dG9uIiwic2VjdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNE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QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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WUFEK0I7O0FBR3ZDLFFBQU87QUFDTkE7QUFETSxFQUFQO0FBR0EsQ0FOYyxFQU1aRyxhQU5ZLENBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsY0FBYyxtQkFBTyxDQUFDLDhIQUFzSDs7QUFFNUk7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0ZBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQSwyQkFBMkIsbUJBQU8sQ0FBQyw4REFBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsaURBQWlELG1CQUFtQiw4RUFBOEUsaUJBQWlCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixtQkFBbUIsZUFBZSxXQUFXLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixtQkFBbUIsZ0JBQWdCLG9GQUFvRixjQUFjLGtCQUFrQixnRkFBZ0YsZ0JBQWdCLDJJQUEySSxhQUFhLHFCQUFxQixrQkFBa0IscUNBQXFDLHlKQUF5SixpQkFBaUIsbUJBQW1CLHFDQUFxQyxrQkFBa0IsK0JBQStCLFlBQVksdUtBQXVLLGtCQUFrQiwrQkFBK0IsbUtBQW1LLGNBQWMsaUJBQWlCLGNBQWMsb0dBQW9HLGtCQUFrQixjQUFjLDBHQUEwRyxhQUFhLDhHQUE4RyxrQkFBa0IsZ0NBQWdDLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDRjE4RCxJQUFNeEIsa0JBQWtCO0FBQ3BCQyxhQUFTO0FBQ0xhO0FBREssS0FEVztBQWdCcEJuQixjQUFVO0FBaEJVLENBQXhCOztBQXFCZUssd0VBQWYsRSIsImZpbGUiOiIuL2Rpc3QvYmxvY2tzLnVwZGF0ZS1jYXRlZ29yeS5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQwNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzY0MmI3ZDhlMmQyMjUyZDI3MmQiLCJpbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlUXVlcnkoIHR5cGUsIGRhdGEgKSB7XG4gICAgY29uc3QgYWRkaXRpb25hbERhdGEgPSBxcy5zdHJpbmdpZnkoIGRhdGEsIHsgZW5jb2RlOiBmYWxzZSB9ICk7XG4gICAgY29uc3QgcXVlcnkgPSBgL2M5LWJsb2Nrcy9nZXRfdHdpdHRlcl8keyB0eXBlIH0vJHsgYWRkaXRpb25hbERhdGEgPyBgPyR7IGFkZGl0aW9uYWxEYXRhIH1gIDogJycgfWA7XG5cbiAgICByZXR1cm4gcXVlcnk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcHJlcGFyZS1xdWVyeS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcGVyY2VudFR3ZW50aWVzID0gLyUyMC9nO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIEZvcm1hdCA9IHtcbiAgICBSRkMxNzM4OiAnUkZDMTczOCcsXG4gICAgUkZDMzk4NjogJ1JGQzM5ODYnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWwuYXNzaWduKFxuICAgIHtcbiAgICAgICAgJ2RlZmF1bHQnOiBGb3JtYXQuUkZDMzk4NixcbiAgICAgICAgZm9ybWF0dGVyczoge1xuICAgICAgICAgICAgUkZDMTczODogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJGQzM5ODY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBGb3JtYXRcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvZm9ybWF0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCBmdW5jdGlvbiBhcGlGZXRjaChyZXF1ZXN0KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogXCJBUElfRkVUQ0hcIixcblx0XHRyZXF1ZXN0XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUd2l0dGVyRmVlZChxdWVyeSwgZmVlZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiU0VUX1RXSVRURVJfRkVFRFwiLFxuXHRcdHF1ZXJ5LFxuXHRcdGZlZWRcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFR3aXR0ZXJQcm9maWxlKHF1ZXJ5LCBwcm9maWxlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogXCJTRVRfVFdJVFRFUl9QUk9GSUxFXCIsXG5cdFx0cXVlcnksXG5cdFx0cHJvZmlsZVxuXHR9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL2FjdGlvbnMuanMiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zICYmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcykpIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiAhaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJdGVtICYmIHR5cGVvZiB0YXJnZXRJdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBtZXJnZSh0YXJnZXRJdGVtLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHN0cjtcbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgc3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN0cik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzdHJpbmcgPSBTdHJpbmcoc3RyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUoc3RyaW5nKS5yZXBsYWNlKC8ldVswLTlhLWZdezR9L2dpLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJTI2JTIzJyArIHBhcnNlSW50KCQwLnNsaWNlKDIpLCAxNikgKyAnJTNCJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCAvLyAtXG4gICAgICAgICAgICB8fCBjID09PSAweDJFIC8vIC5cbiAgICAgICAgICAgIHx8IGMgPT09IDB4NUYgLy8gX1xuICAgICAgICAgICAgfHwgYyA9PT0gMHg3RSAvLyB+XG4gICAgICAgICAgICB8fCAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgLy8gMC05XG4gICAgICAgICAgICB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgLy8gYS16XG4gICAgICAgICAgICB8fCAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG5cbnZhciBjb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShhLCBiKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhLCBiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5VG9PYmplY3Q6IGFycmF5VG9PYmplY3QsXG4gICAgYXNzaWduOiBhc3NpZ24sXG4gICAgY29tYmluZTogY29tYmluZSxcbiAgICBjb21wYWN0OiBjb21wYWN0LFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gICAgbWVyZ2U6IG1lcmdlXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyB1cGRhdGVDYXRlZ29yeSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBHLCBQYXRoLCBTVkcgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogSWNvblxuICovXG5cbmNvbnN0IGxvZ28gPSAoXG5cdDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjM0LjkyIDE3NC42NVwiPlxuXHRcdDxkZWZzPlxuXHRcdFx0PHN0eWxlPntgLmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO31gfTwvc3R5bGU+XG5cdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0aWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxuXHRcdFx0XHR4MT1cIjc5LjEyXCJcblx0XHRcdFx0eTE9XCIyMy44MVwiXG5cdFx0XHRcdHgyPVwiMTY2LjRcIlxuXHRcdFx0XHR5Mj1cIjE1OC4yMlwiXG5cdFx0XHRcdGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjNjFjYWU1XCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC4xMlwiIHN0b3BDb2xvcj1cIiM2NGM2ZTFcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjI1XCIgc3RvcENvbG9yPVwiIzZkYmFkM1wiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMzlcIiBzdG9wQ29sb3I9XCIjN2JhN2JkXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC41NFwiIHN0b3BDb2xvcj1cIiM4ZjhiOWZcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjY4XCIgc3RvcENvbG9yPVwiI2E5Njg3N1wiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuODNcIiBzdG9wQ29sb3I9XCIjYzkzZDQ4XCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC45MlwiIHN0b3BDb2xvcj1cIiNkZjFmMjZcIiAvPlxuXHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHQ8L2RlZnM+XG5cdFx0PHRpdGxlPmM5LWZlYXRoZXItbG9nby1pY29uPC90aXRsZT5cblx0XHQ8RyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XG5cdFx0XHQ8RyBpZD1cImxvZ29fZ3JhZGllbnRcIiBkYXRhLW5hbWU9XCJsb2dvIGdyYWRpZW50XCI+XG5cdFx0XHRcdDxQYXRoXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xzLTFcIlxuXHRcdFx0XHRcdGQ9XCJNNDcsMTM4LjA2QzQwLjM3LDEyMy45LDQwLjg0LDM2LjQxLDgzLjU0LDIyLjRjMCwwLTE1LjY0LDcuMjktMTAuMTIsMjcuNDUsNy4yLTEzLjY4LDIwLjMzLTM3LjIyLDU3Ljc3LTQzLjQ2LDI0LTIuODktMTMuMTUsMS4xLTYsMjIuMjIuMjQtOC44OCw1OS40MS00NSwxMDgtMTkuODFDMjQ2LjQzLDEwNC42OSwxNzcsMTEwLjA2LDE3NywxMTAuMDZoMHMxNC45NSwyLjM4LDIzLjgzLS41Yy05LjEyLDM5Ljg0LTYzLjEzLDQyLjE0LTYzLjEzLDQyLjE0czIwLjUxLDUuMTEsMzQuOTIsMi40N2MtNDkuNDUsMzIuNC0xMTYuODYtNC44Ni0xMTYuODYtNC44Ni0uMjcuMDgtLjgzLS40My0xLjU4LTEuMzFsMTEyLTc4YTI1LjA5LDI1LjA5LDAsMSwwLTYtNi4yN0w3OS45LDEyMC40bC0yLjIzLTMuMjUtMzAuNTksMjFNMTgzLjcyLDMzLjc0YTE2LjI1LDE2LjI1LDAsMSwxLTE4Ljg0LDEzLjE3LDE2LjI0LDE2LjI0LDAsMCwxLDE4Ljg0LTEzLjE3Wk01NC4xNywxNDhsLS4zOS0uNTUuNDMuNTIsMCwwWm0tMzQuNDMtNi41NSw4LjQ1LTUuNSw1LjUsOC40NC04LjQ0LDUuNS01LjUxLTguNDRabS00LjM3LDE0Ljg3LTUuNS04LjQ0LDguNDUtNS41LDUuNSw4LjQ0LTguNDUsNS41Wk01LjUsMTYyLjc5LDAsMTU0LjM0bDguNDUtNS41LDUuNSw4LjQ0TDUuNSwxNjIuNzlabTQ2Ljg2LTEzLjg3TDEzLjQxLDE3NC42NSw2LjQ2LDE2NC4zMSw0NSwxMzkuM2w3LjMzLDkuNjJaXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvRz5cblx0XHQ8L0c+XG5cdDwvU1ZHPlxuKTtcblxuaWYgKHVwZGF0ZUNhdGVnb3J5KSB7XG5cdHVwZGF0ZUNhdGVnb3J5KFwiYzktYmxvY2tzXCIsIHsgaWNvbjogbG9nbyB9KTtcbn1cblxuaW1wb3J0IFwiLi91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3NcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLWZpbHRlcnNcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0eWxlc1wiO1xuaW1wb3J0IFwiLi91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS5qcyIsImNvbnN0IHsgdW5yZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuXG5sZXQgbG9hZEJsb2Nrc0VkaXRvciA9IG51bGw7XG5cbmlmICh0eXBlb2Ygd2luZG93Ll93cExvYWRCbG9ja0VkaXRvciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQvLyBVc2luZyBHdXRlbmJlcmcgcGx1Z2luXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEJsb2NrRWRpdG9yO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Ll93cExvYWRHdXRlbmJlcmdFZGl0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0Ly8gVXNpbmcgV1AgY29yZSBHdXRlbmJlcmdcblx0bG9hZEJsb2Nrc0VkaXRvciA9IHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yO1xufVxuXG5pZiAobG9hZEJsb2Nrc0VkaXRvcikge1xuXHRsb2FkQmxvY2tzRWRpdG9yLnRoZW4oKCkgPT4ge1xuXHRcdHVucmVnaXN0ZXJCbG9ja1R5cGUoXCJjb3JlL3ZlcnNlXCIpO1xuXHRcdC8vIHVucmVnaXN0ZXJCbG9ja1R5cGUoXCJjb3JlL2NvbHVtbnNcIik7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9kZXJlZ2lzdGVyLWJsb2Nrcy5qcyIsImNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcblxuZnVuY3Rpb24gZm9ybWF0Q2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuXHRjb25zdCByZXN1bHQgPSBjbGFzc05hbWUucmVwbGFjZShcIndwLWJsb2NrLWM5LWJsb2Nrc1wiLCBcImM5XCIpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5hZGRGaWx0ZXIoXG5cdFwiYzktYmxvY2tzLmVkaXRvci5jbGFzc05hbWVcIixcblx0XCJjOS1ibG9ja3MvZm9ybWF0LWNsYXNzbmFtZVwiLFxuXHRmb3JtYXRDbGFzc05hbWVcbik7XG5hZGRGaWx0ZXIoXG5cdFwiYzktYmxvY2tzLmJsb2Nrcy5jbGFzc05hbWVcIixcblx0XCJjOS1ibG9ja3MvZm9ybWF0LWNsYXNzbmFtZVwiLFxuXHRmb3JtYXRDbGFzc05hbWVcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLWZpbHRlcnMuanMiLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tTdHlsZSB9ID0gd3AuYmxvY2tzO1xuXG5sZXQgbG9hZEJsb2Nrc0VkaXRvciA9IG51bGw7XG5cbmlmICh0eXBlb2Ygd2luZG93Ll93cExvYWRCbG9ja0VkaXRvciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQvLyBVc2luZyBHdXRlbmJlcmcgcGx1Z2luXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEJsb2NrRWRpdG9yO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Ll93cExvYWRHdXRlbmJlcmdFZGl0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0Ly8gVXNpbmcgV1AgY29yZSBHdXRlbmJlcmdcblx0bG9hZEJsb2Nrc0VkaXRvciA9IHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yO1xufVxuXG5pZiAobG9hZEJsb2Nrc0VkaXRvcikge1xuXHRsb2FkQmxvY2tzRWRpdG9yLnRoZW4oKCkgPT4ge1xuXHRcdC8vIHJlZ2lzdGVyQmxvY2tTdHlsZShcImNvcmUvYnV0dG9uXCIsIHtcblx0XHQvLyBcdG5hbWU6IFwiY3VzdG9tLWJ1dHRvbi1zdHlsZVwiLFxuXHRcdC8vIFx0bGFiZWw6IFwiTXkgQnV0dG9uIFN0eWxlXCJcblx0XHQvLyB9KTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0eWxlcy5qcyIsImltcG9ydCBcIi4uL3N0b3Jlcy90d2l0dGVyXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0b3Jlcy5qcyIsImltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29udHJvbHMgZnJvbSBcIi4vY29udHJvbHNcIjtcbmltcG9ydCAqIGFzIHJlc29sdmVycyBmcm9tIFwiLi9yZXNvbHZlcnNcIjtcblxuY29uc3QgeyByZWdpc3RlclN0b3JlIH0gPSB3cC5kYXRhO1xuXG5yZWdpc3RlclN0b3JlKFwiYzktYmxvY2tzL3R3aXR0ZXJcIiwge1xuXHRyZWR1Y2VyLFxuXHRzZWxlY3RvcnMsXG5cdGFjdGlvbnMsXG5cdGNvbnRyb2xzLFxuXHRyZXNvbHZlcnNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL2luZGV4LmpzIiwiZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgZmVlZHM6IHt9LCBwcm9maWxlczoge30gfSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiU0VUX1RXSVRURVJfRkVFRFwiOlxuXHRcdFx0aWYgKCFzdGF0ZS5mZWVkc1thY3Rpb24ucXVlcnldICYmIGFjdGlvbi5mZWVkKSB7XG5cdFx0XHRcdHN0YXRlLmZlZWRzW2FjdGlvbi5xdWVyeV0gPSBhY3Rpb24uZmVlZDtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJTRVRfVFdJVFRFUl9QUk9GSUxFXCI6XG5cdFx0XHRpZiAoIXN0YXRlLnByb2ZpbGVzW2FjdGlvbi5xdWVyeV0gJiYgYWN0aW9uLnByb2ZpbGUpIHtcblx0XHRcdFx0c3RhdGUucHJvZmlsZXNbYWN0aW9uLnF1ZXJ5XSA9IGFjdGlvbi5wcm9maWxlO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Ly8gbm8gZGVmYXVsdFxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3JlZHVjZXIuanMiLCJpbXBvcnQgcHJlcGFyZVF1ZXJ5IGZyb20gXCIuL3ByZXBhcmUtcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR3aXR0ZXJGZWVkKHN0YXRlLCBkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwiZmVlZFwiLCBkYXRhKTtcblxuXHRyZXR1cm4gc3RhdGUuZmVlZHNbcXVlcnldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHdpdHRlclByb2ZpbGUoc3RhdGUsIGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJwcm9maWxlXCIsIGRhdGEpO1xuXG5cdHJldHVybiBzdGF0ZS5wcm9maWxlc1txdWVyeV07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHM6IGZvcm1hdHMsXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBhcnJheVByZWZpeEdlbmVyYXRvcnMgPSB7XG4gICAgYnJhY2tldHM6IGZ1bmN0aW9uIGJyYWNrZXRzKHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICB9LFxuICAgIGNvbW1hOiAnY29tbWEnLFxuICAgIGluZGljZXM6IGZ1bmN0aW9uIGluZGljZXMocHJlZml4LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICB9LFxuICAgIHJlcGVhdDogZnVuY3Rpb24gcmVwZWF0KHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgIH1cbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG52YXIgcHVzaFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZU9yQXJyYXkpIHtcbiAgICBwdXNoLmFwcGx5KGFyciwgaXNBcnJheSh2YWx1ZU9yQXJyYXkpID8gdmFsdWVPckFycmF5IDogW3ZhbHVlT3JBcnJheV0pO1xufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0Rm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xudmFyIGRlZmF1bHRzID0ge1xuICAgIGFkZFF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICBmb3JtYXR0ZXI6IGZvcm1hdHMuZm9ybWF0dGVyc1tkZWZhdWx0Rm9ybWF0XSxcbiAgICAvLyBkZXByZWNhdGVkXG4gICAgaW5kaWNlczogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaXNOb25OdWxsaXNoUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNOb25OdWxsaXNoUHJpbWl0aXZlKHYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnc3ltYm9sJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2JpZ2ludCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG59O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0dGVyLFxuICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgY2hhcnNldFxuKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmogPSBvYmouam9pbignLCcpO1xuICAgIH1cblxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBhbGxvd1Byb3RvdHlwZXM6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBjb21tYTogZmFsc2UsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IGZhbHNlLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBhcnNlQXJyYXlzOiB0cnVlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGludGVycHJldE51bWVyaWNFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbiAoJDAsIG51bWJlclN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChudW1iZXJTdHIsIDEwKSk7XG4gICAgfSk7XG59O1xuXG4vLyBUaGlzIGlzIHdoYXQgYnJvd3NlcnMgd2lsbCBzdWJtaXQgd2hlbiB0aGUg4pyTIGNoYXJhY3RlciBvY2N1cnMgaW4gYW5cbi8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCBib2R5IGFuZCB0aGUgZW5jb2Rpbmcgb2YgdGhlIHBhZ2UgY29udGFpbmluZ1xuLy8gdGhlIGZvcm0gaXMgaXNvLTg4NTktMSwgb3Igd2hlbiB0aGUgc3VibWl0dGVkIGZvcm0gaGFzIGFuIGFjY2VwdC1jaGFyc2V0XG4vLyBhdHRyaWJ1dGUgb2YgaXNvLTg4NTktMS4gUHJlc3VtYWJseSBhbHNvIHdpdGggb3RoZXIgY2hhcnNldHMgdGhhdCBkbyBub3QgY29udGFpblxuLy8gdGhlIOKckyBjaGFyYWN0ZXIsIHN1Y2ggYXMgdXMtYXNjaWkuXG52YXIgaXNvU2VudGluZWwgPSAndXRmOD0lMjYlMjMxMDAwMyUzQic7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKVxuXG4vLyBUaGVzZSBhcmUgdGhlIHBlcmNlbnQtZW5jb2RlZCB1dGYtOCBvY3RldHMgcmVwcmVzZW50aW5nIGEgY2hlY2ttYXJrLCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3QgYWN0dWFsbHkgaXMgdXRmLTggZW5jb2RlZC5cbnZhciBjaGFyc2V0U2VudGluZWwgPSAndXRmOD0lRTIlOUMlOTMnOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG5cbnZhciBwYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdWYWx1ZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBjbGVhblN0ciA9IG9wdGlvbnMuaWdub3JlUXVlcnlQcmVmaXggPyBzdHIucmVwbGFjZSgvXlxcPy8sICcnKSA6IHN0cjtcbiAgICB2YXIgbGltaXQgPSBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQ7XG4gICAgdmFyIHBhcnRzID0gY2xlYW5TdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIGxpbWl0KTtcbiAgICB2YXIgc2tpcEluZGV4ID0gLTE7IC8vIEtlZXAgdHJhY2sgb2Ygd2hlcmUgdGhlIHV0Zjggc2VudGluZWwgd2FzIGZvdW5kXG4gICAgdmFyIGk7XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdGlvbnMuY2hhcnNldDtcbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAocGFydHNbaV0uaW5kZXhPZigndXRmOD0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0c1tpXSA9PT0gY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHNbaV0gPT09IGlzb1NlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNraXBJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaSA9IHBhcnRzLmxlbmd0aDsgLy8gVGhlIGVzbGludCBzZXR0aW5ncyBkbyBub3QgYWxsb3cgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGkgPT09IHNraXBJbmRleCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICB2YXIgYnJhY2tldEVxdWFsc1BvcyA9IHBhcnQuaW5kZXhPZignXT0nKTtcbiAgICAgICAgdmFyIHBvcyA9IGJyYWNrZXRFcXVhbHNQb3MgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBicmFja2V0RXF1YWxzUG9zICsgMTtcblxuICAgICAgICB2YXIga2V5LCB2YWw7XG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydCwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcyksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UocG9zICsgMSksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmludGVycHJldE51bWVyaWNFbnRpdGllcyAmJiBjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIHZhbCA9IGludGVycHJldE51bWVyaWNFbnRpdGllcyh2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmNvbW1hICYmIHZhbC5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHV0aWxzLmNvbWJpbmUob2JqW2tleV0sIHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuICAgIHZhciBsZWFmID0gdmFsO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWY7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucykge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBvcHRpb25zLmRlcHRoID4gMCAmJiBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAob3B0aW9ucy5kZXB0aCA+IDAgJiYgKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxudmFyIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZWNvZGVyICE9PSBudWxsICYmIG9wdHMuZGVjb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRzLmRlY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGNoYXJzZXQgPSB0eXBlb2Ygb3B0cy5jaGFyc2V0ID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmNoYXJzZXQgOiBvcHRzLmNoYXJzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBhbGxvd1Byb3RvdHlwZXM6IHR5cGVvZiBvcHRzLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXMsXG4gICAgICAgIGFycmF5TGltaXQ6IHR5cGVvZiBvcHRzLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0cy5hcnJheUxpbWl0IDogZGVmYXVsdHMuYXJyYXlMaW1pdCxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBjb21tYTogdHlwZW9mIG9wdHMuY29tbWEgPT09ICdib29sZWFuJyA/IG9wdHMuY29tbWEgOiBkZWZhdWx0cy5jb21tYSxcbiAgICAgICAgZGVjb2RlcjogdHlwZW9mIG9wdHMuZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZGVjb2RlciA6IGRlZmF1bHRzLmRlY29kZXIsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCB1dGlscy5pc1JlZ0V4cChvcHRzLmRlbGltaXRlcikgPyBvcHRzLmRlbGltaXRlciA6IGRlZmF1bHRzLmRlbGltaXRlcixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uLCBuby1leHRyYS1wYXJlbnNcbiAgICAgICAgZGVwdGg6ICh0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ251bWJlcicgfHwgb3B0cy5kZXB0aCA9PT0gZmFsc2UpID8gK29wdHMuZGVwdGggOiBkZWZhdWx0cy5kZXB0aCxcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IG9wdHMuaWdub3JlUXVlcnlQcmVmaXggPT09IHRydWUsXG4gICAgICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogdHlwZW9mIG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID09PSAnYm9vbGVhbicgPyBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA6IGRlZmF1bHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyxcbiAgICAgICAgcGFyYW1ldGVyTGltaXQ6IHR5cGVvZiBvcHRzLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdCxcbiAgICAgICAgcGFyc2VBcnJheXM6IG9wdHMucGFyc2VBcnJheXMgIT09IGZhbHNlLFxuICAgICAgICBwbGFpbk9iamVjdHM6IHR5cGVvZiBvcHRzLnBsYWluT2JqZWN0cyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5wbGFpbk9iamVjdHMgOiBkZWZhdWx0cy5wbGFpbk9iamVjdHMsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKTtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBwYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSB1dGlscy5tZXJnZShvYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IGFwaUZldGNoIH0gPSB3cDtcblxuZXhwb3J0IGZ1bmN0aW9uIEFQSV9GRVRDSCh7IHJlcXVlc3QgfSkge1xuXHRyZXR1cm4gYXBpRmV0Y2gocmVxdWVzdCkudGhlbihmZXRjaGVkRGF0YSA9PiB7XG5cdFx0aWYgKGZldGNoZWREYXRhICYmIGZldGNoZWREYXRhLnN1Y2Nlc3MgJiYgZmV0Y2hlZERhdGEucmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiBmZXRjaGVkRGF0YS5yZXNwb25zZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9jb250cm9scy5qcyIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHByZXBhcmVRdWVyeSBmcm9tIFwiLi9wcmVwYXJlLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0VHdpdHRlckZlZWQoZGF0YSkge1xuXHRjb25zdCBxdWVyeSA9IHByZXBhcmVRdWVyeShcImZlZWRcIiwgZGF0YSk7XG5cdGNvbnN0IGZlZWQgPSB5aWVsZCBhY3Rpb25zLmFwaUZldGNoKHsgcGF0aDogcXVlcnkgfSk7XG5cblx0cmV0dXJuIGFjdGlvbnMuc2V0VHdpdHRlckZlZWQocXVlcnksIGZlZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIGdldFR3aXR0ZXJQcm9maWxlKGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJwcm9maWxlXCIsIGRhdGEpO1xuXHRjb25zdCBwcm9maWxlID0geWllbGQgYWN0aW9ucy5hcGlGZXRjaCh7IHBhdGg6IHF1ZXJ5IH0pO1xuXG5cdHJldHVybiBhY3Rpb25zLnNldFR3aXR0ZXJQcm9maWxlKHF1ZXJ5LCBwcm9maWxlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9yZXNvbHZlcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgeyByZWdpc3RlclBsdWdpbiB9ID0gd3AucGx1Z2lucztcbmNvbnN0IHsgUGx1Z2luU2lkZWJhciwgUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSB9ID0gd3AuZWRpdFBvc3Q7XG5cbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyBCdXR0b24sIFBhbmVsQm9keSwgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvYzktZmVhdGhlci1sb2dvLWdyYXkuc3ZnXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZXNNb2RhbCB9IGZyb20gXCIuLi90ZW1wbGF0ZXMtbW9kYWxcIjtcblxuY2xhc3MgQzkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzTW9kYWxPcGVuOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBpc01vZGFsT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtXG5cdFx0XHRcdFx0aWNvbj17PExvZ28gc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBtYXJnaW46IFwiMCAxMHB4IDAgNnB4XCIgfX0gLz59XG5cdFx0XHRcdFx0dGFyZ2V0PVwiYzktYmxvY2tzXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtfXyhcIkNPVkVSVCBOSU5FIEJsb2Nrc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0PC9QbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtPlxuXHRcdFx0XHQ8UGx1Z2luU2lkZWJhclxuXHRcdFx0XHRcdG5hbWU9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdGlkPVwiYzktYmxvY2tzXCJcblx0XHRcdFx0XHR0aXRsZT17X18oXCJDT1ZFUlQgTklORSBCbG9ja3NcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYzktcGFuZWwtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogXCJ0ZW1wbGF0ZXNcIiB9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1zY2hlZHVsZVwiIC8+XG5cdFx0XHRcdFx0XHRcdHtfXyhcIlRlbXBsYXRlc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYzktcGFuZWwtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogXCJjdXN0b20tY29kZVwiIH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWVkaXRvci1jb2RlXCIgLz5cblx0XHRcdFx0XHRcdFx0e19fKFwiQ1NTICYgSmF2YVNjcmlwdFwiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYzktcGFuZWwtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogXCJjdXN0b21pemVyXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tc2V0dGluZ3NcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJDdXN0b21pemVyXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGx1Z2luU2lkZWJhcj5cblx0XHRcdFx0e1widGVtcGxhdGVzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0vPn1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IGZhbHNlIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XCJcIlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7LyogeyAnY3VzdG9tLWNvZGUnID09PSBpc01vZGFsT3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUNvZGVNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiB0aGlzLnNldFN0YXRlKCB7IGlzTW9kYWxPcGVuOiBmYWxzZSB9ICkgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAnY3VzdG9taXplcicgPT09IGlzTW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9taXplck1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17ICgpID0+IHRoaXMuc2V0U3RhdGUoIHsgaXNNb2RhbE9wZW46IGZhbHNlIH0gKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH0gKi99XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxucmVnaXN0ZXJQbHVnaW4oXCJjOS1ibG9ja3NcIiwge1xuXHRpY29uOiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1wbHVnaW4taWNvblwiPlxuXHRcdFx0PExvZ28gLz5cblx0XHQ8L2Rpdj5cblx0KSxcblx0cmVuZGVyOiBDOVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOm5vdCguaXMtdG9nZ2xlZCkgLmM5LXBsdWdpbi1pY29uIHN2ZywuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uLmlzLXRvZ2dsZWQgLmM5LXBsdWdpbi1pY29uIHN2ZywuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTZweH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOm5vdCguaXMtdG9nZ2xlZCkgLmM5LXBsdWdpbi1pY29uIHN2ZyAqLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnICosLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbjpob3ZlciAuYzktcGx1Z2luLWljb24gc3ZnICp7c3Ryb2tlOmluaXRpYWwgIWltcG9ydGFudH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOm5vdCguaXMtdG9nZ2xlZCkgLmM5LXBsdWdpbi1pY29uIHN2ZyBbZmlsbD1cXFwiI2ZmZlxcXCJdLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl0sLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbjpob3ZlciAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl17ZmlsbDojZmZmICFpbXBvcnRhbnR9LmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbiAuYzktcGx1Z2luLWljb24gc3BhbnttYXJnaW46LTJweH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uLmlzLXRvZ2dsZWQgLmM5LXBsdWdpbi1pY29uIHNwYW4gW2ZpbGw9XFxcIiNmZmZcXFwiXXtmaWxsOiM1NTVkNjYgIWltcG9ydGFudH0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9ue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztwYWRkaW5nOjE1cHggMTBweDttYXJnaW4tYm90dG9tOjE2cHg7ZmxleC1zaHJpbms6MDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6aW5oZXJpdDt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOjFweCBzb2xpZDtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOjAuMnMgY29sb3IsIDAuMnMgYmFja2dyb3VuZC1jb2xvciwgMC4ycyBib3JkZXItY29sb3IsIDAuMnMgYm94LXNoYWRvd30ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246aG92ZXIsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1cywucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzOmVuYWJsZWQsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjphY3RpdmUsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjphY3RpdmU6ZW5hYmxlZHtib3JkZXItY29sb3I6cmdiYSg3OSw4OSwxMDUsMC4yKTtib3gtc2hhZG93Om5vbmV9LnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpob3ZlciwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZSwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZTplbmFibGVke2NvbG9yOiMxOTFlMjM7YmFja2dyb3VuZC1jb2xvcjojZjhmOWY5fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246Zm9jdXMsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1czplbmFibGVke2NvbG9yOiMxOTFlMjM7Ym9yZGVyLWNvbG9yOiMwMDdmYWM7Ym94LXNoYWRvdzowIDAgMCAycHggIzAwYTBkMn0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uIHNwYW57ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvO21hcmdpbi10b3A6M3B4O3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDoyNHB4fVxcblwiLCBcIlwiXSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID1cbi8qI19fUFVSRV9fKi9cblJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgXCJkYXRhLW5hbWVcIjogXCJMYXllciAyXCJcbn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNDcgMTM4LjA2QzQwLjM3IDEyMy45IDQwLjg0IDM2LjQxIDgzLjU0IDIyLjRjMCAwLTE1LjY0IDcuMjktMTAuMTIgMjcuNDUgNy4yLTEzLjY4IDIwLjMzLTM3LjIyIDU3Ljc3LTQzLjQ2IDI0LTIuODktMTMuMTUgMS4xLTYgMjIuMjIuMjQtOC44OCA1OS40MS00NSAxMDgtMTkuODFDMjQ2LjQzIDEwNC42OSAxNzcgMTEwLjA2IDE3NyAxMTAuMDZzMTQuOTUgMi4zOCAyMy44My0uNWMtOS4xMiAzOS44NC02My4xMyA0Mi4xNC02My4xMyA0Mi4xNHMyMC41MSA1LjExIDM0LjkyIDIuNDdjLTQ5LjQ1IDMyLjQtMTE2Ljg2LTQuODYtMTE2Ljg2LTQuODYtLjI3LjA4LS44My0uNDMtMS41OC0xLjMxbDExMi03OGEyNS4wOSAyNS4wOSAwIDEwLTYtNi4yN0w3OS45IDEyMC40bC0yLjIzLTMuMjUtMzAuNTkgMjFNMTgzLjcyIDMzLjc0YTE2LjI1IDE2LjI1IDAgMTEtMTguODQgMTMuMTcgMTYuMjQgMTYuMjQgMCAwMTE4Ljg0LTEzLjE3ek01NC4xNyAxNDhsLS4zOS0uNTUuNDMuNTJ6bS0zNC40My02LjU1bDguNDUtNS41IDUuNSA4LjQ0LTguNDQgNS41LTUuNTEtOC40NHptLTQuMzcgMTQuODdsLTUuNS04LjQ0IDguNDUtNS41IDUuNSA4LjQ0LTguNDUgNS41em0tOS44NyA2LjQ3TDAgMTU0LjM0bDguNDUtNS41IDUuNSA4LjQ0LTguNDUgNS41MXptNDYuODYtMTMuODdsLTM4Ljk1IDI1LjczLTYuOTUtMTAuMzRMNDUgMTM5LjNsNy4zMyA5LjYyelwiLFxuICBmaWxsOiBcIiMxMjEyMTJcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBcImRhdGEtbmFtZVwiOiBcImxvZ28gZGFyayBncmV5XCJcbn0pKTtcblxudmFyIFN2Z0M5RmVhdGhlckxvZ29HcmF5ID0gZnVuY3Rpb24gU3ZnQzlGZWF0aGVyTG9nb0dyYXkocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHZpZXdCb3g6IFwiMCAwIDIzNC45MiAxNzQuNjVcIlxuICB9LCBwcm9wcyksIF9yZWYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnQzlGZWF0aGVyTG9nb0dyYXk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYzktZmVhdGhlci1sb2dvLWdyYXkuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgTW9kYWwsIFRhYlBhbmVsLCBUb29sdGlwLCBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyB3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IGNyZWF0ZUJsb2NrLCByYXdIYW5kbGVyIH0gPSB3cC5ibG9ja3M7XG5cbmltcG9ydCBMYXlvdXRCdXR0b24gZnJvbSBcIi4vbGF5b3V0LWJ1dHRvblwiO1xuaW1wb3J0IFNlY3Rpb25CdXR0b24gZnJvbSBcIi4vc2VjdGlvbi1idXR0b25cIjtcbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcblxuLy8gdGVtcGxhdGVzXG5pbXBvcnQgdGVtcGxhdGVNYXJrdXBzIGZyb20gXCIuL3RlbXBsYXRlcy1tYXJrdXBcIjtcblxuY2xhc3MgVGVtcGxhdGVzTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHR9XG5cblx0bWFya3VwVG9CbG9jayh0ZW1wbGF0ZU9iaiwgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKSB7XG5cdFx0bGV0IGJsb2NrT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGVPYmopO1xuXHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhibG9ja09iaikpIHtcblx0XHRcdGJsb2NrT2JqW2tleV0gPSByYXdIYW5kbGVyKHtcblx0XHRcdFx0SFRNTDogYmxvY2tPYmpba2V5XSxcblx0XHRcdFx0bW9kZTogXCJCTE9DS1NcIixcblx0XHRcdFx0Y2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmxvY2tPYmo7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyByZXNldEJsb2NrcywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gZGVmaW5lIHNlY3Rpb24gYW5kIGxheW91dCB0ZW1wbGF0ZXNcblxuXHRcdGNvbnN0IHNlY3Rpb25zID0ge1xuXHRcdFx0dGVzdDogW1xuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvY292ZXJcIiwgeyBhbGlnbjogXCJmdWxsXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9idXR0b25cIiwge1xuXHRcdFx0XHRcdHRleHQ6IF9fKFwiTGF5b3V0IFN3aXRjaGVyXCIsIFwiYzktYmxvY2tzXCIpLFxuXHRcdFx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdH0pXG5cdFx0XHRdLFxuXHRcdFx0Ly8gY29udmVydCBtYXJrdXAgdG8gYWN0dWFsIGJsb2Nrc1xuXHRcdFx0Li4udGhpcy5tYXJrdXBUb0Jsb2NrKHRlbXBsYXRlTWFya3Vwc1tcInNlY3Rpb25zXCJdLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwpXG5cdFx0fTtcblxuXHRcdGNvbnN0IGxheW91dHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbY3JlYXRlQmxvY2soXCJjb3JlL3BhcmFncmFwaFwiLCB7fSldLFxuXHRcdFx0aGVybzogW1xuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvY292ZXJcIiwgeyBhbGlnbjogXCJmdWxsXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9idXR0b25cIiwge1xuXHRcdFx0XHRcdHRleHQ6IF9fKFwiTGF5b3V0IFN3aXRjaGVyXCIsIFwiYzktYmxvY2tzXCIpLFxuXHRcdFx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImM5LWJsb2Nrcy9ncmlkXCIsIHt9LCBbXG5cdFx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lclwiLCB7XG5cdFx0XHRcdFx0XHRjb2x1bW5zOiAzLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiBcImM5LTMtY29sLWVxdWFsXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdKVxuXHRcdFx0XSxcblx0XHRcdGZlYXR1cmVkOiBbXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9oZWFkaW5nXCIsIHt9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3NwYWNlclwiLCB7IGhlaWdodDogXCIxMFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvbWVkaWEtdGV4dFwiLCB7IGFsaWduOiBcImZ1bGxcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3NwYWNlclwiLCB7IGhlaWdodDogXCI0MFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvcXVvdGVcIiwge30pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvc3BhY2VyXCIsIHsgaGVpZ2h0OiBcIjIwXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9tZWRpYS10ZXh0XCIsIHsgbWVkaWFQb3NpdGlvbjogXCJyaWdodFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvcGFyYWdyYXBoXCIsIHtcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oXCJMYXlvdXQgU3dpdGNoZXJcIiwgXCJjOS1ibG9ja3NcIilcblx0XHRcdFx0fSlcblx0XHRcdF0sXG5cdFx0XHRuZXN0ZWQ6IFtcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjOS1ibG9ja3MvZ3JpZFwiLCB7fSwgW1xuXHRcdFx0XHRcdGNyZWF0ZUJsb2NrKFxuXHRcdFx0XHRcdFx0XCJjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0eyBjb2x1bW5zOiAzLCBsYXlvdXQ6IFwiYzktMy1jb2wtZXF1YWxcIiB9LFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRjcmVhdGVCbG9jayhcImM5LWJsb2Nrcy9jb2x1bW5cIiwge30sIFtcblx0XHRcdFx0XHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvYnV0dG9uXCIsIHsgdGV4dDogXCJNYWtlIHRoaXMgUmVjaXBlXCIgfSlcblx0XHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdF0pXG5cdFx0XHRdLFxuXHRcdFx0Ly8gY29udmVydCBtYXJrdXAgdG8gYWN0dWFsIGJsb2Nrc1xuXHRcdFx0Li4udGhpcy5tYXJrdXBUb0Jsb2NrKHRlbXBsYXRlTWFya3Vwc1tcImxheW91dHNcIl0sIGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTClcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRjbGFzc05hbWU9XCJjOS10ZW1wbGF0ZXMtbW9kYWxcIlxuXHRcdFx0XHRwb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRcdHNpemU9XCJsZ1wiXG5cdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGFiUGFuZWxcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjOS10ZW1wbGF0ZS10YWJzIGM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWxcIlxuXHRcdFx0XHRcdHRhYnM9e1tcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJzZWN0aW9uc1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogKFxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJTaW1wbGUgc2VjdGlvbnMgdG8gY29uc3RydWN0IHlvdXIgcGFnZS5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJTZWN0aW9uc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiYzktdGVtcGxhdGUtdGFicy10YWJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJwYWdlc1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogKFxuXHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtfXyhcIlByZS1kZXNpZ25lZCByZWFkeSB0byB1c2UgcGFnZXMuXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIlBhZ2VzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjOS10ZW1wbGF0ZS10YWJzLXRhYlwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBcImxvY2FsXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJNeSBUZW1wbGF0ZXMuXCIsIFwiYzktYmxvY2tzXCIpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIlNhdmVkIExheW91dHNcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImM5LXRlbXBsYXRlLXRhYnMtdGFiXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RhYiA9PiB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhYi5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzZWN0aW9uc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXNlY3Rpb24tb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWN0aW9uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlRlc3RcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uPXtzZWN0aW9ucy50ZXN0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJwYWdlc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWxheW91dC1vcHRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExheW91dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJIZXJvXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PXtsYXlvdXRzLmhlcm99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGF5b3V0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwid29yZHByZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkZlYXR1cmVkXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0PXtsYXlvdXRzLmZlYXR1cmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExheW91dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJOZXN0ZWRcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ9e2xheW91dHMubmVzdGVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExheW91dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJNYXJrZG93blwiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxheW91dD17bGF5b3V0cy5tYXJrZG93bn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRCbG9ja3MoW10pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiQ2xlYXIgcGFnZVwiLCBcImM5LWJsb2Nrc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8cD5Db21pbmcgU29vbi4uLjwvcD47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PC9UYWJQYW5lbD5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QgPSBjb21wb3NlKFtcblx0d2l0aFNlbGVjdCgoc2VsZWN0LCB7IGNsaWVudElkIH0pID0+IHtcblx0XHRjb25zdCB7IGdldEJsb2NrLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwgfSA9IHNlbGVjdChcImNvcmUvZWRpdG9yXCIpO1xuXHRcdGNvbnN0IGJsb2NrID0gZ2V0QmxvY2soY2xpZW50SWQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRibG9jayxcblx0XHRcdGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTDogY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0XHRjb25zdCB7IHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc2V0QmxvY2tzLFxuXHRcdFx0aW5zZXJ0QmxvY2tzXG5cdFx0fTtcblx0fSlcbl0pKFRlbXBsYXRlc01vZGFsKTtcblxuZXhwb3J0IHsgVGVtcGxhdGVzTW9kYWxXaXRoU2VsZWN0IGFzIFRlbXBsYXRlc01vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvaW5kZXguanMiLCJjb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHdpdGhEaXNwYXRjaCB9ID0gd3AuZGF0YTtcblxuY29uc3QgTGF5b3V0QnV0dG9uID0gKHsgbGFiZWwsIGljb24sIGxheW91dCwgcmVzZXRCbG9ja3MsIGluc2VydEJsb2NrcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0QmxvY2tzKFtdKTtcbiAgICAgICAgICAgICAgICBpbnNlcnRCbG9ja3MobGF5b3V0KTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbn0gLz5cblx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRjb25zdCB7IHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cblx0cmV0dXJuIHtcblx0XHRyZXNldEJsb2Nrcyxcblx0XHRpbnNlcnRCbG9ja3Ncblx0fTtcbn0pKExheW91dEJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvbGF5b3V0LWJ1dHRvbi5qcyIsImNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aERpc3BhdGNoIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBTZWN0aW9uQnV0dG9uID0gKHsgbGFiZWwsIGljb24sIHNlY3Rpb24sIGluc2VydEJsb2NrcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydEJsb2NrcyhzZWN0aW9uKTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbn0gLz5cblx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRjb25zdCB7IGluc2VydEJsb2NrcyB9ID0gZGlzcGF0Y2goXCJjb3JlL2VkaXRvclwiKTtcblxuXHRyZXR1cm4ge1xuXHRcdGluc2VydEJsb2Nrc1xuXHR9O1xufSkoU2VjdGlvbkJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvc2VjdGlvbi1idXR0b24uanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVye2JvcmRlci1ib3R0b206bm9uZX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFic3ttYXJnaW4tdG9wOi0yNHB4fUBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7LmM5LXRlbXBsYXRlcy1tb2RhbHttaW4td2lkdGg6NjAwcHg7bWF4LXdpZHRoOjYwMHB4O21hcmdpbi1sZWZ0Oi0zMDBweDt0cmFuc2Zvcm06bm9uZTt0b3A6MTEycHh9fUBtZWRpYSAobWluLXdpZHRoOiA4NDBweCl7LmM5LXRlbXBsYXRlcy1tb2RhbHttaW4td2lkdGg6ODAwcHg7bWF4LXdpZHRoOjgwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDt0cmFuc2Zvcm06bm9uZX19LmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVyIC5jb21wb25lbnRzLW1vZGFsX19pY29uLWNvbnRhaW5lciBzdmd7ZGlzcGxheTpibG9jazttYXJnaW4tcmlnaHQ6MTBweH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jb21wb25lbnRzLW1vZGFsX19oZWFkZXIgLmNvbXBvbmVudHMtbW9kYWxfX2hlYWRlci1oZWFkaW5ne2ZvbnQtd2VpZ2h0OjYwMH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucywuYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1zZWN0aW9uLW9wdGlvbnN7ZGlzcGxheTpncmlkO2dyaWQtY29sdW1uLWdhcDoxcmVtO2dyaWQtcm93LWdhcDoxcmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNiwgMWZyKX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucyBidXR0b24sLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbntib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6I2Q4ZDhkOCAjZDFkMWQxICNiYWJhYmE7Ym9yZGVyLXJhZGl1czozcHg7Ym94LXNoYWRvdzppbnNldCAwIC0xcHggMCAjY2NjO3BhZGRpbmc6NXB4fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbjphY3RpdmUsLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbjphY3RpdmV7Ym9yZGVyLWNvbG9yOiM5OTk7Ym94LXNoYWRvdzppbnNlcnQgMCAxcHggMCAjOTk5fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbiBzcGFuLC5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LXNlY3Rpb24tb3B0aW9ucyBidXR0b24gc3BhbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowLjhyZW07cGFkZGluZzoycHggMH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWJ7cGFkZGluZzoxMnB4IDE2cHg7Y29sb3I6aW5oZXJpdH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWI6Zm9jdXN7b3V0bGluZTpub25lfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmNvbXBvbmVudHMtdGFiLXBhbmVsX190YWJzIC5jOS10ZW1wbGF0ZS10YWJzLXRhYi5pcy1hY3RpdmV7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzAwYTBkMjt6LWluZGV4OjF9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgdGVtcGxhdGVNYXJrdXBzID0ge1xuICAgIGxheW91dHM6IHtcbiAgICAgICAgbWFya2Rvd246IGA8IS0tIHdwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMge1widGFiQWN0aXZlXCI6XCJ0YWItYXBwbGVcIixcImJ1dHRvbnNBbGlnblwiOlwiY2VudGVyXCIsXCJ0YWJzRGF0YVwiOlt7XCJzbHVnXCI6XCJ0YWItYXBwbGVcIixcInRpdGxlXCI6XCJhcHBsZVwifSx7XCJzbHVnXCI6XCJ0YWItYmFuYW5hXCIsXCJ0aXRsZVwiOlwiYmFuYW5hXCJ9XSxcImluc3RhbmNlSWRcIjowfSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImM5LWhvcml6b250YWwtdGFic1wiIGRhdGEtdGFiLWFjdGl2ZT1cInRhYi1hcHBsZVwiPjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHJvbGU9XCJ0YWJsaXN0XCI+PGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBkYXRhLXRvZ2dsZT1cInRhYlwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItYXBwbGUtMFwiIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi1hcHBsZVwiPmFwcGxlPC9hPjwvbGk+PGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBkYXRhLXRvZ2dsZT1cInRhYlwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItYmFuYW5hLTBcIiBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi1iYW5hbmFcIj5iYW5hbmE8L2E+PC9saT48L3VsPjxkaXYgY2xhc3M9XCJjOS10YWJzLWNvbnRlbnQgdGFiLWNvbnRlbnRcIj48IS0tIHdwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi1hcHBsZVwiLFwidGFiQWN0aXZlXCI6XCJ0YWItYXBwbGVcIixcImlkXCI6MH0gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjOS1ob3Jpem9udGFsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItYXBwbGUtMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi1hcHBsZVwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwidGVzdFwifSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMSBjbGFzcz1cImhcIj50ZXN0PC9oMT48L2Rpdj5cbiAgICAgICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+XG4gICAgICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMtdGFiIC0tPlxuICAgICAgICBcbiAgICAgICAgPCEtLSB3cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItYmFuYW5hXCIsXCJ0YWJBY3RpdmVcIjpcInRhYi1hcHBsZVwiLFwiaWRcIjowfSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImM5LWhvcml6b250YWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi1iYW5hbmEtMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi1iYW5hbmFcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICAgICAgPHA+ZWFzZHc8L3A+XG4gICAgICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cbiAgICAgICAgPCEtLSAvd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicy10YWIgLS0+PC9kaXY+PC9kaXY+XG4gICAgICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMgLS0+YFxuICAgIH0sXG4gICAgc2VjdGlvbnM6IHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVNYXJrdXBzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC90ZW1wbGF0ZXMtbWFya3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==