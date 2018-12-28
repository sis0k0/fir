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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.js */ \"./src/tree.js\");\n/* harmony import */ var _lights_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lights.js */ \"./src/lights.js\");\n/* harmony import */ var _star_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star.js */ \"./src/star.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lights.js":
/*!***********************!*\
  !*** ./src/lights.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.js */ \"./src/tree.js\");\n\n\nconst getNeedlesCount = rowsCount =>\n    new Array(rowsCount)\n        .fill(0)\n        .reduce((sum, _, n) => sum + 2*n + 1, 0);\n\nconst getRandomPosition = rows => {\n    const needlesCount = getNeedlesCount(rows);\n    return Math.floor(Math.random() * needlesCount);\n};\nconst getRandomColor = () => '#' + Math.random().toString(16).substr(-6);\nconst needles = _tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.getElementsByClassName('needle');\n\nlet blinkingBulbs = [];\nfunction blink(rows) {\n    blinkingBulbs.forEach(bulb => {\n        bulb.innerHTML = '1';\n        bulb.style.color = 'green';\n    });\n    blinkingBulbs = [];\n\n    const bulbsCount = rows * 3;\n    new Array(bulbsCount).fill().forEach(_ => {\n        const bulbIndex = getRandomPosition(rows);\n        const bulb = needles[bulbIndex];\n        if (!bulb) {\n            return;\n        }\n\n        blinkingBulbs.push(bulb);\n        bulb.innerHTML = '0';\n        bulb.style.color = getRandomColor();\n    });\n}\n\nsetInterval(() => blink(_tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rowsCount), 1000);\n\n\n//# sourceURL=webpack:///./src/lights.js?");

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.js */ \"./src/tree.js\");\n\n\nfunction getStarText(rowsCount) {\n    const blanks = Array(rowsCount * 2 + 1).join('&nbsp;');\n    const star = '<span class=\"star\">*</span>';\n\n    debugger;\n    return `${blanks}${star}<br />`;\n}\n\nconst star = getStarText(_tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rowsCount);\n_tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.innerHTML = star + _tree_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.innerHTML;\n\n\n//# sourceURL=webpack:///./src/star.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fir = {\n    rowsCount: 20,\n    container: document.getElementById('tree'),\n    draw: function() {\n        let output = '';\n\n        for (let i = 1; i < this.rowsCount; i += 1) {\n            for (let j = i; j < this.rowsCount; j += 1) {\n                output += '&nbsp;&nbsp;';\n            }\n            for (let k = 0; k <= i * 2; k += 1) {\n                output += '<span class=\"needle\">1</span>';\n            }\n            output += '<br />';\n        }\n\n        this.container.innerHTML = output;\n    }\n};\n\nfir.draw();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fir);\n\n\n//# sourceURL=webpack:///./src/tree.js?");

/***/ })

/******/ });