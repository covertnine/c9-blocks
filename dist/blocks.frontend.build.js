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
/******/ 	return __webpack_require__(__webpack_require__.s = 479);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/*! exports provided: GSCache, Animation, Timeline, Tween, PropTween, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, TweenMax, TweenLite, TimelineMax, TimelineLite, default, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, _getProperty, _numExp, _numWithUnitExp, _isString, _isUndefined, _renderComplexString, _relExp, _setDefaults, _removeLinkedListItem, _forEachName, _sortPropTweensByPriority, _colorStringFilter, _replaceRandom, _checkPlugin, _plugins, _ticker, _config, _roundModifier, _round, _missingPlugin, _getSetter, _getCache */
/*! exports used: GSCache, PropTween, _checkPlugin, _colorStringFilter, _config, _forEachName, _getCache, _getProperty, _getSetter, _isString, _isUndefined, _missingPlugin, _numExp, _numWithUnitExp, _plugins, _relExp, _renderComplexString, _replaceRandom, _round, _sortPropTweensByPriority, _ticker, getUnit, gsap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSCache; });
/* unused harmony export Animation */
/* unused harmony export Timeline */
/* unused harmony export Tween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PropTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return gsap; });
/* unused harmony export Power0 */
/* unused harmony export Power1 */
/* unused harmony export Power2 */
/* unused harmony export Power3 */
/* unused harmony export Power4 */
/* unused harmony export Linear */
/* unused harmony export Quad */
/* unused harmony export Cubic */
/* unused harmony export Quart */
/* unused harmony export Quint */
/* unused harmony export Strong */
/* unused harmony export Elastic */
/* unused harmony export Back */
/* unused harmony export SteppedEase */
/* unused harmony export Bounce */
/* unused harmony export Sine */
/* unused harmony export Expo */
/* unused harmony export Circ */
/* unused harmony export TweenMax */
/* unused harmony export TweenLite */
/* unused harmony export TimelineMax */
/* unused harmony export TimelineLite */
/* unused harmony export default */
/* unused harmony export wrap */
/* unused harmony export wrapYoyo */
/* unused harmony export distribute */
/* unused harmony export random */
/* unused harmony export snap */
/* unused harmony export normalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getUnit; });
/* unused harmony export clamp */
/* unused harmony export splitColor */
/* unused harmony export toArray */
/* unused harmony export mapRange */
/* unused harmony export pipe */
/* unused harmony export unitize */
/* unused harmony export interpolate */
/* unused harmony export shuffle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _numExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _numWithUnitExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _renderComplexString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _relExp; });
/* unused harmony export _setDefaults */
/* unused harmony export _removeLinkedListItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _forEachName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _sortPropTweensByPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _colorStringFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _replaceRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _checkPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _config; });
/* unused harmony export _roundModifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _missingPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _getSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _getCache; });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.5.0
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" ? ArrayBuffer.isView : function () {},
    _isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[\.\d]+/,
    _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _parseVars = function _parseVars(params, type, parent) {
  //reads the arguments passed to one of the key methods and figures out if the user is defining things with the OLD/legacy syntax where the duration is the 2nd parameter, and then it adjusts things accordingly and spits back the corrected vars object (with the duration added if necessary, as well as runBackwards or startAt or immediateRender). type 0 = to()/staggerTo(), 1 = from()/staggerFrom(), 2 = fromTo()/staggerFromTo()
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars;

  isLegacy && (vars.duration = params[1]);
  vars.parent = parent;

  if (type) {
    irVars = vars;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return vars;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
  }
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p];
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (!child || child._end > animation._dur || child._start < 0) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  return (tTime /= cycleDuration) && ~~tTime === tTime ? ~~tTime - 1 : ~~tTime;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _round(animation._dp._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _round(position + child._delay);
  child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  timeline._recent = child;
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && prevRatio && !tween._start && tween._zTime > _tinyNum && !tween._dp._lock || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart" ? 0 : 1,
      // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0. Also, if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    prevIteration = _animationCycle(tween._tTime, repeatDelay);

    if (iteration !== prevIteration) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
    // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
    return;
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    suppressEvents || _callback(tween, "onStart");
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (!child._dur && child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (!child._dur && child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _round(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    i = position.charAt(0);

    if (i === "<" || i === ">") {
      return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
    }

    i = position.indexOf("=");

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = +(position.charAt(i - 1) + position.substr(i + 1));
    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value) {
  return (value + "").substr((parseFloat(value) + "").length);
},
    clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()

  return function (raw) {
    return Math.floor(Math.round(parseFloat(raw) / v) * v * p) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min + Math.random() * (max - min)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length === 4) {
        //for shorthand like #9F0
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b;
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback) {
      var i;
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars, time) {
    var parent = vars.parent || _globalTimeline;
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
    parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
    vars.reversed && this.reverse();
    vars.paused && this.paused(true);
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime); //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.


      while (parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause

      _lazySafeRender(this, _totalTime, suppressEvents);
    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detatched parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      this._rDelay = value;
      return _onUpdateTotalDuration(this);
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, time) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars, time) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime !== this._time || prevPaused !== !this._ts) {
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur + 0.0001 : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
      }

      !prevTime && time && !suppressEvents && _callback(this, "onStart");

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    if (!_isNumber(position)) {
      position = _parsePosition(this, position);
    }

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  };

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        tween = Tween.to(tl, _setDefaults(vars, {
      ease: "none",
      lazy: false,
      time: endTime,
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
        tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }));

    return tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._time = this._tTime = this._pTime = 0;
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end)) {
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto",
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  if (!tl) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && prevStartAt.render(-1, true).kill();

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      if (immediateRender) {
        if (time > 0) {
          autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        } else if (dur && !(time < 0 && prevStartAt)) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0)); //Also make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, time, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      time.duration = vars;
      vars = time;
      time = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = _this3.parent,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = _assertThisInitialized(_this3);

      if (keyframes) {
        _setDefaults(tl.vars.defaults, {
          ease: "none"
        });

        keyframes.forEach(function (frame) {
          return tl.to(parsedTargets, frame, ">");
        });
      } else {
        l = parsedTargets.length;
        staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = {};

          for (p in vars) {
            if (_staggerPropsToSkip.indexOf(p) < 0) {
              copy[p] = vars[p];
            }
          }

          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    parent && _postAddChecks(parent, _assertThisInitialized(_this3));

    if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;
        time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      time && !prevTime && !suppressEvents && _callback(this, "onStart");
      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = 0;

      if (this.parent) {
        return _interrupt(this);
      }
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweenng, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return new Tween(targets, _parseVars(arguments, 1));
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return new Tween(targets, _parseVars(arguments, 2));
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref) {
    var name = _ref.name,
        effect = _ref.effect,
        plugins = _ref.plugins,
        defaults = _ref.defaults,
        extendTimeline = _ref.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.5.0";
_coreReady = 1;

if (_windowExists()) {
  _wake();
}

var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ 43:
/*!********************************************************!*\
  !*** ./src/components/animations-panel/utils/index.js ***!
  \********************************************************/
/*! exports provided: animateOptions, animateConfigs, createCustomConfig, initAnimate, restartAnimate */
/*! exports used: animateOptions, createCustomConfig, initAnimate, restartAnimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animateOptions; });
/* unused harmony export animateConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createCustomConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return restartAnimate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__(/*! gsap */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__ = __webpack_require__(/*! gsap/ScrollTrigger */ 45);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Utilities for initiating gsap
 */




if (typeof window !== "undefined") {
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].registerPlugin(__WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__["a" /* ScrollTrigger */]);
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].core.globals("ScrollTrigger", __WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__["a" /* ScrollTrigger */]);
}

var DEFAULT_SPEED = 2;
var SCROLLER = ".interface-interface-skeleton__content";

var animateOptions = [{ value: null, label: "Select animation", disabled: true }, {
	value: "fade",
	label: "Fade"
}, {
	value: "fadeUp",
	label: "Fade Up"
}, {
	value: "fadeDown",
	label: "Fade Down"
}, {
	value: "fadeLeft",
	label: "Fade Left"
}, {
	value: "fadeRight",
	label: "Fade Right"
}];

var animateConfigs = {
	fade: [{
		opacity: 0
	}, { opacity: 1, duration: DEFAULT_SPEED }],
	fadeUp: [{
		opacity: 0,
		y: 100
	}, { opacity: 1, duration: DEFAULT_SPEED, y: 0 }],
	fadeDown: [{
		opacity: 0,
		y: -100
	}, { opacity: 1, duration: DEFAULT_SPEED, y: 0 }],
	fadeLeft: [{
		opacity: 0,
		x: -100
	}, { opacity: 1, duration: DEFAULT_SPEED, x: 0 }],
	fadeRight: [{
		opacity: 0,
		x: 100
	}, { opacity: 1, duration: DEFAULT_SPEED, x: 0 }]
};

var createCustomConfig = function createCustomConfig(animateVal, animateDelay, animateSpeed) {
	return [animateConfigs[animateVal][0], Object.assign({}, animateConfigs[animateVal][1], {
		delay: animateDelay / 1000,
		duration: animateSpeed / 1000
	})];
};

var initAnimate = function initAnimate(target, enableAnimate, animateVal, animateDelay, animateSpeed, animateScrub) {
	var customConfig = createCustomConfig(animateVal, animateDelay, animateSpeed);
	customConfig = editorCustomConfigModify(customConfig, target, animateScrub);

	if (enableAnimate) {
		__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].fromTo.apply(__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */], [target].concat(_toConsumableArray(customConfig)));
	}
};

var editorCustomConfigModify = function editorCustomConfigModify(config, target, animateScrub) {
	return [config[0], Object.assign({}, config[1], {
		scrollTrigger: {
			id: target,
			trigger: target,
			scroller: SCROLLER,
			markers: true,
			scrub: animateScrub
		}
	})];
};

var restartAnimate = function restartAnimate(target, animateVal, animateDelay, animateSpeed, animateScrub, enableAnimate) {
	var customConfig = createCustomConfig(animateVal, animateDelay, animateSpeed, animateScrub);
	__WEBPACK_IMPORTED_MODULE_1_gsap_ScrollTrigger__["a" /* ScrollTrigger */].getAll().forEach(function (st) {
		if (st.vars.id === target) {
			st.kill();
		}
	});
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].set(target, { clearProps: true });

	if (!enableAnimate) {
		return;
	}

	if (animateScrub) {
		customConfig = editorCustomConfigModify(customConfig, target, animateScrub);
	}
	__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */].fromTo.apply(__WEBPACK_IMPORTED_MODULE_0_gsap__["a" /* gsap */], [target].concat(_toConsumableArray(customConfig)));
};

/***/ }),

/***/ 44:
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/*! exports provided: gsap, default, CSSPlugin, TweenMax, TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ */
/*! exports used: gsap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gsapWithCSS; });
/* unused harmony export default */
/* unused harmony export TweenMax */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__ = __webpack_require__(/*! ./gsap-core.js */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__ = __webpack_require__(/*! ./CSSPlugin.js */ 58);
/* unused harmony reexport CSSPlugin */
/* unused harmony reexport TweenLite */
/* unused harmony reexport TimelineMax */
/* unused harmony reexport TimelineLite */
/* unused harmony reexport Power0 */
/* unused harmony reexport Power1 */
/* unused harmony reexport Power2 */
/* unused harmony reexport Power3 */
/* unused harmony reexport Power4 */
/* unused harmony reexport Linear */
/* unused harmony reexport Quad */
/* unused harmony reexport Cubic */
/* unused harmony reexport Quart */
/* unused harmony reexport Quint */
/* unused harmony reexport Strong */
/* unused harmony reexport Elastic */
/* unused harmony reexport Back */
/* unused harmony reexport SteppedEase */
/* unused harmony reexport Bounce */
/* unused harmony reexport Sine */
/* unused harmony reexport Expo */
/* unused harmony reexport Circ */


var gsapWithCSS = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */].registerPlugin(__WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__["a" /* CSSPlugin */]) || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */],
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ 45:
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/*! exports provided: ScrollTrigger, default */
/*! exports used: ScrollTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTrigger; });
/* unused harmony export default */
/*!
 * ScrollTrigger 3.5.0
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _raf,
    _request,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _proxies = [],
    _scrollers = [],
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 1,
    _passThrough = function _passThrough(v) {
  return v;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
    return arguments.length ? element[s] = value : element[s];
  }));
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
  var d = _ref2.d,
      d2 = _ref2.d2,
      a = _ref2.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref3) {
  var s = _ref3.s,
      d2 = _ref3.d2,
      d = _ref3.d,
      a = _ref3.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _callIfFunc = function _callIfFunc(value) {
  return _isFunction(value) && value();
},
    _combineFunc = function _combineFunc(f1, f2) {
  return function () {
    var result1 = _callIfFunc(f1),
        result2 = _callIfFunc(f2);

    return function () {
      _callIfFunc(result1);

      _callIfFunc(result2);
    };
  };
},
    _abs = Math.abs,
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _horizontal = {
  s: _scrollLeft,
  p: _left,
  p2: _Left,
  os: _right,
  os2: _Right,
  d: _width,
  d2: _Width,
  a: "x",
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  }
},
    _vertical = {
  s: _scrollTop,
  p: _top,
  p2: _Top,
  os: _bottom,
  os2: _Bottom,
  d: _height,
  d2: _Height,
  a: "y",
  op: _horizontal,
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  }
},
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
},
    // if the element already has position: absolute, leave that, otherwise make it position: relative
_setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    //_isInViewport = element => (element = _getBounds(element)) && !(element.top > (_win.innerHeight || _docEl.clientHeight) || element.bottom < 0 || element.left > (_win.innerWidth || _docEl.clientWidth) || element.right < 0) && element,
_getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref4) {
  var d2 = _ref4.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabels = function _getLabels(animation) {
  return function (value) {
    var a = [],
        labels = animation.labels,
        duration = animation.duration(),
        p;

    for (p in labels) {
      a.push(labels[p] / duration);
    }

    return gsap.utils.snap(a, value);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func) {
  return element.addEventListener(type, func, {
    passive: true
  });
},
    _removeListener = function _removeListener(element, type, func) {
  return element.removeEventListener(type, func);
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (relative) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
  var startColor = _ref5.startColor,
      endColor = _ref5.endColor,
      fontSize = _ref5.fontSize,
      indent = _ref5.indent,
      fontWeight = _ref5.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type);
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.insertBefore(e, parent.children[0]);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? 1 : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start;
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _sync = function _sync() {
  return _request || (_request = _raf(_updateAll));
},
    _onScroll = function _onScroll() {
  if (!_request) {
    _request = _raf(_updateAll);
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _onResize = function _onResize() {
  return !_refreshing && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
_lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
  var tick = gsap.ticker.frame,
      matches = [],
      i = 0;

  if (_lastMediaTick !== tick || _startup) {
    _revertAll();

    for (; i < _media.length; i += 3) {
      _win.matchMedia(_media[i]).matches ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2](); // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
    }

    _revertRecorded(); // in case killing/reverting any of the animations actually added inline styles back.


    for (i = 0; i < matches.length; i++) {
      _creatingMedia = _media[matches[i]];
      _media[matches[i] + 2] = _media[matches[i] + 1](e);
    }

    _creatingMedia = 0;

    _refreshAll(0, 1);

    _lastMediaTick = tick;

    _dispatch("matchMedia");
  }
},
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 4) {
    if (!media || _savedStyles[i + 3] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i + 2].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll()); // record the scroll positions so that in each refresh() we can ensure that it doesn't shift. Remember, pinning can make things change around, especially if the same element is pinned multiple times. If one was already recorded, don't re-record because unpinning may have occurred and made it shorter.

        trigger.revert();
      }
    }
  }

  _revertRecorded(media);

  media || _dispatch("revert");
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  for (_i = 0; _i < _triggers.length; _i++) {
    _triggers[_i].refresh();
  }

  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _i = _triggers.length;

  while (_i--) {
    _triggers[_i].scroll.rec = 0;
  }

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _updateAll = function _updateAll() {
  var l = _triggers.length,
      time = _getTime(),
      recordVelocity = time - _time1 >= 50,
      scroll = l && _triggers[0].scroll();

  _direction = _lastScroll > scroll ? -1 : 1;
  _lastScroll = scroll;

  if (recordVelocity) {
    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
      _lastScrollTime = 0;

      _dispatch("scrollEnd");
    }

    _time2 = _time1;
    _time1 = time;
  }

  if (_direction < 0) {
    _i = l;

    while (_i--) {
      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    }

    _direction = 1;
  } else {
    for (_i = 0; _i < l; _i++) {
      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    }
  }

  _request = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = cs[_width];
    pinStyle[_height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));

    var element = _toArray(trigger)[0] || _body,
        bounds = _getBounds(element) || {},
        offsets = value.split(" "),
        localOffset,
        globalOffset,
        display;

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    scrollerMax = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  return Math.round(value);
},
    _prefixExp = /(?:webkit|moz|length|cssText)/i,
    _reparent = function _reparent(element, parent) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }
    } else {
      style.cssText = element._stOrig;
    }

    parent.appendChild(element);
  }
},
    // returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  lastScroll1,
      lastScroll2,
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    tween && tween.kill();
    lastScroll1 = initialValue;
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function (value) {
      value = getScroll();

      if (value !== lastScroll1 && value !== lastScroll2) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that!
        tween.kill();
        getTween.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }

      lastScroll2 = lastScroll1;
      return lastScroll1 = Math.round(value);
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;
  return getTween;
};

_horizontal.op = _vertical;
var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = 0;
    this.vars && this.kill(1); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var direction = vars.horizontal ? _horizontal : _vertical,
        _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        isToggle = !scrub && scrub !== 0,
        scroller = _toArray(vars.scroller || _win)[0],
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        tweenTo,
        pinCache,
        snapFunc,
        isReverted,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevProgress,
        prevScroll,
        prevAnimProgress;

    self.media = _creatingMedia;
    anticipatePin *= 45;

    _triggers.push(self);

    self.scroller = scroller;
    self.scroll = _getScrollFunc(scroller, direction);
    scroll1 = self.scroll();
    self.vars = vars;
    animation = animation || vars.animation;
    "refreshPriority" in vars && (_sort = 1);
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      scrubSmooth = _isNumber(scrub) && scrub;
      scrubSmooth && (scrubTween = gsap.to(animation, {
        ease: "power3",
        duration: scrubSmooth,
        onComplete: function onComplete() {
          return onScrubComplete && onScrubComplete(self);
        }
      }));
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      _isObject(snap) || (snap = {
        snapTo: snap
      });
      gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getLabels(animation) : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = _abs(velocity / 2) * velocity / 0.185,
              naturalEnd = totalProgress + change1,
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              scroll = self.scroll(),
              endScroll = Math.round(start + endValue * change),
              tween = tweenTo.tween;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: Math.abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onComplete: function onComplete() {
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
          }
        } else if (self.isActive) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _toArray(trigger || pin)[0];
    pin = pin === true ? trigger : _toArray(pin)[0];
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default.

      self.pin = pin;
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        pinCache.spacer = spacer = _doc.createElement("div");
        spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

      if (!useFixedPosition) {
        _makePositionable(scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    self.revert = function (revert) {
      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== isReverted) {
        if (r) {
          prevScroll = Math.max(self.scroll(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r); // make sure the pin is back in its original position so that all the measurements are correct.

        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        isReverted = r;
      }
    };

    self.refresh = function (soft) {
      if (_refreshing || !self.enabled) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      _refreshing = 1;
      scrubTween && scrubTween.kill();
      invalidateOnRefresh && animation && animation.progress(0).invalidate();
      isReverted || self.revert();

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = _maxScroll(scroller, direction),
          offset = 0,
          otherPinOffset = 0,
          parsedEnd = vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = vars.start || (pin || !trigger ? "0 0" : "0 100%"),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll;

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curPin = _triggers[i].pin;
        curPin && (curPin === trigger || curPin === pin) && _triggers[i].revert();
      }

      start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
      change = end - start || (start -= 0.01) && 0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush < start) {
          cs = curTrigger.end - curTrigger.start;
          curPin === trigger && (offset += cs);
          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = self.scroll(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          useFixedPosition && self.scroll(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          animation.progress(1, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.progress(0, true);
        } else {
          pinChange = change;
        }
      } else if (trigger && self.scroll()) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      for (i = 0; i < triggerIndex; i++) {
        // make sure we revert from first to last to make sure things reach their end state properly
        curTrigger = _triggers[i].pin;
        curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
      }

      self.start = start;
      self.end = end;
      scroll1 = scroll2 = self.scroll(); // reset velocity

      scroll1 < prevScroll && self.scroll(prevScroll);
      self.revert(false);
      _refreshing = 0;
      prevAnimProgress && isToggle && animation.progress(prevAnimProgress, true);

      if (prevProgress !== self.progress) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        scrubTween && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = prevProgress;
        self.update();
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      onRefresh && onRefresh(self);
    };

    self.getVelocity = function () {
      return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.update = function (reset, recordVelocity) {
      var scroll = self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween.vars.totalProgress = clipped;
            scrubTween.invalidate().restart();
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(pinStart + pinChange * clipped);
          } else if (stateChanged) {
            action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || action)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                pin.style.top = bounds.top + (direction === _vertical ? _offset : 0) + _px;
                pin.style.left = bounds.left + (direction === _vertical ? 0 : _offset) + _px;
              }

              _reparent(pin, !reset && (isActive || action) ? _body : spacer);
            }

            _setState(isActive || action ? pinActiveState : pinState);

            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            if (animation && (action === "complete" || action === "reset" || action in animation)) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && onToggle(self);
            callbacks[toggleState] && callbacks[toggleState](self);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && callbacks[toggleState](self);
            }
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(scroll);
      }
    };

    self.enable = function () {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        _addListener(scroller, "scroll", _onScroll);

        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
        !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
          return start || end || self.refresh();
        }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick.
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill();
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      _triggers.splice(i, 1);

      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode.removeChild(m);
      });
      pinCache && (pinCache.uncache = 1);
    };

    self.enable();
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();

      if (_windowExists() && window.document) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
      }

      if (gsap) {
        _toArray = gsap.utils.toArray;
        _clamp = gsap.utils.clamp;
        gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

        if (_body) {
          _raf = _win.requestAnimationFrame || function (f) {
            return setTimeout(f, 16);
          };

          _addListener(_win, "mousewheel", _onScroll);

          _root = [_win, _doc, _docEl, _body];

          _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


          var bodyStyle = _body.style,
              border = bodyStyle.borderTop,
              bounds;
          bodyStyle.borderTop = "1px solid #000"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

          bounds = _getBounds(_body);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
          _syncInterval = setInterval(_sync, 200);
          gsap.delayedCall(0.5, function () {
            return _startup = 0;
          });

          _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


          _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
            return _pointerIsDown = 1;
          });

          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
            return _pointerIsDown = 0;
          });

          _transformProp = gsap.utils.checkPrefix("transform");

          _stateProps.push(_transformProp);

          _coreInitted = _getTime();
          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc, "visibilitychange", function () {
            var w = _win.innerWidth,
                h = _win.innerHeight;

            if (_doc.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
            return _lastScrollTime || _refreshAll();
          }, _win, "resize", _onResize];

          _iterateAutoRefresh(_addListener);
        }
      }
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    for (var p in config) {
      _defaults[p] = config[p];
    }
  };

  ScrollTrigger.kill = function kill() {
    _enabled = 0;

    _triggers.slice(0).forEach(function (trigger) {
      return trigger.kill(1);
    });
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "autoRefreshEvents" in vars && (_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none"));
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _toArray(target)[0];

    _isViewport(t) ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
  };

  ScrollTrigger.matchMedia = function matchMedia(vars) {
    var mq, p, i, func, result;

    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;

      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);

        if (mq) {
          mq.matches && (result = func());

          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;

            _media.push(p, func, result);

            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }

      _creatingMedia = 0;
    }

    return _media;
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 3);
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.5.0";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    var i = _savedStyles.indexOf(target);

    i >= 0 && _savedStyles.splice(i, 4);

    _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : _refreshAll(true);
};

ScrollTrigger.update = _updateAll;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.slice(0);
};

ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ 479:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__ = __webpack_require__(/*! ./blocks/block-grid-container/frontend.js */ 480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_block_grid_container_frontend_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_animations_panel_frontend_js__ = __webpack_require__(/*! ./components/animations-panel/frontend.js */ 481);
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

/***/ 480:
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

/***/ 481:
/*!*****************************************************!*\
  !*** ./src/components/animations-panel/frontend.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ./utils */ 43);
/**
 * Animations Frontend
 */



document.addEventListener("DOMContentLoaded", function () {
	// simple timeline setups
	var gsap = window.gsap;
	var ScrollTrigger = window.ScrollTrigger;
	// register plugin
	gsap.registerPlugin(ScrollTrigger);

	var animateTargets = document.querySelectorAll("[data-c9-animate]");
	console.log(animateTargets);

	//setup gsap
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = animateTargets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var element = _step.value;

			var animateVal = element.dataset.c9Animate;
			var animateDelay = element.dataset.c9AnimateDelay;
			var animateSpeed = element.dataset.c9AnimateSpeed;
			var animateScrub = element.dataset.c9AnimateScrub;
			// console.log(animateVal, animateDelay, animateSpeed);
			var customConfig = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createCustomConfig */])(animateVal, animateDelay, animateSpeed);
			gsap.fromTo(element, customConfig[0], Object.assign({}, customConfig[1], {
				scrollTrigger: {
					trigger: element,
					scrub: animateScrub
				}
			}));
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
});

/***/ }),

/***/ 58:
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/*! exports provided: CSSPlugin, default, _getBBox, _createElement, checkPrefix */
/*! exports used: CSSPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSPlugin; });
/* unused harmony export default */
/* unused harmony export _getBBox */
/* unused harmony export _createElement */
/* unused harmony export checkPrefix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__ = __webpack_require__(/*! ./gsap-core.js */ 33);
/*!
 * CSSPlugin 3.5.0
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if (toPercent && (_transformProps[property] || ~property.indexOf("adius"))) {
    //transforms and borderRadius are relative to the size of the element itself!
    return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(curValue / (isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty]) * amount);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["u" /* _ticker */].time) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["g" /* _getCache */])(parent);
      cache.time = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["u" /* _ticker */].time;
      cache.width = parent[measureProperty];
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["h" /* _getProperty */])(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, target.style, prop, 0, 1, __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["q" /* _renderComplexString */]),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["d" /* _colorStringFilter */])(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */]) || [];
  endValues = end.match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */]) || [];

  if (endValues.length) {
    while (result = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */].exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n" /* _numWithUnitExp */].lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  if (__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["p" /* _relExp */].test(end)) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["m" /* _numExp */]).map(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */]);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["g" /* _getCache */])(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* GSCache */](target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = !cache.uncache && target.getAttribute("data-svg-origin");

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(Math.sqrt(a * a + b * b + c * c));
      scaleY = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = ((cache.xPercent = x && Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0) ? 0 : x) + px;
  cache.y = ((cache.yPercent = y && Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0) ? 0 : y) + px;
  cache.z = z + px;
  cache.scaleX = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(scaleX);
  cache.scaleY = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(scaleY);
  cache.rotation = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(rotation) + deg;
  cache.rotationX = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(rotationX) + deg;
  cache.rotationY = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v" /* getUnit */])(start);
  return Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a11);
    a21 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a21);
    a12 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a12);
    a22 = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(tx + xPercent / 100 * temp.width);
    ty = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s" /* _round */])(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);

  if (forceCSS) {
    //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
    target.style[_transformProp] = temp;
  }
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["j" /* _isString */])(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var style = _tempDivStyler.style,
      startCache = target._gsap,
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;
  style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;"; //%-based translations will fail unless we set the width/height to match the original target (and padding/borders can affect it)

  style[_transformProp] = transforms;

  _doc.body.appendChild(_tempDivStyler);

  endCache = _parseTransform(_tempDivStyler, 1);

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v" /* getUnit */])(startValue);
      endUnit = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v" /* getUnit */])(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _doc.body.removeChild(_tempDivStyler);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["o" /* _plugins */][p] && Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["c" /* _checkPlugin */])(p, vars, tween, index, target, targets)) {
        //plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["r" /* _replaceRandom */])(endValue);
      }

      if (specialProp) {
        if (specialProp(this, target, p, endValue, tween)) {
          hasPriority = 1;
        }
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        this.add(style, "setProperty", getComputedStyle(target).getPropertyValue(p) + "", endValue + "", index, targets, 0, 0, p);
      } else if (type !== "undefined") {
        startValue = _get(target, p);
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform || _parseTransform(target); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (endValue + "").substr((endNum + "").length) || (p in __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units ? __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[p] : startUnit);

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, p, startValue, endUnit);
          }

          this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b" /* PropTween */](this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, endUnit === "px" && vars.autoRound !== false && !isTransformRelated ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit) {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, target[p], endValue, index, targets);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["l" /* _missingPlugin */])(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["t" /* _sortPropTweensByPriority */])(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["k" /* _isUndefined */])(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["i" /* _getSetter */])(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */].utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])(rotation, function (name) {
    __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

Object(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f" /* _forEachName */])("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e" /* _config */].units[name] = "px";
});

__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* gsap */].registerPlugin(CSSPlugin);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODg0YWNlZTFkNDEyZDdiOGQ1NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FuaW1hdGlvbnMtcGFuZWwvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvU2Nyb2xsVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25zLXBhbmVsL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nc2FwL0NTU1BsdWdpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiY29yZSIsImdsb2JhbHMiLCJERUZBVUxUX1NQRUVEIiwiU0NST0xMRVIiLCJhbmltYXRlT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJkaXNhYmxlZCIsImFuaW1hdGVDb25maWdzIiwiZmFkZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImZhZGVVcCIsInkiLCJmYWRlRG93biIsImZhZGVMZWZ0IiwieCIsImZhZGVSaWdodCIsImNyZWF0ZUN1c3RvbUNvbmZpZyIsImFuaW1hdGVWYWwiLCJhbmltYXRlRGVsYXkiLCJhbmltYXRlU3BlZWQiLCJkZWxheSIsImluaXRBbmltYXRlIiwidGFyZ2V0IiwiZW5hYmxlQW5pbWF0ZSIsImFuaW1hdGVTY3J1YiIsImN1c3RvbUNvbmZpZyIsImVkaXRvckN1c3RvbUNvbmZpZ01vZGlmeSIsImZyb21UbyIsImNvbmZpZyIsInNjcm9sbFRyaWdnZXIiLCJpZCIsInRyaWdnZXIiLCJzY3JvbGxlciIsIm1hcmtlcnMiLCJzY3J1YiIsInJlc3RhcnRBbmltYXRlIiwiZ2V0QWxsIiwiZm9yRWFjaCIsInN0IiwidmFycyIsImtpbGwiLCJzZXQiLCJjbGVhclByb3BzIiwicmVhZHlZb3V0dWJlIiwicGxheWVySUQiLCJ2aWRlb0lEIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsImRpc2FibGVrYiIsImF1dG9oaWRlIiwid21vZGUiLCJoZCIsImVuYWJsZWpzYXBpIiwibG9vcCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJyZWwiLCJtb2Rlc3RicmFuZGluZyIsInBsYXlsaXN0IiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5Iiwic2V0VGltZW91dCIsImV2ZW50IiwibXV0ZSIsInBsYXlWaWRlbyIsImYiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbWJlZHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsIiQiLCJqUXVlcnkiLCJlYWNoIiwic2VsZiIsImNoZWNrIiwib24iLCJjc3MiLCJhbmltYXRlVGFyZ2V0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsImRhdGFzZXQiLCJjOUFuaW1hdGUiLCJjOUFuaW1hdGVEZWxheSIsImM5QW5pbWF0ZVNwZWVkIiwiYzlBbmltYXRlU2NydWIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFLHFFQUFxRTs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOzs7QUFHdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNMQUFzTDtBQUN0TDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5R0FBeUc7QUFDekc7O0FBRUE7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RTs7QUFFNUUsaUNBQWlDO0FBQ2pDLE9BQU87QUFDUDs7QUFFQSw2QkFBNkI7O0FBRTdCLDhNQUE4TTtBQUM5TTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRjs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrRkFBK0Y7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GOztBQUVuRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdIQUF3SDs7QUFFeEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQiw4Q0FBOEM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNB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SDtBQUNBLDRIQUE0SCxZQUFZO0FBQ3hJOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwySUFBMkk7O0FBRTNJLGdJQUFnSTs7QUFFaEk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQThEOztBQUU5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDRHQUE0Rzs7QUFFNUc7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxHQUFHOztBQUVKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRUFBMEUsZUFBZTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHVEQUF1RDs7QUFFdkQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxHQUFHO0FBQ0g7QUFDQSwwQ0FBMEM7QUFDMUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsRUFBRTs7O0FBR2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0s7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNJQUFzSTs7QUFFdkk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21KO0FBQzJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsc0g5UDs7OztBQUlBO0FBQ0E7O0FBRUEsSUFBSSxPQUFPQSxNQUFQLGdCQUFKLEVBQW1DO0FBQ2xDQyxtREFBSUEsQ0FBQ0MsY0FBTCxDQUFvQkMseUVBQXBCO0FBQ0FGLG1EQUFJQSxDQUFDRyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsZUFBbEIsRUFBbUNGLHlFQUFuQztBQUNBOztBQUVELElBQU1HLGdCQUFnQixDQUF0QjtBQUNBLElBQU1DLFdBQVcsd0NBQWpCOztBQUVPLElBQU1DLGlCQUFpQixDQUM3QixFQUFFQyxPQUFPLElBQVQsRUFBZUMsT0FBTyxrQkFBdEIsRUFBMENDLFVBQVUsSUFBcEQsRUFENkIsRUFFN0I7QUFDQ0YsUUFBTyxNQURSO0FBRUNDLFFBQU87QUFGUixDQUY2QixFQU03QjtBQUNDRCxRQUFPLFFBRFI7QUFFQ0MsUUFBTztBQUZSLENBTjZCLEVBVTdCO0FBQ0NELFFBQU8sVUFEUjtBQUVDQyxRQUFPO0FBRlIsQ0FWNkIsRUFjN0I7QUFDQ0QsUUFBTyxVQURSO0FBRUNDLFFBQU87QUFGUixDQWQ2QixFQWtCN0I7QUFDQ0QsUUFBTyxXQURSO0FBRUNDLFFBQU87QUFGUixDQWxCNkIsQ0FBdkI7O0FBd0JBLElBQU1FLGlCQUFpQjtBQUM3QkMsT0FBTSxDQUNMO0FBQ0NDLFdBQVM7QUFEVixFQURLLEVBSUwsRUFBRUEsU0FBUyxDQUFYLEVBQWNDLFVBQVVULGFBQXhCLEVBSkssQ0FEdUI7QUFPN0JVLFNBQVEsQ0FDUDtBQUNDRixXQUFTLENBRFY7QUFFQ0csS0FBRztBQUZKLEVBRE8sRUFLUCxFQUFFSCxTQUFTLENBQVgsRUFBY0MsVUFBVVQsYUFBeEIsRUFBdUNXLEdBQUcsQ0FBMUMsRUFMTyxDQVBxQjtBQWM3QkMsV0FBVSxDQUNUO0FBQ0NKLFdBQVMsQ0FEVjtBQUVDRyxLQUFHLENBQUM7QUFGTCxFQURTLEVBS1QsRUFBRUgsU0FBUyxDQUFYLEVBQWNDLFVBQVVULGFBQXhCLEVBQXVDVyxHQUFHLENBQTFDLEVBTFMsQ0FkbUI7QUFxQjdCRSxXQUFVLENBQ1Q7QUFDQ0wsV0FBUyxDQURWO0FBRUNNLEtBQUcsQ0FBQztBQUZMLEVBRFMsRUFLVCxFQUFFTixTQUFTLENBQVgsRUFBY0MsVUFBVVQsYUFBeEIsRUFBdUNjLEdBQUcsQ0FBMUMsRUFMUyxDQXJCbUI7QUE0QjdCQyxZQUFXLENBQ1Y7QUFDQ1AsV0FBUyxDQURWO0FBRUNNLEtBQUc7QUFGSixFQURVLEVBS1YsRUFBRU4sU0FBUyxDQUFYLEVBQWNDLFVBQVVULGFBQXhCLEVBQXVDYyxHQUFHLENBQTFDLEVBTFU7QUE1QmtCLENBQXZCOztBQXFDQSxJQUFNRSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsRUFBMkJDLFlBQTNCLEVBQTRDO0FBQzdFLFFBQU8sQ0FDTmIsZUFBZVcsVUFBZixFQUEyQixDQUEzQixDQURNLG9CQUdGWCxlQUFlVyxVQUFmLEVBQTJCLENBQTNCLENBSEU7QUFJTEcsU0FBT0YsZUFBZSxJQUpqQjtBQUtMVCxZQUFVVSxlQUFlO0FBTHBCLElBQVA7QUFRQSxDQVRNOztBQVdBLElBQU1FLGNBQWMsU0FBZEEsV0FBYyxDQUMxQkMsTUFEMEIsRUFFMUJDLGFBRjBCLEVBRzFCTixVQUgwQixFQUkxQkMsWUFKMEIsRUFLMUJDLFlBTDBCLEVBTTFCSyxZQU4wQixFQU90QjtBQUNKLEtBQUlDLGVBQWVULG1CQUFtQkMsVUFBbkIsRUFBK0JDLFlBQS9CLEVBQTZDQyxZQUE3QyxDQUFuQjtBQUNBTSxnQkFBZUMseUJBQXlCRCxZQUF6QixFQUF1Q0gsTUFBdkMsRUFBK0NFLFlBQS9DLENBQWY7O0FBRUEsS0FBSUQsYUFBSixFQUFtQjtBQUNsQjVCLG9EQUFJQSxDQUFDZ0MsTUFBTCx5REFBSSxHQUFRTCxNQUFaLDRCQUF1QkcsWUFBdkI7QUFDQTtBQUNELENBZE07O0FBZ0JQLElBQU1DLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNFLE1BQUQsRUFBU04sTUFBVCxFQUFpQkUsWUFBakIsRUFBa0M7QUFDbEUsUUFBTyxDQUNOSSxPQUFPLENBQVAsQ0FETSxvQkFHRkEsT0FBTyxDQUFQLENBSEU7QUFJTEMsaUJBQWU7QUFDZEMsT0FBSVIsTUFEVTtBQUVkUyxZQUFTVCxNQUZLO0FBR2RVLGFBQVUvQixRQUhJO0FBSWRnQyxZQUFTLElBSks7QUFLZEMsVUFBT1Y7QUFMTztBQUpWLElBQVA7QUFhQSxDQWREOztBQWdCTyxJQUFNVyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQzdCYixNQUQ2QixFQUU3QkwsVUFGNkIsRUFHN0JDLFlBSDZCLEVBSTdCQyxZQUo2QixFQUs3QkssWUFMNkIsRUFNN0JELGFBTjZCLEVBT3pCO0FBQ0osS0FBSUUsZUFBZVQsbUJBQ2xCQyxVQURrQixFQUVsQkMsWUFGa0IsRUFHbEJDLFlBSGtCLEVBSWxCSyxZQUprQixDQUFuQjtBQU1BM0IsMEVBQWFBLENBQUN1QyxNQUFkLEdBQXVCQyxPQUF2QixDQUErQixjQUFNO0FBQ3BDLE1BQUlDLEdBQUdDLElBQUgsQ0FBUVQsRUFBUixLQUFlUixNQUFuQixFQUEyQjtBQUMxQmdCLE1BQUdFLElBQUg7QUFDQTtBQUNELEVBSkQ7QUFLQTdDLG1EQUFJQSxDQUFDOEMsR0FBTCxDQUFTbkIsTUFBVCxFQUFpQixFQUFFb0IsWUFBWSxJQUFkLEVBQWpCOztBQUVBLEtBQUksQ0FBQ25CLGFBQUwsRUFBb0I7QUFDbkI7QUFDQTs7QUFFRCxLQUFJQyxZQUFKLEVBQWtCO0FBQ2pCQyxpQkFBZUMseUJBQXlCRCxZQUF6QixFQUF1Q0gsTUFBdkMsRUFBK0NFLFlBQS9DLENBQWY7QUFDQTtBQUNEN0IsbURBQUlBLENBQUNnQyxNQUFMLHlEQUFJLEdBQVFMLE1BQVosNEJBQXVCRyxZQUF2QjtBQUNBLENBN0JNLEM7Ozs7Ozs7Ozs7Ozs7QUN2SFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFOO0FBQzFLO0FBQzNDLGtCQUFrQiwyREFBSSxnQkFBZ0IsZ0VBQVMsS0FBSywyREFBSTtBQUN4RDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyQkFBMkIsb0JBQW9CLCtCQUErQixvQkFBb0IsbUJBQW1CLDZCQUE2QixhQUFhLGdCQUFnQixlQUFlLG1CQUFtQjs7QUFFelAsZ0VBQWdFLGNBQWM7QUFDOUUsd0lBQXdJO0FBQ3hJLGlEQUFpRCxnQkFBZ0IseUNBQXlDO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxtQkFBbUI7QUFDN0IsdUlBQXVJO0FBQ3ZJOztBQUVBLHNCQUFzQjs7O0FBR3RCLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxjQUFjLHVCQUF1QjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLE9BQU87QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLE9BQU87QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsT0FBTztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOEpBQThKOztBQUU5SjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHFGQUFxRjs7QUFFL0k7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9COztBQUVBOztBQUVBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDc5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ODRhY2VlMWQ0MTJkN2I4ZDU1NCIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyohXG4gKiBHU0FQIDMuNS4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIwLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9jb25maWcgPSB7XG4gIGF1dG9TbGVlcDogMTIwLFxuICBmb3JjZTNEOiBcImF1dG9cIixcbiAgbnVsbFRhcmdldFdhcm46IDEsXG4gIHVuaXRzOiB7XG4gICAgbGluZUhlaWdodDogXCJcIlxuICB9XG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgZHVyYXRpb246IC41LFxuICBvdmVyd3JpdGU6IGZhbHNlLFxuICBkZWxheTogMFxufSxcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF90aW55TnVtID0gMSAvIF9iaWdOdW0sXG4gICAgXzJQSSA9IE1hdGguUEkgKiAyLFxuICAgIF9IQUxGX1BJID0gXzJQSSAvIDQsXG4gICAgX2dzSUQgPSAwLFxuICAgIF9zcXJ0ID0gTWF0aC5zcXJ0LFxuICAgIF9jb3MgPSBNYXRoLmNvcyxcbiAgICBfc2luID0gTWF0aC5zaW4sXG4gICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0sXG4gICAgX2lzVW5kZWZpbmVkID0gZnVuY3Rpb24gX2lzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9pc09iamVjdCA9IGZ1bmN0aW9uIF9pc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xufSxcbiAgICBfaXNOb3RGYWxzZSA9IGZ1bmN0aW9uIF9pc05vdEZhbHNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gZmFsc2U7XG59LFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX2lzRnVuY09yU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgfHwgX2lzU3RyaW5nKHZhbHVlKTtcbn0sXG4gICAgX2lzVHlwZWRBcnJheSA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiID8gQXJyYXlCdWZmZXIuaXNWaWV3IDogZnVuY3Rpb24gKCkge30sXG4gICAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgIC8vb25seSBudW1iZXJzIChpbmNsdWRpbmcgbmVnYXRpdmVzIGFuZCBkZWNpbWFscykgYnV0IE5PVCByZWxhdGl2ZSB2YWx1ZXMuXG5fbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtXFwrXSpcXGQqL2csXG4gICAgLy9maW5kcyBhbnkgbnVtYmVycywgaW5jbHVkaW5nIG9uZXMgdGhhdCBzdGFydCB3aXRoICs9IG9yIC09LCBuZWdhdGl2ZSBudW1iZXJzLCBhbmQgb25lcyBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGxpa2UgMWUtOC5cbl9udW1XaXRoVW5pdEV4cCA9IC9bLSs9Ll0qXFxkK1suZS1dKlxcZCpbYS16JV0qL2csXG4gICAgX2NvbXBsZXhTdHJpbmdOdW1FeHAgPSAvWy0rPS5dKlxcZCsoPzpcXC58ZS18ZSkqXFxkKi9naSxcbiAgICAvL2R1cGxpY2F0ZSBzbyB0aGF0IHdoaWxlIHdlJ3JlIGxvb3BpbmcgdGhyb3VnaCBtYXRjaGVzIGZyb20gZXhlYygpLCBpdCBkb2Vzbid0IGNvbnRhbWluYXRlIHRoZSBsYXN0SW5kZXggb2YgX251bUV4cCB3aGljaCB3ZSB1c2UgdG8gc2VhcmNoIGZvciBjb2xvcnMgdG9vLlxuX3JlbEV4cCA9IC9bKy1dPS0/W1xcLlxcZF0rLyxcbiAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvWyNcXC0rLl0qXFxiW2EtelxcZC09KyUuXSsvZ2ksXG4gICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgIF93aW4sXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9kb2MsXG4gICAgX2dsb2JhbHMgPSB7fSxcbiAgICBfaW5zdGFsbFNjb3BlID0ge30sXG4gICAgX2NvcmVSZWFkeSxcbiAgICBfaW5zdGFsbCA9IGZ1bmN0aW9uIF9pbnN0YWxsKHNjb3BlKSB7XG4gIHJldHVybiAoX2luc3RhbGxTY29wZSA9IF9tZXJnZShzY29wZSwgX2dsb2JhbHMpKSAmJiBnc2FwO1xufSxcbiAgICBfbWlzc2luZ1BsdWdpbiA9IGZ1bmN0aW9uIF9taXNzaW5nUGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gY29uc29sZS53YXJuKFwiSW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSwgXCJzZXQgdG9cIiwgdmFsdWUsIFwiTWlzc2luZyBwbHVnaW4/IGdzYXAucmVnaXN0ZXJQbHVnaW4oKVwiKTtcbn0sXG4gICAgX3dhcm4gPSBmdW5jdGlvbiBfd2FybihtZXNzYWdlLCBzdXBwcmVzcykge1xuICByZXR1cm4gIXN1cHByZXNzICYmIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn0sXG4gICAgX2FkZEdsb2JhbCA9IGZ1bmN0aW9uIF9hZGRHbG9iYWwobmFtZSwgb2JqKSB7XG4gIHJldHVybiBuYW1lICYmIChfZ2xvYmFsc1tuYW1lXSA9IG9iaikgJiYgX2luc3RhbGxTY29wZSAmJiAoX2luc3RhbGxTY29wZVtuYW1lXSA9IG9iaikgfHwgX2dsb2JhbHM7XG59LFxuICAgIF9lbXB0eUZ1bmMgPSBmdW5jdGlvbiBfZW1wdHlGdW5jKCkge1xuICByZXR1cm4gMDtcbn0sXG4gICAgX3Jlc2VydmVkUHJvcHMgPSB7fSxcbiAgICBfbGF6eVR3ZWVucyA9IFtdLFxuICAgIF9sYXp5TG9va3VwID0ge30sXG4gICAgX2xhc3RSZW5kZXJlZEZyYW1lLFxuICAgIF9wbHVnaW5zID0ge30sXG4gICAgX2VmZmVjdHMgPSB7fSxcbiAgICBfbmV4dEdDRnJhbWUgPSAzMCxcbiAgICBfaGFybmVzc1BsdWdpbnMgPSBbXSxcbiAgICBfY2FsbGJhY2tOYW1lcyA9IFwiXCIsXG4gICAgX2hhcm5lc3MgPSBmdW5jdGlvbiBfaGFybmVzcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXQgPSB0YXJnZXRzWzBdLFxuICAgICAgaGFybmVzc1BsdWdpbixcbiAgICAgIGk7XG4gIF9pc09iamVjdCh0YXJnZXQpIHx8IF9pc0Z1bmN0aW9uKHRhcmdldCkgfHwgKHRhcmdldHMgPSBbdGFyZ2V0c10pO1xuXG4gIGlmICghKGhhcm5lc3NQbHVnaW4gPSAodGFyZ2V0Ll9nc2FwIHx8IHt9KS5oYXJuZXNzKSkge1xuICAgIGkgPSBfaGFybmVzc1BsdWdpbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSAmJiAhX2hhcm5lc3NQbHVnaW5zW2ldLnRhcmdldFRlc3QodGFyZ2V0KSkge31cblxuICAgIGhhcm5lc3NQbHVnaW4gPSBfaGFybmVzc1BsdWdpbnNbaV07XG4gIH1cblxuICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHRhcmdldHNbaV0gJiYgKHRhcmdldHNbaV0uX2dzYXAgfHwgKHRhcmdldHNbaV0uX2dzYXAgPSBuZXcgR1NDYWNoZSh0YXJnZXRzW2ldLCBoYXJuZXNzUGx1Z2luKSkpIHx8IHRhcmdldHMuc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldHM7XG59LFxuICAgIF9nZXRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRDYWNoZSh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0b0FycmF5KHRhcmdldCkpWzBdLl9nc2FwO1xufSxcbiAgICBfZ2V0UHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdikge1xuICByZXR1cm4gKHYgPSB0YXJnZXRbcHJvcGVydHldKSAmJiBfaXNGdW5jdGlvbih2KSA/IHRhcmdldFtwcm9wZXJ0eV0oKSA6IF9pc1VuZGVmaW5lZCh2KSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcGVydHkpIHx8IHY7XG59LFxuICAgIF9mb3JFYWNoTmFtZSA9IGZ1bmN0aW9uIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuYykge1xuICByZXR1cm4gKG5hbWVzID0gbmFtZXMuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmMpIHx8IG5hbWVzO1xufSxcbiAgICAvL3NwbGl0IGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgbmFtZXMgaW50byBhbiBhcnJheSwgdGhlbiBydW4gYSBmb3JFYWNoKCkgZnVuY3Rpb24gYW5kIHJldHVybiB0aGUgc3BsaXQgYXJyYXkgKHRoaXMgaXMganVzdCBhIHdheSB0byBjb25zb2xpZGF0ZS9zaG9ydGVuIHNvbWUgY29kZSkuXG5fcm91bmQgPSBmdW5jdGlvbiBfcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwIHx8IDA7XG59LFxuICAgIF9hcnJheUNvbnRhaW5zQW55ID0gZnVuY3Rpb24gX2FycmF5Q29udGFpbnNBbnkodG9TZWFyY2gsIHRvRmluZCkge1xuICAvL3NlYXJjaGVzIG9uZSBhcnJheSB0byBmaW5kIG1hdGNoZXMgZm9yIGFueSBvZiB0aGUgaXRlbXMgaW4gdGhlIHRvRmluZCBhcnJheS4gQXMgc29vbiBhcyBvbmUgaXMgZm91bmQsIGl0IHJldHVybnMgdHJ1ZS4gSXQgZG9lcyBOT1QgcmV0dXJuIGFsbCB0aGUgbWF0Y2hlczsgaXQncyBzaW1wbHkgYSBib29sZWFuIHNlYXJjaC5cbiAgdmFyIGwgPSB0b0ZpbmQubGVuZ3RoLFxuICAgICAgaSA9IDA7XG5cbiAgZm9yICg7IHRvU2VhcmNoLmluZGV4T2YodG9GaW5kW2ldKSA8IDAgJiYgKytpIDwgbDspIHt9XG5cbiAgcmV0dXJuIGkgPCBsO1xufSxcbiAgICBfcGFyc2VWYXJzID0gZnVuY3Rpb24gX3BhcnNlVmFycyhwYXJhbXMsIHR5cGUsIHBhcmVudCkge1xuICAvL3JlYWRzIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIG9uZSBvZiB0aGUga2V5IG1ldGhvZHMgYW5kIGZpZ3VyZXMgb3V0IGlmIHRoZSB1c2VyIGlzIGRlZmluaW5nIHRoaW5ncyB3aXRoIHRoZSBPTEQvbGVnYWN5IHN5bnRheCB3aGVyZSB0aGUgZHVyYXRpb24gaXMgdGhlIDJuZCBwYXJhbWV0ZXIsIGFuZCB0aGVuIGl0IGFkanVzdHMgdGhpbmdzIGFjY29yZGluZ2x5IGFuZCBzcGl0cyBiYWNrIHRoZSBjb3JyZWN0ZWQgdmFycyBvYmplY3QgKHdpdGggdGhlIGR1cmF0aW9uIGFkZGVkIGlmIG5lY2Vzc2FyeSwgYXMgd2VsbCBhcyBydW5CYWNrd2FyZHMgb3Igc3RhcnRBdCBvciBpbW1lZGlhdGVSZW5kZXIpLiB0eXBlIDAgPSB0bygpL3N0YWdnZXJUbygpLCAxID0gZnJvbSgpL3N0YWdnZXJGcm9tKCksIDIgPSBmcm9tVG8oKS9zdGFnZ2VyRnJvbVRvKClcbiAgdmFyIGlzTGVnYWN5ID0gX2lzTnVtYmVyKHBhcmFtc1sxXSksXG4gICAgICB2YXJzSW5kZXggPSAoaXNMZWdhY3kgPyAyIDogMSkgKyAodHlwZSA8IDIgPyAwIDogMSksXG4gICAgICB2YXJzID0gcGFyYW1zW3ZhcnNJbmRleF0sXG4gICAgICBpclZhcnM7XG5cbiAgaXNMZWdhY3kgJiYgKHZhcnMuZHVyYXRpb24gPSBwYXJhbXNbMV0pO1xuICB2YXJzLnBhcmVudCA9IHBhcmVudDtcblxuICBpZiAodHlwZSkge1xuICAgIGlyVmFycyA9IHZhcnM7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmICEoXCJpbW1lZGlhdGVSZW5kZXJcIiBpbiBpclZhcnMpKSB7XG4gICAgICAvLyBpbmhlcml0YW5jZSBoYXNuJ3QgaGFwcGVuZWQgeWV0LCBidXQgc29tZW9uZSBtYXkgaGF2ZSBzZXQgYSBkZWZhdWx0IGluIGFuIGFuY2VzdG9yIHRpbWVsaW5lLiBXZSBjb3VsZCBkbyB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyKSBidXQgdGhhdCdkIGV4YWN0IGEgc2xpZ2h0IHBlcmZvcm1hbmNlIHBlbmFsdHkgYmVjYXVzZSBfaW5oZXJpdERlZmF1bHRzKCkgYWxzbyBydW5zIGluIHRoZSBUd2VlbiBjb25zdHJ1Y3Rvci4gV2UncmUgcGF5aW5nIGEgc21hbGwga2IgcHJpY2UgaGVyZSB0byBnYWluIHNwZWVkLlxuICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICBwYXJlbnQgPSBfaXNOb3RGYWxzZShwYXJlbnQudmFycy5pbmhlcml0KSAmJiBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgdHlwZSA8IDIgPyB2YXJzLnJ1bkJhY2t3YXJkcyA9IDEgOiB2YXJzLnN0YXJ0QXQgPSBwYXJhbXNbdmFyc0luZGV4IC0gMV07IC8vIFwiZnJvbVwiIHZhcnNcbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfbGF6eVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5UmVuZGVyKCkge1xuICB2YXIgbCA9IF9sYXp5VHdlZW5zLmxlbmd0aCxcbiAgICAgIGEgPSBfbGF6eVR3ZWVucy5zbGljZSgwKSxcbiAgICAgIGksXG4gICAgICB0d2VlbjtcblxuICBfbGF6eUxvb2t1cCA9IHt9O1xuICBfbGF6eVR3ZWVucy5sZW5ndGggPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB0d2VlbiA9IGFbaV07XG4gICAgdHdlZW4gJiYgdHdlZW4uX2xhenkgJiYgKHR3ZWVuLnJlbmRlcih0d2Vlbi5fbGF6eVswXSwgdHdlZW4uX2xhenlbMV0sIHRydWUpLl9sYXp5ID0gMCk7XG4gIH1cbn0sXG4gICAgX2xhenlTYWZlUmVuZGVyID0gZnVuY3Rpb24gX2xhenlTYWZlUmVuZGVyKGFuaW1hdGlvbiwgdGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpO1xuICBhbmltYXRpb24ucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gc29tZW9uZSBjYWxscyBzZWVrKCkgb3IgdGltZSgpIG9yIHByb2dyZXNzKCksIHRoZXkgZXhwZWN0IGFuIGltbWVkaWF0ZSByZW5kZXIuXG59LFxuICAgIF9udW1lcmljSWZQb3NzaWJsZSA9IGZ1bmN0aW9uIF9udW1lcmljSWZQb3NzaWJsZSh2YWx1ZSkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gKG4gfHwgbiA9PT0gMCkgJiYgKHZhbHVlICsgXCJcIikubWF0Y2goX2RlbGltaXRlZFZhbHVlRXhwKS5sZW5ndGggPCAyID8gbiA6IF9pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHApIHtcbiAgcmV0dXJuIHA7XG59LFxuICAgIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3NldEtleWZyYW1lRGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCBwID09PSBcImR1cmF0aW9uXCIgfHwgcCA9PT0gXCJlYXNlXCIgfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxufSxcbiAgICBfbWVyZ2UgPSBmdW5jdGlvbiBfbWVyZ2UoYmFzZSwgdG9NZXJnZSkge1xuICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICBiYXNlW3BdID0gdG9NZXJnZVtwXTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfbWVyZ2VEZWVwID0gZnVuY3Rpb24gX21lcmdlRGVlcChiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSBfaXNPYmplY3QodG9NZXJnZVtwXSkgPyBfbWVyZ2VEZWVwKGJhc2VbcF0gfHwgKGJhc2VbcF0gPSB7fSksIHRvTWVyZ2VbcF0pIDogdG9NZXJnZVtwXTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfY29weUV4Y2x1ZGluZyA9IGZ1bmN0aW9uIF9jb3B5RXhjbHVkaW5nKG9iaiwgZXhjbHVkaW5nKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMgOiBfc2V0RGVmYXVsdHM7XG5cbiAgaWYgKF9pc05vdEZhbHNlKHZhcnMuaW5oZXJpdCkpIHtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBmdW5jKHZhcnMsIHBhcmVudC52YXJzLmRlZmF1bHRzKTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQgfHwgcGFyZW50Ll9kcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFycztcbn0sXG4gICAgX2FycmF5c01hdGNoID0gZnVuY3Rpb24gX2FycmF5c01hdGNoKGExLCBhMikge1xuICB2YXIgaSA9IGExLmxlbmd0aCxcbiAgICAgIG1hdGNoID0gaSA9PT0gYTIubGVuZ3RoO1xuXG4gIHdoaWxlIChtYXRjaCAmJiBpLS0gJiYgYTFbaV0gPT09IGEyW2ldKSB7fVxuXG4gIHJldHVybiBpIDwgMDtcbn0sXG4gICAgX2FkZExpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX2FkZExpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3AsIHNvcnRCeSkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gcGFyZW50W2xhc3RQcm9wXSxcbiAgICAgIHQ7XG5cbiAgaWYgKHNvcnRCeSkge1xuICAgIHQgPSBjaGlsZFtzb3J0QnldO1xuXG4gICAgd2hpbGUgKHByZXYgJiYgcHJldltzb3J0QnldID4gdCkge1xuICAgICAgcHJldiA9IHByZXYuX3ByZXY7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByZXYpIHtcbiAgICBjaGlsZC5fbmV4dCA9IHByZXYuX25leHQ7XG4gICAgcHJldi5fbmV4dCA9IGNoaWxkO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkLl9uZXh0ID0gcGFyZW50W2ZpcnN0UHJvcF07XG4gICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBjaGlsZDtcbiAgfVxuXG4gIGlmIChjaGlsZC5fbmV4dCkge1xuICAgIGNoaWxkLl9uZXh0Ll9wcmV2ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgY2hpbGQuX3ByZXYgPSBwcmV2O1xuICBjaGlsZC5wYXJlbnQgPSBjaGlsZC5fZHAgPSBwYXJlbnQ7XG4gIHJldHVybiBjaGlsZDtcbn0sXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX3JlbW92ZUxpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3ApIHtcbiAgaWYgKGZpcnN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgfVxuXG4gIGlmIChsYXN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gIH1cblxuICB2YXIgcHJldiA9IGNoaWxkLl9wcmV2LFxuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5fbmV4dCA9IG5leHQ7XG4gIH0gZWxzZSBpZiAocGFyZW50W2ZpcnN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBuZXh0O1xuICB9XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0Ll9wcmV2ID0gcHJldjtcbiAgfSBlbHNlIGlmIChwYXJlbnRbbGFzdFByb3BdID09PSBjaGlsZCkge1xuICAgIHBhcmVudFtsYXN0UHJvcF0gPSBwcmV2O1xuICB9XG5cbiAgY2hpbGQuX25leHQgPSBjaGlsZC5fcHJldiA9IGNoaWxkLnBhcmVudCA9IG51bGw7IC8vIGRvbid0IGRlbGV0ZSB0aGUgX2RwIGp1c3Qgc28gd2UgY2FuIHJldmVydCBpZiBuZWNlc3NhcnkuIEJ1dCBwYXJlbnQgc2hvdWxkIGJlIG51bGwgdG8gaW5kaWNhdGUgdGhlIGl0ZW0gaXNuJ3QgaW4gYSBsaW5rZWQgbGlzdC5cbn0sXG4gICAgX3JlbW92ZUZyb21QYXJlbnQgPSBmdW5jdGlvbiBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCwgb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSkge1xuICBjaGlsZC5wYXJlbnQgJiYgKCFvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlIHx8IGNoaWxkLnBhcmVudC5hdXRvUmVtb3ZlQ2hpbGRyZW4pICYmIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xuICBjaGlsZC5fYWN0ID0gMDtcbn0sXG4gICAgX3VuY2FjaGUgPSBmdW5jdGlvbiBfdW5jYWNoZShhbmltYXRpb24sIGNoaWxkKSB7XG4gIGlmICghY2hpbGQgfHwgY2hpbGQuX2VuZCA+IGFuaW1hdGlvbi5fZHVyIHx8IGNoaWxkLl9zdGFydCA8IDApIHtcbiAgICAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGlmIGEgY2hpbGQgYW5pbWF0aW9uIGlzIHBhc3NlZCBpbiB3ZSBzaG91bGQgb25seSB1bmNhY2hlIGlmIHRoYXQgY2hpbGQgRVhURU5EUyB0aGUgYW5pbWF0aW9uIChpdHMgZW5kIHRpbWUgaXMgYmV5b25kIHRoZSBlbmQpXG4gICAgdmFyIGEgPSBhbmltYXRpb247XG5cbiAgICB3aGlsZSAoYSkge1xuICAgICAgYS5fZGlydHkgPSAxO1xuICAgICAgYSA9IGEucGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9yZWNhY2hlQW5jZXN0b3JzID0gZnVuY3Rpb24gX3JlY2FjaGVBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24ucGFyZW50O1xuXG4gIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgIC8vc29tZXRpbWVzIHdlIG11c3QgZm9yY2UgYSByZS1zb3J0IG9mIGFsbCBjaGlsZHJlbiBhbmQgdXBkYXRlIHRoZSBkdXJhdGlvbi90b3RhbER1cmF0aW9uIG9mIGFsbCBhbmNlc3RvciB0aW1lbGluZXMgaW1tZWRpYXRlbHkgaW4gY2FzZSwgZm9yIGV4YW1wbGUsIGluIHRoZSBtaWRkbGUgb2YgYSByZW5kZXIgbG9vcCwgb25lIHR3ZWVuIGFsdGVycyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIHdoaWNoIHNob3ZlcyBpdHMgc3RhcnRUaW1lIGJlZm9yZSAwLCBmb3JjaW5nIHRoZSBwYXJlbnQgdGltZWxpbmUgdG8gc2hpZnQgYXJvdW5kIGFuZCBzaGlmdENoaWxkcmVuKCkgd2hpY2ggY291bGQgYWZmZWN0IHRoYXQgbmV4dCB0d2VlbidzIHJlbmRlciAoc3RhcnRUaW1lKS4gRG9lc24ndCBtYXR0ZXIgZm9yIHRoZSByb290IHRpbWVsaW5lIHRob3VnaC5cbiAgICBwYXJlbnQuX2RpcnR5ID0gMTtcbiAgICBwYXJlbnQudG90YWxEdXJhdGlvbigpO1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAhYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5fdHMgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbi5wYXJlbnQpO1xufSxcbiAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZShhbmltYXRpb24uX3RUaW1lLCBhbmltYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSArIGFuaW1hdGlvbi5fckRlbGF5KSAqIGFuaW1hdGlvbiA6IDA7XG59LFxuICAgIC8vIGZlZWQgaW4gdGhlIHRvdGFsVGltZSBhbmQgY3ljbGVEdXJhdGlvbiBhbmQgaXQnbGwgcmV0dXJuIHRoZSBjeWNsZSAoaXRlcmF0aW9uIG1pbnVzIDEpIGFuZCBpZiB0aGUgcGxheWhlYWQgaXMgZXhhY3RseSBhdCB0aGUgdmVyeSBFTkQsIGl0IHdpbGwgTk9UIGJ1bXAgdXAgdG8gdGhlIG5leHQgY3ljbGUuXG5fYW5pbWF0aW9uQ3ljbGUgPSBmdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIGN5Y2xlRHVyYXRpb24pIHtcbiAgcmV0dXJuICh0VGltZSAvPSBjeWNsZUR1cmF0aW9uKSAmJiB+fnRUaW1lID09PSB0VGltZSA/IH5+dFRpbWUgLSAxIDogfn50VGltZTtcbn0sXG4gICAgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUgPSBmdW5jdGlvbiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnRUaW1lLCBjaGlsZCkge1xuICByZXR1cm4gKHBhcmVudFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzICsgKGNoaWxkLl90cyA+PSAwID8gMCA6IGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKTtcbn0sXG4gICAgX3NldEVuZCA9IGZ1bmN0aW9uIF9zZXRFbmQoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX2VuZCA9IF9yb3VuZChhbmltYXRpb24uX3N0YXJ0ICsgKGFuaW1hdGlvbi5fdER1ciAvIE1hdGguYWJzKGFuaW1hdGlvbi5fdHMgfHwgYW5pbWF0aW9uLl9ydHMgfHwgX3RpbnlOdW0pIHx8IDApKTtcbn0sXG4gICAgX2FsaWduUGxheWhlYWQgPSBmdW5jdGlvbiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIHRvdGFsVGltZSkge1xuICAvLyBhZGp1c3RzIHRoZSBhbmltYXRpb24ncyBfc3RhcnQgYW5kIF9lbmQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCB0b3RhbFRpbWUgKG9ubHkgaWYgdGhlIHBhcmVudCdzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUgYW5kIHRoZSBhbmltYXRpb24gaXNuJ3QgcGF1c2VkKS4gSXQgZG9lc24ndCBkbyBhbnkgcmVuZGVyaW5nIG9yIGZvcmNpbmcgdGhpbmdzIGJhY2sgaW50byBwYXJlbnQgdGltZWxpbmVzLCBldGMuIC0gdGhhdCdzIHdoYXQgdG90YWxUaW1lKCkgaXMgZm9yLlxuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLl9kcDtcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiBhbmltYXRpb24uX3RzKSB7XG4gICAgYW5pbWF0aW9uLl9zdGFydCA9IF9yb3VuZChhbmltYXRpb24uX2RwLl90aW1lIC0gKGFuaW1hdGlvbi5fdHMgPiAwID8gdG90YWxUaW1lIC8gYW5pbWF0aW9uLl90cyA6ICgoYW5pbWF0aW9uLl9kaXJ0eSA/IGFuaW1hdGlvbi50b3RhbER1cmF0aW9uKCkgOiBhbmltYXRpb24uX3REdXIpIC0gdG90YWxUaW1lKSAvIC1hbmltYXRpb24uX3RzKSk7XG5cbiAgICBfc2V0RW5kKGFuaW1hdGlvbik7XG5cbiAgICBwYXJlbnQuX2RpcnR5IHx8IF91bmNhY2hlKHBhcmVudCwgYW5pbWF0aW9uKTsgLy9mb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIElmIHRoZSBwYXJlbnQncyBjYWNoZSBpcyBhbHJlYWR5IGRpcnR5LCBpdCBhbHJlYWR5IHRvb2sgY2FyZSBvZiBtYXJraW5nIHRoZSBhbmNlc3RvcnMgYXMgZGlydHkgdG9vLCBzbyBza2lwIHRoZSBmdW5jdGlvbiBjYWxsIGhlcmUuXG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcblxuLypcbl90b3RhbFRpbWVUb1RpbWUgPSAoY2xhbXBlZFRvdGFsVGltZSwgZHVyYXRpb24sIHJlcGVhdCwgcmVwZWF0RGVsYXksIHlveW8pID0+IHtcblx0bGV0IGN5Y2xlRHVyYXRpb24gPSBkdXJhdGlvbiArIHJlcGVhdERlbGF5LFxuXHRcdHRpbWUgPSBfcm91bmQoY2xhbXBlZFRvdGFsVGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXHRpZiAodGltZSA+IGR1cmF0aW9uKSB7XG5cdFx0dGltZSA9IGR1cmF0aW9uO1xuXHR9XG5cdHJldHVybiAoeW95byAmJiAofn4oY2xhbXBlZFRvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pICYgMSkpID8gZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbn0sXG4qL1xuX3Bvc3RBZGRDaGVja3MgPSBmdW5jdGlvbiBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpIHtcbiAgdmFyIHQ7XG5cbiAgaWYgKGNoaWxkLl90aW1lIHx8IGNoaWxkLl9pbml0dGVkICYmICFjaGlsZC5fZHVyKSB7XG4gICAgLy9pbiBjYXNlLCBmb3IgZXhhbXBsZSwgdGhlIF9zdGFydCBpcyBtb3ZlZCBvbiBhIHR3ZWVuIHRoYXQgaGFzIGFscmVhZHkgcmVuZGVyZWQuIEltYWdpbmUgaXQncyBhdCBpdHMgZW5kIHN0YXRlLCB0aGVuIHRoZSBzdGFydFRpbWUgaXMgbW92ZWQgV0FZIGxhdGVyIChhZnRlciB0aGUgZW5kIG9mIHRoaXMgdGltZWxpbmUpLCBpdCBzaG91bGQgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuXG4gICAgdCA9IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWVsaW5lLnJhd1RpbWUoKSwgY2hpbGQpO1xuXG4gICAgaWYgKCFjaGlsZC5fZHVyIHx8IF9jbGFtcCgwLCBjaGlsZC50b3RhbER1cmF0aW9uKCksIHQpIC0gY2hpbGQuX3RUaW1lID4gX3RpbnlOdW0pIHtcbiAgICAgIGNoaWxkLnJlbmRlcih0LCB0cnVlKTtcbiAgICB9XG4gIH0gLy9pZiB0aGUgdGltZWxpbmUgaGFzIGFscmVhZHkgZW5kZWQgYnV0IHRoZSBpbnNlcnRlZCB0d2Vlbi90aW1lbGluZSBleHRlbmRzIHRoZSBkdXJhdGlvbiwgd2Ugc2hvdWxkIGVuYWJsZSB0aGlzIHRpbWVsaW5lIGFnYWluIHNvIHRoYXQgaXQgcmVuZGVycyBwcm9wZXJseS4gV2Ugc2hvdWxkIGFsc28gYWxpZ24gdGhlIHBsYXloZWFkIHdpdGggdGhlIHBhcmVudCB0aW1lbGluZSdzIHdoZW4gYXBwcm9wcmlhdGUuXG5cblxuICBpZiAoX3VuY2FjaGUodGltZWxpbmUsIGNoaWxkKS5fZHAgJiYgdGltZWxpbmUuX2luaXR0ZWQgJiYgdGltZWxpbmUuX3RpbWUgPj0gdGltZWxpbmUuX2R1ciAmJiB0aW1lbGluZS5fdHMpIHtcbiAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvcnMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLi4uXG4gICAgaWYgKHRpbWVsaW5lLl9kdXIgPCB0aW1lbGluZS5kdXJhdGlvbigpKSB7XG4gICAgICB0ID0gdGltZWxpbmU7XG5cbiAgICAgIHdoaWxlICh0Ll9kcCkge1xuICAgICAgICB0LnJhd1RpbWUoKSA+PSAwICYmIHQudG90YWxUaW1lKHQuX3RUaW1lKTsgLy9tb3ZlcyB0aGUgdGltZWxpbmUgKHNoaWZ0cyBpdHMgc3RhcnRUaW1lKSBpZiBuZWNlc3NhcnksIGFuZCBhbHNvIGVuYWJsZXMgaXQuIElmIGl0J3MgY3VycmVudGx5IHplcm8sIHRob3VnaCwgaXQgbWF5IG5vdCBiZSBzY2hlZHVsZWQgdG8gcmVuZGVyIHVudGlsIGxhdGVyIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSBpdCB0byBhbGlnbiB3aXRoIHRoZSBjdXJyZW50IHBsYXloZWFkIHBvc2l0aW9uLiBPbmx5IG1vdmUgdG8gY2F0Y2ggdXAgd2l0aCB0aGUgcGxheWhlYWQuXG5cbiAgICAgICAgdCA9IHQuX2RwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLl96VGltZSA9IC1fdGlueU51bTsgLy8gaGVscHMgZW5zdXJlIHRoYXQgdGhlIG5leHQgcmVuZGVyKCkgd2lsbCBiZSBmb3JjZWQgKGNyb3NzaW5nU3RhcnQgPSB0cnVlIGluIHJlbmRlcigpKSwgZXZlbiBpZiB0aGUgZHVyYXRpb24gaGFzbid0IGNoYW5nZWQgKHdlJ3JlIGFkZGluZyBhIGNoaWxkIHdoaWNoIHdvdWxkIG5lZWQgdG8gZ2V0IHJlbmRlcmVkKS4gRGVmaW5pdGVseSBhbiBlZGdlIGNhc2UuIE5vdGU6IHdlIE1VU1QgZG8gdGhpcyBBRlRFUiB0aGUgbG9vcCBhYm92ZSB3aGVyZSB0aGUgdG90YWxUaW1lKCkgbWlnaHQgdHJpZ2dlciBhIHJlbmRlcigpIGJlY2F1c2UgdGhpcyBfYWRkVG9UaW1lbGluZSgpIG1ldGhvZCBnZXRzIGNhbGxlZCBmcm9tIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIEJFRk9SRSB0d2VlbnMgZXZlbiByZWNvcmQgdGhlaXIgdGFyZ2V0cywgZXRjLiBzbyB3ZSB3b3VsZG4ndCB3YW50IHRoaW5ncyB0byBnZXQgdHJpZ2dlcmVkIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgfVxufSxcbiAgICBfYWRkVG9UaW1lbGluZSA9IGZ1bmN0aW9uIF9hZGRUb1RpbWVsaW5lKHRpbWVsaW5lLCBjaGlsZCwgcG9zaXRpb24sIHNraXBDaGVja3MpIHtcbiAgY2hpbGQucGFyZW50ICYmIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgY2hpbGQuX3N0YXJ0ID0gX3JvdW5kKHBvc2l0aW9uICsgY2hpbGQuX2RlbGF5KTtcbiAgY2hpbGQuX2VuZCA9IF9yb3VuZChjaGlsZC5fc3RhcnQgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gTWF0aC5hYnMoY2hpbGQudGltZVNjYWxlKCkpIHx8IDApKTtcblxuICBfYWRkTGlua2VkTGlzdEl0ZW0odGltZWxpbmUsIGNoaWxkLCBcIl9maXJzdFwiLCBcIl9sYXN0XCIsIHRpbWVsaW5lLl9zb3J0ID8gXCJfc3RhcnRcIiA6IDApO1xuXG4gIHRpbWVsaW5lLl9yZWNlbnQgPSBjaGlsZDtcbiAgc2tpcENoZWNrcyB8fCBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpO1xuICByZXR1cm4gdGltZWxpbmU7XG59LFxuICAgIF9zY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gX3Njcm9sbFRyaWdnZXIoYW5pbWF0aW9uLCB0cmlnZ2VyKSB7XG4gIHJldHVybiAoX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlciB8fCBfbWlzc2luZ1BsdWdpbihcInNjcm9sbFRyaWdnZXJcIiwgdHJpZ2dlcikpICYmIF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHRyaWdnZXIsIGFuaW1hdGlvbik7XG59LFxuICAgIF9hdHRlbXB0SW5pdFR3ZWVuID0gZnVuY3Rpb24gX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSB7XG4gIF9pbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSk7XG5cbiAgaWYgKCF0d2Vlbi5faW5pdHRlZCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCFmb3JjZSAmJiB0d2Vlbi5fcHQgJiYgKHR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5ICE9PSBmYWxzZSB8fCAhdHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkpICYmIF9sYXN0UmVuZGVyZWRGcmFtZSAhPT0gX3RpY2tlci5mcmFtZSkge1xuICAgIF9sYXp5VHdlZW5zLnB1c2godHdlZW4pO1xuXG4gICAgdHdlZW4uX2xhenkgPSBbdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50c107XG4gICAgcmV0dXJuIDE7XG4gIH1cbn0sXG4gICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuID0gZnVuY3Rpb24gX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICB2YXIgcHJldlJhdGlvID0gdHdlZW4ucmF0aW8sXG4gICAgICByYXRpbyA9IHRvdGFsVGltZSA8IDAgfHwgIXRvdGFsVGltZSAmJiBwcmV2UmF0aW8gJiYgIXR3ZWVuLl9zdGFydCAmJiB0d2Vlbi5felRpbWUgPiBfdGlueU51bSAmJiAhdHdlZW4uX2RwLl9sb2NrIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiB0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIgJiYgdHdlZW4uZGF0YSAhPT0gXCJpc1N0YXJ0XCIgPyAwIDogMSxcbiAgICAgIC8vIGNoZWNrIHBhcmVudCdzIF9sb2NrIGJlY2F1c2Ugd2hlbiBhIHRpbWVsaW5lIHJlcGVhdHMveW95b3MgYW5kIGRvZXMgaXRzIGFydGlmaWNpYWwgd3JhcHBpbmcsIHdlIHNob3VsZG4ndCBmb3JjZSB0aGUgcmF0aW8gYmFjayB0byAwLiBBbHNvLCBpZiB0aGUgdHdlZW4gb3IgaXRzIHBhcmVudCBpcyByZXZlcnNlZCBhbmQgdGhlIHRvdGFsVGltZSBpcyAwLCB3ZSBzaG91bGQgZ28gdG8gYSByYXRpbyBvZiAwLlxuICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICB0VGltZSA9IDAsXG4gICAgICBwdCxcbiAgICAgIGl0ZXJhdGlvbixcbiAgICAgIHByZXZJdGVyYXRpb247XG5cbiAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvLyBpbiBjYXNlIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHRoYXQgaGFzIGEgcmVwZWF0IHdpdGggYSByZXBlYXREZWxheVxuICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodHdlZW4uX3RUaW1lLCByZXBlYXREZWxheSk7XG5cbiAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSB7XG4gICAgICBwcmV2UmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB0d2Vlbi52YXJzLnJlcGVhdFJlZnJlc2ggJiYgdHdlZW4uX2luaXR0ZWQgJiYgdHdlZW4uaW52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdHdlZW4uX2luaXR0ZWQgJiYgX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgIC8vIGlmIHdlIHJlbmRlciB0aGUgdmVyeSBiZWdpbm5pbmcgKHRpbWUgPT0gMCkgb2YgYSBmcm9tVG8oKSwgd2UgbXVzdCBmb3JjZSB0aGUgcmVuZGVyIChub3JtYWwgdHdlZW5zIHdvdWxkbid0IG5lZWQgdG8gcmVuZGVyIGF0IGEgdGltZSBvZiAwIHdoZW4gdGhlIHByZXZUaW1lIHdhcyBhbHNvIDApLiBUaGlzIGlzIGFsc28gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBvdmVyd3JpdGluZyBraWNrcyBpbiBpbW1lZGlhdGVseS5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmF0aW8gIT09IHByZXZSYXRpbyB8fCBmb3JjZSB8fCB0d2Vlbi5felRpbWUgPT09IF90aW55TnVtIHx8ICF0b3RhbFRpbWUgJiYgdHdlZW4uX3pUaW1lKSB7XG4gICAgcHJldkl0ZXJhdGlvbiA9IHR3ZWVuLl96VGltZTtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWUgfHwgKHN1cHByZXNzRXZlbnRzID8gX3RpbnlOdW0gOiAwKTsgLy8gd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICBzdXBwcmVzc0V2ZW50cyB8fCAoc3VwcHJlc3NFdmVudHMgPSB0b3RhbFRpbWUgJiYgIXByZXZJdGVyYXRpb24pOyAvLyBpZiBpdCB3YXMgcmVuZGVyZWQgcHJldmlvdXNseSBhdCBleGFjdGx5IDAgKF96VGltZSkgYW5kIG5vdyB0aGUgcGxheWhlYWQgaXMgbW92aW5nIGF3YXksIERPTidUIGZpcmUgY2FsbGJhY2tzIG90aGVyd2lzZSB0aGV5J2xsIHNlZW0gbGlrZSBkdXBsaWNhdGVzLlxuXG4gICAgdHdlZW4ucmF0aW8gPSByYXRpbztcbiAgICB0d2Vlbi5fZnJvbSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuICAgIHR3ZWVuLl90aW1lID0gMDtcbiAgICB0d2Vlbi5fdFRpbWUgPSB0VGltZTtcbiAgICBzdXBwcmVzc0V2ZW50cyB8fCBfY2FsbGJhY2sodHdlZW4sIFwib25TdGFydFwiKTtcbiAgICBwdCA9IHR3ZWVuLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHR3ZWVuLl9zdGFydEF0ICYmIHRvdGFsVGltZSA8IDAgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgdHdlZW4uX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25VcGRhdGVcIik7XG4gICAgdFRpbWUgJiYgdHdlZW4uX3JlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdHdlZW4ucGFyZW50ICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblJlcGVhdFwiKTtcblxuICAgIGlmICgodG90YWxUaW1lID49IHR3ZWVuLl90RHVyIHx8IHRvdGFsVGltZSA8IDApICYmIHR3ZWVuLnJhdGlvID09PSByYXRpbykge1xuICAgICAgcmF0aW8gJiYgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4sIDEpO1xuXG4gICAgICBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0d2VlbiwgcmF0aW8gPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgdHdlZW4uX3Byb20gJiYgdHdlZW4uX3Byb20oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoIXR3ZWVuLl96VGltZSkge1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZTtcbiAgfVxufSxcbiAgICBfZmluZE5leHRQYXVzZVR3ZWVuID0gZnVuY3Rpb24gX2ZpbmROZXh0UGF1c2VUd2VlbihhbmltYXRpb24sIHByZXZUaW1lLCB0aW1lKSB7XG4gIHZhciBjaGlsZDtcblxuICBpZiAodGltZSA+IHByZXZUaW1lKSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA8PSB0aW1lKSB7XG4gICAgICBpZiAoIWNoaWxkLl9kdXIgJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0ID4gcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fbGFzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPj0gdGltZSkge1xuICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA8IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fcHJldjtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3NldER1cmF0aW9uID0gZnVuY3Rpb24gX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgZHVyYXRpb24sIHNraXBVbmNhY2hlLCBsZWF2ZVBsYXloZWFkKSB7XG4gIHZhciByZXBlYXQgPSBhbmltYXRpb24uX3JlcGVhdCxcbiAgICAgIGR1ciA9IF9yb3VuZChkdXJhdGlvbikgfHwgMCxcbiAgICAgIHRvdGFsUHJvZ3Jlc3MgPSBhbmltYXRpb24uX3RUaW1lIC8gYW5pbWF0aW9uLl90RHVyO1xuICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkICYmIChhbmltYXRpb24uX3RpbWUgKj0gZHVyIC8gYW5pbWF0aW9uLl9kdXIpO1xuICBhbmltYXRpb24uX2R1ciA9IGR1cjtcbiAgYW5pbWF0aW9uLl90RHVyID0gIXJlcGVhdCA/IGR1ciA6IHJlcGVhdCA8IDAgPyAxZTEwIDogX3JvdW5kKGR1ciAqIChyZXBlYXQgKyAxKSArIGFuaW1hdGlvbi5fckRlbGF5ICogcmVwZWF0KTtcbiAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCA/IF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl90VGltZSA9IGFuaW1hdGlvbi5fdER1ciAqIHRvdGFsUHJvZ3Jlc3MpIDogYW5pbWF0aW9uLnBhcmVudCAmJiBfc2V0RW5kKGFuaW1hdGlvbik7XG4gIHNraXBVbmNhY2hlIHx8IF91bmNhY2hlKGFuaW1hdGlvbi5wYXJlbnQsIGFuaW1hdGlvbik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uIGluc3RhbmNlb2YgVGltZWxpbmUgPyBfdW5jYWNoZShhbmltYXRpb24pIDogX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl9kdXIpO1xufSxcbiAgICBfemVyb1Bvc2l0aW9uID0ge1xuICBfc3RhcnQ6IDAsXG4gIGVuZFRpbWU6IF9lbXB0eUZ1bmNcbn0sXG4gICAgX3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uKSB7XG4gIHZhciBsYWJlbHMgPSBhbmltYXRpb24ubGFiZWxzLFxuICAgICAgcmVjZW50ID0gYW5pbWF0aW9uLl9yZWNlbnQgfHwgX3plcm9Qb3NpdGlvbixcbiAgICAgIGNsaXBwZWREdXJhdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpID49IF9iaWdOdW0gPyByZWNlbnQuZW5kVGltZShmYWxzZSkgOiBhbmltYXRpb24uX2R1cixcbiAgICAgIC8vaW4gY2FzZSB0aGVyZSdzIGEgY2hpbGQgdGhhdCBpbmZpbml0ZWx5IHJlcGVhdHMsIHVzZXJzIGFsbW9zdCBuZXZlciBpbnRlbmQgZm9yIHRoZSBpbnNlcnRpb24gcG9pbnQgb2YgYSBuZXcgY2hpbGQgdG8gYmUgYmFzZWQgb24gYSBTVVBFUiBsb25nIHZhbHVlIGxpa2UgdGhhdCBzbyB3ZSBjbGlwIGl0IGFuZCBhc3N1bWUgdGhlIG1vc3QgcmVjZW50bHktYWRkZWQgY2hpbGQncyBlbmRUaW1lIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gIGksXG4gICAgICBvZmZzZXQ7XG5cbiAgaWYgKF9pc1N0cmluZyhwb3NpdGlvbikgJiYgKGlzTmFOKHBvc2l0aW9uKSB8fCBwb3NpdGlvbiBpbiBsYWJlbHMpKSB7XG4gICAgLy9pZiB0aGUgc3RyaW5nIGlzIGEgbnVtYmVyIGxpa2UgXCIxXCIsIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGEgbGFiZWwgd2l0aCB0aGF0IG5hbWUsIG90aGVyd2lzZSBpbnRlcnByZXQgaXQgYXMgYSBudW1iZXIgKGFic29sdXRlIHZhbHVlKS5cbiAgICBpID0gcG9zaXRpb24uY2hhckF0KDApO1xuXG4gICAgaWYgKGkgPT09IFwiPFwiIHx8IGkgPT09IFwiPlwiKSB7XG4gICAgICByZXR1cm4gKGkgPT09IFwiPFwiID8gcmVjZW50Ll9zdGFydCA6IHJlY2VudC5lbmRUaW1lKHJlY2VudC5fcmVwZWF0ID49IDApKSArIChwYXJzZUZsb2F0KHBvc2l0aW9uLnN1YnN0cigxKSkgfHwgMCk7XG4gICAgfVxuXG4gICAgaSA9IHBvc2l0aW9uLmluZGV4T2YoXCI9XCIpO1xuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBwb3NpdGlvbiBpbiBsYWJlbHMgfHwgKGxhYmVsc1twb3NpdGlvbl0gPSBjbGlwcGVkRHVyYXRpb24pO1xuICAgICAgcmV0dXJuIGxhYmVsc1twb3NpdGlvbl07XG4gICAgfVxuXG4gICAgb2Zmc2V0ID0gKyhwb3NpdGlvbi5jaGFyQXQoaSAtIDEpICsgcG9zaXRpb24uc3Vic3RyKGkgKyAxKSk7XG4gICAgcmV0dXJuIGkgPiAxID8gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbi5zdWJzdHIoMCwgaSAtIDEpKSArIG9mZnNldCA6IGNsaXBwZWREdXJhdGlvbiArIG9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbiA9PSBudWxsID8gY2xpcHBlZER1cmF0aW9uIDogK3Bvc2l0aW9uO1xufSxcbiAgICBfY29uZGl0aW9uYWxSZXR1cm4gPSBmdW5jdGlvbiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmMpIHtcbiAgcmV0dXJuIHZhbHVlIHx8IHZhbHVlID09PSAwID8gZnVuYyh2YWx1ZSkgOiBmdW5jO1xufSxcbiAgICBfY2xhbXAgPSBmdW5jdGlvbiBfY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG59LFxuICAgIGdldFVuaXQgPSBmdW5jdGlvbiBnZXRVbml0KHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgKyBcIlwiKS5zdWJzdHIoKHBhcnNlRmxvYXQodmFsdWUpICsgXCJcIikubGVuZ3RoKTtcbn0sXG4gICAgY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX2NsYW1wKG1pbiwgbWF4LCB2KTtcbiAgfSk7XG59LFxuICAgIF9zbGljZSA9IFtdLnNsaWNlLFxuICAgIF9pc0FycmF5TGlrZSA9IGZ1bmN0aW9uIF9pc0FycmF5TGlrZSh2YWx1ZSwgbm9uRW1wdHkpIHtcbiAgcmV0dXJuIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZSkgJiYgXCJsZW5ndGhcIiBpbiB2YWx1ZSAmJiAoIW5vbkVtcHR5ICYmICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUubGVuZ3RoIC0gMSBpbiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWVbMF0pKSAmJiAhdmFsdWUubm9kZVR5cGUgJiYgdmFsdWUgIT09IF93aW47XG59LFxuICAgIF9mbGF0dGVuID0gZnVuY3Rpb24gX2ZsYXR0ZW4oYXIsIGxlYXZlU3RyaW5ncywgYWNjdW11bGF0b3IpIHtcbiAgaWYgKGFjY3VtdWxhdG9yID09PSB2b2lkIDApIHtcbiAgICBhY2N1bXVsYXRvciA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGFyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF9hY2N1bXVsYXRvcjtcblxuICAgIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgfHwgX2lzQXJyYXlMaWtlKHZhbHVlLCAxKSA/IChfYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcikucHVzaC5hcHBseShfYWNjdW11bGF0b3IsIHRvQXJyYXkodmFsdWUpKSA6IGFjY3VtdWxhdG9yLnB1c2godmFsdWUpO1xuICB9KSB8fCBhY2N1bXVsYXRvcjtcbn0sXG4gICAgLy90YWtlcyBhbnkgdmFsdWUgYW5kIHJldHVybnMgYW4gYXJyYXkuIElmIGl0J3MgYSBzdHJpbmcgKGFuZCBsZWF2ZVN0cmluZ3MgaXNuJ3QgdHJ1ZSksIGl0J2xsIHVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCkgYW5kIGNvbnZlcnQgdGhhdCB0byBhbiBhcnJheS4gSXQnbGwgYWxzbyBhY2NlcHQgaXRlcmFibGVzIGxpa2UgalF1ZXJ5IG9iamVjdHMuXG50b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSwgbGVhdmVTdHJpbmdzKSB7XG4gIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgJiYgKF9jb3JlSW5pdHRlZCB8fCAhX3dha2UoKSkgPyBfc2xpY2UuY2FsbChfZG9jLnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpLCAwKSA6IF9pc0FycmF5KHZhbHVlKSA/IF9mbGF0dGVuKHZhbHVlLCBsZWF2ZVN0cmluZ3MpIDogX2lzQXJyYXlMaWtlKHZhbHVlKSA/IF9zbGljZS5jYWxsKHZhbHVlLCAwKSA6IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xufSxcbiAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0pO1xufSxcbiAgICAvLyBhbHRlcm5hdGl2ZSB0aGF0J3MgYSBiaXQgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGRpdmVyc2UgYnV0IGJpZ2dlcjogICBmb3IgKGxldCBqLCB2LCBpID0gYS5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgdiA9IGFbLS1pXSwgYVtpXSA9IGFbal0sIGFbal0gPSB2KTsgcmV0dXJuIGE7XG4vL2ZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBhcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYSBmdW5jdGlvbiB3aGljaCBjYW4gY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHtiYXNlLCBhbW91bnQsIGZyb20sIGVhc2UsIGdyaWQsIGF4aXMsIGxlbmd0aCwgZWFjaH0uIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBpbmRleCwgdGFyZ2V0LCBhcnJheS4gUmVjb2duaXplcyB0aGUgZm9sbG93aW5nXG5kaXN0cmlidXRlID0gZnVuY3Rpb24gZGlzdHJpYnV0ZSh2KSB7XG4gIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgIGVhY2g6IHZcbiAgfSxcbiAgICAgIC8vbjoxIGlzIGp1c3QgdG8gaW5kaWNhdGUgdiB3YXMgYSBudW1iZXI7IHdlIGxldmVyYWdlIHRoYXQgbGF0ZXIgdG8gc2V0IHYgYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggd2UgZ2V0LiBJZiBhIG51bWJlciBpcyBwYXNzZWQgaW4sIHdlIHRyZWF0IGl0IGxpa2UgdGhlIG9sZCBzdGFnZ2VyIHZhbHVlIHdoZXJlIDAuMSwgZm9yIGV4YW1wbGUsIHdvdWxkIG1lYW4gdGhhdCB0aGluZ3Mgd291bGQgYmUgZGlzdHJpYnV0ZWQgd2l0aCAwLjEgYmV0d2VlbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHJhdGhlciB0aGFuIGEgdG90YWwgXCJhbW91bnRcIiB0aGF0J3MgY2h1bmtlZCBvdXQgYW1vbmcgdGhlbSBhbGwuXG4gIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICBmcm9tID0gdmFycy5mcm9tIHx8IDAsXG4gICAgICBiYXNlID0gcGFyc2VGbG9hdCh2YXJzLmJhc2UpIHx8IDAsXG4gICAgICBjYWNoZSA9IHt9LFxuICAgICAgaXNEZWNpbWFsID0gZnJvbSA+IDAgJiYgZnJvbSA8IDEsXG4gICAgICByYXRpb3MgPSBpc05hTihmcm9tKSB8fCBpc0RlY2ltYWwsXG4gICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgcmF0aW9YID0gZnJvbSxcbiAgICAgIHJhdGlvWSA9IGZyb207XG5cbiAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgIHJhdGlvWCA9IHJhdGlvWSA9IHtcbiAgICAgIGNlbnRlcjogLjUsXG4gICAgICBlZGdlczogLjUsXG4gICAgICBlbmQ6IDFcbiAgICB9W2Zyb21dIHx8IDA7XG4gIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICByYXRpb1ggPSBmcm9tWzBdO1xuICAgIHJhdGlvWSA9IGZyb21bMV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGksIHRhcmdldCwgYSkge1xuICAgIHZhciBsID0gKGEgfHwgdmFycykubGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgZCxcbiAgICAgICAgaixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHdyYXBBdDtcblxuICAgIGlmICghZGlzdGFuY2VzKSB7XG4gICAgICB3cmFwQXQgPSB2YXJzLmdyaWQgPT09IFwiYXV0b1wiID8gMCA6ICh2YXJzLmdyaWQgfHwgWzEsIF9iaWdOdW1dKVsxXTtcblxuICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgbWF4ID0gLV9iaWdOdW07XG5cbiAgICAgICAgd2hpbGUgKG1heCA8IChtYXggPSBhW3dyYXBBdCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAmJiB3cmFwQXQgPCBsKSB7fVxuXG4gICAgICAgIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gcmF0aW9zID8gbCAqIHJhdGlvWSAvIHdyYXBBdCAtIC41IDogZnJvbSAvIHdyYXBBdCB8IDA7XG4gICAgICBtYXggPSAwO1xuICAgICAgbWluID0gX2JpZ051bTtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGw7IGorKykge1xuICAgICAgICB4ID0gaiAlIHdyYXBBdCAtIG9yaWdpblg7XG4gICAgICAgIHkgPSBvcmlnaW5ZIC0gKGogLyB3cmFwQXQgfCAwKTtcbiAgICAgICAgZGlzdGFuY2VzW2pdID0gZCA9ICFheGlzID8gX3NxcnQoeCAqIHggKyB5ICogeSkgOiBNYXRoLmFicyhheGlzID09PSBcInlcIiA/IHkgOiB4KTtcbiAgICAgICAgZCA+IG1heCAmJiAobWF4ID0gZCk7XG4gICAgICAgIGQgPCBtaW4gJiYgKG1pbiA9IGQpO1xuICAgICAgfVxuXG4gICAgICBmcm9tID09PSBcInJhbmRvbVwiICYmIHNodWZmbGUoZGlzdGFuY2VzKTtcbiAgICAgIGRpc3RhbmNlcy5tYXggPSBtYXggLSBtaW47XG4gICAgICBkaXN0YW5jZXMubWluID0gbWluO1xuICAgICAgZGlzdGFuY2VzLnYgPSBsID0gKHBhcnNlRmxvYXQodmFycy5hbW91bnQpIHx8IHBhcnNlRmxvYXQodmFycy5lYWNoKSAqICh3cmFwQXQgPiBsID8gbCAtIDEgOiAhYXhpcyA/IE1hdGgubWF4KHdyYXBBdCwgbCAvIHdyYXBBdCkgOiBheGlzID09PSBcInlcIiA/IGwgLyB3cmFwQXQgOiB3cmFwQXQpIHx8IDApICogKGZyb20gPT09IFwiZWRnZXNcIiA/IC0xIDogMSk7XG4gICAgICBkaXN0YW5jZXMuYiA9IGwgPCAwID8gYmFzZSAtIGwgOiBiYXNlO1xuICAgICAgZGlzdGFuY2VzLnUgPSBnZXRVbml0KHZhcnMuYW1vdW50IHx8IHZhcnMuZWFjaCkgfHwgMDsgLy91bml0XG5cbiAgICAgIGVhc2UgPSBlYXNlICYmIGwgPCAwID8gX2ludmVydEVhc2UoZWFzZSkgOiBlYXNlO1xuICAgIH1cblxuICAgIGwgPSAoZGlzdGFuY2VzW2ldIC0gZGlzdGFuY2VzLm1pbikgLyBkaXN0YW5jZXMubWF4IHx8IDA7XG4gICAgcmV0dXJuIF9yb3VuZChkaXN0YW5jZXMuYiArIChlYXNlID8gZWFzZShsKSA6IGwpICogZGlzdGFuY2VzLnYpICsgZGlzdGFuY2VzLnU7IC8vcm91bmQgaW4gb3JkZXIgdG8gd29yayBhcm91bmQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXG4gIH07XG59LFxuICAgIF9yb3VuZE1vZGlmaWVyID0gZnVuY3Rpb24gX3JvdW5kTW9kaWZpZXIodikge1xuICAvL3Bhc3MgaW4gMC4xIGdldCBhIGZ1bmN0aW9uIHRoYXQnbGwgcm91bmQgdG8gdGhlIG5lYXJlc3QgdGVudGgsIG9yIDUgdG8gcm91bmQgdG8gdGhlIGNsb3Nlc3QgNSwgb3IgMC4wMDEgdG8gdGhlIGNsb3Nlc3QgMTAwMHRoLCBldGMuXG4gIHZhciBwID0gdiA8IDEgPyBNYXRoLnBvdygxMCwgKHYgKyBcIlwiKS5sZW5ndGggLSAyKSA6IDE7IC8vdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGxpa2UgMjQgKiAwLjEgPT0gMi40MDAwMDAwMDAwMDAwMDA0KSwgd2UgY2hvcCBvZmYgYXQgYSBzcGVjaWZpYyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKG11Y2ggZmFzdGVyIHRoYW4gdG9GaXhlZCgpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyYXcpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJvdW5kKHBhcnNlRmxvYXQocmF3KSAvIHYpICogdiAqIHApIC8gcCArIChfaXNOdW1iZXIocmF3KSA/IDAgOiBnZXRVbml0KHJhdykpO1xuICB9O1xufSxcbiAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGlzMkQ7XG5cbiAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgcmFkaXVzID0gaXNBcnJheSA9IHNuYXBUby5yYWRpdXMgfHwgX2JpZ051bTtcblxuICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICBpZiAoaXMyRCA9ICFfaXNOdW1iZXIoc25hcFRvWzBdKSkge1xuICAgICAgICByYWRpdXMgKj0gcmFkaXVzOyAvL3BlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB3ZSBkb24ndCBoYXZlIHRvIE1hdGguc3FydCgpIGluIHRoZSBsb29wLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICByZXR1cm4gTWF0aC5hYnMoaXMyRCAtIHJhdykgPD0gcmFkaXVzID8gaXMyRCA6IHJhdztcbiAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy55IDogMCksXG4gICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICBpID0gc25hcFRvLmxlbmd0aCxcbiAgICAgICAgZHgsXG4gICAgICAgIGR5O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgIGR5ID0gc25hcFRvW2ldLnkgLSB5O1xuICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSBNYXRoLmFicyhzbmFwVG9baV0gLSB4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgIG1pbiA9IGR4O1xuICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICB9KTtcbn0sXG4gICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihfaXNBcnJheShtaW4pID8gIW1heCA6IHJvdW5kaW5nSW5jcmVtZW50ID09PSB0cnVlID8gISEocm91bmRpbmdJbmNyZW1lbnQgPSAwKSA6ICFyZXR1cm5GdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgLyByb3VuZGluZ0luY3JlbWVudCkgKiByb3VuZGluZ0luY3JlbWVudCAqIHJldHVybkZ1bmN0aW9uKSAvIHJldHVybkZ1bmN0aW9uO1xuICB9KTtcbn0sXG4gICAgcGlwZSA9IGZ1bmN0aW9uIHBpcGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3Rpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbnMucmVkdWNlKGZ1bmN0aW9uICh2LCBmKSB7XG4gICAgICByZXR1cm4gZih2KTtcbiAgICB9LCB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHVuaXRpemUgPSBmdW5jdGlvbiB1bml0aXplKGZ1bmMsIHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHBhcnNlRmxvYXQodmFsdWUpKSArICh1bml0IHx8IGdldFVuaXQodmFsdWUpKTtcbiAgfTtcbn0sXG4gICAgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gbWFwUmFuZ2UobWluLCBtYXgsIDAsIDEsIHZhbHVlKTtcbn0sXG4gICAgX3dyYXBBcnJheSA9IGZ1bmN0aW9uIF93cmFwQXJyYXkoYSwgd3JhcHBlciwgdmFsdWUpIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGFbfn53cmFwcGVyKGluZGV4KV07XG4gIH0pO1xufSxcbiAgICB3cmFwID0gZnVuY3Rpb24gd3JhcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgLy8gTk9URTogd3JhcCgpIENBTk5PVCBiZSBhbiBhcnJvdyBmdW5jdGlvbiEgQSB2ZXJ5IG9kZCBjb21waWxpbmcgYnVnIGNhdXNlcyBwcm9ibGVtcyAodW5yZWxhdGVkIHRvIEdTQVApLlxuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXAoMCwgbWluLmxlbmd0aCksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAocmFuZ2UgKyAodmFsdWUgLSBtaW4pICUgcmFuZ2UpICUgcmFuZ2UgKyBtaW47XG4gIH0pO1xufSxcbiAgICB3cmFwWW95byA9IGZ1bmN0aW9uIHdyYXBZb3lvKG1pbiwgbWF4LCB2YWx1ZSkge1xuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW4sXG4gICAgICB0b3RhbCA9IHJhbmdlICogMjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcFlveW8oMCwgbWluLmxlbmd0aCAtIDEpLCBtYXgpIDogX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICh0b3RhbCArICh2YWx1ZSAtIG1pbikgJSB0b3RhbCkgJSB0b3RhbCB8fCAwO1xuICAgIHJldHVybiBtaW4gKyAodmFsdWUgPiByYW5nZSA/IHRvdGFsIC0gdmFsdWUgOiB2YWx1ZSk7XG4gIH0pO1xufSxcbiAgICBfcmVwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uIF9yZXBsYWNlUmFuZG9tKHZhbHVlKSB7XG4gIC8vcmVwbGFjZXMgYWxsIG9jY3VycmVuY2VzIG9mIHJhbmRvbSguLi4pIGluIGEgc3RyaW5nIHdpdGggdGhlIGNhbGN1bGF0ZWQgcmFuZG9tIHZhbHVlLiBjYW4gYmUgYSByYW5nZSBsaWtlIHJhbmRvbSgtMTAwLCAxMDAsIDUpIG9yIGFuIGFycmF5IGxpa2UgcmFuZG9tKFswLCAxMDAsIDUwMF0pXG4gIHZhciBwcmV2ID0gMCxcbiAgICAgIHMgPSBcIlwiLFxuICAgICAgaSxcbiAgICAgIG51bXMsXG4gICAgICBlbmQsXG4gICAgICBpc0FycmF5O1xuXG4gIHdoaWxlICh+KGkgPSB2YWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiLCBwcmV2KSkpIHtcbiAgICBlbmQgPSB2YWx1ZS5pbmRleE9mKFwiKVwiLCBpKTtcbiAgICBpc0FycmF5ID0gdmFsdWUuY2hhckF0KGkgKyA3KSA9PT0gXCJbXCI7XG4gICAgbnVtcyA9IHZhbHVlLnN1YnN0cihpICsgNywgZW5kIC0gaSAtIDcpLm1hdGNoKGlzQXJyYXkgPyBfZGVsaW1pdGVkVmFsdWVFeHAgOiBfc3RyaWN0TnVtRXhwKTtcbiAgICBzICs9IHZhbHVlLnN1YnN0cihwcmV2LCBpIC0gcHJldikgKyByYW5kb20oaXNBcnJheSA/IG51bXMgOiArbnVtc1swXSwgaXNBcnJheSA/IDAgOiArbnVtc1sxXSwgK251bXNbMl0gfHwgMWUtNSk7XG4gICAgcHJldiA9IGVuZCArIDE7XG4gIH1cblxuICByZXR1cm4gcyArIHZhbHVlLnN1YnN0cihwcmV2LCB2YWx1ZS5sZW5ndGggLSBwcmV2KTtcbn0sXG4gICAgbWFwUmFuZ2UgPSBmdW5jdGlvbiBtYXBSYW5nZShpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4LCB2YWx1ZSkge1xuICB2YXIgaW5SYW5nZSA9IGluTWF4IC0gaW5NaW4sXG4gICAgICBvdXRSYW5nZSA9IG91dE1heCAtIG91dE1pbjtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIG91dE1pbiArICgodmFsdWUgLSBpbk1pbikgLyBpblJhbmdlICogb3V0UmFuZ2UgfHwgMCk7XG4gIH0pO1xufSxcbiAgICBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHN0YXJ0LCBlbmQsIHByb2dyZXNzLCBtdXRhdGUpIHtcbiAgdmFyIGZ1bmMgPSBpc05hTihzdGFydCArIGVuZCkgPyAwIDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKDEgLSBwKSAqIHN0YXJ0ICsgcCAqIGVuZDtcbiAgfTtcblxuICBpZiAoIWZ1bmMpIHtcbiAgICB2YXIgaXNTdHJpbmcgPSBfaXNTdHJpbmcoc3RhcnQpLFxuICAgICAgICBtYXN0ZXIgPSB7fSxcbiAgICAgICAgcCxcbiAgICAgICAgaSxcbiAgICAgICAgaW50ZXJwb2xhdG9ycyxcbiAgICAgICAgbCxcbiAgICAgICAgaWw7XG5cbiAgICBwcm9ncmVzcyA9PT0gdHJ1ZSAmJiAobXV0YXRlID0gMSkgJiYgKHByb2dyZXNzID0gbnVsbCk7XG5cbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHN0YXJ0ID0ge1xuICAgICAgICBwOiBzdGFydFxuICAgICAgfTtcbiAgICAgIGVuZCA9IHtcbiAgICAgICAgcDogZW5kXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoX2lzQXJyYXkoc3RhcnQpICYmICFfaXNBcnJheShlbmQpKSB7XG4gICAgICBpbnRlcnBvbGF0b3JzID0gW107XG4gICAgICBsID0gc3RhcnQubGVuZ3RoO1xuICAgICAgaWwgPSBsIC0gMjtcblxuICAgICAgZm9yIChpID0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnRlcnBvbGF0b3JzLnB1c2goaW50ZXJwb2xhdGUoc3RhcnRbaSAtIDFdLCBzdGFydFtpXSkpOyAvL2J1aWxkIHRoZSBpbnRlcnBvbGF0b3JzIHVwIGZyb250IGFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHRoYXQgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIG1hbnkgdGltZXMsIGl0IGNhbiBqdXN0IHJldXNlIHRoZW0uXG4gICAgICB9XG5cbiAgICAgIGwtLTtcblxuICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICBwICo9IGw7XG4gICAgICAgIHZhciBpID0gTWF0aC5taW4oaWwsIH5+cCk7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JzW2ldKHAgLSBpKTtcbiAgICAgIH07XG5cbiAgICAgIHByb2dyZXNzID0gZW5kO1xuICAgIH0gZWxzZSBpZiAoIW11dGF0ZSkge1xuICAgICAgc3RhcnQgPSBfbWVyZ2UoX2lzQXJyYXkoc3RhcnQpID8gW10gOiB7fSwgc3RhcnQpO1xuICAgIH1cblxuICAgIGlmICghaW50ZXJwb2xhdG9ycykge1xuICAgICAgZm9yIChwIGluIGVuZCkge1xuICAgICAgICBfYWRkUHJvcFR3ZWVuLmNhbGwobWFzdGVyLCBzdGFydCwgcCwgXCJnZXRcIiwgZW5kW3BdKTtcbiAgICAgIH1cblxuICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICByZXR1cm4gX3JlbmRlclByb3BUd2VlbnMocCwgbWFzdGVyKSB8fCAoaXNTdHJpbmcgPyBzdGFydC5wIDogc3RhcnQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHByb2dyZXNzLCBmdW5jKTtcbn0sXG4gICAgX2dldExhYmVsSW5EaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aW1lbGluZSwgZnJvbVRpbWUsIGJhY2t3YXJkKSB7XG4gIC8vdXNlZCBmb3IgbmV4dExhYmVsKCkgYW5kIHByZXZpb3VzTGFiZWwoKVxuICB2YXIgbGFiZWxzID0gdGltZWxpbmUubGFiZWxzLFxuICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgIHAsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGxhYmVsO1xuXG4gIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICBkaXN0YW5jZSA9IGxhYmVsc1twXSAtIGZyb21UaW1lO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgMCA9PT0gISFiYWNrd2FyZCAmJiBkaXN0YW5jZSAmJiBtaW4gPiAoZGlzdGFuY2UgPSBNYXRoLmFicyhkaXN0YW5jZSkpKSB7XG4gICAgICBsYWJlbCA9IHA7XG4gICAgICBtaW4gPSBkaXN0YW5jZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGFiZWw7XG59LFxuICAgIF9jYWxsYmFjayA9IGZ1bmN0aW9uIF9jYWxsYmFjayhhbmltYXRpb24sIHR5cGUsIGV4ZWN1dGVMYXp5Rmlyc3QpIHtcbiAgdmFyIHYgPSBhbmltYXRpb24udmFycyxcbiAgICAgIGNhbGxiYWNrID0gdlt0eXBlXSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNjb3BlO1xuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXTtcbiAgc2NvcGUgPSB2LmNhbGxiYWNrU2NvcGUgfHwgYW5pbWF0aW9uO1xuICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblxuICByZXR1cm4gcGFyYW1zID8gY2FsbGJhY2suYXBwbHkoc2NvcGUsIHBhcmFtcykgOiBjYWxsYmFjay5jYWxsKHNjb3BlKTtcbn0sXG4gICAgX2ludGVycnVwdCA9IGZ1bmN0aW9uIF9pbnRlcnJ1cHQoYW5pbWF0aW9uKSB7XG4gIF9yZW1vdmVGcm9tUGFyZW50KGFuaW1hdGlvbik7XG5cbiAgYW5pbWF0aW9uLnByb2dyZXNzKCkgPCAxICYmIF9jYWxsYmFjayhhbmltYXRpb24sIFwib25JbnRlcnJ1cHRcIik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9xdWlja1R3ZWVuLFxuICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICBjb25maWcgPSAhY29uZmlnLm5hbWUgJiYgY29uZmlnW1wiZGVmYXVsdFwiXSB8fCBjb25maWc7IC8vVU1EIHBhY2thZ2luZyB3cmFwcyB0aGluZ3Mgb2RkbHksIHNvIGZvciBleGFtcGxlIE1vdGlvblBhdGhIZWxwZXIgYmVjb21lcyB7TW90aW9uUGF0aEhlbHBlcjpNb3Rpb25QYXRoSGVscGVyLCBkZWZhdWx0Ok1vdGlvblBhdGhIZWxwZXJ9LlxuXG4gIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICBpc0Z1bmMgPSBfaXNGdW5jdGlvbihjb25maWcpLFxuICAgICAgUGx1Z2luID0gbmFtZSAmJiAhaXNGdW5jICYmIGNvbmZpZy5pbml0ID8gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gIH0gOiBjb25maWcsXG4gICAgICAvL2luIGNhc2Ugc29tZW9uZSBwYXNzZXMgaW4gYW4gb2JqZWN0IHRoYXQncyBub3QgYSBwbHVnaW4sIGxpa2UgQ3VzdG9tRWFzZVxuICBpbnN0YW5jZURlZmF1bHRzID0ge1xuICAgIGluaXQ6IF9lbXB0eUZ1bmMsXG4gICAgcmVuZGVyOiBfcmVuZGVyUHJvcFR3ZWVucyxcbiAgICBhZGQ6IF9hZGRQcm9wVHdlZW4sXG4gICAga2lsbDogX2tpbGxQcm9wVHdlZW5zT2YsXG4gICAgbW9kaWZpZXI6IF9hZGRQbHVnaW5Nb2RpZmllcixcbiAgICByYXdWYXJzOiAwXG4gIH0sXG4gICAgICBzdGF0aWNzID0ge1xuICAgIHRhcmdldFRlc3Q6IDAsXG4gICAgZ2V0OiAwLFxuICAgIGdldFNldHRlcjogX2dldFNldHRlcixcbiAgICBhbGlhc2VzOiB7fSxcbiAgICByZWdpc3RlcjogMFxuICB9O1xuXG4gIF93YWtlKCk7XG5cbiAgaWYgKGNvbmZpZyAhPT0gUGx1Z2luKSB7XG4gICAgaWYgKF9wbHVnaW5zW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3NldERlZmF1bHRzKFBsdWdpbiwgX3NldERlZmF1bHRzKF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgaW5zdGFuY2VEZWZhdWx0cyksIHN0YXRpY3MpKTsgLy9zdGF0aWMgbWV0aG9kc1xuXG5cbiAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTsgLy9pbnN0YW5jZSBtZXRob2RzXG5cblxuICAgIF9wbHVnaW5zW1BsdWdpbi5wcm9wID0gbmFtZV0gPSBQbHVnaW47XG5cbiAgICBpZiAoY29uZmlnLnRhcmdldFRlc3QpIHtcbiAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbiAgICB9XG5cbiAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7IC8vZm9yIHRoZSBnbG9iYWwgbmFtZS4gXCJtb3Rpb25QYXRoXCIgc2hvdWxkIGJlY29tZSBNb3Rpb25QYXRoUGx1Z2luXG4gIH1cblxuICBfYWRkR2xvYmFsKG5hbWUsIFBsdWdpbik7XG5cbiAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENPTE9SU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXzI1NSA9IDI1NSxcbiAgICBfY29sb3JMb29rdXAgPSB7XG4gIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgbGltZTogWzAsIF8yNTUsIDBdLFxuICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgYmxhY2s6IFswLCAwLCAwXSxcbiAgbWFyb29uOiBbMTI4LCAwLCAwXSxcbiAgdGVhbDogWzAsIDEyOCwgMTI4XSxcbiAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICBuYXZ5OiBbMCwgMCwgMTI4XSxcbiAgd2hpdGU6IFtfMjU1LCBfMjU1LCBfMjU1XSxcbiAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gIHllbGxvdzogW18yNTUsIF8yNTUsIDBdLFxuICBvcmFuZ2U6IFtfMjU1LCAxNjUsIDBdLFxuICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gIHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcbiAgZ3JlZW46IFswLCAxMjgsIDBdLFxuICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgcGluazogW18yNTUsIDE5MiwgMjAzXSxcbiAgY3lhbjogWzAsIF8yNTUsIF8yNTVdLFxuICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG59LFxuICAgIF9odWUgPSBmdW5jdGlvbiBfaHVlKGgsIG0xLCBtMikge1xuICBoID0gaCA8IDAgPyBoICsgMSA6IGggPiAxID8gaCAtIDEgOiBoO1xuICByZXR1cm4gKGggKiA2IDwgMSA/IG0xICsgKG0yIC0gbTEpICogaCAqIDYgOiBoIDwgLjUgPyBtMiA6IGggKiAzIDwgMiA/IG0xICsgKG0yIC0gbTEpICogKDIgLyAzIC0gaCkgKiA2IDogbTEpICogXzI1NSArIC41IHwgMDtcbn0sXG4gICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgdmFyIGEgPSAhdiA/IF9jb2xvckxvb2t1cC5ibGFjayA6IF9pc051bWJlcih2KSA/IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV0gOiAwLFxuICAgICAgcixcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgaCxcbiAgICAgIHMsXG4gICAgICBsLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgZCxcbiAgICAgIHdhc0hTTDtcblxuICBpZiAoIWEpIHtcbiAgICBpZiAodi5zdWJzdHIoLTEpID09PSBcIixcIikge1xuICAgICAgLy9zb21ldGltZXMgYSB0cmFpbGluZyBjb21tYSBpcyBpbmNsdWRlZCBhbmQgd2Ugc2hvdWxkIGNob3AgaXQgb2ZmICh0eXBpY2FsbHkgZnJvbSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcyBsaWtlIGEgdGV4dFNoYWRvdzpcIjJweCAycHggMnB4IGJsdWUsIDVweCA1cHggNXB4IHJnYigyNTUsMCwwKVwiIC0gaW4gdGhpcyBleGFtcGxlIFwiYmx1ZSxcIiBoYXMgYSB0cmFpbGluZyBjb21tYS4gV2UgY291bGQgc3RyaXAgaXQgb3V0IGluc2lkZSBwYXJzZUNvbXBsZXgoKSBidXQgd2UnZCBuZWVkIHRvIGRvIGl0IHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgcGx1cyBpdCB3b3VsZG4ndCBwcm92aWRlIHByb3RlY3Rpb24gZnJvbSBvdGhlciBwb3RlbnRpYWwgc2NlbmFyaW9zIGxpa2UgaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgc2ltaWxhciB2YWx1ZS5cbiAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlmIChfY29sb3JMb29rdXBbdl0pIHtcbiAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgfSBlbHNlIGlmICh2LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIGlmICh2Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAvL2ZvciBzaG9ydGhhbmQgbGlrZSAjOUYwXG4gICAgICAgIHIgPSB2LmNoYXJBdCgxKTtcbiAgICAgICAgZyA9IHYuY2hhckF0KDIpO1xuICAgICAgICBiID0gdi5jaGFyQXQoMyk7XG4gICAgICAgIHYgPSBcIiNcIiArIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgICAgIH1cblxuICAgICAgdiA9IHBhcnNlSW50KHYuc3Vic3RyKDEpLCAxNik7XG4gICAgICBhID0gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XTtcbiAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICBhID0gd2FzSFNMID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKTtcblxuICAgICAgaWYgKCF0b0hTTCkge1xuICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgIHMgPSArYVsxXSAvIDEwMDtcbiAgICAgICAgbCA9ICthWzJdIC8gMTAwO1xuICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgciA9IGwgKiAyIC0gZztcbiAgICAgICAgYS5sZW5ndGggPiAzICYmIChhWzNdICo9IDEpOyAvL2Nhc3QgYXMgbnVtYmVyXG5cbiAgICAgICAgYVswXSA9IF9odWUoaCArIDEgLyAzLCByLCBnKTtcbiAgICAgICAgYVsxXSA9IF9odWUoaCwgciwgZyk7XG4gICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICB9IGVsc2UgaWYgKH52LmluZGV4T2YoXCI9XCIpKSB7XG4gICAgICAgIC8vaWYgcmVsYXRpdmUgdmFsdWVzIGFyZSBmb3VuZCwganVzdCByZXR1cm4gdGhlIHJhdyBzdHJpbmdzIHdpdGggdGhlIHJlbGF0aXZlIHByZWZpeGVzIGluIHBsYWNlLlxuICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApIHx8IF9jb2xvckxvb2t1cC50cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBhID0gYS5tYXAoTnVtYmVyKTtcbiAgfVxuXG4gIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgciA9IGFbMF0gLyBfMjU1O1xuICAgIGcgPSBhWzFdIC8gXzI1NTtcbiAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0gbWF4IC0gbWluO1xuICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgaCAqPSA2MDtcbiAgICB9XG5cbiAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICBhWzFdID0gfn4ocyAqIDEwMCArIC41KTtcbiAgICBhWzJdID0gfn4obCAqIDEwMCArIC41KTtcbiAgfVxuXG4gIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gIHJldHVybiBhO1xufSxcbiAgICBfY29sb3JPcmRlckRhdGEgPSBmdW5jdGlvbiBfY29sb3JPcmRlckRhdGEodikge1xuICAvLyBzdHJpcHMgb3V0IHRoZSBjb2xvcnMgZnJvbSB0aGUgc3RyaW5nLCBmaW5kcyBhbGwgdGhlIG51bWVyaWMgc2xvdHMgKHdpdGggdW5pdHMpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlLiBUaGUgQXJyYXkgYWxzbyBoYXMgYSBcImNcIiBwcm9wZXJ0eSB3aGljaCBpcyBhbiBBcnJheSBvZiB0aGUgaW5kZXggdmFsdWVzIHdoZXJlIHRoZSBjb2xvcnMgYmVsb25nLiBUaGlzIGlzIHRvIGhlbHAgd29yayBhcm91bmQgaXNzdWVzIHdoZXJlIHRoZXJlJ3MgYSBtaXMtbWF0Y2hlZCBvcmRlciBvZiBjb2xvci9udW1lcmljIGRhdGEgbGlrZSBkcm9wLXNoYWRvdygjZjAwIDBweCAxcHggMnB4KSBhbmQgZHJvcC1zaGFkb3coMHggMXB4IDJweCAjZjAwKS4gVGhpcyBpcyBiYXNpY2FsbHkgYSBoZWxwZXIgZnVuY3Rpb24gdXNlZCBpbiBfZm9ybWF0Q29sb3JzKClcbiAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgYyA9IFtdLFxuICAgICAgaSA9IC0xO1xuICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIHZhciBhID0gdi5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgYSk7XG4gICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgfSk7XG4gIHZhbHVlcy5jID0gYztcbiAgcmV0dXJuIHZhbHVlcztcbn0sXG4gICAgX2Zvcm1hdENvbG9ycyA9IGZ1bmN0aW9uIF9mb3JtYXRDb2xvcnMocywgdG9IU0wsIG9yZGVyTWF0Y2hEYXRhKSB7XG4gIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgY29sb3JzID0gKHMgKyByZXN1bHQpLm1hdGNoKF9jb2xvckV4cCksXG4gICAgICB0eXBlID0gdG9IU0wgPyBcImhzbGEoXCIgOiBcInJnYmEoXCIsXG4gICAgICBpID0gMCxcbiAgICAgIGMsXG4gICAgICBzaGVsbCxcbiAgICAgIGQsXG4gICAgICBsO1xuXG4gIGlmICghY29sb3JzKSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gIH0pO1xuXG4gIGlmIChvcmRlck1hdGNoRGF0YSkge1xuICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgYyA9IG9yZGVyTWF0Y2hEYXRhLmM7XG5cbiAgICBpZiAoYy5qb2luKHJlc3VsdCkgIT09IGQuYy5qb2luKHJlc3VsdCkpIHtcbiAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaGVsbCkge1xuICAgIHNoZWxsID0gcy5zcGxpdChfY29sb3JFeHApO1xuICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArIGNvbG9yc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICsgc2hlbGxbbF07XG59LFxuICAgIF9jb2xvckV4cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHMgPSBcIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17M30pezEsMn1cXFxcYlwiLFxuICAgICAgLy93ZSdsbCBkeW5hbWljYWxseSBidWlsZCB0aGlzIFJlZ3VsYXIgRXhwcmVzc2lvbiB0byBjb25zZXJ2ZSBmaWxlIHNpemUuIEFmdGVyIGJ1aWxkaW5nIGl0LCBpdCB3aWxsIGJlIGFibGUgdG8gZmluZCByZ2IoKSwgcmdiYSgpLCAjIChoZXhhZGVjaW1hbCksIGFuZCBuYW1lZCBjb2xvciB2YWx1ZXMgbGlrZSByZWQsIGJsdWUsIHB1cnBsZSwgZXRjLixcbiAgcDtcblxuICBmb3IgKHAgaW4gX2NvbG9yTG9va3VwKSB7XG4gICAgcyArPSBcInxcIiArIHAgKyBcIlxcXFxiXCI7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChzICsgXCIpXCIsIFwiZ2lcIik7XG59KCksXG4gICAgX2hzbEV4cCA9IC9oc2xbYV0/XFwoLyxcbiAgICBfY29sb3JTdHJpbmdGaWx0ZXIgPSBmdW5jdGlvbiBfY29sb3JTdHJpbmdGaWx0ZXIoYSkge1xuICB2YXIgY29tYmluZWQgPSBhLmpvaW4oXCIgXCIpLFxuICAgICAgdG9IU0w7XG4gIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gIGlmIChfY29sb3JFeHAudGVzdChjb21iaW5lZCkpIHtcbiAgICB0b0hTTCA9IF9oc2xFeHAudGVzdChjb21iaW5lZCk7XG4gICAgYVsxXSA9IF9mb3JtYXRDb2xvcnMoYVsxXSwgdG9IU0wpO1xuICAgIGFbMF0gPSBfZm9ybWF0Q29sb3JzKGFbMF0sIHRvSFNMLCBfY29sb3JPcmRlckRhdGEoYVsxXSkpOyAvLyBtYWtlIHN1cmUgdGhlIG9yZGVyIG9mIG51bWJlcnMvY29sb3JzIG1hdGNoIHdpdGggdGhlIEVORCB2YWx1ZS5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJQ0tFUlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX3RpY2tlckFjdGl2ZSxcbiAgICBfdGlja2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSA1MDAsXG4gICAgICBfYWRqdXN0ZWRMYWcgPSAzMyxcbiAgICAgIF9zdGFydFRpbWUgPSBfZ2V0VGltZSgpLFxuICAgICAgX2xhc3RVcGRhdGUgPSBfc3RhcnRUaW1lLFxuICAgICAgX2dhcCA9IDEwMDAgLyAyNDAsXG4gICAgICBfbmV4dFRpbWUgPSBfZ2FwLFxuICAgICAgX2xpc3RlbmVycyA9IFtdLFxuICAgICAgX2lkLFxuICAgICAgX3JlcSxcbiAgICAgIF9yYWYsXG4gICAgICBfc2VsZixcbiAgICAgIF9kZWx0YSxcbiAgICAgIF9pLFxuICAgICAgX3RpY2sgPSBmdW5jdGlvbiBfdGljayh2KSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfZ2V0VGltZSgpIC0gX2xhc3RVcGRhdGUsXG4gICAgICAgIG1hbnVhbCA9IHYgPT09IHRydWUsXG4gICAgICAgIG92ZXJsYXAsXG4gICAgICAgIGRpc3BhdGNoLFxuICAgICAgICB0aW1lLFxuICAgICAgICBmcmFtZTtcblxuICAgIGVsYXBzZWQgPiBfbGFnVGhyZXNob2xkICYmIChfc3RhcnRUaW1lICs9IGVsYXBzZWQgLSBfYWRqdXN0ZWRMYWcpO1xuICAgIF9sYXN0VXBkYXRlICs9IGVsYXBzZWQ7XG4gICAgdGltZSA9IF9sYXN0VXBkYXRlIC0gX3N0YXJ0VGltZTtcbiAgICBvdmVybGFwID0gdGltZSAtIF9uZXh0VGltZTtcblxuICAgIGlmIChvdmVybGFwID4gMCB8fCBtYW51YWwpIHtcbiAgICAgIGZyYW1lID0gKytfc2VsZi5mcmFtZTtcbiAgICAgIF9kZWx0YSA9IHRpbWUgLSBfc2VsZi50aW1lICogMTAwMDtcbiAgICAgIF9zZWxmLnRpbWUgPSB0aW1lID0gdGltZSAvIDEwMDA7XG4gICAgICBfbmV4dFRpbWUgKz0gb3ZlcmxhcCArIChvdmVybGFwID49IF9nYXAgPyA0IDogX2dhcCAtIG92ZXJsYXApO1xuICAgICAgZGlzcGF0Y2ggPSAxO1xuICAgIH1cblxuICAgIG1hbnVhbCB8fCAoX2lkID0gX3JlcShfdGljaykpOyAvL21ha2Ugc3VyZSB0aGUgcmVxdWVzdCBpcyBtYWRlIGJlZm9yZSB3ZSBkaXNwYXRjaCB0aGUgXCJ0aWNrXCIgZXZlbnQgc28gdGhhdCB0aW1pbmcgaXMgbWFpbnRhaW5lZC4gT3RoZXJ3aXNlLCBpZiBwcm9jZXNzaW5nIHRoZSBcInRpY2tcIiByZXF1aXJlcyBhIGJ1bmNoIG9mIHRpbWUgKGxpa2UgMTVtcykgYW5kIHdlJ3JlIHVzaW5nIGEgc2V0VGltZW91dCgpIHRoYXQncyBiYXNlZCBvbiAxNi43bXMsIGl0J2QgdGVjaG5pY2FsbHkgdGFrZSAzMS43bXMgYmV0d2VlbiBmcmFtZXMgb3RoZXJ3aXNlLlxuXG4gICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICBmb3IgKF9pID0gMDsgX2kgPCBfbGlzdGVuZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAvLyB1c2UgX2kgYW5kIGNoZWNrIF9saXN0ZW5lcnMubGVuZ3RoIGluc3RlYWQgb2YgYSB2YXJpYWJsZSBiZWNhdXNlIGEgbGlzdGVuZXIgY291bGQgZ2V0IHJlbW92ZWQgZHVyaW5nIHRoZSBsb29wLCBhbmQgaWYgdGhhdCBoYXBwZW5zIHRvIGFuIGVsZW1lbnQgbGVzcyB0aGFuIHRoZSBjdXJyZW50IGluZGV4LCBpdCdkIHRocm93IHRoaW5ncyBvZmYgaW4gdGhlIGxvb3AuXG4gICAgICAgIF9saXN0ZW5lcnNbX2ldKHRpbWUsIF9kZWx0YSwgZnJhbWUsIHYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfc2VsZiA9IHtcbiAgICB0aW1lOiAwLFxuICAgIGZyYW1lOiAwLFxuICAgIHRpY2s6IGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICBfdGljayh0cnVlKTtcbiAgICB9LFxuICAgIGRlbHRhUmF0aW86IGZ1bmN0aW9uIGRlbHRhUmF0aW8oZnBzKSB7XG4gICAgICByZXR1cm4gX2RlbHRhIC8gKDEwMDAgLyAoZnBzIHx8IDYwKSk7XG4gICAgfSxcbiAgICB3YWtlOiBmdW5jdGlvbiB3YWtlKCkge1xuICAgICAgaWYgKF9jb3JlUmVhZHkpIHtcbiAgICAgICAgaWYgKCFfY29yZUluaXR0ZWQgJiYgX3dpbmRvd0V4aXN0cygpKSB7XG4gICAgICAgICAgX3dpbiA9IF9jb3JlSW5pdHRlZCA9IHdpbmRvdztcbiAgICAgICAgICBfZG9jID0gX3dpbi5kb2N1bWVudCB8fCB7fTtcbiAgICAgICAgICBfZ2xvYmFscy5nc2FwID0gZ3NhcDtcbiAgICAgICAgICAoX3dpbi5nc2FwVmVyc2lvbnMgfHwgKF93aW4uZ3NhcFZlcnNpb25zID0gW10pKS5wdXNoKGdzYXAudmVyc2lvbik7XG5cbiAgICAgICAgICBfaW5zdGFsbChfaW5zdGFsbFNjb3BlIHx8IF93aW4uR3JlZW5Tb2NrR2xvYmFscyB8fCAhX3dpbi5nc2FwICYmIF93aW4gfHwge30pO1xuXG4gICAgICAgICAgX3JhZiA9IF93aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgX2lkICYmIF9zZWxmLnNsZWVwKCk7XG5cbiAgICAgICAgX3JlcSA9IF9yYWYgfHwgZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmLCBfbmV4dFRpbWUgLSBfc2VsZi50aW1lICogMTAwMCArIDEgfCAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGlja2VyQWN0aXZlID0gMTtcblxuICAgICAgICBfdGljaygyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsZWVwOiBmdW5jdGlvbiBzbGVlcCgpIHtcbiAgICAgIChfcmFmID8gX3dpbi5jYW5jZWxBbmltYXRpb25GcmFtZSA6IGNsZWFyVGltZW91dCkoX2lkKTtcbiAgICAgIF90aWNrZXJBY3RpdmUgPSAwO1xuICAgICAgX3JlcSA9IF9lbXB0eUZ1bmM7XG4gICAgfSxcbiAgICBsYWdTbW9vdGhpbmc6IGZ1bmN0aW9uIGxhZ1Ntb290aGluZyh0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG4gICAgICBfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEgLyBfdGlueU51bTsgLy96ZXJvIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNpY2FsbHkgdW5saW1pdGVkXG5cbiAgICAgIF9hZGp1c3RlZExhZyA9IE1hdGgubWluKGFkanVzdGVkTGFnLCBfbGFnVGhyZXNob2xkLCAwKTtcbiAgICB9LFxuICAgIGZwczogZnVuY3Rpb24gZnBzKF9mcHMpIHtcbiAgICAgIF9nYXAgPSAxMDAwIC8gKF9mcHMgfHwgMjQwKTtcbiAgICAgIF9uZXh0VGltZSA9IF9zZWxmLnRpbWUgKiAxMDAwICsgX2dhcDtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gYWRkKGNhbGxiYWNrKSB7XG4gICAgICBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spIDwgMCAmJiBfbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICBfd2FrZSgpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpO1xuICAgICAgfihpID0gX2xpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSkgJiYgX2xpc3RlbmVycy5zcGxpY2UoaSwgMSkgJiYgX2kgPj0gaSAmJiBfaS0tO1xuICAgIH0sXG4gICAgX2xpc3RlbmVyczogX2xpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gX3NlbGY7XG59KCksXG4gICAgX3dha2UgPSBmdW5jdGlvbiBfd2FrZSgpIHtcbiAgcmV0dXJuICFfdGlja2VyQWN0aXZlICYmIF90aWNrZXIud2FrZSgpO1xufSxcbiAgICAvL2Fsc28gZW5zdXJlcyB0aGUgY29yZSBjbGFzc2VzIGFyZSBpbml0aWFsaXplZC5cblxuLypcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBFQVNJTkdcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbl9lYXNlTWFwID0ge30sXG4gICAgX2N1c3RvbUVhc2VFeHAgPSAvXltcXGQuXFwtTV1bXFxkLlxcLSxcXHNdLyxcbiAgICBfcXVvdGVzRXhwID0gL1tcIiddL2csXG4gICAgX3BhcnNlT2JqZWN0SW5TdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VPYmplY3RJblN0cmluZyh2YWx1ZSkge1xuICAvL3Rha2VzIGEgc3RyaW5nIGxpa2UgXCJ7d2lnZ2xlczoxMCwgdHlwZTphbnRpY2lwYXRlfSlcIiBhbmQgdHVybnMgaXQgaW50byBhIHJlYWwgb2JqZWN0LiBOb3RpY2UgaXQgZW5kcyBpbiBcIilcIiBhbmQgaW5jbHVkZXMgdGhlIHt9IHdyYXBwZXJzLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugb25seSB1c2UgdGhpcyBmdW5jdGlvbiBmb3IgcGFyc2luZyBlYXNlIGNvbmZpZ3MgYW5kIHByaW9yaXRpemVkIG9wdGltaXphdGlvbiByYXRoZXIgdGhhbiByZXVzYWJpbGl0eS5cbiAgdmFyIG9iaiA9IHt9LFxuICAgICAgc3BsaXQgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoIC0gMykuc3BsaXQoXCI6XCIpLFxuICAgICAga2V5ID0gc3BsaXRbMF0sXG4gICAgICBpID0gMSxcbiAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXG4gICAgICBpbmRleCxcbiAgICAgIHZhbCxcbiAgICAgIHBhcnNlZFZhbDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHZhbCA9IHNwbGl0W2ldO1xuICAgIGluZGV4ID0gaSAhPT0gbCAtIDEgPyB2YWwubGFzdEluZGV4T2YoXCIsXCIpIDogdmFsLmxlbmd0aDtcbiAgICBwYXJzZWRWYWwgPSB2YWwuc3Vic3RyKDAsIGluZGV4KTtcbiAgICBvYmpba2V5XSA9IGlzTmFOKHBhcnNlZFZhbCkgPyBwYXJzZWRWYWwucmVwbGFjZShfcXVvdGVzRXhwLCBcIlwiKS50cmltKCkgOiArcGFyc2VkVmFsO1xuICAgIGtleSA9IHZhbC5zdWJzdHIoaW5kZXggKyAxKS50cmltKCk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfdmFsdWVJblBhcmVudGhlc2VzID0gZnVuY3Rpb24gX3ZhbHVlSW5QYXJlbnRoZXNlcyh2YWx1ZSkge1xuICB2YXIgb3BlbiA9IHZhbHVlLmluZGV4T2YoXCIoXCIpICsgMSxcbiAgICAgIGNsb3NlID0gdmFsdWUuaW5kZXhPZihcIilcIiksXG4gICAgICBuZXN0ZWQgPSB2YWx1ZS5pbmRleE9mKFwiKFwiLCBvcGVuKTtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhvcGVuLCB+bmVzdGVkICYmIG5lc3RlZCA8IGNsb3NlID8gdmFsdWUuaW5kZXhPZihcIilcIiwgY2xvc2UgKyAxKSA6IGNsb3NlKTtcbn0sXG4gICAgX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nKG5hbWUpIHtcbiAgLy9uYW1lIGNhbiBiZSBhIHN0cmluZyBsaWtlIFwiZWxhc3RpYy5vdXQoMSwwLjUpXCIsIGFuZCBwYXNzIGluIF9lYXNlTWFwIGFzIG9iaiBhbmQgaXQnbGwgcGFyc2UgaXQgb3V0IGFuZCBjYWxsIHRoZSBhY3R1YWwgZnVuY3Rpb24gbGlrZSBfZWFzZU1hcC5FbGFzdGljLmVhc2VPdXQuY29uZmlnKDEsMC41KS4gSXQgd2lsbCBhbHNvIHBhcnNlIGN1c3RvbSBlYXNlIHN0cmluZ3MgYXMgbG9uZyBhcyBDdXN0b21FYXNlIGlzIGxvYWRlZCBhbmQgcmVnaXN0ZXJlZCAoaW50ZXJuYWxseSBhcyBfZWFzZU1hcC5fQ0UpLlxuICB2YXIgc3BsaXQgPSAobmFtZSArIFwiXCIpLnNwbGl0KFwiKFwiKSxcbiAgICAgIGVhc2UgPSBfZWFzZU1hcFtzcGxpdFswXV07XG4gIHJldHVybiBlYXNlICYmIHNwbGl0Lmxlbmd0aCA+IDEgJiYgZWFzZS5jb25maWcgPyBlYXNlLmNvbmZpZy5hcHBseShudWxsLCB+bmFtZS5pbmRleE9mKFwie1wiKSA/IFtfcGFyc2VPYmplY3RJblN0cmluZyhzcGxpdFsxXSldIDogX3ZhbHVlSW5QYXJlbnRoZXNlcyhuYW1lKS5zcGxpdChcIixcIikubWFwKF9udW1lcmljSWZQb3NzaWJsZSkpIDogX2Vhc2VNYXAuX0NFICYmIF9jdXN0b21FYXNlRXhwLnRlc3QobmFtZSkgPyBfZWFzZU1hcC5fQ0UoXCJcIiwgbmFtZSkgOiBlYXNlO1xufSxcbiAgICBfaW52ZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnZlcnRFYXNlKGVhc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlKDEgLSBwKTtcbiAgfTtcbn0sXG4gICAgLy8gYWxsb3cgeW95b0Vhc2UgdG8gYmUgc2V0IGluIGNoaWxkcmVuIGFuZCBoYXZlIHRob3NlIGFmZmVjdGVkIHdoZW4gdGhlIHBhcmVudC9hbmNlc3RvciB0aW1lbGluZSB5b3lvcy5cbl9wcm9wYWdhdGVZb3lvRWFzZSA9IGZ1bmN0aW9uIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKSB7XG4gIHZhciBjaGlsZCA9IHRpbWVsaW5lLl9maXJzdCxcbiAgICAgIGVhc2U7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVGltZWxpbmUpIHtcbiAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZShjaGlsZCwgaXNZb3lvKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnZhcnMueW95b0Vhc2UgJiYgKCFjaGlsZC5feW95byB8fCAhY2hpbGQuX3JlcGVhdCkgJiYgY2hpbGQuX3lveW8gIT09IGlzWW95bykge1xuICAgICAgaWYgKGNoaWxkLnRpbWVsaW5lKSB7XG4gICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZShjaGlsZC50aW1lbGluZSwgaXNZb3lvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2UgPSBjaGlsZC5fZWFzZTtcbiAgICAgICAgY2hpbGQuX2Vhc2UgPSBjaGlsZC5feUVhc2U7XG4gICAgICAgIGNoaWxkLl95RWFzZSA9IGVhc2U7XG4gICAgICAgIGNoaWxkLl95b3lvID0gaXNZb3lvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gIH1cbn0sXG4gICAgX3BhcnNlRWFzZSA9IGZ1bmN0aW9uIF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgcmV0dXJuICFlYXNlID8gZGVmYXVsdEVhc2UgOiAoX2lzRnVuY3Rpb24oZWFzZSkgPyBlYXNlIDogX2Vhc2VNYXBbZWFzZV0gfHwgX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nKGVhc2UpKSB8fCBkZWZhdWx0RWFzZTtcbn0sXG4gICAgX2luc2VydEVhc2UgPSBmdW5jdGlvbiBfaW5zZXJ0RWFzZShuYW1lcywgZWFzZUluLCBlYXNlT3V0LCBlYXNlSW5PdXQpIHtcbiAgaWYgKGVhc2VPdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICAgIHJldHVybiAxIC0gZWFzZUluKDEgLSBwKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGVhc2VJbk91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZUluT3V0ID0gZnVuY3Rpb24gZWFzZUluT3V0KHApIHtcbiAgICAgIHJldHVybiBwIDwgLjUgPyBlYXNlSW4ocCAqIDIpIC8gMiA6IDEgLSBlYXNlSW4oKDEgLSBwKSAqIDIpIC8gMjtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGVhc2UgPSB7XG4gICAgZWFzZUluOiBlYXNlSW4sXG4gICAgZWFzZU91dDogZWFzZU91dCxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dFxuICB9LFxuICAgICAgbG93ZXJjYXNlTmFtZTtcblxuICBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2Vhc2VNYXBbbmFtZV0gPSBfZ2xvYmFsc1tuYW1lXSA9IGVhc2U7XG4gICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKV0gPSBlYXNlT3V0O1xuXG4gICAgZm9yICh2YXIgcCBpbiBlYXNlKSB7XG4gICAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lICsgKHAgPT09IFwiZWFzZUluXCIgPyBcIi5pblwiIDogcCA9PT0gXCJlYXNlT3V0XCIgPyBcIi5vdXRcIiA6IFwiLmluT3V0XCIpXSA9IF9lYXNlTWFwW25hbWUgKyBcIi5cIiArIHBdID0gZWFzZVtwXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfZWFzZUluT3V0RnJvbU91dCA9IGZ1bmN0aW9uIF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/ICgxIC0gZWFzZU91dCgxIC0gcCAqIDIpKSAvIDIgOiAuNSArIGVhc2VPdXQoKHAgLSAuNSkgKiAyKSAvIDI7XG4gIH07XG59LFxuICAgIF9jb25maWdFbGFzdGljID0gZnVuY3Rpb24gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgdmFyIHAxID0gYW1wbGl0dWRlID49IDEgPyBhbXBsaXR1ZGUgOiAxLFxuICAgICAgLy9ub3RlOiBpZiBhbXBsaXR1ZGUgaXMgPCAxLCB3ZSBzaW1wbHkgYWRqdXN0IHRoZSBwZXJpb2QgZm9yIGEgbW9yZSBuYXR1cmFsIGZlZWwuIE90aGVyd2lzZSB0aGUgbWF0aCBkb2Vzbid0IHdvcmsgcmlnaHQgYW5kIHRoZSBjdXJ2ZSBzdGFydHMgYXQgMS5cbiAgcDIgPSAocGVyaW9kIHx8ICh0eXBlID8gLjMgOiAuNDUpKSAvIChhbXBsaXR1ZGUgPCAxID8gYW1wbGl0dWRlIDogMSksXG4gICAgICBwMyA9IHAyIC8gXzJQSSAqIChNYXRoLmFzaW4oMSAvIHAxKSB8fCAwKSxcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA9PT0gMSA/IDEgOiBwMSAqIE1hdGgucG93KDIsIC0xMCAqIHApICogX3NpbigocCAtIHAzKSAqIHAyKSArIDE7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBwMiA9IF8yUEkgLyBwMjsgLy9wcmVjYWxjdWxhdGUgdG8gb3B0aW1pemVcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgIHJldHVybiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCk7XG4gIH07XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9jb25maWdCYWNrID0gZnVuY3Rpb24gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KSB7XG4gIGlmIChvdmVyc2hvb3QgPT09IHZvaWQgMCkge1xuICAgIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG4gIH1cblxuICB2YXIgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID8gLS1wICogcCAqICgob3ZlcnNob290ICsgMSkgKiBwICsgb3ZlcnNob290KSArIDEgOiAwO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAob3ZlcnNob290KSB7XG4gICAgcmV0dXJuIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCk7XG4gIH07XG5cbiAgcmV0dXJuIGVhc2U7XG59OyAvLyBhIGNoZWFwZXIgKGtiIGFuZCBjcHUpIGJ1dCBtb3JlIG1pbGQgd2F5IHRvIGdldCBhIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSBieSBmZWVkaW5nIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlID0gcmF0aW8gPT4ge1xuLy8gXHRsZXQgeSA9IDAuNSArIHJhdGlvIC8gMjtcbi8vIFx0cmV0dXJuIHAgPT4gKDIgKiAoMSAtIHApICogcCAqIHkgKyBwICogcCk7XG4vLyB9LFxuLy8gYSBzdHJvbmdlciAoYnV0IG1vcmUgZXhwZW5zaXZlIGtiL2NwdSkgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIHRoYXQgbGV0cyB5b3UgZmVlZCBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZVN0cm9uZyA9IHJhdGlvID0+IHtcbi8vIFx0cmF0aW8gPSAuNSArIHJhdGlvIC8gMjtcbi8vIFx0bGV0IG8gPSAxIC8gMyAqIChyYXRpbyA8IC41ID8gcmF0aW8gOiAxIC0gcmF0aW8pLFxuLy8gXHRcdGIgPSByYXRpbyAtIG8sXG4vLyBcdFx0YyA9IHJhdGlvICsgbztcbi8vIFx0cmV0dXJuIHAgPT4gcCA9PT0gMSA/IHAgOiAzICogYiAqICgxIC0gcCkgKiAoMSAtIHApICogcCArIDMgKiBjICogKDEgLSBwKSAqIHAgKiBwICsgcCAqIHAgKiBwO1xuLy8gfTtcblxuXG5fZm9yRWFjaE5hbWUoXCJMaW5lYXIsUXVhZCxDdWJpYyxRdWFydCxRdWludCxTdHJvbmdcIiwgZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgdmFyIHBvd2VyID0gaSA8IDUgPyBpICsgMSA6IGk7XG5cbiAgX2luc2VydEVhc2UobmFtZSArIFwiLFBvd2VyXCIgKyAocG93ZXIgLSAxKSwgaSA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfSA6IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHA7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gcCwgcG93ZXIpO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyBNYXRoLnBvdyhwICogMiwgcG93ZXIpIC8gMiA6IDEgLSBNYXRoLnBvdygoMSAtIHApICogMiwgcG93ZXIpIC8gMjtcbiAgfSk7XG59KTtcblxuX2Vhc2VNYXAuTGluZWFyLmVhc2VOb25lID0gX2Vhc2VNYXAubm9uZSA9IF9lYXNlTWFwLkxpbmVhci5lYXNlSW47XG5cbl9pbnNlcnRFYXNlKFwiRWxhc3RpY1wiLCBfY29uZmlnRWxhc3RpYyhcImluXCIpLCBfY29uZmlnRWxhc3RpYyhcIm91dFwiKSwgX2NvbmZpZ0VsYXN0aWMoKSk7XG5cbihmdW5jdGlvbiAobiwgYykge1xuICB2YXIgbjEgPSAxIC8gYyxcbiAgICAgIG4yID0gMiAqIG4xLFxuICAgICAgbjMgPSAyLjUgKiBuMSxcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA8IG4xID8gbiAqIHAgKiBwIDogcCA8IG4yID8gbiAqIE1hdGgucG93KHAgLSAxLjUgLyBjLCAyKSArIC43NSA6IHAgPCBuMyA/IG4gKiAocCAtPSAyLjI1IC8gYykgKiBwICsgLjkzNzUgOiBuICogTWF0aC5wb3cocCAtIDIuNjI1IC8gYywgMikgKyAuOTg0Mzc1O1xuICB9O1xuXG4gIF9pbnNlcnRFYXNlKFwiQm91bmNlXCIsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSwgZWFzZU91dCk7XG59KSg3LjU2MjUsIDIuNzUpO1xuXG5faW5zZXJ0RWFzZShcIkV4cG9cIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPyBNYXRoLnBvdygyLCAxMCAqIChwIC0gMSkpIDogMDtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkNpcmNcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIC0oX3NxcnQoMSAtIHAgKiBwKSAtIDEpO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiU2luZVwiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA9PT0gMSA/IDEgOiAtX2NvcyhwICogX0hBTEZfUEkpICsgMTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkJhY2tcIiwgX2NvbmZpZ0JhY2soXCJpblwiKSwgX2NvbmZpZ0JhY2soXCJvdXRcIiksIF9jb25maWdCYWNrKCkpO1xuXG5fZWFzZU1hcC5TdGVwcGVkRWFzZSA9IF9lYXNlTWFwLnN0ZXBzID0gX2dsb2JhbHMuU3RlcHBlZEVhc2UgPSB7XG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHN0ZXBzLCBpbW1lZGlhdGVTdGFydCkge1xuICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGVwcyA9IDE7XG4gICAgfVxuXG4gICAgdmFyIHAxID0gMSAvIHN0ZXBzLFxuICAgICAgICBwMiA9IHN0ZXBzICsgKGltbWVkaWF0ZVN0YXJ0ID8gMCA6IDEpLFxuICAgICAgICBwMyA9IGltbWVkaWF0ZVN0YXJ0ID8gMSA6IDAsXG4gICAgICAgIG1heCA9IDEgLSBfdGlueU51bTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAoKHAyICogX2NsYW1wKDAsIG1heCwgcCkgfCAwKSArIHAzKSAqIHAxO1xuICAgIH07XG4gIH1cbn07XG5fZGVmYXVsdHMuZWFzZSA9IF9lYXNlTWFwW1wicXVhZC5vdXRcIl07XG5cbl9mb3JFYWNoTmFtZShcIm9uQ29tcGxldGUsb25VcGRhdGUsb25TdGFydCxvblJlcGVhdCxvblJldmVyc2VDb21wbGV0ZSxvbkludGVycnVwdFwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2NhbGxiYWNrTmFtZXMgKz0gbmFtZSArIFwiLFwiICsgbmFtZSArIFwiUGFyYW1zLFwiO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENBQ0hFXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBHU0NhY2hlID0gZnVuY3Rpb24gR1NDYWNoZSh0YXJnZXQsIGhhcm5lc3MpIHtcbiAgdGhpcy5pZCA9IF9nc0lEKys7XG4gIHRhcmdldC5fZ3NhcCA9IHRoaXM7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB0aGlzLmhhcm5lc3MgPSBoYXJuZXNzO1xuICB0aGlzLmdldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldCA6IF9nZXRQcm9wZXJ0eTtcbiAgdGhpcy5zZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXRTZXR0ZXIgOiBfZ2V0U2V0dGVyO1xufTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQU5JTUFUSU9OXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmV4cG9ydCB2YXIgQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQW5pbWF0aW9uKHZhcnMsIHRpbWUpIHtcbiAgICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lO1xuICAgIHRoaXMudmFycyA9IHZhcnM7XG4gICAgdGhpcy5fZGVsYXkgPSArdmFycy5kZWxheSB8fCAwO1xuXG4gICAgaWYgKHRoaXMuX3JlcGVhdCA9IHZhcnMucmVwZWF0IHx8IDApIHtcbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhcnMucmVwZWF0RGVsYXkgfHwgMDtcbiAgICAgIHRoaXMuX3lveW8gPSAhIXZhcnMueW95byB8fCAhIXZhcnMueW95b0Vhc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fdHMgPSAxO1xuXG4gICAgX3NldER1cmF0aW9uKHRoaXMsICt2YXJzLmR1cmF0aW9uLCAxLCAxKTtcblxuICAgIHRoaXMuZGF0YSA9IHZhcnMuZGF0YTtcbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICAgIHBhcmVudCAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBwYXJlbnQuX3RpbWUsIDEpO1xuICAgIHZhcnMucmV2ZXJzZWQgJiYgdGhpcy5yZXZlcnNlKCk7XG4gICAgdmFycy5wYXVzZWQgJiYgdGhpcy5wYXVzZWQodHJ1ZSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVsYXkgPSBmdW5jdGlvbiBkZWxheSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5zdGFydFRpbWUodGhpcy5fc3RhcnQgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHRoaXMuX2RlbGF5ID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLmR1cmF0aW9uID0gZnVuY3Rpb24gZHVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxEdXJhdGlvbih0aGlzLl9yZXBlYXQgPiAwID8gdmFsdWUgKyAodmFsdWUgKyB0aGlzLl9yRGVsYXkpICogdGhpcy5fcmVwZWF0IDogdmFsdWUpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgJiYgdGhpcy5fZHVyO1xuICB9O1xuXG4gIF9wcm90by50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3REdXI7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlydHkgPSAwO1xuICAgIHJldHVybiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fcmVwZWF0IDwgMCA/IHZhbHVlIDogKHZhbHVlIC0gdGhpcy5fcmVwZWF0ICogdGhpcy5fckRlbGF5KSAvICh0aGlzLl9yZXBlYXQgKyAxKSk7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIF93YWtlKCk7XG5cbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5fZHA7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLl90cykge1xuICAgICAgX2FsaWduUGxheWhlYWQodGhpcywgX3RvdGFsVGltZSk7IC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydCBvZiB0aGF0IGNoaWxkIHdvdWxkIGdldCBwdXNoZWQgb3V0LCBidXQgb25lIG9mIHRoZSBhbmNlc3RvcnMgbWF5IGhhdmUgY29tcGxldGVkLlxuXG5cbiAgICAgIHdoaWxlIChwYXJlbnQucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50Ll90aW1lICE9PSBwYXJlbnQuX3N0YXJ0ICsgKHBhcmVudC5fdHMgPj0gMCA/IHBhcmVudC5fdFRpbWUgLyBwYXJlbnQuX3RzIDogKHBhcmVudC50b3RhbER1cmF0aW9uKCkgLSBwYXJlbnQuX3RUaW1lKSAvIC1wYXJlbnQuX3RzKSkge1xuICAgICAgICAgIHBhcmVudC50b3RhbFRpbWUocGFyZW50Ll90VGltZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucGFyZW50ICYmIHRoaXMuX2RwLmF1dG9SZW1vdmVDaGlsZHJlbiAmJiAodGhpcy5fdHMgPiAwICYmIF90b3RhbFRpbWUgPCB0aGlzLl90RHVyIHx8IHRoaXMuX3RzIDwgMCAmJiBfdG90YWxUaW1lID4gMCB8fCAhdGhpcy5fdER1ciAmJiAhX3RvdGFsVGltZSkpIHtcbiAgICAgICAgLy9pZiB0aGUgYW5pbWF0aW9uIGRvZXNuJ3QgaGF2ZSBhIHBhcmVudCwgcHV0IGl0IGJhY2sgaW50byBpdHMgbGFzdCBwYXJlbnQgKHJlY29yZGVkIGFzIF9kcCBmb3IgZXhhY3RseSBjYXNlcyBsaWtlIHRoaXMpLiBMaW1pdCB0byBwYXJlbnRzIHdpdGggYXV0b1JlbW92ZUNoaWxkcmVuIChsaWtlIGdsb2JhbFRpbWVsaW5lKSBzbyB0aGF0IGlmIHRoZSB1c2VyIG1hbnVhbGx5IHJlbW92ZXMgYW4gYW5pbWF0aW9uIGZyb20gYSB0aW1lbGluZSBhbmQgdGhlbiBhbHRlcnMgaXRzIHBsYXloZWFkLCBpdCBkb2Vzbid0IGdldCBhZGRlZCBiYWNrIGluLlxuICAgICAgICBfYWRkVG9UaW1lbGluZSh0aGlzLl9kcCwgdGhpcywgdGhpcy5fc3RhcnQgLSB0aGlzLl9kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RUaW1lICE9PSBfdG90YWxUaW1lIHx8ICF0aGlzLl9kdXIgJiYgIXN1cHByZXNzRXZlbnRzIHx8IHRoaXMuX2luaXR0ZWQgJiYgTWF0aC5hYnModGhpcy5felRpbWUpID09PSBfdGlueU51bSB8fCAhX3RvdGFsVGltZSAmJiAhdGhpcy5faW5pdHRlZCAmJiAodGhpcy5hZGQgfHwgdGhpcy5fcHRMb29rdXApKSB7XG4gICAgICAvLyBjaGVjayBmb3IgX3B0TG9va3VwIG9uIGEgVHdlZW4gaW5zdGFuY2UgdG8gZW5zdXJlIGl0IGhhcyBhY3R1YWxseSBmaW5pc2hlZCBiZWluZyBpbnN0YW50aWF0ZWQsIG90aGVyd2lzZSBpZiB0aGlzLnJldmVyc2UoKSBnZXRzIGNhbGxlZCBpbiB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBpdCBjb3VsZCB0cmlnZ2VyIGEgcmVuZGVyKCkgaGVyZSBldmVuIHRob3VnaCB0aGUgX3RhcmdldHMgd2VyZW4ndCBwb3B1bGF0ZWQsIHRodXMgd2hlbiBfaW5pdCgpIGlzIGNhbGxlZCB0aGVyZSB3b24ndCBiZSBhbnkgUHJvcFR3ZWVucyAoaXQnbGwgYWN0IGxpa2UgdGhlIHR3ZWVuIGlzIG5vbi1mdW5jdGlvbmFsKVxuICAgICAgdGhpcy5fdHMgfHwgKHRoaXMuX3BUaW1lID0gX3RvdGFsVGltZSk7IC8vIG90aGVyd2lzZSwgaWYgYW4gYW5pbWF0aW9uIGlzIHBhdXNlZCwgdGhlbiB0aGUgcGxheWhlYWQgaXMgbW92ZWQgYmFjayB0byB6ZXJvLCB0aGVuIHJlc3VtZWQsIGl0J2QgcmV2ZXJ0IGJhY2sgdG8gdGhlIG9yaWdpbmFsIHRpbWUgYXQgdGhlIHBhdXNlXG5cbiAgICAgIF9sYXp5U2FmZVJlbmRlcih0aGlzLCBfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnRpbWUgPSBmdW5jdGlvbiB0aW1lKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUoTWF0aC5taW4odGhpcy50b3RhbER1cmF0aW9uKCksIHZhbHVlICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpKSAlIHRoaXMuX2R1ciB8fCAodmFsdWUgPyB0aGlzLl9kdXIgOiAwKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fdGltZTsgLy8gbm90ZTogaWYgdGhlIG1vZHVsdXMgcmVzdWx0cyBpbiAwLCB0aGUgcGxheWhlYWQgY291bGQgYmUgZXhhY3RseSBhdCB0aGUgZW5kIG9yIHRoZSBiZWdpbm5pbmcsIGFuZCB3ZSBhbHdheXMgZGVmZXIgdG8gdGhlIEVORCB3aXRoIGEgbm9uLXplcm8gdmFsdWUsIG90aGVyd2lzZSBpZiB5b3Ugc2V0IHRoZSB0aW1lKCkgdG8gdGhlIHZlcnkgZW5kIChkdXJhdGlvbigpKSwgaXQgd291bGQgcmVuZGVyIGF0IHRoZSBTVEFSVCFcbiAgfTtcblxuICBfcHJvdG8udG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIHRvdGFsUHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLnRvdGFsRHVyYXRpb24oKSAqIHZhbHVlLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RUaW1lIC8gdGhpcy5fdER1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5kdXJhdGlvbigpICogKHRoaXMuX3lveW8gJiYgISh0aGlzLml0ZXJhdGlvbigpICYgMSkgPyAxIC0gdmFsdWUgOiB2YWx1ZSkgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcyksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuZHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RpbWUgLyB0aGlzLl9kdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8uaXRlcmF0aW9uID0gZnVuY3Rpb24gaXRlcmF0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHZhciBjeWNsZUR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpICsgdGhpcy5fckRlbGF5O1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLl90aW1lICsgKHZhbHVlIC0gMSkgKiBjeWNsZUR1cmF0aW9uLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl9yZXBlYXQgPyBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pICsgMSA6IDE7XG4gIH0gLy8gcG90ZW50aWFsIGZ1dHVyZSBhZGRpdGlvbjpcbiAgLy8gaXNQbGF5aW5nQmFja3dhcmRzKCkge1xuICAvLyBcdGxldCBhbmltYXRpb24gPSB0aGlzLFxuICAvLyBcdFx0b3JpZW50YXRpb24gPSAxOyAvLyAxID0gZm9yd2FyZCwgLTEgPSBiYWNrd2FyZFxuICAvLyBcdHdoaWxlIChhbmltYXRpb24pIHtcbiAgLy8gXHRcdG9yaWVudGF0aW9uICo9IGFuaW1hdGlvbi5yZXZlcnNlZCgpIHx8IChhbmltYXRpb24ucmVwZWF0KCkgJiYgIShhbmltYXRpb24uaXRlcmF0aW9uKCkgJiAxKSkgPyAtMSA6IDE7XG4gIC8vIFx0XHRhbmltYXRpb24gPSBhbmltYXRpb24ucGFyZW50O1xuICAvLyBcdH1cbiAgLy8gXHRyZXR1cm4gb3JpZW50YXRpb24gPCAwO1xuICAvLyB9XG4gIDtcblxuICBfcHJvdG8udGltZVNjYWxlID0gZnVuY3Rpb24gdGltZVNjYWxlKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnRzID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyByZWNvcmRlZCB0aW1lU2NhbGUuIFNwZWNpYWwgY2FzZTogaWYgc29tZW9uZSBjYWxscyByZXZlcnNlKCkgb24gYW4gYW5pbWF0aW9uIHdpdGggdGltZVNjYWxlIG9mIDAsIHdlIGFzc2lnbiBpdCAtX3RpbnlOdW0gdG8gcmVtZW1iZXIgaXQncyByZXZlcnNlZC5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcnRzID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHRUaW1lID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5fdHMgPyBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aGlzLnBhcmVudC5fdGltZSwgdGhpcykgOiB0aGlzLl90VGltZTsgLy8gbWFrZSBzdXJlIHRvIGRvIHRoZSBwYXJlbnRUb0NoaWxkVG90YWxUaW1lKCkgQkVGT1JFIHNldHRpbmcgdGhlIG5ldyBfdHMgYmVjYXVzZSB0aGUgb2xkIG9uZSBtdXN0IGJlIHVzZWQgaW4gdGhhdCBjYWxjdWxhdGlvbi5cbiAgICAvLyBwcmlvcml0aXplIHJlbmRlcmluZyB3aGVyZSB0aGUgcGFyZW50J3MgcGxheWhlYWQgbGluZXMgdXAgaW5zdGVhZCBvZiB0aGlzLl90VGltZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIGEgdHdlZW4gdGhhdCdzIGFuaW1hdGluZyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIGluIHRoZSBzYW1lIHJlbmRlcmluZyBsb29wIChzYW1lIHBhcmVudCksIHRodXMgaWYgdGhlIHRpbWVTY2FsZSB0d2VlbiByZW5kZXJzIGZpcnN0LCBpdCB3b3VsZCBhbHRlciBfc3RhcnQgQkVGT1JFIF90VGltZSB3YXMgc2V0IG9uIHRoYXQgdGljayAoaW4gdGhlIHJlbmRlcmluZyBsb29wKSwgZWZmZWN0aXZlbHkgZnJlZXppbmcgaXQgdW50aWwgdGhlIHRpbWVTY2FsZSB0d2VlbiBmaW5pc2hlcy5cblxuICAgIHRoaXMuX3J0cyA9ICt2YWx1ZSB8fCAwO1xuICAgIHRoaXMuX3RzID0gdGhpcy5fcHMgfHwgdmFsdWUgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUgd2hpY2ggd291bGQgYmUgMCBpZiB0aGUgYW5pbWF0aW9uIGlzIHBhdXNlZC5cblxuICAgIHJldHVybiBfcmVjYWNoZUFuY2VzdG9ycyh0aGlzLnRvdGFsVGltZShfY2xhbXAoLXRoaXMuX2RlbGF5LCB0aGlzLl90RHVyLCB0VGltZSksIHRydWUpKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2VkID0gZnVuY3Rpb24gcGF1c2VkKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fcHMgPSB2YWx1ZTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BUaW1lID0gdGhpcy5fdFRpbWUgfHwgTWF0aC5tYXgoLXRoaXMuX2RlbGF5LCB0aGlzLnJhd1RpbWUoKSk7IC8vIGlmIHRoZSBwYXVzZSBvY2N1cnMgZHVyaW5nIHRoZSBkZWxheSBwaGFzZSwgbWFrZSBzdXJlIHRoYXQncyBmYWN0b3JlZCBpbiB3aGVuIHJlc3VtaW5nLlxuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fYWN0ID0gMDsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSwgc28gYSBwYXVzZWQgdHdlZW4gd291bGQgZWZmZWN0aXZlbHkgaGF2ZSBhIHRpbWVTY2FsZSBvZiAwLiBXZSByZWNvcmQgdGhlIFwicmVhbFwiIHRpbWVTY2FsZSBhcyBfcnRzIChyZWNvcmRlZCB0aW1lIHNjYWxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3dha2UoKTtcblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX3J0czsgLy9vbmx5IGRlZmVyIHRvIF9wVGltZSAocGF1c2VUaW1lKSBpZiB0VGltZSBpcyB6ZXJvLiBSZW1lbWJlciwgc29tZW9uZSBjb3VsZCBwYXVzZSgpIGFuIGFuaW1hdGlvbiwgdGhlbiBzY3J1YiB0aGUgcGxheWhlYWQgYW5kIHJlc3VtZSgpLiBJZiB0aGUgcGFyZW50IGRvZXNuJ3QgaGF2ZSBzbW9vdGhDaGlsZFRpbWluZywgd2UgcmVuZGVyIGF0IHRoZSByYXdUaW1lKCkgYmVjYXVzZSB0aGUgc3RhcnRUaW1lIHdvbid0IGdldCB1cGRhdGVkLlxuXG4gICAgICAgIHRoaXMudG90YWxUaW1lKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMucmF3VGltZSgpIDogdGhpcy5fdFRpbWUgfHwgdGhpcy5fcFRpbWUsIHRoaXMucHJvZ3Jlc3MoKSA9PT0gMSAmJiAodGhpcy5fdFRpbWUgLT0gX3RpbnlOdW0pICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSAhPT0gX3RpbnlOdW0pOyAvLyBlZGdlIGNhc2U6IGFuaW1hdGlvbi5wcm9ncmVzcygxKS5wYXVzZSgpLnBsYXkoKSB3b3VsZG4ndCByZW5kZXIgYWdhaW4gYmVjYXVzZSB0aGUgcGxheWhlYWQgaXMgYWxyZWFkeSBhdCB0aGUgZW5kLCBidXQgdGhlIGNhbGwgdG8gdG90YWxUaW1lKCkgYmVsb3cgd2lsbCBhZGQgaXQgYmFjayB0byBpdHMgcGFyZW50Li4uYW5kIG5vdCByZW1vdmUgaXQgYWdhaW4gKHNpbmNlIHJlbW92aW5nIG9ubHkgaGFwcGVucyB1cG9uIHJlbmRlcmluZyBhdCBhIG5ldyB0aW1lKS4gT2Zmc2V0dGluZyB0aGUgX3RUaW1lIHNsaWdodGx5IGlzIGRvbmUgc2ltcGx5IHRvIGNhdXNlIHRoZSBmaW5hbCByZW5kZXIgaW4gdG90YWxUaW1lKCkgdGhhdCdsbCBwb3AgaXQgb2ZmIGl0cyB0aW1lbGluZSAoaWYgYXV0b1JlbW92ZUNoaWxkcmVuIGlzIHRydWUsIG9mIGNvdXJzZSkuIENoZWNrIHRvIG1ha2Ugc3VyZSBfelRpbWUgaXNuJ3QgLV90aW55TnVtIHRvIGF2b2lkIGFuIGVkZ2UgY2FzZSB3aGVyZSB0aGUgcGxheWhlYWQgaXMgcHVzaGVkIHRvIHRoZSBlbmQgYnV0IElOU0lERSBhIHR3ZWVuL2NhbGxiYWNrLCB0aGUgdGltZWxpbmUgaXRzZWxmIGlzIHBhdXNlZCB0aHVzIGhhbHRpbmcgcmVuZGVyaW5nIGFuZCBsZWF2aW5nIGEgZmV3IHVucmVuZGVyZWQuIFdoZW4gcmVzdW1pbmcsIGl0IHdvdWxkbid0IHJlbmRlciB0aG9zZSBvdGhlcndpc2UuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0VGltZSA9IGZ1bmN0aW9uIHN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwO1xuICAgICAgcGFyZW50ICYmIChwYXJlbnQuX3NvcnQgfHwgIXRoaXMucGFyZW50KSAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9O1xuXG4gIF9wcm90by5lbmRUaW1lID0gZnVuY3Rpb24gZW5kVGltZShpbmNsdWRlUmVwZWF0cykge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIChfaXNOb3RGYWxzZShpbmNsdWRlUmVwZWF0cykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuZHVyYXRpb24oKSkgLyBNYXRoLmFicyh0aGlzLl90cyk7XG4gIH07XG5cbiAgX3Byb3RvLnJhd1RpbWUgPSBmdW5jdGlvbiByYXdUaW1lKHdyYXBSZXBlYXRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwOyAvLyBfZHAgPSBkZXRhdGNoZWQgcGFyZW50XG5cbiAgICByZXR1cm4gIXBhcmVudCA/IHRoaXMuX3RUaW1lIDogd3JhcFJlcGVhdHMgJiYgKCF0aGlzLl90cyB8fCB0aGlzLl9yZXBlYXQgJiYgdGhpcy5fdGltZSAmJiB0aGlzLnRvdGFsUHJvZ3Jlc3MoKSA8IDEpID8gdGhpcy5fdFRpbWUgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSA6ICF0aGlzLl90cyA/IHRoaXMuX3RUaW1lIDogX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50LnJhd1RpbWUod3JhcFJlcGVhdHMpLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uZ2xvYmFsVGltZSA9IGZ1bmN0aW9uIGdsb2JhbFRpbWUocmF3VGltZSkge1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLFxuICAgICAgICB0aW1lID0gYXJndW1lbnRzLmxlbmd0aCA/IHJhd1RpbWUgOiBhbmltYXRpb24ucmF3VGltZSgpO1xuXG4gICAgd2hpbGUgKGFuaW1hdGlvbikge1xuICAgICAgdGltZSA9IGFuaW1hdGlvbi5fc3RhcnQgKyB0aW1lIC8gKGFuaW1hdGlvbi5fdHMgfHwgMSk7XG4gICAgICBhbmltYXRpb24gPSBhbmltYXRpb24uX2RwO1xuICAgIH1cblxuICAgIHJldHVybiB0aW1lO1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVwZWF0ID0gdmFsdWU7XG4gICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVwZWF0O1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXREZWxheSA9IGZ1bmN0aW9uIHJlcGVhdERlbGF5KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JEZWxheTtcbiAgfTtcblxuICBfcHJvdG8ueW95byA9IGZ1bmN0aW9uIHlveW8odmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5feW95byA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3lveW87XG4gIH07XG5cbiAgX3Byb3RvLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KGluY2x1ZGVEZWxheSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5KCkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnBsYXkgPSBmdW5jdGlvbiBwbGF5KGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2UgPSBmdW5jdGlvbiBwYXVzZShhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgYXRUaW1lICE9IG51bGwgJiYgdGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VkID0gZnVuY3Rpb24gcmV2ZXJzZWQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgISF2YWx1ZSAhPT0gdGhpcy5yZXZlcnNlZCgpICYmIHRoaXMudGltZVNjYWxlKC10aGlzLl9ydHMgfHwgKHZhbHVlID8gLV90aW55TnVtIDogMCkpOyAvLyBpbiBjYXNlIHRpbWVTY2FsZSBpcyB6ZXJvLCByZXZlcnNpbmcgd291bGQgaGF2ZSBubyBlZmZlY3Qgc28gd2UgdXNlIF90aW55TnVtLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnRzIDwgMDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5faW5pdHRlZCA9IDA7XG4gICAgdGhpcy5felRpbWUgPSAtX3RpbnlOdW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwLFxuICAgICAgICBzdGFydCA9IHRoaXMuX3N0YXJ0LFxuICAgICAgICByYXdUaW1lO1xuICAgIHJldHVybiAhISghcGFyZW50IHx8IHRoaXMuX3RzICYmIHRoaXMuX2luaXR0ZWQgJiYgcGFyZW50LmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSBwYXJlbnQucmF3VGltZSh0cnVlKSkgPj0gc3RhcnQgJiYgcmF3VGltZSA8IHRoaXMuZW5kVGltZSh0cnVlKSAtIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8uZXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uIGV2ZW50Q2FsbGJhY2sodHlwZSwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB2YXJzID0gdGhpcy52YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIGRlbGV0ZSB2YXJzW3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyc1t0eXBlXSA9IGNhbGxiYWNrO1xuICAgICAgICBwYXJhbXMgJiYgKHZhcnNbdHlwZSArIFwiUGFyYW1zXCJdID0gcGFyYW1zKTtcbiAgICAgICAgdHlwZSA9PT0gXCJvblVwZGF0ZVwiICYmICh0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcnNbdHlwZV07XG4gIH07XG5cbiAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIGYgPSBfaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IF9wYXNzVGhyb3VnaCxcbiAgICAgICAgICBfcmVzb2x2ZSA9IGZ1bmN0aW9uIF9yZXNvbHZlKCkge1xuICAgICAgICB2YXIgX3RoZW4gPSBzZWxmLnRoZW47XG4gICAgICAgIHNlbGYudGhlbiA9IG51bGw7IC8vIHRlbXBvcmFyaWx5IG51bGwgdGhlIHRoZW4oKSBtZXRob2QgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzIyKVxuXG4gICAgICAgIF9pc0Z1bmN0aW9uKGYpICYmIChmID0gZihzZWxmKSkgJiYgKGYudGhlbiB8fCBmID09PSBzZWxmKSAmJiAoc2VsZi50aGVuID0gX3RoZW4pO1xuICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICBzZWxmLnRoZW4gPSBfdGhlbjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLl9pbml0dGVkICYmIHNlbGYudG90YWxQcm9ncmVzcygpID09PSAxICYmIHNlbGYuX3RzID49IDAgfHwgIXNlbGYuX3RUaW1lICYmIHNlbGYuX3RzIDwgMCkge1xuICAgICAgICBfcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fcHJvbSA9IF9yZXNvbHZlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5raWxsID0gZnVuY3Rpb24ga2lsbCgpIHtcbiAgICBfaW50ZXJydXB0KHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBBbmltYXRpb247XG59KCk7XG5cbl9zZXREZWZhdWx0cyhBbmltYXRpb24ucHJvdG90eXBlLCB7XG4gIF90aW1lOiAwLFxuICBfc3RhcnQ6IDAsXG4gIF9lbmQ6IDAsXG4gIF90VGltZTogMCxcbiAgX3REdXI6IDAsXG4gIF9kaXJ0eTogMCxcbiAgX3JlcGVhdDogMCxcbiAgX3lveW86IGZhbHNlLFxuICBwYXJlbnQ6IG51bGwsXG4gIF9pbml0dGVkOiBmYWxzZSxcbiAgX3JEZWxheTogMCxcbiAgX3RzOiAxLFxuICBfZHA6IDAsXG4gIHJhdGlvOiAwLFxuICBfelRpbWU6IC1fdGlueU51bSxcbiAgX3Byb206IDAsXG4gIF9wczogZmFsc2UsXG4gIF9ydHM6IDFcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJTUVMSU5FXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFRpbWVsaW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uKSB7XG4gIF9pbmhlcml0c0xvb3NlKFRpbWVsaW5lLCBfQW5pbWF0aW9uKTtcblxuICBmdW5jdGlvbiBUaW1lbGluZSh2YXJzLCB0aW1lKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIF90aGlzID0gX0FuaW1hdGlvbi5jYWxsKHRoaXMsIHZhcnMsIHRpbWUpIHx8IHRoaXM7XG4gICAgX3RoaXMubGFiZWxzID0ge307XG4gICAgX3RoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAhIXZhcnMuc21vb3RoQ2hpbGRUaW1pbmc7XG4gICAgX3RoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gISF2YXJzLmF1dG9SZW1vdmVDaGlsZHJlbjtcbiAgICBfdGhpcy5fc29ydCA9IF9pc05vdEZhbHNlKHZhcnMuc29ydENoaWxkcmVuKTtcbiAgICBfdGhpcy5wYXJlbnQgJiYgX3Bvc3RBZGRDaGVja3MoX3RoaXMucGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgdmFycy5zY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YXJzLnNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gVGltZWxpbmUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIudG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCBfcGFyc2VWYXJzKGFyZ3VtZW50cywgMCwgdGhpcyksIF9wYXJzZVBvc2l0aW9uKHRoaXMsIF9pc051bWJlcih2YXJzKSA/IGFyZ3VtZW50c1szXSA6IHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCBfcGFyc2VWYXJzKGFyZ3VtZW50cywgMSwgdGhpcyksIF9wYXJzZVBvc2l0aW9uKHRoaXMsIF9pc051bWJlcih2YXJzKSA/IGFyZ3VtZW50c1szXSA6IHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycywgcG9zaXRpb24pIHtcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgX3BhcnNlVmFycyhhcmd1bWVudHMsIDIsIHRoaXMpLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBfaXNOdW1iZXIoZnJvbVZhcnMpID8gYXJndW1lbnRzWzRdIDogcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gISF2YXJzLmltbWVkaWF0ZVJlbmRlcjtcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCAxKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmNhbGwgPSBmdW5jdGlvbiBjYWxsKGNhbGxiYWNrLCBwYXJhbXMsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrLCBwYXJhbXMpLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICB9IC8vT05MWSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSEgTWF5YmUgZGVsZXRlP1xuICA7XG5cbiAgX3Byb3RvMi5zdGFnZ2VyVG8gPSBmdW5jdGlvbiBzdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHZhcnMuc3RhZ2dlciA9IHZhcnMuc3RhZ2dlciB8fCBzdGFnZ2VyO1xuICAgIHZhcnMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVBbGw7XG4gICAgdmFycy5vbkNvbXBsZXRlUGFyYW1zID0gb25Db21wbGV0ZUFsbFBhcmFtcztcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbSA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMucnVuQmFja3dhcmRzID0gMTtcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tVG8gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbVRvKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh0b1ZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICB0RHVyID0gdGhpcy5fZGlydHkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0aGlzICE9PSBfZ2xvYmFsVGltZWxpbmUgJiYgdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmIHRvdGFsVGltZSA+PSAwID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgY3Jvc3NpbmdTdGFydCA9IHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCAmJiAodGhpcy5faW5pdHRlZCB8fCAhZHVyKSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldlBhdXNlZCxcbiAgICAgICAgcGF1c2VUd2VlbixcbiAgICAgICAgdGltZVNjYWxlLFxuICAgICAgICBwcmV2U3RhcnQsXG4gICAgICAgIHByZXZJdGVyYXRpb24sXG4gICAgICAgIHlveW8sXG4gICAgICAgIGlzWW95bztcblxuICAgIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgZm9yY2UgfHwgY3Jvc3NpbmdTdGFydCkge1xuICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmIGR1cikge1xuICAgICAgICAvL2lmIHRvdGFsRHVyYXRpb24oKSBmaW5kcyBhIGNoaWxkIHdpdGggYSBuZWdhdGl2ZSBzdGFydFRpbWUgYW5kIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHRoaW5ncyBnZXQgc2hpZnRlZCBhcm91bmQgaW50ZXJuYWxseSBzbyB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgdGltZSBhY2NvcmRpbmdseS4gRm9yIGV4YW1wbGUsIGlmIGEgdHdlZW4gc3RhcnRzIGF0IC0zMCB3ZSBtdXN0IHNoaWZ0IEVWRVJZVEhJTkcgZm9yd2FyZCAzMCBzZWNvbmRzIGFuZCBtb3ZlIHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUgYmFja3dhcmQgYnkgMzAgc2Vjb25kcyBzbyB0aGF0IHRoaW5ncyBhbGlnbiB3aXRoIHRoZSBwbGF5aGVhZCAobm8ganVtcCkuXG4gICAgICAgIHRUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgdG90YWxUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgIH1cblxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgcHJldlN0YXJ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICB0aW1lU2NhbGUgPSB0aGlzLl90cztcbiAgICAgIHByZXZQYXVzZWQgPSAhdGltZVNjYWxlO1xuXG4gICAgICBpZiAoY3Jvc3NpbmdTdGFydCkge1xuICAgICAgICBkdXIgfHwgKHByZXZUaW1lID0gdGhpcy5felRpbWUpOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIXN1cHByZXNzRXZlbnRzKSAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICB5b3lvID0gdGhpcy5feW95bztcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcbiAgICAgICAgdGltZSA9IF9yb3VuZCh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuICAgICAgICAhcHJldlRpbWUgJiYgdGhpcy5fdFRpbWUgJiYgcHJldkl0ZXJhdGlvbiAhPT0gaXRlcmF0aW9uICYmIChwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uKTsgLy8gZWRnZSBjYXNlIC0gaWYgc29tZW9uZSBkb2VzIGFkZFBhdXNlKCkgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgcmVwZWF0aW5nIHRpbWVsaW5lLCB0aGF0IHBhdXNlIGlzIHRlY2huaWNhbGx5IGF0IHRoZSBzYW1lIHNwb3QgYXMgdGhlIGVuZCB3aGljaCBjYXVzZXMgdGhpcy5fdGltZSB0byBnZXQgc2V0IHRvIDAgd2hlbiB0aGUgdG90YWxUaW1lIHdvdWxkIG5vcm1hbGx5IHBsYWNlIHRoZSBwbGF5aGVhZCBhdCB0aGUgZW5kLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMzgyMy1jbG9zaW5nLW5hdi1hbmltYXRpb24tbm90LXdvcmtpbmctb24taWUtYW5kLWlwaG9uZS02LW1heWJlLW90aGVyLW9sZGVyLWJyb3dzZXIvP3RhYj1jb21tZW50cyNjb21tZW50LTExMzAwNVxuXG4gICAgICAgIGlmICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpIHtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgICBpc1lveW8gPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIG1ha2Ugc3VyZSBjaGlsZHJlbiBhdCB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUgYXJlIHJlbmRlcmVkIHByb3Blcmx5LiBJZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgIGEgMy1zZWNvbmQgbG9uZyB0aW1lbGluZSByZW5kZXJlZCBhdCAyLjkgc2Vjb25kcyBwcmV2aW91c2x5LCBhbmQgbm93IHJlbmRlcnMgYXQgMy4yIHNlY29uZHMgKHdoaWNoXG4gICAgICAgIHdvdWxkIGdldCB0cmFuc2xhdGVkIHRvIDIuOCBzZWNvbmRzIGlmIHRoZSB0aW1lbGluZSB5b3lvcyBvciAwLjIgc2Vjb25kcyBpZiBpdCBqdXN0IHJlcGVhdHMpLCB0aGVyZVxuICAgICAgICBjb3VsZCBiZSBhIGNhbGxiYWNrIG9yIGEgc2hvcnQgdHdlZW4gdGhhdCdzIGF0IDIuOTUgb3IgMyBzZWNvbmRzIGluIHdoaWNoIHdvdWxkbid0IHJlbmRlci4gU29cbiAgICAgICAgd2UgbmVlZCB0byBwdXNoIHRoZSB0aW1lbGluZSB0byB0aGUgZW5kIChhbmQvb3IgYmVnaW5uaW5nIGRlcGVuZGluZyBvbiBpdHMgeW95byB2YWx1ZSkuIEFsc28gd2UgbXVzdFxuICAgICAgICBlbnN1cmUgdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBUaW1lbGluZSB3b3JrLlxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgIHZhciByZXdpbmRpbmcgPSB5b3lvICYmIHByZXZJdGVyYXRpb24gJiAxLFxuICAgICAgICAgICAgICBkb2VzV3JhcCA9IHJld2luZGluZyA9PT0gKHlveW8gJiYgaXRlcmF0aW9uICYgMSk7XG4gICAgICAgICAgaXRlcmF0aW9uIDwgcHJldkl0ZXJhdGlvbiAmJiAocmV3aW5kaW5nID0gIXJld2luZGluZyk7XG4gICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyAwIDogZHVyO1xuICAgICAgICAgIHRoaXMuX2xvY2sgPSAxO1xuICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lIHx8IChpc1lveW8gPyAwIDogX3JvdW5kKGl0ZXJhdGlvbiAqIGN5Y2xlRHVyYXRpb24pKSwgc3VwcHJlc3NFdmVudHMsICFkdXIpLl9sb2NrID0gMDtcbiAgICAgICAgICAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG4gICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAodGhpcy5pbnZhbGlkYXRlKCkuX2xvY2sgPSAxKTtcblxuICAgICAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSB8fCBwcmV2UGF1c2VkICE9PSAhdGhpcy5fdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cjsgLy8gaW4gY2FzZSB0aGUgZHVyYXRpb24gY2hhbmdlZCBpbiB0aGUgb25SZXBlYXRcblxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyO1xuXG4gICAgICAgICAgaWYgKGRvZXNXcmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMjtcbiAgICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gZHVyICsgMC4wMDAxIDogLTAuMDAwMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9IC8vaW4gb3JkZXIgZm9yIHlveW9FYXNlIHRvIHdvcmsgcHJvcGVybHkgd2hlbiB0aGVyZSdzIGEgc3RhZ2dlciwgd2UgbXVzdCBzd2FwIG91dCB0aGUgZWFzZSBpbiBlYWNoIHN1Yi10d2Vlbi5cblxuXG4gICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKHRoaXMsIGlzWW95byk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hhc1BhdXNlICYmICF0aGlzLl9mb3JjaW5nICYmIHRoaXMuX2xvY2sgPCAyKSB7XG4gICAgICAgIHBhdXNlVHdlZW4gPSBfZmluZE5leHRQYXVzZVR3ZWVuKHRoaXMsIF9yb3VuZChwcmV2VGltZSksIF9yb3VuZCh0aW1lKSk7XG5cbiAgICAgICAgaWYgKHBhdXNlVHdlZW4pIHtcbiAgICAgICAgICB0VGltZSAtPSB0aW1lIC0gKHRpbWUgPSBwYXVzZVR3ZWVuLl9zdGFydCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgICAgdGhpcy5fYWN0ID0gIXRpbWVTY2FsZTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICB0aGlzLl9vblVwZGF0ZSA9IHRoaXMudmFycy5vblVwZGF0ZTtcbiAgICAgICAgdGhpcy5faW5pdHRlZCA9IDE7XG4gICAgICAgIHRoaXMuX3pUaW1lID0gdG90YWxUaW1lO1xuICAgICAgfVxuXG4gICAgICAhcHJldlRpbWUgJiYgdGltZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgaWYgKHRpbWUgPj0gcHJldlRpbWUgJiYgdG90YWxUaW1lID49IDApIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgdGltZSA+PSBjaGlsZC5fc3RhcnQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gLV90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGZsYWcgelRpbWUgYXMgbmVnYXRpdmUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIHZhciBhZGp1c3RlZFRpbWUgPSB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZTsgLy93aGVuIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIGJleW9uZCB0aGUgc3RhcnQgb2YgdGhpcyB0aW1lbGluZSwgd2UgbXVzdCBwYXNzIHRoYXQgaW5mb3JtYXRpb24gZG93biB0byB0aGUgY2hpbGQgYW5pbWF0aW9ucyBzbyB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGtub3cgd2hldGhlciB0byByZW5kZXIgdGhlaXIgc3RhcnRpbmcgb3IgZW5kaW5nIHZhbHVlcy5cblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX3ByZXY7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgYWRqdXN0ZWRUaW1lIDw9IGNoaWxkLl9lbmQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IGFkanVzdGVkVGltZSA/IC1fdGlueU51bSA6IF90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGFkanVzdCB6VGltZSBzbyB0aGF0IHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhdXNlVHdlZW4gJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgcGF1c2VUd2Vlbi5yZW5kZXIodGltZSA+PSBwcmV2VGltZSA/IDAgOiAtX3RpbnlOdW0pLl96VGltZSA9IHRpbWUgPj0gcHJldlRpbWUgPyAxIDogLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RzKSB7XG4gICAgICAgICAgLy90aGUgY2FsbGJhY2sgcmVzdW1lZCBwbGF5YmFjayEgU28gc2luY2Ugd2UgbWF5IGhhdmUgaGVsZCBiYWNrIHRoZSBwbGF5aGVhZCBkdWUgdG8gd2hlcmUgdGhlIHBhdXNlIGlzIHBvc2l0aW9uZWQsIGdvIGFoZWFkIGFuZCBqdW1wIHRvIHdoZXJlIGl0J3MgU1VQUE9TRUQgdG8gYmUgKGlmIG5vIHBhdXNlIGhhcHBlbmVkKS5cbiAgICAgICAgICB0aGlzLl9zdGFydCA9IHByZXZTdGFydDsgLy9pZiB0aGUgcGF1c2Ugd2FzIGF0IGFuIGVhcmxpZXIgdGltZSBhbmQgdGhlIHVzZXIgcmVzdW1lZCBpbiB0aGUgY2FsbGJhY2ssIGl0IGNvdWxkIHJlcG9zaXRpb24gdGhlIHRpbWVsaW5lIChjaGFuZ2luZyBpdHMgc3RhcnRUaW1lKSwgdGhyb3dpbmcgdGhpbmdzIG9mZiBzbGlnaHRseSwgc28gd2UgbWFrZSBzdXJlIHRoZSBfc3RhcnQgZG9lc24ndCBzaGlmdC5cblxuICAgICAgICAgIF9zZXRFbmQodGhpcyk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblVwZGF0ZVwiLCB0cnVlKTtcbiAgICAgIGlmICh0VGltZSA9PT0gdER1ciAmJiB0RHVyID49IHRoaXMudG90YWxEdXJhdGlvbigpIHx8ICF0VGltZSAmJiBwcmV2VGltZSkgaWYgKHByZXZTdGFydCA9PT0gdGhpcy5fc3RhcnQgfHwgTWF0aC5hYnModGltZVNjYWxlKSAhPT0gTWF0aC5hYnModGhpcy5fdHMpKSBpZiAoIXRoaXMuX2xvY2spIHtcbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSkpIHtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZCA9IGZ1bmN0aW9uIGFkZChjaGlsZCwgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghX2lzTnVtYmVyKHBvc2l0aW9uKSkge1xuICAgICAgcG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICBpZiAoX2lzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExhYmVsKGNoaWxkLCBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcyAhPT0gY2hpbGQgPyBfYWRkVG9UaW1lbGluZSh0aGlzLCBjaGlsZCwgcG9zaXRpb24pIDogdGhpczsgLy9kb24ndCBhbGxvdyBhIHRpbWVsaW5lIHRvIGJlIGFkZGVkIHRvIGl0c2VsZiBhcyBhIGNoaWxkIVxuICB9O1xuXG4gIF9wcm90bzIuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgdHdlZW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWVsaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IC1fYmlnTnVtO1xuICAgIH1cblxuICAgIHZhciBhID0gW10sXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICAgIHR3ZWVucyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVsaW5lcyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICAgIG5lc3RlZCAmJiBhLnB1c2guYXBwbHkoYSwgY2hpbGQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHdlZW5zLCB0aW1lbGluZXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW4oMSwgMSwgMSksXG4gICAgICAgIGkgPSBhbmltYXRpb25zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChhbmltYXRpb25zW2ldLnZhcnMuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVMYWJlbChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMua2lsbFR3ZWVuc09mKGNoaWxkKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgY2hpbGQpO1xuXG4gICAgaWYgKGNoaWxkID09PSB0aGlzLl9yZWNlbnQpIHtcbiAgICAgIHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAxO1xuXG4gICAgaWYgKCF0aGlzLl9kcCAmJiB0aGlzLl90cykge1xuICAgICAgLy9zcGVjaWFsIGNhc2UgZm9yIHRoZSBnbG9iYWwgdGltZWxpbmUgKG9yIGFueSBvdGhlciB0aGF0IGhhcyBubyBwYXJlbnQgb3IgZGV0YWNoZWQgcGFyZW50KS5cbiAgICAgIHRoaXMuX3N0YXJ0ID0gX3JvdW5kKF90aWNrZXIudGltZSAtICh0aGlzLl90cyA+IDAgPyBfdG90YWxUaW1lMiAvIHRoaXMuX3RzIDogKHRoaXMudG90YWxEdXJhdGlvbigpIC0gX3RvdGFsVGltZTIpIC8gLXRoaXMuX3RzKSk7XG4gICAgfVxuXG4gICAgX0FuaW1hdGlvbi5wcm90b3R5cGUudG90YWxUaW1lLmNhbGwodGhpcywgX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKTtcblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkTGFiZWwgPSBmdW5jdGlvbiBhZGRMYWJlbChsYWJlbCwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmxhYmVsc1tsYWJlbF0gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGxhYmVsKSB7XG4gICAgZGVsZXRlIHRoaXMubGFiZWxzW2xhYmVsXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZFBhdXNlID0gZnVuY3Rpb24gYWRkUGF1c2UocG9zaXRpb24sIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrIHx8IF9lbXB0eUZ1bmMsIHBhcmFtcyk7XG4gICAgdC5kYXRhID0gXCJpc1BhdXNlXCI7XG4gICAgdGhpcy5faGFzUGF1c2UgPSAxO1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCB0LCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlUGF1c2UgPSBmdW5jdGlvbiByZW1vdmVQYXVzZShwb3NpdGlvbikge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuICAgIHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID09PSBwb3NpdGlvbiAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIikge1xuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIHR3ZWVucyA9IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSksXG4gICAgICAgIGkgPSB0d2VlbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gIT09IHR3ZWVuc1tpXSAmJiB0d2VlbnNbaV0ua2lsbCh0YXJnZXRzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRUd2VlbnNPZiA9IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgaXNHbG9iYWxUaW1lID0gX2lzTnVtYmVyKG9ubHlBY3RpdmUpLFxuICAgICAgICAvLyBhIG51bWJlciBpcyBpbnRlcnByZXRlZCBhcyBhIGdsb2JhbCB0aW1lLiBJZiB0aGUgYW5pbWF0aW9uIHNwYW5zXG4gICAgY2hpbGRyZW47XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgIGlmIChfYXJyYXlDb250YWluc0FueShjaGlsZC5fdGFyZ2V0cywgcGFyc2VkVGFyZ2V0cykgJiYgKGlzR2xvYmFsVGltZSA/ICghX292ZXJ3cml0aW5nVHdlZW4gfHwgY2hpbGQuX2luaXR0ZWQgJiYgY2hpbGQuX3RzKSAmJiBjaGlsZC5nbG9iYWxUaW1lKDApIDw9IG9ubHlBY3RpdmUgJiYgY2hpbGQuZ2xvYmFsVGltZShjaGlsZC50b3RhbER1cmF0aW9uKCkpID4gb25seUFjdGl2ZSA6ICFvbmx5QWN0aXZlIHx8IGNoaWxkLmlzQWN0aXZlKCkpKSB7XG4gICAgICAgICAgLy8gbm90ZTogaWYgdGhpcyBpcyBmb3Igb3ZlcndyaXRpbmcsIGl0IHNob3VsZCBvbmx5IGJlIGZvciB0d2VlbnMgdGhhdCBhcmVuJ3QgcGF1c2VkIGFuZCBhcmUgaW5pdHRlZC5cbiAgICAgICAgICBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHJlbiA9IGNoaWxkLmdldFR3ZWVuc09mKHBhcnNlZFRhcmdldHMsIG9ubHlBY3RpdmUpKS5sZW5ndGgpIHtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICBfcHJvdG8yLnR3ZWVuVG8gPSBmdW5jdGlvbiB0d2VlblRvKHBvc2l0aW9uLCB2YXJzKSB7XG4gICAgdmFycyA9IHZhcnMgfHwge307XG5cbiAgICB2YXIgdGwgPSB0aGlzLFxuICAgICAgICBlbmRUaW1lID0gX3BhcnNlUG9zaXRpb24odGwsIHBvc2l0aW9uKSxcbiAgICAgICAgX3ZhcnMgPSB2YXJzLFxuICAgICAgICBzdGFydEF0ID0gX3ZhcnMuc3RhcnRBdCxcbiAgICAgICAgX29uU3RhcnQgPSBfdmFycy5vblN0YXJ0LFxuICAgICAgICBvblN0YXJ0UGFyYW1zID0gX3ZhcnMub25TdGFydFBhcmFtcyxcbiAgICAgICAgdHdlZW4gPSBUd2Vlbi50byh0bCwgX3NldERlZmF1bHRzKHZhcnMsIHtcbiAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICB0aW1lOiBlbmRUaW1lLFxuICAgICAgZHVyYXRpb246IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKSB8fCBfdGlueU51bSxcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgICAgIHRsLnBhdXNlKCk7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSB0bC5fdGltZSkgLyB0bC50aW1lU2NhbGUoKSk7XG4gICAgICAgIHR3ZWVuLl9kdXIgIT09IGR1cmF0aW9uICYmIF9zZXREdXJhdGlvbih0d2VlbiwgZHVyYXRpb24sIDAsIDEpLnJlbmRlcih0d2Vlbi5fdGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIF9vblN0YXJ0ICYmIF9vblN0YXJ0LmFwcGx5KHR3ZWVuLCBvblN0YXJ0UGFyYW1zIHx8IFtdKTsgLy9pbiBjYXNlIHRoZSB1c2VyIGhhZCBhbiBvblN0YXJ0IGluIHRoZSB2YXJzIC0gd2UgZG9uJ3Qgd2FudCB0byBvdmVyd3JpdGUgaXQuXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9O1xuXG4gIF9wcm90bzIudHdlZW5Gcm9tVG8gPSBmdW5jdGlvbiB0d2VlbkZyb21Ubyhmcm9tUG9zaXRpb24sIHRvUG9zaXRpb24sIHZhcnMpIHtcbiAgICByZXR1cm4gdGhpcy50d2VlblRvKHRvUG9zaXRpb24sIF9zZXREZWZhdWx0cyh7XG4gICAgICBzdGFydEF0OiB7XG4gICAgICAgIHRpbWU6IF9wYXJzZVBvc2l0aW9uKHRoaXMsIGZyb21Qb3NpdGlvbilcbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZWNlbnQgPSBmdW5jdGlvbiByZWNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY2VudDtcbiAgfTtcblxuICBfcHJvdG8yLm5leHRMYWJlbCA9IGZ1bmN0aW9uIG5leHRMYWJlbChhZnRlclRpbWUpIHtcbiAgICBpZiAoYWZ0ZXJUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGFmdGVyVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGFmdGVyVGltZSkpO1xuICB9O1xuXG4gIF9wcm90bzIucHJldmlvdXNMYWJlbCA9IGZ1bmN0aW9uIHByZXZpb3VzTGFiZWwoYmVmb3JlVGltZSkge1xuICAgIGlmIChiZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGJlZm9yZVRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBiZWZvcmVUaW1lKSwgMSk7XG4gIH07XG5cbiAgX3Byb3RvMi5jdXJyZW50TGFiZWwgPSBmdW5jdGlvbiBjdXJyZW50TGFiZWwodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuc2Vlayh2YWx1ZSwgdHJ1ZSkgOiB0aGlzLnByZXZpb3VzTGFiZWwodGhpcy5fdGltZSArIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8yLnNoaWZ0Q2hpbGRyZW4gPSBmdW5jdGlvbiBzaGlmdENoaWxkcmVuKGFtb3VudCwgYWRqdXN0TGFiZWxzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGxhYmVscyA9IHRoaXMubGFiZWxzLFxuICAgICAgICBwO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgY2hpbGQuX3N0YXJ0ICs9IGFtb3VudDtcbiAgICAgICAgY2hpbGQuX2VuZCArPSBhbW91bnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKGFkanVzdExhYmVscykge1xuICAgICAgZm9yIChwIGluIGxhYmVscykge1xuICAgICAgICBpZiAobGFiZWxzW3BdID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgICBsYWJlbHNbcF0gKz0gYW1vdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLmludmFsaWRhdGUoKTtcbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoaW5jbHVkZUxhYmVscykge1xuICAgIGlmIChpbmNsdWRlTGFiZWxzID09PSB2b2lkIDApIHtcbiAgICAgIGluY2x1ZGVMYWJlbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBuZXh0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG4gICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fdGltZSA9IHRoaXMuX3RUaW1lID0gdGhpcy5fcFRpbWUgPSAwO1xuICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG1heCA9IDAsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgIHByZXZTdGFydCA9IF9iaWdOdW0sXG4gICAgICAgIHByZXYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBwYXJlbnQ7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuX2RpcnR5KSB7XG4gICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHByZXYgPSBjaGlsZC5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBpbiBjYXNlIHRoZSB0d2VlbiBjaGFuZ2VzIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS4uLlxuXG4gICAgICAgIGNoaWxkLl9kaXJ0eSAmJiBjaGlsZC50b3RhbER1cmF0aW9uKCk7IC8vY291bGQgY2hhbmdlIHRoZSB0d2Vlbi5fc3RhcnRUaW1lLCBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbidzIGNhY2hlIGlzIGNsZWFuIGJlZm9yZSBhbmFseXppbmcgaXQuXG5cbiAgICAgICAgc3RhcnQgPSBjaGlsZC5fc3RhcnQ7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gcHJldlN0YXJ0ICYmIHNlbGYuX3NvcnQgJiYgY2hpbGQuX3RzICYmICFzZWxmLl9sb2NrKSB7XG4gICAgICAgICAgLy9pbiBjYXNlIG9uZSBvZiB0aGUgdHdlZW5zIHNoaWZ0ZWQgb3V0IG9mIG9yZGVyLCBpdCBuZWVkcyB0byBiZSByZS1pbnNlcnRlZCBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZVxuICAgICAgICAgIHNlbGYuX2xvY2sgPSAxOyAvL3ByZXZlbnQgZW5kbGVzcyByZWN1cnNpdmUgY2FsbHMgLSB0aGVyZSBhcmUgbWV0aG9kcyB0aGF0IGdldCB0cmlnZ2VyZWQgdGhhdCBjaGVjayBkdXJhdGlvbi90b3RhbER1cmF0aW9uIHdoZW4gd2UgYWRkKCkuXG5cbiAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2U3RhcnQgPSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCA8IDAgJiYgY2hpbGQuX3RzKSB7XG4gICAgICAgICAgLy9jaGlsZHJlbiBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIG5lZ2F0aXZlIHN0YXJ0VGltZXMgdW5sZXNzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHNvIGFkanVzdCBoZXJlIGlmIG9uZSBpcyBmb3VuZC5cbiAgICAgICAgICBtYXggLT0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiAoIXBhcmVudCAmJiAhc2VsZi5fZHAgfHwgcGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZykge1xuICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gc3RhcnQgLyBzZWxmLl90cztcbiAgICAgICAgICAgIHNlbGYuX3RpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICBzZWxmLl90VGltZSAtPSBzdGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnNoaWZ0Q2hpbGRyZW4oLXN0YXJ0LCBmYWxzZSwgLTFlOTk5KTtcbiAgICAgICAgICBwcmV2U3RhcnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuX2VuZCA+IG1heCAmJiBjaGlsZC5fdHMgJiYgKG1heCA9IGNoaWxkLl9lbmQpO1xuICAgICAgICBjaGlsZCA9IHByZXY7XG4gICAgICB9XG5cbiAgICAgIF9zZXREdXJhdGlvbihzZWxmLCBzZWxmID09PSBfZ2xvYmFsVGltZWxpbmUgJiYgc2VsZi5fdGltZSA+IG1heCA/IHNlbGYuX3RpbWUgOiBtYXgsIDEsIDEpO1xuXG4gICAgICBzZWxmLl9kaXJ0eSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuX3REdXI7XG4gIH07XG5cbiAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgIGlmIChfZ2xvYmFsVGltZWxpbmUuX3RzKSB7XG4gICAgICBfbGF6eVNhZmVSZW5kZXIoX2dsb2JhbFRpbWVsaW5lLCBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lLCBfZ2xvYmFsVGltZWxpbmUpKTtcblxuICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHtcbiAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICB2YXIgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQuX3RzKSBpZiAoX2NvbmZpZy5hdXRvU2xlZXAgJiYgX3RpY2tlci5fbGlzdGVuZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGltZWxpbmU7XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgX2xvY2s6IDAsXG4gIF9oYXNQYXVzZTogMCxcbiAgX2ZvcmNpbmc6IDBcbn0pO1xuXG52YXIgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBudWxsLCBzZXR0ZXIpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydE51bXMsXG4gICAgICBjb2xvcixcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBoYXNSYW5kb20sXG4gICAgICBhO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChoYXNSYW5kb20gPSB+ZW5kLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgfVxuXG4gIGlmIChzdHJpbmdGaWx0ZXIpIHtcbiAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgIHN0cmluZ0ZpbHRlcihhLCB0YXJnZXQsIHByb3ApOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cbiAgICBzdGFydCA9IGFbMF07XG4gICAgZW5kID0gYVsxXTtcbiAgfVxuXG4gIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICB3aGlsZSAocmVzdWx0ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAuZXhlYyhlbmQpKSB7XG4gICAgZW5kTnVtID0gcmVzdWx0WzBdO1xuICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgIGNvbG9yID0gMTtcbiAgICB9XG5cbiAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0TnVtc1ttYXRjaEluZGV4IC0gMV0pIHx8IDA7IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuICAgICAgcHQuX3B0ID0ge1xuICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgLy9ub3RlOiBTVkcgc3BlYyBhbGxvd3Mgb21pc3Npb24gb2YgY29tbWEvc3BhY2Ugd2hlbiBhIG5lZ2F0aXZlIHNpZ24gaXMgd2VkZ2VkIGJldHdlZW4gdHdvIG51bWJlcnMsIGxpa2UgMi41LTUuMyBpbnN0ZWFkIG9mIDIuNSwtNS4zIGJ1dCB3aGVuIHR3ZWVuaW5nLCB0aGUgbmVnYXRpdmUgdmFsdWUgbWF5IHN3aXRjaCB0byBwb3NpdGl2ZSwgc28gd2UgaW5zZXJ0IHRoZSBjb21tYSBqdXN0IGluIGNhc2UuXG4gICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICBjOiBlbmROdW0uY2hhckF0KDEpID09PSBcIj1cIiA/IHBhcnNlRmxvYXQoZW5kTnVtLnN1YnN0cigyKSkgKiAoZW5kTnVtLmNoYXJBdCgwKSA9PT0gXCItXCIgPyAtMSA6IDEpIDogcGFyc2VGbG9hdChlbmROdW0pIC0gc3RhcnROdW0sXG4gICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCA/IE1hdGgucm91bmQgOiAwXG4gICAgICB9O1xuICAgICAgaW5kZXggPSBfY29tcGxleFN0cmluZ051bUV4cC5sYXN0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHQuYyA9IGluZGV4IDwgZW5kLmxlbmd0aCA/IGVuZC5zdWJzdHJpbmcoaW5kZXgsIGVuZC5sZW5ndGgpIDogXCJcIjsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIHBhcnQgb2YgdGhlIHN0cmluZyAoYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyKVxuXG4gIHB0LmZwID0gZnVuY1BhcmFtO1xuXG4gIGlmIChfcmVsRXhwLnRlc3QoZW5kKSB8fCBoYXNSYW5kb20pIHtcbiAgICBwdC5lID0gMDsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuICB9XG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBpbmRleCwgdGFyZ2V0cywgbW9kaWZpZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRhcmdldFtwcm9wXSxcbiAgICAgIHBhcnNlZFN0YXJ0ID0gc3RhcnQgIT09IFwiZ2V0XCIgPyBzdGFydCA6ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gY3VycmVudFZhbHVlIDogZnVuY1BhcmFtID8gdGFyZ2V0W3Byb3AuaW5kZXhPZihcInNldFwiKSB8fCAhX2lzRnVuY3Rpb24odGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0oZnVuY1BhcmFtKSA6IHRhcmdldFtwcm9wXSgpLFxuICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgcHQ7XG5cbiAgaWYgKF9pc1N0cmluZyhlbmQpKSB7XG4gICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICBlbmQgPSBwYXJzZUZsb2F0KHBhcnNlZFN0YXJ0KSArIHBhcnNlRmxvYXQoZW5kLnN1YnN0cigyKSkgKiAoZW5kLmNoYXJBdCgwKSA9PT0gXCItXCIgPyAtMSA6IDEpICsgKGdldFVuaXQocGFyc2VkU3RhcnQpIHx8IDApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWRTdGFydCAhPT0gZW5kKSB7XG4gICAgaWYgKCFpc05hTihwYXJzZWRTdGFydCAqIGVuZCkpIHtcbiAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgZnVuY1BhcmFtICYmIChwdC5mcCA9IGZ1bmNQYXJhbSk7XG4gICAgICBtb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdGhpcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgIH1cblxuICAgICFjdXJyZW50VmFsdWUgJiYgIShwcm9wIGluIHRhcmdldCkgJiYgX21pc3NpbmdQbHVnaW4ocHJvcCwgZW5kKTtcbiAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICB9XG59LFxuICAgIC8vY3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZhcnMgb2JqZWN0IGFuZCBwcm9jZXNzZXMgYW55IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyAocHV0dGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBkaXJlY3RseSBpbnRvIHRoZSBjb3B5KSBhcyB3ZWxsIGFzIHN0cmluZ3Mgd2l0aCBcInJhbmRvbSgpXCIgaW4gdGhlbS4gSXQgZG9lcyBOT1QgcHJvY2VzcyByZWxhdGl2ZSB2YWx1ZXMuXG5fcHJvY2Vzc1ZhcnMgPSBmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModmFycywgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pIHtcbiAgX2lzRnVuY3Rpb24odmFycykgJiYgKHZhcnMgPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKTtcblxuICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiBfaXNTdHJpbmcodmFycykgPyBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogdmFycztcbiAgfVxuXG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2NoZWNrUGx1Z2luID0gZnVuY3Rpb24gX2NoZWNrUGx1Z2luKHByb3BlcnR5LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykge1xuICB2YXIgcGx1Z2luLCBwdCwgcHRMb29rdXAsIGk7XG5cbiAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgIGlmICh0d2VlbiAhPT0gX3F1aWNrVHdlZW4pIHtcbiAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07IC8vbm90ZTogd2UgY2FuJ3QgdXNlIHR3ZWVuLl9wdExvb2t1cFtpbmRleF0gYmVjYXVzZSBmb3Igc3RhZ2dlcmVkIHR3ZWVucywgdGhlIGluZGV4IGZyb20gdGhlIGZ1bGxUYXJnZXRzIGFycmF5IHdvbid0IG1hdGNoIHdoYXQgaXQgaXMgaW4gZWFjaCBpbmRpdmlkdWFsIHR3ZWVuIHRoYXQgc3Bhd25zIGZyb20gdGhlIHN0YWdnZXIuXG5cbiAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdExvb2t1cFtwbHVnaW4uX3Byb3BzW2ldXSA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW47XG59LFxuICAgIF9vdmVyd3JpdGluZ1R3ZWVuLFxuICAgIC8vc3RvcmUgYSByZWZlcmVuY2UgdGVtcG9yYXJpbHkgc28gd2UgY2FuIGF2b2lkIG92ZXJ3cml0aW5nIGl0c2VsZi5cbl9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKSB7XG4gIHZhciB2YXJzID0gdHdlZW4udmFycyxcbiAgICAgIGVhc2UgPSB2YXJzLmVhc2UsXG4gICAgICBzdGFydEF0ID0gdmFycy5zdGFydEF0LFxuICAgICAgaW1tZWRpYXRlUmVuZGVyID0gdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICBsYXp5ID0gdmFycy5sYXp5LFxuICAgICAgb25VcGRhdGUgPSB2YXJzLm9uVXBkYXRlLFxuICAgICAgb25VcGRhdGVQYXJhbXMgPSB2YXJzLm9uVXBkYXRlUGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZSA9IHZhcnMuY2FsbGJhY2tTY29wZSxcbiAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgeW95b0Vhc2UgPSB2YXJzLnlveW9FYXNlLFxuICAgICAga2V5ZnJhbWVzID0gdmFycy5rZXlmcmFtZXMsXG4gICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgZHVyID0gdHdlZW4uX2R1cixcbiAgICAgIHByZXZTdGFydEF0ID0gdHdlZW4uX3N0YXJ0QXQsXG4gICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwYXJlbnQgPSB0d2Vlbi5wYXJlbnQsXG4gICAgICBmdWxsVGFyZ2V0cyA9IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC5wYXJlbnQuX3RhcmdldHMgOiB0YXJnZXRzLFxuICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiLFxuICAgICAgdGwgPSB0d2Vlbi50aW1lbGluZSxcbiAgICAgIGNsZWFuVmFycyxcbiAgICAgIGksXG4gICAgICBwLFxuICAgICAgcHQsXG4gICAgICB0YXJnZXQsXG4gICAgICBoYXNQcmlvcml0eSxcbiAgICAgIGdzRGF0YSxcbiAgICAgIGhhcm5lc3MsXG4gICAgICBwbHVnaW4sXG4gICAgICBwdExvb2t1cCxcbiAgICAgIGluZGV4LFxuICAgICAgaGFybmVzc1ZhcnMsXG4gICAgICBvdmVyd3JpdHRlbjtcbiAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICB0d2Vlbi5fZWFzZSA9IF9wYXJzZUVhc2UoZWFzZSwgX2RlZmF1bHRzLmVhc2UpO1xuICB0d2Vlbi5feUVhc2UgPSB5b3lvRWFzZSA/IF9pbnZlcnRFYXNlKF9wYXJzZUVhc2UoeW95b0Vhc2UgPT09IHRydWUgPyBlYXNlIDogeW95b0Vhc2UsIF9kZWZhdWx0cy5lYXNlKSkgOiAwO1xuXG4gIGlmICh5b3lvRWFzZSAmJiB0d2Vlbi5feW95byAmJiAhdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vdGhlcmUgbXVzdCBoYXZlIGJlZW4gYSBwYXJlbnQgdGltZWxpbmUgd2l0aCB5b3lvOnRydWUgdGhhdCBpcyBjdXJyZW50bHkgaW4gaXRzIHlveW8gcGhhc2UsIHNvIGZsaXAgdGhlIGVhc2VzLlxuICAgIHlveW9FYXNlID0gdHdlZW4uX3lFYXNlO1xuICAgIHR3ZWVuLl95RWFzZSA9IHR3ZWVuLl9lYXNlO1xuICAgIHR3ZWVuLl9lYXNlID0geW95b0Vhc2U7XG4gIH1cblxuICBpZiAoIXRsKSB7XG4gICAgLy9pZiB0aGVyZSdzIGFuIGludGVybmFsIHRpbWVsaW5lLCBza2lwIGFsbCB0aGUgcGFyc2luZyBiZWNhdXNlIHdlIHBhc3NlZCB0aGF0IHRhc2sgZG93biB0aGUgY2hhaW4uXG4gICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgaGFybmVzc1ZhcnMgPSBoYXJuZXNzICYmIHZhcnNbaGFybmVzcy5wcm9wXTsgLy9zb21lb25lIG1heSBuZWVkIHRvIHNwZWNpZnkgQ1NTLXNwZWNpZmljIHZhbHVlcyBBTkQgbm9uLUNTUyB2YWx1ZXMsIGxpa2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFuIFwieFwiIHByb3BlcnR5IHBsdXMgaXQncyBhIHN0YW5kYXJkIERPTSBlbGVtZW50LiBXZSBhbGxvdyBwZW9wbGUgdG8gZGlzdGluZ3Vpc2ggYnkgd3JhcHBpbmcgcGx1Z2luLXNwZWNpZmljIHN0dWZmIGluIGEgY3NzOnt9IG9iamVjdCBmb3IgZXhhbXBsZS5cblxuICAgIGNsZWFuVmFycyA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9yZXNlcnZlZFByb3BzKTtcbiAgICBwcmV2U3RhcnRBdCAmJiBwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpLmtpbGwoKTtcblxuICAgIGlmIChzdGFydEF0KSB7XG4gICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgICBkYXRhOiBcImlzU3RhcnRcIixcbiAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGF6eTogX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgIHN0YXJ0QXQ6IG51bGwsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBvblVwZGF0ZVBhcmFtcyxcbiAgICAgICAgY2FsbGJhY2tTY29wZTogY2FsbGJhY2tTY29wZSxcbiAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgfSwgc3RhcnRBdCkpKTsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIGZyb20sIHRvKS5mcm9tVG8oZSwgdG8sIGZyb20pO1xuXG5cbiAgICAgIGlmIChpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgICAgYXV0b1JldmVydCB8fCAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG4gICAgICAgIH0gZWxzZSBpZiAoZHVyICYmICEodGltZSA8IDAgJiYgcHJldlN0YXJ0QXQpKSB7XG4gICAgICAgICAgdGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgICAgcmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAvL2Zyb20oKSB0d2VlbnMgbXVzdCBiZSBoYW5kbGVkIHVuaXF1ZWx5OiB0aGVpciBiZWdpbm5pbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQgYnV0IHdlIGRvbid0IHdhbnQgb3ZlcndyaXRpbmcgdG8gb2NjdXIgeWV0ICh3aGVuIHRpbWUgaXMgc3RpbGwgMCkuIFdhaXQgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucyBiZWZvcmUgZG9pbmcgYWxsIHRoZSByb3V0aW5lcyBsaWtlIG92ZXJ3cml0aW5nLiBBdCB0aGF0IHRpbWUsIHdlIHNob3VsZCByZW5kZXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gdG8gZW5zdXJlIHRoYXQgdGhpbmdzIGluaXRpYWxpemUgY29ycmVjdGx5IChyZW1lbWJlciwgZnJvbSgpIHR3ZWVucyBnbyBiYWNrd2FyZHMpXG4gICAgICBpZiAocHJldlN0YXJ0QXQpIHtcbiAgICAgICAgIWF1dG9SZXZlcnQgJiYgKHR3ZWVuLl9zdGFydEF0ID0gMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lICYmIChpbW1lZGlhdGVSZW5kZXIgPSBmYWxzZSk7IC8vaW4gcmFyZSBjYXNlcyAobGlrZSBpZiBhIGZyb20oKSB0d2VlbiBydW5zIGFuZCB0aGVuIGlzIGludmFsaWRhdGUoKS1lZCksIGltbWVkaWF0ZVJlbmRlciBjb3VsZCBiZSB0cnVlIGJ1dCB0aGUgaW5pdGlhbCBmb3JjZWQtcmVuZGVyIGdldHMgc2tpcHBlZCwgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIHRoZSByZW5kZXIgaW4gdGhpcyBjb250ZXh0IHdoZW4gdGhlIF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXG5cbiAgICAgICAgcCA9IF9zZXREZWZhdWx0cyh7XG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBcImlzRnJvbVN0YXJ0XCIsXG4gICAgICAgICAgLy93ZSB0YWcgdGhlIHR3ZWVuIHdpdGggYXMgXCJpc0Zyb21TdGFydFwiIHNvIHRoYXQgaWYgW2luc2lkZSBhIHBsdWdpbl0gd2UgbmVlZCB0byBvbmx5IGRvIHNvbWV0aGluZyBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2Vlbiwgd2UgaGF2ZSBhIHdheSBvZiBpZGVudGlmeWluZyB0aGlzIHR3ZWVuIGFzIG1lcmVseSB0aGUgb25lIHRoYXQncyBzZXR0aW5nIHRoZSBiZWdpbm5pbmcgdmFsdWVzIGZvciBhIFwiZnJvbSgpXCIgdHdlZW4uIEZvciBleGFtcGxlLCBjbGVhclByb3BzIGluIENTU1BsdWdpbiBzaG91bGQgb25seSBnZXQgYXBwbGllZCBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2VlbiBhbmQgd2l0aG91dCB0aGlzIHRhZywgZnJvbSguLi57aGVpZ2h0OjEwMCwgY2xlYXJQcm9wczpcImhlaWdodFwiLCBkZWxheToxfSkgd291bGQgd2lwZSB0aGUgaGVpZ2h0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuIGFuZCBhZnRlciAxIHNlY29uZCwgaXQnZCBraWNrIGJhY2sgaW4uXG4gICAgICAgICAgbGF6eTogaW1tZWRpYXRlUmVuZGVyICYmIF9pc05vdEZhbHNlKGxhenkpLFxuICAgICAgICAgIGltbWVkaWF0ZVJlbmRlcjogaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcbiAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgIHBhcmVudDogcGFyZW50IC8vZW5zdXJlcyB0aGF0IG5lc3RlZCB0d2VlbnMgdGhhdCBoYWQgYSBzdGFnZ2VyIGFyZSBoYW5kbGVkIHByb3Blcmx5LCBsaWtlIGdzYXAuZnJvbShcIi5jbGFzc1wiLCB7eTpnc2FwLnV0aWxzLndyYXAoWy0xMDAsMTAwXSl9KVxuXG4gICAgICAgIH0sIGNsZWFuVmFycyk7XG4gICAgICAgIGhhcm5lc3NWYXJzICYmIChwW2hhcm5lc3MucHJvcF0gPSBoYXJuZXNzVmFycyk7IC8vIGluIGNhc2Ugc29tZW9uZSBkb2VzIHNvbWV0aGluZyBsaWtlIC5mcm9tKC4uLiwge2Nzczp7fX0pXG5cbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4uX3N0YXJ0QXQgPSBUd2Vlbi5zZXQodGFyZ2V0cywgcCkpO1xuXG4gICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgX2luaXRUd2Vlbih0d2Vlbi5fc3RhcnRBdCwgX3RpbnlOdW0pOyAvL2Vuc3VyZXMgdGhhdCB0aGUgaW5pdGlhbCB2YWx1ZXMgYXJlIHJlY29yZGVkXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHR3ZWVuLl9wdCA9IDA7XG4gICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgIHR3ZWVuLl9wdExvb2t1cFtpXSA9IHB0TG9va3VwID0ge307XG4gICAgICBfbGF6eUxvb2t1cFtnc0RhdGEuaWRdICYmIF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cbiAgICAgIGluZGV4ID0gZnVsbFRhcmdldHMgPT09IHRhcmdldHMgPyBpIDogZnVsbFRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgICBpZiAoaGFybmVzcyAmJiAocGx1Z2luID0gbmV3IGhhcm5lc3MoKSkuaW5pdCh0YXJnZXQsIGhhcm5lc3NWYXJzIHx8IGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCBmdWxsVGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcGx1Z2luLm5hbWUsIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgICAgICBwbHVnaW4uX3Byb3BzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBwdExvb2t1cFtuYW1lXSA9IHB0O1xuICAgICAgICB9KTtcblxuICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFybmVzcyB8fCBoYXJuZXNzVmFycykge1xuICAgICAgICBmb3IgKHAgaW4gY2xlYW5WYXJzKSB7XG4gICAgICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIChwbHVnaW4gPSBfY2hlY2tQbHVnaW4ocCwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgZnVsbFRhcmdldHMpKSkge1xuICAgICAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdExvb2t1cFtwXSA9IHB0ID0gX2FkZFByb3BUd2Vlbi5jYWxsKHR3ZWVuLCB0YXJnZXQsIHAsIFwiZ2V0XCIsIGNsZWFuVmFyc1twXSwgaW5kZXgsIGZ1bGxUYXJnZXRzLCAwLCB2YXJzLnN0cmluZ0ZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9vcCAmJiB0d2Vlbi5fb3BbaV0gJiYgdHdlZW4ua2lsbCh0YXJnZXQsIHR3ZWVuLl9vcFtpXSk7XG5cbiAgICAgIGlmIChhdXRvT3ZlcndyaXRlICYmIHR3ZWVuLl9wdCkge1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IHR3ZWVuO1xuXG4gICAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0LCBwdExvb2t1cCwgdHdlZW4uZ2xvYmFsVGltZSgwKSk7IC8vQWxzbyBtYWtlIHN1cmUgdGhlIG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb3ZlcndyaXRlIFRISVMgdHdlZW4hISFcblxuXG4gICAgICAgIG92ZXJ3cml0dGVuID0gIXR3ZWVuLnBhcmVudDtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgJiYgbGF6eSAmJiAoX2xhenlMb29rdXBbZ3NEYXRhLmlkXSA9IDEpO1xuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodHdlZW4pO1xuICAgIHR3ZWVuLl9vbkluaXQgJiYgdHdlZW4uX29uSW5pdCh0d2Vlbik7IC8vcGx1Z2lucyBsaWtlIFJvdW5kUHJvcHMgbXVzdCB3YWl0IHVudGlsIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyBhcmUgaW5zdGFudGlhdGVkLiBJbiB0aGUgcGx1Z2luJ3MgaW5pdCgpIGZ1bmN0aW9uLCBpdCBzZXRzIHRoZSBfb25Jbml0IG9uIHRoZSB0d2VlbiBpbnN0YW5jZS4gTWF5IG5vdCBiZSBwcmV0dHkvaW50dWl0aXZlLCBidXQgaXQncyBmYXN0IGFuZCBrZWVwcyBmaWxlIHNpemUgZG93bi5cbiAgfVxuXG4gIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7IC8vbmVzdGVkIHRpbWVsaW5lcyBzaG91bGQgbmV2ZXIgcnVuIGJhY2t3YXJkcyAtIHRoZSBiYWNrd2FyZHMtbmVzcyBpcyBpbiB0aGUgY2hpbGQgdHdlZW5zLlxuXG4gIHR3ZWVuLl9vblVwZGF0ZSA9IG9uVXBkYXRlO1xuICB0d2Vlbi5faW5pdHRlZCA9ICghdHdlZW4uX29wIHx8IHR3ZWVuLl9wdCkgJiYgIW92ZXJ3cml0dGVuOyAvLyBpZiBvdmVyd3JpdHRlblByb3BzIHJlc3VsdGVkIGluIHRoZSBlbnRpcmUgdHdlZW4gYmVpbmcga2lsbGVkLCBkbyBOT1QgZmxhZyBpdCBhcyBpbml0dGVkIG9yIGVsc2UgaXQgbWF5IHJlbmRlciBmb3Igb25lIHRpY2suXG59LFxuICAgIF9hZGRBbGlhc2VzVG9WYXJzID0gZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModGFyZ2V0cywgdmFycykge1xuICB2YXIgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDAsXG4gICAgICBwcm9wZXJ0eUFsaWFzZXMgPSBoYXJuZXNzICYmIGhhcm5lc3MuYWxpYXNlcyxcbiAgICAgIGNvcHksXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIGFsaWFzZXM7XG5cbiAgaWYgKCFwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIGNvcHkgPSBfbWVyZ2Uoe30sIHZhcnMpO1xuXG4gIGZvciAocCBpbiBwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICBpZiAocCBpbiBjb3B5KSB7XG4gICAgICBhbGlhc2VzID0gcHJvcGVydHlBbGlhc2VzW3BdLnNwbGl0KFwiLFwiKTtcbiAgICAgIGkgPSBhbGlhc2VzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb3B5W2FsaWFzZXNbaV1dID0gY29weVtwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX3BhcnNlRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlRnVuY09yU3RyaW5nKHZhbHVlLCB0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIDogX2lzU3RyaW5nKHZhbHVlKSAmJiB+dmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgPyBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkgOiB2YWx1ZTtcbn0sXG4gICAgX3N0YWdnZXJUd2VlblByb3BzID0gX2NhbGxiYWNrTmFtZXMgKyBcInJlcGVhdCxyZXBlYXREZWxheSx5b3lvLHJlcGVhdFJlZnJlc2gseW95b0Vhc2VcIixcbiAgICBfc3RhZ2dlclByb3BzVG9Ta2lwID0gKF9zdGFnZ2VyVHdlZW5Qcm9wcyArIFwiLGlkLHN0YWdnZXIsZGVsYXksZHVyYXRpb24scGF1c2VkLHNjcm9sbFRyaWdnZXJcIikuc3BsaXQoXCIsXCIpO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFR3ZWVuLCBfQW5pbWF0aW9uMik7XG5cbiAgZnVuY3Rpb24gVHdlZW4odGFyZ2V0cywgdmFycywgdGltZSwgc2tpcEluaGVyaXQpIHtcbiAgICB2YXIgX3RoaXMzO1xuXG4gICAgaWYgKHR5cGVvZiB2YXJzID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aW1lLmR1cmF0aW9uID0gdmFycztcbiAgICAgIHZhcnMgPSB0aW1lO1xuICAgICAgdGltZSA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RoaXMzID0gX0FuaW1hdGlvbjIuY2FsbCh0aGlzLCBza2lwSW5oZXJpdCA/IHZhcnMgOiBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLCB0aW1lKSB8fCB0aGlzO1xuICAgIHZhciBfdGhpczMkdmFycyA9IF90aGlzMy52YXJzLFxuICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF90aGlzMyR2YXJzLmRlbGF5LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdGhpczMkdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICBvdmVyd3JpdGUgPSBfdGhpczMkdmFycy5vdmVyd3JpdGUsXG4gICAgICAgIGtleWZyYW1lcyA9IF90aGlzMyR2YXJzLmtleWZyYW1lcyxcbiAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlciA9IF90aGlzMyR2YXJzLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgIHlveW9FYXNlID0gX3RoaXMzJHZhcnMueW95b0Vhc2UsXG4gICAgICAgIHBhcmVudCA9IF90aGlzMy5wYXJlbnQsXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSAoX2lzQXJyYXkodGFyZ2V0cykgfHwgX2lzVHlwZWRBcnJheSh0YXJnZXRzKSA/IF9pc051bWJlcih0YXJnZXRzWzBdKSA6IFwibGVuZ3RoXCIgaW4gdmFycykgPyBbdGFyZ2V0c10gOiB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICB0bCxcbiAgICAgICAgaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgbCxcbiAgICAgICAgcCxcbiAgICAgICAgY3VyVGFyZ2V0LFxuICAgICAgICBzdGFnZ2VyRnVuYyxcbiAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlO1xuICAgIF90aGlzMy5fdGFyZ2V0cyA9IHBhcnNlZFRhcmdldHMubGVuZ3RoID8gX2hhcm5lc3MocGFyc2VkVGFyZ2V0cykgOiBfd2FybihcIkdTQVAgdGFyZ2V0IFwiICsgdGFyZ2V0cyArIFwiIG5vdCBmb3VuZC4gaHR0cHM6Ly9ncmVlbnNvY2suY29tXCIsICFfY29uZmlnLm51bGxUYXJnZXRXYXJuKSB8fCBbXTtcbiAgICBfdGhpczMuX3B0TG9va3VwID0gW107IC8vUHJvcFR3ZWVuIGxvb2t1cC4gQW4gYXJyYXkgY29udGFpbmluZyBhbiBvYmplY3QgZm9yIGVhY2ggdGFyZ2V0LCBoYXZpbmcga2V5cyBmb3IgZWFjaCB0d2VlbmluZyBwcm9wZXJ0eVxuXG4gICAgX3RoaXMzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG5cbiAgICBpZiAoa2V5ZnJhbWVzIHx8IHN0YWdnZXIgfHwgX2lzRnVuY09yU3RyaW5nKGR1cmF0aW9uKSB8fCBfaXNGdW5jT3JTdHJpbmcoZGVsYXkpKSB7XG4gICAgICB2YXJzID0gX3RoaXMzLnZhcnM7XG4gICAgICB0bCA9IF90aGlzMy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gICAgICAgIGRhdGE6IFwibmVzdGVkXCIsXG4gICAgICAgIGRlZmF1bHRzOiBkZWZhdWx0cyB8fCB7fVxuICAgICAgfSk7XG4gICAgICB0bC5raWxsKCk7XG4gICAgICB0bC5wYXJlbnQgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG5cbiAgICAgIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgICAgX3NldERlZmF1bHRzKHRsLnZhcnMuZGVmYXVsdHMsIHtcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIlxuICAgICAgICB9KTtcblxuICAgICAgICBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICByZXR1cm4gdGwudG8ocGFyc2VkVGFyZ2V0cywgZnJhbWUsIFwiPlwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciA/IGRpc3RyaWJ1dGUoc3RhZ2dlcikgOiBfZW1wdHlGdW5jO1xuXG4gICAgICAgIGlmIChfaXNPYmplY3Qoc3RhZ2dlcikpIHtcbiAgICAgICAgICAvL3VzZXJzIGNhbiBwYXNzIGluIGNhbGxiYWNrcyBsaWtlIG9uU3RhcnQvb25Db21wbGV0ZSBpbiB0aGUgc3RhZ2dlciBvYmplY3QuIFRoZXNlIHNob3VsZCBmaXJlIHdpdGggZWFjaCBpbmRpdmlkdWFsIHR3ZWVuLlxuICAgICAgICAgIGZvciAocCBpbiBzdGFnZ2VyKSB7XG4gICAgICAgICAgICBpZiAofl9zdGFnZ2VyVHdlZW5Qcm9wcy5pbmRleE9mKHApKSB7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2VbcF0gPSBzdGFnZ2VyW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgaWYgKF9zdGFnZ2VyUHJvcHNUb1NraXAuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgICAgICAgICAgY29weVtwXSA9IHZhcnNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICB5b3lvRWFzZSAmJiAoY29weS55b3lvRWFzZSA9IHlveW9FYXNlKTtcbiAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgJiYgX21lcmdlKGNvcHksIHN0YWdnZXJWYXJzVG9NZXJnZSk7XG4gICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTsgLy9kb24ndCBqdXN0IGNvcHkgZHVyYXRpb24gb3IgZGVsYXkgYmVjYXVzZSBpZiB0aGV5J3JlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLCB3ZSdkIGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgX2lzRnVuY09yU3RyaW5nKCkgd291bGQgZXZhbHVhdGUgYXMgdHJ1ZSBpbiB0aGUgY2hpbGQgdHdlZW5zLCBlbnRlcmluZyB0aGlzIGxvb3AsIGV0Yy4gU28gd2UgcGFyc2UgdGhlIHZhbHVlIHN0cmFpZ2h0IGZyb20gdmFycyBhbmQgZGVmYXVsdCB0byAwLlxuXG4gICAgICAgICAgY29weS5kdXJhdGlvbiA9ICtfcGFyc2VGdW5jT3JTdHJpbmcoZHVyYXRpb24sIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKTtcbiAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICBpZiAoIXN0YWdnZXIgJiYgbCA9PT0gMSAmJiBjb3B5LmRlbGF5KSB7XG4gICAgICAgICAgICAvLyBpZiBzb21lb25lIGRvZXMgZGVsYXk6XCJyYW5kb20oMSwgNSlcIiwgcmVwZWF0Oi0xLCBmb3IgZXhhbXBsZSwgdGhlIGRlbGF5IHNob3VsZG4ndCBiZSBpbnNpZGUgdGhlIHJlcGVhdC5cbiAgICAgICAgICAgIF90aGlzMy5fZGVsYXkgPSBkZWxheSA9IGNvcHkuZGVsYXk7XG4gICAgICAgICAgICBfdGhpczMuX3N0YXJ0ICs9IGRlbGF5O1xuICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwudG8oY3VyVGFyZ2V0LCBjb3B5LCBzdGFnZ2VyRnVuYyhpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRsLmR1cmF0aW9uKCkgPyBkdXJhdGlvbiA9IGRlbGF5ID0gMCA6IF90aGlzMy50aW1lbGluZSA9IDA7IC8vIGlmIHRoZSB0aW1lbGluZSdzIGR1cmF0aW9uIGlzIDAsIHdlIGRvbid0IG5lZWQgYSB0aW1lbGluZSBpbnRlcm5hbGx5IVxuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiB8fCBfdGhpczMuZHVyYXRpb24oZHVyYXRpb24gPSB0bC5kdXJhdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDsgLy9zcGVlZCBvcHRpbWl6YXRpb24sIGZhc3RlciBsb29rdXBzIChubyBnb2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluKVxuICAgIH1cblxuICAgIGlmIChvdmVyd3JpdGUgPT09IHRydWUpIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuXG4gICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgfVxuXG4gICAgcGFyZW50ICYmIF9wb3N0QWRkQ2hlY2tzKHBhcmVudCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKTtcblxuICAgIGlmIChpbW1lZGlhdGVSZW5kZXIgfHwgIWR1cmF0aW9uICYmICFrZXlmcmFtZXMgJiYgX3RoaXMzLl9zdGFydCA9PT0gX3JvdW5kKHBhcmVudC5fdGltZSkgJiYgX2lzTm90RmFsc2UoaW1tZWRpYXRlUmVuZGVyKSAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSAmJiBwYXJlbnQuZGF0YSAhPT0gXCJuZXN0ZWRcIikge1xuICAgICAgX3RoaXMzLl90VGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cbiAgICAgIF90aGlzMy5yZW5kZXIoTWF0aC5tYXgoMCwgLWRlbGF5KSk7IC8vaW4gY2FzZSBkZWxheSBpcyBuZWdhdGl2ZVxuXG4gICAgfVxuXG4gICAgc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmIHRvdGFsVGltZSA+PSAwID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgaXNZb3lvLFxuICAgICAgICByYXRpbyxcbiAgICAgICAgdGltZWxpbmUsXG4gICAgICAgIHlveW9FYXNlO1xuXG4gICAgaWYgKCFkdXIpIHtcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgfSBlbHNlIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgIXRvdGFsVGltZSB8fCBmb3JjZSB8fCB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCkge1xuICAgICAgLy90aGlzIHNlbnNlcyBpZiB3ZSdyZSBjcm9zc2luZyBvdmVyIHRoZSBzdGFydCB0aW1lLCBpbiB3aGljaCBjYXNlIHdlIG11c3QgcmVjb3JkIF96VGltZSBhbmQgZm9yY2UgdGhlIHJlbmRlciwgYnV0IHdlIGRvIGl0IGluIHRoaXMgbGVuZ3RoeSBjb25kaXRpb25hbCB3YXkgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKHVzdWFsbHkgd2UgY2FuIHNraXAgdGhlIGNhbGN1bGF0aW9ucyk6IHRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuX3pUaW1lIDwgMCkgIT09ICh0b3RhbFRpbWUgPCAwKVxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lO1xuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuICAgICAgICB0aW1lID0gX3JvdW5kKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNZb3lvID0gdGhpcy5feW95byAmJiBpdGVyYXRpb24gJiAxO1xuXG4gICAgICAgIGlmIChpc1lveW8pIHtcbiAgICAgICAgICB5b3lvRWFzZSA9IHRoaXMuX3lFYXNlO1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRpbWUgPT09IHByZXZUaW1lICYmICFmb3JjZSAmJiB0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgICAgLy9jb3VsZCBiZSBkdXJpbmcgdGhlIHJlcGVhdERlbGF5IHBhcnQuIE5vIG5lZWQgdG8gcmVuZGVyIGFuZCBmaXJlIGNhbGxiYWNrcy5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICB0aW1lbGluZSAmJiB0aGlzLl95RWFzZSAmJiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95byk7IC8vcmVwZWF0UmVmcmVzaCBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgICBpZiAodGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTsgLy9mb3JjZSwgb3RoZXJ3aXNlIGlmIGxhenkgaXMgdHJ1ZSwgdGhlIF9hdHRlbXB0SW5pdFR3ZWVuKCkgd2lsbCByZXR1cm4gYW5kIHdlJ2xsIGp1bXAgb3V0IGFuZCBnZXQgY2F1Z2h0IGJvdW5jaW5nIG9uIGVhY2ggdGljay5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kKGN5Y2xlRHVyYXRpb24gKiBpdGVyYXRpb24pLCB0cnVlKS5pbnZhbGlkYXRlKCkuX2xvY2sgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgaWYgKF9hdHRlbXB0SW5pdFR3ZWVuKHRoaXMsIHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSAwOyAvLyBpbiBjb25zdHJ1Y3RvciBpZiBpbW1lZGlhdGVSZW5kZXIgaXMgdHJ1ZSwgd2Ugc2V0IF90VGltZSB0byAtX3RpbnlOdW0gdG8gaGF2ZSB0aGUgcGxheWhlYWQgY3Jvc3MgdGhlIHN0YXJ0aW5nIHBvaW50IGJ1dCB3ZSBjYW4ndCBsZWF2ZSBfdFRpbWUgYXMgYSBuZWdhdGl2ZSBudW1iZXIuXG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkdXIgIT09IHRoaXMuX2R1cikge1xuICAgICAgICAgIC8vIHdoaWxlIGluaXR0aW5nLCBhIHBsdWdpbiBsaWtlIEluZXJ0aWFQbHVnaW4gbWlnaHQgYWx0ZXIgdGhlIGR1cmF0aW9uLCBzbyByZXJ1biBmcm9tIHRoZSBzdGFydCB0byBlbnN1cmUgZXZlcnl0aGluZyByZW5kZXJzIGFzIGl0IHNob3VsZC5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3QgJiYgdGhpcy5fdHMpIHtcbiAgICAgICAgdGhpcy5fYWN0ID0gMTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgICAgdGhpcy5fbGF6eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9ICh5b3lvRWFzZSB8fCB0aGlzLl9lYXNlKSh0aW1lIC8gZHVyKTtcblxuICAgICAgaWYgKHRoaXMuX2Zyb20pIHtcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgfVxuXG4gICAgICB0aW1lICYmICFwcmV2VGltZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcbiAgICAgIHB0ID0gdGhpcy5fcHQ7XG5cbiAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgdGltZWxpbmUgJiYgdGltZWxpbmUucmVuZGVyKHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiAhdGltZSAmJiBpc1lveW8gPyAtX3RpbnlOdW0gOiB0aW1lbGluZS5fZHVyICogcmF0aW8sIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkgfHwgdGhpcy5fc3RhcnRBdCAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuXG4gICAgICBpZiAodGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblxuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblVwZGF0ZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVwZWF0ICYmIGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgICBpZiAoKHRUaW1lID09PSB0aGlzLl90RHVyIHx8ICF0VGltZSkgJiYgdGhpcy5fdFRpbWUgPT09IHRUaW1lKSB7XG4gICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiAhdGhpcy5fb25VcGRhdGUgJiYgdGhpcy5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHRoaXMuX3REdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgd2UncmUgcmVuZGVyaW5nIGF0IGV4YWN0bHkgYSB0aW1lIG9mIDAsIGFzIHRoZXJlIGNvdWxkIGJlIGF1dG9SZXZlcnQgdmFsdWVzIHRoYXQgc2hvdWxkIGdldCBzZXQgb24gdGhlIG5leHQgdGljayAoaWYgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydFRpbWUsIG5lZ2F0aXZlIHRvdGFsVGltZSkuIERvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lKSkge1xuICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGFuZCB0VGltZSBhcmUgemVybywgd2Ugc2hvdWxkbid0IGZpcmUgdGhlIG9uUmV2ZXJzZUNvbXBsZXRlLiBUaGlzIGNvdWxkIGhhcHBlbiBpZiB5b3UgZ3NhcC50byguLi4ge3BhdXNlZDp0cnVlfSkucGxheSgpO1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XG4gIH07XG5cbiAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9wdCA9IHRoaXMuX29wID0gdGhpcy5fc3RhcnRBdCA9IHRoaXMuX29uVXBkYXRlID0gdGhpcy5fYWN0ID0gdGhpcy5fbGF6eSA9IDA7XG4gICAgdGhpcy5fcHRMb29rdXAgPSBbXTtcbiAgICB0aGlzLnRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUuaW52YWxpZGF0ZSgpO1xuICAgIHJldHVybiBfQW5pbWF0aW9uMi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzMua2lsbCA9IGZ1bmN0aW9uIGtpbGwodGFyZ2V0cywgdmFycykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSBcImFsbFwiO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0cyAmJiAoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikpIHtcbiAgICAgIHRoaXMuX2xhenkgPSAwO1xuXG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZWxpbmUpIHtcbiAgICAgIHZhciB0RHVyID0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCB2YXJzLCBfb3ZlcndyaXRpbmdUd2VlbiAmJiBfb3ZlcndyaXRpbmdUd2Vlbi52YXJzLm92ZXJ3cml0ZSAhPT0gdHJ1ZSkuX2ZpcnN0IHx8IF9pbnRlcnJ1cHQodGhpcyk7IC8vIGlmIG5vdGhpbmcgaXMgbGVmdCB0d2Vlbm5nLCBpbnRlcnJ1cHQuXG5cbiAgICAgIHRoaXMucGFyZW50ICYmIHREdXIgIT09IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpICYmIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9kdXIgKiB0aGlzLnRpbWVsaW5lLl90RHVyIC8gdER1ciwgMCwgMSk7IC8vIGlmIGEgbmVzdGVkIHR3ZWVuIGlzIGtpbGxlZCB0aGF0IGNoYW5nZXMgdGhlIGR1cmF0aW9uLCBpdCBzaG91bGQgYWZmZWN0IHRoaXMgdHdlZW4ncyBkdXJhdGlvbi4gV2UgbXVzdCB1c2UgdGhlIHJhdGlvLCB0aG91Z2gsIGJlY2F1c2Ugc29tZXRpbWVzIHRoZSBpbnRlcm5hbCB0aW1lbGluZSBpcyBzdHJldGNoZWQgbGlrZSBmb3Iga2V5ZnJhbWVzIHdoZXJlIHRoZXkgZG9uJ3QgYWxsIGFkZCB1cCB0byB3aGF0ZXZlciB0aGUgcGFyZW50IHR3ZWVuJ3MgZHVyYXRpb24gd2FzIHNldCB0by5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlZFRhcmdldHMgPSB0aGlzLl90YXJnZXRzLFxuICAgICAgICBraWxsaW5nVGFyZ2V0cyA9IHRhcmdldHMgPyB0b0FycmF5KHRhcmdldHMpIDogcGFyc2VkVGFyZ2V0cyxcbiAgICAgICAgcHJvcFR3ZWVuTG9va3VwID0gdGhpcy5fcHRMb29rdXAsXG4gICAgICAgIGZpcnN0UFQgPSB0aGlzLl9wdCxcbiAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wcyxcbiAgICAgICAgY3VyTG9va3VwLFxuICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHAsXG4gICAgICAgIHB0LFxuICAgICAgICBpO1xuXG4gICAgaWYgKCghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSAmJiBfYXJyYXlzTWF0Y2gocGFyc2VkVGFyZ2V0cywga2lsbGluZ1RhcmdldHMpKSB7XG4gICAgICB2YXJzID09PSBcImFsbFwiICYmICh0aGlzLl9wdCA9IDApO1xuICAgICAgcmV0dXJuIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgfVxuXG4gICAgb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX29wID0gdGhpcy5fb3AgfHwgW107XG5cbiAgICBpZiAodmFycyAhPT0gXCJhbGxcIikge1xuICAgICAgLy9zbyBwZW9wbGUgY2FuIHBhc3MgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICBwID0ge307XG5cbiAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHBbbmFtZV0gPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXJzID0gcDtcbiAgICAgIH1cblxuICAgICAgdmFycyA9IF9hZGRBbGlhc2VzVG9WYXJzKHBhcnNlZFRhcmdldHMsIHZhcnMpO1xuICAgIH1cblxuICAgIGkgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh+a2lsbGluZ1RhcmdldHMuaW5kZXhPZihwYXJzZWRUYXJnZXRzW2ldKSkge1xuICAgICAgICBjdXJMb29rdXAgPSBwcm9wVHdlZW5Mb29rdXBbaV07XG5cbiAgICAgICAgaWYgKHZhcnMgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICBvdmVyd3JpdHRlblByb3BzW2ldID0gdmFycztcbiAgICAgICAgICBwcm9wcyA9IGN1ckxvb2t1cDtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gfHwge307XG4gICAgICAgICAgcHJvcHMgPSB2YXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwIGluIHByb3BzKSB7XG4gICAgICAgICAgcHQgPSBjdXJMb29rdXAgJiYgY3VyTG9va3VwW3BdO1xuXG4gICAgICAgICAgaWYgKHB0KSB7XG4gICAgICAgICAgICBpZiAoIShcImtpbGxcIiBpbiBwdC5kKSB8fCBwdC5kLmtpbGwocCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGN1ckxvb2t1cFtwXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VyT3ZlcndyaXRlUHJvcHMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzW3BdID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0dGVkICYmICF0aGlzLl9wdCAmJiBmaXJzdFBUICYmIF9pbnRlcnJ1cHQodGhpcyk7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgYXJlIGtpbGxlZCwga2lsbCB0aGUgdHdlZW4uIFdpdGhvdXQgdGhpcyBsaW5lLCBpZiB0aGVyZSdzIGEgdHdlZW4gd2l0aCBtdWx0aXBsZSB0YXJnZXRzIGFuZCB0aGVuIHlvdSBraWxsVHdlZW5zT2YoKSBlYWNoIHRhcmdldCBpbmRpdmlkdWFsbHksIHRoZSB0d2VlbiB3b3VsZCB0ZWNobmljYWxseSBzdGlsbCByZW1haW4gYWN0aXZlIGFuZCBmaXJlIGl0cyBvbkNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBwcm9wZXJ0aWVzIHR3ZWVuaW5nLlxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4udG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBhcmd1bWVudHNbMl0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIF9wYXJzZVZhcnMoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgVHdlZW4uZGVsYXllZENhbGwgPSBmdW5jdGlvbiBkZWxheWVkQ2FsbChkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKGNhbGxiYWNrLCAwLCB7XG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvblJldmVyc2VDb21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvbkNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBvblJldmVyc2VDb21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGVcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycykge1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgX3BhcnNlVmFycyhhcmd1bWVudHMsIDIpKTtcbiAgfTtcblxuICBUd2Vlbi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycykge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzKTtcbiAgfTtcblxuICBUd2Vlbi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShBbmltYXRpb24pO1xuXG5fc2V0RGVmYXVsdHMoVHdlZW4ucHJvdG90eXBlLCB7XG4gIF90YXJnZXRzOiBbXSxcbiAgX2xhenk6IDAsXG4gIF9zdGFydEF0OiAwLFxuICBfb3A6IDAsXG4gIF9vbkluaXQ6IDBcbn0pOyAvL2FkZCB0aGUgcGVydGluZW50IHRpbWVsaW5lIG1ldGhvZHMgdG8gVHdlZW4gaW5zdGFuY2VzIHNvIHRoYXQgdXNlcnMgY2FuIGNoYWluIGNvbnZlbmllbnRseSBhbmQgY3JlYXRlIGEgdGltZWxpbmUgYXV0b21hdGljYWxseS4gKHJlbW92ZWQgZHVlIHRvIGNvbmNlcm5zIHRoYXQgaXQnZCB1bHRpbWF0ZWx5IGFkZCB0byBtb3JlIGNvbmZ1c2lvbiBlc3BlY2lhbGx5IGZvciBiZWdpbm5lcnMpXG4vLyBfZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxzZXQsY2FsbCxhZGQsYWRkTGFiZWwsYWRkUGF1c2VcIiwgbmFtZSA9PiB7XG4vLyBcdFR3ZWVuLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxldCB0bCA9IG5ldyBUaW1lbGluZSgpO1xuLy8gXHRcdHJldHVybiBfYWRkVG9UaW1lbGluZSh0bCwgdGhpcylbbmFtZV0uYXBwbHkodGwsIHRvQXJyYXkoYXJndW1lbnRzKSk7XG4vLyBcdH1cbi8vIH0pO1xuLy9mb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gTGV2ZXJhZ2UgdGhlIHRpbWVsaW5lIGNhbGxzLlxuXG5cbl9mb3JFYWNoTmFtZShcInN0YWdnZXJUbyxzdGFnZ2VyRnJvbSxzdGFnZ2VyRnJvbVRvXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIFR3ZWVuW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSgpLFxuICAgICAgICBwYXJhbXMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcGFyYW1zLnNwbGljZShuYW1lID09PSBcInN0YWdnZXJGcm9tVG9cIiA/IDUgOiA0LCAwLCAwKTtcbiAgICByZXR1cm4gdGxbbmFtZV0uYXBwbHkodGwsIHBhcmFtcyk7XG4gIH07XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUFJPUFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxudmFyIF9zZXR0ZXJQbGFpbiA9IGZ1bmN0aW9uIF9zZXR0ZXJQbGFpbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyRnVuYyA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckZ1bmNXaXRoUGFyYW0gPSBmdW5jdGlvbiBfc2V0dGVyRnVuY1dpdGhQYXJhbSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XShkYXRhLmZwLCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfc2V0dGVyQXR0cmlidXRlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9nZXRTZXR0ZXIgPSBmdW5jdGlvbiBfZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHRhcmdldFtwcm9wZXJ0eV0pID8gX3NldHRlckZ1bmMgOiBfaXNVbmRlZmluZWQodGFyZ2V0W3Byb3BlcnR5XSkgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZSA/IF9zZXR0ZXJBdHRyaWJ1dGUgOiBfc2V0dGVyUGxhaW47XG59LFxuICAgIF9yZW5kZXJQbGFpbiA9IGZ1bmN0aW9uIF9yZW5kZXJQbGFpbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckJvb2xlYW4gPSBmdW5jdGlvbiBfcmVuZGVyQm9vbGVhbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsICEhKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDb21wbGV4U3RyaW5nID0gZnVuY3Rpb24gX3JlbmRlckNvbXBsZXhTdHJpbmcocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQsXG4gICAgICBzID0gXCJcIjtcblxuICBpZiAoIXJhdGlvICYmIGRhdGEuYikge1xuICAgIC8vYiA9IGJlZ2lubmluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5iO1xuICB9IGVsc2UgaWYgKHJhdGlvID09PSAxICYmIGRhdGEuZSkge1xuICAgIC8vZSA9IGVuZGluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5lO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChwdCkge1xuICAgICAgcyA9IHB0LnAgKyAocHQubSA/IHB0Lm0ocHQucyArIHB0LmMgKiByYXRpbykgOiBNYXRoLnJvdW5kKChwdC5zICsgcHQuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwKSArIHM7IC8vd2UgdXNlIHRoZSBcInBcIiBwcm9wZXJ0eSBmb3IgdGhlIHRleHQgaW5iZXR3ZWVuIChsaWtlIGEgc3VmZml4KS4gQW5kIGluIHRoZSBjb250ZXh0IG9mIGEgY29tcGxleCBzdHJpbmcsIHRoZSBtb2RpZmllciAobSkgaXMgdHlwaWNhbGx5IGp1c3QgTWF0aC5yb3VuZCgpLCBsaWtlIGZvciBSR0IgY29sb3JzLlxuXG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHMgKz0gZGF0YS5jOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgY2h1bmsgb2Ygbm9uLW51bWVyaWMgdGV4dC5cbiAgfVxuXG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBzLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BUd2VlbnMgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFR3ZWVucyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG59LFxuICAgIF9hZGRQbHVnaW5Nb2RpZmllciA9IGZ1bmN0aW9uIF9hZGRQbHVnaW5Nb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCwgcHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdC5wID09PSBwcm9wZXJ0eSAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCk7XG4gICAgcHQgPSBuZXh0O1xuICB9XG59LFxuICAgIF9raWxsUHJvcFR3ZWVuc09mID0gZnVuY3Rpb24gX2tpbGxQcm9wVHdlZW5zT2YocHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcblxuICAgIGlmIChwdC5wID09PSBwcm9wZXJ0eSAmJiAhcHQub3AgfHwgcHQub3AgPT09IHByb3BlcnR5KSB7XG4gICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgIH0gZWxzZSBpZiAoIXB0LmRlcCkge1xuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nID0gMTtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICByZXR1cm4gIWhhc05vbkRlcGVuZGVudFJlbWFpbmluZztcbn0sXG4gICAgX3NldHRlcldpdGhNb2RpZmllciA9IGZ1bmN0aW9uIF9zZXR0ZXJXaXRoTW9kaWZpZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgZGF0YS5tU2V0KHRhcmdldCwgcHJvcGVydHksIGRhdGEubS5jYWxsKGRhdGEudHdlZW4sIHZhbHVlLCBkYXRhLm10KSwgZGF0YSk7XG59LFxuICAgIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkgPSBmdW5jdGlvbiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHBhcmVudCkge1xuICB2YXIgcHQgPSBwYXJlbnQuX3B0LFxuICAgICAgbmV4dCxcbiAgICAgIHB0MixcbiAgICAgIGZpcnN0LFxuICAgICAgbGFzdDsgLy9zb3J0cyB0aGUgUHJvcFR3ZWVuIGxpbmtlZCBsaXN0IGluIG9yZGVyIG9mIHByaW9yaXR5IGJlY2F1c2Ugc29tZSBwbHVnaW5zIG5lZWQgdG8gZG8gdGhlaXIgd29yayBhZnRlciBBTEwgb2YgdGhlIFByb3BUd2VlbnMgd2VyZSBjcmVhdGVkIChsaWtlIFJvdW5kUHJvcHNQbHVnaW4gYW5kIE1vZGlmaWVyc1BsdWdpbilcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQyID0gZmlyc3Q7XG5cbiAgICB3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG4gICAgICBwdDIgPSBwdDIuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkge1xuICAgICAgcHQuX3ByZXYuX25leHQgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlyc3QgPSBwdDtcbiAgICB9XG5cbiAgICBpZiAocHQuX25leHQgPSBwdDIpIHtcbiAgICAgIHB0Mi5fcHJldiA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gcHQ7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcGFyZW50Ll9wdCA9IGZpcnN0O1xufTsgLy9Qcm9wVHdlZW4ga2V5OiB0ID0gdGFyZ2V0LCBwID0gcHJvcCwgciA9IHJlbmRlcmVyLCBkID0gZGF0YSwgcyA9IHN0YXJ0LCBjID0gY2hhbmdlLCBvcCA9IG92ZXJ3cml0ZVByb3BlcnR5IChPTkxZIHBvcHVsYXRlZCB3aGVuIGl0J3MgZGlmZmVyZW50IHRoYW4gcCksIHByID0gcHJpb3JpdHksIF9uZXh0L19wcmV2IGZvciB0aGUgbGlua2VkIGxpc3Qgc2libGluZ3MsIHNldCA9IHNldHRlciwgbSA9IG1vZGlmaWVyLCBtU2V0ID0gbW9kaWZpZXJTZXR0ZXIgKHRoZSBvcmlnaW5hbCBzZXR0ZXIsIGJlZm9yZSBhIG1vZGlmaWVyIHdhcyBhZGRlZClcblxuXG5leHBvcnQgdmFyIFByb3BUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb3BUd2VlbihuZXh0LCB0YXJnZXQsIHByb3AsIHN0YXJ0LCBjaGFuZ2UsIHJlbmRlcmVyLCBkYXRhLCBzZXR0ZXIsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIHRoaXMucyA9IHN0YXJ0O1xuICAgIHRoaXMuYyA9IGNoYW5nZTtcbiAgICB0aGlzLnAgPSBwcm9wO1xuICAgIHRoaXMuciA9IHJlbmRlcmVyIHx8IF9yZW5kZXJQbGFpbjtcbiAgICB0aGlzLmQgPSBkYXRhIHx8IHRoaXM7XG4gICAgdGhpcy5zZXQgPSBzZXR0ZXIgfHwgX3NldHRlclBsYWluO1xuICAgIHRoaXMucHIgPSBwcmlvcml0eSB8fCAwO1xuICAgIHRoaXMuX25leHQgPSBuZXh0O1xuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIG5leHQuX3ByZXYgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG80ID0gUHJvcFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG80Lm1vZGlmaWVyID0gZnVuY3Rpb24gbW9kaWZpZXIoZnVuYywgdHdlZW4sIHRhcmdldCkge1xuICAgIHRoaXMubVNldCA9IHRoaXMubVNldCB8fCB0aGlzLnNldDsgLy9pbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHNldCAoYSBQcm9wVHdlZW4gY2FuIG9ubHkgaGF2ZSBvbmUgbW9kaWZpZXIpXG5cbiAgICB0aGlzLnNldCA9IF9zZXR0ZXJXaXRoTW9kaWZpZXI7XG4gICAgdGhpcy5tID0gZnVuYztcbiAgICB0aGlzLm10ID0gdGFyZ2V0OyAvL21vZGlmaWVyIHRhcmdldFxuXG4gICAgdGhpcy50d2VlbiA9IHR3ZWVuO1xuICB9O1xuXG4gIHJldHVybiBQcm9wVHdlZW47XG59KCk7IC8vSW5pdGlhbGl6YXRpb24gdGFza3NcblxuX2ZvckVhY2hOYW1lKF9jYWxsYmFja05hbWVzICsgXCJwYXJlbnQsZHVyYXRpb24sZWFzZSxkZWxheSxvdmVyd3JpdGUscnVuQmFja3dhcmRzLHN0YXJ0QXQseW95byxpbW1lZGlhdGVSZW5kZXIscmVwZWF0LHJlcGVhdERlbGF5LGRhdGEscGF1c2VkLHJldmVyc2VkLGxhenksY2FsbGJhY2tTY29wZSxzdHJpbmdGaWx0ZXIsaWQseW95b0Vhc2Usc3RhZ2dlcixpbmhlcml0LHJlcGVhdFJlZnJlc2gsa2V5ZnJhbWVzLGF1dG9SZXZlcnQsc2Nyb2xsVHJpZ2dlclwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xufSk7XG5cbl9nbG9iYWxzLlR3ZWVuTWF4ID0gX2dsb2JhbHMuVHdlZW5MaXRlID0gVHdlZW47XG5fZ2xvYmFscy5UaW1lbGluZUxpdGUgPSBfZ2xvYmFscy5UaW1lbGluZU1heCA9IFRpbWVsaW5lO1xuX2dsb2JhbFRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgc29ydENoaWxkcmVuOiBmYWxzZSxcbiAgZGVmYXVsdHM6IF9kZWZhdWx0cyxcbiAgYXV0b1JlbW92ZUNoaWxkcmVuOiB0cnVlLFxuICBpZDogXCJyb290XCIsXG4gIHNtb290aENoaWxkVGltaW5nOiB0cnVlXG59KTtcbl9jb25maWcuc3RyaW5nRmlsdGVyID0gX2NvbG9yU3RyaW5nRmlsdGVyO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHU0FQXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBfZ3NhcCA9IHtcbiAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZVBsdWdpbihjb25maWcpO1xuICAgIH0pO1xuICB9LFxuICB0aW1lbGluZTogZnVuY3Rpb24gdGltZWxpbmUodmFycykge1xuICAgIHJldHVybiBuZXcgVGltZWxpbmUodmFycyk7XG4gIH0sXG4gIGdldFR3ZWVuc09mOiBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKTtcbiAgfSxcbiAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uIGdldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICBfaXNTdHJpbmcodGFyZ2V0KSAmJiAodGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpWzBdKTsgLy9pbiBjYXNlIHNlbGVjdG9yIHRleHQgb3IgYW4gYXJyYXkgaXMgcGFzc2VkIGluXG5cbiAgICB2YXIgZ2V0dGVyID0gX2dldENhY2hlKHRhcmdldCB8fCB7fSkuZ2V0LFxuICAgICAgICBmb3JtYXQgPSB1bml0ID8gX3Bhc3NUaHJvdWdoIDogX251bWVyaWNJZlBvc3NpYmxlO1xuXG4gICAgdW5pdCA9PT0gXCJuYXRpdmVcIiAmJiAodW5pdCA9IFwiXCIpO1xuICAgIHJldHVybiAhdGFyZ2V0ID8gdGFyZ2V0IDogIXByb3BlcnR5ID8gZnVuY3Rpb24gKHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgICB9IDogZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgfSxcbiAgcXVpY2tTZXR0ZXI6IGZ1bmN0aW9uIHF1aWNrU2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHtcbiAgICB0YXJnZXQgPSB0b0FycmF5KHRhcmdldCk7XG5cbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBzZXR0ZXJzID0gdGFyZ2V0Lm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZ3NhcC5xdWlja1NldHRlcih0LCBwcm9wZXJ0eSwgdW5pdCk7XG4gICAgICB9KSxcbiAgICAgICAgICBsID0gc2V0dGVycy5sZW5ndGg7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpID0gbDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgc2V0dGVyc1tpXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gdGFyZ2V0WzBdIHx8IHt9O1xuXG4gICAgdmFyIFBsdWdpbiA9IF9wbHVnaW5zW3Byb3BlcnR5XSxcbiAgICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgICAgcCA9IGNhY2hlLmhhcm5lc3MgJiYgKGNhY2hlLmhhcm5lc3MuYWxpYXNlcyB8fCB7fSlbcHJvcGVydHldIHx8IHByb3BlcnR5LFxuICAgICAgICAvLyBpbiBjYXNlIGl0J3MgYW4gYWxpYXMsIGxpa2UgXCJyb3RhdGVcIiBmb3IgXCJyb3RhdGlvblwiLlxuICAgIHNldHRlciA9IFBsdWdpbiA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHAgPSBuZXcgUGx1Z2luKCk7XG4gICAgICBfcXVpY2tUd2Vlbi5fcHQgPSAwO1xuICAgICAgcC5pbml0KHRhcmdldCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBfcXVpY2tUd2VlbiwgMCwgW3RhcmdldF0pO1xuICAgICAgcC5yZW5kZXIoMSwgcCk7XG4gICAgICBfcXVpY2tUd2Vlbi5fcHQgJiYgX3JlbmRlclByb3BUd2VlbnMoMSwgX3F1aWNrVHdlZW4pO1xuICAgIH0gOiBjYWNoZS5zZXQodGFyZ2V0LCBwKTtcblxuICAgIHJldHVybiBQbHVnaW4gPyBzZXR0ZXIgOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBzZXR0ZXIodGFyZ2V0LCBwLCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIGNhY2hlLCAxKTtcbiAgICB9O1xuICB9LFxuICBpc1R3ZWVuaW5nOiBmdW5jdGlvbiBpc1R3ZWVuaW5nKHRhcmdldHMpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIHRydWUpLmxlbmd0aCA+IDA7XG4gIH0sXG4gIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh2YWx1ZSkge1xuICAgIHZhbHVlICYmIHZhbHVlLmVhc2UgJiYgKHZhbHVlLmVhc2UgPSBfcGFyc2VFYXNlKHZhbHVlLmVhc2UsIF9kZWZhdWx0cy5lYXNlKSk7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAoX2RlZmF1bHRzLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHZhbHVlKSB7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAoX2NvbmZpZywgdmFsdWUgfHwge30pO1xuICB9LFxuICByZWdpc3RlckVmZmVjdDogZnVuY3Rpb24gcmVnaXN0ZXJFZmZlY3QoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBlZmZlY3QgPSBfcmVmLmVmZmVjdCxcbiAgICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucyxcbiAgICAgICAgZGVmYXVsdHMgPSBfcmVmLmRlZmF1bHRzLFxuICAgICAgICBleHRlbmRUaW1lbGluZSA9IF9yZWYuZXh0ZW5kVGltZWxpbmU7XG4gICAgKHBsdWdpbnMgfHwgXCJcIikuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbk5hbWUpIHtcbiAgICAgIHJldHVybiBwbHVnaW5OYW1lICYmICFfcGx1Z2luc1twbHVnaW5OYW1lXSAmJiAhX2dsb2JhbHNbcGx1Z2luTmFtZV0gJiYgX3dhcm4obmFtZSArIFwiIGVmZmVjdCByZXF1aXJlcyBcIiArIHBsdWdpbk5hbWUgKyBcIiBwbHVnaW4uXCIpO1xuICAgIH0pO1xuXG4gICAgX2VmZmVjdHNbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgdGwpIHtcbiAgICAgIHJldHVybiBlZmZlY3QodG9BcnJheSh0YXJnZXRzKSwgX3NldERlZmF1bHRzKHZhcnMgfHwge30sIGRlZmF1bHRzKSwgdGwpO1xuICAgIH07XG5cbiAgICBpZiAoZXh0ZW5kVGltZWxpbmUpIHtcbiAgICAgIFRpbWVsaW5lLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoX2VmZmVjdHNbbmFtZV0odGFyZ2V0cywgX2lzT2JqZWN0KHZhcnMpID8gdmFycyA6IChwb3NpdGlvbiA9IHZhcnMpICYmIHt9LCB0aGlzKSwgcG9zaXRpb24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHJlZ2lzdGVyRWFzZTogZnVuY3Rpb24gcmVnaXN0ZXJFYXNlKG5hbWUsIGVhc2UpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9wYXJzZUVhc2UoZWFzZSk7XG4gIH0sXG4gIHBhcnNlRWFzZTogZnVuY3Rpb24gcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSA6IF9lYXNlTWFwO1xuICB9LFxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRCeUlkKGlkKTtcbiAgfSxcbiAgZXhwb3J0Um9vdDogZnVuY3Rpb24gZXhwb3J0Um9vdCh2YXJzLCBpbmNsdWRlRGVsYXllZENhbGxzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSh2YXJzKSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQ7XG4gICAgdGwuc21vb3RoQ2hpbGRUaW1pbmcgPSBfaXNOb3RGYWxzZSh2YXJzLnNtb290aENoaWxkVGltaW5nKTtcblxuICAgIF9nbG9iYWxUaW1lbGluZS5yZW1vdmUodGwpO1xuXG4gICAgdGwuX2RwID0gMDsgLy9vdGhlcndpc2UgaXQnbGwgZ2V0IHJlLWFjdGl2YXRlZCB3aGVuIGFkZGluZyBjaGlsZHJlbiBhbmQgYmUgcmUtaW50cm9kdWNlZCBpbnRvIF9nbG9iYWxUaW1lbGluZSdzIGxpbmtlZCBsaXN0ICh0aGVuIGFkZGVkIHRvIGl0c2VsZikuXG5cbiAgICB0bC5fdGltZSA9IHRsLl90VGltZSA9IF9nbG9iYWxUaW1lbGluZS5fdGltZTtcbiAgICBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgaWYgKGluY2x1ZGVEZWxheWVkQ2FsbHMgfHwgISghY2hpbGQuX2R1ciAmJiBjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuICYmIGNoaWxkLnZhcnMub25Db21wbGV0ZSA9PT0gY2hpbGQuX3RhcmdldHNbMF0pKSB7XG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRsLCBjaGlsZCwgY2hpbGQuX3N0YXJ0IC0gY2hpbGQuX2RlbGF5KTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIF9hZGRUb1RpbWVsaW5lKF9nbG9iYWxUaW1lbGluZSwgdGwsIDApO1xuXG4gICAgcmV0dXJuIHRsO1xuICB9LFxuICB1dGlsczoge1xuICAgIHdyYXA6IHdyYXAsXG4gICAgd3JhcFlveW86IHdyYXBZb3lvLFxuICAgIGRpc3RyaWJ1dGU6IGRpc3RyaWJ1dGUsXG4gICAgcmFuZG9tOiByYW5kb20sXG4gICAgc25hcDogc25hcCxcbiAgICBub3JtYWxpemU6IG5vcm1hbGl6ZSxcbiAgICBnZXRVbml0OiBnZXRVbml0LFxuICAgIGNsYW1wOiBjbGFtcCxcbiAgICBzcGxpdENvbG9yOiBzcGxpdENvbG9yLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgbWFwUmFuZ2U6IG1hcFJhbmdlLFxuICAgIHBpcGU6IHBpcGUsXG4gICAgdW5pdGl6ZTogdW5pdGl6ZSxcbiAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgc2h1ZmZsZTogc2h1ZmZsZVxuICB9LFxuICBpbnN0YWxsOiBfaW5zdGFsbCxcbiAgZWZmZWN0czogX2VmZmVjdHMsXG4gIHRpY2tlcjogX3RpY2tlcixcbiAgdXBkYXRlUm9vdDogVGltZWxpbmUudXBkYXRlUm9vdCxcbiAgcGx1Z2luczogX3BsdWdpbnMsXG4gIGdsb2JhbFRpbWVsaW5lOiBfZ2xvYmFsVGltZWxpbmUsXG4gIGNvcmU6IHtcbiAgICBQcm9wVHdlZW46IFByb3BUd2VlbixcbiAgICBnbG9iYWxzOiBfYWRkR2xvYmFsLFxuICAgIFR3ZWVuOiBUd2VlbixcbiAgICBUaW1lbGluZTogVGltZWxpbmUsXG4gICAgQW5pbWF0aW9uOiBBbmltYXRpb24sXG4gICAgZ2V0Q2FjaGU6IF9nZXRDYWNoZSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW06IF9yZW1vdmVMaW5rZWRMaXN0SXRlbVxuICB9XG59O1xuXG5fZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxkZWxheWVkQ2FsbCxzZXQsa2lsbFR3ZWVuc09mXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfZ3NhcFtuYW1lXSA9IFR3ZWVuW25hbWVdO1xufSk7XG5cbl90aWNrZXIuYWRkKFRpbWVsaW5lLnVwZGF0ZVJvb3QpO1xuXG5fcXVpY2tUd2VlbiA9IF9nc2FwLnRvKHt9LCB7XG4gIGR1cmF0aW9uOiAwXG59KTsgLy8gLS0tLSBFWFRSQSBQTFVHSU5TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBfZ2V0UGx1Z2luUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2dldFBsdWdpblByb3BUd2VlbihwbHVnaW4sIHByb3ApIHtcbiAgdmFyIHB0ID0gcGx1Z2luLl9wdDtcblxuICB3aGlsZSAocHQgJiYgcHQucCAhPT0gcHJvcCAmJiBwdC5vcCAhPT0gcHJvcCAmJiBwdC5mcCAhPT0gcHJvcCkge1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRNb2RpZmllcnMgPSBmdW5jdGlvbiBfYWRkTW9kaWZpZXJzKHR3ZWVuLCBtb2RpZmllcnMpIHtcbiAgdmFyIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgcHQ7XG5cbiAgZm9yIChwIGluIG1vZGlmaWVycykge1xuICAgIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHB0ID0gdHdlZW4uX3B0TG9va3VwW2ldW3BdO1xuXG4gICAgICBpZiAocHQgJiYgKHB0ID0gcHQuZCkpIHtcbiAgICAgICAgaWYgKHB0Ll9wdCkge1xuICAgICAgICAgIC8vIGlzIGEgcGx1Z2luXG4gICAgICAgICAgcHQgPSBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHB0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB0ICYmIHB0Lm1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyc1twXSwgdHdlZW4sIHRhcmdldHNbaV0sIHApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICBfYnVpbGRNb2RpZmllclBsdWdpbiA9IGZ1bmN0aW9uIF9idWlsZE1vZGlmaWVyUGx1Z2luKG5hbWUsIG1vZGlmaWVyKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICByYXdWYXJzOiAxLFxuICAgIC8vZG9uJ3QgcHJlLXByb2Nlc3MgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIG9yIFwicmFuZG9tKClcIiBzdHJpbmdzLlxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbikge1xuICAgICAgdHdlZW4uX29uSW5pdCA9IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICB2YXIgdGVtcCwgcDtcblxuICAgICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFtuYW1lXSA9IDE7XG4gICAgICAgICAgfSk7IC8vaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgdG8gcm91bmRQcm9wcywgbGlrZSBcIngseVwiLCB3ZSByb3VuZCB0byB3aG9sZSBudW1iZXJzLlxuXG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICB0ZW1wW3BdID0gbW9kaWZpZXIodmFyc1twXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkTW9kaWZpZXJzKHR3ZWVuLCB2YXJzKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTsgLy9yZWdpc3RlciBjb3JlIHBsdWdpbnNcblxuXG5leHBvcnQgdmFyIGdzYXAgPSBfZ3NhcC5yZWdpc3RlclBsdWdpbih7XG4gIG5hbWU6IFwiYXR0clwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHAsIHB0O1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodGFyZ2V0LmdldEF0dHJpYnV0ZShwKSB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIHB0ICYmIChwdC5vcCA9IHApO1xuXG4gICAgICB0aGlzLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxufSwge1xuICBuYW1lOiBcImVuZEFycmF5XCIsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YWx1ZSkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5hZGQodGFyZ2V0LCBpLCB0YXJnZXRbaV0gfHwgMCwgdmFsdWVbaV0pO1xuICAgIH1cbiAgfVxufSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJyb3VuZFByb3BzXCIsIF9yb3VuZE1vZGlmaWVyKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJtb2RpZmllcnNcIiksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwic25hcFwiLCBzbmFwKSkgfHwgX2dzYXA7IC8vdG8gcHJldmVudCB0aGUgY29yZSBwbHVnaW5zIGZyb20gYmVpbmcgZHJvcHBlZCB2aWEgYWdncmVzc2l2ZSB0cmVlIHNoYWtpbmcsIHdlIG11c3QgaW5jbHVkZSB0aGVtIGluIHRoZSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiB0aGlzIHdheS5cblxuVHdlZW4udmVyc2lvbiA9IFRpbWVsaW5lLnZlcnNpb24gPSBnc2FwLnZlcnNpb24gPSBcIjMuNS4wXCI7XG5fY29yZVJlYWR5ID0gMTtcblxuaWYgKF93aW5kb3dFeGlzdHMoKSkge1xuICBfd2FrZSgpO1xufVxuXG52YXIgUG93ZXIwID0gX2Vhc2VNYXAuUG93ZXIwLFxuICAgIFBvd2VyMSA9IF9lYXNlTWFwLlBvd2VyMSxcbiAgICBQb3dlcjIgPSBfZWFzZU1hcC5Qb3dlcjIsXG4gICAgUG93ZXIzID0gX2Vhc2VNYXAuUG93ZXIzLFxuICAgIFBvd2VyNCA9IF9lYXNlTWFwLlBvd2VyNCxcbiAgICBMaW5lYXIgPSBfZWFzZU1hcC5MaW5lYXIsXG4gICAgUXVhZCA9IF9lYXNlTWFwLlF1YWQsXG4gICAgQ3ViaWMgPSBfZWFzZU1hcC5DdWJpYyxcbiAgICBRdWFydCA9IF9lYXNlTWFwLlF1YXJ0LFxuICAgIFF1aW50ID0gX2Vhc2VNYXAuUXVpbnQsXG4gICAgU3Ryb25nID0gX2Vhc2VNYXAuU3Ryb25nLFxuICAgIEVsYXN0aWMgPSBfZWFzZU1hcC5FbGFzdGljLFxuICAgIEJhY2sgPSBfZWFzZU1hcC5CYWNrLFxuICAgIFN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuU3RlcHBlZEVhc2UsXG4gICAgQm91bmNlID0gX2Vhc2VNYXAuQm91bmNlLFxuICAgIFNpbmUgPSBfZWFzZU1hcC5TaW5lLFxuICAgIEV4cG8gPSBfZWFzZU1hcC5FeHBvLFxuICAgIENpcmMgPSBfZWFzZU1hcC5DaXJjO1xuZXhwb3J0IHsgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjIH07XG5leHBvcnQgeyBUd2VlbiBhcyBUd2Vlbk1heCwgVHdlZW4gYXMgVHdlZW5MaXRlLCBUaW1lbGluZSBhcyBUaW1lbGluZU1heCwgVGltZWxpbmUgYXMgVGltZWxpbmVMaXRlLCBnc2FwIGFzIGRlZmF1bHQsIHdyYXAsIHdyYXBZb3lvLCBkaXN0cmlidXRlLCByYW5kb20sIHNuYXAsIG5vcm1hbGl6ZSwgZ2V0VW5pdCwgY2xhbXAsIHNwbGl0Q29sb3IsIHRvQXJyYXksIG1hcFJhbmdlLCBwaXBlLCB1bml0aXplLCBpbnRlcnBvbGF0ZSwgc2h1ZmZsZSB9OyAvL2V4cG9ydCBzb21lIGludGVybmFsIG1ldGhvZHMvb3JvamVjdHMgZm9yIHVzZSBpbiBDU1NQbHVnaW4gc28gdGhhdCB3ZSBjYW4gZXh0ZXJuYWxpemUgdGhhdCBmaWxlIGFuZCBhbGxvdyBjdXN0b20gYnVpbGRzIHRoYXQgZXhjbHVkZSBpdC5cblxuZXhwb3J0IHsgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfcmVwbGFjZVJhbmRvbSwgX2NoZWNrUGx1Z2luLCBfcGx1Z2lucywgX3RpY2tlciwgX2NvbmZpZywgX3JvdW5kTW9kaWZpZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuICogVXRpbGl0aWVzIGZvciBpbml0aWF0aW5nIGdzYXBcbiAqL1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBgdW5kZWZpbmVkYCkge1xuXHRnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXHRnc2FwLmNvcmUuZ2xvYmFscyhcIlNjcm9sbFRyaWdnZXJcIiwgU2Nyb2xsVHJpZ2dlcik7XG59XG5cbmNvbnN0IERFRkFVTFRfU1BFRUQgPSAyO1xuY29uc3QgU0NST0xMRVIgPSBcIi5pbnRlcmZhY2UtaW50ZXJmYWNlLXNrZWxldG9uX19jb250ZW50XCI7XG5cbmV4cG9ydCBjb25zdCBhbmltYXRlT3B0aW9ucyA9IFtcblx0eyB2YWx1ZTogbnVsbCwgbGFiZWw6IFwiU2VsZWN0IGFuaW1hdGlvblwiLCBkaXNhYmxlZDogdHJ1ZSB9LFxuXHR7XG5cdFx0dmFsdWU6IFwiZmFkZVwiLFxuXHRcdGxhYmVsOiBcIkZhZGVcIlxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6IFwiZmFkZVVwXCIsXG5cdFx0bGFiZWw6IFwiRmFkZSBVcFwiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJmYWRlRG93blwiLFxuXHRcdGxhYmVsOiBcIkZhZGUgRG93blwiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJmYWRlTGVmdFwiLFxuXHRcdGxhYmVsOiBcIkZhZGUgTGVmdFwiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJmYWRlUmlnaHRcIixcblx0XHRsYWJlbDogXCJGYWRlIFJpZ2h0XCJcblx0fVxuXTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGVDb25maWdzID0ge1xuXHRmYWRlOiBbXG5cdFx0e1xuXHRcdFx0b3BhY2l0eTogMFxuXHRcdH0sXG5cdFx0eyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogREVGQVVMVF9TUEVFRCB9XG5cdF0sXG5cdGZhZGVVcDogW1xuXHRcdHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR5OiAxMDBcblx0XHR9LFxuXHRcdHsgb3BhY2l0eTogMSwgZHVyYXRpb246IERFRkFVTFRfU1BFRUQsIHk6IDAgfVxuXHRdLFxuXHRmYWRlRG93bjogW1xuXHRcdHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR5OiAtMTAwXG5cdFx0fSxcblx0XHR7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiBERUZBVUxUX1NQRUVELCB5OiAwIH1cblx0XSxcblx0ZmFkZUxlZnQ6IFtcblx0XHR7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0eDogLTEwMFxuXHRcdH0sXG5cdFx0eyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogREVGQVVMVF9TUEVFRCwgeDogMCB9XG5cdF0sXG5cdGZhZGVSaWdodDogW1xuXHRcdHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR4OiAxMDBcblx0XHR9LFxuXHRcdHsgb3BhY2l0eTogMSwgZHVyYXRpb246IERFRkFVTFRfU1BFRUQsIHg6IDAgfVxuXHRdXG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ3VzdG9tQ29uZmlnID0gKGFuaW1hdGVWYWwsIGFuaW1hdGVEZWxheSwgYW5pbWF0ZVNwZWVkKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0YW5pbWF0ZUNvbmZpZ3NbYW5pbWF0ZVZhbF1bMF0sXG5cdFx0e1xuXHRcdFx0Li4uYW5pbWF0ZUNvbmZpZ3NbYW5pbWF0ZVZhbF1bMV0sXG5cdFx0XHRkZWxheTogYW5pbWF0ZURlbGF5IC8gMTAwMCxcblx0XHRcdGR1cmF0aW9uOiBhbmltYXRlU3BlZWQgLyAxMDAwXG5cdFx0fVxuXHRdO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRBbmltYXRlID0gKFxuXHR0YXJnZXQsXG5cdGVuYWJsZUFuaW1hdGUsXG5cdGFuaW1hdGVWYWwsXG5cdGFuaW1hdGVEZWxheSxcblx0YW5pbWF0ZVNwZWVkLFxuXHRhbmltYXRlU2NydWJcbikgPT4ge1xuXHRsZXQgY3VzdG9tQ29uZmlnID0gY3JlYXRlQ3VzdG9tQ29uZmlnKGFuaW1hdGVWYWwsIGFuaW1hdGVEZWxheSwgYW5pbWF0ZVNwZWVkKTtcblx0Y3VzdG9tQ29uZmlnID0gZWRpdG9yQ3VzdG9tQ29uZmlnTW9kaWZ5KGN1c3RvbUNvbmZpZywgdGFyZ2V0LCBhbmltYXRlU2NydWIpO1xuXG5cdGlmIChlbmFibGVBbmltYXRlKSB7XG5cdFx0Z3NhcC5mcm9tVG8odGFyZ2V0LCAuLi5jdXN0b21Db25maWcpO1xuXHR9XG59O1xuXG5jb25zdCBlZGl0b3JDdXN0b21Db25maWdNb2RpZnkgPSAoY29uZmlnLCB0YXJnZXQsIGFuaW1hdGVTY3J1YikgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdGNvbmZpZ1swXSxcblx0XHR7XG5cdFx0XHQuLi5jb25maWdbMV0sXG5cdFx0XHRzY3JvbGxUcmlnZ2VyOiB7XG5cdFx0XHRcdGlkOiB0YXJnZXQsXG5cdFx0XHRcdHRyaWdnZXI6IHRhcmdldCxcblx0XHRcdFx0c2Nyb2xsZXI6IFNDUk9MTEVSLFxuXHRcdFx0XHRtYXJrZXJzOiB0cnVlLFxuXHRcdFx0XHRzY3J1YjogYW5pbWF0ZVNjcnViXG5cdFx0XHR9XG5cdFx0fVxuXHRdO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc3RhcnRBbmltYXRlID0gKFxuXHR0YXJnZXQsXG5cdGFuaW1hdGVWYWwsXG5cdGFuaW1hdGVEZWxheSxcblx0YW5pbWF0ZVNwZWVkLFxuXHRhbmltYXRlU2NydWIsXG5cdGVuYWJsZUFuaW1hdGVcbikgPT4ge1xuXHRsZXQgY3VzdG9tQ29uZmlnID0gY3JlYXRlQ3VzdG9tQ29uZmlnKFxuXHRcdGFuaW1hdGVWYWwsXG5cdFx0YW5pbWF0ZURlbGF5LFxuXHRcdGFuaW1hdGVTcGVlZCxcblx0XHRhbmltYXRlU2NydWJcblx0KTtcblx0U2Nyb2xsVHJpZ2dlci5nZXRBbGwoKS5mb3JFYWNoKHN0ID0+IHtcblx0XHRpZiAoc3QudmFycy5pZCA9PT0gdGFyZ2V0KSB7XG5cdFx0XHRzdC5raWxsKCk7XG5cdFx0fVxuXHR9KTtcblx0Z3NhcC5zZXQodGFyZ2V0LCB7IGNsZWFyUHJvcHM6IHRydWUgfSk7XG5cblx0aWYgKCFlbmFibGVBbmltYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGFuaW1hdGVTY3J1Yikge1xuXHRcdGN1c3RvbUNvbmZpZyA9IGVkaXRvckN1c3RvbUNvbmZpZ01vZGlmeShjdXN0b21Db25maWcsIHRhcmdldCwgYW5pbWF0ZVNjcnViKTtcblx0fVxuXHRnc2FwLmZyb21Ubyh0YXJnZXQsIC4uLmN1c3RvbUNvbmZpZyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC91dGlscy9pbmRleC5qcyIsImltcG9ydCB7IGdzYXAsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYywgVHdlZW5MaXRlLCBUaW1lbGluZUxpdGUsIFRpbWVsaW5lTWF4IH0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5pbXBvcnQgeyBDU1NQbHVnaW4gfSBmcm9tIFwiLi9DU1NQbHVnaW4uanNcIjtcbnZhciBnc2FwV2l0aENTUyA9IGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKSB8fCBnc2FwLFxuICAgIC8vIHRvIHByb3RlY3QgZnJvbSB0cmVlIHNoYWtpbmdcblR3ZWVuTWF4V2l0aENTUyA9IGdzYXBXaXRoQ1NTLmNvcmUuVHdlZW47XG5leHBvcnQgeyBnc2FwV2l0aENTUyBhcyBnc2FwLCBnc2FwV2l0aENTUyBhcyBkZWZhdWx0LCBDU1NQbHVnaW4sIFR3ZWVuTWF4V2l0aENTUyBhcyBUd2Vlbk1heCwgVHdlZW5MaXRlLCBUaW1lbGluZU1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nc2FwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qIVxuICogU2Nyb2xsVHJpZ2dlciAzLjUuMFxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMCwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBnc2FwLFxuICAgIF9jb3JlSW5pdHRlZCxcbiAgICBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsLFxuICAgIF9ib2R5LFxuICAgIF9yb290LFxuICAgIF9yZXNpemVEZWxheSxcbiAgICBfcmFmLFxuICAgIF9yZXF1ZXN0LFxuICAgIF90b0FycmF5LFxuICAgIF9jbGFtcCxcbiAgICBfdGltZTIsXG4gICAgX3N5bmNJbnRlcnZhbCxcbiAgICBfcmVmcmVzaGluZyxcbiAgICBfcG9pbnRlcklzRG93bixcbiAgICBfdHJhbnNmb3JtUHJvcCxcbiAgICBfaSxcbiAgICBfcHJldldpZHRoLFxuICAgIF9wcmV2SGVpZ2h0LFxuICAgIF9hdXRvUmVmcmVzaCxcbiAgICBfc29ydCxcbiAgICBfbGltaXRDYWxsYmFja3MsXG4gICAgLy8gaWYgdHJ1ZSwgd2UnbGwgb25seSB0cmlnZ2VyIGNhbGxiYWNrcyBpZiB0aGUgYWN0aXZlIHN0YXRlIHRvZ2dsZXMsIHNvIGlmIHlvdSBzY3JvbGwgaW1tZWRpYXRlbHkgcGFzdCBib3RoIHRoZSBzdGFydCBhbmQgZW5kIHBvc2l0aW9ucyBvZiBhIFNjcm9sbFRyaWdnZXIgKHRodXMgaW5hY3RpdmUgdG8gaW5hY3RpdmUpLCBuZWl0aGVyIGl0cyBvbkVudGVyIG5vciBvbkxlYXZlIHdpbGwgYmUgY2FsbGVkLiBUaGlzIGlzIHVzZWZ1bCBkdXJpbmcgc3RhcnR1cC5cbl9zdGFydHVwID0gMSxcbiAgICBfcHJveGllcyA9IFtdLFxuICAgIF9zY3JvbGxlcnMgPSBbXSxcbiAgICBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgIF90aW1lMSA9IF9nZXRUaW1lKCksXG4gICAgX2xhc3RTY3JvbGxUaW1lID0gMCxcbiAgICBfZW5hYmxlZCA9IDEsXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHYpIHtcbiAgcmV0dXJuIHY7XG59LFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2dldEdTQVAgPSBmdW5jdGlvbiBfZ2V0R1NBUCgpIHtcbiAgcmV0dXJuIGdzYXAgfHwgX3dpbmRvd0V4aXN0cygpICYmIChnc2FwID0gd2luZG93LmdzYXApICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4gJiYgZ3NhcDtcbn0sXG4gICAgX2lzVmlld3BvcnQgPSBmdW5jdGlvbiBfaXNWaWV3cG9ydChlKSB7XG4gIHJldHVybiAhIX5fcm9vdC5pbmRleE9mKGUpO1xufSxcbiAgICBfZ2V0UHJveHlQcm9wID0gZnVuY3Rpb24gX2dldFByb3h5UHJvcChlbGVtZW50LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgJiYgX3Byb3hpZXNbX3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSArIDFdW3Byb3BlcnR5XTtcbn0sXG4gICAgX2dldFNjcm9sbEZ1bmMgPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsRnVuYyhlbGVtZW50LCBfcmVmKSB7XG4gIHZhciBzID0gX3JlZi5zLFxuICAgICAgc2MgPSBfcmVmLnNjO1xuXG4gIHZhciBpID0gX3Njcm9sbGVycy5pbmRleE9mKGVsZW1lbnQpLFxuICAgICAgb2Zmc2V0ID0gc2MgPT09IF92ZXJ0aWNhbC5zYyA/IDEgOiAyO1xuXG4gICF+aSAmJiAoaSA9IF9zY3JvbGxlcnMucHVzaChlbGVtZW50KSAtIDEpO1xuICByZXR1cm4gX3Njcm9sbGVyc1tpICsgb2Zmc2V0XSB8fCAoX3Njcm9sbGVyc1tpICsgb2Zmc2V0XSA9IF9nZXRQcm94eVByb3AoZWxlbWVudCwgcykgfHwgKF9pc1ZpZXdwb3J0KGVsZW1lbnQpID8gc2MgOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGVsZW1lbnRbc10gPSB2YWx1ZSA6IGVsZW1lbnRbc107XG4gIH0pKTtcbn0sXG4gICAgX2dldEJvdW5kc0Z1bmMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzRnVuYyhlbGVtZW50KSB7XG4gIHJldHVybiBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIpIHx8IChfaXNWaWV3cG9ydChlbGVtZW50KSA/IGZ1bmN0aW9uICgpIHtcbiAgICBfd2luT2Zmc2V0cy53aWR0aCA9IF93aW4uaW5uZXJXaWR0aDtcbiAgICBfd2luT2Zmc2V0cy5oZWlnaHQgPSBfd2luLmlubmVySGVpZ2h0O1xuICAgIHJldHVybiBfd2luT2Zmc2V0cztcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgfSk7XG59LFxuICAgIF9nZXRTaXplRnVuYyA9IGZ1bmN0aW9uIF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgX3JlZjIpIHtcbiAgdmFyIGQgPSBfcmVmMi5kLFxuICAgICAgZDIgPSBfcmVmMi5kMixcbiAgICAgIGEgPSBfcmVmMi5hO1xuICByZXR1cm4gKGEgPSBfZ2V0UHJveHlQcm9wKHNjcm9sbGVyLCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiKSkgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGEoKVtkXTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKGlzVmlld3BvcnQgPyBfd2luW1wiaW5uZXJcIiArIGQyXSA6IHNjcm9sbGVyW1wiY2xpZW50XCIgKyBkMl0pIHx8IDA7XG4gIH07XG59LFxuICAgIF9nZXRPZmZzZXRzRnVuYyA9IGZ1bmN0aW9uIF9nZXRPZmZzZXRzRnVuYyhlbGVtZW50LCBpc1ZpZXdwb3J0KSB7XG4gIHJldHVybiAhaXNWaWV3cG9ydCB8fCB+X3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSA/IF9nZXRCb3VuZHNGdW5jKGVsZW1lbnQpIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfd2luT2Zmc2V0cztcbiAgfTtcbn0sXG4gICAgX21heFNjcm9sbCA9IGZ1bmN0aW9uIF9tYXhTY3JvbGwoZWxlbWVudCwgX3JlZjMpIHtcbiAgdmFyIHMgPSBfcmVmMy5zLFxuICAgICAgZDIgPSBfcmVmMy5kMixcbiAgICAgIGQgPSBfcmVmMy5kLFxuICAgICAgYSA9IF9yZWYzLmE7XG4gIHJldHVybiAocyA9IFwic2Nyb2xsXCIgKyBkMikgJiYgKGEgPSBfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHMpKSA/IGEoKSAtIF9nZXRCb3VuZHNGdW5jKGVsZW1lbnQpKClbZF0gOiBfaXNWaWV3cG9ydChlbGVtZW50KSA/IE1hdGgubWF4KF9kb2NFbFtzXSwgX2JvZHlbc10pIC0gKF93aW5bXCJpbm5lclwiICsgZDJdIHx8IF9kb2NFbFtcImNsaWVudFwiICsgZDJdIHx8IF9ib2R5W1wiY2xpZW50XCIgKyBkMl0pIDogZWxlbWVudFtzXSAtIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXTtcbn0sXG4gICAgX2l0ZXJhdGVBdXRvUmVmcmVzaCA9IGZ1bmN0aW9uIF9pdGVyYXRlQXV0b1JlZnJlc2goZnVuYywgZXZlbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX2F1dG9SZWZyZXNoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgKCFldmVudHMgfHwgfmV2ZW50cy5pbmRleE9mKF9hdXRvUmVmcmVzaFtpICsgMV0pKSAmJiBmdW5jKF9hdXRvUmVmcmVzaFtpXSwgX2F1dG9SZWZyZXNoW2kgKyAxXSwgX2F1dG9SZWZyZXNoW2kgKyAyXSk7XG4gIH1cbn0sXG4gICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9jYWxsSWZGdW5jID0gZnVuY3Rpb24gX2NhbGxJZkZ1bmModmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSAmJiB2YWx1ZSgpO1xufSxcbiAgICBfY29tYmluZUZ1bmMgPSBmdW5jdGlvbiBfY29tYmluZUZ1bmMoZjEsIGYyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdDEgPSBfY2FsbElmRnVuYyhmMSksXG4gICAgICAgIHJlc3VsdDIgPSBfY2FsbElmRnVuYyhmMik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX2NhbGxJZkZ1bmMocmVzdWx0MSk7XG5cbiAgICAgIF9jYWxsSWZGdW5jKHJlc3VsdDIpO1xuICAgIH07XG4gIH07XG59LFxuICAgIF9hYnMgPSBNYXRoLmFicyxcbiAgICBfc2Nyb2xsTGVmdCA9IFwic2Nyb2xsTGVmdFwiLFxuICAgIF9zY3JvbGxUb3AgPSBcInNjcm9sbFRvcFwiLFxuICAgIF9sZWZ0ID0gXCJsZWZ0XCIsXG4gICAgX3RvcCA9IFwidG9wXCIsXG4gICAgX3JpZ2h0ID0gXCJyaWdodFwiLFxuICAgIF9ib3R0b20gPSBcImJvdHRvbVwiLFxuICAgIF93aWR0aCA9IFwid2lkdGhcIixcbiAgICBfaGVpZ2h0ID0gXCJoZWlnaHRcIixcbiAgICBfUmlnaHQgPSBcIlJpZ2h0XCIsXG4gICAgX0xlZnQgPSBcIkxlZnRcIixcbiAgICBfVG9wID0gXCJUb3BcIixcbiAgICBfQm90dG9tID0gXCJCb3R0b21cIixcbiAgICBfcGFkZGluZyA9IFwicGFkZGluZ1wiLFxuICAgIF9tYXJnaW4gPSBcIm1hcmdpblwiLFxuICAgIF9XaWR0aCA9IFwiV2lkdGhcIixcbiAgICBfSGVpZ2h0ID0gXCJIZWlnaHRcIixcbiAgICBfcHggPSBcInB4XCIsXG4gICAgX2hvcml6b250YWwgPSB7XG4gIHM6IF9zY3JvbGxMZWZ0LFxuICBwOiBfbGVmdCxcbiAgcDI6IF9MZWZ0LFxuICBvczogX3JpZ2h0LFxuICBvczI6IF9SaWdodCxcbiAgZDogX3dpZHRoLFxuICBkMjogX1dpZHRoLFxuICBhOiBcInhcIixcbiAgc2M6IGZ1bmN0aW9uIHNjKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfd2luLnNjcm9sbFRvKHZhbHVlLCBfdmVydGljYWwuc2MoKSkgOiBfd2luLnBhZ2VYT2Zmc2V0IHx8IF9kb2NbX3Njcm9sbExlZnRdIHx8IF9kb2NFbFtfc2Nyb2xsTGVmdF0gfHwgX2JvZHlbX3Njcm9sbExlZnRdIHx8IDA7XG4gIH1cbn0sXG4gICAgX3ZlcnRpY2FsID0ge1xuICBzOiBfc2Nyb2xsVG9wLFxuICBwOiBfdG9wLFxuICBwMjogX1RvcCxcbiAgb3M6IF9ib3R0b20sXG4gIG9zMjogX0JvdHRvbSxcbiAgZDogX2hlaWdodCxcbiAgZDI6IF9IZWlnaHQsXG4gIGE6IFwieVwiLFxuICBvcDogX2hvcml6b250YWwsXG4gIHNjOiBmdW5jdGlvbiBzYyh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3dpbi5zY3JvbGxUbyhfaG9yaXpvbnRhbC5zYygpLCB2YWx1ZSkgOiBfd2luLnBhZ2VZT2Zmc2V0IHx8IF9kb2NbX3Njcm9sbFRvcF0gfHwgX2RvY0VsW19zY3JvbGxUb3BdIHx8IF9ib2R5W19zY3JvbGxUb3BdIHx8IDA7XG4gIH1cbn0sXG4gICAgX2dldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBfd2luLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59LFxuICAgIF9tYWtlUG9zaXRpb25hYmxlID0gZnVuY3Rpb24gX21ha2VQb3NpdGlvbmFibGUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCI7XG59LFxuICAgIC8vIGlmIHRoZSBlbGVtZW50IGFscmVhZHkgaGFzIHBvc2l0aW9uOiBhYnNvbHV0ZSwgbGVhdmUgdGhhdCwgb3RoZXJ3aXNlIG1ha2UgaXQgcG9zaXRpb246IHJlbGF0aXZlXG5fc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIC8vX2lzSW5WaWV3cG9ydCA9IGVsZW1lbnQgPT4gKGVsZW1lbnQgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpKSAmJiAhKGVsZW1lbnQudG9wID4gKF93aW4uaW5uZXJIZWlnaHQgfHwgX2RvY0VsLmNsaWVudEhlaWdodCkgfHwgZWxlbWVudC5ib3R0b20gPCAwIHx8IGVsZW1lbnQubGVmdCA+IChfd2luLmlubmVyV2lkdGggfHwgX2RvY0VsLmNsaWVudFdpZHRoKSB8fCBlbGVtZW50LnJpZ2h0IDwgMCkgJiYgZWxlbWVudCxcbl9nZXRCb3VuZHMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzKGVsZW1lbnQsIHdpdGhvdXRUcmFuc2Zvcm1zKSB7XG4gIHZhciB0d2VlbiA9IHdpdGhvdXRUcmFuc2Zvcm1zICYmIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW190cmFuc2Zvcm1Qcm9wXSAhPT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiAmJiBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgeFBlcmNlbnQ6IDAsXG4gICAgeVBlcmNlbnQ6IDAsXG4gICAgcm90YXRpb246IDAsXG4gICAgcm90YXRpb25YOiAwLFxuICAgIHJvdGF0aW9uWTogMCxcbiAgICBzY2FsZTogMSxcbiAgICBza2V3WDogMCxcbiAgICBza2V3WTogMFxuICB9KS5wcm9ncmVzcygxKSxcbiAgICAgIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHR3ZWVuICYmIHR3ZWVuLnByb2dyZXNzKDApLmtpbGwoKTtcbiAgcmV0dXJuIGJvdW5kcztcbn0sXG4gICAgX2dldFNpemUgPSBmdW5jdGlvbiBfZ2V0U2l6ZShlbGVtZW50LCBfcmVmNCkge1xuICB2YXIgZDIgPSBfcmVmNC5kMjtcbiAgcmV0dXJuIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXSB8fCBlbGVtZW50W1wiY2xpZW50XCIgKyBkMl0gfHwgMDtcbn0sXG4gICAgX2dldExhYmVscyA9IGZ1bmN0aW9uIF9nZXRMYWJlbHMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBsYWJlbHMgPSBhbmltYXRpb24ubGFiZWxzLFxuICAgICAgICBkdXJhdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpLFxuICAgICAgICBwO1xuXG4gICAgZm9yIChwIGluIGxhYmVscykge1xuICAgICAgYS5wdXNoKGxhYmVsc1twXSAvIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3NhcC51dGlscy5zbmFwKGEsIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgX211bHRpTGlzdGVuZXIgPSBmdW5jdGlvbiBfbXVsdGlMaXN0ZW5lcihmdW5jLCBlbGVtZW50LCB0eXBlcywgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHR5cGVzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmMoZWxlbWVudCwgdHlwZSwgY2FsbGJhY2spO1xuICB9KTtcbn0sXG4gICAgX2FkZExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZExpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMpIHtcbiAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbn0sXG4gICAgX3JlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMpIHtcbiAgcmV0dXJuIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcbn0sXG4gICAgX21hcmtlckRlZmF1bHRzID0ge1xuICBzdGFydENvbG9yOiBcImdyZWVuXCIsXG4gIGVuZENvbG9yOiBcInJlZFwiLFxuICBpbmRlbnQ6IDAsXG4gIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgZm9udFdlaWdodDogXCJub3JtYWxcIlxufSxcbiAgICBfZGVmYXVsdHMgPSB7XG4gIHRvZ2dsZUFjdGlvbnM6IFwicGxheVwiLFxuICBhbnRpY2lwYXRlUGluOiAwXG59LFxuICAgIF9rZXl3b3JkcyA9IHtcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICBjZW50ZXI6IDAuNSxcbiAgYm90dG9tOiAxLFxuICByaWdodDogMVxufSxcbiAgICBfb2Zmc2V0VG9QeCA9IGZ1bmN0aW9uIF9vZmZzZXRUb1B4KHZhbHVlLCBzaXplKSB7XG4gIGlmIChfaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIGVxSW5kZXggPSB2YWx1ZS5pbmRleE9mKFwiPVwiKSxcbiAgICAgICAgcmVsYXRpdmUgPSB+ZXFJbmRleCA/ICsodmFsdWUuY2hhckF0KGVxSW5kZXggLSAxKSArIDEpICogcGFyc2VGbG9hdCh2YWx1ZS5zdWJzdHIoZXFJbmRleCArIDEpKSA6IDA7XG5cbiAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgIHZhbHVlLmluZGV4T2YoXCIlXCIpID4gZXFJbmRleCAmJiAocmVsYXRpdmUgKj0gc2l6ZSAvIDEwMCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBlcUluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSByZWxhdGl2ZSArICh2YWx1ZSBpbiBfa2V5d29yZHMgPyBfa2V5d29yZHNbdmFsdWVdICogc2l6ZSA6IH52YWx1ZS5pbmRleE9mKFwiJVwiKSA/IHBhcnNlRmxvYXQodmFsdWUpICogc2l6ZSAvIDEwMCA6IHBhcnNlRmxvYXQodmFsdWUpIHx8IDApO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufSxcbiAgICBfY3JlYXRlTWFya2VyID0gZnVuY3Rpb24gX2NyZWF0ZU1hcmtlcih0eXBlLCBuYW1lLCBjb250YWluZXIsIGRpcmVjdGlvbiwgX3JlZjUsIG9mZnNldCwgbWF0Y2hXaWR0aEVsKSB7XG4gIHZhciBzdGFydENvbG9yID0gX3JlZjUuc3RhcnRDb2xvcixcbiAgICAgIGVuZENvbG9yID0gX3JlZjUuZW5kQ29sb3IsXG4gICAgICBmb250U2l6ZSA9IF9yZWY1LmZvbnRTaXplLFxuICAgICAgaW5kZW50ID0gX3JlZjUuaW5kZW50LFxuICAgICAgZm9udFdlaWdodCA9IF9yZWY1LmZvbnRXZWlnaHQ7XG5cbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICB1c2VGaXhlZFBvc2l0aW9uID0gX2lzVmlld3BvcnQoY29udGFpbmVyKSB8fCBfZ2V0UHJveHlQcm9wKGNvbnRhaW5lciwgXCJwaW5UeXBlXCIpID09PSBcImZpeGVkXCIsXG4gICAgICBpc1Njcm9sbGVyID0gdHlwZS5pbmRleE9mKFwic2Nyb2xsZXJcIikgIT09IC0xLFxuICAgICAgcGFyZW50ID0gdXNlRml4ZWRQb3NpdGlvbiA/IF9ib2R5IDogY29udGFpbmVyLFxuICAgICAgaXNTdGFydCA9IHR5cGUuaW5kZXhPZihcInN0YXJ0XCIpICE9PSAtMSxcbiAgICAgIGNvbG9yID0gaXNTdGFydCA/IHN0YXJ0Q29sb3IgOiBlbmRDb2xvcixcbiAgICAgIGNzcyA9IFwiYm9yZGVyLWNvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXNpemU6XCIgKyBmb250U2l6ZSArIFwiO2NvbG9yOlwiICsgY29sb3IgKyBcIjtmb250LXdlaWdodDpcIiArIGZvbnRXZWlnaHQgKyBcIjtwb2ludGVyLWV2ZW50czpub25lO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpzYW5zLXNlcmlmLEFyaWFsO3otaW5kZXg6MTAwMDtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO1wiO1xuXG4gIGNzcyArPSBcInBvc2l0aW9uOlwiICsgKGlzU2Nyb2xsZXIgJiYgdXNlRml4ZWRQb3NpdGlvbiA/IFwiZml4ZWQ7XCIgOiBcImFic29sdXRlO1wiKTtcbiAgKGlzU2Nyb2xsZXIgfHwgIXVzZUZpeGVkUG9zaXRpb24pICYmIChjc3MgKz0gKGRpcmVjdGlvbiA9PT0gX3ZlcnRpY2FsID8gX3JpZ2h0IDogX2JvdHRvbSkgKyBcIjpcIiArIChvZmZzZXQgKyBwYXJzZUZsb2F0KGluZGVudCkpICsgXCJweDtcIik7XG4gIG1hdGNoV2lkdGhFbCAmJiAoY3NzICs9IFwiYm94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246bGVmdDt3aWR0aDpcIiArIG1hdGNoV2lkdGhFbC5vZmZzZXRXaWR0aCArIFwicHg7XCIpO1xuICBlLl9pc1N0YXJ0ID0gaXNTdGFydDtcbiAgZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdzYXAtbWFya2VyLVwiICsgdHlwZSk7XG4gIGUuc3R5bGUuY3NzVGV4dCA9IGNzcztcbiAgZS5pbm5lclRleHQgPSBuYW1lIHx8IG5hbWUgPT09IDAgPyB0eXBlICsgXCItXCIgKyBuYW1lIDogdHlwZTtcbiAgcGFyZW50Lmluc2VydEJlZm9yZShlLCBwYXJlbnQuY2hpbGRyZW5bMF0pO1xuICBlLl9vZmZzZXQgPSBlW1wib2Zmc2V0XCIgKyBkaXJlY3Rpb24ub3AuZDJdO1xuXG4gIF9wb3NpdGlvbk1hcmtlcihlLCAwLCBkaXJlY3Rpb24sIGlzU3RhcnQpO1xuXG4gIHJldHVybiBlO1xufSxcbiAgICBfcG9zaXRpb25NYXJrZXIgPSBmdW5jdGlvbiBfcG9zaXRpb25NYXJrZXIobWFya2VyLCBzdGFydCwgZGlyZWN0aW9uLCBmbGlwcGVkKSB7XG4gIHZhciB2YXJzID0ge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICB9LFxuICAgICAgc2lkZSA9IGRpcmVjdGlvbltmbGlwcGVkID8gXCJvczJcIiA6IFwicDJcIl0sXG4gICAgICBvcHBvc2l0ZVNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwicDJcIiA6IFwib3MyXCJdO1xuICBtYXJrZXIuX2lzRmxpcHBlZCA9IGZsaXBwZWQ7XG4gIHZhcnNbZGlyZWN0aW9uLmEgKyBcIlBlcmNlbnRcIl0gPSBmbGlwcGVkID8gLTEwMCA6IDA7XG4gIHZhcnNbZGlyZWN0aW9uLmFdID0gZmxpcHBlZCA/IDEgOiAwO1xuICB2YXJzW1wiYm9yZGVyXCIgKyBzaWRlICsgX1dpZHRoXSA9IDE7XG4gIHZhcnNbXCJib3JkZXJcIiArIG9wcG9zaXRlU2lkZSArIF9XaWR0aF0gPSAwO1xuICB2YXJzW2RpcmVjdGlvbi5wXSA9IHN0YXJ0O1xuICBnc2FwLnNldChtYXJrZXIsIHZhcnMpO1xufSxcbiAgICBfdHJpZ2dlcnMgPSBbXSxcbiAgICBfaWRzID0ge30sXG4gICAgX3N5bmMgPSBmdW5jdGlvbiBfc3luYygpIHtcbiAgcmV0dXJuIF9yZXF1ZXN0IHx8IChfcmVxdWVzdCA9IF9yYWYoX3VwZGF0ZUFsbCkpO1xufSxcbiAgICBfb25TY3JvbGwgPSBmdW5jdGlvbiBfb25TY3JvbGwoKSB7XG4gIGlmICghX3JlcXVlc3QpIHtcbiAgICBfcmVxdWVzdCA9IF9yYWYoX3VwZGF0ZUFsbCk7XG4gICAgX2xhc3RTY3JvbGxUaW1lIHx8IF9kaXNwYXRjaChcInNjcm9sbFN0YXJ0XCIpO1xuICAgIF9sYXN0U2Nyb2xsVGltZSA9IF9nZXRUaW1lKCk7XG4gIH1cbn0sXG4gICAgX29uUmVzaXplID0gZnVuY3Rpb24gX29uUmVzaXplKCkge1xuICByZXR1cm4gIV9yZWZyZXNoaW5nICYmIF9yZXNpemVEZWxheS5yZXN0YXJ0KHRydWUpO1xufSxcbiAgICAvLyBpZ25vcmUgcmVzaXplcyB0cmlnZ2VyZWQgYnkgcmVmcmVzaCgpXG5fbGlzdGVuZXJzID0ge30sXG4gICAgX2VtcHR5QXJyYXkgPSBbXSxcbiAgICBfbWVkaWEgPSBbXSxcbiAgICBfY3JlYXRpbmdNZWRpYSxcbiAgICAvLyB3aGVuIFNjcm9sbFRyaWdnZXIubWF0Y2hNZWRpYSgpIGlzIGNhbGxlZCwgd2UgcmVjb3JkIHRoZSBjdXJyZW50IG1lZGlhIGtleSBoZXJlIChsaWtlIFwiKG1pbi13aWR0aDogODAwcHgpXCIpIHNvIHRoYXQgd2UgY2FuIGFzc2lnbiBpdCB0byBldmVyeXRoaW5nIHRoYXQncyBjcmVhdGVkIGR1cmluZyB0aGF0IGNhbGwuIFRoZW4gd2UgY2FuIHJldmVydCBqdXN0IHRob3NlIHdoZW4gbmVjZXNzYXJ5LiBJbiB0aGUgU2Nyb2xsVHJpZ2dlcidzIGluaXQoKSBjYWxsLCB0aGUgX2NyZWF0aW5nTWVkaWEgaXMgcmVjb3JkZWQgYXMgYSBcIm1lZGlhXCIgcHJvcGVydHkgb24gdGhlIGluc3RhbmNlLlxuX2xhc3RNZWRpYVRpY2ssXG4gICAgX29uTWVkaWFDaGFuZ2UgPSBmdW5jdGlvbiBfb25NZWRpYUNoYW5nZShlKSB7XG4gIHZhciB0aWNrID0gZ3NhcC50aWNrZXIuZnJhbWUsXG4gICAgICBtYXRjaGVzID0gW10sXG4gICAgICBpID0gMDtcblxuICBpZiAoX2xhc3RNZWRpYVRpY2sgIT09IHRpY2sgfHwgX3N0YXJ0dXApIHtcbiAgICBfcmV2ZXJ0QWxsKCk7XG5cbiAgICBmb3IgKDsgaSA8IF9tZWRpYS5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgX3dpbi5tYXRjaE1lZGlhKF9tZWRpYVtpXSkubWF0Y2hlcyA/IG1hdGNoZXMucHVzaChpKSA6IF9yZXZlcnRBbGwoMSwgX21lZGlhW2ldKSB8fCBfaXNGdW5jdGlvbihfbWVkaWFbaSArIDJdKSAmJiBfbWVkaWFbaSArIDJdKCk7IC8vIEZpcmVmb3ggZG9lc24ndCB1cGRhdGUgdGhlIFwibWF0Y2hlc1wiIHByb3BlcnR5IG9mIHRoZSBNZWRpYVF1ZXJ5TGlzdCBvYmplY3QgY29ycmVjdGx5IC0gaXQgb25seSBkb2VzIHNvIGFzIGl0IGNhbGxzIGl0cyBjaGFuZ2UgaGFuZGxlciAtIHNvIHdlIG11c3QgcmUtY3JlYXRlIGEgbWVkaWEgcXVlcnkgaGVyZSB0byBlbnN1cmUgaXQncyBhY2N1cmF0ZS5cbiAgICB9XG5cbiAgICBfcmV2ZXJ0UmVjb3JkZWQoKTsgLy8gaW4gY2FzZSBraWxsaW5nL3JldmVydGluZyBhbnkgb2YgdGhlIGFuaW1hdGlvbnMgYWN0dWFsbHkgYWRkZWQgaW5saW5lIHN0eWxlcyBiYWNrLlxuXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgX2NyZWF0aW5nTWVkaWEgPSBfbWVkaWFbbWF0Y2hlc1tpXV07XG4gICAgICBfbWVkaWFbbWF0Y2hlc1tpXSArIDJdID0gX21lZGlhW21hdGNoZXNbaV0gKyAxXShlKTtcbiAgICB9XG5cbiAgICBfY3JlYXRpbmdNZWRpYSA9IDA7XG5cbiAgICBfcmVmcmVzaEFsbCgwLCAxKTtcblxuICAgIF9sYXN0TWVkaWFUaWNrID0gdGljaztcblxuICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFcIik7XG4gIH1cbn0sXG4gICAgX3NvZnRSZWZyZXNoID0gZnVuY3Rpb24gX3NvZnRSZWZyZXNoKCkge1xuICByZXR1cm4gX3JlbW92ZUxpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwic2Nyb2xsRW5kXCIsIF9zb2Z0UmVmcmVzaCkgfHwgX3JlZnJlc2hBbGwodHJ1ZSk7XG59LFxuICAgIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIF9kaXNwYXRjaCh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzW3R5cGVdICYmIF9saXN0ZW5lcnNbdHlwZV0ubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYoKTtcbiAgfSkgfHwgX2VtcHR5QXJyYXk7XG59LFxuICAgIF9zYXZlZFN0eWxlcyA9IFtdLFxuICAgIC8vIHdoZW4gU2Nyb2xsVHJpZ2dlci5zYXZlU3R5bGVzKCkgaXMgY2FsbGVkLCB0aGUgaW5saW5lIHN0eWxlcyBhcmUgcmVjb3JkZWQgaW4gdGhpcyBBcnJheSBpbiBhIHNlcXVlbnRpYWwgZm9ybWF0IGxpa2UgW2VsZW1lbnQsIGNzc1RleHQsIGdzQ2FjaGUsIG1lZGlhXS4gVGhpcyBrZWVwcyBpdCB2ZXJ5IG1lbW9yeS1lZmZpY2llbnQgYW5kIGZhc3QgdG8gaXRlcmF0ZSB0aHJvdWdoLlxuX3JldmVydFJlY29yZGVkID0gZnVuY3Rpb24gX3JldmVydFJlY29yZGVkKG1lZGlhKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3NhdmVkU3R5bGVzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgaWYgKCFtZWRpYSB8fCBfc2F2ZWRTdHlsZXNbaSArIDNdID09PSBtZWRpYSkge1xuICAgICAgX3NhdmVkU3R5bGVzW2ldLnN0eWxlLmNzc1RleHQgPSBfc2F2ZWRTdHlsZXNbaSArIDFdO1xuICAgICAgX3NhdmVkU3R5bGVzW2kgKyAyXS51bmNhY2hlID0gMTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3JldmVydEFsbCA9IGZ1bmN0aW9uIF9yZXZlcnRBbGwoa2lsbCwgbWVkaWEpIHtcbiAgdmFyIHRyaWdnZXI7XG5cbiAgZm9yIChfaSA9IDA7IF9pIDwgX3RyaWdnZXJzLmxlbmd0aDsgX2krKykge1xuICAgIHRyaWdnZXIgPSBfdHJpZ2dlcnNbX2ldO1xuXG4gICAgaWYgKCFtZWRpYSB8fCB0cmlnZ2VyLm1lZGlhID09PSBtZWRpYSkge1xuICAgICAgaWYgKGtpbGwpIHtcbiAgICAgICAgdHJpZ2dlci5raWxsKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJpZ2dlci5zY3JvbGwucmVjIHx8ICh0cmlnZ2VyLnNjcm9sbC5yZWMgPSB0cmlnZ2VyLnNjcm9sbCgpKTsgLy8gcmVjb3JkIHRoZSBzY3JvbGwgcG9zaXRpb25zIHNvIHRoYXQgaW4gZWFjaCByZWZyZXNoKCkgd2UgY2FuIGVuc3VyZSB0aGF0IGl0IGRvZXNuJ3Qgc2hpZnQuIFJlbWVtYmVyLCBwaW5uaW5nIGNhbiBtYWtlIHRoaW5ncyBjaGFuZ2UgYXJvdW5kLCBlc3BlY2lhbGx5IGlmIHRoZSBzYW1lIGVsZW1lbnQgaXMgcGlubmVkIG11bHRpcGxlIHRpbWVzLiBJZiBvbmUgd2FzIGFscmVhZHkgcmVjb3JkZWQsIGRvbid0IHJlLXJlY29yZCBiZWNhdXNlIHVucGlubmluZyBtYXkgaGF2ZSBvY2N1cnJlZCBhbmQgbWFkZSBpdCBzaG9ydGVyLlxuXG4gICAgICAgIHRyaWdnZXIucmV2ZXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3JldmVydFJlY29yZGVkKG1lZGlhKTtcblxuICBtZWRpYSB8fCBfZGlzcGF0Y2goXCJyZXZlcnRcIik7XG59LFxuICAgIF9yZWZyZXNoQWxsID0gZnVuY3Rpb24gX3JlZnJlc2hBbGwoZm9yY2UsIHNraXBSZXZlcnQpIHtcbiAgaWYgKF9sYXN0U2Nyb2xsVGltZSAmJiAhZm9yY2UpIHtcbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZWZyZXNoSW5pdHMgPSBfZGlzcGF0Y2goXCJyZWZyZXNoSW5pdFwiKTtcblxuICBfc29ydCAmJiBTY3JvbGxUcmlnZ2VyLnNvcnQoKTtcbiAgc2tpcFJldmVydCB8fCBfcmV2ZXJ0QWxsKCk7XG5cbiAgZm9yIChfaSA9IDA7IF9pIDwgX3RyaWdnZXJzLmxlbmd0aDsgX2krKykge1xuICAgIF90cmlnZ2Vyc1tfaV0ucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaEluaXRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnJlbmRlciAmJiByZXN1bHQucmVuZGVyKC0xKTtcbiAgfSk7IC8vIGlmIHRoZSBvblJlZnJlc2hJbml0KCkgcmV0dXJucyBhbiBhbmltYXRpb24gKHR5cGljYWxseSBhIGdzYXAuc2V0KCkpLCByZXZlcnQgaXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBwdXQgdGhpbmdzIGluIGEgY2VydGFpbiBzcG90IGJlZm9yZSByZWZyZXNoaW5nIGZvciBtZWFzdXJlbWVudCBwdXJwb3NlcywgYW5kIHRoZW4gcHV0IHRoaW5ncyBiYWNrLlxuXG4gIF9pID0gX3RyaWdnZXJzLmxlbmd0aDtcblxuICB3aGlsZSAoX2ktLSkge1xuICAgIF90cmlnZ2Vyc1tfaV0uc2Nyb2xsLnJlYyA9IDA7XG4gIH1cblxuICBfZGlzcGF0Y2goXCJyZWZyZXNoXCIpO1xufSxcbiAgICBfbGFzdFNjcm9sbCA9IDAsXG4gICAgX2RpcmVjdGlvbiA9IDEsXG4gICAgX3VwZGF0ZUFsbCA9IGZ1bmN0aW9uIF91cGRhdGVBbGwoKSB7XG4gIHZhciBsID0gX3RyaWdnZXJzLmxlbmd0aCxcbiAgICAgIHRpbWUgPSBfZ2V0VGltZSgpLFxuICAgICAgcmVjb3JkVmVsb2NpdHkgPSB0aW1lIC0gX3RpbWUxID49IDUwLFxuICAgICAgc2Nyb2xsID0gbCAmJiBfdHJpZ2dlcnNbMF0uc2Nyb2xsKCk7XG5cbiAgX2RpcmVjdGlvbiA9IF9sYXN0U2Nyb2xsID4gc2Nyb2xsID8gLTEgOiAxO1xuICBfbGFzdFNjcm9sbCA9IHNjcm9sbDtcblxuICBpZiAocmVjb3JkVmVsb2NpdHkpIHtcbiAgICBpZiAoX2xhc3RTY3JvbGxUaW1lICYmICFfcG9pbnRlcklzRG93biAmJiB0aW1lIC0gX2xhc3RTY3JvbGxUaW1lID4gMjAwKSB7XG4gICAgICBfbGFzdFNjcm9sbFRpbWUgPSAwO1xuXG4gICAgICBfZGlzcGF0Y2goXCJzY3JvbGxFbmRcIik7XG4gICAgfVxuXG4gICAgX3RpbWUyID0gX3RpbWUxO1xuICAgIF90aW1lMSA9IHRpbWU7XG4gIH1cblxuICBpZiAoX2RpcmVjdGlvbiA8IDApIHtcbiAgICBfaSA9IGw7XG5cbiAgICB3aGlsZSAoX2ktLSkge1xuICAgICAgX3RyaWdnZXJzW19pXSAmJiBfdHJpZ2dlcnNbX2ldLnVwZGF0ZSgwLCByZWNvcmRWZWxvY2l0eSk7XG4gICAgfVxuXG4gICAgX2RpcmVjdGlvbiA9IDE7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChfaSA9IDA7IF9pIDwgbDsgX2krKykge1xuICAgICAgX3RyaWdnZXJzW19pXSAmJiBfdHJpZ2dlcnNbX2ldLnVwZGF0ZSgwLCByZWNvcmRWZWxvY2l0eSk7XG4gICAgfVxuICB9XG5cbiAgX3JlcXVlc3QgPSAwO1xufSxcbiAgICBfcHJvcE5hbWVzVG9Db3B5ID0gW19sZWZ0LCBfdG9wLCBfYm90dG9tLCBfcmlnaHQsIF9tYXJnaW4gKyBfQm90dG9tLCBfbWFyZ2luICsgX1JpZ2h0LCBfbWFyZ2luICsgX1RvcCwgX21hcmdpbiArIF9MZWZ0LCBcImRpc3BsYXlcIiwgXCJmbGV4U2hyaW5rXCIsIFwiZmxvYXRcIl0sXG4gICAgX3N0YXRlUHJvcHMgPSBfcHJvcE5hbWVzVG9Db3B5LmNvbmNhdChbX3dpZHRoLCBfaGVpZ2h0LCBcImJveFNpemluZ1wiLCBcIm1heFwiICsgX1dpZHRoLCBcIm1heFwiICsgX0hlaWdodCwgXCJwb3NpdGlvblwiLCBfbWFyZ2luLCBfcGFkZGluZywgX3BhZGRpbmcgKyBfVG9wLCBfcGFkZGluZyArIF9SaWdodCwgX3BhZGRpbmcgKyBfQm90dG9tLCBfcGFkZGluZyArIF9MZWZ0XSksXG4gICAgX3N3YXBQaW5PdXQgPSBmdW5jdGlvbiBfc3dhcFBpbk91dChwaW4sIHNwYWNlciwgc3RhdGUpIHtcbiAgX3NldFN0YXRlKHN0YXRlKTtcblxuICBpZiAocGluLnBhcmVudE5vZGUgPT09IHNwYWNlcikge1xuICAgIHZhciBwYXJlbnQgPSBzcGFjZXIucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocGluLCBzcGFjZXIpO1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHNwYWNlcik7XG4gICAgfVxuICB9XG59LFxuICAgIF9zd2FwUGluSW4gPSBmdW5jdGlvbiBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBjcywgc3BhY2VyU3RhdGUpIHtcbiAgaWYgKHBpbi5wYXJlbnROb2RlICE9PSBzcGFjZXIpIHtcbiAgICB2YXIgaSA9IF9wcm9wTmFtZXNUb0NvcHkubGVuZ3RoLFxuICAgICAgICBzcGFjZXJTdHlsZSA9IHNwYWNlci5zdHlsZSxcbiAgICAgICAgcGluU3R5bGUgPSBwaW4uc3R5bGUsXG4gICAgICAgIHA7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwID0gX3Byb3BOYW1lc1RvQ29weVtpXTtcbiAgICAgIHNwYWNlclN0eWxlW3BdID0gY3NbcF07XG4gICAgfVxuXG4gICAgc3BhY2VyU3R5bGUucG9zaXRpb24gPSBjcy5wb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwiO1xuICAgIGNzLmRpc3BsYXkgPT09IFwiaW5saW5lXCIgJiYgKHNwYWNlclN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiKTtcbiAgICBwaW5TdHlsZVtfYm90dG9tXSA9IHBpblN0eWxlW19yaWdodF0gPSBcImF1dG9cIjtcbiAgICBzcGFjZXJTdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgIHNwYWNlclN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIHNwYWNlclN0eWxlW193aWR0aF0gPSBfZ2V0U2l6ZShwaW4sIF9ob3Jpem9udGFsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfaGVpZ2h0XSA9IF9nZXRTaXplKHBpbiwgX3ZlcnRpY2FsKSArIF9weDtcbiAgICBzcGFjZXJTdHlsZVtfcGFkZGluZ10gPSBwaW5TdHlsZVtfbWFyZ2luXSA9IHBpblN0eWxlW190b3BdID0gcGluU3R5bGVbX2xlZnRdID0gXCIwXCI7XG5cbiAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuXG4gICAgcGluU3R5bGVbX3dpZHRoXSA9IGNzW193aWR0aF07XG4gICAgcGluU3R5bGVbX2hlaWdodF0gPSBjc1tfaGVpZ2h0XTtcbiAgICBwaW5TdHlsZVtfcGFkZGluZ10gPSBjc1tfcGFkZGluZ107XG4gICAgcGluLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYWNlciwgcGluKTtcbiAgICBzcGFjZXIuYXBwZW5kQ2hpbGQocGluKTtcbiAgfVxufSxcbiAgICBfY2Fwc0V4cCA9IC8oW0EtWl0pL2csXG4gICAgX3NldFN0YXRlID0gZnVuY3Rpb24gX3NldFN0YXRlKHN0YXRlKSB7XG4gIGlmIChzdGF0ZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnQuc3R5bGUsXG4gICAgICAgIGwgPSBzdGF0ZS5sZW5ndGgsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBwLFxuICAgICAgICB2YWx1ZTtcblxuICAgIGZvciAoOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgICB2YWx1ZSA9IHN0YXRlW2kgKyAxXTtcbiAgICAgIHAgPSBzdGF0ZVtpXTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHN0eWxlW3BdID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHN0eWxlW3BdKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KHAucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRTdGF0ZSA9IGZ1bmN0aW9uIF9nZXRTdGF0ZShlbGVtZW50KSB7XG4gIC8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBhbHRlcm5hdGluZyB2YWx1ZXMgbGlrZSBbcHJvcGVydHksIHZhbHVlLCBwcm9wZXJ0eSwgdmFsdWVdIGFuZCBhIFwidFwiIHByb3BlcnR5IHBvaW50aW5nIHRvIHRoZSB0YXJnZXQgKGVsZW1lbnQpLiBNYWtlcyBpdCBmYXN0IGFuZCBjaGVhcC5cbiAgdmFyIGwgPSBfc3RhdGVQcm9wcy5sZW5ndGgsXG4gICAgICBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICBzdGF0ZSA9IFtdLFxuICAgICAgaSA9IDA7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBzdGF0ZS5wdXNoKF9zdGF0ZVByb3BzW2ldLCBzdHlsZVtfc3RhdGVQcm9wc1tpXV0pO1xuICB9XG5cbiAgc3RhdGUudCA9IGVsZW1lbnQ7XG4gIHJldHVybiBzdGF0ZTtcbn0sXG4gICAgX2NvcHlTdGF0ZSA9IGZ1bmN0aW9uIF9jb3B5U3RhdGUoc3RhdGUsIG92ZXJyaWRlLCBvbWl0T2Zmc2V0cykge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICBsID0gc3RhdGUubGVuZ3RoLFxuICAgICAgaSA9IG9taXRPZmZzZXRzID8gOCA6IDAsXG4gICAgICAvLyBza2lwIHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSBpZiBvbWl0T2Zmc2V0cyBpcyB0cnVlXG4gIHA7XG5cbiAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICBwID0gc3RhdGVbaV07XG4gICAgcmVzdWx0LnB1c2gocCwgcCBpbiBvdmVycmlkZSA/IG92ZXJyaWRlW3BdIDogc3RhdGVbaSArIDFdKTtcbiAgfVxuXG4gIHJlc3VsdC50ID0gc3RhdGUudDtcbiAgcmV0dXJuIHJlc3VsdDtcbn0sXG4gICAgX3dpbk9mZnNldHMgPSB7XG4gIGxlZnQ6IDAsXG4gIHRvcDogMFxufSxcbiAgICBfcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKHZhbHVlLCB0cmlnZ2VyLCBzY3JvbGxlclNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsLCBtYXJrZXIsIG1hcmtlclNjcm9sbGVyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIHNjcm9sbGVyTWF4KSB7XG4gIF9pc0Z1bmN0aW9uKHZhbHVlKSAmJiAodmFsdWUgPSB2YWx1ZShzZWxmKSk7XG5cbiAgaWYgKF9pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUuc3Vic3RyKDAsIDMpID09PSBcIm1heFwiKSB7XG4gICAgdmFsdWUgPSBzY3JvbGxlck1heCArICh2YWx1ZS5jaGFyQXQoNCkgPT09IFwiPVwiID8gX29mZnNldFRvUHgoXCIwXCIgKyB2YWx1ZS5zdWJzdHIoMyksIHNjcm9sbGVyU2l6ZSkgOiAwKTtcbiAgfVxuXG4gIGlmICghX2lzTnVtYmVyKHZhbHVlKSkge1xuICAgIF9pc0Z1bmN0aW9uKHRyaWdnZXIpICYmICh0cmlnZ2VyID0gdHJpZ2dlcihzZWxmKSk7XG5cbiAgICB2YXIgZWxlbWVudCA9IF90b0FycmF5KHRyaWdnZXIpWzBdIHx8IF9ib2R5LFxuICAgICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpIHx8IHt9LFxuICAgICAgICBvZmZzZXRzID0gdmFsdWUuc3BsaXQoXCIgXCIpLFxuICAgICAgICBsb2NhbE9mZnNldCxcbiAgICAgICAgZ2xvYmFsT2Zmc2V0LFxuICAgICAgICBkaXNwbGF5O1xuXG4gICAgaWYgKCghYm91bmRzIHx8ICFib3VuZHMubGVmdCAmJiAhYm91bmRzLnRvcCkgJiYgX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIC8vIGlmIGRpc3BsYXkgaXMgXCJub25lXCIsIGl0IHdvbid0IHJlcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBwcm9wZXJseVxuICAgICAgZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoZWxlbWVudCk7XG4gICAgICBkaXNwbGF5ID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSA6IGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgIH1cblxuICAgIGxvY2FsT2Zmc2V0ID0gX29mZnNldFRvUHgob2Zmc2V0c1swXSwgYm91bmRzW2RpcmVjdGlvbi5kXSk7XG4gICAgZ2xvYmFsT2Zmc2V0ID0gX29mZnNldFRvUHgob2Zmc2V0c1sxXSB8fCBcIjBcIiwgc2Nyb2xsZXJTaXplKTtcbiAgICB2YWx1ZSA9IGJvdW5kc1tkaXJlY3Rpb24ucF0gLSBzY3JvbGxlckJvdW5kc1tkaXJlY3Rpb24ucF0gLSBib3JkZXJXaWR0aCArIGxvY2FsT2Zmc2V0ICsgc2Nyb2xsIC0gZ2xvYmFsT2Zmc2V0O1xuICAgIG1hcmtlclNjcm9sbGVyICYmIF9wb3NpdGlvbk1hcmtlcihtYXJrZXJTY3JvbGxlciwgZ2xvYmFsT2Zmc2V0LCBkaXJlY3Rpb24sIHNjcm9sbGVyU2l6ZSAtIGdsb2JhbE9mZnNldCA8IDIwIHx8IG1hcmtlclNjcm9sbGVyLl9pc1N0YXJ0ICYmIGdsb2JhbE9mZnNldCA+IDIwKTtcbiAgICBzY3JvbGxlclNpemUgLT0gc2Nyb2xsZXJTaXplIC0gZ2xvYmFsT2Zmc2V0OyAvLyBhZGp1c3QgZm9yIHRoZSBtYXJrZXJcbiAgfSBlbHNlIGlmIChtYXJrZXJTY3JvbGxlcikge1xuICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXJTY3JvbGxlciwgc2Nyb2xsZXJTaXplLCBkaXJlY3Rpb24sIHRydWUpO1xuICB9XG5cbiAgaWYgKG1hcmtlcikge1xuICAgIHZhciBwb3NpdGlvbiA9IHZhbHVlICsgc2Nyb2xsZXJTaXplLFxuICAgICAgICBpc1N0YXJ0ID0gbWFya2VyLl9pc1N0YXJ0O1xuICAgIHNjcm9sbGVyTWF4ID0gXCJzY3JvbGxcIiArIGRpcmVjdGlvbi5kMjtcblxuICAgIF9wb3NpdGlvbk1hcmtlcihtYXJrZXIsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIGlzU3RhcnQgJiYgcG9zaXRpb24gPiAyMCB8fCAhaXNTdGFydCAmJiAodXNlRml4ZWRQb3NpdGlvbiA/IE1hdGgubWF4KF9ib2R5W3Njcm9sbGVyTWF4XSwgX2RvY0VsW3Njcm9sbGVyTWF4XSkgOiBtYXJrZXIucGFyZW50Tm9kZVtzY3JvbGxlck1heF0pIDw9IHBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAodXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgc2Nyb2xsZXJCb3VuZHMgPSBfZ2V0Qm91bmRzKG1hcmtlclNjcm9sbGVyKTtcbiAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgKG1hcmtlci5zdHlsZVtkaXJlY3Rpb24ub3AucF0gPSBzY3JvbGxlckJvdW5kc1tkaXJlY3Rpb24ub3AucF0gLSBkaXJlY3Rpb24ub3AubSAtIG1hcmtlci5fb2Zmc2V0ICsgX3B4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XG59LFxuICAgIF9wcmVmaXhFeHAgPSAvKD86d2Via2l0fG1venxsZW5ndGh8Y3NzVGV4dCkvaSxcbiAgICBfcmVwYXJlbnQgPSBmdW5jdGlvbiBfcmVwYXJlbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICAgIHAsXG4gICAgICAgIGNzO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gX2JvZHkpIHtcbiAgICAgIGVsZW1lbnQuX3N0T3JpZyA9IHN0eWxlLmNzc1RleHQ7IC8vIHJlY29yZCBvcmlnaW5hbCBpbmxpbmUgc3R5bGVzIHNvIHdlIGNhbiByZXZlcnQgdGhlbSBsYXRlclxuXG4gICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICBmb3IgKHAgaW4gY3MpIHtcbiAgICAgICAgLy8gbXVzdCBjb3B5IGFsbCByZWxldmFudCBzdHlsZXMgdG8gZW5zdXJlIHRoYXQgbm90aGluZyBjaGFuZ2VzIHZpc3VhbGx5IHdoZW4gd2UgcmVwYXJlbnQgdG8gdGhlIDxib2R5Pi4gU2tpcCB0aGUgdmVuZG9yIHByZWZpeGVkIG9uZXMuXG4gICAgICAgIGlmICghK3AgJiYgIV9wcmVmaXhFeHAudGVzdChwKSAmJiBjc1twXSAmJiB0eXBlb2Ygc3R5bGVbcF0gPT09IFwic3RyaW5nXCIgJiYgcCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICBzdHlsZVtwXSA9IGNzW3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmNzc1RleHQgPSBlbGVtZW50Ll9zdE9yaWc7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG59LFxuICAgIC8vIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHR3ZWVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaW4gdGhlIGRpcmVjdGlvbiBwcm92aWRlZCwgYW5kIHdoZW4gZG9pbmcgc28gaXQnbGwgYWRkIGEgLnR3ZWVuIHByb3BlcnR5IHRvIHRoZSBGVU5DVElPTiBpdHNlbGYsIGFuZCByZW1vdmUgaXQgd2hlbiB0aGUgdHdlZW4gY29tcGxldGVzIG9yIGdldHMga2lsbGVkLiBUaGlzIGdpdmVzIHVzIGEgd2F5IHRvIGhhdmUgbXVsdGlwbGUgU2Nyb2xsVHJpZ2dlcnMgdXNlIGEgY2VudHJhbCBmdW5jdGlvbiBmb3IgYW55IGdpdmVuIHNjcm9sbGVyIGFuZCBzZWUgaWYgdGhlcmUncyBhIHNjcm9sbCB0d2VlbiBydW5uaW5nICh3aGljaCB3b3VsZCBhZmZlY3QgaWYvaG93IHRoaW5ncyBnZXQgdXBkYXRlZClcbl9nZXRUd2VlbkNyZWF0b3IgPSBmdW5jdGlvbiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBkaXJlY3Rpb24pIHtcbiAgdmFyIGdldFNjcm9sbCA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pLFxuICAgICAgcHJvcCA9IFwiX3Njcm9sbFwiICsgZGlyZWN0aW9uLnAyLFxuICAgICAgLy8gYWRkIGEgdHdlZW5hYmxlIHByb3BlcnR5IHRvIHRoZSBzY3JvbGxlciB0aGF0J3MgYSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9uLCBsaWtlIF9zY3JvbGxUb3Agb3IgX3Njcm9sbExlZnQuIFRoaXMgd2F5LCBpZiBzb21lb25lIGRvZXMgZ3NhcC5raWxsVHdlZW5zT2Yoc2Nyb2xsZXIpIGl0J2xsIGtpbGwgdGhlIHNjcm9sbCB0d2Vlbi5cbiAgbGFzdFNjcm9sbDEsXG4gICAgICBsYXN0U2Nyb2xsMixcbiAgICAgIGdldFR3ZWVuID0gZnVuY3Rpb24gZ2V0VHdlZW4oc2Nyb2xsVG8sIHZhcnMsIGluaXRpYWxWYWx1ZSwgY2hhbmdlMSwgY2hhbmdlMikge1xuICAgIHZhciB0d2VlbiA9IGdldFR3ZWVuLnR3ZWVuLFxuICAgICAgICBvbkNvbXBsZXRlID0gdmFycy5vbkNvbXBsZXRlLFxuICAgICAgICBtb2RpZmllcnMgPSB7fTtcbiAgICB0d2VlbiAmJiB0d2Vlbi5raWxsKCk7XG4gICAgbGFzdFNjcm9sbDEgPSBpbml0aWFsVmFsdWU7XG4gICAgdmFyc1twcm9wXSA9IHNjcm9sbFRvO1xuICAgIHZhcnMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuXG4gICAgbW9kaWZpZXJzW3Byb3BdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IGdldFNjcm9sbCgpO1xuXG4gICAgICBpZiAodmFsdWUgIT09IGxhc3RTY3JvbGwxICYmIHZhbHVlICE9PSBsYXN0U2Nyb2xsMikge1xuICAgICAgICAvLyBpZiB0aGUgdXNlciBzY3JvbGxzLCBraWxsIHRoZSB0d2Vlbi4gaU9TIFNhZmFyaSBpbnRlcm1pdHRlbnRseSBtaXNyZXBvcnRzIHRoZSBzY3JvbGwgcG9zaXRpb24sIGl0IG1heSBiZSB0aGUgbW9zdCByZWNlbnRseS1zZXQgb25lIG9yIHRoZSBvbmUgYmVmb3JlIHRoYXQhXG4gICAgICAgIHR3ZWVuLmtpbGwoKTtcbiAgICAgICAgZ2V0VHdlZW4udHdlZW4gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBpbml0aWFsVmFsdWUgKyBjaGFuZ2UxICogdHdlZW4ucmF0aW8gKyBjaGFuZ2UyICogdHdlZW4ucmF0aW8gKiB0d2Vlbi5yYXRpbztcbiAgICAgIH1cblxuICAgICAgbGFzdFNjcm9sbDIgPSBsYXN0U2Nyb2xsMTtcbiAgICAgIHJldHVybiBsYXN0U2Nyb2xsMSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgIH07XG5cbiAgICB2YXJzLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBnZXRUd2Vlbi50d2VlbiA9IDA7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUuY2FsbCh0d2Vlbik7XG4gICAgfTtcblxuICAgIHR3ZWVuID0gZ2V0VHdlZW4udHdlZW4gPSBnc2FwLnRvKHNjcm9sbGVyLCB2YXJzKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH07XG5cbiAgc2Nyb2xsZXJbcHJvcF0gPSBnZXRTY3JvbGw7XG4gIHJldHVybiBnZXRUd2Vlbjtcbn07XG5cbl9ob3Jpem9udGFsLm9wID0gX3ZlcnRpY2FsO1xuZXhwb3J0IHZhciBTY3JvbGxUcmlnZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2Nyb2xsVHJpZ2dlcih2YXJzLCBhbmltYXRpb24pIHtcbiAgICBfY29yZUluaXR0ZWQgfHwgU2Nyb2xsVHJpZ2dlci5yZWdpc3Rlcihnc2FwKSB8fCBjb25zb2xlLndhcm4oXCJQbGVhc2UgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVwiKTtcbiAgICB0aGlzLmluaXQodmFycywgYW5pbWF0aW9uKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTY3JvbGxUcmlnZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQodmFycywgYW5pbWF0aW9uKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy52YXJzICYmIHRoaXMua2lsbCgxKTsgLy8gaW4gY2FzZSBpdCdzIGJlaW5nIGluaXR0ZWQgYWdhaW5cblxuICAgIGlmICghX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy5yZWZyZXNoID0gdGhpcy5raWxsID0gX3Bhc3NUaHJvdWdoO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhcnMgPSBfc2V0RGVmYXVsdHMoX2lzU3RyaW5nKHZhcnMpIHx8IF9pc051bWJlcih2YXJzKSB8fCB2YXJzLm5vZGVUeXBlID8ge1xuICAgICAgdHJpZ2dlcjogdmFyc1xuICAgIH0gOiB2YXJzLCBfZGVmYXVsdHMpO1xuXG4gICAgdmFyIGRpcmVjdGlvbiA9IHZhcnMuaG9yaXpvbnRhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsLFxuICAgICAgICBfdmFycyA9IHZhcnMsXG4gICAgICAgIG9uVXBkYXRlID0gX3ZhcnMub25VcGRhdGUsXG4gICAgICAgIHRvZ2dsZUNsYXNzID0gX3ZhcnMudG9nZ2xlQ2xhc3MsXG4gICAgICAgIGlkID0gX3ZhcnMuaWQsXG4gICAgICAgIG9uVG9nZ2xlID0gX3ZhcnMub25Ub2dnbGUsXG4gICAgICAgIG9uUmVmcmVzaCA9IF92YXJzLm9uUmVmcmVzaCxcbiAgICAgICAgc2NydWIgPSBfdmFycy5zY3J1YixcbiAgICAgICAgdHJpZ2dlciA9IF92YXJzLnRyaWdnZXIsXG4gICAgICAgIHBpbiA9IF92YXJzLnBpbixcbiAgICAgICAgcGluU3BhY2luZyA9IF92YXJzLnBpblNwYWNpbmcsXG4gICAgICAgIGludmFsaWRhdGVPblJlZnJlc2ggPSBfdmFycy5pbnZhbGlkYXRlT25SZWZyZXNoLFxuICAgICAgICBhbnRpY2lwYXRlUGluID0gX3ZhcnMuYW50aWNpcGF0ZVBpbixcbiAgICAgICAgb25TY3J1YkNvbXBsZXRlID0gX3ZhcnMub25TY3J1YkNvbXBsZXRlLFxuICAgICAgICBvblNuYXBDb21wbGV0ZSA9IF92YXJzLm9uU25hcENvbXBsZXRlLFxuICAgICAgICBvbmNlID0gX3ZhcnMub25jZSxcbiAgICAgICAgc25hcCA9IF92YXJzLnNuYXAsXG4gICAgICAgIHBpblJlcGFyZW50ID0gX3ZhcnMucGluUmVwYXJlbnQsXG4gICAgICAgIGlzVG9nZ2xlID0gIXNjcnViICYmIHNjcnViICE9PSAwLFxuICAgICAgICBzY3JvbGxlciA9IF90b0FycmF5KHZhcnMuc2Nyb2xsZXIgfHwgX3dpbilbMF0sXG4gICAgICAgIHNjcm9sbGVyQ2FjaGUgPSBnc2FwLmNvcmUuZ2V0Q2FjaGUoc2Nyb2xsZXIpLFxuICAgICAgICBpc1ZpZXdwb3J0ID0gX2lzVmlld3BvcnQoc2Nyb2xsZXIpLFxuICAgICAgICB1c2VGaXhlZFBvc2l0aW9uID0gXCJwaW5UeXBlXCIgaW4gdmFycyA/IHZhcnMucGluVHlwZSA9PT0gXCJmaXhlZFwiIDogaXNWaWV3cG9ydCB8fCBfZ2V0UHJveHlQcm9wKHNjcm9sbGVyLCBcInBpblR5cGVcIikgPT09IFwiZml4ZWRcIixcbiAgICAgICAgY2FsbGJhY2tzID0gW3ZhcnMub25FbnRlciwgdmFycy5vbkxlYXZlLCB2YXJzLm9uRW50ZXJCYWNrLCB2YXJzLm9uTGVhdmVCYWNrXSxcbiAgICAgICAgdG9nZ2xlQWN0aW9ucyA9IGlzVG9nZ2xlICYmIHZhcnMudG9nZ2xlQWN0aW9ucy5zcGxpdChcIiBcIiksXG4gICAgICAgIG1hcmtlcnMgPSBcIm1hcmtlcnNcIiBpbiB2YXJzID8gdmFycy5tYXJrZXJzIDogX2RlZmF1bHRzLm1hcmtlcnMsXG4gICAgICAgIGJvcmRlcldpZHRoID0gaXNWaWV3cG9ydCA/IDAgOiBwYXJzZUZsb2F0KF9nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGVyKVtcImJvcmRlclwiICsgZGlyZWN0aW9uLnAyICsgX1dpZHRoXSkgfHwgMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9uUmVmcmVzaEluaXQgPSB2YXJzLm9uUmVmcmVzaEluaXQgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhcnMub25SZWZyZXNoSW5pdChzZWxmKTtcbiAgICB9LFxuICAgICAgICBnZXRTY3JvbGxlclNpemUgPSBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIGRpcmVjdGlvbiksXG4gICAgICAgIGdldFNjcm9sbGVyT2Zmc2V0cyA9IF9nZXRPZmZzZXRzRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCksXG4gICAgICAgIHR3ZWVuVG8sXG4gICAgICAgIHBpbkNhY2hlLFxuICAgICAgICBzbmFwRnVuYyxcbiAgICAgICAgaXNSZXZlcnRlZCxcbiAgICAgICAgc2Nyb2xsMSxcbiAgICAgICAgc2Nyb2xsMixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgbWFya2VyU3RhcnQsXG4gICAgICAgIG1hcmtlckVuZCxcbiAgICAgICAgbWFya2VyU3RhcnRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJFbmRUcmlnZ2VyLFxuICAgICAgICBtYXJrZXJWYXJzLFxuICAgICAgICBjaGFuZ2UsXG4gICAgICAgIHBpbk9yaWdpbmFsU3RhdGUsXG4gICAgICAgIHBpbkFjdGl2ZVN0YXRlLFxuICAgICAgICBwaW5TdGF0ZSxcbiAgICAgICAgc3BhY2VyLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHBpbkdldHRlcixcbiAgICAgICAgcGluU2V0dGVyLFxuICAgICAgICBwaW5TdGFydCxcbiAgICAgICAgcGluQ2hhbmdlLFxuICAgICAgICBzcGFjaW5nU3RhcnQsXG4gICAgICAgIHNwYWNlclN0YXRlLFxuICAgICAgICBtYXJrZXJTdGFydFNldHRlcixcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyLFxuICAgICAgICBjcyxcbiAgICAgICAgc25hcDEsXG4gICAgICAgIHNuYXAyLFxuICAgICAgICBzY3J1YlR3ZWVuLFxuICAgICAgICBzY3J1YlNtb290aCxcbiAgICAgICAgc25hcER1ckNsYW1wLFxuICAgICAgICBzbmFwRGVsYXllZENhbGwsXG4gICAgICAgIHByZXZQcm9ncmVzcyxcbiAgICAgICAgcHJldlNjcm9sbCxcbiAgICAgICAgcHJldkFuaW1Qcm9ncmVzcztcblxuICAgIHNlbGYubWVkaWEgPSBfY3JlYXRpbmdNZWRpYTtcbiAgICBhbnRpY2lwYXRlUGluICo9IDQ1O1xuXG4gICAgX3RyaWdnZXJzLnB1c2goc2VsZik7XG5cbiAgICBzZWxmLnNjcm9sbGVyID0gc2Nyb2xsZXI7XG4gICAgc2VsZi5zY3JvbGwgPSBfZ2V0U2Nyb2xsRnVuYyhzY3JvbGxlciwgZGlyZWN0aW9uKTtcbiAgICBzY3JvbGwxID0gc2VsZi5zY3JvbGwoKTtcbiAgICBzZWxmLnZhcnMgPSB2YXJzO1xuICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbiB8fCB2YXJzLmFuaW1hdGlvbjtcbiAgICBcInJlZnJlc2hQcmlvcml0eVwiIGluIHZhcnMgJiYgKF9zb3J0ID0gMSk7XG4gICAgc2Nyb2xsZXJDYWNoZS50d2VlblNjcm9sbCA9IHNjcm9sbGVyQ2FjaGUudHdlZW5TY3JvbGwgfHwge1xuICAgICAgdG9wOiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBfdmVydGljYWwpLFxuICAgICAgbGVmdDogX2dldFR3ZWVuQ3JlYXRvcihzY3JvbGxlciwgX2hvcml6b250YWwpXG4gICAgfTtcbiAgICBzZWxmLnR3ZWVuVG8gPSB0d2VlblRvID0gc2Nyb2xsZXJDYWNoZS50d2VlblNjcm9sbFtkaXJlY3Rpb24ucF07XG5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICBhbmltYXRpb24udmFycy5sYXp5ID0gZmFsc2U7XG4gICAgICBhbmltYXRpb24uX2luaXR0ZWQgfHwgYW5pbWF0aW9uLnZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSAmJiB2YXJzLmltbWVkaWF0ZVJlbmRlciAhPT0gZmFsc2UgJiYgYW5pbWF0aW9uLnJlbmRlcigwLCB0cnVlLCB0cnVlKTtcbiAgICAgIHNlbGYuYW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IHNlbGY7XG4gICAgICBzY3J1YlNtb290aCA9IF9pc051bWJlcihzY3J1YikgJiYgc2NydWI7XG4gICAgICBzY3J1YlNtb290aCAmJiAoc2NydWJUd2VlbiA9IGdzYXAudG8oYW5pbWF0aW9uLCB7XG4gICAgICAgIGVhc2U6IFwicG93ZXIzXCIsXG4gICAgICAgIGR1cmF0aW9uOiBzY3J1YlNtb290aCxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICByZXR1cm4gb25TY3J1YkNvbXBsZXRlICYmIG9uU2NydWJDb21wbGV0ZShzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgICAgc25hcDEgPSAwO1xuICAgICAgaWQgfHwgKGlkID0gYW5pbWF0aW9uLnZhcnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChzbmFwKSB7XG4gICAgICBfaXNPYmplY3Qoc25hcCkgfHwgKHNuYXAgPSB7XG4gICAgICAgIHNuYXBUbzogc25hcFxuICAgICAgfSk7XG4gICAgICBnc2FwLnNldChpc1ZpZXdwb3J0ID8gW19ib2R5LCBfZG9jRWxdIDogc2Nyb2xsZXIsIHtcbiAgICAgICAgc2Nyb2xsQmVoYXZpb3I6IFwiYXV0b1wiXG4gICAgICB9KTsgLy8gc21vb3RoIHNjcm9sbGluZyBkb2Vzbid0IHdvcmsgd2l0aCBzbmFwLlxuXG4gICAgICBzbmFwRnVuYyA9IF9pc0Z1bmN0aW9uKHNuYXAuc25hcFRvKSA/IHNuYXAuc25hcFRvIDogc25hcC5zbmFwVG8gPT09IFwibGFiZWxzXCIgPyBfZ2V0TGFiZWxzKGFuaW1hdGlvbikgOiBnc2FwLnV0aWxzLnNuYXAoc25hcC5zbmFwVG8pO1xuICAgICAgc25hcER1ckNsYW1wID0gc25hcC5kdXJhdGlvbiB8fCB7XG4gICAgICAgIG1pbjogMC4xLFxuICAgICAgICBtYXg6IDJcbiAgICAgIH07XG4gICAgICBzbmFwRHVyQ2xhbXAgPSBfaXNPYmplY3Qoc25hcER1ckNsYW1wKSA/IF9jbGFtcChzbmFwRHVyQ2xhbXAubWluLCBzbmFwRHVyQ2xhbXAubWF4KSA6IF9jbGFtcChzbmFwRHVyQ2xhbXAsIHNuYXBEdXJDbGFtcCk7XG4gICAgICBzbmFwRGVsYXllZENhbGwgPSBnc2FwLmRlbGF5ZWRDYWxsKHNuYXAuZGVsYXkgfHwgc2NydWJTbW9vdGggLyAyIHx8IDAuMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoTWF0aC5hYnMoc2VsZi5nZXRWZWxvY2l0eSgpKSA8IDEwICYmICFfcG9pbnRlcklzRG93bikge1xuICAgICAgICAgIHZhciB0b3RhbFByb2dyZXNzID0gYW5pbWF0aW9uICYmICFpc1RvZ2dsZSA/IGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKCkgOiBzZWxmLnByb2dyZXNzLFxuICAgICAgICAgICAgICB2ZWxvY2l0eSA9ICh0b3RhbFByb2dyZXNzIC0gc25hcDIpIC8gKF9nZXRUaW1lKCkgLSBfdGltZTIpICogMTAwMCB8fCAwLFxuICAgICAgICAgICAgICBjaGFuZ2UxID0gX2Ficyh2ZWxvY2l0eSAvIDIpICogdmVsb2NpdHkgLyAwLjE4NSxcbiAgICAgICAgICAgICAgbmF0dXJhbEVuZCA9IHRvdGFsUHJvZ3Jlc3MgKyBjaGFuZ2UxLFxuICAgICAgICAgICAgICBlbmRWYWx1ZSA9IF9jbGFtcCgwLCAxLCBzbmFwRnVuYyhuYXR1cmFsRW5kLCBzZWxmKSksXG4gICAgICAgICAgICAgIHNjcm9sbCA9IHNlbGYuc2Nyb2xsKCksXG4gICAgICAgICAgICAgIGVuZFNjcm9sbCA9IE1hdGgucm91bmQoc3RhcnQgKyBlbmRWYWx1ZSAqIGNoYW5nZSksXG4gICAgICAgICAgICAgIHR3ZWVuID0gdHdlZW5Uby50d2VlbjtcblxuICAgICAgICAgIGlmIChzY3JvbGwgPD0gZW5kICYmIHNjcm9sbCA+PSBzdGFydCAmJiBlbmRTY3JvbGwgIT09IHNjcm9sbCkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuICYmICF0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5kYXRhIDw9IE1hdGguYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCkpIHtcbiAgICAgICAgICAgICAgLy8gdGhlcmUncyBhbiBvdmVybGFwcGluZyBzbmFwISBTbyB3ZSBtdXN0IGZpZ3VyZSBvdXQgd2hpY2ggb25lIGlzIGNsb3NlciBhbmQgbGV0IHRoYXQgdHdlZW4gbGl2ZS5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0d2VlblRvKGVuZFNjcm9sbCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogc25hcER1ckNsYW1wKF9hYnMoTWF0aC5tYXgoX2FicyhuYXR1cmFsRW5kIC0gdG90YWxQcm9ncmVzcyksIF9hYnMoZW5kVmFsdWUgLSB0b3RhbFByb2dyZXNzKSkgKiAwLjE4NSAvIHZlbG9jaXR5IC8gMC4wNSB8fCAwKSksXG4gICAgICAgICAgICAgIGVhc2U6IHNuYXAuZWFzZSB8fCBcInBvd2VyM1wiLFxuICAgICAgICAgICAgICBkYXRhOiBNYXRoLmFicyhlbmRTY3JvbGwgLSBzY3JvbGwpLFxuICAgICAgICAgICAgICAvLyByZWNvcmQgdGhlIGRpc3RhbmNlIHNvIHRoYXQgaWYgYW5vdGhlciBzbmFwIHR3ZWVuIG9jY3VycyAoY29uZmxpY3QpIHdlIGNhbiBwcmlvcml0aXplIHRoZSBjbG9zZXN0IHNuYXAuXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgc25hcDEgPSBzbmFwMiA9IGFuaW1hdGlvbiAmJiAhaXNUb2dnbGUgPyBhbmltYXRpb24udG90YWxQcm9ncmVzcygpIDogc2VsZi5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBvblNuYXBDb21wbGV0ZSAmJiBvblNuYXBDb21wbGV0ZShzZWxmKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgc2Nyb2xsLCBjaGFuZ2UxICogY2hhbmdlLCBlbmRTY3JvbGwgLSBzY3JvbGwgLSBjaGFuZ2UxICogY2hhbmdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0FjdGl2ZSkge1xuICAgICAgICAgIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KS5wYXVzZSgpO1xuICAgIH1cblxuICAgIGlkICYmIChfaWRzW2lkXSA9IHNlbGYpO1xuICAgIHRyaWdnZXIgPSBzZWxmLnRyaWdnZXIgPSBfdG9BcnJheSh0cmlnZ2VyIHx8IHBpbilbMF07XG4gICAgcGluID0gcGluID09PSB0cnVlID8gdHJpZ2dlciA6IF90b0FycmF5KHBpbilbMF07XG4gICAgX2lzU3RyaW5nKHRvZ2dsZUNsYXNzKSAmJiAodG9nZ2xlQ2xhc3MgPSB7XG4gICAgICB0YXJnZXRzOiB0cmlnZ2VyLFxuICAgICAgY2xhc3NOYW1lOiB0b2dnbGVDbGFzc1xuICAgIH0pO1xuXG4gICAgaWYgKHBpbikge1xuICAgICAgcGluU3BhY2luZyA9PT0gZmFsc2UgfHwgcGluU3BhY2luZyA9PT0gX21hcmdpbiB8fCAocGluU3BhY2luZyA9ICFwaW5TcGFjaW5nICYmIF9nZXRDb21wdXRlZFN0eWxlKHBpbi5wYXJlbnROb2RlKS5kaXNwbGF5ID09PSBcImZsZXhcIiA/IGZhbHNlIDogX3BhZGRpbmcpOyAvLyBpZiB0aGUgcGFyZW50IGlzIGRpc3BsYXk6IGZsZXgsIGRvbid0IGFwcGx5IHBpblNwYWNpbmcgYnkgZGVmYXVsdC5cblxuICAgICAgc2VsZi5waW4gPSBwaW47XG4gICAgICB2YXJzLmZvcmNlM0QgIT09IGZhbHNlICYmIGdzYXAuc2V0KHBpbiwge1xuICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHBpbkNhY2hlID0gZ3NhcC5jb3JlLmdldENhY2hlKHBpbik7XG5cbiAgICAgIGlmICghcGluQ2FjaGUuc3BhY2VyKSB7XG4gICAgICAgIC8vIHJlY29yZCB0aGUgc3BhY2VyIGFuZCBwaW5PcmlnaW5hbFN0YXRlIG9uIHRoZSBjYWNoZSBpbiBjYXNlIHNvbWVvbmUgdHJpZXMgcGlubmluZyB0aGUgc2FtZSBlbGVtZW50IHdpdGggTVVMVElQTEUgU2Nyb2xsVHJpZ2dlcnMgLSB3ZSBkb24ndCB3YW50IHRvIGhhdmUgbXVsdGlwbGUgc3BhY2VycyBvciByZWNvcmQgdGhlIFwib3JpZ2luYWxcIiBwaW4gc3RhdGUgYWZ0ZXIgaXQgaGFzIGFscmVhZHkgYmVlbiBhZmZlY3RlZCBieSBhbm90aGVyIFNjcm9sbFRyaWdnZXIuXG4gICAgICAgIHBpbkNhY2hlLnNwYWNlciA9IHNwYWNlciA9IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGluLXNwYWNlclwiICsgKGlkID8gXCIgcGluLXNwYWNlci1cIiArIGlkIDogXCJcIikpO1xuICAgICAgICBwaW5DYWNoZS5waW5TdGF0ZSA9IHBpbk9yaWdpbmFsU3RhdGUgPSBfZ2V0U3RhdGUocGluKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpbk9yaWdpbmFsU3RhdGUgPSBwaW5DYWNoZS5waW5TdGF0ZTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zcGFjZXIgPSBzcGFjZXIgPSBwaW5DYWNoZS5zcGFjZXI7XG4gICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKHBpbik7XG4gICAgICBzcGFjaW5nU3RhcnQgPSBjc1twaW5TcGFjaW5nICsgZGlyZWN0aW9uLm9zMl07XG4gICAgICBwaW5HZXR0ZXIgPSBnc2FwLmdldFByb3BlcnR5KHBpbik7XG4gICAgICBwaW5TZXR0ZXIgPSBnc2FwLnF1aWNrU2V0dGVyKHBpbiwgZGlyZWN0aW9uLmEsIF9weCk7IC8vIHBpbi5maXJzdENoaWxkICYmICFfbWF4U2Nyb2xsKHBpbiwgZGlyZWN0aW9uKSAmJiAocGluLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIik7IC8vIHByb3RlY3RzIGZyb20gY29sbGFwc2luZyBtYXJnaW5zLCBidXQgY2FuIGhhdmUgdW5pbnRlbmRlZCBjb25zZXF1ZW5jZXMgYXMgZGVtb25zdHJhdGVkIGhlcmU6IGh0dHBzOi8vY29kZXBlbi5pby9HcmVlblNvY2svcGVuLzFlNDJjN2E3M2JmYTQwOWQyY2YxZTE4NGU3YTQyNDhkIHNvIGl0IHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIGp1c3QgdGVsbGluZyBwZW9wbGUgdG8gc2V0IHVwIHRoZWlyIENTUyB0byBhdm9pZCB0aGUgY29sbGFwc2luZyBtYXJnaW5zIChvdmVyZmxvdzogaGlkZGVuIHwgYXV0byBpcyBqdXN0IG9uZSBvcHRpb24uIEFub3RoZXIgaXMgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50KS5cblxuICAgICAgX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgY3MpO1xuXG4gICAgICBwaW5TdGF0ZSA9IF9nZXRTdGF0ZShwaW4pO1xuICAgIH1cblxuICAgIGlmIChtYXJrZXJzKSB7XG4gICAgICBtYXJrZXJWYXJzID0gX2lzT2JqZWN0KG1hcmtlcnMpID8gX3NldERlZmF1bHRzKG1hcmtlcnMsIF9tYXJrZXJEZWZhdWx0cykgOiBfbWFya2VyRGVmYXVsdHM7XG4gICAgICBtYXJrZXJTdGFydFRyaWdnZXIgPSBfY3JlYXRlTWFya2VyKFwic2Nyb2xsZXItc3RhcnRcIiwgaWQsIHNjcm9sbGVyLCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIDApO1xuICAgICAgbWFya2VyRW5kVHJpZ2dlciA9IF9jcmVhdGVNYXJrZXIoXCJzY3JvbGxlci1lbmRcIiwgaWQsIHNjcm9sbGVyLCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIDAsIG1hcmtlclN0YXJ0VHJpZ2dlcik7XG4gICAgICBvZmZzZXQgPSBtYXJrZXJTdGFydFRyaWdnZXJbXCJvZmZzZXRcIiArIGRpcmVjdGlvbi5vcC5kMl07XG4gICAgICBtYXJrZXJTdGFydCA9IF9jcmVhdGVNYXJrZXIoXCJzdGFydFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgb2Zmc2V0KTtcbiAgICAgIG1hcmtlckVuZCA9IF9jcmVhdGVNYXJrZXIoXCJlbmRcIiwgaWQsIHNjcm9sbGVyLCBkaXJlY3Rpb24sIG1hcmtlclZhcnMsIG9mZnNldCk7XG5cbiAgICAgIGlmICghdXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBfbWFrZVBvc2l0aW9uYWJsZShzY3JvbGxlcik7XG5cbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0sIHtcbiAgICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgICAgbWFya2VyRW5kU2V0dGVyID0gZ3NhcC5xdWlja1NldHRlcihtYXJrZXJFbmRUcmlnZ2VyLCBkaXJlY3Rpb24uYSwgX3B4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLnJldmVydCA9IGZ1bmN0aW9uIChyZXZlcnQpIHtcbiAgICAgIHZhciByID0gcmV2ZXJ0ICE9PSBmYWxzZSB8fCAhc2VsZi5lbmFibGVkLFxuICAgICAgICAgIHByZXZSZWZyZXNoaW5nID0gX3JlZnJlc2hpbmc7XG5cbiAgICAgIGlmIChyICE9PSBpc1JldmVydGVkKSB7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgcHJldlNjcm9sbCA9IE1hdGgubWF4KHNlbGYuc2Nyb2xsKCksIHNlbGYuc2Nyb2xsLnJlYyB8fCAwKTsgLy8gcmVjb3JkIHRoZSBzY3JvbGwgc28gd2UgY2FuIHJldmVydCBsYXRlciAocmVwb3NpdGlvbmluZy9waW5uaW5nIHRoaW5ncyBjYW4gYWZmZWN0IHNjcm9sbCBwb3NpdGlvbikuIEluIHRoZSBzdGF0aWMgcmVmcmVzaCgpIG1ldGhvZCwgd2UgZmlyc3QgcmVjb3JkIGFsbCB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBhcyBhIHJlZmVyZW5jZS5cblxuICAgICAgICAgIHByZXZQcm9ncmVzcyA9IHNlbGYucHJvZ3Jlc3M7XG4gICAgICAgICAgcHJldkFuaW1Qcm9ncmVzcyA9IGFuaW1hdGlvbiAmJiBhbmltYXRpb24ucHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtlclN0YXJ0ICYmIFttYXJrZXJTdGFydCwgbWFya2VyRW5kLCBtYXJrZXJTdGFydFRyaWdnZXIsIG1hcmtlckVuZFRyaWdnZXJdLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5zdHlsZS5kaXNwbGF5ID0gciA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgciAmJiAoX3JlZnJlc2hpbmcgPSAxKTtcbiAgICAgICAgc2VsZi51cGRhdGUocik7IC8vIG1ha2Ugc3VyZSB0aGUgcGluIGlzIGJhY2sgaW4gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIHNvIHRoYXQgYWxsIHRoZSBtZWFzdXJlbWVudHMgYXJlIGNvcnJlY3QuXG5cbiAgICAgICAgX3JlZnJlc2hpbmcgPSBwcmV2UmVmcmVzaGluZztcbiAgICAgICAgcGluICYmIChyID8gX3N3YXBQaW5PdXQocGluLCBzcGFjZXIsIHBpbk9yaWdpbmFsU3RhdGUpIDogKCFwaW5SZXBhcmVudCB8fCAhc2VsZi5pc0FjdGl2ZSkgJiYgX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgX2dldENvbXB1dGVkU3R5bGUocGluKSwgc3BhY2VyU3RhdGUpKTtcbiAgICAgICAgaXNSZXZlcnRlZCA9IHI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYucmVmcmVzaCA9IGZ1bmN0aW9uIChzb2Z0KSB7XG4gICAgICBpZiAoX3JlZnJlc2hpbmcgfHwgIXNlbGYuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW4gJiYgc29mdCAmJiBfbGFzdFNjcm9sbFRpbWUpIHtcbiAgICAgICAgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwic2Nyb2xsRW5kXCIsIF9zb2Z0UmVmcmVzaCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfcmVmcmVzaGluZyA9IDE7XG4gICAgICBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ua2lsbCgpO1xuICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaCAmJiBhbmltYXRpb24gJiYgYW5pbWF0aW9uLnByb2dyZXNzKDApLmludmFsaWRhdGUoKTtcbiAgICAgIGlzUmV2ZXJ0ZWQgfHwgc2VsZi5yZXZlcnQoKTtcblxuICAgICAgdmFyIHNpemUgPSBnZXRTY3JvbGxlclNpemUoKSxcbiAgICAgICAgICBzY3JvbGxlckJvdW5kcyA9IGdldFNjcm9sbGVyT2Zmc2V0cygpLFxuICAgICAgICAgIG1heCA9IF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbiksXG4gICAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgICBvdGhlclBpbk9mZnNldCA9IDAsXG4gICAgICAgICAgcGFyc2VkRW5kID0gdmFycy5lbmQsXG4gICAgICAgICAgcGFyc2VkRW5kVHJpZ2dlciA9IHZhcnMuZW5kVHJpZ2dlciB8fCB0cmlnZ2VyLFxuICAgICAgICAgIHBhcnNlZFN0YXJ0ID0gdmFycy5zdGFydCB8fCAocGluIHx8ICF0cmlnZ2VyID8gXCIwIDBcIiA6IFwiMCAxMDAlXCIpLFxuICAgICAgICAgIHRyaWdnZXJJbmRleCA9IHRyaWdnZXIgJiYgTWF0aC5tYXgoMCwgX3RyaWdnZXJzLmluZGV4T2Yoc2VsZikpIHx8IDAsXG4gICAgICAgICAgaSA9IHRyaWdnZXJJbmRleCxcbiAgICAgICAgICBjcyxcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgc2Nyb2xsLFxuICAgICAgICAgIGlzVmVydGljYWwsXG4gICAgICAgICAgb3ZlcnJpZGUsXG4gICAgICAgICAgY3VyVHJpZ2dlcixcbiAgICAgICAgICBjdXJQaW4sXG4gICAgICAgICAgb3Bwb3NpdGVTY3JvbGw7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgLy8gdXNlciBtaWdodCB0cnkgdG8gcGluIHRoZSBzYW1lIGVsZW1lbnQgbW9yZSB0aGFuIG9uY2UsIHNvIHdlIG11c3QgZmluZCBhbnkgcHJpb3IgdHJpZ2dlcnMgd2l0aCB0aGUgc2FtZSBwaW4sIHJldmVydCB0aGVtLCBhbmQgZGV0ZXJtaW5lIGhvdyBsb25nIHRoZXkncmUgcGlubmluZyBzbyB0aGF0IHdlIGNhbiBvZmZzZXQgdGhpbmdzIGFwcHJvcHJpYXRlbHkuIE1ha2Ugc3VyZSB3ZSByZXZlcnQgZnJvbSBsYXN0IHRvIGZpcnN0IHNvIHRoYXQgdGhpbmdzIFwicmV3aW5kXCIgcHJvcGVybHkuXG4gICAgICAgIGN1clBpbiA9IF90cmlnZ2Vyc1tpXS5waW47XG4gICAgICAgIGN1clBpbiAmJiAoY3VyUGluID09PSB0cmlnZ2VyIHx8IGN1clBpbiA9PT0gcGluKSAmJiBfdHJpZ2dlcnNbaV0ucmV2ZXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gX3BhcnNlUG9zaXRpb24ocGFyc2VkU3RhcnQsIHRyaWdnZXIsIHNpemUsIGRpcmVjdGlvbiwgc2VsZi5zY3JvbGwoKSwgbWFya2VyU3RhcnQsIG1hcmtlclN0YXJ0VHJpZ2dlciwgc2VsZiwgc2Nyb2xsZXJCb3VuZHMsIGJvcmRlcldpZHRoLCB1c2VGaXhlZFBvc2l0aW9uLCBtYXgpIHx8IChwaW4gPyAtMC4wMDEgOiAwKTtcbiAgICAgIF9pc0Z1bmN0aW9uKHBhcnNlZEVuZCkgJiYgKHBhcnNlZEVuZCA9IHBhcnNlZEVuZChzZWxmKSk7XG5cbiAgICAgIGlmIChfaXNTdHJpbmcocGFyc2VkRW5kKSAmJiAhcGFyc2VkRW5kLmluZGV4T2YoXCIrPVwiKSkge1xuICAgICAgICBpZiAofnBhcnNlZEVuZC5pbmRleE9mKFwiIFwiKSkge1xuICAgICAgICAgIHBhcnNlZEVuZCA9IChfaXNTdHJpbmcocGFyc2VkU3RhcnQpID8gcGFyc2VkU3RhcnQuc3BsaXQoXCIgXCIpWzBdIDogXCJcIikgKyBwYXJzZWRFbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2Zmc2V0ID0gX29mZnNldFRvUHgocGFyc2VkRW5kLnN1YnN0cigyKSwgc2l6ZSk7XG4gICAgICAgICAgcGFyc2VkRW5kID0gX2lzU3RyaW5nKHBhcnNlZFN0YXJ0KSA/IHBhcnNlZFN0YXJ0IDogc3RhcnQgKyBvZmZzZXQ7IC8vIF9wYXJzZVBvc2l0aW9uIHdvbid0IGZhY3RvciBpbiB0aGUgb2Zmc2V0IGlmIHRoZSBzdGFydCBpcyBhIG51bWJlciwgc28gZG8gaXQgaGVyZS5cblxuICAgICAgICAgIHBhcnNlZEVuZFRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVuZCA9IE1hdGgubWF4KHN0YXJ0LCBfcGFyc2VQb3NpdGlvbihwYXJzZWRFbmQgfHwgKHBhcnNlZEVuZFRyaWdnZXIgPyBcIjEwMCUgMFwiIDogbWF4KSwgcGFyc2VkRW5kVHJpZ2dlciwgc2l6ZSwgZGlyZWN0aW9uLCBzZWxmLnNjcm9sbCgpICsgb2Zmc2V0LCBtYXJrZXJFbmQsIG1hcmtlckVuZFRyaWdnZXIsIHNlbGYsIHNjcm9sbGVyQm91bmRzLCBib3JkZXJXaWR0aCwgdXNlRml4ZWRQb3NpdGlvbiwgbWF4KSkgfHwgLTAuMDAxO1xuICAgICAgY2hhbmdlID0gZW5kIC0gc3RhcnQgfHwgKHN0YXJ0IC09IDAuMDEpICYmIDAuMDAxO1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgIGkgPSB0cmlnZ2VySW5kZXg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY3VyVHJpZ2dlciA9IF90cmlnZ2Vyc1tpXTtcbiAgICAgICAgY3VyUGluID0gY3VyVHJpZ2dlci5waW47XG5cbiAgICAgICAgaWYgKGN1clBpbiAmJiBjdXJUcmlnZ2VyLnN0YXJ0IC0gY3VyVHJpZ2dlci5fcGluUHVzaCA8IHN0YXJ0KSB7XG4gICAgICAgICAgY3MgPSBjdXJUcmlnZ2VyLmVuZCAtIGN1clRyaWdnZXIuc3RhcnQ7XG4gICAgICAgICAgY3VyUGluID09PSB0cmlnZ2VyICYmIChvZmZzZXQgKz0gY3MpO1xuICAgICAgICAgIGN1clBpbiA9PT0gcGluICYmIChvdGhlclBpbk9mZnNldCArPSBjcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gb2Zmc2V0O1xuICAgICAgZW5kICs9IG9mZnNldDtcbiAgICAgIHNlbGYuX3BpblB1c2ggPSBvdGhlclBpbk9mZnNldDtcblxuICAgICAgaWYgKG1hcmtlclN0YXJ0ICYmIG9mZnNldCkge1xuICAgICAgICAvLyBvZmZzZXQgdGhlIG1hcmtlcnMgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGNzID0ge307XG4gICAgICAgIGNzW2RpcmVjdGlvbi5hXSA9IFwiKz1cIiArIG9mZnNldDtcbiAgICAgICAgZ3NhcC5zZXQoW21hcmtlclN0YXJ0LCBtYXJrZXJFbmRdLCBjcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4pO1xuICAgICAgICBpc1ZlcnRpY2FsID0gZGlyZWN0aW9uID09PSBfdmVydGljYWw7XG4gICAgICAgIHNjcm9sbCA9IHNlbGYuc2Nyb2xsKCk7IC8vIHJlY2FsY3VsYXRlIGJlY2F1c2UgdGhlIHRyaWdnZXJzIGNhbiBhZmZlY3QgdGhlIHNjcm9sbFxuXG4gICAgICAgIHBpblN0YXJ0ID0gcGFyc2VGbG9hdChwaW5HZXR0ZXIoZGlyZWN0aW9uLmEpKSArIG90aGVyUGluT2Zmc2V0O1xuXG4gICAgICAgIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzKTtcblxuICAgICAgICBwaW5TdGF0ZSA9IF9nZXRTdGF0ZShwaW4pOyAvLyB0cmFuc2Zvcm1zIHdpbGwgaW50ZXJmZXJlIHdpdGggdGhlIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSBwbGFjZW1lbnQsIHNvIHJlbW92ZSB0aGVtIHRlbXBvcmFyaWx5LiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBmYWN0b3JzIGluIHRyYW5zZm9ybXMuXG5cbiAgICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhwaW4sIHRydWUpO1xuICAgICAgICBvcHBvc2l0ZVNjcm9sbCA9IHVzZUZpeGVkUG9zaXRpb24gJiYgX2dldFNjcm9sbEZ1bmMoc2Nyb2xsZXIsIGlzVmVydGljYWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCkoKTtcblxuICAgICAgICBpZiAocGluU3BhY2luZykge1xuICAgICAgICAgIHNwYWNlclN0YXRlID0gW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyLCBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCArIF9weF07XG4gICAgICAgICAgc3BhY2VyU3RhdGUudCA9IHNwYWNlcjtcbiAgICAgICAgICBpID0gcGluU3BhY2luZyA9PT0gX3BhZGRpbmcgPyBfZ2V0U2l6ZShwaW4sIGRpcmVjdGlvbikgKyBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldCA6IDA7XG4gICAgICAgICAgaSAmJiBzcGFjZXJTdGF0ZS5wdXNoKGRpcmVjdGlvbi5kLCBpICsgX3B4KTsgLy8gZm9yIGJveC1zaXppbmc6IGJvcmRlci1ib3ggKG11c3QgaW5jbHVkZSBwYWRkaW5nKS5cblxuICAgICAgICAgIF9zZXRTdGF0ZShzcGFjZXJTdGF0ZSk7XG5cbiAgICAgICAgICB1c2VGaXhlZFBvc2l0aW9uICYmIHNlbGYuc2Nyb2xsKHByZXZTY3JvbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZUZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICBvdmVycmlkZSA9IHtcbiAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCArIChpc1ZlcnRpY2FsID8gc2Nyb2xsIC0gc3RhcnQgOiBvcHBvc2l0ZVNjcm9sbCkgKyBfcHgsXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCArIChpc1ZlcnRpY2FsID8gb3Bwb3NpdGVTY3JvbGwgOiBzY3JvbGwgLSBzdGFydCkgKyBfcHgsXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgb3ZlcnJpZGVbX3dpZHRoXSA9IG92ZXJyaWRlW1wibWF4XCIgKyBfV2lkdGhdID0gTWF0aC5jZWlsKGJvdW5kcy53aWR0aCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX2hlaWdodF0gPSBvdmVycmlkZVtcIm1heFwiICsgX0hlaWdodF0gPSBNYXRoLmNlaWwoYm91bmRzLmhlaWdodCkgKyBfcHg7XG4gICAgICAgICAgb3ZlcnJpZGVbX21hcmdpbl0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1RvcF0gPSBvdmVycmlkZVtfbWFyZ2luICsgX1JpZ2h0XSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfQm90dG9tXSA9IG92ZXJyaWRlW19tYXJnaW4gKyBfTGVmdF0gPSBcIjBcIjtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZ10gPSBjc1tfcGFkZGluZ107XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfVG9wXSA9IGNzW19wYWRkaW5nICsgX1RvcF07XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmcgKyBfUmlnaHRdID0gY3NbX3BhZGRpbmcgKyBfUmlnaHRdO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0JvdHRvbV0gPSBjc1tfcGFkZGluZyArIF9Cb3R0b21dO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX0xlZnRdID0gY3NbX3BhZGRpbmcgKyBfTGVmdF07XG4gICAgICAgICAgcGluQWN0aXZlU3RhdGUgPSBfY29weVN0YXRlKHBpbk9yaWdpbmFsU3RhdGUsIG92ZXJyaWRlLCBwaW5SZXBhcmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiBtaWdodCBiZSBhZmZlY3RpbmcgdGhlIHRyYW5zZm9ybSwgc28gd2UgbXVzdCBqdW1wIHRvIHRoZSBlbmQsIGNoZWNrIHRoZSB2YWx1ZSwgYW5kIGNvbXBlbnNhdGUgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgd2hlbiBpdCBiZWNvbWVzIHVucGlubmVkLCB0aGUgcGluU2V0dGVyKCkgd2lsbCBnZXQgc2V0IHRvIGEgdmFsdWUgdGhhdCBkb2Vzbid0IGluY2x1ZGUgd2hhdGV2ZXIgdGhlIGFuaW1hdGlvbiBkaWQuXG4gICAgICAgICAgYW5pbWF0aW9uLnByb2dyZXNzKDEsIHRydWUpO1xuICAgICAgICAgIHBpbkNoYW5nZSA9IHBpbkdldHRlcihkaXJlY3Rpb24uYSkgLSBwaW5TdGFydCArIGNoYW5nZSArIG90aGVyUGluT2Zmc2V0O1xuICAgICAgICAgIGNoYW5nZSAhPT0gcGluQ2hhbmdlICYmIHBpbkFjdGl2ZVN0YXRlLnNwbGljZShwaW5BY3RpdmVTdGF0ZS5sZW5ndGggLSAyLCAyKTsgLy8gdHJhbnNmb3JtIGlzIHRoZSBsYXN0IHByb3BlcnR5L3ZhbHVlIHNldCBpbiB0aGUgc3RhdGUgQXJyYXkuIFNpbmNlIHRoZSBhbmltYXRpb24gaXMgY29udHJvbGxpbmcgdGhhdCwgd2Ugc2hvdWxkIG9taXQgaXQuXG5cbiAgICAgICAgICBhbmltYXRpb24ucHJvZ3Jlc3MoMCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGluQ2hhbmdlID0gY2hhbmdlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgJiYgc2VsZi5zY3JvbGwoKSkge1xuICAgICAgICAvLyBpdCBtYXkgYmUgSU5TSURFIGEgcGlubmVkIGVsZW1lbnQsIHNvIHdhbGsgdXAgdGhlIHRyZWUgYW5kIGxvb2sgZm9yIGFueSBlbGVtZW50cyB3aXRoIF9waW5PZmZzZXQgdG8gY29tcGVuc2F0ZSBiZWNhdXNlIGFueXRoaW5nIHdpdGggcGluU3BhY2luZyB0aGF0J3MgYWxyZWFkeSBzY3JvbGxlZCB3b3VsZCB0aHJvdyBvZmYgdGhlIG1lYXN1cmVtZW50cyBpbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBib3VuZHMgPSB0cmlnZ2VyLnBhcmVudE5vZGU7XG5cbiAgICAgICAgd2hpbGUgKGJvdW5kcyAmJiBib3VuZHMgIT09IF9ib2R5KSB7XG4gICAgICAgICAgaWYgKGJvdW5kcy5fcGluT2Zmc2V0KSB7XG4gICAgICAgICAgICBzdGFydCAtPSBib3VuZHMuX3Bpbk9mZnNldDtcbiAgICAgICAgICAgIGVuZCAtPSBib3VuZHMuX3Bpbk9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib3VuZHMgPSBib3VuZHMucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdHJpZ2dlckluZGV4OyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHJldmVydCBmcm9tIGZpcnN0IHRvIGxhc3QgdG8gbWFrZSBzdXJlIHRoaW5ncyByZWFjaCB0aGVpciBlbmQgc3RhdGUgcHJvcGVybHlcbiAgICAgICAgY3VyVHJpZ2dlciA9IF90cmlnZ2Vyc1tpXS5waW47XG4gICAgICAgIGN1clRyaWdnZXIgJiYgKGN1clRyaWdnZXIgPT09IHRyaWdnZXIgfHwgY3VyVHJpZ2dlciA9PT0gcGluKSAmJiBfdHJpZ2dlcnNbaV0ucmV2ZXJ0KGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zdGFydCA9IHN0YXJ0O1xuICAgICAgc2VsZi5lbmQgPSBlbmQ7XG4gICAgICBzY3JvbGwxID0gc2Nyb2xsMiA9IHNlbGYuc2Nyb2xsKCk7IC8vIHJlc2V0IHZlbG9jaXR5XG5cbiAgICAgIHNjcm9sbDEgPCBwcmV2U2Nyb2xsICYmIHNlbGYuc2Nyb2xsKHByZXZTY3JvbGwpO1xuICAgICAgc2VsZi5yZXZlcnQoZmFsc2UpO1xuICAgICAgX3JlZnJlc2hpbmcgPSAwO1xuICAgICAgcHJldkFuaW1Qcm9ncmVzcyAmJiBpc1RvZ2dsZSAmJiBhbmltYXRpb24ucHJvZ3Jlc3MocHJldkFuaW1Qcm9ncmVzcywgdHJ1ZSk7XG5cbiAgICAgIGlmIChwcmV2UHJvZ3Jlc3MgIT09IHNlbGYucHJvZ3Jlc3MpIHtcbiAgICAgICAgLy8gZW5zdXJlcyB0aGF0IHRoZSBkaXJlY3Rpb24gaXMgc2V0IHByb3Blcmx5ICh3aGVuIHJlZnJlc2hpbmcsIHByb2dyZXNzIGlzIHNldCBiYWNrIHRvIDAgaW5pdGlhbGx5LCB0aGVuIGJhY2sgYWdhaW4gdG8gd2hlcmV2ZXIgaXQgbmVlZHMgdG8gYmUpIGFuZCB0aGF0IGNhbGxiYWNrcyBhcmUgdHJpZ2dlcmVkLlxuICAgICAgICBzY3J1YlR3ZWVuICYmIGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKHByZXZQcm9ncmVzcywgdHJ1ZSk7IC8vIHRvIGF2b2lkIGlzc3VlcyB3aGVyZSBhbmltYXRpb24gY2FsbGJhY2tzIGxpa2Ugb25TdGFydCBhcmVuJ3QgdHJpZ2dlcmVkLlxuXG4gICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBwcmV2UHJvZ3Jlc3M7XG4gICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHBpbiAmJiBwaW5TcGFjaW5nICYmIChzcGFjZXIuX3Bpbk9mZnNldCA9IE1hdGgucm91bmQoc2VsZi5wcm9ncmVzcyAqIHBpbkNoYW5nZSkpO1xuICAgICAgb25SZWZyZXNoICYmIG9uUmVmcmVzaChzZWxmKTtcbiAgICB9O1xuXG4gICAgc2VsZi5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoc2VsZi5zY3JvbGwoKSAtIHNjcm9sbDIpIC8gKF9nZXRUaW1lKCkgLSBfdGltZTIpICogMTAwMCB8fCAwO1xuICAgIH07XG5cbiAgICBzZWxmLnVwZGF0ZSA9IGZ1bmN0aW9uIChyZXNldCwgcmVjb3JkVmVsb2NpdHkpIHtcbiAgICAgIHZhciBzY3JvbGwgPSBzZWxmLnNjcm9sbCgpLFxuICAgICAgICAgIHAgPSByZXNldCA/IDAgOiAoc2Nyb2xsIC0gc3RhcnQpIC8gY2hhbmdlLFxuICAgICAgICAgIGNsaXBwZWQgPSBwIDwgMCA/IDAgOiBwID4gMSA/IDEgOiBwIHx8IDAsXG4gICAgICAgICAgcHJldlByb2dyZXNzID0gc2VsZi5wcm9ncmVzcyxcbiAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICB3YXNBY3RpdmUsXG4gICAgICAgICAgdG9nZ2xlU3RhdGUsXG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIHN0YXRlQ2hhbmdlZCxcbiAgICAgICAgICB0b2dnbGVkO1xuXG4gICAgICBpZiAocmVjb3JkVmVsb2NpdHkpIHtcbiAgICAgICAgc2Nyb2xsMiA9IHNjcm9sbDE7XG4gICAgICAgIHNjcm9sbDEgPSBzY3JvbGw7XG5cbiAgICAgICAgaWYgKHNuYXApIHtcbiAgICAgICAgICBzbmFwMiA9IHNuYXAxO1xuICAgICAgICAgIHNuYXAxID0gYW5pbWF0aW9uICYmICFpc1RvZ2dsZSA/IGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKCkgOiBjbGlwcGVkO1xuICAgICAgICB9XG4gICAgICB9IC8vIGFudGljaXBhdGUgdGhlIHBpbm5pbmcgYSBmZXcgdGlja3MgYWhlYWQgb2YgdGltZSBiYXNlZCBvbiB2ZWxvY2l0eSB0byBhdm9pZCBhIHZpc3VhbCBnbGl0Y2ggZHVlIHRvIHRoZSBmYWN0IHRoYXQgbW9zdCBicm93c2VycyBkbyBzY3JvbGxpbmcgb24gYSBzZXBhcmF0ZSB0aHJlYWQgKG5vdCBzeW5jZWQgd2l0aCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpLlxuXG5cbiAgICAgIGFudGljaXBhdGVQaW4gJiYgIWNsaXBwZWQgJiYgcGluICYmICFfcmVmcmVzaGluZyAmJiAhX3N0YXJ0dXAgJiYgX2xhc3RTY3JvbGxUaW1lICYmIHN0YXJ0IDwgc2Nyb2xsICsgKHNjcm9sbCAtIHNjcm9sbDIpIC8gKF9nZXRUaW1lKCkgLSBfdGltZTIpICogYW50aWNpcGF0ZVBpbiAmJiAoY2xpcHBlZCA9IDAuMDAwMSk7XG5cbiAgICAgIGlmIChjbGlwcGVkICE9PSBwcmV2UHJvZ3Jlc3MgJiYgc2VsZi5lbmFibGVkKSB7XG4gICAgICAgIGlzQWN0aXZlID0gc2VsZi5pc0FjdGl2ZSA9ICEhY2xpcHBlZCAmJiBjbGlwcGVkIDwgMTtcbiAgICAgICAgd2FzQWN0aXZlID0gISFwcmV2UHJvZ3Jlc3MgJiYgcHJldlByb2dyZXNzIDwgMTtcbiAgICAgICAgdG9nZ2xlZCA9IGlzQWN0aXZlICE9PSB3YXNBY3RpdmU7XG4gICAgICAgIHN0YXRlQ2hhbmdlZCA9IHRvZ2dsZWQgfHwgISFjbGlwcGVkICE9PSAhIXByZXZQcm9ncmVzczsgLy8gY291bGQgZ28gZnJvbSBzdGFydCBhbGwgdGhlIHdheSB0byBlbmQsIHRodXMgaXQgZGlkbid0IHRvZ2dsZSBidXQgaXQgZGlkIGNoYW5nZSBzdGF0ZSBpbiBhIHNlbnNlIChtYXkgbmVlZCB0byBmaXJlIGEgY2FsbGJhY2spXG5cbiAgICAgICAgc2VsZi5kaXJlY3Rpb24gPSBjbGlwcGVkID4gcHJldlByb2dyZXNzID8gMSA6IC0xO1xuICAgICAgICBzZWxmLnByb2dyZXNzID0gY2xpcHBlZDtcblxuICAgICAgICBpZiAoIWlzVG9nZ2xlKSB7XG4gICAgICAgICAgaWYgKHNjcnViVHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCkge1xuICAgICAgICAgICAgc2NydWJUd2Vlbi52YXJzLnRvdGFsUHJvZ3Jlc3MgPSBjbGlwcGVkO1xuICAgICAgICAgICAgc2NydWJUd2Vlbi5pbnZhbGlkYXRlKCkucmVzdGFydCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb24udG90YWxQcm9ncmVzcyhjbGlwcGVkLCAhIV9yZWZyZXNoaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGluKSB7XG4gICAgICAgICAgcmVzZXQgJiYgcGluU3BhY2luZyAmJiAoc3BhY2VyLnN0eWxlW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyXSA9IHNwYWNpbmdTdGFydCk7XG5cbiAgICAgICAgICBpZiAoIXVzZUZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHBpblNldHRlcihwaW5TdGFydCArIHBpbkNoYW5nZSAqIGNsaXBwZWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGVDaGFuZ2VkKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAhcmVzZXQgJiYgY2xpcHBlZCA+IHByZXZQcm9ncmVzcyAmJiBlbmQgKyAxID4gc2Nyb2xsICYmIHNjcm9sbCArIDEgPj0gX21heFNjcm9sbChzY3JvbGxlciwgZGlyZWN0aW9uKTsgLy8gaWYgaXQncyBhdCB0aGUgVkVSWSBlbmQgb2YgdGhlIHBhZ2UsIGRvbid0IHN3aXRjaCBhd2F5IGZyb20gcG9zaXRpb246IGZpeGVkIGJlY2F1c2UgaXQncyBwb2ludGxlc3MgYW5kIGl0IGNvdWxkIGNhdXNlIGEgYnJpZWYgZmxhc2ggd2hlbiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgdXAgKHdoZW4gaXQgZ2V0cyBwaW5uZWQgYWdhaW4pXG5cbiAgICAgICAgICAgIGlmIChwaW5SZXBhcmVudCkge1xuICAgICAgICAgICAgICBpZiAoIXJlc2V0ICYmIChpc0FjdGl2ZSB8fCBhY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kcyA9IF9nZXRCb3VuZHMocGluLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgX29mZnNldCA9IHNjcm9sbCAtIHN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgcGluLnN0eWxlLnRvcCA9IGJvdW5kcy50b3AgKyAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyBfb2Zmc2V0IDogMCkgKyBfcHg7XG4gICAgICAgICAgICAgICAgcGluLnN0eWxlLmxlZnQgPSBib3VuZHMubGVmdCArIChkaXJlY3Rpb24gPT09IF92ZXJ0aWNhbCA/IDAgOiBfb2Zmc2V0KSArIF9weDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9yZXBhcmVudChwaW4sICFyZXNldCAmJiAoaXNBY3RpdmUgfHwgYWN0aW9uKSA/IF9ib2R5IDogc3BhY2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NldFN0YXRlKGlzQWN0aXZlIHx8IGFjdGlvbiA/IHBpbkFjdGl2ZVN0YXRlIDogcGluU3RhdGUpO1xuXG4gICAgICAgICAgICBwaW5DaGFuZ2UgIT09IGNoYW5nZSAmJiBjbGlwcGVkIDwgMSAmJiBpc0FjdGl2ZSB8fCBwaW5TZXR0ZXIocGluU3RhcnQgKyAoY2xpcHBlZCA9PT0gMSAmJiAhYWN0aW9uID8gcGluQ2hhbmdlIDogMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNuYXAgJiYgIXR3ZWVuVG8udHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCAmJiBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MgJiYgKHRvZ2dsZWQgfHwgb25jZSAmJiBjbGlwcGVkICYmIChjbGlwcGVkIDwgMSB8fCAhX2xpbWl0Q2FsbGJhY2tzKSkgJiYgX3RvQXJyYXkodG9nZ2xlQ2xhc3MudGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0W2lzQWN0aXZlIHx8IG9uY2UgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0odG9nZ2xlQ2xhc3MuY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7IC8vIGNsYXNzZXMgY291bGQgYWZmZWN0IHBvc2l0aW9uaW5nLCBzbyBkbyBpdCBldmVuIGlmIHJlc2V0IG9yIHJlZnJlc2hpbmcgaXMgdHJ1ZS5cblxuICAgICAgICBvblVwZGF0ZSAmJiAhaXNUb2dnbGUgJiYgIXJlc2V0ICYmIG9uVXBkYXRlKHNlbGYpO1xuXG4gICAgICAgIGlmIChzdGF0ZUNoYW5nZWQgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgdG9nZ2xlU3RhdGUgPSBjbGlwcGVkICYmICFwcmV2UHJvZ3Jlc3MgPyAwIDogY2xpcHBlZCA9PT0gMSA/IDEgOiBwcmV2UHJvZ3Jlc3MgPT09IDEgPyAyIDogMzsgLy8gMCA9IGVudGVyLCAxID0gbGVhdmUsIDIgPSBlbnRlckJhY2ssIDMgPSBsZWF2ZUJhY2sgKHdlIHByaW9yaXRpemUgdGhlIEZJUlNUIGVuY291bnRlciwgdGh1cyBpZiB5b3Ugc2Nyb2xsIHJlYWxseSBmYXN0IHBhc3QgdGhlIG9uRW50ZXIgYW5kIG9uTGVhdmUgaW4gb25lIHRpY2ssIGl0J2QgcHJpb3JpdGl6ZSBvbkVudGVyLlxuXG4gICAgICAgICAgaWYgKGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAhdG9nZ2xlZCAmJiB0b2dnbGVBY3Rpb25zW3RvZ2dsZVN0YXRlICsgMV0gIT09IFwibm9uZVwiICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSB8fCB0b2dnbGVBY3Rpb25zW3RvZ2dsZVN0YXRlXTsgLy8gaWYgaXQgZGlkbid0IHRvZ2dsZSwgdGhhdCBtZWFucyBpdCBzaG90IHJpZ2h0IHBhc3QgYW5kIHNpbmNlIHdlIHByaW9yaXRpemUgdGhlIFwiZW50ZXJcIiBhY3Rpb24sIHdlIHNob3VsZCBzd2l0Y2ggdG8gdGhlIFwibGVhdmVcIiBpbiB0aGlzIGNhc2UgKGJ1dCBvbmx5IGlmIG9uZSBpcyBkZWZpbmVkKVxuXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uICYmIChhY3Rpb24gPT09IFwiY29tcGxldGVcIiB8fCBhY3Rpb24gPT09IFwicmVzZXRcIiB8fCBhY3Rpb24gaW4gYW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKS50b3RhbFByb2dyZXNzKDEpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJlc3RhcnQodHJ1ZSkucGF1c2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25bYWN0aW9uXSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9uVXBkYXRlICYmIG9uVXBkYXRlKHNlbGYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0b2dnbGVkIHx8ICFfbGltaXRDYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIG9uIHN0YXJ0dXAsIHRoZSBwYWdlIGNvdWxkIGJlIHNjcm9sbGVkIGFuZCB3ZSBkb24ndCB3YW50IHRvIGZpcmUgY2FsbGJhY2tzIHRoYXQgZGlkbid0IHRvZ2dsZS4gRm9yIGV4YW1wbGUgb25FbnRlciBzaG91bGRuJ3QgZmlyZSBpZiB0aGUgU2Nyb2xsVHJpZ2dlciBpc24ndCBhY3R1YWxseSBlbnRlcmVkLlxuICAgICAgICAgICAgb25Ub2dnbGUgJiYgdG9nZ2xlZCAmJiBvblRvZ2dsZShzZWxmKTtcbiAgICAgICAgICAgIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gJiYgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXShzZWxmKTtcbiAgICAgICAgICAgIG9uY2UgJiYgKGNsaXBwZWQgPT09IDEgPyBzZWxmLmtpbGwoZmFsc2UsIDEpIDogY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSA9IDApOyAvLyBhIGNhbGxiYWNrIHNob3VsZG4ndCBiZSBjYWxsZWQgYWdhaW4gaWYgb25jZSBpcyB0cnVlLlxuXG4gICAgICAgICAgICBpZiAoIXRvZ2dsZWQpIHtcbiAgICAgICAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0byBnbyBjb21wbGV0ZWx5IHBhc3QsIGxpa2UgZnJvbSBiZWZvcmUgdGhlIHN0YXJ0IHRvIGFmdGVyIHRoZSBlbmQgKG9yIHZpY2UtdmVyc2EpIGluIHdoaWNoIGNhc2UgQk9USCBjYWxsYmFja3Mgc2hvdWxkIGJlIGZpcmVkIGluIHRoYXQgb3JkZXJcbiAgICAgICAgICAgICAgdG9nZ2xlU3RhdGUgPSBjbGlwcGVkID09PSAxID8gMSA6IDM7XG4gICAgICAgICAgICAgIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gJiYgY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXShzZWxmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNUb2dnbGUgJiYgb25VcGRhdGUgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgb25VcGRhdGUoc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gdXBkYXRlIGFic29sdXRlbHktcG9zaXRpb25lZCBtYXJrZXJzIChvbmx5IGlmIHRoZSBzY3JvbGxlciBpc24ndCB0aGUgdmlld3BvcnQpXG5cblxuICAgICAgaWYgKG1hcmtlckVuZFNldHRlcikge1xuICAgICAgICBtYXJrZXJTdGFydFNldHRlcihzY3JvbGwgKyAobWFya2VyU3RhcnRUcmlnZ2VyLl9pc0ZsaXBwZWQgPyAxIDogMCkpO1xuICAgICAgICBtYXJrZXJFbmRTZXR0ZXIoc2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNlbGYuZW5hYmxlZCkge1xuICAgICAgICBzZWxmLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIF9hZGRMaXN0ZW5lcihzY3JvbGxlciwgXCJyZXNpemVcIiwgX29uUmVzaXplKTtcblxuICAgICAgICBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG5cbiAgICAgICAgb25SZWZyZXNoSW5pdCAmJiBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoSW5pdFwiLCBvblJlZnJlc2hJbml0KTtcbiAgICAgICAgIWFuaW1hdGlvbiB8fCAhYW5pbWF0aW9uLmFkZCA/IHNlbGYucmVmcmVzaCgpIDogZ3NhcC5kZWxheWVkQ2FsbCgwLjAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0IHx8IGVuZCB8fCBzZWxmLnJlZnJlc2goKTtcbiAgICAgICAgfSkgJiYgKGNoYW5nZSA9IDAuMDEpICYmIChzdGFydCA9IGVuZCA9IDApOyAvLyBpZiB0aGUgYW5pbWF0aW9uIGlzIGEgdGltZWxpbmUsIGl0IG1heSBub3QgaGF2ZSBiZWVuIHBvcHVsYXRlZCB5ZXQsIHNvIGl0IHdvdWxkbid0IHJlbmRlciBhdCB0aGUgcHJvcGVyIHBsYWNlIG9uIHRoZSBmaXJzdCByZWZyZXNoKCksIHRodXMgd2Ugc2hvdWxkIHNjaGVkdWxlIG9uZSBmb3IgdGhlIG5leHQgdGljay5cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5kaXNhYmxlID0gZnVuY3Rpb24gKHJlc2V0LCBhbGxvd0FuaW1hdGlvbikge1xuICAgICAgaWYgKHNlbGYuZW5hYmxlZCkge1xuICAgICAgICByZXNldCAhPT0gZmFsc2UgJiYgc2VsZi5yZXZlcnQoKTtcbiAgICAgICAgc2VsZi5lbmFibGVkID0gc2VsZi5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ucGF1c2UoKTtcbiAgICAgICAgcHJldlNjcm9sbCA9IDA7XG4gICAgICAgIHBpbkNhY2hlICYmIChwaW5DYWNoZS51bmNhY2hlID0gMSk7XG4gICAgICAgIG9uUmVmcmVzaEluaXQgJiYgX3JlbW92ZUxpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaEluaXRcIiwgb25SZWZyZXNoSW5pdCk7XG5cbiAgICAgICAgaWYgKHNuYXBEZWxheWVkQ2FsbCkge1xuICAgICAgICAgIHNuYXBEZWxheWVkQ2FsbC5wYXVzZSgpO1xuICAgICAgICAgIHR3ZWVuVG8udHdlZW4gJiYgdHdlZW5Uby50d2Vlbi5raWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVmlld3BvcnQpIHtcbiAgICAgICAgICB2YXIgaSA9IF90cmlnZ2Vycy5sZW5ndGg7XG5cbiAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBpZiAoX3RyaWdnZXJzW2ldLnNjcm9sbGVyID09PSBzY3JvbGxlciAmJiBfdHJpZ2dlcnNbaV0gIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuOyAvL2Rvbid0IHJlbW92ZSB0aGUgbGlzdGVuZXJzIGlmIHRoZXJlIGFyZSBzdGlsbCBvdGhlciB0cmlnZ2VycyByZWZlcmVuY2luZyBpdC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoc2Nyb2xsZXIsIFwicmVzaXplXCIsIF9vblJlc2l6ZSk7XG5cbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoc2Nyb2xsZXIsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5raWxsID0gZnVuY3Rpb24gKHJldmVydCwgYWxsb3dBbmltYXRpb24pIHtcbiAgICAgIHNlbGYuZGlzYWJsZShyZXZlcnQsIGFsbG93QW5pbWF0aW9uKTtcbiAgICAgIGlkICYmIGRlbGV0ZSBfaWRzW2lkXTtcblxuICAgICAgdmFyIGkgPSBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKTtcblxuICAgICAgX3RyaWdnZXJzLnNwbGljZShpLCAxKTtcblxuICAgICAgaSA9PT0gX2kgJiYgX2RpcmVjdGlvbiA+IDAgJiYgX2ktLTsgLy8gaWYgd2UncmUgaW4gdGhlIG1pZGRsZSBvZiBhIHJlZnJlc2goKSBvciB1cGRhdGUoKSwgc3BsaWNpbmcgd291bGQgY2F1c2Ugc2tpcHMgaW4gdGhlIGluZGV4LCBzbyBhZGp1c3QuLi5cblxuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IG51bGw7XG4gICAgICAgIHJldmVydCAmJiBhbmltYXRpb24ucmVuZGVyKC0xKTtcbiAgICAgICAgYWxsb3dBbmltYXRpb24gfHwgYW5pbWF0aW9uLmtpbGwoKTtcbiAgICAgIH1cblxuICAgICAgbWFya2VyU3RhcnQgJiYgW21hcmtlclN0YXJ0LCBtYXJrZXJFbmQsIG1hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0uZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0pO1xuICAgICAgfSk7XG4gICAgICBwaW5DYWNoZSAmJiAocGluQ2FjaGUudW5jYWNoZSA9IDEpO1xuICAgIH07XG5cbiAgICBzZWxmLmVuYWJsZSgpO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3Rlcihjb3JlKSB7XG4gICAgaWYgKCFfY29yZUluaXR0ZWQpIHtcbiAgICAgIGdzYXAgPSBjb3JlIHx8IF9nZXRHU0FQKCk7XG5cbiAgICAgIGlmIChfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgIF93aW4gPSB3aW5kb3c7XG4gICAgICAgIF9kb2MgPSBkb2N1bWVudDtcbiAgICAgICAgX2RvY0VsID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIF9ib2R5ID0gX2RvYy5ib2R5O1xuICAgICAgfVxuXG4gICAgICBpZiAoZ3NhcCkge1xuICAgICAgICBfdG9BcnJheSA9IGdzYXAudXRpbHMudG9BcnJheTtcbiAgICAgICAgX2NsYW1wID0gZ3NhcC51dGlscy5jbGFtcDtcbiAgICAgICAgZ3NhcC5jb3JlLmdsb2JhbHMoXCJTY3JvbGxUcmlnZ2VyXCIsIFNjcm9sbFRyaWdnZXIpOyAvLyBtdXN0IHJlZ2lzdGVyIHRoZSBnbG9iYWwgbWFudWFsbHkgYmVjYXVzZSBpbiBJbnRlcm5ldCBFeHBsb3JlciwgZnVuY3Rpb25zIChjbGFzc2VzKSBkb24ndCBoYXZlIGEgXCJuYW1lXCIgcHJvcGVydHkuXG5cbiAgICAgICAgaWYgKF9ib2R5KSB7XG4gICAgICAgICAgX3JhZiA9IF93aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmLCAxNik7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIF9hZGRMaXN0ZW5lcihfd2luLCBcIm1vdXNld2hlZWxcIiwgX29uU2Nyb2xsKTtcblxuICAgICAgICAgIF9yb290ID0gW193aW4sIF9kb2MsIF9kb2NFbCwgX2JvZHldO1xuXG4gICAgICAgICAgX2FkZExpc3RlbmVyKF9kb2MsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7IC8vIHNvbWUgYnJvd3NlcnMgKGxpa2UgQ2hyb21lKSwgdGhlIHdpbmRvdyBzdG9wcyBkaXNwYXRjaGluZyBzY3JvbGwgZXZlbnRzIG9uIHRoZSB3aW5kb3cgaWYgeW91IHNjcm9sbCByZWFsbHkgZmFzdCwgYnV0IGl0J3MgY29uc2lzdGVudCBvbiB0aGUgZG9jdW1lbnQhXG5cblxuICAgICAgICAgIHZhciBib2R5U3R5bGUgPSBfYm9keS5zdHlsZSxcbiAgICAgICAgICAgICAgYm9yZGVyID0gYm9keVN0eWxlLmJvcmRlclRvcCxcbiAgICAgICAgICAgICAgYm91bmRzO1xuICAgICAgICAgIGJvZHlTdHlsZS5ib3JkZXJUb3AgPSBcIjFweCBzb2xpZCAjMDAwXCI7IC8vIHdvcmtzIGFyb3VuZCBhbiBpc3N1ZSB3aGVyZSBhIG1hcmdpbiBvZiBhIGNoaWxkIGVsZW1lbnQgY291bGQgdGhyb3cgb2ZmIHRoZSBib3VuZHMgb2YgdGhlIF9ib2R5LCBtYWtpbmcgaXQgc2VlbSBsaWtlIHRoZXJlJ3MgYSBtYXJnaW4gd2hlbiB0aGVyZSBhY3R1YWxseSBpc24ndC4gVGhlIGJvcmRlciBlbnN1cmVzIHRoYXQgdGhlIGJvdW5kcyBhcmUgYWNjdXJhdGUuXG5cbiAgICAgICAgICBib3VuZHMgPSBfZ2V0Qm91bmRzKF9ib2R5KTtcbiAgICAgICAgICBfdmVydGljYWwubSA9IE1hdGgucm91bmQoYm91bmRzLnRvcCArIF92ZXJ0aWNhbC5zYygpKSB8fCAwOyAvLyBhY2NvbW1vZGF0ZSB0aGUgb2Zmc2V0IG9mIHRoZSA8Ym9keT4gY2F1c2VkIGJ5IG1hcmdpbnMgYW5kL29yIHBhZGRpbmdcblxuICAgICAgICAgIF9ob3Jpem9udGFsLm0gPSBNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgX2hvcml6b250YWwuc2MoKSkgfHwgMDtcbiAgICAgICAgICBib3JkZXIgPyBib2R5U3R5bGUuYm9yZGVyVG9wID0gYm9yZGVyIDogYm9keVN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLXRvcFwiKTtcbiAgICAgICAgICBfc3luY0ludGVydmFsID0gc2V0SW50ZXJ2YWwoX3N5bmMsIDIwMCk7XG4gICAgICAgICAgZ3NhcC5kZWxheWVkQ2FsbCgwLjUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3RhcnR1cCA9IDA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIoX2RvYywgXCJ0b3VjaGNhbmNlbFwiLCBfcGFzc1Rocm91Z2gpOyAvLyBzb21lIG9sZGVyIEFuZHJvaWQgZGV2aWNlcyBpbnRlcm1pdHRlbnRseSBzdG9wIGRpc3BhdGNoaW5nIFwidG91Y2htb3ZlXCIgZXZlbnRzIGlmIHdlIGRvbid0IGxpc3RlbiBmb3IgXCJ0b3VjaGNhbmNlbFwiIG9uIHRoZSBkb2N1bWVudC5cblxuXG4gICAgICAgICAgX2FkZExpc3RlbmVyKF9ib2R5LCBcInRvdWNoc3RhcnRcIiwgX3Bhc3NUaHJvdWdoKTsgLy93b3JrcyBhcm91bmQgU2FmYXJpIGJ1ZzogaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMTQ1MC1kcmFnZ2FibGUtaW4taWZyYW1lLW9uLW1vYmlsZS1pcy1idWdneS9cblxuXG4gICAgICAgICAgX211bHRpTGlzdGVuZXIoX2FkZExpc3RlbmVyLCBfZG9jLCBcInBvaW50ZXJkb3duLHRvdWNoc3RhcnQsbW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcG9pbnRlcklzRG93biA9IDE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfbXVsdGlMaXN0ZW5lcihfYWRkTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcnVwLHRvdWNoZW5kLG1vdXNldXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wb2ludGVySXNEb3duID0gMDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90cmFuc2Zvcm1Qcm9wID0gZ3NhcC51dGlscy5jaGVja1ByZWZpeChcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICAgIF9zdGF0ZVByb3BzLnB1c2goX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgICAgICAgX2NvcmVJbml0dGVkID0gX2dldFRpbWUoKTtcbiAgICAgICAgICBfcmVzaXplRGVsYXkgPSBnc2FwLmRlbGF5ZWRDYWxsKDAuMiwgX3JlZnJlc2hBbGwpLnBhdXNlKCk7XG4gICAgICAgICAgX2F1dG9SZWZyZXNoID0gW19kb2MsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdyA9IF93aW4uaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICBoID0gX3dpbi5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgaWYgKF9kb2MuaGlkZGVuKSB7XG4gICAgICAgICAgICAgIF9wcmV2V2lkdGggPSB3O1xuICAgICAgICAgICAgICBfcHJldkhlaWdodCA9IGg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9wcmV2V2lkdGggIT09IHcgfHwgX3ByZXZIZWlnaHQgIT09IGgpIHtcbiAgICAgICAgICAgICAgX29uUmVzaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2RvYywgXCJET01Db250ZW50TG9hZGVkXCIsIF9yZWZyZXNoQWxsLCBfd2luLCBcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9sYXN0U2Nyb2xsVGltZSB8fCBfcmVmcmVzaEFsbCgpO1xuICAgICAgICAgIH0sIF93aW4sIFwicmVzaXplXCIsIF9vblJlc2l6ZV07XG5cbiAgICAgICAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoKF9hZGRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2NvcmVJbml0dGVkO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMgPSBmdW5jdGlvbiBkZWZhdWx0cyhjb25maWcpIHtcbiAgICBmb3IgKHZhciBwIGluIGNvbmZpZykge1xuICAgICAgX2RlZmF1bHRzW3BdID0gY29uZmlnW3BdO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgIF9lbmFibGVkID0gMDtcblxuICAgIF90cmlnZ2Vycy5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gdHJpZ2dlci5raWxsKDEpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKHZhcnMpIHtcbiAgICBcImxpbWl0Q2FsbGJhY2tzXCIgaW4gdmFycyAmJiAoX2xpbWl0Q2FsbGJhY2tzID0gISF2YXJzLmxpbWl0Q2FsbGJhY2tzKTtcbiAgICB2YXIgbXMgPSB2YXJzLnN5bmNJbnRlcnZhbDtcbiAgICBtcyAmJiBjbGVhckludGVydmFsKF9zeW5jSW50ZXJ2YWwpIHx8IChfc3luY0ludGVydmFsID0gbXMpICYmIHNldEludGVydmFsKF9zeW5jLCBtcyk7XG4gICAgXCJhdXRvUmVmcmVzaEV2ZW50c1wiIGluIHZhcnMgJiYgKF9pdGVyYXRlQXV0b1JlZnJlc2goX3JlbW92ZUxpc3RlbmVyKSB8fCBfaXRlcmF0ZUF1dG9SZWZyZXNoKF9hZGRMaXN0ZW5lciwgdmFycy5hdXRvUmVmcmVzaEV2ZW50cyB8fCBcIm5vbmVcIikpO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuc2Nyb2xsZXJQcm94eSA9IGZ1bmN0aW9uIHNjcm9sbGVyUHJveHkodGFyZ2V0LCB2YXJzKSB7XG4gICAgdmFyIHQgPSBfdG9BcnJheSh0YXJnZXQpWzBdO1xuXG4gICAgX2lzVmlld3BvcnQodCkgPyBfcHJveGllcy51bnNoaWZ0KF93aW4sIHZhcnMsIF9ib2R5LCB2YXJzLCBfZG9jRWwsIHZhcnMpIDogX3Byb3hpZXMudW5zaGlmdCh0LCB2YXJzKTtcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLm1hdGNoTWVkaWEgPSBmdW5jdGlvbiBtYXRjaE1lZGlhKHZhcnMpIHtcbiAgICB2YXIgbXEsIHAsIGksIGZ1bmMsIHJlc3VsdDtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBpID0gX21lZGlhLmluZGV4T2YocCk7XG4gICAgICBmdW5jID0gdmFyc1twXTtcbiAgICAgIF9jcmVhdGluZ01lZGlhID0gcDtcblxuICAgICAgaWYgKHAgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXEgPSBfd2luLm1hdGNoTWVkaWEocCk7XG5cbiAgICAgICAgaWYgKG1xKSB7XG4gICAgICAgICAgbXEubWF0Y2hlcyAmJiAocmVzdWx0ID0gZnVuYygpKTtcblxuICAgICAgICAgIGlmICh+aSkge1xuICAgICAgICAgICAgX21lZGlhW2kgKyAxXSA9IF9jb21iaW5lRnVuYyhfbWVkaWFbaSArIDFdLCBmdW5jKTtcbiAgICAgICAgICAgIF9tZWRpYVtpICsgMl0gPSBfY29tYmluZUZ1bmMoX21lZGlhW2kgKyAyXSwgcmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSA9IF9tZWRpYS5sZW5ndGg7XG5cbiAgICAgICAgICAgIF9tZWRpYS5wdXNoKHAsIGZ1bmMsIHJlc3VsdCk7XG5cbiAgICAgICAgICAgIG1xLmFkZExpc3RlbmVyID8gbXEuYWRkTGlzdGVuZXIoX29uTWVkaWFDaGFuZ2UpIDogbXEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBfb25NZWRpYUNoYW5nZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGluZ01lZGlhID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gX21lZGlhO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuY2xlYXJNYXRjaE1lZGlhID0gZnVuY3Rpb24gY2xlYXJNYXRjaE1lZGlhKHF1ZXJ5KSB7XG4gICAgcXVlcnkgfHwgKF9tZWRpYS5sZW5ndGggPSAwKTtcbiAgICBxdWVyeSA9IF9tZWRpYS5pbmRleE9mKHF1ZXJ5KTtcbiAgICBxdWVyeSA+PSAwICYmIF9tZWRpYS5zcGxpY2UocXVlcnksIDMpO1xuICB9O1xuXG4gIHJldHVybiBTY3JvbGxUcmlnZ2VyO1xufSgpO1xuU2Nyb2xsVHJpZ2dlci52ZXJzaW9uID0gXCIzLjUuMFwiO1xuXG5TY3JvbGxUcmlnZ2VyLnNhdmVTdHlsZXMgPSBmdW5jdGlvbiAodGFyZ2V0cykge1xuICByZXR1cm4gdGFyZ2V0cyA/IF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBpID0gX3NhdmVkU3R5bGVzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIGkgPj0gMCAmJiBfc2F2ZWRTdHlsZXMuc3BsaWNlKGksIDQpO1xuXG4gICAgX3NhdmVkU3R5bGVzLnB1c2godGFyZ2V0LCB0YXJnZXQuc3R5bGUuY3NzVGV4dCwgZ3NhcC5jb3JlLmdldENhY2hlKHRhcmdldCksIF9jcmVhdGluZ01lZGlhKTtcbiAgfSkgOiBfc2F2ZWRTdHlsZXM7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJldmVydCA9IGZ1bmN0aW9uIChzb2Z0LCBtZWRpYSkge1xuICByZXR1cm4gX3JldmVydEFsbCghc29mdCwgbWVkaWEpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5jcmVhdGUgPSBmdW5jdGlvbiAodmFycywgYW5pbWF0aW9uKSB7XG4gIHJldHVybiBuZXcgU2Nyb2xsVHJpZ2dlcih2YXJzLCBhbmltYXRpb24pO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5yZWZyZXNoID0gZnVuY3Rpb24gKHNhZmUpIHtcbiAgcmV0dXJuIHNhZmUgPyBfb25SZXNpemUoKSA6IF9yZWZyZXNoQWxsKHRydWUpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci51cGRhdGUgPSBfdXBkYXRlQWxsO1xuXG5TY3JvbGxUcmlnZ2VyLm1heFNjcm9sbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBob3Jpem9udGFsKSB7XG4gIHJldHVybiBfbWF4U2Nyb2xsKGVsZW1lbnQsIGhvcml6b250YWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmdldFNjcm9sbEZ1bmMgPSBmdW5jdGlvbiAoZWxlbWVudCwgaG9yaXpvbnRhbCkge1xuICByZXR1cm4gX2dldFNjcm9sbEZ1bmMoX3RvQXJyYXkoZWxlbWVudClbMF0sIGhvcml6b250YWwgPyBfaG9yaXpvbnRhbCA6IF92ZXJ0aWNhbCk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmdldEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIF9pZHNbaWRdO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfdHJpZ2dlcnMuc2xpY2UoMCk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmlzU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFfbGFzdFNjcm9sbFRpbWU7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdIHx8IChfbGlzdGVuZXJzW3R5cGVdID0gW10pO1xuICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSxcbiAgICAgIGkgPSBhICYmIGEuaW5kZXhPZihjYWxsYmFjayk7XG4gIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuYmF0Y2ggPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycykge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICB2YXJzQ29weSA9IHt9LFxuICAgICAgaW50ZXJ2YWwgPSB2YXJzLmludGVydmFsIHx8IDAuMDE2LFxuICAgICAgYmF0Y2hNYXggPSB2YXJzLmJhdGNoTWF4IHx8IDFlOSxcbiAgICAgIHByb3h5Q2FsbGJhY2sgPSBmdW5jdGlvbiBwcm94eUNhbGxiYWNrKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHRyaWdnZXJzID0gW10sXG4gICAgICAgIGRlbGF5ID0gZ3NhcC5kZWxheWVkQ2FsbChpbnRlcnZhbCwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2soZWxlbWVudHMsIHRyaWdnZXJzKTtcbiAgICAgIGVsZW1lbnRzID0gW107XG4gICAgICB0cmlnZ2VycyA9IFtdO1xuICAgIH0pLnBhdXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmKSB7XG4gICAgICBlbGVtZW50cy5sZW5ndGggfHwgZGVsYXkucmVzdGFydCh0cnVlKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goc2VsZi50cmlnZ2VyKTtcbiAgICAgIHRyaWdnZXJzLnB1c2goc2VsZik7XG4gICAgICBiYXRjaE1heCA8PSBlbGVtZW50cy5sZW5ndGggJiYgZGVsYXkucHJvZ3Jlc3MoMSk7XG4gICAgfTtcbiAgfSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICB2YXJzQ29weVtwXSA9IHAuc3Vic3RyKDAsIDIpID09PSBcIm9uXCIgJiYgX2lzRnVuY3Rpb24odmFyc1twXSkgJiYgcCAhPT0gXCJvblJlZnJlc2hJbml0XCIgPyBwcm94eUNhbGxiYWNrKHAsIHZhcnNbcF0pIDogdmFyc1twXTtcbiAgfVxuXG4gIGlmIChfaXNGdW5jdGlvbihiYXRjaE1heCkpIHtcbiAgICBiYXRjaE1heCA9IGJhdGNoTWF4KCk7XG5cbiAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJyZWZyZXNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYXRjaE1heCA9IHZhcnMuYmF0Y2hNYXgoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgIGZvciAocCBpbiB2YXJzQ29weSkge1xuICAgICAgY29uZmlnW3BdID0gdmFyc0NvcHlbcF07XG4gICAgfVxuXG4gICAgY29uZmlnLnRyaWdnZXIgPSB0YXJnZXQ7XG4gICAgcmVzdWx0LnB1c2goU2Nyb2xsVHJpZ2dlci5jcmVhdGUoY29uZmlnKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnNvcnQgPSBmdW5jdGlvbiAoZnVuYykge1xuICByZXR1cm4gX3RyaWdnZXJzLnNvcnQoZnVuYyB8fCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiAoYS52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYgKyBhLnN0YXJ0IC0gKGIuc3RhcnQgKyAoYi52YXJzLnJlZnJlc2hQcmlvcml0eSB8fCAwKSAqIC0xZTYpO1xuICB9KTtcbn07XG5cbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmV4cG9ydCB7IFNjcm9sbFRyaWdnZXIgYXMgZGVmYXVsdCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dzYXAvU2Nyb2xsVHJpZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3MgRnJvbnRlbmQgSlNcbiAqXG4gKiBBbGwgYmxvY2tzIGZyb250ZW5kIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCBcIi4vYmxvY2tzL2Jsb2NrLWdyaWQtY29udGFpbmVyL2Zyb250ZW5kLmpzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC9mcm9udGVuZC5qc1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBCbG9jayBGcm9udGVuZFxuICovXG5cbmZ1bmN0aW9uIHJlYWR5WW91dHViZShwbGF5ZXJJRCwgdmlkZW9JRCkge1xuXHRpZiAoWVQgJiYgWVQuUGxheWVyKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0bGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIocGxheWVySUQsIHtcblx0XHRcdHBsYXllclZhcnM6IHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGNvbnRyb2xzOiAwLFxuXHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdGF1dG9oaWRlOiAxLFxuXHRcdFx0XHR3bW9kZTogXCJvcGFxdWVcIixcblx0XHRcdFx0aGQ6IDEsXG5cdFx0XHRcdGVuYWJsZWpzYXBpOiAxLFxuXHRcdFx0XHRsb29wOiAxLFxuXHRcdFx0XHRzaG93aW5mbzogMCxcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMyxcblx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRtb2Rlc3RicmFuZGluZzogMSxcblx0XHRcdFx0cGxheWxpc3Q6IHZpZGVvSURcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0lkOiB2aWRlb0lELFxuXHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdG9uUmVhZHk6IG9uUGxheWVyUmVhZHlcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVhZHlZb3V0dWJlKHBsYXllcklELCB2aWRlb0lEKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5cbi8vIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSB2aWRlbyBwbGF5ZXIgaXMgcmVhZHkuXG5mdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG5cdGV2ZW50LnRhcmdldC5tdXRlKCk7XG5cdGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcblxuXHQvLyB0aGlzIC5jOS12aWRlbyBlbGVtZW50IC0+IC5jOS1lbWJlZC1jb250YWluZXIgLT4gLmM5LXZpZGVvLWNvbnRhaW5lclxuXHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG5cdGV2ZW50LnRhcmdldC5mLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cdGxldCBlbWJlZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYzktdmlkZW9cIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZW1iZWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHBsYXllcklEID0gZW1iZWRzW2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdGxldCBpZCA9IGVtYmVkc1tpXS5nZXRBdHRyaWJ1dGUoXCJ2aWRlby1pZFwiKTtcblx0XHRyZWFkeVlvdXR1YmUocGxheWVySUQsIGlkKTtcblx0fVxuXG5cdC8vIGlmIHZpZGVvIGN1c3RvbSBlbGVtZW50cyBhcmUgcHJlc2VudFxuXHRjb25zdCAkID0gd2luZG93LmpRdWVyeTtcblxuXHQkKFwiLmM5LXZpZGVvLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGNoZWNrID0gJChcIi5jOS12aWRlby1jdXN0b21cIiwgdGhpcykubGVuZ3RoO1xuXHRcdGlmICgwIDwgY2hlY2spIHtcblx0XHRcdCQoXCIuYzktdmlkZW8tY3VzdG9tXCIsIHRoaXMpLm9uKFwiY2FucGxheVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChzZWxmKS5jc3MoeyBvcGFjaXR5OiAxIH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9ibG9jay1ncmlkLWNvbnRhaW5lci9mcm9udGVuZC5qcyIsIi8qKlxuICogQW5pbWF0aW9ucyBGcm9udGVuZFxuICovXG5cbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUNvbmZpZyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHQvLyBzaW1wbGUgdGltZWxpbmUgc2V0dXBzXG5cdGNvbnN0IGdzYXAgPSB3aW5kb3cuZ3NhcDtcblx0Y29uc3QgU2Nyb2xsVHJpZ2dlciA9IHdpbmRvdy5TY3JvbGxUcmlnZ2VyO1xuXHQvLyByZWdpc3RlciBwbHVnaW5cblx0Z3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuXHRjb25zdCBhbmltYXRlVGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jOS1hbmltYXRlXVwiKTtcblx0Y29uc29sZS5sb2coYW5pbWF0ZVRhcmdldHMpO1xuXG5cdC8vc2V0dXAgZ3NhcFxuXHRmb3IgKGxldCBlbGVtZW50IG9mIGFuaW1hdGVUYXJnZXRzKSB7XG5cdFx0Y29uc3QgYW5pbWF0ZVZhbCA9IGVsZW1lbnQuZGF0YXNldC5jOUFuaW1hdGU7XG5cdFx0Y29uc3QgYW5pbWF0ZURlbGF5ID0gZWxlbWVudC5kYXRhc2V0LmM5QW5pbWF0ZURlbGF5O1xuXHRcdGNvbnN0IGFuaW1hdGVTcGVlZCA9IGVsZW1lbnQuZGF0YXNldC5jOUFuaW1hdGVTcGVlZDtcblx0XHRjb25zdCBhbmltYXRlU2NydWIgPSBlbGVtZW50LmRhdGFzZXQuYzlBbmltYXRlU2NydWI7XG5cdFx0Ly8gY29uc29sZS5sb2coYW5pbWF0ZVZhbCwgYW5pbWF0ZURlbGF5LCBhbmltYXRlU3BlZWQpO1xuXHRcdGNvbnN0IGN1c3RvbUNvbmZpZyA9IGNyZWF0ZUN1c3RvbUNvbmZpZyhcblx0XHRcdGFuaW1hdGVWYWwsXG5cdFx0XHRhbmltYXRlRGVsYXksXG5cdFx0XHRhbmltYXRlU3BlZWRcblx0XHQpO1xuXHRcdGdzYXAuZnJvbVRvKGVsZW1lbnQsIGN1c3RvbUNvbmZpZ1swXSwge1xuXHRcdFx0Li4uY3VzdG9tQ29uZmlnWzFdLFxuXHRcdFx0c2Nyb2xsVHJpZ2dlcjoge1xuXHRcdFx0XHR0cmlnZ2VyOiBlbGVtZW50LFxuXHRcdFx0XHRzY3J1YjogYW5pbWF0ZVNjcnViXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy1wYW5lbC9mcm9udGVuZC5qcyIsIi8qIVxuICogQ1NTUGx1Z2luIDMuNS4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDIwLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgZ3NhcCwgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIGdldFVuaXQsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9jaGVja1BsdWdpbiwgX3JlcGxhY2VSYW5kb20sIF9wbHVnaW5zLCBHU0NhY2hlLCBQcm9wVHdlZW4sIF9jb25maWcsIF90aWNrZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gLy9mb3IgdGhlIGNvbW1lbnRlZC1vdXQgY2xhc3NOYW1lIGZlYXR1cmUuXG59IGZyb20gXCIuL2dzYXAtY29yZS5qc1wiO1xuXG52YXIgX3dpbixcbiAgICBfZG9jLFxuICAgIF9kb2NFbGVtZW50LFxuICAgIF9wbHVnaW5Jbml0dGVkLFxuICAgIF90ZW1wRGl2LFxuICAgIF90ZW1wRGl2U3R5bGVyLFxuICAgIF9yZWNlbnRTZXR0ZXJQbHVnaW4sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcHMgPSB7fSxcbiAgICBfUkFEMkRFRyA9IDE4MCAvIE1hdGguUEksXG4gICAgX0RFRzJSQUQgPSBNYXRoLlBJIC8gMTgwLFxuICAgIF9hdGFuMiA9IE1hdGguYXRhbjIsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfY2Fwc0V4cCA9IC8oW0EtWl0pL2csXG4gICAgX2hvcml6b250YWxFeHAgPSAvKD86bGVmdHxyaWdodHx3aWR0aHxtYXJnaW58cGFkZGluZ3x4KS9pLFxuICAgIF9jb21wbGV4RXhwID0gL1tcXHMsXFwoXVxcUy8sXG4gICAgX3Byb3BlcnR5QWxpYXNlcyA9IHtcbiAgYXV0b0FscGhhOiBcIm9wYWNpdHksdmlzaWJpbGl0eVwiLFxuICBzY2FsZTogXCJzY2FsZVgsc2NhbGVZXCIsXG4gIGFscGhhOiBcIm9wYWNpdHlcIlxufSxcbiAgICBfcmVuZGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFdpdGhFbmQgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFdpdGhFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA9PT0gMSA/IGRhdGEuZSA6IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIC8vaWYgdW5pdHMgY2hhbmdlLCB3ZSBuZWVkIGEgd2F5IHRvIHJlbmRlciB0aGUgb3JpZ2luYWwgdW5pdC92YWx1ZSB3aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZyAocmF0aW86MClcbl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJSb3VuZGVkQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLnMgKyBkYXRhLmMgKiByYXRpbztcbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIH5+KHZhbHVlICsgKHZhbHVlIDwgMCA/IC0uNSA6IC41KSkgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBkYXRhLmUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gIT09IDEgPyBkYXRhLmIgOiBkYXRhLmUsIGRhdGEpO1xufSxcbiAgICBfc2V0dGVyQ1NTU3R5bGUgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTU3R5bGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckNTU1Byb3AgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTUHJvcCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXBbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwLnNjYWxlWCA9IHRhcmdldC5fZ3NhcC5zY2FsZVkgPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGUuc2NhbGVYID0gY2FjaGUuc2NhbGVZID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3AgPSBcInRyYW5zZm9ybVwiLFxuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiLFxuICAgIF9zdXBwb3J0czNELFxuICAgIF9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodHlwZSwgbnMpIHtcbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnROUyA/IF9kb2MuY3JlYXRlRWxlbWVudE5TKChucyB8fCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIikucmVwbGFjZSgvXmh0dHBzLywgXCJodHRwXCIpLCB0eXBlKSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIHNlcnZlcnMgc3dhcCBpbiBodHRwcyBmb3IgaHR0cCBpbiB0aGUgbmFtZXNwYWNlIHdoaWNoIGNhbiBicmVhayB0aGluZ3MsIG1ha2luZyBcInN0eWxlXCIgaW5hY2Nlc3NpYmxlLlxuXG4gIHJldHVybiBlLnN0eWxlID8gZSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIGVudmlyb25tZW50cyB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIGVsZW1lbnQncyBzdHlsZSB3aGVuIGNyZWF0ZWQgd2l0aCBhIG5hbWVzcGFjZSBpbiB3aGljaCBjYXNlIHdlIGRlZmF1bHQgdG8gdGhlIHN0YW5kYXJkIGNyZWF0ZUVsZW1lbnQoKSB0byB3b3JrIGFyb3VuZCB0aGUgaXNzdWUuIEFsc28gbm90ZSB0aGF0IHdoZW4gR1NBUCBpcyBlbWJlZGRlZCBkaXJlY3RseSBpbnNpZGUgYW4gU1ZHIGZpbGUsIGNyZWF0ZUVsZW1lbnQoKSB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIHN0eWxlIG9iamVjdCBpbiBGaXJlZm94IChzZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDIxNS1wcm9ibGVtLXVzaW5nLXR3ZWVubWF4LWluLXN0YW5kYWxvbmUtc2VsZi1jb250YWluaW5nLXN2Zy1maWxlLWVyci1jYW5ub3Qtc2V0LXByb3BlcnR5LWNzc3RleHQtb2YtdW5kZWZpbmVkLykuXG59LFxuICAgIF9nZXRDb21wdXRlZFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgc2tpcFByZWZpeEZhbGxiYWNrKSB7XG4gIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgcmV0dXJuIGNzW3Byb3BlcnR5XSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpIHx8ICFza2lwUHJlZml4RmFsbGJhY2sgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5KSB8fCBwcm9wZXJ0eSwgMSkgfHwgXCJcIjsgLy9jc3MgdmFyaWFibGVzIG1heSBub3QgbmVlZCBjYXBzIHN3YXBwZWQgb3V0IGZvciBkYXNoZXMgYW5kIGxvd2VyY2FzZS5cbn0sXG4gICAgX3ByZWZpeGVzID0gXCJPLE1veixtcyxNcyxXZWJraXRcIi5zcGxpdChcIixcIiksXG4gICAgX2NoZWNrUHJvcFByZWZpeCA9IGZ1bmN0aW9uIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHksIGVsZW1lbnQsIHByZWZlclByZWZpeCkge1xuICB2YXIgZSA9IGVsZW1lbnQgfHwgX3RlbXBEaXYsXG4gICAgICBzID0gZS5zdHlsZSxcbiAgICAgIGkgPSA1O1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBzICYmICFwcmVmZXJQcmVmaXgpIHtcbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBwcm9wZXJ0eSA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyKDEpO1xuXG4gIHdoaWxlIChpLS0gJiYgIShfcHJlZml4ZXNbaV0gKyBwcm9wZXJ0eSBpbiBzKSkge31cblxuICByZXR1cm4gaSA8IDAgPyBudWxsIDogKGkgPT09IDMgPyBcIm1zXCIgOiBpID49IDAgPyBfcHJlZml4ZXNbaV0gOiBcIlwiKSArIHByb3BlcnR5O1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoKSB7XG4gIGlmIChfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gX3dpbi5kb2N1bWVudDtcbiAgICBfZG9jRWxlbWVudCA9IF9kb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIF90ZW1wRGl2ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIikgfHwge1xuICAgICAgc3R5bGU6IHt9XG4gICAgfTtcbiAgICBfdGVtcERpdlN0eWxlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIF90cmFuc2Zvcm1Qcm9wID0gX2NoZWNrUHJvcFByZWZpeChfdHJhbnNmb3JtUHJvcCk7XG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCI7XG4gICAgX3RlbXBEaXYuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLXdpZHRoOjA7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOjBcIjsgLy9tYWtlIHN1cmUgdG8gb3ZlcnJpZGUgY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgbWF5IGNvbnRhbWluYXRlIG1lYXN1cmVtZW50cywgaW4gY2FzZSB0aGUgdXNlciBoYXMgb3ZlcnJlYWNoaW5nIHN0eWxlIHNoZWV0cy5cblxuICAgIF9zdXBwb3J0czNEID0gISFfY2hlY2tQcm9wUHJlZml4KFwicGVyc3BlY3RpdmVcIik7XG4gICAgX3BsdWdpbkluaXR0ZWQgPSAxO1xuICB9XG59LFxuICAgIF9nZXRCQm94SGFjayA9IGZ1bmN0aW9uIF9nZXRCQm94SGFjayhzd2FwSWZQb3NzaWJsZSkge1xuICAvL3dvcmtzIGFyb3VuZCBpc3N1ZXMgaW4gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB0aGF0IGRvbid0IGNvcnJlY3RseSByZXBvcnQgZ2V0QkJveCgpIG9uIFNWRyBlbGVtZW50cyBpbnNpZGUgYSA8ZGVmcz4gZWxlbWVudCBhbmQvb3IgPG1hc2s+LiBXZSB0cnkgY3JlYXRpbmcgYW4gU1ZHLCBhZGRpbmcgaXQgdG8gdGhlIGRvY3VtZW50RWxlbWVudCBhbmQgdG9zcyB0aGUgZWxlbWVudCBpbiB0aGVyZSBzbyB0aGF0IGl0J3MgZGVmaW5pdGVseSBwYXJ0IG9mIHRoZSByZW5kZXJpbmcgdHJlZSwgdGhlbiBncmFiIHRoZSBiYm94IGFuZCBpZiBpdCB3b3Jrcywgd2UgYWN0dWFsbHkgc3dhcCBvdXQgdGhlIG9yaWdpbmFsIGdldEJCb3goKSBtZXRob2QgZm9yIG91ciBvd24gdGhhdCBkb2VzIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW5ldmVyIGdldEJCb3ggaXMgbmVlZGVkLiBUaGlzIGhlbHBzIGVuc3VyZSB0aGF0IHBlcmZvcm1hbmNlIGlzIG9wdGltYWwgKG9ubHkgZG8gYWxsIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnkuLi5tb3N0IGVsZW1lbnRzIGRvbid0IG5lZWQgaXQpLlxuICB2YXIgc3ZnID0gX2NyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgdGhpcy5vd25lclNWR0VsZW1lbnQgJiYgdGhpcy5vd25lclNWR0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwieG1sbnNcIikgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSxcbiAgICAgIG9sZFBhcmVudCA9IHRoaXMucGFyZW50Tm9kZSxcbiAgICAgIG9sZFNpYmxpbmcgPSB0aGlzLm5leHRTaWJsaW5nLFxuICAgICAgb2xkQ1NTID0gdGhpcy5zdHlsZS5jc3NUZXh0LFxuICAgICAgYmJveDtcblxuICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGlmIChzd2FwSWZQb3NzaWJsZSkge1xuICAgIHRyeSB7XG4gICAgICBiYm94ID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICB0aGlzLl9nc2FwQkJveCA9IHRoaXMuZ2V0QkJveDsgLy9zdG9yZSB0aGUgb3JpZ2luYWxcblxuICAgICAgdGhpcy5nZXRCQm94ID0gX2dldEJCb3hIYWNrO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0gZWxzZSBpZiAodGhpcy5fZ3NhcEJCb3gpIHtcbiAgICBiYm94ID0gdGhpcy5fZ3NhcEJCb3goKTtcbiAgfVxuXG4gIGlmIChvbGRQYXJlbnQpIHtcbiAgICBpZiAob2xkU2libGluZykge1xuICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBvbGRTaWJsaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHN2Zyk7XG5cbiAgdGhpcy5zdHlsZS5jc3NUZXh0ID0gb2xkQ1NTO1xuICByZXR1cm4gYmJveDtcbn0sXG4gICAgX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyA9IGZ1bmN0aW9uIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBhdHRyaWJ1dGVzQXJyYXkpIHtcbiAgdmFyIGkgPSBhdHRyaWJ1dGVzQXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pO1xuICAgIH1cbiAgfVxufSxcbiAgICBfZ2V0QkJveCA9IGZ1bmN0aW9uIF9nZXRCQm94KHRhcmdldCkge1xuICB2YXIgYm91bmRzO1xuXG4gIHRyeSB7XG4gICAgYm91bmRzID0gdGFyZ2V0LmdldEJCb3goKTsgLy9GaXJlZm94IHRocm93cyBlcnJvcnMgaWYgeW91IHRyeSBjYWxsaW5nIGdldEJCb3goKSBvbiBhbiBTVkcgZWxlbWVudCB0aGF0J3Mgbm90IHJlbmRlcmVkIChsaWtlIGluIGEgPHN5bWJvbD4gb3IgPGRlZnM+KS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjEyMTE4XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKTtcbiAgfVxuXG4gIGJvdW5kcyAmJiAoYm91bmRzLndpZHRoIHx8IGJvdW5kcy5oZWlnaHQpIHx8IHRhcmdldC5nZXRCQm94ID09PSBfZ2V0QkJveEhhY2sgfHwgKGJvdW5kcyA9IF9nZXRCQm94SGFjay5jYWxsKHRhcmdldCwgdHJ1ZSkpOyAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCkgbWlzcmVwb3J0IHRoZSBib3VuZHMgaWYgdGhlIGVsZW1lbnQgaGFzIHplcm8gd2lkdGggYW5kIGhlaWdodCAoaXQganVzdCBhc3N1bWVzIGl0J3MgYXQgeDowLCB5OjApLCB0aHVzIHdlIG5lZWQgdG8gbWFudWFsbHkgZ3JhYiB0aGUgcG9zaXRpb24gaW4gdGhhdCBjYXNlLlxuXG4gIHJldHVybiBib3VuZHMgJiYgIWJvdW5kcy53aWR0aCAmJiAhYm91bmRzLnggJiYgIWJvdW5kcy55ID8ge1xuICAgIHg6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieFwiLCBcImN4XCIsIFwieDFcIl0pIHx8IDAsXG4gICAgeTogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ5XCIsIFwiY3lcIiwgXCJ5MVwiXSkgfHwgMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSA6IGJvdW5kcztcbn0sXG4gICAgX2lzU1ZHID0gZnVuY3Rpb24gX2lzU1ZHKGUpIHtcbiAgcmV0dXJuICEhKGUuZ2V0Q1RNICYmICghZS5wYXJlbnROb2RlIHx8IGUub3duZXJTVkdFbGVtZW50KSAmJiBfZ2V0QkJveChlKSk7XG59LFxuICAgIC8vcmVwb3J0cyBpZiB0aGUgZWxlbWVudCBpcyBhbiBTVkcgb24gd2hpY2ggZ2V0QkJveCgpIGFjdHVhbGx5IHdvcmtzXG5fcmVtb3ZlUHJvcGVydHkgPSBmdW5jdGlvbiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHkpIHtcbiAgICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgICBpZiAocHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCkge1xuICAgICAgcHJvcGVydHkgPSBfdHJhbnNmb3JtUHJvcDtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eS5zdWJzdHIoMCwgMikgPT09IFwibXNcIiB8fCBwcm9wZXJ0eS5zdWJzdHIoMCwgNikgPT09IFwid2Via2l0XCIpIHtcbiAgICAgICAgLy9NaWNyb3NvZnQgYW5kIHNvbWUgV2Via2l0IGJyb3dzZXJzIGRvbid0IGNvbmZvcm0gdG8gdGhlIHN0YW5kYXJkIG9mIGNhcGl0YWxpemluZyB0aGUgZmlyc3QgcHJlZml4IGNoYXJhY3Rlciwgc28gd2UgYWRqdXN0IHNvIHRoYXQgd2hlbiB3ZSBwcmVmaXggdGhlIGNhcHMgd2l0aCBhIGRhc2gsIGl0J3MgY29ycmVjdCAob3RoZXJ3aXNlIGl0J2QgYmUgXCJtcy10cmFuc2Zvcm1cIiBpbnN0ZWFkIG9mIFwiLW1zLXRyYW5zZm9ybVwiIGZvciBJRTksIGZvciBleGFtcGxlKVxuICAgICAgICBwcm9wZXJ0eSA9IFwiLVwiICsgcHJvcGVydHk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL25vdGU6IG9sZCB2ZXJzaW9ucyBvZiBJRSB1c2UgXCJyZW1vdmVBdHRyaWJ1dGUoKVwiIGluc3RlYWQgb2YgXCJyZW1vdmVQcm9wZXJ0eSgpXCJcbiAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShwcm9wZXJ0eSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9hZGROb25Ud2VlbmluZ1BUID0gZnVuY3Rpb24gX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBiZWdpbm5pbmcsIGVuZCwgb25seVNldEF0RW5kKSB7XG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgb25seVNldEF0RW5kID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSk7XG4gIHBsdWdpbi5fcHQgPSBwdDtcbiAgcHQuYiA9IGJlZ2lubmluZztcbiAgcHQuZSA9IGVuZDtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX25vbkNvbnZlcnRpYmxlVW5pdHMgPSB7XG4gIGRlZzogMSxcbiAgcmFkOiAxLFxuICB0dXJuOiAxXG59LFxuICAgIC8vdGFrZXMgYSBzaW5nbGUgdmFsdWUgbGlrZSAyMHB4IGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgdW5pdCBzcGVjaWZpZWQsIGxpa2UgXCIlXCIsIHJldHVybmluZyBvbmx5IHRoZSBudW1lcmljIGFtb3VudC5cbl9jb252ZXJ0VG9Vbml0ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIGN1clZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCxcbiAgICAgIGN1clVuaXQgPSAodmFsdWUgKyBcIlwiKS50cmltKCkuc3Vic3RyKChjdXJWYWx1ZSArIFwiXCIpLmxlbmd0aCkgfHwgXCJweFwiLFxuICAgICAgLy8gc29tZSBicm93c2VycyBsZWF2ZSBleHRyYSB3aGl0ZXNwYWNlIGF0IHRoZSBiZWdpbm5pbmcgb2YgQ1NTIHZhcmlhYmxlcywgaGVuY2UgdGhlIG5lZWQgdG8gdHJpbSgpXG4gIHN0eWxlID0gX3RlbXBEaXYuc3R5bGUsXG4gICAgICBob3Jpem9udGFsID0gX2hvcml6b250YWxFeHAudGVzdChwcm9wZXJ0eSksXG4gICAgICBpc1Jvb3RTVkcgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiLFxuICAgICAgbWVhc3VyZVByb3BlcnR5ID0gKGlzUm9vdFNWRyA/IFwiY2xpZW50XCIgOiBcIm9mZnNldFwiKSArIChob3Jpem9udGFsID8gXCJXaWR0aFwiIDogXCJIZWlnaHRcIiksXG4gICAgICBhbW91bnQgPSAxMDAsXG4gICAgICB0b1BpeGVscyA9IHVuaXQgPT09IFwicHhcIixcbiAgICAgIHRvUGVyY2VudCA9IHVuaXQgPT09IFwiJVwiLFxuICAgICAgcHgsXG4gICAgICBwYXJlbnQsXG4gICAgICBjYWNoZSxcbiAgICAgIGlzU1ZHO1xuXG4gIGlmICh1bml0ID09PSBjdXJVbml0IHx8ICFjdXJWYWx1ZSB8fCBfbm9uQ29udmVydGlibGVVbml0c1t1bml0XSB8fCBfbm9uQ29udmVydGlibGVVbml0c1tjdXJVbml0XSkge1xuICAgIHJldHVybiBjdXJWYWx1ZTtcbiAgfVxuXG4gIGN1clVuaXQgIT09IFwicHhcIiAmJiAhdG9QaXhlbHMgJiYgKGN1clZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIFwicHhcIikpO1xuICBpc1NWRyA9IHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCk7XG5cbiAgaWYgKHRvUGVyY2VudCAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgIC8vdHJhbnNmb3JtcyBhbmQgYm9yZGVyUmFkaXVzIGFyZSByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBpdHNlbGYhXG4gICAgcmV0dXJuIF9yb3VuZChjdXJWYWx1ZSAvIChpc1NWRyA/IHRhcmdldC5nZXRCQm94KClbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdIDogdGFyZ2V0W21lYXN1cmVQcm9wZXJ0eV0pICogYW1vdW50KTtcbiAgfVxuXG4gIHN0eWxlW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA9IGFtb3VudCArICh0b1BpeGVscyA/IGN1clVuaXQgOiB1bml0KTtcbiAgcGFyZW50ID0gfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSB8fCB1bml0ID09PSBcImVtXCIgJiYgdGFyZ2V0LmFwcGVuZENoaWxkICYmICFpc1Jvb3RTVkcgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcblxuICBpZiAoaXNTVkcpIHtcbiAgICBwYXJlbnQgPSAodGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCB8fCB7fSkucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGlmICghcGFyZW50IHx8IHBhcmVudCA9PT0gX2RvYyB8fCAhcGFyZW50LmFwcGVuZENoaWxkKSB7XG4gICAgcGFyZW50ID0gX2RvYy5ib2R5O1xuICB9XG5cbiAgY2FjaGUgPSBwYXJlbnQuX2dzYXA7XG5cbiAgaWYgKGNhY2hlICYmIHRvUGVyY2VudCAmJiBjYWNoZS53aWR0aCAmJiBob3Jpem9udGFsICYmIGNhY2hlLnRpbWUgPT09IF90aWNrZXIudGltZSkge1xuICAgIHJldHVybiBfcm91bmQoY3VyVmFsdWUgLyBjYWNoZS53aWR0aCAqIGFtb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikuaW5kZXhPZihcIiBcIikgPyBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkgKyB1bml0IDogdmFsdWU7XG59LFxuICAgIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcgPSBmdW5jdGlvbiBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCkge1xuICAvL25vdGU6IHdlIGNhbGwgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHBsdWdpbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPT09IFwibm9uZVwiKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBsaWtlIFNhZmFyaSBhY3R1YWxseSBQUkVGRVIgdGhlIHByZWZpeGVkIHByb3BlcnR5IGFuZCBtaXMtcmVwb3J0IHRoZSB1bnByZWZpeGVkIHZhbHVlIGxpa2UgY2xpcFBhdGggKEJVRykuIEluIG90aGVyIHdvcmRzLCBldmVuIHRob3VnaCBjbGlwUGF0aCBleGlzdHMgaW4gdGhlIHN0eWxlIChcImNsaXBQYXRoXCIgaW4gdGFyZ2V0LnN0eWxlKSBhbmQgaXQncyBzZXQgaW4gdGhlIENTUyBwcm9wZXJseSAoYWxvbmcgd2l0aCAtd2Via2l0LWNsaXAtcGF0aCksIFNhZmFyaSByZXBvcnRzIGNsaXBQYXRoIGFzIFwibm9uZVwiIHdoZXJlYXMgV2Via2l0Q2xpcFBhdGggcmVwb3J0cyBhY2N1cmF0ZWx5IGxpa2UgXCJlbGxpcHNlKDEwMCUgMCUgYXQgNTAlIDAlKVwiLCBzbyBpbiB0aGlzIGNhc2Ugd2UgbXVzdCBTV0lUQ0ggdG8gdXNpbmcgdGhlIHByZWZpeGVkIHByb3BlcnR5IGluc3RlYWQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzE4MzEwLWNsaXBwYXRoLWRvZXNudC13b3JrLW9uLWlvcy9cbiAgICB2YXIgcCA9IF9jaGVja1Byb3BQcmVmaXgocHJvcCwgdGFyZ2V0LCAxKSxcbiAgICAgICAgcyA9IHAgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwLCAxKTtcblxuICAgIGlmIChzICYmIHMgIT09IHN0YXJ0KSB7XG4gICAgICBwcm9wID0gcDtcbiAgICAgIHN0YXJ0ID0gcztcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiYm9yZGVyQ29sb3JcIikge1xuICAgICAgc3RhcnQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwiYm9yZGVyVG9wQ29sb3JcIik7IC8vIEZpcmVmb3ggYnVnOiBhbHdheXMgcmVwb3J0cyBcImJvcmRlckNvbG9yXCIgYXMgXCJcIiwgc28gd2UgbXVzdCBmYWxsIGJhY2sgdG8gYm9yZGVyVG9wQ29sb3IuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzI0NTgzLWhvdy10by1yZXR1cm4tY29sb3JzLXRoYXQtaS1oYWQtYWZ0ZXItcmV2ZXJzZS9cbiAgICB9XG4gIH1cblxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQuc3R5bGUsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nKSxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgYSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0VmFsdWVzLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBjb2xvcixcbiAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICBlbmRWYWx1ZSxcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgZW5kVW5pdCxcbiAgICAgIHN0YXJ0VW5pdCxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgZW5kVmFsdWVzO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChlbmQgPT09IFwiYXV0b1wiKSB7XG4gICAgdGFyZ2V0LnN0eWxlW3Byb3BdID0gZW5kO1xuICAgIGVuZCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcCkgfHwgZW5kO1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IHN0YXJ0O1xuICB9XG5cbiAgYSA9IFtzdGFydCwgZW5kXTtcblxuICBfY29sb3JTdHJpbmdGaWx0ZXIoYSk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy4gSWYgY29sb3JzIGFyZSBmb3VuZCwgaXQgcmV0dXJucyB0cnVlIGFuZCB0aGVuIHdlIG11c3QgbWF0Y2ggd2hlcmUgdGhlIGNvbG9yIHNob3dzIHVwIG9yZGVyLXdpc2UgYmVjYXVzZSBmb3IgdGhpbmdzIGxpa2UgYm94U2hhZG93LCBzb21ldGltZXMgdGhlIGJyb3dzZXIgcHJvdmlkZXMgdGhlIGNvbXB1dGVkIHZhbHVlcyB3aXRoIHRoZSBjb2xvciBGSVJTVCwgYnV0IHRoZSB1c2VyIHByb3ZpZGVzIGl0IHdpdGggdGhlIGNvbG9yIExBU1QsIHNvIGZsaXAgdGhlbSBpZiBuZWNlc3NhcnkuIFNhbWUgZm9yIGRyb3Atc2hhZG93KCkuXG5cblxuICBzdGFydCA9IGFbMF07XG4gIGVuZCA9IGFbMV07XG4gIHN0YXJ0VmFsdWVzID0gc3RhcnQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcbiAgZW5kVmFsdWVzID0gZW5kLm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG5cbiAgaWYgKGVuZFZhbHVlcy5sZW5ndGgpIHtcbiAgICB3aGlsZSAocmVzdWx0ID0gX251bVdpdGhVbml0RXhwLmV4ZWMoZW5kKSkge1xuICAgICAgZW5kVmFsdWUgPSByZXN1bHRbMF07XG4gICAgICBjaHVuayA9IGVuZC5zdWJzdHJpbmcoaW5kZXgsIHJlc3VsdC5pbmRleCk7XG5cbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICAgIH0gZWxzZSBpZiAoY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJyZ2JhKFwiIHx8IGNodW5rLnN1YnN0cigtNSkgPT09IFwiaHNsYShcIikge1xuICAgICAgICBjb2xvciA9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRWYWx1ZSAhPT0gKHN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlc1ttYXRjaEluZGV4KytdIHx8IFwiXCIpKSB7XG4gICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKSB8fCAwO1xuICAgICAgICBzdGFydFVuaXQgPSBzdGFydFZhbHVlLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICByZWxhdGl2ZSA9IGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyArKGVuZFZhbHVlLmNoYXJBdCgwKSArIFwiMVwiKSA6IDA7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMik7XG4gICAgICAgIH1cblxuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgICAgZW5kVW5pdCA9IGVuZFZhbHVlLnN1YnN0cigoZW5kTnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgaW5kZXggPSBfbnVtV2l0aFVuaXRFeHAubGFzdEluZGV4IC0gZW5kVW5pdC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmRVbml0KSB7XG4gICAgICAgICAgLy9pZiBzb21ldGhpbmcgbGlrZSBcInBlcnNwZWN0aXZlOjMwMFwiIGlzIHBhc3NlZCBpbiBhbmQgd2UgbXVzdCBhZGQgYSB1bml0IHRvIHRoZSBlbmRcbiAgICAgICAgICBlbmRVbml0ID0gZW5kVW5pdCB8fCBfY29uZmlnLnVuaXRzW3Byb3BdIHx8IHN0YXJ0VW5pdDtcblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgZW5kICs9IGVuZFVuaXQ7XG4gICAgICAgICAgICBwdC5lICs9IGVuZFVuaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCkge1xuICAgICAgICAgIHN0YXJ0TnVtID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wLCBzdGFydFZhbHVlLCBlbmRVbml0KSB8fCAwO1xuICAgICAgICB9IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuXG4gICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgIGM6IHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgICAgICBtOiBjb2xvciAmJiBjb2xvciA8IDQgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcbiAgfSBlbHNlIHtcbiAgICBwdC5yID0gcHJvcCA9PT0gXCJkaXNwbGF5XCIgJiYgZW5kID09PSBcIm5vbmVcIiA/IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIDogX3JlbmRlck5vblR3ZWVuaW5nVmFsdWU7XG4gIH1cblxuICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkpIHtcbiAgICBwdC5lID0gMDsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuICB9XG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGFub3RoZXIgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2tleXdvcmRUb1BlcmNlbnQgPSB7XG4gIHRvcDogXCIwJVwiLFxuICBib3R0b206IFwiMTAwJVwiLFxuICBsZWZ0OiBcIjAlXCIsXG4gIHJpZ2h0OiBcIjEwMCVcIixcbiAgY2VudGVyOiBcIjUwJVwiXG59LFxuICAgIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzID0gZnVuY3Rpb24gX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXModmFsdWUpIHtcbiAgdmFyIHNwbGl0ID0gdmFsdWUuc3BsaXQoXCIgXCIpLFxuICAgICAgeCA9IHNwbGl0WzBdLFxuICAgICAgeSA9IHNwbGl0WzFdIHx8IFwiNTAlXCI7XG5cbiAgaWYgKHggPT09IFwidG9wXCIgfHwgeCA9PT0gXCJib3R0b21cIiB8fCB5ID09PSBcImxlZnRcIiB8fCB5ID09PSBcInJpZ2h0XCIpIHtcbiAgICAvL3RoZSB1c2VyIHByb3ZpZGVkIHRoZW0gaW4gdGhlIHdyb25nIG9yZGVyLCBzbyBmbGlwIHRoZW1cbiAgICB2YWx1ZSA9IHg7XG4gICAgeCA9IHk7XG4gICAgeSA9IHZhbHVlO1xuICB9XG5cbiAgc3BsaXRbMF0gPSBfa2V5d29yZFRvUGVyY2VudFt4XSB8fCB4O1xuICBzcGxpdFsxXSA9IF9rZXl3b3JkVG9QZXJjZW50W3ldIHx8IHk7XG4gIHJldHVybiBzcGxpdC5qb2luKFwiIFwiKTtcbn0sXG4gICAgX3JlbmRlckNsZWFyUHJvcHMgPSBmdW5jdGlvbiBfcmVuZGVyQ2xlYXJQcm9wcyhyYXRpbywgZGF0YSkge1xuICBpZiAoZGF0YS50d2VlbiAmJiBkYXRhLnR3ZWVuLl90aW1lID09PSBkYXRhLnR3ZWVuLl9kdXIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZGF0YS50LFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgcHJvcHMgPSBkYXRhLnUsXG4gICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgICBwcm9wLFxuICAgICAgICBjbGVhclRyYW5zZm9ybXMsXG4gICAgICAgIGk7XG5cbiAgICBpZiAocHJvcHMgPT09IFwiYWxsXCIgfHwgcHJvcHMgPT09IHRydWUpIHtcbiAgICAgIHN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG4gICAgICBpID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcF0pIHtcbiAgICAgICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICAgIHByb3AgPSBwcm9wID09PSBcInRyYW5zZm9ybU9yaWdpblwiID8gX3RyYW5zZm9ybU9yaWdpblByb3AgOiBfdHJhbnNmb3JtUHJvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGVhclRyYW5zZm9ybXMpIHtcbiAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlLnN2ZyAmJiB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpOyAvLyBmb3JjZSBhbGwgdGhlIGNhY2hlZCB2YWx1ZXMgYmFjayB0byBcIm5vcm1hbFwiL2lkZW50aXR5LCBvdGhlcndpc2UgaWYgdGhlcmUncyBhbm90aGVyIHR3ZWVuIHRoYXQncyBhbHJlYWR5IHNldCB0byByZW5kZXIgdHJhbnNmb3JtcyBvbiB0aGlzIGVsZW1lbnQsIGl0IGNvdWxkIGRpc3BsYXkgdGhlIHdyb25nIHZhbHVlcy5cblxuXG4gICAgICAgIGNhY2hlLnVuY2FjaGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICAvLyBub3RlOiBzcGVjaWFsUHJvcHMgc2hvdWxkIHJldHVybiAxIGlmIChhbmQgb25seSBpZikgdGhleSBoYXZlIGEgbm9uLXplcm8gcHJpb3JpdHkuIEl0IGluZGljYXRlcyB3ZSBuZWVkIHRvIHNvcnQgdGhlIGxpbmtlZCBsaXN0LlxuX3NwZWNpYWxQcm9wcyA9IHtcbiAgY2xlYXJQcm9wczogZnVuY3Rpb24gY2xlYXJQcm9wcyhwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIGlmICh0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHtcbiAgICAgIHZhciBwdCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDAsIF9yZW5kZXJDbGVhclByb3BzKTtcbiAgICAgIHB0LnUgPSBlbmRWYWx1ZTtcbiAgICAgIHB0LnByID0gLTEwO1xuICAgICAgcHQudHdlZW4gPSB0d2VlbjtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIC8qIGNsYXNzTmFtZSBmZWF0dXJlIChhYm91dCAwLjRrYiBnemlwcGVkKS5cbiAgLCBjbGFzc05hbWUocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgXHRsZXQgX3JlbmRlckNsYXNzTmFtZSA9IChyYXRpbywgZGF0YSkgPT4ge1xuICBcdFx0XHRkYXRhLmNzcy5yZW5kZXIocmF0aW8sIGRhdGEuY3NzKTtcbiAgXHRcdFx0aWYgKCFyYXRpbyB8fCByYXRpbyA9PT0gMSkge1xuICBcdFx0XHRcdGxldCBpbmxpbmUgPSBkYXRhLnJtdixcbiAgXHRcdFx0XHRcdHRhcmdldCA9IGRhdGEudCxcbiAgXHRcdFx0XHRcdHA7XG4gIFx0XHRcdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iKTtcbiAgXHRcdFx0XHRmb3IgKHAgaW4gaW5saW5lKSB7XG4gIFx0XHRcdFx0XHRfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH0sXG4gIFx0XHRfZ2V0QWxsU3R5bGVzID0gKHRhcmdldCkgPT4ge1xuICBcdFx0XHRsZXQgc3R5bGVzID0ge30sXG4gIFx0XHRcdFx0Y29tcHV0ZWQgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCksXG4gIFx0XHRcdFx0cDtcbiAgXHRcdFx0Zm9yIChwIGluIGNvbXB1dGVkKSB7XG4gIFx0XHRcdFx0aWYgKGlzTmFOKHApICYmIHAgIT09IFwiY3NzVGV4dFwiICYmIHAgIT09IFwibGVuZ3RoXCIpIHtcbiAgXHRcdFx0XHRcdHN0eWxlc1twXSA9IGNvbXB1dGVkW3BdO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRfc2V0RGVmYXVsdHMoc3R5bGVzLCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKSk7XG4gIFx0XHRcdHJldHVybiBzdHlsZXM7XG4gIFx0XHR9LFxuICBcdFx0c3RhcnRDbGFzc0xpc3QgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIiksXG4gIFx0XHRzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgXHRcdGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0LFxuICBcdFx0Y2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gIFx0XHRjbGFzc1BUID0gY2FjaGUuY2xhc3NQVCxcbiAgXHRcdGlubGluZVRvUmVtb3ZlQXRFbmQgPSB7fSxcbiAgXHRcdGRhdGEgPSB7dDp0YXJnZXQsIHBsdWdpbjpwbHVnaW4sIHJtdjppbmxpbmVUb1JlbW92ZUF0RW5kLCBiOnN0YXJ0Q2xhc3NMaXN0LCBlOihlbmRWYWx1ZS5jaGFyQXQoMSkgIT09IFwiPVwiKSA/IGVuZFZhbHVlIDogc3RhcnRDbGFzc0xpc3QucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIiArIGVuZFZhbHVlLnN1YnN0cigyKSArIFwiKD8hW1xcXFx3LV0pXCIpLCBcIlwiKSArICgoZW5kVmFsdWUuY2hhckF0KDApID09PSBcIitcIikgPyBcIiBcIiArIGVuZFZhbHVlLnN1YnN0cigyKSA6IFwiXCIpfSxcbiAgXHRcdGNoYW5naW5nVmFycyA9IHt9LFxuICBcdFx0c3RhcnRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQpLFxuICBcdFx0dHJhbnNmb3JtUmVsYXRlZCA9IC8odHJhbnNmb3JtfHBlcnNwZWN0aXZlKS9pLFxuICBcdFx0ZW5kVmFycywgcDtcbiAgXHRpZiAoY2xhc3NQVCkge1xuICBcdFx0Y2xhc3NQVC5yKDEsIGNsYXNzUFQuZCk7XG4gIFx0XHRfcmVtb3ZlTGlua2VkTGlzdEl0ZW0oY2xhc3NQVC5kLnBsdWdpbiwgY2xhc3NQVCwgXCJfcHRcIik7XG4gIFx0fVxuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkYXRhLmUpO1xuICBcdGVuZFZhcnMgPSBfZ2V0QWxsU3R5bGVzKHRhcmdldCwgdHJ1ZSk7XG4gIFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0YXJ0Q2xhc3NMaXN0KTtcbiAgXHRmb3IgKHAgaW4gZW5kVmFycykge1xuICBcdFx0aWYgKGVuZFZhcnNbcF0gIT09IHN0YXJ0VmFyc1twXSAmJiAhdHJhbnNmb3JtUmVsYXRlZC50ZXN0KHApKSB7XG4gIFx0XHRcdGNoYW5naW5nVmFyc1twXSA9IGVuZFZhcnNbcF07XG4gIFx0XHRcdGlmICghc3R5bGVbcF0gJiYgc3R5bGVbcF0gIT09IFwiMFwiKSB7XG4gIFx0XHRcdFx0aW5saW5lVG9SZW1vdmVBdEVuZFtwXSA9IDE7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIFx0Y2FjaGUuY2xhc3NQVCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgXCJjbGFzc05hbWVcIiwgMCwgMCwgX3JlbmRlckNsYXNzTmFtZSwgZGF0YSwgMCwgLTExKTtcbiAgXHRpZiAoc3R5bGUuY3NzVGV4dCAhPT0gY3NzVGV4dCkgeyAvL29ubHkgYXBwbHkgaWYgdGhpbmdzIGNoYW5nZS4gT3RoZXJ3aXNlLCBpbiBjYXNlcyBsaWtlIGEgYmFja2dyb3VuZC1pbWFnZSB0aGF0J3MgcHVsbGVkIGR5bmFtaWNhbGx5LCBpdCBjb3VsZCBjYXVzZSBhIHJlZnJlc2guIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMzY4LXBvc3NpYmxlLWdzYXAtYnVnLXN3aXRjaGluZy1jbGFzc25hbWVzLWluLWNocm9tZS8uXG4gIFx0XHRzdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDsgLy93ZSByZWNvcmRlZCBjc3NUZXh0IGJlZm9yZSB3ZSBzd2FwcGVkIGNsYXNzZXMgYW5kIHJhbiBfZ2V0QWxsU3R5bGVzKCkgYmVjYXVzZSBpbiBjYXNlcyB3aGVuIGEgY2xhc3NOYW1lIHR3ZWVuIGlzIG92ZXJ3cml0dGVuLCB3ZSByZW1vdmUgYWxsIHRoZSByZWxhdGVkIHR3ZWVuaW5nIHByb3BlcnRpZXMgZnJvbSB0aGF0IGNsYXNzIGNoYW5nZSAob3RoZXJ3aXNlIGNsYXNzLXNwZWNpZmljIHN0dWZmIGNhbid0IG92ZXJyaWRlIHByb3BlcnRpZXMgd2UndmUgZGlyZWN0bHkgc2V0IG9uIHRoZSB0YXJnZXQncyBzdHlsZSBvYmplY3QgZHVlIHRvIHNwZWNpZmljaXR5KS5cbiAgXHR9XG4gIFx0X3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdHJ1ZSk7IC8vdG8gY2xlYXIgdGhlIGNhY2hpbmcgb2YgdHJhbnNmb3Jtc1xuICBcdGRhdGEuY3NzID0gbmV3IGdzYXAucGx1Z2lucy5jc3MoKTtcbiAgXHRkYXRhLmNzcy5pbml0KHRhcmdldCwgY2hhbmdpbmdWYXJzLCB0d2Vlbik7XG4gIFx0cGx1Z2luLl9wcm9wcy5wdXNoKC4uLmRhdGEuY3NzLl9wcm9wcyk7XG4gIFx0cmV0dXJuIDE7XG4gIH1cbiAgKi9cblxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUUkFOU0ZPUk1TXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5faWRlbnRpdHkyRE1hdHJpeCA9IFsxLCAwLCAwLCAxLCAwLCAwXSxcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXMgPSB7fSxcbiAgICBfaXNOdWxsVHJhbnNmb3JtID0gZnVuY3Rpb24gX2lzTnVsbFRyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgfHwgdmFsdWUgPT09IFwibm9uZVwiIHx8ICF2YWx1ZTtcbn0sXG4gICAgX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSB7XG4gIHZhciBtYXRyaXhTdHJpbmcgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICByZXR1cm4gX2lzTnVsbFRyYW5zZm9ybShtYXRyaXhTdHJpbmcpID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXhTdHJpbmcuc3Vic3RyKDcpLm1hdGNoKF9udW1FeHApLm1hcChfcm91bmQpO1xufSxcbiAgICBfZ2V0TWF0cml4ID0gZnVuY3Rpb24gX2dldE1hdHJpeCh0YXJnZXQsIGZvcmNlMkQpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCksXG4gICAgICBwYXJlbnQsXG4gICAgICBuZXh0U2libGluZyxcbiAgICAgIHRlbXAsXG4gICAgICBhZGRlZFRvRE9NO1xuXG4gIGlmIChjYWNoZS5zdmcgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSkge1xuICAgIHRlbXAgPSB0YXJnZXQudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKS5tYXRyaXg7IC8vZW5zdXJlcyB0aGF0IGV2ZW4gY29tcGxleCB2YWx1ZXMgbGlrZSBcInRyYW5zbGF0ZSg1MCw2MCkgcm90YXRlKDEzNSwwLDApXCIgYXJlIHBhcnNlZCBiZWNhdXNlIGl0IG1hc2hlcyBpdCBpbnRvIGEgbWF0cml4LlxuXG4gICAgbWF0cml4ID0gW3RlbXAuYSwgdGVtcC5iLCB0ZW1wLmMsIHRlbXAuZCwgdGVtcC5lLCB0ZW1wLmZdO1xuICAgIHJldHVybiBtYXRyaXguam9pbihcIixcIikgPT09IFwiMSwwLDAsMSwwLDBcIiA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4O1xuICB9IGVsc2UgaWYgKG1hdHJpeCA9PT0gX2lkZW50aXR5MkRNYXRyaXggJiYgIXRhcmdldC5vZmZzZXRQYXJlbnQgJiYgdGFyZ2V0ICE9PSBfZG9jRWxlbWVudCAmJiAhY2FjaGUuc3ZnKSB7XG4gICAgLy9ub3RlOiBpZiBvZmZzZXRQYXJlbnQgaXMgbnVsbCwgdGhhdCBtZWFucyB0aGUgZWxlbWVudCBpc24ndCBpbiB0aGUgbm9ybWFsIGRvY3VtZW50IGZsb3csIGxpa2UgaWYgaXQgaGFzIGRpc3BsYXk6bm9uZSBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgZGlzcGxheTpub25lKS4gRmlyZWZveCByZXR1cm5zIG51bGwgZm9yIGdldENvbXB1dGVkU3R5bGUoKSBpZiB0aGUgZWxlbWVudCBpcyBpbiBhbiBpZnJhbWUgdGhhdCBoYXMgZGlzcGxheTpub25lLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICAvL2Jyb3dzZXJzIGRvbid0IHJlcG9ydCB0cmFuc2Zvcm1zIGFjY3VyYXRlbHkgdW5sZXNzIHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYW5kIGhhcyBhIGRpc3BsYXkgdmFsdWUgdGhhdCdzIG5vdCBcIm5vbmVcIi4gRmlyZWZveCBhbmQgTWljcm9zb2Z0IGJyb3dzZXJzIGhhdmUgYSBwYXJ0aWFsIGJ1ZyB3aGVyZSB0aGV5J2xsIHJlcG9ydCB0cmFuc2Zvcm1zIGV2ZW4gaWYgZGlzcGxheTpub25lIEJVVCBub3QgYW55IHBlcmNlbnRhZ2UtYmFzZWQgdmFsdWVzIGxpa2UgdHJhbnNsYXRlKC01MCUsIDhweCkgd2lsbCBiZSByZXBvcnRlZCBhcyBpZiBpdCdzIHRyYW5zbGF0ZSgwLCA4cHgpLlxuICAgIHRlbXAgPSBzdHlsZS5kaXNwbGF5O1xuICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIXBhcmVudCB8fCAhdGFyZ2V0Lm9mZnNldFBhcmVudCkge1xuICAgICAgLy8gbm90ZTogaW4gMy4zLjAgd2Ugc3dpdGNoZWQgdGFyZ2V0Lm9mZnNldFBhcmVudCB0byBfZG9jLmJvZHkuY29udGFpbnModGFyZ2V0KSB0byBhdm9pZCBbc29tZXRpbWVzIHVubmVjZXNzYXJ5XSBNdXRhdGlvbk9ic2VydmVyIGNhbGxzIGJ1dCB0aGF0IHdhc24ndCBhZGVxdWF0ZSBiZWNhdXNlIHRoZXJlIGFyZSBlZGdlIGNhc2VzIHdoZXJlIG5lc3RlZCBwb3NpdGlvbjogZml4ZWQgZWxlbWVudHMgbmVlZCB0byBnZXQgcmVwYXJlbnRlZCB0byBhY2N1cmF0ZWx5IHNlbnNlIHRyYW5zZm9ybXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzM4OCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zNzVcbiAgICAgIGFkZGVkVG9ET00gPSAxOyAvL2ZsYWdcblxuICAgICAgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dFNpYmxpbmc7XG5cbiAgICAgIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHRhcmdldCk7IC8vd2UgbXVzdCBhZGQgaXQgdG8gdGhlIERPTSBpbiBvcmRlciB0byBnZXQgdmFsdWVzIHByb3Blcmx5XG5cbiAgICB9XG5cbiAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCk7XG4gICAgdGVtcCA/IHN0eWxlLmRpc3BsYXkgPSB0ZW1wIDogX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgXCJkaXNwbGF5XCIpO1xuXG4gICAgaWYgKGFkZGVkVG9ET00pIHtcbiAgICAgIG5leHRTaWJsaW5nID8gcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHRTaWJsaW5nKSA6IHBhcmVudCA/IHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpIDogX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9yY2UyRCAmJiBtYXRyaXgubGVuZ3RoID4gNiA/IFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0sIG1hdHJpeFsxMl0sIG1hdHJpeFsxM11dIDogbWF0cml4O1xufSxcbiAgICBfYXBwbHlTVkdPcmlnaW4gPSBmdW5jdGlvbiBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBvcmlnaW4sIG9yaWdpbklzQWJzb2x1dGUsIHNtb290aCwgbWF0cml4QXJyYXksIHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgIG1hdHJpeCA9IG1hdHJpeEFycmF5IHx8IF9nZXRNYXRyaXgodGFyZ2V0LCB0cnVlKSxcbiAgICAgIHhPcmlnaW5PbGQgPSBjYWNoZS54T3JpZ2luIHx8IDAsXG4gICAgICB5T3JpZ2luT2xkID0gY2FjaGUueU9yaWdpbiB8fCAwLFxuICAgICAgeE9mZnNldE9sZCA9IGNhY2hlLnhPZmZzZXQgfHwgMCxcbiAgICAgIHlPZmZzZXRPbGQgPSBjYWNoZS55T2Zmc2V0IHx8IDAsXG4gICAgICBhID0gbWF0cml4WzBdLFxuICAgICAgYiA9IG1hdHJpeFsxXSxcbiAgICAgIGMgPSBtYXRyaXhbMl0sXG4gICAgICBkID0gbWF0cml4WzNdLFxuICAgICAgdHggPSBtYXRyaXhbNF0sXG4gICAgICB0eSA9IG1hdHJpeFs1XSxcbiAgICAgIG9yaWdpblNwbGl0ID0gb3JpZ2luLnNwbGl0KFwiIFwiKSxcbiAgICAgIHhPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzBdKSB8fCAwLFxuICAgICAgeU9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMV0pIHx8IDAsXG4gICAgICBib3VuZHMsXG4gICAgICBkZXRlcm1pbmFudCxcbiAgICAgIHgsXG4gICAgICB5O1xuXG4gIGlmICghb3JpZ2luSXNBYnNvbHV0ZSkge1xuICAgIGJvdW5kcyA9IF9nZXRCQm94KHRhcmdldCk7XG4gICAgeE9yaWdpbiA9IGJvdW5kcy54ICsgKH5vcmlnaW5TcGxpdFswXS5pbmRleE9mKFwiJVwiKSA/IHhPcmlnaW4gLyAxMDAgKiBib3VuZHMud2lkdGggOiB4T3JpZ2luKTtcbiAgICB5T3JpZ2luID0gYm91bmRzLnkgKyAofihvcmlnaW5TcGxpdFsxXSB8fCBvcmlnaW5TcGxpdFswXSkuaW5kZXhPZihcIiVcIikgPyB5T3JpZ2luIC8gMTAwICogYm91bmRzLmhlaWdodCA6IHlPcmlnaW4pO1xuICB9IGVsc2UgaWYgKG1hdHJpeCAhPT0gX2lkZW50aXR5MkRNYXRyaXggJiYgKGRldGVybWluYW50ID0gYSAqIGQgLSBiICogYykpIHtcbiAgICAvL2lmIGl0J3MgemVybyAobGlrZSBpZiBzY2FsZVggYW5kIHNjYWxlWSBhcmUgemVybyksIHNraXAgaXQgdG8gYXZvaWQgZXJyb3JzIHdpdGggZGl2aWRpbmcgYnkgemVyby5cbiAgICB4ID0geE9yaWdpbiAqIChkIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqICgtYyAvIGRldGVybWluYW50KSArIChjICogdHkgLSBkICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeSA9IHhPcmlnaW4gKiAoLWIgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKGEgLyBkZXRlcm1pbmFudCkgLSAoYSAqIHR5IC0gYiAqIHR4KSAvIGRldGVybWluYW50O1xuICAgIHhPcmlnaW4gPSB4O1xuICAgIHlPcmlnaW4gPSB5O1xuICB9XG5cbiAgaWYgKHNtb290aCB8fCBzbW9vdGggIT09IGZhbHNlICYmIGNhY2hlLnNtb290aCkge1xuICAgIHR4ID0geE9yaWdpbiAtIHhPcmlnaW5PbGQ7XG4gICAgdHkgPSB5T3JpZ2luIC0geU9yaWdpbk9sZDtcbiAgICBjYWNoZS54T2Zmc2V0ID0geE9mZnNldE9sZCArICh0eCAqIGEgKyB0eSAqIGMpIC0gdHg7XG4gICAgY2FjaGUueU9mZnNldCA9IHlPZmZzZXRPbGQgKyAodHggKiBiICsgdHkgKiBkKSAtIHR5O1xuICB9IGVsc2Uge1xuICAgIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgfVxuXG4gIGNhY2hlLnhPcmlnaW4gPSB4T3JpZ2luO1xuICBjYWNoZS55T3JpZ2luID0geU9yaWdpbjtcbiAgY2FjaGUuc21vb3RoID0gISFzbW9vdGg7XG4gIGNhY2hlLm9yaWdpbiA9IG9yaWdpbjtcbiAgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSA9ICEhb3JpZ2luSXNBYnNvbHV0ZTtcbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IFwiMHB4IDBweFwiOyAvL290aGVyd2lzZSwgaWYgc29tZW9uZSBzZXRzICBhbiBvcmlnaW4gdmlhIENTUywgaXQgd2lsbCBsaWtlbHkgaW50ZXJmZXJlIHdpdGggdGhlIFNWRyB0cmFuc2Zvcm0gYXR0cmlidXRlIG9uZXMgKGJlY2F1c2UgcmVtZW1iZXIsIHdlJ3JlIGJha2luZyB0aGUgb3JpZ2luIGludG8gdGhlIG1hdHJpeCgpIHZhbHVlKS5cblxuICBpZiAocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9yaWdpblwiLCB4T3JpZ2luT2xkLCB4T3JpZ2luKTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T3JpZ2luXCIsIHlPcmlnaW5PbGQsIHlPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInhPZmZzZXRcIiwgeE9mZnNldE9sZCwgY2FjaGUueE9mZnNldCk7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9mZnNldFwiLCB5T2Zmc2V0T2xkLCBjYWNoZS55T2Zmc2V0KTtcbiAgfVxuXG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiwgeE9yaWdpbiArIFwiIFwiICsgeU9yaWdpbik7XG59LFxuICAgIF9wYXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IG5ldyBHU0NhY2hlKHRhcmdldCk7XG5cbiAgaWYgKFwieFwiIGluIGNhY2hlICYmICF1bmNhY2hlICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgaW52ZXJ0ZWRTY2FsZVggPSBjYWNoZS5zY2FsZVggPCAwLFxuICAgICAgcHggPSBcInB4XCIsXG4gICAgICBkZWcgPSBcImRlZ1wiLFxuICAgICAgb3JpZ2luID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkgfHwgXCIwXCIsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHosXG4gICAgICBzY2FsZVgsXG4gICAgICBzY2FsZVksXG4gICAgICByb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWCxcbiAgICAgIHJvdGF0aW9uWSxcbiAgICAgIHNrZXdYLFxuICAgICAgc2tld1ksXG4gICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgIHhPcmlnaW4sXG4gICAgICB5T3JpZ2luLFxuICAgICAgbWF0cml4LFxuICAgICAgYW5nbGUsXG4gICAgICBjb3MsXG4gICAgICBzaW4sXG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdDEsXG4gICAgICB0MixcbiAgICAgIHQzLFxuICAgICAgYTEzLFxuICAgICAgYTIzLFxuICAgICAgYTMzLFxuICAgICAgYTQyLFxuICAgICAgYTQzLFxuICAgICAgYTMyO1xuICB4ID0geSA9IHogPSByb3RhdGlvbiA9IHJvdGF0aW9uWCA9IHJvdGF0aW9uWSA9IHNrZXdYID0gc2tld1kgPSBwZXJzcGVjdGl2ZSA9IDA7XG4gIHNjYWxlWCA9IHNjYWxlWSA9IDE7XG4gIGNhY2hlLnN2ZyA9ICEhKHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCkpO1xuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgdDEgPSAhY2FjaGUudW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpO1xuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpO1xuXG4gICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgIHggLT0geE9yaWdpbiAtICh4T3JpZ2luICogYSArIHlPcmlnaW4gKiBjKTtcbiAgICAgICAgeSAtPSB5T3JpZ2luIC0gKHhPcmlnaW4gKiBiICsgeU9yaWdpbiAqIGQpO1xuICAgICAgfSAvLzNEIG1hdHJpeFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGEzMiA9IG1hdHJpeFs2XTtcbiAgICAgIGE0MiA9IG1hdHJpeFs3XTtcbiAgICAgIGExMyA9IG1hdHJpeFs4XTtcbiAgICAgIGEyMyA9IG1hdHJpeFs5XTtcbiAgICAgIGEzMyA9IG1hdHJpeFsxMF07XG4gICAgICBhNDMgPSBtYXRyaXhbMTFdO1xuICAgICAgeCA9IG1hdHJpeFsxMl07XG4gICAgICB5ID0gbWF0cml4WzEzXTtcbiAgICAgIHogPSBtYXRyaXhbMTRdO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTMyLCBhMzMpO1xuICAgICAgcm90YXRpb25YID0gYW5nbGUgKiBfUkFEMkRFRzsgLy9yb3RhdGlvblhcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYTEyICogY29zICsgYTEzICogc2luO1xuICAgICAgICB0MiA9IGEyMiAqIGNvcyArIGEyMyAqIHNpbjtcbiAgICAgICAgdDMgPSBhMzIgKiBjb3MgKyBhMzMgKiBzaW47XG4gICAgICAgIGExMyA9IGExMiAqIC1zaW4gKyBhMTMgKiBjb3M7XG4gICAgICAgIGEyMyA9IGEyMiAqIC1zaW4gKyBhMjMgKiBjb3M7XG4gICAgICAgIGEzMyA9IGEzMiAqIC1zaW4gKyBhMzMgKiBjb3M7XG4gICAgICAgIGE0MyA9IGE0MiAqIC1zaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGExMiA9IHQxO1xuICAgICAgICBhMjIgPSB0MjtcbiAgICAgICAgYTMyID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25ZXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoLWMsIGEzMyk7XG4gICAgICByb3RhdGlvblkgPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zIC0gYTEzICogc2luO1xuICAgICAgICB0MiA9IGIgKiBjb3MgLSBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYyAqIGNvcyAtIGEzMyAqIHNpbjtcbiAgICAgICAgYTQzID0gZCAqIHNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgYSA9IHQxO1xuICAgICAgICBiID0gdDI7XG4gICAgICAgIGMgPSB0MztcbiAgICAgIH0gLy9yb3RhdGlvblpcblxuXG4gICAgICBhbmdsZSA9IF9hdGFuMihiLCBhKTtcbiAgICAgIHJvdGF0aW9uID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICB0MSA9IGEgKiBjb3MgKyBiICogc2luO1xuICAgICAgICB0MiA9IGExMiAqIGNvcyArIGEyMiAqIHNpbjtcbiAgICAgICAgYiA9IGIgKiBjb3MgLSBhICogc2luO1xuICAgICAgICBhMjIgPSBhMjIgKiBjb3MgLSBhMTIgKiBzaW47XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYTEyID0gdDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3RhdGlvblggJiYgTWF0aC5hYnMocm90YXRpb25YKSArIE1hdGguYWJzKHJvdGF0aW9uKSA+IDM1OS45KSB7XG4gICAgICAgIC8vd2hlbiByb3RhdGlvblkgaXMgc2V0LCBpdCB3aWxsIG9mdGVuIGJlIHBhcnNlZCBhcyAxODAgZGVncmVlcyBkaWZmZXJlbnQgdGhhbiBpdCBzaG91bGQgYmUsIGFuZCByb3RhdGlvblggYW5kIHJvdGF0aW9uIGJvdGggYmVpbmcgMTgwIChpdCBsb29rcyB0aGUgc2FtZSksIHNvIHdlIGFkanVzdCBmb3IgdGhhdCBoZXJlLlxuICAgICAgICByb3RhdGlvblggPSByb3RhdGlvbiA9IDA7XG4gICAgICAgIHJvdGF0aW9uWSA9IDE4MCAtIHJvdGF0aW9uWTtcbiAgICAgIH1cblxuICAgICAgc2NhbGVYID0gX3JvdW5kKE1hdGguc3FydChhICogYSArIGIgKiBiICsgYyAqIGMpKTtcbiAgICAgIHNjYWxlWSA9IF9yb3VuZChNYXRoLnNxcnQoYTIyICogYTIyICsgYTMyICogYTMyKSk7XG4gICAgICBhbmdsZSA9IF9hdGFuMihhMTIsIGEyMik7XG4gICAgICBza2V3WCA9IE1hdGguYWJzKGFuZ2xlKSA+IDAuMDAwMiA/IGFuZ2xlICogX1JBRDJERUcgOiAwO1xuICAgICAgcGVyc3BlY3RpdmUgPSBhNDMgPyAxIC8gKGE0MyA8IDAgPyAtYTQzIDogYTQzKSA6IDA7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgLy9zZW5zZSBpZiB0aGVyZSBhcmUgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCBvbiBhbiBTVkcgZWxlbWVudCBpbiB3aGljaCBjYXNlIHdlIG11c3Qgb3ZlcndyaXRlIHRoZW0gd2hlbiByZW5kZXJpbmcuIFRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlIGlzIG1vcmUgcmVsaWFibGUgY3Jvc3MtYnJvd3NlciwgYnV0IHdlIGNhbid0IGp1c3QgcmVtb3ZlIHRoZSBDU1Mgb25lcyBiZWNhdXNlIHRoZXkgbWF5IGJlIGFwcGxpZWQgaW4gYSBDU1MgcnVsZSBzb21ld2hlcmUgKG5vdCBqdXN0IGlubGluZSkuXG4gICAgICB0MSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICBjYWNoZS5mb3JjZUNTUyA9IHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIikgfHwgIV9pc051bGxUcmFuc2Zvcm0oX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCkpO1xuICAgICAgdDEgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0MSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKE1hdGguYWJzKHNrZXdYKSA+IDkwICYmIE1hdGguYWJzKHNrZXdYKSA8IDI3MCkge1xuICAgIGlmIChpbnZlcnRlZFNjYWxlWCkge1xuICAgICAgc2NhbGVYICo9IC0xO1xuICAgICAgc2tld1ggKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgICByb3RhdGlvbiArPSByb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGVZICo9IC0xO1xuICAgICAgc2tld1ggKz0gc2tld1ggPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfVxuICB9XG5cbiAgY2FjaGUueCA9ICgoY2FjaGUueFBlcmNlbnQgPSB4ICYmIE1hdGgucm91bmQodGFyZ2V0Lm9mZnNldFdpZHRoIC8gMikgPT09IE1hdGgucm91bmQoLXgpID8gLTUwIDogMCkgPyAwIDogeCkgKyBweDtcbiAgY2FjaGUueSA9ICgoY2FjaGUueVBlcmNlbnQgPSB5ICYmIE1hdGgucm91bmQodGFyZ2V0Lm9mZnNldEhlaWdodCAvIDIpID09PSBNYXRoLnJvdW5kKC15KSA/IC01MCA6IDApID8gMCA6IHkpICsgcHg7XG4gIGNhY2hlLnogPSB6ICsgcHg7XG4gIGNhY2hlLnNjYWxlWCA9IF9yb3VuZChzY2FsZVgpO1xuICBjYWNoZS5zY2FsZVkgPSBfcm91bmQoc2NhbGVZKTtcbiAgY2FjaGUucm90YXRpb24gPSBfcm91bmQocm90YXRpb24pICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblggPSBfcm91bmQocm90YXRpb25YKSArIGRlZztcbiAgY2FjaGUucm90YXRpb25ZID0gX3JvdW5kKHJvdGF0aW9uWSkgKyBkZWc7XG4gIGNhY2hlLnNrZXdYID0gc2tld1ggKyBkZWc7XG4gIGNhY2hlLnNrZXdZID0gc2tld1kgKyBkZWc7XG4gIGNhY2hlLnRyYW5zZm9ybVBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmUgKyBweDtcblxuICBpZiAoY2FjaGUuek9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luLnNwbGl0KFwiIFwiKVsyXSkgfHwgMCkge1xuICAgIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IF9maXJzdFR3b09ubHkob3JpZ2luKTtcbiAgfVxuXG4gIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgY2FjaGUuZm9yY2UzRCA9IF9jb25maWcuZm9yY2UzRDtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtID0gY2FjaGUuc3ZnID8gX3JlbmRlclNWR1RyYW5zZm9ybXMgOiBfc3VwcG9ydHMzRCA/IF9yZW5kZXJDU1NUcmFuc2Zvcm1zIDogX3JlbmRlck5vbjNEVHJhbnNmb3JtcztcbiAgY2FjaGUudW5jYWNoZSA9IDA7XG4gIHJldHVybiBjYWNoZTtcbn0sXG4gICAgX2ZpcnN0VHdvT25seSA9IGZ1bmN0aW9uIF9maXJzdFR3b09ubHkodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiIFwiKSlbMF0gKyBcIiBcIiArIHZhbHVlWzFdO1xufSxcbiAgICAvL2ZvciBoYW5kbGluZyB0cmFuc2Zvcm1PcmlnaW4gdmFsdWVzLCBzdHJpcHBpbmcgb3V0IHRoZSAzcmQgZGltZW5zaW9uXG5fYWRkUHhUcmFuc2xhdGUgPSBmdW5jdGlvbiBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCBzdGFydCwgdmFsdWUpIHtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KHN0YXJ0KTtcbiAgcmV0dXJuIF9yb3VuZChwYXJzZUZsb2F0KHN0YXJ0KSArIHBhcnNlRmxvYXQoX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgdmFsdWUgKyBcInB4XCIsIHVuaXQpKSkgKyB1bml0O1xufSxcbiAgICBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlck5vbjNEVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgY2FjaGUueiA9IFwiMHB4XCI7XG4gIGNhY2hlLnJvdGF0aW9uWSA9IGNhY2hlLnJvdGF0aW9uWCA9IFwiMGRlZ1wiO1xuICBjYWNoZS5mb3JjZTNEID0gMDtcblxuICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfemVyb0RlZyA9IFwiMGRlZ1wiLFxuICAgIF96ZXJvUHggPSBcIjBweFwiLFxuICAgIF9lbmRQYXJlbnRoZXNpcyA9IFwiKSBcIixcbiAgICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueSxcbiAgICAgIHogPSBfcmVmLnosXG4gICAgICByb3RhdGlvbiA9IF9yZWYucm90YXRpb24sXG4gICAgICByb3RhdGlvblkgPSBfcmVmLnJvdGF0aW9uWSxcbiAgICAgIHJvdGF0aW9uWCA9IF9yZWYucm90YXRpb25YLFxuICAgICAgc2tld1ggPSBfcmVmLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zZm9ybVBlcnNwZWN0aXZlID0gX3JlZi50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxcbiAgICAgIGZvcmNlM0QgPSBfcmVmLmZvcmNlM0QsXG4gICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgIHpPcmlnaW4gPSBfcmVmLnpPcmlnaW4sXG4gICAgICB0cmFuc2Zvcm1zID0gXCJcIixcbiAgICAgIHVzZTNEID0gZm9yY2UzRCA9PT0gXCJhdXRvXCIgJiYgcmF0aW8gJiYgcmF0aW8gIT09IDEgfHwgZm9yY2UzRCA9PT0gdHJ1ZTsgLy8gU2FmYXJpIGhhcyBhIGJ1ZyB0aGF0IGNhdXNlcyBpdCBub3QgdG8gcmVuZGVyIDNEIHRyYW5zZm9ybS1vcmlnaW4gdmFsdWVzIHByb3Blcmx5LCBzbyB3ZSBmb3JjZSB0aGUgeiBvcmlnaW4gdG8gMCwgcmVjb3JkIGl0IGluIHRoZSBjYWNoZSwgYW5kIHRoZW4gZG8gdGhlIG1hdGggaGVyZSB0byBvZmZzZXQgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYWNjb3JkaW5nbHkgKGJhc2ljYWxseSBkbyB0aGUgM0QgdHJhbnNmb3JtLW9yaWdpbiBwYXJ0IG1hbnVhbGx5KVxuXG5cbiAgaWYgKHpPcmlnaW4gJiYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcgfHwgcm90YXRpb25ZICE9PSBfemVyb0RlZykpIHtcbiAgICB2YXIgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWSkgKiBfREVHMlJBRCxcbiAgICAgICAgYTEzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBhMzMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgIGNvcztcblxuICAgIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblgpICogX0RFRzJSQUQ7XG4gICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHggPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB4LCBhMTMgKiBjb3MgKiAtek9yaWdpbik7XG4gICAgeSA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHksIC1NYXRoLnNpbihhbmdsZSkgKiAtek9yaWdpbik7XG4gICAgeiA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHosIGEzMyAqIGNvcyAqIC16T3JpZ2luICsgek9yaWdpbik7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtUGVyc3BlY3RpdmUgIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicGVyc3BlY3RpdmUoXCIgKyB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJ0cmFuc2xhdGUoXCIgKyB4UGVyY2VudCArIFwiJSwgXCIgKyB5UGVyY2VudCArIFwiJSkgXCI7XG4gIH1cblxuICBpZiAodXNlM0QgfHwgeCAhPT0gX3plcm9QeCB8fCB5ICE9PSBfemVyb1B4IHx8IHogIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IHogIT09IF96ZXJvUHggfHwgdXNlM0QgPyBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyB6ICsgXCIpIFwiIDogXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlKFwiICsgcm90YXRpb24gKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25ZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVZKFwiICsgcm90YXRpb25ZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWChcIiArIHJvdGF0aW9uWCArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChza2V3WCAhPT0gX3plcm9EZWcgfHwgc2tld1kgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNrZXcoXCIgKyBza2V3WCArIFwiLCBcIiArIHNrZXdZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDEpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2NhbGUoXCIgKyBzY2FsZVggKyBcIiwgXCIgKyBzY2FsZVkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcyB8fCBcInRyYW5zbGF0ZSgwLCAwKVwiO1xufSxcbiAgICBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJTVkdUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZjIgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmMi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZjIueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55LFxuICAgICAgcm90YXRpb24gPSBfcmVmMi5yb3RhdGlvbixcbiAgICAgIHNrZXdYID0gX3JlZjIuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYyLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgeE9yaWdpbiA9IF9yZWYyLnhPcmlnaW4sXG4gICAgICB5T3JpZ2luID0gX3JlZjIueU9yaWdpbixcbiAgICAgIHhPZmZzZXQgPSBfcmVmMi54T2Zmc2V0LFxuICAgICAgeU9mZnNldCA9IF9yZWYyLnlPZmZzZXQsXG4gICAgICBmb3JjZUNTUyA9IF9yZWYyLmZvcmNlQ1NTLFxuICAgICAgdHggPSBwYXJzZUZsb2F0KHgpLFxuICAgICAgdHkgPSBwYXJzZUZsb2F0KHkpLFxuICAgICAgYTExLFxuICAgICAgYTIxLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdGVtcDtcblxuICByb3RhdGlvbiA9IHBhcnNlRmxvYXQocm90YXRpb24pO1xuICBza2V3WCA9IHBhcnNlRmxvYXQoc2tld1gpO1xuICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuXG4gIGlmIChza2V3WSkge1xuICAgIC8vZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIGNvbWJpbmUgYWxsIHNrZXdpbmcgaW50byB0aGUgc2tld1ggYW5kIHJvdGF0aW9uIHZhbHVlcy4gUmVtZW1iZXIsIGEgc2tld1kgb2YgMTAgZGVncmVlcyBsb29rcyB0aGUgc2FtZSBhcyBhIHJvdGF0aW9uIG9mIDEwIGRlZ3JlZXMgcGx1cyBhIHNrZXdYIG9mIDEwIGRlZ3JlZXMuXG4gICAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcbiAgICBza2V3WCArPSBza2V3WTtcbiAgICByb3RhdGlvbiArPSBza2V3WTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiB8fCBza2V3WCkge1xuICAgIHJvdGF0aW9uICo9IF9ERUcyUkFEO1xuICAgIHNrZXdYICo9IF9ERUcyUkFEO1xuICAgIGExMSA9IE1hdGguY29zKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMjEgPSBNYXRoLnNpbihyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTEyID0gTWF0aC5zaW4ocm90YXRpb24gLSBza2V3WCkgKiAtc2NhbGVZO1xuICAgIGEyMiA9IE1hdGguY29zKHJvdGF0aW9uIC0gc2tld1gpICogc2NhbGVZO1xuXG4gICAgaWYgKHNrZXdYKSB7XG4gICAgICBza2V3WSAqPSBfREVHMlJBRDtcbiAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WCAtIHNrZXdZKTtcbiAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgIGExMiAqPSB0ZW1wO1xuICAgICAgYTIyICo9IHRlbXA7XG5cbiAgICAgIGlmIChza2V3WSkge1xuICAgICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1kpO1xuICAgICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICAgIGExMSAqPSB0ZW1wO1xuICAgICAgICBhMjEgKj0gdGVtcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhMTEgPSBfcm91bmQoYTExKTtcbiAgICBhMjEgPSBfcm91bmQoYTIxKTtcbiAgICBhMTIgPSBfcm91bmQoYTEyKTtcbiAgICBhMjIgPSBfcm91bmQoYTIyKTtcbiAgfSBlbHNlIHtcbiAgICBhMTEgPSBzY2FsZVg7XG4gICAgYTIyID0gc2NhbGVZO1xuICAgIGEyMSA9IGExMiA9IDA7XG4gIH1cblxuICBpZiAodHggJiYgIX4oeCArIFwiXCIpLmluZGV4T2YoXCJweFwiKSB8fCB0eSAmJiAhfih5ICsgXCJcIikuaW5kZXhPZihcInB4XCIpKSB7XG4gICAgdHggPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB4LCBcInB4XCIpO1xuICAgIHR5ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInlcIiwgeSwgXCJweFwiKTtcbiAgfVxuXG4gIGlmICh4T3JpZ2luIHx8IHlPcmlnaW4gfHwgeE9mZnNldCB8fCB5T2Zmc2V0KSB7XG4gICAgdHggPSBfcm91bmQodHggKyB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhMTEgKyB5T3JpZ2luICogYTEyKSArIHhPZmZzZXQpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeU9yaWdpbiAtICh4T3JpZ2luICogYTIxICsgeU9yaWdpbiAqIGEyMikgKyB5T2Zmc2V0KTtcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIC8vVGhlIFNWRyBzcGVjIGRvZXNuJ3Qgc3VwcG9ydCBwZXJjZW50YWdlLWJhc2VkIHRyYW5zbGF0aW9uIGluIHRoZSBcInRyYW5zZm9ybVwiIGF0dHJpYnV0ZSwgc28gd2UgbWVyZ2UgaXQgaW50byB0aGUgdHJhbnNsYXRpb24gdG8gc2ltdWxhdGUgaXQuXG4gICAgdGVtcCA9IHRhcmdldC5nZXRCQm94KCk7XG4gICAgdHggPSBfcm91bmQodHggKyB4UGVyY2VudCAvIDEwMCAqIHRlbXAud2lkdGgpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeVBlcmNlbnQgLyAxMDAgKiB0ZW1wLmhlaWdodCk7XG4gIH1cblxuICB0ZW1wID0gXCJtYXRyaXgoXCIgKyBhMTEgKyBcIixcIiArIGEyMSArIFwiLFwiICsgYTEyICsgXCIsXCIgKyBhMjIgKyBcIixcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRlbXApO1xuXG4gIGlmIChmb3JjZUNTUykge1xuICAgIC8vc29tZSBicm93c2VycyBwcmlvcml0aXplIENTUyB0cmFuc2Zvcm1zIG92ZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFdoZW4gd2Ugc2Vuc2UgdGhhdCB0aGUgdXNlciBoYXMgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCwgd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB0aGlzIHdheSAob3RoZXJ3aXNlIHNvbWUgYnJvd3NlciBzaW1wbHkgd29uJ3QgcmVuZGVyIHRoZSAgdHJhbnNmb3JtIGF0dHJpYnV0ZSBjaGFuZ2VzISlcbiAgICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcDtcbiAgfVxufSxcbiAgICBfYWRkUm90YXRpb25hbFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGVuZFZhbHVlLCByZWxhdGl2ZSkge1xuICB2YXIgY2FwID0gMzYwLFxuICAgICAgaXNTdHJpbmcgPSBfaXNTdHJpbmcoZW5kVmFsdWUpLFxuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSkgKiAoaXNTdHJpbmcgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYWRcIikgPyBfUkFEMkRFRyA6IDEpLFxuICAgICAgY2hhbmdlID0gcmVsYXRpdmUgPyBlbmROdW0gKiByZWxhdGl2ZSA6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgZmluYWxWYWx1ZSA9IHN0YXJ0TnVtICsgY2hhbmdlICsgXCJkZWdcIixcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHB0O1xuXG4gIGlmIChpc1N0cmluZykge1xuICAgIGRpcmVjdGlvbiA9IGVuZFZhbHVlLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwic2hvcnRcIikge1xuICAgICAgY2hhbmdlICU9IGNhcDtcblxuICAgICAgaWYgKGNoYW5nZSAhPT0gY2hhbmdlICUgKGNhcCAvIDIpKSB7XG4gICAgICAgIGNoYW5nZSArPSBjaGFuZ2UgPCAwID8gY2FwIDogLWNhcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImN3XCIgJiYgY2hhbmdlIDwgMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSArIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJjY3dcIiAmJiBjaGFuZ2UgPiAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlIC0gY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH1cbiAgfVxuXG4gIHBsdWdpbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGNoYW5nZSwgX3JlbmRlclByb3BXaXRoRW5kKTtcbiAgcHQuZSA9IGZpbmFsVmFsdWU7XG4gIHB0LnUgPSBcImRlZ1wiO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkUmF3VHJhbnNmb3JtUFRzID0gZnVuY3Rpb24gX2FkZFJhd1RyYW5zZm9ybVBUcyhwbHVnaW4sIHRyYW5zZm9ybXMsIHRhcmdldCkge1xuICAvL2ZvciBoYW5kbGluZyBjYXNlcyB3aGVyZSBzb21lb25lIHBhc3NlcyBpbiBhIHdob2xlIHRyYW5zZm9ybSBzdHJpbmcsIGxpa2UgdHJhbnNmb3JtOiBcInNjYWxlKDIsIDMpIHJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWSgzMGVtKVwiXG4gIHZhciBzdHlsZSA9IF90ZW1wRGl2U3R5bGVyLnN0eWxlLFxuICAgICAgc3RhcnRDYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgIGV4Y2x1ZGUgPSBcInBlcnNwZWN0aXZlLGZvcmNlM0QsdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpblwiLFxuICAgICAgZW5kQ2FjaGUsXG4gICAgICBwLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBlbmROdW0sXG4gICAgICBzdGFydFVuaXQsXG4gICAgICBlbmRVbml0O1xuICBzdHlsZS5jc3NUZXh0ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmNzc1RleHQgKyBcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO1wiOyAvLyUtYmFzZWQgdHJhbnNsYXRpb25zIHdpbGwgZmFpbCB1bmxlc3Mgd2Ugc2V0IHRoZSB3aWR0aC9oZWlnaHQgdG8gbWF0Y2ggdGhlIG9yaWdpbmFsIHRhcmdldCAoYW5kIHBhZGRpbmcvYm9yZGVycyBjYW4gYWZmZWN0IGl0KVxuXG4gIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXM7XG5cbiAgX2RvYy5ib2R5LmFwcGVuZENoaWxkKF90ZW1wRGl2U3R5bGVyKTtcblxuICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybShfdGVtcERpdlN0eWxlciwgMSk7XG5cbiAgZm9yIChwIGluIF90cmFuc2Zvcm1Qcm9wcykge1xuICAgIHN0YXJ0VmFsdWUgPSBzdGFydENhY2hlW3BdO1xuICAgIGVuZFZhbHVlID0gZW5kQ2FjaGVbcF07XG5cbiAgICBpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgZXhjbHVkZS5pbmRleE9mKHApIDwgMCkge1xuICAgICAgLy90d2VlbmluZyB0byBubyBwZXJzcGVjdGl2ZSBnaXZlcyB2ZXJ5IHVuaW50dWl0aXZlIHJlc3VsdHMgLSBqdXN0IGtlZXAgdGhlIHNhbWUgcGVyc3BlY3RpdmUgaW4gdGhhdCBjYXNlLlxuICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgIHN0YXJ0TnVtID0gc3RhcnRVbml0ICE9PSBlbmRVbml0ID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSA6IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgIHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHN0YXJ0Q2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmROdW0gLSBzdGFydE51bSwgX3JlbmRlckNTU1Byb3ApO1xuICAgICAgcGx1Z2luLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICBwbHVnaW4uX3Byb3BzLnB1c2gocCk7XG4gICAgfVxuICB9XG5cbiAgX2RvYy5ib2R5LnJlbW92ZUNoaWxkKF90ZW1wRGl2U3R5bGVyKTtcbn07IC8vIGhhbmRsZSBzcGxpdHRpbmcgYXBhcnQgcGFkZGluZywgbWFyZ2luLCBib3JkZXJXaWR0aCwgYW5kIGJvcmRlclJhZGl1cyBpbnRvIHRoZWlyIDQgY29tcG9uZW50cy4gRmlyZWZveCwgZm9yIGV4YW1wbGUsIHdvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5IC0gaXQgd2lsbCBvbmx5IGRvIGJvcmRlclRvcExlZnRSYWRpdXMgYW5kIHRoZSBvdGhlciBjb3JuZXJzLiBXZSBhbHNvIHdhbnQgdG8gaGFuZGxlIHBhZGRpbmdUb3AsIG1hcmdpbkxlZnQsIGJvcmRlclJpZ2h0V2lkdGgsIGV0Yy5cblxuXG5fZm9yRWFjaE5hbWUoXCJwYWRkaW5nLG1hcmdpbixXaWR0aCxSYWRpdXNcIiwgZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gIHZhciB0ID0gXCJUb3BcIixcbiAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICBiID0gXCJCb3R0b21cIixcbiAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBpbmRleCA8IDIgPyBuYW1lICsgc2lkZSA6IFwiYm9yZGVyXCIgKyBzaWRlICsgbmFtZTtcbiAgfSk7XG5cbiAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGEsIHZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vIGdldHRlciwgcGFzc2VkIHRhcmdldCwgcHJvcGVydHksIGFuZCB1bml0IChmcm9tIF9nZXQoKSlcbiAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9nZXQocGx1Z2luLCBwcm9wLCBwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHZhcnMuc3BsaXQoYVswXSkubGVuZ3RoID09PSA1ID8gYVswXSA6IHZhcnM7XG4gICAgfVxuXG4gICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB2YXJzID0ge307XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgfSk7XG4gICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gIH07XG59KTtcblxuZXhwb3J0IHZhciBDU1NQbHVnaW4gPSB7XG4gIG5hbWU6IFwiY3NzXCIsXG4gIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGU7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcyxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIHN0YXJ0TnVtLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgcCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBzbW9vdGgsXG4gICAgICAgIGhhc1ByaW9yaXR5O1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgIGlmIChfcGx1Z2luc1twXSAmJiBfY2hlY2tQbHVnaW4ocCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKSB7XG4gICAgICAgIC8vcGx1Z2luc1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIHNwZWNpYWxQcm9wID0gX3NwZWNpYWxQcm9wc1twXTtcblxuICAgICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbmRWYWx1ZSA9IGVuZFZhbHVlLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpO1xuICAgICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBfcmVwbGFjZVJhbmRvbShlbmRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGVjaWFsUHJvcCkge1xuICAgICAgICBpZiAoc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pKSB7XG4gICAgICAgICAgaGFzUHJpb3JpdHkgPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHAuc3Vic3RyKDAsIDIpID09PSBcIi0tXCIpIHtcbiAgICAgICAgLy9DU1MgdmFyaWFibGVcbiAgICAgICAgdGhpcy5hZGQoc3R5bGUsIFwic2V0UHJvcGVydHlcIiwgZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiLCBlbmRWYWx1ZSArIFwiXCIsIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApO1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgIHJlbGF0aXZlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICAgICAgICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtIHx8IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQpOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGdzYXAuc2V0KC4uLiB7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCg1MHZ3KVwifSksIHRoZSBfZ2V0KCkgY2FsbCBkb2Vzbid0IHBhcnNlIHRoZSB0cmFuc2Zvcm0sIHRodXMgY2FjaGUucmVuZGVyVHJhbnNmb3JtIHdvbid0IGJlIHNldCB5ZXQgc28gZm9yY2UgdGhlIHBhcnNpbmcgb2YgdGhlIHRyYW5zZm9ybSBoZXJlLlxuXG4gICAgICAgICAgICBzbW9vdGggPSB2YXJzLnNtb290aE9yaWdpbiAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoO1xuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTsgLy90aGUgZmlyc3QgdGltZSB0aHJvdWdoLCBjcmVhdGUgdGhlIHJlbmRlcmluZyBQcm9wVHdlZW4gc28gdGhhdCBpdCBydW5zIExBU1QgKGluIHRoZSBsaW5rZWQgbGlzdCwgd2Uga2VlcCBhZGRpbmcgdG8gdGhlIGJlZ2lubmluZylcblxuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7IC8vZmxhZyBpdCBhcyBkZXBlbmRlbnQgc28gdGhhdCBpZiB0aGluZ3MgZ2V0IGtpbGxlZC9vdmVyd3JpdHRlbiBhbmQgdGhpcyBpcyB0aGUgb25seSBQcm9wVHdlZW4gbGVmdCwgd2UgY2FuIHNhZmVseSBraWxsIHRoZSB3aG9sZSB0d2Vlbi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGNhY2hlLCBcInNjYWxlWVwiLCBjYWNoZS5zY2FsZVksIHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBjYWNoZS5zY2FsZVkpO1xuICAgICAgICAgICAgcHJvcHMucHVzaChcInNjYWxlWVwiLCBwKTtcbiAgICAgICAgICAgIHAgKz0gXCJYXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInRyYW5zZm9ybU9yaWdpblwiKSB7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTsgLy9pbiBjYXNlIHNvbWV0aGluZyBsaWtlIFwibGVmdCB0b3BcIiBvciBcImJvdHRvbSByaWdodFwiIGlzIHBhc3NlZCBpbi4gQ29udmVydCB0byBwZXJjZW50YWdlcy5cblxuICAgICAgICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMCwgc21vb3RoLCAwLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZFVuaXQgPSBwYXJzZUZsb2F0KGVuZFZhbHVlLnNwbGl0KFwiIFwiKVsyXSkgfHwgMDsgLy9oYW5kbGUgdGhlIHpPcmlnaW4gc2VwYXJhdGVseSFcblxuICAgICAgICAgICAgICBlbmRVbml0ICE9PSBjYWNoZS56T3JpZ2luICYmIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInpPcmlnaW5cIiwgY2FjaGUuek9yaWdpbiwgZW5kVW5pdCk7XG5cbiAgICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgc3R5bGUsIHAsIF9maXJzdFR3b09ubHkoc3RhcnRWYWx1ZSksIF9maXJzdFR3b09ubHkoZW5kVmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInN2Z09yaWdpblwiKSB7XG4gICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwIGluIF9yb3RhdGlvbmFsUHJvcGVydGllcykge1xuICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwic21vb3RoT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInNtb290aFwiLCBjYWNoZS5zbW9vdGgsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcImZvcmNlM0RcIikge1xuICAgICAgICAgICAgY2FjaGVbcF0gPSBlbmRWYWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgX2FkZFJhd1RyYW5zZm9ybVBUcyh0aGlzLCBlbmRWYWx1ZSwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICBwID0gX2NoZWNrUHJvcFByZWZpeChwKSB8fCBwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCB8fCAoZW5kTnVtIHx8IGVuZE51bSA9PT0gMCkgJiYgKHN0YXJ0TnVtIHx8IHN0YXJ0TnVtID09PSAwKSAmJiAhX2NvbXBsZXhFeHAudGVzdChlbmRWYWx1ZSkgJiYgcCBpbiBzdHlsZSkge1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IChzdGFydFZhbHVlICsgXCJcIikuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgICAgZW5kTnVtIHx8IChlbmROdW0gPSAwKTsgLy8gcHJvdGVjdCBhZ2FpbnN0IE5hTlxuXG4gICAgICAgICAgZW5kVW5pdCA9IChlbmRWYWx1ZSArIFwiXCIpLnN1YnN0cigoZW5kTnVtICsgXCJcIikubGVuZ3RoKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG5cbiAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgICBzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBpc1RyYW5zZm9ybVJlbGF0ZWQgPyBjYWNoZSA6IHN0eWxlLCBwLCBzdGFydE51bSwgcmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIHN0YXJ0TnVtLCBlbmRVbml0ID09PSBcInB4XCIgJiYgdmFycy5hdXRvUm91bmQgIT09IGZhbHNlICYmICFpc1RyYW5zZm9ybVJlbGF0ZWQgPyBfcmVuZGVyUm91bmRlZENTU1Byb3AgOiBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgICAgdGhpcy5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQpIHtcbiAgICAgICAgICAgIC8vd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcsIHdlIG5lZWQgdG8gcmV2ZXJ0IGl0IHRvIHRoZSBPTEQvT1JJR0lOQUwgdmFsdWUgKHdpdGggdGhvc2UgdW5pdHMpLiBXZSByZWNvcmQgdGhhdCBhcyBhIFwiYlwiIChiZWdpbm5pbmcpIHByb3BlcnR5IGFuZCBwb2ludCB0byBhIHJlbmRlciBtZXRob2QgdGhhdCBoYW5kbGVzIHRoYXQuIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgICAgICAgICB0aGlzLl9wdC5iID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3B0LnIgPSBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICBpZiAocCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vbWF5YmUgaXQncyBub3QgYSBzdHlsZSAtIGl0IGNvdWxkIGJlIGEgcHJvcGVydHkgYWRkZWQgZGlyZWN0bHkgdG8gYW4gZWxlbWVudCBpbiB3aGljaCBjYXNlIHdlJ2xsIHRyeSB0byBhbmltYXRlIHRoYXQuXG4gICAgICAgICAgICB0aGlzLmFkZCh0YXJnZXQsIHAsIHRhcmdldFtwXSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pc3NpbmdQbHVnaW4ocCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHRoaXMsIHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICB9LFxuICBnZXQ6IF9nZXQsXG4gIGFsaWFzZXM6IF9wcm9wZXJ0eUFsaWFzZXMsXG4gIGdldFNldHRlcjogZnVuY3Rpb24gZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHBsdWdpbikge1xuICAgIC8vcmV0dXJucyBhIHNldHRlciBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgdGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUgYW5kIGFwcGxpZXMgaXQgYWNjb3JkaW5nbHkuIFJlbWVtYmVyLCBwcm9wZXJ0aWVzIGxpa2UgXCJ4XCIgYXJlbid0IGFzIHNpbXBsZSBhcyB0YXJnZXQuc3R5bGUucHJvcGVydHkgPSB2YWx1ZSBiZWNhdXNlIHRoZXkndmUgZ290IHRvIGJlIGFwcGxpZWQgdG8gYSBwcm94eSBvYmplY3QgYW5kIHRoZW4gbWVyZ2VkIGludG8gYSB0cmFuc2Zvcm0gc3RyaW5nIGluIGEgcmVuZGVyZXIuXG4gICAgdmFyIHAgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcbiAgICBwICYmIHAuaW5kZXhPZihcIixcIikgPCAwICYmIChwcm9wZXJ0eSA9IHApO1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wICYmICh0YXJnZXQuX2dzYXAueCB8fCBfZ2V0KHRhcmdldCwgXCJ4XCIpKSA/IHBsdWdpbiAmJiBfcmVjZW50U2V0dGVyUGx1Z2luID09PSBwbHVnaW4gPyBwcm9wZXJ0eSA9PT0gXCJzY2FsZVwiID8gX3NldHRlclNjYWxlIDogX3NldHRlclRyYW5zZm9ybSA6IChfcmVjZW50U2V0dGVyUGx1Z2luID0gcGx1Z2luIHx8IHt9KSAmJiAocHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgOiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcikgOiB0YXJnZXQuc3R5bGUgJiYgIV9pc1VuZGVmaW5lZCh0YXJnZXQuc3R5bGVbcHJvcGVydHldKSA/IF9zZXR0ZXJDU1NTdHlsZSA6IH5wcm9wZXJ0eS5pbmRleE9mKFwiLVwiKSA/IF9zZXR0ZXJDU1NQcm9wIDogX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KTtcbiAgfSxcbiAgY29yZToge1xuICAgIF9yZW1vdmVQcm9wZXJ0eTogX3JlbW92ZVByb3BlcnR5LFxuICAgIF9nZXRNYXRyaXg6IF9nZXRNYXRyaXhcbiAgfVxufTtcbmdzYXAudXRpbHMuY2hlY2tQcmVmaXggPSBfY2hlY2tQcm9wUHJlZml4O1xuXG4oZnVuY3Rpb24gKHBvc2l0aW9uQW5kU2NhbGUsIHJvdGF0aW9uLCBvdGhlcnMsIGFsaWFzZXMpIHtcbiAgdmFyIGFsbCA9IF9mb3JFYWNoTmFtZShwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbiArIFwiLFwiICsgb3RoZXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90cmFuc2Zvcm1Qcm9wc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9mb3JFYWNoTmFtZShyb3RhdGlvbiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJkZWdcIjtcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfcHJvcGVydHlBbGlhc2VzW2FsbFsxM11dID0gcG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb247XG5cbiAgX2ZvckVhY2hOYW1lKGFsaWFzZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG4gICAgX3Byb3BlcnR5QWxpYXNlc1tzcGxpdFsxXV0gPSBhbGxbc3BsaXRbMF1dO1xuICB9KTtcbn0pKFwieCx5LHosc2NhbGUsc2NhbGVYLHNjYWxlWSx4UGVyY2VudCx5UGVyY2VudFwiLCBcInJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblksc2tld1gsc2tld1lcIiwgXCJ0cmFuc2Zvcm0sdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpbixmb3JjZTNELHNtb290aE9yaWdpbix0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcIjA6dHJhbnNsYXRlWCwxOnRyYW5zbGF0ZVksMjp0cmFuc2xhdGVaLDg6cm90YXRlLDg6cm90YXRpb25aLDg6cm90YXRlWiw5OnJvdGF0ZVgsMTA6cm90YXRlWVwiKTtcblxuX2ZvckVhY2hOYW1lKFwieCx5LHosdG9wLHJpZ2h0LGJvdHRvbSxsZWZ0LHdpZHRoLGhlaWdodCxmb250U2l6ZSxwYWRkaW5nLG1hcmdpbixwZXJzcGVjdGl2ZVwiLCBmdW5jdGlvbiAobmFtZSkge1xuICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJweFwiO1xufSk7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKTtcbmV4cG9ydCB7IENTU1BsdWdpbiBhcyBkZWZhdWx0LCBfZ2V0QkJveCwgX2NyZWF0ZUVsZW1lbnQsIF9jaGVja1Byb3BQcmVmaXggYXMgY2hlY2tQcmVmaXggfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nc2FwL0NTU1BsdWdpbi5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiXSwic291cmNlUm9vdCI6IiJ9