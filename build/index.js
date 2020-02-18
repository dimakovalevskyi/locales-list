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

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/iso-3166-1-alpha-2/index.js":
/*!**************************************************!*\
  !*** ./node_modules/iso-3166-1-alpha-2/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function() {
    var Iso31661a2, mout, singleton;

    mout = __webpack_require__(/*! mout/object */ "./node_modules/mout/object.js");

    Iso31661a2 = (function() {
        function Iso31661a2() {}

        Iso31661a2.prototype.getCountry = function(code) {
            return Iso31661a2.prototype.countries[code];
        };

        Iso31661a2.prototype.getCode = function(country) {
            var idx, ret;
            ret = null;
            if (country != null) {
                idx = mout.values(Iso31661a2.prototype.countries).indexOf(country);
                if (idx !== -1) {
                    ret = Object.keys(Iso31661a2.prototype.countries)[idx];
                }
            }
            return ret;
        };

        Iso31661a2.prototype.getCountries = function() {
            return mout.values(Iso31661a2.prototype.countries);
        };

        Iso31661a2.prototype.getCodes = function() {
            return Object.keys(Iso31661a2.prototype.countries);
        };

        Iso31661a2.prototype.getData = function() {
            return Iso31661a2.prototype.countries;
        };

        Iso31661a2.prototype.countries = {
            AF: "Afghanistan",
            AX: "Åland Islands",
            AL: "Albania",
            DZ: "Algeria",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua and Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia, Plurinational State of",
            BQ: "Bonaire, Sint Eustatius and Saba",
            BA: "Bosnia and Herzegovina",
            BW: "Botswana",
            BV: "Bouvet Island",
            BR: "Brazil",
            IO: "British Indian Ocean Territory",
            BN: "Brunei Darussalam",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos (Keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CD: "Congo, the Democratic Republic of the",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "Côte d'Ivoire",
            HR: "Croatia",
            CU: "Cuba",
            CW: "Curaçao",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands (Malvinas)",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GU: "Guam",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HM: "Heard Island and McDonald Mcdonald Islands",
            VA: "Holy See (Vatican City State)",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran, Islamic Republic of",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KP: "Korea, Democratic People's Republic of",
            KR: "Korea, Republic of",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Lao People's Democratic Republic",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macao",
            MK: "Macedonia, the Former Yugoslav Republic of",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            FM: "Micronesia, Federated States of",
            MD: "Moldova, Republic of",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PW: "Palau",
            PS: "Palestine, State of",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RE: "Réunion",
            RO: "Romania",
            RU: "Russian Federation",
            RW: "Rwanda",
            BL: "Saint Barthélemy",
            SH: "Saint Helena, Ascension and Tristan da Cunha",
            KN: "Saint Kitts and Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin (French part)",
            PM: "Saint Pierre and Miquelon",
            VC: "Saint Vincent and the Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "Sao Tome and Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SX: "Sint Maarten (Dutch part)",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia and the South Sandwich Islands",
            SS: "South Sudan",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SJ: "Svalbard and Jan Mayen",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syrian Arab Republic",
            TW: "Taiwan, Province of China",
            TJ: "Tajikistan",
            TZ: "Tanzania, United Republic of",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad and Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks and Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
            US: "United States",
            UM: "United States Minor Outlying Islands",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VE: "Venezuela, Bolivarian Republic of",
            VN: "Viet Nam",
            VG: "Virgin Islands, British",
            VI: "Virgin Islands, U.S.",
            WF: "Wallis and Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        };

        return Iso31661a2;

    })();

    singleton = null;

    module.exports = (function() {
        return singleton != null ? singleton : singleton = new Iso31661a2();
    })();

}).call(this);


/***/ }),

/***/ "./node_modules/langmap/language-mapping-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/langmap/language-mapping-list.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return (root.languageMappingList = factory());
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
  return {
    'ach': {
      nativeName: "Lwo",
      englishName: "Acholi"
    },
    'ady': {
      nativeName: "Адыгэбзэ",
      englishName: "Adyghe"
    },
    'af': {
      nativeName: "Afrikaans",
      englishName: "Afrikaans"
    },
    'af-NA': {
      nativeName: "Afrikaans (Namibia)",
      englishName: "Afrikaans (Namibia)"
    },
    'af-ZA': {
      nativeName: "Afrikaans (South Africa)",
      englishName: "Afrikaans (South Africa)"
    },
    'ak': {
      nativeName: "Tɕɥi",
      englishName: "Akan"
    },
    'ar': {
      nativeName: "العربية",
      englishName: "Arabic"
    },
    'ar-AR': {
      nativeName: "العربية",
      englishName: "Arabic"
    },
    'ar-MA': {
      nativeName: "العربية",
      englishName: "Arabic (Morocco)"
    },
    'ar-SA': {
      nativeName: "العربية (السعودية)",
      englishName: "Arabic (Saudi Arabia)"
    },
    'ay-BO': {
      nativeName: "Aymar aru",
      englishName: "Aymara"
    },
    'az': {
      nativeName: "Azərbaycan dili",
      englishName: "Azerbaijani"
    },
    'az-AZ': {
      nativeName: "Azərbaycan dili",
      englishName: "Azerbaijani"
    },
    'be-BY': {
      nativeName: "Беларуская",
      englishName: "Belarusian"
    },
    'bg': {
      nativeName: "Български",
      englishName: "Bulgarian"
    },
    'bg-BG': {
      nativeName: "Български",
      englishName: "Bulgarian"
    },
    'bn': {
      nativeName: "বাংলা",
      englishName: "Bengali"
    },
    'bn-IN': {
      nativeName: "বাংলা (ভারত)",
      englishName: "Bengali (India)"
    },
    'bn-BD': {
      nativeName: "বাংলা(বাংলাদেশ)",
      englishName: "Bengali (Bangladesh)"
    },
    'bs-BA': {
      nativeName: "Bosanski",
      englishName: "Bosnian"
    },
    'ca': {
      nativeName: "Català",
      englishName: "Catalan"
    },
    'ca-ES': {
      nativeName: "Català",
      englishName: "Catalan"
    },
    'cak': {
      nativeName: "Maya Kaqchikel",
      englishName: "Kaqchikel"
    },
    'ck-US': {
      nativeName: "ᏣᎳᎩ (tsalagi)",
      englishName: "Cherokee"
    },
    'cs': {
      nativeName: "Čeština",
      englishName: "Czech"
    },
    'cs-CZ': {
      nativeName: "Čeština",
      englishName: "Czech"
    },
    'cy': {
      nativeName: "Cymraeg",
      englishName: "Welsh"
    },
    'cy-GB': {
      nativeName: "Cymraeg",
      englishName: "Welsh"
    },
    'da': {
      nativeName: "Dansk",
      englishName: "Danish"
    },
    'da-DK': {
      nativeName: "Dansk",
      englishName: "Danish"
    },
    'de': {
      nativeName: "Deutsch",
      englishName: "German"
    },
    'de-AT': {
      nativeName: "Deutsch (Österreich)",
      englishName: "German (Austria)"
    },
    'de-DE': {
      nativeName: "Deutsch (Deutschland)",
      englishName: "German (Germany)"
    },
    'de-CH': {
      nativeName: "Deutsch (Schweiz)",
      englishName: "German (Switzerland)"
    },
    'dsb': {
      nativeName: "Dolnoserbšćina",
      englishName: "Lower Sorbian"
    },
    'el': {
      nativeName: "Ελληνικά",
      englishName: "Greek"
    },
    'el-GR': {
      nativeName: "Ελληνικά",
      englishName: "Greek (Greece)"
    },
    'en': {
      nativeName: "English",
      englishName: "English"
    },
    'en-GB': {
      nativeName: "English (UK)",
      englishName: "English (UK)"
    },
    'en-AU': {
      nativeName: "English (Australia)",
      englishName: "English (Australia)"
    },
    'en-CA': {
      nativeName: "English (Canada)",
      englishName: "English (Canada)"
    },
    'en-IE': {
      nativeName: "English (Ireland)",
      englishName: "English (Ireland)"
    },
    'en-IN': {
      nativeName: "English (India)",
      englishName: "English (India)"
    },
    'en-PI': {
      nativeName: "English (Pirate)",
      englishName: "English (Pirate)"
    },
    'en-UD': {
      nativeName: "English (Upside Down)",
      englishName: "English (Upside Down)"
    },
    'en-US': {
      nativeName: "English (US)",
      englishName: "English (US)"
    },
    'en-ZA': {
      nativeName: "English (South Africa)",
      englishName: "English (South Africa)"
    },
    'en@pirate': {
      nativeName: "English (Pirate)",
      englishName: "English (Pirate)"
    },
    'eo': {
      nativeName: "Esperanto",
      englishName: "Esperanto"
    },
    'eo-EO': {
      nativeName: "Esperanto",
      englishName: "Esperanto"
    },
    'es': {
      nativeName: "Español",
      englishName: "Spanish"
    },
    'es-AR': {
      nativeName: "Español (Argentine)",
      englishName: "Spanish (Argentina)"
    },
    'es-419': {
      nativeName: "Español (Latinoamérica)",
      englishName: "Spanish (Latin America)"
    },
    'es-CL': {
      nativeName: "Español (Chile)",
      englishName: "Spanish (Chile)"
    },
    'es-CO': {
      nativeName: "Español (Colombia)",
      englishName: "Spanish (Colombia)"
    },
    'es-EC': {
      nativeName: "Español (Ecuador)",
      englishName: "Spanish (Ecuador)"
    },
    'es-ES': {
      nativeName: "Español (España)",
      englishName: "Spanish (Spain)"
    },
    'es-LA': {
      nativeName: "Español (Latinoamérica)",
      englishName: "Spanish (Latin America)"
    },
    'es-NI': {
      nativeName: "Español (Nicaragua)",
      englishName: "Spanish (Nicaragua)"
    },
    'es-MX': {
      nativeName: "Español (México)",
      englishName: "Spanish (Mexico)"
    },
    'es-US': {
      nativeName: "Español (Estados Unidos)",
      englishName: "Spanish (United States)"
    },
    'es-VE': {
      nativeName: "Español (Venezuela)",
      englishName: "Spanish (Venezuela)"
    },
    'et': {
      nativeName: "eesti keel",
      englishName: "Estonian"
    },
    'et-EE': {
      nativeName: "Eesti (Estonia)",
      englishName: "Estonian (Estonia)"
    },
    'eu': {
      nativeName: "Euskara",
      englishName: "Basque"
    },
    'eu-ES': {
      nativeName: "Euskara",
      englishName: "Basque"
    },
    'fa': {
      nativeName: "فارسی",
      englishName: "Persian"
    },
    'fa-IR': {
      nativeName: "فارسی",
      englishName: "Persian"
    },
    'fb-LT': {
      nativeName: "Leet Speak",
      englishName: "Leet"
    },
    'ff': {
      nativeName: "Fulah",
      englishName: "Fulah"
    },
    'fi': {
      nativeName: "Suomi",
      englishName: "Finnish"
    },
    'fi-FI': {
      nativeName: "Suomi",
      englishName: "Finnish"
    },
    'fo-FO': {
      nativeName: "Føroyskt",
      englishName: "Faroese"
    },
    'fr': {
      nativeName: "Français",
      englishName: "French"
    },
    'fr-CA': {
      nativeName: "Français (Canada)",
      englishName: "French (Canada)"
    },
    'fr-FR': {
      nativeName: "Français (France)",
      englishName: "French (France)"
    },
    'fr-BE': {
      nativeName: "Français (Belgique)",
      englishName: "French (Belgium)"
    },
    'fr-CH': {
      nativeName: "Français (Suisse)",
      englishName: "French (Switzerland)"
    },
    'fy-NL': {
      nativeName: "Frysk",
      englishName: "Frisian (West)"
    },
    'ga': {
      nativeName: "Gaeilge",
      englishName: "Irish"
    },
    'ga-IE': {
      nativeName: "Gaeilge (Gaelic)",
      englishName: "Irish (Gaelic)"
    },
    'gl': {
      nativeName: "Galego",
      englishName: "Galician"
    },
    'gl-ES': {
      nativeName: "Galego",
      englishName: "Galician"
    },
    'gn-PY': {
      nativeName: "Avañe'ẽ",
      englishName: "Guarani"
    },
    'gu-IN': {
      nativeName: "ગુજરાતી",
      englishName: "Gujarati"
    },
    'gx-GR': {
      nativeName: "Ἑλληνική ἀρχαία",
      englishName: "Classical Greek"
    },
    'he': {
      nativeName: "עברית‏",
      englishName: "Hebrew"
    },
    'he-IL': {
      nativeName: "עברית‏",
      englishName: "Hebrew"
    },
    'hi': {
      nativeName: "हिन्दी",
      englishName: "Hindi"
    },
    'hi-IN': {
      nativeName: "हिन्दी",
      englishName: "Hindi"
    },
    'hr': {
      nativeName: "Hrvatski",
      englishName: "Croatian"
    },
    'hr-HR': {
      nativeName: "Hrvatski",
      englishName: "Croatian"
    },
    'hsb': {
      nativeName: "Hornjoserbšćina",
      englishName: "Upper Sorbian"
    },
    'ht': {
      nativeName: "Kreyòl",
      englishName: "Haitian Creole"
    },
    'hu': {
      nativeName: "Magyar",
      englishName: "Hungarian"
    },
    'hu-HU': {
      nativeName: "Magyar",
      englishName: "Hungarian"
    },
    'hy-AM': {
      nativeName: "Հայերեն",
      englishName: "Armenian"
    },
    'id': {
      nativeName: "Bahasa Indonesia",
      englishName: "Indonesian"
    },
    'id-ID': {
      nativeName: "Bahasa Indonesia",
      englishName: "Indonesian"
    },
    'is': {
      nativeName: "Íslenska",
      englishName: "Icelandic"
    },
    'is-IS': {
      nativeName: "Íslenska (Iceland)",
      englishName: "Icelandic (Iceland)"
    },
    'it': {
      nativeName: "Italiano",
      englishName: "Italian"
    },
    'it-IT': {
      nativeName: "Italiano",
      englishName: "Italian"
    },
    'ja': {
      nativeName: "日本語",
      englishName: "Japanese"
    },
    'ja-JP': {
      nativeName: "日本語",
      englishName: "Japanese"
    },
    'jv-ID': {
      nativeName: "Basa Jawa",
      englishName: "Javanese"
    },
    'ka-GE': {
      nativeName: "ქართული",
      englishName: "Georgian"
    },
    'kk-KZ': {
      nativeName: "Қазақша",
      englishName: "Kazakh"
    },
    'km': {
      nativeName: "ភាសាខ្មែរ",
      englishName: "Khmer"
    },
    'km-KH': {
      nativeName: "ភាសាខ្មែរ",
      englishName: "Khmer"
    },
    'kab': {
      nativeName: "Taqbaylit",
      englishName: "Kabyle"
    },
    'kn': {
      nativeName: "ಕನ್ನಡ",
      englishName: "Kannada"
    },
    'kn-IN': {
      nativeName: "ಕನ್ನಡ (India)",
      englishName: "Kannada (India)"
    },
    'ko': {
      nativeName: "한국어",
      englishName: "Korean"
    },
    'ko-KR': {
      nativeName: "한국어 (韩国)",
      englishName: "Korean (Korea)"
    },
    'ku-TR': {
      nativeName: "Kurdî",
      englishName: "Kurdish"
    },
    'la': {
      nativeName: "Latin",
      englishName: "Latin"
    },
    'la-VA': {
      nativeName: "Latin",
      englishName: "Latin"
    },
    'lb': {
      nativeName: "Lëtzebuergesch",
      englishName: "Luxembourgish"
    },
    'li-NL': {
      nativeName: "Lèmbörgs",
      englishName: "Limburgish"
    },
    'lt': {
      nativeName: "Lietuvių",
      englishName: "Lithuanian"
    },
    'lt-LT': {
      nativeName: "Lietuvių",
      englishName: "Lithuanian"
    },
    'lv': {
      nativeName: "Latviešu",
      englishName: "Latvian"
    },
    'lv-LV': {
      nativeName: "Latviešu",
      englishName: "Latvian"
    },
    'mai': {
      nativeName: "मैथिली, মৈথিলী",
      englishName: "Maithili"
    },
    'mg-MG': {
      nativeName: "Malagasy",
      englishName: "Malagasy"
    },
    'mk': {
      nativeName: "Македонски",
      englishName: "Macedonian"
    },
    'mk-MK': {
      nativeName: "Македонски (Македонски)",
      englishName: "Macedonian (Macedonian)"
    },
    'ml': {
      nativeName: "മലയാളം",
      englishName: "Malayalam"
    },
    'ml-IN': {
      nativeName: "മലയാളം",
      englishName: "Malayalam"
    },
    'mn-MN': {
      nativeName: "Монгол",
      englishName: "Mongolian"
    },
    'mr': {
      nativeName: "मराठी",
      englishName: "Marathi"
    },
    'mr-IN': {
      nativeName: "मराठी",
      englishName: "Marathi"
    },
    'ms': {
      nativeName: "Bahasa Melayu",
      englishName: "Malay"
    },
    'ms-MY': {
      nativeName: "Bahasa Melayu",
      englishName: "Malay"
    },
    'mt': {
      nativeName: "Malti",
      englishName: "Maltese"
    },
    'mt-MT': {
      nativeName: "Malti",
      englishName: "Maltese"
    },
    'my': {
      nativeName: "ဗမာစကာ",
      englishName: "Burmese"
    },
    'no': {
      nativeName: "Norsk",
      englishName: "Norwegian"
    },
    'nb': {
      nativeName: "Norsk (bokmål)",
      englishName: "Norwegian (bokmal)"
    },
    'nb-NO': {
      nativeName: "Norsk (bokmål)",
      englishName: "Norwegian (bokmal)"
    },
    'ne': {
      nativeName: "नेपाली",
      englishName: "Nepali"
    },
    'ne-NP': {
      nativeName: "नेपाली",
      englishName: "Nepali"
    },
    'nl': {
      nativeName: "Nederlands",
      englishName: "Dutch"
    },
    'nl-BE': {
      nativeName: "Nederlands (België)",
      englishName: "Dutch (Belgium)"
    },
    'nl-NL': {
      nativeName: "Nederlands (Nederland)",
      englishName: "Dutch (Netherlands)"
    },
    'nn-NO': {
      nativeName: "Norsk (nynorsk)",
      englishName: "Norwegian (nynorsk)"
    },
    'oc': {
      nativeName: "Occitan",
      englishName: "Occitan"
    },
    'or-IN': {
      nativeName: "ଓଡ଼ିଆ",
      englishName: "Oriya"
    },
    'pa': {
      nativeName: "ਪੰਜਾਬੀ",
      englishName: "Punjabi"
    },
    'pa-IN': {
      nativeName: "ਪੰਜਾਬੀ (ਭਾਰਤ ਨੂੰ)",
      englishName: "Punjabi (India)"
    },
    'pl': {
      nativeName: "Polski",
      englishName: "Polish"
    },
    'pl-PL': {
      nativeName: "Polski",
      englishName: "Polish"
    },
    'ps-AF': {
      nativeName: "پښتو",
      englishName: "Pashto"
    },
    'pt': {
      nativeName: "Português",
      englishName: "Portuguese"
    },
    'pt-BR': {
      nativeName: "Português (Brasil)",
      englishName: "Portuguese (Brazil)"
    },
    'pt-PT': {
      nativeName: "Português (Portugal)",
      englishName: "Portuguese (Portugal)"
    },
    'qu-PE': {
      nativeName: "Qhichwa",
      englishName: "Quechua"
    },
    'rm-CH': {
      nativeName: "Rumantsch",
      englishName: "Romansh"
    },
    'ro': {
      nativeName: "Română",
      englishName: "Romanian"
    },
    'ro-RO': {
      nativeName: "Română",
      englishName: "Romanian"
    },
    'ru': {
      nativeName: "Русский",
      englishName: "Russian"
    },
    'ru-RU': {
      nativeName: "Русский",
      englishName: "Russian"
    },
    'sa-IN': {
      nativeName: "संस्कृतम्",
      englishName: "Sanskrit"
    },
    'se-NO': {
      nativeName: "Davvisámegiella",
      englishName: "Northern Sámi"
    },
    'si-LK': {
      nativeName: "පළාත",
      englishName: "Sinhala (Sri Lanka)"
    },
    'sk': {
      nativeName: "Slovenčina",
      englishName: "Slovak"
    },
    'sk-SK': {
      nativeName: "Slovenčina (Slovakia)",
      englishName: "Slovak (Slovakia)"
    },
    'sl': {
      nativeName: "Slovenščina",
      englishName: "Slovenian"
    },
    'sl-SI': {
      nativeName: "Slovenščina",
      englishName: "Slovenian"
    },
    'so-SO': {
      nativeName: "Soomaaliga",
      englishName: "Somali"
    },
    'sq': {
      nativeName: "Shqip",
      englishName: "Albanian"
    },
    'sq-AL': {
      nativeName: "Shqip",
      englishName: "Albanian"
    },
    'sr': {
      nativeName: "Српски",
      englishName: "Serbian"
    },
    'sr-RS': {
      nativeName: "Српски (Serbia)",
      englishName: "Serbian (Serbia)"
    },
    'su': {
      nativeName: "Basa Sunda",
      englishName: "Sundanese"
    },
    'sv': {
      nativeName: "Svenska",
      englishName: "Swedish"
    },
    'sv-SE': {
      nativeName: "Svenska",
      englishName: "Swedish"
    },
    'sw': {
      nativeName: "Kiswahili",
      englishName: "Swahili"
    },
    'sw-KE': {
      nativeName: "Kiswahili",
      englishName: "Swahili (Kenya)"
    },
    'ta': {
      nativeName: "தமிழ்",
      englishName: "Tamil"
    },
    'ta-IN': {
      nativeName: "தமிழ்",
      englishName: "Tamil"
    },
    'te': {
      nativeName: "తెలుగు",
      englishName: "Telugu"
    },
    'te-IN': {
      nativeName: "తెలుగు",
      englishName: "Telugu"
    },
    'tg': {
      nativeName: "забо́ни тоҷикӣ́",
      englishName: "Tajik"
    },
    'tg-TJ': {
      nativeName: "тоҷикӣ",
      englishName: "Tajik"
    },
    'th': {
      nativeName: "ภาษาไทย",
      englishName: "Thai"
    },
    'th-TH': {
      nativeName: "ภาษาไทย (ประเทศไทย)",
      englishName: "Thai (Thailand)"
    },
    'tl': {
      nativeName: "Filipino",
      englishName: "Filipino"
    },
    'tl-PH': {
      nativeName: "Filipino",
      englishName: "Filipino"
    },
    'tlh': {
      nativeName: "tlhIngan-Hol",
      englishName: "Klingon"
    },
    'tr': {
      nativeName: "Türkçe",
      englishName: "Turkish"
    },
    'tr-TR': {
      nativeName: "Türkçe",
      englishName: "Turkish"
    },
    'tt-RU': {
      nativeName: "татарча",
      englishName: "Tatar"
    },
    'uk': {
      nativeName: "Українська",
      englishName: "Ukrainian"
    },
    'uk-UA': {
      nativeName: "Українська",
      englishName: "Ukrainian"
    },
    'ur': {
      nativeName: "اردو",
      englishName: "Urdu"
    },
    'ur-PK': {
      nativeName: "اردو",
      englishName: "Urdu"
    },
    'uz': {
      nativeName: "O'zbek",
      englishName: "Uzbek"
    },
    'uz-UZ': {
      nativeName: "O'zbek",
      englishName: "Uzbek"
    },
    'vi': {
      nativeName: "Tiếng Việt",
      englishName: "Vietnamese"
    },
    'vi-VN': {
      nativeName: "Tiếng Việt",
      englishName: "Vietnamese"
    },
    'xh-ZA': {
      nativeName: "isiXhosa",
      englishName: "Xhosa"
    },
    'yi': {
      nativeName: "ייִדיש",
      englishName: "Yiddish"
    },
    'yi-DE': {
      nativeName: "ייִדיש (German)",
      englishName: "Yiddish (German)"
    },
    'zh': {
      nativeName: "中文",
      englishName: "Chinese"
    },
    'zh-Hans': {
      nativeName: "中文简体",
      englishName: "Chinese Simplified"
    },
    'zh-Hant': {
      nativeName: "中文繁體",
      englishName: "Chinese Traditional"
    },
    'zh-CN': {
      nativeName: "中文（中国）",
      englishName: "Chinese Simplified (China)"
    },
    'zh-HK': {
      nativeName: "中文（香港）",
      englishName: "Chinese Traditional (Hong Kong)"
    },
    'zh-SG': {
      nativeName: "中文（新加坡）",
      englishName: "Chinese Simplified (Singapore)"
    },
    'zh-TW': {
      nativeName: "中文（台灣）",
      englishName: "Chinese Traditional (Taiwan)"
    },
    'zu-ZA': {
      nativeName: "isiZulu",
      englishName: "Zulu"
    }
  };
}));


/***/ }),

/***/ "./node_modules/mout/array/contains.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/array/contains.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(/*! ./indexOf */ "./node_modules/mout/array/indexOf.js");

    /**
     * If array contains values.
     */
    function contains(arr, val) {
        return indexOf(arr, val) !== -1;
    }
    module.exports = contains;



/***/ }),

/***/ "./node_modules/mout/array/forEach.js":
/*!********************************************!*\
  !*** ./node_modules/mout/array/forEach.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Array forEach
     */
    function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }

    module.exports = forEach;




/***/ }),

/***/ "./node_modules/mout/array/indexOf.js":
/*!********************************************!*\
  !*** ./node_modules/mout/array/indexOf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Array.indexOf
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        if (arr == null) {
            return -1;
        }

        var len = arr.length,
            i = fromIndex < 0 ? len + fromIndex : fromIndex;
        while (i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }

            i++;
        }

        return -1;
    }

    module.exports = indexOf;



/***/ }),

/***/ "./node_modules/mout/array/max.js":
/*!****************************************!*\
  !*** ./node_modules/mout/array/max.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Return maximum value inside array
     */
    function max(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return Infinity;
        } else if (arr.length && !iterator) {
            return Math.max.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = -Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp > compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = max;




/***/ }),

/***/ "./node_modules/mout/array/min.js":
/*!****************************************!*\
  !*** ./node_modules/mout/array/min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return -Infinity;
        } else if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp < compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = min;




/***/ }),

/***/ "./node_modules/mout/array/slice.js":
/*!******************************************!*\
  !*** ./node_modules/mout/array/slice.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        var len = arr.length;

        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = Math.max(len + start, 0);
        } else {
            start = Math.min(start, len);
        }

        if (end == null) {
            end = len;
        } else if (end < 0) {
            end = Math.max(len + end, 0);
        } else {
            end = Math.min(end, len);
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    module.exports = slice;




/***/ }),

/***/ "./node_modules/mout/function/bind.js":
/*!********************************************!*\
  !*** ./node_modules/mout/function/bind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/slice */ "./node_modules/mout/array/slice.js");

    /**
     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
     * @param {Function} fn  Function.
     * @param {object} context   Execution context.
     * @param {rest} args    Arguments (0...n arguments).
     * @return {Function} Wrapped Function.
     */
    function bind(fn, context, args){
        var argsArr = slice(arguments, 2); //curried args
        return function(){
            return fn.apply(context, argsArr.concat(slice(arguments)));
        };
    }

    module.exports = bind;




/***/ }),

/***/ "./node_modules/mout/function/identity.js":
/*!************************************************!*\
  !*** ./node_modules/mout/function/identity.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Returns the first argument provided to it.
     */
    function identity(val){
        return val;
    }

    module.exports = identity;




/***/ }),

/***/ "./node_modules/mout/function/makeIterator_.js":
/*!*****************************************************!*\
  !*** ./node_modules/mout/function/makeIterator_.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/mout/function/identity.js");
var prop = __webpack_require__(/*! ./prop */ "./node_modules/mout/function/prop.js");
var deepMatches = __webpack_require__(/*! ../object/deepMatches */ "./node_modules/mout/object/deepMatches.js");

    /**
     * Converts argument into a valid iterator.
     * Used internally on most array/object/collection methods that receives a
     * callback/iterator providing a shortcut syntax.
     */
    function makeIterator(src, thisObj){
        if (src == null) {
            return identity;
        }
        switch(typeof src) {
            case 'function':
                // function is the first to improve perf (most common case)
                // also avoid using `Function#call` if not needed, which boosts
                // perf a lot in some cases
                return (typeof thisObj !== 'undefined')? function(val, i, arr){
                    return src.call(thisObj, val, i, arr);
                } : src;
            case 'object':
                return function(val){
                    return deepMatches(val, src);
                };
            case 'string':
            case 'number':
                return prop(src);
        }
    }

    module.exports = makeIterator;




/***/ }),

/***/ "./node_modules/mout/function/prop.js":
/*!********************************************!*\
  !*** ./node_modules/mout/function/prop.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Returns a function that gets a property of the passed object
     */
    function prop(name){
        return function(obj){
            return obj[name];
        };
    }

    module.exports = prop;




/***/ }),

/***/ "./node_modules/mout/lang/clone.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/lang/clone.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var kindOf = __webpack_require__(/*! ./kindOf */ "./node_modules/mout/lang/kindOf.js");
var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/mout/lang/isPlainObject.js");
var mixIn = __webpack_require__(/*! ../object/mixIn */ "./node_modules/mout/object/mixIn.js");

    /**
     * Clone native types.
     */
    function clone(val){
        switch (kindOf(val)) {
            case 'Object':
                return cloneObject(val);
            case 'Array':
                return cloneArray(val);
            case 'RegExp':
                return cloneRegExp(val);
            case 'Date':
                return cloneDate(val);
            default:
                return val;
        }
    }

    function cloneObject(source) {
        if (isPlainObject(source)) {
            return mixIn({}, source);
        } else {
            return source;
        }
    }

    function cloneRegExp(r) {
        var flags = '';
        flags += r.multiline ? 'm' : '';
        flags += r.global ? 'g' : '';
        flags += r.ignoreCase ? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date) {
        return new Date(+date);
    }

    function cloneArray(arr) {
        return arr.slice();
    }

    module.exports = clone;




/***/ }),

/***/ "./node_modules/mout/lang/deepClone.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/lang/deepClone.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var clone = __webpack_require__(/*! ./clone */ "./node_modules/mout/lang/clone.js");
var forOwn = __webpack_require__(/*! ../object/forOwn */ "./node_modules/mout/object/forOwn.js");
var kindOf = __webpack_require__(/*! ./kindOf */ "./node_modules/mout/lang/kindOf.js");
var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/mout/lang/isPlainObject.js");

    /**
     * Recursively clone native types.
     */
    function deepClone(val, instanceClone) {
        switch ( kindOf(val) ) {
            case 'Object':
                return cloneObject(val, instanceClone);
            case 'Array':
                return cloneArray(val, instanceClone);
            default:
                return clone(val);
        }
    }

    function cloneObject(source, instanceClone) {
        if (isPlainObject(source)) {
            var out = {};
            forOwn(source, function(val, key) {
                this[key] = deepClone(val, instanceClone);
            }, out);
            return out;
        } else if (instanceClone) {
            return instanceClone(source);
        } else {
            return source;
        }
    }

    function cloneArray(arr, instanceClone) {
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = deepClone(arr[i], instanceClone);
        }
        return out;
    }

    module.exports = deepClone;





/***/ }),

/***/ "./node_modules/mout/lang/is.js":
/*!**************************************!*\
  !*** ./node_modules/mout/lang/is.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Check if both arguments are egal.
     */
    function is(x, y){
        // implementation borrowed from harmony:egal spec
        if (x === y) {
          // 0 === -0, but they are not identical
          return x !== 0 || 1 / x === 1 / y;
        }

        // NaN !== NaN, but they are identical.
        // NaNs are the only non-reflexive value, i.e., if x !== x,
        // then x is a NaN.
        // isNaN is broken: it converts its argument to number, so
        // isNaN("foo") => true
        return x !== x && y !== y;
    }

    module.exports = is;




/***/ }),

/***/ "./node_modules/mout/lang/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/lang/isArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(/*! ./isKind */ "./node_modules/mout/lang/isKind.js");
    /**
     */
    var isArray = Array.isArray || function (val) {
        return isKind(val, 'Array');
    };
    module.exports = isArray;



/***/ }),

/***/ "./node_modules/mout/lang/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/mout/lang/isFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(/*! ./isKind */ "./node_modules/mout/lang/isKind.js");
    /**
     */
    function isFunction(val) {
        return isKind(val, 'Function');
    }
    module.exports = isFunction;



/***/ }),

/***/ "./node_modules/mout/lang/isKind.js":
/*!******************************************!*\
  !*** ./node_modules/mout/lang/isKind.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var kindOf = __webpack_require__(/*! ./kindOf */ "./node_modules/mout/lang/kindOf.js");
    /**
     * Check if value is from a specific "kind".
     */
    function isKind(val, kind){
        return kindOf(val) === kind;
    }
    module.exports = isKind;



/***/ }),

/***/ "./node_modules/mout/lang/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/mout/lang/isObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(/*! ./isKind */ "./node_modules/mout/lang/isKind.js");
    /**
     */
    function isObject(val) {
        return isKind(val, 'Object');
    }
    module.exports = isObject;



/***/ }),

/***/ "./node_modules/mout/lang/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/mout/lang/isPlainObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Checks if the value is created by the `Object` constructor.
     */
    function isPlainObject(value) {
        return (!!value && typeof value === 'object' &&
            value.constructor === Object);
    }

    module.exports = isPlainObject;




/***/ }),

/***/ "./node_modules/mout/lang/isPrimitive.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/lang/isPrimitive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Checks if the object is a primitive
     */
    function isPrimitive(value) {
        // Using switch fallthrough because it's simple to read and is
        // generally fast: http://jsperf.com/testing-value-is-primitive/5
        switch (typeof value) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }

        return value == null;
    }

    module.exports = isPrimitive;




/***/ }),

/***/ "./node_modules/mout/lang/kindOf.js":
/*!******************************************!*\
  !*** ./node_modules/mout/lang/kindOf.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    var _rKind = /^\[object (.*)\]$/,
        _toString = Object.prototype.toString,
        UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {
        if (val === null) {
            return 'Null';
        } else if (val === UNDEF) {
            return 'Undefined';
        } else {
            return _rKind.exec( _toString.call(val) )[1];
        }
    }
    module.exports = kindOf;



/***/ }),

/***/ "./node_modules/mout/object.js":
/*!*************************************!*\
  !*** ./node_modules/mout/object.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'bindAll' : __webpack_require__(/*! ./object/bindAll */ "./node_modules/mout/object/bindAll.js"),
    'contains' : __webpack_require__(/*! ./object/contains */ "./node_modules/mout/object/contains.js"),
    'deepFillIn' : __webpack_require__(/*! ./object/deepFillIn */ "./node_modules/mout/object/deepFillIn.js"),
    'deepMatches' : __webpack_require__(/*! ./object/deepMatches */ "./node_modules/mout/object/deepMatches.js"),
    'deepMixIn' : __webpack_require__(/*! ./object/deepMixIn */ "./node_modules/mout/object/deepMixIn.js"),
    'equals' : __webpack_require__(/*! ./object/equals */ "./node_modules/mout/object/equals.js"),
    'every' : __webpack_require__(/*! ./object/every */ "./node_modules/mout/object/every.js"),
    'fillIn' : __webpack_require__(/*! ./object/fillIn */ "./node_modules/mout/object/fillIn.js"),
    'filter' : __webpack_require__(/*! ./object/filter */ "./node_modules/mout/object/filter.js"),
    'find' : __webpack_require__(/*! ./object/find */ "./node_modules/mout/object/find.js"),
    'flatten' : __webpack_require__(/*! ./object/flatten */ "./node_modules/mout/object/flatten.js"),
    'forIn' : __webpack_require__(/*! ./object/forIn */ "./node_modules/mout/object/forIn.js"),
    'forOwn' : __webpack_require__(/*! ./object/forOwn */ "./node_modules/mout/object/forOwn.js"),
    'functions' : __webpack_require__(/*! ./object/functions */ "./node_modules/mout/object/functions.js"),
    'get' : __webpack_require__(/*! ./object/get */ "./node_modules/mout/object/get.js"),
    'has' : __webpack_require__(/*! ./object/has */ "./node_modules/mout/object/has.js"),
    'hasOwn' : __webpack_require__(/*! ./object/hasOwn */ "./node_modules/mout/object/hasOwn.js"),
    'keys' : __webpack_require__(/*! ./object/keys */ "./node_modules/mout/object/keys.js"),
    'map' : __webpack_require__(/*! ./object/map */ "./node_modules/mout/object/map.js"),
    'matches' : __webpack_require__(/*! ./object/matches */ "./node_modules/mout/object/matches.js"),
    'max' : __webpack_require__(/*! ./object/max */ "./node_modules/mout/object/max.js"),
    'merge' : __webpack_require__(/*! ./object/merge */ "./node_modules/mout/object/merge.js"),
    'min' : __webpack_require__(/*! ./object/min */ "./node_modules/mout/object/min.js"),
    'mixIn' : __webpack_require__(/*! ./object/mixIn */ "./node_modules/mout/object/mixIn.js"),
    'namespace' : __webpack_require__(/*! ./object/namespace */ "./node_modules/mout/object/namespace.js"),
    'omit' : __webpack_require__(/*! ./object/omit */ "./node_modules/mout/object/omit.js"),
    'pick' : __webpack_require__(/*! ./object/pick */ "./node_modules/mout/object/pick.js"),
    'pluck' : __webpack_require__(/*! ./object/pluck */ "./node_modules/mout/object/pluck.js"),
    'reduce' : __webpack_require__(/*! ./object/reduce */ "./node_modules/mout/object/reduce.js"),
    'reject' : __webpack_require__(/*! ./object/reject */ "./node_modules/mout/object/reject.js"),
    'result' : __webpack_require__(/*! ./object/result */ "./node_modules/mout/object/result.js"),
    'set' : __webpack_require__(/*! ./object/set */ "./node_modules/mout/object/set.js"),
    'size' : __webpack_require__(/*! ./object/size */ "./node_modules/mout/object/size.js"),
    'some' : __webpack_require__(/*! ./object/some */ "./node_modules/mout/object/some.js"),
    'unset' : __webpack_require__(/*! ./object/unset */ "./node_modules/mout/object/unset.js"),
    'values' : __webpack_require__(/*! ./object/values */ "./node_modules/mout/object/values.js")
};




/***/ }),

/***/ "./node_modules/mout/object/bindAll.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/object/bindAll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var functions = __webpack_require__(/*! ./functions */ "./node_modules/mout/object/functions.js");
var bind = __webpack_require__(/*! ../function/bind */ "./node_modules/mout/function/bind.js");
var forEach = __webpack_require__(/*! ../array/forEach */ "./node_modules/mout/array/forEach.js");
var slice = __webpack_require__(/*! ../array/slice */ "./node_modules/mout/array/slice.js");

    /**
     * Binds methods of the object to be run in it's own context.
     */
    function bindAll(obj, rest_methodNames){
        var keys = arguments.length > 1?
                    slice(arguments, 1) : functions(obj);
        forEach(keys, function(key){
            obj[key] = bind(obj[key], obj);
        });
    }

    module.exports = bindAll;




/***/ }),

/***/ "./node_modules/mout/object/contains.js":
/*!**********************************************!*\
  !*** ./node_modules/mout/object/contains.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__(/*! ./some */ "./node_modules/mout/object/some.js");

    /**
     * Check if object contains value
     */
    function contains(obj, needle) {
        return some(obj, function(val) {
            return (val === needle);
        });
    }
    module.exports = contains;




/***/ }),

/***/ "./node_modules/mout/object/deepFillIn.js":
/*!************************************************!*\
  !*** ./node_modules/mout/object/deepFillIn.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ "./node_modules/mout/lang/isPlainObject.js");

    /**
     * Deeply copy missing properties in the target from the defaults.
     */
    function deepFillIn(target, defaults){
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n) {
            obj = arguments[i];
            if (obj) {
                // jshint loopfunc: true
                forOwn(obj, function(newValue, key) {
                    var curValue = target[key];
                    if (curValue == null) {
                        target[key] = newValue;
                    } else if (isPlainObject(curValue) &&
                               isPlainObject(newValue)) {
                        deepFillIn(curValue, newValue);
                    }
                });
            }
        }

        return target;
    }

    module.exports = deepFillIn;




/***/ }),

/***/ "./node_modules/mout/object/deepMatches.js":
/*!*************************************************!*\
  !*** ./node_modules/mout/object/deepMatches.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var isArray = __webpack_require__(/*! ../lang/isArray */ "./node_modules/mout/lang/isArray.js");

    function containsMatch(array, pattern) {
        var i = -1, length = array.length;
        while (++i < length) {
            if (deepMatches(array[i], pattern)) {
                return true;
            }
        }

        return false;
    }

    function matchArray(target, pattern) {
        var i = -1, patternLength = pattern.length;
        while (++i < patternLength) {
            if (!containsMatch(target, pattern[i])) {
                return false;
            }
        }

        return true;
    }

    function matchObject(target, pattern) {
        var result = true;
        forOwn(pattern, function(val, key) {
            if (!deepMatches(target[key], val)) {
                // Return false to break out of forOwn early
                return (result = false);
            }
        });

        return result;
    }

    /**
     * Recursively check if the objects match.
     */
    function deepMatches(target, pattern){
        if (target && typeof target === 'object') {
            if (isArray(target) && isArray(pattern)) {
                return matchArray(target, pattern);
            } else {
                return matchObject(target, pattern);
            }
        } else {
            return target === pattern;
        }
    }

    module.exports = deepMatches;




/***/ }),

/***/ "./node_modules/mout/object/deepMixIn.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/object/deepMixIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ "./node_modules/mout/lang/isPlainObject.js");

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    module.exports = deepMixIn;




/***/ }),

/***/ "./node_modules/mout/object/equals.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/equals.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/mout/object/hasOwn.js");
var every = __webpack_require__(/*! ./every */ "./node_modules/mout/object/every.js");
var isObject = __webpack_require__(/*! ../lang/isObject */ "./node_modules/mout/lang/isObject.js");
var is = __webpack_require__(/*! ../lang/is */ "./node_modules/mout/lang/is.js");

    // Makes a function to compare the object values from the specified compare
    // operation callback.
    function makeCompare(callback) {
        return function(value, key) {
            return hasOwn(this, key) && callback(value, this[key]);
        };
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Checks if two objects have the same keys and values.
     */
    function equals(a, b, callback) {
        callback = callback || is;

        if (!isObject(a) || !isObject(b)) {
            return callback(a, b);
        }

        return (every(a, makeCompare(callback), b) &&
                every(b, checkProperties, a));
    }

    module.exports = equals;



/***/ }),

/***/ "./node_modules/mout/object/every.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/every.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = true;
        forOwn(obj, function(val, key) {
            // we consider any falsy values as "false" on purpose so shorthand
            // syntax can be used to check property existence
            if (!callback(val, key, obj)) {
                result = false;
                return false; // break
            }
        });
        return result;
    }

    module.exports = every;




/***/ }),

