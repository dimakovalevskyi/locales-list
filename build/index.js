/*!
 * LocalesList v1.0.0 (https://github.com/dimakovalevskyi/locales-list)
 * Copyright 2020 Dmytro Kovalevskyi
 * 
 * Licensed under MIT (https://dimakovalevskyi.mit-license.org/)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LocalesList"] = factory();
	else
		root["LocalesList"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack://LocalesList/./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack://LocalesList/./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack://LocalesList/./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/iso-3166-1-alpha-2/index.js":
/*!**************************************************!*\
  !*** ./node_modules/iso-3166-1-alpha-2/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function() {\r\n    var Iso31661a2, mout, singleton;\r\n\r\n    mout = __webpack_require__(/*! mout/object */ \"./node_modules/mout/object.js\");\r\n\r\n    Iso31661a2 = (function() {\r\n        function Iso31661a2() {}\r\n\r\n        Iso31661a2.prototype.getCountry = function(code) {\r\n            return Iso31661a2.prototype.countries[code];\r\n        };\r\n\r\n        Iso31661a2.prototype.getCode = function(country) {\r\n            var idx, ret;\r\n            ret = null;\r\n            if (country != null) {\r\n                idx = mout.values(Iso31661a2.prototype.countries).indexOf(country);\r\n                if (idx !== -1) {\r\n                    ret = Object.keys(Iso31661a2.prototype.countries)[idx];\r\n                }\r\n            }\r\n            return ret;\r\n        };\r\n\r\n        Iso31661a2.prototype.getCountries = function() {\r\n            return mout.values(Iso31661a2.prototype.countries);\r\n        };\r\n\r\n        Iso31661a2.prototype.getCodes = function() {\r\n            return Object.keys(Iso31661a2.prototype.countries);\r\n        };\r\n\r\n        Iso31661a2.prototype.getData = function() {\r\n            return Iso31661a2.prototype.countries;\r\n        };\r\n\r\n        Iso31661a2.prototype.countries = {\r\n            AF: \"Afghanistan\",\r\n            AX: \"Åland Islands\",\r\n            AL: \"Albania\",\r\n            DZ: \"Algeria\",\r\n            AS: \"American Samoa\",\r\n            AD: \"Andorra\",\r\n            AO: \"Angola\",\r\n            AI: \"Anguilla\",\r\n            AQ: \"Antarctica\",\r\n            AG: \"Antigua and Barbuda\",\r\n            AR: \"Argentina\",\r\n            AM: \"Armenia\",\r\n            AW: \"Aruba\",\r\n            AU: \"Australia\",\r\n            AT: \"Austria\",\r\n            AZ: \"Azerbaijan\",\r\n            BS: \"Bahamas\",\r\n            BH: \"Bahrain\",\r\n            BD: \"Bangladesh\",\r\n            BB: \"Barbados\",\r\n            BY: \"Belarus\",\r\n            BE: \"Belgium\",\r\n            BZ: \"Belize\",\r\n            BJ: \"Benin\",\r\n            BM: \"Bermuda\",\r\n            BT: \"Bhutan\",\r\n            BO: \"Bolivia, Plurinational State of\",\r\n            BQ: \"Bonaire, Sint Eustatius and Saba\",\r\n            BA: \"Bosnia and Herzegovina\",\r\n            BW: \"Botswana\",\r\n            BV: \"Bouvet Island\",\r\n            BR: \"Brazil\",\r\n            IO: \"British Indian Ocean Territory\",\r\n            BN: \"Brunei Darussalam\",\r\n            BG: \"Bulgaria\",\r\n            BF: \"Burkina Faso\",\r\n            BI: \"Burundi\",\r\n            KH: \"Cambodia\",\r\n            CM: \"Cameroon\",\r\n            CA: \"Canada\",\r\n            CV: \"Cape Verde\",\r\n            KY: \"Cayman Islands\",\r\n            CF: \"Central African Republic\",\r\n            TD: \"Chad\",\r\n            CL: \"Chile\",\r\n            CN: \"China\",\r\n            CX: \"Christmas Island\",\r\n            CC: \"Cocos (Keeling) Islands\",\r\n            CO: \"Colombia\",\r\n            KM: \"Comoros\",\r\n            CG: \"Congo\",\r\n            CD: \"Congo, the Democratic Republic of the\",\r\n            CK: \"Cook Islands\",\r\n            CR: \"Costa Rica\",\r\n            CI: \"Côte d'Ivoire\",\r\n            HR: \"Croatia\",\r\n            CU: \"Cuba\",\r\n            CW: \"Curaçao\",\r\n            CY: \"Cyprus\",\r\n            CZ: \"Czech Republic\",\r\n            DK: \"Denmark\",\r\n            DJ: \"Djibouti\",\r\n            DM: \"Dominica\",\r\n            DO: \"Dominican Republic\",\r\n            EC: \"Ecuador\",\r\n            EG: \"Egypt\",\r\n            SV: \"El Salvador\",\r\n            GQ: \"Equatorial Guinea\",\r\n            ER: \"Eritrea\",\r\n            EE: \"Estonia\",\r\n            ET: \"Ethiopia\",\r\n            FK: \"Falkland Islands (Malvinas)\",\r\n            FO: \"Faroe Islands\",\r\n            FJ: \"Fiji\",\r\n            FI: \"Finland\",\r\n            FR: \"France\",\r\n            GF: \"French Guiana\",\r\n            PF: \"French Polynesia\",\r\n            TF: \"French Southern Territories\",\r\n            GA: \"Gabon\",\r\n            GM: \"Gambia\",\r\n            GE: \"Georgia\",\r\n            DE: \"Germany\",\r\n            GH: \"Ghana\",\r\n            GI: \"Gibraltar\",\r\n            GR: \"Greece\",\r\n            GL: \"Greenland\",\r\n            GD: \"Grenada\",\r\n            GP: \"Guadeloupe\",\r\n            GU: \"Guam\",\r\n            GT: \"Guatemala\",\r\n            GG: \"Guernsey\",\r\n            GN: \"Guinea\",\r\n            GW: \"Guinea-Bissau\",\r\n            GY: \"Guyana\",\r\n            HT: \"Haiti\",\r\n            HM: \"Heard Island and McDonald Mcdonald Islands\",\r\n            VA: \"Holy See (Vatican City State)\",\r\n            HN: \"Honduras\",\r\n            HK: \"Hong Kong\",\r\n            HU: \"Hungary\",\r\n            IS: \"Iceland\",\r\n            IN: \"India\",\r\n            ID: \"Indonesia\",\r\n            IR: \"Iran, Islamic Republic of\",\r\n            IQ: \"Iraq\",\r\n            IE: \"Ireland\",\r\n            IM: \"Isle of Man\",\r\n            IL: \"Israel\",\r\n            IT: \"Italy\",\r\n            JM: \"Jamaica\",\r\n            JP: \"Japan\",\r\n            JE: \"Jersey\",\r\n            JO: \"Jordan\",\r\n            KZ: \"Kazakhstan\",\r\n            KE: \"Kenya\",\r\n            KI: \"Kiribati\",\r\n            KP: \"Korea, Democratic People's Republic of\",\r\n            KR: \"Korea, Republic of\",\r\n            KW: \"Kuwait\",\r\n            KG: \"Kyrgyzstan\",\r\n            LA: \"Lao People's Democratic Republic\",\r\n            LV: \"Latvia\",\r\n            LB: \"Lebanon\",\r\n            LS: \"Lesotho\",\r\n            LR: \"Liberia\",\r\n            LY: \"Libya\",\r\n            LI: \"Liechtenstein\",\r\n            LT: \"Lithuania\",\r\n            LU: \"Luxembourg\",\r\n            MO: \"Macao\",\r\n            MK: \"Macedonia, the Former Yugoslav Republic of\",\r\n            MG: \"Madagascar\",\r\n            MW: \"Malawi\",\r\n            MY: \"Malaysia\",\r\n            MV: \"Maldives\",\r\n            ML: \"Mali\",\r\n            MT: \"Malta\",\r\n            MH: \"Marshall Islands\",\r\n            MQ: \"Martinique\",\r\n            MR: \"Mauritania\",\r\n            MU: \"Mauritius\",\r\n            YT: \"Mayotte\",\r\n            MX: \"Mexico\",\r\n            FM: \"Micronesia, Federated States of\",\r\n            MD: \"Moldova, Republic of\",\r\n            MC: \"Monaco\",\r\n            MN: \"Mongolia\",\r\n            ME: \"Montenegro\",\r\n            MS: \"Montserrat\",\r\n            MA: \"Morocco\",\r\n            MZ: \"Mozambique\",\r\n            MM: \"Myanmar\",\r\n            NA: \"Namibia\",\r\n            NR: \"Nauru\",\r\n            NP: \"Nepal\",\r\n            NL: \"Netherlands\",\r\n            NC: \"New Caledonia\",\r\n            NZ: \"New Zealand\",\r\n            NI: \"Nicaragua\",\r\n            NE: \"Niger\",\r\n            NG: \"Nigeria\",\r\n            NU: \"Niue\",\r\n            NF: \"Norfolk Island\",\r\n            MP: \"Northern Mariana Islands\",\r\n            NO: \"Norway\",\r\n            OM: \"Oman\",\r\n            PK: \"Pakistan\",\r\n            PW: \"Palau\",\r\n            PS: \"Palestine, State of\",\r\n            PA: \"Panama\",\r\n            PG: \"Papua New Guinea\",\r\n            PY: \"Paraguay\",\r\n            PE: \"Peru\",\r\n            PH: \"Philippines\",\r\n            PN: \"Pitcairn\",\r\n            PL: \"Poland\",\r\n            PT: \"Portugal\",\r\n            PR: \"Puerto Rico\",\r\n            QA: \"Qatar\",\r\n            RE: \"Réunion\",\r\n            RO: \"Romania\",\r\n            RU: \"Russian Federation\",\r\n            RW: \"Rwanda\",\r\n            BL: \"Saint Barthélemy\",\r\n            SH: \"Saint Helena, Ascension and Tristan da Cunha\",\r\n            KN: \"Saint Kitts and Nevis\",\r\n            LC: \"Saint Lucia\",\r\n            MF: \"Saint Martin (French part)\",\r\n            PM: \"Saint Pierre and Miquelon\",\r\n            VC: \"Saint Vincent and the Grenadines\",\r\n            WS: \"Samoa\",\r\n            SM: \"San Marino\",\r\n            ST: \"Sao Tome and Principe\",\r\n            SA: \"Saudi Arabia\",\r\n            SN: \"Senegal\",\r\n            RS: \"Serbia\",\r\n            SC: \"Seychelles\",\r\n            SL: \"Sierra Leone\",\r\n            SG: \"Singapore\",\r\n            SX: \"Sint Maarten (Dutch part)\",\r\n            SK: \"Slovakia\",\r\n            SI: \"Slovenia\",\r\n            SB: \"Solomon Islands\",\r\n            SO: \"Somalia\",\r\n            ZA: \"South Africa\",\r\n            GS: \"South Georgia and the South Sandwich Islands\",\r\n            SS: \"South Sudan\",\r\n            ES: \"Spain\",\r\n            LK: \"Sri Lanka\",\r\n            SD: \"Sudan\",\r\n            SR: \"Suriname\",\r\n            SJ: \"Svalbard and Jan Mayen\",\r\n            SZ: \"Swaziland\",\r\n            SE: \"Sweden\",\r\n            CH: \"Switzerland\",\r\n            SY: \"Syrian Arab Republic\",\r\n            TW: \"Taiwan, Province of China\",\r\n            TJ: \"Tajikistan\",\r\n            TZ: \"Tanzania, United Republic of\",\r\n            TH: \"Thailand\",\r\n            TL: \"Timor-Leste\",\r\n            TG: \"Togo\",\r\n            TK: \"Tokelau\",\r\n            TO: \"Tonga\",\r\n            TT: \"Trinidad and Tobago\",\r\n            TN: \"Tunisia\",\r\n            TR: \"Turkey\",\r\n            TM: \"Turkmenistan\",\r\n            TC: \"Turks and Caicos Islands\",\r\n            TV: \"Tuvalu\",\r\n            UG: \"Uganda\",\r\n            UA: \"Ukraine\",\r\n            AE: \"United Arab Emirates\",\r\n            GB: \"United Kingdom\",\r\n            US: \"United States\",\r\n            UM: \"United States Minor Outlying Islands\",\r\n            UY: \"Uruguay\",\r\n            UZ: \"Uzbekistan\",\r\n            VU: \"Vanuatu\",\r\n            VE: \"Venezuela, Bolivarian Republic of\",\r\n            VN: \"Viet Nam\",\r\n            VG: \"Virgin Islands, British\",\r\n            VI: \"Virgin Islands, U.S.\",\r\n            WF: \"Wallis and Futuna\",\r\n            EH: \"Western Sahara\",\r\n            YE: \"Yemen\",\r\n            ZM: \"Zambia\",\r\n            ZW: \"Zimbabwe\"\r\n        };\r\n\r\n        return Iso31661a2;\r\n\r\n    })();\r\n\r\n    singleton = null;\r\n\r\n    module.exports = (function() {\r\n        return singleton != null ? singleton : singleton = new Iso31661a2();\r\n    })();\r\n\r\n}).call(this);\r\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/iso-3166-1-alpha-2/index.js?");

