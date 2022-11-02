/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
 // layout factory function

var layout = function layout(c, h, n, m, f) {
  var proto = {
    type: 'layout',
    c: c,
    //container
    h: h,
    //header
    n: n,
    //navbar
    m: m,
    //main
    f: f,
    //footer
    compose: function compose() {
      return appendElements(c, h, n, m, f);
    }
  };
  return Object.assign(Object.create(proto), {
    c: c,
    h: h,
    n: n,
    m: m,
    f: f
  });
}; // Create DOM element and add it's class


function createElement(element) {
  var dome = document.createElement('div');
  dome.textContent = 'a';
  dome.classList.add(element);
  return dome;
} // Append list of elements to container


function appendElements(c) {
  var container = createElement(c);

  for (var i = 1; i < arguments.length; i++) {
    container.appendChild(createElement(arguments[i]));
  }

  return document.body.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf */ "./src/assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom Font */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 1000;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\";\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton,\ninput {\n  border: none;\n  outline: none;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: darkslategrey;\n  box-shadow: 2px 2px 2px whitesmoke;\n  transition: all 0.5s ease;\n}", "",{"version":3,"sources":["webpack://./src/_formatting.scss","webpack://./src/style.scss"],"names":[],"mappings":"AAAA,gBAAA;AACA;EACI,wBAAA;EACA,qFAAA;EACA,iBAAA;EACA,kBAAA;ACCJ;ADGA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,wBAAA;ACDJ;;ADIA;;EAEI,WAAA;EACA,YAAA;ACDJ;;ADIA;;EAEI,gBAAA;ACDJ;;ADIA;EACI,qBAAA;ACDJ;;ADIA;;EAEI,YAAA;EACA,aAAA;ACDJ;;AAZA;EACI,WAAA;EACA,YAAA;EAdI,iBANK;EAOL,+BANI;EAOJ,kCAAA;EAOJ,yBAAA;AAwBJ","sourcesContent":["/* Custom Font */\n@font-face {\n    font-family: 'Open Sans';\n    src: url('assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf'), url('assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf');\n    font-weight: 1000;\n    font-style: normal;\n}\n\n// setting basic element properties\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Open Sans';\n}\n\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n}\n\nul,\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\nbutton,\ninput {\n    border: none;\n    outline: none;\n}","@use 'formatting';\n\n// theme colors\n$lightcolor: whitesmoke;\n$darkcolor: darkslategrey;\n\n// setting theme\n@mixin theme($dark: true) {\n    @if($dark) {\n        color: $lightcolor;\n        background-color: $darkcolor;\n        box-shadow: 2px 2px 2px $lightcolor;\n    }\n    @else {\n        color: $darkcolor;\n        background-color: $lightcolor;\n        box-shadow: 2px 2px 2px $darkcolor;\n    }\n    transition: all .5s ease;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    @include theme;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf":
/*!*************************************************************************!*\
  !*** ./src/assets/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f72efa639bb45d29e62f.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


var l = (0,_layout__WEBPACK_IMPORTED_MODULE_0__["default"])("container", "header", "navbar", "menu", "footer").compose();
console.log("Hello World!");
console.log(l);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vLyBsYXlvdXQgZmFjdG9yeSBmdW5jdGlvblxubGV0IGxheW91dCA9IChjLCBoLCBuLCBtLCBmKSA9PiB7XG4gICAgY29uc3QgcHJvdG8gPSB7XG4gICAgICAgIHR5cGU6ICdsYXlvdXQnLFxuICAgICAgICBjLCAvL2NvbnRhaW5lclxuICAgICAgICBoLCAvL2hlYWRlclxuICAgICAgICBuLCAvL25hdmJhclxuICAgICAgICBtLCAvL21haW5cbiAgICAgICAgZiwgLy9mb290ZXJcbiAgICAgICAgY29tcG9zZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwZW5kRWxlbWVudHMoYywgaCwgbiwgbSwgZilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7IGMsIGgsIG4sIG0sIGYgfSApO1xufTtcblxuLy8gQ3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgaXQncyBjbGFzc1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGxldCBkb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tZS50ZXh0Q29udGVudCA9ICdhJztcbiAgICBkb21lLmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGRvbWU7XG59XG5cbi8vIEFwcGVuZCBsaXN0IG9mIGVsZW1lbnRzIHRvIGNvbnRhaW5lclxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudHMoYykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoYyk7XG4gICAgZm9yKGxldCBpID0gMTsgaTxhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dDsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL09wZW5fU2Fucy9PcGVuU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDdXN0b20gRm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggd2hpdGVzbW9rZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9fZm9ybWF0dGluZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBQTtBQUNBO0VBQ0ksd0JBQUE7RUFDQSxxRkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDREo7O0FESUE7O0VBRUksV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTs7RUFFSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QURJQTs7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQ0RKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFkSSxpQkFOSztFQU9MLCtCQU5JO0VBT0osa0NBQUE7RUFPSix5QkFBQTtBQXdCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDdXN0b20gRm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxuICAgIHNyYzogdXJsKCdhc3NldHMvT3Blbl9TYW5zL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZicpLCB1cmwoJ2Fzc2V0cy9PcGVuX1NhbnMvT3BlblNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8vIHNldHRpbmcgYmFzaWMgZWxlbWVudCBwcm9wZXJ0aWVzXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIixcIkB1c2UgJ2Zvcm1hdHRpbmcnO1xcblxcbi8vIHRoZW1lIGNvbG9yc1xcbiRsaWdodGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiRkYXJrY29sb3I6IGRhcmtzbGF0ZWdyZXk7XFxuXFxuLy8gc2V0dGluZyB0aGVtZVxcbkBtaXhpbiB0aGVtZSgkZGFyazogdHJ1ZSkge1xcbiAgICBAaWYoJGRhcmspIHtcXG4gICAgICAgIGNvbG9yOiAkbGlnaHRjb2xvcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrY29sb3I7XFxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAkbGlnaHRjb2xvcjtcXG4gICAgfVxcbiAgICBAZWxzZSB7XFxuICAgICAgICBjb2xvcjogJGRhcmtjb2xvcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGNvbG9yO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggJGRhcmtjb2xvcjtcXG4gICAgfVxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBAaW5jbHVkZSB0aGVtZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmxldCBsID0gbGF5b3V0KFwiY29udGFpbmVyXCIsIFwiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwibWVudVwiLCBcImZvb3RlclwiKS5jb21wb3NlKCk7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuY29uc29sZS5sb2cobCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwibGF5b3V0IiwiYyIsImgiLCJuIiwibSIsImYiLCJwcm90byIsInR5cGUiLCJjb21wb3NlIiwiYXBwZW5kRWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGUiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsImRvbWUiLCJkb2N1bWVudCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbmVyIiwiYXJndW1lbnRzIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwibCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9