/***/ "./node_modules/mout/object/fillIn.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/fillIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__(/*! ../array/forEach */ "./node_modules/mout/array/forEach.js");
var slice = __webpack_require__(/*! ../array/slice */ "./node_modules/mout/array/slice.js");
var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");

    /**
     * Copy missing properties in the obj from the defaults.
     */
    function fillIn(obj, var_defaults){
        forEach(slice(arguments, 1), function(base){
            forOwn(base, function(val, key){
                if (obj[key] == null) {
                    obj[key] = val;
                }
            });
        });
        return obj;
    }

    module.exports = fillIn;




/***/ }),

/***/ "./node_modules/mout/object/filter.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Creates a new object with all the properties where the callback returns
     * true.
     */
    function filterValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                output[key] = value;
            }
        });

        return output;
    }
    module.exports = filterValues;



/***/ }),

/***/ "./node_modules/mout/object/find.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/find.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__(/*! ./some */ "./node_modules/mout/object/some.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result;
        some(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                result = value;
                return true; //break
            }
        });
        return result;
    }

    module.exports = find;




/***/ }),

/***/ "./node_modules/mout/object/flatten.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/object/flatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ "./node_modules/mout/lang/isPlainObject.js");

    /*
     * Helper function to flatten to a destination object.
     * Used to remove the need to create intermediate objects while flattening.
     */
    function flattenTo(obj, result, prefix, level) {
        forOwn(obj, function (value, key) {
            var nestedPrefix = prefix ? prefix + '.' + key : key;

            if (level !== 0 && isPlainObject(value)) {
                flattenTo(value, result, nestedPrefix, level - 1);
            } else {
                result[nestedPrefix] = value;
            }
        });

        return result;
    }

    /**
     * Recursively flattens an object.
     * A new object containing all the elements is returned.
     * If level is specified, it will only flatten up to that level.
     */
    function flatten(obj, level) {
        if (obj == null) {
            return {};
        }

        level = level == null ? -1 : level;
        return flattenTo(obj, {}, '', level);
    }

    module.exports = flatten;




/***/ }),

/***/ "./node_modules/mout/object/forIn.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/forIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/mout/object/hasOwn.js");

    var _hasDontEnumBug,
        _dontEnums;

    function checkDontEnum(){
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forIn(obj, fn, thisObj){
        var key, i = 0;
        // no need to check if argument is a real object that way we can use
        // it for arrays, functions, date, etc.

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (key in obj) {
            if (exec(fn, obj, key, thisObj) === false) {
                break;
            }
        }


        if (_hasDontEnumBug) {
            var ctor = obj.constructor,
                isProto = !!ctor && obj === ctor.prototype;

            while (key = _dontEnums[i++]) {
                // For constructor, if it is a prototype object the constructor
                // is always non-enumerable unless defined otherwise (and
                // enumerated above).  For non-prototype objects, it will have
                // to be defined on this object, since it cannot be defined on
                // any prototype objects.
                //
                // For other [[DontEnum]] properties, check if the value is
                // different than Object prototype value.
                if (
                    (key !== 'constructor' ||
                        (!isProto && hasOwn(obj, key))) &&
                    obj[key] !== Object.prototype[key]
                ) {
                    if (exec(fn, obj, key, thisObj) === false) {
                        break;
                    }
                }
            }
        }
    }

    function exec(fn, obj, key, thisObj){
        return fn.call(thisObj, obj[key], key, obj);
    }

    module.exports = forIn;




/***/ }),

/***/ "./node_modules/mout/object/forOwn.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/forOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/mout/object/hasOwn.js");
var forIn = __webpack_require__(/*! ./forIn */ "./node_modules/mout/object/forIn.js");

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forOwn(obj, fn, thisObj){
        forIn(obj, function(val, key){
            if (hasOwn(obj, key)) {
                return fn.call(thisObj, obj[key], key, obj);
            }
        });
    }

    module.exports = forOwn;




/***/ }),

/***/ "./node_modules/mout/object/functions.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/object/functions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forIn = __webpack_require__(/*! ./forIn */ "./node_modules/mout/object/forIn.js");

    /**
     * return a list of all enumerable properties that have function values
     */
    function functions(obj){
        var keys = [];
        forIn(obj, function(val, key){
            if (typeof val === 'function'){
                keys.push(key);
            }
        });
        return keys.sort();
    }

    module.exports = functions;




/***/ }),

/***/ "./node_modules/mout/object/get.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/get.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrimitive = __webpack_require__(/*! ../lang/isPrimitive */ "./node_modules/mout/lang/isPrimitive.js");

    /**
     * get "nested" object property
     */
    function get(obj, prop){
        var parts = prop.split('.'),
            last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (obj == null) return;
        }

        return obj[last];
    }

    module.exports = get;




/***/ }),

/***/ "./node_modules/mout/object/has.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/has.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var get = __webpack_require__(/*! ./get */ "./node_modules/mout/object/get.js");

    var UNDEF;

    /**
     * Check if object has nested property.
     */
    function has(obj, prop){
        return get(obj, prop) !== UNDEF;
    }

    module.exports = has;





/***/ }),

/***/ "./node_modules/mout/object/hasOwn.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/hasOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    /**
     * Safer Object.hasOwnProperty
     */
     function hasOwn(obj, prop){
         return Object.prototype.hasOwnProperty.call(obj, prop);
     }

     module.exports = hasOwn;




/***/ }),

/***/ "./node_modules/mout/object/keys.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/keys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");

    /**
     * Get object keys
     */
     var keys = Object.keys || function (obj) {
            var keys = [];
            forOwn(obj, function(val, key){
                keys.push(key);
            });
            return keys;
        };

    module.exports = keys;




/***/ }),

/***/ "./node_modules/mout/object/map.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/map.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     */
    function mapValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(val, key, obj) {
            output[key] = callback(val, key, obj);
        });

        return output;
    }
    module.exports = mapValues;



/***/ }),

/***/ "./node_modules/mout/object/matches.js":
/*!*********************************************!*\
  !*** ./node_modules/mout/object/matches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");

    /**
     * checks if a object contains all given properties/values
     */
    function matches(target, props){
        // can't use "object/every" because of circular dependency
        var result = true;
        forOwn(props, function(val, key){
            if (target[key] !== val) {
                // break loop at first difference
                return (result = false);
            }
        });
        return result;
    }

    module.exports = matches;




/***/ }),

/***/ "./node_modules/mout/object/max.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/max.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrMax = __webpack_require__(/*! ../array/max */ "./node_modules/mout/array/max.js");
var values = __webpack_require__(/*! ./values */ "./node_modules/mout/object/values.js");

    /**
     * Returns maximum value inside object.
     */
    function max(obj, compareFn) {
        return arrMax(values(obj), compareFn);
    }

    module.exports = max;



/***/ }),

/***/ "./node_modules/mout/object/merge.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/merge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/mout/object/hasOwn.js");
var deepClone = __webpack_require__(/*! ../lang/deepClone */ "./node_modules/mout/lang/deepClone.js");
var isObject = __webpack_require__(/*! ../lang/isObject */ "./node_modules/mout/lang/isObject.js");

    /**
     * Deep merge objects.
     */
    function merge() {
        var i = 1,
            key, val, obj, target;

        // make sure we don't modify source element and it's properties
        // objects are passed by reference
        target = deepClone( arguments[0] );

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) && isObject(target[key]) ){
                    // inception, deep merge objects
                    target[key] = merge(target[key], val);
                } else {
                    // make sure arrays, regexp, date, objects are cloned
                    target[key] = deepClone(val);
                }

            }
        }

        return target;
    }

    module.exports = merge;




