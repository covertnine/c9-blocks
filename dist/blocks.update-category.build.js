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
/******/ 	return __webpack_require__(__webpack_require__.s = 414);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 6),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 7);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 11:
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 12:
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 39);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 14:
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

/***/ 15:
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 25)))

/***/ }),

/***/ 16:
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

/***/ 201:
/*!*********************************************!*\
  !*** ./src/stores/twitter/prepare-query.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(/*! qs */ 422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);


function prepareQuery(type, data) {
    var additionalData = __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data, { encode: false });
    var query = '/c9-blocks/get_twitter_' + type + '/' + (additionalData ? '?' + additionalData : '');

    return query;
}

/***/ }),

/***/ 202:
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ 40);

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

/***/ 203:
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

/***/ 204:
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 427);


/***/ }),

/***/ 205:
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ 25:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 26:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 27:
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 15);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 39:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 5),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 11),
    isArray = __webpack_require__(/*! ./isArray */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 10);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 40:
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

/***/ 414:
/*!********************************!*\
  !*** ./src/update-category.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__ = __webpack_require__(/*! ./update-category/deregister-blocks */ 415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__ = __webpack_require__(/*! ./update-category/register-filters */ 416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__ = __webpack_require__(/*! ./update-category/register-styles */ 417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_stores__ = __webpack_require__(/*! ./update-category/register-stores */ 418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sidebar__ = __webpack_require__(/*! ./components/sidebar */ 429);
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

/***/ 415:
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

/***/ 416:
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

/***/ 417:
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

/***/ 418:
/*!************************************************!*\
  !*** ./src/update-category/register-stores.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_twitter__ = __webpack_require__(/*! ../stores/twitter */ 419);


/***/ }),

/***/ 419:
/*!*************************************!*\
  !*** ./src/stores/twitter/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(/*! ./reducer */ 420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(/*! ./selectors */ 421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(/*! ./actions */ 203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(/*! ./controls */ 425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__(/*! ./resolvers */ 426);






var registerStore = wp.data.registerStore;


registerStore("c9-blocks/twitter", {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
	controls: __WEBPACK_IMPORTED_MODULE_3__controls__,
	resolvers: __WEBPACK_IMPORTED_MODULE_4__resolvers__
});

/***/ }),

/***/ 420:
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

/***/ 421:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 201);


function getTwitterFeed(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("feed", data);

	return state.feeds[query];
}

function getTwitterProfile(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("profile", data);

	return state.profiles[query];
}

/***/ }),

/***/ 422:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 423);
var parse = __webpack_require__(/*! ./parse */ 424);
var formats = __webpack_require__(/*! ./formats */ 202);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 423:
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 40);
var formats = __webpack_require__(/*! ./formats */ 202);
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

/***/ 424:
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 40);

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

/***/ 425:
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

/***/ 426:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(/*! ./actions */ 203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 201);


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

/***/ 427:
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

module.exports = __webpack_require__(/*! ./runtime */ 428);

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

/***/ 428:
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

/***/ 429:
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__ = __webpack_require__(/*! ../../../assets/c9-feather-logo-gray.svg */ 432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_modal__ = __webpack_require__(/*! ../templates-modal */ 433);
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
									_this2.setState({ isModalOpen: "section-templates" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-schedule" }),
							__("Section Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "page-templates" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-editor-code" }),
							__("Page Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "saved-blocks" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-admin-settings" }),
							__("Saved Blocks", "c9-blocks")
						)
					)
				),
				"section-templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "sections"
				}) : "",
				"page-templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "pages"
				}) : "",
				"saved-blocks" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "blocks"
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

/***/ 430:
/*!********************************************!*\
  !*** ./src/components/sidebar/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 431);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 16)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 431:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/sidebar/editor.scss ***!
  \***********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 14)(false);
// Module
exports.push([module.i, ".edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg{display:block;height:16px}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg *{stroke:initial !important}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg [fill=\"#fff\"]{fill:#fff !important}.edit-post-pinned-plugins .components-icon-button .c9-plugin-icon span{margin:-2px}.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon span [fill=\"#fff\"]{fill:#555d66 !important}.plugin-c9-panel .plugin-c9-panel-button{display:block;width:100%;height:auto;padding:15px 10px;margin-bottom:16px;flex-shrink:0;overflow:hidden;color:inherit;text-align:center;cursor:pointer;background:none;border:1px solid;border-radius:4px;transition:0.2s color, 0.2s background-color, 0.2s border-color, 0.2s box-shadow}.plugin-c9-panel .plugin-c9-panel-button,.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{border-color:rgba(79,89,105,0.2);box-shadow:none}.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{color:#191e23;background-color:#f8f9f9}.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled{color:#191e23;border-color:#007fac;box-shadow:0 0 0 2px #00a0d2}.plugin-c9-panel .plugin-c9-panel-button span{display:block;margin:0 auto;margin-top:3px;text-align:center;height:24px}\n", ""]);


/***/ }),

/***/ 432:
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

/***/ 433:
/*!*************************************************!*\
  !*** ./src/components/templates-modal/index.js ***!
  \*************************************************/
/*! exports provided: TemplatesModal */
/*! exports used: TemplatesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesModalWithSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase__ = __webpack_require__(/*! lodash/startCase */ 434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_button__ = __webpack_require__(/*! ./layout-button */ 451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_button__ = __webpack_require__(/*! ./section-button */ 452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_markup__ = __webpack_require__(/*! ./templates-markup */ 455);


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
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].sections, canUserUseUnfilteredHTML));

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
			}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].layouts, canUserUseUnfilteredHTML));

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
							name: "blocks",
							title: wp.element.createElement(
								Tooltip,
								{ text: __("My Templates.", "c9-blocks") },
								wp.element.createElement(
									"span",
									null,
									__("Saved Blocks")
								)
							),
							className: "c9-template-tabs-tab"
						}],
						initialTabName: this.props.initial
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
										Object.keys(sections).map(function (k) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__section_button__["a" /* default */], {
												icon: "wordpress",
												label: __(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(k), "c9-blocks"),
												section: sections[k]
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
										Object.keys(layouts).map(function (k) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__layout_button__["a" /* default */], {
												icon: "wordpress",
												label: __(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(k), "c9-blocks"),
												layout: layouts[k]
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
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__section_button__["a" /* default */], {
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

/***/ 434:
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ 435),
    upperFirst = __webpack_require__(/*! ./upperFirst */ 444);

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),

/***/ 435:
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ 436),
    deburr = __webpack_require__(/*! ./deburr */ 437),
    words = __webpack_require__(/*! ./words */ 440);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ 436:
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ 437:
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ 438),
    toString = __webpack_require__(/*! ./toString */ 12);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ 438:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ 439);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ 439:
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ 440:
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ 441),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ 442),
    toString = __webpack_require__(/*! ./toString */ 12),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ 443);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ 441:
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ 442:
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ 443:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ 444:
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ 445);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ 445:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ 446),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 205),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ 448),
    toString = __webpack_require__(/*! ./toString */ 12);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ 446:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ 447);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ 447:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 448:
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ 449),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 205),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ 450);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ 449:
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ 450:
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ 451:
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

/***/ 452:
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

/***/ 453:
/*!****************************************************!*\
  !*** ./src/components/templates-modal/editor.scss ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 454);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 16)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 454:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/templates-modal/editor.scss ***!
  \*******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 14)(false);
// Module
exports.push([module.i, ".c9-templates-modal .components-modal__header{border-bottom:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs{margin-top:-24px}@media (min-width: 600px){.c9-templates-modal{min-width:600px;max-width:600px;margin-left:-300px;transform:none;top:112px}}@media (min-width: 840px){.c9-templates-modal{min-width:800px;max-width:800px;margin-left:-400px;transform:none}}.c9-templates-modal .components-modal__header .components-modal__icon-container svg{display:block;margin-right:10px}.c9-templates-modal .components-modal__header .components-modal__header-heading{font-weight:600}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options{display:grid;grid-column-gap:1rem;grid-row-gap:1rem;grid-template-columns:repeat(6, 1fr)}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button{border-width:1px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;border-radius:3px;box-shadow:inset 0 -1px 0 #ccc;padding:5px}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button:active,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button:active{border-color:#999;box-shadow:insert 0 1px 0 #999}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button span,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button span{display:block;font-size:0.8rem;padding:2px 0}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab{padding:12px 16px;color:inherit}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab:focus{outline:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab.is-active{position:relative;border-bottom:2px solid #00a0d2;z-index:1}\n", ""]);


/***/ }),

/***/ 455:
/*!************************************************************!*\
  !*** ./src/components/templates-modal/templates-markup.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var templateMarkups = {
	layouts: {
		testBlocks: '\n\t\t<!-- wp:c9-blocks/grid {"instanceId":1,"minScreenHeight":10} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:10vh"><!-- wp:c9-blocks/column-container {"columns":1,"columnMaxWidth":0,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel {"instanceId":1} -->\n\t\t<div id="c9-carousel-indicator-1" class="c9-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item active"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/carousel -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles {"instanceId":0} -->\n\t\t<div class="c9-toggles accordion" id="accordion-0"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-0" data-toggle="collapse" data-target="#c9-toggles-collapse1-0"><div class="mb-0"><span class="c9-toggles-toggle-label">Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-0" data-parent="#accordion-0"></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-0" data-toggle="collapse" data-target="#c9-toggles-collapse2-0"><div class="mb-0"><span class="c9-toggles-toggle-label">Toggle Item</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-0" data-parent="#accordion-0"></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t\t<!-- /wp:c9-blocks/toggles -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-h"></h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/image-carousel {"instanceId":0} -->\n\t\t<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"></div><div class="carousel-item"></div><div class="carousel-item"></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:c9-blocks/cta -->\n\t\t<div style="text-align:center" class="c9-cta c9-block-cta container p-5"><div class="row"><div class="c9-cta-content col-12 col-md-8"><div class="c9-cta-text"></div></div></div></div>\n\t\t<!-- /wp:c9-blocks/cta -->\n\t\t\n\t\t<!-- wp:c9-blocks/social-share /-->\n\t\t\n\t\t<!-- wp:c9-blocks/horizontal-tabs {"instanceId":0} -->\n\t\t<div class="c9-horizontal-tabs" data-tab-active="tab-1"><ul class="nav nav-tabs d-flex nav-justified" role="tablist"><li class="nav-item"><a data-toggle="tab" role="tab" href="#tab-tab-1-0" class="nav-link active" id="tab-button-tab-1">Tab 1</a></li><li class="nav-item"><a data-toggle="tab" role="tab" href="#tab-tab-2-0" class="nav-link" id="tab-button-tab-2">Tab 2</a></li></ul><div class="c9-tabs-content tab-content"><!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-1","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-horizontal-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-1-0" aria-labelledby="tab-1"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/horizontal-tabs-tab -->\n\t\t\n\t\t<!-- wp:c9-blocks/horizontal-tabs-tab {"slug":"tab-2","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-horizontal-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-2-0" aria-labelledby="tab-2"></div>\n\t\t<!-- /wp:c9-blocks/horizontal-tabs-tab --></div></div>\n\t\t<!-- /wp:c9-blocks/horizontal-tabs -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs {"instanceId":0} -->\n\t\t<div class="c9-vertical-tabs row" data-tab-active="tab-1"><div class="col-xs-12 col-sm-3"><div class="nav flex-column nav-pills" role="tablist"><a data-toggle="pill" role="tab" href="#tab-tab-1-0" class="nav-link active" id="tab-button-tab-1">Tab 1</a><a data-toggle="pill" role="tab" href="#tab-tab-2-0" class="nav-link" id="tab-button-tab-2">Tab 2</a></div></div><div class="col-xs-12 col-sm-9"><div class="c9-tabs-content tab-content"><!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-1","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-1-0" aria-labelledby="tab-1"><!-- wp:paragraph -->\n\t\t<p></p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-2","tabActive":"tab-1","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-2-0" aria-labelledby="tab-2"></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs -->\n\t\t\n\t\t<!-- wp:c9-blocks/posts-grid {"instanceId":0} -->\n\t\t<div class="c9-posts-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/post-grid /--></div>\n\t\t<!-- /wp:c9-blocks/posts-grid -->\n\t\t',
		markdown: '<!-- wp:c9-blocks/carousel {"instanceId":0} -->\n<div id="c9-carousel-indicator-0" class="c9-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item active"><!-- wp:heading -->\n<h2>awdawd</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>waad</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:paragraph -->\n<p>awdawdaw</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:paragraph -->\n<p>awdadawdawdaw</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/carousel -->',
		testBg: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":80} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerImgURL":null,"focalPoint":{"x":0.511520737327189,"y":0.625}} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering Landing Page","subheading":"subheading","addSubheading":true,"textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h font-weight-light" style="color:#ffffff">Service Offering Landing Page</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"layout":"c9-3-col-equal","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerHue":"#ffffff"} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 1","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 1</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. </p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 2","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 2</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved X.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 3","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 3</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		restaurantMenuLandingPage: '\n\t\t<!-- wp:c9-blocks/grid {"instanceId":1,"containerHue":"#313131","overlayHue":"#313131","overlayOpacity":7,"blendMode":"multiply","minScreenHeight":50,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/restaurant-video-bg-web.mov"} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-video" style="min-height:50vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-1" class="c9-video-custom" playsinline autoplay muted loop style="min-height:50vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/restaurant-video-bg-web.mov" type="video/mp4"/></video></div></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.7);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"full","columns":1,"layout":"one-column","containerWidth":"container-fluid","verticalAlign":"bottom"} -->\n\t\t<div class="container-fluid alignfull c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-bottom one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"bottom"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"New Fall Menu","type":"c9-txl display-","textColor":"#abb8c3","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#abb8c3">New Fall Menu</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"ORDER THIS FISH ONLINE RIGHT NOW","tagLevel":6,"textColor":"#ffffff","weight":"normal"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-h font-weight-normal" style="color:#ffffff">ORDER THIS FISH ONLINE RIGHT NOW</h6></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"get started","buttonAlignment":"left","buttonTextColor":"#313131","buttonShape":"outline","buttonTarget":true,"ctaLayout":"three-quarters","ctaPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"align":"wide"} -->\n\t\t<div style="text-align:left" class="c9-cta c9-block-cta container alignwide p-5"><div class="row"><div class="c9-cta-content col-12 col-md-9"><div class="c9-cta-text c9-sh"><p>Make a reservation, buy a ring, get engaged, high five.</p></div></div><div class="c9-cta-button col-12 col-md-3"><a href="#" target="_blank" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-medium" style="color:#313131">get started<span class="sr-only">(Link opens in new window)</span></a></div></div></div>\n\t\t<!-- /wp:c9-blocks/cta -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":2,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":7,"blendMode":"multiply","minScreenHeight":80,"focalPoint":{"x":0.4700460829493088,"y":0.8641975308641975}} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:80vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:47.004608294930875% 86.41975308641975%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.7);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","verticalAlign":"center","minScreenHeight":43} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:43vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Brunch","subheading":"Available on weekends and holidays","addSubheading":true,"displayLevel":"5","type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-5" style="color:#ffffff">Brunch</h1><div class="c9-txl display-5"><small class="text-muted">&nbsp;Available on weekends and holidays</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"align":"wide","columns":3,"columnsGap":1,"layout":"c9-3-col-wideright","verticalAlign":"bottom","overlayHue":"#ffffff","overlayOpacity":10,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-wideright"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:overlay"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Small Plates","subheading":"served all day","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Small Plates</h5><div class="c9-h h5"><small class="text-muted">&nbsp;served all day</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Nachos","subheading":"$16","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Nachos</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$16</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Tacos","subheading":"$13","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Tacos</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$13</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Plate of 3 small tacos. Like the tiniest tacos you\u2019ve ever seen for fourteen big ones</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Charcuterie","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Charcuterie</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Beef Tips","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Beef Tips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">At this far into the fake menu we ran out of ideas</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Mac &amp; Cheese","subheading":"$10","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Mac &amp; Cheese</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$10</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/image-carousel {"instanceId":0,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg"],"id":[7340,7342,7341]} -->\n\t\t<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Entrees","subheading":"7am-noon","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Entrees</h5><div class="c9-h h5"><small class="text-muted">&nbsp;7am-noon</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"NY Strip","subheading":"$26","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">NY Strip</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$26</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Grilled Chicken","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Grilled Chicken</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Pork Loin","subheading":"$19","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Pork Loin</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$19</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Kielbasa","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Kielbasa</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Sausages are pretty good. Not quite sure what this kind is though</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Lamb Chops","subheading":"$22","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Lamb Chops</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$22</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">How dare you think about eating these tiny baby animals</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Burger","subheading":"$13","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Burger</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$13</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Like those fake meat burgers. This is the real deal</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Lasagna","subheading":"$17","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Lasagna</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$17</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Made with things that aren\u2019t meat</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":1,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg"],"id":[7369,7335,7334],"captionTitle":["Brunch Cocktails","Charcuterie Plate","Now this is podracing"],"captionContent":["Get hammered right after church!","I mean it\'s mostly fruit but it\'s close",null]} -->\n\t\t<div id="c9-image-carousel-indicator-1" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Brunch Cocktails</h5><p>Get hammered right after church!</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Charcuterie Plate</h5><p>I mean it\'s mostly fruit but it\'s close</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Now this is podracing</h5></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:spacer -->\n\t\t<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Sides","subheading":"add for $1.00 - $6.00","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Sides</h5><div class="c9-h h5"><small class="text-muted">&nbsp;add for $1.00 - $6.00</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Chips","subheading":"$4","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Chips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$4</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Side Salad","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Side Salad</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Peanuts","subheading":"$1","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Peanuts</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$1</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Yogurt","subheading":"$2","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Yogurt</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$2</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Cereal","subheading":"$4","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Cereal</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$4</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"French Fries","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">French Fries</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Steak Bites","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Steak Bites</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs {"tabActive":"tab-saturday","tabsData":[{"slug":"tab-saturday","title":"Saturday"},{"slug":"tab-sunday","title":"Sunday"}],"instanceId":0,"verticalAlign":"center"} -->\n\t\t<div class="c9-vertical-tabs row" data-tab-active="tab-saturday"><div class="col-xs-12 col-sm-3"><div class="nav flex-column nav-pills" role="tablist"><a data-toggle="pill" role="tab" href="#tab-tab-saturday-0" class="nav-link active" id="tab-button-tab-saturday">Saturday</a><a data-toggle="pill" role="tab" href="#tab-tab-sunday-0" class="nav-link" id="tab-button-tab-sunday">Sunday</a></div></div><div class="col-xs-12 col-sm-9"><div class="c9-tabs-content tab-content align-self-center"><!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-saturday","tabActive":"tab-saturday","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade show active" role="tabpanel" id="tab-tab-saturday-0" aria-labelledby="tab-saturday"><!-- wp:heading {"level":6} -->\n\t\t<h6>Saturday Brunch Specials</h6>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Chef will make something and your server will tell you what it is and you will pay $25</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Bottomless mimosas and we\u2019ll make the newest hire clean up the $30</p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab -->\n\t\t\n\t\t<!-- wp:c9-blocks/vertical-tabs-tab {"slug":"tab-sunday","tabActive":"tab-saturday","id":0} -->\n\t\t<div class="c9-vertical-tabs-tab tab-pane fade" role="tabpanel" id="tab-tab-sunday-0" aria-labelledby="tab-sunday"><!-- wp:heading {"level":6} -->\n\t\t<h6>Sunday Brunch Specials</h6>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Chef will make osmething and your server will tell you what it is and you will pay $25</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Ditch church and prove it for 10% off your total</p>\n\t\t<!-- /wp:paragraph --></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n\t\t<!-- /wp:c9-blocks/vertical-tabs --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#eeeeee","minScreenHeight":10} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:10vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","minScreenHeight":10} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Sustainable Food Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Sustainable Food Mission</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":4,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h4 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h4></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":3,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"normal","minScreenHeight":80,"focalPoint":{"x":0.4700460829493088,"y":0.8641975308641975}} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:80vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:47.004608294930875% 86.41975308641975%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:normal"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","verticalAlign":"center","minScreenHeight":43} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:43vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Dinner","subheading":"New Fall Menu","addSubheading":true,"displayLevel":"5","type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-txl display-5" style="color:#ffffff">Dinner</h1><div class="c9-txl display-5"><small class="text-muted">&nbsp;New Fall Menu</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"align":"wide","columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"bottom","overlayHue":"#ffffff","overlayOpacity":10,"blendMode":"multiply","containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-equal"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:multiply"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Small Plates","subheading":"served all day","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Small Plates</h5><div class="c9-h h5"><small class="text-muted">&nbsp;served all day</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Nachos","subheading":"$16","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Nachos</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$16</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Charcuterie","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Charcuterie</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Beef Tips","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Beef Tips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">At this far into the fake menu we ran out of ideas</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Mac &amp; Cheese","subheading":"$10","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Mac &amp; Cheese</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$10</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Bacon Stick","subheading":"$40","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Bacon Stick</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$40</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">This is $40 of bacon on a stick. Prepare your veins for cholesterol</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/image-carousel {"instanceId":2,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg"],"id":[7340,7342,7341]} -->\n\t\t<div id="c9-image-carousel-indicator-2" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-2" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-2" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-2" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Entrees","subheading":"7am-noon","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Entrees</h5><div class="c9-h h5"><small class="text-muted">&nbsp;7am-noon</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"NY Strip","subheading":"$26","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">NY Strip</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$26</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Grilled Chicken","subheading":"$14","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Grilled Chicken</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$14</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Pork Loin","subheading":"$19","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Pork Loin</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$19</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Kielbasa","subheading":"$12","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Kielbasa</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$12</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Sausages are pretty good. Not quite sure what this kind is though</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Lamb Chops","subheading":"$22","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Lamb Chops</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$22</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">How dare you think about eating these tiny baby animals</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Burger","subheading":"$13","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Burger</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$13</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Like those fake meat burgers. This is the real deal</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Veggie Lasagna","subheading":"$17","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Veggie Lasagna</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$17</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Made with things that aren\u2019t meat</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Flatbread Pizza","subheading":"$19","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Flatbread Pizza</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$19</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph {"customFontSize":14} -->\n\t\t<p style="font-size:14px">Made with tomatoes, meat, and mystery sauce</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":3,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg"],"id":[7339,7336,7337],"captionTitle":["Chernobyl Burger","Side Salad","Chernobyl Fruit"],"captionContent":["For all you vegans out there","This thing is full of weirdness","Good for stronk bones"]} -->\n\t\t<div id="c9-image-carousel-indicator-3" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-3" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Burger</h5><p>For all you vegans out there</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Side Salad</h5><p>This thing is full of weirdness</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Fruit</h5><p>Good for stronk bones</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-3" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-3" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:spacer {"height":27} -->\n\t\t<div style="height:27px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Sides","subheading":"add for $1.00 - $6.00","addSubheading":true,"tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">Sides</h5><div class="c9-h h5"><small class="text-muted">&nbsp;add for $1.00 - $6.00</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Chips","subheading":"$4","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Chips</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$4</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Side Salad","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Side Salad</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"French Fries","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">French Fries</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Steak Bites","subheading":"$6","addSubheading":true,"tagLevel":5,"weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h font-weight-light">Steak Bites</h5><div class="c9-h h5"><small class="text-muted">&nbsp;$6</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->',
		serviceLandingPage: '<!-- wp:c9-blocks/grid {"instanceId":0,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","containerHue":"#313131","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":90} -->\n\t\t<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":155} -->\n\t\t<div style="height:155px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Service Offering","subheading":"Landing Page Template","addSubheading":true,"type":"c9-txl display-","textColor":"#eeeeee","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#eeeeee">Service Offering</h1><div class="c9-txl display-1"><small class="text-muted">&nbsp;Landing Page Template</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:spacer -->\n\t\t<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"center","overlayHue":"#eeeeee","overlayOpacity":10,"blendMode":"normal","minScreenHeight":1,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal" style="min-height:1vh"><div class="c9-overlay-container" style="background-color:rgba(238,238,238,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n\t\t<h3>Step 1</h3>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n\t\t<h3>Step 2</h3>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n\t\t<h3>Step 3</h3>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":1} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-equal","minScreenHeight":1} -->\n\t\t<div class="container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal" style="min-height:1vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Reason #1</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Reason Maybe 3,000</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":60,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4"} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video" style="min-height:60vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-2" class="c9-video-custom" playsinline autoplay muted loop style="min-height:60vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4" type="video/mp4"/></video></div></div><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Schedule Consultation","tagLevel":3,"displayLevel":"2","textColor":"#ffffff","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h3 class="c9-h h2" style="color:#ffffff">Schedule Consultation</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"One of our professionals will walk you through the process","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#ffffff","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h4 class="c9-sh font-weight-light" style="color:#ffffff">One of our professionals will walk you through the process</h4></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:spacer {"height":42} -->\n\t\t<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:button {"textColor":"vivid-green-cyan","className":"is-style-outline"} -->\n\t\t<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color has-vivid-green-cyan-color" href="#">Schedule Now</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":3,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"FAQ Toggles","subheading":"with image carousels","addSubheading":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h1 class="c9-h">FAQ Toggles</h1><div class="c9-h h1"><small class="text-muted">&nbsp;with image carousels</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":0,"className":"is-style-default"} -->\n\t\t<div class="c9-toggles is-style-default accordion" id="accordion-0"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-0" data-toggle="collapse" data-target="#c9-toggles-collapse1-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>1.\xA0</strong>How long is the consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-0" data-parent="#accordion-0"><!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-0" data-toggle="collapse" data-target="#c9-toggles-collapse2-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>2.</strong>\xA0Do you have to do a consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-0" data-parent="#accordion-0"><!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-0" data-toggle="collapse" data-target="#c9-toggles-collapse3-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>3.</strong>\xA0Do you work with not for profits or non-profits?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-0" data-parent="#accordion-0"><!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-0" data-toggle="collapse" data-target="#c9-toggles-collapse4-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>4.</strong>\xA0Can I see what an image carousel looks like?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-0" data-parent="#accordion-0"><!-- wp:c9-blocks/image-carousel {"instanceId":3,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n\t\t<div id="c9-image-carousel-indicator-3" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-3" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-3" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-3" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-3" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\t\n\t\t<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":0} -->\n\t\t<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-0" data-toggle="collapse" data-target="#c9-toggles-collapse5-0"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>5.\xA0</strong>Reading the whole thing: can we do it? No.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-0" data-parent="#accordion-0"><!-- wp:c9-blocks/image-carousel {"instanceId":4,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n\t\t<div id="c9-image-carousel-indicator-4" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-4" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-4" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-4" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-4" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-4" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t\t<!-- /wp:c9-blocks/toggles --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":13} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Brands","subheading":"2000 - 2010","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Our Brands</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel {"instanceId":1,"autoSlide":false} -->\n\t\t<div id="c9-carousel-indicator-1" class="c9-carousel carousel slide" data-ride="carousel" data-interval="false" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item active"><!-- wp:gallery {"ids":[7437,7438,7439,7440],"columns":4,"imageCrop":false} -->\n\t\t<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg" alt="" data-id="7437" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-8/" class="wp-image-7437"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg" alt="" data-id="7438" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-7/" class="wp-image-7438"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg" alt="" data-id="7439" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-6/" class="wp-image-7439"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg" alt="" data-id="7440" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-5/" class="wp-image-7440"/></figure></li></ul>\n\t\t<!-- /wp:gallery --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"><!-- wp:gallery {"ids":[7440,7439,7438,7437],"columns":4,"imageCrop":false} -->\n\t\t<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg" alt="" data-id="7440" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-5/" class="wp-image-7440"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg" alt="" data-id="7439" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-6/" class="wp-image-7439"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg" alt="" data-id="7438" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-7/" class="wp-image-7438"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg" alt="" data-id="7437" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-8/" class="wp-image-7437"/></figure></li></ul>\n\t\t<!-- /wp:gallery --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\t\n\t\t<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n\t\t<div class="c9-carousel-slide carousel-item"><!-- wp:gallery {"ids":[7440,7439,7438,7437],"columns":4,"imageCrop":false} -->\n\t\t<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg" alt="" data-id="7440" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-5/" class="wp-image-7440"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg" alt="" data-id="7439" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-6/" class="wp-image-7439"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg" alt="" data-id="7438" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-7/" class="wp-image-7438"/></figure></li><li class="blocks-gallery-item"><figure><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg" alt="" data-id="7437" data-link="http://gutenberg-stock-test.local/service-landing-page/logo-8/" class="wp-image-7437"/></figure></li></ul>\n\t\t<!-- /wp:gallery --></div>\n\t\t<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:spacer {"height":60} -->\n\t\t<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:spacer {"height":60} -->\n\t\t<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":4} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Step 1 - Intermediate Subheading</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t\t<!-- /wp:paragraph -->\n\t\t\n\t\t<!-- wp:list -->\n\t\t<ul><li>Download documents from link</li><li>Fill out and return documents to client</li><li>Review forms with internal team</li><li>Send superfluous status emails</li><li>Erroneaously misspell corporate words</li><li>Try not to die of eating too many hamburgers</li><li>It\'s harder than you think</li></ul>\n\t\t<!-- /wp:list --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":0,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg"],"id":[7416,7339,7337],"captionTitle":["Slide Caption","Chernobyl Burger","Chernobyl Oranges"],"captionContent":["Step 1 caption","I\'d eat it for sure.","Don\'t eat them."]} -->\n\t\t<div id="c9-image-carousel-indicator-0" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-0" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-0" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Step 1 caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Burger</h5><p>I\'d eat it for sure.</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Chernobyl Oranges</h5><p>Don\'t eat them.</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-0" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-0" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":5,"containerHue":"#e9e9e9"} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh;background-color:rgba(233,233,233,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":2,"layout":"c9-2-col-equal","containerWidth":"container-narrow"} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Step 2</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nocusing solely on the bottom lineanot echnology immersion along the information highway will close the door on your foot</p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":4} -->\n\t\t<h4>Step 3</h4>\n\t\t<!-- /wp:heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p>Nanotechnology immersion along the information highway will close the loop.&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn how to do the thing</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/cta {"type":"c9-sh","buttonText":"Watch Video","buttonAlignment":"right","buttonTextColor":"#00d084","buttonSize":"c9-button-size-large","buttonShape":"outline","buttonTarget":true,"ctaLayout":"three-quarters","ctaPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"ctaWidth":"container-fluid","ctaBackgroundColor":"#404041","ctaTextColor":"#eeeeee","align":"full"} -->\n\t\t<div style="background-color:rgba(64,64,65,1);text-align:right" class="c9-cta c9-block-cta container-fluid alignfull p-5"><div class="row"><div class="c9-cta-content col-12 col-md-9"><div class="c9-cta-text c9-sh" style="color:#eeeeee"><p>Watch our video walk through to get a guided tour.</p></div></div><div class="c9-cta-button col-12 col-md-3"><a href="#" target="_blank" rel="noopener noreferrer" class="wp-block-button__link c9-button-shape-outline c9-button-size-large" style="color:#00d084">Watch Video<span class="sr-only">(Link opens in new window)</span></a></div></div></div>\n\t\t<!-- /wp:c9-blocks/cta -->\n\t\t\n\t\t<!-- wp:spacer {"height":70} -->\n\t\t<div style="height:70px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Nine More Seasons\xA0","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Nine More Seasons\xA0</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":6,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:quote -->\n\t\t<blockquote class="wp-block-quote"><p>Nine more seasons until I get that dipping szechuan sauce! For ninety-seven more years, Morty! I want that mcnuggut sauce Morty! Guess Who!</p><cite>A Person Wrote this</cite></blockquote>\n\t\t<!-- /wp:quote -->\n\t\t\n\t\t<!-- wp:button {"align":"center"} -->\n\t\t<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Sign up now</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":1,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Office Interior","Library Interior","Office Chairs"],"captionContent":["Slide caption goes here","Subheading information would go here","Don\'t sit on them or you\'re fired"]} -->\n\t\t<div id="c9-image-carousel-indicator-1" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Office Interior</h5><p>Slide caption goes here</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Library Interior</h5><p>Subheading information would go here</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Office Chairs</h5><p>Don\'t sit on them or you\'re fired</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":7,"minScreenHeight":76} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:76vh"><!-- wp:c9-blocks/column-container {"align":"full","columns":1,"layout":"one-column","containerWidth":"container-fluid","containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/girls-in-bg-container-block.jpg","bgImgAttach":true,"overlayHue":"#313131","blendMode":"multiply","minScreenHeight":80,"focalPoint":{"x":0.5161290322580645,"y":1}} -->\n\t\t<div class="container-fluid alignfull c9-column-container c9-fixed c9-layout-columns-1 one-column c9-columns-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:51.61290322580645% 100%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/girls-in-bg-container-block.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.5);mix-blend-mode:multiply"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n\t\t<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"About Us","subheading":"Est. 2019","addSubheading":true,"tagLevel":3,"type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h3 class="c9-txl font-weight-light" style="color:#ffffff">About Us</h3><div class="c9-txl display-3"><small class="text-muted">&nbsp;Est. 2019</small></div></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":8,"containerHue":"#eeeeee","minScreenHeight":50,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:50vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center","minScreenHeight":10} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Our Mission</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n\t\t<!-- /wp:c9-blocks/heading --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:spacer -->\n\t\t<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Program Benefits","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Program Benefits</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":9,"rows":2,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":3,"columnsGap":1,"layout":"c9-3-col-equal","containerWidth":"container-narrow"} -->\n\t\t<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7520} -->\n\t\t<figure class="wp-block-image"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/three-girls-drinking-beers-1024x682.jpg" alt="" class="wp-image-7520"/></figure>\n\t\t<!-- /wp:image -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"More Drinking with Friends","tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">More Drinking with Friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Especially at happy hour","tagLevel":6,"type":"c9-sh subhead-h","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-sh font-weight-light">Especially at happy hour</h6></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p><a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn more</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7521} -->\n\t\t<figure class="wp-block-image"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stock-image-3-1024x682.jpg" alt="" class="wp-image-7521"/></figure>\n\t\t<!-- /wp:image -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"More Adventures","tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">More Adventures</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Especially with the dudes","tagLevel":6,"type":"c9-sh subhead-h","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-sh font-weight-light">Especially with the dudes</h6></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p><a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn more</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7522} -->\n\t\t<figure class="wp-block-image"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-blur-wide-1024x682.jpg" alt="" class="wp-image-7522"/></figure>\n\t\t<!-- /wp:image -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"More Drinking with Friends","tagLevel":5} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-h">More Drinking with Friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Free tickets to VIP shit you don\'t event want","tagLevel":6,"type":"c9-sh subhead-h","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-left"><h6 class="c9-sh font-weight-light">Free tickets to VIP shit you don\'t event want</h6></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:paragraph -->\n\t\t<p><a href="http://gutenberg-stock-test.local/service-landing-page/#">Learn more</a></p>\n\t\t<!-- /wp:paragraph --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container -->\n\t\t\n\t\t<!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n\t\t<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":2,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg"],"id":[7536,7535,7534]} -->\n\t\t<div id="c9-image-carousel-indicator-2" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-2" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-2" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-2" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-2" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n\t\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:separator -->\n\t\t<hr class="wp-block-separator"/>\n\t\t<!-- /wp:separator -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Customer Testimonials","textAlign":"center"} -->\n\t\t<div class="section-heading c9-heading text-center"><h1 class="c9-h">Customer Testimonials</h1></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:spacer {"height":57} -->\n\t\t<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":10} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7491,"align":"center"} -->\n\t\t<div class="wp-block-image"><figure class="aligncenter"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/gutenberg-responsive-theme-e1567053405233-1024x856.jpeg" alt="" class="wp-image-7491"/><figcaption>Girl waving at some strangers cause she\'s lost</figcaption></figure></div>\n\t\t<!-- /wp:image --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Meet Girl Who Lost","tagLevel":3,"displayLevel":"4","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h3 class="c9-h h4">Meet Girl Who Lost</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:quote -->\n\t\t<blockquote class="wp-block-quote"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p><cite>Girl who\'s trying to find her friends</cite></blockquote>\n\t\t<!-- /wp:quote -->\n\t\t\n\t\t<!-- wp:spacer {"height":31} -->\n\t\t<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"See how this girl found her friends","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">See how this girl found her friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:button {"align":"center"} -->\n\t\t<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Buy NOW</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":11} -->\n\t\t<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Meet Star Wars Girl","tagLevel":3,"displayLevel":"4","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h3 class="c9-h h4">Meet Star Wars Girl</h3></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:quote -->\n\t\t<blockquote class="wp-block-quote"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <a href="#">Dramatically maintain</a> clicks-and-mortar.</p><cite>Girl who\'s trying to find her friends</cite></blockquote>\n\t\t<!-- /wp:quote -->\n\t\t\n\t\t<!-- wp:spacer {"height":31} -->\n\t\t<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>\n\t\t<!-- /wp:spacer -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"See how this girl found her friends","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n\t\t<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">See how this girl found her friends</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:button {"align":"center"} -->\n\t\t<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">SEE HER STORY</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"id":7496,"align":"center"} -->\n\t\t<div class="wp-block-image"><figure class="aligncenter"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/gutenberg-testimonial-1024x1024.jpeg" alt="girl in tesitmonial from WordPress Gutenberg Block" class="wp-image-7496"/></figure></div>\n\t\t<!-- /wp:image --></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->\n\t\t\n\t\t<!-- wp:c9-blocks/grid {"instanceId":12,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/crowd-dancing.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":10,"blendMode":"multiply","minScreenHeight":70,"focalPoint":{"x":0.2350230414746544,"y":0.4375}} -->\n\t\t<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:70vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:23.502304147465438% 43.75%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/crowd-dancing.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,1);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n\t\t<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Ready to sign up?","tagLevel":5,"displayLevel":"1","type":"c9-txl display-","textColor":"#ffffff"} -->\n\t\t<div class="section-heading c9-heading text-left"><h5 class="c9-txl" style="color:#ffffff">Ready to sign up?</h5></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:c9-blocks/heading {"heading":"Free for one month","tagLevel":4,"displayLevel":"4","textColor":"#ffffff","weight":"light","overrideStyle":true} -->\n\t\t<div class="section-heading c9-heading text-left"><h4 class="c9-h h4 font-weight-light" style="color:#ffffff">Free for one month</h4></div>\n\t\t<!-- /wp:c9-blocks/heading -->\n\t\t\n\t\t<!-- wp:button {"customTextColor":"#ffffff","className":"is-style-outline"} -->\n\t\t<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color" href="#" style="color:#ffffff">Get Started</a></div>\n\t\t<!-- /wp:button --></div></div>\n\t\t<!-- /wp:c9-blocks/column -->\n\t\t\n\t\t<!-- wp:c9-blocks/column -->\n\t\t<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n\t\t<!-- /wp:c9-blocks/column --></div></div>\n\t\t<!-- /wp:c9-blocks/column-container --></div>\n\t\t<!-- /wp:c9-blocks/grid -->'
	},
	sections: {
		faqTogglesWithHeading: '<!-- wp:c9-blocks/grid {"instanceId":23,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"FAQ Toggles","subheading":"with image carousels","addSubheading":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h">FAQ Toggles</h1><div class="c9-h h1"><small class="text-muted">&nbsp;with image carousels</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":3,"className":"is-style-default"} -->\n<div class="c9-toggles is-style-default accordion" id="accordion-3"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-3" data-toggle="collapse" data-target="#c9-toggles-collapse1-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>1. </strong>How long is the consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-3" data-toggle="collapse" data-target="#c9-toggles-collapse2-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>2.</strong> Do you have to do a consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-3" data-toggle="collapse" data-target="#c9-toggles-collapse3-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>3.</strong> Do you work with not for profits or non-profits?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-3" data-toggle="collapse" data-target="#c9-toggles-collapse4-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>4.</strong> Can I see what an image carousel looks like?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-3" data-parent="#accordion-3"><!-- wp:c9-blocks/image-carousel {"instanceId":9,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n<div id="c9-image-carousel-indicator-9" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-9" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-9" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-9" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-9" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-9" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-3" data-toggle="collapse" data-target="#c9-toggles-collapse5-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>5. </strong>Reading the whole thing: can we do it? No.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-3" data-parent="#accordion-3"><!-- wp:c9-blocks/image-carousel {"instanceId":10,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n<div id="c9-image-carousel-indicator-10" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-10" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-10" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-10" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle --></div>\n<!-- /wp:c9-blocks/toggles --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		headerWith3Modules: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","containerHue":"#313131","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":90} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":155} -->\n<div style="height:155px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering","subheading":"Landing Page Template","addSubheading":true,"type":"c9-txl display-","textColor":"#eeeeee","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#eeeeee">Service Offering</h1><div class="c9-txl display-1"><small class="text-muted">&nbsp;Landing Page Template</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"center","overlayHue":"#eeeeee","overlayOpacity":10,"blendMode":"normal","minScreenHeight":1,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal" style="min-height:1vh"><div class="c9-overlay-container" style="background-color:rgba(238,238,238,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 1</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 2</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 3</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		missionStatement: '<!-- wp:c9-blocks/grid {"instanceId":32,"containerHue":"#eeeeee","minScreenHeight":50,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:50vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center","minScreenHeight":10} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Our Mission</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:separator -->\n<hr class="wp-block-separator"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"align":"center","className":"is-style-default"} -->\n<div class="wp-block-button aligncenter is-style-default"><a class="wp-block-button__link" href="#">Our History</a></div>\n<!-- /wp:button -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		serviceOfferingHeader: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":80} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerImgURL":null,"focalPoint":{"x":0.511520737327189,"y":0.625}} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering Landing Page","subheading":"subheading","addSubheading":true,"textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h font-weight-light" style="color:#ffffff">Service Offering Landing Page</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"layout":"c9-3-col-equal","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerHue":"#ffffff"} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 1","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 1</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. </p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 2","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 2</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved X.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 3","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 3</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->',
		videoBackgroundCallToAction: '"<!-- wp:c9-blocks/grid {"instanceId":19,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":60,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4"} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video" style="min-height:60vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-19" class="c9-video-custom" playsinline autoplay muted loop style="min-height:60vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4" type="video/mp4"/></video></div></div><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Schedule Consultation","tagLevel":3,"displayLevel":"2","textColor":"#ffffff","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h h2" style="color:#ffffff">Schedule Consultation</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"One of our professionals will walk you through the process","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h4 class="c9-sh font-weight-light" style="color:#ffffff">One of our professionals will walk you through the process</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":42} -->\n<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"textColor":"vivid-green-cyan","className":"is-style-outline"} -->\n<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color has-vivid-green-cyan-color" href="#">Schedule Now</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"'
	}
};

/* harmony default export */ __webpack_exports__["a"] = (templateMarkups);

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 6:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 5),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 26),
    objectToString = __webpack_require__(/*! ./_objectToString */ 27);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 7:
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFhNDUyNDg5NWY4MDBmY2IwYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcHJlcGFyZS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXBkYXRlLWNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3Jlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzcz80MDNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2M5LWZlYXRoZXItbG9nby1ncmF5LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ29tcG91bmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYnVyci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVdvcmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVXb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3VwcGVyRmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2xheW91dC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzcz8wZjQ1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvdGVtcGxhdGVzLW1hcmt1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyJdLCJuYW1lcyI6WyJwcmVwYXJlUXVlcnkiLCJ0eXBlIiwiZGF0YSIsImFkZGl0aW9uYWxEYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJlbmNvZGUiLCJxdWVyeSIsImFwaUZldGNoIiwicmVxdWVzdCIsInNldFR3aXR0ZXJGZWVkIiwiZmVlZCIsInNldFR3aXR0ZXJQcm9maWxlIiwicHJvZmlsZSIsInVwZGF0ZUNhdGVnb3J5Iiwid3AiLCJibG9ja3MiLCJjb21wb25lbnRzIiwiRyIsIlBhdGgiLCJTVkciLCJsb2dvIiwiaWNvbiIsInVucmVnaXN0ZXJCbG9ja1R5cGUiLCJsb2FkQmxvY2tzRWRpdG9yIiwid2luZG93IiwiX3dwTG9hZEJsb2NrRWRpdG9yIiwiX3dwTG9hZEd1dGVuYmVyZ0VkaXRvciIsInRoZW4iLCJhZGRGaWx0ZXIiLCJob29rcyIsImZvcm1hdENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInJlc3VsdCIsInJlcGxhY2UiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsInNlbGVjdG9ycyIsImFjdGlvbnMiLCJjb250cm9scyIsInJlc29sdmVycyIsInN0YXRlIiwiZmVlZHMiLCJwcm9maWxlcyIsImFjdGlvbiIsImdldFR3aXR0ZXJGZWVkIiwiZ2V0VHdpdHRlclByb2ZpbGUiLCJBUElfRkVUQ0giLCJmZXRjaGVkRGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhdGgiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbnMiLCJlZGl0UG9zdCIsIlBsdWdpblNpZGViYXIiLCJQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIiwiRnJhZ21lbnQiLCJlbGVtZW50IiwiX18iLCJpMThuIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiRGFzaGljb24iLCJDOSIsImFyZ3VtZW50cyIsImlzTW9kYWxPcGVuIiwid2lkdGgiLCJtYXJnaW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsIk1vZGFsIiwiVGFiUGFuZWwiLCJUb29sdGlwIiwiSWNvbiIsImNvbXBvc2UiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY3JlYXRlQmxvY2siLCJyYXdIYW5kbGVyIiwiVGVtcGxhdGVzTW9kYWwiLCJnZXRSZXVzYWJsZUJsb2NrcyIsImJpbmQiLCJyZXVzYWJsZXMiLCJjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwiLCJwcm9wcyIsInBvc3RUeXBlIiwicmVzdF9iYXNlIiwibWFwIiwibmFtZSIsIml0ZW0iLCJ0aXRsZSIsInJhdyIsImNvbnRlbnQiLCJIVE1MIiwibW9kZSIsInRlbXBsYXRlT2JqIiwiYmxvY2tPYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlzIiwia2V5IiwicmVzZXRCbG9ja3MiLCJzZWN0aW9ucyIsInRlc3QiLCJhbGlnbiIsInRleHQiLCJtYXJrdXBUb0Jsb2NrIiwidGVtcGxhdGVNYXJrdXBzIiwibGF5b3V0cyIsImRlZmF1bHQiLCJoZXJvIiwiY29sdW1ucyIsImxheW91dCIsImZlYXR1cmVkIiwiaGVpZ2h0IiwibWVkaWFQb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwibmVzdGVkIiwiaW5pdGlhbCIsInRhYiIsInN0YXJ0Q2FzZSIsImsiLCJvYmoiLCJUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QiLCJzZWxlY3QiLCJjbGllbnRJZCIsImdldEJsb2NrIiwiYmxvY2siLCJkaXNwYXRjaCIsImluc2VydEJsb2NrcyIsIkxheW91dEJ1dHRvbiIsImxhYmVsIiwiU2VjdGlvbkJ1dHRvbiIsInNlY3Rpb24iLCJ0ZXN0QmxvY2tzIiwibWFya2Rvd24iLCJ0ZXN0QmciLCJyZXN0YXVyYW50TWVudUxhbmRpbmdQYWdlIiwic2VydmljZUxhbmRpbmdQYWdlIiwiZmFxVG9nZ2xlc1dpdGhIZWFkaW5nIiwiaGVhZGVyV2l0aDNNb2R1bGVzIiwibWlzc2lvblN0YXRlbWVudCIsInNlcnZpY2VPZmZlcmluZ0hlYWRlciIsInZpZGVvQmFja2dyb3VuZENhbGxUb0FjdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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Q0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FB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YmxvY2tzLnVwZGF0ZS1jYXRlZ29yeS5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGFhNDUyNDg5NWY4MDBmY2IwYmQiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZVF1ZXJ5KCB0eXBlLCBkYXRhICkge1xuICAgIGNvbnN0IGFkZGl0aW9uYWxEYXRhID0gcXMuc3RyaW5naWZ5KCBkYXRhLCB7IGVuY29kZTogZmFsc2UgfSApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYC9jOS1ibG9ja3MvZ2V0X3R3aXR0ZXJfJHsgdHlwZSB9LyR7IGFkZGl0aW9uYWxEYXRhID8gYD8keyBhZGRpdGlvbmFsRGF0YSB9YCA6ICcnIH1gO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3ByZXBhcmUtcXVlcnkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsLmFzc2lnbihcbiAgICB7XG4gICAgICAgICdkZWZhdWx0JzogRm9ybWF0LlJGQzM5ODYsXG4gICAgICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgRm9ybWF0XG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgZnVuY3Rpb24gYXBpRmV0Y2gocmVxdWVzdCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiQVBJX0ZFVENIXCIsXG5cdFx0cmVxdWVzdFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHdpdHRlckZlZWQocXVlcnksIGZlZWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBcIlNFVF9UV0lUVEVSX0ZFRURcIixcblx0XHRxdWVyeSxcblx0XHRmZWVkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUd2l0dGVyUHJvZmlsZShxdWVyeSwgcHJvZmlsZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiU0VUX1RXSVRURVJfUFJPRklMRVwiLFxuXHRcdHF1ZXJ5LFxuXHRcdHByb2ZpbGVcblx0fTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9hY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXG5cdFx0ZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gc3RyO1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3ltYm9sJykge1xuICAgICAgICBzdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxudmFyIGNvbXBhY3QgPSBmdW5jdGlvbiBjb21wYWN0KHZhbHVlKSB7XG4gICAgdmFyIHF1ZXVlID0gW3sgb2JqOiB7IG86IHZhbHVlIH0sIHByb3A6ICdvJyB9XTtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsICYmIHJlZnMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyBvYmo6IG9iaiwgcHJvcDoga2V5IH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFjdFF1ZXVlKHF1ZXVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBpc1JlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgdXBkYXRlQ2F0ZWdvcnkgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgRywgUGF0aCwgU1ZHIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIEljb25cbiAqL1xuXG5jb25zdCBsb2dvID0gKFxuXHQ8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIzNC45MiAxNzQuNjVcIj5cblx0XHQ8ZGVmcz5cblx0XHRcdDxzdHlsZT57YC5jbHMtMXtmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9YH08L3N0eWxlPlxuXHRcdFx0PGxpbmVhckdyYWRpZW50XG5cdFx0XHRcdGlkPVwibGluZWFyLWdyYWRpZW50XCJcblx0XHRcdFx0eDE9XCI3OS4xMlwiXG5cdFx0XHRcdHkxPVwiMjMuODFcIlxuXHRcdFx0XHR4Mj1cIjE2Ni40XCJcblx0XHRcdFx0eTI9XCIxNTguMjJcIlxuXHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPVwiIzYxY2FlNVwiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMTJcIiBzdG9wQ29sb3I9XCIjNjRjNmUxXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3BDb2xvcj1cIiM2ZGJhZDNcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjM5XCIgc3RvcENvbG9yPVwiIzdiYTdiZFwiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuNTRcIiBzdG9wQ29sb3I9XCIjOGY4YjlmXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC42OFwiIHN0b3BDb2xvcj1cIiNhOTY4NzdcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjgzXCIgc3RvcENvbG9yPVwiI2M5M2Q0OFwiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuOTJcIiBzdG9wQ29sb3I9XCIjZGYxZjI2XCIgLz5cblx0XHRcdDwvbGluZWFyR3JhZGllbnQ+XG5cdFx0PC9kZWZzPlxuXHRcdDx0aXRsZT5jOS1mZWF0aGVyLWxvZ28taWNvbjwvdGl0bGU+XG5cdFx0PEcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxuXHRcdFx0PEcgaWQ9XCJsb2dvX2dyYWRpZW50XCIgZGF0YS1uYW1lPVwibG9nbyBncmFkaWVudFwiPlxuXHRcdFx0XHQ8UGF0aFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNscy0xXCJcblx0XHRcdFx0XHRkPVwiTTQ3LDEzOC4wNkM0MC4zNywxMjMuOSw0MC44NCwzNi40MSw4My41NCwyMi40YzAsMC0xNS42NCw3LjI5LTEwLjEyLDI3LjQ1LDcuMi0xMy42OCwyMC4zMy0zNy4yMiw1Ny43Ny00My40NiwyNC0yLjg5LTEzLjE1LDEuMS02LDIyLjIyLjI0LTguODgsNTkuNDEtNDUsMTA4LTE5LjgxQzI0Ni40MywxMDQuNjksMTc3LDExMC4wNiwxNzcsMTEwLjA2aDBzMTQuOTUsMi4zOCwyMy44My0uNWMtOS4xMiwzOS44NC02My4xMyw0Mi4xNC02My4xMyw0Mi4xNHMyMC41MSw1LjExLDM0LjkyLDIuNDdjLTQ5LjQ1LDMyLjQtMTE2Ljg2LTQuODYtMTE2Ljg2LTQuODYtLjI3LjA4LS44My0uNDMtMS41OC0xLjMxbDExMi03OGEyNS4wOSwyNS4wOSwwLDEsMC02LTYuMjdMNzkuOSwxMjAuNGwtMi4yMy0zLjI1LTMwLjU5LDIxTTE4My43MiwzMy43NGExNi4yNSwxNi4yNSwwLDEsMS0xOC44NCwxMy4xNywxNi4yNCwxNi4yNCwwLDAsMSwxOC44NC0xMy4xN1pNNTQuMTcsMTQ4bC0uMzktLjU1LjQzLjUyLDAsMFptLTM0LjQzLTYuNTUsOC40NS01LjUsNS41LDguNDQtOC40NCw1LjUtNS41MS04LjQ0Wm0tNC4zNywxNC44Ny01LjUtOC40NCw4LjQ1LTUuNSw1LjUsOC40NC04LjQ1LDUuNVpNNS41LDE2Mi43OSwwLDE1NC4zNGw4LjQ1LTUuNSw1LjUsOC40NEw1LjUsMTYyLjc5Wm00Ni44Ni0xMy44N0wxMy40MSwxNzQuNjUsNi40NiwxNjQuMzEsNDUsMTM5LjNsNy4zMyw5LjYyWlwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0c+XG5cdFx0PC9HPlxuXHQ8L1NWRz5cbik7XG5cbmlmICh1cGRhdGVDYXRlZ29yeSkge1xuXHR1cGRhdGVDYXRlZ29yeShcImM5LWJsb2Nrc1wiLCB7IGljb246IGxvZ28gfSk7XG59XG5cbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L2RlcmVnaXN0ZXItYmxvY2tzXCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzXCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1zdHlsZXNcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0b3Jlc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91cGRhdGUtY2F0ZWdvcnkuanMiLCJjb25zdCB7IHVucmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxubGV0IGxvYWRCbG9ja3NFZGl0b3IgPSBudWxsO1xuXG5pZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkQmxvY2tFZGl0b3IpIHtcblx0Ly8gVXNpbmcgR3V0ZW5iZXJnIHBsdWdpblxuXHRsb2FkQmxvY2tzRWRpdG9yID0gd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcjtcbn0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yKSB7XG5cdC8vIFVzaW5nIFdQIGNvcmUgR3V0ZW5iZXJnXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEd1dGVuYmVyZ0VkaXRvcjtcbn1cblxuaWYgKGxvYWRCbG9ja3NFZGl0b3IpIHtcblx0bG9hZEJsb2Nrc0VkaXRvci50aGVuKCgpID0+IHtcblx0XHR1bnJlZ2lzdGVyQmxvY2tUeXBlKFwiY29yZS92ZXJzZVwiKTtcblx0XHQvLyB1bnJlZ2lzdGVyQmxvY2tUeXBlKFwiY29yZS9jb2x1bW5zXCIpO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJjb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XG5cbmZ1bmN0aW9uIGZvcm1hdENsYXNzTmFtZShjbGFzc05hbWUpIHtcblx0Y29uc3QgcmVzdWx0ID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJ3cC1ibG9jay1jOS1ibG9ja3NcIiwgXCJjOVwiKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuYWRkRmlsdGVyKFxuXHRcImM5LWJsb2Nrcy5lZGl0b3IuY2xhc3NOYW1lXCIsXG5cdFwiYzktYmxvY2tzL2Zvcm1hdC1jbGFzc25hbWVcIixcblx0Zm9ybWF0Q2xhc3NOYW1lXG4pO1xuYWRkRmlsdGVyKFxuXHRcImM5LWJsb2Nrcy5ibG9ja3MuY2xhc3NOYW1lXCIsXG5cdFwiYzktYmxvY2tzL2Zvcm1hdC1jbGFzc25hbWVcIixcblx0Zm9ybWF0Q2xhc3NOYW1lXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwiLy8gY29uc3QgeyByZWdpc3RlckJsb2NrU3R5bGUgfSA9IHdwLmJsb2NrcztcblxubGV0IGxvYWRCbG9ja3NFZGl0b3IgPSBudWxsO1xuXG5pZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkQmxvY2tFZGl0b3IpIHtcblx0Ly8gVXNpbmcgR3V0ZW5iZXJnIHBsdWdpblxuXHRsb2FkQmxvY2tzRWRpdG9yID0gd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcjtcbn0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yKSB7XG5cdC8vIFVzaW5nIFdQIGNvcmUgR3V0ZW5iZXJnXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEd1dGVuYmVyZ0VkaXRvcjtcbn1cblxuaWYgKGxvYWRCbG9ja3NFZGl0b3IpIHtcblx0bG9hZEJsb2Nrc0VkaXRvci50aGVuKCgpID0+IHtcblx0XHQvLyByZWdpc3RlckJsb2NrU3R5bGUoXCJjb3JlL2J1dHRvblwiLCB7XG5cdFx0Ly8gXHRuYW1lOiBcImN1c3RvbS1idXR0b24tc3R5bGVcIixcblx0XHQvLyBcdGxhYmVsOiBcIk15IEJ1dHRvbiBTdHlsZVwiXG5cdFx0Ly8gfSk7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1zdHlsZXMuanMiLCJpbXBvcnQgXCIuLi9zdG9yZXMvdHdpdHRlclwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1zdG9yZXMuanMiLCJpbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbnRyb2xzIGZyb20gXCIuL2NvbnRyb2xzXCI7XG5pbXBvcnQgKiBhcyByZXNvbHZlcnMgZnJvbSBcIi4vcmVzb2x2ZXJzXCI7XG5cbmNvbnN0IHsgcmVnaXN0ZXJTdG9yZSB9ID0gd3AuZGF0YTtcblxucmVnaXN0ZXJTdG9yZShcImM5LWJsb2Nrcy90d2l0dGVyXCIsIHtcblx0cmVkdWNlcixcblx0c2VsZWN0b3JzLFxuXHRhY3Rpb25zLFxuXHRjb250cm9scyxcblx0cmVzb2x2ZXJzXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsImZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IGZlZWRzOiB7fSwgcHJvZmlsZXM6IHt9IH0sIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBcIlNFVF9UV0lUVEVSX0ZFRURcIjpcblx0XHRcdGlmICghc3RhdGUuZmVlZHNbYWN0aW9uLnF1ZXJ5XSAmJiBhY3Rpb24uZmVlZCkge1xuXHRcdFx0XHRzdGF0ZS5mZWVkc1thY3Rpb24ucXVlcnldID0gYWN0aW9uLmZlZWQ7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiU0VUX1RXSVRURVJfUFJPRklMRVwiOlxuXHRcdFx0aWYgKCFzdGF0ZS5wcm9maWxlc1thY3Rpb24ucXVlcnldICYmIGFjdGlvbi5wcm9maWxlKSB7XG5cdFx0XHRcdHN0YXRlLnByb2ZpbGVzW2FjdGlvbi5xdWVyeV0gPSBhY3Rpb24ucHJvZmlsZTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdC8vIG5vIGRlZmF1bHRcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9yZWR1Y2VyLmpzIiwiaW1wb3J0IHByZXBhcmVRdWVyeSBmcm9tIFwiLi9wcmVwYXJlLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUd2l0dGVyRmVlZChzdGF0ZSwgZGF0YSkge1xuXHRjb25zdCBxdWVyeSA9IHByZXBhcmVRdWVyeShcImZlZWRcIiwgZGF0YSk7XG5cblx0cmV0dXJuIHN0YXRlLmZlZWRzW3F1ZXJ5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR3aXR0ZXJQcm9maWxlKHN0YXRlLCBkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwicHJvZmlsZVwiLCBkYXRhKTtcblxuXHRyZXR1cm4gc3RhdGUucHJvZmlsZXNbcXVlcnldO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3NlbGVjdG9ycy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgcHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIHB1c2hUb0FycmF5ID0gZnVuY3Rpb24gKGFyciwgdmFsdWVPckFycmF5KSB7XG4gICAgcHVzaC5hcHBseShhcnIsIGlzQXJyYXkodmFsdWVPckFycmF5KSA/IHZhbHVlT3JBcnJheSA6IFt2YWx1ZU9yQXJyYXldKTtcbn07XG5cbnZhciB0b0lTTyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nO1xuXG52YXIgZGVmYXVsdEZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhZGRRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZW5jb2RlOiB0cnVlLFxuICAgIGVuY29kZXI6IHV0aWxzLmVuY29kZSxcbiAgICBlbmNvZGVWYWx1ZXNPbmx5OiBmYWxzZSxcbiAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgZm9ybWF0dGVyOiBmb3JtYXRzLmZvcm1hdHRlcnNbZGVmYXVsdEZvcm1hdF0sXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGluZGljZXM6IGZhbHNlLFxuICAgIHNlcmlhbGl6ZURhdGU6IGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGUoZGF0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gdG9JU08uY2FsbChkYXRlKTtcbiAgICB9LFxuICAgIHNraXBOdWxsczogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSA9IGZ1bmN0aW9uIGlzTm9uTnVsbGlzaFByaW1pdGl2ZSh2KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ3N5bWJvbCdcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdiaWdpbnQnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhbGlkLXR5cGVvZlxufTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSggLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXRcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpIDogcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9uTnVsbGlzaFByaW1pdGl2ZShvYmopIHx8IHV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZSA9IGVuY29kZVZhbHVlc09ubHkgPyBwcmVmaXggOiBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAnPScgKyBmb3JtYXR0ZXIoZW5jb2RlcihvYmosIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChpc0FycmF5KGZpbHRlcikpIHtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIG9iaktleXMgPSBzb3J0ID8ga2V5cy5zb3J0KHNvcnQpIDoga2V5cztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKHNraXBOdWxscyAmJiBvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpIDogcHJlZml4LFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgICAgIGNoYXJzZXRcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodmFsdWVzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ICsgKGFsbG93RG90cyA/ICcuJyArIGtleSA6ICdbJyArIGtleSArICddJyksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxudmFyIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmVuY29kZXIgIT09IG51bGwgJiYgb3B0cy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBjaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8IGRlZmF1bHRzLmNoYXJzZXQ7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZvcm1hdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKCFoYXMuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBmb3JtYXQgb3B0aW9uIHByb3ZpZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1hdCA9IG9wdHMuZm9ybWF0O1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cbiAgICB2YXIgZmlsdGVyID0gZGVmYXVsdHMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5maWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgaXNBcnJheShvcHRzLmZpbHRlcikpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0cy5maWx0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUXVlcnlQcmVmaXg6IHR5cGVvZiBvcHRzLmFkZFF1ZXJ5UHJlZml4ID09PSAnYm9vbGVhbicgPyBvcHRzLmFkZFF1ZXJ5UHJlZml4IDogZGVmYXVsdHMuYWRkUXVlcnlQcmVmaXgsXG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0cy5kZWxpbWl0ZXIsXG4gICAgICAgIGVuY29kZTogdHlwZW9mIG9wdHMuZW5jb2RlID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZSA6IGRlZmF1bHRzLmVuY29kZSxcbiAgICAgICAgZW5jb2RlcjogdHlwZW9mIG9wdHMuZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZW5jb2RlciA6IGRlZmF1bHRzLmVuY29kZXIsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHR5cGVvZiBvcHRzLmVuY29kZVZhbHVlc09ubHkgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlVmFsdWVzT25seSA6IGRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2tpcE51bGxzLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGUgPyBvcHRpb25zLmVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQsXG4gICAgICAgICAgICBvcHRpb25zLmFsbG93RG90cyxcbiAgICAgICAgICAgIG9wdGlvbnMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgY29tbWE6IGZhbHNlLFxuICAgIGRlY29kZXI6IHV0aWxzLmRlY29kZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBpZ25vcmVRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiBmYWxzZSxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBwYXJzZUFycmF5czogdHJ1ZSxcbiAgICBwbGFpbk9iamVjdHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpbnRlcnByZXROdW1lcmljRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIyhcXGQrKTsvZywgZnVuY3Rpb24gKCQwLCBudW1iZXJTdHIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobnVtYmVyU3RyLCAxMCkpO1xuICAgIH0pO1xufTtcblxuLy8gVGhpcyBpcyB3aGF0IGJyb3dzZXJzIHdpbGwgc3VibWl0IHdoZW4gdGhlIOKckyBjaGFyYWN0ZXIgb2NjdXJzIGluIGFuXG4vLyBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQgYm9keSBhbmQgdGhlIGVuY29kaW5nIG9mIHRoZSBwYWdlIGNvbnRhaW5pbmdcbi8vIHRoZSBmb3JtIGlzIGlzby04ODU5LTEsIG9yIHdoZW4gdGhlIHN1Ym1pdHRlZCBmb3JtIGhhcyBhbiBhY2NlcHQtY2hhcnNldFxuLy8gYXR0cmlidXRlIG9mIGlzby04ODU5LTEuIFByZXN1bWFibHkgYWxzbyB3aXRoIG90aGVyIGNoYXJzZXRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbi8vIHRoZSDinJMgY2hhcmFjdGVyLCBzdWNoIGFzIHVzLWFzY2lpLlxudmFyIGlzb1NlbnRpbmVsID0gJ3V0Zjg9JTI2JTIzMTAwMDMlM0InOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JylcblxuLy8gVGhlc2UgYXJlIHRoZSBwZXJjZW50LWVuY29kZWQgdXRmLTggb2N0ZXRzIHJlcHJlc2VudGluZyBhIGNoZWNrbWFyaywgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IGFjdHVhbGx5IGlzIHV0Zi04IGVuY29kZWQuXG52YXIgY2hhcnNldFNlbnRpbmVsID0gJ3V0Zjg9JUUyJTlDJTkzJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuXG52YXIgcGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nVmFsdWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgY2xlYW5TdHIgPSBvcHRpb25zLmlnbm9yZVF1ZXJ5UHJlZml4ID8gc3RyLnJlcGxhY2UoL15cXD8vLCAnJykgOiBzdHI7XG4gICAgdmFyIGxpbWl0ID0gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0O1xuICAgIHZhciBwYXJ0cyA9IGNsZWFuU3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBsaW1pdCk7XG4gICAgdmFyIHNraXBJbmRleCA9IC0xOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSB1dGY4IHNlbnRpbmVsIHdhcyBmb3VuZFxuICAgIHZhciBpO1xuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRpb25zLmNoYXJzZXQ7XG4gICAgaWYgKG9wdGlvbnMuY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmluZGV4T2YoJ3V0Zjg9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbaV0gPT09IGNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldID09PSBpc29TZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBza2lwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGkgPSBwYXJ0cy5sZW5ndGg7IC8vIFRoZSBlc2xpbnQgc2V0dGluZ3MgZG8gbm90IGFsbG93IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpID09PSBza2lwSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgICAgdmFyIGJyYWNrZXRFcXVhbHNQb3MgPSBwYXJ0LmluZGV4T2YoJ109Jyk7XG4gICAgICAgIHZhciBwb3MgPSBicmFja2V0RXF1YWxzUG9zID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogYnJhY2tldEVxdWFsc1BvcyArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPyBudWxsIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLCBwb3MpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKHBvcyArIDEpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgJiYgY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICB2YWwgPSBpbnRlcnByZXROdW1lcmljRW50aXRpZXModmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5jb21tYSAmJiB2YWwuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zcGxpdCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB1dGlscy5jb21iaW5lKG9ialtrZXldLCB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgbGVhZiA9IHZhbDtcblxuICAgIGZvciAodmFyIGkgPSBjaGFpbi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgb2JqO1xuICAgICAgICB2YXIgcm9vdCA9IGNoYWluW2ldO1xuXG4gICAgICAgIGlmIChyb290ID09PSAnW10nICYmIG9wdGlvbnMucGFyc2VBcnJheXMpIHtcbiAgICAgICAgICAgIG9iaiA9IFtdLmNvbmNhdChsZWFmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgICAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3QuY2hhckF0KDApID09PSAnWycgJiYgcm9vdC5jaGFyQXQocm9vdC5sZW5ndGggLSAxKSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCAtMSkgOiByb290O1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFyc2VBcnJheXMgJiYgY2xlYW5Sb290ID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9iaiA9IHsgMDogbGVhZiB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAhaXNOYU4oaW5kZXgpXG4gICAgICAgICAgICAgICAgJiYgcm9vdCAhPT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgU3RyaW5nKGluZGV4KSA9PT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgaW5kZXggPj0gMFxuICAgICAgICAgICAgICAgICYmIChvcHRpb25zLnBhcnNlQXJyYXlzICYmIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgICAgIG9ialtpbmRleF0gPSBsZWFmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGxlYWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZWFmID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBsZWFmO1xufTtcblxudmFyIHBhcnNlS2V5cyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdLZXlzKGdpdmVuS2V5LCB2YWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWdpdmVuS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZG90IG5vdGF0aW9uIHRvIGJyYWNrZXQgbm90YXRpb25cbiAgICB2YXIga2V5ID0gb3B0aW9ucy5hbGxvd0RvdHMgPyBnaXZlbktleS5yZXBsYWNlKC9cXC4oW14uW10rKS9nLCAnWyQxXScpIDogZ2l2ZW5LZXk7XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgYnJhY2tldHMgPSAvKFxcW1teW1xcXV0qXSkvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15bXFxdXSpdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gb3B0aW9ucy5kZXB0aCA+IDAgJiYgYnJhY2tldHMuZXhlYyhrZXkpO1xuICAgIHZhciBwYXJlbnQgPSBzZWdtZW50ID8ga2V5LnNsaWNlKDAsIHNlZ21lbnQuaW5kZXgpIDoga2V5O1xuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgdXNpbmcgcGxhaW4gb2JqZWN0cywgb3B0aW9uYWxseSBwcmVmaXgga2V5cyB0aGF0IHdvdWxkIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKG9wdGlvbnMuZGVwdGggPiAwICYmIChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc2VnbWVudFsxXS5zbGljZSgxLCAtMSkpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cbnZhciBub3JtYWxpemVQYXJzZU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRzLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBjaGFyc2V0ID0gdHlwZW9mIG9wdHMuY2hhcnNldCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5jaGFyc2V0IDogb3B0cy5jaGFyc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgYWxsb3dQcm90b3R5cGVzOiB0eXBlb2Ygb3B0cy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdHMuYWxsb3dQcm90b3R5cGVzIDogZGVmYXVsdHMuYWxsb3dQcm90b3R5cGVzLFxuICAgICAgICBhcnJheUxpbWl0OiB0eXBlb2Ygb3B0cy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgY29tbWE6IHR5cGVvZiBvcHRzLmNvbW1hID09PSAnYm9vbGVhbicgPyBvcHRzLmNvbW1hIDogZGVmYXVsdHMuY29tbWEsXG4gICAgICAgIGRlY29kZXI6IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0cy5kZWxpbWl0ZXIpID8gb3B0cy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiwgbm8tZXh0cmEtcGFyZW5zXG4gICAgICAgIGRlcHRoOiAodHlwZW9mIG9wdHMuZGVwdGggPT09ICdudW1iZXInIHx8IG9wdHMuZGVwdGggPT09IGZhbHNlKSA/ICtvcHRzLmRlcHRoIDogZGVmYXVsdHMuZGVwdGgsXG4gICAgICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBvcHRzLmlnbm9yZVF1ZXJ5UHJlZml4ID09PSB0cnVlLFxuICAgICAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IHR5cGVvZiBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgOiBkZWZhdWx0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMsXG4gICAgICAgIHBhcmFtZXRlckxpbWl0OiB0eXBlb2Ygb3B0cy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQsXG4gICAgICAgIHBhcnNlQXJyYXlzOiBvcHRzLnBhcnNlQXJyYXlzICE9PSBmYWxzZSxcbiAgICAgICAgcGxhaW5PYmplY3RzOiB0eXBlb2Ygb3B0cy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdHMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzLFxuICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHR5cGVvZiBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gdXRpbHMubWVyZ2Uob2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5jb21wYWN0KG9iaik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgeyBhcGlGZXRjaCB9ID0gd3A7XG5cbmV4cG9ydCBmdW5jdGlvbiBBUElfRkVUQ0goeyByZXF1ZXN0IH0pIHtcblx0cmV0dXJuIGFwaUZldGNoKHJlcXVlc3QpLnRoZW4oZmV0Y2hlZERhdGEgPT4ge1xuXHRcdGlmIChmZXRjaGVkRGF0YSAmJiBmZXRjaGVkRGF0YS5zdWNjZXNzICYmIGZldGNoZWREYXRhLnJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gZmV0Y2hlZERhdGEucmVzcG9uc2U7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCBwcmVwYXJlUXVlcnkgZnJvbSBcIi4vcHJlcGFyZS1xdWVyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldFR3aXR0ZXJGZWVkKGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJmZWVkXCIsIGRhdGEpO1xuXHRjb25zdCBmZWVkID0geWllbGQgYWN0aW9ucy5hcGlGZXRjaCh7IHBhdGg6IHF1ZXJ5IH0pO1xuXG5cdHJldHVybiBhY3Rpb25zLnNldFR3aXR0ZXJGZWVkKHF1ZXJ5LCBmZWVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRUd2l0dGVyUHJvZmlsZShkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwicHJvZmlsZVwiLCBkYXRhKTtcblx0Y29uc3QgcHJvZmlsZSA9IHlpZWxkIGFjdGlvbnMuYXBpRmV0Y2goeyBwYXRoOiBxdWVyeSB9KTtcblxuXHRyZXR1cm4gYWN0aW9ucy5zZXRUd2l0dGVyUHJvZmlsZShxdWVyeSwgcHJvZmlsZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVzb2x2ZXJzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IHJlZ2lzdGVyUGx1Z2luIH0gPSB3cC5wbHVnaW5zO1xuY29uc3QgeyBQbHVnaW5TaWRlYmFyLCBQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIH0gPSB3cC5lZGl0UG9zdDtcblxuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7IEJ1dHRvbiwgUGFuZWxCb2R5LCBEYXNoaWNvbiB9ID0gd3AuY29tcG9uZW50cztcblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmdcIjtcbmltcG9ydCB7IFRlbXBsYXRlc01vZGFsIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy1tb2RhbFwiO1xuXG5jbGFzcyBDOSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGlzTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW1cblx0XHRcdFx0XHRpY29uPXs8TG9nbyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIG1hcmdpbjogXCIwIDEwcHggMCA2cHhcIiB9fSAvPn1cblx0XHRcdFx0XHR0YXJnZXQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e19fKFwiQ09WRVJUIE5JTkUgQmxvY2tzXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHQ8L1BsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0+XG5cdFx0XHRcdDxQbHVnaW5TaWRlYmFyXG5cdFx0XHRcdFx0bmFtZT1cImM5LWJsb2Nrc1wiXG5cdFx0XHRcdFx0aWQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkNPVkVSVCBOSU5FIEJsb2Nrc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBcInNlY3Rpb24tdGVtcGxhdGVzXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NoZWR1bGVcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJTZWN0aW9uIFRlbXBsYXRlc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYzktcGFuZWwtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogXCJwYWdlLXRlbXBsYXRlc1wiIH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWVkaXRvci1jb2RlXCIgLz5cblx0XHRcdFx0XHRcdFx0e19fKFwiUGFnZSBUZW1wbGF0ZXNcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IFwic2F2ZWQtYmxvY2tzXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tc2V0dGluZ3NcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJTYXZlZCBCbG9ja3NcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QbHVnaW5TaWRlYmFyPlxuXHRcdFx0XHR7XCJzZWN0aW9uLXRlbXBsYXRlc1wiID09PSBpc01vZGFsT3BlbiA/IChcblx0XHRcdFx0XHQ8VGVtcGxhdGVzTW9kYWxcblx0XHRcdFx0XHRcdHRpdGxlPVwiVGVtcGxhdGVzXCJcblx0XHRcdFx0XHRcdGljb249ezxEYXNoaWNvbiBpY29uPXtcInNjaGVkdWxlXCJ9Lz59XG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KX1cblx0XHRcdFx0XHRcdGluaXRpYWw9XCJzZWN0aW9uc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtcInBhZ2UtdGVtcGxhdGVzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0vPn1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IGZhbHNlIH0pfVxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cInBhZ2VzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0KX1cblx0XHRcdFx0e1wic2F2ZWQtYmxvY2tzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0vPn1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IGZhbHNlIH0pfVxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cImJsb2Nrc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxucmVnaXN0ZXJQbHVnaW4oXCJjOS1ibG9ja3NcIiwge1xuXHRpY29uOiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1wbHVnaW4taWNvblwiPlxuXHRcdFx0PExvZ28gLz5cblx0XHQ8L2Rpdj5cblx0KSxcblx0cmVuZGVyOiBDOVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOm5vdCguaXMtdG9nZ2xlZCkgLmM5LXBsdWdpbi1pY29uIHN2ZywuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uLmlzLXRvZ2dsZWQgLmM5LXBsdWdpbi1pY29uIHN2ZywuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTZweH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOm5vdCguaXMtdG9nZ2xlZCkgLmM5LXBsdWdpbi1pY29uIHN2ZyAqLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnICosLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbjpob3ZlciAuYzktcGx1Z2luLWljb24gc3ZnICp7c3Ryb2tlOmluaXRpYWwgIWltcG9ydGFudH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOm5vdCguaXMtdG9nZ2xlZCkgLmM5LXBsdWdpbi1pY29uIHN2ZyBbZmlsbD1cXFwiI2ZmZlxcXCJdLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl0sLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbjpob3ZlciAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl17ZmlsbDojZmZmICFpbXBvcnRhbnR9LmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbiAuYzktcGx1Z2luLWljb24gc3BhbnttYXJnaW46LTJweH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uLmlzLXRvZ2dsZWQgLmM5LXBsdWdpbi1pY29uIHNwYW4gW2ZpbGw9XFxcIiNmZmZcXFwiXXtmaWxsOiM1NTVkNjYgIWltcG9ydGFudH0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9ue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztwYWRkaW5nOjE1cHggMTBweDttYXJnaW4tYm90dG9tOjE2cHg7ZmxleC1zaHJpbms6MDtvdmVyZmxvdzpoaWRkZW47Y29sb3I6aW5oZXJpdDt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOjFweCBzb2xpZDtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOjAuMnMgY29sb3IsIDAuMnMgYmFja2dyb3VuZC1jb2xvciwgMC4ycyBib3JkZXItY29sb3IsIDAuMnMgYm94LXNoYWRvd30ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246aG92ZXIsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1cywucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzOmVuYWJsZWQsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjphY3RpdmUsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjphY3RpdmU6ZW5hYmxlZHtib3JkZXItY29sb3I6cmdiYSg3OSw4OSwxMDUsMC4yKTtib3gtc2hhZG93Om5vbmV9LnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpob3ZlciwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZSwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZTplbmFibGVke2NvbG9yOiMxOTFlMjM7YmFja2dyb3VuZC1jb2xvcjojZjhmOWY5fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246Zm9jdXMsLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1czplbmFibGVke2NvbG9yOiMxOTFlMjM7Ym9yZGVyLWNvbG9yOiMwMDdmYWM7Ym94LXNoYWRvdzowIDAgMCAycHggIzAwYTBkMn0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uIHNwYW57ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvO21hcmdpbi10b3A6M3B4O3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDoyNHB4fVxcblwiLCBcIlwiXSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID1cbi8qI19fUFVSRV9fKi9cblJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgXCJkYXRhLW5hbWVcIjogXCJMYXllciAyXCJcbn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNDcgMTM4LjA2QzQwLjM3IDEyMy45IDQwLjg0IDM2LjQxIDgzLjU0IDIyLjRjMCAwLTE1LjY0IDcuMjktMTAuMTIgMjcuNDUgNy4yLTEzLjY4IDIwLjMzLTM3LjIyIDU3Ljc3LTQzLjQ2IDI0LTIuODktMTMuMTUgMS4xLTYgMjIuMjIuMjQtOC44OCA1OS40MS00NSAxMDgtMTkuODFDMjQ2LjQzIDEwNC42OSAxNzcgMTEwLjA2IDE3NyAxMTAuMDZzMTQuOTUgMi4zOCAyMy44My0uNWMtOS4xMiAzOS44NC02My4xMyA0Mi4xNC02My4xMyA0Mi4xNHMyMC41MSA1LjExIDM0LjkyIDIuNDdjLTQ5LjQ1IDMyLjQtMTE2Ljg2LTQuODYtMTE2Ljg2LTQuODYtLjI3LjA4LS44My0uNDMtMS41OC0xLjMxbDExMi03OGEyNS4wOSAyNS4wOSAwIDEwLTYtNi4yN0w3OS45IDEyMC40bC0yLjIzLTMuMjUtMzAuNTkgMjFNMTgzLjcyIDMzLjc0YTE2LjI1IDE2LjI1IDAgMTEtMTguODQgMTMuMTcgMTYuMjQgMTYuMjQgMCAwMTE4Ljg0LTEzLjE3ek01NC4xNyAxNDhsLS4zOS0uNTUuNDMuNTJ6bS0zNC40My02LjU1bDguNDUtNS41IDUuNSA4LjQ0LTguNDQgNS41LTUuNTEtOC40NHptLTQuMzcgMTQuODdsLTUuNS04LjQ0IDguNDUtNS41IDUuNSA4LjQ0LTguNDUgNS41em0tOS44NyA2LjQ3TDAgMTU0LjM0bDguNDUtNS41IDUuNSA4LjQ0LTguNDUgNS41MXptNDYuODYtMTMuODdsLTM4Ljk1IDI1LjczLTYuOTUtMTAuMzRMNDUgMTM5LjNsNy4zMyA5LjYyelwiLFxuICBmaWxsOiBcIiMxMjEyMTJcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBcImRhdGEtbmFtZVwiOiBcImxvZ28gZGFyayBncmV5XCJcbn0pKTtcblxudmFyIFN2Z0M5RmVhdGhlckxvZ29HcmF5ID0gZnVuY3Rpb24gU3ZnQzlGZWF0aGVyTG9nb0dyYXkocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHZpZXdCb3g6IFwiMCAwIDIzNC45MiAxNzQuNjVcIlxuICB9LCBwcm9wcyksIF9yZWYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnQzlGZWF0aGVyTG9nb0dyYXk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYzktZmVhdGhlci1sb2dvLWdyYXkuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgTW9kYWwsIFRhYlBhbmVsLCBUb29sdGlwLCBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyB3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IGNyZWF0ZUJsb2NrLCByYXdIYW5kbGVyIH0gPSB3cC5ibG9ja3M7XG5jb25zdCBhcGlGZXRjaCA9IHdwLmFwaUZldGNoO1xuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tIFwibG9kYXNoL3N0YXJ0Q2FzZVwiO1xuaW1wb3J0IExheW91dEJ1dHRvbiBmcm9tIFwiLi9sYXlvdXQtYnV0dG9uXCI7XG5pbXBvcnQgU2VjdGlvbkJ1dHRvbiBmcm9tIFwiLi9zZWN0aW9uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG4vLyB0ZW1wbGF0ZXNcbmltcG9ydCB0ZW1wbGF0ZU1hcmt1cHMgZnJvbSBcIi4vdGVtcGxhdGVzLW1hcmt1cFwiO1xuXG5jbGFzcyBUZW1wbGF0ZXNNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLmdldFJldXNhYmxlQmxvY2tzID0gdGhpcy5nZXRSZXVzYWJsZUJsb2Nrcy5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJldXNhYmxlczogW11cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRSZXVzYWJsZUJsb2NrcygpO1xuXHR9XG5cblx0YXN5bmMgZ2V0UmV1c2FibGVCbG9ja3MoKSB7XG5cdFx0Y29uc3QgeyBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBwb3N0VHlwZSA9IGF3YWl0IGFwaUZldGNoKHsgcGF0aDogYC93cC92Mi90eXBlcy93cF9ibG9ja2AgfSk7XG5cdFx0Y29uc3QgcmV1c2FibGVzID0gYXdhaXQgYXBpRmV0Y2goeyBwYXRoOiBgL3dwL3YyLyR7cG9zdFR5cGUucmVzdF9iYXNlfWAgfSk7XG5cblx0XHRjb25zdCBibG9ja3MgPSByZXVzYWJsZXMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bmFtZTogaXRlbS50aXRsZS5yYXcsXG5cdFx0XHRcdGNvbnRlbnQ6IHJhd0hhbmRsZXIoe1xuXHRcdFx0XHRcdEhUTUw6IGl0ZW0uY29udGVudC5yYXcsXG5cdFx0XHRcdFx0bW9kZTogXCJCTE9DS1NcIixcblx0XHRcdFx0XHRjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUxcblx0XHRcdFx0fSlcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJldXNhYmxlczogYmxvY2tzXG5cdFx0fSk7XG5cdH1cblxuXHRtYXJrdXBUb0Jsb2NrKHRlbXBsYXRlT2JqLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwpIHtcblx0XHRsZXQgYmxvY2tPYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZU9iaik7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGJsb2NrT2JqKSkge1xuXHRcdFx0YmxvY2tPYmpba2V5XSA9IHJhd0hhbmRsZXIoe1xuXHRcdFx0XHRIVE1MOiBibG9ja09ialtrZXldLFxuXHRcdFx0XHRtb2RlOiBcIkJMT0NLU1wiLFxuXHRcdFx0XHRjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBibG9ja09iajtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHJlc2V0QmxvY2tzLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwgfSA9IHRoaXMucHJvcHM7XG5cblx0XHQvLyBkZWZpbmUgc2VjdGlvbiBhbmQgbGF5b3V0IHRlbXBsYXRlc1xuXG5cdFx0Y29uc3Qgc2VjdGlvbnMgPSB7XG5cdFx0XHR0ZXN0OiBbXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9jb3ZlclwiLCB7IGFsaWduOiBcImZ1bGxcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL2J1dHRvblwiLCB7XG5cdFx0XHRcdFx0dGV4dDogX18oXCJMYXlvdXQgU3dpdGNoZXJcIiwgXCJjOS1ibG9ja3NcIiksXG5cdFx0XHRcdFx0YWxpZ246IFwiY2VudGVyXCJcblx0XHRcdFx0fSlcblx0XHRcdF0sXG5cdFx0XHQvLyBjb252ZXJ0IG1hcmt1cCB0byBhY3R1YWwgYmxvY2tzXG5cdFx0XHQuLi50aGlzLm1hcmt1cFRvQmxvY2sodGVtcGxhdGVNYXJrdXBzLnNlY3Rpb25zLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwpXG5cdFx0fTtcblxuXHRcdGNvbnN0IGxheW91dHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbY3JlYXRlQmxvY2soXCJjb3JlL3BhcmFncmFwaFwiLCB7fSldLFxuXHRcdFx0aGVybzogW1xuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvY292ZXJcIiwgeyBhbGlnbjogXCJmdWxsXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9idXR0b25cIiwge1xuXHRcdFx0XHRcdHRleHQ6IF9fKFwiTGF5b3V0IFN3aXRjaGVyXCIsIFwiYzktYmxvY2tzXCIpLFxuXHRcdFx0XHRcdGFsaWduOiBcImNlbnRlclwiXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImM5LWJsb2Nrcy9ncmlkXCIsIHt9LCBbXG5cdFx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lclwiLCB7XG5cdFx0XHRcdFx0XHRjb2x1bW5zOiAzLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiBcImM5LTMtY29sLWVxdWFsXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdKVxuXHRcdFx0XSxcblx0XHRcdGZlYXR1cmVkOiBbXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9oZWFkaW5nXCIsIHt9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3NwYWNlclwiLCB7IGhlaWdodDogXCIxMFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvbWVkaWEtdGV4dFwiLCB7IGFsaWduOiBcImZ1bGxcIiB9KSxcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjb3JlL3NwYWNlclwiLCB7IGhlaWdodDogXCI0MFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvcXVvdGVcIiwge30pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvc3BhY2VyXCIsIHsgaGVpZ2h0OiBcIjIwXCIgfSksXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFwiY29yZS9tZWRpYS10ZXh0XCIsIHsgbWVkaWFQb3NpdGlvbjogXCJyaWdodFwiIH0pLFxuXHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvcGFyYWdyYXBoXCIsIHtcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oXCJMYXlvdXQgU3dpdGNoZXJcIiwgXCJjOS1ibG9ja3NcIilcblx0XHRcdFx0fSlcblx0XHRcdF0sXG5cdFx0XHRuZXN0ZWQ6IFtcblx0XHRcdFx0Y3JlYXRlQmxvY2soXCJjOS1ibG9ja3MvZ3JpZFwiLCB7fSwgW1xuXHRcdFx0XHRcdGNyZWF0ZUJsb2NrKFxuXHRcdFx0XHRcdFx0XCJjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0eyBjb2x1bW5zOiAzLCBsYXlvdXQ6IFwiYzktMy1jb2wtZXF1YWxcIiB9LFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRjcmVhdGVCbG9jayhcImM5LWJsb2Nrcy9jb2x1bW5cIiwge30sIFtcblx0XHRcdFx0XHRcdFx0XHRjcmVhdGVCbG9jayhcImNvcmUvYnV0dG9uXCIsIHsgdGV4dDogXCJNYWtlIHRoaXMgUmVjaXBlXCIgfSlcblx0XHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdF0pXG5cdFx0XHRdLFxuXHRcdFx0Ly8gY29udmVydCBtYXJrdXAgdG8gYWN0dWFsIGJsb2Nrc1xuXHRcdFx0Li4udGhpcy5tYXJrdXBUb0Jsb2NrKHRlbXBsYXRlTWFya3Vwcy5sYXlvdXRzLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwpXG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktdGVtcGxhdGVzLW1vZGFsXCJcblx0XHRcdFx0cG9zaXRpb249XCJ0b3BcIlxuXHRcdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdD5cblx0XHRcdFx0PFRhYlBhbmVsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktdGVtcGxhdGUtdGFicyBjOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsXCJcblx0XHRcdFx0XHR0YWJzPXtbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwic2VjdGlvbnNcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiU2ltcGxlIHNlY3Rpb25zIHRvIGNvbnN0cnVjdCB5b3VyIHBhZ2UuXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiYzktYmxvY2tzXCJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiU2VjdGlvbnNcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImM5LXRlbXBsYXRlLXRhYnMtdGFiXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwicGFnZXNcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17X18oXCJQcmUtZGVzaWduZWQgcmVhZHkgdG8gdXNlIHBhZ2VzLlwiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJQYWdlc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiYzktdGVtcGxhdGUtdGFicy10YWJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJibG9ja3NcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtfXyhcIk15IFRlbXBsYXRlcy5cIiwgXCJjOS1ibG9ja3NcIil9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiU2F2ZWQgQmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjOS10ZW1wbGF0ZS10YWJzLXRhYlwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRpbml0aWFsVGFiTmFtZT17dGhpcy5wcm9wcy5pbml0aWFsfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RhYiA9PiB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhYi5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzZWN0aW9uc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXNlY3Rpb24tb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhzZWN0aW9ucykubWFwKGsgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlY3Rpb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhzdGFydENhc2UoayksIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uPXtzZWN0aW9uc1trXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJwYWdlc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWxheW91dC1vcHRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKGxheW91dHMpLm1hcChrID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMYXlvdXRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhzdGFydENhc2UoayksIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ9e2xheW91dHNba119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRCbG9ja3MoW10pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiQ2xlYXIgcGFnZVwiLCBcImM5LWJsb2Nrc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXNlY3Rpb24tb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnJldXNhYmxlcy5tYXAob2JqID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWN0aW9uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJ3b3JkcHJlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18ob2JqLm5hbWUsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uPXtvYmouY29udGVudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PC9UYWJQYW5lbD5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QgPSBjb21wb3NlKFtcblx0d2l0aFNlbGVjdCgoc2VsZWN0LCB7IGNsaWVudElkIH0pID0+IHtcblx0XHRjb25zdCB7IGdldEJsb2NrLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwgfSA9IHNlbGVjdChcImNvcmUvZWRpdG9yXCIpO1xuXHRcdGNvbnN0IGJsb2NrID0gZ2V0QmxvY2soY2xpZW50SWQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRibG9jayxcblx0XHRcdGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTDogY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0XHRjb25zdCB7IHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc2V0QmxvY2tzLFxuXHRcdFx0aW5zZXJ0QmxvY2tzXG5cdFx0fTtcblx0fSlcbl0pKFRlbXBsYXRlc01vZGFsKTtcblxuZXhwb3J0IHsgVGVtcGxhdGVzTW9kYWxXaXRoU2VsZWN0IGFzIFRlbXBsYXRlc01vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvaW5kZXguanMiLCJ2YXIgY3JlYXRlQ29tcG91bmRlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNvbXBvdW5kZXInKSxcbiAgICB1cHBlckZpcnN0ID0gcmVxdWlyZSgnLi91cHBlckZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG9cbiAqIFtzdGFydCBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MZXR0ZXJfY2FzZSNTdHlsaXN0aWNfb3Jfc3BlY2lhbGlzZWRfdXNhZ2UpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4xLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdGFydCBjYXNlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc3RhcnRDYXNlKCctLWZvby1iYXItLScpO1xuICogLy8gPT4gJ0ZvbyBCYXInXG4gKlxuICogXy5zdGFydENhc2UoJ2Zvb0JhcicpO1xuICogLy8gPT4gJ0ZvbyBCYXInXG4gKlxuICogXy5zdGFydENhc2UoJ19fRk9PX0JBUl9fJyk7XG4gKiAvLyA9PiAnRk9PIEJBUidcbiAqL1xudmFyIHN0YXJ0Q2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gJyAnIDogJycpICsgdXBwZXJGaXJzdCh3b3JkKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0Q2FzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIGRlYnVyciA9IHJlcXVpcmUoJy4vZGVidXJyJyksXG4gICAgd29yZHMgPSByZXF1aXJlKCcuL3dvcmRzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIjtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYXBvc3Ryb3BoZXMuICovXG52YXIgcmVBcG9zID0gUmVnRXhwKHJzQXBvcywgJ2cnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5jYW1lbENhc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY29tYmluZSBlYWNoIHdvcmQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb21wb3VuZGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29tcG91bmRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ29tcG91bmRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDQzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJ1cnIuanNcbi8vIG1vZHVsZSBpZCA9IDQzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZVByb3BlcnR5T2YgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlPZicpO1xuXG4vKiogVXNlZCB0byBtYXAgTGF0aW4gVW5pY29kZSBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuICovXG52YXIgZGVidXJyZWRMZXR0ZXJzID0ge1xuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQgYmxvY2suXG4gICdcXHhjMCc6ICdBJywgICdcXHhjMSc6ICdBJywgJ1xceGMyJzogJ0EnLCAnXFx4YzMnOiAnQScsICdcXHhjNCc6ICdBJywgJ1xceGM1JzogJ0EnLFxuICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcbiAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxuICAnXFx4ZDAnOiAnRCcsICAnXFx4ZjAnOiAnZCcsXG4gICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXG4gICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXG4gICdcXHhjYyc6ICdJJywgICdcXHhjZCc6ICdJJywgJ1xceGNlJzogJ0knLCAnXFx4Y2YnOiAnSScsXG4gICdcXHhlYyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXG4gICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcbiAgJ1xceGQyJzogJ08nLCAgJ1xceGQzJzogJ08nLCAnXFx4ZDQnOiAnTycsICdcXHhkNSc6ICdPJywgJ1xceGQ2JzogJ08nLCAnXFx4ZDgnOiAnTycsXG4gICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxuICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxuICAnXFx4ZjknOiAndScsICAnXFx4ZmEnOiAndScsICdcXHhmYic6ICd1JywgJ1xceGZjJzogJ3UnLFxuICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcbiAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcbiAgJ1xceGRlJzogJ1RoJywgJ1xceGZlJzogJ3RoJyxcbiAgJ1xceGRmJzogJ3NzJyxcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSBibG9jay5cbiAgJ1xcdTAxMDAnOiAnQScsICAnXFx1MDEwMic6ICdBJywgJ1xcdTAxMDQnOiAnQScsXG4gICdcXHUwMTAxJzogJ2EnLCAgJ1xcdTAxMDMnOiAnYScsICdcXHUwMTA1JzogJ2EnLFxuICAnXFx1MDEwNic6ICdDJywgICdcXHUwMTA4JzogJ0MnLCAnXFx1MDEwYSc6ICdDJywgJ1xcdTAxMGMnOiAnQycsXG4gICdcXHUwMTA3JzogJ2MnLCAgJ1xcdTAxMDknOiAnYycsICdcXHUwMTBiJzogJ2MnLCAnXFx1MDEwZCc6ICdjJyxcbiAgJ1xcdTAxMGUnOiAnRCcsICAnXFx1MDExMCc6ICdEJywgJ1xcdTAxMGYnOiAnZCcsICdcXHUwMTExJzogJ2QnLFxuICAnXFx1MDExMic6ICdFJywgICdcXHUwMTE0JzogJ0UnLCAnXFx1MDExNic6ICdFJywgJ1xcdTAxMTgnOiAnRScsICdcXHUwMTFhJzogJ0UnLFxuICAnXFx1MDExMyc6ICdlJywgICdcXHUwMTE1JzogJ2UnLCAnXFx1MDExNyc6ICdlJywgJ1xcdTAxMTknOiAnZScsICdcXHUwMTFiJzogJ2UnLFxuICAnXFx1MDExYyc6ICdHJywgICdcXHUwMTFlJzogJ0cnLCAnXFx1MDEyMCc6ICdHJywgJ1xcdTAxMjInOiAnRycsXG4gICdcXHUwMTFkJzogJ2cnLCAgJ1xcdTAxMWYnOiAnZycsICdcXHUwMTIxJzogJ2cnLCAnXFx1MDEyMyc6ICdnJyxcbiAgJ1xcdTAxMjQnOiAnSCcsICAnXFx1MDEyNic6ICdIJywgJ1xcdTAxMjUnOiAnaCcsICdcXHUwMTI3JzogJ2gnLFxuICAnXFx1MDEyOCc6ICdJJywgICdcXHUwMTJhJzogJ0knLCAnXFx1MDEyYyc6ICdJJywgJ1xcdTAxMmUnOiAnSScsICdcXHUwMTMwJzogJ0knLFxuICAnXFx1MDEyOSc6ICdpJywgICdcXHUwMTJiJzogJ2knLCAnXFx1MDEyZCc6ICdpJywgJ1xcdTAxMmYnOiAnaScsICdcXHUwMTMxJzogJ2knLFxuICAnXFx1MDEzNCc6ICdKJywgICdcXHUwMTM1JzogJ2onLFxuICAnXFx1MDEzNic6ICdLJywgICdcXHUwMTM3JzogJ2snLCAnXFx1MDEzOCc6ICdrJyxcbiAgJ1xcdTAxMzknOiAnTCcsICAnXFx1MDEzYic6ICdMJywgJ1xcdTAxM2QnOiAnTCcsICdcXHUwMTNmJzogJ0wnLCAnXFx1MDE0MSc6ICdMJyxcbiAgJ1xcdTAxM2EnOiAnbCcsICAnXFx1MDEzYyc6ICdsJywgJ1xcdTAxM2UnOiAnbCcsICdcXHUwMTQwJzogJ2wnLCAnXFx1MDE0Mic6ICdsJyxcbiAgJ1xcdTAxNDMnOiAnTicsICAnXFx1MDE0NSc6ICdOJywgJ1xcdTAxNDcnOiAnTicsICdcXHUwMTRhJzogJ04nLFxuICAnXFx1MDE0NCc6ICduJywgICdcXHUwMTQ2JzogJ24nLCAnXFx1MDE0OCc6ICduJywgJ1xcdTAxNGInOiAnbicsXG4gICdcXHUwMTRjJzogJ08nLCAgJ1xcdTAxNGUnOiAnTycsICdcXHUwMTUwJzogJ08nLFxuICAnXFx1MDE0ZCc6ICdvJywgICdcXHUwMTRmJzogJ28nLCAnXFx1MDE1MSc6ICdvJyxcbiAgJ1xcdTAxNTQnOiAnUicsICAnXFx1MDE1Nic6ICdSJywgJ1xcdTAxNTgnOiAnUicsXG4gICdcXHUwMTU1JzogJ3InLCAgJ1xcdTAxNTcnOiAncicsICdcXHUwMTU5JzogJ3InLFxuICAnXFx1MDE1YSc6ICdTJywgICdcXHUwMTVjJzogJ1MnLCAnXFx1MDE1ZSc6ICdTJywgJ1xcdTAxNjAnOiAnUycsXG4gICdcXHUwMTViJzogJ3MnLCAgJ1xcdTAxNWQnOiAncycsICdcXHUwMTVmJzogJ3MnLCAnXFx1MDE2MSc6ICdzJyxcbiAgJ1xcdTAxNjInOiAnVCcsICAnXFx1MDE2NCc6ICdUJywgJ1xcdTAxNjYnOiAnVCcsXG4gICdcXHUwMTYzJzogJ3QnLCAgJ1xcdTAxNjUnOiAndCcsICdcXHUwMTY3JzogJ3QnLFxuICAnXFx1MDE2OCc6ICdVJywgICdcXHUwMTZhJzogJ1UnLCAnXFx1MDE2Yyc6ICdVJywgJ1xcdTAxNmUnOiAnVScsICdcXHUwMTcwJzogJ1UnLCAnXFx1MDE3Mic6ICdVJyxcbiAgJ1xcdTAxNjknOiAndScsICAnXFx1MDE2Yic6ICd1JywgJ1xcdTAxNmQnOiAndScsICdcXHUwMTZmJzogJ3UnLCAnXFx1MDE3MSc6ICd1JywgJ1xcdTAxNzMnOiAndScsXG4gICdcXHUwMTc0JzogJ1cnLCAgJ1xcdTAxNzUnOiAndycsXG4gICdcXHUwMTc2JzogJ1knLCAgJ1xcdTAxNzcnOiAneScsICdcXHUwMTc4JzogJ1knLFxuICAnXFx1MDE3OSc6ICdaJywgICdcXHUwMTdiJzogJ1onLCAnXFx1MDE3ZCc6ICdaJyxcbiAgJ1xcdTAxN2EnOiAneicsICAnXFx1MDE3Yyc6ICd6JywgJ1xcdTAxN2UnOiAneicsXG4gICdcXHUwMTMyJzogJ0lKJywgJ1xcdTAxMzMnOiAnaWonLFxuICAnXFx1MDE1Mic6ICdPZScsICdcXHUwMTUzJzogJ29lJyxcbiAgJ1xcdTAxNDknOiBcIiduXCIsICdcXHUwMTdmJzogJ3MnXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVidXJyYCB0byBjb252ZXJ0IExhdGluLTEgU3VwcGxlbWVudCBhbmQgTGF0aW4gRXh0ZW5kZWQtQVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV0dGVyIFRoZSBtYXRjaGVkIGxldHRlciB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBsZXR0ZXIuXG4gKi9cbnZhciBkZWJ1cnJMZXR0ZXIgPSBiYXNlUHJvcGVydHlPZihkZWJ1cnJlZExldHRlcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVyckxldHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVidXJyTGV0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eU9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHlPZi5qc1xuLy8gbW9kdWxlIGlkID0gNDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBhc2NpaVdvcmRzID0gcmVxdWlyZSgnLi9fYXNjaWlXb3JkcycpLFxuICAgIGhhc1VuaWNvZGVXb3JkID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZVdvcmQnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1bmljb2RlV29yZHMgPSByZXF1aXJlKCcuL191bmljb2RlV29yZHMnKTtcblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvd29yZHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBtYXRjaCB3b3JkcyBjb21wb3NlZCBvZiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy4gKi9cbnZhciByZUFzY2lpV29yZCA9IC9bXlxceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdmXSsvZztcblxuLyoqXG4gKiBTcGxpdHMgYW4gQVNDSUkgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiBhc2NpaVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlQXNjaWlXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVdvcmRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVdvcmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3MgdGhhdCBuZWVkIGEgbW9yZSByb2J1c3QgcmVnZXhwIHRvIG1hdGNoIHdvcmRzLiAqL1xudmFyIHJlSGFzVW5pY29kZVdvcmQgPSAvW2Etel1bQS1aXXxbQS1aXXsyfVthLXpdfFswLTldW2EtekEtWl18W2EtekEtWl1bMC05XXxbXmEtekEtWjAtOSBdLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgYSB3b3JkIGNvbXBvc2VkIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSB3b3JkIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGVXb3JkKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlV29yZC50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZVdvcmQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzRGluZ2JhdFJhbmdlID0gJ1xcXFx1MjcwMC1cXFxcdTI3YmYnLFxuICAgIHJzTG93ZXJSYW5nZSA9ICdhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmYnLFxuICAgIHJzTWF0aE9wUmFuZ2UgPSAnXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmNycsXG4gICAgcnNOb25DaGFyUmFuZ2UgPSAnXFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmJyxcbiAgICByc1B1bmN0dWF0aW9uUmFuZ2UgPSAnXFxcXHUyMDAwLVxcXFx1MjA2ZicsXG4gICAgcnNTcGFjZVJhbmdlID0gJyBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwJyxcbiAgICByc1VwcGVyUmFuZ2UgPSAnQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZicsXG4gICAgcnNCcmVha1JhbmdlID0gcnNNYXRoT3BSYW5nZSArIHJzTm9uQ2hhclJhbmdlICsgcnNQdW5jdHVhdGlvblJhbmdlICsgcnNTcGFjZVJhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNNaXNjTG93ZXIgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNNaXNjVXBwZXIgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRDb250ckxvd2VyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPycsXG4gICAgcnNPcHRDb250clVwcGVyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86RHxMTHxNfFJFfFN8VHxWRSkpPycsXG4gICAgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc09yZExvd2VyID0gJ1xcXFxkKig/OjFzdHwybmR8M3JkfCg/IVsxMjNdKVxcXFxkdGgpKD89XFxcXGJ8W0EtWl9dKScsXG4gICAgcnNPcmRVcHBlciA9ICdcXFxcZCooPzoxU1R8Mk5EfDNSRHwoPyFbMTIzXSlcXFxcZFRIKSg/PVxcXFxifFthLXpfXSknLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc0Vtb2ppID0gJyg/OicgKyBbcnNEaW5nYmF0LCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc1NlcTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggY29tcGxleCBvciBjb21wb3VuZCB3b3Jkcy4gKi9cbnZhciByZVVuaWNvZGVXb3JkID0gUmVnRXhwKFtcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXIgKyAnKycgKyByc09wdENvbnRyTG93ZXIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNNaXNjVXBwZXIgKyAnKycgKyByc09wdENvbnRyVXBwZXIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyICsgcnNNaXNjTG93ZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc1VwcGVyICsgJz8nICsgcnNNaXNjTG93ZXIgKyAnKycgKyByc09wdENvbnRyTG93ZXIsXG4gIHJzVXBwZXIgKyAnKycgKyByc09wdENvbnRyVXBwZXIsXG4gIHJzT3JkVXBwZXIsXG4gIHJzT3JkTG93ZXIsXG4gIHJzRGlnaXRzLFxuICByc0Vtb2ppXG5dLmpvaW4oJ3wnKSwgJ2cnKTtcblxuLyoqXG4gKiBTcGxpdHMgYSBVbmljb2RlIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVXb3JkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGNyZWF0ZUNhc2VGaXJzdCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNhc2VGaXJzdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51cHBlckZpcnN0KCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ0ZSRUQnKTtcbiAqIC8vID0+ICdGUkVEJ1xuICovXG52YXIgdXBwZXJGaXJzdCA9IGNyZWF0ZUNhc2VGaXJzdCgndG9VcHBlckNhc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cHBlckZpcnN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3VwcGVyRmlyc3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICBzdHJpbmdUb0FycmF5ID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9BcnJheScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmxvd2VyRmlyc3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgYFN0cmluZ2AgY2FzZSBtZXRob2QgdG8gdXNlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FzZUZpcnN0KG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICB2YXIgc3RyU3ltYm9scyA9IGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdUb0FycmF5KHN0cmluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGNociA9IHN0clN5bWJvbHNcbiAgICAgID8gc3RyU3ltYm9sc1swXVxuICAgICAgOiBzdHJpbmcuY2hhckF0KDApO1xuXG4gICAgdmFyIHRyYWlsaW5nID0gc3RyU3ltYm9sc1xuICAgICAgPyBjYXN0U2xpY2Uoc3RyU3ltYm9scywgMSkuam9pbignJylcbiAgICAgIDogc3RyaW5nLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGNoclttZXRob2ROYW1lXSgpICsgdHJhaWxpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FzZUZpcnN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDYXNlRmlyc3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyk7XG5cbi8qKlxuICogQ2FzdHMgYGFycmF5YCB0byBhIHNsaWNlIGlmIGl0J3MgbmVlZGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3Qgc2xpY2UuXG4gKi9cbmZ1bmN0aW9uIGNhc3RTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZDtcbiAgcmV0dXJuICghc3RhcnQgJiYgZW5kID49IGxlbmd0aCkgPyBhcnJheSA6IGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFNsaWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXNjaWlUb0FycmF5ID0gcmVxdWlyZSgnLi9fYXNjaWlUb0FycmF5JyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlVG9BcnJheSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVUb0FycmF5Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiY29uc3QgeyBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyB3aXRoRGlzcGF0Y2ggfSA9IHdwLmRhdGE7XG5cbmNvbnN0IExheW91dEJ1dHRvbiA9ICh7IGxhYmVsLCBpY29uLCBsYXlvdXQsIHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByZXNldEJsb2NrcyhbXSk7XG4gICAgICAgICAgICAgICAgaW5zZXJ0QmxvY2tzKGxheW91dCk7XG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxJY29uIGljb249e2ljb259IC8+XG5cdFx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0Y29uc3QgeyByZXNldEJsb2NrcywgaW5zZXJ0QmxvY2tzIH0gPSBkaXNwYXRjaChcImNvcmUvZWRpdG9yXCIpO1xuXG5cdHJldHVybiB7XG5cdFx0cmVzZXRCbG9ja3MsXG5cdFx0aW5zZXJ0QmxvY2tzXG5cdH07XG59KShMYXlvdXRCdXR0b24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2xheW91dC1idXR0b24uanMiLCJjb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHdpdGhEaXNwYXRjaCB9ID0gd3AuZGF0YTtcblxuY29uc3QgU2VjdGlvbkJ1dHRvbiA9ICh7IGxhYmVsLCBpY29uLCBzZWN0aW9uLCBpbnNlcnRCbG9ja3MgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRCbG9ja3Moc2VjdGlvbik7XG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxJY29uIGljb249e2ljb259IC8+XG5cdFx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0Y29uc3QgeyBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cblx0cmV0dXJuIHtcblx0XHRpbnNlcnRCbG9ja3Ncblx0fTtcbn0pKFNlY3Rpb25CdXR0b24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tYnV0dG9uLmpzIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jOS10ZW1wbGF0ZXMtbW9kYWwgLmNvbXBvbmVudHMtbW9kYWxfX2hlYWRlcntib3JkZXItYm90dG9tOm5vbmV9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuY29tcG9uZW50cy10YWItcGFuZWxfX3RhYnN7bWFyZ2luLXRvcDotMjRweH1AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpey5jOS10ZW1wbGF0ZXMtbW9kYWx7bWluLXdpZHRoOjYwMHB4O21heC13aWR0aDo2MDBweDttYXJnaW4tbGVmdDotMzAwcHg7dHJhbnNmb3JtOm5vbmU7dG9wOjExMnB4fX1AbWVkaWEgKG1pbi13aWR0aDogODQwcHgpey5jOS10ZW1wbGF0ZXMtbW9kYWx7bWluLXdpZHRoOjgwMHB4O21heC13aWR0aDo4MDBweDttYXJnaW4tbGVmdDotNDAwcHg7dHJhbnNmb3JtOm5vbmV9fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmNvbXBvbmVudHMtbW9kYWxfX2hlYWRlciAuY29tcG9uZW50cy1tb2RhbF9faWNvbi1jb250YWluZXIgc3Zne2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXJpZ2h0OjEwcHh9LmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVyIC5jb21wb25lbnRzLW1vZGFsX19oZWFkZXItaGVhZGluZ3tmb250LXdlaWdodDo2MDB9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktbGF5b3V0LW9wdGlvbnMsLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25ze2Rpc3BsYXk6Z3JpZDtncmlkLWNvbHVtbi1nYXA6MXJlbTtncmlkLXJvdy1nYXA6MXJlbTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDYsIDFmcil9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktbGF5b3V0LW9wdGlvbnMgYnV0dG9uLC5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LXNlY3Rpb24tb3B0aW9ucyBidXR0b257Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOiNkOGQ4ZDggI2QxZDFkMSAjYmFiYWJhO2JvcmRlci1yYWRpdXM6M3B4O2JveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgI2NjYztwYWRkaW5nOjVweH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucyBidXR0b246YWN0aXZlLC5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LXNlY3Rpb24tb3B0aW9ucyBidXR0b246YWN0aXZle2JvcmRlci1jb2xvcjojOTk5O2JveC1zaGFkb3c6aW5zZXJ0IDAgMXB4IDAgIzk5OX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucyBidXR0b24gc3BhbiwuYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1zZWN0aW9uLW9wdGlvbnMgYnV0dG9uIHNwYW57ZGlzcGxheTpibG9jaztmb250LXNpemU6MC44cmVtO3BhZGRpbmc6MnB4IDB9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuY29tcG9uZW50cy10YWItcGFuZWxfX3RhYnMgLmM5LXRlbXBsYXRlLXRhYnMtdGFie3BhZGRpbmc6MTJweCAxNnB4O2NvbG9yOmluaGVyaXR9LmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuY29tcG9uZW50cy10YWItcGFuZWxfX3RhYnMgLmM5LXRlbXBsYXRlLXRhYnMtdGFiOmZvY3Vze291dGxpbmU6bm9uZX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWIuaXMtYWN0aXZle3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMGEwZDI7ei1pbmRleDoxfVxcblwiLCBcIlwiXSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHRlbXBsYXRlTWFya3VwcyA9IHtcblx0bGF5b3V0czoge1xuXHRcdHRlc3RCbG9ja3M6IGBcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxLFwibWluU2NyZWVuSGVpZ2h0XCI6MTB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MTB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJjb2x1bW5NYXhXaWR0aFwiOjAsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsIHtcImluc3RhbmNlSWRcIjoxfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBjbGFzcz1cImM5LWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MCxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MSxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MixcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzIGFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uLTBcIj48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoxLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzEtMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMS0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+VG9nZ2xlIEl0ZW08L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMS0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmcyLTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTItMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPlRvZ2dsZSBJdGVtPC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTItMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMSBjbGFzcz1cImM5LWhcIj48L2gxPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjowfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jdGEgLS0+XG5cdFx0PGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCIgY2xhc3M9XCJjOS1jdGEgYzktYmxvY2stY3RhIGNvbnRhaW5lciBwLTVcIj48ZGl2IGNsYXNzPVwicm93XCI+PGRpdiBjbGFzcz1cImM5LWN0YS1jb250ZW50IGNvbC0xMiBjb2wtbWQtOFwiPjxkaXYgY2xhc3M9XCJjOS1jdGEtdGV4dFwiPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jdGEgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3Mvc29jaWFsLXNoYXJlIC8tLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ob3Jpem9udGFsLXRhYnNcIiBkYXRhLXRhYi1hY3RpdmU9XCJ0YWItMVwiPjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBkLWZsZXggbmF2LWp1c3RpZmllZFwiIHJvbGU9XCJ0YWJsaXN0XCI+PGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBkYXRhLXRvZ2dsZT1cInRhYlwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItMS0wXCIgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cInRhYi1idXR0b24tdGFiLTFcIj5UYWIgMTwvYT48L2xpPjxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PGEgZGF0YS10b2dnbGU9XCJ0YWJcIiByb2xlPVwidGFiXCIgaHJlZj1cIiN0YWItdGFiLTItMFwiIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRhYi1idXR0b24tdGFiLTJcIj5UYWIgMjwvYT48L2xpPjwvdWw+PGRpdiBjbGFzcz1cImM5LXRhYnMtY29udGVudCB0YWItY29udGVudFwiPjwhLS0gd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicy10YWIge1wic2x1Z1wiOlwidGFiLTFcIixcInRhYkFjdGl2ZVwiOlwidGFiLTFcIixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWhvcml6b250YWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi0xLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWItMVwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicy10YWIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItMlwiLFwidGFiQWN0aXZlXCI6XCJ0YWItMVwiLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktaG9yaXpvbnRhbC10YWJzLXRhYiB0YWItcGFuZSBmYWRlXCIgcm9sZT1cInRhYnBhbmVsXCIgaWQ9XCJ0YWItdGFiLTItMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi0yXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicy10YWIgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzIHtcImluc3RhbmNlSWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdmVydGljYWwtdGFicyByb3dcIiBkYXRhLXRhYi1hY3RpdmU9XCJ0YWItMVwiPjxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTNcIj48ZGl2IGNsYXNzPVwibmF2IGZsZXgtY29sdW1uIG5hdi1waWxsc1wiIHJvbGU9XCJ0YWJsaXN0XCI+PGEgZGF0YS10b2dnbGU9XCJwaWxsXCIgcm9sZT1cInRhYlwiIGhyZWY9XCIjdGFiLXRhYi0xLTBcIiBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwidGFiLWJ1dHRvbi10YWItMVwiPlRhYiAxPC9hPjxhIGRhdGEtdG9nZ2xlPVwicGlsbFwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItMi0wXCIgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwidGFiLWJ1dHRvbi10YWItMlwiPlRhYiAyPC9hPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTlcIj48ZGl2IGNsYXNzPVwiYzktdGFicy1jb250ZW50IHRhYi1jb250ZW50XCI+PCEtLSB3cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIge1wic2x1Z1wiOlwidGFiLTFcIixcInRhYkFjdGl2ZVwiOlwidGFiLTFcIixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXZlcnRpY2FsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItMS0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFiLTFcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItMlwiLFwidGFiQWN0aXZlXCI6XCJ0YWItMVwiLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdmVydGljYWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi0yLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWItMlwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiAtLT48L2Rpdj48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9wb3N0cy1ncmlkIHtcImluc3RhbmNlSWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktcG9zdHMtZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9wb3N0LWdyaWQgLy0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9wb3N0cy1ncmlkIC0tPlxuXHRcdGAsXG5cdFx0bWFya2Rvd246XG5cdFx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxcbjxkaXYgaWQ9XCJjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGNsYXNzPVwiYzktY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjowLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PCEtLSB3cDpoZWFkaW5nIC0tPlxcbjxoMj5hd2Rhd2Q8L2gyPlxcbjwhLS0gL3dwOmhlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+d2FhZDwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MSxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+YXdkYXdkYXc8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjIsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPmF3ZGFkYXdkYXdkYXc8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbCAtLT4nLFxuXHRcdHRlc3RCZzpcblx0XHRcdCc8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxNSxcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZ1wiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo4LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6ODB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1maXhlZCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwdmhcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wiLFwiY29udGFpbmVySW1nVVJMXCI6bnVsbCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC41MTE1MjA3MzczMjcxODksXCJ5XCI6MC42MjV9fSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpzcGFjZXIgLS0+XFxuPGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VydmljZSBPZmZlcmluZyBMYW5kaW5nIFBhZ2VcIixcInN1YmhlYWRpbmdcIjpcInN1YmhlYWRpbmdcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+U2VydmljZSBPZmZlcmluZyBMYW5kaW5nIFBhZ2U8L2gxPjxkaXYgY2xhc3M9XCJjOS1oIGgxXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3N1YmhlYWRpbmc8L3NtYWxsPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjMsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJIdWVcIjpcIiNmZmZmZmZcIn0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS0zLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgMVwiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMTwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4gc3Vydml2YWwgc3RyYXRlZ2llcyB0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uwqA8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlcCAyXCIsXCJ0YWdMZXZlbFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oXCI+U3RlcCAyPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5BdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIFguPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgM1wiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMzwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+Q2FwaXRhbGl6ZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+Jyxcblx0XHRyZXN0YXVyYW50TWVudUxhbmRpbmdQYWdlOiBcblx0XHRgXG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MSxcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo3LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NTAsXCJjb250YWluZXJWaWRlb1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3Jlc3RhdXJhbnQtdmlkZW8tYmctd2ViLm1vdlwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsIGM5LWdyaWQtaGFzLXZpZGVvXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjUwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LXZpZGVvLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJjOS1lbWJlZC1jb250YWluZXJcIj48dmlkZW8gaWQ9XCJjb250YWluZXJWaWRlby0xXCIgY2xhc3M9XCJjOS12aWRlby1jdXN0b21cIiBwbGF5c2lubGluZSBhdXRvcGxheSBtdXRlZCBsb29wIHN0eWxlPVwibWluLWhlaWdodDo1MHZoXCI+PHNvdXJjZSBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcmVzdGF1cmFudC12aWRlby1iZy13ZWIubW92XCIgdHlwZT1cInZpZGVvL21wNFwiLz48L3ZpZGVvPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC43KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcImZ1bGxcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLWZsdWlkXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJib3R0b21cIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBhbGlnbmZ1bGwgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtYm90dG9tIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4ge1widmVydGljYWxBbGlnblwiOlwiYm90dG9tXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnQgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWJvdHRvbVwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJOZXcgRmFsbCBNZW51XCIsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2FiYjhjM1wiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktdHhsIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojYWJiOGMzXCI+TmV3IEZhbGwgTWVudTwvaDE+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJPUkRFUiBUSElTIEZJU0ggT05MSU5FIFJJR0hUIE5PV1wiLFwidGFnTGV2ZWxcIjo2LFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcIm5vcm1hbFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg2IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1ub3JtYWxcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5PUkRFUiBUSElTIEZJU0ggT05MSU5FIFJJR0hUIE5PVzwvaDY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jdGEge1widHlwZVwiOlwiYzktc2hcIixcImJ1dHRvblRleHRcIjpcImdldCBzdGFydGVkXCIsXCJidXR0b25BbGlnbm1lbnRcIjpcImxlZnRcIixcImJ1dHRvblRleHRDb2xvclwiOlwiIzMxMzEzMVwiLFwiYnV0dG9uU2hhcGVcIjpcIm91dGxpbmVcIixcImJ1dHRvblRhcmdldFwiOnRydWUsXCJjdGFMYXlvdXRcIjpcInRocmVlLXF1YXJ0ZXJzXCIsXCJjdGFQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJhbGlnblwiOlwid2lkZVwifSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCIgY2xhc3M9XCJjOS1jdGEgYzktYmxvY2stY3RhIGNvbnRhaW5lciBhbGlnbndpZGUgcC01XCI+PGRpdiBjbGFzcz1cInJvd1wiPjxkaXYgY2xhc3M9XCJjOS1jdGEtY29udGVudCBjb2wtMTIgY29sLW1kLTlcIj48ZGl2IGNsYXNzPVwiYzktY3RhLXRleHQgYzktc2hcIj48cD5NYWtlIGEgcmVzZXJ2YXRpb24sIGJ1eSBhIHJpbmcsIGdldCBlbmdhZ2VkLCBoaWdoIGZpdmUuPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1jdGEtYnV0dG9uIGNvbC0xMiBjb2wtbWQtM1wiPjxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rIGM5LWJ1dHRvbi1zaGFwZS1vdXRsaW5lIGM5LWJ1dHRvbi1zaXplLW1lZGl1bVwiIHN0eWxlPVwiY29sb3I6IzMxMzEzMVwiPmdldCBzdGFydGVkPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KExpbmsgb3BlbnMgaW4gbmV3IHdpbmRvdyk8L3NwYW4+PC9hPjwvZGl2PjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jdGEgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MixcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc2hhd24tYW5nLW5tcFdfV3d3VlNjLXVuc3BsYXNoLmpwZ1wiLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjcsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo4MCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC40NzAwNDYwODI5NDkzMDg4LFwieVwiOjAuODY0MTk3NTMwODY0MTk3NX19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGwgYzktZ3JpZC1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo4MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKVwiPjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NDcuMDA0NjA4Mjk0OTMwODc1JSA4Ni40MTk3NTMwODY0MTk3NSU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3NoYXduLWFuZy1ubXBXX1d3d1ZTYy11bnNwbGFzaC5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuNyk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm1pblNjcmVlbkhlaWdodFwiOjQzfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBvbmUtY29sdW1uXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjQzdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4ge1widmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnQgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJCcnVuY2hcIixcInN1YmhlYWRpbmdcIjpcIkF2YWlsYWJsZSBvbiB3ZWVrZW5kcyBhbmQgaG9saWRheXNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwiZGlzcGxheUxldmVsXCI6XCI1XCIsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDEgY2xhc3M9XCJjOS10eGwgZGlzcGxheS01XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+QnJ1bmNoPC9oMT48ZGl2IGNsYXNzPVwiYzktdHhsIGRpc3BsYXktNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtBdmFpbGFibGUgb24gd2Vla2VuZHMgYW5kIGhvbGlkYXlzPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIndpZGVcIixcImNvbHVtbnNcIjozLFwiY29sdW1uc0dhcFwiOjEsXCJsYXlvdXRcIjpcImM5LTMtY29sLXdpZGVyaWdodFwiLFwidmVydGljYWxBbGlnblwiOlwiYm90dG9tXCIsXCJvdmVybGF5SHVlXCI6XCIjZmZmZmZmXCIsXCJvdmVybGF5T3BhY2l0eVwiOjEwLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYWxpZ253aWRlIGM5LWNvbHVtbi1jb250YWluZXIgcC01IG15LTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWJvdHRvbSBjOS0zLWNvbC13aWRlcmlnaHRcIj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwxKTttaXgtYmxlbmQtbW9kZTpvdmVybGF5XCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0xIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU21hbGwgUGxhdGVzXCIsXCJzdWJoZWFkaW5nXCI6XCJzZXJ2ZWQgYWxsIGRheVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+U21hbGwgUGxhdGVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtzZXJ2ZWQgYWxsIGRheTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJOYWNob3NcIixcInN1YmhlYWRpbmdcIjpcIiQxNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TmFjaG9zPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Ib21lbWFkZSB0b3J0aWxsYXMsIGNhcm5pdGFzLCBubyBiZWFucywgemVybyBiZWFucywgc3RlYWtzLCBjaGl3b3dhIGNoZWVzZSwgb3RoZXIgZ29vZCBzdHVmZjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJUYWNvc1wiLFwic3ViaGVhZGluZ1wiOlwiJDEzXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5UYWNvczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEzPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+UGxhdGUgb2YgMyBzbWFsbCB0YWNvcy4gTGlrZSB0aGUgdGluaWVzdCB0YWNvcyB5b3XigJl2ZSBldmVyIHNlZW4gZm9yIGZvdXJ0ZWVuIGJpZyBvbmVzPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkNoYXJjdXRlcmllXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkNoYXJjdXRlcmllPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5UaGlzIGlzIHdoZXJlIGl0cyBhdCBmZWxsYXMuIEJlZWYgamVya3kgaW4gbGl0dGxlIHRpbnkgc2xpY2VzIGFuZCBzb21lIHdlaXJkIGRpcHMgdGhhdCBtYWtlIG5vIHNlbnNlPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkJlZWYgVGlwc1wiLFwic3ViaGVhZGluZ1wiOlwiJDEyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5CZWVmIFRpcHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkF0IHRoaXMgZmFyIGludG8gdGhlIGZha2UgbWVudSB3ZSByYW4gb3V0IG9mIGlkZWFzPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1hYyBcXHUwMDI2YW1wOyBDaGVlc2VcIixcInN1YmhlYWRpbmdcIjpcIiQxMFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TWFjICZhbXA7IENoZWVzZTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEwPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TGV04oCZcyBiZSBob25lc3Qgd2l0aCBvdXJzZWx2ZXPigKYgbm8gb25lIGlzIGdvaW5nIHRvIG9yZGVyIHRoaXM8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjowLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FiaGlzaGVrLXNhbndhLWxpbWJ1LUxSNTU5RGNzdDcwLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLUhsTmNpZ3ZVaTRRLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLVc5T0tyeEJxaVpBLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiXSxcImlkXCI6WzczNDAsNzM0Miw3MzQxXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hYmhpc2hlay1zYW53YS1saW1idS1MUjU1OURjc3Q3MC11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1IbE5jaWd2VWk0US11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1XOU9LcnhCcWlaQS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJFbnRyZWVzXCIsXCJzdWJoZWFkaW5nXCI6XCI3YW0tbm9vblwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+RW50cmVlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7N2FtLW5vb248L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTlkgU3RyaXBcIixcInN1YmhlYWRpbmdcIjpcIiQyNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TlkgU3RyaXA8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQyNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlNhbHRlZCwgcGVwcGVyZWQsIGJ1dHRlcmVkPyBXZSBhcmUgaW4gcmVhbCB0cm91YmxlIGlmIHdlIG1lc3Mgc29tZXRoaW5nIHRoaXMgZWFzeSB1cDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJHcmlsbGVkIENoaWNrZW5cIixcInN1YmhlYWRpbmdcIjpcIiQxNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+R3JpbGxlZCBDaGlja2VuPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5HcmlsbGVkIGNoaWNrZW4gZnVsbCBvZiBuYXR1cmFsbHkgZ3Jvd24gdGhpbmdzIGFuZCBzYWRuZXNzIGNhdXNlIG5vIG9uZSBldmVyIHdhbnRzIGEgZ3JpbGxlZCBjaGlja2VuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlBvcmsgTG9pblwiLFwic3ViaGVhZGluZ1wiOlwiJDE5XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5Qb3JrIExvaW48L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxOTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlNvbWUgb3RoZXIgd2VpcmQgbWVhdCB0aGF0IEnigJl2ZSBzZWVuIGF0IHRoZSBzdG9yZSBiZWZvcmUuIEZ1bGwgb2YgaW5ncmVkaWVudHMgYW5kIHRoaW5ncy48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiS2llbGJhc2FcIixcInN1YmhlYWRpbmdcIjpcIiQxMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+S2llbGJhc2E8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlNhdXNhZ2VzIGFyZSBwcmV0dHkgZ29vZC4gTm90IHF1aXRlIHN1cmUgd2hhdCB0aGlzIGtpbmQgaXMgdGhvdWdoPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkxhbWIgQ2hvcHNcIixcInN1YmhlYWRpbmdcIjpcIiQyMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TGFtYiBDaG9wczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDIyPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+SG93IGRhcmUgeW91IHRoaW5rIGFib3V0IGVhdGluZyB0aGVzZSB0aW55IGJhYnkgYW5pbWFsczwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJWZWdnaWUgQnVyZ2VyXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlZlZ2dpZSBCdXJnZXI8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMzwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkxpa2UgdGhvc2UgZmFrZSBtZWF0IGJ1cmdlcnMuIFRoaXMgaXMgdGhlIHJlYWwgZGVhbDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJWZWdnaWUgTGFzYWduYVwiLFwic3ViaGVhZGluZ1wiOlwiJDE3XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5WZWdnaWUgTGFzYWduYTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE3PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TWFkZSB3aXRoIHRoaW5ncyB0aGF0IGFyZW7igJl0IG1lYXQ8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjoxLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3N0ZWZhbi1qb2huc29uLXhJRmJEZUdjeTQ0LXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLU00RTdYM3o4MFBRLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLWpadmxULUZ2VFpNLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiXSxcImlkXCI6WzczNjksNzMzNSw3MzM0XSxcImNhcHRpb25UaXRsZVwiOltcIkJydW5jaCBDb2NrdGFpbHNcIixcIkNoYXJjdXRlcmllIFBsYXRlXCIsXCJOb3cgdGhpcyBpcyBwb2RyYWNpbmdcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIkdldCBoYW1tZXJlZCByaWdodCBhZnRlciBjaHVyY2ghXCIsXCJJIG1lYW4gaXQncyBtb3N0bHkgZnJ1aXQgYnV0IGl0J3MgY2xvc2VcIixudWxsXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zdGVmYW4tam9obnNvbi14SUZiRGVHY3k0NC11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+QnJ1bmNoIENvY2t0YWlsczwvaDU+PHA+R2V0IGhhbW1lcmVkIHJpZ2h0IGFmdGVyIGNodXJjaCE8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1NNEU3WDN6ODBQUS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+Q2hhcmN1dGVyaWUgUGxhdGU8L2g1PjxwPkkgbWVhbiBpdCdzIG1vc3RseSBmcnVpdCBidXQgaXQncyBjbG9zZTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLWpadmxULUZ2VFpNLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5Ob3cgdGhpcyBpcyBwb2RyYWNpbmc8L2g1PjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNpZGVzXCIsXCJzdWJoZWFkaW5nXCI6XCJhZGQgZm9yICQxLjAwIC0gJDYuMDBcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPlNpZGVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDthZGQgZm9yICQxLjAwIC0gJDYuMDA8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQ2hpcHNcIixcInN1YmhlYWRpbmdcIjpcIiQ0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5DaGlwczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2lkZSBTYWxhZFwiLFwic3ViaGVhZGluZ1wiOlwiJDZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlNpZGUgU2FsYWQ8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ2PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlBlYW51dHNcIixcInN1YmhlYWRpbmdcIjpcIiQxXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5QZWFudXRzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJZb2d1cnRcIixcInN1YmhlYWRpbmdcIjpcIiQyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5Zb2d1cnQ8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQyPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkNlcmVhbFwiLFwic3ViaGVhZGluZ1wiOlwiJDRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkNlcmVhbDwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRnJlbmNoIEZyaWVzXCIsXCJzdWJoZWFkaW5nXCI6XCIkNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+RnJlbmNoIEZyaWVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVhayBCaXRlc1wiLFwic3ViaGVhZGluZ1wiOlwiJDZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlN0ZWFrIEJpdGVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicyB7XCJ0YWJBY3RpdmVcIjpcInRhYi1zYXR1cmRheVwiLFwidGFic0RhdGFcIjpbe1wic2x1Z1wiOlwidGFiLXNhdHVyZGF5XCIsXCJ0aXRsZVwiOlwiU2F0dXJkYXlcIn0se1wic2x1Z1wiOlwidGFiLXN1bmRheVwiLFwidGl0bGVcIjpcIlN1bmRheVwifV0sXCJpbnN0YW5jZUlkXCI6MCxcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdmVydGljYWwtdGFicyByb3dcIiBkYXRhLXRhYi1hY3RpdmU9XCJ0YWItc2F0dXJkYXlcIj48ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0zXCI+PGRpdiBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIiByb2xlPVwidGFibGlzdFwiPjxhIGRhdGEtdG9nZ2xlPVwicGlsbFwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItc2F0dXJkYXktMFwiIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi1zYXR1cmRheVwiPlNhdHVyZGF5PC9hPjxhIGRhdGEtdG9nZ2xlPVwicGlsbFwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItc3VuZGF5LTBcIiBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi1zdW5kYXlcIj5TdW5kYXk8L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tOVwiPjxkaXYgY2xhc3M9XCJjOS10YWJzLWNvbnRlbnQgdGFiLWNvbnRlbnQgYWxpZ24tc2VsZi1jZW50ZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItc2F0dXJkYXlcIixcInRhYkFjdGl2ZVwiOlwidGFiLXNhdHVyZGF5XCIsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS12ZXJ0aWNhbC10YWJzLXRhYiB0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgcm9sZT1cInRhYnBhbmVsXCIgaWQ9XCJ0YWItdGFiLXNhdHVyZGF5LTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWItc2F0dXJkYXlcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo2fSAtLT5cblx0XHQ8aDY+U2F0dXJkYXkgQnJ1bmNoIFNwZWNpYWxzPC9oNj5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5DaGVmIHdpbGwgbWFrZSBzb21ldGhpbmcgYW5kIHlvdXIgc2VydmVyIHdpbGwgdGVsbCB5b3Ugd2hhdCBpdCBpcyBhbmQgeW91IHdpbGwgcGF5ICQyNTwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkJvdHRvbWxlc3MgbWltb3NhcyBhbmQgd2XigJlsbCBtYWtlIHRoZSBuZXdlc3QgaGlyZSBjbGVhbiB1cCB0aGUgJDMwPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIge1wic2x1Z1wiOlwidGFiLXN1bmRheVwiLFwidGFiQWN0aXZlXCI6XCJ0YWItc2F0dXJkYXlcIixcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXZlcnRpY2FsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItc3VuZGF5LTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWItc3VuZGF5XCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6Nn0gLS0+XG5cdFx0PGg2PlN1bmRheSBCcnVuY2ggU3BlY2lhbHM8L2g2PlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkNoZWYgd2lsbCBtYWtlIG9zbWV0aGluZyBhbmQgeW91ciBzZXJ2ZXIgd2lsbCB0ZWxsIHlvdSB3aGF0IGl0IGlzIGFuZCB5b3Ugd2lsbCBwYXkgJDI1PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+RGl0Y2ggY2h1cmNoIGFuZCBwcm92ZSBpdCBmb3IgMTAlIG9mZiB5b3VyIHRvdGFsPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicy10YWIgLS0+PC9kaXY+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjowLFwiY29udGFpbmVySHVlXCI6XCIjZWVlZWVlXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjoxMH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoxMHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSgyMzgsMjM4LDIzOCwxKVwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIm5hcnJvd1wiLFwiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItbmFycm93XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjoxMH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1uYXJyb3cgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjEwdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpzZXBhcmF0b3IgLS0+XG5cdFx0PGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxuXHRcdDwhLS0gL3dwOnNlcGFyYXRvciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN1c3RhaW5hYmxlIEZvb2QgTWlzc2lvblwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCIxXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMyBjbGFzcz1cImM5LWggaDFcIj5TdXN0YWluYWJsZSBGb29kIE1pc3Npb248L2gzPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQW5kIHRoZW4sIHdlIGZpbGxlZCB0aGUgc3BhY2UgdXAgd2l0aCBhIGxpdHRsZSB0aW55IHN0b3J5IHRvIGJyZWFrIHVwIHRoZSBtZW51cyBjYXVzZSB0aGF0IG1ha2VzIHVzIHVuaXF1ZS4gT3VyIGZvb2QgaXMgbWFkZSBqdXN0IGxpa2UgYW55IG90aGVyIGZvb2QsIGluIGEga2l0Y2hlbiwgYnV0IGRvbid0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLlwiLFwidGFnTGV2ZWxcIjo0LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDQgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb24ndCBsZXQgdGhhdCBzdG9wIHlvdSBmcm9tIHJlYWRpbmcgb3VyIGRldmFzdGF0aW5nIHdlYiBjb3B5IHdoZXJlIHdlIGp1c3QgZGVzY3JpYmUgdGhlIGZvb2QgaW5zdGVhZCBvZiBsZXR0aW5nIHlvdSBwdXQgaXQgaW4geW91ciBtb3V0aCBjYXVzZSB0aGlzIGlzIGp1c3QgIGEgc2NyZWVuIG1hbi48L2g0PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c2VwYXJhdG9yIC0tPlxuXHRcdDxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cblx0XHQ8IS0tIC93cDpzZXBhcmF0b3IgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjozLFwicm93c1wiOjIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9wZXRyLXNldmNvdmljLXFFMWp4WVhpd09BLXVuc3BsYXNoLmpwZ1wiLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjgsXCJibGVuZE1vZGVcIjpcIm5vcm1hbFwiLFwibWluU2NyZWVuSGVpZ2h0XCI6ODAsXCJmb2NhbFBvaW50XCI6e1wieFwiOjAuNDcwMDQ2MDgyOTQ5MzA4OCxcInlcIjowLjg2NDE5NzUzMDg2NDE5NzV9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsIGM5LWdyaWQtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjQ3LjAwNDYwODI5NDkzMDg3NSUgODYuNDE5NzUzMDg2NDE5NzUlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9wZXRyLXNldmNvdmljLXFFMWp4WVhpd09BLXVuc3BsYXNoLmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC44KTttaXgtYmxlbmQtbW9kZTpub3JtYWxcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm1pblNjcmVlbkhlaWdodFwiOjQzfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBvbmUtY29sdW1uXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjQzdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4ge1widmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnQgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJEaW5uZXJcIixcInN1YmhlYWRpbmdcIjpcIk5ldyBGYWxsIE1lbnVcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwiZGlzcGxheUxldmVsXCI6XCI1XCIsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDEgY2xhc3M9XCJjOS10eGwgZGlzcGxheS01XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+RGlubmVyPC9oMT48ZGl2IGNsYXNzPVwiYzktdHhsIGRpc3BsYXktNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtOZXcgRmFsbCBNZW51PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIndpZGVcIixcImNvbHVtbnNcIjozLFwiY29sdW1uc0dhcFwiOjEsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJib3R0b21cIixcIm92ZXJsYXlIdWVcIjpcIiNmZmZmZmZcIixcIm92ZXJsYXlPcGFjaXR5XCI6MTAsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImNvbnRhaW5lclBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBhbGlnbndpZGUgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgbXktNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtYm90dG9tIGM5LTMtY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTEgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTbWFsbCBQbGF0ZXNcIixcInN1YmhlYWRpbmdcIjpcInNlcnZlZCBhbGwgZGF5XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5TbWFsbCBQbGF0ZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3NlcnZlZCBhbGwgZGF5PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk5hY2hvc1wiLFwic3ViaGVhZGluZ1wiOlwiJDE2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5OYWNob3M8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkhvbWVtYWRlIHRvcnRpbGxhcywgY2Fybml0YXMsIG5vIGJlYW5zLCB6ZXJvIGJlYW5zLCBzdGVha3MsIGNoaXdvd2EgY2hlZXNlLCBvdGhlciBnb29kIHN0dWZmPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkNoYXJjdXRlcmllXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkNoYXJjdXRlcmllPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5UaGlzIGlzIHdoZXJlIGl0cyBhdCBmZWxsYXMuIEJlZWYgamVya3kgaW4gbGl0dGxlIHRpbnkgc2xpY2VzIGFuZCBzb21lIHdlaXJkIGRpcHMgdGhhdCBtYWtlIG5vIHNlbnNlPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkJlZWYgVGlwc1wiLFwic3ViaGVhZGluZ1wiOlwiJDEyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5CZWVmIFRpcHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkF0IHRoaXMgZmFyIGludG8gdGhlIGZha2UgbWVudSB3ZSByYW4gb3V0IG9mIGlkZWFzPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1hYyBcXHUwMDI2YW1wOyBDaGVlc2VcIixcInN1YmhlYWRpbmdcIjpcIiQxMFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TWFjICZhbXA7IENoZWVzZTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEwPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TGV04oCZcyBiZSBob25lc3Qgd2l0aCBvdXJzZWx2ZXPigKYgbm8gb25lIGlzIGdvaW5nIHRvIG9yZGVyIHRoaXM8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQmFjb24gU3RpY2tcIixcInN1YmhlYWRpbmdcIjpcIiQ0MFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+QmFjb24gU3RpY2s8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ0MDwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlRoaXMgaXMgJDQwIG9mIGJhY29uIG9uIGEgc3RpY2suIFByZXBhcmUgeW91ciB2ZWlucyBmb3IgY2hvbGVzdGVyb2w8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjoyLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FiaGlzaGVrLXNhbndhLWxpbWJ1LUxSNTU5RGNzdDcwLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLUhsTmNpZ3ZVaTRRLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLVc5T0tyeEJxaVpBLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiXSxcImlkXCI6WzczNDAsNzM0Miw3MzQxXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hYmhpc2hlay1zYW53YS1saW1idS1MUjU1OURjc3Q3MC11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1IbE5jaWd2VWk0US11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9icm9va2UtbGFyay1XOU9LcnhCcWlaQS11bnNwbGFzaC0xMDI0eDY4My5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJFbnRyZWVzXCIsXCJzdWJoZWFkaW5nXCI6XCI3YW0tbm9vblwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+RW50cmVlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7N2FtLW5vb248L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTlkgU3RyaXBcIixcInN1YmhlYWRpbmdcIjpcIiQyNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TlkgU3RyaXA8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQyNjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlNhbHRlZCwgcGVwcGVyZWQsIGJ1dHRlcmVkPyBXZSBhcmUgaW4gcmVhbCB0cm91YmxlIGlmIHdlIG1lc3Mgc29tZXRoaW5nIHRoaXMgZWFzeSB1cDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJHcmlsbGVkIENoaWNrZW5cIixcInN1YmhlYWRpbmdcIjpcIiQxNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+R3JpbGxlZCBDaGlja2VuPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuXHRcdDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5HcmlsbGVkIGNoaWNrZW4gZnVsbCBvZiBuYXR1cmFsbHkgZ3Jvd24gdGhpbmdzIGFuZCBzYWRuZXNzIGNhdXNlIG5vIG9uZSBldmVyIHdhbnRzIGEgZ3JpbGxlZCBjaGlja2VuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlBvcmsgTG9pblwiLFwic3ViaGVhZGluZ1wiOlwiJDE5XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5Qb3JrIExvaW48L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxOTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlNvbWUgb3RoZXIgd2VpcmQgbWVhdCB0aGF0IEnigJl2ZSBzZWVuIGF0IHRoZSBzdG9yZSBiZWZvcmUuIEZ1bGwgb2YgaW5ncmVkaWVudHMgYW5kIHRoaW5ncy48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiS2llbGJhc2FcIixcInN1YmhlYWRpbmdcIjpcIiQxMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+S2llbGJhc2E8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMjwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlNhdXNhZ2VzIGFyZSBwcmV0dHkgZ29vZC4gTm90IHF1aXRlIHN1cmUgd2hhdCB0aGlzIGtpbmQgaXMgdGhvdWdoPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkxhbWIgQ2hvcHNcIixcInN1YmhlYWRpbmdcIjpcIiQyMlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+TGFtYiBDaG9wczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDIyPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+SG93IGRhcmUgeW91IHRoaW5rIGFib3V0IGVhdGluZyB0aGVzZSB0aW55IGJhYnkgYW5pbWFsczwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJWZWdnaWUgQnVyZ2VyXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlZlZ2dpZSBCdXJnZXI8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxMzwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG5cdFx0PHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkxpa2UgdGhvc2UgZmFrZSBtZWF0IGJ1cmdlcnMuIFRoaXMgaXMgdGhlIHJlYWwgZGVhbDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJWZWdnaWUgTGFzYWduYVwiLFwic3ViaGVhZGluZ1wiOlwiJDE3XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5WZWdnaWUgTGFzYWduYTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE3PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TWFkZSB3aXRoIHRoaW5ncyB0aGF0IGFyZW7igJl0IG1lYXQ8L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRmxhdGJyZWFkIFBpenphXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTlcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkZsYXRicmVhZCBQaXp6YTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE5PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cblx0XHQ8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TWFkZSB3aXRoIHRvbWF0b2VzLCBtZWF0LCBhbmQgbXlzdGVyeSBzYXVjZTwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjMsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcnVzdGljLXZlZ2FuLXBSS0RKWldOVXZZLXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2plbm5pZmVyLXNjaG1pZHQtek9sUTdsRi0zdnMtdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZWRnYXItY2FzdHJlam9uLTFDc2FWZHdmSWV3LXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiXSxcImlkXCI6WzczMzksNzMzNiw3MzM3XSxcImNhcHRpb25UaXRsZVwiOltcIkNoZXJub2J5bCBCdXJnZXJcIixcIlNpZGUgU2FsYWRcIixcIkNoZXJub2J5bCBGcnVpdFwiXSxcImNhcHRpb25Db250ZW50XCI6W1wiRm9yIGFsbCB5b3UgdmVnYW5zIG91dCB0aGVyZVwiLFwiVGhpcyB0aGluZyBpcyBmdWxsIG9mIHdlaXJkbmVzc1wiLFwiR29vZCBmb3Igc3Ryb25rIGJvbmVzXCJdfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3J1c3RpYy12ZWdhbi1wUktESlpXTlV2WS11bnNwbGFzaC02ODN4MTAyNC5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+Q2hlcm5vYnlsIEJ1cmdlcjwvaDU+PHA+Rm9yIGFsbCB5b3UgdmVnYW5zIG91dCB0aGVyZTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2plbm5pZmVyLXNjaG1pZHQtek9sUTdsRi0zdnMtdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNpZGUgU2FsYWQ8L2g1PjxwPlRoaXMgdGhpbmcgaXMgZnVsbCBvZiB3ZWlyZG5lc3M8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lZGdhci1jYXN0cmVqb24tMUNzYVZkd2ZJZXctdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkNoZXJub2J5bCBGcnVpdDwvaDU+PHA+R29vZCBmb3Igc3Ryb25rIGJvbmVzPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjI3fSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjI3cHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNpZGVzXCIsXCJzdWJoZWFkaW5nXCI6XCJhZGQgZm9yICQxLjAwIC0gJDYuMDBcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPlNpZGVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDthZGQgZm9yICQxLjAwIC0gJDYuMDA8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQ2hpcHNcIixcInN1YmhlYWRpbmdcIjpcIiQ0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5DaGlwczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDQ8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2lkZSBTYWxhZFwiLFwic3ViaGVhZGluZ1wiOlwiJDZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlNpZGUgU2FsYWQ8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ2PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZyZW5jaCBGcmllc1wiLFwic3ViaGVhZGluZ1wiOlwiJDZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkZyZW5jaCBGcmllczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlYWsgQml0ZXNcIixcInN1YmhlYWRpbmdcIjpcIiQ2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5TdGVhayBCaXRlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+YCxcblx0XHRzZXJ2aWNlTGFuZGluZ1BhZ2U6IGA8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjowLFwicm93c1wiOjIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcImJnSW1nQXR0YWNoXCI6dHJ1ZSxcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OSxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjkwfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktZml4ZWQgYzktZ3JpZC1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo5MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKVwiPjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC45KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6MTU1fSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjE1NXB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTZXJ2aWNlIE9mZmVyaW5nXCIsXCJzdWJoZWFkaW5nXCI6XCJMYW5kaW5nIFBhZ2UgVGVtcGxhdGVcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidHlwZVwiOlwiYzktdHhsIGRpc3BsYXktXCIsXCJ0ZXh0Q29sb3JcIjpcIiNlZWVlZWVcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMSBjbGFzcz1cImM5LXR4bCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2VlZWVlZVwiPlNlcnZpY2UgT2ZmZXJpbmc8L2gxPjxkaXYgY2xhc3M9XCJjOS10eGwgZGlzcGxheS0xXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO0xhbmRpbmcgUGFnZSBUZW1wbGF0ZTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzcGFjZXIgLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MyxcImNvbHVtbnNHYXBcIjoxLFwibGF5b3V0XCI6XCJjOS0zLWNvbC1lcXVhbFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCIsXCJvdmVybGF5SHVlXCI6XCIjZWVlZWVlXCIsXCJvdmVybGF5T3BhY2l0eVwiOjEwLFwiYmxlbmRNb2RlXCI6XCJub3JtYWxcIixcIm1pblNjcmVlbkhlaWdodFwiOjEsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImNvbnRhaW5lclBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBteS01IGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0zIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgYzktMy1jb2wtZXF1YWxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MXZoXCI+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM4LDIzOCwyMzgsMSk7bWl4LWJsZW5kLW1vZGU6bm9ybWFsXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0xIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjN9IC0tPlxuXHRcdDxoMz5TdGVwIDE8L2gzPlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4gc3Vydml2YWwgc3RyYXRlZ2llcyB0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uJm5ic3A7PC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjozfSAtLT5cblx0XHQ8aDM+U3RlcCAyPC9oMz5cblx0XHQ8IS0tIC93cDpoZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPkF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgaW50byBsb3RzIG9mIGJvcmluZyBzaGl0LjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6M30gLS0+XG5cdFx0PGgzPlN0ZXAgMzwvaDM+XG5cdFx0PCEtLSAvd3A6aGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5DYXBpdGFsaXplIG9uIGxvdyBoYW5naW5nIGZydWl0IHRvIGlkZW50aWZ5IGEgYmFsbHBhcmsgdmFsdWUgYWRkZWQgYWN0aXZpdHkgdG8gYmV0YSB0ZXN0LjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJ3aWRlXCIsXCJjb2x1bW5zXCI6MixcImxheW91dFwiOlwiYzktMi1jb2wtZXF1YWxcIixcIm1pblNjcmVlbkhlaWdodFwiOjF9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYWxpZ253aWRlIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktMi1jb2wtZXF1YWxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MXZoXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjR9IC0tPlxuXHRcdDxoND5SZWFzb24gIzE8L2g0PlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+TmFub3RlY2hub2xvZ3kgaW1tZXJzaW9uIGFsb25nIHRoZSBpbmZvcm1hdGlvbiBoaWdod2F5IHdpbGwgY2xvc2UgdGhlIGxvb3Agb24gZm9jdXNpbmcgc29sZWx5IG9uIHRoZSBib3R0b20gbGluZS48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjR9IC0tPlxuXHRcdDxoND5SZWFzb24gTWF5YmUgMywwMDA8L2g0PlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+UG9kY2FzdGluZyBvcGVyYXRpb25hbCBjaGFuZ2UgbWFuYWdlbWVudCBpbnNpZGUgb2Ygd29ya2Zsb3dzIHRvIGVzdGFibGlzaCBhIGZyYW1ld29yay4gVGFraW5nIHNlYW1sZXNzIGtleSBwZXJmb3JtYW5jZTwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLmpwZ1wiLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjgsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo2MCxcImNvbnRhaW5lclZpZGVvVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvUGV4ZWxzLVZpZGVvcy0yNzA2LTEubXA0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGwgYzktZ3JpZC1oYXMtYmFja2dyb3VuZCBjOS1ncmlkLWhhcy12aWRlb1wiIHN0eWxlPVwibWluLWhlaWdodDo2MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKVwiPjxkaXYgY2xhc3M9XCJjOS12aWRlby1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiYzktZW1iZWQtY29udGFpbmVyXCI+PHZpZGVvIGlkPVwiY29udGFpbmVyVmlkZW8tMlwiIGNsYXNzPVwiYzktdmlkZW8tY3VzdG9tXCIgcGxheXNpbmxpbmUgYXV0b3BsYXkgbXV0ZWQgbG9vcCBzdHlsZT1cIm1pbi1oZWlnaHQ6NjB2aFwiPjxzb3VyY2Ugc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L1BleGVscy1WaWRlb3MtMjcwNi0xLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+PC92aWRlbz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC13aWRlbGVmdFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTItY29sLXdpZGVsZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2NoZWR1bGUgQ29uc3VsdGF0aW9uXCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjJcIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oIGgyXCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+U2NoZWR1bGUgQ29uc3VsdGF0aW9uPC9oMz48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk9uZSBvZiBvdXIgcHJvZmVzc2lvbmFscyB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIHByb2Nlc3NcIixcInRhZ0xldmVsXCI6NCxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDQgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPk9uZSBvZiBvdXIgcHJvZmVzc2lvbmFscyB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIHByb2Nlc3M8L2g0PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjQyfSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjQycHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmJ1dHRvbiB7XCJ0ZXh0Q29sb3JcIjpcInZpdmlkLWdyZWVuLWN5YW5cIixcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtb3V0bGluZVwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGlzLXN0eWxlLW91dGxpbmVcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGluayBoYXMtdGV4dC1jb2xvciBoYXMtdml2aWQtZ3JlZW4tY3lhbi1jb2xvclwiIGhyZWY9XCIjXCI+U2NoZWR1bGUgTm93PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjMsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidW5pdFwiOlwicHhcIixcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBteS01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZBUSBUb2dnbGVzXCIsXCJzdWJoZWFkaW5nXCI6XCJ3aXRoIGltYWdlIGNhcm91c2Vsc1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS1oXCI+RkFRIFRvZ2dsZXM8L2gxPjxkaXYgY2xhc3M9XCJjOS1oIGgxXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3dpdGggaW1hZ2UgY2Fyb3VzZWxzPC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzIHtcInRvZ2dsZUNvdW50XCI6NSxcImluc3RhbmNlSWRcIjowLFwiY2xhc3NOYW1lXCI6XCJpcy1zdHlsZS1kZWZhdWx0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzIGlzLXN0eWxlLWRlZmF1bHQgYWNjb3JkaW9uXCIgaWQ9XCJhY2NvcmRpb24tMFwiPjwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjEsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMS0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UxLTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjEuwqA8L3N0cm9uZz5Ib3cgbG9uZyBpcyB0aGUgY29uc3VsdGF0aW9uPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UxLTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPlVzZXIgZ2VuZXJhdGVkIGNvbnRlbnQgaW4gcmVhbC10aW1lIHdpbGwgaGF2ZSBtdWx0aXBsZSB0b3VjaHBvaW50cyBmb3Igb2Zmc2hvcmluZy48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoyLFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzItMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMi0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4yLjwvc3Ryb25nPsKgRG8geW91IGhhdmUgdG8gZG8gYSBjb25zdWx0YXRpb24/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTItMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+VXNlciBnZW5lcmF0ZWQgY29udGVudCBpbiByZWFsLXRpbWUgd2lsbCBoYXZlIG11bHRpcGxlIHRvdWNocG9pbnRzIGZvciBvZmZzaG9yaW5nLjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjMsXCJpZFwiOjB9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMy0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UzLTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjMuPC9zdHJvbmc+wqBEbyB5b3Ugd29yayB3aXRoIG5vdCBmb3IgcHJvZml0cyBvciBub24tcHJvZml0cz88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMy0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5Vc2VyIGdlbmVyYXRlZCBjb250ZW50IGluIHJlYWwtdGltZSB3aWxsIGhhdmUgbXVsdGlwbGUgdG91Y2hwb2ludHMgZm9yIG9mZnNob3JpbmcuPC9wPlxuXHRcdDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6NCxcImlkXCI6MH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmc0LTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTQtMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+NC48L3N0cm9uZz7CoENhbiBJIHNlZSB3aGF0IGFuIGltYWdlIGNhcm91c2VsIGxvb2tzIGxpa2U/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTQtMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjMsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCJdLFwiaWRcIjpbNzQ0OCw3NDQ5LDc0NTBdLFwiY2FwdGlvblRpdGxlXCI6W1wiU2xpZGUgQ2FwdGlvblwiLFwiU2xpZGUgQ2FwdGlvblwiLFwiU2xpZGUgQ2FwdGlvbiAzXCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCJdfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb24gMzwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjo1LFwiaWRcIjowfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzUtMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlNS0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz41LsKgPC9zdHJvbmc+UmVhZGluZyB0aGUgd2hvbGUgdGhpbmc6IGNhbiB3ZSBkbyBpdD8gTm8uPC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTUtMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjQsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCJdLFwiaWRcIjpbNzQ0OCw3NDQ5LDc0NTBdLFwiY2FwdGlvblRpdGxlXCI6W1wiU2xpZGUgQ2FwdGlvblwiLFwiU2xpZGUgQ2FwdGlvblwiLFwiU2xpZGUgQ2FwdGlvbiAzXCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCJdfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTRcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci00XCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci00XCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItNFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb24gMzwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItNFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItNFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuXHRcdDxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcyAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjEzfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiT3VyIEJyYW5kc1wiLFwic3ViaGVhZGluZ1wiOlwiMjAwMCAtIDIwMTBcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMSBjbGFzcz1cImM5LWhcIj5PdXIgQnJhbmRzPC9oMT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MSxcImF1dG9TbGlkZVwiOmZhbHNlfSAtLT5cblx0XHQ8ZGl2IGlkPVwiYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBjbGFzcz1cImM5LWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiZmFsc2VcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjAsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48IS0tIHdwOmdhbGxlcnkge1wiaWRzXCI6Wzc0MzcsNzQzOCw3NDM5LDc0NDBdLFwiY29sdW1uc1wiOjQsXCJpbWFnZUNyb3BcIjpmYWxzZX0gLS0+XG5cdFx0PHVsIGNsYXNzPVwid3AtYmxvY2stZ2FsbGVyeSBjb2x1bW5zLTRcIj48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTguanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzdcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby04L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzN1wiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNy5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzOFwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTcvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM4XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby02LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM5XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNi9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzlcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTUuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0NDBcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby01L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQ0MFwiLz48L2ZpZ3VyZT48L2xpPjwvdWw+XG5cdFx0PCEtLSAvd3A6Z2FsbGVyeSAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjoxLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW1cIj48IS0tIHdwOmdhbGxlcnkge1wiaWRzXCI6Wzc0NDAsNzQzOSw3NDM4LDc0MzddLFwiY29sdW1uc1wiOjQsXCJpbWFnZUNyb3BcIjpmYWxzZX0gLS0+XG5cdFx0PHVsIGNsYXNzPVwid3AtYmxvY2stZ2FsbGVyeSBjb2x1bW5zLTRcIj48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTUuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0NDBcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby01L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQ0MFwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNi5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzOVwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTYvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM5XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby03LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM4XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNy9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzhcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTguanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzdcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby04L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzN1wiLz48L2ZpZ3VyZT48L2xpPjwvdWw+XG5cdFx0PCEtLSAvd3A6Z2FsbGVyeSAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjoyLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW1cIj48IS0tIHdwOmdhbGxlcnkge1wiaWRzXCI6Wzc0NDAsNzQzOSw3NDM4LDc0MzddLFwiY29sdW1uc1wiOjQsXCJpbWFnZUNyb3BcIjpmYWxzZX0gLS0+XG5cdFx0PHVsIGNsYXNzPVwid3AtYmxvY2stZ2FsbGVyeSBjb2x1bW5zLTRcIj48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTUuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0NDBcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby01L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQ0MFwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNi5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzOVwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTYvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM5XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby03LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM4XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNy9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzhcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTguanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzdcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby04L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzN1wiLz48L2ZpZ3VyZT48L2xpPjwvdWw+XG5cdFx0PCEtLSAvd3A6Z2FsbGVyeSAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjo2MH0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDo2MHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NjB9IC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6NjBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjR9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLXdpZGVsZWZ0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS0yLWNvbC13aWRlbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo0fSAtLT5cblx0XHQ8aDQ+U3RlcCAxIC0gSW50ZXJtZWRpYXRlIFN1YmhlYWRpbmc8L2g0PlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+TmFub3RlY2hub2xvZ3kgaW1tZXJzaW9uIGFsb25nIHRoZSBpbmZvcm1hdGlvbiBoaWdod2F5IHdpbGwgY2xvc2UgdGhlIGxvb3Agb24gZm9jdXNpbmcgc29sZWx5IG9uIHRoZSBib3R0b20gbGluZS4gT3JnYW5pY2FsbHkgZ3JvdyB0aGUgaG9saXN0aWMgd29ybGQgdmlldyBvZiBkaXNydXB0aXZlIGlubm92YXRpb24gdmlhIHdvcmtwbGFjZSBkaXZlcnNpdHkgYW5kIGVtcG93ZXJtZW50LjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpsaXN0IC0tPlxuXHRcdDx1bD48bGk+RG93bmxvYWQgZG9jdW1lbnRzIGZyb20gbGluazwvbGk+PGxpPkZpbGwgb3V0IGFuZCByZXR1cm4gZG9jdW1lbnRzIHRvIGNsaWVudDwvbGk+PGxpPlJldmlldyBmb3JtcyB3aXRoIGludGVybmFsIHRlYW08L2xpPjxsaT5TZW5kIHN1cGVyZmx1b3VzIHN0YXR1cyBlbWFpbHM8L2xpPjxsaT5FcnJvbmVhb3VzbHkgbWlzc3BlbGwgY29ycG9yYXRlIHdvcmRzPC9saT48bGk+VHJ5IG5vdCB0byBkaWUgb2YgZWF0aW5nIHRvbyBtYW55IGhhbWJ1cmdlcnM8L2xpPjxsaT5JdCdzIGhhcmRlciB0aGFuIHlvdSB0aGluazwvbGk+PC91bD5cblx0XHQ8IS0tIC93cDpsaXN0IC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjowLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3NlcnZpY2VzLWxhbmRpbmctcGFnZS1iZy02ODN4MTAyNC5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9ydXN0aWMtdmVnYW4tcFJLREpaV05VdlktdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZWRnYXItY2FzdHJlam9uLTFDc2FWZHdmSWV3LXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiXSxcImlkXCI6Wzc0MTYsNzMzOSw3MzM3XSxcImNhcHRpb25UaXRsZVwiOltcIlNsaWRlIENhcHRpb25cIixcIkNoZXJub2J5bCBCdXJnZXJcIixcIkNoZXJub2J5bCBPcmFuZ2VzXCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJTdGVwIDEgY2FwdGlvblwiLFwiSSdkIGVhdCBpdCBmb3Igc3VyZS5cIixcIkRvbid0IGVhdCB0aGVtLlwiXX0gLS0+XG5cdFx0PGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zZXJ2aWNlcy1sYW5kaW5nLXBhZ2UtYmctNjgzeDEwMjQuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlN0ZXAgMSBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcnVzdGljLXZlZ2FuLXBSS0RKWldOVXZZLXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5DaGVybm9ieWwgQnVyZ2VyPC9oNT48cD5JJ2QgZWF0IGl0IGZvciBzdXJlLjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2VkZ2FyLWNhc3RyZWpvbi0xQ3NhVmR3Zklldy11bnNwbGFzaC02ODN4MTAyNC5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+Q2hlcm5vYnlsIE9yYW5nZXM8L2g1PjxwPkRvbid0IGVhdCB0aGVtLjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjUsXCJjb250YWluZXJIdWVcIjpcIiNlOWU5ZTlcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSgyMzMsMjMzLDIzMywxKVwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIm5hcnJvd1wiLFwiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLWVxdWFsXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LTItY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjR9IC0tPlxuXHRcdDxoND5TdGVwIDI8L2g0PlxuXHRcdDwhLS0gL3dwOmhlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+Tm9jdXNpbmcgc29sZWx5IG9uIHRoZSBib3R0b20gbGluZWFub3QgZWNobm9sb2d5IGltbWVyc2lvbiBhbG9uZyB0aGUgaW5mb3JtYXRpb24gaGlnaHdheSB3aWxsIGNsb3NlIHRoZSBkb29yIG9uIHlvdXIgZm9vdDwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6NH0gLS0+XG5cdFx0PGg0PlN0ZXAgMzwvaDQ+XG5cdFx0PCEtLSAvd3A6aGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD5OYW5vdGVjaG5vbG9neSBpbW1lcnNpb24gYWxvbmcgdGhlIGluZm9ybWF0aW9uIGhpZ2h3YXkgd2lsbCBjbG9zZSB0aGUgbG9vcC4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5MZWFybiBob3cgdG8gZG8gdGhlIHRoaW5nPC9hPjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jdGEge1widHlwZVwiOlwiYzktc2hcIixcImJ1dHRvblRleHRcIjpcIldhdGNoIFZpZGVvXCIsXCJidXR0b25BbGlnbm1lbnRcIjpcInJpZ2h0XCIsXCJidXR0b25UZXh0Q29sb3JcIjpcIiMwMGQwODRcIixcImJ1dHRvblNpemVcIjpcImM5LWJ1dHRvbi1zaXplLWxhcmdlXCIsXCJidXR0b25TaGFwZVwiOlwib3V0bGluZVwiLFwiYnV0dG9uVGFyZ2V0XCI6dHJ1ZSxcImN0YUxheW91dFwiOlwidGhyZWUtcXVhcnRlcnNcIixcImN0YVBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImN0YVdpZHRoXCI6XCJjb250YWluZXItZmx1aWRcIixcImN0YUJhY2tncm91bmRDb2xvclwiOlwiIzQwNDA0MVwiLFwiY3RhVGV4dENvbG9yXCI6XCIjZWVlZWVlXCIsXCJhbGlnblwiOlwiZnVsbFwifSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY0LDY0LDY1LDEpO3RleHQtYWxpZ246cmlnaHRcIiBjbGFzcz1cImM5LWN0YSBjOS1ibG9jay1jdGEgY29udGFpbmVyLWZsdWlkIGFsaWduZnVsbCBwLTVcIj48ZGl2IGNsYXNzPVwicm93XCI+PGRpdiBjbGFzcz1cImM5LWN0YS1jb250ZW50IGNvbC0xMiBjb2wtbWQtOVwiPjxkaXYgY2xhc3M9XCJjOS1jdGEtdGV4dCBjOS1zaFwiIHN0eWxlPVwiY29sb3I6I2VlZWVlZVwiPjxwPldhdGNoIG91ciB2aWRlbyB3YWxrIHRocm91Z2ggdG8gZ2V0IGEgZ3VpZGVkIHRvdXIuPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1jdGEtYnV0dG9uIGNvbC0xMiBjb2wtbWQtM1wiPjxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rIGM5LWJ1dHRvbi1zaGFwZS1vdXRsaW5lIGM5LWJ1dHRvbi1zaXplLWxhcmdlXCIgc3R5bGU9XCJjb2xvcjojMDBkMDg0XCI+V2F0Y2ggVmlkZW88c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oTGluayBvcGVucyBpbiBuZXcgd2luZG93KTwvc3Bhbj48L2E+PC9kaXY+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2N0YSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjo3MH0gLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDo3MHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cblx0XHQ8IS0tIC93cDpzcGFjZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzZXBhcmF0b3IgLS0+XG5cdFx0PGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxuXHRcdDwhLS0gL3dwOnNlcGFyYXRvciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk5pbmUgTW9yZSBTZWFzb25zwqBcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMSBjbGFzcz1cImM5LWhcIj5OaW5lIE1vcmUgU2Vhc29uc8KgPC9oMT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjo2LFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInVuaXRcIjpcInB4XCIsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgbXktNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLWVxdWFsXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS0yLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnF1b3RlIC0tPlxuXHRcdDxibG9ja3F1b3RlIGNsYXNzPVwid3AtYmxvY2stcXVvdGVcIj48cD5OaW5lIG1vcmUgc2Vhc29ucyB1bnRpbCBJIGdldCB0aGF0IGRpcHBpbmcgc3plY2h1YW4gc2F1Y2UhIEZvciBuaW5ldHktc2V2ZW4gbW9yZSB5ZWFycywgTW9ydHkhIEkgd2FudCB0aGF0IG1jbnVnZ3V0IHNhdWNlIE1vcnR5ISBHdWVzcyBXaG8hPC9wPjxjaXRlPkEgUGVyc29uIFdyb3RlIHRoaXM8L2NpdGU+PC9ibG9ja3F1b3RlPlxuXHRcdDwhLS0gL3dwOnF1b3RlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YnV0dG9uIHtcImFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbiBhbGlnbmNlbnRlclwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rXCIgaHJlZj1cIiNcIj5TaWduIHVwIG5vdzwvYT48L2Rpdj5cblx0XHQ8IS0tIC93cDpidXR0b24gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjEsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCJdLFwiaWRcIjpbNzQ0OCw3NDQ5LDc0NTBdLFwiY2FwdGlvblRpdGxlXCI6W1wiT2ZmaWNlIEludGVyaW9yXCIsXCJMaWJyYXJ5IEludGVyaW9yXCIsXCJPZmZpY2UgQ2hhaXJzXCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJTbGlkZSBjYXB0aW9uIGdvZXMgaGVyZVwiLFwiU3ViaGVhZGluZyBpbmZvcm1hdGlvbiB3b3VsZCBnbyBoZXJlXCIsXCJEb24ndCBzaXQgb24gdGhlbSBvciB5b3UncmUgZmlyZWRcIl19IC0tPlxuXHRcdDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+T2ZmaWNlIEludGVyaW9yPC9oNT48cD5TbGlkZSBjYXB0aW9uIGdvZXMgaGVyZTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+TGlicmFyeSBJbnRlcmlvcjwvaDU+PHA+U3ViaGVhZGluZyBpbmZvcm1hdGlvbiB3b3VsZCBnbyBoZXJlPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1Pk9mZmljZSBDaGFpcnM8L2g1PjxwPkRvbid0IHNpdCBvbiB0aGVtIG9yIHlvdSdyZSBmaXJlZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjcsXCJtaW5TY3JlZW5IZWlnaHRcIjo3Nn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDo3NnZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwiZnVsbFwiLFwiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItZmx1aWRcIixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2dpcmxzLWluLWJnLWNvbnRhaW5lci1ibG9jay5qcGdcIixcImJnSW1nQXR0YWNoXCI6dHJ1ZSxcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjgwLFwiZm9jYWxQb2ludFwiOntcInhcIjowLjUxNjEyOTAzMjI1ODA2NDUsXCJ5XCI6MX19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgYWxpZ25mdWxsIGM5LWNvbHVtbi1jb250YWluZXIgYzktZml4ZWQgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uIGM5LWNvbHVtbnMtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODB2aFwiPjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NTEuNjEyOTAzMjI1ODA2NDUlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2dpcmxzLWluLWJnLWNvbnRhaW5lci1ibG9jay5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuNSk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4ge1widmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnQgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlclwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJBYm91dCBVc1wiLFwic3ViaGVhZGluZ1wiOlwiRXN0LiAyMDE5XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6MyxcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDMgY2xhc3M9XCJjOS10eGwgZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5BYm91dCBVczwvaDM+PGRpdiBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTNcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7RXN0LiAyMDE5PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjgsXCJjb250YWluZXJIdWVcIjpcIiNlZWVlZWVcIixcIm1pblNjcmVlbkhlaWdodFwiOjUwLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInVuaXRcIjpcInB4XCIsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgbXktNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NTB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM4LDIzOCwyMzgsMSlcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjoxMH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1uYXJyb3cgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIG9uZS1jb2x1bW5cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MTB2aFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk91ciBNaXNzaW9uXCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjFcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgzIGNsYXNzPVwiYzktaCBoMVwiPk91ciBNaXNzaW9uPC9oMz48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnNlcGFyYXRvciAtLT5cblx0XHQ8aHIgY2xhc3M9XCJ3cC1ibG9jay1zZXBhcmF0b3JcIi8+XG5cdFx0PCEtLSAvd3A6c2VwYXJhdG9yIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQW5kIHRoZW4sIHdlIGZpbGxlZCB0aGUgc3BhY2UgdXAgd2l0aCBhIGxpdHRsZSB0aW55IHN0b3J5IHRvIGJyZWFrIHVwIHRoZSBtZW51cyBjYXVzZSB0aGF0IG1ha2VzIHVzIHVuaXF1ZS4gT3VyIGZvb2QgaXMgbWFkZSBqdXN0IGxpa2UgYW55IG90aGVyIGZvb2QsIGluIGEga2l0Y2hlbiwgYnV0IGRvbid0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLlwiLFwidGFnTGV2ZWxcIjo1LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDUgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb24ndCBsZXQgdGhhdCBzdG9wIHlvdSBmcm9tIHJlYWRpbmcgb3VyIGRldmFzdGF0aW5nIHdlYiBjb3B5IHdoZXJlIHdlIGp1c3QgZGVzY3JpYmUgdGhlIGZvb2QgaW5zdGVhZCBvZiBsZXR0aW5nIHlvdSBwdXQgaXQgaW4geW91ciBtb3V0aCBjYXVzZSB0aGlzIGlzIGp1c3QgIGEgc2NyZWVuIG1hbi48L2g1PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzcGFjZXIgLS0+XG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c2VwYXJhdG9yIC0tPlxuXHRcdDxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cblx0XHQ8IS0tIC93cDpzZXBhcmF0b3IgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJQcm9ncmFtIEJlbmVmaXRzXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDEgY2xhc3M9XCJjOS1oXCI+UHJvZ3JhbSBCZW5lZml0czwvaDE+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6OSxcInJvd3NcIjoyLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInVuaXRcIjpcInB4XCIsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgbXktNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIm5hcnJvd1wiLFwiY29sdW1uc1wiOjMsXCJjb2x1bW5zR2FwXCI6MSxcImxheW91dFwiOlwiYzktMy1jb2wtZXF1YWxcIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItbmFycm93XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktMy1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTEgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDppbWFnZSB7XCJpZFwiOjc1MjB9IC0tPlxuXHRcdDxmaWd1cmUgY2xhc3M9XCJ3cC1ibG9jay1pbWFnZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3RocmVlLWdpcmxzLWRyaW5raW5nLWJlZXJzLTEwMjR4NjgyLmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwid3AtaW1hZ2UtNzUyMFwiLz48L2ZpZ3VyZT5cblx0XHQ8IS0tIC93cDppbWFnZSAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1vcmUgRHJpbmtpbmcgd2l0aCBGcmllbmRzXCIsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+TW9yZSBEcmlua2luZyB3aXRoIEZyaWVuZHM8L2g1PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRXNwZWNpYWxseSBhdCBoYXBweSBob3VyXCIsXCJ0YWdMZXZlbFwiOjYsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNiBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+RXNwZWNpYWxseSBhdCBoYXBweSBob3VyPC9oNj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD48YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5MZWFybiBtb3JlPC9hPjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDppbWFnZSB7XCJpZFwiOjc1MjF9IC0tPlxuXHRcdDxmaWd1cmUgY2xhc3M9XCJ3cC1ibG9jay1pbWFnZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3N0b2NrLWltYWdlLTMtMTAyNHg2ODIuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJ3cC1pbWFnZS03NTIxXCIvPjwvZmlndXJlPlxuXHRcdDwhLS0gL3dwOmltYWdlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTW9yZSBBZHZlbnR1cmVzXCIsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+TW9yZSBBZHZlbnR1cmVzPC9oNT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkVzcGVjaWFsbHkgd2l0aCB0aGUgZHVkZXNcIixcInRhZ0xldmVsXCI6NixcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg2IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5Fc3BlY2lhbGx5IHdpdGggdGhlIGR1ZGVzPC9oNj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnBhcmFncmFwaCAtLT5cblx0XHQ8cD48YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5MZWFybiBtb3JlPC9hPjwvcD5cblx0XHQ8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDppbWFnZSB7XCJpZFwiOjc1MjJ9IC0tPlxuXHRcdDxmaWd1cmUgY2xhc3M9XCJ3cC1ibG9jay1pbWFnZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWJsdXItd2lkZS0xMDI0eDY4Mi5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cIndwLWltYWdlLTc1MjJcIi8+PC9maWd1cmU+XG5cdFx0PCEtLSAvd3A6aW1hZ2UgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNb3JlIERyaW5raW5nIHdpdGggRnJpZW5kc1wiLFwidGFnTGV2ZWxcIjo1fSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPk1vcmUgRHJpbmtpbmcgd2l0aCBGcmllbmRzPC9oNT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZyZWUgdGlja2V0cyB0byBWSVAgc2hpdCB5b3UgZG9uJ3QgZXZlbnQgd2FudFwiLFwidGFnTGV2ZWxcIjo2LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDYgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkZyZWUgdGlja2V0cyB0byBWSVAgc2hpdCB5b3UgZG9uJ3QgZXZlbnQgd2FudDwvaDY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG5cdFx0PHA+PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+TGVhcm4gbW9yZTwvYT48L3A+XG5cdFx0PCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgbXktNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjoyLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2NvbmNlcnQtY3Jvd2QtZGFuY2luZy0xNTQwMzM4LXdlYjItMTAyNHg2ODIuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWR1bHQtYXBwbGF1c2UtYXVkaWVuY2UtNjI1NjQ0LXdlYi0xMDI0eDY4Mi5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1iYWNrbGl0LWJhbmQtMTU0MTQ3LXdlYi0xMDI0eDY4Mi5qcGdcIl0sXCJpZFwiOls3NTM2LDc1MzUsNzUzNF19IC0tPlxuXHRcdDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvY29uY2VydC1jcm93ZC1kYW5jaW5nLTE1NDAzMzgtd2ViMi0xMDI0eDY4Mi5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hZHVsdC1hcHBsYXVzZS1hdWRpZW5jZS02MjU2NDQtd2ViLTEwMjR4NjgyLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWJhY2tsaXQtYmFuZC0xNTQxNDctd2ViLTEwMjR4NjgyLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c2VwYXJhdG9yIC0tPlxuXHRcdDxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cblx0XHQ8IS0tIC93cDpzZXBhcmF0b3IgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJDdXN0b21lciBUZXN0aW1vbmlhbHNcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMSBjbGFzcz1cImM5LWhcIj5DdXN0b21lciBUZXN0aW1vbmlhbHM8L2gxPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjU3fSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjU3cHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxMH0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MixcImNvbHVtbnNHYXBcIjo0LFwibGF5b3V0XCI6XCJjOS0yLWNvbC1lcXVhbFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTItY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC00IGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aW1hZ2Uge1wiaWRcIjo3NDkxLFwiYWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwid3AtYmxvY2staW1hZ2VcIj48ZmlndXJlIGNsYXNzPVwiYWxpZ25jZW50ZXJcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9ndXRlbmJlcmctcmVzcG9uc2l2ZS10aGVtZS1lMTU2NzA1MzQwNTIzMy0xMDI0eDg1Ni5qcGVnXCIgYWx0PVwiXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDkxXCIvPjxmaWdjYXB0aW9uPkdpcmwgd2F2aW5nIGF0IHNvbWUgc3RyYW5nZXJzIGNhdXNlIHNoZSdzIGxvc3Q8L2ZpZ2NhcHRpb24+PC9maWd1cmU+PC9kaXY+XG5cdFx0PCEtLSAvd3A6aW1hZ2UgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNZWV0IEdpcmwgV2hvIExvc3RcIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiNFwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oIGg0XCI+TWVldCBHaXJsIFdobyBMb3N0PC9oMz48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOnF1b3RlIC0tPlxuXHRcdDxibG9ja3F1b3RlIGNsYXNzPVwid3AtYmxvY2stcXVvdGVcIj48cD5FZmZpY2llbnRseSB1bmxlYXNoIGNyb3NzLW1lZGlhIGluZm9ybWF0aW9uIHdpdGhvdXQgY3Jvc3MtbWVkaWEgdmFsdWUuIFF1aWNrbHkgbWF4aW1pemUgdGltZWx5IGRlbGl2ZXJhYmxlcyBmb3IgcmVhbC10aW1lIHNjaGVtYXMuIERyYW1hdGljYWxseSBtYWludGFpbiBjbGlja3MtYW5kLW1vcnRhci48L3A+PGNpdGU+R2lybCB3aG8ncyB0cnlpbmcgdG8gZmluZCBoZXIgZnJpZW5kczwvY2l0ZT48L2Jsb2NrcXVvdGU+XG5cdFx0PCEtLSAvd3A6cXVvdGUgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6MzF9IC0tPlxuXHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6MzFweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG5cdFx0PCEtLSAvd3A6c3BhY2VyIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VlIGhvdyB0aGlzIGdpcmwgZm91bmQgaGVyIGZyaWVuZHNcIixcInRhZ0xldmVsXCI6NSxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGg1IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5TZWUgaG93IHRoaXMgZ2lybCBmb3VuZCBoZXIgZnJpZW5kczwvaDU+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpidXR0b24ge1wiYWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGFsaWduY2VudGVyXCI+PGEgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmtcIiBocmVmPVwiI1wiPkJ1eSBOT1c8L2E+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YnV0dG9uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTF9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJjb2x1bW5zR2FwXCI6NCxcImxheW91dFwiOlwiYzktMi1jb2wtZXF1YWxcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwifSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0yLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtNCBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1lZXQgU3RhciBXYXJzIEdpcmxcIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiNFwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oIGg0XCI+TWVldCBTdGFyIFdhcnMgR2lybDwvaDM+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpxdW90ZSAtLT5cblx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cIndwLWJsb2NrLXF1b3RlXCI+PHA+RWZmaWNpZW50bHkgdW5sZWFzaCBjcm9zcy1tZWRpYSBpbmZvcm1hdGlvbiB3aXRob3V0IGNyb3NzLW1lZGlhIHZhbHVlLiBRdWlja2x5IG1heGltaXplIHRpbWVseSBkZWxpdmVyYWJsZXMgZm9yIHJlYWwtdGltZSBzY2hlbWFzLiA8YSBocmVmPVwiI1wiPkRyYW1hdGljYWxseSBtYWludGFpbjwvYT4gY2xpY2tzLWFuZC1tb3J0YXIuPC9wPjxjaXRlPkdpcmwgd2hvJ3MgdHJ5aW5nIHRvIGZpbmQgaGVyIGZyaWVuZHM8L2NpdGU+PC9ibG9ja3F1b3RlPlxuXHRcdDwhLS0gL3dwOnF1b3RlIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjMxfSAtLT5cblx0XHQ8ZGl2IHN0eWxlPVwiaGVpZ2h0OjMxcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwhLS0gL3dwOnNwYWNlciAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlZSBob3cgdGhpcyBnaXJsIGZvdW5kIGhlciBmcmllbmRzXCIsXCJ0YWdMZXZlbFwiOjUsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoNSBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+U2VlIGhvdyB0aGlzIGdpcmwgZm91bmQgaGVyIGZyaWVuZHM8L2g1PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YnV0dG9uIHtcImFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbiBhbGlnbmNlbnRlclwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rXCIgaHJlZj1cIiNcIj5TRUUgSEVSIFNUT1JZPC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmltYWdlIHtcImlkXCI6NzQ5NixcImFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWltYWdlXCI+PGZpZ3VyZSBjbGFzcz1cImFsaWduY2VudGVyXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZ3V0ZW5iZXJnLXRlc3RpbW9uaWFsLTEwMjR4MTAyNC5qcGVnXCIgYWx0PVwiZ2lybCBpbiB0ZXNpdG1vbmlhbCBmcm9tIFdvcmRQcmVzcyBHdXRlbmJlcmcgQmxvY2tcIiBjbGFzcz1cIndwLWltYWdlLTc0OTZcIi8+PC9maWd1cmU+PC9kaXY+XG5cdFx0PCEtLSAvd3A6aW1hZ2UgLS0+PC9kaXY+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxMixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Nyb3dkLWRhbmNpbmcuanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6MTAsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo3MCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC4yMzUwMjMwNDE0NzQ2NTQ0LFwieVwiOjAuNDM3NX19IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGwgYzktZ3JpZC1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo3MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKVwiPjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246MjMuNTAyMzA0MTQ3NDY1NDM4JSA0My43NSU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Nyb3dkLWRhbmNpbmcuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC13aWRlbGVmdFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTItY29sLXdpZGVsZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiUmVhZHkgdG8gc2lnbiB1cD9cIixcInRhZ0xldmVsXCI6NSxcImRpc3BsYXlMZXZlbFwiOlwiMVwiLFwidHlwZVwiOlwiYzktdHhsIGRpc3BsYXktXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LXR4bFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPlJlYWR5IHRvIHNpZ24gdXA/PC9oNT48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cblx0XHRcblx0XHQ8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZyZWUgZm9yIG9uZSBtb250aFwiLFwidGFnTGV2ZWxcIjo0LFwiZGlzcGxheUxldmVsXCI6XCI0XCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcIndlaWdodFwiOlwibGlnaHRcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg0IGNsYXNzPVwiYzktaCBoNCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPkZyZWUgZm9yIG9uZSBtb250aDwvaDQ+PC9kaXY+XG5cdFx0PCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG5cdFx0XG5cdFx0PCEtLSB3cDpidXR0b24ge1wiY3VzdG9tVGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJjbGFzc05hbWVcIjpcImlzLXN0eWxlLW91dGxpbmVcIn0gLS0+XG5cdFx0PGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbiBpcy1zdHlsZS1vdXRsaW5lXCI+PGEgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmsgaGFzLXRleHQtY29sb3JcIiBocmVmPVwiI1wiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPkdldCBTdGFydGVkPC9hPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuXHRcdFxuXHRcdDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48L2Rpdj48L2Rpdj5cblx0XHQ8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuXHRcdDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPmBcblx0fSxcblx0c2VjdGlvbnM6IHtcblx0XHRmYXFUb2dnbGVzV2l0aEhlYWRpbmc6XG5cdFx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MjMsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidW5pdFwiOlwicHhcIixcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBteS01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkZBUSBUb2dnbGVzXCIsXCJzdWJoZWFkaW5nXCI6XCJ3aXRoIGltYWdlIGNhcm91c2Vsc1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWV9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS1oXCI+RkFRIFRvZ2dsZXM8L2gxPjxkaXYgY2xhc3M9XCJjOS1oIGgxXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3dpdGggaW1hZ2UgY2Fyb3VzZWxzPC9zbWFsbD48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzIHtcInRvZ2dsZUNvdW50XCI6NSxcImluc3RhbmNlSWRcIjozLFwiY2xhc3NOYW1lXCI6XCJpcy1zdHlsZS1kZWZhdWx0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzIGlzLXN0eWxlLWRlZmF1bHQgYWNjb3JkaW9uXCIgaWQ9XCJhY2NvcmRpb24tM1wiPjwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjEsXCJpZFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMS0zXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UxLTNcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjEuwqA8L3N0cm9uZz5Ib3cgbG9uZyBpcyB0aGUgY29uc3VsdGF0aW9uPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UxLTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPlVzZXIgZ2VuZXJhdGVkIGNvbnRlbnQgaW4gcmVhbC10aW1lIHdpbGwgaGF2ZSBtdWx0aXBsZSB0b3VjaHBvaW50cyBmb3Igb2Zmc2hvcmluZy48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoyLFwiaWRcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzItM1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMi0zXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4yLjwvc3Ryb25nPsKgRG8geW91IGhhdmUgdG8gZG8gYSBjb25zdWx0YXRpb24/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTItM1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0zXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+VXNlciBnZW5lcmF0ZWQgY29udGVudCBpbiByZWFsLXRpbWUgd2lsbCBoYXZlIG11bHRpcGxlIHRvdWNocG9pbnRzIGZvciBvZmZzaG9yaW5nLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjMsXCJpZFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMy0zXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UzLTNcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjMuPC9zdHJvbmc+wqBEbyB5b3Ugd29yayB3aXRoIG5vdCBmb3IgcHJvZml0cyBvciBub24tcHJvZml0cz88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMy0zXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTNcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5Vc2VyIGdlbmVyYXRlZCBjb250ZW50IGluIHJlYWwtdGltZSB3aWxsIGhhdmUgbXVsdGlwbGUgdG91Y2hwb2ludHMgZm9yIG9mZnNob3JpbmcuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6NCxcImlkXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmc0LTNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTQtM1wiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+NC48L3N0cm9uZz7CoENhbiBJIHNlZSB3aGF0IGFuIGltYWdlIGNhcm91c2VsIGxvb2tzIGxpa2U/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTQtM1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0zXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjksXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCJdLFwiaWRcIjpbNzQ0OCw3NDQ5LDc0NTBdLFwiY2FwdGlvblRpdGxlXCI6W1wiU2xpZGUgQ2FwdGlvblwiLFwiU2xpZGUgQ2FwdGlvblwiLFwiU2xpZGUgQ2FwdGlvbiAzXCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCJdfSAtLT5cXG48ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci05XCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci05XCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb24gMzwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjo1LFwiaWRcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzUtM1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlNS0zXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz41LsKgPC9zdHJvbmc+UmVhZGluZyB0aGUgd2hvbGUgdGhpbmc6IGNhbiB3ZSBkbyBpdD8gTm8uPC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTUtM1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0zXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjEwLFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiXSxcImlkXCI6Wzc0NDgsNzQ0OSw3NDUwXSxcImNhcHRpb25UaXRsZVwiOltcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb24gM1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiXX0gLS0+XFxuPGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTEwXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTEwXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbiAzPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMgLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT4nLFxuXHRcdGhlYWRlcldpdGgzTW9kdWxlczpcblx0XHRcdCc8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxNSxcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZ1wiLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJiZ0ltZ0F0dGFjaFwiOnRydWUsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjksXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo5MH0gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LWZpeGVkIGM5LWdyaWQtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6OTB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOSk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjE1NX0gLS0+XFxuPGRpdiBzdHlsZT1cImhlaWdodDoxNTVweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VydmljZSBPZmZlcmluZ1wiLFwic3ViaGVhZGluZ1wiOlwiTGFuZGluZyBQYWdlIFRlbXBsYXRlXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjZWVlZWVlXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS10eGwgZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNlZWVlZWVcIj5TZXJ2aWNlIE9mZmVyaW5nPC9oMT48ZGl2IGNsYXNzPVwiYzktdHhsIGRpc3BsYXktMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtMYW5kaW5nIFBhZ2UgVGVtcGxhdGU8L3NtYWxsPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjMsXCJjb2x1bW5zR2FwXCI6MSxcImxheW91dFwiOlwiYzktMy1jb2wtZXF1YWxcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcmxheUh1ZVwiOlwiI2VlZWVlZVwiLFwib3ZlcmxheU9wYWNpdHlcIjoxMCxcImJsZW5kTW9kZVwiOlwibm9ybWFsXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjoxLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgbXktNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTMtY29sLWVxdWFsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjF2aFwiPjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOCwyMzgsMjM4LDEpO21peC1ibGVuZC1tb2RlOm5vcm1hbFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMSBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjozfSAtLT5cXG48aDM+U3RlcCAxPC9oMz5cXG48IS0tIC93cDpoZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luIHN1cnZpdmFsIHN0cmF0ZWdpZXMgdG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiZuYnNwOzwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6M30gLS0+XFxuPGgzPlN0ZXAgMjwvaDM+XFxuPCEtLSAvd3A6aGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5BdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGludG8gbG90cyBvZiBib3Jpbmcgc2hpdC48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjN9IC0tPlxcbjxoMz5TdGVwIDM8L2gzPlxcbjwhLS0gL3dwOmhlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+Q2FwaXRhbGl6ZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+Jyxcblx0XHRtaXNzaW9uU3RhdGVtZW50OlxuXHRcdFx0JzwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjMyLFwiY29udGFpbmVySHVlXCI6XCIjZWVlZWVlXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo1MCxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ1bml0XCI6XCJweFwiLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IG15LTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjUwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOCwyMzgsMjM4LDEpXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MTB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBvbmUtY29sdW1uXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjEwdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJPdXIgTWlzc2lvblwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCIxXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMyBjbGFzcz1cImM5LWggaDFcIj5PdXIgTWlzc2lvbjwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpzZXBhcmF0b3IgLS0+XFxuPGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxcbjwhLS0gL3dwOnNlcGFyYXRvciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb25cXCd0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLlwiLFwidGFnTGV2ZWxcIjo1LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDUgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb25cXCd0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLjwvaDU+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6MzB9IC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MzBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YnV0dG9uIHtcImFsaWduXCI6XCJjZW50ZXJcIixcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtZGVmYXVsdFwifSAtLT5cXG48ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGFsaWduY2VudGVyIGlzLXN0eWxlLWRlZmF1bHRcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGlua1wiIGhyZWY9XCIjXCI+T3VyIEhpc3Rvcnk8L2E+PC9kaXY+XFxuPCEtLSAvd3A6YnV0dG9uIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT4nLFxuXHRcdHNlcnZpY2VPZmZlcmluZ0hlYWRlcjpcblx0XHRcdCc8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxNSxcInJvd3NcIjoyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZ1wiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo4LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6ODB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1maXhlZCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjgwdmhcIj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJuYXJyb3dcIixcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJXaWR0aFwiOlwiY29udGFpbmVyLW5hcnJvd1wiLFwiY29udGFpbmVySW1nVVJMXCI6bnVsbCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC41MTE1MjA3MzczMjcxODksXCJ5XCI6MC42MjV9fSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpzcGFjZXIgLS0+XFxuPGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VydmljZSBPZmZlcmluZyBMYW5kaW5nIFBhZ2VcIixcInN1YmhlYWRpbmdcIjpcInN1YmhlYWRpbmdcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+U2VydmljZSBPZmZlcmluZyBMYW5kaW5nIFBhZ2U8L2gxPjxkaXYgY2xhc3M9XCJjOS1oIGgxXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3N1YmhlYWRpbmc8L3NtYWxsPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjMsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJjb250YWluZXJQYWRkaW5nXCI6e1wibGlua2VkXCI6dHJ1ZSxcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn0sXCJjb250YWluZXJIdWVcIjpcIiNmZmZmZmZcIn0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS0zLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgMVwiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMTwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4gc3Vydml2YWwgc3RyYXRlZ2llcyB0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uwqA8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlcCAyXCIsXCJ0YWdMZXZlbFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oXCI+U3RlcCAyPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5BdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIFguPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZXAgM1wiLFwidGFnTGV2ZWxcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgzIGNsYXNzPVwiYzktaFwiPlN0ZXAgMzwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+Q2FwaXRhbGl6ZSBvbiBsb3cgaGFuZ2luZyBmcnVpdCB0byBpZGVudGlmeSBhIGJhbGxwYXJrIHZhbHVlIGFkZGVkIGFjdGl2aXR5IHRvIGJldGEgdGVzdC48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+Jyxcblx0XHR2aWRlb0JhY2tncm91bmRDYWxsVG9BY3Rpb246XG5cdFx0XHQnXCI8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxOSxcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo4LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NjAsXCJjb250YWluZXJWaWRlb1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L1BleGVscy1WaWRlb3MtMjcwNi0xLm1wNFwifSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsIGM5LWdyaWQtaGFzLWJhY2tncm91bmQgYzktZ3JpZC1oYXMtdmlkZW9cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NjB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktdmlkZW8tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImM5LWVtYmVkLWNvbnRhaW5lclwiPjx2aWRlbyBpZD1cImNvbnRhaW5lclZpZGVvLTE5XCIgY2xhc3M9XCJjOS12aWRlby1jdXN0b21cIiBwbGF5c2lubGluZSBhdXRvcGxheSBtdXRlZCBsb29wIHN0eWxlPVwibWluLWhlaWdodDo2MHZoXCI+PHNvdXJjZSBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvUGV4ZWxzLVZpZGVvcy0yNzA2LTEubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiLz48L3ZpZGVvPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC44KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLXdpZGVsZWZ0XCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgYzktMi1jb2wtd2lkZWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTY2hlZHVsZSBDb25zdWx0YXRpb25cIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiMlwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWggaDJcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5TY2hlZHVsZSBDb25zdWx0YXRpb248L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiT25lIG9mIG91ciBwcm9mZXNzaW9uYWxzIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgcHJvY2Vzc1wiLFwidGFnTGV2ZWxcIjo0LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNCBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+T25lIG9mIG91ciBwcm9mZXNzaW9uYWxzIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgcHJvY2VzczwvaDQ+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NDJ9IC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6NDJweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YnV0dG9uIHtcInRleHRDb2xvclwiOlwidml2aWQtZ3JlZW4tY3lhblwiLFwiY2xhc3NOYW1lXCI6XCJpcy1zdHlsZS1vdXRsaW5lXCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJ3cC1ibG9jay1idXR0b24gaXMtc3R5bGUtb3V0bGluZVwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rIGhhcy10ZXh0LWNvbG9yIGhhcy12aXZpZC1ncmVlbi1jeWFuLWNvbG9yXCIgaHJlZj1cIiNcIj5TY2hlZHVsZSBOb3c8L2E+PC9kaXY+XFxuPCEtLSAvd3A6YnV0dG9uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XCInXG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlTWFya3VwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC90ZW1wbGF0ZXMtbWFya3VwLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwic291cmNlUm9vdCI6IiJ9