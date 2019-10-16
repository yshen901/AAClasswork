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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\nfunction Asteroid(options) {\n  this.COLOR = \"black\";\n  this.RADIUS = 10; \n  let super_options = {\n    pos: options.pos, \n    vel: Util.randomVec(Math.random() * 10), \n    radius: this.RADIUS, \n    color: this.COLOR, \n    game: options.game\n  };\n  // call's arguments doesn't have to be array or element, it just pointer, \n  //        eg: pointer to hash arg, or any other data type\n  MovingObject.call(this, super_options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  } else if (otherObject instanceof Asteroid){\n    this.game.remove(otherObject);\n    this.game.remove(this);    \n  }\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Bullet(options) {\n  this.COLOR = \"blue\";\n  this.RADIUS = 3;\n  let super_options = {\n    pos: options.pos,\n    vel: options.vel,\n    radius: this.RADIUS,\n    color: this.COLOR,\n    game: options.game\n  };\n  // call's arguments doesn't have to be array or element, it just pointer, \n  //        eg: pointer to hash arg, or any other data type\n  MovingObject.call(this, super_options);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.collideWith = function(otherObject) {\n  //Q: Why must we add a Bullet case to avoid Bullet-Bullet collision cases?\n  //   Without this case, we get the error: \n  //     Uncaught TypeError: Right-hand side of 'instanceof' is not callable\n  if (otherObject instanceof Bullet){\n    console.log(\"hit a bullet\");\n  } else if (otherObject instanceof Asteroid) {\n    this.game.remove(otherObject);\n    console.log(\"hit an asteroid\");\n  } else {\n    console.log(\"hit a ship\");\n  }\n};\n\nBullet.prototype.isWrappable = function () { return false; };\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game(canvas) {\n  this.ctx = canvas.getContext(\"2d\");\n  this.DIM_X = canvas.width;\n  this.DIM_Y = canvas.height;\n  this.NUM_ASTEROIDS = 10;\n\n  this.asteroids = [];\n  this.addAsteroids();\n\n  this.ship = new Ship({pos: this.randomPosition(), game: this });\n  this.bullets = [];\n\n  let that = this;\n  this.img = new Image();\n  this.img.onload = function () {\n    that.ctx.drawImage(that.img, 0, 0, 600, 900);\n  };\n  this.img.src = \"../assets/Youngjun_Na.jpg\";\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++){\n    let pos = this.randomPosition();\n    let options = {pos: pos, game: this};\n    this.asteroids.push(new Asteroid(options));\n  }\n};\n\nGame.prototype.addBullet = function(bullet) {\n  this.bullets.push(bullet);\n};\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship]).concat(this.bullets);\n};\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];\n};\n\nGame.prototype.drawBackground = function() {\n  this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.ctx.fillStyle = \"skyblue\";\n  this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n  \n  for(let i = 0; i < 6; i++)\n    for(let j = 0; j < 6; j++)\n      this.ctx.drawImage(this.img, i*100, j*150, 100, 150);\n  this.ctx.drawImage(this.img, 100, 150, 400, 600);\n};\n\nGame.prototype.draw = function() {   \n  this.drawBackground();\n  let objects = this.allObjects();\n  for (let i = 0; i < objects.length; i++)\n    objects[i].draw(this.ctx);\n};\n\nGame.prototype.step = function() {\n  this.checkCollisions();\n  this.moveObjects();\n};\n\nGame.prototype.moveObjects = function() {\n  let objects = this.allObjects();\n  for (let i = 0; i < objects.length; i++)\n    objects[i].move();\n};\n\nGame.prototype.checkCollisions = function() {\n  let objects = this.allObjects();\n  for (let i = 0; i < objects.length; i++)\n    for (let j = i + 1; j < objects.length; j++)\n      if (objects[i].isCollidedWith(objects[j]))\n        objects[i].collideWith(objects[j]);\n};\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] > 640) pos[0] %= 640;\n  if (pos[1] > 640) pos[1] %= 640;\n\n  if (pos[0] < 0) pos[0] += 640;\n  if (pos[1] < 0) pos[1] += 640;\n};\n\nGame.prototype.remove = function (asteroid) {\n  let newArr = [];\n  for (let i = 0; i < this.asteroids.length; i++)\n    if (this.asteroids[i] != asteroid) \n      newArr.push(this.asteroids[i]);\n  this.asteroids = newArr;\n};\n\nGame.prototype.isOutOfBounds = function(pos) {\n  return (pos[0] > 640) || (pos[1] > 640) || (pos[0] < 0) || (pos[1] < 0);\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView() {\n  this.canvas = document.getElementById(\"game-canvas\");\n  this.ctx = this.canvas.getContext(\"2d\");\n  this.game = new Game(this.canvas);\n}\n\nGameView.prototype.start = function () {\n  let that = this;\n  setInterval( function () { that.game.draw(); that.game.step(); }, 10);\n  this.bindKeyHandlers();\n};\n\n\n//Steal the keymaster.js from the github, add a script tag to \n//index.html above main.js, then use key(...) to bind keys!\nGameView.prototype.bindKeyHandlers = function() {\n  let that = this;\n  key('a', function () { that.game.ship.power([-1, 0]); console.log(\"A\");});\n  key('d', function () { that.game.ship.power([1, 0]); });\n  key('w', function () { that.game.ship.power([0, -1]); console.log(\"W\");});\n  key('s', function () { that.game.ship.power([0, 1]); });\n  key('b', function () { that.game.ship.vel = [0, 0]; });\n  key('t', function () { that.game.ship.relocate(); });\n  key('k', function () { that.game.ship.fireBullet(); });\n\n};\n\nmodule.exports = GameView;\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\n// window.MovingObject = MovingObject;\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  console.log('DOM fully loaded and parsed');\n  const gameView = new GameView();\n  gameView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* this is ES6 syntax\nimport xxx from \"...\" //for importing other files\n\nexport default class MovingObject {\n   // constructor (options){ } \n} \n*/\n\nfunction MovingObject(options) {\n  this.pos = options.pos; //[] also works\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];  \n  if (this.game.isOutOfBounds(this.pos)){\n    if (this.isWrappable()) return this.game.wrap(this.pos);\n    this.game.remove(this);\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  pos1 = otherObject.pos;\n  pos2 = this.pos;\n  dist = Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));\n  \n  // console.log(`dist=${dist}`);\n  // console.log(`radius=${otherObject.radius + this.radius}`);\n  if (dist > otherObject.radius + this.radius) return false;\n  return true; //this.collideWith(otherObject);\n};\n\nMovingObject.prototype.collideWith = function(otherObject) { };\nMovingObject.prototype.isWrappable = function() { return true; };\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nlet Ship = function(options) {\n  this.COLOR = \"red\";\n  this.RADIUS = 15;\n  let super_options = {\n    pos: options.pos,\n    vel: [0, 0],\n    radius: this.RADIUS,\n    color: this.COLOR,\n    game: options.game\n  };\n  // call's arguments doesn't have to be array or element, it just pointer, \n  //        eg: pointer to hash arg, or any other data type\n  MovingObject.call(this, super_options);\n};\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  //must use [...arr] here otherwise the bullet's pos/vec array will be the same\n  //    array as the ship's pos/vec array\n  const bullet = new Bullet({pos: [...this.pos], vel: [...this.vel], game: this.game});\n  this.game.addBullet(bullet);\n};\n\nmodule.exports = Ship;\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n// ES6 Syntax\nconst Util = {\n  inherits: function inherits(childClass, parentClass) {\n    //...\n  }\n};\n*/\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    let Surrogate = function () { }; //constructor\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });