/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/assets/js/blogLineFeed.js":
  /*!***************************************!*\
    !*** ./src/assets/js/blogLineFeed.js ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst blogLineFeed = document.getElementById('blogLineFeed');\r\n\tif(!blogLineFeed) return;\r\n\r\n\tconst newsBlogLineTab = document.getElementById('newsBlogLineTab');\r\n\tconst articlesBlogLineTab = document.getElementById('articlesBlogLineTab');\r\n\tconst reviewsBlogLineTab = document.getElementById('reviewsBlogLineTab');\r\n\tconst btnsList = [newsBlogLineTab,articlesBlogLineTab,reviewsBlogLineTab];\r\n\r\n\tconst feedsNL = blogLineFeed.querySelectorAll('.feed__list');\r\n\tconst feedsList = Array.prototype.slice.call(feedsNL);\r\n\r\n\tfunction feedsRemoveActiveClass() {\r\n\t\tfeedsList.forEach( feed => feed.classList.remove('active') )\r\n\t}\r\n\tfunction feedAddActiveClass(feed) {\r\n\t\tfeed.classList.add('active')\r\n\t}\r\n\r\n\tfunction btnsRemoveActiveClass() {\r\n\t\tbtnsList.forEach( feed => feed.classList.remove('active') )\r\n\t}\r\n\tfunction btnAddActiveClass(feed) {\r\n\t\tfeed.classList.add('active')\r\n\t}\r\n\r\n\tbtnsList.forEach((btn, index) => {\r\n\t\tbtn.addEventListener('click', function() {\r\n\t\t\tlet curFeed = feedsList[index];\r\n\t\t\tif( !curFeed.classList.contains('active') ) {\r\n\t\t\t\tbtnsRemoveActiveClass();\r\n\t\t\t\tbtnAddActiveClass(btn);\r\n\r\n\t\t\t\tfeedsRemoveActiveClass();\r\n\t\t\t\tfeedAddActiveClass(curFeed)\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/blogLineFeed.js?");
    /***/
  },

  /***/
  "./src/assets/js/cabToggler.js":
  /*!*************************************!*\
    !*** ./src/assets/js/cabToggler.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst ordersItemsNL = document.querySelectorAll('.cab-orders .cab-orders-item');\r\n\tif(!ordersItemsNL) return;\r\n\tconst ordersItemsList = Array.prototype.slice.call(ordersItemsNL);\r\n\r\n\tordersItemsList.forEach(item => {\r\n\t\titem.addEventListener('click', function() {\r\n\t\t\treturn (item.classList.contains('active')) ? item.classList.remove('active') : item.classList.add('active');\r\n\t\t})\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/cabToggler.js?");
    /***/
  },

  /***/
  "./src/assets/js/script.js":
  /*!*********************************!*\
    !*** ./src/assets/js/script.js ***!
    \*********************************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/assets/js/sliders.js\");\n/* harmony import */ var _yamap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yamap.js */ \"./src/assets/js/yamap.js\");\n/* harmony import */ var _blogLineFeed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogLineFeed.js */ \"./src/assets/js/blogLineFeed.js\");\n/* harmony import */ var _cabToggler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cabToggler.js */ \"./src/assets/js/cabToggler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tvar header = document.getElementById('header');\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tObject(_yamap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tObject(_blogLineFeed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\tObject(_cabToggler_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");
    /***/
  },

  /***/
  "./src/assets/js/sliders.js":
  /*!**********************************!*\
    !*** ./src/assets/js/sliders.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\r\n\tconst breakpointMob = window.matchMedia('(min-width:767px)')\r\n\r\n\tlet bestestSlider;\r\n\r\n\tconst enableBestestSlider = function() {\r\n\r\n\t\tbestestSlider = new Swiper('#bestestSlider', {\r\n\t\t\tpagination: {\r\n\t\t\t\tel: '#bestestSliderPagination',\r\n\t\t\t\ttype: 'bullets',\r\n\t\t\t\tclickable: false,\r\n\t\t\t},\r\n\t\t\tslidesPerView: 1,\r\n\t\t\tspaceBetween: 10,\r\n\t\t\tautoHeight: true,\r\n\r\n\t\t})\r\n\r\n\t}\r\n\r\n\tconst breakpointChecker = function() {\r\n\t\tif(breakpointMob.matches === true) {\r\n\t\t\tif(bestestSlider !== undefined) bestestSlider.destroy(true,true);\r\n\t\t\treturn;\r\n\t\t} else if (breakpointMob.matches === false) {\r\n\t\t\treturn enableBestestSlider();\r\n\t\t}\r\n\t}\r\n\tbreakpointMob.addListener(breakpointChecker);\r\n\tbreakpointChecker();\r\n\r\n\r\n\r\n\r\n\tconst reviewsSlider = new Swiper('#reviewsSlider', {\r\n\t\t\tnavigation: {\r\n\t\t\t\tnextEl: '#reviewsSliderNextBtn',\r\n\t\t\t\tprevEl: '#reviewsSliderPrevBtn',\r\n\t\t\t},\r\n\t\t\tpagination: {\r\n\t\t\t\tel: '#reviewsSliderPagination',\r\n\t\t\t\ttype: 'bullets',\r\n\t\t\t\tclickable: true,\r\n\t\t\t},\r\n\t\t\tbreakpoints: {\r\n\t\t\t\t320: {\r\n\t\t\t\t\tslidesPerView: 1,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t},\r\n\t\t\t\t768: {\r\n\t\t\t\t\tslidesPerView: 1,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t},\r\n\t\t\t\t1200: {\r\n\t\t\t\t\tslidesPerView: 2,\r\n\t\t\t\t\tspaceBetween: 30,\r\n\t\t\t\t},\r\n\t\t\t},\r\n\r\n\t\t})\r\n\r\n\r\n\r\n\r\n\tconst chanceSlider = new Swiper('#chanceSlider', {\r\n\t\t\tpagination: {\r\n\t\t\t\tel: '#chanceSliderPagination',\r\n\t\t\t\ttype: 'bullets',\r\n\t\t\t\tclickable: true,\r\n\t\t\t},\r\n\t\t\tbreakpoints: {\r\n\t\t\t\t320: {\r\n\t\t\t\t\tslidesPerView: 1,\r\n\t\t\t\t\tspaceBetween: 0,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t},\r\n\t\t\t\t768: {\r\n\t\t\t\t\tslidesPerView: 1.5,\r\n\t\t\t\t\tspaceBetween: 30,\r\n\t\t\t\t\tcenteredSlides: true,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\twidth: 768,\r\n\t\t\t\t},\r\n\t\t\t\t1200: {\r\n\t\t\t\t\tslidesPerView: 2,\r\n\t\t\t\t\tspaceBetween: 30,\r\n\t\t\t\t\tcenteredSlides: true,\r\n\t\t\t\t\tloop: true,\r\n\t\t\t\t\twidth: 1170,\r\n\t\t\t\t},\r\n\t\t\t},\r\n\r\n\t\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/sliders.js?");
    /***/
  },

  /***/
  "./src/assets/js/yamap.js":
  /*!********************************!*\
    !*** ./src/assets/js/yamap.js ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\nreturn;\r\n\t// 55.726051, 37.785126\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/yamap.js?");
    /***/
  },

  /***/
  0:
  /*!*********************************************************************************************************************************************************!*\
    !*** multi ./src/assets/js/blogLineFeed.js ./src/assets/js/cabToggler.js ./src/assets/js/script.js ./src/assets/js/sliders.js ./src/assets/js/yamap.js ***!
    \*********************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\blogLineFeed.js */\"./src/assets/js/blogLineFeed.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\cabToggler.js */\"./src/assets/js/cabToggler.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\script.js */\"./src/assets/js/script.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\sliders.js */\"./src/assets/js/sliders.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\yamap.js */\"./src/assets/js/yamap.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/blogLineFeed.js_./src/assets/js/cabToggler.js_./src/assets/js/script.js_./src/assets/js/sliders.js_./src/assets/js/yamap.js?");
    /***/
  }
  /******/

});