/***/ }),

/***/ "./node_modules/mout/object/min.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrMin = __webpack_require__(/*! ../array/min */ "./node_modules/mout/array/min.js");
var values = __webpack_require__(/*! ./values */ "./node_modules/mout/object/values.js");

    /**
     * Returns minimum value inside object.
     */
    function min(obj, iterator) {
        return arrMin(values(obj), iterator);
    }

    module.exports = min;



/***/ }),

/***/ "./node_modules/mout/object/mixIn.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/mixIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */
    function mixIn(target, objects){
        var i = 0,
            n = arguments.length,
            obj;
        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }
        return target;
    }

    function copyProp(val, key){
        this[key] = val;
    }

    module.exports = mixIn;



/***/ }),

/***/ "./node_modules/mout/object/namespace.js":
/*!***********************************************!*\
  !*** ./node_modules/mout/object/namespace.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEach = __webpack_require__(/*! ../array/forEach */ "./node_modules/mout/array/forEach.js");

    /**
     * Create nested object if non-existent
     */
    function namespace(obj, path){
        if (!path) return obj;
        forEach(path.split('.'), function(key){
            if (!obj[key]) {
                obj[key] = {};
            }
            obj = obj[key];
        });
        return obj;
    }

    module.exports = namespace;




/***/ }),

/***/ "./node_modules/mout/object/omit.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/omit.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/slice */ "./node_modules/mout/array/slice.js");
var contains = __webpack_require__(/*! ../array/contains */ "./node_modules/mout/array/contains.js");

    /**
     * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
     */
    function omit(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {};

        for (var property in obj) {
            if (obj.hasOwnProperty(property) && !contains(keys, property)) {
                out[property] = obj[property];
            }
        }
        return out;
    }

    module.exports = omit;




/***/ }),

/***/ "./node_modules/mout/object/pick.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/pick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/slice */ "./node_modules/mout/array/slice.js");

    /**
     * Return a copy of the object, filtered to only have values for the whitelisted keys.
     */
    function pick(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {},
            i = 0, key;
        while (key = keys[i++]) {
            out[key] = obj[key];
        }
        return out;
    }

    module.exports = pick;




/***/ }),

/***/ "./node_modules/mout/object/pluck.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/pluck.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(/*! ./map */ "./node_modules/mout/object/map.js");
var prop = __webpack_require__(/*! ../function/prop */ "./node_modules/mout/function/prop.js");

    /**
     * Extract a list of property values.
     */
    function pluck(obj, propName){
        return map(obj, prop(propName));
    }

    module.exports = pluck;




/***/ }),

/***/ "./node_modules/mout/object/reduce.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/reduce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var size = __webpack_require__(/*! ./size */ "./node_modules/mout/object/size.js");

    /**
     * Object reduce
     */
    function reduce(obj, callback, memo, thisObj) {
        var initial = arguments.length > 2;

        if (!size(obj) && !initial) {
            throw new Error('reduce of empty object with no initial value');
        }

        forOwn(obj, function(value, key, list) {
            if (!initial) {
                memo = value;
                initial = true;
            }
            else {
                memo = callback.call(thisObj, memo, value, key, list);
            }
        });

        return memo;
    }

    module.exports = reduce;




/***/ }),

/***/ "./node_modules/mout/object/reject.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/reject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ./filter */ "./node_modules/mout/object/filter.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Object reject
     */
    function reject(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        return filter(obj, function(value, index, obj) {
            return !callback(value, index, obj);
        }, thisObj);
    }

    module.exports = reject;




/***/ }),

/***/ "./node_modules/mout/object/result.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/result.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ../lang/isFunction */ "./node_modules/mout/lang/isFunction.js");

    function result(obj, prop) {
        var property = obj[prop];

        if(property === undefined) {
            return;
        }

        return isFunction(property) ? property.call(obj) : property;
    }

    module.exports = result;



/***/ }),

/***/ "./node_modules/mout/object/set.js":
/*!*****************************************!*\
  !*** ./node_modules/mout/object/set.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var namespace = __webpack_require__(/*! ./namespace */ "./node_modules/mout/object/namespace.js");

    /**
     * set "nested" object property
     */
    function set(obj, prop, val){
        var parts = (/^(.+)\.(.+)$/).exec(prop);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[prop] = val;
        }
    }

    module.exports = set;




/***/ }),

/***/ "./node_modules/mout/object/size.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/size.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");

    /**
     * Get object size
     */
    function size(obj) {
        var count = 0;
        forOwn(obj, function(){
            count++;
        });
        return count;
    }

    module.exports = size;




/***/ }),

/***/ "./node_modules/mout/object/some.js":
/*!******************************************!*\
  !*** ./node_modules/mout/object/some.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "./node_modules/mout/function/makeIterator_.js");

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = false;
        forOwn(obj, function(val, key) {
            if (callback(val, key, obj)) {
                result = true;
                return false; // break
            }
        });
        return result;
    }

    module.exports = some;




/***/ }),

/***/ "./node_modules/mout/object/unset.js":
/*!*******************************************!*\
  !*** ./node_modules/mout/object/unset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./has */ "./node_modules/mout/object/has.js");

    /**
     * Unset object property.
     */
    function unset(obj, prop){
        if (has(obj, prop)) {
            var parts = prop.split('.'),
                last = parts.pop();
            while (prop = parts.shift()) {
                obj = obj[prop];
            }
            return (delete obj[last]);

        } else {
            // if property doesn't exist treat as deleted
            return true;
        }
    }

    module.exports = unset;




/***/ }),

/***/ "./node_modules/mout/object/values.js":
/*!********************************************!*\
  !*** ./node_modules/mout/object/values.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "./node_modules/mout/object/forOwn.js");

    /**
     * Get object values
     */
    function values(obj) {
        var vals = [];
        forOwn(obj, function(val, key){
            vals.push(val);
        });
        return vals;
    }

    module.exports = values;




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _langmap = __webpack_require__(/*! langmap */ "./node_modules/langmap/language-mapping-list.js");

var _langmap2 = _interopRequireDefault(_langmap);

var _iso31661Alpha = __webpack_require__(/*! iso-3166-1-alpha-2 */ "./node_modules/iso-3166-1-alpha-2/index.js");

var _iso31661Alpha2 = _interopRequireDefault(_iso31661Alpha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allLocales = [];
for (var code in _langmap2.default) {
    if (!_langmap2.default.hasOwnProperty(code)) continue;

    if (code.includes('-')) {
        var item = {
            locale: {
                iso_639: code.split('-')[0],
                iso_639_with_country: code,
                native_name: _langmap2.default[code].nativeName,
                english_name: _langmap2.default[code].englishName
            },
            country: {
                iso_3166_1_alpha_2: code.split('-')[1],
                english_name: _iso31661Alpha2.default.getCountry(code.split('-')[1])
            }
        };

        if (!item.country.english_name) continue;

        allLocales.push(item);
    }
}

var LocalesList = function () {
    function LocalesList() {
        (0, _classCallCheck3.default)(this, LocalesList);
    }

    (0, _createClass3.default)(LocalesList, null, [{
        key: 'getAll',
        value: function getAll() {
            return allLocales;
        }
    }]);
    return LocalesList;
}();

exports.default = LocalesList;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map