/***/ }),

/***/ "./node_modules/langmap/language-mapping-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/langmap/language-mapping-list.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n      return (root.languageMappingList = factory());\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(this, function() {\n  return {\n    'ach': {\n      nativeName: \"Lwo\",\n      englishName: \"Acholi\"\n    },\n    'ady': {\n      nativeName: \"Адыгэбзэ\",\n      englishName: \"Adyghe\"\n    },\n    'af': {\n      nativeName: \"Afrikaans\",\n      englishName: \"Afrikaans\"\n    },\n    'af-NA': {\n      nativeName: \"Afrikaans (Namibia)\",\n      englishName: \"Afrikaans (Namibia)\"\n    },\n    'af-ZA': {\n      nativeName: \"Afrikaans (South Africa)\",\n      englishName: \"Afrikaans (South Africa)\"\n    },\n    'ak': {\n      nativeName: \"Tɕɥi\",\n      englishName: \"Akan\"\n    },\n    'ar': {\n      nativeName: \"العربية\",\n      englishName: \"Arabic\"\n    },\n    'ar-AR': {\n      nativeName: \"العربية\",\n      englishName: \"Arabic\"\n    },\n    'ar-MA': {\n      nativeName: \"العربية\",\n      englishName: \"Arabic (Morocco)\"\n    },\n    'ar-SA': {\n      nativeName: \"العربية (السعودية)\",\n      englishName: \"Arabic (Saudi Arabia)\"\n    },\n    'ay-BO': {\n      nativeName: \"Aymar aru\",\n      englishName: \"Aymara\"\n    },\n    'az': {\n      nativeName: \"Azərbaycan dili\",\n      englishName: \"Azerbaijani\"\n    },\n    'az-AZ': {\n      nativeName: \"Azərbaycan dili\",\n      englishName: \"Azerbaijani\"\n    },\n    'be-BY': {\n      nativeName: \"Беларуская\",\n      englishName: \"Belarusian\"\n    },\n    'bg': {\n      nativeName: \"Български\",\n      englishName: \"Bulgarian\"\n    },\n    'bg-BG': {\n      nativeName: \"Български\",\n      englishName: \"Bulgarian\"\n    },\n    'bn': {\n      nativeName: \"বাংলা\",\n      englishName: \"Bengali\"\n    },\n    'bn-IN': {\n      nativeName: \"বাংলা (ভারত)\",\n      englishName: \"Bengali (India)\"\n    },\n    'bn-BD': {\n      nativeName: \"বাংলা(বাংলাদেশ)\",\n      englishName: \"Bengali (Bangladesh)\"\n    },\n    'bs-BA': {\n      nativeName: \"Bosanski\",\n      englishName: \"Bosnian\"\n    },\n    'ca': {\n      nativeName: \"Català\",\n      englishName: \"Catalan\"\n    },\n    'ca-ES': {\n      nativeName: \"Català\",\n      englishName: \"Catalan\"\n    },\n    'cak': {\n      nativeName: \"Maya Kaqchikel\",\n      englishName: \"Kaqchikel\"\n    },\n    'ck-US': {\n      nativeName: \"ᏣᎳᎩ (tsalagi)\",\n      englishName: \"Cherokee\"\n    },\n    'cs': {\n      nativeName: \"Čeština\",\n      englishName: \"Czech\"\n    },\n    'cs-CZ': {\n      nativeName: \"Čeština\",\n      englishName: \"Czech\"\n    },\n    'cy': {\n      nativeName: \"Cymraeg\",\n      englishName: \"Welsh\"\n    },\n    'cy-GB': {\n      nativeName: \"Cymraeg\",\n      englishName: \"Welsh\"\n    },\n    'da': {\n      nativeName: \"Dansk\",\n      englishName: \"Danish\"\n    },\n    'da-DK': {\n      nativeName: \"Dansk\",\n      englishName: \"Danish\"\n    },\n    'de': {\n      nativeName: \"Deutsch\",\n      englishName: \"German\"\n    },\n    'de-AT': {\n      nativeName: \"Deutsch (Österreich)\",\n      englishName: \"German (Austria)\"\n    },\n    'de-DE': {\n      nativeName: \"Deutsch (Deutschland)\",\n      englishName: \"German (Germany)\"\n    },\n    'de-CH': {\n      nativeName: \"Deutsch (Schweiz)\",\n      englishName: \"German (Switzerland)\"\n    },\n    'dsb': {\n      nativeName: \"Dolnoserbšćina\",\n      englishName: \"Lower Sorbian\"\n    },\n    'el': {\n      nativeName: \"Ελληνικά\",\n      englishName: \"Greek\"\n    },\n    'el-GR': {\n      nativeName: \"Ελληνικά\",\n      englishName: \"Greek (Greece)\"\n    },\n    'en': {\n      nativeName: \"English\",\n      englishName: \"English\"\n    },\n    'en-GB': {\n      nativeName: \"English (UK)\",\n      englishName: \"English (UK)\"\n    },\n    'en-AU': {\n      nativeName: \"English (Australia)\",\n      englishName: \"English (Australia)\"\n    },\n    'en-CA': {\n      nativeName: \"English (Canada)\",\n      englishName: \"English (Canada)\"\n    },\n    'en-IE': {\n      nativeName: \"English (Ireland)\",\n      englishName: \"English (Ireland)\"\n    },\n    'en-IN': {\n      nativeName: \"English (India)\",\n      englishName: \"English (India)\"\n    },\n    'en-PI': {\n      nativeName: \"English (Pirate)\",\n      englishName: \"English (Pirate)\"\n    },\n    'en-UD': {\n      nativeName: \"English (Upside Down)\",\n      englishName: \"English (Upside Down)\"\n    },\n    'en-US': {\n      nativeName: \"English (US)\",\n      englishName: \"English (US)\"\n    },\n    'en-ZA': {\n      nativeName: \"English (South Africa)\",\n      englishName: \"English (South Africa)\"\n    },\n    'en@pirate': {\n      nativeName: \"English (Pirate)\",\n      englishName: \"English (Pirate)\"\n    },\n    'eo': {\n      nativeName: \"Esperanto\",\n      englishName: \"Esperanto\"\n    },\n    'eo-EO': {\n      nativeName: \"Esperanto\",\n      englishName: \"Esperanto\"\n    },\n    'es': {\n      nativeName: \"Español\",\n      englishName: \"Spanish\"\n    },\n    'es-AR': {\n      nativeName: \"Español (Argentine)\",\n      englishName: \"Spanish (Argentina)\"\n    },\n    'es-419': {\n      nativeName: \"Español (Latinoamérica)\",\n      englishName: \"Spanish (Latin America)\"\n    },\n    'es-CL': {\n      nativeName: \"Español (Chile)\",\n      englishName: \"Spanish (Chile)\"\n    },\n    'es-CO': {\n      nativeName: \"Español (Colombia)\",\n      englishName: \"Spanish (Colombia)\"\n    },\n    'es-EC': {\n      nativeName: \"Español (Ecuador)\",\n      englishName: \"Spanish (Ecuador)\"\n    },\n    'es-ES': {\n      nativeName: \"Español (España)\",\n      englishName: \"Spanish (Spain)\"\n    },\n    'es-LA': {\n      nativeName: \"Español (Latinoamérica)\",\n      englishName: \"Spanish (Latin America)\"\n    },\n    'es-NI': {\n      nativeName: \"Español (Nicaragua)\",\n      englishName: \"Spanish (Nicaragua)\"\n    },\n    'es-MX': {\n      nativeName: \"Español (México)\",\n      englishName: \"Spanish (Mexico)\"\n    },\n    'es-US': {\n      nativeName: \"Español (Estados Unidos)\",\n      englishName: \"Spanish (United States)\"\n    },\n    'es-VE': {\n      nativeName: \"Español (Venezuela)\",\n      englishName: \"Spanish (Venezuela)\"\n    },\n    'et': {\n      nativeName: \"eesti keel\",\n      englishName: \"Estonian\"\n    },\n    'et-EE': {\n      nativeName: \"Eesti (Estonia)\",\n      englishName: \"Estonian (Estonia)\"\n    },\n    'eu': {\n      nativeName: \"Euskara\",\n      englishName: \"Basque\"\n    },\n    'eu-ES': {\n      nativeName: \"Euskara\",\n      englishName: \"Basque\"\n    },\n    'fa': {\n      nativeName: \"فارسی\",\n      englishName: \"Persian\"\n    },\n    'fa-IR': {\n      nativeName: \"فارسی\",\n      englishName: \"Persian\"\n    },\n    'fb-LT': {\n      nativeName: \"Leet Speak\",\n      englishName: \"Leet\"\n    },\n    'ff': {\n      nativeName: \"Fulah\",\n      englishName: \"Fulah\"\n    },\n    'fi': {\n      nativeName: \"Suomi\",\n      englishName: \"Finnish\"\n    },\n    'fi-FI': {\n      nativeName: \"Suomi\",\n      englishName: \"Finnish\"\n    },\n    'fo-FO': {\n      nativeName: \"Føroyskt\",\n      englishName: \"Faroese\"\n    },\n    'fr': {\n      nativeName: \"Français\",\n      englishName: \"French\"\n    },\n    'fr-CA': {\n      nativeName: \"Français (Canada)\",\n      englishName: \"French (Canada)\"\n    },\n    'fr-FR': {\n      nativeName: \"Français (France)\",\n      englishName: \"French (France)\"\n    },\n    'fr-BE': {\n      nativeName: \"Français (Belgique)\",\n      englishName: \"French (Belgium)\"\n    },\n    'fr-CH': {\n      nativeName: \"Français (Suisse)\",\n      englishName: \"French (Switzerland)\"\n    },\n    'fy-NL': {\n      nativeName: \"Frysk\",\n      englishName: \"Frisian (West)\"\n    },\n    'ga': {\n      nativeName: \"Gaeilge\",\n      englishName: \"Irish\"\n    },\n    'ga-IE': {\n      nativeName: \"Gaeilge (Gaelic)\",\n      englishName: \"Irish (Gaelic)\"\n    },\n    'gl': {\n      nativeName: \"Galego\",\n      englishName: \"Galician\"\n    },\n    'gl-ES': {\n      nativeName: \"Galego\",\n      englishName: \"Galician\"\n    },\n    'gn-PY': {\n      nativeName: \"Avañe'ẽ\",\n      englishName: \"Guarani\"\n    },\n    'gu-IN': {\n      nativeName: \"ગુજરાતી\",\n      englishName: \"Gujarati\"\n    },\n    'gx-GR': {\n      nativeName: \"Ἑλληνική ἀρχαία\",\n      englishName: \"Classical Greek\"\n    },\n    'he': {\n      nativeName: \"עברית‏\",\n      englishName: \"Hebrew\"\n    },\n    'he-IL': {\n      nativeName: \"עברית‏\",\n      englishName: \"Hebrew\"\n    },\n    'hi': {\n      nativeName: \"हिन्दी\",\n      englishName: \"Hindi\"\n    },\n    'hi-IN': {\n      nativeName: \"हिन्दी\",\n      englishName: \"Hindi\"\n    },\n    'hr': {\n      nativeName: \"Hrvatski\",\n      englishName: \"Croatian\"\n    },\n    'hr-HR': {\n      nativeName: \"Hrvatski\",\n      englishName: \"Croatian\"\n    },\n    'hsb': {\n      nativeName: \"Hornjoserbšćina\",\n      englishName: \"Upper Sorbian\"\n    },\n    'ht': {\n      nativeName: \"Kreyòl\",\n      englishName: \"Haitian Creole\"\n    },\n    'hu': {\n      nativeName: \"Magyar\",\n      englishName: \"Hungarian\"\n    },\n    'hu-HU': {\n      nativeName: \"Magyar\",\n      englishName: \"Hungarian\"\n    },\n    'hy-AM': {\n      nativeName: \"Հայերեն\",\n      englishName: \"Armenian\"\n    },\n    'id': {\n      nativeName: \"Bahasa Indonesia\",\n      englishName: \"Indonesian\"\n    },\n    'id-ID': {\n      nativeName: \"Bahasa Indonesia\",\n      englishName: \"Indonesian\"\n    },\n    'is': {\n      nativeName: \"Íslenska\",\n      englishName: \"Icelandic\"\n    },\n    'is-IS': {\n      nativeName: \"Íslenska (Iceland)\",\n      englishName: \"Icelandic (Iceland)\"\n    },\n    'it': {\n      nativeName: \"Italiano\",\n      englishName: \"Italian\"\n    },\n    'it-IT': {\n      nativeName: \"Italiano\",\n      englishName: \"Italian\"\n    },\n    'ja': {\n      nativeName: \"日本語\",\n      englishName: \"Japanese\"\n    },\n    'ja-JP': {\n      nativeName: \"日本語\",\n      englishName: \"Japanese\"\n    },\n    'jv-ID': {\n      nativeName: \"Basa Jawa\",\n      englishName: \"Javanese\"\n    },\n    'ka-GE': {\n      nativeName: \"ქართული\",\n      englishName: \"Georgian\"\n    },\n    'kk-KZ': {\n      nativeName: \"Қазақша\",\n      englishName: \"Kazakh\"\n    },\n    'km': {\n      nativeName: \"ភាសាខ្មែរ\",\n      englishName: \"Khmer\"\n    },\n    'km-KH': {\n      nativeName: \"ភាសាខ្មែរ\",\n      englishName: \"Khmer\"\n    },\n    'kab': {\n      nativeName: \"Taqbaylit\",\n      englishName: \"Kabyle\"\n    },\n    'kn': {\n      nativeName: \"ಕನ್ನಡ\",\n      englishName: \"Kannada\"\n    },\n    'kn-IN': {\n      nativeName: \"ಕನ್ನಡ (India)\",\n      englishName: \"Kannada (India)\"\n    },\n    'ko': {\n      nativeName: \"한국어\",\n      englishName: \"Korean\"\n    },\n    'ko-KR': {\n      nativeName: \"한국어 (韩国)\",\n      englishName: \"Korean (Korea)\"\n    },\n    'ku-TR': {\n      nativeName: \"Kurdî\",\n      englishName: \"Kurdish\"\n    },\n    'la': {\n      nativeName: \"Latin\",\n      englishName: \"Latin\"\n    },\n    'la-VA': {\n      nativeName: \"Latin\",\n      englishName: \"Latin\"\n    },\n    'lb': {\n      nativeName: \"Lëtzebuergesch\",\n      englishName: \"Luxembourgish\"\n    },\n    'li-NL': {\n      nativeName: \"Lèmbörgs\",\n      englishName: \"Limburgish\"\n    },\n    'lt': {\n      nativeName: \"Lietuvių\",\n      englishName: \"Lithuanian\"\n    },\n    'lt-LT': {\n      nativeName: \"Lietuvių\",\n      englishName: \"Lithuanian\"\n    },\n    'lv': {\n      nativeName: \"Latviešu\",\n      englishName: \"Latvian\"\n    },\n    'lv-LV': {\n      nativeName: \"Latviešu\",\n      englishName: \"Latvian\"\n    },\n    'mai': {\n      nativeName: \"मैथिली, মৈথিলী\",\n      englishName: \"Maithili\"\n    },\n    'mg-MG': {\n      nativeName: \"Malagasy\",\n      englishName: \"Malagasy\"\n    },\n    'mk': {\n      nativeName: \"Македонски\",\n      englishName: \"Macedonian\"\n    },\n    'mk-MK': {\n      nativeName: \"Македонски (Македонски)\",\n      englishName: \"Macedonian (Macedonian)\"\n    },\n    'ml': {\n      nativeName: \"മലയാളം\",\n      englishName: \"Malayalam\"\n    },\n    'ml-IN': {\n      nativeName: \"മലയാളം\",\n      englishName: \"Malayalam\"\n    },\n    'mn-MN': {\n      nativeName: \"Монгол\",\n      englishName: \"Mongolian\"\n    },\n    'mr': {\n      nativeName: \"मराठी\",\n      englishName: \"Marathi\"\n    },\n    'mr-IN': {\n      nativeName: \"मराठी\",\n      englishName: \"Marathi\"\n    },\n    'ms': {\n      nativeName: \"Bahasa Melayu\",\n      englishName: \"Malay\"\n    },\n    'ms-MY': {\n      nativeName: \"Bahasa Melayu\",\n      englishName: \"Malay\"\n    },\n    'mt': {\n      nativeName: \"Malti\",\n      englishName: \"Maltese\"\n    },\n    'mt-MT': {\n      nativeName: \"Malti\",\n      englishName: \"Maltese\"\n    },\n    'my': {\n      nativeName: \"ဗမာစကာ\",\n      englishName: \"Burmese\"\n    },\n    'no': {\n      nativeName: \"Norsk\",\n      englishName: \"Norwegian\"\n    },\n    'nb': {\n      nativeName: \"Norsk (bokmål)\",\n      englishName: \"Norwegian (bokmal)\"\n    },\n    'nb-NO': {\n      nativeName: \"Norsk (bokmål)\",\n      englishName: \"Norwegian (bokmal)\"\n    },\n    'ne': {\n      nativeName: \"नेपाली\",\n      englishName: \"Nepali\"\n    },\n    'ne-NP': {\n      nativeName: \"नेपाली\",\n      englishName: \"Nepali\"\n    },\n    'nl': {\n      nativeName: \"Nederlands\",\n      englishName: \"Dutch\"\n    },\n    'nl-BE': {\n      nativeName: \"Nederlands (België)\",\n      englishName: \"Dutch (Belgium)\"\n    },\n    'nl-NL': {\n      nativeName: \"Nederlands (Nederland)\",\n      englishName: \"Dutch (Netherlands)\"\n    },\n    'nn-NO': {\n      nativeName: \"Norsk (nynorsk)\",\n      englishName: \"Norwegian (nynorsk)\"\n    },\n    'oc': {\n      nativeName: \"Occitan\",\n      englishName: \"Occitan\"\n    },\n    'or-IN': {\n      nativeName: \"ଓଡ଼ିଆ\",\n      englishName: \"Oriya\"\n    },\n    'pa': {\n      nativeName: \"ਪੰਜਾਬੀ\",\n      englishName: \"Punjabi\"\n    },\n    'pa-IN': {\n      nativeName: \"ਪੰਜਾਬੀ (ਭਾਰਤ ਨੂੰ)\",\n      englishName: \"Punjabi (India)\"\n    },\n    'pl': {\n      nativeName: \"Polski\",\n      englishName: \"Polish\"\n    },\n    'pl-PL': {\n      nativeName: \"Polski\",\n      englishName: \"Polish\"\n    },\n    'ps-AF': {\n      nativeName: \"پښتو\",\n      englishName: \"Pashto\"\n    },\n    'pt': {\n      nativeName: \"Português\",\n      englishName: \"Portuguese\"\n    },\n    'pt-BR': {\n      nativeName: \"Português (Brasil)\",\n      englishName: \"Portuguese (Brazil)\"\n    },\n    'pt-PT': {\n      nativeName: \"Português (Portugal)\",\n      englishName: \"Portuguese (Portugal)\"\n    },\n    'qu-PE': {\n      nativeName: \"Qhichwa\",\n      englishName: \"Quechua\"\n    },\n    'rm-CH': {\n      nativeName: \"Rumantsch\",\n      englishName: \"Romansh\"\n    },\n    'ro': {\n      nativeName: \"Română\",\n      englishName: \"Romanian\"\n    },\n    'ro-RO': {\n      nativeName: \"Română\",\n      englishName: \"Romanian\"\n    },\n    'ru': {\n      nativeName: \"Русский\",\n      englishName: \"Russian\"\n    },\n    'ru-RU': {\n      nativeName: \"Русский\",\n      englishName: \"Russian\"\n    },\n    'sa-IN': {\n      nativeName: \"संस्कृतम्\",\n      englishName: \"Sanskrit\"\n    },\n    'se-NO': {\n      nativeName: \"Davvisámegiella\",\n      englishName: \"Northern Sámi\"\n    },\n    'si-LK': {\n      nativeName: \"පළාත\",\n      englishName: \"Sinhala (Sri Lanka)\"\n    },\n    'sk': {\n      nativeName: \"Slovenčina\",\n      englishName: \"Slovak\"\n    },\n    'sk-SK': {\n      nativeName: \"Slovenčina (Slovakia)\",\n      englishName: \"Slovak (Slovakia)\"\n    },\n    'sl': {\n      nativeName: \"Slovenščina\",\n      englishName: \"Slovenian\"\n    },\n    'sl-SI': {\n      nativeName: \"Slovenščina\",\n      englishName: \"Slovenian\"\n    },\n    'so-SO': {\n      nativeName: \"Soomaaliga\",\n      englishName: \"Somali\"\n    },\n    'sq': {\n      nativeName: \"Shqip\",\n      englishName: \"Albanian\"\n    },\n    'sq-AL': {\n      nativeName: \"Shqip\",\n      englishName: \"Albanian\"\n    },\n    'sr': {\n      nativeName: \"Српски\",\n      englishName: \"Serbian\"\n    },\n    'sr-RS': {\n      nativeName: \"Српски (Serbia)\",\n      englishName: \"Serbian (Serbia)\"\n    },\n    'su': {\n      nativeName: \"Basa Sunda\",\n      englishName: \"Sundanese\"\n    },\n    'sv': {\n      nativeName: \"Svenska\",\n      englishName: \"Swedish\"\n    },\n    'sv-SE': {\n      nativeName: \"Svenska\",\n      englishName: \"Swedish\"\n    },\n    'sw': {\n      nativeName: \"Kiswahili\",\n      englishName: \"Swahili\"\n    },\n    'sw-KE': {\n      nativeName: \"Kiswahili\",\n      englishName: \"Swahili (Kenya)\"\n    },\n    'ta': {\n      nativeName: \"தமிழ்\",\n      englishName: \"Tamil\"\n    },\n    'ta-IN': {\n      nativeName: \"தமிழ்\",\n      englishName: \"Tamil\"\n    },\n    'te': {\n      nativeName: \"తెలుగు\",\n      englishName: \"Telugu\"\n    },\n    'te-IN': {\n      nativeName: \"తెలుగు\",\n      englishName: \"Telugu\"\n    },\n    'tg': {\n      nativeName: \"забо́ни тоҷикӣ́\",\n      englishName: \"Tajik\"\n    },\n    'tg-TJ': {\n      nativeName: \"тоҷикӣ\",\n      englishName: \"Tajik\"\n    },\n    'th': {\n      nativeName: \"ภาษาไทย\",\n      englishName: \"Thai\"\n    },\n    'th-TH': {\n      nativeName: \"ภาษาไทย (ประเทศไทย)\",\n      englishName: \"Thai (Thailand)\"\n    },\n    'tl': {\n      nativeName: \"Filipino\",\n      englishName: \"Filipino\"\n    },\n    'tl-PH': {\n      nativeName: \"Filipino\",\n      englishName: \"Filipino\"\n    },\n    'tlh': {\n      nativeName: \"tlhIngan-Hol\",\n      englishName: \"Klingon\"\n    },\n    'tr': {\n      nativeName: \"Türkçe\",\n      englishName: \"Turkish\"\n    },\n    'tr-TR': {\n      nativeName: \"Türkçe\",\n      englishName: \"Turkish\"\n    },\n    'tt-RU': {\n      nativeName: \"татарча\",\n      englishName: \"Tatar\"\n    },\n    'uk': {\n      nativeName: \"Українська\",\n      englishName: \"Ukrainian\"\n    },\n    'uk-UA': {\n      nativeName: \"Українська\",\n      englishName: \"Ukrainian\"\n    },\n    'ur': {\n      nativeName: \"اردو\",\n      englishName: \"Urdu\"\n    },\n    'ur-PK': {\n      nativeName: \"اردو\",\n      englishName: \"Urdu\"\n    },\n    'uz': {\n      nativeName: \"O'zbek\",\n      englishName: \"Uzbek\"\n    },\n    'uz-UZ': {\n      nativeName: \"O'zbek\",\n      englishName: \"Uzbek\"\n    },\n    'vi': {\n      nativeName: \"Tiếng Việt\",\n      englishName: \"Vietnamese\"\n    },\n    'vi-VN': {\n      nativeName: \"Tiếng Việt\",\n      englishName: \"Vietnamese\"\n    },\n    'xh-ZA': {\n      nativeName: \"isiXhosa\",\n      englishName: \"Xhosa\"\n    },\n    'yi': {\n      nativeName: \"ייִדיש\",\n      englishName: \"Yiddish\"\n    },\n    'yi-DE': {\n      nativeName: \"ייִדיש (German)\",\n      englishName: \"Yiddish (German)\"\n    },\n    'zh': {\n      nativeName: \"中文\",\n      englishName: \"Chinese\"\n    },\n    'zh-Hans': {\n      nativeName: \"中文简体\",\n      englishName: \"Chinese Simplified\"\n    },\n    'zh-Hant': {\n      nativeName: \"中文繁體\",\n      englishName: \"Chinese Traditional\"\n    },\n    'zh-CN': {\n      nativeName: \"中文（中国）\",\n      englishName: \"Chinese Simplified (China)\"\n    },\n    'zh-HK': {\n      nativeName: \"中文（香港）\",\n      englishName: \"Chinese Traditional (Hong Kong)\"\n    },\n    'zh-SG': {\n      nativeName: \"中文（新加坡）\",\n      englishName: \"Chinese Simplified (Singapore)\"\n    },\n    'zh-TW': {\n      nativeName: \"中文（台灣）\",\n      englishName: \"Chinese Traditional (Taiwan)\"\n    },\n    'zu-ZA': {\n      nativeName: \"isiZulu\",\n      englishName: \"Zulu\"\n    }\n  };\n}));\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/langmap/language-mapping-list.js?");

