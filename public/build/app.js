(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/js/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/js/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/js/controllers/hello_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/js/controllers/hello_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/js/Main.js":
/*!***************************!*\
  !*** ./assets/js/Main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Logout */ "./assets/js/pages/Logout.js");
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Layout */ "./assets/js/pages/Layout.js");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Homepage */ "./assets/js/pages/Homepage.js");
/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Register */ "./assets/js/pages/Register.js");
/* harmony import */ var _pages_Party__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Party */ "./assets/js/pages/Party.js");
/* harmony import */ var _pages_MyActivities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/MyActivities */ "./assets/js/pages/MyActivities.js");
/* harmony import */ var _pages_HostOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/HostOptions */ "./assets/js/pages/HostOptions.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getData/getData */ "./assets/js/getData/getData.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Login */ "./assets/js/pages/Login.js");
/* harmony import */ var _pages_CreateParty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/CreateParty */ "./assets/js/pages/CreateParty.js");
/* harmony import */ var _pages_PartyInvite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/PartyInvite */ "./assets/js/pages/PartyInvite.js");















/**
 * Main function that handles the core of website
 * 
 * @returns <Main /> component with all routes and components asigned to this routes
 */

var Main = function Main() {
  var userRoute = '/homepage/user';

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__.useQuery)(['user'], function () {
    return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_9__["default"])(userRoute);
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, status == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: data.user
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "my-activities",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_MyActivities__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "party/show/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Party__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "party/options/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_HostOptions__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "party/create",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_CreateParty__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "party/invite/:slug",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PartyInvite__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "logout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Logout__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Register__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  })))) : 'loading');
};

var MainPage = function MainPage() {
  var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__.QueryClient();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_17__.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);
var container = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainPage, null));

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/js/styles/app.css");
/* harmony import */ var _styles_calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/calendar.css */ "./assets/js/styles/calendar.css");
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/game.css */ "./assets/js/styles/game.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/js/bootstrap.js");
/**
 * This file loads <Main /> component and style files
 */
// any CSS you import will output into a single css file (app.css in this case)


 // start the Stimulus application



__webpack_require__(/*! ./Main */ "./assets/js/Main.js");

/***/ }),

/***/ "./assets/js/bootstrap.js":
/*!********************************!*\
  !*** ./assets/js/bootstrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/components/homepage/Box.js":
/*!**********************************************!*\
  !*** ./assets/js/components/homepage/Box.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Handles display of recurring box on Homepage
 * 
 * @param {array} content 
 * @returns <Box /> component
 */

var Box = function Box(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header pt-1 pb-1 bg-gradient"
  }, content.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center bg-light bg-gradient pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: content.icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center bg-light p-2 border fw-light text-center text-md bg-gradient"
  }, content.text))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ }),

/***/ "./assets/js/components/hostOptions/OptionsPanel.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/hostOptions/OptionsPanel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../party/SubmitToast */ "./assets/js/components/party/SubmitToast.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/**
 * Handles display of option panel visible for party host
 * @returns <OptionPanel /> component
 */

var OptionPanel = function OptionPanel() {
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__.useQueryClient)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useNavigate)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      currentPlayer = _useState2[0],
      setCurrentPlayer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      newHostId = _useState4[0],
      setNewHostId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      activePlayers = _useState6[0],
      setActivePlayers = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      inactivePlayers = _useState8[0],
      setInactivePlayers = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)('Inactive'),
      _useState10 = _slicedToArray(_useState9, 2),
      playerStatus = _useState10[0],
      setPlayerStatus = _useState10[1];

  var gameDataRoute = "/game/info/".concat(id);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_21__.useQuery)({
    queryKey: ['gameData'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_17__["default"])(gameDataRoute);
    },
    onSuccess: function onSuccess(data) {
      if (typeof currentPlayer == 'undefined') {
        setCurrentPlayer(data.partyInfo.host);
      }

      var active = [];
      data.partyInfo.activeMembers.map(function (player) {
        return active.push(player.id);
      });
      var inactive = [];
      data.partyInfo.inactiveMembers.map(function (player) {
        return inactive.push(player.id);
      });

      if (active.find(function (value) {
        return value == currentPlayer;
      })) {
        setPlayerStatus('Inactive');
      } else {
        setPlayerStatus('Active');
      }

      setActivePlayers(active);
      setInactivePlayers(inactive);
    }
  }),
      game = _useQuery.data,
      gameStatus = _useQuery.status;

  var statusMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/change-user-status/".concat(id, "/").concat(currentPlayer), {
        method: 'POST'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['gameData']);
    }
  });

  var removeMember = function removeMember() {
    if (confirm('This member will be remove permanently. Do you want ot proceed?')) {
      removeMemberMutation.mutate();
    }
  };

  var removeMemberMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/remove-member/".concat(id, "/").concat(currentPlayer), {
        method: 'POST'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['gameData']);
    }
  });
  var promoToHostMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/promote-to-host/".concat(id, "/").concat(newHostId), {
        method: 'POST'
      });
      promoToHostMutation.status = 'idle';
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['gameData']);
    }
  });
  var lockMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/change-lock-status/".concat(id), {
        method: 'POST'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['gameData']);
    }
  });

  var deleteParty = function deleteParty() {
    if (confirm("This party will be deleted with all it's data. Do you want to continue?")) {
      deleteMutation.mutate();
    }
  };

  var deleteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/delete-party/".concat(id), {
        method: 'DELETE'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      navigate('/my-activities');
    }
  });

  var getPlayerStatus = function getPlayerStatus(e) {
    var playerId = e.target.value;
    setCurrentPlayer(playerId);
    var isActive = activePlayers.find(function (value) {
      return value == playerId;
    });
    var isInactive = inactivePlayers.find(function (value) {
      return value == playerId;
    });

    if (typeof isActive != 'undefined') {
      setPlayerStatus('Inactive');
    }

    if (typeof isInactive != 'undefined') {
      setPlayerStatus('Active');
    }
  };

  var determineNewHost = function determineNewHost(e) {
    var playerId = e.target.value;
    setNewHostId(playerId);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, gameStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "p-0"
  }, "OPTIONS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-1 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "co-6 p-0 lead mb-2"
  }, "Manage members", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, "Inactive players doesn't take part in voting process, but they can still open party panel. Removed players can't rejoin locked parties.")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 p-0 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("select", {
    id: "players-list",
    className: playerStatus == 'Active' ? " form-select inactive-member-option" : "form-select active-member-option",
    value: currentPlayer,
    onChange: getPlayerStatus
  }, game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "active-member-option",
      value: player.id
    }, " ", player.name, " ");
  }), game.partyInfo.inactiveMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "inactive-member-option",
      value: player.id
    }, player.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: statusMutation.mutate
  }, "Make ", playerStatus)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-danger",
    onClick: removeMember
  }, "Remove")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 lead p-0"
  }, game.partyInfo.status ? 'Unlock party' : 'Lock party', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, "To invite new members party has to be unlocked")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, game.partyInfo.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: lockMutation.mutate
  }, "Unlock ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-solid fa-lock-open lock-icon"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: lockMutation.mutate
  }, "Lock ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-solid fa-lock lock-icon"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 lead p-0"
  }, "Delete party", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("b", null, "This is irreversible!"), " After deleting party all data will be lost!")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-danger full-width",
    onClick: deleteParty
  }, "Delete")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col p-0 lead mb-2"
  }, "Promote to host", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, "After promoting other member you will become normal member of the group and lose access to option panel")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("select", {
    className: "form-select",
    id: "players-list",
    onChange: determineNewHost,
    defaultValue: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
    key: id,
    className: "active-member-option",
    value: 0,
    disabled: true
  }, "Pick a member"), game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "active-member-option",
      value: player.id
    }, player.name);
  }), game.partyInfo.inactiveMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "inactive-member-option",
      value: player.id
    }, player.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: promoToHostMutation.mutate
  }, "Promote"))))))) : '', statusMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Members status has been changed"
  }) : null, lockMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Party status has been changed"
  }) : null, promoToHostMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Host has ben changed"
  }) : '', removeMemberMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Member has been removed"
  }) : '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionPanel);

/***/ }),

/***/ "./assets/js/components/myActivities/MemberOptions.js":
/*!************************************************************!*\
  !*** ./assets/js/components/myActivities/MemberOptions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");





/**
 * Renders modal with simple option panel for normal party member
 * 
 * @param {function} showMemberOptions | handles toggleing options off
 * @param {function} handleCloseMemberOpt | handle turning option panell off
 * @param {number} partyId | ID of the party
 * @param {array} activeMember | info about current User
 * @returns <MemberOption /> component
 */

function MemberOptions(_ref) {
  var showMemberOptions = _ref.showMemberOptions,
      handleCloseMemberOpt = _ref.handleCloseMemberOpt,
      partyId = _ref.partyId,
      activeMember = _ref.activeMember;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var inactiveMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var response = fetch('/api/game/make-me-inactive/' + partyId, {
        method: 'POST',
        body: true
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['party-list']);
    }
  });
  var leavePartyeMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var response = fetch('/api/game/leave/' + partyId, {
        method: 'POST',
        body: true
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['party-list']);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showMemberOptions,
    onHide: handleCloseMemberOpt
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Title, null, "Party Options for ", partyId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("small", null, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Body, null, activeMember ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-dark dropdown-toggle",
    "data-bs-toggle": "collapse",
    href: "#makeMeInactive",
    role: "button",
    "aria-expanded": "false",
    "aria-controls": "makeMeInactive"
  }, "Make me inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "collapse",
    id: "makeMeInactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card card-body"
  }, "Inactive users can't vote  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, " Only a party creator can change your status to active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-danger mt-2",
    onClick: inactiveMutation.mutate
  }, "Proceed")))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-dark dropdown-toggle mt-2",
    "data-bs-toggle": "collapse",
    href: "#leaveGame",
    role: "button",
    "aria-expanded": "false",
    "aria-controls": "leaveGame"
  }, "Leave party")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "collapse",
    id: "leaveGame"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card card-body"
  }, "After you leave party, you would not be able to open game panel. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, "You can't rejoin party if it's locked"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-danger mt-2",
    onClick: leavePartyeMutation.mutate
  }, "Proceed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Footer, null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberOptions);

/***/ }),

/***/ "./assets/js/components/myActivities/PartyItem.js":
/*!********************************************************!*\
  !*** ./assets/js/components/myActivities/PartyItem.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _MemberOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MemberOptions */ "./assets/js/components/myActivities/MemberOptions.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * Handles rendering of one record in Party table
 * @param {array} activity | data about party
 * @param {array} userData | data about User
 * @returns 
 */

var PartyItem = function PartyItem(_ref) {
  var activity = _ref.activity,
      userData = _ref.userData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMemberOptions = _useState2[0],
      setShowMemberOptions = _useState2[1];

  var handleCloseMemberOpt = function handleCloseMemberOpt() {
    return setShowMemberOptions(false);
  };

  var handleShowMemberOpt = function handleShowMemberOpt() {
    return setShowMemberOptions(true);
  };

  var hostOptionsRoute = '/party/options/' + activity.id;
  var partyRoute = '/party/show/' + activity.id;
  var invitationalLink = '/game/invite/' + activity.slug;

  var copyInviLink = function copyInviLink() {
    // HTTP
    var textField = document.createElement('textarea');
    textField.innerText = invitationalLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert(invitationalLink);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table host bg-light p-0"
  }, activity.hosted == userData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "host-tooltip"
    }, "You are host of this party")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
    to: hostOptionsRoute,
    className: "options-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-user-gear info-icon"
  }, " "))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "options-tooltip"
    }, "Options")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    id: "{{game.id}}",
    className: "fa-solid fa-gears info-icon",
    onClick: handleShowMemberOpt
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light host p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "options-tooltip"
    }, activity.description)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-circle-info info-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.activeMembers, "/", activity.players), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.locked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "options-tooltip"
    }, "This party is locked")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-lock info-icon"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "options-tooltip"
    }, "Copy invitational link")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-link info-icon",
    onClick: copyInviLink
  })), activity.isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "options-tooltip"
    }, "You are ACTIVE member")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-person-running status-spacer"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "options-tooltip"
    }, "You are INACTIVE member")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-bed status-spacer"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, "comming soon..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
    to: partyRoute,
    className: "text-dark text-bold"
  }, " show "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_MemberOptions__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showMemberOptions: showMemberOptions,
    handleCloseMemberOpt: handleCloseMemberOpt,
    partyId: activity.id,
    activeMember: activity.isActive
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyItem);

/***/ }),

/***/ "./assets/js/components/myActivities/PartyList.js":
/*!********************************************************!*\
  !*** ./assets/js/components/myActivities/PartyList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _PartyItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PartyItem */ "./assets/js/components/myActivities/PartyItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/**
 * Handles rendering off full list of parties
 * 
 * @param {array} userData | data about User in context of beeing a meber of specific party
 * @returns <PartyList /> component
 */

var PartyList = function PartyList(_ref) {
  var userData = _ref.userData;

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_24__.useQuery)({
    queryKey: ['party-list'],
    queryFn: function queryFn() {
      return getActivityList();
    },
    refetchOnWindowFocus: false
  }),
      activityList = _useQuery.data,
      activityListStatus = _useQuery.status;

  var getActivityList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var route, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = '/api/my-activities';
              _context.next = 3;
              return fetch("".concat(route));

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getActivityList() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("table", {
    className: "table party-list bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header host bg-dark bg-gradient",
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Party"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header host bg-dark bg-gradient",
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Activity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Active/All", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"], {
      id: "options-tooltip"
    }, "Active members have right to vote. All members can see party panel.")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Next session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tbody", null, activityListStatus == "success" ? activityList.activityTable.map(function (activity) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_PartyItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: activity.id,
      activity: activity,
      userData: userData
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyList);

/***/ }),

/***/ "./assets/js/components/nav/NavBar.js":
/*!********************************************!*\
  !*** ./assets/js/components/nav/NavBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NavItem */ "./assets/js/components/nav/NavItem.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * Takes info about current user and render nav bar based on Users credentials
 * 
 * @param {number} userData 
 * @returns <Navbar /> component
 */

var Navbar = function Navbar(_ref) {
  var userData = _ref.userData;
  var navItem1 = {
    'name': 'Home',
    'route': '/',
    'type': 'open',
    'active': false
  };
  var navItem2 = {
    'name': 'My Activities',
    'route': '/my-activities',
    'type': 'loggedIn',
    'active': false
  };
  var navItem3 = {
    'name': 'ReadMe',
    'route': '/readme',
    'type': 'open',
    'active': false
  };
  var navItem4 = {
    'name': '+',
    'route': '/party/create',
    'type': 'special',
    'active': false
  };
  var navItem5 = {
    'name': 'Logout',
    'route': '/logout',
    'type': 'loggedIn',
    'active': false
  };
  var navItem6 = {
    'name': 'Login',
    'route': '/login',
    'type': 'loggedOut',
    'active': false
  };
  var navItem7 = {
    'name': 'Register',
    'route': '/register',
    'type': 'loggedOut',
    'active': false
  };
  var allNavbarItems = [navItem1, navItem2, // navItem3, 
  navItem4 // navItem5, 
  // navItem6, 
  // navItem7
  ];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      navbar = _useState2[0],
      setNavbar = _useState2[1];

  var createNavbar = function createNavbar() {
    var navbarContent = [];
    allNavbarItems.forEach(function (item) {
      if (userData == null) {
        if (item.type == 'loggedOut' || item.type == 'open') {
          navbarContent.push(item);
        }
      } else {
        if (item.type == 'loggedIn' || item.type == 'special' || item.type == 'open') {
          navbarContent.push(item);
        }
      }
    });
    setNavbar(navbarContent);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    createNavbar();
  }, [userData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h1", {
    className: "display-1 universal-shadow-text"
  }, "HARMON")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "rounded-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark bg-gradient m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "container-fluid m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "collapse navbar-collapse justify-content-center",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "navbar-nav m-0 align-middle"
  }, navbar.map(function (navItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_NavItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: navItem.name,
      item: navItem,
      user: userData
    });
  }), userData === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    href: "/register",
    className: "nav-link fs-4 nav-menu-item"
  }, " Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    href: "/login",
    className: "nav-link fs-4 nav-menu-item"
  }, " Login"))) : '', userData !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    href: "/logout",
    className: "nav-link fs-4 nav-menu-item"
  }, " Logout")) : '')))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/js/components/nav/NavItem.js":
/*!*********************************************!*\
  !*** ./assets/js/components/nav/NavItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



/**
 * Renders specific party item
 * 
 * @param {array} item  | info about the item
 * @returns  <NavItem /> component
 */

var NavItem = function NavItem(_ref) {
  var item = _ref.item;

  if (item.type == 'special') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: item.route,
      className: "nav-link fs-4 nav-menu-item "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "border border-2 rounded square-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "fa-solid fa-plus "
    })))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "nav-item "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: item.route,
      className: "nav-link fs-4 nav-menu-item "
    }, " ", item.name, " ")));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./assets/js/components/party/Day.js":
/*!*******************************************!*\
  !*** ./assets/js/components/party/Day.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















/**
 * 
 * Handles rendering day in  Calendar view
 * 
 * @param {array} param | 
 * @returns 
 */

var Day = function Day(_ref) {
  var dayData = _ref.dayData,
      setActiveDay = _ref.setActiveDay,
      activeDay = _ref.activeDay,
      memberData = _ref.memberData;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
      id = _useParams.id;

  var dateString = dayData.date.substring(0, 10);
  var queryKey = "".concat(id, "-").concat(dateString);
  var dayRoute = "/day/".concat(id, "/").concat(dateString);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__.useQuery)({
    queryKey: [queryKey],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_14__["default"])(dayRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var pickDate = function pickDate(day) {
    setActiveDay(day);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (status == 'success' && typeof activeDay !== 'undefined' && isActive) {
      pickDate(data.dayInfo);
    } else {}
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (typeof activeDay !== 'undefined' && typeof activeDay.date !== 'undefined' && activeDay.date == dayData.date) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeDay]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (typeof activeDay === 'undefined' && typeof data !== 'undefined' && dayData.today) {
      setActiveDay(data.dayInfo);
    }
  }, [status]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, status == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", {
    className: isActive ? data.dayInfo.status + " p-0  picked-date" : data.dayInfo.status + " p-0",
    onClick: function onClick() {
      return pickDate(data.dayInfo);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "calendar-day"
  }, data.dayInfo.number), data.dayInfo.status == "CANCELED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-solid fa-xmark"
  })) : '', data.dayInfo.status == "VOTED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-sharp fa-solid fa-arrows-rotate"
  }, data.dayInfo.remainingVoters)), memberData != null && memberData.memberInfo.isActive == true && !data.dayInfo.playerStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-vote-status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-sharp fa-solid fa-exclamation"
  })) : '') : '', data.dayInfo.status == "MISSED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-solid fa-ban"
  })) : '', data.dayInfo.status == "GAMEDAY" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-solid fa-check"
  })) : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "calendar-day"
  }, dayData.number)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day);

/***/ }),

/***/ "./assets/js/components/party/Form.js":
/*!********************************************!*\
  !*** ./assets/js/components/party/Form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _SubmitToast__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SubmitToast */ "./assets/js/components/party/SubmitToast.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/**
 * Form used by party members for voting process
 * 
 * @param {array} activeDay | info about active day for which vote will be added 
 * @returns <Form /> component
 */

var Form = function Form(_ref) {
  var activeDay = _ref.activeDay;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_32__.useQueryClient)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_33__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(1111),
      _useState6 = _slicedToArray(_useState5, 2),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      messageStatus = _useState10[0],
      setMessageStatus = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(1),
      _useState12 = _slicedToArray(_useState11, 2),
      voteStatus = _useState12[0],
      setVoteStatus = _useState12[1];

  var voteRoute = "/game/get-votes/".concat(id, "/").concat(year, "-").concat(month, "-").concat(day);
  var voteKey = "".concat(id, "-").concat(year, "-").concat(month, "-").concat(day, "-votes");

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_34__.useQuery)({
    queryKey: [voteKey],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_31__["default"])(voteRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (typeof activeDay !== 'undefined') {
      var splitedDate = activeDay.date.substring(0, 10).split('-');
      setDay(parseInt(splitedDate[2]));
      setMonth(parseInt(splitedDate[1]));
      setYear(splitedDate[0]);
    }
  }, [activeDay]);

  var checkVoteStatus = function checkVoteStatus(event) {
    setVoteStatus(event.target.value);
  };

  var addVote = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var vote;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return dataMutation.mutateAsync(event);

            case 3:
              vote = _context.sent;

              if (vote.status == 403) {
                setMessageStatus('fail');
                setMessage('You are not an active member of this party');
              }

              if (vote.status == 200) {
                setMessageStatus('success');
                setMessage('Your vote has been sent');
              }

              setTimeout(function () {
                setMessage();
              }, 3000);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log('error: ' + _context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function addVote(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var dataMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_35__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var response = fetch("/api/game/send-vote/".concat(id), {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onError: function onError(error, variables, context) {
      console.log(error, variables, context);
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(["".concat(id, "-") + activeDay.date.substring(0, 10)]);
      queryClient.invalidateQueries([voteKey]);
    }
  });
  var deleteVoteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_35__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var voteId = event.target.id;

      if (confirm('This vote will be deleted permanently! Day status may be changed')) {
        var response = fetch('/api/vote/delete/' + voteId, {
          method: 'DELETE'
        });
        return response;
      }

      return false;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([voteKey]);
      queryClient.invalidateQueries(["".concat(id, "-") + activeDay.date.substring(0, 10)]);
      setMessageStatus('success');
      setMessage('Your vote has been deleted');
      setTimeout(function () {
        setMessage();
      }, 3000);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row g-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: ""
  }, "PLACE YOUR VOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("form", {
    name: "vote",
    method: "post",
    onSubmit: addVote
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row custom-form-row pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: voteStatus == 0 ? "form-select-lg bg-red " : "form-select-lg bg-green",
    onChange: checkVoteStatus,
    id: "vote_vote",
    name: "vote[vote]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    className: "bg-green",
    value: "1"
  }, "I'm in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    className: "bg-red",
    value: "0"
  }, "I'm out"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row hidden-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select",
    id: "vote_date_month",
    name: "vote[date][month]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    selected: true,
    value: month
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select",
    id: "vote_date_day",
    name: "vote[date][day]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    selected: true,
    value: day
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select",
    id: "vote_date_year",
    name: "vote[date][year]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    selected: true,
    value: year
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg  time-select",
    id: "vote_startTime_hour",
    name: "vote[startTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_startTime_minute",
    name: "vote[startTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_hour",
    name: "vote[finishTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_minute",
    name: "vote[finishTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row mt-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    type: "submit",
    className: "btn btn-lg btn-dark"
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-xl-6 animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "border bg-light form-panel animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "p-0"
  }, "DATE INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "date-display border-bottom  pb-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, day, "-", month, "-", year))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "VOTING STATUS")), typeof activeDay !== 'undefined' && activeDay.status == 'CANCELED' ? 'Some members are unavailable' : '', typeof activeDay !== 'undefined' && activeDay.status == 'MISSED' ? 'Schedules missed' : '', typeof activeDay !== 'undefined' && activeDay.status == 'VOTED' ? 'Voting in progress' : '', typeof activeDay !== 'undefined' && activeDay.status == 'EMPTY' ? 'Noone voted yet' : '', typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? 'Schedules matched!' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "YOUR STATUS")), typeof activeDay !== 'undefined' && activeDay.playerStatus ? 'Voted' : "You didn't vote")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "WAITING FOR")), typeof activeDay !== 'undefined' && activeDay.remainingVoters !== 'undefined' ? activeDay.remainingVoters + ' member(s)' : "")), typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "HOURS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("ul", null, typeof activeDay !== 'undefined' && activeDay.hours !== 'undefined' ? activeDay.hours.map(function (range) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", null, range.start.substring(11, 16) + ' <-> ' + range.finish.substring(11, 16));
  }) : ""))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-12 table-cell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "p-0"
  }, "YOUR VOTES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, status == 'success' ? data.votes.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
      className: "custom-vote-display "
    }, !event.voteType ? "I'm out" : event.start + ' - ' + event.finish, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
      className: "vote-trash"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("i", {
      id: event.id,
      className: "fa-solid fa-trash-can",
      onClick: deleteVoteMutation.mutate
    })));
  }) : 'Loading...')))), message && typeof message != 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_SubmitToast__WEBPACK_IMPORTED_MODULE_30__["default"], {
    type: messageStatus,
    message: message
  }) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/js/components/party/PartyInfo.js":
/*!*************************************************!*\
  !*** ./assets/js/components/party/PartyInfo.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");








/**
 * Handles rendering Party Info panel
 * 
 * @returns <partyInfo /> component
 */

var PartyInfo = function PartyInfo() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
      id = _useParams.id;

  var gameDataRoute = "/game/info/".concat(id);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)({
    queryKey: ['gameData'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_5__["default"])(gameDataRoute);
    }
  }),
      game = _useQuery.data,
      gameStatus = _useQuery.status;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, gameStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "col-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "p-0"
  }, "PARTY INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "col-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "party-name border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "PARTY NAME")), " ", game.partyInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "party-name  border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "ACTIVITY")), " ", game.partyInfo.activity))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "info-display border-bottom  lead pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "DESCRIPTION")), " ", game.partyInfo.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "MEMBERS")), game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      key: player.id,
      className: "player-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, player.name), " ");
  }), game.partyInfo.inactiveMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      key: player.id,
      className: "player-name"
    }, " ", player.name);
  })))))) : '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyInfo);

/***/ }),

/***/ "./assets/js/components/party/SubmitToast.js":
/*!***************************************************!*\
  !*** ./assets/js/components/party/SubmitToast.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ToastContainer.js");
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Toast */ "./node_modules/react-bootstrap/esm/Toast.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * Recuring Toast that display info after user actions
 * 
 * @param {string} type 
 * @param {string} message 
 * @returns <SubmitToast /> component
 */

var SubmitToast = function SubmitToast(_ref) {
  var type = _ref.type,
      message = _ref.message;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      showA = _useState2[0],
      setShowA = _useState2[1];

  var toggleShowA = function toggleShowA() {
    return setShowA(!showA);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "toasted",
    containerPosition: "absolute",
    position: "middle-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_14__["default"], {
    bg: type,
    show: showA,
    onClose: toggleShowA,
    delay: 2000,
    autohide: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_14__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("strong", {
    className: "me-auto"
  }, message))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitToast);

/***/ }),

/***/ "./assets/js/components/party/Week.js":
/*!********************************************!*\
  !*** ./assets/js/components/party/Week.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Day */ "./assets/js/components/party/Day.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * Handles rendering Week in Calendar view
 * 
 * @param {array} weekData | data required for rendering the view
 * @param {activeDay} activeDay | data about current active day
 * @param {setState} setActiveDay | setState()  function
 * @param {array} memberInfo | info about current user as a member of party
 * @returns <Week /> component
 */

var Week = function Week(_ref) {
  var weekData = _ref.weekData,
      activeDay = _ref.activeDay,
      setActiveDay = _ref.setActiveDay,
      memberInfo = _ref.memberInfo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(weekData),
      _useState2 = _slicedToArray(_useState, 2),
      week = _useState2[0],
      setWeek = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dataLoaded = _useState4[0],
      setDataLoaded = _useState4[1];

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)(),
      id = _useParams.id;

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    if (typeof weekData !== 'undefined') {
      setDataLoaded(true);
    }
  }, [week]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("tr", null, dataLoaded ? week.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Day__WEBPACK_IMPORTED_MODULE_16__["default"], {
      memberData: memberInfo,
      key: id + '-' + day.monthNumber.toString() + "-" + day.number.toString(),
      dayData: day,
      activeDay: activeDay,
      setActiveDay: setActiveDay
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("td", null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Week);

/***/ }),

/***/ "./assets/js/getData/getData.js":
/*!**************************************!*\
  !*** ./assets/js/getData/getData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// const defaultRoute = 'http://127.0.0.1/api';
var defaultRoute = 'http://harmon.sasartele.pl/api';
/**
 * handles most of the website data fetch
 * 
 * @param {string} route 
 * @returns JSON | JSON response fron asked route
 */

var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(route) {
    var dataRoute, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataRoute = defaultRoute + route;
            _context.next = 3;
            return fetch(dataRoute);

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./assets/js/pages/CreateParty.js":
/*!****************************************!*\
  !*** ./assets/js/pages/CreateParty.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");





/**
 * Function that handles rendering Create Party view
 * 
 * @returns | <CreatePart /> component
 */

var CreateParty = function CreateParty() {
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var createGameMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var response = fetch('/api/game/create', {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['party-list']);
      navigate('/my-activities');
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-9 col-auto bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", {
    className: "display-6 text-center"
  }, "Create Party"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    name: "game",
    method: "post",
    onSubmit: createGameMutation.mutate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "game"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_name",
    className: "form-label"
  }, "Party name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: "game_name",
    name: "game[name]",
    className: "form-control",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_title",
    className: "form-label"
  }, "Activity name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: "game_title",
    name: "game[title]",
    className: "form-control",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_description",
    className: "form-label"
  }, "Descriprion:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", {
    id: "game_description",
    name: "game[description]",
    className: "form-control",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: "game_minSessionLength",
    name: "game[minSessionLength]",
    className: "form-control",
    hidden: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    id: "game_Save",
    name: "game[Save]",
    className: "btn btn-dark btn-lg btn"
  }, "Save")))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateParty);

/***/ }),

/***/ "./assets/js/pages/Homepage.js":
/*!*************************************!*\
  !*** ./assets/js/pages/Homepage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_homepage_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage/Box */ "./assets/js/components/homepage/Box.js");



/**
 * Default function that handles rendering Homepage
 * 
 * @returns | <Homepage /> component
 */

var Homepage = function Homepage() {
  var box1 = {
    'title': 'Create party',
    'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
    'text': 'Make a new recouring activity to manage'
  };
  var box2 = {
    'title': 'Add Members',
    'icon': 'fa-regular fa-people-pulling fa-8x m-3 mb-5',
    'text': "Invite your friends"
  };
  var box3 = {
    'title': 'Find date',
    'icon': 'fa-regular fa-calendar-check fa-8x m-3 mb-5',
    'text': ' Place your votes and app will do the rest'
  };
  var boxContent = [box1, box2, box3];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-xl-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "lead"
  }, "HARMON is an app that helps to find matching schedules in party of few people arranged for reccuring activities like sports, board games, digital games or poker. The methodology is wrapaed in 3 simple points below. You can also get full documentation on my ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://github.com/Sapozarom/Harmon-prod",
    className: "text-dark"
  }, "Github"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center mt-5 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/me0LZkTauHs",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-xl-9 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center g-4"
  }, boxContent.map(function (box) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_homepage_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: box.title,
      content: box
    });
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./assets/js/pages/HostOptions.js":
/*!****************************************!*\
  !*** ./assets/js/pages/HostOptions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hostOptions_OptionsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hostOptions/OptionsPanel */ "./assets/js/components/hostOptions/OptionsPanel.js");
/* harmony import */ var _components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/party/PartyInfo */ "./assets/js/components/party/PartyInfo.js");



/**
 * Default function that handles rendering Option Panel of party host
 * 
 * @returns | <HostOptions /> component
 */

var HostOptions = function HostOptions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "Party host panel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-xl-6 form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_hostOptions_OptionsPanel__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-xl-6 form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostOptions);

/***/ }),

/***/ "./assets/js/pages/Layout.js":
/*!***********************************!*\
  !*** ./assets/js/pages/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_nav_NavBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/nav/NavBar */ "./assets/js/components/nav/NavBar.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/**
 * Function that handles rendering layout of the website
 * 
 * @param {number} user 
 * @returns <Layout /> coponent
 */

var Layout = function Layout(_ref) {
  var user = _ref.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(user),
      _useState2 = _slicedToArray(_useState, 2),
      userId = _useState2[0],
      setUserId = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_components_nav_NavBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    userData: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Outlet, {
    context: [userId, setUserId]
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./assets/js/pages/Login.js":
/*!**********************************!*\
  !*** ./assets/js/pages/Login.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Default function that handles rendering login form
 * 
 * @returns | <Login /> component
 */

var Login = function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/js/pages/Logout.js":
/*!***********************************!*\
  !*** ./assets/js/pages/Logout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Handles logout action
 * 
 * @returns <Logout /> compponent
 */

var Logout = function Logout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-5"
  }, "Logout")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./assets/js/pages/MyActivities.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/MyActivities.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_myActivities_PartyList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/myActivities/PartyList */ "./assets/js/components/myActivities/PartyList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 * Function that handles rendering Table of all prties attneded by User
 * 
 * @returns <MyActivities /> component
 */

var MyActivities = function MyActivities() {
  var _useOutletContext = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useOutletContext)(),
      _useOutletContext2 = _slicedToArray(_useOutletContext, 2),
      user = _useOutletContext2[0],
      setUser = _useOutletContext2[1];

  var box1 = {
    'title': 'Create party',
    'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
    'text': 'Make a new recouring activity to manage'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "List of parties")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_components_myActivities_PartyList__WEBPACK_IMPORTED_MODULE_13__["default"], {
    userData: user
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyActivities);

/***/ }),

/***/ "./assets/js/pages/Party.js":
/*!**********************************!*\
  !*** ./assets/js/pages/Party.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_party_Week__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/party/Week */ "./assets/js/components/party/Week.js");
/* harmony import */ var _components_party_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/party/Form */ "./assets/js/components/party/Form.js");
/* harmony import */ var _components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/party/PartyInfo */ "./assets/js/components/party/PartyInfo.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../getData/getData */ "./assets/js/getData/getData.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/**
 * Handles rendering of Party view
 * 
 * @returns <Part /> components
 */

var Party = function Party() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      activeDay = _useState2[0],
      setActiveDay = _useState2[1];

  var calendarRoute = "/game/calendar/".concat(id);
  var playerDataRoute = "/game/member-data/".concat(id);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__.useQuery)({
    queryKey: ['memberData'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_17__["default"])(playerDataRoute);
    }
  }),
      member = _useQuery.data,
      memberStatus = _useQuery.status;

  var _useQuery2 = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__.useQuery)({
    queryKey: ['calendar'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_17__["default"])(calendarRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery2.data,
      status = _useQuery2.status;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("table", {
    className: "table calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("caption", {
    className: "bg-dark bg-gradient"
  }, "CALENDAR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Mon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Tue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Wed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Thu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Fri"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Sat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Sun"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tbody", null, status == 'success' ? data.calendar.map(function (week, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_party_Week__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: id + '-' + index,
      weekData: week,
      activeDay: activeDay,
      setActiveDay: setActiveDay,
      memberInfo: member
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, "loading"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_party_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
    key: id,
    activeDay: activeDay
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_16__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Party);

/***/ }),

/***/ "./assets/js/pages/PartyInvite.js":
/*!****************************************!*\
  !*** ./assets/js/pages/PartyInvite.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getData/getData */ "./assets/js/getData/getData.js");






/**
 * Handles party invite screen
 * @returns <PartyInvite /> component
 */

var PartyInvite = function PartyInvite() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
      slug = _useParams.slug;

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQueryClient)();
  var playerDataRoute = "game/member-data/".concat(slug);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({
    queryKey: ['memberData'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_3__["default"])(playerDataRoute);
    }
  }),
      member = _useQuery.data,
      memberStatus = _useQuery.status;

  var declineInvitation = function declineInvitation() {
    navigate('/my-activities');
  };

  var acceptMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var response = fetch("http://127.0.0.1/api/party/join/".concat(slug), {
        method: 'POST'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['party-list']);
      navigate('/my-activities');
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, memberStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-9 col-auto bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", {
    className: "display-6 text-center"
  }, "Join Game"), member.memberInfo.isMember && !member.memberInfo.isLocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fa-solid fa-person-circle-exclamation fa-10x text-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "lead text-center"
  }, "You are already member of this party")) : '', member.memberInfo.isLocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fa-solid fa-user-lock fa-10x text-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "lead text-center"
  }, "Sorry but this party is locked contact with it's creator to join")) : '', !member.memberInfo.isMember && !member.memberInfo.isLocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fa-solid fa-person-circle-question fa-10x text-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "lead text-center"
  }, "Would you like to join this party?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    "class": "d-flex flex-row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    "class": "p-2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    "class": "btn btn-dark btn-lrg",
    onClick: acceptMutation.mutate
  }, "Join"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    "class": "p-2 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    "class": "btn btn-dark btn-lrg",
    onClick: declineInvitation
  }, "No thanks"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null))) : '')))) : 'Loading');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyInvite);

/***/ }),

/***/ "./assets/js/pages/Register.js":
/*!*************************************!*\
  !*** ./assets/js/pages/Register.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Default function that handles rendering register form
 * 
 * @returns | <Login /> component
 */

var Register = function Register() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./assets/js/styles/app.css":
/*!**********************************!*\
  !*** ./assets/js/styles/app.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/styles/calendar.css":
/*!***************************************!*\
  !*** ./assets/js/styles/calendar.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/styles/game.css":
/*!***********************************!*\
  !*** ./assets/js/styles/game.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-2d00e4"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDckUsVUFBUCxDQUFrQjJFLFFBQW5CLElBQStCLENBQUNOLE1BQU0sQ0FBQ3JFLFVBQVAsQ0FBa0I0RSxRQUFsRCxnQkFDRztJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUcsU0FBUyxFQUFDO0VBQWIsRUFESixlQUVJO0lBQUcsU0FBUyxFQUFDO0VBQWIsd0NBRkosZUFHSTtJQUFLLFNBQU07RUFBWCxnQkFDSTtJQUFLLFNBQU07RUFBWCxnQkFDSSxxRkFDSTtJQUFTLFNBQU0sc0JBQWY7SUFDQSxPQUFPLEVBQUVGLGNBQWMsQ0FBQ3ZLO0VBRHhCLFVBREosQ0FESixDQURKLGVBUUk7SUFBSyxTQUFNO0VBQVgsZ0JBQ0kscUZBQ0k7SUFBUyxTQUFNLHNCQUFmO0lBQ0EsT0FBTyxFQUFFc0s7RUFEVCxlQURKLENBREosQ0FSSixlQWNBLHVFQWRBLENBSEosQ0FESCxHQXdCRSxFQXhDUCxDQURKLENBREosQ0FESixDQURILEdBa0RHLFNBbkRKLENBREo7QUF1REgsQ0F0RkQ7O0FBd0ZBLGlFQUFlM08sV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1WLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFJbkIsb0JBQ0kseUhBREo7QUFJSCxDQVJEOztBQVVBLGlFQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWVwYWdlL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob3N0T3B0aW9ucy9PcHRpb25zUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL01lbWJlck9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvRGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvUGFydHlJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L1N1Ym1pdFRvYXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L1dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dldERhdGEvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQ3JlYXRlUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib3N0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTG9nb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9NeUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BhcnR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9QYXJ0eUludml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExvZ291dCBmcm9tIFwiLi9wYWdlcy9Mb2dvdXRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9wYWdlcy9MYXlvdXRcIjtcclxuaW1wb3J0IEhvbWVwYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVwYWdlXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyJztcclxuaW1wb3J0IFBhcnR5IGZyb20gXCIuL3BhZ2VzL1BhcnR5XCI7XHJcbmltcG9ydCBNeUFjdGl2aXRpZXMgZnJvbSBcIi4vcGFnZXMvTXlBY3Rpdml0aWVzXCI7XHJcbmltcG9ydCBIb3N0T3B0aW9ucyBmcm9tIFwiLi9wYWdlcy9Ib3N0T3B0aW9uc1wiO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldERhdGEvZ2V0RGF0YSc7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyLCB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL3BhZ2VzL0xvZ2luJztcclxuaW1wb3J0IENyZWF0ZVBhcnR5IGZyb20gJy4vcGFnZXMvQ3JlYXRlUGFydHknO1xyXG5pbXBvcnQgUGFydHlJbnZpdGUgZnJvbSAnLi9wYWdlcy9QYXJ0eUludml0ZSc7XHJcblxyXG4vKipcclxuICogTWFpbiBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIGNvcmUgb2Ygd2Vic2l0ZVxyXG4gKiBcclxuICogQHJldHVybnMgPE1haW4gLz4gY29tcG9uZW50IHdpdGggYWxsIHJvdXRlcyBhbmQgY29tcG9uZW50cyBhc2lnbmVkIHRvIHRoaXMgcm91dGVzXHJcbiAqL1xyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVzZXJSb3V0ZSA9ICcvaG9tZXBhZ2UvdXNlcic7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeShbJ3VzZXInXSwgKCkgPT4gZ2V0RGF0YSh1c2VyUm91dGUpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3N0YXR1cyA9PSBcInN1Y2Nlc3NcIiA/IChcclxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgdXNlcj17ZGF0YS51c2VyfS8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8SG9tZXBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIm15LWFjdGl2aXRpZXNcIiBlbGVtZW50PXs8TXlBY3Rpdml0aWVzIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXJ0eS9zaG93LzppZFwiIGVsZW1lbnQ9ezxQYXJ0eSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGFydHkvb3B0aW9ucy86aWRcIiBlbGVtZW50PXs8SG9zdE9wdGlvbnMgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInBhcnR5L2NyZWF0ZVwiIGVsZW1lbnQ9ezxDcmVhdGVQYXJ0eSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGFydHkvaW52aXRlLzpzbHVnXCIgZWxlbWVudD17PFBhcnR5SW52aXRlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dvdXRcIiBlbGVtZW50PXs8TG9nb3V0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJ2xvYWRpbmcnXHJcbiAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcbiAgICA8TWFpblBhZ2UgIC8+XHJcbik7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIGxvYWRzIDxNYWluIC8+IGNvbXBvbmVudCBhbmQgc3R5bGUgZmlsZXNcclxuICovXHJcbiBcclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2NhbGVuZGFyLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZS5jc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG4gXHJcbnJlcXVpcmUoJy4vTWFpbicpO1xyXG5cclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIGRpc3BsYXkgb2YgcmVjdXJyaW5nIGJveCBvbiBIb21lcGFnZVxyXG4gKiBcclxuICogQHBhcmFtIHthcnJheX0gY29udGVudCBcclxuICogQHJldHVybnMgPEJveCAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IEJveCA9ICh7Y29udGVudH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgcHQtMSBwYi0xIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctbGlnaHQgYmctZ3JhZGllbnQgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NvbnRlbnQuaWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctbGlnaHQgcC0yIGJvcmRlciBmdy1saWdodCB0ZXh0LWNlbnRlciB0ZXh0LW1kIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveCIsImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyAgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuLi8uLi9nZXREYXRhL2dldERhdGEnO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnO1xyXG5pbXBvcnQgU3VibWl0VG9hc3QgZnJvbSAnLi4vcGFydHkvU3VibWl0VG9hc3QnO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgZGlzcGxheSBvZiBvcHRpb24gcGFuZWwgdmlzaWJsZSBmb3IgcGFydHkgaG9zdFxyXG4gKiBAcmV0dXJucyA8T3B0aW9uUGFuZWwgLz4gY29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBPcHRpb25QYW5lbCA9ICgpID0+IHsgXHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFBsYXllciwgc2V0Q3VycmVudFBsYXllcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25ld0hvc3RJZCwgc2V0TmV3SG9zdElkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbYWN0aXZlUGxheWVycywgc2V0QWN0aXZlUGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaW5hY3RpdmVQbGF5ZXJzLCBzZXRJbmFjdGl2ZVBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BsYXllclN0YXR1cywgc2V0UGxheWVyU3RhdHVzXSA9IHVzZVN0YXRlKCdJbmFjdGl2ZScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBnYW1lRGF0YVJvdXRlID0gYC9nYW1lL2luZm8vJHtpZH1gO1xyXG4gICAgY29uc3QgeyBkYXRhOiBnYW1lLCBzdGF0dXM6IGdhbWVTdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydnYW1lRGF0YSddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKGdhbWVEYXRhUm91dGUpLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFBsYXllciA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllcihkYXRhLnBhcnR5SW5mby5ob3N0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IFtdO1xyXG4gICAgICAgICAgICBkYXRhLnBhcnR5SW5mby5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICBhY3RpdmUucHVzaChwbGF5ZXIuaWQpXHJcbiAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICBsZXQgaW5hY3RpdmUgPSBbXTtcclxuICAgICAgICAgICAgZGF0YS5wYXJ0eUluZm8uaW5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICBpbmFjdGl2ZS5wdXNoKHBsYXllci5pZClcclxuICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUuZmluZCh2YWx1ZSA9PiB2YWx1ZSA9PSBjdXJyZW50UGxheWVyKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdJbmFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdBY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRBY3RpdmVQbGF5ZXJzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIHNldEluYWN0aXZlUGxheWVycyhpbmFjdGl2ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL2NoYW5nZS11c2VyLXN0YXR1cy8ke2lkfS8ke2N1cnJlbnRQbGF5ZXJ9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ2dhbWVEYXRhJ10pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZW1vdmVNZW1iZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgbWVtYmVyIHdpbGwgYmUgcmVtb3ZlIHBlcm1hbmVudGx5LiBEbyB5b3Ugd2FudCBvdCBwcm9jZWVkPycpKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1lbWJlck11dGF0aW9uLm11dGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVNZW1iZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL3JlbW92ZS1tZW1iZXIvJHtpZH0vJHtjdXJyZW50UGxheWVyfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsnZ2FtZURhdGEnXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9tb1RvSG9zdE11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goYC9hcGkvZ2FtZS9wcm9tb3RlLXRvLWhvc3QvJHtpZH0vJHtuZXdIb3N0SWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHByb21vVG9Ib3N0TXV0YXRpb24uc3RhdHVzID0gJ2lkbGUnO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydnYW1lRGF0YSddKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbG9ja011dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goYC9hcGkvZ2FtZS9jaGFuZ2UtbG9jay1zdGF0dXMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsnZ2FtZURhdGEnXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZGVsZXRlUGFydHkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJUaGlzIHBhcnR5IHdpbGwgYmUgZGVsZXRlZCB3aXRoIGFsbCBpdCdzIGRhdGEuIERvIHlvdSB3YW50IHRvIGNvbnRpbnVlP1wiKSkge1xyXG4gICAgICAgICAgICBkZWxldGVNdXRhdGlvbi5tdXRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL2RlbGV0ZS1wYXJ0eS8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgICAgIG5hdmlnYXRlKCcvbXktYWN0aXZpdGllcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGdldFBsYXllclN0YXR1cyA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVySWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDdXJyZW50UGxheWVyKHBsYXllcklkKTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSAgPSBhY3RpdmVQbGF5ZXJzLmZpbmQodmFsdWUgPT4gdmFsdWUgPT0gcGxheWVySWQpO1xyXG4gICAgICAgIGNvbnN0IGlzSW5hY3RpdmUgPSBpbmFjdGl2ZVBsYXllcnMuZmluZCh2YWx1ZSA9PiB2YWx1ZSA9PSBwbGF5ZXJJZCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaXNBY3RpdmUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdJbmFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpc0luYWN0aXZlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFBsYXllclN0YXR1cygnQWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRldGVybWluZU5ld0hvc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TmV3SG9zdElkKHBsYXllcklkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7Z2FtZVN0YXR1cyA9PSAnc3VjY2VzcycgPyBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1BUSU9OU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1BTkFHRSBNRU1CRVJTICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0xIGJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjby02IHAtMCBsZWFkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgbWVtYmVycyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5hY3RpdmUgcGxheWVycyBkb2Vzbid0IHRha2UgcGFydCBpbiB2b3RpbmcgcHJvY2VzcywgYnV0IHRoZXkgY2FuIHN0aWxsIG9wZW4gcGFydHkgcGFuZWwuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVkIHBsYXllcnMgY2FuJ3QgcmVqb2luIGxvY2tlZCBwYXJ0aWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb24gb3B0aW9uLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02IHAtMCAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllcnMtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cGxheWVyU3RhdHVzID09ICdBY3RpdmUnID8gXCIgZm9ybS1zZWxlY3QgaW5hY3RpdmUtbWVtYmVyLW9wdGlvblwiIDogXCJmb3JtLXNlbGVjdCBhY3RpdmUtbWVtYmVyLW9wdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFBsYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFBsYXllclN0YXR1c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cImFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgdmFsdWU9e3BsYXllci5pZH0+IHtwbGF5ZXIubmFtZX0gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLmluYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cImluYWN0aXZlLW1lbWJlci1vcHRpb25cIiB2YWx1ZT17cGxheWVyLmlkfT57cGxheWVyLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgZnVsbC13aWR0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhdHVzTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Uge3BsYXllclN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVNZW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBsZWFkIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uc3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VubG9jayBwYXJ0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMb2NrIHBhcnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBpbnZpdGUgbmV3IG1lbWJlcnMgcGFydHkgaGFzIHRvIGJlIHVubG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXF1ZXN0aW9uIG9wdGlvbi1pbmZvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5zdGF0dXMgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFyayBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9ja011dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5sb2NrIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWxvY2stb3BlbiBsb2NrLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgZnVsbC13aWR0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvY2tNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2sgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbG9jayBsb2NrLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGxlYWQgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBwYXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+VGhpcyBpcyBpcnJldmVyc2libGUhPC9iPiBBZnRlciBkZWxldGluZyBwYXJ0eSBhbGwgZGF0YSB3aWxsIGJlIGxvc3QhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXF1ZXN0aW9uIG9wdGlvbi1pbmZvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgZnVsbC13aWR0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlUGFydHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0wIGxlYWQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21vdGUgdG8gaG9zdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlciBwcm9tb3Rpbmcgb3RoZXIgbWVtYmVyIHlvdSB3aWxsIGJlY29tZSBub3JtYWwgbWVtYmVyIG9mIHRoZSBncm91cCBhbmQgbG9zZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzIHRvIG9wdGlvbiBwYW5lbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1xdWVzdGlvbiBvcHRpb24taW5mb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNiBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJwbGF5ZXJzLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0ZXJtaW5lTmV3SG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aWR9IGNsYXNzTmFtZT1cImFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgdmFsdWU9ezB9ICBkaXNhYmxlZD5QaWNrIGEgbWVtYmVyPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cGxheWVyLmlkfSBjbGFzc05hbWU9XCJhY3RpdmUtbWVtYmVyLW9wdGlvblwiIHZhbHVlPXtwbGF5ZXIuaWR9ID57cGxheWVyLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5pbmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cGxheWVyLmlkfSBjbGFzc05hbWU9XCJpbmFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgdmFsdWU9e3BsYXllci5pZH0gPntwbGF5ZXIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIGZ1bGwtd2lkdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb21vVG9Ib3N0TXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21vdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDogJyd9XHJcblxyXG4gICAgICAgICAgICB7c3RhdHVzTXV0YXRpb24uaXNTdWNjZXNzID8gXHJcbiAgICAgICAgICAgICggIFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J01lbWJlcnMgc3RhdHVzIGhhcyBiZWVuIGNoYW5nZWQnLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAge2xvY2tNdXRhdGlvbi5pc1N1Y2Nlc3MgPyBcclxuICAgICAgICAgICAgKCAgXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0VG9hc3QgdHlwZT0nc3VjY2VzcycgbWVzc2FnZT0nUGFydHkgc3RhdHVzIGhhcyBiZWVuIGNoYW5nZWQnLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3Byb21vVG9Ib3N0TXV0YXRpb24uaXNTdWNjZXNzICA/IFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J0hvc3QgaGFzIGJlbiBjaGFuZ2VkJy8+XHJcbiAgICAgICAgICAgIDogICBcclxuICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3JlbW92ZU1lbWJlck11dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J01lbWJlciBoYXMgYmVlbiByZW1vdmVkJy8+XHJcbiAgICAgICAgICAgIDogICBcclxuICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb25QYW5lbDsiLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIG1vZGFsIHdpdGggc2ltcGxlIG9wdGlvbiBwYW5lbCBmb3Igbm9ybWFsIHBhcnR5IG1lbWJlclxyXG4gKiBcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc2hvd01lbWJlck9wdGlvbnMgfCBoYW5kbGVzIHRvZ2dsZWluZyBvcHRpb25zIG9mZlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVDbG9zZU1lbWJlck9wdCB8IGhhbmRsZSB0dXJuaW5nIG9wdGlvbiBwYW5lbGwgb2ZmXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJ0eUlkIHwgSUQgb2YgdGhlIHBhcnR5XHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFjdGl2ZU1lbWJlciB8IGluZm8gYWJvdXQgY3VycmVudCBVc2VyXHJcbiAqIEByZXR1cm5zIDxNZW1iZXJPcHRpb24gLz4gY29tcG9uZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBNZW1iZXJPcHRpb25zKHtzaG93TWVtYmVyT3B0aW9ucywgaGFuZGxlQ2xvc2VNZW1iZXJPcHQsIHBhcnR5SWQsIGFjdGl2ZU1lbWJlcn0pIHtcclxuXHJcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG5cclxuICBjb25zdCBpbmFjdGl2ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaCgnL2FwaS9nYW1lL21ha2UtbWUtaW5hY3RpdmUvJysgcGFydHlJZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbGVhdmVQYXJ0eWVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvZ2FtZS9sZWF2ZS8nKyBwYXJ0eUlkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiB0cnVlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvdz17c2hvd01lbWJlck9wdGlvbnN9IG9uSGlkZT17aGFuZGxlQ2xvc2VNZW1iZXJPcHR9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+UGFydHkgT3B0aW9ucyBmb3Ige3BhcnR5SWR9PC9Nb2RhbC5UaXRsZT48c21hbGw+IDwvc21hbGw+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICB7YWN0aXZlTWVtYmVyID8gXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBkcm9wZG93bi10b2dnbGVcIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj1cIiNtYWtlTWVJbmFjdGl2ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibWFrZU1lSW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE1ha2UgbWUgaW5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJtYWtlTWVJbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5hY3RpdmUgdXNlcnMgY2FuJ3Qgdm90ZSAgPGI+IE9ubHkgYSBwYXJ0eSBjcmVhdG9yIGNhbiBjaGFuZ2UgeW91ciBzdGF0dXMgdG8gYWN0aXZlPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2luYWN0aXZlTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9jZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAnJ31cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBkcm9wZG93bi10b2dnbGUgbXQtMlwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPVwiI2xlYXZlR2FtZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibGVhdmVHYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIExlYXZlIHBhcnR5XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwibGVhdmVHYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICBBZnRlciB5b3UgbGVhdmUgcGFydHksIHlvdSB3b3VsZCBub3QgYmUgYWJsZSB0byBvcGVuIGdhbWUgcGFuZWwuIDxiPllvdSBjYW4ndCByZWpvaW4gcGFydHkgaWYgaXQncyBsb2NrZWQ8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsZWF2ZVBhcnR5ZU11dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2VlZFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcblxyXG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyT3B0aW9uczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE92ZXJsYXlUcmlnZ2VyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlcic7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ub29sdGlwJztcclxuaW1wb3J0IE1lbWJlck9wdGlvbnMgZnJvbSAnLi9NZW1iZXJPcHRpb25zJ1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgcmVuZGVyaW5nIG9mIG9uZSByZWNvcmQgaW4gUGFydHkgdGFibGVcclxuICogQHBhcmFtIHthcnJheX0gYWN0aXZpdHkgfCBkYXRhIGFib3V0IHBhcnR5XHJcbiAqIEBwYXJhbSB7YXJyYXl9IHVzZXJEYXRhIHwgZGF0YSBhYm91dCBVc2VyXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuY29uc3QgUGFydHlJdGVtID0gKHthY3Rpdml0eSwgdXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dNZW1iZXJPcHRpb25zLCBzZXRTaG93TWVtYmVyT3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VNZW1iZXJPcHQgPSAoKSA9PiBzZXRTaG93TWVtYmVyT3B0aW9ucyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93TWVtYmVyT3B0ID0gKCkgPT4gc2V0U2hvd01lbWJlck9wdGlvbnModHJ1ZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhvc3RPcHRpb25zUm91dGUgPSAnL3BhcnR5L29wdGlvbnMvJyArIGFjdGl2aXR5LmlkO1xyXG4gICAgY29uc3QgcGFydHlSb3V0ZSA9ICcvcGFydHkvc2hvdy8nICsgYWN0aXZpdHkuaWQ7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uYWxMaW5rID0gJy9nYW1lL2ludml0ZS8nICsgYWN0aXZpdHkuc2x1ZztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb3B5SW52aUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhUVFBcclxuICAgICAgICAgICAgbGV0IHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGludml0YXRpb25hbExpbmtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBhbGVydChpbnZpdGF0aW9uYWxMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0cj4gIFxyXG4gICAgICAgICAgICAgICAgPHRkICBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGhvc3QgYmctbGlnaHQgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5Lmhvc3RlZCA9PSB1c2VyRGF0YSA/IFxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiaG9zdC10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgaG9zdCBvZiB0aGlzIHBhcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aG9zdE9wdGlvbnNSb3V0ZX0gY2xhc3NOYW1lPVwib3B0aW9ucy1saW5rXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXVzZXItZ2VhciBpbmZvLWljb25cIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD1cInt7Z2FtZS5pZH19XCIgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtZ2VhcnMgaW5mby1pY29uXCIgb25DbGljaz17aGFuZGxlU2hvd01lbWJlck9wdH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHQgaG9zdCBwLTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvIGluZm8taWNvblwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2aXR5LmFjdGl2ZU1lbWJlcnN9L3thY3Rpdml0eS5wbGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFBBUlRZIFNUQVRVUyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkubG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHBhcnR5IGlzIGxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1sb2NrIGluZm8taWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgaW52aXRhdGlvbmFsIGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1saW5rIGluZm8taWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5SW52aUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIEFDVElWRSBtZW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGVyc29uLXJ1bm5pbmcgc3RhdHVzLXNwYWNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgSU5BQ1RJVkUgbWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJlZCBzdGF0dXMtc3BhY2VyXCIgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBjb21taW5nIHNvb24uLi5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXJ0eVJvdXRlfSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1ib2xkXCIgPiBzaG93IDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICA8TWVtYmVyT3B0aW9ucyBcclxuICAgICAgICAgICAgc2hvd01lbWJlck9wdGlvbnMgPSB7c2hvd01lbWJlck9wdGlvbnN9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlTWVtYmVyT3B0ID0ge2hhbmRsZUNsb3NlTWVtYmVyT3B0fVxyXG4gICAgICAgICAgICBwYXJ0eUlkID0ge2FjdGl2aXR5LmlkfSBcclxuICAgICAgICAgICAgYWN0aXZlTWVtYmVyID0ge2FjdGl2aXR5LmlzQWN0aXZlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICkgICAgICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5SXRlbSIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUGFydHlJdGVtIGZyb20gJy4vUGFydHlJdGVtJztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIHJlbmRlcmluZyBvZmYgZnVsbCBsaXN0IG9mIHBhcnRpZXNcclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHVzZXJEYXRhIHwgZGF0YSBhYm91dCBVc2VyIGluIGNvbnRleHQgb2YgYmVlaW5nIGEgbWViZXIgb2Ygc3BlY2lmaWMgcGFydHlcclxuICogQHJldHVybnMgPFBhcnR5TGlzdCAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IFBhcnR5TGlzdCA9ICh7dXNlckRhdGF9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogYWN0aXZpdHlMaXN0LCBzdGF0dXM6IGFjdGl2aXR5TGlzdFN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ3BhcnR5LWxpc3QnXSwgXHJcbiAgICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0QWN0aXZpdHlMaXN0KCksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QWN0aXZpdHlMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gJy9hcGkvbXktYWN0aXZpdGllcyc7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtyb3V0ZX1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHBhcnR5LWxpc3QgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGhvc3QgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+PC90aD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5QYXJ0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBob3N0IGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5BY3Rpdml0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5BY3RpdmUvQWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2ZSBtZW1iZXJzIGhhdmUgcmlnaHQgdG8gdm90ZS4gQWxsIG1lbWJlcnMgY2FuIHNlZSBwYXJ0eSBwYW5lbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXF1ZXN0aW9uIG9wdGlvbi1pbmZvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5OZXh0IHNlc3Npb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TGluazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5TGlzdFN0YXR1cyA9PSBcInN1Y2Nlc3NcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlMaXN0LmFjdGl2aXR5VGFibGUubWFwKChhY3Rpdml0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnR5SXRlbSBrZXk9e2FjdGl2aXR5LmlkfSBhY3Rpdml0eT17YWN0aXZpdHl9IHVzZXJEYXRhPXt1c2VyRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5TGlzdCIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9OYXZJdGVtJztcclxuXHJcbi8qKlxyXG4gKiBUYWtlcyBpbmZvIGFib3V0IGN1cnJlbnQgdXNlciBhbmQgcmVuZGVyIG5hdiBiYXIgYmFzZWQgb24gVXNlcnMgY3JlZGVudGlhbHNcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1c2VyRGF0YSBcclxuICogQHJldHVybnMgPE5hdmJhciAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IE5hdmJhciA9ICh7dXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTEgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnSG9tZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy8nLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtMiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdNeSBBY3Rpdml0aWVzJyxcclxuICAgICAgICAncm91dGUnOiAnL215LWFjdGl2aXRpZXMnLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZEluJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTMgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVhZE1lJyxcclxuICAgICAgICAncm91dGUnOiAnL3JlYWRtZScsXHJcbiAgICAgICAgJ3R5cGUnOiAnb3BlbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW00ID0ge1xyXG4gICAgICAgICduYW1lJzogJysnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcGFydHkvY3JlYXRlJyxcclxuICAgICAgICAndHlwZSc6ICdzcGVjaWFsJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTUgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTG9nb3V0JyxcclxuICAgICAgICAncm91dGUnOiAnL2xvZ291dCcsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkSW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdMb2dpbicsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9sb2dpbicsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkT3V0JyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTcgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVnaXN0ZXInLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcmVnaXN0ZXInLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbE5hdmJhckl0ZW1zID0gW25hdkl0ZW0xLCBuYXZJdGVtMiwgXHJcbiAgICAgICAgLy8gbmF2SXRlbTMsIFxyXG4gICAgICAgIG5hdkl0ZW00LCBcclxuICAgICAgICAvLyBuYXZJdGVtNSwgXHJcbiAgICAgICAgLy8gbmF2SXRlbTYsIFxyXG4gICAgICAgIC8vIG5hdkl0ZW03XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFtuYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZiYXJDb250ZW50ID0gW107XHJcbiAgICAgICAgYWxsTmF2YmFySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ2xvZ2dlZE91dCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl0ZW0udHlwZSA9PSAnbG9nZ2VkSW4nIHx8IGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXROYXZiYXIobmF2YmFyQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjcmVhdGVOYXZiYXIoKTtcclxuICAgIH0sW3VzZXJEYXRhXSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogUEFHRSBUSVRMRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMSB1bml2ZXJzYWwtc2hhZG93LXRleHQnPkhBUk1PTjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFyayBiZy1ncmFkaWVudCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENPTEFQU0UgQlVUVE9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTkFWIElURU1TICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtLTAgYWxpZ24tbWlkZGxlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdmJhci5tYXAoKG5hdkl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBrZXk9e25hdkl0ZW0ubmFtZX0gaXRlbT17bmF2SXRlbX0gdXNlcj17dXNlckRhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXNlckRhdGEgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RlclwiY2xhc3NOYW1lPVwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtXCI+IFJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCJjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW1cIj4gTG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXNlckRhdGEgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCJjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW1cIj4gTG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vKipcclxuICogUmVuZGVycyBzcGVjaWZpYyBwYXJ0eSBpdGVtXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2FycmF5fSBpdGVtICB8IGluZm8gYWJvdXQgdGhlIGl0ZW1cclxuICogQHJldHVybnMgIDxOYXZJdGVtIC8+IGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgTmF2SXRlbSA9ICh7aXRlbX0pID0+IHtcclxuXHJcbiAgICBpZiAoaXRlbS50eXBlID09ICdzcGVjaWFsJykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtIFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lID0gXCJib3JkZXIgYm9yZGVyLTIgcm91bmRlZCBzcXVhcmUtYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGx1cyBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW0gXCIgPiB7aXRlbS5uYW1lfSA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbSIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuLi8uLi9nZXREYXRhL2dldERhdGEnO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBIYW5kbGVzIHJlbmRlcmluZyBkYXkgaW4gIENhbGVuZGFyIHZpZXdcclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHBhcmFtIHwgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuY29uc3QgRGF5ID0gKHtkYXlEYXRhLCBzZXRBY3RpdmVEYXksIGFjdGl2ZURheSwgbWVtYmVyRGF0YX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXlEYXRhLmRhdGUuc3Vic3RyaW5nKDAsMTApO1xyXG4gICAgY29uc3QgcXVlcnlLZXkgPSBgJHtpZH0tJHtkYXRlU3RyaW5nfWA7XHJcbiAgICBjb25zdCBkYXlSb3V0ZSA9IGAvZGF5LyR7aWR9LyR7ZGF0ZVN0cmluZ31gO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbcXVlcnlLZXldLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKGRheVJvdXRlKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHBpY2tEYXRlID0gKGRheSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZURheShkYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSAnc3VjY2VzcycgJiYgdHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcgICYmIGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHBpY2tEYXRlKGRhdGEuZGF5SW5mbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFtkYXRhXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGFjdGl2ZURheS5kYXRlICE9PSAndW5kZWZpbmVkJyAmJiBhY3RpdmVEYXkuZGF0ZSA9PSBkYXlEYXRhLmRhdGUpIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2FjdGl2ZURheV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJyAmJiBkYXlEYXRhLnRvZGF5KSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZURheShkYXRhLmRheUluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3N0YXR1c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c3RhdHVzID09J3N1Y2Nlc3MnID8gKFxyXG4gICAgICAgICAgICA8dGQgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBkYXRhLmRheUluZm8uc3RhdHVzICsgXCIgcC0wICBwaWNrZWQtZGF0ZVwiIDogIGRhdGEuZGF5SW5mby5zdGF0dXMgKyBcIiBwLTBcIiB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBpY2tEYXRlKGRhdGEuZGF5SW5mbyl9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5XCIgPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIkNBTkNFTEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIiA+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIlZPVEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1hcnJvd3Mtcm90YXRlXCI+e2RhdGEuZGF5SW5mby5yZW1haW5pbmdWb3RlcnN9PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7bWVtYmVyRGF0YSAhPSBudWxsICYmIG1lbWJlckRhdGEubWVtYmVySW5mby5pc0FjdGl2ZSA9PSB0cnVlICAmJiAhZGF0YS5kYXlJbmZvLnBsYXllclN0YXR1cyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzLXZvdGUtc3RhdHVzXCI+PGkgY2xhc3NOYW1lPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtZXhjbGFtYXRpb25cIj48L2k+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIk1JU1NFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1iYW5cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiR0FNRURBWVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaGVja1wiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHRkPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWRheVwiID4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXlEYXRhLm51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBEYXlcclxuXHJcblxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBTdWJtaXRUb2FzdCBmcm9tICcuL1N1Ym1pdFRvYXN0JztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbi8qKlxyXG4gKiBGb3JtIHVzZWQgYnkgcGFydHkgbWVtYmVycyBmb3Igdm90aW5nIHByb2Nlc3NcclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGFjdGl2ZURheSB8IGluZm8gYWJvdXQgYWN0aXZlIGRheSBmb3Igd2hpY2ggdm90ZSB3aWxsIGJlIGFkZGVkIFxyXG4gKiBAcmV0dXJucyA8Rm9ybSAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IEZvcm0gPSAoe2FjdGl2ZURheX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbZGF5LHNldERheV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFttb250aCxzZXRNb250aF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKDExMTEpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFttZXNzYWdlU3RhdHVzLCBzZXRNZXNzYWdlU3RhdHVzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgW3ZvdGVTdGF0dXMsIHNldFZvdGVTdGF0dXNdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3Qgdm90ZVJvdXRlID0gYC9nYW1lL2dldC12b3Rlcy8ke2lkfS8ke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICBjb25zdCB2b3RlS2V5ID0gYCR7aWR9LSR7eWVhcn0tJHttb250aH0tJHtkYXl9LXZvdGVzYDtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbdm90ZUtleV0sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEodm90ZVJvdXRlKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdGVkRGF0ZSA9IGFjdGl2ZURheS5kYXRlLnN1YnN0cmluZygwLDEwKS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBzZXREYXkocGFyc2VJbnQoc3BsaXRlZERhdGVbMl0pKTtcclxuICAgICAgICAgICAgc2V0TW9udGgocGFyc2VJbnQoc3BsaXRlZERhdGVbMV0pKTtcclxuICAgICAgICAgICAgc2V0WWVhcihzcGxpdGVkRGF0ZVswXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH0sW2FjdGl2ZURheV0pO1xyXG4gICBcclxuICAgIGNvbnN0IGNoZWNrVm90ZVN0YXR1cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFZvdGVTdGF0dXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRWb3RlID0gYXN5bmMoZXZlbnQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB2b3RlID0gYXdhaXQgZGF0YU11dGF0aW9uLm11dGF0ZUFzeW5jKGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKHZvdGUuc3RhdHVzID09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZVN0YXR1cygnZmFpbCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnWW91IGFyZSBub3QgYW4gYWN0aXZlIG1lbWJlciBvZiB0aGlzIHBhcnR5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZvdGUuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZVN0YXR1cygnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnWW91ciB2b3RlIGhhcyBiZWVuIHNlbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgfSwzMDAwKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcgKyBlcnJvcik7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goYC9hcGkvZ2FtZS9zZW5kLXZvdGUvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IsIHZhcmlhYmxlcyxjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCB2YXJpYWJsZXMsY29udGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2Ake2lkfS1gK2FjdGl2ZURheS5kYXRlLnN1YnN0cmluZygwLDEwKV0pO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbdm90ZUtleV0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVZvdGVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgdm90ZUlkID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgdm90ZSB3aWxsIGJlIGRlbGV0ZWQgcGVybWFuZW50bHkhIERheSBzdGF0dXMgbWF5IGJlIGNoYW5nZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvdm90ZS9kZWxldGUvJysgdm90ZUlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAgZmFsc2U7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFt2b3RlS2V5XSk7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtgJHtpZH0tYCthY3RpdmVEYXkuZGF0ZS5zdWJzdHJpbmcoMCwxMCldKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZVN0YXR1cygnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCdZb3VyIHZvdGUgaGFzIGJlZW4gZGVsZXRlZCcpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIH0sMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctM1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIEZPUk0gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUExBQ0UgWU9VUiBWT1RFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cInZvdGVcIiBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2FkZFZvdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY3VzdG9tLWZvcm0tcm93IHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsIFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiXCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17dm90ZVN0YXR1cyA9PSAwID8gXCJmb3JtLXNlbGVjdC1sZyBiZy1yZWQgXCIgOiBcImZvcm0tc2VsZWN0LWxnIGJnLWdyZWVuXCIgfSBvbkNoYW5nZT17Y2hlY2tWb3RlU3RhdHVzfSBpZD1cInZvdGVfdm90ZVwiIG5hbWU9XCJ2b3RlW3ZvdGVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJiZy1ncmVlblwiIHZhbHVlPVwiMVwiID5JJ20gaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImJnLXJlZFwiIHZhbHVlPVwiMFwiID5JJ20gb3V0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGlkZGVuLWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2RhdGVfbW9udGhcIiBuYW1lPVwidm90ZVtkYXRlXVttb250aF1cIiByZWFkT25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPXttb250aH0+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZGF0ZV9kYXlcIiBuYW1lPVwidm90ZVtkYXRlXVtkYXldXCIgcmVhZE9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT17ZGF5fT48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9kYXRlX3llYXJcIiBuYW1lPVwidm90ZVtkYXRlXVt5ZWFyXVwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e3llYXJ9Pjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBjdXN0b20tZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsIFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdC1sZyAgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfc3RhcnRUaW1lX2hvdXJcIiBuYW1lPVwidm90ZVtzdGFydFRpbWVdW2hvdXJdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX3N0YXJ0VGltZV9taW51dGVcIiBuYW1lPVwidm90ZVtzdGFydFRpbWVdW21pbnV0ZV1cIj48b3B0aW9uIHZhbHVlPVwiMFwiPjAwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTdcIj4xNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOFwiPjE4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMVwiPjIxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjNcIj4yMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNFwiPjI0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjZcIj4yNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyN1wiPjI3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI4XCI+Mjg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjlcIj4yOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMFwiPjMwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMxXCI+MzE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzJcIj4zMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzM1wiPjMzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM0XCI+MzQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzVcIj4zNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNlwiPjM2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM3XCI+Mzc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzhcIj4zODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOVwiPjM5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQwXCI+NDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDFcIj40MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MlwiPjQyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQzXCI+NDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDRcIj40NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NVwiPjQ1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ2XCI+NDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDdcIj40Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OFwiPjQ4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ5XCI+NDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MVwiPjUxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUyXCI+NTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTNcIj41Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NFwiPjU0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU1XCI+NTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTZcIj41Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1N1wiPjU3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU4XCI+NTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTlcIj41OTwvb3B0aW9uPjwvc2VsZWN0PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGN1c3RvbS1mb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWxcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdC1sZyB0aW1lLXNlbGVjdFwiIGlkPVwidm90ZV9maW5pc2hUaW1lX2hvdXJcIiBuYW1lPVwidm90ZVtmaW5pc2hUaW1lXVtob3VyXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX2ZpbmlzaFRpbWVfbWludXRlXCIgbmFtZT1cInZvdGVbZmluaXNoVGltZV1bbWludXRlXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjVcIj4yNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI3XCI+Mjc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjhcIj4yODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOVwiPjI5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzFcIj4zMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMlwiPjMyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMzXCI+MzM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzRcIj4zNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNVwiPjM1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM2XCI+MzY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzdcIj4zNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOFwiPjM4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM5XCI+Mzk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDBcIj40MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MVwiPjQxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQyXCI+NDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDNcIj40Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NFwiPjQ0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ1XCI+NDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDZcIj40Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0N1wiPjQ3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ4XCI+NDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDlcIj40OTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUxXCI+NTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTJcIj41Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1M1wiPjUzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU0XCI+NTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTVcIj41NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NlwiPjU2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU3XCI+NTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNThcIj41ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OVwiPjU5PC9vcHRpb24+PC9zZWxlY3Q+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWRhcmtcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGFuaW1hdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBJTkZPUk1BVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsIGFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50IGFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERBVEUgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGUtZGlzcGxheSBib3JkZXItYm90dG9tICBwYi0zIFwiPjxiPntkYXl9LXttb250aH0te3llYXJ9PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPlZPVElORyBTVEFUVVM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0NBTkNFTEVEJyA/ICgnU29tZSBtZW1iZXJzIGFyZSB1bmF2YWlsYWJsZScpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnTUlTU0VEJyA/ICgnU2NoZWR1bGVzIG1pc3NlZCcpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnVk9URUQnID8gKCdWb3RpbmcgaW4gcHJvZ3Jlc3MnKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0VNUFRZJyA/ICgnTm9vbmUgdm90ZWQgeWV0JykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdHQU1FREFZJyA/ICgnU2NoZWR1bGVzIG1hdGNoZWQhJykgOiAnJ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+WU9VUiBTVEFUVVM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5wbGF5ZXJTdGF0dXMgPyAnVm90ZWQnIDogXCJZb3UgZGlkbid0IHZvdGVcIn0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+V0FJVElORyBGT1I8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICBhY3RpdmVEYXkucmVtYWluaW5nVm90ZXJzICE9PSAndW5kZWZpbmVkJyAgPyBhY3RpdmVEYXkucmVtYWluaW5nVm90ZXJzICsgJyBtZW1iZXIocyknIDogXCJcIn0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0dBTUVEQVknID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5IT1VSUzwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICBhY3RpdmVEYXkuaG91cnMgIT09ICd1bmRlZmluZWQnICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheS5ob3Vycy5tYXAoKHJhbmdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3JhbmdlLnN0YXJ0LnN1YnN0cmluZygxMSwxNikrJyA8LT4gJyArcmFuZ2UuZmluaXNoLnN1YnN0cmluZygxMSwxNil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFZPVEVTICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlPVVIgVk9URVMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudm90ZXMubWFwKChldmVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXN0b20tdm90ZS1kaXNwbGF5ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshZXZlbnQudm90ZVR5cGUgPyBcIkknbSBvdXRcIiA6IGV2ZW50LnN0YXJ0KyAnIC0gJyArIGV2ZW50LmZpbmlzaH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9XCJ2b3RlLXRyYXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiIG9uQ2xpY2s9e2RlbGV0ZVZvdGVNdXRhdGlvbi5tdXRhdGV9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICdMb2FkaW5nLi4uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge21lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgIT0gJ3VuZGVmaW5lZCcgPyAoXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0VG9hc3QgdHlwZT17bWVzc2FnZVN0YXR1c30gbWVzc2FnZT17bWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlcyByZW5kZXJpbmcgUGFydHkgSW5mbyBwYW5lbFxyXG4gKiBcclxuICogQHJldHVybnMgPHBhcnR5SW5mbyAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IFBhcnR5SW5mbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ2FtZURhdGFSb3V0ZSA9IGAvZ2FtZS9pbmZvLyR7aWR9YFxyXG4gICAgY29uc3QgeyBkYXRhOiBnYW1lLCBzdGF0dXM6IGdhbWVTdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydnYW1lRGF0YSddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKGdhbWVEYXRhUm91dGUpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Z2FtZVN0YXR1cyA9PSAnc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRZIElORk9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJ0eS1uYW1lIGJvcmRlci1ib3R0b20gcHQtMiBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPlBBUlRZIE5BTUU8L3NwYW4+PC9iPiB7Z2FtZS5wYXJ0eUluZm8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJ0eS1uYW1lICBib3JkZXItYm90dG9tIHB0LTIgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5BQ1RJVklUWTwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5hY3Rpdml0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tICBsZWFkIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+REVTQ1JJUFRJT048L3NwYW4+PC9iPiB7Z2FtZS5wYXJ0eUluZm8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5NRU1CRVJTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cInBsYXllci1uYW1lXCI+PGI+e3BsYXllci5uYW1lfTwvYj4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uaW5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cInBsYXllci1uYW1lXCI+IHtwbGF5ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6ICcnfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydHlJbmZvOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RvYXN0JztcclxuXHJcbi8qKlxyXG4gKiBSZWN1cmluZyBUb2FzdCB0aGF0IGRpc3BsYXkgaW5mbyBhZnRlciB1c2VyIGFjdGlvbnNcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBcclxuICogQHJldHVybnMgPFN1Ym1pdFRvYXN0IC8+IGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgU3VibWl0VG9hc3QgPSAoe3R5cGUsIG1lc3NhZ2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dBLCBzZXRTaG93QV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaG93QSA9ICgpID0+IHNldFNob3dBKCFzaG93QSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBjbGFzc05hbWU9J3RvYXN0ZWQnIGNvbnRhaW5lclBvc2l0aW9uPSdhYnNvbHV0ZScgcG9zaXRpb249J21pZGRsZS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0IGJnPXt0eXBlfSBzaG93PXtzaG93QX0gb25DbG9zZT17dG9nZ2xlU2hvd0F9IGRlbGF5PXsyMDAwfSBhdXRvaGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3QuSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJtZS1hdXRvXCI+e21lc3NhZ2V9PC9zdHJvbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9hc3QuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Ub2FzdD5cclxuICAgICAgICAgICAgPC9Ub2FzdENvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VibWl0VG9hc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IERheSBmcm9tICcuL0RheSc7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyByZW5kZXJpbmcgV2VlayBpbiBDYWxlbmRhciB2aWV3XHJcbiAqIFxyXG4gKiBAcGFyYW0ge2FycmF5fSB3ZWVrRGF0YSB8IGRhdGEgcmVxdWlyZWQgZm9yIHJlbmRlcmluZyB0aGUgdmlld1xyXG4gKiBAcGFyYW0ge2FjdGl2ZURheX0gYWN0aXZlRGF5IHwgZGF0YSBhYm91dCBjdXJyZW50IGFjdGl2ZSBkYXlcclxuICogQHBhcmFtIHtzZXRTdGF0ZX0gc2V0QWN0aXZlRGF5IHwgc2V0U3RhdGUoKSAgZnVuY3Rpb25cclxuICogQHBhcmFtIHthcnJheX0gbWVtYmVySW5mbyB8IGluZm8gYWJvdXQgY3VycmVudCB1c2VyIGFzIGEgbWVtYmVyIG9mIHBhcnR5XHJcbiAqIEByZXR1cm5zIDxXZWVrIC8+IGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgV2VlayA9ICh7d2Vla0RhdGEsIGFjdGl2ZURheSwgc2V0QWN0aXZlRGF5LCBtZW1iZXJJbmZvfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt3ZWVrLCBzZXRXZWVrXSA9ICB1c2VTdGF0ZSh3ZWVrRGF0YSk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3ZWVrRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt3ZWVrXSk7XHJcbiAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7ZGF0YUxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrLm1hcCgoZGF5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyRGF0YSA9IHttZW1iZXJJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZCsnLScrZGF5Lm1vbnRoTnVtYmVyLnRvU3RyaW5nKCkgK1wiLVwiKyBkYXkubnVtYmVyLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5RGF0YSA9IHtkYXl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF5PXthY3RpdmVEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXk9e3NldEFjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICl9ICAgXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlZWsiLCJcclxuXHJcblxyXG4vLyBjb25zdCBkZWZhdWx0Um91dGUgPSAnaHR0cDovLzEyNy4wLjAuMS9hcGknO1xyXG5jb25zdCBkZWZhdWx0Um91dGUgPSAnaHR0cDovL2hhcm1vbi5zYXNhcnRlbGUucGwvYXBpJztcclxuXHJcblxyXG4vKipcclxuICogaGFuZGxlcyBtb3N0IG9mIHRoZSB3ZWJzaXRlIGRhdGEgZmV0Y2hcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBcclxuICogQHJldHVybnMgSlNPTiB8IEpTT04gcmVzcG9uc2UgZnJvbiBhc2tlZCByb3V0ZVxyXG4gKi9cclxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChyb3V0ZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVJvdXRlID0gZGVmYXVsdFJvdXRlICsgcm91dGU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFSb3V0ZSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlbmRlcmluZyBDcmVhdGUgUGFydHkgdmlld1xyXG4gKiBcclxuICogQHJldHVybnMgfCA8Q3JlYXRlUGFydCAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IENyZWF0ZVBhcnR5ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IGNyZWF0ZUdhbWVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaCgnL2FwaS9nYW1lL2NyZWF0ZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKCcvbXktYWN0aXZpdGllcycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOSBjb2wtYXV0byBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS02IHRleHQtY2VudGVyXCI+Q3JlYXRlIFBhcnR5PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwiZ2FtZVwiIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17Y3JlYXRlR2FtZU11dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImdhbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWVfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QYXJ0eSBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdhbWVfbmFtZVwiIG5hbWU9XCJnYW1lW25hbWVdXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQvPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZV90aXRsZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5BY3Rpdml0eSBuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdhbWVfdGl0bGVcIiBuYW1lPVwiZ2FtZVt0aXRsZV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZC8+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lX2Rlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkRlc2NyaXByaW9uOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJnYW1lX2Rlc2NyaXB0aW9uXCIgbmFtZT1cImdhbWVbZGVzY3JpcHRpb25dXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cImdhbWVfbWluU2Vzc2lvbkxlbmd0aFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NaW5pbWFsIHNlc3Npb24gbGVuZ3RoIChtaW51dGVzKTo8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ2FtZV9taW5TZXNzaW9uTGVuZ3RoXCIgbmFtZT1cImdhbWVbbWluU2Vzc2lvbkxlbmd0aF1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBoaWRkZW4vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImdhbWVfU2F2ZVwiIG5hbWU9XCJnYW1lW1NhdmVdXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1sZyBidG5cIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBhcnR5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlbmRlcmluZyBIb21lcGFnZVxyXG4gKiBcclxuICogQHJldHVybnMgfCA8SG9tZXBhZ2UgLz4gY29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBIb21lcGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBib3gxID0ge1xyXG4gICAgICAgICd0aXRsZSc6ICdDcmVhdGUgcGFydHknLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtdXNlcnMtYmV0d2Vlbi1saW5lcyBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiAnTWFrZSBhIG5ldyByZWNvdXJpbmcgYWN0aXZpdHkgdG8gbWFuYWdlJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3gyID0ge1xyXG4gICAgICAgICd0aXRsZSc6ICdBZGQgTWVtYmVycycsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS1wZW9wbGUtcHVsbGluZyBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiBcIkludml0ZSB5b3VyIGZyaWVuZHNcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3gzID0ge1xyXG4gICAgICAgICd0aXRsZSc6ICdGaW5kIGRhdGUnLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtY2FsZW5kYXItY2hlY2sgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJyBQbGFjZSB5b3VyIHZvdGVzIGFuZCBhcHAgd2lsbCBkbyB0aGUgcmVzdCdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94Q29udGVudCA9IFtib3gxLCBib3gyLCBib3gzXTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZWFkJz5cclxuICAgICAgICAgICAgICAgICAgICBIQVJNT04gaXMgYW4gYXBwIHRoYXQgaGVscHMgdG8gZmluZCBtYXRjaGluZyBzY2hlZHVsZXMgaW4gcGFydHkgb2YgZmV3IHBlb3BsZSBhcnJhbmdlZCBmb3IgcmVjY3VyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllcyBsaWtlIHNwb3J0cywgYm9hcmQgZ2FtZXMsIGRpZ2l0YWwgZ2FtZXMgb3IgcG9rZXIuIFRoZSBtZXRob2RvbG9neSBpcyB3cmFwYWVkIGluIDMgc2ltcGxlIHBvaW50cyBiZWxvdy5cclxuICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGFsc28gZ2V0IGZ1bGwgZG9jdW1lbnRhdGlvbiBvbiBteSA8Yj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NhcG96YXJvbS9IYXJtb24tcHJvZFwiIGNsYXNzTmFtZT1cInRleHQtZGFya1wiPkdpdGh1YjwvYT48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTUgbWItNSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9tZTBMWmtUYXVIc1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTkgJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgZy00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveENvbnRlbnQubWFwKChib3gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtib3gudGl0bGV9IGNvbnRlbnQ9e2JveH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3B0aW9uUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9ob3N0T3B0aW9ucy9PcHRpb25zUGFuZWwnO1xyXG5pbXBvcnQgUGFydHlJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvUGFydHlJbmZvJztcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyByZW5kZXJpbmcgT3B0aW9uIFBhbmVsIG9mIHBhcnR5IGhvc3RcclxuICogXHJcbiAqIEByZXR1cm5zIHwgPEhvc3RPcHRpb25zIC8+IGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgSG9zdE9wdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhcnR5IGhvc3QgcGFuZWxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmb3JtLXBhbmVsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC02IGZvcm0tcGFuZWwnPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvblBhbmVsIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC02IGZvcm0tcGFuZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXJ0eUluZm8gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0T3B0aW9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYvTmF2QmFyJ1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgaGFuZGxlcyByZW5kZXJpbmcgbGF5b3V0IG9mIHRoZSB3ZWJzaXRlXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdXNlciBcclxuICogQHJldHVybnMgPExheW91dCAvPiBjb3BvbmVudFxyXG4gKi9cclxuY29uc3QgTGF5b3V0ID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICBjb25zdCBbdXNlcklkLHNldFVzZXJJZF0gPSB1c2VTdGF0ZSh1c2VyKTtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgdXNlckRhdGE9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgPE91dGxldCBjb250ZXh0PXtbdXNlcklkLHNldFVzZXJJZF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyByZW5kZXJpbmcgbG9naW4gZm9ybVxyXG4gKiBcclxuICogQHJldHVybnMgfCA8TG9naW4gLz4gY29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIGxvZ291dCBhY3Rpb25cclxuICogXHJcbiAqIEByZXR1cm5zIDxMb2dvdXQgLz4gY29tcHBvbmVudFxyXG4gKi9cclxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5Mb2dvdXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXJ0eUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlMaXN0JztcclxuaW1wb3J0IHsgdXNlT3V0bGV0Q29udGV4dCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlbmRlcmluZyBUYWJsZSBvZiBhbGwgcHJ0aWVzIGF0dG5lZGVkIGJ5IFVzZXJcclxuICogXHJcbiAqIEByZXR1cm5zIDxNeUFjdGl2aXRpZXMgLz4gY29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBNeUFjdGl2aXRpZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gIHVzZU91dGxldENvbnRleHQoKTtcclxuXHJcbiAgICBjb25zdCBib3gxID0ge1xyXG4gICAgICAgICd0aXRsZSc6ICdDcmVhdGUgcGFydHknLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtdXNlcnMtYmV0d2Vlbi1saW5lcyBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiAnTWFrZSBhIG5ldyByZWNvdXJpbmcgYWN0aXZpdHkgdG8gbWFuYWdlJ1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIHRpdGxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNCc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTYgdGV4dC1jZW50ZXIgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICBMaXN0IG9mIHBhcnRpZXNcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIHRhYmxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNCc+XHJcbiAgICAgICAgICAgICAgICA8UGFydHlMaXN0IHVzZXJEYXRhPXt1c2VyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QWN0aXZpdGllczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eS9XZWVrJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eS9Gb3JtJztcclxuaW1wb3J0IFBhcnR5SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3BhcnR5L1BhcnR5SW5mbyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIHJlbmRlcmluZyBvZiBQYXJ0eSB2aWV3XHJcbiAqIFxyXG4gKiBAcmV0dXJucyA8UGFydCAvPiBjb21wb25lbnRzXHJcbiAqL1xyXG5jb25zdCBQYXJ0eSA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZURheSwgc2V0QWN0aXZlRGF5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2FsZW5kYXJSb3V0ZSA9IGAvZ2FtZS9jYWxlbmRhci8ke2lkfWA7XHJcblxyXG4gICAgY29uc3QgcGxheWVyRGF0YVJvdXRlID0gYC9nYW1lL21lbWJlci1kYXRhLyR7aWR9YFxyXG4gICAgY29uc3QgeyBkYXRhOiBtZW1iZXIsIHN0YXR1czogbWVtYmVyU3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFsnbWVtYmVyRGF0YSddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKHBsYXllckRhdGFSb3V0ZSksXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydjYWxlbmRhciddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKGNhbGVuZGFyUm91dGUpLFxyXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogdGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzTmFtZT1cImJnLWRhcmsgYmctZ3JhZGllbnRcIiA+Q0FMRU5EQVI8L2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Nb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+V2VkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaHU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkZyaTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U2F0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cyA9PSAnc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jYWxlbmRhci5tYXAoKHdlZWssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXZWVrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkKyctJytpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtEYXRhID0ge3dlZWt9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXk9e2FjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF5PXtzZXRBY3RpdmVEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlckluZm8gPSB7bWVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKDx0cj48dGQ+bG9hZGluZzwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBGT1JNICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGtleSA9e2lkfSBhY3RpdmVEYXk9e2FjdGl2ZURheX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQYXJ0eUluZm8gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydHk7IiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIHBhcnR5IGludml0ZSBzY3JlZW5cclxuICogQHJldHVybnMgPFBhcnR5SW52aXRlIC8+IGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgUGFydHlJbnZpdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgc2x1ZyB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckRhdGFSb3V0ZSA9IGBnYW1lL21lbWJlci1kYXRhLyR7c2x1Z31gXHJcbiAgICBjb25zdCB7IGRhdGE6IG1lbWJlciwgc3RhdHVzOiBtZW1iZXJTdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydtZW1iZXJEYXRhJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEocGxheWVyRGF0YVJvdXRlKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlY2xpbmVJbnZpdGF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvbXktYWN0aXZpdGllcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY2VwdE11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgaHR0cDovLzEyNy4wLjAuMS9hcGkvcGFydHkvam9pbi8ke3NsdWd9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKCcvbXktYWN0aXZpdGllcycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7bWVtYmVyU3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTkgY29sLWF1dG8gYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNiB0ZXh0LWNlbnRlclwiPkpvaW4gR2FtZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtYmVyLm1lbWJlckluZm8uaXNNZW1iZXIgJiYgIW1lbWJlci5tZW1iZXJJbmZvLmlzTG9ja2VkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGVyc29uLWNpcmNsZS1leGNsYW1hdGlvbiBmYS0xMHggdGV4dC1jZW50ZXJcIj48L2k+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWNlbnRlclwiPllvdSBhcmUgYWxyZWFkeSBtZW1iZXIgb2YgdGhpcyBwYXJ0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6ICcnfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIubWVtYmVySW5mby5pc0xvY2tlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXVzZXItbG9jayBmYS0xMHggdGV4dC1jZW50ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1jZW50ZXJcIj5Tb3JyeSBidXQgdGhpcyBwYXJ0eSBpcyBsb2NrZWQgY29udGFjdCB3aXRoIGl0J3MgY3JlYXRvciB0byBqb2luPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogJyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtZW1iZXIubWVtYmVySW5mby5pc01lbWJlciAmJiAhbWVtYmVyLm1lbWJlckluZm8uaXNMb2NrZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1wZXJzb24tY2lyY2xlLXF1ZXN0aW9uIGZhLTEweCB0ZXh0LWNlbnRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWNlbnRlclwiPldvdWxkIHlvdSBsaWtlIHRvIGpvaW4gdGhpcyBwYXJ0eT88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzcz1cImJ0biBidG4tZGFyayBidG4tbHJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWNjZXB0TXV0YXRpb24ubXV0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Sm9pbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzPVwiYnRuIGJ0bi1kYXJrIGJ0bi1scmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWNsaW5lSW52aXRhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vIHRoYW5rczwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHttZW1iZXIubWVtYmVySW5mby5pc0xvY2tlZCA/IH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogJ0xvYWRpbmcnfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUludml0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlbmRlcmluZyByZWdpc3RlciBmb3JtXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB8IDxMb2dpbiAvPiBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+IFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkxvZ291dCIsIkxheW91dCIsIkhvbWVwYWdlIiwiUmVnaXN0ZXIiLCJQYXJ0eSIsIk15QWN0aXZpdGllcyIsIkhvc3RPcHRpb25zIiwiZ2V0RGF0YSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVF1ZXJ5IiwiTG9naW4iLCJDcmVhdGVQYXJ0eSIsIlBhcnR5SW52aXRlIiwiTWFpbiIsInVzZXJSb3V0ZSIsImRhdGEiLCJzdGF0dXMiLCJ1c2VyIiwiTWFpblBhZ2UiLCJxdWVyeUNsaWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiQm94IiwiY29udGVudCIsInRpdGxlIiwiaWNvbiIsInRleHQiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIlN1Ym1pdFRvYXN0IiwiT3B0aW9uUGFuZWwiLCJuYXZpZ2F0ZSIsImlkIiwiY3VycmVudFBsYXllciIsInNldEN1cnJlbnRQbGF5ZXIiLCJuZXdIb3N0SWQiLCJzZXROZXdIb3N0SWQiLCJhY3RpdmVQbGF5ZXJzIiwic2V0QWN0aXZlUGxheWVycyIsImluYWN0aXZlUGxheWVycyIsInNldEluYWN0aXZlUGxheWVycyIsInBsYXllclN0YXR1cyIsInNldFBsYXllclN0YXR1cyIsImdhbWVEYXRhUm91dGUiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJvblN1Y2Nlc3MiLCJwYXJ0eUluZm8iLCJob3N0IiwiYWN0aXZlIiwiYWN0aXZlTWVtYmVycyIsIm1hcCIsInBsYXllciIsInB1c2giLCJpbmFjdGl2ZSIsImluYWN0aXZlTWVtYmVycyIsImZpbmQiLCJ2YWx1ZSIsImdhbWUiLCJnYW1lU3RhdHVzIiwic3RhdHVzTXV0YXRpb24iLCJtdXRhdGlvbkZuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImludmFsaWRhdGVRdWVyaWVzIiwicmVtb3ZlTWVtYmVyIiwiY29uZmlybSIsInJlbW92ZU1lbWJlck11dGF0aW9uIiwibXV0YXRlIiwicHJvbW9Ub0hvc3RNdXRhdGlvbiIsImxvY2tNdXRhdGlvbiIsImRlbGV0ZVBhcnR5IiwiZGVsZXRlTXV0YXRpb24iLCJnZXRQbGF5ZXJTdGF0dXMiLCJlIiwicGxheWVySWQiLCJ0YXJnZXQiLCJpc0FjdGl2ZSIsImlzSW5hY3RpdmUiLCJkZXRlcm1pbmVOZXdIb3N0Iiwic2hvdyIsImhpZGUiLCJuYW1lIiwiaXNTdWNjZXNzIiwiTW9kYWwiLCJNZW1iZXJPcHRpb25zIiwic2hvd01lbWJlck9wdGlvbnMiLCJoYW5kbGVDbG9zZU1lbWJlck9wdCIsInBhcnR5SWQiLCJhY3RpdmVNZW1iZXIiLCJpbmFjdGl2ZU11dGF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJsZWF2ZVBhcnR5ZU11dGF0aW9uIiwiTGluayIsIlBhcnR5SXRlbSIsImFjdGl2aXR5IiwidXNlckRhdGEiLCJzZXRTaG93TWVtYmVyT3B0aW9ucyIsImhhbmRsZVNob3dNZW1iZXJPcHQiLCJob3N0T3B0aW9uc1JvdXRlIiwicGFydHlSb3V0ZSIsImludml0YXRpb25hbExpbmsiLCJzbHVnIiwiY29weUludmlMaW5rIiwidGV4dEZpZWxkIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmUiLCJhbGVydCIsImhvc3RlZCIsImRlc2NyaXB0aW9uIiwicGxheWVycyIsImxvY2tlZCIsIlBhcnR5TGlzdCIsImdldEFjdGl2aXR5TGlzdCIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiYWN0aXZpdHlMaXN0IiwiYWN0aXZpdHlMaXN0U3RhdHVzIiwicm91dGUiLCJqc29uIiwiYWN0aXZpdHlUYWJsZSIsInVzZUVmZmVjdCIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJuYXZJdGVtMSIsIm5hdkl0ZW0yIiwibmF2SXRlbTMiLCJuYXZJdGVtNCIsIm5hdkl0ZW01IiwibmF2SXRlbTYiLCJuYXZJdGVtNyIsImFsbE5hdmJhckl0ZW1zIiwibmF2YmFyIiwic2V0TmF2YmFyIiwiY3JlYXRlTmF2YmFyIiwibmF2YmFyQ29udGVudCIsImZvckVhY2giLCJpdGVtIiwidHlwZSIsIm5hdkl0ZW0iLCJEYXkiLCJkYXlEYXRhIiwic2V0QWN0aXZlRGF5IiwiYWN0aXZlRGF5IiwibWVtYmVyRGF0YSIsImRhdGVTdHJpbmciLCJkYXRlIiwic3Vic3RyaW5nIiwiZGF5Um91dGUiLCJzZXRJc0FjdGl2ZSIsInBpY2tEYXRlIiwiZGF5IiwiZGF5SW5mbyIsInRvZGF5IiwibnVtYmVyIiwicmVtYWluaW5nVm90ZXJzIiwibWVtYmVySW5mbyIsIkZvcm0iLCJzZXREYXkiLCJtb250aCIsInNldE1vbnRoIiwieWVhciIsInNldFllYXIiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VTdGF0dXMiLCJzZXRNZXNzYWdlU3RhdHVzIiwidm90ZVN0YXR1cyIsInNldFZvdGVTdGF0dXMiLCJ2b3RlUm91dGUiLCJ2b3RlS2V5Iiwic3BsaXRlZERhdGUiLCJzcGxpdCIsInBhcnNlSW50IiwiY2hlY2tWb3RlU3RhdHVzIiwiYWRkVm90ZSIsImRhdGFNdXRhdGlvbiIsIm11dGF0ZUFzeW5jIiwidm90ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm9uRXJyb3IiLCJlcnJvciIsInZhcmlhYmxlcyIsImRlbGV0ZVZvdGVNdXRhdGlvbiIsInZvdGVJZCIsImhvdXJzIiwicmFuZ2UiLCJzdGFydCIsImZpbmlzaCIsInZvdGVzIiwidm90ZVR5cGUiLCJQYXJ0eUluZm8iLCJUb2FzdENvbnRhaW5lciIsIlRvYXN0Iiwic2hvd0EiLCJzZXRTaG93QSIsInRvZ2dsZVNob3dBIiwiV2VlayIsIndlZWtEYXRhIiwid2VlayIsInNldFdlZWsiLCJkYXRhTG9hZGVkIiwic2V0RGF0YUxvYWRlZCIsIm1vbnRoTnVtYmVyIiwidG9TdHJpbmciLCJkZWZhdWx0Um91dGUiLCJkYXRhUm91dGUiLCJjcmVhdGVHYW1lTXV0YXRpb24iLCJib3gxIiwiYm94MiIsImJveDMiLCJib3hDb250ZW50IiwiYm94IiwiT3V0bGV0IiwiTmF2QmFyIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlT3V0bGV0Q29udGV4dCIsInNldFVzZXIiLCJjYWxlbmRhclJvdXRlIiwicGxheWVyRGF0YVJvdXRlIiwibWVtYmVyIiwibWVtYmVyU3RhdHVzIiwiY2FsZW5kYXIiLCJpbmRleCIsImRlY2xpbmVJbnZpdGF0aW9uIiwiYWNjZXB0TXV0YXRpb24iLCJpc01lbWJlciIsImlzTG9ja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==