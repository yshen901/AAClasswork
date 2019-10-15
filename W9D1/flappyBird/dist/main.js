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

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\nconst CONSTANTS = {\n  GRAVITY: 3,\n  FLAP_SPEED: -8,\n  TERMINAL_VEL: 12,\n  BIRD_WIDTH: 40,\n  BIRD_HEIGHT: 30\n};\n\nclass Bird {\n  constructor(dimensions){\n    this.dimensions = dimensions;\n    this.velocity = 0;\n    this.x = this.dimensions.width/3; //use .width instead of [width]??\n    this.y = this.dimensions.height/2;\n  }\n\n  drawBird(ctx) {\n    ctx.fillStyle = 'yellow';\n    ctx.fillRect(this.x-20,this.y-15,CONSTANTS.BIRD_WIDTH,CONSTANTS.BIRD_HEIGHT);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawBird(ctx);\n  }\n\n  move() {\n    // this.y += 0.0001*this.velocity;\n    this.velocity += this.y; \n    this.y += CONSTANTS.GRAVITY;\n  }\n\n  flap() {\n    console.log(\"Flapping\");\n    this.y += -50;\n    this.velocity = CONSTANTS.FLAP_SPEED;\n  }\n\n  getBounds() {\n    return [[this.x-20,this.y-15],[this.x+20,this.y+15]];\n  }\n\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n// const Level = require('./level.js'); can't mix require and export\n\n\n// import Pipe from './pipe';\n\nclass FlappyBird {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n    // setInterval(this.animate(), 1000);\n    this.score = 0;\n    // var element = document.getElementById('testing');\n    window.addEventListener('mousedown', this.click.bind(this));\n  }\n\n  animate () {\n    if (this.level.collidesWith(this.bird.getBounds())) {\n      this.running = false;\n      console.log(\"collision\");\n      this.restart();\n    }\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n    this.increaseScore();\n    if (this.running) { //don't use while, as rAF calls it recursively\n      //make sure to bind otherwise \"this\" in the called animate will be window\n      requestAnimationFrame(this.animate.bind(this)); \n    }\n  }\n\n  increaseScore() {\n    if (this.bird.x === this.level.pipes[0].x) {\n      this.score += 1;\n      console.log(this.score);\n    }\n  }\n\n  restart () {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n  \n  click() {\n    if (this.running) {\n      this.bird.flap();\n    } else {\n      this.play();\n    }\n    \n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n// game.restart();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ \"./src/pipe.js\");\n\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [new _pipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dimensions, 500), new _pipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dimensions,800), \n      new _pipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dimensions,1100)];\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n\n  drawPipes(ctx){\n    for (let i = 0; i < this.pipes.length; i++){\n      ctx.fillStyle = \"green\";\n      ctx.fillRect(this.pipes[i].x, 0, 100, this.pipes[i].top);\n      ctx.fillRect(this.pipes[i].x, this.pipes[i].bottomY, 100, this.pipes[i].bottom);\n    }\n  }\n\n  movePipes() {\n    for (let i = 0; i < this.pipes.length; i++) {\n      this.pipes[i].move();\n    }\n  }\n\n  destroyPipe(){\n    if (this.pipes[0].x < -100) {\n      this.pipes.shift();\n      let new_x = this.pipes[this.pipes.length-1].x + 300\n      this.pipes.push(new _pipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions,new_x));\n    }\n  }\n\n// bounds = [[this.x-20,this.y-15],[this.x+20,this.y+15]];\n  collidesWith(bounds) {\n    let pipe = null;\n    for (let i = 0; i < this.pipes.length; i++) {\n      pipe = this.pipes[i];\n      \n      if (bounds[0][0] > pipe.x + 100 || bounds[1][0] < pipe.x) {\n        return false;\n      }\n      if (bounds[0][1] > pipe.top && bounds[1][1] < pipe.bottomY) {\n        return false;\n      }\n      return true;\n    }\n  }\n\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.movePipes();\n    this.destroyPipe();\n    this.drawPipes(ctx);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/pipe.js":
/*!*********************!*\
  !*** ./src/pipe.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pipe; });\nclass Pipe {\n  constructor(dimensions, initialX) {\n    this.x = initialX;\n    this.top = 100 + Math.random() * 300;\n    this.bottomY = this.top + 150;\n    this.bottom = dimensions.height - this.bottomY;\n  }\n\n  move() {\n    this.x -= 5;\n  }\n}\n\n//# sourceURL=webpack:///./src/pipe.js?");

/***/ })

/******/ });