/***/ }),

/***/ "./node_modules/mout/array/contains.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/array/contains.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var indexOf = __webpack_require__(/*! ./indexOf */ \"./node_modules/mout/array/indexOf.js\");\n\n    /**\n     * If array contains values.\n     */\n    function contains(arr, val) {\n        return indexOf(arr, val) !== -1;\n    }\n    module.exports = contains;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/array/contains.js?");

/***/ }),

/***/ "./node_modules/mout/array/forEach.js":
/*!********************************************!*\
  !*** ./node_modules/mout/array/forEach.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Array forEach\n     */\n    function forEach(arr, callback, thisObj) {\n        if (arr == null) {\n            return;\n        }\n        var i = -1,\n            len = arr.length;\n        while (++i < len) {\n            // we iterate over sparse items since there is no way to make it\n            // work properly on IE 7-8. see #64\n            if ( callback.call(thisObj, arr[i], i, arr) === false ) {\n                break;\n            }\n        }\n    }\n\n    module.exports = forEach;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/array/forEach.js?");

/***/ }),

/***/ "./node_modules/mout/array/indexOf.js":
/*!********************************************!*\
  !*** ./node_modules/mout/array/indexOf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Array.indexOf\n     */\n    function indexOf(arr, item, fromIndex) {\n        fromIndex = fromIndex || 0;\n        if (arr == null) {\n            return -1;\n        }\n\n        var len = arr.length,\n            i = fromIndex < 0 ? len + fromIndex : fromIndex;\n        while (i < len) {\n            // we iterate over sparse items since there is no way to make it\n            // work properly on IE 7-8. see #64\n            if (arr[i] === item) {\n                return i;\n            }\n\n            i++;\n        }\n\n        return -1;\n    }\n\n    module.exports = indexOf;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/array/indexOf.js?");

/***/ }),

