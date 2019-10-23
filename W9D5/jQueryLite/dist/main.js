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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(htmlElements) {\n    this.htmlElements = htmlElements;\n  }\n\n  on(event, cb) {\n    this.htmlElements.forEach( el => {\n      el.addEventListener(event, cb);\n    })\n  }\n\n  // to test out off event listener, the cb has to be the same object.\n  off(event, cb) {\n    this.htmlElements.forEach(el => {\n      el.removeEventListener(event, cb);\n    })\n  }\n\n  html(str) {\n    if (str === undefined) {\n      return this.htmlElements[0].innerHTML;  \n    } else {\n      this.htmlElements.forEach( (el) => {\n        el.innerHTML = str;\n      });\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(el) {\n    if (el instanceof HTMLElement) {\n      this.htmlElements.forEach( (node) => {\n        node.innerHTML += el.outerHTML;\n      });\n    } else if (typeof el === \"string\") {\n      this.htmlElements.forEach( (node) => {\n        node.innerHTML += el;\n      });\n    } else {\n      let combinedNodes = \"\";\n      el.htmlElements.forEach( (node) => {\n        combinedNodes += node.outerHTML;\n      });\n\n      this.htmlElements.forEach( (node) => {\n        node.innerHTML += combinedNodes;\n      });\n    }\n  }\n\n  children() {\n    let childs = [];\n    this.htmlElements.forEach((node) => {\n      childs = childs.concat(Array.from(node.children));\n    });\n    return new DOMNodeCollection(childs);\n  }\n\n  parent() {\n    let parents = [];\n    this.htmlElements.forEach((node) => {\n      if (!parents.includes(node)) {\n        parents.push(node.parentElement);\n      }\n    });\n    return new DOMNodeCollection(parents);\n  }\n\n  find(selector) {\n    let found = [];\n\n    function innerFind(collection) {\n      if (collection.htmlElements.length === 0) return; \n\n      collection.htmlElements.forEach( (el) => {        \n        if (el.tagName === selector.toUpperCase() || \n           (el.className === selector.slice(1)) ||\n          (el.id === selector.slice(1))) {\n          found.push(el);\n        }\n        return innerFind(collection.children());\n      }); \n    }\n\n    innerFind(this);\n    return new DOMNodeCollection(found);\n  }\n\n  remove() {\n    function removeChildren(collection) {\n      if (collection.htmlElements.length === 0) return;\n\n      collection.htmlElements.forEach( el => {\n        removeChildren(collection.children());\n        el.parentNode.removeChild(el);\n      });\n    }\n\n    removeChildren(this);\n    return \"remove success\";\n  }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodesCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\nconst funcs = [];\nlet readyState = false;\n\nwindow.$l = (selector) => { // will return DOMNodeCollection in all cases\n  if (typeof selector === \"string\") {    \n    const nodes = document.querySelectorAll(selector);\n    return new DomNodesCollection(Array.from(nodes));    \n  } else if (selector instanceof HTMLElement) { //if selector is a single HTML object\n    return new DomNodesCollection([selector]);\n  } else if (selector instanceof Function) {\n      funcs.push(selector);\n      readyState = true;\n  }\n\n  // function extend(combined,...other) {\n  //   for(let i = 1; i<other.length; i++) {\n  //     let keys = Object.keys(other[i]);\n  //     for(let j = 0; j<keys.length; j++){\n  //       combined[key[j]] = other[i][j]; \n  //     }\n  //   }\n  //   return combined;\n  // }\n\n};\n\nwindow.$l.extend = function (combined,...other) {\n  for (let i = 0; i < other.length; i++) {\n    let keys = Object.keys(other[i]);\n    for (let j = 0; j < keys.length; j++) {\n      combined[keys[j]] = other[i][keys[j]];\n    }\n  }\n  return combined;\n}\n\nwindow.$l.ajax = function(options) {\n  const defaultOptions = {\n    success: function() {}, \n    error: function() {}, \n    url: \"data:image/png;base64,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\", \n    method: \"GET\", \n    data: {}, \n    contentType: \"application/x-www-form-urlencoded; charset=UTF-8\"\n  }\n\n  const newOptions = this.extend(defaultOptions, options);\n\n  const xhr = new XMLHttpRequest();\n\n  xhr.onreadystatechange = function () {    \n    \n    if (xhr.readyState === 4) {\n      debugger\n      if (xhr.status === 200) {\n        debugger        \n        const parsed = JSON.parse(xhr.responseText);\n        const resUrl = parsed.data.image_url;\n\n        const li = window.$('li');\n        li.html(resUrl);        \n      }\n    }\n  }\n\n  xhr.open(`${newOptions.method}`, `${newOptions.url}`);\n\n  xhr.onload = function () {\n    console.log(xhr.status) // for status info\n    console.log(xhr.responseType) //the type of data that was returned\n    console.log(xhr.response) //the actual response. For JSON api calls, this will be a JSON string\n  }\n}\n\n\n\n\nfunction alertTest () {\n  console.log(\"Alert Test\");\n};\n\nwindow.$l(function () { console.log(\"tsting\") })\nwindow.$l(function () { console.log(\"tsting2\") })\nwindow.$l(alertTest);\n\nwindow.addEventListener('DOMContentLoaded', () => {  \n  console.log(\"ready dom\");\n  if (readyState === true) {\n    funcs.forEach( func => {\n      func();\n    });\n  }\n});\n\n// const $ul = $('ul');\n// $ul.on(\"click\", () => alert(\"dgjhadg\"));\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });