(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";
module.exports = webpackEmptyContext;

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
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/js/bootstrap.js */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_checkout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/checkout.js */ "./assets/scripts/checkout.js");
/* harmony import */ var _scripts_checkout_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_checkout_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)





/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/scripts/checkout.js":
/*!************************************!*\
  !*** ./assets/scripts/checkout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var stripe = Stripe("pk_test_51OKqCHE9VPfeCGyPokUHNZA4GOB9xnazsY0wik9XYtKAsFmhxo4tcCs3oeFcjHlDxuMmYAfIKBZlU8jCtCppZvzn008T27JVpF");
var clientSecret = document.querySelector('#checkout').getAttribute('data-client-secret');
initialize();
function initialize() {
  return _initialize.apply(this, arguments);
}
function _initialize() {
  _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var checkout;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return stripe.initEmbeddedCheckout({
            clientSecret: clientSecret
          });
        case 2:
          checkout = _context.sent;
          checkout.mount('#checkout');
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _initialize.apply(this, arguments);
}

/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



























































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentNamedArguments = {};
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      named: currentNamedArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentNamedArguments = {};
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    var mixedArgTypesError = function mixedArgTypesError() {
      throw new Error("Normal and named arguments cannot be mixed inside \"".concat(currentActionName, "()\""));
    };
    if (currentArgumentName) {
      if (currentArguments.length > 0) {
        mixedArgTypesError();
      }
      currentNamedArguments[currentArgumentName.trim()] = currentArgumentValue;
    } else {
      if (Object.keys(currentNamedArguments).length > 0) {
        mixedArgTypesError();
      }
      currentArguments.push(currentArgumentValue.trim());
    }
    currentArgumentName = '';
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    if (Object.keys(currentNamedArguments).length > 0) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support named arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        if (_char === '=') {
          currentArgumentName = currentArgumentValue;
          currentArgumentValue = '';
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(part.split(' ')));
  });
  return finalParts;
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) {
          return getMultipleCheckboxValue(element, modelValue);
        } else if (Object(modelValue) === modelValue) {
          return getMultipleCheckboxValue(element, Object.values(modelValue));
        }
      }
      if (element.hasAttribute('value')) {
        return element.checked ? element.getAttribute('value') : null;
      }
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val == element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        if (element.hasAttribute('value')) {
          element.checked = element.value == value;
        } else {
          element.checked = value;
        }
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0 || directive.named.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0 || directive.named.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  component.getChildren().forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      finalValues.push(value);
    }
    return finalValues;
  }
  if (index > -1) {
    finalValues.splice(index, 1);
  }
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props) {
    _classCallCheck(this, ValueStore);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== undefined) {
        return this.dirtyProps[normalizedName];
      }
      if (this.pendingProps[normalizedName] !== undefined) {
        return this.pendingProps[normalizedName];
      }
      if (this.props[normalizedName] !== undefined) {
        return this.props[normalizedName];
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      var currentValue = this.get(normalizedName);
      if (currentValue === value) {
        return false;
      }
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return Object.assign({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return Object.assign({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return Object.assign({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = Object.assign({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = Object.assign(Object.assign({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var currentValue = this.get(key);
        if (currentValue !== value) {
          changed = true;
        }
      }
      if (changed) {
        this.updatedPropsFromParent = props;
      }
      return changed;
    }
  }]);
  return ValueStore;
}();
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;

  // document-fragments dont have attributes so lets not do anything
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  // update attributes on original DOM element
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);

  // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        }
        // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0;
      // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}
function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    } else if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
      toNode = toNode.firstElementChild;
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var skipFromChildren = options.skipFromChildren || noop;
    var addChild = options.addChild || function (parent, child) {
      return parent.appendChild(child);
    };
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = undefined;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }

    /**
    * Removes a DOM node out of the original DOM
    *
    * @param  {Node} node The node to remove
    * @param  {Node} parentNode The nodes parent
    * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
    * @return {undefined}
    */
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }

          // Walk recursively
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
        }

        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }

        // update attributes on original DOM element first
        morphAttrs(fromEl, toEl);
        // optional
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var skipFrom = skipFromChildren(fromEl);
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;

      // walk the children
      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild);

        // walk the fromNode children all the way through
        while (!skipFrom && curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;
          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }
          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType;

          // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
          var isCompatible = undefined;
          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes

              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.

                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                      // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }
              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true;
              // Simply update nodeValue on the original node to
              // change the text value
              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }
          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home
          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}

        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end
        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          // MORPH
          if (!skipFrom) {
            addChild(fromEl, matchingFromEl);
          }
          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }
            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }
            addChild(fromEl, curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }
        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);

      // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, childComponents, findChildComponent, getKeyFromElement, externalMutationTracker) {
  var childComponentMap = new Map();
  childComponents.forEach(function (childComponent) {
    childComponentMap.set(childComponent.element, childComponent);
  });
  morphdom(rootFromElement, rootToElement, {
    getNodeKey: function getNodeKey(node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      if (externalMutationTracker.wasElementAdded(node)) {
        return 'added_element_' + Math.random();
      }
      return getKeyFromElement(node);
    },
    onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
      if (fromEl === rootFromElement) {
        return true;
      }
      if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
        if (typeof fromEl.__x !== 'undefined') {
          if (!window.Alpine) {
            throw new Error('Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.');
          }
          if (typeof window.Alpine.morph !== 'function') {
            throw new Error('Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.');
          }
          window.Alpine.morph(fromEl.__x, toEl);
        }
        if (childComponentMap.has(fromEl)) {
          var childComponent = childComponentMap.get(fromEl);
          childComponent.updateFromNewElementFromParentRender(toEl);
          return false;
        }
        if (modifiedFieldElements.includes(fromEl)) {
          setValueOnElement(toEl, getElementValue(fromEl));
        }
        var elementChanges = externalMutationTracker.getChangedElement(fromEl);
        if (elementChanges) {
          elementChanges.applyToElement(toEl);
        }
        if (fromEl.nodeName.toUpperCase() !== 'OPTION' && fromEl.isEqualNode(toEl)) {
          var normalizedFromEl = cloneHTMLElement(fromEl);
          normalizeAttributesForComparison(normalizedFromEl);
          var normalizedToEl = cloneHTMLElement(toEl);
          normalizeAttributesForComparison(normalizedToEl);
          if (normalizedFromEl.isEqualNode(normalizedToEl)) {
            return false;
          }
        }
      }
      return !fromEl.hasAttribute('data-live-ignore');
    },
    onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      if (externalMutationTracker.wasElementAdded(node)) {
        return false;
      }
      return !node.hasAttribute('data-live-ignore');
    }
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager;
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
  return BackendResponse;
}();
var ChangingItemsTracker = /*#__PURE__*/function () {
  function ChangingItemsTracker() {
    _classCallCheck(this, ChangingItemsTracker);
    this.changedItems = new Map();
    this.removedItems = new Map();
  }
  _createClass(ChangingItemsTracker, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) {
          return;
        }
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        trueOriginalValue = originalRecord.original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) {
          return;
        }
      }
      if (!this.removedItems.has(itemName)) {
        this.removedItems.set(itemName, {
          original: trueOriginalValue
        });
      }
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      var changedItems = [];
      this.changedItems.forEach(function (value, key) {
        changedItems.push({
          name: key,
          value: value["new"]
        });
      });
      return changedItems;
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      var removedItems = [];
      this.removedItems.forEach(function (value, key) {
        removedItems.push(key);
      });
      return removedItems;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
  return ChangingItemsTracker;
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = [];
    this.removedClasses = [];
    this.styleChanges = new ChangingItemsTracker();
    this.attributeChanges = new ChangingItemsTracker();
  }
  _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (this.removedClasses.includes(className)) {
        this.removedClasses = this.removedClasses.filter(function (name) {
          return name !== className;
        });
        return;
      }
      if (!this.addedClasses.includes(className)) {
        this.addedClasses.push(className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (this.addedClasses.includes(className)) {
        this.addedClasses = this.addedClasses.filter(function (name) {
          return name !== className;
        });
        return;
      }
      if (!this.removedClasses.includes(className)) {
        this.removedClasses.push(className);
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return this.addedClasses;
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return this.removedClasses;
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      this.addedClasses.forEach(function (className) {
        element.classList.add(className);
      });
      this.removedClasses.forEach(function (className) {
        element.classList.remove(className);
      });
      this.styleChanges.getChangedItems().forEach(function (change) {
        element.style.setProperty(change.name, change.value);
        return;
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.length === 0 && this.removedClasses.length === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
  return ElementChanges;
}();
var ExternalMutationTracker = /*#__PURE__*/function () {
  function ExternalMutationTracker(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker);
    this.changedElements = new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  _createClass(ExternalMutationTracker, [{
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = new WeakMap();
      var _iterator = _createForOfIteratorHelper(mutations),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) {
            continue;
          }
          if (this.isElementAddedByTranslation(element)) {
            continue;
          }
          var isChangeInAddedElement = false;
          var _iterator2 = _createForOfIteratorHelper(this.addedElements),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var addedElement = _step2.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (isChangeInAddedElement) {
            continue;
          }
          switch (mutation.type) {
            case 'childList':
              this.handleChildListMutation(mutation);
              break;
            case 'attributes':
              if (!handledAttributeMutations.has(element)) {
                handledAttributeMutations.set(element, []);
              }
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this5 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.removedElements.includes(node)) {
          _this5.removedElements.splice(_this5.removedElements.indexOf(node), 1);
          return;
        }
        if (_this5.isElementAddedByTranslation(node)) {
          return;
        }
        _this5.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.addedElements.includes(node)) {
          _this5.addedElements.splice(_this5.addedElements.indexOf(node), 1);
          return;
        }
        _this5.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case 'class':
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case 'style':
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue;
      var previousValues = previousValue ? previousValue.split(' ') : [];
      previousValues.forEach(function (value, index) {
        var trimmedValue = value.trim();
        if (trimmedValue !== '') {
          previousValues[index] = trimmedValue;
        } else {
          previousValues.splice(index, 1);
        }
      });
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute('style') || '';
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === undefined || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === undefined ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) {
        oldValue = '';
      }
      if (newValue === attributeName) {
        newValue = '';
      }
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) {
          return;
        }
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) {
        return;
      }
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(';').forEach(function (style) {
        var parts = style.split(':');
        if (parts.length === 1) {
          return;
        }
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(':').trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === 'FONT' && element.getAttribute('style') === 'vertical-align: inherit;';
    }
  }]);
  return ExternalMutationTracker;
}();
var ChildComponentWrapper = /*#__PURE__*/_createClass(function ChildComponentWrapper(component, modelBindings) {
  _classCallCheck(this, ChildComponentWrapper);
  this.component = component;
  this.modelBindings = modelBindings;
});
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, componentFinder, fingerprint, id, backend, elementDriver) {
    var _this6 = this;
    _classCallCheck(this, Component);
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.children = new Map();
    this.parent = null;
    this.element = element;
    this.name = name;
    this.componentFinder = componentFinder;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.fingerprint = fingerprint;
    this.listeners = new Map();
    listeners.forEach(function (listener) {
      var _a;
      if (!_this6.listeners.has(listener.event)) {
        _this6.listeners.set(listener.event, []);
      }
      (_a = _this6.listeners.get(listener.event)) === null || _a === void 0 ? void 0 : _a.push(listener.action);
    });
    this.valueStore = new ValueStore(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this6);
    });
    this.externalMutationTracker.start();
    this.onChildComponentModelUpdate = this.onChildComponentModelUpdate.bind(this);
  }
  _createClass(Component, [{
    key: "_swapBackend",
    value: function _swapBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model name \"".concat(model, "\"."));
      }
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var modelBindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children.set(child.id, new ChildComponentWrapper(child, modelBindings));
      child.parent = this;
      child.on('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children["delete"](child.id);
      child.parent = null;
      child.off('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = new Map();
      this.children.forEach(function (childComponent, id) {
        children.set(id, childComponent.component);
      });
      return children;
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      return this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      var components = this.componentFinder(this, emitUp, matchingName);
      components.forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this7 = this;
      if (!this.listeners.has(name)) {
        return;
      }
      var actions = this.listeners.get(name) || [];
      actions.forEach(function (action) {
        _this7.action(action, data, 1);
      });
    }
  }, {
    key: "updateFromNewElementFromParentRender",
    value: function updateFromNewElementFromParentRender(toEl) {
      var props = this.elementDriver.getComponentProps(toEl);
      if (props === null) {
        return;
      }
      var isChanged = this.valueStore.storeNewPropsFromParent(props);
      var fingerprint = toEl.dataset.liveFingerprintValue;
      if (fingerprint !== undefined) {
        this.fingerprint = fingerprint;
      }
      if (isChanged) {
        this.render();
      }
    }
  }, {
    key: "onChildComponentModelUpdate",
    value: function onChildComponentModelUpdate(modelName, value, childComponent) {
      var _this8 = this;
      if (!childComponent.id) {
        throw new Error('Missing id');
      }
      var childWrapper = this.children.get(childComponent.id);
      if (!childWrapper) {
        throw new Error('Missing child');
      }
      childWrapper.modelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        _this8.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== 'undefined' && !this.element.closest('[data-turbo="false"]');
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this9 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.pendingFiles); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (value.files) {
          filesToSend[key] = value.files;
        }
      }
      this.backendRequest = this.backend.makeRequest(this.valueStore.getOriginalProps(), this.pendingActions, this.valueStore.getDirtyProps(), this.getChildrenFingerprints(), this.valueStore.getUpdatedPropsFromParent(), filesToSend);
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var backendResponse, html, _i3, _Object$values, input, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this9.backendRequest = null;
                backendResponse = new BackendResponse(response);
                _context2.next = 4;
                return backendResponse.getBody();
              case 4:
                html = _context2.sent;
                for (_i3 = 0, _Object$values = Object.values(_this9.pendingFiles); _i3 < _Object$values.length; _i3++) {
                  input = _Object$values[_i3];
                  input.value = '';
                }
                headers = backendResponse.response.headers;
                if (!(headers.get('Content-Type') !== 'application/vnd.live-component+html' && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 14;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this9.valueStore.pushPendingPropsBackToDirty();
                _this9.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this9.renderError(html);
                }
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 14:
                _this9.processRerender(html, backendResponse);
                thisPromiseResolve(backendResponse);
                if (_this9.isRequestPending) {
                  _this9.isRequestPending = false;
                  _this9.performRequest();
                }
                return _context2.abrupt("return", response);
              case 18:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this10 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (this.isTurboEnabled()) {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this10.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error('There was a problem with the component HTML returned:');
        throw error;
      }
      var newProps = this.elementDriver.getComponentProps(newElement);
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit(newElement);
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch(newElement);
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this10.valueStore);
      }, Array.from(this.getChildren().values()), this.elementDriver.findChildComponentElement, this.elementDriver.getKeyFromElement, this.externalMutationTracker);
      this.externalMutationTracker.start();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this10.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref4) {
        var event = _ref4.event,
          data = _ref4.data,
          target = _ref4.target,
          componentName = _ref4.componentName;
        if (target === 'up') {
          _this10.emitUp(event, data, componentName);
          return;
        }
        if (target === 'self') {
          _this10.emitSelf(event, data);
          return;
        }
        _this10.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref5) {
        var event = _ref5.event,
          payload = _ref5.payload;
        _this10.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this11 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this11.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.children.forEach(function (childComponent) {
        var child = childComponent.component;
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this12 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this12.nextRequestPromiseResolve = resolve;
      });
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this13 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this13.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest;
}();
var RequestBuilder = /*#__PURE__*/function () {
  function RequestBuilder(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, RequestBuilder);
    this.url = url;
    this.csrfToken = csrfToken;
  }
  _createClass(RequestBuilder, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html',
        'X-Requested-With': 'XMLHttpRequest'
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set('props', JSON.stringify(props));
        params.set('updated', JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) {
          params.set('propsFromParent', JSON.stringify(updatedPropsFromParent));
        }
        if (hasFingerprints) {
          params.set('children', JSON.stringify(children));
        }
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) {
          requestData.propsFromParent = updatedPropsFromParent;
        }
        if (hasFingerprints) {
          requestData.children = children;
        }
        if (this.csrfToken && (actions.length || totalFiles)) {
          fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
        }
        if (actions.length > 0) {
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        var formData = new FormData();
        formData.append('data', JSON.stringify(requestData));
        for (var _i4 = 0, _Object$entries3 = Object.entries(files); _i4 < _Object$entries3.length; _i4++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) {
            formData.append(key, value[i]);
          }
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      var urlEncodedJsonData = new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
  return RequestBuilder;
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Backend);
    this.requestBuilder = new RequestBuilder(url, csrfToken);
  }
  _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
  return Backend;
}();
var StandardElementDriver = /*#__PURE__*/function () {
  function StandardElementDriver() {
    _classCallCheck(this, StandardElementDriver);
  }
  _createClass(StandardElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(rootElement) {
      var _a;
      var propsJson = (_a = rootElement.dataset.livePropsValue) !== null && _a !== void 0 ? _a : '{}';
      return JSON.parse(propsJson);
    }
  }, {
    key: "findChildComponentElement",
    value: function findChildComponentElement(id, element) {
      return element.querySelector("[data-live-id=".concat(id, "]"));
    }
  }, {
    key: "getKeyFromElement",
    value: function getKeyFromElement(element) {
      return element.dataset.liveId || null;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit(element) {
      var _a;
      var eventsJson = (_a = element.dataset.liveEmit) !== null && _a !== void 0 ? _a : '[]';
      return JSON.parse(eventsJson);
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch(element) {
      var _a;
      var eventsJson = (_a = element.dataset.liveBrowserDispatch) !== null && _a !== void 0 ? _a : '[]';
      return JSON.parse(eventsJson);
    }
  }]);
  return StandardElementDriver;
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this14 = this;
      component.on('loading.state:started', function (element, request) {
        _this14.startLoading(element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this14.finishLoading(element);
      });
      this.finishLoading(component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(targetElement, backendRequest) {
      this.handleLoadingToggle(true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(targetElement) {
      this.handleLoadingToggle(false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(isLoading, targetElement, backendRequest) {
      var _this15 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(targetElement).forEach(function (_ref6) {
        var element = _ref6.element,
          directives = _ref6.directives;
        if (isLoading) {
          _this15.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this15.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this15.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this16 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        var _a;
        if (validModifiers.has(modifier.name)) {
          var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            _this16.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this16.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this16.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this16.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this16.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this16.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(element) {
      var loadingDirectives = [];
      element.querySelectorAll('[data-loading]').forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'revert';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList2;
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        this.removeAttributes(element, ['class']);
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this17 = this;
      component.on('model:set', function (modelName) {
        _this17.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin;
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this18.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this18.isConnected = true;
      });
      component.on('disconnect', function () {
        _this18.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin;
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this19 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref7) {
        var actionName = _ref7.actionName,
          duration = _ref7.duration;
        _this19.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this20 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this20.component.render();
        };
      } else {
        callback = function callback() {
          _this20.component.action(actionName, {}, 0);
        };
      }
      var timer = setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector;
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this21 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this21.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this21.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this21.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this22 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this22.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin;
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this23 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this23.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin;
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry() {
    _classCallCheck(this, ComponentRegistry);
    this.componentMapByElement = new WeakMap();
    this.componentMapByComponent = new Map();
  }
  _createClass(ComponentRegistry, [{
    key: "registerComponent",
    value: function registerComponent(element, component) {
      this.componentMapByElement.set(element, component);
      this.componentMapByComponent.set(component, component.name);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(component) {
      this.componentMapByElement["delete"](component.element);
      this.componentMapByComponent["delete"](component);
    }
  }, {
    key: "getComponent",
    value: function getComponent(element) {
      var _this24 = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        var maxCount = 10;
        var interval = setInterval(function () {
          var component = _this24.componentMapByElement.get(element);
          if (component) {
            clearInterval(interval);
            resolve(component);
          }
          count++;
          if (count > maxCount) {
            clearInterval(interval);
            reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
          }
        }, 5);
      });
    }
  }, {
    key: "findComponents",
    value: function findComponents(currentComponent, onlyParents, onlyMatchName) {
      var components = [];
      this.componentMapByComponent.forEach(function (componentName, component) {
        if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) {
          return;
        }
        if (onlyMatchName && componentName !== onlyMatchName) {
          return;
        }
        components.push(component);
      });
      return components;
    }
  }]);
  return ComponentRegistry;
}();
var getComponent = function getComponent(element) {
  return LiveControllerDefault.componentRegistry.getComponent(element);
};
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  _inherits(LiveControllerDefault, _Controller);
  var _super = _createSuper(LiveControllerDefault);
  function LiveControllerDefault() {
    var _this25;
    _classCallCheck(this, LiveControllerDefault);
    _this25 = _super.apply(this, arguments);
    _this25.pendingActionTriggerModelElement = null;
    _this25.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this25.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this25.handleChangeEvent(event);
      }
    }, {
      event: 'live:connect',
      callback: function callback(event) {
        return _this25.handleConnectedControllerEvent(event);
      }
    }];
    _this25.pendingFiles = {};
    return _this25;
  }
  _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      var _this26 = this;
      this.handleDisconnectedChildControllerEvent = this.handleDisconnectedChildControllerEvent.bind(this);
      var id = this.element.dataset.liveId || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, function (currentComponent, onlyParents, onlyMatchName) {
        return LiveControllerDefault.componentRegistry.findComponents(currentComponent, onlyParents, onlyMatchName);
      }, this.fingerprintValue, id, new Backend(this.urlValue, this.csrfValue), new StandardElementDriver());
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin()];
      plugins.forEach(function (plugin) {
        _this26.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this27 = this;
      LiveControllerDefault.componentRegistry.registerComponent(this.element, this.component);
      this.component.connect();
      this.elementEventListeners.forEach(function (_ref8) {
        var event = _ref8.event,
          callback = _ref8.callback;
        _this27.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this28 = this;
      LiveControllerDefault.componentRegistry.unregisterComponent(this.component);
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref9) {
        var event = _ref9.event,
          callback = _ref9.callback;
        _this28.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      }
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this29 = this;
      var rawAction = event.currentTarget.dataset.actionName;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = new Map();
        validModifiers.set('prevent', function () {
          event.preventDefault();
        });
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? parseInt(modifier.value) : true;
        });
        validModifiers.set('files', function (modifier) {
          if (!modifier.value) {
            pendingFiles = _this29.pendingFiles;
          } else if (_this29.pendingFiles[modifier.value]) {
            pendingFiles[modifier.value] = _this29.pendingFiles[modifier.value];
          }
        });
        directive.modifiers.forEach(function (modifier) {
          var _a;
          if (validModifiers.has(modifier.name)) {
            var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        for (var _i5 = 0, _Object$entries4 = Object.entries(pendingFiles); _i5 < _Object$entries4.length; _i5++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) {
            _this29.component.files(key, input);
          }
          delete _this29.pendingFiles[key];
        }
        _this29.component.action(directive.action, directive.named, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this29.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this30 = this;
      this.getEmitDirectives(event).forEach(function (_ref10) {
        var name = _ref10.name,
          data = _ref10.data,
          nameMatch = _ref10.nameMatch;
        _this30.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this31 = this;
      this.getEmitDirectives(event).forEach(function (_ref11) {
        var name = _ref11.name,
          data = _ref11.data,
          nameMatch = _ref11.nameMatch;
        _this31.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this32 = this;
      this.getEmitDirectives(event).forEach(function (_ref12) {
        var name = _ref12.name,
          data = _ref12.data;
        _this32.component.emitSelf(name, data);
      });
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var element = event.currentTarget;
      if (!element.dataset.event) {
        throw new Error("No data-event attribute found on element: ".concat(getElementAsTagText(element)));
      }
      var eventInfo = element.dataset.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'name':
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: directive.named,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      var _a;
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      if (element instanceof HTMLInputElement && element.type === 'file') {
        var key = element.name;
        if ((_a = element.files) === null || _a === void 0 ? void 0 : _a.length) {
          this.pendingFiles[key] = element;
        } else if (this.pendingFiles[key]) {
          delete this.pendingFiles[key];
        }
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "handleConnectedControllerEvent",
    value: function handleConnectedControllerEvent(event) {
      if (event.target === this.element) {
        return;
      }
      var childController = event.detail.controller;
      if (childController.component.getParent()) {
        return;
      }
      var modelDirectives = getAllModelDirectiveFromElements(childController.element);
      var modelBindings = modelDirectives.map(getModelBinding);
      this.component.addChild(childController.component, modelBindings);
      childController.element.addEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
    }
  }, {
    key: "handleDisconnectedChildControllerEvent",
    value: function handleDisconnectedChildControllerEvent(event) {
      var childController = event.detail.controller;
      childController.element.removeEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
      if (childController.component.getParent() !== this.component) {
        return;
      }
      this.component.removeChild(childController.component);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }]);
  return LiveControllerDefault;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: Object,
  csrf: String,
  listeners: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  id: String,
  fingerprint: {
    type: String,
    "default": ''
  }
};
LiveControllerDefault.componentRegistry = new ComponentRegistry();


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-5b66d3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFO1FBQUVpbUIsTUFBTSxFQUFOQSxNQUFNO1FBQUVoWSxNQUFNLEVBQUUsTUFBTTtRQUFFNm1CLFVBQVUsRUFBVkEsVUFBVTtRQUFFNU8sT0FBTyxFQUFFMk87TUFBVSxDQUFDLENBQUM7SUFDbkY7RUFBQztFQUFBLE9BQUF0RCxxQkFBQTtBQUFBLEVBM08rQjlyQiwyREFBVTtBQTZPOUM4ckIscUJBQXFCLENBQUMvekIsTUFBTSxHQUFHO0VBQzNCd0MsSUFBSSxFQUFFc0UsTUFBTTtFQUNaNmtCLEdBQUcsRUFBRTdrQixNQUFNO0VBQ1hQLEtBQUssRUFBRTlJLE1BQU07RUFDYis1QixJQUFJLEVBQUUxd0IsTUFBTTtFQUNaeWIsU0FBUyxFQUFFO0lBQUVyakIsSUFBSSxFQUFFOEcsS0FBSztJQUFFLFdBQVM7RUFBRyxDQUFDO0VBQ3ZDaWUsUUFBUSxFQUFFO0lBQUUva0IsSUFBSSxFQUFFa0ksTUFBTTtJQUFFLFdBQVM7RUFBSSxDQUFDO0VBQ3hDa04sRUFBRSxFQUFFeE4sTUFBTTtFQUNWMmIsV0FBVyxFQUFFO0lBQUV2akIsSUFBSSxFQUFFNEgsTUFBTTtJQUFFLFdBQVM7RUFBRztBQUM3QyxDQUFDO0FBQ0RpdEIscUJBQXFCLENBQUNDLGlCQUFpQixHQUFHLElBQUlkLGlCQUFpQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyNEZqRTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzJztcbmltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlLm1pbi5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmpzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvY2hlY2tvdXQuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3Qgc3RyaXBlID0gU3RyaXBlKFwicGtfdGVzdF81MU9LcUNIRTlWUGZlQ0d5UG9rVUhOWkE0R09COXhuYXpzWTB3aWs5WFl0S0FzRm1oeG80dGNDczNvZUZjakhsRHh1TW1ZQWZJS0JabFU4akN0Q3BwWnZ6bjAwOFQyN0pWcEZcIik7XHJcblxyXG5sZXQgY2xpZW50U2VjcmV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrb3V0JykuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWVudC1zZWNyZXQnKTtcclxuXHJcbmluaXRpYWxpemUoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSBcclxue1xyXG4gICAgY29uc3QgY2hlY2tvdXQgPSBhd2FpdCBzdHJpcGUuaW5pdEVtYmVkZGVkQ2hlY2tvdXQoe2NsaWVudFNlY3JldH0pO1xyXG5cclxuICAgIGNoZWNrb3V0Lm1vdW50KCcjY2hlY2tvdXQnKTtcclxufSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE5hbWVkQXJndW1lbnRzID0ge307XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG5hbWVkOiBjdXJyZW50TmFtZWRBcmd1bWVudHMsXG4gICAgICAgICAgICBtb2RpZmllcnM6IGN1cnJlbnRNb2RpZmllcnMsXG4gICAgICAgICAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtaXhlZEFyZ1R5cGVzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vcm1hbCBhbmQgbmFtZWQgYXJndW1lbnRzIGNhbm5vdCBiZSBtaXhlZCBpbnNpZGUgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCJgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50c1tjdXJyZW50QXJndW1lbnROYW1lLnRyaW0oKV0gPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50TmFtZWRBcmd1bWVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBuYW1lZCBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGEgY2xvc2luZyBcIilcIiBhZnRlciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9XCI/YCk7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU3BhY2VkQXJyYXkocGFydHMpIHtcbiAgICBjb25zdCBmaW5hbFBhcnRzID0gW107XG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBmaW5hbFBhcnRzLnB1c2goLi4ucGFydC5zcGxpdCgnICcpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxQYXJ0cztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgnXScsICcnKTtcbiAgICB9KVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChtb2RlbE5hbWVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBPYmplY3QudmFsdWVzKG1vZGVsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgY29tcG9uZW50LmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICAgICAgPyBlbGVtZW50Lm91dGVySFRNTC5zbGljZSgwLCBlbGVtZW50Lm91dGVySFRNTC5pbmRleE9mKGVsZW1lbnQuaW5uZXJIVE1MKSlcbiAgICAgICAgOiBlbGVtZW50Lm91dGVySFRNTDtcbn1cbmNvbnN0IGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjdXJyZW50VmFsdWVzKSB7XG4gICAgY29uc3QgZmluYWxWYWx1ZXMgPSBbLi4uY3VycmVudFZhbHVlc107XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGZpbmFsVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbFZhbHVlcztcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgZmluYWxWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xufTtcbmNvbnN0IGlucHV0VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xufTtcblxuZnVuY3Rpb24gZ2V0RGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxuY29uc3QgcGFyc2VEZWVwRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCBmaW5hbERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcbiAgICBjb25zdCBwYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEgPSBjdXJyZW50TGV2ZWxEYXRhW3BhcnRzW2ldXTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxLZXkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhLFxuICAgICAgICBmaW5hbERhdGEsXG4gICAgICAgIGZpbmFsS2V5LFxuICAgICAgICBwYXJ0cyxcbiAgICB9O1xufTtcblxuY2xhc3MgVmFsdWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXREZWVwRGF0YSh0aGlzLnByb3BzLCBub3JtYWxpemVkTmFtZSk7XG4gICAgfVxuICAgIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50KTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGlydHlQcm9wcyk7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wZW5kaW5nUHJvcHMpLCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciB0b05vZGVBdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyBkb2N1bWVudC1mcmFnbWVudHMgZG9udCBoYXZlIGF0dHJpYnV0ZXMgc28gbGV0cyBub3QgZG8gYW55dGhpbmdcbiAgICBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IGZyb21Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gdG9Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IHRvTm9kZUF0dHJzW2ldO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT09ICd4bWxucycpe1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTsgLy8gSXQncyBub3QgYWxsb3dlZCB0byBzZXQgYW4gYXR0cmlidXRlIHdpdGggdGhlIFhNTE5TIG5hbWVzcGFjZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGB4bWxuc2AgcHJlZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0XG4gICAgLy8gd2VyZW4ndCBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgdmFyIGZyb21Ob2RlQXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yICh2YXIgZCA9IGZyb21Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgYXR0ciA9IGZyb21Ob2RlQXR0cnNbZF07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmFuZ2U7IC8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciBOU19YSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblxudmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbnZhciBIQVNfVEVNUExBVEVfU1VQUE9SVCA9ICEhZG9jICYmICdjb250ZW50JyBpbiBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBIQVNfUkFOR0VfU1VQUE9SVCA9ICEhZG9jICYmIGRvYy5jcmVhdGVSYW5nZSAmJiAnY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50JyBpbiBkb2MuY3JlYXRlUmFuZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cikge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSBkb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2MuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbi8qKlxuICogVGhpcyBpcyBhYm91dCB0aGUgc2FtZVxuICogdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICogcmV0dXJuIGh0bWwuYm9keS5maXJzdENoaWxkO1xuICpcbiAqIEBtZXRob2QgdG9FbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGlmIChIQVNfVEVNUExBVEVfU1VQUE9SVCkge1xuICAgICAgLy8gYXZvaWQgcmVzdHJpY3Rpb25zIG9uIGNvbnRlbnQgZm9yIHRoaW5ncyBsaWtlIGA8dHI+PHRoPkhpPC90aD48L3RyPmAgd2hpY2hcbiAgICAgIC8vIGNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCBkb2Vzbid0IHN1cHBvcnRcbiAgICAgIC8vIDx0ZW1wbGF0ZT4gc3VwcG9ydCBub3QgYXZhaWxhYmxlIGluIElFXG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKTtcbiAgICB9IGVsc2UgaWYgKEhBU19SQU5HRV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0d28gbm9kZSdzIG5hbWVzIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBOT1RFOiBXZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgYG5hbWVzcGFjZVVSSWAgYmVjYXVzZSB5b3Ugd2lsbCBuZXZlciBmaW5kIHR3byBIVE1MIGVsZW1lbnRzIHdpdGggdGhlIHNhbWVcbiAqICAgICAgIG5vZGVOYW1lIGFuZCBkaWZmZXJlbnQgbmFtZXNwYWNlIFVSSXMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGIgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlTm9kZU5hbWVzKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBmcm9tTm9kZU5hbWUgPSBmcm9tRWwubm9kZU5hbWU7XG4gICAgdmFyIHRvTm9kZU5hbWUgPSB0b0VsLm5vZGVOYW1lO1xuICAgIHZhciBmcm9tQ29kZVN0YXJ0LCB0b0NvZGVTdGFydDtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnJvbUNvZGVTdGFydCA9IGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuICAgIHRvQ29kZVN0YXJ0ID0gdG9Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdmlydHVhbCBET00gbm9kZSBvciBTVkcgbm9kZSB0aGVuIHdlIG1heVxuICAgIC8vIG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZSBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZVxuICAgIC8vIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgIC8vIGFyZSBjb252ZXJ0ZWQgdG8gdXBwZXIgY2FzZVxuICAgIGlmIChmcm9tQ29kZVN0YXJ0IDw9IDkwICYmIHRvQ29kZVN0YXJ0ID49IDk3KSB7IC8vIGZyb20gaXMgdXBwZXIgYW5kIHRvIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRvQ29kZVN0YXJ0IDw9IDkwICYmIGZyb21Db2RlU3RhcnQgPj0gOTcpIHsgLy8gdG8gaXMgdXBwZXIgYW5kIGZyb20gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIHRvTm9kZU5hbWUgPT09IGZyb21Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsIG5hbWUpIHtcbiAgICBpZiAoZnJvbUVsW25hbWVdICE9PSB0b0VsW25hbWVdKSB7XG4gICAgICAgIGZyb21FbFtuYW1lXSA9IHRvRWxbbmFtZV07XG4gICAgICAgIGlmIChmcm9tRWxbbmFtZV0pIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZnJvbUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBwYXJlbnROYW1lID0gcGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ1NFTEVDVCcgJiYgIXBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgJiYgIXRvRWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgTVMgRWRnZSBidWcgd2hlcmUgdGhlICdzZWxlY3RlZCcgYXR0cmlidXRlIGNhbiBvbmx5IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgaWYgc2V0IHRvIGEgbm9uLWVtcHR5IHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjA4NzY3OS9cbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXNldCBzZWxlY3QgZWxlbWVudCdzIHNlbGVjdGVkSW5kZXggdG8gLTEsIG90aGVyd2lzZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gZnJvbUVsLnNlbGVjdGVkIHVzaW5nIHRoZSBzeW5jQm9vbGVhbkF0dHJQcm9wIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvcnJlY3Qgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCBpbiB0aGUgU0VMRUNUIHNwZWNpYWwgaGFuZGxlciBiZWxvdy5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBzZXRzIHRoZSBwbGFjZWhvbGRlciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG5vZGUgdmFsdWUgYW5kIHZpc2UgdmVyc2EuIFRoaXMgaWdub3JlcyBhbiBlbXB0eSB1cGRhdGUuXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBmaXJzdENoaWxkLm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09IG5ld1ZhbHVlIHx8ICghbmV3VmFsdWUgJiYgb2xkVmFsdWUgPT0gZnJvbUVsLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU0VMRUNUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbG9vcCB0aHJvdWdoIGNoaWxkcmVuIG9mIGZyb21FbCwgbm90IHRvRWwgc2luY2Ugbm9kZXMgY2FuIGJlIG1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRvRWwgdG8gZnJvbUVsIGRpcmVjdGx5IHdoZW4gbW9ycGhpbmcuXG4gICAgICAgICAgICAvLyBBdCB0aGUgdGltZSB0aGlzIHNwZWNpYWwgaGFuZGxlciBpcyBpbnZva2VkLCBhbGwgY2hpbGRyZW4gaGF2ZSBhbHJlYWR5IGJlZW4gbW9ycGhlZFxuICAgICAgICAgICAgLy8gYW5kIGFwcGVuZGVkIHRvIC8gcmVtb3ZlZCBmcm9tIGZyb21FbCwgc28gdXNpbmcgZnJvbUVsIGhlcmUgaXMgc2FmZSBhbmQgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9wdGdyb3VwO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lICYmIGN1ckNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJDaGlsZCAmJiBvcHRncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxID0gMTE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICBpZiAobm9kZSkge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpIHx8IG5vZGUuaWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gbW9ycGhkb20oZnJvbU5vZGUsIHRvTm9kZSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGZyb21Ob2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgIHRvTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG4gICAgICAgIHRvTm9kZS5pbm5lckhUTUwgPSB0b05vZGVIdG1sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgdG9Ob2RlID0gdG9Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cblxuICAgIHZhciBnZXROb2RlS2V5ID0gb3B0aW9ucy5nZXROb2RlS2V5IHx8IGRlZmF1bHRHZXROb2RlS2V5O1xuICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlQWRkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlRWxVcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBvbkVsVXBkYXRlZCA9IG9wdGlvbnMub25FbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25Ob2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbk5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBza2lwRnJvbUNoaWxkcmVuID0gb3B0aW9ucy5za2lwRnJvbUNoaWxkcmVuIHx8IG5vb3A7XG4gICAgdmFyIGFkZENoaWxkID0gb3B0aW9ucy5hZGRDaGlsZCB8fCBmdW5jdGlvbihwYXJlbnQsIGNoaWxkKXsgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7IH07XG4gICAgdmFyIGNoaWxkcmVuT25seSA9IG9wdGlvbnMuY2hpbGRyZW5Pbmx5ID09PSB0cnVlO1xuXG4gICAgLy8gVGhpcyBvYmplY3QgaXMgdXNlZCBhcyBhIGxvb2t1cCB0byBxdWlja2x5IGZpbmQgYWxsIGtleWVkIGVsZW1lbnRzIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5ZWRSZW1vdmFsTGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYWRkS2V5ZWRSZW1vdmFsKGtleSkge1xuICAgICAga2V5ZWRSZW1vdmFsTGlzdC5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcblxuICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAoc2tpcEtleWVkTm9kZXMgJiYgKGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpKSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHNraXBwaW5nIGtleWVkIG5vZGVzIHRoZW4gd2UgYWRkIHRoZSBrZXlcbiAgICAgICAgICAgIC8vIHRvIGEgbGlzdCBzbyB0aGF0IGl0IGNhbiBiZSBoYW5kbGVkIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcG9ydCB0aGUgbm9kZSBhcyBkaXNjYXJkZWQgaWYgaXQgaXMgbm90IGtleWVkLiBXZSBkbyB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGF0IHRoZSBlbmQgd2UgbG9vcCB0aHJvdWdoIGFsbCBrZXllZCBlbGVtZW50cyB0aGF0IHdlcmUgdW5tYXRjaGVkXG4gICAgICAgICAgICAvLyBhbmQgdGhlbiBkaXNjYXJkIHRoZW0gaW4gb25lIGZpbmFsIHBhc3MuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMoY3VyQ2hpbGQsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAqXG4gICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBza2lwS2V5ZWROb2RlcyBJZiB0cnVlIHRoZW4gZWxlbWVudHMgd2l0aCBrZXlzIHdpbGwgYmUgc2tpcHBlZCBhbmQgbm90IGRpc2NhcmRlZC5cbiAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgIGlmIChvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgb25Ob2RlRGlzY2FyZGVkKG5vZGUpO1xuICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpO1xuICAgIH1cblxuICAgIC8vIC8vIFRyZWVXYWxrZXIgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKHJvb3QpIHtcbiAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIC8vICAgICAgICAgcm9vdCxcbiAgICAvLyAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAvL1xuICAgIC8vICAgICB2YXIgZWw7XG4gICAgLy8gICAgIHdoaWxlKChlbCA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSkpIHtcbiAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgLy8gICAgIHZhciBlbDtcbiAgICAvLyAgICAgd2hpbGUoKGVsID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdhbGsgcmVjdXJzaXZlbHlcbiAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4VHJlZShmcm9tTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjdXJDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgdW5tYXRjaGVkRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2tleV07XG4gICAgICAgICAgLy8gaWYgd2UgZmluZCBhIGR1cGxpY2F0ZSAjaWQgbm9kZSBpbiBjYWNoZSwgcmVwbGFjZSBgZWxgIHdpdGggY2FjaGUgdmFsdWVcbiAgICAgICAgICAvLyBhbmQgbW9ycGggaXQgdG8gdGhlIGNoaWxkIG5vZGUuXG4gICAgICAgICAgaWYgKHVubWF0Y2hlZEZyb21FbCAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckNoaWxkLCB1bm1hdGNoZWRGcm9tRWwpKSB7XG4gICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgIG1vcnBoRWwodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGNhbGwgZm9yIGN1ckNoaWxkIGFuZCBpdCdzIGNoaWxkcmVuIHRvIHNlZSBpZiB3ZSBmaW5kIHNvbWV0aGluZyBpblxuICAgICAgICAgIC8vIGZyb21Ob2Rlc0xvb2t1cFxuICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJDaGlsZCA9IG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBcInRvIG5vZGVzXCIuIElmIGN1ckZyb21Ob2RlQ2hpbGQgaXNcbiAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgLy8gdG8gYmUgcmVtb3ZlZFxuICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgdmFyIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmICgoY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpKSkge1xuICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JwaEVsKGZyb21FbCwgdG9FbCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICB2YXIgdG9FbEtleSA9IGdldE5vZGVLZXkodG9FbCk7XG5cbiAgICAgIGlmICh0b0VsS2V5KSB7XG4gICAgICAgIC8vIElmIGFuIGVsZW1lbnQgd2l0aCBhbiBJRCBpcyBiZWluZyBtb3JwaGVkIHRoZW4gaXQgd2lsbCBiZSBpbiB0aGUgZmluYWxcbiAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICBkZWxldGUgZnJvbU5vZGVzTG9va3VwW3RvRWxLZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICBpZiAob25CZWZvcmVFbFVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudCBmaXJzdFxuICAgICAgICBtb3JwaEF0dHJzKGZyb21FbCwgdG9FbCk7XG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIG9uRWxVcGRhdGVkKGZyb21FbCk7XG5cbiAgICAgICAgaWYgKG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyb21FbC5ub2RlTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGVjaWFsRWxIYW5kbGVycy5URVhUQVJFQShmcm9tRWwsIHRvRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgICB2YXIgc2tpcEZyb20gPSBza2lwRnJvbUNoaWxkcmVuKGZyb21FbCk7XG4gICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGN1clRvTm9kZUtleTtcbiAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgIHZhciB0b05leHRTaWJsaW5nO1xuICAgICAgdmFyIG1hdGNoaW5nRnJvbUVsO1xuXG4gICAgICAvLyB3YWxrIHRoZSBjaGlsZHJlblxuICAgICAgb3V0ZXI6IHdoaWxlIChjdXJUb05vZGVDaGlsZCkge1xuICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIGN1clRvTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyVG9Ob2RlQ2hpbGQpO1xuXG4gICAgICAgIC8vIHdhbGsgdGhlIGZyb21Ob2RlIGNoaWxkcmVuIGFsbCB0aGUgd2F5IHRocm91Z2hcbiAgICAgICAgd2hpbGUgKCFza2lwRnJvbSAmJiBjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgIC8vIHRoaXMgbWVhbnMgaWYgdGhlIGN1ckZyb21Ob2RlQ2hpbGQgZG9lc250IGhhdmUgYSBtYXRjaCB3aXRoIHRoZSBjdXJUb05vZGVDaGlsZFxuICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcblxuICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHRhcmdldCBub2RlIGhhcyBhIGtleSBzbyB3ZSB3YW50IHRvIG1hdGNoIGl0IHVwIHdpdGggdGhlIGNvcnJlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgIT09IGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgY3VycmVudCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCBET00gdHJlZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmcga2V5IHNvXG4gICAgICAgICAgICAgICAgICAvLyBsZXQncyBjaGVjayBvdXIgbG9va3VwIHRvIHNlZSBpZiB0aGVyZSBpcyBhIG1hdGNoaW5nIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAvLyBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgaWYgKChtYXRjaGluZ0Zyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtjdXJUb05vZGVLZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbU5leHRTaWJsaW5nID09PSBtYXRjaGluZ0Zyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3Igc2luZ2xlIGVsZW1lbnQgcmVtb3ZhbHMuIFRvIGF2b2lkIHJlbW92aW5nIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSBub2RlIG91dCBvZiB0aGUgdHJlZSAoc2luY2UgdGhhdCBjYW4gYnJlYWsgQ1NTIHRyYW5zaXRpb25zLCBldGMuKSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGluc3RlYWQgZGlzY2FyZCB0aGUgY3VycmVudCBub2RlIGFuZCB3YWl0IHVudGlsIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIHRvIHByb3Blcmx5IG1hdGNoIHVwIHRoZSBrZXllZCB0YXJnZXQgZWxlbWVudCB3aXRoIGl0cyBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBMZXQncyBtb3ZlIHRoZSBvcmlnaW5hbCBET00gbm9kZSBpbnRvIHRoZSBjdXJyZW50IHBvc2l0aW9uIGFuZCBtb3JwaFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogV2UgdXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIHJlcGxhY2VDaGlsZCBiZWNhdXNlIHdlIHdhbnQgdG8gZ28gdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBgcmVtb3ZlTm9kZSgpYCBmdW5jdGlvbiBmb3IgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBkaXNjYXJkZWQgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEJlZm9yZShtYXRjaGluZ0Zyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5vZGVzIGFyZSBub3QgY29tcGF0aWJsZSBzaW5jZSB0aGUgXCJ0b1wiIG5vZGUgaGFzIGEga2V5IGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBtYXRjaGluZyBrZXllZCBub2RlIGluIHRoZSBzb3VyY2UgdHJlZVxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBpc0NvbXBhdGlibGUgIT09IGZhbHNlICYmIGNvbXBhcmVOb2RlTmFtZXMoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgY29tcGF0aWJsZSBET00gZWxlbWVudHMgc28gdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIC8vIHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBURVhUX05PREUgfHwgY3VyRnJvbU5vZGVUeXBlID09IENPTU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gU2ltcGx5IHVwZGF0ZSBub2RlVmFsdWUgb24gdGhlIG9yaWdpbmFsIG5vZGUgdG9cbiAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSAhPT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgIC8vIEFkdmFuY2UgYm90aCB0aGUgXCJ0b1wiIGNoaWxkIGFuZCB0aGUgXCJmcm9tXCIgY2hpbGQgc2luY2Ugd2UgZm91bmQgYSBtYXRjaFxuICAgICAgICAgICAgLy8gTm90aGluZyBlbHNlIHRvIGRvIGFzIHdlIGFscmVhZHkgcmVjdXJzaXZlbHkgY2FsbGVkIG1vcnBoQ2hpbGRyZW4gYWJvdmVcbiAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgLy8gbWF0Y2ggaW4gdGhlIG9yaWdpbmFsIERPTS4gSG93ZXZlciwgd2Ugb25seSBkbyB0aGlzIGlmIHRoZSBmcm9tIG5vZGUgaXMgbm90IGtleWVkXG4gICAgICAgICAgLy8gc2luY2UgaXQgaXMgcG9zc2libGUgdGhhdCBhIGtleWVkIG5vZGUgbWlnaHQgbWF0Y2ggdXAgd2l0aCBhIG5vZGUgc29tZXdoZXJlIGVsc2UgaW4gdGhlXG4gICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAvLyBob21lIGluIHRoZSBmaW5hbCBET00gdHJlZS4gQWZ0ZXIgZXZlcnl0aGluZyBpcyBkb25lIHdlIHdpbGwgcmVtb3ZlIGFueSBrZXllZCBub2Rlc1xuICAgICAgICAgIC8vIHRoYXQgZGlkbid0IGZpbmQgYSBob21lXG4gICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgIH0gLy8gRU5EOiB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7fVxuXG4gICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciB0aGVuIHdlIGRpZCBub3QgZmluZCBhIGNhbmRpZGF0ZSBtYXRjaCBmb3JcbiAgICAgICAgLy8gb3VyIFwidG8gbm9kZVwiIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIlxuICAgICAgICAvLyBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3QgYXBwZW5kIHRoZSBjdXJyZW50IFwidG9cIiBub2RlXG4gICAgICAgIC8vIHRvIHRoZSBlbmRcbiAgICAgICAgaWYgKGN1clRvTm9kZUtleSAmJiAobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkgJiYgY29tcGFyZU5vZGVOYW1lcyhtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICBpZighc2tpcEZyb20peyBhZGRDaGlsZChmcm9tRWwsIG1hdGNoaW5nRnJvbUVsKTsgfVxuICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgPSBvbkJlZm9yZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUpIHtcbiAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUoZnJvbUVsLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZENoaWxkKGZyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSk7XG5cbiAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLm5vZGVOYW1lXTtcbiAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgIHNwZWNpYWxFbEhhbmRsZXIoZnJvbUVsLCB0b0VsKTtcbiAgICAgIH1cbiAgICB9IC8vIEVORDogbW9ycGhDaGlsZHJlbiguLi4pXG5cbiAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICB2YXIgbW9ycGhlZE5vZGVUeXBlID0gbW9ycGhlZE5vZGUubm9kZVR5cGU7XG4gICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgLy8gY29tcGF0aWJsZSAoZS5nLiA8ZGl2PiAtLT4gPHNwYW4+IG9yIDxkaXY+IC0tPiBURVhUKVxuICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmICh0b05vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBpZiAoIWNvbXBhcmVOb2RlTmFtZXMoZnJvbU5vZGUsIHRvTm9kZSkpIHtcbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICBtb3JwaGVkTm9kZSA9IG1vdmVDaGlsZHJlbihmcm9tTm9kZSwgY3JlYXRlRWxlbWVudE5TKHRvTm9kZS5ub2RlTmFtZSwgdG9Ob2RlLm5hbWVzcGFjZVVSSSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBHb2luZyBmcm9tIGFuIGVsZW1lbnQgbm9kZSB0byBhIHRleHQgbm9kZVxuICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IG1vcnBoZWROb2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFKSB7IC8vIFRleHQgb3IgY29tbWVudCBub2RlXG4gICAgICAgIGlmICh0b05vZGVUeXBlID09PSBtb3JwaGVkTm9kZVR5cGUpIHtcbiAgICAgICAgICBpZiAobW9ycGhlZE5vZGUubm9kZVZhbHVlICE9PSB0b05vZGUubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICBtb3JwaGVkTm9kZS5ub2RlVmFsdWUgPSB0b05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUZXh0IG5vZGUgdG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICBtb3JwaGVkTm9kZSA9IHRvTm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvTm9kZS5pc1NhbWVOb2RlICYmIHRvTm9kZS5pc1NhbWVOb2RlKG1vcnBoZWROb2RlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wLCBsZW49a2V5ZWRSZW1vdmFsTGlzdC5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICBpZiAoZWxUb1JlbW92ZSkge1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShlbFRvUmVtb3ZlLCBlbFRvUmVtb3ZlLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICBtb3JwaGVkTm9kZSA9IG1vcnBoZWROb2RlLmFjdHVhbGl6ZShmcm9tTm9kZS5vd25lckRvY3VtZW50IHx8IGRvYyk7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSBoYWQgdG8gc3dhcCBvdXQgdGhlIGZyb20gbm9kZSB3aXRoIGEgbmV3IG5vZGUgYmVjYXVzZSB0aGUgb2xkXG4gICAgICAvLyBub2RlIHdhcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSB0YXJnZXQgbm9kZSB0aGVuIHdlIG5lZWQgdG9cbiAgICAgIC8vIHJlcGxhY2UgdGhlIG9sZCBET00gbm9kZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuIFRoaXMgaXMgb25seVxuICAgICAgLy8gcG9zc2libGUgaWYgdGhlIG9yaWdpbmFsIERPTSBub2RlIHdhcyBwYXJ0IG9mIGEgRE9NIHRyZWUgd2hpY2hcbiAgICAgIC8vIHdlIGtub3cgaXMgdGhlIGNhc2UgaWYgaXQgaGFzIGEgcGFyZW50IG5vZGUuXG4gICAgICBmcm9tTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtb3JwaGVkTm9kZSwgZnJvbU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBjaGlsZENvbXBvbmVudHMsIGZpbmRDaGlsZENvbXBvbmVudCwgZ2V0S2V5RnJvbUVsZW1lbnQsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRNYXAgPSBuZXcgTWFwKCk7XG4gICAgY2hpbGRDb21wb25lbnRzLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGNoaWxkQ29tcG9uZW50TWFwLnNldChjaGlsZENvbXBvbmVudC5lbGVtZW50LCBjaGlsZENvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgbW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYWRkZWRfZWxlbWVudF8nICsgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRLZXlGcm9tRWxlbWVudChub2RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVFbFVwZGF0ZWQ6IChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IHJvb3RGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRvRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuQWxwaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIHRob3VnaCB0aGUgZ2xvYmFsIHdpbmRvdy5BbHBpbmUgdmFyaWFibGUuIFBsZWFzZSBtYWtlIHN1cmUgQWxwaW5lLmpzIGlzIGxvYWRlZCBiZWZvcmUgU3ltZm9ueSBVWCBMaXZlQ29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkFscGluZS5tb3JwaChmcm9tRWwuX194LCB0b0VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50TWFwLmhhcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRDb21wb25lbnRNYXAuZ2V0KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlcih0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFwcGx5VG9FbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdPUFRJT04nICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGFuZ2luZ0l0ZW1zVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc2V0SXRlbShpdGVtTmFtZSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRSZWNvcmQgPSB0aGlzLnJlbW92ZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChyZW1vdmVkUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbW92ZUl0ZW0oaXRlbU5hbWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBsZXQgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0cnVlT3JpZ2luYWxWYWx1ZSA9IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmICh0cnVlT3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogdHJ1ZU9yaWdpbmFsVmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlZEl0ZW1zLnB1c2goeyBuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZS5uZXcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hhbmdlZEl0ZW1zO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZWRJdGVtcztcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSB0aGlzLnJlbW92ZWRDbGFzc2VzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gdGhpcy5hZGRlZENsYXNzZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkQ2xhc3NlcztcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZWRDbGFzc2VzO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBhcHBseVRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiZcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5pc0VtcHR5KCkpO1xuICAgIH1cbn1cblxuY2xhc3MgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayA9IHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpID8gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0QWRkZWRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcbiAgICB9XG4gICAgd2FzRWxlbWVudEFkZGVkKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KTtcbiAgICB9XG4gICAgaGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25NdXRhdGlvbnModGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICAgIH1cbiAgICBvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWRFbGVtZW50IG9mIHRoaXMuYWRkZWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NoYW5nZUluQWRkZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLmluY2x1ZGVzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5oYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUgPyBwcmV2aW91c1ZhbHVlLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgICAgcHJldmlvdXNWYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkVmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodHJpbW1lZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzW2luZGV4XSA9IHRyaW1tZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICAgICAgY29uc3QgYWRkZWRWYWx1ZXMgPSBuZXdWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIXByZXZpb3VzVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhbmV3VmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKHByZXZpb3VzVmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBhZGRlZE9yQ2hhbmdlZFN0eWxlcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykuZmlsdGVyKChrZXkpID0+IHByZXZpb3VzU3R5bGVzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwcmV2aW91c1N0eWxlc1trZXldICE9PSBuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1N0eWxlcykuZmlsdGVyKChrZXkpID0+ICFuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB1bmRlZmluZWQgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZVN0eWxlKHN0eWxlLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgIH1cbiAgICBleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBzdHlsZXMuc3BsaXQoJzsnKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHldID0gcGFydHMuc2xpY2UoMSkuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG4gICAgaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPTlQnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSAndmVydGljYWwtYWxpZ246IGluaGVyaXQ7JztcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsQmluZGluZ3MgPSBtb2RlbEJpbmRpbmdzO1xuICAgIH1cbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgcHJvcHMsIGxpc3RlbmVycywgY29tcG9uZW50RmluZGVyLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RmluZGVyID0gY29tcG9uZW50RmluZGVyO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGxpc3RlbmVyLmV2ZW50LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmxpc3RlbmVycy5nZXQobGlzdGVuZXIuZXZlbnQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUgPSB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBfc3dhcEJhY2tlbmQoYmFja2VuZCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgbmFtZSBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZpbGVzKGtleSwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgYWRkQ2hpbGQoY2hpbGQsIG1vZGVsQmluZGluZ3MgPSBbXSkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc2V0KGNoaWxkLmlkLCBuZXcgQ2hpbGRDb21wb25lbnRXcmFwcGVyKGNoaWxkLCBtb2RlbEJpbmRpbmdzKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5kZWxldGUoY2hpbGQuaWQpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICBjaGlsZC5vZmYoJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuICAgIGdldENoaWxkcmVuKCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZENvbXBvbmVudCwgaWQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnNldChpZCwgY2hpbGRDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGZhbHNlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCB0cnVlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0U2VsZihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50RmluZGVyKHRoaXMsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb0VtaXQobmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobmFtZSkgfHwgW107XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5ld0VsZW1lbnRGcm9tUGFyZW50UmVuZGVyKHRvRWwpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHModG9FbCk7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdG9FbC5kYXRhc2V0LmxpdmVGaW5nZXJwcmludFZhbHVlO1xuICAgICAgICBpZiAoZmluZ2VycHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKG1vZGVsTmFtZSwgdmFsdWUsIGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghY2hpbGRDb21wb25lbnQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkV3JhcHBlciA9IHRoaXMuY2hpbGRyZW4uZ2V0KGNoaWxkQ29tcG9uZW50LmlkKTtcbiAgICAgICAgaWYgKCFjaGlsZFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjaGlsZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkV3JhcHBlci5tb2RlbEJpbmRpbmdzLmZvckVhY2goKG1vZGVsQmluZGluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRNb2RlbE5hbWUgPSBtb2RlbEJpbmRpbmcuaW5uZXJNb2RlbE5hbWUgfHwgJ3ZhbHVlJztcbiAgICAgICAgICAgIGlmIChjaGlsZE1vZGVsTmFtZSAhPT0gbW9kZWxOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1R1cmJvRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10dXJibz1cImZhbHNlXCJdJyk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICBjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5maWxlcykge1xuICAgICAgICAgICAgICAgIGZpbGVzVG9TZW5kW2tleV0gPSB2YWx1ZS5maWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHRoaXMudmFsdWVTdG9yZS5nZXRPcmlnaW5hbFByb3BzKCksIHRoaXMucGVuZGluZ0FjdGlvbnMsIHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksIHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSwgdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSwgZmlsZXNUb1NlbmQpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5mbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBPYmplY3QudmFsdWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICBpZiAoaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9PSAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnICYmICFoZWFkZXJzLmdldCgnWC1MaXZlLVJlZGlyZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOicpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMobmV3RWxlbWVudCk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVBbGxQcm9wcyhuZXdQcm9wcyk7XG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQobmV3RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLmhhbmRsZVBlbmRpbmdDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCBBcnJheS5mcm9tKHRoaXMuZ2V0Q2hpbGRyZW4oKS52YWx1ZXMoKSksIHRoaXMuZWxlbWVudERyaXZlci5maW5kQ2hpbGRDb21wb25lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0S2V5RnJvbUVsZW1lbnQsIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U2VsZihldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRDb21wb25lbnQuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICByZXNldFByb21pc2UoKSB7XG4gICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcbiAgICAgICAgZ2V0KGNvbXBvbmVudCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuY2xhc3MgQmFja2VuZFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICAgIH1cbiAgICBjb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZE1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB0YXJnZXRlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0QnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRvdGFsRmlsZXMgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4gJiZcbiAgICAgICAgICAgICAgICAoYWN0aW9ucy5sZW5ndGggfHwgdG90YWxGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gKHVybEVuY29kZWRKc29uRGF0YSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBjc3JmVG9rZW4pO1xuICAgIH1cbiAgICBtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMucmVxdWVzdEJ1aWxkZXIuYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpO1xuICAgICAgICByZXR1cm4gbmV3IEJhY2tlbmRSZXF1ZXN0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcbiAgICB9XG59XG5cbmNsYXNzIFN0YW5kYXJkRWxlbWVudERyaXZlciB7XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwcm9wc0pzb24gPSAoX2EgPSByb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAne30nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwcm9wc0pzb24pO1xuICAgIH1cbiAgICBmaW5kQ2hpbGRDb21wb25lbnRFbGVtZW50KGlkLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpdmUtaWQ9JHtpZH1dYCk7XG4gICAgfVxuICAgIGdldEtleUZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBldmVudHNKc29uID0gKF9hID0gZWxlbWVudC5kYXRhc2V0LmxpdmVFbWl0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnW10nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShldmVudHNKc29uKTtcbiAgICB9XG4gICAgZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2goZWxlbWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGV2ZW50c0pzb24gPSAoX2EgPSBlbGVtZW50LmRhdGFzZXQubGl2ZUJyb3dzZXJEaXNwYXRjaCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZXZlbnRzSnNvbik7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZSh0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyh0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpLmZvckVhY2goKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAncmV2ZXJ0JztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIGlzTG9hZGluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVsXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCB1c2luZyBkYXRhLW1vZGVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsQmluZGluZyAobW9kZWxEaXJlY3RpdmUpIHtcbiAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0RXZlbnROYW1lID0gbnVsbDtcbiAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICBtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2lucHV0JywgJ2NoYW5nZSddLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50TmFtZSA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9yZW5kZXInOlxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWVcbiAgICB9O1xufVxuXG5jbGFzcyBDb21wb25lbnRSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LnNldChlbGVtZW50LCBjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LnNldChjb21wb25lbnQsIGNvbXBvbmVudC5uYW1lKTtcbiAgICB9XG4gICAgdW5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuZGVsZXRlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZENvbXBvbmVudHMoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5cbmNvbnN0IGdldENvbXBvbmVudCA9IChlbGVtZW50KSA9PiBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KGVsZW1lbnQpO1xuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2xpdmU6Y29ubmVjdCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50ID0gdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS5maW5kQ29tcG9uZW50cyhjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSksIHRoaXMuZmluZ2VycHJpbnRWYWx1ZSwgaWQsIG5ldyBCYWNrZW5kKHRoaXMudXJsVmFsdWUsIHRoaXMuY3NyZlZhbHVlKSwgbmV3IFN0YW5kYXJkRWxlbWVudERyaXZlcigpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFZhbGlkYXRlZEZpZWxkc1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBhZ2VVbmxvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQb2xsaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgXTtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZFBsdWdpbihwbHVnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS51bnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGlzY29ubmVjdCcpO1xuICAgIH1cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnB1dCcgfHwgZXZlbnQudHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG4gICAgICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBlbmRpbmdGaWxlcyA9IHt9O1xuICAgICAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3ByZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZmlsZXMnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlcyA9IHRoaXMucGVuZGluZ0ZpbGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSA9IHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IChfYSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBkaXJlY3RpdmUubmFtZWQsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBkYXRhLWV2ZW50IGF0dHJpYnV0ZSBmb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRJbmZvID0gZWxlbWVudC5kYXRhc2V0LmV2ZW50O1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGV2ZW50SW5mbyk7XG4gICAgICAgIGNvbnN0IGVtaXRzID0gW107XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZU1hdGNoID0gbnVsbDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lTWF0Y2ggPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gZXZlbnQgXCIke2V2ZW50SW5mb31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVtaXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGRpcmVjdGl2ZS5hY3Rpb24sXG4gICAgICAgICAgICAgICAgZGF0YTogZGlyZWN0aXZlLm5hbWVkLFxuICAgICAgICAgICAgICAgIG5hbWVNYXRjaCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtaXRzO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnNldChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciwgZGVib3VuY2UpO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdpbnB1dCcpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnY2hhbmdlJyk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChlbGVtZW50LCBldmVudE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBpZiAoKF9hID0gZWxlbWVudC5maWxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbEJpbmRpbmcgPSBnZXRNb2RlbEJpbmRpbmcobW9kZWxEaXJlY3RpdmUpO1xuICAgICAgICBpZiAoIW1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnaW5wdXQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NoYW5nZScgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdjaGFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIHtcbiAgICAgICAgICAgIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxWYWx1ZSA9IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCBmaW5hbFZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgIH1cbiAgICBoYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoY2hpbGRDb250cm9sbGVyLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKTtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgfVxuICAgIGhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkgIT09IHRoaXMuY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVtb3ZlQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuICAgICAgICBkZXRhaWwuY29udHJvbGxlciA9IHRoaXM7XG4gICAgICAgIGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ2xpdmUnLCBjYW5jZWxhYmxlLCBidWJibGVzOiBjYW5CdWJibGUgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBjc3JmOiBTdHJpbmcsXG4gICAgbGlzdGVuZXJzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5ID0gbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwic3RyaXBlIiwiU3RyaXBlIiwiY2xpZW50U2VjcmV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiaW5pdGlhbGl6ZSIsIl9pbml0aWFsaXplIiwiX2NhbGxlZSIsImNoZWNrb3V0IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImluaXRFbWJlZGRlZENoZWNrb3V0IiwibW91bnQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJBcnJheSIsImlzQXJyYXkiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJpdGVyIiwibGVuIiwiYXJyMiIsIkNvbnRyb2xsZXIiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50TmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnROYW1lZEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJzdGF0ZSIsImdldExhc3RBY3Rpb25OYW1lIiwiYWN0aW9uIiwicHVzaEluc3RydWN0aW9uIiwibmFtZWQiLCJtb2RpZmllcnMiLCJnZXRTdHJpbmciLCJwdXNoQXJndW1lbnQiLCJtaXhlZEFyZ1R5cGVzRXJyb3IiLCJjb25jYXQiLCJ0cmltIiwicHVzaE1vZGlmaWVyIiwiY2hhciIsImNvbWJpbmVTcGFjZWRBcnJheSIsInBhcnRzIiwiZmluYWxQYXJ0cyIsInBhcnQiLCJzcGxpdCIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwicmVwbGFjZSIsIm1hcCIsImpvaW4iLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwiZWxlbWVudCIsInZhbHVlU3RvcmUiLCJIVE1MSW5wdXRFbGVtZW50IiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiaGFzQXR0cmlidXRlIiwiY2hlY2tlZCIsImlucHV0VmFsdWUiLCJIVE1MU2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJkYXRhc2V0Iiwic2V0VmFsdWVPbkVsZW1lbnQiLCJ2YWx1ZUZvdW5kIiwidmFsIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsImdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzIiwiZGlyZWN0aXZlIiwidGhyb3dPbk1pc3NpbmciLCJkYXRhTW9kZWxEaXJlY3RpdmVzIiwiZm9ybUVsZW1lbnQiLCJjbG9zZXN0IiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29udGFpbnMiLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiZ2V0Q2hpbGRyZW4iLCJjaGlsZENvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm91dGVySFRNTCIsImluZGV4T2YiLCJjdXJyZW50VmFsdWVzIiwiZmluYWxWYWx1ZXMiLCJpbmRleCIsInNwbGljZSIsImdldERlZXBEYXRhIiwiZGF0YSIsInByb3BlcnR5UGF0aCIsIl9wYXJzZURlZXBEYXRhIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIlZhbHVlU3RvcmUiLCJkaXJ0eVByb3BzIiwicGVuZGluZ1Byb3BzIiwidXBkYXRlZFByb3BzRnJvbVBhcmVudCIsIm5vcm1hbGl6ZWROYW1lIiwiaGFzIiwic2V0IiwiY3VycmVudFZhbHVlIiwiZ2V0T3JpZ2luYWxQcm9wcyIsImFzc2lnbiIsImdldERpcnR5UHJvcHMiLCJnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nIiwicmVpbml0aWFsaXplQWxsUHJvcHMiLCJwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkiLCJzdG9yZU5ld1Byb3BzRnJvbVBhcmVudCIsImNoYW5nZWQiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwibW9ycGhBdHRycyIsImZyb21Ob2RlIiwidG9Ob2RlIiwidG9Ob2RlQXR0cnMiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsImF0dHJOYW1lIiwiYXR0ck5hbWVzcGFjZVVSSSIsImF0dHJWYWx1ZSIsImZyb21WYWx1ZSIsIm5vZGVUeXBlIiwibmFtZXNwYWNlVVJJIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlTlMiLCJwcmVmaXgiLCJzZXRBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZSIsImZyb21Ob2RlQXR0cnMiLCJoYXNBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlIiwicmFuZ2UiLCJOU19YSFRNTCIsImRvYyIsIkhBU19URU1QTEFURV9TVVBQT1JUIiwiSEFTX1JBTkdFX1NVUFBPUlQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlIiwic3RyIiwiY2hpbGROb2RlcyIsImNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlIiwic2VsZWN0Tm9kZSIsImJvZHkiLCJmcmFnbWVudCIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImNyZWF0ZUZyYWdtZW50RnJvbVdyYXAiLCJ0b0VsZW1lbnQiLCJjb21wYXJlTm9kZU5hbWVzIiwiZnJvbUVsIiwidG9FbCIsImZyb21Ob2RlTmFtZSIsIm5vZGVOYW1lIiwidG9Ob2RlTmFtZSIsImZyb21Db2RlU3RhcnQiLCJ0b0NvZGVTdGFydCIsImNoYXJDb2RlQXQiLCJ0b1VwcGVyQ2FzZSIsImNyZWF0ZUVsZW1lbnROUyIsIm1vdmVDaGlsZHJlbiIsImN1ckNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRDaGlsZCIsIm5leHRTaWJsaW5nIiwiYXBwZW5kQ2hpbGQiLCJzeW5jQm9vbGVhbkF0dHJQcm9wIiwic3BlY2lhbEVsSGFuZGxlcnMiLCJPUFRJT04iLCJwYXJlbnROb2RlIiwicGFyZW50TmFtZSIsInNlbGVjdGVkSW5kZXgiLCJJTlBVVCIsIlRFWFRBUkVBIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIm5vZGVWYWx1ZSIsInBsYWNlaG9sZGVyIiwiU0VMRUNUIiwib3B0Z3JvdXAiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEiLCJURVhUX05PREUiLCJDT01NRU5UX05PREUiLCJub29wIiwiZGVmYXVsdEdldE5vZGVLZXkiLCJub2RlIiwiaWQiLCJtb3JwaGRvbUZhY3RvcnkiLCJtb3JwaGRvbSIsInRvTm9kZUh0bWwiLCJnZXROb2RlS2V5Iiwib25CZWZvcmVOb2RlQWRkZWQiLCJvbk5vZGVBZGRlZCIsIm9uQmVmb3JlRWxVcGRhdGVkIiwib25FbFVwZGF0ZWQiLCJvbkJlZm9yZU5vZGVEaXNjYXJkZWQiLCJvbk5vZGVEaXNjYXJkZWQiLCJvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIiwic2tpcEZyb21DaGlsZHJlbiIsImFkZENoaWxkIiwicGFyZW50IiwiY2hpbGRyZW5Pbmx5IiwiZnJvbU5vZGVzTG9va3VwIiwia2V5ZWRSZW1vdmFsTGlzdCIsImFkZEtleWVkUmVtb3ZhbCIsIndhbGtEaXNjYXJkZWRDaGlsZE5vZGVzIiwic2tpcEtleWVkTm9kZXMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbmRleFRyZWUiLCJoYW5kbGVOb2RlQWRkZWQiLCJ1bm1hdGNoZWRGcm9tRWwiLCJyZXBsYWNlQ2hpbGQiLCJtb3JwaEVsIiwiY2xlYW51cEZyb21FbCIsImN1ckZyb21Ob2RlQ2hpbGQiLCJjdXJGcm9tTm9kZUtleSIsImZyb21OZXh0U2libGluZyIsInRvRWxLZXkiLCJtb3JwaENoaWxkcmVuIiwic2tpcEZyb20iLCJjdXJUb05vZGVDaGlsZCIsImN1clRvTm9kZUtleSIsInRvTmV4dFNpYmxpbmciLCJtYXRjaGluZ0Zyb21FbCIsIm91dGVyIiwiaXNTYW1lTm9kZSIsImN1ckZyb21Ob2RlVHlwZSIsImlzQ29tcGF0aWJsZSIsImluc2VydEJlZm9yZSIsIm9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0IiwiYWN0dWFsaXplIiwib3duZXJEb2N1bWVudCIsInNwZWNpYWxFbEhhbmRsZXIiLCJtb3JwaGVkTm9kZSIsIm1vcnBoZWROb2RlVHlwZSIsInRvTm9kZVR5cGUiLCJlbFRvUmVtb3ZlIiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJpc0ZpbGVJbnB1dCIsImNoaWxkcmVuIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImNoaWxkQ29tcG9uZW50cyIsImZpbmRDaGlsZENvbXBvbmVudCIsImdldEtleUZyb21FbGVtZW50IiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJjaGlsZENvbXBvbmVudE1hcCIsIk1hcCIsIndhc0VsZW1lbnRBZGRlZCIsIk1hdGgiLCJyYW5kb20iLCJfX3giLCJ3aW5kb3ciLCJBbHBpbmUiLCJtb3JwaCIsInVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlciIsImVsZW1lbnRDaGFuZ2VzIiwiZ2V0Q2hhbmdlZEVsZW1lbnQiLCJhcHBseVRvRWxlbWVudCIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpcyIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImV2ZW50IiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczIiLCJfcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJfcmVmMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJhZGQiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczQiLCJIb29rTWFuYWdlciIsImhvb2tzIiwicmVnaXN0ZXIiLCJob29rTmFtZSIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIl9sZW4iLCJfa2V5IiwiQmFja2VuZFJlc3BvbnNlIiwicmVzcG9uc2UiLCJfZ2V0Qm9keSIsInRleHQiLCJnZXRCb2R5IiwiQ2hhbmdpbmdJdGVtc1RyYWNrZXIiLCJjaGFuZ2VkSXRlbXMiLCJyZW1vdmVkSXRlbXMiLCJzZXRJdGVtIiwiaXRlbU5hbWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJyZW1vdmVJdGVtIiwidHJ1ZU9yaWdpbmFsVmFsdWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJnZXRSZW1vdmVkSXRlbXMiLCJpc0VtcHR5Iiwic2l6ZSIsIkVsZW1lbnRDaGFuZ2VzIiwiYWRkZWRDbGFzc2VzIiwicmVtb3ZlZENsYXNzZXMiLCJzdHlsZUNoYW5nZXMiLCJhdHRyaWJ1dGVDaGFuZ2VzIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJyZW1vdmVDbGFzcyIsImFkZFN0eWxlIiwic3R5bGVOYW1lIiwib3JpZ2luYWxWYWx1ZSIsInJlbW92ZVN0eWxlIiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2hhbmdlIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwiRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrIiwiY2hhbmdlZEVsZW1lbnRzIiwiV2Vha01hcCIsImNoYW5nZWRFbGVtZW50c0NvdW50IiwiYWRkZWRFbGVtZW50cyIsInJlbW92ZWRFbGVtZW50cyIsImlzU3RhcnRlZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25NdXRhdGlvbnMiLCJiaW5kIiwic3RhcnQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiZGlzY29ubmVjdCIsImdldEFkZGVkRWxlbWVudHMiLCJoYW5kbGVQZW5kaW5nQ2hhbmdlcyIsInRha2VSZWNvcmRzIiwibXV0YXRpb25zIiwiaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJtdXRhdGlvbiIsImlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbiIsImlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiYWRkZWRFbGVtZW50IiwiaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24iLCJoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbiIsIl90aGlzNSIsImFkZGVkTm9kZXMiLCJFbGVtZW50IiwicmVtb3ZlZE5vZGVzIiwiY2hhbmdlZEVsZW1lbnQiLCJoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbiIsInByZXZpb3VzVmFsdWVzIiwidHJpbW1lZFZhbHVlIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsInRhZ05hbWUiLCJDaGlsZENvbXBvbmVudFdyYXBwZXIiLCJtb2RlbEJpbmRpbmdzIiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiY29tcG9uZW50RmluZGVyIiwiZmluZ2VycHJpbnQiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsIl90aGlzNiIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX2EiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUiLCJfc3dhcEJhY2tlbmQiLCJhZGRQbHVnaW4iLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsImNvbm5lY3QiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJvbiIsIm9mZiIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJwcm9taXNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiZ2V0RGF0YSIsImZpbGVzIiwicmVuZGVyIiwidHJ5U3RhcnRpbmdSZXF1ZXN0IiwiZ2V0UGFyZW50IiwiZW1pdCIsIm9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCIsInBlcmZvcm1FbWl0IiwiZW1pdFVwIiwiZW1pdFNlbGYiLCJkb0VtaXQiLCJtYXRjaGluZ05hbWUiLCJjb21wb25lbnRzIiwiX3RoaXM3IiwiYWN0aW9ucyIsImdldENvbXBvbmVudFByb3BzIiwibGl2ZUZpbmdlcnByaW50VmFsdWUiLCJfdGhpczgiLCJjaGlsZFdyYXBwZXIiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsImlubmVyTW9kZWxOYW1lIiwic2hvdWxkUmVuZGVyIiwiaXNUdXJib0VuYWJsZWQiLCJUdXJibyIsInBlcmZvcm1SZXF1ZXN0IiwiX3RoaXM5IiwidGhpc1Byb21pc2VSZXNvbHZlIiwibmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSIsImZpbGVzVG9TZW5kIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJtYWtlUmVxdWVzdCIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwiX3JlZjMiLCJfY2FsbGVlMiIsImJhY2tlbmRSZXNwb25zZSIsIl9pMyIsIl9PYmplY3QkdmFsdWVzIiwiaGVhZGVycyIsImNvbnRyb2xzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheUVycm9yIiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJfeCIsIl90aGlzMTAiLCJ2aXNpdCIsImxvY2F0aW9uIiwiaHJlZiIsIm1vZGlmaWVkTW9kZWxWYWx1ZXMiLCJtYXRjaGVzIiwiY29uc29sZSIsIm5ld1Byb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQiLCJfcmVmNCIsImNvbXBvbmVudE5hbWUiLCJfcmVmNSIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY2FsY3VsYXRlRGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJfdGhpczExIiwic2V0VGltZW91dCIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImZvY3VzIiwiZmluZ2VycHJpbnRzIiwidGFnIiwidG9Mb3dlckNhc2UiLCJfdGhpczEyIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiX2xlbjIiLCJfa2V5MiIsIlJlZmxlY3QiLCJCYWNrZW5kUmVxdWVzdCIsInVwZGF0ZU1vZGVscyIsIl90aGlzMTMiLCJpc1Jlc29sdmVkIiwidXBkYXRlZE1vZGVscyIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwidGFyZ2V0ZWRBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsInRhcmdldGVkTW9kZWxzIiwiUmVxdWVzdEJ1aWxkZXIiLCJ1cmwiLCJjc3JmVG9rZW4iLCJidWlsZFJlcXVlc3QiLCJ1cGRhdGVkIiwic3BsaXRVcmwiLCJfc3BsaXRVcmwiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJ0b3RhbEZpbGVzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50IiwiaGFzRmluZ2VycHJpbnRzIiwid2lsbERhdGFGaXRJblVybCIsInJlcXVlc3REYXRhIiwicHJvcHNGcm9tUGFyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIl9pNCIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwicGFyYW1zU3RyaW5nIiwicHJvcHNKc29uIiwidXBkYXRlZEpzb24iLCJjaGlsZHJlbkpzb24iLCJwcm9wc0Zyb21QYXJlbnRKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiQmFja2VuZCIsInJlcXVlc3RCdWlsZGVyIiwiX3RoaXMkcmVxdWVzdEJ1aWxkZXIkIiwiZmV0Y2giLCJiYWNrZW5kQWN0aW9uIiwiU3RhbmRhcmRFbGVtZW50RHJpdmVyIiwibW9kZWxEaXJlY3RpdmUiLCJyb290RWxlbWVudCIsImxpdmVQcm9wc1ZhbHVlIiwibGl2ZUlkIiwiZXZlbnRzSnNvbiIsImxpdmVFbWl0IiwibGl2ZUJyb3dzZXJEaXNwYXRjaCIsIkxvYWRpbmdQbHVnaW4iLCJfdGhpczE0IiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsIl90aGlzMTUiLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiX3JlZjYiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiX3RoaXMxNiIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJsb2FkaW5nRGlyZWN0aXZlIiwic2hvd0VsZW1lbnQiLCJoaWRlRWxlbWVudCIsImxvYWRpbmdEaXJlY3RpdmVzIiwicXVlcnlTZWxlY3RvckFsbCIsIlNWR0VsZW1lbnQiLCJsb2FkaW5nIiwiY2xhc3NlcyIsIl9lbGVtZW50JGNsYXNzTGlzdCIsIl9lbGVtZW50JGNsYXNzTGlzdDIiLCJhdHRyaWJ1dGUiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW4iLCJfdGhpczE3IiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJQYWdlVW5sb2FkaW5nUGx1Z2luIiwiaXNDb25uZWN0ZWQiLCJfdGhpczE4IiwiUG9sbGluZ0RpcmVjdG9yIiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFkZFBvbGwiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsInN0YXJ0QWxsUG9sbGluZyIsIl90aGlzMTkiLCJfcmVmNyIsInN0b3BBbGxQb2xsaW5nIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJQb2xsaW5nIiwiX3RoaXMyMCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJQb2xsaW5nUGx1Z2luIiwiX3RoaXMyMSIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiX3RoaXMyMiIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwiX3RoaXMyMyIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvIiwiX21vZGVsRGlyZWN0aXZlJGFjdGlvMiIsIkNvbXBvbmVudFJlZ2lzdHJ5IiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiY29tcG9uZW50TWFwQnlDb21wb25lbnQiLCJyZWdpc3RlckNvbXBvbmVudCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJfdGhpczI0IiwiY291bnQiLCJtYXhDb3VudCIsImZpbmRDb21wb25lbnRzIiwiY3VycmVudENvbXBvbmVudCIsIm9ubHlQYXJlbnRzIiwib25seU1hdGNoTmFtZSIsIkxpdmVDb250cm9sbGVyRGVmYXVsdCIsImNvbXBvbmVudFJlZ2lzdHJ5IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpczI1IiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudCIsIl90aGlzMjYiLCJoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCIsIm5hbWVWYWx1ZSIsInByb3BzVmFsdWUiLCJsaXN0ZW5lcnNWYWx1ZSIsImZpbmdlcnByaW50VmFsdWUiLCJ1cmxWYWx1ZSIsImNzcmZWYWx1ZSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsIl90aGlzMjciLCJfcmVmOCIsIl90aGlzMjgiLCJfcmVmOSIsInVwZGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI5IiwicmF3QWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJfaTUiLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsIiRyZW5kZXIiLCJfdGhpczMwIiwiZ2V0RW1pdERpcmVjdGl2ZXMiLCJfcmVmMTAiLCJuYW1lTWF0Y2giLCJfdGhpczMxIiwiX3JlZjExIiwiX3RoaXMzMiIsIl9yZWYxMiIsImV2ZW50SW5mbyIsImVtaXRzIiwiJHVwZGF0ZU1vZGVsIiwiZXZlbnROYW1lIiwiZmluYWxWYWx1ZSIsImNoaWxkQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZXMiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJjc3JmIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=