/***/ "./node_modules/mout/array/max.js":
/*!****************************************!*\
  !*** ./node_modules/mout/array/max.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Return maximum value inside array\n     */\n    function max(arr, iterator, thisObj){\n        if (arr == null || !arr.length) {\n            return Infinity;\n        } else if (arr.length && !iterator) {\n            return Math.max.apply(Math, arr);\n        } else {\n            iterator = makeIterator(iterator, thisObj);\n            var result,\n                compare = -Infinity,\n                value,\n                temp;\n\n            var i = -1, len = arr.length;\n            while (++i < len) {\n                value = arr[i];\n                temp = iterator(value, i, arr);\n                if (temp > compare) {\n                    compare = temp;\n                    result = value;\n                }\n            }\n\n            return result;\n        }\n    }\n\n    module.exports = max;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/array/max.js?");

/***/ }),

/***/ "./node_modules/mout/array/min.js":
/*!****************************************!*\
  !*** ./node_modules/mout/array/min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Return minimum value inside array\n     */\n    function min(arr, iterator, thisObj){\n        if (arr == null || !arr.length) {\n            return -Infinity;\n        } else if (arr.length && !iterator) {\n            return Math.min.apply(Math, arr);\n        } else {\n            iterator = makeIterator(iterator, thisObj);\n            var result,\n                compare = Infinity,\n                value,\n                temp;\n\n            var i = -1, len = arr.length;\n            while (++i < len) {\n                value = arr[i];\n                temp = iterator(value, i, arr);\n                if (temp < compare) {\n                    compare = temp;\n                    result = value;\n                }\n            }\n\n            return result;\n        }\n    }\n\n    module.exports = min;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/array/min.js?");

/***/ }),

/***/ "./node_modules/mout/array/slice.js":
/*!******************************************!*\
  !*** ./node_modules/mout/array/slice.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Create slice of source array or array-like object\n     */\n    function slice(arr, start, end){\n        var len = arr.length;\n\n        if (start == null) {\n            start = 0;\n        } else if (start < 0) {\n            start = Math.max(len + start, 0);\n        } else {\n            start = Math.min(start, len);\n        }\n\n        if (end == null) {\n            end = len;\n        } else if (end < 0) {\n            end = Math.max(len + end, 0);\n        } else {\n            end = Math.min(end, len);\n        }\n\n        var result = [];\n        while (start < end) {\n            result.push(arr[start++]);\n        }\n\n        return result;\n    }\n\n    module.exports = slice;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/array/slice.js?");

/***/ }),

/***/ "./node_modules/mout/function/bind.js":
/*!********************************************!*\
  !*** ./node_modules/mout/function/bind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = __webpack_require__(/*! ../array/slice */ \"./node_modules/mout/array/slice.js\");\n\n    /**\n     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.\n     * @param {Function} fn  Function.\n     * @param {object} context   Execution context.\n     * @param {rest} args    Arguments (0...n arguments).\n     * @return {Function} Wrapped Function.\n     */\n    function bind(fn, context, args){\n        var argsArr = slice(arguments, 2); //curried args\n        return function(){\n            return fn.apply(context, argsArr.concat(slice(arguments)));\n        };\n    }\n\n    module.exports = bind;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/function/bind.js?");

/***/ }),

/***/ "./node_modules/mout/function/identity.js":
/*!************************************************!*\
  !*** ./node_modules/mout/function/identity.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Returns the first argument provided to it.\n     */\n    function identity(val){\n        return val;\n    }\n\n    module.exports = identity;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/function/identity.js?");

/***/ }),

/***/ "./node_modules/mout/function/makeIterator_.js":
/*!*****************************************************!*\
  !*** ./node_modules/mout/function/makeIterator_.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/mout/function/identity.js\");\nvar prop = __webpack_require__(/*! ./prop */ \"./node_modules/mout/function/prop.js\");\nvar deepMatches = __webpack_require__(/*! ../object/deepMatches */ \"./node_modules/mout/object/deepMatches.js\");\n\n    /**\n     * Converts argument into a valid iterator.\n     * Used internally on most array/object/collection methods that receives a\n     * callback/iterator providing a shortcut syntax.\n     */\n    function makeIterator(src, thisObj){\n        if (src == null) {\n            return identity;\n        }\n        switch(typeof src) {\n            case 'function':\n                // function is the first to improve perf (most common case)\n                // also avoid using `Function#call` if not needed, which boosts\n                // perf a lot in some cases\n                return (typeof thisObj !== 'undefined')? function(val, i, arr){\n                    return src.call(thisObj, val, i, arr);\n                } : src;\n            case 'object':\n                return function(val){\n                    return deepMatches(val, src);\n                };\n            case 'string':\n            case 'number':\n                return prop(src);\n        }\n    }\n\n    module.exports = makeIterator;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/function/makeIterator_.js?");

/***/ }),

/***/ "./node_modules/mout/function/prop.js":
/*!********************************************!*\
  !*** ./node_modules/mout/function/prop.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Returns a function that gets a property of the passed object\n     */\n    function prop(name){\n        return function(obj){\n            return obj[name];\n        };\n    }\n\n    module.exports = prop;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/function/prop.js?");

/***/ }),

/***/ "./node_modules/mout/lang/clone.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/lang/clone.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var kindOf = __webpack_require__(/*! ./kindOf */ \"./node_modules/mout/lang/kindOf.js\");\nvar isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/mout/lang/isPlainObject.js\");\nvar mixIn = __webpack_require__(/*! ../object/mixIn */ \"./node_modules/mout/object/mixIn.js\");\n\n    /**\n     * Clone native types.\n     */\n    function clone(val){\n        switch (kindOf(val)) {\n            case 'Object':\n                return cloneObject(val);\n            case 'Array':\n                return cloneArray(val);\n            case 'RegExp':\n                return cloneRegExp(val);\n            case 'Date':\n                return cloneDate(val);\n            default:\n                return val;\n        }\n    }\n\n    function cloneObject(source) {\n        if (isPlainObject(source)) {\n            return mixIn({}, source);\n        } else {\n            return source;\n        }\n    }\n\n    function cloneRegExp(r) {\n        var flags = '';\n        flags += r.multiline ? 'm' : '';\n        flags += r.global ? 'g' : '';\n        flags += r.ignoreCase ? 'i' : '';\n        return new RegExp(r.source, flags);\n    }\n\n    function cloneDate(date) {\n        return new Date(+date);\n    }\n\n    function cloneArray(arr) {\n        return arr.slice();\n    }\n\n    module.exports = clone;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/clone.js?");

/***/ }),

/***/ "./node_modules/mout/lang/deepClone.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/lang/deepClone.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var clone = __webpack_require__(/*! ./clone */ \"./node_modules/mout/lang/clone.js\");\nvar forOwn = __webpack_require__(/*! ../object/forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar kindOf = __webpack_require__(/*! ./kindOf */ \"./node_modules/mout/lang/kindOf.js\");\nvar isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/mout/lang/isPlainObject.js\");\n\n    /**\n     * Recursively clone native types.\n     */\n    function deepClone(val, instanceClone) {\n        switch ( kindOf(val) ) {\n            case 'Object':\n                return cloneObject(val, instanceClone);\n            case 'Array':\n                return cloneArray(val, instanceClone);\n            default:\n                return clone(val);\n        }\n    }\n\n    function cloneObject(source, instanceClone) {\n        if (isPlainObject(source)) {\n            var out = {};\n            forOwn(source, function(val, key) {\n                this[key] = deepClone(val, instanceClone);\n            }, out);\n            return out;\n        } else if (instanceClone) {\n            return instanceClone(source);\n        } else {\n            return source;\n        }\n    }\n\n    function cloneArray(arr, instanceClone) {\n        var out = [],\n            i = -1,\n            n = arr.length,\n            val;\n        while (++i < n) {\n            out[i] = deepClone(arr[i], instanceClone);\n        }\n        return out;\n    }\n\n    module.exports = deepClone;\n\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/deepClone.js?");

/***/ }),

/***/ "./node_modules/mout/lang/is.js":
/*!**************************************!*\
  !*** ./node_modules/mout/lang/is.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Check if both arguments are egal.\n     */\n    function is(x, y){\n        // implementation borrowed from harmony:egal spec\n        if (x === y) {\n          // 0 === -0, but they are not identical\n          return x !== 0 || 1 / x === 1 / y;\n        }\n\n        // NaN !== NaN, but they are identical.\n        // NaNs are the only non-reflexive value, i.e., if x !== x,\n        // then x is a NaN.\n        // isNaN is broken: it converts its argument to number, so\n        // isNaN(\"foo\") => true\n        return x !== x && y !== y;\n    }\n\n    module.exports = is;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/is.js?");

/***/ }),

/***/ "./node_modules/mout/lang/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/lang/isArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKind = __webpack_require__(/*! ./isKind */ \"./node_modules/mout/lang/isKind.js\");\n    /**\n     */\n    var isArray = Array.isArray || function (val) {\n        return isKind(val, 'Array');\n    };\n    module.exports = isArray;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/isArray.js?");

/***/ }),

/***/ "./node_modules/mout/lang/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/mout/lang/isFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKind = __webpack_require__(/*! ./isKind */ \"./node_modules/mout/lang/isKind.js\");\n    /**\n     */\n    function isFunction(val) {\n        return isKind(val, 'Function');\n    }\n    module.exports = isFunction;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/isFunction.js?");

/***/ }),

/***/ "./node_modules/mout/lang/isKind.js":
/*!******************************************!*\
  !*** ./node_modules/mout/lang/isKind.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var kindOf = __webpack_require__(/*! ./kindOf */ \"./node_modules/mout/lang/kindOf.js\");\n    /**\n     * Check if value is from a specific \"kind\".\n     */\n    function isKind(val, kind){\n        return kindOf(val) === kind;\n    }\n    module.exports = isKind;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/isKind.js?");

/***/ }),

/***/ "./node_modules/mout/lang/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/mout/lang/isObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKind = __webpack_require__(/*! ./isKind */ \"./node_modules/mout/lang/isKind.js\");\n    /**\n     */\n    function isObject(val) {\n        return isKind(val, 'Object');\n    }\n    module.exports = isObject;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/isObject.js?");

/***/ }),

/***/ "./node_modules/mout/lang/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/mout/lang/isPlainObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Checks if the value is created by the `Object` constructor.\n     */\n    function isPlainObject(value) {\n        return (!!value && typeof value === 'object' &&\n            value.constructor === Object);\n    }\n\n    module.exports = isPlainObject;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/mout/lang/isPrimitive.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/lang/isPrimitive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Checks if the object is a primitive\n     */\n    function isPrimitive(value) {\n        // Using switch fallthrough because it's simple to read and is\n        // generally fast: http://jsperf.com/testing-value-is-primitive/5\n        switch (typeof value) {\n            case \"string\":\n            case \"number\":\n            case \"boolean\":\n                return true;\n        }\n\n        return value == null;\n    }\n\n    module.exports = isPrimitive;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/isPrimitive.js?");

/***/ }),

/***/ "./node_modules/mout/lang/kindOf.js":
/*!******************************************!*\
  !*** ./node_modules/mout/lang/kindOf.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    var _rKind = /^\\[object (.*)\\]$/,\n        _toString = Object.prototype.toString,\n        UNDEF;\n\n    /**\n     * Gets the \"kind\" of value. (e.g. \"String\", \"Number\", etc)\n     */\n    function kindOf(val) {\n        if (val === null) {\n            return 'Null';\n        } else if (val === UNDEF) {\n            return 'Undefined';\n        } else {\n            return _rKind.exec( _toString.call(val) )[1];\n        }\n    }\n    module.exports = kindOf;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/lang/kindOf.js?");

/***/ }),

/***/ "./node_modules/mout/object.js":
/*!*************************************!*\
  !*** ./node_modules/mout/object.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\n//automatically generated, do not edit!\n//run `node build` instead\nmodule.exports = {\n    'bindAll' : __webpack_require__(/*! ./object/bindAll */ \"./node_modules/mout/object/bindAll.js\"),\n    'contains' : __webpack_require__(/*! ./object/contains */ \"./node_modules/mout/object/contains.js\"),\n    'deepFillIn' : __webpack_require__(/*! ./object/deepFillIn */ \"./node_modules/mout/object/deepFillIn.js\"),\n    'deepMatches' : __webpack_require__(/*! ./object/deepMatches */ \"./node_modules/mout/object/deepMatches.js\"),\n    'deepMixIn' : __webpack_require__(/*! ./object/deepMixIn */ \"./node_modules/mout/object/deepMixIn.js\"),\n    'equals' : __webpack_require__(/*! ./object/equals */ \"./node_modules/mout/object/equals.js\"),\n    'every' : __webpack_require__(/*! ./object/every */ \"./node_modules/mout/object/every.js\"),\n    'fillIn' : __webpack_require__(/*! ./object/fillIn */ \"./node_modules/mout/object/fillIn.js\"),\n    'filter' : __webpack_require__(/*! ./object/filter */ \"./node_modules/mout/object/filter.js\"),\n    'find' : __webpack_require__(/*! ./object/find */ \"./node_modules/mout/object/find.js\"),\n    'flatten' : __webpack_require__(/*! ./object/flatten */ \"./node_modules/mout/object/flatten.js\"),\n    'forIn' : __webpack_require__(/*! ./object/forIn */ \"./node_modules/mout/object/forIn.js\"),\n    'forOwn' : __webpack_require__(/*! ./object/forOwn */ \"./node_modules/mout/object/forOwn.js\"),\n    'functions' : __webpack_require__(/*! ./object/functions */ \"./node_modules/mout/object/functions.js\"),\n    'get' : __webpack_require__(/*! ./object/get */ \"./node_modules/mout/object/get.js\"),\n    'has' : __webpack_require__(/*! ./object/has */ \"./node_modules/mout/object/has.js\"),\n    'hasOwn' : __webpack_require__(/*! ./object/hasOwn */ \"./node_modules/mout/object/hasOwn.js\"),\n    'keys' : __webpack_require__(/*! ./object/keys */ \"./node_modules/mout/object/keys.js\"),\n    'map' : __webpack_require__(/*! ./object/map */ \"./node_modules/mout/object/map.js\"),\n    'matches' : __webpack_require__(/*! ./object/matches */ \"./node_modules/mout/object/matches.js\"),\n    'max' : __webpack_require__(/*! ./object/max */ \"./node_modules/mout/object/max.js\"),\n    'merge' : __webpack_require__(/*! ./object/merge */ \"./node_modules/mout/object/merge.js\"),\n    'min' : __webpack_require__(/*! ./object/min */ \"./node_modules/mout/object/min.js\"),\n    'mixIn' : __webpack_require__(/*! ./object/mixIn */ \"./node_modules/mout/object/mixIn.js\"),\n    'namespace' : __webpack_require__(/*! ./object/namespace */ \"./node_modules/mout/object/namespace.js\"),\n    'omit' : __webpack_require__(/*! ./object/omit */ \"./node_modules/mout/object/omit.js\"),\n    'pick' : __webpack_require__(/*! ./object/pick */ \"./node_modules/mout/object/pick.js\"),\n    'pluck' : __webpack_require__(/*! ./object/pluck */ \"./node_modules/mout/object/pluck.js\"),\n    'reduce' : __webpack_require__(/*! ./object/reduce */ \"./node_modules/mout/object/reduce.js\"),\n    'reject' : __webpack_require__(/*! ./object/reject */ \"./node_modules/mout/object/reject.js\"),\n    'result' : __webpack_require__(/*! ./object/result */ \"./node_modules/mout/object/result.js\"),\n    'set' : __webpack_require__(/*! ./object/set */ \"./node_modules/mout/object/set.js\"),\n    'size' : __webpack_require__(/*! ./object/size */ \"./node_modules/mout/object/size.js\"),\n    'some' : __webpack_require__(/*! ./object/some */ \"./node_modules/mout/object/some.js\"),\n    'unset' : __webpack_require__(/*! ./object/unset */ \"./node_modules/mout/object/unset.js\"),\n    'values' : __webpack_require__(/*! ./object/values */ \"./node_modules/mout/object/values.js\")\n};\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object.js?");

/***/ }),

/***/ "./node_modules/mout/object/bindAll.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/object/bindAll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var functions = __webpack_require__(/*! ./functions */ \"./node_modules/mout/object/functions.js\");\nvar bind = __webpack_require__(/*! ../function/bind */ \"./node_modules/mout/function/bind.js\");\nvar forEach = __webpack_require__(/*! ../array/forEach */ \"./node_modules/mout/array/forEach.js\");\nvar slice = __webpack_require__(/*! ../array/slice */ \"./node_modules/mout/array/slice.js\");\n\n    /**\n     * Binds methods of the object to be run in it's own context.\n     */\n    function bindAll(obj, rest_methodNames){\n        var keys = arguments.length > 1?\n                    slice(arguments, 1) : functions(obj);\n        forEach(keys, function(key){\n            obj[key] = bind(obj[key], obj);\n        });\n    }\n\n    module.exports = bindAll;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/bindAll.js?");

/***/ }),

/***/ "./node_modules/mout/object/contains.js":
/*!**********************************************!*\
  !*** ./node_modules/mout/object/contains.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var some = __webpack_require__(/*! ./some */ \"./node_modules/mout/object/some.js\");\n\n    /**\n     * Check if object contains value\n     */\n    function contains(obj, needle) {\n        return some(obj, function(val) {\n            return (val === needle);\n        });\n    }\n    module.exports = contains;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/contains.js?");

/***/ }),

/***/ "./node_modules/mout/object/deepFillIn.js":
/*!************************************************!*\
  !*** ./node_modules/mout/object/deepFillIn.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ \"./node_modules/mout/lang/isPlainObject.js\");\n\n    /**\n     * Deeply copy missing properties in the target from the defaults.\n     */\n    function deepFillIn(target, defaults){\n        var i = 0,\n            n = arguments.length,\n            obj;\n\n        while(++i < n) {\n            obj = arguments[i];\n            if (obj) {\n                // jshint loopfunc: true\n                forOwn(obj, function(newValue, key) {\n                    var curValue = target[key];\n                    if (curValue == null) {\n                        target[key] = newValue;\n                    } else if (isPlainObject(curValue) &&\n                               isPlainObject(newValue)) {\n                        deepFillIn(curValue, newValue);\n                    }\n                });\n            }\n        }\n\n        return target;\n    }\n\n    module.exports = deepFillIn;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/deepFillIn.js?");

/***/ }),

/***/ "./node_modules/mout/object/deepMatches.js":
/*!*************************************************!*\
  !*** ./node_modules/mout/object/deepMatches.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar isArray = __webpack_require__(/*! ../lang/isArray */ \"./node_modules/mout/lang/isArray.js\");\n\n    function containsMatch(array, pattern) {\n        var i = -1, length = array.length;\n        while (++i < length) {\n            if (deepMatches(array[i], pattern)) {\n                return true;\n            }\n        }\n\n        return false;\n    }\n\n    function matchArray(target, pattern) {\n        var i = -1, patternLength = pattern.length;\n        while (++i < patternLength) {\n            if (!containsMatch(target, pattern[i])) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n\n    function matchObject(target, pattern) {\n        var result = true;\n        forOwn(pattern, function(val, key) {\n            if (!deepMatches(target[key], val)) {\n                // Return false to break out of forOwn early\n                return (result = false);\n            }\n        });\n\n        return result;\n    }\n\n    /**\n     * Recursively check if the objects match.\n     */\n    function deepMatches(target, pattern){\n        if (target && typeof target === 'object') {\n            if (isArray(target) && isArray(pattern)) {\n                return matchArray(target, pattern);\n            } else {\n                return matchObject(target, pattern);\n            }\n        } else {\n            return target === pattern;\n        }\n    }\n\n    module.exports = deepMatches;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/deepMatches.js?");

/***/ }),

/***/ "./node_modules/mout/object/deepMixIn.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/object/deepMixIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ \"./node_modules/mout/lang/isPlainObject.js\");\n\n    /**\n     * Mixes objects into the target object, recursively mixing existing child\n     * objects.\n     */\n    function deepMixIn(target, objects) {\n        var i = 0,\n            n = arguments.length,\n            obj;\n\n        while(++i < n){\n            obj = arguments[i];\n            if (obj) {\n                forOwn(obj, copyProp, target);\n            }\n        }\n\n        return target;\n    }\n\n    function copyProp(val, key) {\n        var existing = this[key];\n        if (isPlainObject(val) && isPlainObject(existing)) {\n            deepMixIn(existing, val);\n        } else {\n            this[key] = val;\n        }\n    }\n\n    module.exports = deepMixIn;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/deepMixIn.js?");

/***/ }),

/***/ "./node_modules/mout/object/equals.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/equals.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/mout/object/hasOwn.js\");\nvar every = __webpack_require__(/*! ./every */ \"./node_modules/mout/object/every.js\");\nvar isObject = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/mout/lang/isObject.js\");\nvar is = __webpack_require__(/*! ../lang/is */ \"./node_modules/mout/lang/is.js\");\n\n    // Makes a function to compare the object values from the specified compare\n    // operation callback.\n    function makeCompare(callback) {\n        return function(value, key) {\n            return hasOwn(this, key) && callback(value, this[key]);\n        };\n    }\n\n    function checkProperties(value, key) {\n        return hasOwn(this, key);\n    }\n\n    /**\n     * Checks if two objects have the same keys and values.\n     */\n    function equals(a, b, callback) {\n        callback = callback || is;\n\n        if (!isObject(a) || !isObject(b)) {\n            return callback(a, b);\n        }\n\n        return (every(a, makeCompare(callback), b) &&\n                every(b, checkProperties, a));\n    }\n\n    module.exports = equals;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/equals.js?");

/***/ }),

/***/ "./node_modules/mout/object/every.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/every.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Object every\n     */\n    function every(obj, callback, thisObj) {\n        callback = makeIterator(callback, thisObj);\n        var result = true;\n        forOwn(obj, function(val, key) {\n            // we consider any falsy values as \"false\" on purpose so shorthand\n            // syntax can be used to check property existence\n            if (!callback(val, key, obj)) {\n                result = false;\n                return false; // break\n            }\n        });\n        return result;\n    }\n\n    module.exports = every;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/every.js?");

/***/ }),

/***/ "./node_modules/mout/object/fillIn.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/fillIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forEach = __webpack_require__(/*! ../array/forEach */ \"./node_modules/mout/array/forEach.js\");\nvar slice = __webpack_require__(/*! ../array/slice */ \"./node_modules/mout/array/slice.js\");\nvar forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\n\n    /**\n     * Copy missing properties in the obj from the defaults.\n     */\n    function fillIn(obj, var_defaults){\n        forEach(slice(arguments, 1), function(base){\n            forOwn(base, function(val, key){\n                if (obj[key] == null) {\n                    obj[key] = val;\n                }\n            });\n        });\n        return obj;\n    }\n\n    module.exports = fillIn;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/fillIn.js?");

/***/ }),

/***/ "./node_modules/mout/object/filter.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Creates a new object with all the properties where the callback returns\n     * true.\n     */\n    function filterValues(obj, callback, thisObj) {\n        callback = makeIterator(callback, thisObj);\n        var output = {};\n        forOwn(obj, function(value, key, obj) {\n            if (callback(value, key, obj)) {\n                output[key] = value;\n            }\n        });\n\n        return output;\n    }\n    module.exports = filterValues;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/filter.js?");

/***/ }),

/***/ "./node_modules/mout/object/find.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/find.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var some = __webpack_require__(/*! ./some */ \"./node_modules/mout/object/some.js\");\nvar makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Returns first item that matches criteria\n     */\n    function find(obj, callback, thisObj) {\n        callback = makeIterator(callback, thisObj);\n        var result;\n        some(obj, function(value, key, obj) {\n            if (callback(value, key, obj)) {\n                result = value;\n                return true; //break\n            }\n        });\n        return result;\n    }\n\n    module.exports = find;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/find.js?");

/***/ }),

/***/ "./node_modules/mout/object/flatten.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/object/flatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ \"./node_modules/mout/lang/isPlainObject.js\");\n\n    /*\n     * Helper function to flatten to a destination object.\n     * Used to remove the need to create intermediate objects while flattening.\n     */\n    function flattenTo(obj, result, prefix, level) {\n        forOwn(obj, function (value, key) {\n            var nestedPrefix = prefix ? prefix + '.' + key : key;\n\n            if (level !== 0 && isPlainObject(value)) {\n                flattenTo(value, result, nestedPrefix, level - 1);\n            } else {\n                result[nestedPrefix] = value;\n            }\n        });\n\n        return result;\n    }\n\n    /**\n     * Recursively flattens an object.\n     * A new object containing all the elements is returned.\n     * If level is specified, it will only flatten up to that level.\n     */\n    function flatten(obj, level) {\n        if (obj == null) {\n            return {};\n        }\n\n        level = level == null ? -1 : level;\n        return flattenTo(obj, {}, '', level);\n    }\n\n    module.exports = flatten;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/flatten.js?");

/***/ }),

/***/ "./node_modules/mout/object/forIn.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/forIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/mout/object/hasOwn.js\");\n\n    var _hasDontEnumBug,\n        _dontEnums;\n\n    function checkDontEnum(){\n        _dontEnums = [\n                'toString',\n                'toLocaleString',\n                'valueOf',\n                'hasOwnProperty',\n                'isPrototypeOf',\n                'propertyIsEnumerable',\n                'constructor'\n            ];\n\n        _hasDontEnumBug = true;\n\n        for (var key in {'toString': null}) {\n            _hasDontEnumBug = false;\n        }\n    }\n\n    /**\n     * Similar to Array/forEach but works over object properties and fixes Don't\n     * Enum bug on IE.\n     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation\n     */\n    function forIn(obj, fn, thisObj){\n        var key, i = 0;\n        // no need to check if argument is a real object that way we can use\n        // it for arrays, functions, date, etc.\n\n        //post-pone check till needed\n        if (_hasDontEnumBug == null) checkDontEnum();\n\n        for (key in obj) {\n            if (exec(fn, obj, key, thisObj) === false) {\n                break;\n            }\n        }\n\n\n        if (_hasDontEnumBug) {\n            var ctor = obj.constructor,\n                isProto = !!ctor && obj === ctor.prototype;\n\n            while (key = _dontEnums[i++]) {\n                // For constructor, if it is a prototype object the constructor\n                // is always non-enumerable unless defined otherwise (and\n                // enumerated above).  For non-prototype objects, it will have\n                // to be defined on this object, since it cannot be defined on\n                // any prototype objects.\n                //\n                // For other [[DontEnum]] properties, check if the value is\n                // different than Object prototype value.\n                if (\n                    (key !== 'constructor' ||\n                        (!isProto && hasOwn(obj, key))) &&\n                    obj[key] !== Object.prototype[key]\n                ) {\n                    if (exec(fn, obj, key, thisObj) === false) {\n                        break;\n                    }\n                }\n            }\n        }\n    }\n\n    function exec(fn, obj, key, thisObj){\n        return fn.call(thisObj, obj[key], key, obj);\n    }\n\n    module.exports = forIn;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/forIn.js?");

/***/ }),

/***/ "./node_modules/mout/object/forOwn.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/forOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/mout/object/hasOwn.js\");\nvar forIn = __webpack_require__(/*! ./forIn */ \"./node_modules/mout/object/forIn.js\");\n\n    /**\n     * Similar to Array/forEach but works over object properties and fixes Don't\n     * Enum bug on IE.\n     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation\n     */\n    function forOwn(obj, fn, thisObj){\n        forIn(obj, function(val, key){\n            if (hasOwn(obj, key)) {\n                return fn.call(thisObj, obj[key], key, obj);\n            }\n        });\n    }\n\n    module.exports = forOwn;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/forOwn.js?");

/***/ }),

/***/ "./node_modules/mout/object/functions.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/object/functions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forIn = __webpack_require__(/*! ./forIn */ \"./node_modules/mout/object/forIn.js\");\n\n    /**\n     * return a list of all enumerable properties that have function values\n     */\n    function functions(obj){\n        var keys = [];\n        forIn(obj, function(val, key){\n            if (typeof val === 'function'){\n                keys.push(key);\n            }\n        });\n        return keys.sort();\n    }\n\n    module.exports = functions;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/functions.js?");

/***/ }),

/***/ "./node_modules/mout/object/get.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/get.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrimitive = __webpack_require__(/*! ../lang/isPrimitive */ \"./node_modules/mout/lang/isPrimitive.js\");\n\n    /**\n     * get \"nested\" object property\n     */\n    function get(obj, prop){\n        var parts = prop.split('.'),\n            last = parts.pop();\n\n        while (prop = parts.shift()) {\n            obj = obj[prop];\n            if (obj == null) return;\n        }\n\n        return obj[last];\n    }\n\n    module.exports = get;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/get.js?");

/***/ }),

/***/ "./node_modules/mout/object/has.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/has.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var get = __webpack_require__(/*! ./get */ \"./node_modules/mout/object/get.js\");\n\n    var UNDEF;\n\n    /**\n     * Check if object has nested property.\n     */\n    function has(obj, prop){\n        return get(obj, prop) !== UNDEF;\n    }\n\n    module.exports = has;\n\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/has.js?");

/***/ }),

/***/ "./node_modules/mout/object/hasOwn.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/hasOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n    /**\n     * Safer Object.hasOwnProperty\n     */\n     function hasOwn(obj, prop){\n         return Object.prototype.hasOwnProperty.call(obj, prop);\n     }\n\n     module.exports = hasOwn;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/hasOwn.js?");

/***/ }),

/***/ "./node_modules/mout/object/keys.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/keys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\n\n    /**\n     * Get object keys\n     */\n     var keys = Object.keys || function (obj) {\n            var keys = [];\n            forOwn(obj, function(val, key){\n                keys.push(key);\n            });\n            return keys;\n        };\n\n    module.exports = keys;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/keys.js?");

/***/ }),

/***/ "./node_modules/mout/object/map.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/map.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Creates a new object where all the values are the result of calling\n     * `callback`.\n     */\n    function mapValues(obj, callback, thisObj) {\n        callback = makeIterator(callback, thisObj);\n        var output = {};\n        forOwn(obj, function(val, key, obj) {\n            output[key] = callback(val, key, obj);\n        });\n\n        return output;\n    }\n    module.exports = mapValues;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/map.js?");

/***/ }),

/***/ "./node_modules/mout/object/matches.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/object/matches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\n\n    /**\n     * checks if a object contains all given properties/values\n     */\n    function matches(target, props){\n        // can't use \"object/every\" because of circular dependency\n        var result = true;\n        forOwn(props, function(val, key){\n            if (target[key] !== val) {\n                // break loop at first difference\n                return (result = false);\n            }\n        });\n        return result;\n    }\n\n    module.exports = matches;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/matches.js?");

/***/ }),

/***/ "./node_modules/mout/object/max.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/max.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrMax = __webpack_require__(/*! ../array/max */ \"./node_modules/mout/array/max.js\");\nvar values = __webpack_require__(/*! ./values */ \"./node_modules/mout/object/values.js\");\n\n    /**\n     * Returns maximum value inside object.\n     */\n    function max(obj, compareFn) {\n        return arrMax(values(obj), compareFn);\n    }\n\n    module.exports = max;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/max.js?");

/***/ }),

