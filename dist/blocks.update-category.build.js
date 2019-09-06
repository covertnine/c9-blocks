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
/******/ 	return __webpack_require__(__webpack_require__.s = 413);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 26);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
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
/* 5 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 43),
    getValue = __webpack_require__(/*! ./_getValue */ 46);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 7 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 21);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 9 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 55);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 10 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 13);

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
/* 11 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 12),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 34),
    objectToString = __webpack_require__(/*! ./_objectToString */ 35);

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
/* 12 */
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
/* 13 */
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


/***/ }),
/* 14 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 10);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 38),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 39),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 40),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 41),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 42);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 18 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 4),
    isKey = __webpack_require__(/*! ./_isKey */ 25),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 63),
    toString = __webpack_require__(/*! ./toString */ 19);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 19 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 66);

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
/* 20 */
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
/* 21 */
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 22 */
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 5),
    root = __webpack_require__(/*! ./_root */ 3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 23 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 47),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 54),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 56),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 57),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 58);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 24 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 18),
    toKey = __webpack_require__(/*! ./_toKey */ 14);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 25 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 10);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 26 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 33)))

/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObject = __webpack_require__(/*! ./isObject */ 6);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 28 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 29 */,
/* 30 */
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 24);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
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
/* 34 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 12);

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
/* 35 */
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
/* 36 */,
/* 37 */,
/* 38 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 39 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 40 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 41 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 42 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 43 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 27),
    isMasked = __webpack_require__(/*! ./_isMasked */ 44),
    isObject = __webpack_require__(/*! ./isObject */ 6),
    toSource = __webpack_require__(/*! ./_toSource */ 28);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 44 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 45);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 45 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 46 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 47 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 48),
    ListCache = __webpack_require__(/*! ./_ListCache */ 17),
    Map = __webpack_require__(/*! ./_Map */ 22);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 48 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 49),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 50),
    hashGet = __webpack_require__(/*! ./_hashGet */ 51),
    hashHas = __webpack_require__(/*! ./_hashHas */ 52),
    hashSet = __webpack_require__(/*! ./_hashSet */ 53);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 49 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 50 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 51 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 52 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 53 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 54 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 55 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 56 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 57 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 58 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 64);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 64 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 65);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 65 */
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 66 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 12),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 20),
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
/* 67 */
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
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */
/*!*********************************************!*\
  !*** ./src/stores/twitter/prepare-query.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(/*! qs */ 421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);


function prepareQuery(type, data) {
    var additionalData = __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data, { encode: false });
    var query = '/c9-blocks/get_twitter_' + type + '/' + (additionalData ? '?' + additionalData : '');

    return query;
}

/***/ }),
/* 226 */
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ 67);

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
/* 227 */
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
/* 228 */
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 426);


/***/ }),
/* 229 */
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
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */
/*!********************************!*\
  !*** ./src/update-category.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__ = __webpack_require__(/*! ./update-category/deregister-blocks */ 414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__update_category_deregister_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__ = __webpack_require__(/*! ./update-category/register-filters */ 415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_register_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_category_register_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__ = __webpack_require__(/*! ./update-category/register-styles */ 416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_category_register_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_stores__ = __webpack_require__(/*! ./update-category/register-stores */ 417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sidebar__ = __webpack_require__(/*! ./components/sidebar */ 428);
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
/* 414 */
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
/* 415 */
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
/* 416 */
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
/* 417 */
/*!************************************************!*\
  !*** ./src/update-category/register-stores.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_twitter__ = __webpack_require__(/*! ../stores/twitter */ 418);


/***/ }),
/* 418 */
/*!*************************************!*\
  !*** ./src/stores/twitter/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(/*! ./reducer */ 419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(/*! ./selectors */ 420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(/*! ./actions */ 227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(/*! ./controls */ 424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__(/*! ./resolvers */ 425);






var registerStore = wp.data.registerStore;


registerStore("c9-blocks/twitter", {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
	controls: __WEBPACK_IMPORTED_MODULE_3__controls__,
	resolvers: __WEBPACK_IMPORTED_MODULE_4__resolvers__
});

/***/ }),
/* 419 */
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
/* 420 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 225);


function getTwitterFeed(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("feed", data);

	return state.feeds[query];
}

function getTwitterProfile(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("profile", data);

	return state.profiles[query];
}

/***/ }),
/* 421 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 422);
var parse = __webpack_require__(/*! ./parse */ 423);
var formats = __webpack_require__(/*! ./formats */ 226);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 422 */
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 67);
var formats = __webpack_require__(/*! ./formats */ 226);
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
/* 423 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 67);

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
/* 424 */
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
/* 425 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(/*! ./actions */ 227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 225);


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
/* 426 */
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

module.exports = __webpack_require__(/*! ./runtime */ 427);

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
/* 427 */
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
/* 428 */
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_appender__ = __webpack_require__(/*! ../color-appender */ 431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_c9_feather_logo_gray_svg__ = __webpack_require__(/*! ../../../assets/c9-feather-logo-gray.svg */ 437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_modal__ = __webpack_require__(/*! ../templates-modal */ 438);
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
						icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__assets_c9_feather_logo_gray_svg__["a" /* default */], { style: { width: "20px", margin: "0 10px 0 6px" } }),
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
					),
					wp.element.createElement(
						PanelBody,
						null,
						wp.element.createElement(
							"h5",
							{ className: "components-base-control__label" },
							wp.element.createElement(
								"b",
								null,
								"Color Palette"
							)
						),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__color_appender__["a" /* default */], null)
					)
				),
				"section-templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "sections"
				}) : "",
				"page-templates" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__templates_modal__["a" /* TemplatesModal */], {
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: "pages"
				}) : "",
				"saved-blocks" === isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__templates_modal__["a" /* TemplatesModal */], {
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
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__assets_c9_feather_logo_gray_svg__["a" /* default */], null)
	),
	render: C9
});

/***/ }),
/* 429 */
/*!********************************************!*\
  !*** ./src/components/sidebar/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 430);

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
/* 430 */
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/sidebar/editor.scss ***!
  \***********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg{display:block;height:16px}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg *{stroke:initial !important}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg [fill=\"#fff\"]{fill:#fff !important}.edit-post-pinned-plugins .components-icon-button .c9-plugin-icon span{margin:-2px}.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon span [fill=\"#fff\"]{fill:#555d66 !important}.plugin-c9-panel .plugin-c9-panel-button{display:block;width:100%;height:auto;padding:15px 10px;margin-bottom:16px;flex-shrink:0;overflow:hidden;color:inherit;text-align:center;cursor:pointer;background:none;border:1px solid;border-radius:4px;transition:0.2s color, 0.2s background-color, 0.2s border-color, 0.2s box-shadow}.plugin-c9-panel .plugin-c9-panel-button,.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{border-color:rgba(79,89,105,0.2);box-shadow:none}.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{color:#191e23;background-color:#f8f9f9}.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled{color:#191e23;border-color:#007fac;box-shadow:0 0 0 2px #00a0d2}.plugin-c9-panel .plugin-c9-panel-button span{display:block;margin:0 auto;margin-top:3px;text-align:center;height:24px}\n", ""]);


/***/ }),
/* 431 */
/*!************************************************!*\
  !*** ./src/components/color-appender/index.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(/*! lodash/get */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_palette__ = __webpack_require__(/*! ../custom-palette */ 434);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-undef */
/* eslint-disable camelcase */





var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
/**
 * Internal block libraries
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;

var ColorAppender = function (_Component) {
	_inherits(ColorAppender, _Component);

	function ColorAppender() {
		_classCallCheck(this, ColorAppender);

		var _this = _possibleConstructorReturn(this, (ColorAppender.__proto__ || Object.getPrototypeOf(ColorAppender)).apply(this, arguments));

		_this.saveConfig = _this.saveConfig.bind(_this);
		_this.saveC9Colors = _this.saveC9Colors.bind(_this);
		_this.saveColors = _this.saveColors.bind(_this);
		_this.kbColorUniqueID = -1;
		_this.state = {
			isSaving: false,
			c9Colors: c9_blocks_params.colors ? JSON.parse(c9_blocks_params.colors) : { palette: [], override: false },
			origColors: c9_blocks_params.orig_colors ? c9_blocks_params.orig_colors[0] : [],
			colors: ""
		};
		return _this;
	}

	_createClass(ColorAppender, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (!this.state.colors) {
				this.setState({ colors: this.props.baseColors });
			}

			this.kbColorUniqueID = this.state.c9Colors ? this.state.c9Colors.palette.length : 0;
		}
	}, {
		key: "saveConfig",
		value: function saveConfig() {
			var _this2 = this;

			if (false === this.state.isSaving) {
				this.setState({ isSaving: true });
				var config = this.state.c9Colors;
				var settingModel = new wp.api.models.Settings({
					c9_blocks_colors: JSON.stringify(config)
				});
				// eslint-disable-next-line no-unused-vars
				settingModel.save().then(function (response) {
					_this2.setState({ isSaving: false, c9Colors: config });
					c9_blocks_params.colors = JSON.stringify(config);
					_this2.props.updateSettings({ colors: _this2.state.colors });
				});
			}
		}
	}, {
		key: "saveC9Colors",
		value: function saveC9Colors(value, index) {
			var c9Colors = this.state.c9Colors;

			c9Colors.palette[index] = Object.assign({}, c9Colors[index], value);
			this.setState({
				c9Colors: c9Colors
			});
		}
	}, {
		key: "saveColors",
		value: function saveColors(value, index) {
			var colors = this.state.colors;

			colors[index] = value;

			this.setState({ colors: colors });
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    c9Colors = _state.c9Colors,
			    colors = _state.colors,
			    origColors = _state.origColors;


			var nonEditables = [];
			var editables = [];

			Array.from(this.state.colors).map(function (curr) {
				if (undefined !== curr.slug && "c9-palette" === curr.slug.substr(0, 10)) {
					editables.push(curr);
				} else {
					nonEditables.push(curr);
				}
			});

			return wp.element.createElement(
				"div",
				{ className: "c9-block-default-palette" },
				colors && wp.element.createElement(
					"div",
					{ className: "components-color-palette" },
					wp.element.createElement(
						"p",
						{ className: "components-base-control__label" },
						"Theme Colors."
					),
					nonEditables.map(function (curr) {
						return wp.element.createElement(
							"div",
							{
								key: curr.slug,
								className: "components-color-palette__item-wrapper"
							},
							wp.element.createElement(
								Tooltip,
								{
									text: curr.name ||
									// translators: %s: color hex code e.g: "#f00".
									sprintf(__("Color code: %s"), curr.color)
								},
								wp.element.createElement(
									"div",
									{
										className: "components-color-palette__item",
										style: { color: curr.color }
									},
									wp.element.createElement(Dashicon, { icon: "lock" })
								)
							)
						);
					})
				),
				wp.element.createElement("hr", null),
				colors && wp.element.createElement(
					"div",
					{ className: "components-color-palette" },
					wp.element.createElement(
						"p",
						{ className: "components-base-control__label" },
						"C9 Block Colors."
					),
					editables.map(function (curr, index) {
						return wp.element.createElement(
							"div",
							{
								key: curr.slug,
								className: "components-color-palette__item-wrapper"
							},
							wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__custom_palette__["a" /* default */], {
								nameValue: curr.name ? curr.name : __("Color") + " " + index + 1,
								colorValue: curr.color ? curr.color : "#ffffff",
								onSave: function onSave(value, title) {
									_this3.saveC9Colors({ color: value, name: title, slug: curr.slug }, index);
									_this3.saveColors({ color: value, name: title, slug: curr.slug }, (nonEditables.length ? nonEditables.length : 0) + index);
									_this3.saveConfig();
								}
							})
						);
					}),
					0 < c9Colors.palette.length && wp.element.createElement(
						"div",
						{ className: "c9-colors-remove-last" },
						wp.element.createElement(
							Tooltip,
							{ text: __("Remove Last Color") },
							wp.element.createElement(
								Button,
								{
									type: "button",
									isDestructive: true,
									onClick: function onClick() {
										c9Colors.palette.pop();
										colors.pop();
										_this3.kbColorUniqueID -= 1;
										_this3.setState({ c9Colors: c9Colors });
										_this3.setState({ colors: colors });
										_this3.saveConfig();
									},
									"aria-label": __("Remove Last Color")
								},
								wp.element.createElement(Dashicon, { icon: "editor-removeformatting" })
							)
						)
					)
				),
				wp.element.createElement(
					"div",
					{ className: "c9-colors-add-new" },
					wp.element.createElement(
						Button,
						{
							type: "button",
							className: this.state.isSaving ? "kb-add-btn-is-saving" : "kb-add-btn-is-active",
							isPrimary: true,
							disabled: this.state.isSaving,
							onClick: function onClick() {
								if (_this3.state.isSaving) {
									return;
								}
								if (undefined === c9Colors.palette) {
									c9Colors.palette = [];
								}
								var id = _this3.kbColorUniqueID;
								c9Colors.palette.push({
									color: "#888888",
									name: __("Color") + " " + id,
									slug: "c9-palette-" + id
								});
								colors.push({
									color: "#888888",
									name: __("Color") + " " + id,
									slug: "c9-palette-" + id
								});
								_this3.kbColorUniqueID += 1;
								_this3.setState({ c9Colors: c9Colors });
								_this3.setState({ colors: colors });
								_this3.saveConfig();
							},
							"aria-label": __("Add Color")
						},
						__("Add Color")
					)
				),
				undefined !== c9Colors.palette && undefined !== c9Colors.palette[0] && wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(ToggleControl, {
						label: __("Use only C9 Blocks Colors?"),
						checked: undefined !== c9Colors.override ? c9Colors.override : false,
						onChange: function onChange(value) {
							var newColors = void 0;
							var newC9Colors = _this3.state.c9Colors;
							if (true === value) {
								newColors = newC9Colors.palette;
								newC9Colors.override = true;
							} else {
								newC9Colors.override = false;
								newColors = [].concat(_toConsumableArray(origColors), _toConsumableArray(newC9Colors.palette));
							}
							_this3.setState({ c9Colors: newC9Colors });
							_this3.setState({ colors: newColors });
							_this3.saveConfig();
						}
					})
				)
			);
		}
	}]);

	return ColorAppender;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (compose([withSelect(function (select) {
	var _select = select("core/block-editor"),
	    getSettings = _select.getSettings;

	var settings = getSettings();
	return {
		baseColors: __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(settings, ["colors"], [])
	};
}), withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/block-editor"),
	    updateSettings = _dispatch.updateSettings;

	return {
		updateSettings: updateSettings
	};
})])(ColorAppender));

/***/ }),
/* 432 */
/*!***************************************************!*\
  !*** ./src/components/color-appender/editor.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 433);

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
/* 433 */
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/color-appender/editor.scss ***!
  \******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".c9-block-default-palette .components-color-palette__item{display:flex;align-items:center;justify-content:center}.c9-block-default-palette .components-color-palette__item-wrapper{transform:scale(1.1)}.c9-block-default-palette .components-color-palette__item-wrapper:hover{transform:scale(1.1)}.c9-block-default-palette .components-color-palette__item svg{color:#646464}.c9-colors-remove-last{display:inline-block;height:28px;width:28px;margin-right:14px;margin-bottom:14px}.c9-colors-remove-last .components-button{border-radius:50%;height:100%;width:100%;padding:0;display:flex;align-items:center;justify-content:center}.c9-colors-add-new{margin-bottom:16px}\n", ""]);


/***/ }),
/* 434 */
/*!************************************************!*\
  !*** ./src/components/custom-palette/index.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ColorIndicator = _wp$components.ColorIndicator,
    ColorPicker = _wp$components.ColorPicker,
    TextControl = _wp$components.TextControl,
    Tooltip = _wp$components.Tooltip;




var CustomPalette = function (_Component) {
	_inherits(CustomPalette, _Component);

	function CustomPalette() {
		_classCallCheck(this, CustomPalette);

		var _this = _possibleConstructorReturn(this, (CustomPalette.__proto__ || Object.getPrototypeOf(CustomPalette)).apply(this, arguments));

		_this.toggleVisible = function () {
			_this.setState({ isVisible: true });
		};

		_this.toggleClose = function () {
			if (true === _this.state.isVisible) {
				_this.setState({ isVisible: false });
				_this.props.onSave(_this.state.color, _this.state.name);
			}
		};

		_this.changeColor = function (value) {
			_this.setState({ color: value });
		};

		_this.state = {
			isVisible: false,
			color: "",
			name: ""
		};
		return _this;
	}

	_createClass(CustomPalette, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setState({ color: this.props.colorValue, name: this.props.nameValue });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return wp.element.createElement(
				"div",
				{ className: "c9-custom-color-settings-container" },
				this.state.isVisible && wp.element.createElement(
					Popover,
					{
						position: "top left",
						className: "popover-color",
						onClose: this.toggleClose
					},
					wp.element.createElement(ColorPicker, {
						color: undefined === this.state.color || "" === this.state.color ? this.props.colorValue : this.state.color,
						onChangeComplete: function onChangeComplete(color) {
							return _this2.changeColor(color.hex);
						},
						disableAlpha: true
					}),
					wp.element.createElement(TextControl, {
						label: __("Name:"),
						value: undefined === this.state.name || "" === this.state.name ? this.props.nameValue : this.state.name,
						onChange: function onChange(value) {
							return _this2.setState({ name: value });
						}
					})
				),
				this.state.isVisible && wp.element.createElement(
					Tooltip,
					{ text: __("Edit Color") },
					wp.element.createElement(
						Button,
						{
							className: "c9-color-icon-indicate",
							onClick: this.toggleClose
						},
						wp.element.createElement(ColorIndicator, {
							className: "c9-advanced-color-indicate",
							colorValue: "transparent" === this.state.color || undefined === this.state.color || "" === this.state.color ? this.props.colorDefault : this.state.color
						})
					)
				),
				!this.state.isVisible && wp.element.createElement(
					Tooltip,
					{ text: __("Edit Color") },
					wp.element.createElement(
						Button,
						{
							className: "c9-color-icon-indicate",
							onClick: this.toggleVisible
						},
						wp.element.createElement(ColorIndicator, {
							className: "c9-advanced-color-indicate",
							colorValue: "transparent" === this.state.color || undefined === this.state.color || "" === this.state.color ? this.props.colorDefault : this.state.color
						})
					)
				)
			);
		}
	}]);

	return CustomPalette;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (CustomPalette);

/***/ }),
/* 435 */
/*!***************************************************!*\
  !*** ./src/components/custom-palette/editor.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 436);

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
/* 436 */
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/custom-palette/editor.scss ***!
  \******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".c9-custom-color-settings-container{display:flex;align-items:center}.c9-custom-color-settings-container .c9-color-icon-indicate{position:relative;transform:scale(1);transition:transform 0.1s ease;border-radius:50%;padding:0}.c9-custom-color-settings-container .c9-color-icon-indicate:hover{transform:scale(1.2)}.c9-custom-color-settings-container .c9-color-icon-indicate .component-color-indicator.c9-advanced-color-indicate{width:28px;height:28px;border-radius:50%;margin:0}.components-popover.popover-color>.components-popover__content>.components-base-control{padding:0 10px}\n", ""]);


/***/ }),
/* 437 */
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
/* 438 */
/*!*************************************************!*\
  !*** ./src/components/templates-modal/index.js ***!
  \*************************************************/
/*! exports provided: TemplatesModal */
/*! exports used: TemplatesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesModalWithSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase__ = __webpack_require__(/*! lodash/startCase */ 439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_button__ = __webpack_require__(/*! ./layout-button */ 456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_button__ = __webpack_require__(/*! ./section-button */ 457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_markup__ = __webpack_require__(/*! ./templates-markup */ 460);


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
var rawHandler = wp.blocks.rawHandler;

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
						HTML: blockObj[key].markup,
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

			var sections = Object.assign({}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].sections, canUserUseUnfilteredHTML));

			var layouts = Object.assign({}, this.markupToBlock(__WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].layouts, canUserUseUnfilteredHTML));

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
												icon: __WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].sections[k].icon,
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
												icon: __WEBPACK_IMPORTED_MODULE_5__templates_markup__["a" /* default */].layouts[k].icon,
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
/* 439 */
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ 440),
    upperFirst = __webpack_require__(/*! ./upperFirst */ 449);

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
/* 440 */
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ 441),
    deburr = __webpack_require__(/*! ./deburr */ 442),
    words = __webpack_require__(/*! ./words */ 445);

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
/* 441 */
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
/* 442 */
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ 443),
    toString = __webpack_require__(/*! ./toString */ 19);

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
/* 443 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ 444);

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
/* 444 */
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
/* 445 */
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ 446),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ 447),
    toString = __webpack_require__(/*! ./toString */ 19),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ 448);

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
/* 446 */
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
/* 447 */
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
/* 448 */
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
/* 449 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ 450);

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
/* 450 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ 451),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 229),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ 453),
    toString = __webpack_require__(/*! ./toString */ 19);

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
/* 451 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ 452);

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
/* 452 */
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
/* 453 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ 454),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 229),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ 455);

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
/* 454 */
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
/* 455 */
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
/* 456 */
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
/* 457 */
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
/* 458 */
/*!****************************************************!*\
  !*** ./src/components/templates-modal/editor.scss ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 459);

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
/* 459 */
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/templates-modal/editor.scss ***!
  \*******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 15)(false);
// Module
exports.push([module.i, ".c9-templates-modal .components-modal__header{border-bottom:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs{margin-top:-24px}@media (min-width: 600px){.c9-templates-modal{min-width:600px;max-width:600px;margin-left:-300px;transform:none;top:112px}}@media (min-width: 840px){.c9-templates-modal{min-width:800px;max-width:800px;margin-left:-400px;transform:none}}.c9-templates-modal .components-modal__header .components-modal__icon-container svg{display:block;margin-right:10px}.c9-templates-modal .components-modal__header .components-modal__header-heading{font-weight:600}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options{display:grid;grid-column-gap:1rem;grid-row-gap:1rem;grid-template-columns:repeat(6, 1fr)}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button{border-width:1px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;border-radius:3px;box-shadow:inset 0 -1px 0 #ccc;padding:5px}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button:active,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button:active{border-color:#999;box-shadow:insert 0 1px 0 #999}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button span,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button span{display:block;font-size:0.8rem;padding:2px 0}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab{padding:12px 16px;color:inherit}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab:focus{outline:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab.is-active{position:relative;border-bottom:2px solid #00a0d2;z-index:1}\n", ""]);


