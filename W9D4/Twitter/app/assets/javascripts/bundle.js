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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`, //use ` for JS interpolation
      dataType: 'json' //removing this breaks it as then the respond_to won't format json
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`, //use ` for JS interpolation
      dataType: 'json'
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      method: 'GET',
      url: `/users/search`, //use ` for JS interpolation
      data: { query: queryVal }, //data contains params
      // data: { queryVal },
      dataType: 'json'
    });
  }


};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', (e) => this.handleClick(e));
  }
  
  render() {
    if(this.followState === "unfollowed") {
      this.$el.prop("disabled", false);
      this.$el.text("Follow!");
    } 
    else if (this.followState === "followed") {
      this.$el.prop("disabled", false);
      this.$el.text("Unfollow!");
    }
    else if (this.followState === "following"){
      this.$el.text("Following!");
      this.$el.prop("disabled", true);
    }
    else if (this.followState === "unfollowing") {
      this.$el.text("Unfollowing!");
      this.$el.prop("disabled", true);
    }
  }
  
  handleClick(e) {
    e.preventDefault();
    let that = this;
    if (this.followState === 'unfollowed') {
      this.followState = 'following';
      that.render();
      return APIUtil.followUser(this.userId).then(function(){
        that.followState = 'followed';
        that.render();
      });
    }
    this.followState = 'unfollowing';
    that.render();
    return APIUtil.unfollowUser(this.userId).then(function () {
      that.followState = 'unfollowed';
      that.render();
    });
  }
}

module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js");

// $() => { } or $(document).ready(function () {}); also work

$(() => {
  $('.follow-toggle').each(function(index,el) {
    new FollowToggle(el);
  });
  $('.users-search').each(function (index, el) {
    new UsersSearch(el);
  });
});
  


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name= query]');
    // this.$input = $(this.$el.children("input")); //this.$input.attr("value")
    this.$ul = $(".users");
    
    this.$el.on("keypress", e => this.handleInput(e));
  }

  handleInput(e) {
    return APIUtil.searchUsers(this.$input.val())
                  .then( users => {
                    //clear the <ul>
                    //append all results of AJAX
                    // debugger

                    // console.log(this.$input.val());
                    this.renderResults(users);
                  })
                  .fail( () => console.log("failed") );
  }

  renderResults(users) {
    this.$ul.empty();

    for(let i=0; i < users.length; i++) {
      let $li = $('<li></li>');
      let $a = $('<a></a>');
      $a.text(users[i].username);
      $a.attr('href',`/users/${users[i].id}`);
      $li.appendTo(this.$ul);
      $a.appendTo($li);
    }

  }

}



module.exports = UsersSearch;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map