/***/ "./node_modules/mout/object/merge.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/merge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasOwn = __webpack_require__(/*! ./hasOwn */ \"./node_modules/mout/object/hasOwn.js\");\nvar deepClone = __webpack_require__(/*! ../lang/deepClone */ \"./node_modules/mout/lang/deepClone.js\");\nvar isObject = __webpack_require__(/*! ../lang/isObject */ \"./node_modules/mout/lang/isObject.js\");\n\n    /**\n     * Deep merge objects.\n     */\n    function merge() {\n        var i = 1,\n            key, val, obj, target;\n\n        // make sure we don't modify source element and it's properties\n        // objects are passed by reference\n        target = deepClone( arguments[0] );\n\n        while (obj = arguments[i++]) {\n            for (key in obj) {\n                if ( ! hasOwn(obj, key) ) {\n                    continue;\n                }\n\n                val = obj[key];\n\n                if ( isObject(val) && isObject(target[key]) ){\n                    // inception, deep merge objects\n                    target[key] = merge(target[key], val);\n                } else {\n                    // make sure arrays, regexp, date, objects are cloned\n                    target[key] = deepClone(val);\n                }\n\n            }\n        }\n\n        return target;\n    }\n\n    module.exports = merge;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/merge.js?");

/***/ }),

/***/ "./node_modules/mout/object/min.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrMin = __webpack_require__(/*! ../array/min */ \"./node_modules/mout/array/min.js\");\nvar values = __webpack_require__(/*! ./values */ \"./node_modules/mout/object/values.js\");\n\n    /**\n     * Returns minimum value inside object.\n     */\n    function min(obj, iterator) {\n        return arrMin(values(obj), iterator);\n    }\n\n    module.exports = min;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/min.js?");

/***/ }),

/***/ "./node_modules/mout/object/mixIn.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/mixIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\n\n    /**\n    * Combine properties from all the objects into first one.\n    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.\n    * @param {object} target    Target Object\n    * @param {...object} objects    Objects to be combined (0...n objects).\n    * @return {object} Target Object.\n    */\n    function mixIn(target, objects){\n        var i = 0,\n            n = arguments.length,\n            obj;\n        while(++i < n){\n            obj = arguments[i];\n            if (obj != null) {\n                forOwn(obj, copyProp, target);\n            }\n        }\n        return target;\n    }\n\n    function copyProp(val, key){\n        this[key] = val;\n    }\n\n    module.exports = mixIn;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/mixIn.js?");

/***/ }),

/***/ "./node_modules/mout/object/namespace.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/object/namespace.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forEach = __webpack_require__(/*! ../array/forEach */ \"./node_modules/mout/array/forEach.js\");\n\n    /**\n     * Create nested object if non-existent\n     */\n    function namespace(obj, path){\n        if (!path) return obj;\n        forEach(path.split('.'), function(key){\n            if (!obj[key]) {\n                obj[key] = {};\n            }\n            obj = obj[key];\n        });\n        return obj;\n    }\n\n    module.exports = namespace;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/namespace.js?");

/***/ }),

/***/ "./node_modules/mout/object/omit.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/omit.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = __webpack_require__(/*! ../array/slice */ \"./node_modules/mout/array/slice.js\");\nvar contains = __webpack_require__(/*! ../array/contains */ \"./node_modules/mout/array/contains.js\");\n\n    /**\n     * Return a copy of the object, filtered to only contain properties except the blacklisted keys.\n     */\n    function omit(obj, var_keys){\n        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),\n            out = {};\n\n        for (var property in obj) {\n            if (obj.hasOwnProperty(property) && !contains(keys, property)) {\n                out[property] = obj[property];\n            }\n        }\n        return out;\n    }\n\n    module.exports = omit;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/omit.js?");

/***/ }),

/***/ "./node_modules/mout/object/pick.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/pick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = __webpack_require__(/*! ../array/slice */ \"./node_modules/mout/array/slice.js\");\n\n    /**\n     * Return a copy of the object, filtered to only have values for the whitelisted keys.\n     */\n    function pick(obj, var_keys){\n        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),\n            out = {},\n            i = 0, key;\n        while (key = keys[i++]) {\n            out[key] = obj[key];\n        }\n        return out;\n    }\n\n    module.exports = pick;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/pick.js?");

/***/ }),

/***/ "./node_modules/mout/object/pluck.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/pluck.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = __webpack_require__(/*! ./map */ \"./node_modules/mout/object/map.js\");\nvar prop = __webpack_require__(/*! ../function/prop */ \"./node_modules/mout/function/prop.js\");\n\n    /**\n     * Extract a list of property values.\n     */\n    function pluck(obj, propName){\n        return map(obj, prop(propName));\n    }\n\n    module.exports = pluck;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/pluck.js?");

/***/ }),

/***/ "./node_modules/mout/object/reduce.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/reduce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar size = __webpack_require__(/*! ./size */ \"./node_modules/mout/object/size.js\");\n\n    /**\n     * Object reduce\n     */\n    function reduce(obj, callback, memo, thisObj) {\n        var initial = arguments.length > 2;\n\n        if (!size(obj) && !initial) {\n            throw new Error('reduce of empty object with no initial value');\n        }\n\n        forOwn(obj, function(value, key, list) {\n            if (!initial) {\n                memo = value;\n                initial = true;\n            }\n            else {\n                memo = callback.call(thisObj, memo, value, key, list);\n            }\n        });\n\n        return memo;\n    }\n\n    module.exports = reduce;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/reduce.js?");

/***/ }),

/***/ "./node_modules/mout/object/reject.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/reject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var filter = __webpack_require__(/*! ./filter */ \"./node_modules/mout/object/filter.js\");\nvar makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Object reject\n     */\n    function reject(obj, callback, thisObj) {\n        callback = makeIterator(callback, thisObj);\n        return filter(obj, function(value, index, obj) {\n            return !callback(value, index, obj);\n        }, thisObj);\n    }\n\n    module.exports = reject;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/reject.js?");

/***/ }),

/***/ "./node_modules/mout/object/result.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/result.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ../lang/isFunction */ \"./node_modules/mout/lang/isFunction.js\");\n\n    function result(obj, prop) {\n        var property = obj[prop];\n\n        if(property === undefined) {\n            return;\n        }\n\n        return isFunction(property) ? property.call(obj) : property;\n    }\n\n    module.exports = result;\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/result.js?");

/***/ }),

/***/ "./node_modules/mout/object/set.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/set.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var namespace = __webpack_require__(/*! ./namespace */ \"./node_modules/mout/object/namespace.js\");\n\n    /**\n     * set \"nested\" object property\n     */\n    function set(obj, prop, val){\n        var parts = (/^(.+)\\.(.+)$/).exec(prop);\n        if (parts){\n            namespace(obj, parts[1])[parts[2]] = val;\n        } else {\n            obj[prop] = val;\n        }\n    }\n\n    module.exports = set;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/set.js?");

/***/ }),

/***/ "./node_modules/mout/object/size.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/size.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\n\n    /**\n     * Get object size\n     */\n    function size(obj) {\n        var count = 0;\n        forOwn(obj, function(){\n            count++;\n        });\n        return count;\n    }\n\n    module.exports = size;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/size.js?");

/***/ }),

/***/ "./node_modules/mout/object/some.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/some.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\nvar makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ \"./node_modules/mout/function/makeIterator_.js\");\n\n    /**\n     * Object some\n     */\n    function some(obj, callback, thisObj) {\n        callback = makeIterator(callback, thisObj);\n        var result = false;\n        forOwn(obj, function(val, key) {\n            if (callback(val, key, obj)) {\n                result = true;\n                return false; // break\n            }\n        });\n        return result;\n    }\n\n    module.exports = some;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/some.js?");

/***/ }),

/***/ "./node_modules/mout/object/unset.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/unset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./has */ \"./node_modules/mout/object/has.js\");\n\n    /**\n     * Unset object property.\n     */\n    function unset(obj, prop){\n        if (has(obj, prop)) {\n            var parts = prop.split('.'),\n                last = parts.pop();\n            while (prop = parts.shift()) {\n                obj = obj[prop];\n            }\n            return (delete obj[last]);\n\n        } else {\n            // if property doesn't exist treat as deleted\n            return true;\n        }\n    }\n\n    module.exports = unset;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/unset.js?");

/***/ }),

/***/ "./node_modules/mout/object/values.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/values.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOwn = __webpack_require__(/*! ./forOwn */ \"./node_modules/mout/object/forOwn.js\");\n\n    /**\n     * Get object values\n     */\n    function values(obj) {\n        var vals = [];\n        forOwn(obj, function(val, key){\n            vals.push(val);\n        });\n        return vals;\n    }\n\n    module.exports = values;\n\n\n\n\n//# sourceURL=webpack://LocalesList/./node_modules/mout/object/values.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _langmap = __webpack_require__(/*! langmap */ \"./node_modules/langmap/language-mapping-list.js\");\n\nvar _langmap2 = _interopRequireDefault(_langmap);\n\nvar _iso31661Alpha = __webpack_require__(/*! iso-3166-1-alpha-2 */ \"./node_modules/iso-3166-1-alpha-2/index.js\");\n\nvar _iso31661Alpha2 = _interopRequireDefault(_iso31661Alpha);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar allLocales = [];\nfor (var code in _langmap2.default) {\n    if (!_langmap2.default.hasOwnProperty(code)) continue;\n\n    if (code.includes('-')) {\n        var item = {\n            locale: {\n                iso_639: code.split('-')[0],\n                iso_639_with_country: code,\n                native_name: _langmap2.default[code].nativeName,\n                english_name: _langmap2.default[code].englishName\n            },\n            country: {\n                iso_3166_1_alpha_2: code.split('-')[1],\n                english_name: _iso31661Alpha2.default.getCountry(code.split('-')[1])\n            }\n        };\n\n        if (!item.country.english_name) continue;\n\n        allLocales.push(item);\n    }\n}\n\nvar LocalesList = function () {\n    function LocalesList() {\n        (0, _classCallCheck3.default)(this, LocalesList);\n    }\n\n    (0, _createClass3.default)(LocalesList, null, [{\n        key: 'getAllLocales',\n        value: function getAllLocales() {\n            return allLocales;\n        }\n    }, {\n        key: 'getAllCountries',\n        value: function getAllCountries() {\n            return _iso31661Alpha2.default.getData();\n        }\n    }]);\n    return LocalesList;\n}();\n\nexports.default = LocalesList;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack://LocalesList/./src/index.js?");

/***/ })

/******/ });
});