/***/ }),
/* 460 */
/*!************************************************************!*\
  !*** ./src/components/templates-modal/templates-markup.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_templates_faq_toggles_with_heading__ = __webpack_require__(/*! ./section-templates/faq-toggles-with-heading */ 461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_templates_header_with_3_modules__ = __webpack_require__(/*! ./section-templates/header-with-3-modules */ 462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_templates_mission_statement__ = __webpack_require__(/*! ./section-templates/mission-statement */ 463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_templates_service_offering_header__ = __webpack_require__(/*! ./section-templates/service-offering-header */ 464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_templates_video_background_call_to_action__ = __webpack_require__(/*! ./section-templates/video-background-call-to-action */ 465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_templates_restaurant_menu_landing_page__ = __webpack_require__(/*! ./page-templates/restaurant-menu-landing-page */ 466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_templates_service_landing_page__ = __webpack_require__(/*! ./page-templates/service-landing-page */ 467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_templates_test_blocks__ = __webpack_require__(/*! ./page-templates/test-blocks */ 468);
// sections






// pages




var templateMarkups = {
	layouts: {
		restaurantMenuLandingPage: __WEBPACK_IMPORTED_MODULE_5__page_templates_restaurant_menu_landing_page__["a" /* default */],
		serviceLandingPage: __WEBPACK_IMPORTED_MODULE_6__page_templates_service_landing_page__["a" /* default */],
		testBlocks: __WEBPACK_IMPORTED_MODULE_7__page_templates_test_blocks__["a" /* default */]
	},
	sections: {
		faqTogglesWithHeading: __WEBPACK_IMPORTED_MODULE_0__section_templates_faq_toggles_with_heading__["a" /* default */],
		headerWith3Modules: __WEBPACK_IMPORTED_MODULE_1__section_templates_header_with_3_modules__["a" /* default */],
		missionStatement: __WEBPACK_IMPORTED_MODULE_2__section_templates_mission_statement__["a" /* default */],
		serviceOfferingHeader: __WEBPACK_IMPORTED_MODULE_3__section_templates_service_offering_header__["a" /* default */],
		videoBackgroundCallToAction: __WEBPACK_IMPORTED_MODULE_4__section_templates_video_background_call_to_action__["a" /* default */]
	}
};

/* harmony default export */ __webpack_exports__["a"] = (templateMarkups);

/***/ }),
/* 461 */
/*!**************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/faq-toggles-with-heading.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":23,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"FAQ Toggles","subheading":"with image carousels","addSubheading":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h">FAQ Toggles</h1><div class="c9-h h1"><small class="text-muted">&nbsp;with image carousels</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":3,"className":"is-style-default"} -->\n<div class="c9-toggles is-style-default accordion" id="accordion-3"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-3" data-toggle="collapse" data-target="#c9-toggles-collapse1-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>1. </strong>How long is the consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-3" data-toggle="collapse" data-target="#c9-toggles-collapse2-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>2.</strong> Do you have to do a consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-3" data-toggle="collapse" data-target="#c9-toggles-collapse3-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>3.</strong> Do you work with not for profits or non-profits?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-3" data-parent="#accordion-3"><!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-3" data-toggle="collapse" data-target="#c9-toggles-collapse4-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>4.</strong> Can I see what an image carousel looks like?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-3" data-parent="#accordion-3"><!-- wp:c9-blocks/image-carousel {"instanceId":9,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n<div id="c9-image-carousel-indicator-9" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-9" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-9" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-9" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-9" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-9" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-3" data-toggle="collapse" data-target="#c9-toggles-collapse5-3"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>5. </strong>Reading the whole thing: can we do it? No.</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-3" data-parent="#accordion-3"><!-- wp:c9-blocks/image-carousel {"instanceId":10,"url":["http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg","http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg"],"id":[7448,7449,7450],"captionTitle":["Slide Caption","Slide Caption","Slide Caption 3"],"captionContent":["Slide subheading caption","Slide subheading caption","Slide subheading caption"]} -->\n<div id="c9-image-carousel-indicator-10" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-10" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class="carousel-item"><img src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-10" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-10" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win&nbsp;<a href="http://gutenberg-stock-test.local/service-landing-page/#">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/toggles-toggle --></div>\n<!-- /wp:c9-blocks/toggles --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 462 */
/*!***********************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/header-with-3-modules.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","containerHue":"#313131","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":90} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":155} -->\n<div style="height:155px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering","subheading":"Landing Page Template","addSubheading":true,"type":"c9-txl display-","textColor":"#eeeeee","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-light" style="color:#eeeeee">Service Offering</h1><div class="c9-txl display-1"><small class="text-muted">&nbsp;Landing Page Template</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"center","overlayHue":"#eeeeee","overlayOpacity":10,"blendMode":"normal","minScreenHeight":1,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal" style="min-height:1vh"><div class="c9-overlay-container" style="background-color:rgba(238,238,238,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 1</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 2</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 3</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 463 */
/*!*******************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/mission-statement.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":32,"containerHue":"#eeeeee","minScreenHeight":50,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:50vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center","minScreenHeight":10} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","overrideStyle":true} -->\n<div class="section-heading c9-heading text-center"><h3 class="c9-h h1">Our Mission</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:separator -->\n<hr class="wp-block-separator"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"align":"center","className":"is-style-default"} -->\n<div class="wp-block-button aligncenter is-style-default"><a class="wp-block-button__link" href="#">Our History</a></div>\n<!-- /wp:button -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 464 */
/*!*************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/service-offering-header.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":80} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","containerImgURL":null,"focalPoint":{"x":0.511520737327189,"y":0.625}} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering Landing Page","subheading":"subheading","addSubheading":true,"textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h font-weight-light" style="color:#ffffff">Service Offering Landing Page</h1><div class="c9-h h1"><small class="text-muted">&nbsp;subheading</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"layout":"c9-3-col-equal","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerHue":"#ffffff"} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 1","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 1</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. </p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 2","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 2</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved X.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Step 3","tagLevel":3} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h">Step 3</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 465 */
/*!*********************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/video-background-call-to-action.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '"<!-- wp:c9-blocks/grid {"instanceId":19,"containerImgURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":8,"blendMode":"multiply","minScreenHeight":60,"containerVideoURL":"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4"} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video" style="min-height:60vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-19" class="c9-video-custom" playsinline autoplay muted loop style="min-height:60vh"><source src="http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4" type="video/mp4"/></video></div></div><div class="c9-image-container" style="background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.8);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Schedule Consultation","tagLevel":3,"displayLevel":"2","textColor":"#ffffff","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h h2" style="color:#ffffff">Schedule Consultation</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"One of our professionals will walk you through the process","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#ffffff","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h4 class="c9-sh font-weight-light" style="color:#ffffff">One of our professionals will walk you through the process</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":42} -->\n<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"textColor":"vivid-green-cyan","className":"is-style-outline"} -->\n<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color has-vivid-green-cyan-color" href="#">Schedule Now</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"'
});

/***/ }),
/* 466 */
/*!***************************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/restaurant-menu-landing-page.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
   icon: "wordpress",
   markup: "\n    <!-- wp:c9-blocks/grid {\"instanceId\":1,\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":7,\"blendMode\":\"multiply\",\"minScreenHeight\":50,\"containerVideoURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/restaurant-video-bg-web.mov\"} -->\n    <div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:50vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-1\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:50vh\"><source src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/restaurant-video-bg-web.mov\" type=\"video/mp4\"/></video></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.7);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"align\":\"full\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-fluid\",\"verticalAlign\":\"bottom\"} -->\n    <div class=\"container-fluid alignfull c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-bottom one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"bottom\"} -->\n    <div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"New Fall Menu\",\"type\":\"c9-txl display-\",\"textColor\":\"#abb8c3\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl font-weight-light\" style=\"color:#abb8c3\">New Fall Menu</h1></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"ORDER THIS FISH ONLINE RIGHT NOW\",\"tagLevel\":6,\"textColor\":\"#ffffff\",\"weight\":\"normal\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-h font-weight-normal\" style=\"color:#ffffff\">ORDER THIS FISH ONLINE RIGHT NOW</h6></div>\n    <!-- /wp:c9-blocks/heading --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/cta {\"type\":\"c9-sh\",\"buttonText\":\"get started\",\"buttonAlignment\":\"left\",\"buttonTextColor\":\"#313131\",\"buttonShape\":\"outline\",\"buttonTarget\":true,\"ctaLayout\":\"three-quarters\",\"ctaPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"align\":\"wide\"} -->\n    <div style=\"text-align:left\" class=\"c9-cta c9-block-cta container alignwide p-5\"><div class=\"row\"><div class=\"c9-cta-content col-12 col-md-9\"><div class=\"c9-cta-text c9-sh\"><p>Make a reservation, buy a ring, get engaged, high five.</p></div></div><div class=\"c9-cta-button col-12 col-md-3\"><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"wp-block-button__link c9-button-shape-outline c9-button-size-medium\" style=\"color:#313131\">get started<span class=\"sr-only\">(Link opens in new window)</span></a></div></div></div>\n    <!-- /wp:c9-blocks/cta -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":2,\"rows\":2,\"containerImgURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":7,\"blendMode\":\"multiply\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.4700460829493088,\"y\":0.8641975308641975}} -->\n    <div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:47.004608294930875% 86.41975308641975%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.7);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"center\",\"minScreenHeight\":43} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:43vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n    <div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Brunch\",\"subheading\":\"Available on weekends and holidays\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-txl display-5\" style=\"color:#ffffff\">Brunch</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;Available on weekends and holidays</small></div></div>\n    <!-- /wp:c9-blocks/heading --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container -->\n    \n    <!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-wideright\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-wideright\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Small Plates\",\"subheading\":\"served all day\",\"addSubheading\":true,\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Small Plates</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;served all day</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Nachos\",\"subheading\":\"$16\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Nachos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$16</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Tacos\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Tacos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Plate of 3 small tacos. Like the tiniest tacos you\u2019ve ever seen for fourteen big ones</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Charcuterie\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Charcuterie</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Beef Tips\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Beef Tips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">At this far into the fake menu we ran out of ideas</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Mac &amp; Cheese\",\"subheading\":\"$10\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Mac &amp; Cheese</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$10</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/image-carousel {\"instanceId\":0,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\"],\"id\":[7340,7342,7341]} -->\n    <div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Entrees\",\"subheading\":\"7am-noon\",\"addSubheading\":true,\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Entrees</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;7am-noon</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"NY Strip\",\"subheading\":\"$26\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">NY Strip</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$26</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Grilled Chicken\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Grilled Chicken</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Pork Loin\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Pork Loin</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Kielbasa\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Kielbasa</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Sausages are pretty good. Not quite sure what this kind is though</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Lamb Chops\",\"subheading\":\"$22\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Lamb Chops</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$22</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">How dare you think about eating these tiny baby animals</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Veggie Burger\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Burger</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Like those fake meat burgers. This is the real deal</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Veggie Lasagna\",\"subheading\":\"$17\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Lasagna</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$17</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Made with things that aren\u2019t meat</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":1,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg\"],\"id\":[7369,7335,7334],\"captionTitle\":[\"Brunch Cocktails\",\"Charcuterie Plate\",\"Now this is podracing\"],\"captionContent\":[\"Get hammered right after church!\",\"I mean it's mostly fruit but it's close\",null]} -->\n    <div id=\"c9-image-carousel-indicator-1\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Brunch Cocktails</h5><p>Get hammered right after church!</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Charcuterie Plate</h5><p>I mean it's mostly fruit but it's close</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Now this is podracing</h5></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel -->\n    \n    <!-- wp:spacer -->\n    <div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Sides\",\"subheading\":\"add for $1.00 - $6.00\",\"addSubheading\":true,\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Sides</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;add for $1.00 - $6.00</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Chips\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Chips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Side Salad\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Side Salad</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Peanuts\",\"subheading\":\"$1\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Peanuts</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$1</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Yogurt\",\"subheading\":\"$2\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Yogurt</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$2</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Cereal\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Cereal</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"French Fries\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">French Fries</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Steak Bites\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Steak Bites</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/vertical-tabs {\"tabActive\":\"tab-saturday\",\"tabsData\":[{\"slug\":\"tab-saturday\",\"title\":\"Saturday\"},{\"slug\":\"tab-sunday\",\"title\":\"Sunday\"}],\"instanceId\":0,\"verticalAlign\":\"center\"} -->\n    <div class=\"c9-vertical-tabs row\" data-tab-active=\"tab-saturday\"><div class=\"col-xs-12 col-sm-3\"><div class=\"nav flex-column nav-pills\" role=\"tablist\"><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-saturday-0\" class=\"nav-link active\" id=\"tab-button-tab-saturday\">Saturday</a><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-sunday-0\" class=\"nav-link\" id=\"tab-button-tab-sunday\">Sunday</a></div></div><div class=\"col-xs-12 col-sm-9\"><div class=\"c9-tabs-content tab-content align-self-center\"><!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-saturday\",\"tabActive\":\"tab-saturday\",\"id\":0} -->\n    <div class=\"c9-vertical-tabs-tab tab-pane fade show active\" role=\"tabpanel\" id=\"tab-tab-saturday-0\" aria-labelledby=\"tab-saturday\"><!-- wp:heading {\"level\":6} -->\n    <h6>Saturday Brunch Specials</h6>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Chef will make something and your server will tell you what it is and you will pay $25</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Bottomless mimosas and we\u2019ll make the newest hire clean up the $30</p>\n    <!-- /wp:paragraph --></div>\n    <!-- /wp:c9-blocks/vertical-tabs-tab -->\n    \n    <!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-sunday\",\"tabActive\":\"tab-saturday\",\"id\":0} -->\n    <div class=\"c9-vertical-tabs-tab tab-pane fade\" role=\"tabpanel\" id=\"tab-tab-sunday-0\" aria-labelledby=\"tab-sunday\"><!-- wp:heading {\"level\":6} -->\n    <h6>Sunday Brunch Specials</h6>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Chef will make osmething and your server will tell you what it is and you will pay $25</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Ditch church and prove it for 10% off your total</p>\n    <!-- /wp:paragraph --></div>\n    <!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n    <!-- /wp:c9-blocks/vertical-tabs --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":0,\"containerHue\":\"#eeeeee\",\"minScreenHeight\":10} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:10vh;background-color:rgba(238,238,238,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"minScreenHeight\":10} -->\n    <div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-1 one-column\" style=\"min-height:10vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:separator -->\n    <hr class=\"wp-block-separator\"/>\n    <!-- /wp:separator -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Sustainable Food Mission\",\"tagLevel\":3,\"displayLevel\":\"1\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h h1\">Sustainable Food Mission</h3></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h4 class=\"c9-sh font-weight-light\">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h4></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:separator -->\n    <hr class=\"wp-block-separator\"/>\n    <!-- /wp:separator --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":3,\"rows\":2,\"containerImgURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"normal\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.4700460829493088,\"y\":0.8641975308641975}} -->\n    <div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:47.004608294930875% 86.41975308641975%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:normal\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"center\",\"minScreenHeight\":43} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:43vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n    <div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Dinner\",\"subheading\":\"New Fall Menu\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-txl display-5\" style=\"color:#ffffff\">Dinner</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;New Fall Menu</small></div></div>\n    <!-- /wp:c9-blocks/heading --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container -->\n    \n    <!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"blendMode\":\"multiply\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-equal\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:multiply\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Small Plates\",\"subheading\":\"served all day\",\"addSubheading\":true,\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Small Plates</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;served all day</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Nachos\",\"subheading\":\"$16\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Nachos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$16</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Charcuterie\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Charcuterie</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Beef Tips\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Beef Tips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">At this far into the fake menu we ran out of ideas</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Mac &amp; Cheese\",\"subheading\":\"$10\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Mac &amp; Cheese</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$10</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Bacon Stick\",\"subheading\":\"$40\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Bacon Stick</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$40</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">This is $40 of bacon on a stick. Prepare your veins for cholesterol</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/image-carousel {\"instanceId\":2,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\"],\"id\":[7340,7342,7341]} -->\n    <div id=\"c9-image-carousel-indicator-2\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Entrees\",\"subheading\":\"7am-noon\",\"addSubheading\":true,\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Entrees</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;7am-noon</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"NY Strip\",\"subheading\":\"$26\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">NY Strip</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$26</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Grilled Chicken\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Grilled Chicken</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Pork Loin\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Pork Loin</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Kielbasa\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Kielbasa</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Sausages are pretty good. Not quite sure what this kind is though</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Lamb Chops\",\"subheading\":\"$22\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Lamb Chops</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$22</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">How dare you think about eating these tiny baby animals</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Veggie Burger\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Burger</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Like those fake meat burgers. This is the real deal</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Veggie Lasagna\",\"subheading\":\"$17\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Lasagna</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$17</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Made with things that aren\u2019t meat</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Flatbread Pizza\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Flatbread Pizza</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph {\"customFontSize\":14} -->\n    <p style=\"font-size:14px\">Made with tomatoes, meat, and mystery sauce</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":3,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\"],\"id\":[7339,7336,7337],\"captionTitle\":[\"Chernobyl Burger\",\"Side Salad\",\"Chernobyl Fruit\"],\"captionContent\":[\"For all you vegans out there\",\"This thing is full of weirdness\",\"Good for stronk bones\"]} -->\n    <div id=\"c9-image-carousel-indicator-3\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Burger</h5><p>For all you vegans out there</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Side Salad</h5><p>This thing is full of weirdness</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Fruit</h5><p>Good for stronk bones</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel -->\n    \n    <!-- wp:spacer {\"height\":27} -->\n    <div style=\"height:27px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Sides\",\"subheading\":\"add for $1.00 - $6.00\",\"addSubheading\":true,\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Sides</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;add for $1.00 - $6.00</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Chips\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Chips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Side Salad\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Side Salad</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"French Fries\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">French Fries</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Steak Bites\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Steak Bites</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n    <!-- /wp:c9-blocks/heading --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 467 */
/*!*******************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/service-landing-page.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
   icon: "wordpress",
   markup: "<!-- wp:c9-blocks/grid {\"instanceId\":0,\"rows\":2,\"containerImgURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg\",\"containerHue\":\"#313131\",\"bgImgAttach\":true,\"overlayHue\":\"#313131\",\"overlayOpacity\":9,\"blendMode\":\"multiply\",\"minScreenHeight\":90} -->\n    <div class=\"c9-grid p-5 c9-fixed c9-grid-has-background\" style=\"min-height:90vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.9);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":155} -->\n    <div style=\"height:155px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Service Offering\",\"subheading\":\"Landing Page Template\",\"addSubheading\":true,\"type\":\"c9-txl display-\",\"textColor\":\"#eeeeee\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl font-weight-light\" style=\"color:#eeeeee\">Service Offering</h1><div class=\"c9-txl display-1\"><small class=\"text-muted\">&nbsp;Landing Page Template</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:spacer -->\n    <div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container -->\n    \n    <!-- wp:c9-blocks/column-container {\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"verticalAlign\":\"center\",\"overlayHue\":\"#eeeeee\",\"overlayOpacity\":10,\"blendMode\":\"normal\",\"minScreenHeight\":1,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal\" style=\"min-height:1vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(238,238,238,1);mix-blend-mode:normal\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":3} -->\n    <h3>Step 1</h3>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":3} -->\n    <h3>Step 2</h3>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":3} -->\n    <h3>Step 3</h3>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":1} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"layout\":\"c9-2-col-equal\",\"minScreenHeight\":1} -->\n    <div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal\" style=\"min-height:1vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n    <h4>Reason #1</h4>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n    <h4>Reason Maybe 3,000</h4>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":2,\"containerImgURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":60,\"containerVideoURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\"} -->\n    <div class=\"c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video\" style=\"min-height:60vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-2\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:60vh\"><source src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Schedule Consultation\",\"tagLevel\":3,\"displayLevel\":\"2\",\"textColor\":\"#ffffff\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-h h2\" style=\"color:#ffffff\">Schedule Consultation</h3></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"One of our professionals will walk you through the process\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh font-weight-light\" style=\"color:#ffffff\">One of our professionals will walk you through the process</h4></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:spacer {\"height\":42} -->\n    <div style=\"height:42px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:button {\"textColor\":\"vivid-green-cyan\",\"className\":\"is-style-outline\"} -->\n    <div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color has-vivid-green-cyan-color\" href=\"#\">Schedule Now</a></div>\n    <!-- /wp:button --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":3,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"FAQ Toggles\",\"subheading\":\"with image carousels\",\"addSubheading\":true} -->\n    <div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h\">FAQ Toggles</h1><div class=\"c9-h h1\"><small class=\"text-muted\">&nbsp;with image carousels</small></div></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/toggles {\"toggleCount\":5,\"instanceId\":0,\"className\":\"is-style-default\"} -->\n    <div class=\"c9-toggles is-style-default accordion\" id=\"accordion-0\"><!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":1,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading1-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse1-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>1.\xA0</strong>How long is the consultation?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse1-0\" data-parent=\"#accordion-0\"><!-- wp:paragraph -->\n    <p>Bring to the table win-win&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:paragraph -->\n    <p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle -->\n    \n    <!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":2,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading2-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse2-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>2.</strong>\xA0Do you have to do a consultation?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse2-0\" data-parent=\"#accordion-0\"><!-- wp:paragraph -->\n    <p>Bring to the table win-win&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:paragraph -->\n    <p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle -->\n    \n    <!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":3,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading3-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse3-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>3.</strong>\xA0Do you work with not for profits or non-profits?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse3-0\" data-parent=\"#accordion-0\"><!-- wp:paragraph -->\n    <p>Bring to the table win-win&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:paragraph -->\n    <p>User generated content in real-time will have multiple touchpoints for offshoring.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle -->\n    \n    <!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":4,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading4-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse4-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>4.</strong>\xA0Can I see what an image carousel looks like?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse4-0\" data-parent=\"#accordion-0\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":3,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\"],\"id\":[7448,7449,7450],\"captionTitle\":[\"Slide Caption\",\"Slide Caption\",\"Slide Caption 3\"],\"captionContent\":[\"Slide subheading caption\",\"Slide subheading caption\",\"Slide subheading caption\"]} -->\n    <div id=\"c9-image-carousel-indicator-3\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel -->\n    \n    <!-- wp:paragraph -->\n    <p>Bring to the table win-win&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle -->\n    \n    <!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":5,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading5-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse5-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>5.\xA0</strong>Reading the whole thing: can we do it? No.</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse5-0\" data-parent=\"#accordion-0\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":4,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\"],\"id\":[7448,7449,7450],\"captionTitle\":[\"Slide Caption\",\"Slide Caption\",\"Slide Caption 3\"],\"captionContent\":[\"Slide subheading caption\",\"Slide subheading caption\",\"Slide subheading caption\"]} -->\n    <div id=\"c9-image-carousel-indicator-4\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-4\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-4\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-4\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption</h5><p>Slide subheading caption</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption 3</h5><p>Slide subheading caption</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-4\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-4\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel -->\n    \n    <!-- wp:paragraph -->\n    <p>Bring to the table win-win&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">survival strategies</a>&nbsp;to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle --></div>\n    <!-- /wp:c9-blocks/toggles --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":13} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Our Brands\",\"subheading\":\"2000 - 2010\",\"textAlign\":\"center\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Our Brands</h1></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/carousel {\"instanceId\":1,\"autoSlide\":false} -->\n    <div id=\"c9-carousel-indicator-1\" class=\"c9-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-carousel-indicator-1\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-carousel-indicator-1\" data-slide-to=\"1\"></li><li data-target=\"#c9-carousel-indicator-1\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><!-- wp:c9-blocks/carousel-slide {\"id\":0,\"slideActive\":0,\"slides\":3} -->\n    <div class=\"c9-carousel-slide carousel-item active\"><!-- wp:gallery {\"ids\":[7437,7438,7439,7440],\"columns\":4,\"imageCrop\":false} -->\n    <ul class=\"wp-block-gallery columns-4\"><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg\" alt=\"\" data-id=\"7437\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-8/\" class=\"wp-image-7437\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg\" alt=\"\" data-id=\"7438\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-7/\" class=\"wp-image-7438\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg\" alt=\"\" data-id=\"7439\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-6/\" class=\"wp-image-7439\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg\" alt=\"\" data-id=\"7440\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-5/\" class=\"wp-image-7440\"/></figure></li></ul>\n    <!-- /wp:gallery --></div>\n    <!-- /wp:c9-blocks/carousel-slide -->\n    \n    <!-- wp:c9-blocks/carousel-slide {\"id\":1,\"slideActive\":0,\"slides\":3} -->\n    <div class=\"c9-carousel-slide carousel-item\"><!-- wp:gallery {\"ids\":[7440,7439,7438,7437],\"columns\":4,\"imageCrop\":false} -->\n    <ul class=\"wp-block-gallery columns-4\"><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg\" alt=\"\" data-id=\"7440\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-5/\" class=\"wp-image-7440\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg\" alt=\"\" data-id=\"7439\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-6/\" class=\"wp-image-7439\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg\" alt=\"\" data-id=\"7438\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-7/\" class=\"wp-image-7438\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg\" alt=\"\" data-id=\"7437\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-8/\" class=\"wp-image-7437\"/></figure></li></ul>\n    <!-- /wp:gallery --></div>\n    <!-- /wp:c9-blocks/carousel-slide -->\n    \n    <!-- wp:c9-blocks/carousel-slide {\"id\":2,\"slideActive\":0,\"slides\":3} -->\n    <div class=\"c9-carousel-slide carousel-item\"><!-- wp:gallery {\"ids\":[7440,7439,7438,7437],\"columns\":4,\"imageCrop\":false} -->\n    <ul class=\"wp-block-gallery columns-4\"><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-5.jpg\" alt=\"\" data-id=\"7440\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-5/\" class=\"wp-image-7440\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-6.jpg\" alt=\"\" data-id=\"7439\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-6/\" class=\"wp-image-7439\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-7.jpg\" alt=\"\" data-id=\"7438\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-7/\" class=\"wp-image-7438\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/logo-8.jpg\" alt=\"\" data-id=\"7437\" data-link=\"http://gutenberg-stock-test.local/service-landing-page/logo-8/\" class=\"wp-image-7437\"/></figure></li></ul>\n    <!-- /wp:gallery --></div>\n    <!-- /wp:c9-blocks/carousel-slide --></div><a class=\"carousel-control-prev\" href=\"#c9-carousel-indicator-1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-carousel-indicator-1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/carousel --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:spacer {\"height\":60} -->\n    <div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:spacer {\"height\":60} -->\n    <div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":4} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n    <h4>Step 1 - Intermediate Subheading</h4>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n    <!-- /wp:paragraph -->\n    \n    <!-- wp:list -->\n    <ul><li>Download documents from link</li><li>Fill out and return documents to client</li><li>Review forms with internal team</li><li>Send superfluous status emails</li><li>Erroneaously misspell corporate words</li><li>Try not to die of eating too many hamburgers</li><li>It's harder than you think</li></ul>\n    <!-- /wp:list --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":0,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\"],\"id\":[7416,7339,7337],\"captionTitle\":[\"Slide Caption\",\"Chernobyl Burger\",\"Chernobyl Oranges\"],\"captionContent\":[\"Step 1 caption\",\"I'd eat it for sure.\",\"Don't eat them.\"]} -->\n    <div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption</h5><p>Step 1 caption</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Burger</h5><p>I'd eat it for sure.</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Oranges</h5><p>Don't eat them.</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":5,\"containerHue\":\"#e9e9e9\"} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh;background-color:rgba(233,233,233,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-equal\",\"containerWidth\":\"container-narrow\"} -->\n    <div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n    <h4>Step 2</h4>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Nocusing solely on the bottom lineanot echnology immersion along the information highway will close the door on your foot</p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n    <h4>Step 3</h4>\n    <!-- /wp:heading -->\n    \n    <!-- wp:paragraph -->\n    <p>Nanotechnology immersion along the information highway will close the loop.&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn how to do the thing</a></p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/cta {\"type\":\"c9-sh\",\"buttonText\":\"Watch Video\",\"buttonAlignment\":\"right\",\"buttonTextColor\":\"#00d084\",\"buttonSize\":\"c9-button-size-large\",\"buttonShape\":\"outline\",\"buttonTarget\":true,\"ctaLayout\":\"three-quarters\",\"ctaPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"ctaWidth\":\"container-fluid\",\"ctaBackgroundColor\":\"#404041\",\"ctaTextColor\":\"#eeeeee\",\"align\":\"full\"} -->\n    <div style=\"background-color:rgba(64,64,65,1);text-align:right\" class=\"c9-cta c9-block-cta container-fluid alignfull p-5\"><div class=\"row\"><div class=\"c9-cta-content col-12 col-md-9\"><div class=\"c9-cta-text c9-sh\" style=\"color:#eeeeee\"><p>Watch our video walk through to get a guided tour.</p></div></div><div class=\"c9-cta-button col-12 col-md-3\"><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"wp-block-button__link c9-button-shape-outline c9-button-size-large\" style=\"color:#00d084\">Watch Video<span class=\"sr-only\">(Link opens in new window)</span></a></div></div></div>\n    <!-- /wp:c9-blocks/cta -->\n    \n    <!-- wp:spacer {\"height\":70} -->\n    <div style=\"height:70px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:separator -->\n    <hr class=\"wp-block-separator\"/>\n    <!-- /wp:separator -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Nine More Seasons\xA0\",\"textAlign\":\"center\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Nine More Seasons\xA0</h1></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":6,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n    <blockquote class=\"wp-block-quote\"><p>Nine more seasons until I get that dipping szechuan sauce! For ninety-seven more years, Morty! I want that mcnuggut sauce Morty! Guess Who!</p><cite>A Person Wrote this</cite></blockquote>\n    <!-- /wp:quote -->\n    \n    <!-- wp:button {\"align\":\"center\"} -->\n    <div class=\"wp-block-button aligncenter\"><a class=\"wp-block-button__link\" href=\"#\">Sign up now</a></div>\n    <!-- /wp:button --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":1,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\"],\"id\":[7448,7449,7450],\"captionTitle\":[\"Office Interior\",\"Library Interior\",\"Office Chairs\"],\"captionContent\":[\"Slide caption goes here\",\"Subheading information would go here\",\"Don't sit on them or you're fired\"]} -->\n    <div id=\"c9-image-carousel-indicator-1\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Office Interior</h5><p>Slide caption goes here</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Library Interior</h5><p>Subheading information would go here</p></div></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Office Chairs</h5><p>Don't sit on them or you're fired</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":7,\"minScreenHeight\":76} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:76vh\"><!-- wp:c9-blocks/column-container {\"align\":\"full\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-fluid\",\"containerImgURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/girls-in-bg-container-block.jpg\",\"bgImgAttach\":true,\"overlayHue\":\"#313131\",\"blendMode\":\"multiply\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.5161290322580645,\"y\":1}} -->\n    <div class=\"container-fluid alignfull c9-column-container c9-fixed c9-layout-columns-1 one-column c9-columns-has-background\" style=\"min-height:80vh\"><div class=\"c9-image-container\" style=\"background-position:51.61290322580645% 100%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/girls-in-bg-container-block.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.5);mix-blend-mode:multiply\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n    <div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"About Us\",\"subheading\":\"Est. 2019\",\"addSubheading\":true,\"tagLevel\":3,\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-txl font-weight-light\" style=\"color:#ffffff\">About Us</h3><div class=\"c9-txl display-3\"><small class=\"text-muted\">&nbsp;Est. 2019</small></div></div>\n    <!-- /wp:c9-blocks/heading --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":8,\"containerHue\":\"#eeeeee\",\"minScreenHeight\":50,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:50vh;background-color:rgba(238,238,238,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"verticalAlign\":\"center\",\"minScreenHeight\":10} -->\n    <div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:10vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Our Mission\",\"tagLevel\":3,\"displayLevel\":\"1\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h h1\">Our Mission</h3></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:separator -->\n    <hr class=\"wp-block-separator\"/>\n    <!-- /wp:separator -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-sh font-weight-light\">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n    <!-- /wp:c9-blocks/heading --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:spacer -->\n    <div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:separator -->\n    <hr class=\"wp-block-separator\"/>\n    <!-- /wp:separator -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Program Benefits\",\"textAlign\":\"center\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Program Benefits</h1></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":9,\"rows\":2,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"containerWidth\":\"container-narrow\"} -->\n    <div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-3 c9-3-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"id\":7520} -->\n    <figure class=\"wp-block-image\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/three-girls-drinking-beers-1024x682.jpg\" alt=\"\" class=\"wp-image-7520\"/></figure>\n    <!-- /wp:image -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"More Drinking with Friends\",\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">More Drinking with Friends</h5></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Especially at happy hour\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">Especially at happy hour</h6></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph -->\n    <p><a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn more</a></p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"id\":7521} -->\n    <figure class=\"wp-block-image\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/stock-image-3-1024x682.jpg\" alt=\"\" class=\"wp-image-7521\"/></figure>\n    <!-- /wp:image -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"More Adventures\",\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">More Adventures</h5></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Especially with the dudes\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">Especially with the dudes</h6></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph -->\n    <p><a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn more</a></p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"id\":7522} -->\n    <figure class=\"wp-block-image\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-blur-wide-1024x682.jpg\" alt=\"\" class=\"wp-image-7522\"/></figure>\n    <!-- /wp:image -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"More Drinking with Friends\",\"tagLevel\":5} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">More Drinking with Friends</h5></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Free tickets to VIP shit you don't event want\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">Free tickets to VIP shit you don't event want</h6></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:paragraph -->\n    <p><a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn more</a></p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container -->\n    \n    <!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n    <div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":2,\"url\":[\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\",\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\"],\"id\":[7536,7535,7534]} -->\n    <div id=\"c9-image-carousel-indicator-2\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:separator -->\n    <hr class=\"wp-block-separator\"/>\n    <!-- /wp:separator -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Customer Testimonials\",\"textAlign\":\"center\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Customer Testimonials</h1></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:spacer {\"height\":57} -->\n    <div style=\"height:57px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":10} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"columnsGap\":4,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"id\":7491,\"align\":\"center\"} -->\n    <div class=\"wp-block-image\"><figure class=\"aligncenter\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/gutenberg-responsive-theme-e1567053405233-1024x856.jpeg\" alt=\"\" class=\"wp-image-7491\"/><figcaption>Girl waving at some strangers cause she's lost</figcaption></figure></div>\n    <!-- /wp:image --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Meet Girl Who Lost\",\"tagLevel\":3,\"displayLevel\":\"4\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-h h4\">Meet Girl Who Lost</h3></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:quote -->\n    <blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p><cite>Girl who's trying to find her friends</cite></blockquote>\n    <!-- /wp:quote -->\n    \n    <!-- wp:spacer {\"height\":31} -->\n    <div style=\"height:31px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"See how this girl found her friends\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-sh font-weight-light\">See how this girl found her friends</h5></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:button {\"align\":\"center\"} -->\n    <div class=\"wp-block-button aligncenter\"><a class=\"wp-block-button__link\" href=\"#\">Buy NOW</a></div>\n    <!-- /wp:button --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":11} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"columnsGap\":4,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Meet Star Wars Girl\",\"tagLevel\":3,\"displayLevel\":\"4\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-h h4\">Meet Star Wars Girl</h3></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:quote -->\n    <blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <a href=\"#\">Dramatically maintain</a> clicks-and-mortar.</p><cite>Girl who's trying to find her friends</cite></blockquote>\n    <!-- /wp:quote -->\n    \n    <!-- wp:spacer {\"height\":31} -->\n    <div style=\"height:31px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n    <!-- /wp:spacer -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"See how this girl found her friends\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n    <div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-sh font-weight-light\">See how this girl found her friends</h5></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:button {\"align\":\"center\"} -->\n    <div class=\"wp-block-button aligncenter\"><a class=\"wp-block-button__link\" href=\"#\">SEE HER STORY</a></div>\n    <!-- /wp:button --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"id\":7496,\"align\":\"center\"} -->\n    <div class=\"wp-block-image\"><figure class=\"aligncenter\"><img src=\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/gutenberg-testimonial-1024x1024.jpeg\" alt=\"girl in tesitmonial from WordPress Gutenberg Block\" class=\"wp-image-7496\"/></figure></div>\n    <!-- /wp:image --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/grid {\"instanceId\":12,\"containerImgURL\":\"http://gutenberg-stock-test.local/wp-content/uploads/2019/08/crowd-dancing.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":10,\"blendMode\":\"multiply\",\"minScreenHeight\":70,\"focalPoint\":{\"x\":0.2350230414746544,\"y\":0.4375}} -->\n    <div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:70vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:23.502304147465438% 43.75%;background-image:url(http://gutenberg-stock-test.local/wp-content/uploads/2019/08/crowd-dancing.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,1);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Ready to sign up?\",\"tagLevel\":5,\"displayLevel\":\"1\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\"} -->\n    <div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-txl\" style=\"color:#ffffff\">Ready to sign up?</h5></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/heading {\"heading\":\"Free for one month\",\"tagLevel\":4,\"displayLevel\":\"4\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n    <div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h h4 font-weight-light\" style=\"color:#ffffff\">Free for one month</h4></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:button {\"customTextColor\":\"#ffffff\",\"className\":\"is-style-outline\"} -->\n    <div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color\" href=\"#\" style=\"color:#ffffff\">Get Started</a></div>\n    <!-- /wp:button --></div></div>\n    <!-- /wp:c9-blocks/column -->\n    \n    <!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 468 */
/*!**********************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/test-blocks.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    icon: "wordpress",
    markup: "\n    <!-- wp:c9-blocks/grid {\"instanceId\":1,\"minScreenHeight\":10} -->\n    <div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:10vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"columnMaxWidth\":0,\"layout\":\"one-column\"} -->\n    <div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n    <div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n    <p></p>\n    <!-- /wp:paragraph --></div></div>\n    <!-- /wp:c9-blocks/column --></div></div>\n    <!-- /wp:c9-blocks/column-container --></div>\n    <!-- /wp:c9-blocks/grid -->\n    \n    <!-- wp:c9-blocks/carousel {\"instanceId\":1} -->\n    <div id=\"c9-carousel-indicator-1\" class=\"c9-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-carousel-indicator-1\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-carousel-indicator-1\" data-slide-to=\"1\"></li><li data-target=\"#c9-carousel-indicator-1\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><!-- wp:c9-blocks/carousel-slide {\"id\":0,\"slideActive\":0,\"slides\":3} -->\n    <div class=\"c9-carousel-slide carousel-item active\"><!-- wp:paragraph -->\n    <p></p>\n    <!-- /wp:paragraph --></div>\n    <!-- /wp:c9-blocks/carousel-slide -->\n    \n    <!-- wp:c9-blocks/carousel-slide {\"id\":1,\"slideActive\":0,\"slides\":3} -->\n    <div class=\"c9-carousel-slide carousel-item\"></div>\n    <!-- /wp:c9-blocks/carousel-slide -->\n    \n    <!-- wp:c9-blocks/carousel-slide {\"id\":2,\"slideActive\":0,\"slides\":3} -->\n    <div class=\"c9-carousel-slide carousel-item\"></div>\n    <!-- /wp:c9-blocks/carousel-slide --></div><a class=\"carousel-control-prev\" href=\"#c9-carousel-indicator-1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-carousel-indicator-1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/carousel -->\n    \n    <!-- wp:c9-blocks/toggles {\"instanceId\":0} -->\n    <div class=\"c9-toggles accordion\" id=\"accordion-0\"><!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":1,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading1-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse1-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">Toggle Item</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse1-0\" data-parent=\"#accordion-0\"></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle -->\n    \n    <!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":2,\"id\":0} -->\n    <div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading2-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse2-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">Toggle Item</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse2-0\" data-parent=\"#accordion-0\"></div></div>\n    <!-- /wp:c9-blocks/toggles-toggle --></div>\n    <!-- /wp:c9-blocks/toggles -->\n    \n    <!-- wp:c9-blocks/heading -->\n    <div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h\"></h1></div>\n    <!-- /wp:c9-blocks/heading -->\n    \n    <!-- wp:c9-blocks/image-carousel {\"instanceId\":0} -->\n    <div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"></div><div class=\"carousel-item\"></div><div class=\"carousel-item\"></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n    <!-- /wp:c9-blocks/image-carousel -->\n    \n    <!-- wp:c9-blocks/cta -->\n    <div style=\"text-align:center\" class=\"c9-cta c9-block-cta container p-5\"><div class=\"row\"><div class=\"c9-cta-content col-12 col-md-8\"><div class=\"c9-cta-text\"></div></div></div></div>\n    <!-- /wp:c9-blocks/cta -->\n    \n    <!-- wp:c9-blocks/social-share /-->\n    \n    <!-- wp:c9-blocks/horizontal-tabs {\"instanceId\":0} -->\n    <div class=\"c9-horizontal-tabs\" data-tab-active=\"tab-1\"><ul class=\"nav nav-tabs d-flex nav-justified\" role=\"tablist\"><li class=\"nav-item\"><a data-toggle=\"tab\" role=\"tab\" href=\"#tab-tab-1-0\" class=\"nav-link active\" id=\"tab-button-tab-1\">Tab 1</a></li><li class=\"nav-item\"><a data-toggle=\"tab\" role=\"tab\" href=\"#tab-tab-2-0\" class=\"nav-link\" id=\"tab-button-tab-2\">Tab 2</a></li></ul><div class=\"c9-tabs-content tab-content\"><!-- wp:c9-blocks/horizontal-tabs-tab {\"slug\":\"tab-1\",\"tabActive\":\"tab-1\",\"id\":0} -->\n    <div class=\"c9-horizontal-tabs-tab tab-pane fade show active\" role=\"tabpanel\" id=\"tab-tab-1-0\" aria-labelledby=\"tab-1\"><!-- wp:paragraph -->\n    <p></p>\n    <!-- /wp:paragraph --></div>\n    <!-- /wp:c9-blocks/horizontal-tabs-tab -->\n    \n    <!-- wp:c9-blocks/horizontal-tabs-tab {\"slug\":\"tab-2\",\"tabActive\":\"tab-1\",\"id\":0} -->\n    <div class=\"c9-horizontal-tabs-tab tab-pane fade\" role=\"tabpanel\" id=\"tab-tab-2-0\" aria-labelledby=\"tab-2\"></div>\n    <!-- /wp:c9-blocks/horizontal-tabs-tab --></div></div>\n    <!-- /wp:c9-blocks/horizontal-tabs -->\n    \n    <!-- wp:c9-blocks/vertical-tabs {\"instanceId\":0} -->\n    <div class=\"c9-vertical-tabs row\" data-tab-active=\"tab-1\"><div class=\"col-xs-12 col-sm-3\"><div class=\"nav flex-column nav-pills\" role=\"tablist\"><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-1-0\" class=\"nav-link active\" id=\"tab-button-tab-1\">Tab 1</a><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-2-0\" class=\"nav-link\" id=\"tab-button-tab-2\">Tab 2</a></div></div><div class=\"col-xs-12 col-sm-9\"><div class=\"c9-tabs-content tab-content\"><!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-1\",\"tabActive\":\"tab-1\",\"id\":0} -->\n    <div class=\"c9-vertical-tabs-tab tab-pane fade show active\" role=\"tabpanel\" id=\"tab-tab-1-0\" aria-labelledby=\"tab-1\"><!-- wp:paragraph -->\n    <p></p>\n    <!-- /wp:paragraph --></div>\n    <!-- /wp:c9-blocks/vertical-tabs-tab -->\n    \n    <!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-2\",\"tabActive\":\"tab-1\",\"id\":0} -->\n    <div class=\"c9-vertical-tabs-tab tab-pane fade\" role=\"tabpanel\" id=\"tab-tab-2-0\" aria-labelledby=\"tab-2\"></div>\n    <!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n    <!-- /wp:c9-blocks/vertical-tabs -->\n    \n    <!-- wp:c9-blocks/posts-grid {\"instanceId\":0} -->\n    <div class=\"c9-posts-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/post-grid /--></div>\n    <!-- /wp:c9-blocks/posts-grid -->\n    "
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWY1YzliOGYxYjg2NmE0MmJlY2IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcHJlcGFyZS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXBkYXRlLWNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9yZWdpc3Rlci1maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvdHdpdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3R3aXR0ZXIvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy90d2l0dGVyL3Jlc29sdmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzcz80MDNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvZWRpdG9yLnNjc3M/YzU3MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2xvci1hcHBlbmRlci9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b20tcGFsZXR0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXN0b20tcGFsZXR0ZS9lZGl0b3Iuc2Nzcz8yYjFlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1c3RvbS1wYWxldHRlL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3RhcnRDYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJ1cnIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVidXJyTGV0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlV29yZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlV29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNhc2VGaXJzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9sYXlvdXQtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9zZWN0aW9uLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvZWRpdG9yLnNjc3M/MGY0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3RlbXBsYXRlcy1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tdGVtcGxhdGVzL2ZhcS10b2dnbGVzLXdpdGgtaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvc2VjdGlvbi10ZW1wbGF0ZXMvaGVhZGVyLXdpdGgtMy1tb2R1bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9zZWN0aW9uLXRlbXBsYXRlcy9taXNzaW9uLXN0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvc2VjdGlvbi10ZW1wbGF0ZXMvc2VydmljZS1vZmZlcmluZy1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tdGVtcGxhdGVzL3ZpZGVvLWJhY2tncm91bmQtY2FsbC10by1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3BhZ2UtdGVtcGxhdGVzL3Jlc3RhdXJhbnQtbWVudS1sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3BhZ2UtdGVtcGxhdGVzL3NlcnZpY2UtbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9wYWdlLXRlbXBsYXRlcy90ZXN0LWJsb2Nrcy5qcyJdLCJuYW1lcyI6WyJwcmVwYXJlUXVlcnkiLCJ0eXBlIiwiZGF0YSIsImFkZGl0aW9uYWxEYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJlbmNvZGUiLCJxdWVyeSIsImFwaUZldGNoIiwicmVxdWVzdCIsInNldFR3aXR0ZXJGZWVkIiwiZmVlZCIsInNldFR3aXR0ZXJQcm9maWxlIiwicHJvZmlsZSIsInVwZGF0ZUNhdGVnb3J5Iiwid3AiLCJibG9ja3MiLCJjb21wb25lbnRzIiwiRyIsIlBhdGgiLCJTVkciLCJsb2dvIiwiaWNvbiIsInVucmVnaXN0ZXJCbG9ja1R5cGUiLCJsb2FkQmxvY2tzRWRpdG9yIiwid2luZG93IiwiX3dwTG9hZEJsb2NrRWRpdG9yIiwiX3dwTG9hZEd1dGVuYmVyZ0VkaXRvciIsInRoZW4iLCJhZGRGaWx0ZXIiLCJob29rcyIsImZvcm1hdENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInJlc3VsdCIsInJlcGxhY2UiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsInNlbGVjdG9ycyIsImFjdGlvbnMiLCJjb250cm9scyIsInJlc29sdmVycyIsInN0YXRlIiwiZmVlZHMiLCJwcm9maWxlcyIsImFjdGlvbiIsImdldFR3aXR0ZXJGZWVkIiwiZ2V0VHdpdHRlclByb2ZpbGUiLCJBUElfRkVUQ0giLCJmZXRjaGVkRGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInBhdGgiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbnMiLCJlZGl0UG9zdCIsIlBsdWdpblNpZGViYXIiLCJQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIiwiRnJhZ21lbnQiLCJlbGVtZW50IiwiX18iLCJpMThuIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiRGFzaGljb24iLCJDOSIsImFyZ3VtZW50cyIsImlzTW9kYWxPcGVuIiwid2lkdGgiLCJtYXJnaW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsIlRvZ2dsZUNvbnRyb2wiLCJUb29sdGlwIiwid2l0aFNlbGVjdCIsIndpdGhEaXNwYXRjaCIsImNvbXBvc2UiLCJzcHJpbnRmIiwiQ29sb3JBcHBlbmRlciIsInNhdmVDb25maWciLCJiaW5kIiwic2F2ZUM5Q29sb3JzIiwic2F2ZUNvbG9ycyIsImtiQ29sb3JVbmlxdWVJRCIsImlzU2F2aW5nIiwiYzlDb2xvcnMiLCJjOV9ibG9ja3NfcGFyYW1zIiwiY29sb3JzIiwiSlNPTiIsInBhcnNlIiwicGFsZXR0ZSIsIm92ZXJyaWRlIiwib3JpZ0NvbG9ycyIsIm9yaWdfY29sb3JzIiwicHJvcHMiLCJiYXNlQ29sb3JzIiwibGVuZ3RoIiwiY29uZmlnIiwic2V0dGluZ01vZGVsIiwiYXBpIiwibW9kZWxzIiwiU2V0dGluZ3MiLCJjOV9ibG9ja3NfY29sb3JzIiwic2F2ZSIsInVwZGF0ZVNldHRpbmdzIiwidmFsdWUiLCJpbmRleCIsIm5vbkVkaXRhYmxlcyIsImVkaXRhYmxlcyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsInVuZGVmaW5lZCIsImN1cnIiLCJzbHVnIiwic3Vic3RyIiwicHVzaCIsIm5hbWUiLCJjb2xvciIsInRpdGxlIiwicG9wIiwiaWQiLCJuZXdDb2xvcnMiLCJuZXdDOUNvbG9ycyIsInNlbGVjdCIsImdldFNldHRpbmdzIiwic2V0dGluZ3MiLCJnZXQiLCJkaXNwYXRjaCIsIlBvcG92ZXIiLCJDb2xvckluZGljYXRvciIsIkNvbG9yUGlja2VyIiwiVGV4dENvbnRyb2wiLCJDdXN0b21QYWxldHRlIiwidG9nZ2xlVmlzaWJsZSIsImlzVmlzaWJsZSIsInRvZ2dsZUNsb3NlIiwib25TYXZlIiwiY2hhbmdlQ29sb3IiLCJjb2xvclZhbHVlIiwibmFtZVZhbHVlIiwiaGV4IiwiY29sb3JEZWZhdWx0IiwiTW9kYWwiLCJUYWJQYW5lbCIsIkljb24iLCJyYXdIYW5kbGVyIiwiVGVtcGxhdGVzTW9kYWwiLCJnZXRSZXVzYWJsZUJsb2NrcyIsInJldXNhYmxlcyIsImNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCIsInBvc3RUeXBlIiwicmVzdF9iYXNlIiwiaXRlbSIsInJhdyIsImNvbnRlbnQiLCJIVE1MIiwibW9kZSIsInRlbXBsYXRlT2JqIiwiYmxvY2tPYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlzIiwia2V5IiwibWFya3VwIiwicmVzZXRCbG9ja3MiLCJzZWN0aW9ucyIsIm1hcmt1cFRvQmxvY2siLCJ0ZW1wbGF0ZU1hcmt1cHMiLCJsYXlvdXRzIiwiaW5pdGlhbCIsInRhYiIsImsiLCJzdGFydENhc2UiLCJvYmoiLCJUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QiLCJjbGllbnRJZCIsImdldEJsb2NrIiwiYmxvY2siLCJpbnNlcnRCbG9ja3MiLCJMYXlvdXRCdXR0b24iLCJsYWJlbCIsImxheW91dCIsIlNlY3Rpb25CdXR0b24iLCJzZWN0aW9uIiwicmVzdGF1cmFudE1lbnVMYW5kaW5nUGFnZSIsInNlcnZpY2VMYW5kaW5nUGFnZSIsInRlc3RCbG9ja3MiLCJmYXFUb2dnbGVzV2l0aEhlYWRpbmciLCJoZWFkZXJXaXRoM01vZHVsZXMiLCJtaXNzaW9uU3RhdGVtZW50Iiwic2VydmljZU9mZmVyaW5nSGVhZGVyIiwidmlkZW9CYWNrZ3JvdW5kQ2FsbFRvQWN0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4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O0FBQ0wscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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V0FEUTtBQUVkOEksU0FDQztBQUhhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZDlJLE9BQU0sV0FEUTtBQUVkOEksU0FDQztBQUhhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZDlJLE9BQU0sV0FEUTtBQUVkOEksU0FDQztBQUhhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZDlJLE9BQU0sV0FEUTtBQUVkOEksU0FDQztBQUhhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZDlJLE9BQU0sV0FEUTtBQUVkOEksU0FDQztBQUhhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZDlJLFNBQU0sV0FEUTtBQUVkOEk7QUFGYyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2Q5SSxTQUFNLFdBRFE7QUFFZDhJO0FBRmMsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBZTtBQUNYOUksVUFBTSxXQURLO0FBRVg4STtBQUZXLENBQWYsRSIsImZpbGUiOiIuL2Rpc3QvYmxvY2tzLnVwZGF0ZS1jYXRlZ29yeS5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWY1YzliOGYxYjg2NmE0MmJlY2IiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbnZhciBoZXhUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBhcnJheS5wdXNoKCclJyArICgoaSA8IDE2ID8gJzAnIDogJycpICsgaS50b1N0cmluZygxNikpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn0oKSk7XG5cbnZhciBjb21wYWN0UXVldWUgPSBmdW5jdGlvbiBjb21wYWN0UXVldWUocXVldWUpIHtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbal0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLm9ialtpdGVtLnByb3BdID0gY29tcGFjdGVkO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiBhcnJheVRvT2JqZWN0KHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSBvcHRpb25zICYmIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICgob3B0aW9ucyAmJiAob3B0aW9ucy5wbGFpbk9iamVjdHMgfHwgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpKSB8fCAhaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbdGFyZ2V0LCBzb3VyY2VdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgIWlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBtZXJnZVRhcmdldCA9IGFycmF5VG9PYmplY3QodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmIGlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRhcmdldCwgaSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SXRlbSA9IHRhcmdldFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SXRlbSAmJiB0eXBlb2YgdGFyZ2V0SXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gbWVyZ2UodGFyZ2V0SXRlbSwgaXRlbSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChoYXMuY2FsbChhY2MsIGtleSkpIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gbWVyZ2UoYWNjW2tleV0sIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBtZXJnZVRhcmdldCk7XG59O1xuXG52YXIgYXNzaWduID0gZnVuY3Rpb24gYXNzaWduU2luZ2xlU291cmNlKHRhcmdldCwgc291cmNlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBhY2Nba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRhcmdldCk7XG59O1xuXG52YXIgZGVjb2RlID0gZnVuY3Rpb24gKHN0ciwgZGVjb2RlciwgY2hhcnNldCkge1xuICAgIHZhciBzdHJXaXRob3V0UGx1cyA9IHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIC8vIHVuZXNjYXBlIG5ldmVyIHRocm93cywgbm8gdHJ5Li4uY2F0Y2ggbmVlZGVkOlxuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXMucmVwbGFjZSgvJVswLTlhLWZdezJ9L2dpLCB1bmVzY2FwZSk7XG4gICAgfVxuICAgIC8vIHV0Zi04XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJXaXRob3V0UGx1cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXM7XG4gICAgfVxufTtcblxudmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShzdHIsIGRlZmF1bHRFbmNvZGVyLCBjaGFyc2V0KSB7XG4gICAgLy8gVGhpcyBjb2RlIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgQnJpYW4gV2hpdGUgKG1zY2RleCkgZm9yIHRoZSBpby5qcyBjb3JlIHF1ZXJ5c3RyaW5nIGxpYnJhcnkuXG4gICAgLy8gSXQgaGFzIGJlZW4gYWRhcHRlZCBoZXJlIGZvciBzdHJpY3RlciBhZGhlcmVuY2UgdG8gUkZDIDM5ODZcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSBzdHI7XG4gICAgaWYgKHR5cGVvZiBzdHIgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdHIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICByZXR1cm4gZXNjYXBlKHN0cmluZykucmVwbGFjZSgvJXVbMC05YS1mXXs0fS9naSwgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyUyNiUyMycgKyBwYXJzZUludCgkMC5zbGljZSgyKSwgMTYpICsgJyUzQic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGMgPT09IDB4MkQgLy8gLVxuICAgICAgICAgICAgfHwgYyA9PT0gMHgyRSAvLyAuXG4gICAgICAgICAgICB8fCBjID09PSAweDVGIC8vIF9cbiAgICAgICAgICAgIHx8IGMgPT09IDB4N0UgLy8gflxuICAgICAgICAgICAgfHwgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIC8vIDAtOVxuICAgICAgICAgICAgfHwgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIC8vIGEtelxuICAgICAgICAgICAgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpIC8vIEEtWlxuICAgICAgICApIHtcbiAgICAgICAgICAgIG91dCArPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIGhleFRhYmxlW2NdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhDMCB8IChjID4+IDYpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHhEODAwIHx8IGMgPj0gMHhFMDAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhFMCB8IChjID4+IDEyKV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaSArPSAxO1xuICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNGRikgPDwgMTApIHwgKHN0cmluZy5jaGFyQ29kZUF0KGkpICYgMHgzRkYpKTtcbiAgICAgICAgb3V0ICs9IGhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG52YXIgY29tcGFjdCA9IGZ1bmN0aW9uIGNvbXBhY3QodmFsdWUpIHtcbiAgICB2YXIgcXVldWUgPSBbeyBvYmo6IHsgbzogdmFsdWUgfSwgcHJvcDogJ28nIH1dO1xuICAgIHZhciByZWZzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWVbaV07XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgcmVmcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IG9iajogb2JqLCBwcm9wOiBrZXkgfSk7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYWN0UXVldWUocXVldWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIGlzUmVnRXhwID0gZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBpc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuXG52YXIgY29tYmluZSA9IGZ1bmN0aW9uIGNvbWJpbmUoYSwgYikge1xuICAgIHJldHVybiBbXS5jb25jYXQoYSwgYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcnJheVRvT2JqZWN0OiBhcnJheVRvT2JqZWN0LFxuICAgIGFzc2lnbjogYXNzaWduLFxuICAgIGNvbWJpbmU6IGNvbWJpbmUsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBkZWNvZGU6IGRlY29kZSxcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gICAgaXNSZWdFeHA6IGlzUmVnRXhwLFxuICAgIG1lcmdlOiBtZXJnZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZVF1ZXJ5KCB0eXBlLCBkYXRhICkge1xuICAgIGNvbnN0IGFkZGl0aW9uYWxEYXRhID0gcXMuc3RyaW5naWZ5KCBkYXRhLCB7IGVuY29kZTogZmFsc2UgfSApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYC9jOS1ibG9ja3MvZ2V0X3R3aXR0ZXJfJHsgdHlwZSB9LyR7IGFkZGl0aW9uYWxEYXRhID8gYD8keyBhZGRpdGlvbmFsRGF0YSB9YCA6ICcnIH1gO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3ByZXBhcmUtcXVlcnkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsLmFzc2lnbihcbiAgICB7XG4gICAgICAgICdkZWZhdWx0JzogRm9ybWF0LlJGQzM5ODYsXG4gICAgICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgRm9ybWF0XG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgZnVuY3Rpb24gYXBpRmV0Y2gocmVxdWVzdCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiQVBJX0ZFVENIXCIsXG5cdFx0cmVxdWVzdFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHdpdHRlckZlZWQocXVlcnksIGZlZWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBcIlNFVF9UV0lUVEVSX0ZFRURcIixcblx0XHRxdWVyeSxcblx0XHRmZWVkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUd2l0dGVyUHJvZmlsZShxdWVyeSwgcHJvZmlsZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFwiU0VUX1RXSVRURVJfUFJPRklMRVwiLFxuXHRcdHF1ZXJ5LFxuXHRcdHByb2ZpbGVcblx0fTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9hY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyB1cGRhdGVDYXRlZ29yeSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBHLCBQYXRoLCBTVkcgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogSWNvblxuICovXG5cbmNvbnN0IGxvZ28gPSAoXG5cdDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjM0LjkyIDE3NC42NVwiPlxuXHRcdDxkZWZzPlxuXHRcdFx0PHN0eWxlPntgLmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO31gfTwvc3R5bGU+XG5cdFx0XHQ8bGluZWFyR3JhZGllbnRcblx0XHRcdFx0aWQ9XCJsaW5lYXItZ3JhZGllbnRcIlxuXHRcdFx0XHR4MT1cIjc5LjEyXCJcblx0XHRcdFx0eTE9XCIyMy44MVwiXG5cdFx0XHRcdHgyPVwiMTY2LjRcIlxuXHRcdFx0XHR5Mj1cIjE1OC4yMlwiXG5cdFx0XHRcdGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wQ29sb3I9XCIjNjFjYWU1XCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC4xMlwiIHN0b3BDb2xvcj1cIiM2NGM2ZTFcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjI1XCIgc3RvcENvbG9yPVwiIzZkYmFkM1wiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuMzlcIiBzdG9wQ29sb3I9XCIjN2JhN2JkXCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC41NFwiIHN0b3BDb2xvcj1cIiM4ZjhiOWZcIiAvPlxuXHRcdFx0XHQ8c3RvcCBvZmZzZXQ9XCIwLjY4XCIgc3RvcENvbG9yPVwiI2E5Njg3N1wiIC8+XG5cdFx0XHRcdDxzdG9wIG9mZnNldD1cIjAuODNcIiBzdG9wQ29sb3I9XCIjYzkzZDQ4XCIgLz5cblx0XHRcdFx0PHN0b3Agb2Zmc2V0PVwiMC45MlwiIHN0b3BDb2xvcj1cIiNkZjFmMjZcIiAvPlxuXHRcdFx0PC9saW5lYXJHcmFkaWVudD5cblx0XHQ8L2RlZnM+XG5cdFx0PHRpdGxlPmM5LWZlYXRoZXItbG9nby1pY29uPC90aXRsZT5cblx0XHQ8RyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XG5cdFx0XHQ8RyBpZD1cImxvZ29fZ3JhZGllbnRcIiBkYXRhLW5hbWU9XCJsb2dvIGdyYWRpZW50XCI+XG5cdFx0XHRcdDxQYXRoXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xzLTFcIlxuXHRcdFx0XHRcdGQ9XCJNNDcsMTM4LjA2QzQwLjM3LDEyMy45LDQwLjg0LDM2LjQxLDgzLjU0LDIyLjRjMCwwLTE1LjY0LDcuMjktMTAuMTIsMjcuNDUsNy4yLTEzLjY4LDIwLjMzLTM3LjIyLDU3Ljc3LTQzLjQ2LDI0LTIuODktMTMuMTUsMS4xLTYsMjIuMjIuMjQtOC44OCw1OS40MS00NSwxMDgtMTkuODFDMjQ2LjQzLDEwNC42OSwxNzcsMTEwLjA2LDE3NywxMTAuMDZoMHMxNC45NSwyLjM4LDIzLjgzLS41Yy05LjEyLDM5Ljg0LTYzLjEzLDQyLjE0LTYzLjEzLDQyLjE0czIwLjUxLDUuMTEsMzQuOTIsMi40N2MtNDkuNDUsMzIuNC0xMTYuODYtNC44Ni0xMTYuODYtNC44Ni0uMjcuMDgtLjgzLS40My0xLjU4LTEuMzFsMTEyLTc4YTI1LjA5LDI1LjA5LDAsMSwwLTYtNi4yN0w3OS45LDEyMC40bC0yLjIzLTMuMjUtMzAuNTksMjFNMTgzLjcyLDMzLjc0YTE2LjI1LDE2LjI1LDAsMSwxLTE4Ljg0LDEzLjE3LDE2LjI0LDE2LjI0LDAsMCwxLDE4Ljg0LTEzLjE3Wk01NC4xNywxNDhsLS4zOS0uNTUuNDMuNTIsMCwwWm0tMzQuNDMtNi41NSw4LjQ1LTUuNSw1LjUsOC40NC04LjQ0LDUuNS01LjUxLTguNDRabS00LjM3LDE0Ljg3LTUuNS04LjQ0LDguNDUtNS41LDUuNSw4LjQ0LTguNDUsNS41Wk01LjUsMTYyLjc5LDAsMTU0LjM0bDguNDUtNS41LDUuNSw4LjQ0TDUuNSwxNjIuNzlabTQ2Ljg2LTEzLjg3TDEzLjQxLDE3NC42NSw2LjQ2LDE2NC4zMSw0NSwxMzkuM2w3LjMzLDkuNjJaXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvRz5cblx0XHQ8L0c+XG5cdDwvU1ZHPlxuKTtcblxuaWYgKHVwZGF0ZUNhdGVnb3J5KSB7XG5cdHVwZGF0ZUNhdGVnb3J5KFwiYzktYmxvY2tzXCIsIHsgaWNvbjogbG9nbyB9KTtcbn1cblxuaW1wb3J0IFwiLi91cGRhdGUtY2F0ZWdvcnkvZGVyZWdpc3Rlci1ibG9ja3NcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLWZpbHRlcnNcIjtcbmltcG9ydCBcIi4vdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0eWxlc1wiO1xuaW1wb3J0IFwiLi91cGRhdGUtY2F0ZWdvcnkvcmVnaXN0ZXItc3RvcmVzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS5qcyIsImNvbnN0IHsgdW5yZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuXG5sZXQgbG9hZEJsb2Nrc0VkaXRvciA9IG51bGw7XG5cbmlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcikge1xuXHQvLyBVc2luZyBHdXRlbmJlcmcgcGx1Z2luXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEJsb2NrRWRpdG9yO1xufSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRHdXRlbmJlcmdFZGl0b3IpIHtcblx0Ly8gVXNpbmcgV1AgY29yZSBHdXRlbmJlcmdcblx0bG9hZEJsb2Nrc0VkaXRvciA9IHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yO1xufVxuXG5pZiAobG9hZEJsb2Nrc0VkaXRvcikge1xuXHRsb2FkQmxvY2tzRWRpdG9yLnRoZW4oKCkgPT4ge1xuXHRcdHVucmVnaXN0ZXJCbG9ja1R5cGUoXCJjb3JlL3ZlcnNlXCIpO1xuXHRcdC8vIHVucmVnaXN0ZXJCbG9ja1R5cGUoXCJjb3JlL2NvbHVtbnNcIik7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VwZGF0ZS1jYXRlZ29yeS9kZXJlZ2lzdGVyLWJsb2Nrcy5qcyIsImNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcblxuZnVuY3Rpb24gZm9ybWF0Q2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuXHRjb25zdCByZXN1bHQgPSBjbGFzc05hbWUucmVwbGFjZShcIndwLWJsb2NrLWM5LWJsb2Nrc1wiLCBcImM5XCIpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5hZGRGaWx0ZXIoXG5cdFwiYzktYmxvY2tzLmVkaXRvci5jbGFzc05hbWVcIixcblx0XCJjOS1ibG9ja3MvZm9ybWF0LWNsYXNzbmFtZVwiLFxuXHRmb3JtYXRDbGFzc05hbWVcbik7XG5hZGRGaWx0ZXIoXG5cdFwiYzktYmxvY2tzLmJsb2Nrcy5jbGFzc05hbWVcIixcblx0XCJjOS1ibG9ja3MvZm9ybWF0LWNsYXNzbmFtZVwiLFxuXHRmb3JtYXRDbGFzc05hbWVcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLWZpbHRlcnMuanMiLCIvLyBjb25zdCB7IHJlZ2lzdGVyQmxvY2tTdHlsZSB9ID0gd3AuYmxvY2tzO1xuXG5sZXQgbG9hZEJsb2Nrc0VkaXRvciA9IG51bGw7XG5cbmlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRCbG9ja0VkaXRvcikge1xuXHQvLyBVc2luZyBHdXRlbmJlcmcgcGx1Z2luXG5cdGxvYWRCbG9ja3NFZGl0b3IgPSB3aW5kb3cuX3dwTG9hZEJsb2NrRWRpdG9yO1xufSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93Ll93cExvYWRHdXRlbmJlcmdFZGl0b3IpIHtcblx0Ly8gVXNpbmcgV1AgY29yZSBHdXRlbmJlcmdcblx0bG9hZEJsb2Nrc0VkaXRvciA9IHdpbmRvdy5fd3BMb2FkR3V0ZW5iZXJnRWRpdG9yO1xufVxuXG5pZiAobG9hZEJsb2Nrc0VkaXRvcikge1xuXHRsb2FkQmxvY2tzRWRpdG9yLnRoZW4oKCkgPT4ge1xuXHRcdC8vIHJlZ2lzdGVyQmxvY2tTdHlsZShcImNvcmUvYnV0dG9uXCIsIHtcblx0XHQvLyBcdG5hbWU6IFwiY3VzdG9tLWJ1dHRvbi1zdHlsZVwiLFxuXHRcdC8vIFx0bGFiZWw6IFwiTXkgQnV0dG9uIFN0eWxlXCJcblx0XHQvLyB9KTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0eWxlcy5qcyIsImltcG9ydCBcIi4uL3N0b3Jlcy90d2l0dGVyXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXBkYXRlLWNhdGVnb3J5L3JlZ2lzdGVyLXN0b3Jlcy5qcyIsImltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29udHJvbHMgZnJvbSBcIi4vY29udHJvbHNcIjtcbmltcG9ydCAqIGFzIHJlc29sdmVycyBmcm9tIFwiLi9yZXNvbHZlcnNcIjtcblxuY29uc3QgeyByZWdpc3RlclN0b3JlIH0gPSB3cC5kYXRhO1xuXG5yZWdpc3RlclN0b3JlKFwiYzktYmxvY2tzL3R3aXR0ZXJcIiwge1xuXHRyZWR1Y2VyLFxuXHRzZWxlY3RvcnMsXG5cdGFjdGlvbnMsXG5cdGNvbnRyb2xzLFxuXHRyZXNvbHZlcnNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL2luZGV4LmpzIiwiZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgZmVlZHM6IHt9LCBwcm9maWxlczoge30gfSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFwiU0VUX1RXSVRURVJfRkVFRFwiOlxuXHRcdFx0aWYgKCFzdGF0ZS5mZWVkc1thY3Rpb24ucXVlcnldICYmIGFjdGlvbi5mZWVkKSB7XG5cdFx0XHRcdHN0YXRlLmZlZWRzW2FjdGlvbi5xdWVyeV0gPSBhY3Rpb24uZmVlZDtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJTRVRfVFdJVFRFUl9QUk9GSUxFXCI6XG5cdFx0XHRpZiAoIXN0YXRlLnByb2ZpbGVzW2FjdGlvbi5xdWVyeV0gJiYgYWN0aW9uLnByb2ZpbGUpIHtcblx0XHRcdFx0c3RhdGUucHJvZmlsZXNbYWN0aW9uLnF1ZXJ5XSA9IGFjdGlvbi5wcm9maWxlO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Ly8gbm8gZGVmYXVsdFxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy90d2l0dGVyL3JlZHVjZXIuanMiLCJpbXBvcnQgcHJlcGFyZVF1ZXJ5IGZyb20gXCIuL3ByZXBhcmUtcXVlcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR3aXR0ZXJGZWVkKHN0YXRlLCBkYXRhKSB7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5KFwiZmVlZFwiLCBkYXRhKTtcblxuXHRyZXR1cm4gc3RhdGUuZmVlZHNbcXVlcnldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHdpdHRlclByb2ZpbGUoc3RhdGUsIGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJwcm9maWxlXCIsIGRhdGEpO1xuXG5cdHJldHVybiBzdGF0ZS5wcm9maWxlc1txdWVyeV07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL3R3aXR0ZXIvc2VsZWN0b3JzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHM6IGZvcm1hdHMsXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBhcnJheVByZWZpeEdlbmVyYXRvcnMgPSB7XG4gICAgYnJhY2tldHM6IGZ1bmN0aW9uIGJyYWNrZXRzKHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICB9LFxuICAgIGNvbW1hOiAnY29tbWEnLFxuICAgIGluZGljZXM6IGZ1bmN0aW9uIGluZGljZXMocHJlZml4LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICB9LFxuICAgIHJlcGVhdDogZnVuY3Rpb24gcmVwZWF0KHByZWZpeCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgIH1cbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG52YXIgcHVzaFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZU9yQXJyYXkpIHtcbiAgICBwdXNoLmFwcGx5KGFyciwgaXNBcnJheSh2YWx1ZU9yQXJyYXkpID8gdmFsdWVPckFycmF5IDogW3ZhbHVlT3JBcnJheV0pO1xufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0Rm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xudmFyIGRlZmF1bHRzID0ge1xuICAgIGFkZFF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICBmb3JtYXR0ZXI6IGZvcm1hdHMuZm9ybWF0dGVyc1tkZWZhdWx0Rm9ybWF0XSxcbiAgICAvLyBkZXByZWNhdGVkXG4gICAgaW5kaWNlczogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaXNOb25OdWxsaXNoUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNOb25OdWxsaXNoUHJpbWl0aXZlKHYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnc3ltYm9sJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2JpZ2ludCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG59O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0dGVyLFxuICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgY2hhcnNldFxuKSB7XG4gICAgdmFyIG9iaiA9IG9iamVjdDtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmogPSBvYmouam9pbignLCcpO1xuICAgIH1cblxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCkpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihwcmVmaXgpICsgJz0nICsgZm9ybWF0dGVyKFN0cmluZyhvYmopKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXM7XG4gICAgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnZnVuY3Rpb24nID8gZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSkgOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiBvcHRzLmVuY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIG9iaktleXMuc29ydChvcHRpb25zLnNvcnQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXR0ZXIsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICBvcHRpb25zLmNoYXJzZXRcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBhbGxvd1Byb3RvdHlwZXM6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBjb21tYTogZmFsc2UsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IGZhbHNlLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBhcnNlQXJyYXlzOiB0cnVlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGludGVycHJldE51bWVyaWNFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbiAoJDAsIG51bWJlclN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChudW1iZXJTdHIsIDEwKSk7XG4gICAgfSk7XG59O1xuXG4vLyBUaGlzIGlzIHdoYXQgYnJvd3NlcnMgd2lsbCBzdWJtaXQgd2hlbiB0aGUg4pyTIGNoYXJhY3RlciBvY2N1cnMgaW4gYW5cbi8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCBib2R5IGFuZCB0aGUgZW5jb2Rpbmcgb2YgdGhlIHBhZ2UgY29udGFpbmluZ1xuLy8gdGhlIGZvcm0gaXMgaXNvLTg4NTktMSwgb3Igd2hlbiB0aGUgc3VibWl0dGVkIGZvcm0gaGFzIGFuIGFjY2VwdC1jaGFyc2V0XG4vLyBhdHRyaWJ1dGUgb2YgaXNvLTg4NTktMS4gUHJlc3VtYWJseSBhbHNvIHdpdGggb3RoZXIgY2hhcnNldHMgdGhhdCBkbyBub3QgY29udGFpblxuLy8gdGhlIOKckyBjaGFyYWN0ZXIsIHN1Y2ggYXMgdXMtYXNjaWkuXG52YXIgaXNvU2VudGluZWwgPSAndXRmOD0lMjYlMjMxMDAwMyUzQic7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKVxuXG4vLyBUaGVzZSBhcmUgdGhlIHBlcmNlbnQtZW5jb2RlZCB1dGYtOCBvY3RldHMgcmVwcmVzZW50aW5nIGEgY2hlY2ttYXJrLCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3QgYWN0dWFsbHkgaXMgdXRmLTggZW5jb2RlZC5cbnZhciBjaGFyc2V0U2VudGluZWwgPSAndXRmOD0lRTIlOUMlOTMnOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG5cbnZhciBwYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdWYWx1ZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBjbGVhblN0ciA9IG9wdGlvbnMuaWdub3JlUXVlcnlQcmVmaXggPyBzdHIucmVwbGFjZSgvXlxcPy8sICcnKSA6IHN0cjtcbiAgICB2YXIgbGltaXQgPSBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQ7XG4gICAgdmFyIHBhcnRzID0gY2xlYW5TdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIGxpbWl0KTtcbiAgICB2YXIgc2tpcEluZGV4ID0gLTE7IC8vIEtlZXAgdHJhY2sgb2Ygd2hlcmUgdGhlIHV0Zjggc2VudGluZWwgd2FzIGZvdW5kXG4gICAgdmFyIGk7XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdGlvbnMuY2hhcnNldDtcbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAocGFydHNbaV0uaW5kZXhPZigndXRmOD0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0c1tpXSA9PT0gY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHNbaV0gPT09IGlzb1NlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNraXBJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaSA9IHBhcnRzLmxlbmd0aDsgLy8gVGhlIGVzbGludCBzZXR0aW5ncyBkbyBub3QgYWxsb3cgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGkgPT09IHNraXBJbmRleCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICB2YXIgYnJhY2tldEVxdWFsc1BvcyA9IHBhcnQuaW5kZXhPZignXT0nKTtcbiAgICAgICAgdmFyIHBvcyA9IGJyYWNrZXRFcXVhbHNQb3MgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBicmFja2V0RXF1YWxzUG9zICsgMTtcblxuICAgICAgICB2YXIga2V5LCB2YWw7XG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydCwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcyksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UocG9zICsgMSksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmludGVycHJldE51bWVyaWNFbnRpdGllcyAmJiBjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIHZhbCA9IGludGVycHJldE51bWVyaWNFbnRpdGllcyh2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmNvbW1hICYmIHZhbC5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHV0aWxzLmNvbWJpbmUob2JqW2tleV0sIHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuICAgIHZhciBsZWFmID0gdmFsO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWY7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucykge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBvcHRpb25zLmRlcHRoID4gMCAmJiBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAob3B0aW9ucy5kZXB0aCA+IDAgJiYgKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxudmFyIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZWNvZGVyICE9PSBudWxsICYmIG9wdHMuZGVjb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRzLmRlY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGNoYXJzZXQgPSB0eXBlb2Ygb3B0cy5jaGFyc2V0ID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmNoYXJzZXQgOiBvcHRzLmNoYXJzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBhbGxvd1Byb3RvdHlwZXM6IHR5cGVvZiBvcHRzLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXMsXG4gICAgICAgIGFycmF5TGltaXQ6IHR5cGVvZiBvcHRzLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0cy5hcnJheUxpbWl0IDogZGVmYXVsdHMuYXJyYXlMaW1pdCxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBjb21tYTogdHlwZW9mIG9wdHMuY29tbWEgPT09ICdib29sZWFuJyA/IG9wdHMuY29tbWEgOiBkZWZhdWx0cy5jb21tYSxcbiAgICAgICAgZGVjb2RlcjogdHlwZW9mIG9wdHMuZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZGVjb2RlciA6IGRlZmF1bHRzLmRlY29kZXIsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCB1dGlscy5pc1JlZ0V4cChvcHRzLmRlbGltaXRlcikgPyBvcHRzLmRlbGltaXRlciA6IGRlZmF1bHRzLmRlbGltaXRlcixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uLCBuby1leHRyYS1wYXJlbnNcbiAgICAgICAgZGVwdGg6ICh0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ251bWJlcicgfHwgb3B0cy5kZXB0aCA9PT0gZmFsc2UpID8gK29wdHMuZGVwdGggOiBkZWZhdWx0cy5kZXB0aCxcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IG9wdHMuaWdub3JlUXVlcnlQcmVmaXggPT09IHRydWUsXG4gICAgICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogdHlwZW9mIG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID09PSAnYm9vbGVhbicgPyBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA6IGRlZmF1bHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyxcbiAgICAgICAgcGFyYW1ldGVyTGltaXQ6IHR5cGVvZiBvcHRzLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdCxcbiAgICAgICAgcGFyc2VBcnJheXM6IG9wdHMucGFyc2VBcnJheXMgIT09IGZhbHNlLFxuICAgICAgICBwbGFpbk9iamVjdHM6IHR5cGVvZiBvcHRzLnBsYWluT2JqZWN0cyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5wbGFpbk9iamVjdHMgOiBkZWZhdWx0cy5wbGFpbk9iamVjdHMsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKTtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBwYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSB1dGlscy5tZXJnZShvYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IGFwaUZldGNoIH0gPSB3cDtcblxuZXhwb3J0IGZ1bmN0aW9uIEFQSV9GRVRDSCh7IHJlcXVlc3QgfSkge1xuXHRyZXR1cm4gYXBpRmV0Y2gocmVxdWVzdCkudGhlbihmZXRjaGVkRGF0YSA9PiB7XG5cdFx0aWYgKGZldGNoZWREYXRhICYmIGZldGNoZWREYXRhLnN1Y2Nlc3MgJiYgZmV0Y2hlZERhdGEucmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiBmZXRjaGVkRGF0YS5yZXNwb25zZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9jb250cm9scy5qcyIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHByZXBhcmVRdWVyeSBmcm9tIFwiLi9wcmVwYXJlLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0VHdpdHRlckZlZWQoZGF0YSkge1xuXHRjb25zdCBxdWVyeSA9IHByZXBhcmVRdWVyeShcImZlZWRcIiwgZGF0YSk7XG5cdGNvbnN0IGZlZWQgPSB5aWVsZCBhY3Rpb25zLmFwaUZldGNoKHsgcGF0aDogcXVlcnkgfSk7XG5cblx0cmV0dXJuIGFjdGlvbnMuc2V0VHdpdHRlckZlZWQocXVlcnksIGZlZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIGdldFR3aXR0ZXJQcm9maWxlKGRhdGEpIHtcblx0Y29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnkoXCJwcm9maWxlXCIsIGRhdGEpO1xuXHRjb25zdCBwcm9maWxlID0geWllbGQgYWN0aW9ucy5hcGlGZXRjaCh7IHBhdGg6IHF1ZXJ5IH0pO1xuXG5cdHJldHVybiBhY3Rpb25zLnNldFR3aXR0ZXJQcm9maWxlKHF1ZXJ5LCBwcm9maWxlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvdHdpdHRlci9yZXNvbHZlcnMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHsgcmVnaXN0ZXJQbHVnaW4gfSA9IHdwLnBsdWdpbnM7XG5jb25zdCB7IFBsdWdpblNpZGViYXIsIFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0gfSA9IHdwLmVkaXRQb3N0O1xuXG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgQnV0dG9uLCBQYW5lbEJvZHksIERhc2hpY29uIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5cbmltcG9ydCBDb2xvckFwcGVuZGVyIGZyb20gXCIuLi9jb2xvci1hcHBlbmRlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9jOS1mZWF0aGVyLWxvZ28tZ3JheS5zdmdcIjtcbmltcG9ydCB7IFRlbXBsYXRlc01vZGFsIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy1tb2RhbFwiO1xuXG5jbGFzcyBDOSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNNb2RhbE9wZW46IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGlzTW9kYWxPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW1cblx0XHRcdFx0XHRpY29uPXs8TG9nbyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIG1hcmdpbjogXCIwIDEwcHggMCA2cHhcIiB9fSAvPn1cblx0XHRcdFx0XHR0YXJnZXQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e19fKFwiQ09WRVJUIE5JTkUgQmxvY2tzXCIsIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHQ8L1BsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0+XG5cdFx0XHRcdDxQbHVnaW5TaWRlYmFyXG5cdFx0XHRcdFx0bmFtZT1cImM5LWJsb2Nrc1wiXG5cdFx0XHRcdFx0aWQ9XCJjOS1ibG9ja3NcIlxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkNPVkVSVCBOSU5FIEJsb2Nrc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1jOS1wYW5lbC1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBcInNlY3Rpb24tdGVtcGxhdGVzXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtc2NoZWR1bGVcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJTZWN0aW9uIFRlbXBsYXRlc1wiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYzktcGFuZWwtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0XG5cdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogXCJwYWdlLXRlbXBsYXRlc1wiIH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWVkaXRvci1jb2RlXCIgLz5cblx0XHRcdFx0XHRcdFx0e19fKFwiUGFnZSBUZW1wbGF0ZXNcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGx1Z2luLWM5LXBhbmVsLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGlzRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNNb2RhbE9wZW46IFwic2F2ZWQtYmxvY2tzXCIgfSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tc2V0dGluZ3NcIiAvPlxuXHRcdFx0XHRcdFx0XHR7X18oXCJTYXZlZCBCbG9ja3NcIiwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8Yj5cblx0XHRcdFx0XHRcdFx0XHRDb2xvciBQYWxldHRlXG5cdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHQ8Q29sb3JBcHBlbmRlciAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L1BsdWdpblNpZGViYXI+XG5cdFx0XHRcdHtcInNlY3Rpb24tdGVtcGxhdGVzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0gLz59XG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KX1cblx0XHRcdFx0XHRcdGluaXRpYWw9XCJzZWN0aW9uc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtcInBhZ2UtdGVtcGxhdGVzXCIgPT09IGlzTW9kYWxPcGVuID8gKFxuXHRcdFx0XHRcdDxUZW1wbGF0ZXNNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdFx0aWNvbj17PERhc2hpY29uIGljb249e1wic2NoZWR1bGVcIn0gLz59XG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTW9kYWxPcGVuOiBmYWxzZSB9KX1cblx0XHRcdFx0XHRcdGluaXRpYWw9XCJwYWdlc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtcInNhdmVkLWJsb2Nrc1wiID09PSBpc01vZGFsT3BlbiA/IChcblx0XHRcdFx0XHQ8VGVtcGxhdGVzTW9kYWxcblx0XHRcdFx0XHRcdHRpdGxlPVwiVGVtcGxhdGVzXCJcblx0XHRcdFx0XHRcdGljb249ezxEYXNoaWNvbiBpY29uPXtcInNjaGVkdWxlXCJ9IC8+fVxuXHRcdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogZmFsc2UgfSl9XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiYmxvY2tzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0KX1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5yZWdpc3RlclBsdWdpbihcImM5LWJsb2Nrc1wiLCB7XG5cdGljb246IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXBsdWdpbi1pY29uXCI+XG5cdFx0XHQ8TG9nbyAvPlxuXHRcdDwvZGl2PlxuXHQpLFxuXHRyZW5kZXI6IEM5XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvaW5kZXguanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3ZnLC5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246aG92ZXIgLmM5LXBsdWdpbi1pY29uIHN2Z3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxNnB4fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnICosLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbi5pcy10b2dnbGVkIC5jOS1wbHVnaW4taWNvbiBzdmcgKiwuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmcgKntzdHJva2U6aW5pdGlhbCAhaW1wb3J0YW50fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b246bm90KC5pcy10b2dnbGVkKSAuYzktcGx1Z2luLWljb24gc3ZnIFtmaWxsPVxcXCIjZmZmXFxcIl0sLmVkaXQtcG9zdC1waW5uZWQtcGx1Z2lucyAuY29tcG9uZW50cy1pY29uLWJ1dHRvbi5pcy10b2dnbGVkIC5jOS1wbHVnaW4taWNvbiBzdmcgW2ZpbGw9XFxcIiNmZmZcXFwiXSwuZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uOmhvdmVyIC5jOS1wbHVnaW4taWNvbiBzdmcgW2ZpbGw9XFxcIiNmZmZcXFwiXXtmaWxsOiNmZmYgIWltcG9ydGFudH0uZWRpdC1wb3N0LXBpbm5lZC1wbHVnaW5zIC5jb21wb25lbnRzLWljb24tYnV0dG9uIC5jOS1wbHVnaW4taWNvbiBzcGFue21hcmdpbjotMnB4fS5lZGl0LXBvc3QtcGlubmVkLXBsdWdpbnMgLmNvbXBvbmVudHMtaWNvbi1idXR0b24uaXMtdG9nZ2xlZCAuYzktcGx1Z2luLWljb24gc3BhbiBbZmlsbD1cXFwiI2ZmZlxcXCJde2ZpbGw6IzU1NWQ2NiAhaW1wb3J0YW50fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b257ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvO3BhZGRpbmc6MTVweCAxMHB4O21hcmdpbi1ib3R0b206MTZweDtmbGV4LXNocmluazowO292ZXJmbG93OmhpZGRlbjtjb2xvcjppbmhlcml0O3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6bm9uZTtib3JkZXI6MXB4IHNvbGlkO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246MC4ycyBjb2xvciwgMC4ycyBiYWNrZ3JvdW5kLWNvbG9yLCAwLjJzIGJvcmRlci1jb2xvciwgMC4ycyBib3gtc2hhZG93fS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b24sLnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpob3ZlciwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246Zm9jdXM6ZW5hYmxlZCwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZSwucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmFjdGl2ZTplbmFibGVke2JvcmRlci1jb2xvcjpyZ2JhKDc5LDg5LDEwNSwwLjIpO2JveC1zaGFkb3c6bm9uZX0ucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmhvdmVyLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246YWN0aXZlLC5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b246YWN0aXZlOmVuYWJsZWR7Y29sb3I6IzE5MWUyMztiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5Zjl9LnBsdWdpbi1jOS1wYW5lbCAucGx1Z2luLWM5LXBhbmVsLWJ1dHRvbjpmb2N1cywucGx1Z2luLWM5LXBhbmVsIC5wbHVnaW4tYzktcGFuZWwtYnV0dG9uOmZvY3VzOmVuYWJsZWR7Y29sb3I6IzE5MWUyMztib3JkZXItY29sb3I6IzAwN2ZhYztib3gtc2hhZG93OjAgMCAwIDJweCAjMDBhMGQyfS5wbHVnaW4tYzktcGFuZWwgLnBsdWdpbi1jOS1wYW5lbC1idXR0b24gc3BhbntkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87bWFyZ2luLXRvcDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjI0cHh9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG5pbXBvcnQgZ2V0IGZyb20gXCJsb2Rhc2gvZ2V0XCI7XG5pbXBvcnQgQ3VzdG9tUGFsZXR0ZSBmcm9tIFwiLi4vY3VzdG9tLXBhbGV0dGVcIjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCwgRGFzaGljb24sIEJ1dHRvbiwgVG9vbHRpcCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aFNlbGVjdCwgd2l0aERpc3BhdGNoIH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xuY29uc3QgeyBfXywgc3ByaW50ZiB9ID0gd3AuaTE4bjtcbmNsYXNzIENvbG9yQXBwZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXHRcdHRoaXMuc2F2ZUNvbmZpZyA9IHRoaXMuc2F2ZUNvbmZpZy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2F2ZUM5Q29sb3JzID0gdGhpcy5zYXZlQzlDb2xvcnMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNhdmVDb2xvcnMgPSB0aGlzLnNhdmVDb2xvcnMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmtiQ29sb3JVbmlxdWVJRCA9IC0xO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc1NhdmluZzogZmFsc2UsXG5cdFx0XHRjOUNvbG9yczogYzlfYmxvY2tzX3BhcmFtcy5jb2xvcnNcblx0XHRcdFx0PyBKU09OLnBhcnNlKGM5X2Jsb2Nrc19wYXJhbXMuY29sb3JzKVxuXHRcdFx0XHQ6IHsgcGFsZXR0ZTogW10sIG92ZXJyaWRlOiBmYWxzZSB9LFxuXHRcdFx0b3JpZ0NvbG9yczogYzlfYmxvY2tzX3BhcmFtcy5vcmlnX2NvbG9yc1xuXHRcdFx0XHQ/IGM5X2Jsb2Nrc19wYXJhbXMub3JpZ19jb2xvcnNbMF1cblx0XHRcdFx0OiBbXSxcblx0XHRcdGNvbG9yczogXCJcIlxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmNvbG9ycykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogdGhpcy5wcm9wcy5iYXNlQ29sb3JzIH0pO1xuXHRcdH1cblxuXHRcdHRoaXMua2JDb2xvclVuaXF1ZUlEID0gdGhpcy5zdGF0ZS5jOUNvbG9yc1xuXHRcdFx0PyB0aGlzLnN0YXRlLmM5Q29sb3JzLnBhbGV0dGUubGVuZ3RoXG5cdFx0XHQ6IDA7XG5cdH1cblxuXHRzYXZlQ29uZmlnKCkge1xuXHRcdGlmIChmYWxzZSA9PT0gdGhpcy5zdGF0ZS5pc1NhdmluZykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzU2F2aW5nOiB0cnVlIH0pO1xuXHRcdFx0Y29uc3QgY29uZmlnID0gdGhpcy5zdGF0ZS5jOUNvbG9ycztcblx0XHRcdGNvbnN0IHNldHRpbmdNb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRcdFx0YzlfYmxvY2tzX2NvbG9yczogSlNPTi5zdHJpbmdpZnkoY29uZmlnKVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRcdHNldHRpbmdNb2RlbC5zYXZlKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc1NhdmluZzogZmFsc2UsIGM5Q29sb3JzOiBjb25maWcgfSk7XG5cdFx0XHRcdGM5X2Jsb2Nrc19wYXJhbXMuY29sb3JzID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcblx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVTZXR0aW5ncyh7IGNvbG9yczogdGhpcy5zdGF0ZS5jb2xvcnMgfSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0c2F2ZUM5Q29sb3JzKHZhbHVlLCBpbmRleCkge1xuXHRcdGNvbnN0IHsgYzlDb2xvcnMgfSA9IHRoaXMuc3RhdGU7XG5cdFx0YzlDb2xvcnMucGFsZXR0ZVtpbmRleF0gPSB7IC4uLmM5Q29sb3JzW2luZGV4XSwgLi4udmFsdWUgfTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGM5Q29sb3JzXG5cdFx0fSk7XG5cdH1cblx0c2F2ZUNvbG9ycyh2YWx1ZSwgaW5kZXgpIHtcblx0XHRjb25zdCB7IGNvbG9ycyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb2xvcnNbaW5kZXhdID0gdmFsdWU7XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgY29sb3JzIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGM5Q29sb3JzLCBjb2xvcnMsIG9yaWdDb2xvcnMgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRjb25zdCBub25FZGl0YWJsZXMgPSBbXTtcblx0XHRjb25zdCBlZGl0YWJsZXMgPSBbXTtcblxuXHRcdEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb2xvcnMpLm1hcChjdXJyID0+IHtcblx0XHRcdGlmICh1bmRlZmluZWQgIT09IGN1cnIuc2x1ZyAmJiBcImM5LXBhbGV0dGVcIiA9PT0gY3Vyci5zbHVnLnN1YnN0cigwLCAxMCkpIHtcblx0XHRcdFx0ZWRpdGFibGVzLnB1c2goY3Vycik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub25FZGl0YWJsZXMucHVzaChjdXJyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZVwiPlxuXHRcdFx0XHR7Y29sb3JzICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtY29sb3ItcGFsZXR0ZVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+VGhlbWUgQ29sb3JzLjwvcD5cblx0XHRcdFx0XHRcdHtub25FZGl0YWJsZXMubWFwKGN1cnIgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtjdXJyLnNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtLXdyYXBwZXJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyLm5hbWUgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzOiBjb2xvciBoZXggY29kZSBlLmc6IFwiI2YwMFwiLlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcHJpbnRmKF9fKFwiQ29sb3IgY29kZTogJXNcIiksIGN1cnIuY29sb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLWNvbG9yLXBhbGV0dGVfX2l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogY3Vyci5jb2xvciB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImxvY2tcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0e2NvbG9ycyAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWNvbG9yLXBhbGV0dGVcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPkM5IEJsb2NrIENvbG9ycy48L3A+XG5cdFx0XHRcdFx0XHR7ZWRpdGFibGVzLm1hcCgoY3VyciwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGtleT17Y3Vyci5zbHVnfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtY29sb3ItcGFsZXR0ZV9faXRlbS13cmFwcGVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxDdXN0b21QYWxldHRlXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lVmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyLm5hbWUgPyBjdXJyLm5hbWUgOiBfXyhcIkNvbG9yXCIpICsgXCIgXCIgKyBpbmRleCArIDFcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yVmFsdWU9e2N1cnIuY29sb3IgPyBjdXJyLmNvbG9yIDogXCIjZmZmZmZmXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRvblNhdmU9eyh2YWx1ZSwgdGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlQzlDb2xvcnMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjb2xvcjogdmFsdWUsIG5hbWU6IHRpdGxlLCBzbHVnOiBjdXJyLnNsdWcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVDb2xvcnMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjb2xvcjogdmFsdWUsIG5hbWU6IHRpdGxlLCBzbHVnOiBjdXJyLnNsdWcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQobm9uRWRpdGFibGVzLmxlbmd0aCA/IG5vbkVkaXRhYmxlcy5sZW5ndGggOiAwKSArIGluZGV4XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUNvbmZpZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0ezAgPCBjOUNvbG9ycy5wYWxldHRlLmxlbmd0aCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzktY29sb3JzLXJlbW92ZS1sYXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJSZW1vdmUgTGFzdCBDb2xvclwiKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjOUNvbG9ycy5wYWxldHRlLnBvcCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ycy5wb3AoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmtiQ29sb3JVbmlxdWVJRCAtPSAxO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjOUNvbG9yczogYzlDb2xvcnMgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogY29sb3JzIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUNvbmZpZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtfXyhcIlJlbW92ZSBMYXN0IENvbG9yXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImVkaXRvci1yZW1vdmVmb3JtYXR0aW5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWNvbG9ycy1hZGQtbmV3XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmlzU2F2aW5nXG5cdFx0XHRcdFx0XHRcdFx0PyBcImtiLWFkZC1idG4taXMtc2F2aW5nXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwia2ItYWRkLWJ0bi1pcy1hY3RpdmVcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc1NhdmluZ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNTYXZpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKHVuZGVmaW5lZCA9PT0gYzlDb2xvcnMucGFsZXR0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdGM5Q29sb3JzLnBhbGV0dGUgPSBbXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRsZXQgaWQgPSB0aGlzLmtiQ29sb3JVbmlxdWVJRDtcblx0XHRcdFx0XHRcdFx0YzlDb2xvcnMucGFsZXR0ZS5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCIjODg4ODg4XCIsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogX18oXCJDb2xvclwiKSArIFwiIFwiICsgaWQsXG5cdFx0XHRcdFx0XHRcdFx0c2x1ZzogXCJjOS1wYWxldHRlLVwiICsgaWRcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCIjODg4ODg4XCIsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogX18oXCJDb2xvclwiKSArIFwiIFwiICsgaWQsXG5cdFx0XHRcdFx0XHRcdFx0c2x1ZzogXCJjOS1wYWxldHRlLVwiICsgaWRcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMua2JDb2xvclVuaXF1ZUlEICs9IDE7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjOUNvbG9yczogYzlDb2xvcnMgfSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2xvcnM6IGNvbG9ycyB9KTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlQ29uZmlnKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17X18oXCJBZGQgQ29sb3JcIil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKFwiQWRkIENvbG9yXCIpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3VuZGVmaW5lZCAhPT0gYzlDb2xvcnMucGFsZXR0ZSAmJiB1bmRlZmluZWQgIT09IGM5Q29sb3JzLnBhbGV0dGVbMF0gJiYgKFxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlVzZSBvbmx5IEM5IEJsb2NrcyBDb2xvcnM/XCIpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtcblx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQgIT09IGM5Q29sb3JzLm92ZXJyaWRlID8gYzlDb2xvcnMub3ZlcnJpZGUgOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IG5ld0NvbG9ycztcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdDOUNvbG9ycyA9IHRoaXMuc3RhdGUuYzlDb2xvcnM7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRydWUgPT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdDb2xvcnMgPSBuZXdDOUNvbG9ycy5wYWxldHRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3QzlDb2xvcnMub3ZlcnJpZGUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdDOUNvbG9ycy5vdmVycmlkZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3Q29sb3JzID0gWy4uLm9yaWdDb2xvcnMsIC4uLm5ld0M5Q29sb3JzLnBhbGV0dGVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYzlDb2xvcnM6IG5ld0M5Q29sb3JzIH0pO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2xvcnM6IG5ld0NvbG9ycyB9KTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVDb25maWcoKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoW1xuXHR3aXRoU2VsZWN0KHNlbGVjdCA9PiB7XG5cdFx0Y29uc3QgeyBnZXRTZXR0aW5ncyB9ID0gc2VsZWN0KFwiY29yZS9ibG9jay1lZGl0b3JcIik7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRiYXNlQ29sb3JzOiBnZXQoc2V0dGluZ3MsIFtcImNvbG9yc1wiXSwgW10pXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3QgeyB1cGRhdGVTZXR0aW5ncyB9ID0gZGlzcGF0Y2goXCJjb3JlL2Jsb2NrLWVkaXRvclwiKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXBkYXRlU2V0dGluZ3Ncblx0XHR9O1xuXHR9KVxuXSkoQ29sb3JBcHBlbmRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb2xvci1hcHBlbmRlci9pbmRleC5qcyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jOS1ibG9jay1kZWZhdWx0LXBhbGV0dGUgLmNvbXBvbmVudHMtY29sb3ItcGFsZXR0ZV9faXRlbXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZSAuY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtLXdyYXBwZXJ7dHJhbnNmb3JtOnNjYWxlKDEuMSl9LmM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZSAuY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtLXdyYXBwZXI6aG92ZXJ7dHJhbnNmb3JtOnNjYWxlKDEuMSl9LmM5LWJsb2NrLWRlZmF1bHQtcGFsZXR0ZSAuY29tcG9uZW50cy1jb2xvci1wYWxldHRlX19pdGVtIHN2Z3tjb2xvcjojNjQ2NDY0fS5jOS1jb2xvcnMtcmVtb3ZlLWxhc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjI4cHg7d2lkdGg6MjhweDttYXJnaW4tcmlnaHQ6MTRweDttYXJnaW4tYm90dG9tOjE0cHh9LmM5LWNvbG9ycy1yZW1vdmUtbGFzdCAuY29tcG9uZW50cy1idXR0b257Ym9yZGVyLXJhZGl1czo1MCU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwYWRkaW5nOjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jOS1jb2xvcnMtYWRkLW5ld3ttYXJnaW4tYm90dG9tOjE2cHh9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvY29sb3ItYXBwZW5kZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdEJ1dHRvbixcblx0UG9wb3Zlcixcblx0Q29sb3JJbmRpY2F0b3IsXG5cdENvbG9yUGlja2VyLFxuXHRUZXh0Q29udHJvbCxcblx0VG9vbHRpcFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcblxuY2xhc3MgQ3VzdG9tUGFsZXR0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzVmlzaWJsZTogZmFsc2UsXG5cdFx0XHRjb2xvcjogXCJcIixcblx0XHRcdG5hbWU6IFwiXCJcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yVmFsdWUsIG5hbWU6IHRoaXMucHJvcHMubmFtZVZhbHVlIH0pO1xuXHR9XG5cblx0dG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiB0cnVlIH0pO1xuXHR9O1xuXG5cdHRvZ2dsZUNsb3NlID0gKCkgPT4ge1xuXHRcdGlmICh0cnVlID09PSB0aGlzLnN0YXRlLmlzVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLmNvbG9yLCB0aGlzLnN0YXRlLm5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRjaGFuZ2VDb2xvciA9IHZhbHVlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29sb3I6IHZhbHVlIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmlzVmlzaWJsZSAmJiAoXG5cdFx0XHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wIGxlZnRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicG9wb3Zlci1jb2xvclwiXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXt0aGlzLnRvZ2dsZUNsb3NlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDb2xvclBpY2tlclxuXHRcdFx0XHRcdFx0XHRjb2xvcj17XG5cdFx0XHRcdFx0XHRcdFx0dW5kZWZpbmVkID09PSB0aGlzLnN0YXRlLmNvbG9yIHx8IFwiXCIgPT09IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5wcm9wcy5jb2xvclZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZUNvbXBsZXRlPXtjb2xvciA9PiB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yLmhleCl9XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVBbHBoYVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJOYW1lOlwiKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdHVuZGVmaW5lZCA9PT0gdGhpcy5zdGF0ZS5uYW1lIHx8IFwiXCIgPT09IHRoaXMuc3RhdGUubmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLnByb3BzLm5hbWVWYWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0OiB0aGlzLnN0YXRlLm5hbWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BvcG92ZXI+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmlzVmlzaWJsZSAmJiAoXG5cdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17X18oXCJFZGl0IENvbG9yXCIpfT5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcImM5LWNvbG9yLWljb24taW5kaWNhdGVcIn1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy50b2dnbGVDbG9zZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENvbG9ySW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktYWR2YW5jZWQtY29sb3ItaW5kaWNhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yVmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJ0cmFuc3BhcmVudFwiID09PSB0aGlzLnN0YXRlLmNvbG9yIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQgPT09IHRoaXMuc3RhdGUuY29sb3IgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFwiXCIgPT09IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLnByb3BzLmNvbG9yRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshdGhpcy5zdGF0ZS5pc1Zpc2libGUgJiYgKFxuXHRcdFx0XHRcdDxUb29sdGlwIHRleHQ9e19fKFwiRWRpdCBDb2xvclwiKX0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XCJjOS1jb2xvci1pY29uLWluZGljYXRlXCJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlzaWJsZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENvbG9ySW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktYWR2YW5jZWQtY29sb3ItaW5kaWNhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yVmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJ0cmFuc3BhcmVudFwiID09PSB0aGlzLnN0YXRlLmNvbG9yIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmRlZmluZWQgPT09IHRoaXMuc3RhdGUuY29sb3IgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFwiXCIgPT09IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLnByb3BzLmNvbG9yRGVmYXVsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuc3RhdGUuY29sb3Jcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWxldHRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY3VzdG9tLXBhbGV0dGUvaW5kZXguanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2N1c3RvbS1wYWxldHRlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYzktY3VzdG9tLWNvbG9yLXNldHRpbmdzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5jOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyIC5jOS1jb2xvci1pY29uLWluZGljYXRle3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjFzIGVhc2U7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzowfS5jOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyIC5jOS1jb2xvci1pY29uLWluZGljYXRlOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjIpfS5jOS1jdXN0b20tY29sb3Itc2V0dGluZ3MtY29udGFpbmVyIC5jOS1jb2xvci1pY29uLWluZGljYXRlIC5jb21wb25lbnQtY29sb3ItaW5kaWNhdG9yLmM5LWFkdmFuY2VkLWNvbG9yLWluZGljYXRle3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjB9LmNvbXBvbmVudHMtcG9wb3Zlci5wb3BvdmVyLWNvbG9yPi5jb21wb25lbnRzLXBvcG92ZXJfX2NvbnRlbnQ+LmNvbXBvbmVudHMtYmFzZS1jb250cm9se3BhZGRpbmc6MCAxMHB4fVxcblwiLCBcIlwiXSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb21wb25lbnRzL2N1c3RvbS1wYWxldHRlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9XG4vKiNfX1BVUkVfXyovXG5SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIFwiZGF0YS1uYW1lXCI6IFwiTGF5ZXIgMlwiXG59LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTQ3IDEzOC4wNkM0MC4zNyAxMjMuOSA0MC44NCAzNi40MSA4My41NCAyMi40YzAgMC0xNS42NCA3LjI5LTEwLjEyIDI3LjQ1IDcuMi0xMy42OCAyMC4zMy0zNy4yMiA1Ny43Ny00My40NiAyNC0yLjg5LTEzLjE1IDEuMS02IDIyLjIyLjI0LTguODggNTkuNDEtNDUgMTA4LTE5LjgxQzI0Ni40MyAxMDQuNjkgMTc3IDExMC4wNiAxNzcgMTEwLjA2czE0Ljk1IDIuMzggMjMuODMtLjVjLTkuMTIgMzkuODQtNjMuMTMgNDIuMTQtNjMuMTMgNDIuMTRzMjAuNTEgNS4xMSAzNC45MiAyLjQ3Yy00OS40NSAzMi40LTExNi44Ni00Ljg2LTExNi44Ni00Ljg2LS4yNy4wOC0uODMtLjQzLTEuNTgtMS4zMWwxMTItNzhhMjUuMDkgMjUuMDkgMCAxMC02LTYuMjdMNzkuOSAxMjAuNGwtMi4yMy0zLjI1LTMwLjU5IDIxTTE4My43MiAzMy43NGExNi4yNSAxNi4yNSAwIDExLTE4Ljg0IDEzLjE3IDE2LjI0IDE2LjI0IDAgMDExOC44NC0xMy4xN3pNNTQuMTcgMTQ4bC0uMzktLjU1LjQzLjUyem0tMzQuNDMtNi41NWw4LjQ1LTUuNSA1LjUgOC40NC04LjQ0IDUuNS01LjUxLTguNDR6bS00LjM3IDE0Ljg3bC01LjUtOC40NCA4LjQ1LTUuNSA1LjUgOC40NC04LjQ1IDUuNXptLTkuODcgNi40N0wwIDE1NC4zNGw4LjQ1LTUuNSA1LjUgOC40NC04LjQ1IDUuNTF6bTQ2Ljg2LTEzLjg3bC0zOC45NSAyNS43My02Ljk1LTEwLjM0TDQ1IDEzOS4zbDcuMzMgOS42MnpcIixcbiAgZmlsbDogXCIjMTIxMjEyXCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgXCJkYXRhLW5hbWVcIjogXCJsb2dvIGRhcmsgZ3JleVwiXG59KSk7XG5cbnZhciBTdmdDOUZlYXRoZXJMb2dvR3JheSA9IGZ1bmN0aW9uIFN2Z0M5RmVhdGhlckxvZ29HcmF5KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyMzQuOTIgMTc0LjY1XCJcbiAgfSwgcHJvcHMpLCBfcmVmKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0M5RmVhdGhlckxvZ29HcmF5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2M5LWZlYXRoZXItbG9nby1ncmF5LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IE1vZGFsLCBUYWJQYW5lbCwgVG9vbHRpcCwgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgd2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyByYXdIYW5kbGVyIH0gPSB3cC5ibG9ja3M7XG5jb25zdCBhcGlGZXRjaCA9IHdwLmFwaUZldGNoO1xuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tIFwibG9kYXNoL3N0YXJ0Q2FzZVwiO1xuaW1wb3J0IExheW91dEJ1dHRvbiBmcm9tIFwiLi9sYXlvdXQtYnV0dG9uXCI7XG5pbXBvcnQgU2VjdGlvbkJ1dHRvbiBmcm9tIFwiLi9zZWN0aW9uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG4vLyB0ZW1wbGF0ZXNcbmltcG9ydCB0ZW1wbGF0ZU1hcmt1cHMgZnJvbSBcIi4vdGVtcGxhdGVzLW1hcmt1cFwiO1xuXG5jbGFzcyBUZW1wbGF0ZXNNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLmdldFJldXNhYmxlQmxvY2tzID0gdGhpcy5nZXRSZXVzYWJsZUJsb2Nrcy5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJldXNhYmxlczogW11cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRSZXVzYWJsZUJsb2NrcygpO1xuXHR9XG5cblx0YXN5bmMgZ2V0UmV1c2FibGVCbG9ja3MoKSB7XG5cdFx0Y29uc3QgeyBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBwb3N0VHlwZSA9IGF3YWl0IGFwaUZldGNoKHsgcGF0aDogYC93cC92Mi90eXBlcy93cF9ibG9ja2AgfSk7XG5cdFx0Y29uc3QgcmV1c2FibGVzID0gYXdhaXQgYXBpRmV0Y2goeyBwYXRoOiBgL3dwL3YyLyR7cG9zdFR5cGUucmVzdF9iYXNlfWAgfSk7XG5cblx0XHRjb25zdCBibG9ja3MgPSByZXVzYWJsZXMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bmFtZTogaXRlbS50aXRsZS5yYXcsXG5cdFx0XHRcdGNvbnRlbnQ6IHJhd0hhbmRsZXIoe1xuXHRcdFx0XHRcdEhUTUw6IGl0ZW0uY29udGVudC5yYXcsXG5cdFx0XHRcdFx0bW9kZTogXCJCTE9DS1NcIixcblx0XHRcdFx0XHRjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUxcblx0XHRcdFx0fSlcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJldXNhYmxlczogYmxvY2tzXG5cdFx0fSk7XG5cdH1cblxuXHRtYXJrdXBUb0Jsb2NrKHRlbXBsYXRlT2JqLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwpIHtcblx0XHRsZXQgYmxvY2tPYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZU9iaik7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGJsb2NrT2JqKSkge1xuXHRcdFx0YmxvY2tPYmpba2V5XSA9IHJhd0hhbmRsZXIoe1xuXHRcdFx0XHRIVE1MOiBibG9ja09ialtrZXldLm1hcmt1cCxcblx0XHRcdFx0bW9kZTogXCJCTE9DS1NcIixcblx0XHRcdFx0Y2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYmxvY2tPYmo7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyByZXNldEJsb2NrcywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gZGVmaW5lIHNlY3Rpb24gYW5kIGxheW91dCB0ZW1wbGF0ZXNcblxuXHRcdGNvbnN0IHNlY3Rpb25zID0ge1xuXHRcdFx0Ly8gY29udmVydCBtYXJrdXAgdG8gYWN0dWFsIGJsb2Nrc1xuXHRcdFx0Li4udGhpcy5tYXJrdXBUb0Jsb2NrKHRlbXBsYXRlTWFya3Vwcy5zZWN0aW9ucywgY2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MKVxuXHRcdH07XG5cblx0XHRjb25zdCBsYXlvdXRzID0ge1xuXHRcdFx0Ly8gY29udmVydCBtYXJrdXAgdG8gYWN0dWFsIGJsb2Nrc1xuXHRcdFx0Li4udGhpcy5tYXJrdXBUb0Jsb2NrKHRlbXBsYXRlTWFya3Vwcy5sYXlvdXRzLCBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwpXG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktdGVtcGxhdGVzLW1vZGFsXCJcblx0XHRcdFx0cG9zaXRpb249XCJ0b3BcIlxuXHRcdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdD5cblx0XHRcdFx0PFRhYlBhbmVsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYzktdGVtcGxhdGUtdGFicyBjOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsXCJcblx0XHRcdFx0XHR0YWJzPXtbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwic2VjdGlvbnNcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiU2ltcGxlIHNlY3Rpb25zIHRvIGNvbnN0cnVjdCB5b3VyIHBhZ2UuXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiYzktYmxvY2tzXCJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiU2VjdGlvbnNcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImM5LXRlbXBsYXRlLXRhYnMtdGFiXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwicGFnZXNcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17X18oXCJQcmUtZGVzaWduZWQgcmVhZHkgdG8gdXNlIHBhZ2VzLlwiLCBcImM5LWJsb2Nrc1wiKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJQYWdlc1wiKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiYzktdGVtcGxhdGUtdGFicy10YWJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJibG9ja3NcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtfXyhcIk15IFRlbXBsYXRlcy5cIiwgXCJjOS1ibG9ja3NcIil9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKFwiU2F2ZWQgQmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjOS10ZW1wbGF0ZS10YWJzLXRhYlwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRpbml0aWFsVGFiTmFtZT17dGhpcy5wcm9wcy5pbml0aWFsfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RhYiA9PiB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhYi5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzZWN0aW9uc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LXNlY3Rpb24tb3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhzZWN0aW9ucykubWFwKGsgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlY3Rpb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17dGVtcGxhdGVNYXJrdXBzLnNlY3Rpb25zW2tdLmljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhzdGFydENhc2UoayksIFwiYzktYmxvY2tzXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uPXtzZWN0aW9uc1trXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJwYWdlc1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0YWIudGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImM5LWxheW91dC1vcHRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKGxheW91dHMpLm1hcChrID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMYXlvdXRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17dGVtcGxhdGVNYXJrdXBzLmxheW91dHNba10uaWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKHN0YXJ0Q2FzZShrKSwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxheW91dD17bGF5b3V0c1trXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEJsb2NrcyhbXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249XCJ0cmFzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57X18oXCJDbGVhciBwYWdlXCIsIFwiYzktYmxvY2tzXCIpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3RhYi50aXRsZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzktc2VjdGlvbi1vcHRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUucmV1c2FibGVzLm1hcChvYmogPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlY3Rpb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cIndvcmRwcmVzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhvYmoubmFtZSwgXCJjOS1ibG9ja3NcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlY3Rpb249e29iai5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QmxvY2tzKFtdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb24gaWNvbj1cInRyYXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntfXyhcIkNsZWFyIHBhZ2VcIiwgXCJjOS1ibG9ja3NcIil9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ8L1RhYlBhbmVsPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IFRlbXBsYXRlc01vZGFsV2l0aFNlbGVjdCA9IGNvbXBvc2UoW1xuXHR3aXRoU2VsZWN0KChzZWxlY3QsIHsgY2xpZW50SWQgfSkgPT4ge1xuXHRcdGNvbnN0IHsgZ2V0QmxvY2ssIGNhblVzZXJVc2VVbmZpbHRlcmVkSFRNTCB9ID0gc2VsZWN0KFwiY29yZS9lZGl0b3JcIik7XG5cdFx0Y29uc3QgYmxvY2sgPSBnZXRCbG9jayhjbGllbnRJZCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJsb2NrLFxuXHRcdFx0Y2FuVXNlclVzZVVuZmlsdGVyZWRIVE1MOiBjYW5Vc2VyVXNlVW5maWx0ZXJlZEhUTUwoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRcdGNvbnN0IHsgcmVzZXRCbG9ja3MsIGluc2VydEJsb2NrcyB9ID0gZGlzcGF0Y2goXCJjb3JlL2VkaXRvclwiKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVzZXRCbG9ja3MsXG5cdFx0XHRpbnNlcnRCbG9ja3Ncblx0XHR9O1xuXHR9KVxuXSkoVGVtcGxhdGVzTW9kYWwpO1xuXG5leHBvcnQgeyBUZW1wbGF0ZXNNb2RhbFdpdGhTZWxlY3QgYXMgVGVtcGxhdGVzTW9kYWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9pbmRleC5qcyIsInZhciBjcmVhdGVDb21wb3VuZGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ29tcG91bmRlcicpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0b1xuICogW3N0YXJ0IGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xldHRlcl9jYXNlI1N0eWxpc3RpY19vcl9zcGVjaWFsaXNlZF91c2FnZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0YXJ0IGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnZm9vQmFyJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdGT08gQkFSJ1xuICovXG52YXIgc3RhcnRDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyAnICcgOiAnJykgKyB1cHBlckZpcnN0KHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRDYXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0YXJ0Q2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gNDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgZGVidXJyID0gcmVxdWlyZSgnLi9kZWJ1cnInKSxcbiAgICB3b3JkcyA9IHJlcXVpcmUoJy4vd29yZHMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiO1xuXG4vKiogVXNlZCB0byBtYXRjaCBhcG9zdHJvcGhlcy4gKi9cbnZhciByZUFwb3MgPSBSZWdFeHAocnNBcG9zLCAnZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmNhbWVsQ2FzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjb21iaW5lIGVhY2ggd29yZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbXBvdW5kZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvdW5kZXIoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHJldHVybiBhcnJheVJlZHVjZSh3b3JkcyhkZWJ1cnIoc3RyaW5nKS5yZXBsYWNlKHJlQXBvcywgJycpKSwgY2FsbGJhY2ssICcnKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb3VuZGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDb21wb3VuZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gNDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkZWJ1cnJMZXR0ZXIgPSByZXF1aXJlKCcuL19kZWJ1cnJMZXR0ZXInKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggTGF0aW4gVW5pY29kZSBsZXR0ZXJzIChleGNsdWRpbmcgbWF0aGVtYXRpY2FsIG9wZXJhdG9ycykuICovXG52YXIgcmVMYXRpbiA9IC9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3NfZm9yX1N5bWJvbHMpLlxuICovXG52YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibywgJ2cnKTtcblxuLyoqXG4gKiBEZWJ1cnJzIGBzdHJpbmdgIGJ5IGNvbnZlcnRpbmdcbiAqIFtMYXRpbi0xIFN1cHBsZW1lbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluLTFfU3VwcGxlbWVudF8oVW5pY29kZV9ibG9jaykjQ2hhcmFjdGVyX3RhYmxlKVxuICogYW5kIFtMYXRpbiBFeHRlbmRlZC1BXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9FeHRlbmRlZC1BKVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzIGFuZCByZW1vdmluZ1xuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVidXJyKCdkw6lqw6AgdnUnKTtcbiAqIC8vID0+ICdkZWphIHZ1J1xuICovXG5mdW5jdGlvbiBkZWJ1cnIoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nLnJlcGxhY2UocmVMYXRpbiwgZGVidXJyTGV0dGVyKS5yZXBsYWNlKHJlQ29tYm9NYXJrLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYnVyci5qc1xuLy8gbW9kdWxlIGlkID0gNDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlUHJvcGVydHlPZiA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eU9mJyk7XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyTGV0dGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eU9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFzY2lpV29yZHMgPSByZXF1aXJlKCcuL19hc2NpaVdvcmRzJyksXG4gICAgaGFzVW5pY29kZVdvcmQgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlV29yZCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpLFxuICAgIHVuaWNvZGVXb3JkcyA9IHJlcXVpcmUoJy4vX3VuaWNvZGVXb3JkcycpO1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcyddXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICcmJywgJ3BlYmJsZXMnXVxuICovXG5mdW5jdGlvbiB3b3JkcyhzdHJpbmcsIHBhdHRlcm4sIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHBhdHRlcm4gPSBndWFyZCA/IHVuZGVmaW5lZCA6IHBhdHRlcm47XG5cbiAgaWYgKHBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNVbmljb2RlV29yZChzdHJpbmcpID8gdW5pY29kZVdvcmRzKHN0cmluZykgOiBhc2NpaVdvcmRzKHN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qc1xuLy8gbW9kdWxlIGlkID0gNDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpV29yZHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZVdvcmQuanNcbi8vIG1vZHVsZSBpZCA9IDQ0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc01pc2NMb3dlciA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc01pc2NVcHBlciA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdENvbnRyTG93ZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdENvbnRyVXBwZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzT3JkTG93ZXIgPSAnXFxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxcXGR0aCkoPz1cXFxcYnxbQS1aX10pJyxcbiAgICByc09yZFVwcGVyID0gJ1xcXFxkKig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcXFxkVEgpKD89XFxcXGJ8W2Etel9dKScsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzRW1vamkgPSAnKD86JyArIFtyc0RpbmdiYXQsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzU2VxO1xuXG4vKiogVXNlZCB0byBtYXRjaCBjb21wbGV4IG9yIGNvbXBvdW5kIHdvcmRzLiAqL1xudmFyIHJlVW5pY29kZVdvcmQgPSBSZWdFeHAoW1xuICByc1VwcGVyICsgJz8nICsgcnNMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc01pc2NVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIgKyByc01pc2NMb3dlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXIgKyAnPycgKyByc01pc2NMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlcixcbiAgcnNVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlcixcbiAgcnNPcmRVcHBlcixcbiAgcnNPcmRMb3dlcixcbiAgcnNEaWdpdHMsXG4gIHJzRW1vamlcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVdvcmRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlV29yZHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY3JlYXRlQ2FzZUZpcnN0ID0gcmVxdWlyZSgnLi9fY3JlYXRlQ2FzZUZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICpcbiAqIF8udXBwZXJGaXJzdCgnRlJFRCcpO1xuICogLy8gPT4gJ0ZSRUQnXG4gKi9cbnZhciB1cHBlckZpcnN0ID0gY3JlYXRlQ2FzZUZpcnN0KCd0b1VwcGVyQ2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwcGVyRmlyc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdXBwZXJGaXJzdC5qc1xuLy8gbW9kdWxlIGlkID0gNDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjYXN0U2xpY2UgPSByZXF1aXJlKCcuL19jYXN0U2xpY2UnKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8ubG93ZXJGaXJzdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBgU3RyaW5nYCBjYXNlIG1ldGhvZCB0byB1c2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXNlRmlyc3QobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgIHZhciBzdHJTeW1ib2xzID0gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgICA/IHN0cmluZ1RvQXJyYXkoc3RyaW5nKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgY2hyID0gc3RyU3ltYm9sc1xuICAgICAgPyBzdHJTeW1ib2xzWzBdXG4gICAgICA6IHN0cmluZy5jaGFyQXQoMCk7XG5cbiAgICB2YXIgdHJhaWxpbmcgPSBzdHJTeW1ib2xzXG4gICAgICA/IGNhc3RTbGljZShzdHJTeW1ib2xzLCAxKS5qb2luKCcnKVxuICAgICAgOiBzdHJpbmcuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gY2hyW21ldGhvZE5hbWVdKCkgKyB0cmFpbGluZztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDYXNlRmlyc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNhc2VGaXJzdC5qc1xuLy8gbW9kdWxlIGlkID0gNDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKTtcblxuLyoqXG4gKiBDYXN0cyBgYXJyYXlgIHRvIGEgc2xpY2UgaWYgaXQncyBuZWVkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBzbGljZS5cbiAqL1xuZnVuY3Rpb24gY2FzdFNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kO1xuICByZXR1cm4gKCFzdGFydCAmJiBlbmQgPj0gbGVuZ3RoKSA/IGFycmF5IDogYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0U2xpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RTbGljZS5qc1xuLy8gbW9kdWxlIGlkID0gNDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qc1xuLy8gbW9kdWxlIGlkID0gNDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBhc2NpaVRvQXJyYXkgPSByZXF1aXJlKCcuL19hc2NpaVRvQXJyYXknKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHVuaWNvZGVUb0FycmF5ID0gcmVxdWlyZSgnLi9fdW5pY29kZVRvQXJyYXknKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVRvQXJyYXkoc3RyaW5nKVxuICAgIDogYXNjaWlUb0FycmF5KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHdpdGhEaXNwYXRjaCB9ID0gd3AuZGF0YTtcblxuY29uc3QgTGF5b3V0QnV0dG9uID0gKHsgbGFiZWwsIGljb24sIGxheW91dCwgcmVzZXRCbG9ja3MsIGluc2VydEJsb2NrcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0QmxvY2tzKFtdKTtcbiAgICAgICAgICAgICAgICBpbnNlcnRCbG9ja3MobGF5b3V0KTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbn0gLz5cblx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRjb25zdCB7IHJlc2V0QmxvY2tzLCBpbnNlcnRCbG9ja3MgfSA9IGRpc3BhdGNoKFwiY29yZS9lZGl0b3JcIik7XG5cblx0cmV0dXJuIHtcblx0XHRyZXNldEJsb2Nrcyxcblx0XHRpbnNlcnRCbG9ja3Ncblx0fTtcbn0pKExheW91dEJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvbGF5b3V0LWJ1dHRvbi5qcyIsImNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aERpc3BhdGNoIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBTZWN0aW9uQnV0dG9uID0gKHsgbGFiZWwsIGljb24sIHNlY3Rpb24sIGluc2VydEJsb2NrcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydEJsb2NrcyhzZWN0aW9uKTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbn0gLz5cblx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRjb25zdCB7IGluc2VydEJsb2NrcyB9ID0gZGlzcGF0Y2goXCJjb3JlL2VkaXRvclwiKTtcblxuXHRyZXR1cm4ge1xuXHRcdGluc2VydEJsb2Nrc1xuXHR9O1xufSkoU2VjdGlvbkJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvc2VjdGlvbi1idXR0b24uanMiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVye2JvcmRlci1ib3R0b206bm9uZX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFic3ttYXJnaW4tdG9wOi0yNHB4fUBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7LmM5LXRlbXBsYXRlcy1tb2RhbHttaW4td2lkdGg6NjAwcHg7bWF4LXdpZHRoOjYwMHB4O21hcmdpbi1sZWZ0Oi0zMDBweDt0cmFuc2Zvcm06bm9uZTt0b3A6MTEycHh9fUBtZWRpYSAobWluLXdpZHRoOiA4NDBweCl7LmM5LXRlbXBsYXRlcy1tb2RhbHttaW4td2lkdGg6ODAwcHg7bWF4LXdpZHRoOjgwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDt0cmFuc2Zvcm06bm9uZX19LmM5LXRlbXBsYXRlcy1tb2RhbCAuY29tcG9uZW50cy1tb2RhbF9faGVhZGVyIC5jb21wb25lbnRzLW1vZGFsX19pY29uLWNvbnRhaW5lciBzdmd7ZGlzcGxheTpibG9jazttYXJnaW4tcmlnaHQ6MTBweH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jb21wb25lbnRzLW1vZGFsX19oZWFkZXIgLmNvbXBvbmVudHMtbW9kYWxfX2hlYWRlci1oZWFkaW5ne2ZvbnQtd2VpZ2h0OjYwMH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucywuYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1zZWN0aW9uLW9wdGlvbnN7ZGlzcGxheTpncmlkO2dyaWQtY29sdW1uLWdhcDoxcmVtO2dyaWQtcm93LWdhcDoxcmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNiwgMWZyKX0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jOS1sYXlvdXQtb3B0aW9ucyBidXR0b24sLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbntib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6I2Q4ZDhkOCAjZDFkMWQxICNiYWJhYmE7Ym9yZGVyLXJhZGl1czozcHg7Ym94LXNoYWRvdzppbnNldCAwIC0xcHggMCAjY2NjO3BhZGRpbmc6NXB4fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbjphY3RpdmUsLmM5LXRlbXBsYXRlcy1tb2RhbCAuYzktY29tcG9uZW50LW1vZGFsLXRhYi1wYW5lbCAuYzktc2VjdGlvbi1vcHRpb25zIGJ1dHRvbjphY3RpdmV7Ym9yZGVyLWNvbG9yOiM5OTk7Ym94LXNoYWRvdzppbnNlcnQgMCAxcHggMCAjOTk5fS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LWxheW91dC1vcHRpb25zIGJ1dHRvbiBzcGFuLC5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmM5LXNlY3Rpb24tb3B0aW9ucyBidXR0b24gc3BhbntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTowLjhyZW07cGFkZGluZzoycHggMH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWJ7cGFkZGluZzoxMnB4IDE2cHg7Y29sb3I6aW5oZXJpdH0uYzktdGVtcGxhdGVzLW1vZGFsIC5jOS1jb21wb25lbnQtbW9kYWwtdGFiLXBhbmVsIC5jb21wb25lbnRzLXRhYi1wYW5lbF9fdGFicyAuYzktdGVtcGxhdGUtdGFicy10YWI6Zm9jdXN7b3V0bGluZTpub25lfS5jOS10ZW1wbGF0ZXMtbW9kYWwgLmM5LWNvbXBvbmVudC1tb2RhbC10YWItcGFuZWwgLmNvbXBvbmVudHMtdGFiLXBhbmVsX190YWJzIC5jOS10ZW1wbGF0ZS10YWJzLXRhYi5pcy1hY3RpdmV7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzAwYTBkMjt6LWluZGV4OjF9XFxuXCIsIFwiXCJdKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0xIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc2VjdGlvbnNcbmltcG9ydCBmYXFUb2dnbGVzV2l0aEhlYWRpbmcgZnJvbSBcIi4vc2VjdGlvbi10ZW1wbGF0ZXMvZmFxLXRvZ2dsZXMtd2l0aC1oZWFkaW5nXCI7XG5pbXBvcnQgaGVhZGVyV2l0aDNNb2R1bGVzIGZyb20gXCIuL3NlY3Rpb24tdGVtcGxhdGVzL2hlYWRlci13aXRoLTMtbW9kdWxlc1wiO1xuaW1wb3J0IG1pc3Npb25TdGF0ZW1lbnQgZnJvbSBcIi4vc2VjdGlvbi10ZW1wbGF0ZXMvbWlzc2lvbi1zdGF0ZW1lbnRcIjtcbmltcG9ydCBzZXJ2aWNlT2ZmZXJpbmdIZWFkZXIgZnJvbSBcIi4vc2VjdGlvbi10ZW1wbGF0ZXMvc2VydmljZS1vZmZlcmluZy1oZWFkZXJcIjtcbmltcG9ydCB2aWRlb0JhY2tncm91bmRDYWxsVG9BY3Rpb24gZnJvbSBcIi4vc2VjdGlvbi10ZW1wbGF0ZXMvdmlkZW8tYmFja2dyb3VuZC1jYWxsLXRvLWFjdGlvblwiO1xuXG4vLyBwYWdlc1xuaW1wb3J0IHJlc3RhdXJhbnRNZW51TGFuZGluZ1BhZ2UgZnJvbSBcIi4vcGFnZS10ZW1wbGF0ZXMvcmVzdGF1cmFudC1tZW51LWxhbmRpbmctcGFnZVwiO1xuaW1wb3J0IHNlcnZpY2VMYW5kaW5nUGFnZSBmcm9tIFwiLi9wYWdlLXRlbXBsYXRlcy9zZXJ2aWNlLWxhbmRpbmctcGFnZVwiO1xuaW1wb3J0IHRlc3RCbG9ja3MgZnJvbSBcIi4vcGFnZS10ZW1wbGF0ZXMvdGVzdC1ibG9ja3NcIjtcblxuY29uc3QgdGVtcGxhdGVNYXJrdXBzID0ge1xuXHRsYXlvdXRzOiB7XG5cdFx0cmVzdGF1cmFudE1lbnVMYW5kaW5nUGFnZSxcblx0XHRzZXJ2aWNlTGFuZGluZ1BhZ2UsXG5cdFx0dGVzdEJsb2Nrc1xuXHR9LFxuXHRzZWN0aW9uczoge1xuXHRcdGZhcVRvZ2dsZXNXaXRoSGVhZGluZyxcblx0XHRoZWFkZXJXaXRoM01vZHVsZXMsXG5cdFx0bWlzc2lvblN0YXRlbWVudCxcblx0XHRzZXJ2aWNlT2ZmZXJpbmdIZWFkZXIsXG5cdFx0dmlkZW9CYWNrZ3JvdW5kQ2FsbFRvQWN0aW9uXG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlTWFya3VwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC90ZW1wbGF0ZXMtbWFya3VwLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRpY29uOiBcIndvcmRwcmVzc1wiLFxuXHRtYXJrdXA6XG5cdFx0JzwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjIzLFwiY29udGFpbmVyTWFyZ2luXCI6e1wibGlua2VkXCI6dHJ1ZSxcInVuaXRcIjpcInB4XCIsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgbXktNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIn0gLS0+XFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGQVEgVG9nZ2xlc1wiLFwic3ViaGVhZGluZ1wiOlwid2l0aCBpbWFnZSBjYXJvdXNlbHNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlfSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktaFwiPkZBUSBUb2dnbGVzPC9oMT48ZGl2IGNsYXNzPVwiYzktaCBoMVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDt3aXRoIGltYWdlIGNhcm91c2Vsczwvc21hbGw+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcyB7XCJ0b2dnbGVDb3VudFwiOjUsXCJpbnN0YW5jZUlkXCI6MyxcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtZGVmYXVsdFwifSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcyBpcy1zdHlsZS1kZWZhdWx0IGFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uLTNcIj48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoxLFwiaWRcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzEtM1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMS0zXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4xLsKgPC9zdHJvbmc+SG93IGxvbmcgaXMgdGhlIGNvbnN1bHRhdGlvbj88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMS0zXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTNcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5Vc2VyIGdlbmVyYXRlZCBjb250ZW50IGluIHJlYWwtdGltZSB3aWxsIGhhdmUgbXVsdGlwbGUgdG91Y2hwb2ludHMgZm9yIG9mZnNob3JpbmcuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MixcImlkXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmcyLTNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTItM1wiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+Mi48L3N0cm9uZz7CoERvIHlvdSBoYXZlIHRvIGRvIGEgY29uc3VsdGF0aW9uPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UyLTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPlVzZXIgZ2VuZXJhdGVkIGNvbnRlbnQgaW4gcmVhbC10aW1lIHdpbGwgaGF2ZSBtdWx0aXBsZSB0b3VjaHBvaW50cyBmb3Igb2Zmc2hvcmluZy48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjozLFwiaWRcIjozfSAtLT5cXG48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzMtM1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMy0zXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz4zLjwvc3Ryb25nPsKgRG8geW91IHdvcmsgd2l0aCBub3QgZm9yIHByb2ZpdHMgb3Igbm9uLXByb2ZpdHM/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTMtM1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0zXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+VXNlciBnZW5lcmF0ZWQgY29udGVudCBpbiByZWFsLXRpbWUgd2lsbCBoYXZlIG11bHRpcGxlIHRvdWNocG9pbnRzIGZvciBvZmZzaG9yaW5nLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjQsXCJpZFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nNC0zXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2U0LTNcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjQuPC9zdHJvbmc+wqBDYW4gSSBzZWUgd2hhdCBhbiBpbWFnZSBjYXJvdXNlbCBsb29rcyBsaWtlPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2U0LTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjo5LFwidXJsXCI6W1wiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiXSxcImlkXCI6Wzc0NDgsNzQ0OSw3NDUwXSxcImNhcHRpb25UaXRsZVwiOltcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb25cIixcIlNsaWRlIENhcHRpb24gM1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIixcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiXX0gLS0+XFxuPGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci05XCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItOVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWIzLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uIDM8L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTlcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6NSxcImlkXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmc1LTNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTUtM1wiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+NS7CoDwvc3Ryb25nPlJlYWRpbmcgdGhlIHdob2xlIHRoaW5nOiBjYW4gd2UgZG8gaXQ/IE5vLjwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2U1LTNcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tM1wiPjwhLS0gd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIHtcImluc3RhbmNlSWRcIjoxMCxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIl0sXCJpZFwiOls3NDQ4LDc0NDksNzQ1MF0sXCJjYXB0aW9uVGl0bGVcIjpbXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uIDNcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIl19IC0tPlxcbjxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xMFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb248L2g1PjxwPlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvbjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYjMtMTAyNHg0MzEuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PlNsaWRlIENhcHRpb24gMzwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTEwXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+J1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9zZWN0aW9uLXRlbXBsYXRlcy9mYXEtdG9nZ2xlcy13aXRoLWhlYWRpbmcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG5cdGljb246IFwid29yZHByZXNzXCIsXG5cdG1hcmt1cDpcblx0XHQnPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTUsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo5LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6OTB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1maXhlZCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojkwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjkpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjoxNTV9IC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTU1cHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlcnZpY2UgT2ZmZXJpbmdcIixcInN1YmhlYWRpbmdcIjpcIkxhbmRpbmcgUGFnZSBUZW1wbGF0ZVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2VlZWVlZVwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktdHhsIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZWVlZWVlXCI+U2VydmljZSBPZmZlcmluZzwvaDE+PGRpdiBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTFcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7TGFuZGluZyBQYWdlIFRlbXBsYXRlPC9zbWFsbD48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnNwYWNlciAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cXG48IS0tIC93cDpzcGFjZXIgLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjozLFwiY29sdW1uc0dhcFwiOjEsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJsYXlIdWVcIjpcIiNlZWVlZWVcIixcIm92ZXJsYXlPcGFjaXR5XCI6MTAsXCJibGVuZE1vZGVcIjpcIm5vcm1hbFwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MSxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgcC01IG15LTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0zLWNvbC1lcXVhbFwiIHN0eWxlPVwibWluLWhlaWdodDoxdmhcIj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgyMzgsMjM4LDIzOCwxKTttaXgtYmxlbmQtbW9kZTpub3JtYWxcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTEgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6M30gLS0+XFxuPGgzPlN0ZXAgMTwvaDM+XFxuPCEtLSAvd3A6aGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiBzdXJ2aXZhbCBzdHJhdGVnaWVzIHRvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4mbmJzcDs8L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjN9IC0tPlxcbjxoMz5TdGVwIDI8L2gzPlxcbjwhLS0gL3dwOmhlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpwYXJhZ3JhcGggLS0+XFxuPHA+QXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBpbnRvIGxvdHMgb2YgYm9yaW5nIHNoaXQuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjozfSAtLT5cXG48aDM+U3RlcCAzPC9oMz5cXG48IS0tIC93cDpoZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkNhcGl0YWxpemUgb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuPC9wPlxcbjwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZW1wbGF0ZXMtbW9kYWwvc2VjdGlvbi10ZW1wbGF0ZXMvaGVhZGVyLXdpdGgtMy1tb2R1bGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRpY29uOiBcIndvcmRwcmVzc1wiLFxuXHRtYXJrdXA6XG5cdFx0JzwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjMyLFwiY29udGFpbmVySHVlXCI6XCIjZWVlZWVlXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo1MCxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ1bml0XCI6XCJweFwiLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IG15LTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjUwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOCwyMzgsMjM4LDEpXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MTB9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBvbmUtY29sdW1uXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjEwdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJPdXIgTWlzc2lvblwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCIxXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMyBjbGFzcz1cImM5LWggaDFcIj5PdXIgTWlzc2lvbjwvaDM+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpzZXBhcmF0b3IgLS0+XFxuPGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxcbjwhLS0gL3dwOnNlcGFyYXRvciAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb25cXCd0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLlwiLFwidGFnTGV2ZWxcIjo1LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cXG48ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDUgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkFuZCB0aGVuLCB3ZSBmaWxsZWQgdGhlIHNwYWNlIHVwIHdpdGggYSBsaXR0bGUgdGlueSBzdG9yeSB0byBicmVhayB1cCB0aGUgbWVudXMgY2F1c2UgdGhhdCBtYWtlcyB1cyB1bmlxdWUuIE91ciBmb29kIGlzIG1hZGUganVzdCBsaWtlIGFueSBvdGhlciBmb29kLCBpbiBhIGtpdGNoZW4sIGJ1dCBkb25cXCd0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLjwvaDU+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6MzB9IC0tPlxcbjxkaXYgc3R5bGU9XCJoZWlnaHQ6MzBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPlxcblxcbjwhLS0gd3A6YnV0dG9uIHtcImFsaWduXCI6XCJjZW50ZXJcIixcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtZGVmYXVsdFwifSAtLT5cXG48ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGFsaWduY2VudGVyIGlzLXN0eWxlLWRlZmF1bHRcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGlua1wiIGhyZWY9XCIjXCI+T3VyIEhpc3Rvcnk8L2E+PC9kaXY+XFxuPCEtLSAvd3A6YnV0dG9uIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT4nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tdGVtcGxhdGVzL21pc3Npb24tc3RhdGVtZW50LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRpY29uOiBcIndvcmRwcmVzc1wiLFxuXHRtYXJrdXA6XG5cdFx0JzwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjE1LFwicm93c1wiOjIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnXCIsXCJiZ0ltZ0F0dGFjaFwiOnRydWUsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjgsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo4MH0gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LWZpeGVkIGM5LWdyaWQtaGFzLWJhY2tncm91bmRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6ODB2aFwiPjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtY2VsZWJyYXRpb24tY29uY2VydC0xMTc5NTgxLXdlYjY2LmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC44KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIm5hcnJvd1wiLFwiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItbmFycm93XCIsXCJjb250YWluZXJJbWdVUkxcIjpudWxsLFwiZm9jYWxQb2ludFwiOntcInhcIjowLjUxMTUyMDczNzMyNzE4OSxcInlcIjowLjYyNX19IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnNwYWNlciAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cXG48IS0tIC93cDpzcGFjZXIgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTZXJ2aWNlIE9mZmVyaW5nIExhbmRpbmcgUGFnZVwiLFwic3ViaGVhZGluZ1wiOlwic3ViaGVhZGluZ1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5TZXJ2aWNlIE9mZmVyaW5nIExhbmRpbmcgUGFnZTwvaDE+PGRpdiBjbGFzcz1cImM5LWggaDFcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7c3ViaGVhZGluZzwvc21hbGw+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XFxuXFxuPCEtLSB3cDpzcGFjZXIgLS0+XFxuPGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XFxuPCEtLSAvd3A6c3BhY2VyIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MyxcImxheW91dFwiOlwiYzktMy1jb2wtZXF1YWxcIixcImNvbnRhaW5lclBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImNvbnRhaW5lckh1ZVwiOlwiI2ZmZmZmZlwifSAtLT5cXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgcC01IGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0zIGM5LTMtY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlcCAxXCIsXCJ0YWdMZXZlbFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oXCI+U3RlcCAxPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiBzdXJ2aXZhbCBzdHJhdGVnaWVzIHRvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi7CoDwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVwIDJcIixcInRhZ0xldmVsXCI6M30gLS0+XFxuPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWhcIj5TdGVwIDI8L2gzPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxcbjxwPkF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgWC48L3A+XFxuPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XFxuXFxuPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3RlcCAzXCIsXCJ0YWdMZXZlbFwiOjN9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oXCI+U3RlcCAzPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOnBhcmFncmFwaCAtLT5cXG48cD5DYXBpdGFsaXplIG9uIGxvdyBoYW5naW5nIGZydWl0IHRvIGlkZW50aWZ5IGEgYmFsbHBhcmsgdmFsdWUgYWRkZWQgYWN0aXZpdHkgdG8gYmV0YSB0ZXN0LjwvcD5cXG48IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XFxuPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT4nXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3NlY3Rpb24tdGVtcGxhdGVzL3NlcnZpY2Utb2ZmZXJpbmctaGVhZGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRpY29uOiBcIndvcmRwcmVzc1wiLFxuXHRtYXJrdXA6XG5cdFx0J1wiPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTksXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEuanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjYwLFwiY29udGFpbmVyVmlkZW9VUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9QZXhlbHMtVmlkZW9zLTI3MDYtMS5tcDRcIn0gLS0+XFxuPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kIGM5LWdyaWQtaGFzLXZpZGVvXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjYwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LXZpZGVvLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJjOS1lbWJlZC1jb250YWluZXJcIj48dmlkZW8gaWQ9XCJjb250YWluZXJWaWRlby0xOVwiIGNsYXNzPVwiYzktdmlkZW8tY3VzdG9tXCIgcGxheXNpbmxpbmUgYXV0b3BsYXkgbXV0ZWQgbG9vcCBzdHlsZT1cIm1pbi1oZWlnaHQ6NjB2aFwiPjxzb3VyY2Ugc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L1BleGVscy1WaWRlb3MtMjcwNi0xLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+PC92aWRlbz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktaW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwuOCk7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHlcIj48L2Rpdj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC13aWRlbGVmdFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTItY29sLXdpZGVsZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcbjxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2NoZWR1bGUgQ29uc3VsdGF0aW9uXCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjJcIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDMgY2xhc3M9XCJjOS1oIGgyXCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+U2NoZWR1bGUgQ29uc3VsdGF0aW9uPC9oMz48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cXG5cXG48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk9uZSBvZiBvdXIgcHJvZmVzc2lvbmFscyB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIHByb2Nlc3NcIixcInRhZ0xldmVsXCI6NCxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxcbjxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDQgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPk9uZSBvZiBvdXIgcHJvZmVzc2lvbmFscyB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIHByb2Nlc3M8L2g0PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxcblxcbjwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjQyfSAtLT5cXG48ZGl2IHN0eWxlPVwiaGVpZ2h0OjQycHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxcbjwhLS0gL3dwOnNwYWNlciAtLT5cXG5cXG48IS0tIHdwOmJ1dHRvbiB7XCJ0ZXh0Q29sb3JcIjpcInZpdmlkLWdyZWVuLWN5YW5cIixcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtb3V0bGluZVwifSAtLT5cXG48ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGlzLXN0eWxlLW91dGxpbmVcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGluayBoYXMtdGV4dC1jb2xvciBoYXMtdml2aWQtZ3JlZW4tY3lhbi1jb2xvclwiIGhyZWY9XCIjXCI+U2NoZWR1bGUgTm93PC9hPjwvZGl2PlxcbjwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxcblxcbjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cXG48ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48L2Rpdj48L2Rpdj5cXG48IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxcbjwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlwiJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9zZWN0aW9uLXRlbXBsYXRlcy92aWRlby1iYWNrZ3JvdW5kLWNhbGwtdG8tYWN0aW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRpY29uOiBcIndvcmRwcmVzc1wiLFxuXHRtYXJrdXA6IGBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxLFwiY29udGFpbmVySHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5SHVlXCI6XCIjMzEzMTMxXCIsXCJvdmVybGF5T3BhY2l0eVwiOjcsXCJibGVuZE1vZGVcIjpcIm11bHRpcGx5XCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo1MCxcImNvbnRhaW5lclZpZGVvVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcmVzdGF1cmFudC12aWRlby1iZy13ZWIubW92XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGwgYzktZ3JpZC1oYXMtdmlkZW9cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NTB2aDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksMSlcIj48ZGl2IGNsYXNzPVwiYzktdmlkZW8tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImM5LWVtYmVkLWNvbnRhaW5lclwiPjx2aWRlbyBpZD1cImNvbnRhaW5lclZpZGVvLTFcIiBjbGFzcz1cImM5LXZpZGVvLWN1c3RvbVwiIHBsYXlzaW5saW5lIGF1dG9wbGF5IG11dGVkIGxvb3Agc3R5bGU9XCJtaW4taGVpZ2h0OjUwdmhcIj48c291cmNlIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9yZXN0YXVyYW50LXZpZGVvLWJnLXdlYi5tb3ZcIiB0eXBlPVwidmlkZW8vbXA0XCIvPjwvdmlkZW8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjcpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwiZnVsbFwiLFwiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItZmx1aWRcIixcInZlcnRpY2FsQWxpZ25cIjpcImJvdHRvbVwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGFsaWduZnVsbCBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1ib3R0b20gb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiB7XCJ2ZXJ0aWNhbEFsaWduXCI6XCJib3R0b21cIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdCBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtYm90dG9tXCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk5ldyBGYWxsIE1lbnVcIixcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjYWJiOGMzXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDEgY2xhc3M9XCJjOS10eGwgZm9udC13ZWlnaHQtbGlnaHRcIiBzdHlsZT1cImNvbG9yOiNhYmI4YzNcIj5OZXcgRmFsbCBNZW51PC9oMT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk9SREVSIFRISVMgRklTSCBPTkxJTkUgUklHSFQgTk9XXCIsXCJ0YWdMZXZlbFwiOjYsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcIndlaWdodFwiOlwibm9ybWFsXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDYgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LW5vcm1hbFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPk9SREVSIFRISVMgRklTSCBPTkxJTkUgUklHSFQgTk9XPC9oNj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2N0YSB7XCJ0eXBlXCI6XCJjOS1zaFwiLFwiYnV0dG9uVGV4dFwiOlwiZ2V0IHN0YXJ0ZWRcIixcImJ1dHRvbkFsaWdubWVudFwiOlwibGVmdFwiLFwiYnV0dG9uVGV4dENvbG9yXCI6XCIjMzEzMTMxXCIsXCJidXR0b25TaGFwZVwiOlwib3V0bGluZVwiLFwiYnV0dG9uVGFyZ2V0XCI6dHJ1ZSxcImN0YUxheW91dFwiOlwidGhyZWUtcXVhcnRlcnNcIixcImN0YVBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImFsaWduXCI6XCJ3aWRlXCJ9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIiBjbGFzcz1cImM5LWN0YSBjOS1ibG9jay1jdGEgY29udGFpbmVyIGFsaWdud2lkZSBwLTVcIj48ZGl2IGNsYXNzPVwicm93XCI+PGRpdiBjbGFzcz1cImM5LWN0YS1jb250ZW50IGNvbC0xMiBjb2wtbWQtOVwiPjxkaXYgY2xhc3M9XCJjOS1jdGEtdGV4dCBjOS1zaFwiPjxwPk1ha2UgYSByZXNlcnZhdGlvbiwgYnV5IGEgcmluZywgZ2V0IGVuZ2FnZWQsIGhpZ2ggZml2ZS48L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWN0YS1idXR0b24gY29sLTEyIGNvbC1tZC0zXCI+PGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmsgYzktYnV0dG9uLXNoYXBlLW91dGxpbmUgYzktYnV0dG9uLXNpemUtbWVkaXVtXCIgc3R5bGU9XCJjb2xvcjojMzEzMTMxXCI+Z2V0IHN0YXJ0ZWQ8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oTGluayBvcGVucyBpbiBuZXcgd2luZG93KTwvc3Bhbj48L2E+PC9kaXY+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2N0YSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoyLFwicm93c1wiOjIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9zaGF3bi1hbmctbm1wV19Xd3dWU2MtdW5zcGxhc2guanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6NyxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjgwLFwiZm9jYWxQb2ludFwiOntcInhcIjowLjQ3MDA0NjA4Mjk0OTMwODgsXCJ5XCI6MC44NjQxOTc1MzA4NjQxOTc1fX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojgwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo0Ny4wMDQ2MDgyOTQ5MzA4NzUlIDg2LjQxOTc1MzA4NjQxOTc1JTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc2hhd24tYW5nLW5tcFdfV3d3VlNjLXVuc3BsYXNoLmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC43KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NDN9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIG9uZS1jb2x1bW5cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NDN2aFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiB7XCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdCBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyXCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkJydW5jaFwiLFwic3ViaGVhZGluZ1wiOlwiQXZhaWxhYmxlIG9uIHdlZWtlbmRzIGFuZCBob2xpZGF5c1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJkaXNwbGF5TGV2ZWxcIjpcIjVcIixcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMSBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTVcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5CcnVuY2g8L2gxPjxkaXYgY2xhc3M9XCJjOS10eGwgZGlzcGxheS01XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO0F2YWlsYWJsZSBvbiB3ZWVrZW5kcyBhbmQgaG9saWRheXM8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwid2lkZVwiLFwiY29sdW1uc1wiOjMsXCJjb2x1bW5zR2FwXCI6MSxcImxheW91dFwiOlwiYzktMy1jb2wtd2lkZXJpZ2h0XCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJib3R0b21cIixcIm92ZXJsYXlIdWVcIjpcIiNmZmZmZmZcIixcIm92ZXJsYXlPcGFjaXR5XCI6MTAsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImNvbnRhaW5lclBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBhbGlnbndpZGUgYzktY29sdW1uLWNvbnRhaW5lciBwLTUgbXktNSBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtYm90dG9tIGM5LTMtY29sLXdpZGVyaWdodFwiPjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDEpO21peC1ibGVuZC1tb2RlOm92ZXJsYXlcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTEgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTbWFsbCBQbGF0ZXNcIixcInN1YmhlYWRpbmdcIjpcInNlcnZlZCBhbGwgZGF5XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5TbWFsbCBQbGF0ZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO3NlcnZlZCBhbGwgZGF5PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk5hY2hvc1wiLFwic3ViaGVhZGluZ1wiOlwiJDE2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5OYWNob3M8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNjwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkhvbWVtYWRlIHRvcnRpbGxhcywgY2Fybml0YXMsIG5vIGJlYW5zLCB6ZXJvIGJlYW5zLCBzdGVha3MsIGNoaXdvd2EgY2hlZXNlLCBvdGhlciBnb29kIHN0dWZmPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlRhY29zXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTNcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlRhY29zPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTM8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5QbGF0ZSBvZiAzIHNtYWxsIHRhY29zLiBMaWtlIHRoZSB0aW5pZXN0IHRhY29zIHlvdeKAmXZlIGV2ZXIgc2VlbiBmb3IgZm91cnRlZW4gYmlnIG9uZXM8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQ2hhcmN1dGVyaWVcIixcInN1YmhlYWRpbmdcIjpcIiQxNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+Q2hhcmN1dGVyaWU8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlRoaXMgaXMgd2hlcmUgaXRzIGF0IGZlbGxhcy4gQmVlZiBqZXJreSBpbiBsaXR0bGUgdGlueSBzbGljZXMgYW5kIHNvbWUgd2VpcmQgZGlwcyB0aGF0IG1ha2Ugbm8gc2Vuc2U8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQmVlZiBUaXBzXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkJlZWYgVGlwczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEyPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+QXQgdGhpcyBmYXIgaW50byB0aGUgZmFrZSBtZW51IHdlIHJhbiBvdXQgb2YgaWRlYXM8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTWFjIFxcdTAwMjZhbXA7IENoZWVzZVwiLFwic3ViaGVhZGluZ1wiOlwiJDEwXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5NYWMgJmFtcDsgQ2hlZXNlPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTA8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5MZXTigJlzIGJlIGhvbmVzdCB3aXRoIG91cnNlbHZlc+KApiBubyBvbmUgaXMgZ29pbmcgdG8gb3JkZXIgdGhpczwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjAsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWJoaXNoZWstc2Fud2EtbGltYnUtTFI1NTlEY3N0NzAtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstSGxOY2lndlVpNFEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstVzlPS3J4QnFpWkEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCJdLFwiaWRcIjpbNzM0MCw3MzQyLDczNDFdfSAtLT5cbiAgICA8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FiaGlzaGVrLXNhbndhLWxpbWJ1LUxSNTU5RGNzdDcwLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLUhsTmNpZ3ZVaTRRLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLVc5T0tyeEJxaVpBLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkVudHJlZXNcIixcInN1YmhlYWRpbmdcIjpcIjdhbS1ub29uXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5FbnRyZWVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDs3YW0tbm9vbjwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJOWSBTdHJpcFwiLFwic3ViaGVhZGluZ1wiOlwiJDI2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5OWSBTdHJpcDwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDI2PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+U2FsdGVkLCBwZXBwZXJlZCwgYnV0dGVyZWQ/IFdlIGFyZSBpbiByZWFsIHRyb3VibGUgaWYgd2UgbWVzcyBzb21ldGhpbmcgdGhpcyBlYXN5IHVwPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkdyaWxsZWQgQ2hpY2tlblwiLFwic3ViaGVhZGluZ1wiOlwiJDE0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5HcmlsbGVkIENoaWNrZW48L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkdyaWxsZWQgY2hpY2tlbiBmdWxsIG9mIG5hdHVyYWxseSBncm93biB0aGluZ3MgYW5kIHNhZG5lc3MgY2F1c2Ugbm8gb25lIGV2ZXIgd2FudHMgYSBncmlsbGVkIGNoaWNrZW48L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiUG9yayBMb2luXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTlcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlBvcmsgTG9pbjwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE5PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+U29tZSBvdGhlciB3ZWlyZCBtZWF0IHRoYXQgSeKAmXZlIHNlZW4gYXQgdGhlIHN0b3JlIGJlZm9yZS4gRnVsbCBvZiBpbmdyZWRpZW50cyBhbmQgdGhpbmdzLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJLaWVsYmFzYVwiLFwic3ViaGVhZGluZ1wiOlwiJDEyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5LaWVsYmFzYTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEyPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+U2F1c2FnZXMgYXJlIHByZXR0eSBnb29kLiBOb3QgcXVpdGUgc3VyZSB3aGF0IHRoaXMga2luZCBpcyB0aG91Z2g8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTGFtYiBDaG9wc1wiLFwic3ViaGVhZGluZ1wiOlwiJDIyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5MYW1iIENob3BzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMjI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Ib3cgZGFyZSB5b3UgdGhpbmsgYWJvdXQgZWF0aW5nIHRoZXNlIHRpbnkgYmFieSBhbmltYWxzPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlZlZ2dpZSBCdXJnZXJcIixcInN1YmhlYWRpbmdcIjpcIiQxM1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+VmVnZ2llIEJ1cmdlcjwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEzPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TGlrZSB0aG9zZSBmYWtlIG1lYXQgYnVyZ2Vycy4gVGhpcyBpcyB0aGUgcmVhbCBkZWFsPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlZlZ2dpZSBMYXNhZ25hXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTdcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlZlZ2dpZSBMYXNhZ25hPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTc8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5NYWRlIHdpdGggdGhpbmdzIHRoYXQgYXJlbuKAmXQgbWVhdDwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjEsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc3RlZmFuLWpvaG5zb24teElGYkRlR2N5NDQtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstTTRFN1gzejgwUFEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstalp2bFQtRnZUWk0tdW5zcGxhc2gtMTAyNHg2ODMuanBnXCJdLFwiaWRcIjpbNzM2OSw3MzM1LDczMzRdLFwiY2FwdGlvblRpdGxlXCI6W1wiQnJ1bmNoIENvY2t0YWlsc1wiLFwiQ2hhcmN1dGVyaWUgUGxhdGVcIixcIk5vdyB0aGlzIGlzIHBvZHJhY2luZ1wiXSxcImNhcHRpb25Db250ZW50XCI6W1wiR2V0IGhhbW1lcmVkIHJpZ2h0IGFmdGVyIGNodXJjaCFcIixcIkkgbWVhbiBpdCdzIG1vc3RseSBmcnVpdCBidXQgaXQncyBjbG9zZVwiLG51bGxdfSAtLT5cbiAgICA8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3N0ZWZhbi1qb2huc29uLXhJRmJEZUdjeTQ0LXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5CcnVuY2ggQ29ja3RhaWxzPC9oNT48cD5HZXQgaGFtbWVyZWQgcmlnaHQgYWZ0ZXIgY2h1cmNoITwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLU00RTdYM3o4MFBRLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5DaGFyY3V0ZXJpZSBQbGF0ZTwvaDU+PHA+SSBtZWFuIGl0J3MgbW9zdGx5IGZydWl0IGJ1dCBpdCdzIGNsb3NlPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstalp2bFQtRnZUWk0tdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1Pk5vdyB0aGlzIGlzIHBvZHJhY2luZzwvaDU+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzcGFjZXIgLS0+XG4gICAgPGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG4gICAgPCEtLSAvd3A6c3BhY2VyIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2lkZXNcIixcInN1YmhlYWRpbmdcIjpcImFkZCBmb3IgJDEuMDAgLSAkNi4wMFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+U2lkZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO2FkZCBmb3IgJDEuMDAgLSAkNi4wMDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJDaGlwc1wiLFwic3ViaGVhZGluZ1wiOlwiJDRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkNoaXBzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTaWRlIFNhbGFkXCIsXCJzdWJoZWFkaW5nXCI6XCIkNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+U2lkZSBTYWxhZDwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiUGVhbnV0c1wiLFwic3ViaGVhZGluZ1wiOlwiJDFcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlBlYW51dHM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIllvZ3VydFwiLFwic3ViaGVhZGluZ1wiOlwiJDJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPllvZ3VydDwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQ2VyZWFsXCIsXCJzdWJoZWFkaW5nXCI6XCIkNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+Q2VyZWFsPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGcmVuY2ggRnJpZXNcIixcInN1YmhlYWRpbmdcIjpcIiQ2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5GcmVuY2ggRnJpZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ2PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlN0ZWFrIEJpdGVzXCIsXCJzdWJoZWFkaW5nXCI6XCIkNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+U3RlYWsgQml0ZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQ2PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzIHtcInRhYkFjdGl2ZVwiOlwidGFiLXNhdHVyZGF5XCIsXCJ0YWJzRGF0YVwiOlt7XCJzbHVnXCI6XCJ0YWItc2F0dXJkYXlcIixcInRpdGxlXCI6XCJTYXR1cmRheVwifSx7XCJzbHVnXCI6XCJ0YWItc3VuZGF5XCIsXCJ0aXRsZVwiOlwiU3VuZGF5XCJ9XSxcImluc3RhbmNlSWRcIjowLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS12ZXJ0aWNhbC10YWJzIHJvd1wiIGRhdGEtdGFiLWFjdGl2ZT1cInRhYi1zYXR1cmRheVwiPjxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTNcIj48ZGl2IGNsYXNzPVwibmF2IGZsZXgtY29sdW1uIG5hdi1waWxsc1wiIHJvbGU9XCJ0YWJsaXN0XCI+PGEgZGF0YS10b2dnbGU9XCJwaWxsXCIgcm9sZT1cInRhYlwiIGhyZWY9XCIjdGFiLXRhYi1zYXR1cmRheS0wXCIgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cInRhYi1idXR0b24tdGFiLXNhdHVyZGF5XCI+U2F0dXJkYXk8L2E+PGEgZGF0YS10b2dnbGU9XCJwaWxsXCIgcm9sZT1cInRhYlwiIGhyZWY9XCIjdGFiLXRhYi1zdW5kYXktMFwiIGNsYXNzPVwibmF2LWxpbmtcIiBpZD1cInRhYi1idXR0b24tdGFiLXN1bmRheVwiPlN1bmRheTwvYT48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS05XCI+PGRpdiBjbGFzcz1cImM5LXRhYnMtY29udGVudCB0YWItY29udGVudCBhbGlnbi1zZWxmLWNlbnRlclwiPjwhLS0gd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi1zYXR1cmRheVwiLFwidGFiQWN0aXZlXCI6XCJ0YWItc2F0dXJkYXlcIixcImlkXCI6MH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LXZlcnRpY2FsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItc2F0dXJkYXktMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi1zYXR1cmRheVwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjZ9IC0tPlxuICAgIDxoNj5TYXR1cmRheSBCcnVuY2ggU3BlY2lhbHM8L2g2PlxuICAgIDwhLS0gL3dwOmhlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkNoZWYgd2lsbCBtYWtlIHNvbWV0aGluZyBhbmQgeW91ciBzZXJ2ZXIgd2lsbCB0ZWxsIHlvdSB3aGF0IGl0IGlzIGFuZCB5b3Ugd2lsbCBwYXkgJDI1PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+Qm90dG9tbGVzcyBtaW1vc2FzIGFuZCB3ZeKAmWxsIG1ha2UgdGhlIG5ld2VzdCBoaXJlIGNsZWFuIHVwIHRoZSAkMzA8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItc3VuZGF5XCIsXCJ0YWJBY3RpdmVcIjpcInRhYi1zYXR1cmRheVwiLFwiaWRcIjowfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktdmVydGljYWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi1zdW5kYXktMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi1zdW5kYXlcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo2fSAtLT5cbiAgICA8aDY+U3VuZGF5IEJydW5jaCBTcGVjaWFsczwvaDY+XG4gICAgPCEtLSAvd3A6aGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+Q2hlZiB3aWxsIG1ha2Ugb3NtZXRoaW5nIGFuZCB5b3VyIHNlcnZlciB3aWxsIHRlbGwgeW91IHdoYXQgaXQgaXMgYW5kIHlvdSB3aWxsIHBheSAkMjU8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5EaXRjaCBjaHVyY2ggYW5kIHByb3ZlIGl0IGZvciAxMCUgb2ZmIHlvdXIgdG90YWw8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiAtLT48L2Rpdj48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvdmVydGljYWwtdGFicyAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjAsXCJjb250YWluZXJIdWVcIjpcIiNlZWVlZWVcIixcIm1pblNjcmVlbkhlaWdodFwiOjEwfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjEwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzOCwyMzgsMjM4LDEpXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIixcIm1pblNjcmVlbkhlaWdodFwiOjEwfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MTB2aFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnNlcGFyYXRvciAtLT5cbiAgICA8aHIgY2xhc3M9XCJ3cC1ibG9jay1zZXBhcmF0b3JcIi8+XG4gICAgPCEtLSAvd3A6c2VwYXJhdG9yIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU3VzdGFpbmFibGUgRm9vZCBNaXNzaW9uXCIsXCJ0YWdMZXZlbFwiOjMsXCJkaXNwbGF5TGV2ZWxcIjpcIjFcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgzIGNsYXNzPVwiYzktaCBoMVwiPlN1c3RhaW5hYmxlIEZvb2QgTWlzc2lvbjwvaDM+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJBbmQgdGhlbiwgd2UgZmlsbGVkIHRoZSBzcGFjZSB1cCB3aXRoIGEgbGl0dGxlIHRpbnkgc3RvcnkgdG8gYnJlYWsgdXAgdGhlIG1lbnVzIGNhdXNlIHRoYXQgbWFrZXMgdXMgdW5pcXVlLiBPdXIgZm9vZCBpcyBtYWRlIGp1c3QgbGlrZSBhbnkgb3RoZXIgZm9vZCwgaW4gYSBraXRjaGVuLCBidXQgZG9uJ3QgbGV0IHRoYXQgc3RvcCB5b3UgZnJvbSByZWFkaW5nIG91ciBkZXZhc3RhdGluZyB3ZWIgY29weSB3aGVyZSB3ZSBqdXN0IGRlc2NyaWJlIHRoZSBmb29kIGluc3RlYWQgb2YgbGV0dGluZyB5b3UgcHV0IGl0IGluIHlvdXIgbW91dGggY2F1c2UgdGhpcyBpcyBqdXN0ICBhIHNjcmVlbiBtYW4uXCIsXCJ0YWdMZXZlbFwiOjQsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoNCBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+QW5kIHRoZW4sIHdlIGZpbGxlZCB0aGUgc3BhY2UgdXAgd2l0aCBhIGxpdHRsZSB0aW55IHN0b3J5IHRvIGJyZWFrIHVwIHRoZSBtZW51cyBjYXVzZSB0aGF0IG1ha2VzIHVzIHVuaXF1ZS4gT3VyIGZvb2QgaXMgbWFkZSBqdXN0IGxpa2UgYW55IG90aGVyIGZvb2QsIGluIGEga2l0Y2hlbiwgYnV0IGRvbid0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLjwvaDQ+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzZXBhcmF0b3IgLS0+XG4gICAgPGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxuICAgIDwhLS0gL3dwOnNlcGFyYXRvciAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjMsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3BldHItc2V2Y292aWMtcUUxanhZWGl3T0EtdW5zcGxhc2guanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OCxcImJsZW5kTW9kZVwiOlwibm9ybWFsXCIsXCJtaW5TY3JlZW5IZWlnaHRcIjo4MCxcImZvY2FsUG9pbnRcIjp7XCJ4XCI6MC40NzAwNDYwODI5NDkzMDg4LFwieVwiOjAuODY0MTk3NTMwODY0MTk3NX19IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGwgYzktZ3JpZC1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo4MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKVwiPjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NDcuMDA0NjA4Mjk0OTMwODc1JSA4Ni40MTk3NTMwODY0MTk3NSU7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3BldHItc2V2Y292aWMtcUUxanhZWGl3T0EtdW5zcGxhc2guanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjgpO21peC1ibGVuZC1tb2RlOm5vcm1hbFwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcInZlcnRpY2FsQWxpZ25cIjpcImNlbnRlclwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NDN9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIG9uZS1jb2x1bW5cIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NDN2aFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiB7XCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdCBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyXCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkRpbm5lclwiLFwic3ViaGVhZGluZ1wiOlwiTmV3IEZhbGwgTWVudVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJkaXNwbGF5TGV2ZWxcIjpcIjVcIixcInR5cGVcIjpcImM5LXR4bCBkaXNwbGF5LVwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMSBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTVcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5EaW5uZXI8L2gxPjxkaXYgY2xhc3M9XCJjOS10eGwgZGlzcGxheS01XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO05ldyBGYWxsIE1lbnU8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwid2lkZVwiLFwiY29sdW1uc1wiOjMsXCJjb2x1bW5zR2FwXCI6MSxcImxheW91dFwiOlwiYzktMy1jb2wtZXF1YWxcIixcInZlcnRpY2FsQWxpZ25cIjpcImJvdHRvbVwiLFwib3ZlcmxheUh1ZVwiOlwiI2ZmZmZmZlwiLFwib3ZlcmxheU9wYWNpdHlcIjoxMCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGFsaWdud2lkZSBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBteS01IGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0zIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1ib3R0b20gYzktMy1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwxKTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMSBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNtYWxsIFBsYXRlc1wiLFwic3ViaGVhZGluZ1wiOlwic2VydmVkIGFsbCBkYXlcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1fSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaFwiPlNtYWxsIFBsYXRlczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7c2VydmVkIGFsbCBkYXk8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTmFjaG9zXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPk5hY2hvczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE2PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+SG9tZW1hZGUgdG9ydGlsbGFzLCBjYXJuaXRhcywgbm8gYmVhbnMsIHplcm8gYmVhbnMsIHN0ZWFrcywgY2hpd293YSBjaGVlc2UsIG90aGVyIGdvb2Qgc3R1ZmY8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQ2hhcmN1dGVyaWVcIixcInN1YmhlYWRpbmdcIjpcIiQxNFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+Q2hhcmN1dGVyaWU8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPlRoaXMgaXMgd2hlcmUgaXRzIGF0IGZlbGxhcy4gQmVlZiBqZXJreSBpbiBsaXR0bGUgdGlueSBzbGljZXMgYW5kIHNvbWUgd2VpcmQgZGlwcyB0aGF0IG1ha2Ugbm8gc2Vuc2U8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiQmVlZiBUaXBzXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTJcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkJlZWYgVGlwczwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEyPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+QXQgdGhpcyBmYXIgaW50byB0aGUgZmFrZSBtZW51IHdlIHJhbiBvdXQgb2YgaWRlYXM8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTWFjIFxcdTAwMjZhbXA7IENoZWVzZVwiLFwic3ViaGVhZGluZ1wiOlwiJDEwXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5NYWMgJmFtcDsgQ2hlZXNlPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTA8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5MZXTigJlzIGJlIGhvbmVzdCB3aXRoIG91cnNlbHZlc+KApiBubyBvbmUgaXMgZ29pbmcgdG8gb3JkZXIgdGhpczwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJCYWNvbiBTdGlja1wiLFwic3ViaGVhZGluZ1wiOlwiJDQwXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5CYWNvbiBTdGljazwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDQwPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+VGhpcyBpcyAkNDAgb2YgYmFjb24gb24gYSBzdGljay4gUHJlcGFyZSB5b3VyIHZlaW5zIGZvciBjaG9sZXN0ZXJvbDwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjIsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWJoaXNoZWstc2Fud2EtbGltYnUtTFI1NTlEY3N0NzAtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstSGxOY2lndlVpNFEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYnJvb2tlLWxhcmstVzlPS3J4QnFpWkEtdW5zcGxhc2gtMTAyNHg2ODMuanBnXCJdLFwiaWRcIjpbNzM0MCw3MzQyLDczNDFdfSAtLT5cbiAgICA8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FiaGlzaGVrLXNhbndhLWxpbWJ1LUxSNTU5RGNzdDcwLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLUhsTmNpZ3ZVaTRRLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2Jyb29rZS1sYXJrLVc5T0tyeEJxaVpBLXVuc3BsYXNoLTEwMjR4NjgzLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkVudHJlZXNcIixcInN1YmhlYWRpbmdcIjpcIjdhbS1ub29uXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5FbnRyZWVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDs3YW0tbm9vbjwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJOWSBTdHJpcFwiLFwic3ViaGVhZGluZ1wiOlwiJDI2XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5OWSBTdHJpcDwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDI2PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+U2FsdGVkLCBwZXBwZXJlZCwgYnV0dGVyZWQ/IFdlIGFyZSBpbiByZWFsIHRyb3VibGUgaWYgd2UgbWVzcyBzb21ldGhpbmcgdGhpcyBlYXN5IHVwPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkdyaWxsZWQgQ2hpY2tlblwiLFwic3ViaGVhZGluZ1wiOlwiJDE0XCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5HcmlsbGVkIENoaWNrZW48L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwOyQxNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGgge1wiY3VzdG9tRm9udFNpemVcIjoxNH0gLS0+XG4gICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweFwiPkdyaWxsZWQgY2hpY2tlbiBmdWxsIG9mIG5hdHVyYWxseSBncm93biB0aGluZ3MgYW5kIHNhZG5lc3MgY2F1c2Ugbm8gb25lIGV2ZXIgd2FudHMgYSBncmlsbGVkIGNoaWNrZW48L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiUG9yayBMb2luXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTlcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlBvcmsgTG9pbjwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDE5PC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+U29tZSBvdGhlciB3ZWlyZCBtZWF0IHRoYXQgSeKAmXZlIHNlZW4gYXQgdGhlIHN0b3JlIGJlZm9yZS4gRnVsbCBvZiBpbmdyZWRpZW50cyBhbmQgdGhpbmdzLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJLaWVsYmFzYVwiLFwic3ViaGVhZGluZ1wiOlwiJDEyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5LaWVsYmFzYTwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEyPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+U2F1c2FnZXMgYXJlIHByZXR0eSBnb29kLiBOb3QgcXVpdGUgc3VyZSB3aGF0IHRoaXMga2luZCBpcyB0aG91Z2g8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTGFtYiBDaG9wc1wiLFwic3ViaGVhZGluZ1wiOlwiJDIyXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZSxcInRhZ0xldmVsXCI6NSxcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWggZm9udC13ZWlnaHQtbGlnaHRcIj5MYW1iIENob3BzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMjI8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5Ib3cgZGFyZSB5b3UgdGhpbmsgYWJvdXQgZWF0aW5nIHRoZXNlIHRpbnkgYmFieSBhbmltYWxzPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlZlZ2dpZSBCdXJnZXJcIixcInN1YmhlYWRpbmdcIjpcIiQxM1wiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+VmVnZ2llIEJ1cmdlcjwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDEzPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCB7XCJjdXN0b21Gb250U2l6ZVwiOjE0fSAtLT5cbiAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCI+TGlrZSB0aG9zZSBmYWtlIG1lYXQgYnVyZ2Vycy4gVGhpcyBpcyB0aGUgcmVhbCBkZWFsPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlZlZ2dpZSBMYXNhZ25hXCIsXCJzdWJoZWFkaW5nXCI6XCIkMTdcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlZlZ2dpZSBMYXNhZ25hPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTc8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5NYWRlIHdpdGggdGhpbmdzIHRoYXQgYXJlbuKAmXQgbWVhdDwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJGbGF0YnJlYWQgUGl6emFcIixcInN1YmhlYWRpbmdcIjpcIiQxOVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+RmxhdGJyZWFkIFBpenphPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskMTk8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIHtcImN1c3RvbUZvbnRTaXplXCI6MTR9IC0tPlxuICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIj5NYWRlIHdpdGggdG9tYXRvZXMsIG1lYXQsIGFuZCBteXN0ZXJ5IHNhdWNlPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MyxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9ydXN0aWMtdmVnYW4tcFJLREpaV05VdlktdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIsXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvamVubmlmZXItc2NobWlkdC16T2xRN2xGLTN2cy11bnNwbGFzaC02ODN4MTAyNC5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lZGdhci1jYXN0cmVqb24tMUNzYVZkd2ZJZXctdW5zcGxhc2gtNjgzeDEwMjQuanBnXCJdLFwiaWRcIjpbNzMzOSw3MzM2LDczMzddLFwiY2FwdGlvblRpdGxlXCI6W1wiQ2hlcm5vYnlsIEJ1cmdlclwiLFwiU2lkZSBTYWxhZFwiLFwiQ2hlcm5vYnlsIEZydWl0XCJdLFwiY2FwdGlvbkNvbnRlbnRcIjpbXCJGb3IgYWxsIHlvdSB2ZWdhbnMgb3V0IHRoZXJlXCIsXCJUaGlzIHRoaW5nIGlzIGZ1bGwgb2Ygd2VpcmRuZXNzXCIsXCJHb29kIGZvciBzdHJvbmsgYm9uZXNcIl19IC0tPlxuICAgIDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvcnVzdGljLXZlZ2FuLXBSS0RKWldOVXZZLXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5DaGVybm9ieWwgQnVyZ2VyPC9oNT48cD5Gb3IgYWxsIHlvdSB2ZWdhbnMgb3V0IHRoZXJlPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvamVubmlmZXItc2NobWlkdC16T2xRN2xGLTN2cy11bnNwbGFzaC02ODN4MTAyNC5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2lkZSBTYWxhZDwvaDU+PHA+VGhpcyB0aGluZyBpcyBmdWxsIG9mIHdlaXJkbmVzczwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2VkZ2FyLWNhc3RyZWpvbi0xQ3NhVmR3Zklldy11bnNwbGFzaC02ODN4MTAyNC5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+Q2hlcm5vYnlsIEZydWl0PC9oNT48cD5Hb29kIGZvciBzdHJvbmsgYm9uZXM8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6Mjd9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MjdweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG4gICAgPCEtLSAvd3A6c3BhY2VyIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2lkZXNcIixcInN1YmhlYWRpbmdcIjpcImFkZCBmb3IgJDEuMDAgLSAkNi4wMFwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+U2lkZXM8L2g1PjxkaXYgY2xhc3M9XCJjOS1oIGg1XCI+PHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZuYnNwO2FkZCBmb3IgJDEuMDAgLSAkNi4wMDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJDaGlwc1wiLFwic3ViaGVhZGluZ1wiOlwiJDRcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPkNoaXBzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNDwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTaWRlIFNhbGFkXCIsXCJzdWJoZWFkaW5nXCI6XCIkNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+U2lkZSBTYWxhZDwvaDU+PGRpdiBjbGFzcz1cImM5LWggaDVcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7JDY8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRnJlbmNoIEZyaWVzXCIsXCJzdWJoZWFkaW5nXCI6XCIkNlwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0YWdMZXZlbFwiOjUsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+RnJlbmNoIEZyaWVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNjwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTdGVhayBCaXRlc1wiLFwic3ViaGVhZGluZ1wiOlwiJDZcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjo1LFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktaCBmb250LXdlaWdodC1saWdodFwiPlN0ZWFrIEJpdGVzPC9oNT48ZGl2IGNsYXNzPVwiYzktaCBoNVwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDskNjwvc21hbGw+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5gXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzLW1vZGFsL3BhZ2UtdGVtcGxhdGVzL3Jlc3RhdXJhbnQtbWVudS1sYW5kaW5nLXBhZ2UuanMiLCJleHBvcnQgZGVmYXVsdCB7XG5cdGljb246IFwid29yZHByZXNzXCIsXG5cdG1hcmt1cDogYDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjAsXCJyb3dzXCI6MixcImNvbnRhaW5lckltZ1VSTFwiOlwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWNlbGVicmF0aW9uLWNvbmNlcnQtMTE3OTU4MS13ZWI2Ni5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjo5LFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6OTB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1maXhlZCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojkwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hdWRpZW5jZS1jZWxlYnJhdGlvbi1jb25jZXJ0LTExNzk1ODEtd2ViNjYuanBnKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImM5LW92ZXJsYXktY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDksNDksNDksLjkpO21peC1ibGVuZC1tb2RlOm11bHRpcGx5XCI+PC9kaXY+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjoxNTV9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MTU1cHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuICAgIDwhLS0gL3dwOnNwYWNlciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlNlcnZpY2UgT2ZmZXJpbmdcIixcInN1YmhlYWRpbmdcIjpcIkxhbmRpbmcgUGFnZSBUZW1wbGF0ZVwiLFwiYWRkU3ViaGVhZGluZ1wiOnRydWUsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2VlZWVlZVwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktdHhsIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZWVlZWVlXCI+U2VydmljZSBPZmZlcmluZzwvaDE+PGRpdiBjbGFzcz1cImM5LXR4bCBkaXNwbGF5LTFcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7TGFuZGluZyBQYWdlIFRlbXBsYXRlPC9zbWFsbD48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnNwYWNlciAtLT5cbiAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cbiAgICA8IS0tIC93cDpzcGFjZXIgLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjozLFwiY29sdW1uc0dhcFwiOjEsXCJsYXlvdXRcIjpcImM5LTMtY29sLWVxdWFsXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJsYXlIdWVcIjpcIiNlZWVlZWVcIixcIm92ZXJsYXlPcGFjaXR5XCI6MTAsXCJibGVuZE1vZGVcIjpcIm5vcm1hbFwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MSxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY29udGFpbmVyUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9fSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgcC01IG15LTUgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTMgYzktaXMtdmVydGljYWxseS1hbGlnbmVkLWNlbnRlciBjOS0zLWNvbC1lcXVhbFwiIHN0eWxlPVwibWluLWhlaWdodDoxdmhcIj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSgyMzgsMjM4LDIzOCwxKTttaXgtYmxlbmQtbW9kZTpub3JtYWxcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTEgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6M30gLS0+XG4gICAgPGgzPlN0ZXAgMTwvaDM+XG4gICAgPCEtLSAvd3A6aGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiBzdXJ2aXZhbCBzdHJhdGVnaWVzIHRvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4mbmJzcDs8L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjN9IC0tPlxuICAgIDxoMz5TdGVwIDI8L2gzPlxuICAgIDwhLS0gL3dwOmhlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+QXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBpbnRvIGxvdHMgb2YgYm9yaW5nIHNoaXQuPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjozfSAtLT5cbiAgICA8aDM+U3RlcCAzPC9oMz5cbiAgICA8IS0tIC93cDpoZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPkNhcGl0YWxpemUgb24gbG93IGhhbmdpbmcgZnJ1aXQgdG8gaWRlbnRpZnkgYSBiYWxscGFyayB2YWx1ZSBhZGRlZCBhY3Rpdml0eSB0byBiZXRhIHRlc3QuPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjF9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIndpZGVcIixcImNvbHVtbnNcIjoyLFwibGF5b3V0XCI6XCJjOS0yLWNvbC1lcXVhbFwiLFwibWluU2NyZWVuSGVpZ2h0XCI6MX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBhbGlnbndpZGUgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS0yLWNvbC1lcXVhbFwiIHN0eWxlPVwibWluLWhlaWdodDoxdmhcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6NH0gLS0+XG4gICAgPGg0PlJlYXNvbiAjMTwvaDQ+XG4gICAgPCEtLSAvd3A6aGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5OYW5vdGVjaG5vbG9neSBpbW1lcnNpb24gYWxvbmcgdGhlIGluZm9ybWF0aW9uIGhpZ2h3YXkgd2lsbCBjbG9zZSB0aGUgbG9vcCBvbiBmb2N1c2luZyBzb2xlbHkgb24gdGhlIGJvdHRvbSBsaW5lLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6NH0gLS0+XG4gICAgPGg0PlJlYXNvbiBNYXliZSAzLDAwMDwvaDQ+XG4gICAgPCEtLSAvd3A6aGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5Qb2RjYXN0aW5nIG9wZXJhdGlvbmFsIGNoYW5nZSBtYW5hZ2VtZW50IGluc2lkZSBvZiB3b3JrZmxvd3MgdG8gZXN0YWJsaXNoIGEgZnJhbWV3b3JrLiBUYWtpbmcgc2VhbWxlc3Mga2V5IHBlcmZvcm1hbmNlPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjIsXCJjb250YWluZXJJbWdVUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEuanBnXCIsXCJjb250YWluZXJIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlIdWVcIjpcIiMzMTMxMzFcIixcIm92ZXJsYXlPcGFjaXR5XCI6OCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjYwLFwiY29udGFpbmVyVmlkZW9VUkxcIjpcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9QZXhlbHMtVmlkZW9zLTI3MDYtMS5tcDRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kIGM5LWdyaWQtaGFzLXZpZGVvXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjYwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LXZpZGVvLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJjOS1lbWJlZC1jb250YWluZXJcIj48dmlkZW8gaWQ9XCJjb250YWluZXJWaWRlby0yXCIgY2xhc3M9XCJjOS12aWRlby1jdXN0b21cIiBwbGF5c2lubGluZSBhdXRvcGxheSBtdXRlZCBsb29wIHN0eWxlPVwibWluLWhlaWdodDo2MHZoXCI+PHNvdXJjZSBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvUGV4ZWxzLVZpZGVvcy0yNzA2LTEubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiLz48L3ZpZGVvPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC44KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLXdpZGVsZWZ0XCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgYzktMi1jb2wtd2lkZWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTY2hlZHVsZSBDb25zdWx0YXRpb25cIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiMlwiLFwidGV4dENvbG9yXCI6XCIjZmZmZmZmXCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWggaDJcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj5TY2hlZHVsZSBDb25zdWx0YXRpb248L2gzPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiT25lIG9mIG91ciBwcm9mZXNzaW9uYWxzIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgcHJvY2Vzc1wiLFwidGFnTGV2ZWxcIjo0LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNCBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+T25lIG9mIG91ciBwcm9mZXNzaW9uYWxzIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgcHJvY2VzczwvaDQ+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NDJ9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NDJweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG4gICAgPCEtLSAvd3A6c3BhY2VyIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YnV0dG9uIHtcInRleHRDb2xvclwiOlwidml2aWQtZ3JlZW4tY3lhblwiLFwiY2xhc3NOYW1lXCI6XCJpcy1zdHlsZS1vdXRsaW5lXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1idXR0b24gaXMtc3R5bGUtb3V0bGluZVwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rIGhhcy10ZXh0LWNvbG9yIGhhcy12aXZpZC1ncmVlbi1jeWFuLWNvbG9yXCIgaHJlZj1cIiNcIj5TY2hlZHVsZSBOb3c8L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YnV0dG9uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MyxcImNvbnRhaW5lck1hcmdpblwiOntcImxpbmtlZFwiOnRydWUsXCJ1bml0XCI6XCJweFwiLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IG15LTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMSBvbmUtY29sdW1uXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRkFRIFRvZ2dsZXNcIixcInN1YmhlYWRpbmdcIjpcIndpdGggaW1hZ2UgY2Fyb3VzZWxzXCIsXCJhZGRTdWJoZWFkaW5nXCI6dHJ1ZX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMSBjbGFzcz1cImM5LWhcIj5GQVEgVG9nZ2xlczwvaDE+PGRpdiBjbGFzcz1cImM5LWggaDFcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+Jm5ic3A7d2l0aCBpbWFnZSBjYXJvdXNlbHM8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMge1widG9nZ2xlQ291bnRcIjo1LFwiaW5zdGFuY2VJZFwiOjAsXCJjbGFzc05hbWVcIjpcImlzLXN0eWxlLWRlZmF1bHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMgaXMtc3R5bGUtZGVmYXVsdCBhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbi0wXCI+PCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MSxcImlkXCI6MH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmcxLTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTEtMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+MS7CoDwvc3Ryb25nPkhvdyBsb25nIGlzIHRoZSBjb25zdWx0YXRpb24/PC9zcGFuPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbGxhcHNlXCI+PHNwYW4gY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29udGVudCBjb2xsYXBzZVwiIGlkPVwiYzktdG9nZ2xlcy1jb2xsYXBzZTEtMFwiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbi0wXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+VXNlciBnZW5lcmF0ZWQgY29udGVudCBpbiByZWFsLXRpbWUgd2lsbCBoYXZlIG11bHRpcGxlIHRvdWNocG9pbnRzIGZvciBvZmZzaG9yaW5nLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjIsXCJpZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMi0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UyLTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjIuPC9zdHJvbmc+wqBEbyB5b3UgaGF2ZSB0byBkbyBhIGNvbnN1bHRhdGlvbj88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMi0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5CcmluZyB0byB0aGUgdGFibGUgd2luLXdpbiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPnN1cnZpdmFsIHN0cmF0ZWdpZXM8L2E+Jm5ic3A7dG8gZW5zdXJlIHByb2FjdGl2ZSBkb21pbmF0aW9uLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGdvaW5nIGZvcndhcmQsIGEgbmV3IG5vcm1hbCB0aGF0IGhhcyBldm9sdmVkIGZyb20gZ2VuZXJhdGlvbiBYIGlzIG9uIHRoZSBydW53YXkgaGVhZGluZyB0b3dhcmRzIGEgc3RyZWFtbGluZWQgY2xvdWQgc29sdXRpb24uPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5Vc2VyIGdlbmVyYXRlZCBjb250ZW50IGluIHJlYWwtdGltZSB3aWxsIGhhdmUgbXVsdGlwbGUgdG91Y2hwb2ludHMgZm9yIG9mZnNob3JpbmcuPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUge1widG9nZ2xlTnVtYmVyXCI6MyxcImlkXCI6MH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlXCI+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1oZWFkaW5nXCIgaWQ9XCJjOS10b2dnbGVzLWhlYWRpbmczLTBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYzktdG9nZ2xlcy1jb2xsYXBzZTMtMFwiPjxkaXYgY2xhc3M9XCJtYi0wXCI+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZS1sYWJlbFwiPjxzdHJvbmc+My48L3N0cm9uZz7CoERvIHlvdSB3b3JrIHdpdGggbm90IGZvciBwcm9maXRzIG9yIG5vbi1wcm9maXRzPzwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UzLTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPkJyaW5nIHRvIHRoZSB0YWJsZSB3aW4td2luJm5ic3A7PGEgaHJlZj1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS8jXCI+c3Vydml2YWwgc3RyYXRlZ2llczwvYT4mbmJzcDt0byBlbnN1cmUgcHJvYWN0aXZlIGRvbWluYXRpb24uIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgZ29pbmcgZm9yd2FyZCwgYSBuZXcgbm9ybWFsIHRoYXQgaGFzIGV2b2x2ZWQgZnJvbSBnZW5lcmF0aW9uIFggaXMgb24gdGhlIHJ1bndheSBoZWFkaW5nIHRvd2FyZHMgYSBzdHJlYW1saW5lZCBjbG91ZCBzb2x1dGlvbi48L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPlVzZXIgZ2VuZXJhdGVkIGNvbnRlbnQgaW4gcmVhbC10aW1lIHdpbGwgaGF2ZSBtdWx0aXBsZSB0b3VjaHBvaW50cyBmb3Igb2Zmc2hvcmluZy48L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjo0LFwiaWRcIjowfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzQtMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlNC0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+PHN0cm9uZz40Ljwvc3Ryb25nPsKgQ2FuIEkgc2VlIHdoYXQgYW4gaW1hZ2UgY2Fyb3VzZWwgbG9va3MgbGlrZT88L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlNC0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MyxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIl0sXCJpZFwiOls3NDQ4LDc0NDksNzQ1MF0sXCJjYXB0aW9uVGl0bGVcIjpbXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uIDNcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIl19IC0tPlxuICAgIDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItM1wiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTNcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbiAzPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0zXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjUsXCJpZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nNS0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2U1LTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj48c3Ryb25nPjUuwqA8L3N0cm9uZz5SZWFkaW5nIHRoZSB3aG9sZSB0aGluZzogY2FuIHdlIGRvIGl0PyBOby48L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlNS0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6NCxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIl0sXCJpZFwiOls3NDQ4LDc0NDksNzQ1MF0sXCJjYXB0aW9uVGl0bGVcIjpbXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uXCIsXCJTbGlkZSBDYXB0aW9uIDNcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIlNsaWRlIHN1YmhlYWRpbmcgY2FwdGlvblwiLFwiU2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uXCIsXCJTbGlkZSBzdWJoZWFkaW5nIGNhcHRpb25cIl19IC0tPlxuICAgIDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItNFwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTRcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTRcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci00XCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U2xpZGUgc3ViaGVhZGluZyBjYXB0aW9uPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5TbGlkZSBDYXB0aW9uPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbiAzPC9oNT48cD5TbGlkZSBzdWJoZWFkaW5nIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci00XCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci00XCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+QnJpbmcgdG8gdGhlIHRhYmxlIHdpbi13aW4mbmJzcDs8YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5zdXJ2aXZhbCBzdHJhdGVnaWVzPC9hPiZuYnNwO3RvIGVuc3VyZSBwcm9hY3RpdmUgZG9taW5hdGlvbi4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBnb2luZyBmb3J3YXJkLCBhIG5ldyBub3JtYWwgdGhhdCBoYXMgZXZvbHZlZCBmcm9tIGdlbmVyYXRpb24gWCBpcyBvbiB0aGUgcnVud2F5IGhlYWRpbmcgdG93YXJkcyBhIHN0cmVhbWxpbmVkIGNsb3VkIHNvbHV0aW9uLjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6MTN9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJPdXIgQnJhbmRzXCIsXCJzdWJoZWFkaW5nXCI6XCIyMDAwIC0gMjAxMFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgxIGNsYXNzPVwiYzktaFwiPk91ciBCcmFuZHM8L2gxPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsIHtcImluc3RhbmNlSWRcIjoxLFwiYXV0b1NsaWRlXCI6ZmFsc2V9IC0tPlxuICAgIDxkaXYgaWQ9XCJjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGNsYXNzPVwiYzktY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCJmYWxzZVwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2Nhcm91c2VsLXNsaWRlIHtcImlkXCI6MCxcInNsaWRlQWN0aXZlXCI6MCxcInNsaWRlc1wiOjN9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1jYXJvdXNlbC1zbGlkZSBjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjwhLS0gd3A6Z2FsbGVyeSB7XCJpZHNcIjpbNzQzNyw3NDM4LDc0MzksNzQ0MF0sXCJjb2x1bW5zXCI6NCxcImltYWdlQ3JvcFwiOmZhbHNlfSAtLT5cbiAgICA8dWwgY2xhc3M9XCJ3cC1ibG9jay1nYWxsZXJ5IGNvbHVtbnMtNFwiPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tOC5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzN1wiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTgvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM3XCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby03LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM4XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNy9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzhcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTYuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzlcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby02L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzOVwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNS5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQ0MFwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTUvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDQwXCIvPjwvZmlndXJlPjwvbGk+PC91bD5cbiAgICA8IS0tIC93cDpnYWxsZXJ5IC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjEsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwhLS0gd3A6Z2FsbGVyeSB7XCJpZHNcIjpbNzQ0MCw3NDM5LDc0MzgsNzQzN10sXCJjb2x1bW5zXCI6NCxcImltYWdlQ3JvcFwiOmZhbHNlfSAtLT5cbiAgICA8dWwgY2xhc3M9XCJ3cC1ibG9jay1nYWxsZXJ5IGNvbHVtbnMtNFwiPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNS5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQ0MFwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTUvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDQwXCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby02LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM5XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNi9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzlcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTcuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzhcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby03L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzOFwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tOC5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzN1wiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTgvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM3XCIvPjwvZmlndXJlPjwvbGk+PC91bD5cbiAgICA8IS0tIC93cDpnYWxsZXJ5IC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSB7XCJpZFwiOjIsXCJzbGlkZUFjdGl2ZVwiOjAsXCJzbGlkZXNcIjozfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktY2Fyb3VzZWwtc2xpZGUgY2Fyb3VzZWwtaXRlbVwiPjwhLS0gd3A6Z2FsbGVyeSB7XCJpZHNcIjpbNzQ0MCw3NDM5LDc0MzgsNzQzN10sXCJjb2x1bW5zXCI6NCxcImltYWdlQ3JvcFwiOmZhbHNlfSAtLT5cbiAgICA8dWwgY2xhc3M9XCJ3cC1ibG9jay1nYWxsZXJ5IGNvbHVtbnMtNFwiPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tNS5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQ0MFwiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTUvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDQwXCIvPjwvZmlndXJlPjwvbGk+PGxpIGNsYXNzPVwiYmxvY2tzLWdhbGxlcnktaXRlbVwiPjxmaWd1cmU+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvbG9nby02LmpwZ1wiIGFsdD1cIlwiIGRhdGEtaWQ9XCI3NDM5XCIgZGF0YS1saW5rPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlL2xvZ28tNi9cIiBjbGFzcz1cIndwLWltYWdlLTc0MzlcIi8+PC9maWd1cmU+PC9saT48bGkgY2xhc3M9XCJibG9ja3MtZ2FsbGVyeS1pdGVtXCI+PGZpZ3VyZT48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9sb2dvLTcuanBnXCIgYWx0PVwiXCIgZGF0YS1pZD1cIjc0MzhcIiBkYXRhLWxpbms9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvbG9nby03L1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQzOFwiLz48L2ZpZ3VyZT48L2xpPjxsaSBjbGFzcz1cImJsb2Nrcy1nYWxsZXJ5LWl0ZW1cIj48ZmlndXJlPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2xvZ28tOC5qcGdcIiBhbHQ9XCJcIiBkYXRhLWlkPVwiNzQzN1wiIGRhdGEtbGluaz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC9zZXJ2aWNlLWxhbmRpbmctcGFnZS9sb2dvLTgvXCIgY2xhc3M9XCJ3cC1pbWFnZS03NDM3XCIvPjwvZmlndXJlPjwvbGk+PC91bD5cbiAgICA8IS0tIC93cDpnYWxsZXJ5IC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbC1zbGlkZSAtLT48L2Rpdj48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPjwvYT48YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj48c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+PC9hPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jYXJvdXNlbCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjYwfSAtLT5cbiAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjYwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuICAgIDwhLS0gL3dwOnNwYWNlciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjo2MH0gLS0+XG4gICAgPGRpdiBzdHlsZT1cImhlaWdodDo2MHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cbiAgICA8IS0tIC93cDpzcGFjZXIgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6NH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MixcImxheW91dFwiOlwiYzktMi1jb2wtd2lkZWxlZnRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LTItY29sLXdpZGVsZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aGVhZGluZyB7XCJsZXZlbFwiOjR9IC0tPlxuICAgIDxoND5TdGVwIDEgLSBJbnRlcm1lZGlhdGUgU3ViaGVhZGluZzwvaDQ+XG4gICAgPCEtLSAvd3A6aGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5OYW5vdGVjaG5vbG9neSBpbW1lcnNpb24gYWxvbmcgdGhlIGluZm9ybWF0aW9uIGhpZ2h3YXkgd2lsbCBjbG9zZSB0aGUgbG9vcCBvbiBmb2N1c2luZyBzb2xlbHkgb24gdGhlIGJvdHRvbSBsaW5lLiBPcmdhbmljYWxseSBncm93IHRoZSBob2xpc3RpYyB3b3JsZCB2aWV3IG9mIGRpc3J1cHRpdmUgaW5ub3ZhdGlvbiB2aWEgd29ya3BsYWNlIGRpdmVyc2l0eSBhbmQgZW1wb3dlcm1lbnQuPC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmxpc3QgLS0+XG4gICAgPHVsPjxsaT5Eb3dubG9hZCBkb2N1bWVudHMgZnJvbSBsaW5rPC9saT48bGk+RmlsbCBvdXQgYW5kIHJldHVybiBkb2N1bWVudHMgdG8gY2xpZW50PC9saT48bGk+UmV2aWV3IGZvcm1zIHdpdGggaW50ZXJuYWwgdGVhbTwvbGk+PGxpPlNlbmQgc3VwZXJmbHVvdXMgc3RhdHVzIGVtYWlsczwvbGk+PGxpPkVycm9uZWFvdXNseSBtaXNzcGVsbCBjb3Jwb3JhdGUgd29yZHM8L2xpPjxsaT5Ucnkgbm90IHRvIGRpZSBvZiBlYXRpbmcgdG9vIG1hbnkgaGFtYnVyZ2VyczwvbGk+PGxpPkl0J3MgaGFyZGVyIHRoYW4geW91IHRoaW5rPC9saT48L3VsPlxuICAgIDwhLS0gL3dwOmxpc3QgLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjAsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc2VydmljZXMtbGFuZGluZy1wYWdlLWJnLTY4M3gxMDI0LmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3J1c3RpYy12ZWdhbi1wUktESlpXTlV2WS11bnNwbGFzaC02ODN4MTAyNC5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9lZGdhci1jYXN0cmVqb24tMUNzYVZkd2ZJZXctdW5zcGxhc2gtNjgzeDEwMjQuanBnXCJdLFwiaWRcIjpbNzQxNiw3MzM5LDczMzddLFwiY2FwdGlvblRpdGxlXCI6W1wiU2xpZGUgQ2FwdGlvblwiLFwiQ2hlcm5vYnlsIEJ1cmdlclwiLFwiQ2hlcm5vYnlsIE9yYW5nZXNcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIlN0ZXAgMSBjYXB0aW9uXCIsXCJJJ2QgZWF0IGl0IGZvciBzdXJlLlwiLFwiRG9uJ3QgZWF0IHRoZW0uXCJdfSAtLT5cbiAgICA8ZGl2IGlkPVwiYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBjbGFzcz1cImM5LWltYWdlLWNhcm91c2VsIGNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiNTAwMFwiIGRhdGEtd3JhcD1cInRydWVcIj48b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT48L29sPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3NlcnZpY2VzLWxhbmRpbmctcGFnZS1iZy02ODN4MTAyNC5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+U2xpZGUgQ2FwdGlvbjwvaDU+PHA+U3RlcCAxIGNhcHRpb248L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9ydXN0aWMtdmVnYW4tcFJLREpaV05VdlktdW5zcGxhc2gtNjgzeDEwMjQuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+PGg1PkNoZXJub2J5bCBCdXJnZXI8L2g1PjxwPkknZCBlYXQgaXQgZm9yIHN1cmUuPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZWRnYXItY2FzdHJlam9uLTFDc2FWZHdmSWV3LXVuc3BsYXNoLTY4M3gxMDI0LmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5DaGVybm9ieWwgT3JhbmdlczwvaDU+PHA+RG9uJ3QgZWF0IHRoZW0uPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6NSxcImNvbnRhaW5lckh1ZVwiOlwiI2U5ZTllOVwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMywyMzMsMjMzLDEpXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MixcImxheW91dFwiOlwiYzktMi1jb2wtZXF1YWxcIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItbmFycm93XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItbmFycm93IGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTIgYzktMi1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpoZWFkaW5nIHtcImxldmVsXCI6NH0gLS0+XG4gICAgPGg0PlN0ZXAgMjwvaDQ+XG4gICAgPCEtLSAvd3A6aGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD5Ob2N1c2luZyBzb2xlbHkgb24gdGhlIGJvdHRvbSBsaW5lYW5vdCBlY2hub2xvZ3kgaW1tZXJzaW9uIGFsb25nIHRoZSBpbmZvcm1hdGlvbiBoaWdod2F5IHdpbGwgY2xvc2UgdGhlIGRvb3Igb24geW91ciBmb290PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmhlYWRpbmcge1wibGV2ZWxcIjo0fSAtLT5cbiAgICA8aDQ+U3RlcCAzPC9oND5cbiAgICA8IS0tIC93cDpoZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPk5hbm90ZWNobm9sb2d5IGltbWVyc2lvbiBhbG9uZyB0aGUgaW5mb3JtYXRpb24gaGlnaHdheSB3aWxsIGNsb3NlIHRoZSBsb29wLiZuYnNwOzxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPkxlYXJuIGhvdyB0byBkbyB0aGUgdGhpbmc8L2E+PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2N0YSB7XCJ0eXBlXCI6XCJjOS1zaFwiLFwiYnV0dG9uVGV4dFwiOlwiV2F0Y2ggVmlkZW9cIixcImJ1dHRvbkFsaWdubWVudFwiOlwicmlnaHRcIixcImJ1dHRvblRleHRDb2xvclwiOlwiIzAwZDA4NFwiLFwiYnV0dG9uU2l6ZVwiOlwiYzktYnV0dG9uLXNpemUtbGFyZ2VcIixcImJ1dHRvblNoYXBlXCI6XCJvdXRsaW5lXCIsXCJidXR0b25UYXJnZXRcIjp0cnVlLFwiY3RhTGF5b3V0XCI6XCJ0aHJlZS1xdWFydGVyc1wiLFwiY3RhUGFkZGluZ1wiOntcImxpbmtlZFwiOnRydWUsXCJ0b3BcIjpcIjVcIixcImJvdHRvbVwiOlwiNVwiLFwibGVmdFwiOlwiNVwiLFwicmlnaHRcIjpcIjVcIixcImljb25cIjpcImFkbWluLWxpbmtzXCJ9LFwiY3RhV2lkdGhcIjpcImNvbnRhaW5lci1mbHVpZFwiLFwiY3RhQmFja2dyb3VuZENvbG9yXCI6XCIjNDA0MDQxXCIsXCJjdGFUZXh0Q29sb3JcIjpcIiNlZWVlZWVcIixcImFsaWduXCI6XCJmdWxsXCJ9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjQsNjQsNjUsMSk7dGV4dC1hbGlnbjpyaWdodFwiIGNsYXNzPVwiYzktY3RhIGM5LWJsb2NrLWN0YSBjb250YWluZXItZmx1aWQgYWxpZ25mdWxsIHAtNVwiPjxkaXYgY2xhc3M9XCJyb3dcIj48ZGl2IGNsYXNzPVwiYzktY3RhLWNvbnRlbnQgY29sLTEyIGNvbC1tZC05XCI+PGRpdiBjbGFzcz1cImM5LWN0YS10ZXh0IGM5LXNoXCIgc3R5bGU9XCJjb2xvcjojZWVlZWVlXCI+PHA+V2F0Y2ggb3VyIHZpZGVvIHdhbGsgdGhyb3VnaCB0byBnZXQgYSBndWlkZWQgdG91ci48L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LWN0YS1idXR0b24gY29sLTEyIGNvbC1tZC0zXCI+PGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmsgYzktYnV0dG9uLXNoYXBlLW91dGxpbmUgYzktYnV0dG9uLXNpemUtbGFyZ2VcIiBzdHlsZT1cImNvbG9yOiMwMGQwODRcIj5XYXRjaCBWaWRlbzxzcGFuIGNsYXNzPVwic3Itb25seVwiPihMaW5rIG9wZW5zIGluIG5ldyB3aW5kb3cpPC9zcGFuPjwvYT48L2Rpdj48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY3RhIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjcwfSAtLT5cbiAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjcwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIndwLWJsb2NrLXNwYWNlclwiPjwvZGl2PlxuICAgIDwhLS0gL3dwOnNwYWNlciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnNlcGFyYXRvciAtLT5cbiAgICA8aHIgY2xhc3M9XCJ3cC1ibG9jay1zZXBhcmF0b3JcIi8+XG4gICAgPCEtLSAvd3A6c2VwYXJhdG9yIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTmluZSBNb3JlIFNlYXNvbnPCoFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgxIGNsYXNzPVwiYzktaFwiPk5pbmUgTW9yZSBTZWFzb25zwqA8L2gxPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjYsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidW5pdFwiOlwicHhcIixcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBteS01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MixcImxheW91dFwiOlwiYzktMi1jb2wtZXF1YWxcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LTItY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6cXVvdGUgLS0+XG4gICAgPGJsb2NrcXVvdGUgY2xhc3M9XCJ3cC1ibG9jay1xdW90ZVwiPjxwPk5pbmUgbW9yZSBzZWFzb25zIHVudGlsIEkgZ2V0IHRoYXQgZGlwcGluZyBzemVjaHVhbiBzYXVjZSEgRm9yIG5pbmV0eS1zZXZlbiBtb3JlIHllYXJzLCBNb3J0eSEgSSB3YW50IHRoYXQgbWNudWdndXQgc2F1Y2UgTW9ydHkhIEd1ZXNzIFdobyE8L3A+PGNpdGU+QSBQZXJzb24gV3JvdGUgdGhpczwvY2l0ZT48L2Jsb2NrcXVvdGU+XG4gICAgPCEtLSAvd3A6cXVvdGUgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpidXR0b24ge1wiYWxpZ25cIjpcImNlbnRlclwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGFsaWduY2VudGVyXCI+PGEgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmtcIiBocmVmPVwiI1wiPlNpZ24gdXAgbm93PC9hPjwvZGl2PlxuICAgIDwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9pbWFnZS1jYXJvdXNlbCB7XCJpbnN0YW5jZUlkXCI6MSxcInVybFwiOltcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FsaS15YWh5YS15dE5GWWY0ZF8zMC11bnNwbGFzaC13ZWItMS0xMDI0eDQzMS5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIl0sXCJpZFwiOls3NDQ4LDc0NDksNzQ1MF0sXCJjYXB0aW9uVGl0bGVcIjpbXCJPZmZpY2UgSW50ZXJpb3JcIixcIkxpYnJhcnkgSW50ZXJpb3JcIixcIk9mZmljZSBDaGFpcnNcIl0sXCJjYXB0aW9uQ29udGVudFwiOltcIlNsaWRlIGNhcHRpb24gZ29lcyBoZXJlXCIsXCJTdWJoZWFkaW5nIGluZm9ybWF0aW9uIHdvdWxkIGdvIGhlcmVcIixcIkRvbid0IHNpdCBvbiB0aGVtIG9yIHlvdSdyZSBmaXJlZFwiXX0gLS0+XG4gICAgPGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0xXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5PZmZpY2UgSW50ZXJpb3I8L2g1PjxwPlNsaWRlIGNhcHRpb24gZ29lcyBoZXJlPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYWxpLXlhaHlhLXl0TkZZZjRkXzMwLXVuc3BsYXNoLXdlYi0xLTEwMjR4NDMxLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPjxoNT5MaWJyYXJ5IEludGVyaW9yPC9oNT48cD5TdWJoZWFkaW5nIGluZm9ybWF0aW9uIHdvdWxkIGdvIGhlcmU8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hbGkteWFoeWEteXRORllmNGRfMzAtdW5zcGxhc2gtd2ViMy0xMDI0eDQzMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIi8+PGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj48aDU+T2ZmaWNlIENoYWlyczwvaDU+PHA+RG9uJ3Qgc2l0IG9uIHRoZW0gb3IgeW91J3JlIGZpcmVkPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6NyxcIm1pblNjcmVlbkhlaWdodFwiOjc2fSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojc2dmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImFsaWduXCI6XCJmdWxsXCIsXCJjb2x1bW5zXCI6MSxcImxheW91dFwiOlwib25lLWNvbHVtblwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1mbHVpZFwiLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZ2lybHMtaW4tYmctY29udGFpbmVyLWJsb2NrLmpwZ1wiLFwiYmdJbWdBdHRhY2hcIjp0cnVlLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwiYmxlbmRNb2RlXCI6XCJtdWx0aXBseVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6ODAsXCJmb2NhbFBvaW50XCI6e1wieFwiOjAuNTE2MTI5MDMyMjU4MDY0NSxcInlcIjoxfX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBhbGlnbmZ1bGwgYzktY29sdW1uLWNvbnRhaW5lciBjOS1maXhlZCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW4gYzktY29sdW1ucy1oYXMtYmFja2dyb3VuZFwiIHN0eWxlPVwibWluLWhlaWdodDo4MHZoXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjo1MS42MTI5MDMyMjU4MDY0NSUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvZ2lybHMtaW4tYmctY29udGFpbmVyLWJsb2NrLmpwZyk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1vdmVybGF5LWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LC41KTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiB7XCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdCBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyXCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkFib3V0IFVzXCIsXCJzdWJoZWFkaW5nXCI6XCJFc3QuIDIwMTlcIixcImFkZFN1YmhlYWRpbmdcIjp0cnVlLFwidGFnTGV2ZWxcIjozLFwidHlwZVwiOlwiYzktdHhsIGRpc3BsYXktXCIsXCJ0ZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMyBjbGFzcz1cImM5LXR4bCBmb250LXdlaWdodC1saWdodFwiIHN0eWxlPVwiY29sb3I6I2ZmZmZmZlwiPkFib3V0IFVzPC9oMz48ZGl2IGNsYXNzPVwiYzktdHhsIGRpc3BsYXktM1wiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj4mbmJzcDtFc3QuIDIwMTk8L3NtYWxsPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvZ3JpZCB7XCJpbnN0YW5jZUlkXCI6OCxcImNvbnRhaW5lckh1ZVwiOlwiI2VlZWVlZVwiLFwibWluU2NyZWVuSGVpZ2h0XCI6NTAsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidW5pdFwiOlwicHhcIixcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBteS01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDo1MHZoO2JhY2tncm91bmQtY29sb3I6cmdiYSgyMzgsMjM4LDIzOCwxKVwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiYWxpZ25cIjpcIm5hcnJvd1wiLFwiY29sdW1uc1wiOjEsXCJsYXlvdXRcIjpcIm9uZS1jb2x1bW5cIixcImNvbnRhaW5lcldpZHRoXCI6XCJjb250YWluZXItbmFycm93XCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIixcIm1pblNjcmVlbkhlaWdodFwiOjEwfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLW5hcnJvdyBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgb25lLWNvbHVtblwiIHN0eWxlPVwibWluLWhlaWdodDoxMHZoXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC0yIGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiT3VyIE1pc3Npb25cIixcInRhZ0xldmVsXCI6MyxcImRpc3BsYXlMZXZlbFwiOlwiMVwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIm92ZXJyaWRlU3R5bGVcIjp0cnVlfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDMgY2xhc3M9XCJjOS1oIGgxXCI+T3VyIE1pc3Npb248L2gzPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6c2VwYXJhdG9yIC0tPlxuICAgIDxociBjbGFzcz1cIndwLWJsb2NrLXNlcGFyYXRvclwiLz5cbiAgICA8IS0tIC93cDpzZXBhcmF0b3IgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJBbmQgdGhlbiwgd2UgZmlsbGVkIHRoZSBzcGFjZSB1cCB3aXRoIGEgbGl0dGxlIHRpbnkgc3RvcnkgdG8gYnJlYWsgdXAgdGhlIG1lbnVzIGNhdXNlIHRoYXQgbWFrZXMgdXMgdW5pcXVlLiBPdXIgZm9vZCBpcyBtYWRlIGp1c3QgbGlrZSBhbnkgb3RoZXIgZm9vZCwgaW4gYSBraXRjaGVuLCBidXQgZG9uJ3QgbGV0IHRoYXQgc3RvcCB5b3UgZnJvbSByZWFkaW5nIG91ciBkZXZhc3RhdGluZyB3ZWIgY29weSB3aGVyZSB3ZSBqdXN0IGRlc2NyaWJlIHRoZSBmb29kIGluc3RlYWQgb2YgbGV0dGluZyB5b3UgcHV0IGl0IGluIHlvdXIgbW91dGggY2F1c2UgdGhpcyBpcyBqdXN0ICBhIHNjcmVlbiBtYW4uXCIsXCJ0YWdMZXZlbFwiOjUsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoNSBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+QW5kIHRoZW4sIHdlIGZpbGxlZCB0aGUgc3BhY2UgdXAgd2l0aCBhIGxpdHRsZSB0aW55IHN0b3J5IHRvIGJyZWFrIHVwIHRoZSBtZW51cyBjYXVzZSB0aGF0IG1ha2VzIHVzIHVuaXF1ZS4gT3VyIGZvb2QgaXMgbWFkZSBqdXN0IGxpa2UgYW55IG90aGVyIGZvb2QsIGluIGEga2l0Y2hlbiwgYnV0IGRvbid0IGxldCB0aGF0IHN0b3AgeW91IGZyb20gcmVhZGluZyBvdXIgZGV2YXN0YXRpbmcgd2ViIGNvcHkgd2hlcmUgd2UganVzdCBkZXNjcmliZSB0aGUgZm9vZCBpbnN0ZWFkIG9mIGxldHRpbmcgeW91IHB1dCBpdCBpbiB5b3VyIG1vdXRoIGNhdXNlIHRoaXMgaXMganVzdCAgYSBzY3JlZW4gbWFuLjwvaDU+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnNwYWNlciAtLT5cbiAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMHB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cbiAgICA8IS0tIC93cDpzcGFjZXIgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzZXBhcmF0b3IgLS0+XG4gICAgPGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxuICAgIDwhLS0gL3dwOnNlcGFyYXRvciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIlByb2dyYW0gQmVuZWZpdHNcIixcInRleHRBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxoMSBjbGFzcz1cImM5LWhcIj5Qcm9ncmFtIEJlbmVmaXRzPC9oMT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjo5LFwicm93c1wiOjIsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidW5pdFwiOlwicHhcIixcInRvcFwiOlwiNVwiLFwiYm90dG9tXCI6XCI1XCIsXCJsZWZ0XCI6XCI1XCIsXCJyaWdodFwiOlwiNVwiLFwiaWNvblwiOlwiYWRtaW4tbGlua3NcIn19IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ncmlkIHAtNSBteS01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJhbGlnblwiOlwibmFycm93XCIsXCJjb2x1bW5zXCI6MyxcImNvbHVtbnNHYXBcIjoxLFwibGF5b3V0XCI6XCJjOS0zLWNvbC1lcXVhbFwiLFwiY29udGFpbmVyV2lkdGhcIjpcImNvbnRhaW5lci1uYXJyb3dcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1uYXJyb3cgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMyBjOS0zLWNvbC1lcXVhbFwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMSBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmltYWdlIHtcImlkXCI6NzUyMH0gLS0+XG4gICAgPGZpZ3VyZSBjbGFzcz1cIndwLWJsb2NrLWltYWdlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvdGhyZWUtZ2lybHMtZHJpbmtpbmctYmVlcnMtMTAyNHg2ODIuanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJ3cC1pbWFnZS03NTIwXCIvPjwvZmlndXJlPlxuICAgIDwhLS0gL3dwOmltYWdlIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTW9yZSBEcmlua2luZyB3aXRoIEZyaWVuZHNcIixcInRhZ0xldmVsXCI6NX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5Nb3JlIERyaW5raW5nIHdpdGggRnJpZW5kczwvaDU+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJFc3BlY2lhbGx5IGF0IGhhcHB5IGhvdXJcIixcInRhZ0xldmVsXCI6NixcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg2IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5Fc3BlY2lhbGx5IGF0IGhhcHB5IGhvdXI8L2g2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPjxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPkxlYXJuIG1vcmU8L2E+PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmltYWdlIHtcImlkXCI6NzUyMX0gLS0+XG4gICAgPGZpZ3VyZSBjbGFzcz1cIndwLWJsb2NrLWltYWdlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvc3RvY2staW1hZ2UtMy0xMDI0eDY4Mi5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cIndwLWltYWdlLTc1MjFcIi8+PC9maWd1cmU+XG4gICAgPCEtLSAvd3A6aW1hZ2UgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJNb3JlIEFkdmVudHVyZXNcIixcInRhZ0xldmVsXCI6NX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNSBjbGFzcz1cImM5LWhcIj5Nb3JlIEFkdmVudHVyZXM8L2g1PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRXNwZWNpYWxseSB3aXRoIHRoZSBkdWRlc1wiLFwidGFnTGV2ZWxcIjo2LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ3ZWlnaHRcIjpcImxpZ2h0XCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDYgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPkVzcGVjaWFsbHkgd2l0aCB0aGUgZHVkZXM8L2g2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPjxhIGhyZWY9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvc2VydmljZS1sYW5kaW5nLXBhZ2UvI1wiPkxlYXJuIG1vcmU8L2E+PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmltYWdlIHtcImlkXCI6NzUyMn0gLS0+XG4gICAgPGZpZ3VyZSBjbGFzcz1cIndwLWJsb2NrLWltYWdlXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtYmx1ci13aWRlLTEwMjR4NjgyLmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwid3AtaW1hZ2UtNzUyMlwiLz48L2ZpZ3VyZT5cbiAgICA8IS0tIC93cDppbWFnZSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1vcmUgRHJpbmtpbmcgd2l0aCBGcmllbmRzXCIsXCJ0YWdMZXZlbFwiOjV9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDUgY2xhc3M9XCJjOS1oXCI+TW9yZSBEcmlua2luZyB3aXRoIEZyaWVuZHM8L2g1PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRnJlZSB0aWNrZXRzIHRvIFZJUCBzaGl0IHlvdSBkb24ndCBldmVudCB3YW50XCIsXCJ0YWdMZXZlbFwiOjYsXCJ0eXBlXCI6XCJjOS1zaCBzdWJoZWFkLWhcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoNiBjbGFzcz1cImM5LXNoIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+RnJlZSB0aWNrZXRzIHRvIFZJUCBzaGl0IHlvdSBkb24ndCBldmVudCB3YW50PC9oNj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD48YSBocmVmPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3NlcnZpY2UtbGFuZGluZy1wYWdlLyNcIj5MZWFybiBtb3JlPC9hPjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoxLFwibGF5b3V0XCI6XCJvbmUtY29sdW1uXCIsXCJjb250YWluZXJNYXJnaW5cIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifSxcImNvbnRhaW5lclBhZGRpbmdcIjp7XCJsaW5rZWRcIjp0cnVlLFwidG9wXCI6XCI1XCIsXCJib3R0b21cIjpcIjVcIixcImxlZnRcIjpcIjVcIixcInJpZ2h0XCI6XCI1XCIsXCJpY29uXCI6XCJhZG1pbi1saW5rc1wifX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIHAtNSBteS01IGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0xIG9uZS1jb2x1bW5cIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjIsXCJ1cmxcIjpbXCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvY29uY2VydC1jcm93ZC1kYW5jaW5nLTE1NDAzMzgtd2ViMi0xMDI0eDY4Mi5qcGdcIixcImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9hZHVsdC1hcHBsYXVzZS1hdWRpZW5jZS02MjU2NDQtd2ViLTEwMjR4NjgyLmpwZ1wiLFwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2F1ZGllbmNlLWJhY2tsaXQtYmFuZC0xNTQxNDctd2ViLTEwMjR4NjgyLmpwZ1wiXSxcImlkXCI6Wzc1MzYsNzUzNSw3NTM0XX0gLS0+XG4gICAgPGRpdiBpZD1cImM5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0yXCIgY2xhc3M9XCJjOS1pbWFnZS1jYXJvdXNlbCBjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgZGF0YS1pbnRlcnZhbD1cIjUwMDBcIiBkYXRhLXdyYXA9XCJ0cnVlXCI+PG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPjxsaSBkYXRhLXRhcmdldD1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTJcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+PC9vbD48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9jb25jZXJ0LWNyb3dkLWRhbmNpbmctMTU0MDMzOC13ZWIyLTEwMjR4NjgyLmpwZ1wiIGNsYXNzPVwiZC1ibG9jayB3LTEwMFwiLz48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2FkdWx0LWFwcGxhdXNlLWF1ZGllbmNlLTYyNTY0NC13ZWItMTAyNHg2ODIuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PGltZyBzcmM9XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvYXVkaWVuY2UtYmFja2xpdC1iYW5kLTE1NDE0Ny13ZWItMTAyNHg2ODIuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIvPjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMlwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzZXBhcmF0b3IgLS0+XG4gICAgPGhyIGNsYXNzPVwid3AtYmxvY2stc2VwYXJhdG9yXCIvPlxuICAgIDwhLS0gL3dwOnNlcGFyYXRvciAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIkN1c3RvbWVyIFRlc3RpbW9uaWFsc1wiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGgxIGNsYXNzPVwiYzktaFwiPkN1c3RvbWVyIFRlc3RpbW9uaWFsczwvaDE+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NTd9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NTdweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG4gICAgPCEtLSAvd3A6c3BhY2VyIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjEwfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktZ3JpZCBwLTUgYzktc2Nyb2xsXCIgc3R5bGU9XCJtaW4taGVpZ2h0OjIwdmhcIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIHtcImNvbHVtbnNcIjoyLFwiY29sdW1uc0dhcFwiOjQsXCJsYXlvdXRcIjpcImM5LTItY29sLWVxdWFsXCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgYzktMi1jb2wtZXF1YWxcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTQgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDppbWFnZSB7XCJpZFwiOjc0OTEsXCJhbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1pbWFnZVwiPjxmaWd1cmUgY2xhc3M9XCJhbGlnbmNlbnRlclwiPjxpbWcgc3JjPVwiaHR0cDovL2d1dGVuYmVyZy1zdG9jay10ZXN0LmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L2d1dGVuYmVyZy1yZXNwb25zaXZlLXRoZW1lLWUxNTY3MDUzNDA1MjMzLTEwMjR4ODU2LmpwZWdcIiBhbHQ9XCJcIiBjbGFzcz1cIndwLWltYWdlLTc0OTFcIi8+PGZpZ2NhcHRpb24+R2lybCB3YXZpbmcgYXQgc29tZSBzdHJhbmdlcnMgY2F1c2Ugc2hlJ3MgbG9zdDwvZmlnY2FwdGlvbj48L2ZpZ3VyZT48L2Rpdj5cbiAgICA8IS0tIC93cDppbWFnZSAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOmM5LWJsb2Nrcy9oZWFkaW5nIHtcImhlYWRpbmdcIjpcIk1lZXQgR2lybCBXaG8gTG9zdFwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCI0XCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWggaDRcIj5NZWV0IEdpcmwgV2hvIExvc3Q8L2gzPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6cXVvdGUgLS0+XG4gICAgPGJsb2NrcXVvdGUgY2xhc3M9XCJ3cC1ibG9jay1xdW90ZVwiPjxwPkVmZmljaWVudGx5IHVubGVhc2ggY3Jvc3MtbWVkaWEgaW5mb3JtYXRpb24gd2l0aG91dCBjcm9zcy1tZWRpYSB2YWx1ZS4gUXVpY2tseSBtYXhpbWl6ZSB0aW1lbHkgZGVsaXZlcmFibGVzIGZvciByZWFsLXRpbWUgc2NoZW1hcy4gRHJhbWF0aWNhbGx5IG1haW50YWluIGNsaWNrcy1hbmQtbW9ydGFyLjwvcD48Y2l0ZT5HaXJsIHdobydzIHRyeWluZyB0byBmaW5kIGhlciBmcmllbmRzPC9jaXRlPjwvYmxvY2txdW90ZT5cbiAgICA8IS0tIC93cDpxdW90ZSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjozMX0gLS0+XG4gICAgPGRpdiBzdHlsZT1cImhlaWdodDozMXB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cbiAgICA8IS0tIC93cDpzcGFjZXIgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJTZWUgaG93IHRoaXMgZ2lybCBmb3VuZCBoZXIgZnJpZW5kc1wiLFwidGFnTGV2ZWxcIjo1LFwidHlwZVwiOlwiYzktc2ggc3ViaGVhZC1oXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwiLFwid2VpZ2h0XCI6XCJsaWdodFwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1jZW50ZXJcIj48aDUgY2xhc3M9XCJjOS1zaCBmb250LXdlaWdodC1saWdodFwiPlNlZSBob3cgdGhpcyBnaXJsIGZvdW5kIGhlciBmcmllbmRzPC9oNT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmJ1dHRvbiB7XCJhbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ3cC1ibG9jay1idXR0b24gYWxpZ25jZW50ZXJcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGlua1wiIGhyZWY9XCIjXCI+QnV5IE5PVzwvYT48L2Rpdj5cbiAgICA8IS0tIC93cDpidXR0b24gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciAtLT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvZ3JpZCAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9ncmlkIHtcImluc3RhbmNlSWRcIjoxMX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoyMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MixcImNvbHVtbnNHYXBcIjo0LFwibGF5b3V0XCI6XCJjOS0yLWNvbC1lcXVhbFwiLFwidmVydGljYWxBbGlnblwiOlwiY2VudGVyXCJ9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYzktY29sdW1uLWNvbnRhaW5lciBjOS1zY3JvbGwgYzktbGF5b3V0LWNvbHVtbnMtMiBjOS1pcy12ZXJ0aWNhbGx5LWFsaWduZWQtY2VudGVyIGM5LTItY29sLWVxdWFsXCI+PGRpdiBjbGFzcz1cImM5LWxheW91dC1jb2x1bW4td3JhcCBjOS1ibG9jay1sYXlvdXQtY29sdW1uLWdhcC00IGM5LWlzLXJlc3BvbnNpdmUtY29sdW1uXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiTWVldCBTdGFyIFdhcnMgR2lybFwiLFwidGFnTGV2ZWxcIjozLFwiZGlzcGxheUxldmVsXCI6XCI0XCIsXCJvdmVycmlkZVN0eWxlXCI6dHJ1ZX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtbGVmdFwiPjxoMyBjbGFzcz1cImM5LWggaDRcIj5NZWV0IFN0YXIgV2FycyBHaXJsPC9oMz48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOnF1b3RlIC0tPlxuICAgIDxibG9ja3F1b3RlIGNsYXNzPVwid3AtYmxvY2stcXVvdGVcIj48cD5FZmZpY2llbnRseSB1bmxlYXNoIGNyb3NzLW1lZGlhIGluZm9ybWF0aW9uIHdpdGhvdXQgY3Jvc3MtbWVkaWEgdmFsdWUuIFF1aWNrbHkgbWF4aW1pemUgdGltZWx5IGRlbGl2ZXJhYmxlcyBmb3IgcmVhbC10aW1lIHNjaGVtYXMuIDxhIGhyZWY9XCIjXCI+RHJhbWF0aWNhbGx5IG1haW50YWluPC9hPiBjbGlja3MtYW5kLW1vcnRhci48L3A+PGNpdGU+R2lybCB3aG8ncyB0cnlpbmcgdG8gZmluZCBoZXIgZnJpZW5kczwvY2l0ZT48L2Jsb2NrcXVvdGU+XG4gICAgPCEtLSAvd3A6cXVvdGUgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6MzF9IC0tPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MzFweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XG4gICAgPCEtLSAvd3A6c3BhY2VyIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiU2VlIGhvdyB0aGlzIGdpcmwgZm91bmQgaGVyIGZyaWVuZHNcIixcInRhZ0xldmVsXCI6NSxcInR5cGVcIjpcImM5LXNoIHN1YmhlYWQtaFwiLFwidGV4dEFsaWduXCI6XCJjZW50ZXJcIixcIndlaWdodFwiOlwibGlnaHRcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGluZyBjOS1oZWFkaW5nIHRleHQtY2VudGVyXCI+PGg1IGNsYXNzPVwiYzktc2ggZm9udC13ZWlnaHQtbGlnaHRcIj5TZWUgaG93IHRoaXMgZ2lybCBmb3VuZCBoZXIgZnJpZW5kczwvaDU+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpidXR0b24ge1wiYWxpZ25cIjpcImNlbnRlclwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGFsaWduY2VudGVyXCI+PGEgY2xhc3M9XCJ3cC1ibG9jay1idXR0b25fX2xpbmtcIiBocmVmPVwiI1wiPlNFRSBIRVIgU1RPUlk8L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YnV0dG9uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwhLS0gd3A6aW1hZ2Uge1wiaWRcIjo3NDk2LFwiYWxpZ25cIjpcImNlbnRlclwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwid3AtYmxvY2staW1hZ2VcIj48ZmlndXJlIGNsYXNzPVwiYWxpZ25jZW50ZXJcIj48aW1nIHNyYz1cImh0dHA6Ly9ndXRlbmJlcmctc3RvY2stdGVzdC5sb2NhbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9ndXRlbmJlcmctdGVzdGltb25pYWwtMTAyNHgxMDI0LmpwZWdcIiBhbHQ9XCJnaXJsIGluIHRlc2l0bW9uaWFsIGZyb20gV29yZFByZXNzIEd1dGVuYmVyZyBCbG9ja1wiIGNsYXNzPVwid3AtaW1hZ2UtNzQ5NlwiLz48L2ZpZ3VyZT48L2Rpdj5cbiAgICA8IS0tIC93cDppbWFnZSAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY29sdW1uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4tY29udGFpbmVyIC0tPjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9ncmlkIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjEyLFwiY29udGFpbmVySW1nVVJMXCI6XCJodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvY3Jvd2QtZGFuY2luZy5qcGdcIixcImNvbnRhaW5lckh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheUh1ZVwiOlwiIzMxMzEzMVwiLFwib3ZlcmxheU9wYWNpdHlcIjoxMCxcImJsZW5kTW9kZVwiOlwibXVsdGlwbHlcIixcIm1pblNjcmVlbkhlaWdodFwiOjcwLFwiZm9jYWxQb2ludFwiOntcInhcIjowLjIzNTAyMzA0MTQ3NDY1NDQsXCJ5XCI6MC40Mzc1fX0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbCBjOS1ncmlkLWhhcy1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJtaW4taGVpZ2h0Ojcwdmg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ5LDQ5LDQ5LDEpXCI+PGRpdiBjbGFzcz1cImM5LWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjoyMy41MDIzMDQxNDc0NjU0MzglIDQzLjc1JTtiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwOi8vZ3V0ZW5iZXJnLXN0b2NrLXRlc3QubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvY3Jvd2QtZGFuY2luZy5qcGcpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktb3ZlcmxheS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6cmdiYSg0OSw0OSw0OSwxKTttaXgtYmxlbmQtbW9kZTptdWx0aXBseVwiPjwvZGl2PjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIge1wiY29sdW1uc1wiOjIsXCJsYXlvdXRcIjpcImM5LTItY29sLXdpZGVsZWZ0XCIsXCJ2ZXJ0aWNhbEFsaWduXCI6XCJjZW50ZXJcIn0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjOS1jb2x1bW4tY29udGFpbmVyIGM5LXNjcm9sbCBjOS1sYXlvdXQtY29sdW1ucy0yIGM5LWlzLXZlcnRpY2FsbHktYWxpZ25lZC1jZW50ZXIgYzktMi1jb2wtd2lkZWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktbGF5b3V0LWNvbHVtbi13cmFwIGM5LWJsb2NrLWxheW91dC1jb2x1bW4tZ2FwLTIgYzktaXMtcmVzcG9uc2l2ZS1jb2x1bW5cIj48IS0tIHdwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWJsb2NrLWxheW91dC1jb2x1bW4gYzktY29sdW1uIHRleHQtbGVmdFwiPjxkaXYgY2xhc3M9XCJjOS1jb2x1bW4taW5ubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyB7XCJoZWFkaW5nXCI6XCJSZWFkeSB0byBzaWduIHVwP1wiLFwidGFnTGV2ZWxcIjo1LFwiZGlzcGxheUxldmVsXCI6XCIxXCIsXCJ0eXBlXCI6XCJjOS10eGwgZGlzcGxheS1cIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGg1IGNsYXNzPVwiYzktdHhsXCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+UmVhZHkgdG8gc2lnbiB1cD88L2g1PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9oZWFkaW5nIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hlYWRpbmcge1wiaGVhZGluZ1wiOlwiRnJlZSBmb3Igb25lIG1vbnRoXCIsXCJ0YWdMZXZlbFwiOjQsXCJkaXNwbGF5TGV2ZWxcIjpcIjRcIixcInRleHRDb2xvclwiOlwiI2ZmZmZmZlwiLFwid2VpZ2h0XCI6XCJsaWdodFwiLFwib3ZlcnJpZGVTdHlsZVwiOnRydWV9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmcgYzktaGVhZGluZyB0ZXh0LWxlZnRcIj48aDQgY2xhc3M9XCJjOS1oIGg0IGZvbnQtd2VpZ2h0LWxpZ2h0XCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+RnJlZSBmb3Igb25lIG1vbnRoPC9oND48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmJ1dHRvbiB7XCJjdXN0b21UZXh0Q29sb3JcIjpcIiNmZmZmZmZcIixcImNsYXNzTmFtZVwiOlwiaXMtc3R5bGUtb3V0bGluZVwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9uIGlzLXN0eWxlLW91dGxpbmVcIj48YSBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvbl9fbGluayBoYXMtdGV4dC1jb2xvclwiIGhyZWY9XCIjXCIgc3R5bGU9XCJjb2xvcjojZmZmZmZmXCI+R2V0IFN0YXJ0ZWQ8L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YnV0dG9uIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ibG9jay1sYXlvdXQtY29sdW1uIGM5LWNvbHVtbiB0ZXh0LWxlZnRcIj48ZGl2IGNsYXNzPVwiYzktY29sdW1uLWlubm5lclwiPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+YFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9wYWdlLXRlbXBsYXRlcy9zZXJ2aWNlLWxhbmRpbmctcGFnZS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpY29uOiBcIndvcmRwcmVzc1wiLFxuICAgIG1hcmt1cDogYFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2dyaWQge1wiaW5zdGFuY2VJZFwiOjEsXCJtaW5TY3JlZW5IZWlnaHRcIjoxMH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWdyaWQgcC01IGM5LXNjcm9sbFwiIHN0eWxlPVwibWluLWhlaWdodDoxMHZoXCI+PCEtLSB3cDpjOS1ibG9ja3MvY29sdW1uLWNvbnRhaW5lciB7XCJjb2x1bW5zXCI6MSxcImNvbHVtbk1heFdpZHRoXCI6MCxcImxheW91dFwiOlwib25lLWNvbHVtblwifSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGM5LWNvbHVtbi1jb250YWluZXIgYzktc2Nyb2xsIGM5LWxheW91dC1jb2x1bW5zLTEgb25lLWNvbHVtblwiPjxkaXYgY2xhc3M9XCJjOS1sYXlvdXQtY29sdW1uLXdyYXAgYzktYmxvY2stbGF5b3V0LWNvbHVtbi1nYXAtMiBjOS1pcy1yZXNwb25zaXZlLWNvbHVtblwiPjwhLS0gd3A6YzktYmxvY2tzL2NvbHVtbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktYmxvY2stbGF5b3V0LWNvbHVtbiBjOS1jb2x1bW4gdGV4dC1sZWZ0XCI+PGRpdiBjbGFzcz1cImM5LWNvbHVtbi1pbm5uZXJcIj48IS0tIHdwOnBhcmFncmFwaCAtLT5cbiAgICA8cD48L3A+XG4gICAgPCEtLSAvd3A6cGFyYWdyYXBoIC0tPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy9jb2x1bW4gLS0+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2NvbHVtbi1jb250YWluZXIgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2dyaWQgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjF9IC0tPlxuICAgIDxkaXYgaWQ9XCJjOS1jYXJvdXNlbC1pbmRpY2F0b3ItMVwiIGNsYXNzPVwiYzktY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktY2Fyb3VzZWwtaW5kaWNhdG9yLTFcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjowLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjoxLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW1cIj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUge1wiaWRcIjoyLFwic2xpZGVBY3RpdmVcIjowLFwic2xpZGVzXCI6M30gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWNhcm91c2VsLXNsaWRlIGNhcm91c2VsLWl0ZW1cIj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwtc2xpZGUgLS0+PC9kaXY+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj48L2E+PGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2M5LWNhcm91c2VsLWluZGljYXRvci0xXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+PHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPjwvYT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvY2Fyb3VzZWwgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvdG9nZ2xlcyB7XCJpbnN0YW5jZUlkXCI6MH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMgYWNjb3JkaW9uXCIgaWQ9XCJhY2NvcmRpb24tMFwiPjwhLS0gd3A6YzktYmxvY2tzL3RvZ2dsZXMtdG9nZ2xlIHtcInRvZ2dsZU51bWJlclwiOjEsXCJpZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLXRvZ2dsZVwiPjxkaXYgY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0taGVhZGluZ1wiIGlkPVwiYzktdG9nZ2xlcy1oZWFkaW5nMS0wXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2M5LXRvZ2dsZXMtY29sbGFwc2UxLTBcIj48ZGl2IGNsYXNzPVwibWItMFwiPjxzcGFuIGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGUtbGFiZWxcIj5Ub2dnbGUgSXRlbTwvc3Bhbj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb2xsYXBzZVwiPjxzcGFuIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWNvbnRlbnQgY29sbGFwc2VcIiBpZD1cImM5LXRvZ2dsZXMtY29sbGFwc2UxLTBcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb24tMFwiPjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy90b2dnbGVzLXRvZ2dsZSB7XCJ0b2dnbGVOdW1iZXJcIjoyLFwiaWRcIjowfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy10b2dnbGVcIj48ZGl2IGNsYXNzPVwiYzktdG9nZ2xlcy1pdGVtLWhlYWRpbmdcIiBpZD1cImM5LXRvZ2dsZXMtaGVhZGluZzItMFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjOS10b2dnbGVzLWNvbGxhcHNlMi0wXCI+PGRpdiBjbGFzcz1cIm1iLTBcIj48c3BhbiBjbGFzcz1cImM5LXRvZ2dsZXMtdG9nZ2xlLWxhYmVsXCI+VG9nZ2xlIEl0ZW08L3NwYW4+PHNwYW4gY2xhc3M9XCJjOS10b2dnbGVzLWl0ZW0tY29sbGFwc2VcIj48c3BhbiBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImM5LXRvZ2dsZXMtaXRlbS1jb250ZW50IGNvbGxhcHNlXCIgaWQ9XCJjOS10b2dnbGVzLWNvbGxhcHNlMi0wXCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uLTBcIj48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvdG9nZ2xlcy10b2dnbGUgLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3RvZ2dsZXMgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaGVhZGluZyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nIGM5LWhlYWRpbmcgdGV4dC1sZWZ0XCI+PGgxIGNsYXNzPVwiYzktaFwiPjwvaDE+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2hlYWRpbmcgLS0+XG4gICAgXG4gICAgPCEtLSB3cDpjOS1ibG9ja3MvaW1hZ2UtY2Fyb3VzZWwge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxuICAgIDxkaXYgaWQ9XCJjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIGNsYXNzPVwiYzktaW1hZ2UtY2Fyb3VzZWwgY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGRhdGEtaW50ZXJ2YWw9XCI1MDAwXCIgZGF0YS13cmFwPVwidHJ1ZVwiPjxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT48bGkgZGF0YS10YXJnZXQ9XCIjYzktaW1hZ2UtY2Fyb3VzZWwtaW5kaWNhdG9yLTBcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+PGxpIGRhdGEtdGFyZ2V0PVwiI2M5LWltYWdlLWNhcm91c2VsLWluZGljYXRvci0wXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPjwvb2w+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48L2Rpdj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjwvZGl2PjwvZGl2PjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9hPjxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjOS1pbWFnZS1jYXJvdXNlbC1pbmRpY2F0b3ItMFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPjxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj48L2E+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2ltYWdlLWNhcm91c2VsIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2N0YSAtLT5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIiBjbGFzcz1cImM5LWN0YSBjOS1ibG9jay1jdGEgY29udGFpbmVyIHAtNVwiPjxkaXYgY2xhc3M9XCJyb3dcIj48ZGl2IGNsYXNzPVwiYzktY3RhLWNvbnRlbnQgY29sLTEyIGNvbC1tZC04XCI+PGRpdiBjbGFzcz1cImM5LWN0YS10ZXh0XCI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL2N0YSAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9zb2NpYWwtc2hhcmUgLy0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL2hvcml6b250YWwtdGFicyB7XCJpbnN0YW5jZUlkXCI6MH0gLS0+XG4gICAgPGRpdiBjbGFzcz1cImM5LWhvcml6b250YWwtdGFic1wiIGRhdGEtdGFiLWFjdGl2ZT1cInRhYi0xXCI+PHVsIGNsYXNzPVwibmF2IG5hdi10YWJzIGQtZmxleCBuYXYtanVzdGlmaWVkXCIgcm9sZT1cInRhYmxpc3RcIj48bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxhIGRhdGEtdG9nZ2xlPVwidGFiXCIgcm9sZT1cInRhYlwiIGhyZWY9XCIjdGFiLXRhYi0xLTBcIiBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGlkPVwidGFiLWJ1dHRvbi10YWItMVwiPlRhYiAxPC9hPjwvbGk+PGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48YSBkYXRhLXRvZ2dsZT1cInRhYlwiIHJvbGU9XCJ0YWJcIiBocmVmPVwiI3RhYi10YWItMi0wXCIgY2xhc3M9XCJuYXYtbGlua1wiIGlkPVwidGFiLWJ1dHRvbi10YWItMlwiPlRhYiAyPC9hPjwvbGk+PC91bD48ZGl2IGNsYXNzPVwiYzktdGFicy1jb250ZW50IHRhYi1jb250ZW50XCI+PCEtLSB3cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItMVwiLFwidGFiQWN0aXZlXCI6XCJ0YWItMVwiLFwiaWRcIjowfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktaG9yaXpvbnRhbC10YWJzLXRhYiB0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgcm9sZT1cInRhYnBhbmVsXCIgaWQ9XCJ0YWItdGFiLTEtMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi0xXCI+PCEtLSB3cDpwYXJhZ3JhcGggLS0+XG4gICAgPHA+PC9wPlxuICAgIDwhLS0gL3dwOnBhcmFncmFwaCAtLT48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzLXRhYiAtLT5cbiAgICBcbiAgICA8IS0tIHdwOmM5LWJsb2Nrcy9ob3Jpem9udGFsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi0yXCIsXCJ0YWJBY3RpdmVcIjpcInRhYi0xXCIsXCJpZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1ob3Jpem9udGFsLXRhYnMtdGFiIHRhYi1wYW5lIGZhZGVcIiByb2xlPVwidGFicGFuZWxcIiBpZD1cInRhYi10YWItMi0wXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGFiLTJcIj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzLXRhYiAtLT48L2Rpdj48L2Rpdj5cbiAgICA8IS0tIC93cDpjOS1ibG9ja3MvaG9yaXpvbnRhbC10YWJzIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS12ZXJ0aWNhbC10YWJzIHJvd1wiIGRhdGEtdGFiLWFjdGl2ZT1cInRhYi0xXCI+PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tM1wiPjxkaXYgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXCIgcm9sZT1cInRhYmxpc3RcIj48YSBkYXRhLXRvZ2dsZT1cInBpbGxcIiByb2xlPVwidGFiXCIgaHJlZj1cIiN0YWItdGFiLTEtMFwiIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi0xXCI+VGFiIDE8L2E+PGEgZGF0YS10b2dnbGU9XCJwaWxsXCIgcm9sZT1cInRhYlwiIGhyZWY9XCIjdGFiLXRhYi0yLTBcIiBjbGFzcz1cIm5hdi1saW5rXCIgaWQ9XCJ0YWItYnV0dG9uLXRhYi0yXCI+VGFiIDI8L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tOVwiPjxkaXYgY2xhc3M9XCJjOS10YWJzLWNvbnRlbnQgdGFiLWNvbnRlbnRcIj48IS0tIHdwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzLXRhYiB7XCJzbHVnXCI6XCJ0YWItMVwiLFwidGFiQWN0aXZlXCI6XCJ0YWItMVwiLFwiaWRcIjowfSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYzktdmVydGljYWwtdGFicy10YWIgdGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGlkPVwidGFiLXRhYi0xLTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0YWItMVwiPjwhLS0gd3A6cGFyYWdyYXBoIC0tPlxuICAgIDxwPjwvcD5cbiAgICA8IS0tIC93cDpwYXJhZ3JhcGggLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIHtcInNsdWdcIjpcInRhYi0yXCIsXCJ0YWJBY3RpdmVcIjpcInRhYi0xXCIsXCJpZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS12ZXJ0aWNhbC10YWJzLXRhYiB0YWItcGFuZSBmYWRlXCIgcm9sZT1cInRhYnBhbmVsXCIgaWQ9XCJ0YWItdGFiLTItMFwiIGFyaWEtbGFiZWxsZWRieT1cInRhYi0yXCI+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3ZlcnRpY2FsLXRhYnMtdGFiIC0tPjwvZGl2PjwvZGl2PjwvZGl2PlxuICAgIDwhLS0gL3dwOmM5LWJsb2Nrcy92ZXJ0aWNhbC10YWJzIC0tPlxuICAgIFxuICAgIDwhLS0gd3A6YzktYmxvY2tzL3Bvc3RzLWdyaWQge1wiaW5zdGFuY2VJZFwiOjB9IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjOS1wb3N0cy1ncmlkIHAtNSBjOS1zY3JvbGxcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6MjB2aFwiPjwhLS0gd3A6YzktYmxvY2tzL3Bvc3QtZ3JpZCAvLS0+PC9kaXY+XG4gICAgPCEtLSAvd3A6YzktYmxvY2tzL3Bvc3RzLWdyaWQgLS0+XG4gICAgYFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy1tb2RhbC9wYWdlLXRlbXBsYXRlcy90ZXN0LWJsb2Nrcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=