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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock { //import this in the index.jss\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.clockElement = document.getElementById(\"clock\");\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, this.clockElement);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\nconst clockElement = document.getElementById(\"clock\");\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropDown\", function() { return dropDown; });\nconst dropDown = {\n\n  dogs : {\n    \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n    \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n    \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n    \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n    \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n    \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n    \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n  },\n\n  dogLinkCreator : function(dogs) {\n    const liTags = [];\n    let aTag, liTag;\n    // for (let i = 0; i < dogs.length; i++) {\n    //   let aTag = document.createElement(\"a\");\n    //   aTag.innerHTML = Object.keys(dogs)[i];\n    // }\n    // debugger;\n    for (let name in dogs) {\n      aTag = document.createElement(\"a\");\n      aTag.innerHTML = name;\n      aTag.href = dogs[name];\n\n      liTag = document.createElement(\"li\");\n      // liTag.className = \"dog-link\";\n      liTag.appendChild(aTag);\n\n      liTags.push(liTag);\n    }\n\n    return liTags;\n  },\n\n  attachDogLinks : function(dogs) {\n    const dogLinks = dropDown.dogLinkCreator(dropDown.dogs);\n    let ulTag = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n    for (let i = 0; i < dogLinks.length; i++)\n      ulTag.appendChild(dogLinks[i]);\n  },\n\n  handleEnter : function(e) {\n    let ulTag = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n    let liTags = ulTag.children;\n\n    for (let i = 0; i < liTags.length; i++)\n      liTags[i].className = \"dog-link\";\n\n    let hTag = document.getElementsByTagName(\"h3\")[0];\n    hTag.className = \"show\";\n  },\n\n  handleLeave : function(e) {\n    let ulTag = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n    let liTags = ulTag.children;\n\n    for (let i = 0; i < liTags.length; i++)\n      liTags[i].className = \"\";\n\n    let hTag = document.getElementsByTagName(\"h3\")[0];\n    hTag.className = \"\";\n  }\n  \n};\n\ndropDown.attachDogLinks(dropDown.dogs);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n\n //must do this to import a js source file into html\n\n\n\n// must have curlies if you don't use export default and want to write code in index.js\n// dropDown.attachDogLinks(dropDown.dogs);\n\nlet navTag = document.getElementsByClassName(\"drop-down-dog-nav\")[0];\nnavTag.addEventListener(\"mouseenter\", _drop_down__WEBPACK_IMPORTED_MODULE_2__[\"dropDown\"].handleEnter);\nnavTag.addEventListener(\"mouseleave\", _drop_down__WEBPACK_IMPORTED_MODULE_2__[\"dropDown\"].handleLeave);\n\n// let list = document.getElementsByClassName(\"todos\")[0];\n// list.addEventListener(\"click\", todoList.handleCheckboxClick);\n\nlet addTodoButton = document.getElementsByClassName(\"add-todo-form\")[0];\naddTodoButton.addEventListener(\"click\", _todo_list__WEBPACK_IMPORTED_MODULE_3__[\"todoList\"].handleAddTodo);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\nconst todoList = {\n  handleAddTodo: (e) => {\n    e.preventDefault();\n    let list = document.getElementsByClassName(\"todos\")[0];\n    let input = document.getElementsByName(\"add-todo\")[0];\n    if (e.target.type === \"submit\") {\n      let newTodo = document.createElement(\"li\");\n      newTodo.textContent = input.value;\n      \n      list.appendChild(newTodo);\n      input.value = \"\";\n    }\n  },\n\n\n};\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let tag = document.createElement(\"p\"); //makes an empty element\n  let content = document.createTextNode(string); //makes the text to put in element\n  tag.appendChild(content); //add the text to the elements\n\n  /* Using for loop and removeChild()\n  let children = Array.from(htmlElement.children);\n  if (children.length > 0) {\n    for (let i = 0; i < children.length; i++) \n      htmlElement.removeChild(children[i]);\n  }\n  */\n\n  //using firstChild\n  while (htmlElement.firstChild) \n    htmlElement.removeChild(htmlElement.firstChild);\n\n  htmlElement.appendChild(tag);\n};\n\n// htmlGenerator('Party Time.', partyHeader);\n// htmlGenerator(\"Let's do this.\", partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });