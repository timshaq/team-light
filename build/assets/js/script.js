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
  "./src/assets/js/script.js":
  /*!*********************************!*\
    !*** ./src/assets/js/script.js ***!
    \*********************************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/assets/js/sliders.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tvar header = document.getElementById('header');\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");
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

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst previewSlider = new Swiper('#previewSlider', {\r\n\t\tloop: true,\r\n\t\tcenteredSlides: true,\r\n\t\tpagination: {\r\n\t\t\tel: '#previewPagination',\r\n\t\t\ttype: 'bullets',\r\n\t\t\tclickable: true,\r\n\t\t},\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#previewNextBtn',\r\n\t\t\tprevEl: '#previewPrevBtn'\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 1,\r\n\t\t\t\tspaceBetween: 0,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\tslidesPerView: 1.58,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\tslidesPerView: 1.622,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t},\r\n\r\n\t})\r\n\r\n\tconst brandsSlider = new Swiper('#brandsSlider', {\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#brandsNextBtn',\r\n\t\t\tprevEl: '#brandsPrevBtn'\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\tslidesPerView: 5,\r\n\t\t\t\tspaceBetween: 23,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\tslidesPerView: 7,\r\n\t\t\t\tspaceBetween: 20,\r\n\t\t\t},\r\n\t\t},\r\n\r\n\t})\r\n\r\n\tconst shopLineSlider = new Swiper('#shopLineSlider', {\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#shopLineNextBtn',\r\n\t\t\tprevEl: '#shopLinePrevBtn'\r\n\t\t},\r\n\t\tbreakpoints: {\r\n\t\t\t320: {\r\n\t\t\t\tslidesPerView: 2,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t},\r\n\t\t\t768: {\r\n\t\t\t\tslidesPerView: 3,\r\n\t\t\t\tspaceBetween: 30,\r\n\t\t\t},\r\n\t\t\t1200: {\r\n\t\t\t\tslidesPerView: 5,\r\n\t\t\t\tspaceBetween: 80,\r\n\t\t\t},\r\n\t\t},\r\n\r\n\t})\r\n\r\n\tconst asideFashionIdeasSlider = new Swiper('#fashionIdeasSlider', {\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 0,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '#fashionIdeasNextBtn',\r\n\t\t\tprevEl: '#fashionIdeasPrevBtn'\r\n\t\t},\r\n\t\t// breakpoints: {\r\n\t\t// \t320: {\r\n\t\t// \t\tslidesPerView: 2,\r\n\t\t// \t\tspaceBetween: 10,\r\n\t\t// \t},\r\n\t\t// \t768: {\r\n\t\t// \t\tslidesPerView: 5,\r\n\t\t// \t\tspaceBetween: 23,\r\n\t\t// \t},\r\n\t\t// \t1200: {\r\n\t\t// \t\tslidesPerView: 7,\r\n\t\t// \t\tspaceBetween: 20,\r\n\t\t// \t},\r\n\t\t// },\r\n\r\n\t})\r\n\r\n\tconst serviceAboutGalleriesNl = document.querySelectorAll('.service-about__gallery .swiper-container')\r\n\tconst serviceAboutGalleriesEl = Array.prototype.slice.call(serviceAboutGalleriesNl);\r\n\t\t\r\n\tconst serviceAboutGallery = new Swiper(serviceAboutGalleriesEl, {\r\n\t\tslidesPerView: 1.2,\r\n\t\tspaceBetween: 10,\r\n\r\n\t})\r\n\r\n\tconst serviceLinksSliderEl = document.getElementById('serviceLinksSlider')\r\n\r\n\tconst serviceLinksSlider = new Swiper(serviceLinksSliderEl, {\r\n\t\tslidesPerView: 1.3,\r\n\t\tspaceBetween: 10,\r\n\t})\r\n\r\n\tconst instructionSliderEl = document.getElementById('instructionSlider')\r\n\r\n\tconst instructionSlider = new Swiper(instructionSliderEl, {\r\n\t\tslidesPerView: 2.1,\r\n\t\tspaceBetween: 10,\r\n\t})\r\n\r\n\tconst serviceRefundSliderEl = document.getElementById('serviceRefundSlider')\r\n\r\n\tconst serviceRefundSlider = new Swiper(serviceRefundSliderEl, {\r\n\t\tslidesPerView: 2,\r\n\t\tspaceBetween: 10,\r\n\t})\r\n\r\n\r\n// ORDER STEP 1\r\n\r\n\tconst addProductSliderNextBtn = document.getElementById('addProductSliderNextBtn')\r\n\tconst addProductSliderPrevBtn = document.getElementById('addProductSliderPrevBtn')\r\n\t\r\n\r\n\tconst addProductPopupPaginationSliderEl = document.getElementById('addProductPopupPaginationSlider')\r\n\r\n\tconst addProductPopupPaginationSlider = new Swiper(addProductPopupPaginationSliderEl, {\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 0,\r\n\t\tallowTouchMove: false,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: addProductSliderNextBtn,\r\n\t\t\tprevEl: addProductSliderPrevBtn\r\n\t\t},\r\n\t})\r\n\r\n\tconst addProductPopupProductsSliderEl = document.getElementById('addProductPopupProductsSlider')\r\n\r\n\tconst addProductPopupProductsSlider = new Swiper(addProductPopupProductsSliderEl, {\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 0,\r\n\t\tallowTouchMove: false,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: addProductSliderNextBtn,\r\n\t\t\tprevEl: addProductSliderPrevBtn\r\n\t\t},\r\n\t})\r\n\r\n// ORDER STEP 1\r\n\r\n\tvar mobSlidersArray = []\r\n\t\r\n\tif(serviceAboutGalleriesEl.length) {\r\n\t\tserviceAboutGallery.forEach(slider => {\r\n\t\t\tmobSlidersArray.push(slider)\r\n\t\t})\r\n\t}\r\n\r\n\tif(serviceLinksSliderEl) {\r\n\t\tmobSlidersArray.push(serviceLinksSlider)\r\n\t}\r\n\r\n\tif(instructionSliderEl) {\r\n\t\tmobSlidersArray.push(instructionSlider)\r\n\t}\r\n\r\n\tif(serviceRefundSliderEl) {\r\n\t\tmobSlidersArray.push(serviceRefundSlider)\r\n\t}\r\n\r\n\tif(addProductPopupProductsSliderEl) {\r\n\t\tmobSlidersArray.push(addProductPopupProductsSlider)\r\n\t}\r\n\r\n\tif(addProductPopupPaginationSliderEl) {\r\n\t\tmobSlidersArray.push(addProductPopupPaginationSlider)\r\n\t}\r\n\r\n\tfunction destroySliders(vw, mob = mobSlidersArray) {\r\n\t\tif(vw >= 768) {\r\n\t\t\tmob.forEach(slider => {\r\n\t\t\t\tslider.destroy(false,true)\r\n\t\t\t\tslider.el.removeAttribute('class')\r\n\r\n\t\t\t\tslider.wrapperEl.removeAttribute('class')\r\n\t\t\t\tslider.wrapperEl.classList.add(slider.el.parentElement.classList[0])\r\n\r\n\t\t\t\tslider.slides.forEach(li => {\r\n\t\t\t\t\tvar className = li.classList[0]\r\n\t\t\t\t\tli.classList.remove('swiper-slide')\r\n\t\t\t\t\tli.removeAttribute('style')\r\n\t\t\t\t\t// li.classList.add(className)\r\n\t\t\t\t})\r\n\t\t\t})\r\n\r\n\t\t} else {\r\n\t\t\tmob.forEach(slider => {\r\n\t\t\t\tslider.el.classList.add('swiper-container')\r\n\r\n\t\t\t\tslider.wrapperEl.removeAttribute('class')\r\n\t\t\t\tslider.wrapperEl.classList.add('swiper-wrapper')\r\n\r\n\t\t\t\tslider.slides.forEach(li => {\r\n\t\t\t\t\tli.classList.add('swiper-slide')\r\n\t\t\t\t})\r\n\r\n\t\t\t\tslider.init()\r\n\t\t\t\tslider.navigation.init()\r\n\t\t\t\tslider.update()\r\n\t\t\t})\r\n\t\t\t\r\n\t\t}\r\n\t}\r\n\r\n\tif(!mobSlidersArray.length) return;\r\n\r\n\twindow.onresize = function() {\r\n\t    destroySliders(window.innerWidth)\r\n\t};\r\n\r\n\tdestroySliders(window.innerWidth)\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/sliders.js?");
    /***/
  },

  /***/
  0:
  /*!******************************************************************!*\
    !*** multi ./src/assets/js/script.js ./src/assets/js/sliders.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\script.js */\"./src/assets/js/script.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\team-light\\src\\assets\\js\\sliders.js */\"./src/assets/js/sliders.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/script.js_./src/assets/js/sliders.js?");
    /***/
  }
  /******/

});