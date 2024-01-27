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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1I4RTtBQUN4QjtBQUN0RCxpRUFBZTtBQUNmLFVBQVUsMEZBQVk7QUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p1QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDdUQ7QUFDQztBQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNkI7O0FBRTVEO0FBQ08sSUFBTUMsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBSW5DLENBQUM7QUFDRjtBQUNBOzs7Ozs7Ozs7OzsrQ0NSQSxxSkFBQUUsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsWUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFlBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLGdCQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQUgsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQSxTQUFBeUcsbUJBQUFDLEdBQUEsRUFBQXJELE9BQUEsRUFBQXNELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLEVBQUFDLEdBQUEsRUFBQTlFLEdBQUEsY0FBQStFLElBQUEsR0FBQUwsR0FBQSxDQUFBSSxHQUFBLEVBQUE5RSxHQUFBLE9BQUFwQixLQUFBLEdBQUFtRyxJQUFBLENBQUFuRyxLQUFBLFdBQUFvRyxLQUFBLElBQUFMLE1BQUEsQ0FBQUssS0FBQSxpQkFBQUQsSUFBQSxDQUFBckQsSUFBQSxJQUFBTCxPQUFBLENBQUF6QyxLQUFBLFlBQUErRSxPQUFBLENBQUF0QyxPQUFBLENBQUF6QyxLQUFBLEVBQUEyQyxJQUFBLENBQUFxRCxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBSSxrQkFBQUMsRUFBQSw2QkFBQUMsSUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsYUFBQTFCLE9BQUEsV0FBQXRDLE9BQUEsRUFBQXNELE1BQUEsUUFBQUQsR0FBQSxHQUFBUSxFQUFBLENBQUFJLEtBQUEsQ0FBQUgsSUFBQSxFQUFBQyxJQUFBLFlBQUFSLE1BQUFoRyxLQUFBLElBQUE2RixrQkFBQSxDQUFBQyxHQUFBLEVBQUFyRCxPQUFBLEVBQUFzRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxVQUFBakcsS0FBQSxjQUFBaUcsT0FBQVUsR0FBQSxJQUFBZCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFyRCxPQUFBLEVBQUFzRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxXQUFBVSxHQUFBLEtBQUFYLEtBQUEsQ0FBQVksU0FBQTtBQURBLElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDLDZHQUE2RyxDQUFDO0FBRXBJLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztBQUV6RkMsVUFBVSxDQUFDLENBQUM7QUFBQyxTQUVFQSxVQUFVQSxDQUFBO0VBQUEsT0FBQUMsV0FBQSxDQUFBVixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUFXLFlBQUE7RUFBQUEsV0FBQSxHQUFBZixpQkFBQSxlQUFBL0csbUJBQUEsR0FBQW9GLElBQUEsQ0FBekIsU0FBQTJDLFFBQUE7SUFBQSxJQUFBQyxRQUFBO0lBQUEsT0FBQWhJLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEwRyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQXJDLElBQUEsR0FBQXFDLFFBQUEsQ0FBQWhFLElBQUE7UUFBQTtVQUFBZ0UsUUFBQSxDQUFBaEUsSUFBQTtVQUFBLE9BRTJCcUQsTUFBTSxDQUFDWSxvQkFBb0IsQ0FBQztZQUFDVixZQUFZLEVBQVpBO1VBQVksQ0FBQyxDQUFDO1FBQUE7VUFBNURPLFFBQVEsR0FBQUUsUUFBQSxDQUFBdEUsSUFBQTtVQUVkb0UsUUFBUSxDQUFDSSxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFGLFFBQUEsQ0FBQWxDLElBQUE7TUFBQTtJQUFBLEdBQUErQixPQUFBO0VBQUEsQ0FDL0I7RUFBQSxPQUFBRCxXQUFBLENBQUFWLEtBQUEsT0FBQUQsU0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NWRCxxSkFBQW5ILG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFlBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxZQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxnQkFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBQyxHQUFBLEVBQUFyRCxPQUFBLEVBQUFzRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxFQUFBQyxHQUFBLEVBQUE5RSxHQUFBLGNBQUErRSxJQUFBLEdBQUFMLEdBQUEsQ0FBQUksR0FBQSxFQUFBOUUsR0FBQSxPQUFBcEIsS0FBQSxHQUFBbUcsSUFBQSxDQUFBbkcsS0FBQSxXQUFBb0csS0FBQSxJQUFBTCxNQUFBLENBQUFLLEtBQUEsaUJBQUFELElBQUEsQ0FBQXJELElBQUEsSUFBQUwsT0FBQSxDQUFBekMsS0FBQSxZQUFBK0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBekMsS0FBQSxFQUFBMkMsSUFBQSxDQUFBcUQsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUksa0JBQUFDLEVBQUEsNkJBQUFDLElBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLGFBQUExQixPQUFBLFdBQUF0QyxPQUFBLEVBQUFzRCxNQUFBLFFBQUFELEdBQUEsR0FBQVEsRUFBQSxDQUFBSSxLQUFBLENBQUFILElBQUEsRUFBQUMsSUFBQSxZQUFBUixNQUFBaEcsS0FBQSxJQUFBNkYsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBckQsT0FBQSxFQUFBc0QsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpHLEtBQUEsY0FBQWlHLE9BQUFVLEdBQUEsSUFBQWQsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBckQsT0FBQSxFQUFBc0QsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsV0FBQVUsR0FBQSxLQUFBWCxLQUFBLENBQUFZLFNBQUE7QUFBQSxTQUFBZSxlQUFBQyxHQUFBLEVBQUEzSCxDQUFBLFdBQUE0SCxlQUFBLENBQUFELEdBQUEsS0FBQUUscUJBQUEsQ0FBQUYsR0FBQSxFQUFBM0gsQ0FBQSxLQUFBOEgsMkJBQUEsQ0FBQUgsR0FBQSxFQUFBM0gsQ0FBQSxLQUFBK0gsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBMUUsU0FBQTtBQUFBLFNBQUF3RSxzQkFBQXJJLENBQUEsRUFBQThCLENBQUEsUUFBQS9CLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQVMsTUFBQSxJQUFBVCxDQUFBLENBQUFTLE1BQUEsQ0FBQUUsUUFBQSxLQUFBWCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFNLENBQUEsRUFBQUosQ0FBQSxPQUFBcUIsQ0FBQSxPQUFBMUIsQ0FBQSxpQkFBQUcsQ0FBQSxJQUFBVCxDQUFBLEdBQUFBLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTVCLENBQUEsR0FBQStELElBQUEsUUFBQWpDLENBQUEsUUFBQTdCLE1BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFVBQUFnQyxDQUFBLHVCQUFBQSxDQUFBLElBQUFqQyxDQUFBLEdBQUFVLENBQUEsQ0FBQW9CLElBQUEsQ0FBQTdCLENBQUEsR0FBQXNELElBQUEsTUFBQTNDLENBQUEsQ0FBQTZELElBQUEsQ0FBQXpFLENBQUEsQ0FBQVMsS0FBQSxHQUFBRyxDQUFBLENBQUFrRSxNQUFBLEtBQUE5QyxDQUFBLEdBQUFDLENBQUEsaUJBQUEvQixDQUFBLElBQUFLLENBQUEsT0FBQUYsQ0FBQSxHQUFBSCxDQUFBLHlCQUFBK0IsQ0FBQSxZQUFBaEMsQ0FBQSxlQUFBZSxDQUFBLEdBQUFmLENBQUEsY0FBQUUsTUFBQSxDQUFBYSxDQUFBLE1BQUFBLENBQUEsMkJBQUFULENBQUEsUUFBQUYsQ0FBQSxhQUFBTyxDQUFBO0FBQUEsU0FBQTBILGdCQUFBRCxHQUFBLFFBQUFLLEtBQUEsQ0FBQUMsT0FBQSxDQUFBTixHQUFBLFVBQUFBLEdBQUE7QUFBQSxTQUFBTyxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBL0UsU0FBQTtBQUFBLFNBQUFnRixrQkFBQUMsTUFBQSxFQUFBQyxLQUFBLGFBQUF2SSxDQUFBLE1BQUFBLENBQUEsR0FBQXVJLEtBQUEsQ0FBQW5FLE1BQUEsRUFBQXBFLENBQUEsVUFBQXdJLFVBQUEsR0FBQUQsS0FBQSxDQUFBdkksQ0FBQSxHQUFBd0ksVUFBQSxDQUFBL0gsVUFBQSxHQUFBK0gsVUFBQSxDQUFBL0gsVUFBQSxXQUFBK0gsVUFBQSxDQUFBOUgsWUFBQSx3QkFBQThILFVBQUEsRUFBQUEsVUFBQSxDQUFBN0gsUUFBQSxTQUFBbEIsTUFBQSxDQUFBSyxjQUFBLENBQUF3SSxNQUFBLEVBQUFHLGNBQUEsQ0FBQUQsVUFBQSxDQUFBdkMsR0FBQSxHQUFBdUMsVUFBQTtBQUFBLFNBQUFFLGFBQUFOLFdBQUEsRUFBQU8sVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQU4saUJBQUEsQ0FBQUQsV0FBQSxDQUFBMUksU0FBQSxFQUFBaUosVUFBQSxPQUFBQyxXQUFBLEVBQUFQLGlCQUFBLENBQUFELFdBQUEsRUFBQVEsV0FBQSxHQUFBbkosTUFBQSxDQUFBSyxjQUFBLENBQUFzSSxXQUFBLGlCQUFBekgsUUFBQSxtQkFBQXlILFdBQUE7QUFBQSxTQUFBSyxlQUFBdEgsR0FBQSxRQUFBOEUsR0FBQSxHQUFBNEMsWUFBQSxDQUFBMUgsR0FBQSxvQkFBQW9CLE9BQUEsQ0FBQTBELEdBQUEsaUJBQUFBLEdBQUEsR0FBQTZDLE1BQUEsQ0FBQTdDLEdBQUE7QUFBQSxTQUFBNEMsYUFBQUUsS0FBQSxFQUFBQyxJQUFBLFFBQUF6RyxPQUFBLENBQUF3RyxLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBOUksTUFBQSxDQUFBaUosV0FBQSxPQUFBRCxJQUFBLEtBQUF0QyxTQUFBLFFBQUF3QyxHQUFBLEdBQUFGLElBQUEsQ0FBQTdILElBQUEsQ0FBQTJILEtBQUEsRUFBQUMsSUFBQSxvQkFBQXpHLE9BQUEsQ0FBQTRHLEdBQUEsdUJBQUFBLEdBQUEsWUFBQTlGLFNBQUEsNERBQUEyRixJQUFBLGdCQUFBRixNQUFBLEdBQUFNLE1BQUEsRUFBQUwsS0FBQTtBQUFBLFNBQUFNLG1CQUFBMUIsR0FBQSxXQUFBMkIsa0JBQUEsQ0FBQTNCLEdBQUEsS0FBQTRCLGdCQUFBLENBQUE1QixHQUFBLEtBQUFHLDJCQUFBLENBQUFILEdBQUEsS0FBQTZCLGtCQUFBO0FBQUEsU0FBQUEsbUJBQUEsY0FBQW5HLFNBQUE7QUFBQSxTQUFBeUUsNEJBQUFqSSxDQUFBLEVBQUE0SixNQUFBLFNBQUE1SixDQUFBLHFCQUFBQSxDQUFBLHNCQUFBNkosaUJBQUEsQ0FBQTdKLENBQUEsRUFBQTRKLE1BQUEsT0FBQTlKLENBQUEsR0FBQUYsTUFBQSxDQUFBQyxTQUFBLENBQUFpSyxRQUFBLENBQUF2SSxJQUFBLENBQUF2QixDQUFBLEVBQUF1RixLQUFBLGFBQUF6RixDQUFBLGlCQUFBRSxDQUFBLENBQUEwRSxXQUFBLEVBQUE1RSxDQUFBLEdBQUFFLENBQUEsQ0FBQTBFLFdBQUEsQ0FBQUMsSUFBQSxNQUFBN0UsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBcUksS0FBQSxDQUFBNEIsSUFBQSxDQUFBL0osQ0FBQSxPQUFBRixDQUFBLCtEQUFBa0ssSUFBQSxDQUFBbEssQ0FBQSxVQUFBK0osaUJBQUEsQ0FBQTdKLENBQUEsRUFBQTRKLE1BQUE7QUFBQSxTQUFBRixpQkFBQU8sSUFBQSxlQUFBN0osTUFBQSxvQkFBQTZKLElBQUEsQ0FBQTdKLE1BQUEsQ0FBQUUsUUFBQSxhQUFBMkosSUFBQSwrQkFBQTlCLEtBQUEsQ0FBQTRCLElBQUEsQ0FBQUUsSUFBQTtBQUFBLFNBQUFSLG1CQUFBM0IsR0FBQSxRQUFBSyxLQUFBLENBQUFDLE9BQUEsQ0FBQU4sR0FBQSxVQUFBK0IsaUJBQUEsQ0FBQS9CLEdBQUE7QUFBQSxTQUFBK0Isa0JBQUEvQixHQUFBLEVBQUFvQyxHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBcEMsR0FBQSxDQUFBdkQsTUFBQSxFQUFBMkYsR0FBQSxHQUFBcEMsR0FBQSxDQUFBdkQsTUFBQSxXQUFBcEUsQ0FBQSxNQUFBZ0ssSUFBQSxPQUFBaEMsS0FBQSxDQUFBK0IsR0FBQSxHQUFBL0osQ0FBQSxHQUFBK0osR0FBQSxFQUFBL0osQ0FBQSxJQUFBZ0ssSUFBQSxDQUFBaEssQ0FBQSxJQUFBMkgsR0FBQSxDQUFBM0gsQ0FBQSxVQUFBZ0ssSUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGdEO0FBRWhELFNBQVNFLGVBQWVBLENBQUNDLE9BQU8sRUFBRTtFQUM5QixJQUFNQyxVQUFVLEdBQUcsRUFBRTtFQUNyQixJQUFJLENBQUNELE9BQU8sRUFBRTtJQUNWLE9BQU9DLFVBQVU7RUFDckI7RUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUFFO0VBQzFCLElBQUlDLG1CQUFtQixHQUFHLEVBQUU7RUFDNUIsSUFBSUMsb0JBQW9CLEdBQUcsRUFBRTtFQUM3QixJQUFJQyxnQkFBZ0IsR0FBRyxFQUFFO0VBQ3pCLElBQUlDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztFQUM5QixJQUFJQyxnQkFBZ0IsR0FBRyxFQUFFO0VBQ3pCLElBQUlDLEtBQUssR0FBRyxRQUFRO0VBQ3BCLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBZTtJQUNsQyxJQUFJUCxpQkFBaUIsRUFBRTtNQUNuQixPQUFPQSxpQkFBaUI7SUFDNUI7SUFDQSxJQUFJRCxVQUFVLENBQUNoRyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3pCLE1BQU0sSUFBSXhCLEtBQUssQ0FBQywrQkFBK0IsQ0FBQztJQUNwRDtJQUNBLE9BQU93SCxVQUFVLENBQUNBLFVBQVUsQ0FBQ2hHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ3lHLE1BQU07RUFDbkQsQ0FBQztFQUNELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFlO0lBQ2hDVixVQUFVLENBQUNyRyxJQUFJLENBQUM7TUFDWjhHLE1BQU0sRUFBRVIsaUJBQWlCO01BQ3pCOUQsSUFBSSxFQUFFaUUsZ0JBQWdCO01BQ3RCTyxLQUFLLEVBQUVOLHFCQUFxQjtNQUM1Qk8sU0FBUyxFQUFFTixnQkFBZ0I7TUFDM0JPLFNBQVMsRUFBRSxTQUFBQSxVQUFBLEVBQU07UUFDYixPQUFPZCxPQUFPO01BQ2xCO0lBQ0osQ0FBQyxDQUFDO0lBQ0ZFLGlCQUFpQixHQUFHLEVBQUU7SUFDdEJDLG1CQUFtQixHQUFHLEVBQUU7SUFDeEJDLG9CQUFvQixHQUFHLEVBQUU7SUFDekJDLGdCQUFnQixHQUFHLEVBQUU7SUFDckJDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztJQUMxQkMsZ0JBQWdCLEdBQUcsRUFBRTtJQUNyQkMsS0FBSyxHQUFHLFFBQVE7RUFDcEIsQ0FBQztFQUNELElBQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQWU7SUFDN0IsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO01BQzdCLE1BQU0sSUFBSXZJLEtBQUssd0RBQUF3SSxNQUFBLENBQXVEZixpQkFBaUIsU0FBSyxDQUFDO0lBQ2pHLENBQUM7SUFDRCxJQUFJQyxtQkFBbUIsRUFBRTtNQUNyQixJQUFJRSxnQkFBZ0IsQ0FBQ3BHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDN0IrRyxrQkFBa0IsQ0FBQyxDQUFDO01BQ3hCO01BQ0FWLHFCQUFxQixDQUFDSCxtQkFBbUIsQ0FBQ2UsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHZCxvQkFBb0I7SUFDNUUsQ0FBQyxNQUNJO01BQ0QsSUFBSTlLLE1BQU0sQ0FBQ3NGLElBQUksQ0FBQzBGLHFCQUFxQixDQUFDLENBQUNyRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9DK0csa0JBQWtCLENBQUMsQ0FBQztNQUN4QjtNQUNBWCxnQkFBZ0IsQ0FBQ3pHLElBQUksQ0FBQ3dHLG9CQUFvQixDQUFDYyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3REO0lBQ0FmLG1CQUFtQixHQUFHLEVBQUU7SUFDeEJDLG9CQUFvQixHQUFHLEVBQUU7RUFDN0IsQ0FBQztFQUNELElBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQWU7SUFDN0IsSUFBSWQsZ0JBQWdCLENBQUNwRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzdCLE1BQU0sSUFBSXhCLEtBQUssbUJBQUF3SSxNQUFBLENBQWtCZixpQkFBaUIsOENBQTBDLENBQUM7SUFDakc7SUFDQSxJQUFJNUssTUFBTSxDQUFDc0YsSUFBSSxDQUFDMEYscUJBQXFCLENBQUMsQ0FBQ3JHLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDL0MsTUFBTSxJQUFJeEIsS0FBSyxtQkFBQXdJLE1BQUEsQ0FBa0JmLGlCQUFpQiwyQ0FBdUMsQ0FBQztJQUM5RjtJQUNBSyxnQkFBZ0IsQ0FBQzNHLElBQUksQ0FBQztNQUNsQlMsSUFBSSxFQUFFNkYsaUJBQWlCO01BQ3ZCdEssS0FBSyxFQUFFeUssZ0JBQWdCLENBQUNwRyxNQUFNLEdBQUcsQ0FBQyxHQUFHb0csZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUc7SUFDL0QsQ0FBQyxDQUFDO0lBQ0ZILGlCQUFpQixHQUFHLEVBQUU7SUFDdEJDLG1CQUFtQixHQUFHLEVBQUU7SUFDeEJFLGdCQUFnQixHQUFHLEVBQUU7SUFDckJHLEtBQUssR0FBRyxRQUFRO0VBQ3BCLENBQUM7RUFDRCxLQUFLLElBQUkzSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdtSyxPQUFPLENBQUMvRixNQUFNLEVBQUVwRSxDQUFDLEVBQUUsRUFBRTtJQUNyQyxJQUFNdUwsS0FBSSxHQUFHcEIsT0FBTyxDQUFDbkssQ0FBQyxDQUFDO0lBQ3ZCLFFBQVEySyxLQUFLO01BQ1QsS0FBSyxRQUFRO1FBQ1QsSUFBSVksS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkWixLQUFLLEdBQUcsV0FBVztVQUNuQjtRQUNKO1FBQ0EsSUFBSVksS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkLElBQUlsQixpQkFBaUIsRUFBRTtZQUNuQlMsZUFBZSxDQUFDLENBQUM7VUFDckI7VUFDQTtRQUNKO1FBQ0EsSUFBSVMsS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkRCxZQUFZLENBQUMsQ0FBQztVQUNkO1FBQ0o7UUFDQWpCLGlCQUFpQixJQUFJa0IsS0FBSTtRQUN6QjtNQUNKLEtBQUssV0FBVztRQUNaLElBQUlBLEtBQUksS0FBSyxHQUFHLEVBQUU7VUFDZEwsWUFBWSxDQUFDLENBQUM7VUFDZFAsS0FBSyxHQUFHLGlCQUFpQjtVQUN6QjtRQUNKO1FBQ0EsSUFBSVksS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkTCxZQUFZLENBQUMsQ0FBQztVQUNkO1FBQ0o7UUFDQSxJQUFJSyxLQUFJLEtBQUssR0FBRyxFQUFFO1VBQ2RqQixtQkFBbUIsR0FBR0Msb0JBQW9CO1VBQzFDQSxvQkFBb0IsR0FBRyxFQUFFO1VBQ3pCO1FBQ0o7UUFDQUEsb0JBQW9CLElBQUlnQixLQUFJO1FBQzVCO01BQ0osS0FBSyxpQkFBaUI7UUFDbEIsSUFBSUEsS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkRCxZQUFZLENBQUMsQ0FBQztVQUNkO1FBQ0o7UUFDQSxJQUFJQyxLQUFJLEtBQUssR0FBRyxFQUFFO1VBQ2QsTUFBTSxJQUFJM0ksS0FBSyx3QkFBQXdJLE1BQUEsQ0FBd0JSLGlCQUFpQixDQUFDLENBQUMsT0FBSSxDQUFDO1FBQ25FO1FBQ0FFLGVBQWUsQ0FBQyxDQUFDO1FBQ2pCO0lBQ1I7RUFDSjtFQUNBLFFBQVFILEtBQUs7SUFDVCxLQUFLLFFBQVE7SUFDYixLQUFLLGlCQUFpQjtNQUNsQixJQUFJTixpQkFBaUIsRUFBRTtRQUNuQlMsZUFBZSxDQUFDLENBQUM7TUFDckI7TUFDQTtJQUNKO01BQ0ksTUFBTSxJQUFJbEksS0FBSyxrREFBQXdJLE1BQUEsQ0FBK0NmLGlCQUFpQixRQUFJLENBQUM7RUFDNUY7RUFDQSxPQUFPRCxVQUFVO0FBQ3JCO0FBRUEsU0FBU29CLGtCQUFrQkEsQ0FBQ0MsS0FBSyxFQUFFO0VBQy9CLElBQU1DLFVBQVUsR0FBRyxFQUFFO0VBQ3JCRCxLQUFLLENBQUN0SixPQUFPLENBQUMsVUFBQ3dKLElBQUksRUFBSztJQUNwQkQsVUFBVSxDQUFDM0gsSUFBSSxDQUFBMEMsS0FBQSxDQUFmaUYsVUFBVSxFQUFBckMsa0JBQUEsQ0FBU3NDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO0VBQ3ZDLENBQUMsQ0FBQztFQUNGLE9BQU9GLFVBQVU7QUFDckI7QUFDQSxTQUFTRyxrQkFBa0JBLENBQUNDLEtBQUssRUFBRTtFQUMvQixPQUFRQSxLQUFLLENBQ1JDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQ25CSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1ZJLEdBQUcsQ0FBQyxVQUFVeEssQ0FBQyxFQUFFO0lBQ2xCLE9BQU9BLENBQUMsQ0FBQ3VLLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQzdCLENBQUMsQ0FBQyxDQUNHRSxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2xCO0FBRUEsU0FBU0MsbUJBQW1CQSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtFQUM5QyxJQUFJRCxPQUFPLFlBQVlFLGdCQUFnQixFQUFFO0lBQ3JDLElBQUlGLE9BQU8sQ0FBQ2pMLElBQUksS0FBSyxVQUFVLEVBQUU7TUFDN0IsSUFBTW9MLGFBQWEsR0FBR0MsNEJBQTRCLENBQUNKLE9BQU8sRUFBRSxLQUFLLENBQUM7TUFDbEUsSUFBSUcsYUFBYSxLQUFLLElBQUksRUFBRTtRQUN4QixJQUFNRSxVQUFVLEdBQUdKLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDSCxhQUFhLENBQUN6QixNQUFNLENBQUM7UUFDdkQsSUFBSTdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdUUsVUFBVSxDQUFDLEVBQUU7VUFDM0IsT0FBT0Usd0JBQXdCLENBQUNQLE9BQU8sRUFBRUssVUFBVSxDQUFDO1FBQ3hELENBQUMsTUFDSSxJQUFJL00sTUFBTSxDQUFDK00sVUFBVSxDQUFDLEtBQUtBLFVBQVUsRUFBRTtVQUN4QyxPQUFPRSx3QkFBd0IsQ0FBQ1AsT0FBTyxFQUFFMU0sTUFBTSxDQUFDdUMsTUFBTSxDQUFDd0ssVUFBVSxDQUFDLENBQUM7UUFDdkU7TUFDSjtNQUNBLElBQUlMLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQy9CLE9BQU9SLE9BQU8sQ0FBQ1MsT0FBTyxHQUFHVCxPQUFPLENBQUNsRixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSTtNQUNqRTtNQUNBLE9BQU9rRixPQUFPLENBQUNTLE9BQU87SUFDMUI7SUFDQSxPQUFPQyxVQUFVLENBQUNWLE9BQU8sQ0FBQztFQUM5QjtFQUNBLElBQUlBLE9BQU8sWUFBWVcsaUJBQWlCLEVBQUU7SUFDdEMsSUFBSVgsT0FBTyxDQUFDWSxRQUFRLEVBQUU7TUFDbEIsT0FBTy9FLEtBQUssQ0FBQzRCLElBQUksQ0FBQ3VDLE9BQU8sQ0FBQ2EsZUFBZSxDQUFDLENBQUNoQixHQUFHLENBQUMsVUFBQ2lCLEVBQUU7UUFBQSxPQUFLQSxFQUFFLENBQUNsTixLQUFLO01BQUEsRUFBQztJQUNwRTtJQUNBLE9BQU9vTSxPQUFPLENBQUNwTSxLQUFLO0VBQ3hCO0VBQ0EsSUFBSW9NLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDbk4sS0FBSyxFQUFFO0lBQ3ZCLE9BQU9vTSxPQUFPLENBQUNlLE9BQU8sQ0FBQ25OLEtBQUs7RUFDaEM7RUFDQSxJQUFJLE9BQU8sSUFBSW9NLE9BQU8sRUFBRTtJQUNwQixPQUFPQSxPQUFPLENBQUNwTSxLQUFLO0VBQ3hCO0VBQ0EsSUFBSW9NLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQy9CLE9BQU9SLE9BQU8sQ0FBQ2xGLFlBQVksQ0FBQyxPQUFPLENBQUM7RUFDeEM7RUFDQSxPQUFPLElBQUk7QUFDZjtBQUNBLFNBQVNrRyxpQkFBaUJBLENBQUNoQixPQUFPLEVBQUVwTSxLQUFLLEVBQUU7RUFDdkMsSUFBSW9NLE9BQU8sWUFBWUUsZ0JBQWdCLEVBQUU7SUFDckMsSUFBSUYsT0FBTyxDQUFDakwsSUFBSSxLQUFLLE1BQU0sRUFBRTtNQUN6QjtJQUNKO0lBQ0EsSUFBSWlMLE9BQU8sQ0FBQ2pMLElBQUksS0FBSyxPQUFPLEVBQUU7TUFDMUJpTCxPQUFPLENBQUNTLE9BQU8sR0FBR1QsT0FBTyxDQUFDcE0sS0FBSyxJQUFJQSxLQUFLO01BQ3hDO0lBQ0o7SUFDQSxJQUFJb00sT0FBTyxDQUFDakwsSUFBSSxLQUFLLFVBQVUsRUFBRTtNQUM3QixJQUFJOEcsS0FBSyxDQUFDQyxPQUFPLENBQUNsSSxLQUFLLENBQUMsRUFBRTtRQUN0QixJQUFJcU4sVUFBVSxHQUFHLEtBQUs7UUFDdEJyTixLQUFLLENBQUNvQyxPQUFPLENBQUMsVUFBQ2tMLEdBQUcsRUFBSztVQUNuQixJQUFJQSxHQUFHLElBQUlsQixPQUFPLENBQUNwTSxLQUFLLEVBQUU7WUFDdEJxTixVQUFVLEdBQUcsSUFBSTtVQUNyQjtRQUNKLENBQUMsQ0FBQztRQUNGakIsT0FBTyxDQUFDUyxPQUFPLEdBQUdRLFVBQVU7TUFDaEMsQ0FBQyxNQUNJO1FBQ0QsSUFBSWpCLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1VBQy9CUixPQUFPLENBQUNTLE9BQU8sR0FBR1QsT0FBTyxDQUFDcE0sS0FBSyxJQUFJQSxLQUFLO1FBQzVDLENBQUMsTUFDSTtVQUNEb00sT0FBTyxDQUFDUyxPQUFPLEdBQUc3TSxLQUFLO1FBQzNCO01BQ0o7TUFDQTtJQUNKO0VBQ0o7RUFDQSxJQUFJb00sT0FBTyxZQUFZVyxpQkFBaUIsRUFBRTtJQUN0QyxJQUFNUSxpQkFBaUIsR0FBRyxFQUFFLENBQUNsQyxNQUFNLENBQUNyTCxLQUFLLENBQUMsQ0FBQ2lNLEdBQUcsQ0FBQyxVQUFDak0sS0FBSyxFQUFLO01BQ3RELE9BQU9BLEtBQUssR0FBRyxFQUFFO0lBQ3JCLENBQUMsQ0FBQztJQUNGaUksS0FBSyxDQUFDNEIsSUFBSSxDQUFDdUMsT0FBTyxDQUFDb0IsT0FBTyxDQUFDLENBQUNwTCxPQUFPLENBQUMsVUFBQ3FMLE1BQU0sRUFBSztNQUM1Q0EsTUFBTSxDQUFDQyxRQUFRLEdBQUdILGlCQUFpQixDQUFDSSxRQUFRLENBQUNGLE1BQU0sQ0FBQ3pOLEtBQUssQ0FBQztJQUM5RCxDQUFDLENBQUM7SUFDRjtFQUNKO0VBQ0FBLEtBQUssR0FBR0EsS0FBSyxLQUFLNEcsU0FBUyxHQUFHLEVBQUUsR0FBRzVHLEtBQUs7RUFDeENvTSxPQUFPLENBQUNwTSxLQUFLLEdBQUdBLEtBQUs7QUFDekI7QUFDQSxTQUFTNE4sZ0NBQWdDQSxDQUFDeEIsT0FBTyxFQUFFO0VBQy9DLElBQUksQ0FBQ0EsT0FBTyxDQUFDZSxPQUFPLENBQUNwQixLQUFLLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0VBQ2I7RUFDQSxJQUFNMUIsVUFBVSxHQUFHRixlQUFlLENBQUNpQyxPQUFPLENBQUNlLE9BQU8sQ0FBQ3BCLEtBQUssQ0FBQztFQUN6RDFCLFVBQVUsQ0FBQ2pJLE9BQU8sQ0FBQyxVQUFDeUwsU0FBUyxFQUFLO0lBQzlCLElBQUlBLFNBQVMsQ0FBQ3JILElBQUksQ0FBQ25DLE1BQU0sR0FBRyxDQUFDLElBQUl3SixTQUFTLENBQUM3QyxLQUFLLENBQUMzRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3pELE1BQU0sSUFBSXhCLEtBQUsscUJBQUF3SSxNQUFBLENBQW9CZSxPQUFPLENBQUNlLE9BQU8sQ0FBQ3BCLEtBQUssOEVBQTBFLENBQUM7SUFDdkk7SUFDQThCLFNBQVMsQ0FBQy9DLE1BQU0sR0FBR2dCLGtCQUFrQixDQUFDK0IsU0FBUyxDQUFDL0MsTUFBTSxDQUFDO0VBQzNELENBQUMsQ0FBQztFQUNGLE9BQU9ULFVBQVU7QUFDckI7QUFDQSxTQUFTbUMsNEJBQTRCQSxDQUFDSixPQUFPLEVBQXlCO0VBQUEsSUFBdkIwQixjQUFjLEdBQUFySCxTQUFBLENBQUFwQyxNQUFBLFFBQUFvQyxTQUFBLFFBQUFHLFNBQUEsR0FBQUgsU0FBQSxNQUFHLElBQUk7RUFDaEUsSUFBTXNILG1CQUFtQixHQUFHSCxnQ0FBZ0MsQ0FBQ3hCLE9BQU8sQ0FBQztFQUNyRSxJQUFJMkIsbUJBQW1CLENBQUMxSixNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ2hDLE9BQU8wSixtQkFBbUIsQ0FBQyxDQUFDLENBQUM7RUFDakM7RUFDQSxJQUFJM0IsT0FBTyxDQUFDbEYsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQzlCLElBQU04RyxXQUFXLEdBQUc1QixPQUFPLENBQUM2QixPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzNDLElBQUlELFdBQVcsSUFBSSxPQUFPLElBQUlBLFdBQVcsQ0FBQ2IsT0FBTyxFQUFFO01BQy9DLElBQU05QyxVQUFVLEdBQUdGLGVBQWUsQ0FBQzZELFdBQVcsQ0FBQ2IsT0FBTyxDQUFDcEIsS0FBSyxJQUFJLEdBQUcsQ0FBQztNQUNwRSxJQUFNOEIsU0FBUyxHQUFHeEQsVUFBVSxDQUFDLENBQUMsQ0FBQztNQUMvQixJQUFJd0QsU0FBUyxDQUFDckgsSUFBSSxDQUFDbkMsTUFBTSxHQUFHLENBQUMsSUFBSXdKLFNBQVMsQ0FBQzdDLEtBQUssQ0FBQzNHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekQsTUFBTSxJQUFJeEIsS0FBSyxxQkFBQXdJLE1BQUEsQ0FBb0IyQyxXQUFXLENBQUNiLE9BQU8sQ0FBQ3BCLEtBQUssOEVBQTBFLENBQUM7TUFDM0k7TUFDQThCLFNBQVMsQ0FBQy9DLE1BQU0sR0FBR2dCLGtCQUFrQixDQUFDTSxPQUFPLENBQUNsRixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDbkUsT0FBTzJHLFNBQVM7SUFDcEI7RUFDSjtFQUNBLElBQUksQ0FBQ0MsY0FBYyxFQUFFO0lBQ2pCLE9BQU8sSUFBSTtFQUNmO0VBQ0EsTUFBTSxJQUFJakwsS0FBSywwQ0FBQXdJLE1BQUEsQ0FBeUM2QyxtQkFBbUIsQ0FBQzlCLE9BQU8sQ0FBQyx1SEFBNkcsQ0FBQztBQUN0TTtBQUNBLFNBQVMrQiw2QkFBNkJBLENBQUMvQixPQUFPLEVBQUVnQyxTQUFTLEVBQUU7RUFDdkQsSUFBSUEsU0FBUyxDQUFDaEMsT0FBTyxLQUFLQSxPQUFPLEVBQUU7SUFDL0IsT0FBTyxJQUFJO0VBQ2Y7RUFDQSxJQUFJLENBQUNnQyxTQUFTLENBQUNoQyxPQUFPLENBQUNpQyxRQUFRLENBQUNqQyxPQUFPLENBQUMsRUFBRTtJQUN0QyxPQUFPLEtBQUs7RUFDaEI7RUFDQSxJQUFJa0MsbUJBQW1CLEdBQUcsS0FBSztFQUMvQkYsU0FBUyxDQUFDRyxXQUFXLENBQUMsQ0FBQyxDQUFDbk0sT0FBTyxDQUFDLFVBQUNvTSxjQUFjLEVBQUs7SUFDaEQsSUFBSUYsbUJBQW1CLEVBQUU7TUFDckI7SUFDSjtJQUNBLElBQUlFLGNBQWMsQ0FBQ3BDLE9BQU8sS0FBS0EsT0FBTyxJQUFJb0MsY0FBYyxDQUFDcEMsT0FBTyxDQUFDaUMsUUFBUSxDQUFDakMsT0FBTyxDQUFDLEVBQUU7TUFDaEZrQyxtQkFBbUIsR0FBRyxJQUFJO0lBQzlCO0VBQ0osQ0FBQyxDQUFDO0VBQ0YsT0FBTyxDQUFDQSxtQkFBbUI7QUFDL0I7QUFDQSxTQUFTRyxnQkFBZ0JBLENBQUNyQyxPQUFPLEVBQUU7RUFDL0IsSUFBTXNDLFVBQVUsR0FBR3RDLE9BQU8sQ0FBQ3VDLFNBQVMsQ0FBQyxJQUFJLENBQUM7RUFDMUMsSUFBSSxFQUFFRCxVQUFVLFlBQVlFLFdBQVcsQ0FBQyxFQUFFO0lBQ3RDLE1BQU0sSUFBSS9MLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztFQUM5QztFQUNBLE9BQU82TCxVQUFVO0FBQ3JCO0FBQ0EsU0FBU0csYUFBYUEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3pCLElBQU1DLFFBQVEsR0FBRy9ILFFBQVEsQ0FBQ2dJLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDbkRGLElBQUksR0FBR0EsSUFBSSxDQUFDeEQsSUFBSSxDQUFDLENBQUM7RUFDbEJ5RCxRQUFRLENBQUNFLFNBQVMsR0FBR0gsSUFBSTtFQUN6QixJQUFJQyxRQUFRLENBQUMzRSxPQUFPLENBQUM4RSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7SUFDeEMsTUFBTSxJQUFJck0sS0FBSyw0QkFBQXdJLE1BQUEsQ0FBNEIwRCxRQUFRLENBQUMzRSxPQUFPLENBQUM4RSxpQkFBaUIsbURBQWdELENBQUM7RUFDbEk7RUFDQSxJQUFNQyxLQUFLLEdBQUdKLFFBQVEsQ0FBQzNFLE9BQU8sQ0FBQ2dGLGlCQUFpQjtFQUNoRCxJQUFJLENBQUNELEtBQUssRUFBRTtJQUNSLE1BQU0sSUFBSXRNLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztFQUN0QztFQUNBLElBQUksRUFBRXNNLEtBQUssWUFBWVAsV0FBVyxDQUFDLEVBQUU7SUFDakMsTUFBTSxJQUFJL0wsS0FBSywyQ0FBQXdJLE1BQUEsQ0FBMkN5RCxJQUFJLENBQUN4RCxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUM7RUFDNUU7RUFDQSxPQUFPNkQsS0FBSztBQUNoQjtBQUNBLFNBQVNqQixtQkFBbUJBLENBQUM5QixPQUFPLEVBQUU7RUFDbEMsT0FBT0EsT0FBTyxDQUFDNkMsU0FBUyxHQUNsQjdDLE9BQU8sQ0FBQ2lELFNBQVMsQ0FBQ2hLLEtBQUssQ0FBQyxDQUFDLEVBQUUrRyxPQUFPLENBQUNpRCxTQUFTLENBQUNDLE9BQU8sQ0FBQ2xELE9BQU8sQ0FBQzZDLFNBQVMsQ0FBQyxDQUFDLEdBQ3hFN0MsT0FBTyxDQUFDaUQsU0FBUztBQUMzQjtBQUNBLElBQU0xQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCQSxDQUFhUCxPQUFPLEVBQUVtRCxhQUFhLEVBQUU7RUFDL0QsSUFBTUMsV0FBVyxHQUFBbEcsa0JBQUEsQ0FBT2lHLGFBQWEsQ0FBQztFQUN0QyxJQUFNdlAsS0FBSyxHQUFHOE0sVUFBVSxDQUFDVixPQUFPLENBQUM7RUFDakMsSUFBTXFELEtBQUssR0FBR0YsYUFBYSxDQUFDRCxPQUFPLENBQUN0UCxLQUFLLENBQUM7RUFDMUMsSUFBSW9NLE9BQU8sQ0FBQ1MsT0FBTyxFQUFFO0lBQ2pCLElBQUk0QyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDZEQsV0FBVyxDQUFDeEwsSUFBSSxDQUFDaEUsS0FBSyxDQUFDO0lBQzNCO0lBQ0EsT0FBT3dQLFdBQVc7RUFDdEI7RUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWkQsV0FBVyxDQUFDRSxNQUFNLENBQUNELEtBQUssRUFBRSxDQUFDLENBQUM7RUFDaEM7RUFDQSxPQUFPRCxXQUFXO0FBQ3RCLENBQUM7QUFDRCxJQUFNMUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQWFWLE9BQU8sRUFBRTtFQUNsQyxPQUFPQSxPQUFPLENBQUNlLE9BQU8sQ0FBQ25OLEtBQUssR0FBR29NLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDbk4sS0FBSyxHQUFHb00sT0FBTyxDQUFDcE0sS0FBSztBQUN4RSxDQUFDO0FBRUQsU0FBUzJQLFdBQVdBLENBQUNDLElBQUksRUFBRUMsWUFBWSxFQUFFO0VBQ3JDLElBQUFDLGNBQUEsR0FBdUNDLGFBQWEsQ0FBQ0gsSUFBSSxFQUFFQyxZQUFZLENBQUM7SUFBaEVHLGdCQUFnQixHQUFBRixjQUFBLENBQWhCRSxnQkFBZ0I7SUFBRUMsUUFBUSxHQUFBSCxjQUFBLENBQVJHLFFBQVE7RUFDbEMsSUFBSUQsZ0JBQWdCLEtBQUtwSixTQUFTLEVBQUU7SUFDaEMsT0FBT0EsU0FBUztFQUNwQjtFQUNBLE9BQU9vSixnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDO0FBQ3JDO0FBQ0EsSUFBTUYsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFhSCxJQUFJLEVBQUVDLFlBQVksRUFBRTtFQUNoRCxJQUFNSyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDLENBQUM7RUFDbEQsSUFBSUksZ0JBQWdCLEdBQUdFLFNBQVM7RUFDaEMsSUFBTXhFLEtBQUssR0FBR21FLFlBQVksQ0FBQ2hFLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDckMsS0FBSyxJQUFJNUwsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeUwsS0FBSyxDQUFDckgsTUFBTSxHQUFHLENBQUMsRUFBRXBFLENBQUMsRUFBRSxFQUFFO0lBQ3ZDK1AsZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDdEUsS0FBSyxDQUFDekwsQ0FBQyxDQUFDLENBQUM7RUFDakQ7RUFDQSxJQUFNZ1EsUUFBUSxHQUFHdkUsS0FBSyxDQUFDQSxLQUFLLENBQUNySCxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ3hDLE9BQU87SUFDSDJMLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCRSxTQUFTLEVBQVRBLFNBQVM7SUFDVEQsUUFBUSxFQUFSQSxRQUFRO0lBQ1J2RSxLQUFLLEVBQUxBO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFBQyxJQUVJNEUsVUFBVTtFQUNaLFNBQUFBLFdBQVk5SCxLQUFLLEVBQUU7SUFBQUwsZUFBQSxPQUFBbUksVUFBQTtJQUNmLElBQUksQ0FBQzlILEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLENBQUMrSCxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUNqSSxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7RUFBQ0csWUFBQSxDQUFBMkgsVUFBQTtJQUFBcEssR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUEwTSxJQUFJakksSUFBSSxFQUFFO01BQ04sSUFBTWlNLGNBQWMsR0FBRzVFLGtCQUFrQixDQUFDckgsSUFBSSxDQUFDO01BQy9DLElBQUksSUFBSSxDQUFDOEwsVUFBVSxDQUFDRyxjQUFjLENBQUMsS0FBSzlKLFNBQVMsRUFBRTtRQUMvQyxPQUFPLElBQUksQ0FBQzJKLFVBQVUsQ0FBQ0csY0FBYyxDQUFDO01BQzFDO01BQ0EsSUFBSSxJQUFJLENBQUNGLFlBQVksQ0FBQ0UsY0FBYyxDQUFDLEtBQUs5SixTQUFTLEVBQUU7UUFDakQsT0FBTyxJQUFJLENBQUM0SixZQUFZLENBQUNFLGNBQWMsQ0FBQztNQUM1QztNQUNBLElBQUksSUFBSSxDQUFDbEksS0FBSyxDQUFDa0ksY0FBYyxDQUFDLEtBQUs5SixTQUFTLEVBQUU7UUFDMUMsT0FBTyxJQUFJLENBQUM0QixLQUFLLENBQUNrSSxjQUFjLENBQUM7TUFDckM7TUFDQSxPQUFPZixXQUFXLENBQUMsSUFBSSxDQUFDbkgsS0FBSyxFQUFFa0ksY0FBYyxDQUFDO0lBQ2xEO0VBQUM7SUFBQXhLLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBMlEsSUFBSWxNLElBQUksRUFBRTtNQUNOLE9BQU8sSUFBSSxDQUFDaUksR0FBRyxDQUFDakksSUFBSSxDQUFDLEtBQUttQyxTQUFTO0lBQ3ZDO0VBQUM7SUFBQVYsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE0USxJQUFJbk0sSUFBSSxFQUFFekUsS0FBSyxFQUFFO01BQ2IsSUFBTTBRLGNBQWMsR0FBRzVFLGtCQUFrQixDQUFDckgsSUFBSSxDQUFDO01BQy9DLElBQU1vTSxZQUFZLEdBQUcsSUFBSSxDQUFDbkUsR0FBRyxDQUFDZ0UsY0FBYyxDQUFDO01BQzdDLElBQUlHLFlBQVksS0FBSzdRLEtBQUssRUFBRTtRQUN4QixPQUFPLEtBQUs7TUFDaEI7TUFDQSxJQUFJLENBQUN1USxVQUFVLENBQUNHLGNBQWMsQ0FBQyxHQUFHMVEsS0FBSztNQUN2QyxPQUFPLElBQUk7SUFDZjtFQUFDO0lBQUFrRyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQThRLGlCQUFBLEVBQW1CO01BQ2YsT0FBT3BSLE1BQU0sQ0FBQ3FSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUN2SSxLQUFLLENBQUM7SUFDeEM7RUFBQztJQUFBdEMsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFnUixjQUFBLEVBQWdCO01BQ1osT0FBT3RSLE1BQU0sQ0FBQ3FSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNSLFVBQVUsQ0FBQztJQUM3QztFQUFDO0lBQUFySyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWlSLDBCQUFBLEVBQTRCO01BQ3hCLE9BQU92UixNQUFNLENBQUNxUixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDTixzQkFBc0IsQ0FBQztJQUN6RDtFQUFDO0lBQUF2SyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWtSLHlCQUFBLEVBQTJCO01BQ3ZCLElBQUksQ0FBQ1YsWUFBWSxHQUFHOVEsTUFBTSxDQUFDcVIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ1IsVUFBVSxDQUFDO01BQ3RELElBQUksQ0FBQ0EsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QjtFQUFDO0lBQUFySyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQW1SLHFCQUFxQjNJLEtBQUssRUFBRTtNQUN4QixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztNQUNsQixJQUFJLENBQUNpSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7TUFDaEMsSUFBSSxDQUFDRCxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQzFCO0VBQUM7SUFBQXRLLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBb1IsNEJBQUEsRUFBOEI7TUFDMUIsSUFBSSxDQUFDYixVQUFVLEdBQUc3USxNQUFNLENBQUNxUixNQUFNLENBQUNyUixNQUFNLENBQUNxUixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDUCxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUNELFVBQVUsQ0FBQztNQUN0RixJQUFJLENBQUNDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUI7RUFBQztJQUFBdEssR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFxUix3QkFBd0I3SSxLQUFLLEVBQUU7TUFDM0IsSUFBSThJLE9BQU8sR0FBRyxLQUFLO01BQ25CLFNBQUFDLEVBQUEsTUFBQUMsZUFBQSxHQUEyQjlSLE1BQU0sQ0FBQytSLE9BQU8sQ0FBQ2pKLEtBQUssQ0FBQyxFQUFBK0ksRUFBQSxHQUFBQyxlQUFBLENBQUFuTixNQUFBLEVBQUFrTixFQUFBLElBQUU7UUFBN0MsSUFBQUcsa0JBQUEsR0FBQS9KLGNBQUEsQ0FBQTZKLGVBQUEsQ0FBQUQsRUFBQTtVQUFPckwsR0FBRyxHQUFBd0wsa0JBQUE7VUFBRTFSLEtBQUssR0FBQTBSLGtCQUFBO1FBQ2xCLElBQU1iLFlBQVksR0FBRyxJQUFJLENBQUNuRSxHQUFHLENBQUN4RyxHQUFHLENBQUM7UUFDbEMsSUFBSTJLLFlBQVksS0FBSzdRLEtBQUssRUFBRTtVQUN4QnNSLE9BQU8sR0FBRyxJQUFJO1FBQ2xCO01BQ0o7TUFDQSxJQUFJQSxPQUFPLEVBQUU7UUFDVCxJQUFJLENBQUNiLHNCQUFzQixHQUFHakksS0FBSztNQUN2QztNQUNBLE9BQU84SSxPQUFPO0lBQ2xCO0VBQUM7RUFBQSxPQUFBaEIsVUFBQTtBQUFBO0FBR0wsSUFBSXFCLHNCQUFzQixHQUFHLEVBQUU7QUFFL0IsU0FBU0MsVUFBVUEsQ0FBQ0MsUUFBUSxFQUFFQyxNQUFNLEVBQUU7RUFDbEMsSUFBSUMsV0FBVyxHQUFHRCxNQUFNLENBQUNFLFVBQVU7RUFDbkMsSUFBSUMsSUFBSTtFQUNSLElBQUlDLFFBQVE7RUFDWixJQUFJQyxnQkFBZ0I7RUFDcEIsSUFBSUMsU0FBUztFQUNiLElBQUlDLFNBQVM7O0VBRWI7RUFDQSxJQUFJUCxNQUFNLENBQUNRLFFBQVEsS0FBS1gsc0JBQXNCLElBQUlFLFFBQVEsQ0FBQ1MsUUFBUSxLQUFLWCxzQkFBc0IsRUFBRTtJQUM5RjtFQUNGOztFQUVBO0VBQ0EsS0FBSyxJQUFJMVIsQ0FBQyxHQUFHOFIsV0FBVyxDQUFDMU4sTUFBTSxHQUFHLENBQUMsRUFBRXBFLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO0lBQzlDZ1MsSUFBSSxHQUFHRixXQUFXLENBQUM5UixDQUFDLENBQUM7SUFDckJpUyxRQUFRLEdBQUdELElBQUksQ0FBQ3hOLElBQUk7SUFDcEIwTixnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDTSxZQUFZO0lBQ3BDSCxTQUFTLEdBQUdILElBQUksQ0FBQ2pTLEtBQUs7SUFFdEIsSUFBSW1TLGdCQUFnQixFQUFFO01BQ2xCRCxRQUFRLEdBQUdELElBQUksQ0FBQ08sU0FBUyxJQUFJTixRQUFRO01BQ3JDRyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ1ksY0FBYyxDQUFDTixnQkFBZ0IsRUFBRUQsUUFBUSxDQUFDO01BRS9ELElBQUlHLFNBQVMsS0FBS0QsU0FBUyxFQUFFO1FBQ3pCLElBQUlILElBQUksQ0FBQ1MsTUFBTSxLQUFLLE9BQU8sRUFBQztVQUN4QlIsUUFBUSxHQUFHRCxJQUFJLENBQUN4TixJQUFJLENBQUMsQ0FBQztRQUMxQjs7UUFDQW9OLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDUixnQkFBZ0IsRUFBRUQsUUFBUSxFQUFFRSxTQUFTLENBQUM7TUFDbEU7SUFDSixDQUFDLE1BQU07TUFDSEMsU0FBUyxHQUFHUixRQUFRLENBQUMzSyxZQUFZLENBQUNnTCxRQUFRLENBQUM7TUFFM0MsSUFBSUcsU0FBUyxLQUFLRCxTQUFTLEVBQUU7UUFDekJQLFFBQVEsQ0FBQ2UsWUFBWSxDQUFDVixRQUFRLEVBQUVFLFNBQVMsQ0FBQztNQUM5QztJQUNKO0VBQ0o7O0VBRUE7RUFDQTtFQUNBLElBQUlTLGFBQWEsR0FBR2hCLFFBQVEsQ0FBQ0csVUFBVTtFQUV2QyxLQUFLLElBQUlsUSxDQUFDLEdBQUcrUSxhQUFhLENBQUN4TyxNQUFNLEdBQUcsQ0FBQyxFQUFFdkMsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDaERtUSxJQUFJLEdBQUdZLGFBQWEsQ0FBQy9RLENBQUMsQ0FBQztJQUN2Qm9RLFFBQVEsR0FBR0QsSUFBSSxDQUFDeE4sSUFBSTtJQUNwQjBOLGdCQUFnQixHQUFHRixJQUFJLENBQUNNLFlBQVk7SUFFcEMsSUFBSUosZ0JBQWdCLEVBQUU7TUFDbEJELFFBQVEsR0FBR0QsSUFBSSxDQUFDTyxTQUFTLElBQUlOLFFBQVE7TUFFckMsSUFBSSxDQUFDSixNQUFNLENBQUNnQixjQUFjLENBQUNYLGdCQUFnQixFQUFFRCxRQUFRLENBQUMsRUFBRTtRQUNwREwsUUFBUSxDQUFDa0IsaUJBQWlCLENBQUNaLGdCQUFnQixFQUFFRCxRQUFRLENBQUM7TUFDMUQ7SUFDSixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNKLE1BQU0sQ0FBQ2xGLFlBQVksQ0FBQ3NGLFFBQVEsQ0FBQyxFQUFFO1FBQ2hDTCxRQUFRLENBQUNtQixlQUFlLENBQUNkLFFBQVEsQ0FBQztNQUN0QztJQUNKO0VBQ0o7QUFDSjtBQUVBLElBQUllLEtBQUssQ0FBQyxDQUFDO0FBQ1gsSUFBSUMsUUFBUSxHQUFHLDhCQUE4QjtBQUU3QyxJQUFJQyxHQUFHLEdBQUcsT0FBT25NLFFBQVEsS0FBSyxXQUFXLEdBQUdKLFNBQVMsR0FBR0ksUUFBUTtBQUNoRSxJQUFJb00sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDRCxHQUFHLElBQUksU0FBUyxJQUFJQSxHQUFHLENBQUNuRSxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQzlFLElBQUlxRSxpQkFBaUIsR0FBRyxDQUFDLENBQUNGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRyxXQUFXLElBQUksMEJBQTBCLElBQUlILEdBQUcsQ0FBQ0csV0FBVyxDQUFDLENBQUM7QUFFbkcsU0FBU0MsMEJBQTBCQSxDQUFDQyxHQUFHLEVBQUU7RUFDckMsSUFBSXpFLFFBQVEsR0FBR29FLEdBQUcsQ0FBQ25FLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDNUNELFFBQVEsQ0FBQ0UsU0FBUyxHQUFHdUUsR0FBRztFQUN4QixPQUFPekUsUUFBUSxDQUFDM0UsT0FBTyxDQUFDcUosVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN6QztBQUVBLFNBQVNDLHVCQUF1QkEsQ0FBQ0YsR0FBRyxFQUFFO0VBQ2xDLElBQUksQ0FBQ1AsS0FBSyxFQUFFO0lBQ1JBLEtBQUssR0FBR0UsR0FBRyxDQUFDRyxXQUFXLENBQUMsQ0FBQztJQUN6QkwsS0FBSyxDQUFDVSxVQUFVLENBQUNSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO0VBQzlCO0VBRUEsSUFBSUMsUUFBUSxHQUFHWixLQUFLLENBQUNhLHdCQUF3QixDQUFDTixHQUFHLENBQUM7RUFDbEQsT0FBT0ssUUFBUSxDQUFDSixVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ2pDO0FBRUEsU0FBU00sc0JBQXNCQSxDQUFDUCxHQUFHLEVBQUU7RUFDakMsSUFBSUssUUFBUSxHQUFHVixHQUFHLENBQUNuRSxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ3hDNkUsUUFBUSxDQUFDNUUsU0FBUyxHQUFHdUUsR0FBRztFQUN4QixPQUFPSyxRQUFRLENBQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNPLFNBQVNBLENBQUNSLEdBQUcsRUFBRTtFQUNwQkEsR0FBRyxHQUFHQSxHQUFHLENBQUNsSSxJQUFJLENBQUMsQ0FBQztFQUNoQixJQUFJOEgsb0JBQW9CLEVBQUU7SUFDeEI7SUFDQTtJQUNBO0lBQ0EsT0FBT0csMEJBQTBCLENBQUNDLEdBQUcsQ0FBQztFQUN4QyxDQUFDLE1BQU0sSUFBSUgsaUJBQWlCLEVBQUU7SUFDNUIsT0FBT0ssdUJBQXVCLENBQUNGLEdBQUcsQ0FBQztFQUNyQztFQUVBLE9BQU9PLHNCQUFzQixDQUFDUCxHQUFHLENBQUM7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTUyxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0VBQ3BDLElBQUlDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxRQUFRO0VBQ2xDLElBQUlDLFVBQVUsR0FBR0gsSUFBSSxDQUFDRSxRQUFRO0VBQzlCLElBQUlFLGFBQWEsRUFBRUMsV0FBVztFQUU5QixJQUFJSixZQUFZLEtBQUtFLFVBQVUsRUFBRTtJQUM3QixPQUFPLElBQUk7RUFDZjtFQUVBQyxhQUFhLEdBQUdILFlBQVksQ0FBQ0ssVUFBVSxDQUFDLENBQUMsQ0FBQztFQUMxQ0QsV0FBVyxHQUFHRixVQUFVLENBQUNHLFVBQVUsQ0FBQyxDQUFDLENBQUM7O0VBRXRDO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSUYsYUFBYSxJQUFJLEVBQUUsSUFBSUMsV0FBVyxJQUFJLEVBQUUsRUFBRTtJQUFFO0lBQzVDLE9BQU9KLFlBQVksS0FBS0UsVUFBVSxDQUFDSSxXQUFXLENBQUMsQ0FBQztFQUNwRCxDQUFDLE1BQU0sSUFBSUYsV0FBVyxJQUFJLEVBQUUsSUFBSUQsYUFBYSxJQUFJLEVBQUUsRUFBRTtJQUFFO0lBQ25ELE9BQU9ELFVBQVUsS0FBS0YsWUFBWSxDQUFDTSxXQUFXLENBQUMsQ0FBQztFQUNwRCxDQUFDLE1BQU07SUFDSCxPQUFPLEtBQUs7RUFDaEI7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxlQUFlQSxDQUFDbFEsSUFBSSxFQUFFOE4sWUFBWSxFQUFFO0VBQ3pDLE9BQU8sQ0FBQ0EsWUFBWSxJQUFJQSxZQUFZLEtBQUtXLFFBQVEsR0FDN0NDLEdBQUcsQ0FBQ25FLGFBQWEsQ0FBQ3ZLLElBQUksQ0FBQyxHQUN2QjBPLEdBQUcsQ0FBQ3dCLGVBQWUsQ0FBQ3BDLFlBQVksRUFBRTlOLElBQUksQ0FBQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTbVEsWUFBWUEsQ0FBQ1YsTUFBTSxFQUFFQyxJQUFJLEVBQUU7RUFDaEMsSUFBSVUsUUFBUSxHQUFHWCxNQUFNLENBQUNZLFVBQVU7RUFDaEMsT0FBT0QsUUFBUSxFQUFFO0lBQ2IsSUFBSUUsU0FBUyxHQUFHRixRQUFRLENBQUNHLFdBQVc7SUFDcENiLElBQUksQ0FBQ2MsV0FBVyxDQUFDSixRQUFRLENBQUM7SUFDMUJBLFFBQVEsR0FBR0UsU0FBUztFQUN4QjtFQUNBLE9BQU9aLElBQUk7QUFDZjtBQUVBLFNBQVNlLG1CQUFtQkEsQ0FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFMVAsSUFBSSxFQUFFO0VBQzdDLElBQUl5UCxNQUFNLENBQUN6UCxJQUFJLENBQUMsS0FBSzBQLElBQUksQ0FBQzFQLElBQUksQ0FBQyxFQUFFO0lBQzdCeVAsTUFBTSxDQUFDelAsSUFBSSxDQUFDLEdBQUcwUCxJQUFJLENBQUMxUCxJQUFJLENBQUM7SUFDekIsSUFBSXlQLE1BQU0sQ0FBQ3pQLElBQUksQ0FBQyxFQUFFO01BQ2R5UCxNQUFNLENBQUN0QixZQUFZLENBQUNuTyxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsTUFBTTtNQUNIeVAsTUFBTSxDQUFDbEIsZUFBZSxDQUFDdk8sSUFBSSxDQUFDO0lBQ2hDO0VBQ0o7QUFDSjtBQUVBLElBQUkwUSxpQkFBaUIsR0FBRztFQUNwQkMsTUFBTSxFQUFFLFNBQUFBLE9BQVNsQixNQUFNLEVBQUVDLElBQUksRUFBRTtJQUMzQixJQUFJa0IsVUFBVSxHQUFHbkIsTUFBTSxDQUFDbUIsVUFBVTtJQUNsQyxJQUFJQSxVQUFVLEVBQUU7TUFDWixJQUFJQyxVQUFVLEdBQUdELFVBQVUsQ0FBQ2hCLFFBQVEsQ0FBQ0ssV0FBVyxDQUFDLENBQUM7TUFDbEQsSUFBSVksVUFBVSxLQUFLLFVBQVUsRUFBRTtRQUMzQkQsVUFBVSxHQUFHQSxVQUFVLENBQUNBLFVBQVU7UUFDbENDLFVBQVUsR0FBR0QsVUFBVSxJQUFJQSxVQUFVLENBQUNoQixRQUFRLENBQUNLLFdBQVcsQ0FBQyxDQUFDO01BQ2hFO01BQ0EsSUFBSVksVUFBVSxLQUFLLFFBQVEsSUFBSSxDQUFDRCxVQUFVLENBQUN6SSxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakUsSUFBSXNILE1BQU0sQ0FBQ3RILFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDdUgsSUFBSSxDQUFDekcsUUFBUSxFQUFFO1VBQ25EO1VBQ0E7VUFDQTtVQUNBd0csTUFBTSxDQUFDdEIsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7VUFDM0NzQixNQUFNLENBQUNsQixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQ3RDO1FBQ0E7UUFDQTtRQUNBO1FBQ0FxQyxVQUFVLENBQUNFLGFBQWEsR0FBRyxDQUFDLENBQUM7TUFDakM7SUFDSjtJQUNBTCxtQkFBbUIsQ0FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztFQUNqRCxDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lxQixLQUFLLEVBQUUsU0FBQUEsTUFBU3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0lBQzFCZSxtQkFBbUIsQ0FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztJQUM1Q2UsbUJBQW1CLENBQUNoQixNQUFNLEVBQUVDLElBQUksRUFBRSxVQUFVLENBQUM7SUFFN0MsSUFBSUQsTUFBTSxDQUFDbFUsS0FBSyxLQUFLbVUsSUFBSSxDQUFDblUsS0FBSyxFQUFFO01BQzdCa1UsTUFBTSxDQUFDbFUsS0FBSyxHQUFHbVUsSUFBSSxDQUFDblUsS0FBSztJQUM3QjtJQUVBLElBQUksQ0FBQ21VLElBQUksQ0FBQ3ZILFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtNQUM3QnNILE1BQU0sQ0FBQ2xCLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbkM7RUFDSixDQUFDO0VBRUR5QyxRQUFRLEVBQUUsU0FBQUEsU0FBU3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0lBQzdCLElBQUl1QixRQUFRLEdBQUd2QixJQUFJLENBQUNuVSxLQUFLO0lBQ3pCLElBQUlrVSxNQUFNLENBQUNsVSxLQUFLLEtBQUswVixRQUFRLEVBQUU7TUFDM0J4QixNQUFNLENBQUNsVSxLQUFLLEdBQUcwVixRQUFRO0lBQzNCO0lBRUEsSUFBSVosVUFBVSxHQUFHWixNQUFNLENBQUNZLFVBQVU7SUFDbEMsSUFBSUEsVUFBVSxFQUFFO01BQ1o7TUFDQTtNQUNBLElBQUlhLFFBQVEsR0FBR2IsVUFBVSxDQUFDYyxTQUFTO01BRW5DLElBQUlELFFBQVEsSUFBSUQsUUFBUSxJQUFLLENBQUNBLFFBQVEsSUFBSUMsUUFBUSxJQUFJekIsTUFBTSxDQUFDMkIsV0FBWSxFQUFFO1FBQ3ZFO01BQ0o7TUFFQWYsVUFBVSxDQUFDYyxTQUFTLEdBQUdGLFFBQVE7SUFDbkM7RUFDSixDQUFDO0VBQ0RJLE1BQU0sRUFBRSxTQUFBQSxPQUFTNUIsTUFBTSxFQUFFQyxJQUFJLEVBQUU7SUFDM0IsSUFBSSxDQUFDQSxJQUFJLENBQUN2SCxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDaEMsSUFBSTJJLGFBQWEsR0FBRyxDQUFDLENBQUM7TUFDdEIsSUFBSXRWLENBQUMsR0FBRyxDQUFDO01BQ1Q7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFJNFUsUUFBUSxHQUFHWCxNQUFNLENBQUNZLFVBQVU7TUFDaEMsSUFBSWlCLFFBQVE7TUFDWixJQUFJMUIsUUFBUTtNQUNaLE9BQU1RLFFBQVEsRUFBRTtRQUNaUixRQUFRLEdBQUdRLFFBQVEsQ0FBQ1IsUUFBUSxJQUFJUSxRQUFRLENBQUNSLFFBQVEsQ0FBQ0ssV0FBVyxDQUFDLENBQUM7UUFDL0QsSUFBSUwsUUFBUSxLQUFLLFVBQVUsRUFBRTtVQUN6QjBCLFFBQVEsR0FBR2xCLFFBQVE7VUFDbkJBLFFBQVEsR0FBR2tCLFFBQVEsQ0FBQ2pCLFVBQVU7UUFDbEMsQ0FBQyxNQUFNO1VBQ0gsSUFBSVQsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUN2QixJQUFJUSxRQUFRLENBQUNqSSxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7Y0FDbkMySSxhQUFhLEdBQUd0VixDQUFDO2NBQ2pCO1lBQ0o7WUFDQUEsQ0FBQyxFQUFFO1VBQ1A7VUFDQTRVLFFBQVEsR0FBR0EsUUFBUSxDQUFDRyxXQUFXO1VBQy9CLElBQUksQ0FBQ0gsUUFBUSxJQUFJa0IsUUFBUSxFQUFFO1lBQ3ZCbEIsUUFBUSxHQUFHa0IsUUFBUSxDQUFDZixXQUFXO1lBQy9CZSxRQUFRLEdBQUcsSUFBSTtVQUNuQjtRQUNKO01BQ0o7TUFFQTdCLE1BQU0sQ0FBQ3FCLGFBQWEsR0FBR0EsYUFBYTtJQUN4QztFQUNKO0FBQ0osQ0FBQztBQUVELElBQUlTLFlBQVksR0FBRyxDQUFDO0FBQ3BCLElBQUlDLHdCQUF3QixHQUFHLEVBQUU7QUFDakMsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFDakIsSUFBSUMsWUFBWSxHQUFHLENBQUM7QUFFcEIsU0FBU0MsSUFBSUEsQ0FBQSxFQUFHLENBQUM7QUFFakIsU0FBU0MsaUJBQWlCQSxDQUFDQyxJQUFJLEVBQUU7RUFDL0IsSUFBSUEsSUFBSSxFQUFFO0lBQ1IsT0FBUUEsSUFBSSxDQUFDcFAsWUFBWSxJQUFJb1AsSUFBSSxDQUFDcFAsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFLb1AsSUFBSSxDQUFDQyxFQUFFO0VBQ2xFO0FBQ0Y7QUFFQSxTQUFTQyxlQUFlQSxDQUFDNUUsVUFBVSxFQUFFO0VBRW5DLE9BQU8sU0FBUzZFLFFBQVFBLENBQUM1RSxRQUFRLEVBQUVDLE1BQU0sRUFBRXRFLE9BQU8sRUFBRTtJQUNsRCxJQUFJLENBQUNBLE9BQU8sRUFBRTtNQUNaQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7SUFFQSxJQUFJLE9BQU9zRSxNQUFNLEtBQUssUUFBUSxFQUFFO01BQzlCLElBQUlELFFBQVEsQ0FBQ3dDLFFBQVEsS0FBSyxXQUFXLElBQUl4QyxRQUFRLENBQUN3QyxRQUFRLEtBQUssTUFBTSxJQUFJeEMsUUFBUSxDQUFDd0MsUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUNyRyxJQUFJcUMsVUFBVSxHQUFHNUUsTUFBTTtRQUN2QkEsTUFBTSxHQUFHcUIsR0FBRyxDQUFDbkUsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNsQzhDLE1BQU0sQ0FBQzdDLFNBQVMsR0FBR3lILFVBQVU7TUFDL0IsQ0FBQyxNQUFNO1FBQ0w1RSxNQUFNLEdBQUdrQyxTQUFTLENBQUNsQyxNQUFNLENBQUM7TUFDNUI7SUFDRixDQUFDLE1BQU0sSUFBSUEsTUFBTSxDQUFDUSxRQUFRLEtBQUsyRCx3QkFBd0IsRUFBRTtNQUN2RG5FLE1BQU0sR0FBR0EsTUFBTSxDQUFDMUMsaUJBQWlCO0lBQ25DO0lBRUEsSUFBSXVILFVBQVUsR0FBR25KLE9BQU8sQ0FBQ21KLFVBQVUsSUFBSU4saUJBQWlCO0lBQ3hELElBQUlPLGlCQUFpQixHQUFHcEosT0FBTyxDQUFDb0osaUJBQWlCLElBQUlSLElBQUk7SUFDekQsSUFBSVMsV0FBVyxHQUFHckosT0FBTyxDQUFDcUosV0FBVyxJQUFJVCxJQUFJO0lBQzdDLElBQUlVLGlCQUFpQixHQUFHdEosT0FBTyxDQUFDc0osaUJBQWlCLElBQUlWLElBQUk7SUFDekQsSUFBSVcsV0FBVyxHQUFHdkosT0FBTyxDQUFDdUosV0FBVyxJQUFJWCxJQUFJO0lBQzdDLElBQUlZLHFCQUFxQixHQUFHeEosT0FBTyxDQUFDd0oscUJBQXFCLElBQUlaLElBQUk7SUFDakUsSUFBSWEsZUFBZSxHQUFHekosT0FBTyxDQUFDeUosZUFBZSxJQUFJYixJQUFJO0lBQ3JELElBQUljLHlCQUF5QixHQUFHMUosT0FBTyxDQUFDMEoseUJBQXlCLElBQUlkLElBQUk7SUFDekUsSUFBSWUsZ0JBQWdCLEdBQUczSixPQUFPLENBQUMySixnQkFBZ0IsSUFBSWYsSUFBSTtJQUN2RCxJQUFJZ0IsUUFBUSxHQUFHNUosT0FBTyxDQUFDNEosUUFBUSxJQUFJLFVBQVNDLE1BQU0sRUFBRWxJLEtBQUssRUFBQztNQUFFLE9BQU9rSSxNQUFNLENBQUNwQyxXQUFXLENBQUM5RixLQUFLLENBQUM7SUFBRSxDQUFDO0lBQy9GLElBQUltSSxZQUFZLEdBQUc5SixPQUFPLENBQUM4SixZQUFZLEtBQUssSUFBSTs7SUFFaEQ7SUFDQSxJQUFJQyxlQUFlLEdBQUc3WCxNQUFNLENBQUNxQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pDLElBQUl5VyxnQkFBZ0IsR0FBRyxFQUFFO0lBRXpCLFNBQVNDLGVBQWVBLENBQUN2UixHQUFHLEVBQUU7TUFDNUJzUixnQkFBZ0IsQ0FBQ3hULElBQUksQ0FBQ2tDLEdBQUcsQ0FBQztJQUM1QjtJQUVBLFNBQVN3Uix1QkFBdUJBLENBQUNwQixJQUFJLEVBQUVxQixjQUFjLEVBQUU7TUFDckQsSUFBSXJCLElBQUksQ0FBQ2hFLFFBQVEsS0FBSzBELFlBQVksRUFBRTtRQUNsQyxJQUFJbkIsUUFBUSxHQUFHeUIsSUFBSSxDQUFDeEIsVUFBVTtRQUM5QixPQUFPRCxRQUFRLEVBQUU7VUFFZixJQUFJM08sR0FBRyxHQUFHVSxTQUFTO1VBRW5CLElBQUkrUSxjQUFjLEtBQUt6UixHQUFHLEdBQUd5USxVQUFVLENBQUM5QixRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQ2xEO1lBQ0E7WUFDQTRDLGVBQWUsQ0FBQ3ZSLEdBQUcsQ0FBQztVQUN0QixDQUFDLE1BQU07WUFDTDtZQUNBO1lBQ0E7WUFDQStRLGVBQWUsQ0FBQ3BDLFFBQVEsQ0FBQztZQUN6QixJQUFJQSxRQUFRLENBQUNDLFVBQVUsRUFBRTtjQUN2QjRDLHVCQUF1QixDQUFDN0MsUUFBUSxFQUFFOEMsY0FBYyxDQUFDO1lBQ25EO1VBQ0Y7VUFFQTlDLFFBQVEsR0FBR0EsUUFBUSxDQUFDRyxXQUFXO1FBQ2pDO01BQ0Y7SUFDRjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksU0FBUzRDLFVBQVVBLENBQUN0QixJQUFJLEVBQUVqQixVQUFVLEVBQUVzQyxjQUFjLEVBQUU7TUFDcEQsSUFBSVgscUJBQXFCLENBQUNWLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUN6QztNQUNGO01BRUEsSUFBSWpCLFVBQVUsRUFBRTtRQUNkQSxVQUFVLENBQUN3QyxXQUFXLENBQUN2QixJQUFJLENBQUM7TUFDOUI7TUFFQVcsZUFBZSxDQUFDWCxJQUFJLENBQUM7TUFDckJvQix1QkFBdUIsQ0FBQ3BCLElBQUksRUFBRXFCLGNBQWMsQ0FBQztJQUMvQzs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxTQUFTRyxTQUFTQSxDQUFDeEIsSUFBSSxFQUFFO01BQ3ZCLElBQUlBLElBQUksQ0FBQ2hFLFFBQVEsS0FBSzBELFlBQVksSUFBSU0sSUFBSSxDQUFDaEUsUUFBUSxLQUFLMkQsd0JBQXdCLEVBQUU7UUFDaEYsSUFBSXBCLFFBQVEsR0FBR3lCLElBQUksQ0FBQ3hCLFVBQVU7UUFDOUIsT0FBT0QsUUFBUSxFQUFFO1VBQ2YsSUFBSTNPLEdBQUcsR0FBR3lRLFVBQVUsQ0FBQzlCLFFBQVEsQ0FBQztVQUM5QixJQUFJM08sR0FBRyxFQUFFO1lBQ1BxUixlQUFlLENBQUNyUixHQUFHLENBQUMsR0FBRzJPLFFBQVE7VUFDakM7O1VBRUE7VUFDQWlELFNBQVMsQ0FBQ2pELFFBQVEsQ0FBQztVQUVuQkEsUUFBUSxHQUFHQSxRQUFRLENBQUNHLFdBQVc7UUFDakM7TUFDRjtJQUNGO0lBRUE4QyxTQUFTLENBQUNqRyxRQUFRLENBQUM7SUFFbkIsU0FBU2tHLGVBQWVBLENBQUM3SyxFQUFFLEVBQUU7TUFDM0IySixXQUFXLENBQUMzSixFQUFFLENBQUM7TUFFZixJQUFJMkgsUUFBUSxHQUFHM0gsRUFBRSxDQUFDNEgsVUFBVTtNQUM1QixPQUFPRCxRQUFRLEVBQUU7UUFDZixJQUFJRyxXQUFXLEdBQUdILFFBQVEsQ0FBQ0csV0FBVztRQUV0QyxJQUFJOU8sR0FBRyxHQUFHeVEsVUFBVSxDQUFDOUIsUUFBUSxDQUFDO1FBQzlCLElBQUkzTyxHQUFHLEVBQUU7VUFDUCxJQUFJOFIsZUFBZSxHQUFHVCxlQUFlLENBQUNyUixHQUFHLENBQUM7VUFDMUM7VUFDQTtVQUNBLElBQUk4UixlQUFlLElBQUkvRCxnQkFBZ0IsQ0FBQ1ksUUFBUSxFQUFFbUQsZUFBZSxDQUFDLEVBQUU7WUFDbEVuRCxRQUFRLENBQUNRLFVBQVUsQ0FBQzRDLFlBQVksQ0FBQ0QsZUFBZSxFQUFFbkQsUUFBUSxDQUFDO1lBQzNEcUQsT0FBTyxDQUFDRixlQUFlLEVBQUVuRCxRQUFRLENBQUM7VUFDcEMsQ0FBQyxNQUFNO1lBQ0xrRCxlQUFlLENBQUNsRCxRQUFRLENBQUM7VUFDM0I7UUFDRixDQUFDLE1BQU07VUFDTDtVQUNBO1VBQ0FrRCxlQUFlLENBQUNsRCxRQUFRLENBQUM7UUFDM0I7UUFFQUEsUUFBUSxHQUFHRyxXQUFXO01BQ3hCO0lBQ0Y7SUFFQSxTQUFTbUQsYUFBYUEsQ0FBQ2pFLE1BQU0sRUFBRWtFLGdCQUFnQixFQUFFQyxjQUFjLEVBQUU7TUFDL0Q7TUFDQTtNQUNBO01BQ0EsT0FBT0QsZ0JBQWdCLEVBQUU7UUFDdkIsSUFBSUUsZUFBZSxHQUFHRixnQkFBZ0IsQ0FBQ3BELFdBQVc7UUFDbEQsSUFBS3FELGNBQWMsR0FBRzFCLFVBQVUsQ0FBQ3lCLGdCQUFnQixDQUFDLEVBQUc7VUFDbkQ7VUFDQTtVQUNBWCxlQUFlLENBQUNZLGNBQWMsQ0FBQztRQUNqQyxDQUFDLE1BQU07VUFDTDtVQUNBO1VBQ0FULFVBQVUsQ0FBQ1EsZ0JBQWdCLEVBQUVsRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ25FOztRQUNBa0UsZ0JBQWdCLEdBQUdFLGVBQWU7TUFDcEM7SUFDRjtJQUVBLFNBQVNKLE9BQU9BLENBQUNoRSxNQUFNLEVBQUVDLElBQUksRUFBRW1ELFlBQVksRUFBRTtNQUMzQyxJQUFJaUIsT0FBTyxHQUFHNUIsVUFBVSxDQUFDeEMsSUFBSSxDQUFDO01BRTlCLElBQUlvRSxPQUFPLEVBQUU7UUFDWDtRQUNBO1FBQ0EsT0FBT2hCLGVBQWUsQ0FBQ2dCLE9BQU8sQ0FBQztNQUNqQztNQUVBLElBQUksQ0FBQ2pCLFlBQVksRUFBRTtRQUNqQjtRQUNBLElBQUlSLGlCQUFpQixDQUFDNUMsTUFBTSxFQUFFQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7VUFDN0M7UUFDRjs7UUFFQTtRQUNBdkMsVUFBVSxDQUFDc0MsTUFBTSxFQUFFQyxJQUFJLENBQUM7UUFDeEI7UUFDQTRDLFdBQVcsQ0FBQzdDLE1BQU0sQ0FBQztRQUVuQixJQUFJZ0QseUJBQXlCLENBQUNoRCxNQUFNLEVBQUVDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtVQUNyRDtRQUNGO01BQ0Y7TUFFQSxJQUFJRCxNQUFNLENBQUNHLFFBQVEsS0FBSyxVQUFVLEVBQUU7UUFDbENtRSxhQUFhLENBQUN0RSxNQUFNLEVBQUVDLElBQUksQ0FBQztNQUM3QixDQUFDLE1BQU07UUFDTGdCLGlCQUFpQixDQUFDTSxRQUFRLENBQUN2QixNQUFNLEVBQUVDLElBQUksQ0FBQztNQUMxQztJQUNGO0lBRUEsU0FBU3FFLGFBQWFBLENBQUN0RSxNQUFNLEVBQUVDLElBQUksRUFBRTtNQUNuQyxJQUFJc0UsUUFBUSxHQUFHdEIsZ0JBQWdCLENBQUNqRCxNQUFNLENBQUM7TUFDdkMsSUFBSXdFLGNBQWMsR0FBR3ZFLElBQUksQ0FBQ1csVUFBVTtNQUNwQyxJQUFJc0QsZ0JBQWdCLEdBQUdsRSxNQUFNLENBQUNZLFVBQVU7TUFDeEMsSUFBSTZELFlBQVk7TUFDaEIsSUFBSU4sY0FBYztNQUVsQixJQUFJQyxlQUFlO01BQ25CLElBQUlNLGFBQWE7TUFDakIsSUFBSUMsY0FBYzs7TUFFbEI7TUFDQUMsS0FBSyxFQUFFLE9BQU9KLGNBQWMsRUFBRTtRQUM1QkUsYUFBYSxHQUFHRixjQUFjLENBQUMxRCxXQUFXO1FBQzFDMkQsWUFBWSxHQUFHaEMsVUFBVSxDQUFDK0IsY0FBYyxDQUFDOztRQUV6QztRQUNBLE9BQU8sQ0FBQ0QsUUFBUSxJQUFJTCxnQkFBZ0IsRUFBRTtVQUNwQ0UsZUFBZSxHQUFHRixnQkFBZ0IsQ0FBQ3BELFdBQVc7VUFFOUMsSUFBSTBELGNBQWMsQ0FBQ0ssVUFBVSxJQUFJTCxjQUFjLENBQUNLLFVBQVUsQ0FBQ1gsZ0JBQWdCLENBQUMsRUFBRTtZQUM1RU0sY0FBYyxHQUFHRSxhQUFhO1lBQzlCUixnQkFBZ0IsR0FBR0UsZUFBZTtZQUNsQyxTQUFTUSxLQUFLO1VBQ2hCO1VBRUFULGNBQWMsR0FBRzFCLFVBQVUsQ0FBQ3lCLGdCQUFnQixDQUFDO1VBRTdDLElBQUlZLGVBQWUsR0FBR1osZ0JBQWdCLENBQUM5RixRQUFROztVQUUvQztVQUNBLElBQUkyRyxZQUFZLEdBQUdyUyxTQUFTO1VBRTVCLElBQUlvUyxlQUFlLEtBQUtOLGNBQWMsQ0FBQ3BHLFFBQVEsRUFBRTtZQUMvQyxJQUFJMEcsZUFBZSxLQUFLaEQsWUFBWSxFQUFFO2NBQ3BDOztjQUVBLElBQUkyQyxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUNBO2dCQUNBLElBQUlBLFlBQVksS0FBS04sY0FBYyxFQUFFO2tCQUNuQztrQkFDQTtrQkFDQTtrQkFDQSxJQUFLUSxjQUFjLEdBQUd0QixlQUFlLENBQUNvQixZQUFZLENBQUMsRUFBRztvQkFDcEQsSUFBSUwsZUFBZSxLQUFLTyxjQUFjLEVBQUU7c0JBQ3RDO3NCQUNBO3NCQUNBO3NCQUNBO3NCQUNBO3NCQUNBSSxZQUFZLEdBQUcsS0FBSztvQkFDdEIsQ0FBQyxNQUFNO3NCQUNMO3NCQUNBO3NCQUNBOztzQkFFQTtzQkFDQTtzQkFDQTtzQkFDQS9FLE1BQU0sQ0FBQ2dGLFlBQVksQ0FBQ0wsY0FBYyxFQUFFVCxnQkFBZ0IsQ0FBQzs7c0JBRXJEOztzQkFFQSxJQUFJQyxjQUFjLEVBQUU7d0JBQ2xCO3dCQUNBO3dCQUNBWixlQUFlLENBQUNZLGNBQWMsQ0FBQztzQkFDakMsQ0FBQyxNQUFNO3dCQUNMO3dCQUNBO3dCQUNBVCxVQUFVLENBQUNRLGdCQUFnQixFQUFFbEUsTUFBTSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztzQkFDbkU7O3NCQUVBa0UsZ0JBQWdCLEdBQUdTLGNBQWM7b0JBQ25DO2tCQUNGLENBQUMsTUFBTTtvQkFDTDtvQkFDQTtvQkFDQUksWUFBWSxHQUFHLEtBQUs7a0JBQ3RCO2dCQUNGO2NBQ0YsQ0FBQyxNQUFNLElBQUlaLGNBQWMsRUFBRTtnQkFDekI7Z0JBQ0FZLFlBQVksR0FBRyxLQUFLO2NBQ3RCO2NBRUFBLFlBQVksR0FBR0EsWUFBWSxLQUFLLEtBQUssSUFBSWhGLGdCQUFnQixDQUFDbUUsZ0JBQWdCLEVBQUVNLGNBQWMsQ0FBQztjQUMzRixJQUFJTyxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBZixPQUFPLENBQUNFLGdCQUFnQixFQUFFTSxjQUFjLENBQUM7Y0FDM0M7WUFFRixDQUFDLE1BQU0sSUFBSU0sZUFBZSxLQUFLOUMsU0FBUyxJQUFJOEMsZUFBZSxJQUFJN0MsWUFBWSxFQUFFO2NBQzNFO2NBQ0E4QyxZQUFZLEdBQUcsSUFBSTtjQUNuQjtjQUNBO2NBQ0EsSUFBSWIsZ0JBQWdCLENBQUN4QyxTQUFTLEtBQUs4QyxjQUFjLENBQUM5QyxTQUFTLEVBQUU7Z0JBQzNEd0MsZ0JBQWdCLENBQUN4QyxTQUFTLEdBQUc4QyxjQUFjLENBQUM5QyxTQUFTO2NBQ3ZEO1lBRUY7VUFDRjtVQUVBLElBQUlxRCxZQUFZLEVBQUU7WUFDaEI7WUFDQTtZQUNBUCxjQUFjLEdBQUdFLGFBQWE7WUFDOUJSLGdCQUFnQixHQUFHRSxlQUFlO1lBQ2xDLFNBQVNRLEtBQUs7VUFDaEI7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsSUFBSVQsY0FBYyxFQUFFO1lBQ2xCO1lBQ0E7WUFDQVosZUFBZSxDQUFDWSxjQUFjLENBQUM7VUFDakMsQ0FBQyxNQUFNO1lBQ0w7WUFDQTtZQUNBVCxVQUFVLENBQUNRLGdCQUFnQixFQUFFbEUsTUFBTSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztVQUNuRTs7VUFFQWtFLGdCQUFnQixHQUFHRSxlQUFlO1FBQ3BDLENBQUMsQ0FBQzs7UUFFRjtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUlLLFlBQVksS0FBS0UsY0FBYyxHQUFHdEIsZUFBZSxDQUFDb0IsWUFBWSxDQUFDLENBQUMsSUFBSTFFLGdCQUFnQixDQUFDNEUsY0FBYyxFQUFFSCxjQUFjLENBQUMsRUFBRTtVQUN4SDtVQUNBLElBQUcsQ0FBQ0QsUUFBUSxFQUFDO1lBQUVyQixRQUFRLENBQUNsRCxNQUFNLEVBQUUyRSxjQUFjLENBQUM7VUFBRTtVQUNqRFgsT0FBTyxDQUFDVyxjQUFjLEVBQUVILGNBQWMsQ0FBQztRQUN6QyxDQUFDLE1BQU07VUFDTCxJQUFJUyx1QkFBdUIsR0FBR3ZDLGlCQUFpQixDQUFDOEIsY0FBYyxDQUFDO1VBQy9ELElBQUlTLHVCQUF1QixLQUFLLEtBQUssRUFBRTtZQUNyQyxJQUFJQSx1QkFBdUIsRUFBRTtjQUMzQlQsY0FBYyxHQUFHUyx1QkFBdUI7WUFDMUM7WUFFQSxJQUFJVCxjQUFjLENBQUNVLFNBQVMsRUFBRTtjQUM1QlYsY0FBYyxHQUFHQSxjQUFjLENBQUNVLFNBQVMsQ0FBQ2xGLE1BQU0sQ0FBQ21GLGFBQWEsSUFBSWxHLEdBQUcsQ0FBQztZQUN4RTtZQUNBaUUsUUFBUSxDQUFDbEQsTUFBTSxFQUFFd0UsY0FBYyxDQUFDO1lBQ2hDWCxlQUFlLENBQUNXLGNBQWMsQ0FBQztVQUNqQztRQUNGO1FBRUFBLGNBQWMsR0FBR0UsYUFBYTtRQUM5QlIsZ0JBQWdCLEdBQUdFLGVBQWU7TUFDcEM7TUFFQUgsYUFBYSxDQUFDakUsTUFBTSxFQUFFa0UsZ0JBQWdCLEVBQUVDLGNBQWMsQ0FBQztNQUV2RCxJQUFJaUIsZ0JBQWdCLEdBQUduRSxpQkFBaUIsQ0FBQ2pCLE1BQU0sQ0FBQ0csUUFBUSxDQUFDO01BQ3pELElBQUlpRixnQkFBZ0IsRUFBRTtRQUNwQkEsZ0JBQWdCLENBQUNwRixNQUFNLEVBQUVDLElBQUksQ0FBQztNQUNoQztJQUNGLENBQUMsQ0FBQzs7SUFFRixJQUFJb0YsV0FBVyxHQUFHMUgsUUFBUTtJQUMxQixJQUFJMkgsZUFBZSxHQUFHRCxXQUFXLENBQUNqSCxRQUFRO0lBQzFDLElBQUltSCxVQUFVLEdBQUczSCxNQUFNLENBQUNRLFFBQVE7SUFFaEMsSUFBSSxDQUFDZ0YsWUFBWSxFQUFFO01BQ2pCO01BQ0E7TUFDQSxJQUFJa0MsZUFBZSxLQUFLeEQsWUFBWSxFQUFFO1FBQ3BDLElBQUl5RCxVQUFVLEtBQUt6RCxZQUFZLEVBQUU7VUFDL0IsSUFBSSxDQUFDL0IsZ0JBQWdCLENBQUNwQyxRQUFRLEVBQUVDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDbUYsZUFBZSxDQUFDcEYsUUFBUSxDQUFDO1lBQ3pCMEgsV0FBVyxHQUFHM0UsWUFBWSxDQUFDL0MsUUFBUSxFQUFFOEMsZUFBZSxDQUFDN0MsTUFBTSxDQUFDdUMsUUFBUSxFQUFFdkMsTUFBTSxDQUFDUyxZQUFZLENBQUMsQ0FBQztVQUM3RjtRQUNGLENBQUMsTUFBTTtVQUNMO1VBQ0FnSCxXQUFXLEdBQUd6SCxNQUFNO1FBQ3RCO01BQ0YsQ0FBQyxNQUFNLElBQUkwSCxlQUFlLEtBQUt0RCxTQUFTLElBQUlzRCxlQUFlLEtBQUtyRCxZQUFZLEVBQUU7UUFBRTtRQUM5RSxJQUFJc0QsVUFBVSxLQUFLRCxlQUFlLEVBQUU7VUFDbEMsSUFBSUQsV0FBVyxDQUFDM0QsU0FBUyxLQUFLOUQsTUFBTSxDQUFDOEQsU0FBUyxFQUFFO1lBQzlDMkQsV0FBVyxDQUFDM0QsU0FBUyxHQUFHOUQsTUFBTSxDQUFDOEQsU0FBUztVQUMxQztVQUVBLE9BQU8yRCxXQUFXO1FBQ3BCLENBQUMsTUFBTTtVQUNMO1VBQ0FBLFdBQVcsR0FBR3pILE1BQU07UUFDdEI7TUFDRjtJQUNGO0lBRUEsSUFBSXlILFdBQVcsS0FBS3pILE1BQU0sRUFBRTtNQUMxQjtNQUNBO01BQ0FtRixlQUFlLENBQUNwRixRQUFRLENBQUM7SUFDM0IsQ0FBQyxNQUFNO01BQ0wsSUFBSUMsTUFBTSxDQUFDaUgsVUFBVSxJQUFJakgsTUFBTSxDQUFDaUgsVUFBVSxDQUFDUSxXQUFXLENBQUMsRUFBRTtRQUN2RDtNQUNGO01BRUFyQixPQUFPLENBQUNxQixXQUFXLEVBQUV6SCxNQUFNLEVBQUV3RixZQUFZLENBQUM7O01BRTFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFJRSxnQkFBZ0IsRUFBRTtRQUNwQixLQUFLLElBQUl2WCxDQUFDLEdBQUMsQ0FBQyxFQUFFK0osR0FBRyxHQUFDd04sZ0JBQWdCLENBQUNuVCxNQUFNLEVBQUVwRSxDQUFDLEdBQUMrSixHQUFHLEVBQUUvSixDQUFDLEVBQUUsRUFBRTtVQUNyRCxJQUFJeVosVUFBVSxHQUFHbkMsZUFBZSxDQUFDQyxnQkFBZ0IsQ0FBQ3ZYLENBQUMsQ0FBQyxDQUFDO1VBQ3JELElBQUl5WixVQUFVLEVBQUU7WUFDZDlCLFVBQVUsQ0FBQzhCLFVBQVUsRUFBRUEsVUFBVSxDQUFDckUsVUFBVSxFQUFFLEtBQUssQ0FBQztVQUN0RDtRQUNGO01BQ0Y7SUFDRjtJQUVBLElBQUksQ0FBQ2lDLFlBQVksSUFBSWlDLFdBQVcsS0FBSzFILFFBQVEsSUFBSUEsUUFBUSxDQUFDd0QsVUFBVSxFQUFFO01BQ3BFLElBQUlrRSxXQUFXLENBQUNILFNBQVMsRUFBRTtRQUN6QkcsV0FBVyxHQUFHQSxXQUFXLENBQUNILFNBQVMsQ0FBQ3ZILFFBQVEsQ0FBQ3dILGFBQWEsSUFBSWxHLEdBQUcsQ0FBQztNQUNwRTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXRCLFFBQVEsQ0FBQ3dELFVBQVUsQ0FBQzRDLFlBQVksQ0FBQ3NCLFdBQVcsRUFBRTFILFFBQVEsQ0FBQztJQUN6RDtJQUVBLE9BQU8wSCxXQUFXO0VBQ3BCLENBQUM7QUFDSDtBQUVBLElBQUk5QyxRQUFRLEdBQUdELGVBQWUsQ0FBQzVFLFVBQVUsQ0FBQztBQUUxQyxTQUFTK0gsZ0NBQWdDQSxDQUFDdk4sT0FBTyxFQUFFO0VBQy9DLElBQU13TixXQUFXLEdBQUd4TixPQUFPLFlBQVlFLGdCQUFnQixJQUFJRixPQUFPLENBQUNqTCxJQUFJLEtBQUssTUFBTTtFQUNsRixJQUFJLENBQUN5WSxXQUFXLEVBQUU7SUFDZCxJQUFJLE9BQU8sSUFBSXhOLE9BQU8sRUFBRTtNQUNwQkEsT0FBTyxDQUFDd0csWUFBWSxDQUFDLE9BQU8sRUFBRXhHLE9BQU8sQ0FBQ3BNLEtBQUssQ0FBQztJQUNoRCxDQUFDLE1BQ0ksSUFBSW9NLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO01BQ3BDUixPQUFPLENBQUN3RyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNyQztFQUNKO0VBQ0EzSyxLQUFLLENBQUM0QixJQUFJLENBQUN1QyxPQUFPLENBQUN5TixRQUFRLENBQUMsQ0FBQ3pYLE9BQU8sQ0FBQyxVQUFDK00sS0FBSyxFQUFLO0lBQzVDd0ssZ0NBQWdDLENBQUN4SyxLQUFLLENBQUM7RUFDM0MsQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTMkssZUFBZUEsQ0FBQ0MsZUFBZSxFQUFFQyxhQUFhLEVBQUVDLHFCQUFxQixFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUVDLGlCQUFpQixFQUFFQyx1QkFBdUIsRUFBRTtFQUM5SyxJQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQztFQUNuQ0wsZUFBZSxDQUFDL1gsT0FBTyxDQUFDLFVBQUNvTSxjQUFjLEVBQUs7SUFDeEMrTCxpQkFBaUIsQ0FBQzNKLEdBQUcsQ0FBQ3BDLGNBQWMsQ0FBQ3BDLE9BQU8sRUFBRW9DLGNBQWMsQ0FBQztFQUNqRSxDQUFDLENBQUM7RUFDRmlJLFFBQVEsQ0FBQ3NELGVBQWUsRUFBRUMsYUFBYSxFQUFFO0lBQ3JDckQsVUFBVSxFQUFFLFNBQUFBLFdBQUNMLElBQUksRUFBSztNQUNsQixJQUFJLEVBQUVBLElBQUksWUFBWTFILFdBQVcsQ0FBQyxFQUFFO1FBQ2hDO01BQ0o7TUFDQSxJQUFJMEwsdUJBQXVCLENBQUNHLGVBQWUsQ0FBQ25FLElBQUksQ0FBQyxFQUFFO1FBQy9DLE9BQU8sZ0JBQWdCLEdBQUdvRSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQzNDO01BQ0EsT0FBT04saUJBQWlCLENBQUMvRCxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUNEUSxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBQzVDLE1BQU0sRUFBRUMsSUFBSSxFQUFLO01BQ2pDLElBQUlELE1BQU0sS0FBSzZGLGVBQWUsRUFBRTtRQUM1QixPQUFPLElBQUk7TUFDZjtNQUNBLElBQUk3RixNQUFNLFlBQVl0RixXQUFXLElBQUl1RixJQUFJLFlBQVl2RixXQUFXLEVBQUU7UUFDOUQsSUFBSSxPQUFPc0YsTUFBTSxDQUFDMEcsR0FBRyxLQUFLLFdBQVcsRUFBRTtVQUNuQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sSUFBSWpZLEtBQUssQ0FBQyw0SUFBNEksQ0FBQztVQUNqSztVQUNBLElBQUksT0FBT2dZLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQzNDLE1BQU0sSUFBSWxZLEtBQUssQ0FBQyw4S0FBOEssQ0FBQztVQUNuTTtVQUNBZ1ksTUFBTSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQzdHLE1BQU0sQ0FBQzBHLEdBQUcsRUFBRXpHLElBQUksQ0FBQztRQUN6QztRQUNBLElBQUlvRyxpQkFBaUIsQ0FBQzVKLEdBQUcsQ0FBQ3VELE1BQU0sQ0FBQyxFQUFFO1VBQy9CLElBQU0xRixjQUFjLEdBQUcrTCxpQkFBaUIsQ0FBQzdOLEdBQUcsQ0FBQ3dILE1BQU0sQ0FBQztVQUNwRDFGLGNBQWMsQ0FBQ3dNLG9DQUFvQyxDQUFDN0csSUFBSSxDQUFDO1VBQ3pELE9BQU8sS0FBSztRQUNoQjtRQUNBLElBQUk4RixxQkFBcUIsQ0FBQ3RNLFFBQVEsQ0FBQ3VHLE1BQU0sQ0FBQyxFQUFFO1VBQ3hDOUcsaUJBQWlCLENBQUMrRyxJQUFJLEVBQUUrRixlQUFlLENBQUNoRyxNQUFNLENBQUMsQ0FBQztRQUNwRDtRQUNBLElBQU0rRyxjQUFjLEdBQUdYLHVCQUF1QixDQUFDWSxpQkFBaUIsQ0FBQ2hILE1BQU0sQ0FBQztRQUN4RSxJQUFJK0csY0FBYyxFQUFFO1VBQ2hCQSxjQUFjLENBQUNFLGNBQWMsQ0FBQ2hILElBQUksQ0FBQztRQUN2QztRQUNBLElBQUlELE1BQU0sQ0FBQ0csUUFBUSxDQUFDSyxXQUFXLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSVIsTUFBTSxDQUFDa0gsV0FBVyxDQUFDakgsSUFBSSxDQUFDLEVBQUU7VUFDeEUsSUFBTWtILGdCQUFnQixHQUFHNU0sZ0JBQWdCLENBQUN5RixNQUFNLENBQUM7VUFDakR5RixnQ0FBZ0MsQ0FBQzBCLGdCQUFnQixDQUFDO1VBQ2xELElBQU1DLGNBQWMsR0FBRzdNLGdCQUFnQixDQUFDMEYsSUFBSSxDQUFDO1VBQzdDd0YsZ0NBQWdDLENBQUMyQixjQUFjLENBQUM7VUFDaEQsSUFBSUQsZ0JBQWdCLENBQUNELFdBQVcsQ0FBQ0UsY0FBYyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxLQUFLO1VBQ2hCO1FBQ0o7TUFDSjtNQUNBLE9BQU8sQ0FBQ3BILE1BQU0sQ0FBQ3RILFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUNuRCxDQUFDO0lBQ0RvSyxxQkFBcUIsV0FBQUEsc0JBQUNWLElBQUksRUFBRTtNQUN4QixJQUFJLEVBQUVBLElBQUksWUFBWTFILFdBQVcsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sSUFBSTtNQUNmO01BQ0EsSUFBSTBMLHVCQUF1QixDQUFDRyxlQUFlLENBQUNuRSxJQUFJLENBQUMsRUFBRTtRQUMvQyxPQUFPLEtBQUs7TUFDaEI7TUFDQSxPQUFPLENBQUNBLElBQUksQ0FBQzFKLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqRDtFQUNKLENBQUMsQ0FBQztBQUNOO0FBQUMsSUFFSzJPLHFCQUFxQjtFQUN2QixTQUFBQSxzQkFBWW5OLFNBQVMsRUFBRW9OLG9CQUFvQixFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBdFQsZUFBQSxPQUFBb1QscUJBQUE7SUFDekMsSUFBSSxDQUFDRyxxQkFBcUIsR0FBRyxDQUN6QjtNQUFFQyxLQUFLLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ0QsS0FBSztRQUFBLE9BQUtGLEtBQUksQ0FBQ0ksZ0JBQWdCLENBQUNGLEtBQUssQ0FBQztNQUFBO0lBQUMsQ0FBQyxDQUN4RTtJQUNELElBQUksQ0FBQ3ZOLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNvTixvQkFBb0IsR0FBR0Esb0JBQW9CO0lBQ2hELElBQUksQ0FBQ00sY0FBYyxHQUFHLElBQUlDLHNCQUFzQixDQUFDLENBQUM7RUFDdEQ7RUFBQ3BULFlBQUEsQ0FBQTRTLHFCQUFBO0lBQUFyVixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWdjLFNBQUEsRUFBVztNQUFBLElBQUFDLE1BQUE7TUFDUCxJQUFJLENBQUNQLHFCQUFxQixDQUFDdFosT0FBTyxDQUFDLFVBQUE4WixJQUFBLEVBQXlCO1FBQUEsSUFBdEJQLEtBQUssR0FBQU8sSUFBQSxDQUFMUCxLQUFLO1VBQUVDLFFBQVEsR0FBQU0sSUFBQSxDQUFSTixRQUFRO1FBQ2pESyxNQUFJLENBQUM3TixTQUFTLENBQUNoQyxPQUFPLENBQUMrUCxnQkFBZ0IsQ0FBQ1IsS0FBSyxFQUFFQyxRQUFRLENBQUM7TUFDNUQsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBMVYsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFvYyxXQUFBLEVBQWE7TUFBQSxJQUFBQyxNQUFBO01BQ1QsSUFBSSxDQUFDWCxxQkFBcUIsQ0FBQ3RaLE9BQU8sQ0FBQyxVQUFBa2EsS0FBQSxFQUF5QjtRQUFBLElBQXRCWCxLQUFLLEdBQUFXLEtBQUEsQ0FBTFgsS0FBSztVQUFFQyxRQUFRLEdBQUFVLEtBQUEsQ0FBUlYsUUFBUTtRQUNqRFMsTUFBSSxDQUFDak8sU0FBUyxDQUFDaEMsT0FBTyxDQUFDbVEsbUJBQW1CLENBQUNaLEtBQUssRUFBRUMsUUFBUSxDQUFDO01BQy9ELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTFWLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd2Msa0JBQWtCQyxTQUFTLEVBQUU7TUFDekIsSUFBSSxDQUFDWCxjQUFjLENBQUNVLGlCQUFpQixDQUFDQyxTQUFTLENBQUM7SUFDcEQ7RUFBQztJQUFBdlcsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2YixpQkFBaUJGLEtBQUssRUFBRTtNQUNwQixJQUFNcFQsTUFBTSxHQUFHb1QsS0FBSyxDQUFDcFQsTUFBTTtNQUMzQixJQUFJLENBQUNBLE1BQU0sRUFBRTtRQUNUO01BQ0o7TUFDQSxJQUFJLENBQUNtVSxzQkFBc0IsQ0FBQ25VLE1BQU0sQ0FBQztJQUN2QztFQUFDO0lBQUFyQyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTBjLHVCQUF1QnRRLE9BQU8sRUFBRTtNQUM1QixJQUFJLENBQUMrQiw2QkFBNkIsQ0FBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUNnQyxTQUFTLENBQUMsRUFBRTtRQUN6RDtNQUNKO01BQ0EsSUFBSSxFQUFFaEMsT0FBTyxZQUFZd0MsV0FBVyxDQUFDLEVBQUU7UUFDbkMsTUFBTSxJQUFJL0wsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO01BQ2pFO01BQ0EsSUFBTTRaLFNBQVMsR0FBRyxJQUFJLENBQUNqQixvQkFBb0IsQ0FBQ21CLFlBQVksQ0FBQ3ZRLE9BQU8sQ0FBQztNQUNqRSxJQUFJLENBQUMwUCxjQUFjLENBQUNjLEdBQUcsQ0FBQ3hRLE9BQU8sRUFBRXFRLFNBQVMsQ0FBQztJQUMvQztFQUFDO0lBQUF2VyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTZjLGtCQUFBLEVBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDZixjQUFjLENBQUNnQixpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xEO0VBQUM7SUFBQTVXLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBK2Msa0JBQUEsRUFBb0I7TUFDaEIsT0FBTzlVLEtBQUssQ0FBQzRCLElBQUksQ0FBQyxJQUFJLENBQUNpUyxjQUFjLENBQUNrQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEU7RUFBQztJQUFBOVcsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFpZCxvQkFBQSxFQUFzQjtNQUNsQixJQUFJLENBQUNuQixjQUFjLENBQUNtQixtQkFBbUIsQ0FBQyxDQUFDO0lBQzdDO0VBQUM7RUFBQSxPQUFBMUIscUJBQUE7QUFBQTtBQUFBLElBRUNRLHNCQUFzQjtFQUN4QixTQUFBQSx1QkFBQSxFQUFjO0lBQUE1VCxlQUFBLE9BQUE0VCxzQkFBQTtJQUNWLElBQUksQ0FBQ21CLHNCQUFzQixHQUFHLEVBQUU7SUFDaEMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUcsSUFBSTVDLEdBQUcsQ0FBQyxDQUFDO0VBQ3hDO0VBQUM3UixZQUFBLENBQUFvVCxzQkFBQTtJQUFBN1YsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE0YyxJQUFJeFEsT0FBTyxFQUFvQjtNQUFBLElBQWxCcVEsU0FBUyxHQUFBaFcsU0FBQSxDQUFBcEMsTUFBQSxRQUFBb0MsU0FBQSxRQUFBRyxTQUFBLEdBQUFILFNBQUEsTUFBRyxJQUFJO01BQ3pCLElBQUlnVyxTQUFTLEVBQUU7UUFDWCxJQUFJLENBQUNXLG1CQUFtQixDQUFDeE0sR0FBRyxDQUFDNkwsU0FBUyxFQUFFclEsT0FBTyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMrUSxrQkFBa0IsQ0FBQ3hQLFFBQVEsQ0FBQzhPLFNBQVMsQ0FBQyxFQUFFO1VBQzlDLElBQUksQ0FBQ1Usa0JBQWtCLENBQUNuWixJQUFJLENBQUN5WSxTQUFTLENBQUM7UUFDM0M7UUFDQTtNQUNKO01BQ0EsSUFBSSxDQUFDUyxzQkFBc0IsQ0FBQ2xaLElBQUksQ0FBQ29JLE9BQU8sQ0FBQztJQUM3QztFQUFDO0lBQUFsRyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWlkLG9CQUFBLEVBQXNCO01BQUEsSUFBQUksTUFBQTtNQUNsQixJQUFJLENBQUNELG1CQUFtQixDQUFDaGIsT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUVrRyxHQUFHLEVBQUs7UUFDN0MsSUFBSSxDQUFDbVgsTUFBSSxDQUFDRixrQkFBa0IsQ0FBQ3hQLFFBQVEsQ0FBQ3pILEdBQUcsQ0FBQyxFQUFFO1VBQ3hDbVgsTUFBSSxDQUFDRCxtQkFBbUIsVUFBTyxDQUFDbFgsR0FBRyxDQUFDO1FBQ3hDO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBQSxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQThjLGtCQUFBLEVBQW9CO01BQ2hCLFVBQUF6UixNQUFBLENBQUEvQixrQkFBQSxDQUFXLElBQUksQ0FBQzRULHNCQUFzQixHQUFBNVQsa0JBQUEsQ0FBSyxJQUFJLENBQUM4VCxtQkFBbUIsQ0FBQ25iLE1BQU0sQ0FBQyxDQUFDO0lBQ2hGO0VBQUM7SUFBQWlFLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd2Msa0JBQWtCQyxTQUFTLEVBQUU7TUFDekIsSUFBTWhOLEtBQUssR0FBRyxJQUFJLENBQUMwTixrQkFBa0IsQ0FBQzdOLE9BQU8sQ0FBQ21OLFNBQVMsQ0FBQztNQUN4RCxJQUFJaE4sS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2QsSUFBSSxDQUFDME4sa0JBQWtCLENBQUN6TixNQUFNLENBQUNELEtBQUssRUFBRSxDQUFDLENBQUM7TUFDNUM7SUFDSjtFQUFDO0lBQUF2SixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWdkLHNCQUFBLEVBQXdCO01BQ3BCLE9BQU8sSUFBSSxDQUFDRyxrQkFBa0I7SUFDbEM7RUFBQztFQUFBLE9BQUFwQixzQkFBQTtBQUFBO0FBQUEsSUFHQ3VCLFdBQVc7RUFDYixTQUFBQSxZQUFBLEVBQWM7SUFBQW5WLGVBQUEsT0FBQW1WLFdBQUE7SUFDVixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJL0MsR0FBRyxDQUFDLENBQUM7RUFDMUI7RUFBQzdSLFlBQUEsQ0FBQTJVLFdBQUE7SUFBQXBYLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd2QsU0FBU0MsUUFBUSxFQUFFN0IsUUFBUSxFQUFFO01BQ3pCLElBQU0yQixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUM3USxHQUFHLENBQUMrUSxRQUFRLENBQUMsSUFBSSxFQUFFO01BQzVDRixLQUFLLENBQUN2WixJQUFJLENBQUM0WCxRQUFRLENBQUM7TUFDcEIsSUFBSSxDQUFDMkIsS0FBSyxDQUFDM00sR0FBRyxDQUFDNk0sUUFBUSxFQUFFRixLQUFLLENBQUM7SUFDbkM7RUFBQztJQUFBclgsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUEwZCxXQUFXRCxRQUFRLEVBQUU3QixRQUFRLEVBQUU7TUFDM0IsSUFBTTJCLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUssQ0FBQzdRLEdBQUcsQ0FBQytRLFFBQVEsQ0FBQyxJQUFJLEVBQUU7TUFDNUMsSUFBTWhPLEtBQUssR0FBRzhOLEtBQUssQ0FBQ2pPLE9BQU8sQ0FBQ3NNLFFBQVEsQ0FBQztNQUNyQyxJQUFJbk0sS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2Q7TUFDSjtNQUNBOE4sS0FBSyxDQUFDN04sTUFBTSxDQUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3RCLElBQUksQ0FBQzhOLEtBQUssQ0FBQzNNLEdBQUcsQ0FBQzZNLFFBQVEsRUFBRUYsS0FBSyxDQUFDO0lBQ25DO0VBQUM7SUFBQXJYLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBMmQsWUFBWUYsUUFBUSxFQUFXO01BQUEsU0FBQUcsSUFBQSxHQUFBblgsU0FBQSxDQUFBcEMsTUFBQSxFQUFObUMsSUFBSSxPQUFBeUIsS0FBQSxDQUFBMlYsSUFBQSxPQUFBQSxJQUFBLFdBQUFDLElBQUEsTUFBQUEsSUFBQSxHQUFBRCxJQUFBLEVBQUFDLElBQUE7UUFBSnJYLElBQUksQ0FBQXFYLElBQUEsUUFBQXBYLFNBQUEsQ0FBQW9YLElBQUE7TUFBQTtNQUN6QixJQUFNTixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUM3USxHQUFHLENBQUMrUSxRQUFRLENBQUMsSUFBSSxFQUFFO01BQzVDRixLQUFLLENBQUNuYixPQUFPLENBQUMsVUFBQ3daLFFBQVEsRUFBSztRQUN4QkEsUUFBUSxDQUFBbFYsS0FBQSxTQUFJRixJQUFJLENBQUM7TUFDckIsQ0FBQyxDQUFDO0lBQ047RUFBQztFQUFBLE9BQUE4VyxXQUFBO0FBQUE7QUFBQSxJQUdDUSxlQUFlO0VBQ2pCLFNBQUFBLGdCQUFZQyxRQUFRLEVBQUU7SUFBQTVWLGVBQUEsT0FBQTJWLGVBQUE7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7RUFDNUI7RUFBQ3BWLFlBQUEsQ0FBQW1WLGVBQUE7SUFBQTVYLEdBQUE7SUFBQWxHLEtBQUE7TUFBQSxJQUFBZ2UsUUFBQSxHQUFBM1gsaUJBQUEsZUFBQS9HLG1CQUFBLEdBQUFvRixJQUFBLENBQ0QsU0FBQTJDLFFBQUE7UUFBQSxPQUFBL0gsbUJBQUEsR0FBQXVCLElBQUEsVUFBQTBHLFNBQUFDLFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBckMsSUFBQSxHQUFBcUMsUUFBQSxDQUFBaEUsSUFBQTtZQUFBO2NBQUEsSUFDUyxJQUFJLENBQUNvUSxJQUFJO2dCQUFBcE0sUUFBQSxDQUFBaEUsSUFBQTtnQkFBQTtjQUFBO2NBQUFnRSxRQUFBLENBQUFoRSxJQUFBO2NBQUEsT0FDUSxJQUFJLENBQUN1YSxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQUE7Y0FBdEMsSUFBSSxDQUFDckssSUFBSSxHQUFBcE0sUUFBQSxDQUFBdEUsSUFBQTtZQUFBO2NBQUEsT0FBQXNFLFFBQUEsQ0FBQW5FLE1BQUEsV0FFTixJQUFJLENBQUN1USxJQUFJO1lBQUE7WUFBQTtjQUFBLE9BQUFwTSxRQUFBLENBQUFsQyxJQUFBO1VBQUE7UUFBQSxHQUFBK0IsT0FBQTtNQUFBLENBQ25CO01BQUEsU0FBQTZXLFFBQUE7UUFBQSxPQUFBRixRQUFBLENBQUF0WCxLQUFBLE9BQUFELFNBQUE7TUFBQTtNQUFBLE9BQUF5WCxPQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFKLGVBQUE7QUFBQTtBQUFBLElBR0NLLG9CQUFvQjtFQUN0QixTQUFBQSxxQkFBQSxFQUFjO0lBQUFoVyxlQUFBLE9BQUFnVyxvQkFBQTtJQUNWLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUk1RCxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUM2RCxZQUFZLEdBQUcsSUFBSTdELEdBQUcsQ0FBQyxDQUFDO0VBQ2pDO0VBQUM3UixZQUFBLENBQUF3VixvQkFBQTtJQUFBalksR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFzZSxRQUFRQyxRQUFRLEVBQUU3SSxRQUFRLEVBQUU4SSxhQUFhLEVBQUU7TUFDdkMsSUFBSSxJQUFJLENBQUNILFlBQVksQ0FBQzFOLEdBQUcsQ0FBQzROLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLElBQU1FLGFBQWEsR0FBRyxJQUFJLENBQUNKLFlBQVksQ0FBQzNSLEdBQUcsQ0FBQzZSLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUNGLFlBQVksVUFBTyxDQUFDRSxRQUFRLENBQUM7UUFDbEMsSUFBSUUsYUFBYSxDQUFDQyxRQUFRLEtBQUtoSixRQUFRLEVBQUU7VUFDckM7UUFDSjtNQUNKO01BQ0EsSUFBSSxJQUFJLENBQUMwSSxZQUFZLENBQUN6TixHQUFHLENBQUM0TixRQUFRLENBQUMsRUFBRTtRQUNqQyxJQUFNSSxjQUFjLEdBQUcsSUFBSSxDQUFDUCxZQUFZLENBQUMxUixHQUFHLENBQUM2UixRQUFRLENBQUM7UUFDdEQsSUFBSUksY0FBYyxDQUFDRCxRQUFRLEtBQUtoSixRQUFRLEVBQUU7VUFDdEMsSUFBSSxDQUFDMEksWUFBWSxVQUFPLENBQUNHLFFBQVEsQ0FBQztVQUNsQztRQUNKO1FBQ0EsSUFBSSxDQUFDSCxZQUFZLENBQUN4TixHQUFHLENBQUMyTixRQUFRLEVBQUU7VUFBRUcsUUFBUSxFQUFFQyxjQUFjLENBQUNELFFBQVE7VUFBRSxPQUFLaEo7UUFBUyxDQUFDLENBQUM7UUFDckY7TUFDSjtNQUNBLElBQUksQ0FBQzBJLFlBQVksQ0FBQ3hOLEdBQUcsQ0FBQzJOLFFBQVEsRUFBRTtRQUFFRyxRQUFRLEVBQUVGLGFBQWE7UUFBRSxPQUFLOUk7TUFBUyxDQUFDLENBQUM7SUFDL0U7RUFBQztJQUFBeFAsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE0ZSxXQUFXTCxRQUFRLEVBQUUxTixZQUFZLEVBQUU7TUFDL0IsSUFBSWdPLGlCQUFpQixHQUFHaE8sWUFBWTtNQUNwQyxJQUFJLElBQUksQ0FBQ3VOLFlBQVksQ0FBQ3pOLEdBQUcsQ0FBQzROLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLElBQU1JLGNBQWMsR0FBRyxJQUFJLENBQUNQLFlBQVksQ0FBQzFSLEdBQUcsQ0FBQzZSLFFBQVEsQ0FBQztRQUN0RE0saUJBQWlCLEdBQUdGLGNBQWMsQ0FBQ0QsUUFBUTtRQUMzQyxJQUFJLENBQUNOLFlBQVksVUFBTyxDQUFDRyxRQUFRLENBQUM7UUFDbEMsSUFBSU0saUJBQWlCLEtBQUssSUFBSSxFQUFFO1VBQzVCO1FBQ0o7TUFDSjtNQUNBLElBQUksQ0FBQyxJQUFJLENBQUNSLFlBQVksQ0FBQzFOLEdBQUcsQ0FBQzROLFFBQVEsQ0FBQyxFQUFFO1FBQ2xDLElBQUksQ0FBQ0YsWUFBWSxDQUFDek4sR0FBRyxDQUFDMk4sUUFBUSxFQUFFO1VBQUVHLFFBQVEsRUFBRUc7UUFBa0IsQ0FBQyxDQUFDO01BQ3BFO0lBQ0o7RUFBQztJQUFBM1ksR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE4ZSxnQkFBQSxFQUFrQjtNQUNkLElBQU1WLFlBQVksR0FBRyxFQUFFO01BQ3ZCLElBQUksQ0FBQ0EsWUFBWSxDQUFDaGMsT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUVrRyxHQUFHLEVBQUs7UUFDdENrWSxZQUFZLENBQUNwYSxJQUFJLENBQUM7VUFBRVMsSUFBSSxFQUFFeUIsR0FBRztVQUFFbEcsS0FBSyxFQUFFQSxLQUFLO1FBQUssQ0FBQyxDQUFDO01BQ3RELENBQUMsQ0FBQztNQUNGLE9BQU9vZSxZQUFZO0lBQ3ZCO0VBQUM7SUFBQWxZLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBK2UsZ0JBQUEsRUFBa0I7TUFDZCxJQUFNVixZQUFZLEdBQUcsRUFBRTtNQUN2QixJQUFJLENBQUNBLFlBQVksQ0FBQ2pjLE9BQU8sQ0FBQyxVQUFDcEMsS0FBSyxFQUFFa0csR0FBRyxFQUFLO1FBQ3RDbVksWUFBWSxDQUFDcmEsSUFBSSxDQUFDa0MsR0FBRyxDQUFDO01BQzFCLENBQUMsQ0FBQztNQUNGLE9BQU9tWSxZQUFZO0lBQ3ZCO0VBQUM7SUFBQW5ZLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZ2YsUUFBQSxFQUFVO01BQ04sT0FBTyxJQUFJLENBQUNaLFlBQVksQ0FBQ2EsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNaLFlBQVksQ0FBQ1ksSUFBSSxLQUFLLENBQUM7SUFDdkU7RUFBQztFQUFBLE9BQUFkLG9CQUFBO0FBQUE7QUFBQSxJQUdDZSxjQUFjO0VBQ2hCLFNBQUFBLGVBQUEsRUFBYztJQUFBL1csZUFBQSxPQUFBK1csY0FBQTtJQUNWLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJbEIsb0JBQW9CLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUNtQixnQkFBZ0IsR0FBRyxJQUFJbkIsb0JBQW9CLENBQUMsQ0FBQztFQUN0RDtFQUFDeFYsWUFBQSxDQUFBdVcsY0FBQTtJQUFBaFosR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF1ZixTQUFTQyxTQUFTLEVBQUU7TUFDaEIsSUFBSSxJQUFJLENBQUNKLGNBQWMsQ0FBQ3pSLFFBQVEsQ0FBQzZSLFNBQVMsQ0FBQyxFQUFFO1FBQ3pDLElBQUksQ0FBQ0osY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDSyxNQUFNLENBQUMsVUFBQ2hiLElBQUk7VUFBQSxPQUFLQSxJQUFJLEtBQUsrYSxTQUFTO1FBQUEsRUFBQztRQUM5RTtNQUNKO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0wsWUFBWSxDQUFDeFIsUUFBUSxDQUFDNlIsU0FBUyxDQUFDLEVBQUU7UUFDeEMsSUFBSSxDQUFDTCxZQUFZLENBQUNuYixJQUFJLENBQUN3YixTQUFTLENBQUM7TUFDckM7SUFDSjtFQUFDO0lBQUF0WixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTBmLFlBQVlGLFNBQVMsRUFBRTtNQUNuQixJQUFJLElBQUksQ0FBQ0wsWUFBWSxDQUFDeFIsUUFBUSxDQUFDNlIsU0FBUyxDQUFDLEVBQUU7UUFDdkMsSUFBSSxDQUFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNNLE1BQU0sQ0FBQyxVQUFDaGIsSUFBSTtVQUFBLE9BQUtBLElBQUksS0FBSythLFNBQVM7UUFBQSxFQUFDO1FBQzFFO01BQ0o7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDSixjQUFjLENBQUN6UixRQUFRLENBQUM2UixTQUFTLENBQUMsRUFBRTtRQUMxQyxJQUFJLENBQUNKLGNBQWMsQ0FBQ3BiLElBQUksQ0FBQ3diLFNBQVMsQ0FBQztNQUN2QztJQUNKO0VBQUM7SUFBQXRaLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBMmYsU0FBU0MsU0FBUyxFQUFFbEssUUFBUSxFQUFFbUssYUFBYSxFQUFFO01BQ3pDLElBQUksQ0FBQ1IsWUFBWSxDQUFDZixPQUFPLENBQUNzQixTQUFTLEVBQUVsSyxRQUFRLEVBQUVtSyxhQUFhLENBQUM7SUFDakU7RUFBQztJQUFBM1osR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE4ZixZQUFZRixTQUFTLEVBQUVDLGFBQWEsRUFBRTtNQUNsQyxJQUFJLENBQUNSLFlBQVksQ0FBQ1QsVUFBVSxDQUFDZ0IsU0FBUyxFQUFFQyxhQUFhLENBQUM7SUFDMUQ7RUFBQztJQUFBM1osR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUErZixhQUFhQyxhQUFhLEVBQUV0SyxRQUFRLEVBQUVtSyxhQUFhLEVBQUU7TUFDakQsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQ2hCLE9BQU8sQ0FBQzBCLGFBQWEsRUFBRXRLLFFBQVEsRUFBRW1LLGFBQWEsQ0FBQztJQUN6RTtFQUFDO0lBQUEzWixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWdULGdCQUFnQmdOLGFBQWEsRUFBRUgsYUFBYSxFQUFFO01BQzFDLElBQUksQ0FBQ1AsZ0JBQWdCLENBQUNWLFVBQVUsQ0FBQ29CLGFBQWEsRUFBRUgsYUFBYSxDQUFDO0lBQ2xFO0VBQUM7SUFBQTNaLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBaWdCLGdCQUFBLEVBQWtCO01BQ2QsT0FBTyxJQUFJLENBQUNkLFlBQVk7SUFDNUI7RUFBQztJQUFBalosR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFrZ0Isa0JBQUEsRUFBb0I7TUFDaEIsT0FBTyxJQUFJLENBQUNkLGNBQWM7SUFDOUI7RUFBQztJQUFBbFosR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFtZ0IsaUJBQUEsRUFBbUI7TUFDZixPQUFPLElBQUksQ0FBQ2QsWUFBWSxDQUFDUCxlQUFlLENBQUMsQ0FBQztJQUM5QztFQUFDO0lBQUE1WSxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQW9nQixpQkFBQSxFQUFtQjtNQUNmLE9BQU8sSUFBSSxDQUFDZixZQUFZLENBQUNOLGVBQWUsQ0FBQyxDQUFDO0lBQzlDO0VBQUM7SUFBQTdZLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBcWdCLHFCQUFBLEVBQXVCO01BQ25CLE9BQU8sSUFBSSxDQUFDZixnQkFBZ0IsQ0FBQ1IsZUFBZSxDQUFDLENBQUM7SUFDbEQ7RUFBQztJQUFBNVksR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFzZ0IscUJBQUEsRUFBdUI7TUFDbkIsT0FBTyxJQUFJLENBQUNoQixnQkFBZ0IsQ0FBQ1AsZUFBZSxDQUFDLENBQUM7SUFDbEQ7RUFBQztJQUFBN1ksR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFtYixlQUFlL08sT0FBTyxFQUFFO01BQ3BCLElBQUksQ0FBQytTLFlBQVksQ0FBQy9jLE9BQU8sQ0FBQyxVQUFDb2QsU0FBUyxFQUFLO1FBQ3JDcFQsT0FBTyxDQUFDbVUsU0FBUyxDQUFDM0QsR0FBRyxDQUFDNEMsU0FBUyxDQUFDO01BQ3BDLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0osY0FBYyxDQUFDaGQsT0FBTyxDQUFDLFVBQUNvZCxTQUFTLEVBQUs7UUFDdkNwVCxPQUFPLENBQUNtVSxTQUFTLENBQUNDLE1BQU0sQ0FBQ2hCLFNBQVMsQ0FBQztNQUN2QyxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNILFlBQVksQ0FBQ1AsZUFBZSxDQUFDLENBQUMsQ0FBQzFjLE9BQU8sQ0FBQyxVQUFDcWUsTUFBTSxFQUFLO1FBQ3BEclUsT0FBTyxDQUFDc1UsS0FBSyxDQUFDQyxXQUFXLENBQUNGLE1BQU0sQ0FBQ2hjLElBQUksRUFBRWdjLE1BQU0sQ0FBQ3pnQixLQUFLLENBQUM7UUFDcEQ7TUFDSixDQUFDLENBQUM7TUFDRixJQUFJLENBQUNxZixZQUFZLENBQUNOLGVBQWUsQ0FBQyxDQUFDLENBQUMzYyxPQUFPLENBQUMsVUFBQ3dkLFNBQVMsRUFBSztRQUN2RHhULE9BQU8sQ0FBQ3NVLEtBQUssQ0FBQ0UsY0FBYyxDQUFDaEIsU0FBUyxDQUFDO01BQzNDLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ04sZ0JBQWdCLENBQUNSLGVBQWUsQ0FBQyxDQUFDLENBQUMxYyxPQUFPLENBQUMsVUFBQ3FlLE1BQU0sRUFBSztRQUN4RHJVLE9BQU8sQ0FBQ3dHLFlBQVksQ0FBQzZOLE1BQU0sQ0FBQ2hjLElBQUksRUFBRWdjLE1BQU0sQ0FBQ3pnQixLQUFLLENBQUM7TUFDbkQsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDc2YsZ0JBQWdCLENBQUNQLGVBQWUsQ0FBQyxDQUFDLENBQUMzYyxPQUFPLENBQUMsVUFBQzRkLGFBQWEsRUFBSztRQUMvRDVULE9BQU8sQ0FBQzRHLGVBQWUsQ0FBQ2dOLGFBQWEsQ0FBQztNQUMxQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE5WixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWdmLFFBQUEsRUFBVTtNQUNOLE9BQVEsSUFBSSxDQUFDRyxZQUFZLENBQUM5YSxNQUFNLEtBQUssQ0FBQyxJQUNsQyxJQUFJLENBQUMrYSxjQUFjLENBQUMvYSxNQUFNLEtBQUssQ0FBQyxJQUNoQyxJQUFJLENBQUNnYixZQUFZLENBQUNMLE9BQU8sQ0FBQyxDQUFDLElBQzNCLElBQUksQ0FBQ00sZ0JBQWdCLENBQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDO0VBQUM7RUFBQSxPQUFBRSxjQUFBO0FBQUE7QUFBQSxJQUdDMkIsdUJBQXVCO0VBQ3pCLFNBQUFBLHdCQUFZelUsT0FBTyxFQUFFMFUseUJBQXlCLEVBQUU7SUFBQTNZLGVBQUEsT0FBQTBZLHVCQUFBO0lBQzVDLElBQUksQ0FBQ0UsZUFBZSxHQUFHLElBQUlDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUcsQ0FBQztJQUM3QixJQUFJLENBQUNDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQ0MsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUN0QixJQUFJLENBQUNoVixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDMFUseUJBQXlCLEdBQUdBLHlCQUF5QjtJQUMxRCxJQUFJLENBQUNPLGdCQUFnQixHQUFHLElBQUlDLGdCQUFnQixDQUFDLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDN0U7RUFBQzdZLFlBQUEsQ0FBQWtZLHVCQUFBO0lBQUEzYSxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXloQixNQUFBLEVBQVE7TUFDSixJQUFJLElBQUksQ0FBQ0wsU0FBUyxFQUFFO1FBQ2hCO01BQ0o7TUFDQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDSyxPQUFPLENBQUMsSUFBSSxDQUFDdFYsT0FBTyxFQUFFO1FBQ3hDdVYsU0FBUyxFQUFFLElBQUk7UUFDZkMsT0FBTyxFQUFFLElBQUk7UUFDYjVQLFVBQVUsRUFBRSxJQUFJO1FBQ2hCNlAsaUJBQWlCLEVBQUU7TUFDdkIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDVCxTQUFTLEdBQUcsSUFBSTtJQUN6QjtFQUFDO0lBQUFsYixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXNGLEtBQUEsRUFBTztNQUNILElBQUksSUFBSSxDQUFDOGIsU0FBUyxFQUFFO1FBQ2hCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNTLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQ1YsU0FBUyxHQUFHLEtBQUs7TUFDMUI7SUFDSjtFQUFDO0lBQUFsYixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWtiLGtCQUFrQjlPLE9BQU8sRUFBRTtNQUN2QixPQUFPLElBQUksQ0FBQzJVLGVBQWUsQ0FBQ3BRLEdBQUcsQ0FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQzJVLGVBQWUsQ0FBQ3JVLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLEdBQUcsSUFBSTtJQUN2RjtFQUFDO0lBQUFsRyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQStoQixpQkFBQSxFQUFtQjtNQUNmLE9BQU8sSUFBSSxDQUFDYixhQUFhO0lBQzdCO0VBQUM7SUFBQWhiLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBeWEsZ0JBQWdCck8sT0FBTyxFQUFFO01BQ3JCLE9BQU8sSUFBSSxDQUFDOFUsYUFBYSxDQUFDdlQsUUFBUSxDQUFDdkIsT0FBTyxDQUFDO0lBQy9DO0VBQUM7SUFBQWxHLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZ2lCLHFCQUFBLEVBQXVCO01BQ25CLElBQUksQ0FBQ1QsV0FBVyxDQUFDLElBQUksQ0FBQ0YsZ0JBQWdCLENBQUNZLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDekQ7RUFBQztJQUFBL2IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF1aEIsWUFBWVcsU0FBUyxFQUFFO01BQ25CLElBQU1DLHlCQUF5QixHQUFHLElBQUluQixPQUFPLENBQUMsQ0FBQztNQUFDLElBQUFvQixTQUFBLEdBQUFDLDBCQUFBLENBQ3pCSCxTQUFTO1FBQUFJLEtBQUE7TUFBQTtRQUFoQyxLQUFBRixTQUFBLENBQUEzZ0IsQ0FBQSxNQUFBNmdCLEtBQUEsR0FBQUYsU0FBQSxDQUFBeGlCLENBQUEsSUFBQWtELElBQUEsR0FBa0M7VUFBQSxJQUF2QnlmLFFBQVEsR0FBQUQsS0FBQSxDQUFBdGlCLEtBQUE7VUFDZixJQUFNb00sT0FBTyxHQUFHbVcsUUFBUSxDQUFDaGEsTUFBTTtVQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDdVkseUJBQXlCLENBQUMxVSxPQUFPLENBQUMsRUFBRTtZQUMxQztVQUNKO1VBQ0EsSUFBSSxJQUFJLENBQUNvVywyQkFBMkIsQ0FBQ3BXLE9BQU8sQ0FBQyxFQUFFO1lBQzNDO1VBQ0o7VUFDQSxJQUFJcVcsc0JBQXNCLEdBQUcsS0FBSztVQUFDLElBQUFDLFVBQUEsR0FBQUwsMEJBQUEsQ0FDUixJQUFJLENBQUNuQixhQUFhO1lBQUF5QixNQUFBO1VBQUE7WUFBN0MsS0FBQUQsVUFBQSxDQUFBamhCLENBQUEsTUFBQWtoQixNQUFBLEdBQUFELFVBQUEsQ0FBQTlpQixDQUFBLElBQUFrRCxJQUFBLEdBQStDO2NBQUEsSUFBcEM4ZixZQUFZLEdBQUFELE1BQUEsQ0FBQTNpQixLQUFBO2NBQ25CLElBQUk0aUIsWUFBWSxDQUFDdlUsUUFBUSxDQUFDakMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hDcVcsc0JBQXNCLEdBQUcsSUFBSTtnQkFDN0I7Y0FDSjtZQUNKO1VBQUMsU0FBQTliLEdBQUE7WUFBQStiLFVBQUEsQ0FBQW5qQixDQUFBLENBQUFvSCxHQUFBO1VBQUE7WUFBQStiLFVBQUEsQ0FBQWxoQixDQUFBO1VBQUE7VUFDRCxJQUFJaWhCLHNCQUFzQixFQUFFO1lBQ3hCO1VBQ0o7VUFDQSxRQUFRRixRQUFRLENBQUNwaEIsSUFBSTtZQUNqQixLQUFLLFdBQVc7Y0FDWixJQUFJLENBQUMwaEIsdUJBQXVCLENBQUNOLFFBQVEsQ0FBQztjQUN0QztZQUNKLEtBQUssWUFBWTtjQUNiLElBQUksQ0FBQ0oseUJBQXlCLENBQUN4UixHQUFHLENBQUN2RSxPQUFPLENBQUMsRUFBRTtnQkFDekMrVix5QkFBeUIsQ0FBQ3ZSLEdBQUcsQ0FBQ3hFLE9BQU8sRUFBRSxFQUFFLENBQUM7Y0FDOUM7Y0FDQSxJQUFJLENBQUMrVix5QkFBeUIsQ0FBQ3pWLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLENBQUN1QixRQUFRLENBQUM0VSxRQUFRLENBQUN2QyxhQUFhLENBQUMsRUFBRTtnQkFDMUUsSUFBSSxDQUFDOEMsdUJBQXVCLENBQUNQLFFBQVEsQ0FBQztnQkFDdENKLHlCQUF5QixDQUFDdlIsR0FBRyxDQUFDeEUsT0FBTyxLQUFBZixNQUFBLENBQUEvQixrQkFBQSxDQUM5QjZZLHlCQUF5QixDQUFDelYsR0FBRyxDQUFDTixPQUFPLENBQUMsSUFDekNtVyxRQUFRLENBQUN2QyxhQUFhLEVBQ3pCLENBQUM7Y0FDTjtjQUNBO1VBQ1I7UUFDSjtNQUFDLFNBQUFyWixHQUFBO1FBQUF5YixTQUFBLENBQUE3aUIsQ0FBQSxDQUFBb0gsR0FBQTtNQUFBO1FBQUF5YixTQUFBLENBQUE1Z0IsQ0FBQTtNQUFBO0lBQ0w7RUFBQztJQUFBMEUsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2aUIsd0JBQXdCTixRQUFRLEVBQUU7TUFBQSxJQUFBUSxNQUFBO01BQzlCUixRQUFRLENBQUNTLFVBQVUsQ0FBQzVnQixPQUFPLENBQUMsVUFBQ2tVLElBQUksRUFBSztRQUNsQyxJQUFJLEVBQUVBLElBQUksWUFBWTJNLE9BQU8sQ0FBQyxFQUFFO1VBQzVCO1FBQ0o7UUFDQSxJQUFJRixNQUFJLENBQUM1QixlQUFlLENBQUN4VCxRQUFRLENBQUMySSxJQUFJLENBQUMsRUFBRTtVQUNyQ3lNLE1BQUksQ0FBQzVCLGVBQWUsQ0FBQ3pSLE1BQU0sQ0FBQ3FULE1BQUksQ0FBQzVCLGVBQWUsQ0FBQzdSLE9BQU8sQ0FBQ2dILElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNsRTtRQUNKO1FBQ0EsSUFBSXlNLE1BQUksQ0FBQ1AsMkJBQTJCLENBQUNsTSxJQUFJLENBQUMsRUFBRTtVQUN4QztRQUNKO1FBQ0F5TSxNQUFJLENBQUM3QixhQUFhLENBQUNsZCxJQUFJLENBQUNzUyxJQUFJLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BQ0ZpTSxRQUFRLENBQUNXLFlBQVksQ0FBQzlnQixPQUFPLENBQUMsVUFBQ2tVLElBQUksRUFBSztRQUNwQyxJQUFJLEVBQUVBLElBQUksWUFBWTJNLE9BQU8sQ0FBQyxFQUFFO1VBQzVCO1FBQ0o7UUFDQSxJQUFJRixNQUFJLENBQUM3QixhQUFhLENBQUN2VCxRQUFRLENBQUMySSxJQUFJLENBQUMsRUFBRTtVQUNuQ3lNLE1BQUksQ0FBQzdCLGFBQWEsQ0FBQ3hSLE1BQU0sQ0FBQ3FULE1BQUksQ0FBQzdCLGFBQWEsQ0FBQzVSLE9BQU8sQ0FBQ2dILElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUM5RDtRQUNKO1FBQ0F5TSxNQUFJLENBQUM1QixlQUFlLENBQUNuZCxJQUFJLENBQUNzUyxJQUFJLENBQUM7TUFDbkMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBcFEsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE4aUIsd0JBQXdCUCxRQUFRLEVBQUU7TUFDOUIsSUFBTW5XLE9BQU8sR0FBR21XLFFBQVEsQ0FBQ2hhLE1BQU07TUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQ3dZLGVBQWUsQ0FBQ3BRLEdBQUcsQ0FBQ3ZFLE9BQU8sQ0FBQyxFQUFFO1FBQ3BDLElBQUksQ0FBQzJVLGVBQWUsQ0FBQ25RLEdBQUcsQ0FBQ3hFLE9BQU8sRUFBRSxJQUFJOFMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMrQixvQkFBb0IsRUFBRTtNQUMvQjtNQUNBLElBQU1rQyxjQUFjLEdBQUcsSUFBSSxDQUFDcEMsZUFBZSxDQUFDclUsR0FBRyxDQUFDTixPQUFPLENBQUM7TUFDeEQsUUFBUW1XLFFBQVEsQ0FBQ3ZDLGFBQWE7UUFDMUIsS0FBSyxPQUFPO1VBQ1IsSUFBSSxDQUFDb0QsNEJBQTRCLENBQUNiLFFBQVEsRUFBRVksY0FBYyxDQUFDO1VBQzNEO1FBQ0osS0FBSyxPQUFPO1VBQ1IsSUFBSSxDQUFDRSw0QkFBNEIsQ0FBQ2QsUUFBUSxFQUFFWSxjQUFjLENBQUM7VUFDM0Q7UUFDSjtVQUNJLElBQUksQ0FBQ0csOEJBQThCLENBQUNmLFFBQVEsRUFBRVksY0FBYyxDQUFDO01BQ3JFO01BQ0EsSUFBSUEsY0FBYyxDQUFDbkUsT0FBTyxDQUFDLENBQUMsRUFBRTtRQUMxQixJQUFJLENBQUMrQixlQUFlLFVBQU8sQ0FBQzNVLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUM2VSxvQkFBb0IsRUFBRTtNQUMvQjtJQUNKO0VBQUM7SUFBQS9hLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBb2pCLDZCQUE2QmIsUUFBUSxFQUFFdEgsY0FBYyxFQUFFO01BQ25ELElBQU03TyxPQUFPLEdBQUdtVyxRQUFRLENBQUNoYSxNQUFNO01BQy9CLElBQU1pVyxhQUFhLEdBQUcrRCxRQUFRLENBQUM1TSxRQUFRO01BQ3ZDLElBQU00TixjQUFjLEdBQUcvRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQzNTLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO01BQ3BFMFgsY0FBYyxDQUFDbmhCLE9BQU8sQ0FBQyxVQUFDcEMsS0FBSyxFQUFFeVAsS0FBSyxFQUFLO1FBQ3JDLElBQU0rVCxZQUFZLEdBQUd4akIsS0FBSyxDQUFDc0wsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSWtZLFlBQVksS0FBSyxFQUFFLEVBQUU7VUFDckJELGNBQWMsQ0FBQzlULEtBQUssQ0FBQyxHQUFHK1QsWUFBWTtRQUN4QyxDQUFDLE1BQ0k7VUFDREQsY0FBYyxDQUFDN1QsTUFBTSxDQUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25DO01BQ0osQ0FBQyxDQUFDO01BQ0YsSUFBTWdVLFNBQVMsR0FBRyxFQUFFLENBQUNwZSxLQUFLLENBQUNoRSxJQUFJLENBQUMrSyxPQUFPLENBQUNtVSxTQUFTLENBQUM7TUFDbEQsSUFBTW1ELFdBQVcsR0FBR0QsU0FBUyxDQUFDaEUsTUFBTSxDQUFDLFVBQUN6ZixLQUFLO1FBQUEsT0FBSyxDQUFDdWpCLGNBQWMsQ0FBQzVWLFFBQVEsQ0FBQzNOLEtBQUssQ0FBQztNQUFBLEVBQUM7TUFDaEYsSUFBTTJqQixhQUFhLEdBQUdKLGNBQWMsQ0FBQzlELE1BQU0sQ0FBQyxVQUFDemYsS0FBSztRQUFBLE9BQUssQ0FBQ3lqQixTQUFTLENBQUM5VixRQUFRLENBQUMzTixLQUFLLENBQUM7TUFBQSxFQUFDO01BQ2xGMGpCLFdBQVcsQ0FBQ3RoQixPQUFPLENBQUMsVUFBQ3BDLEtBQUssRUFBSztRQUMzQmliLGNBQWMsQ0FBQ3NFLFFBQVEsQ0FBQ3ZmLEtBQUssQ0FBQztNQUNsQyxDQUFDLENBQUM7TUFDRjJqQixhQUFhLENBQUN2aEIsT0FBTyxDQUFDLFVBQUNwQyxLQUFLLEVBQUs7UUFDN0JpYixjQUFjLENBQUN5RSxXQUFXLENBQUMxZixLQUFLLENBQUM7TUFDckMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBa0csR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFxakIsNkJBQTZCZCxRQUFRLEVBQUV0SCxjQUFjLEVBQUU7TUFDbkQsSUFBTTdPLE9BQU8sR0FBR21XLFFBQVEsQ0FBQ2hhLE1BQU07TUFDL0IsSUFBTWlXLGFBQWEsR0FBRytELFFBQVEsQ0FBQzVNLFFBQVEsSUFBSSxFQUFFO01BQzdDLElBQU1pTyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxhQUFhLENBQUNyRixhQUFhLENBQUM7TUFDeEQsSUFBTTlJLFFBQVEsR0FBR3RKLE9BQU8sQ0FBQ2xGLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO01BQ3BELElBQU00YyxTQUFTLEdBQUcsSUFBSSxDQUFDRCxhQUFhLENBQUNuTyxRQUFRLENBQUM7TUFDOUMsSUFBTXFPLG9CQUFvQixHQUFHcmtCLE1BQU0sQ0FBQ3NGLElBQUksQ0FBQzhlLFNBQVMsQ0FBQyxDQUFDckUsTUFBTSxDQUFDLFVBQUN2WixHQUFHO1FBQUEsT0FBSzBkLGNBQWMsQ0FBQzFkLEdBQUcsQ0FBQyxLQUFLVSxTQUFTLElBQUlnZCxjQUFjLENBQUMxZCxHQUFHLENBQUMsS0FBSzRkLFNBQVMsQ0FBQzVkLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDaEosSUFBTThkLGFBQWEsR0FBR3RrQixNQUFNLENBQUNzRixJQUFJLENBQUM0ZSxjQUFjLENBQUMsQ0FBQ25FLE1BQU0sQ0FBQyxVQUFDdlosR0FBRztRQUFBLE9BQUssQ0FBQzRkLFNBQVMsQ0FBQzVkLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDbEY2ZCxvQkFBb0IsQ0FBQzNoQixPQUFPLENBQUMsVUFBQ3NlLEtBQUssRUFBSztRQUNwQ3pGLGNBQWMsQ0FBQzBFLFFBQVEsQ0FBQ2UsS0FBSyxFQUFFb0QsU0FBUyxDQUFDcEQsS0FBSyxDQUFDLEVBQUVrRCxjQUFjLENBQUNsRCxLQUFLLENBQUMsS0FBSzlaLFNBQVMsR0FBRyxJQUFJLEdBQUdnZCxjQUFjLENBQUNsRCxLQUFLLENBQUMsQ0FBQztNQUN4SCxDQUFDLENBQUM7TUFDRnNELGFBQWEsQ0FBQzVoQixPQUFPLENBQUMsVUFBQ3NlLEtBQUssRUFBSztRQUM3QnpGLGNBQWMsQ0FBQzZFLFdBQVcsQ0FBQ1ksS0FBSyxFQUFFa0QsY0FBYyxDQUFDbEQsS0FBSyxDQUFDLENBQUM7TUFDNUQsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBeGEsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFzakIsK0JBQStCZixRQUFRLEVBQUV0SCxjQUFjLEVBQUU7TUFDckQsSUFBTStFLGFBQWEsR0FBR3VDLFFBQVEsQ0FBQ3ZDLGFBQWE7TUFDNUMsSUFBTTVULE9BQU8sR0FBR21XLFFBQVEsQ0FBQ2hhLE1BQU07TUFDL0IsSUFBSW9OLFFBQVEsR0FBRzRNLFFBQVEsQ0FBQzVNLFFBQVE7TUFDaEMsSUFBSUQsUUFBUSxHQUFHdEosT0FBTyxDQUFDbEYsWUFBWSxDQUFDOFksYUFBYSxDQUFDO01BQ2xELElBQUlySyxRQUFRLEtBQUtxSyxhQUFhLEVBQUU7UUFDNUJySyxRQUFRLEdBQUcsRUFBRTtNQUNqQjtNQUNBLElBQUlELFFBQVEsS0FBS3NLLGFBQWEsRUFBRTtRQUM1QnRLLFFBQVEsR0FBRyxFQUFFO01BQ2pCO01BQ0EsSUFBSSxDQUFDdEosT0FBTyxDQUFDUSxZQUFZLENBQUNvVCxhQUFhLENBQUMsRUFBRTtRQUN0QyxJQUFJckssUUFBUSxLQUFLLElBQUksRUFBRTtVQUNuQjtRQUNKO1FBQ0FzRixjQUFjLENBQUNqSSxlQUFlLENBQUNnTixhQUFhLEVBQUV1QyxRQUFRLENBQUM1TSxRQUFRLENBQUM7UUFDaEU7TUFDSjtNQUNBLElBQUlELFFBQVEsS0FBS0MsUUFBUSxFQUFFO1FBQ3ZCO01BQ0o7TUFDQXNGLGNBQWMsQ0FBQzhFLFlBQVksQ0FBQ0MsYUFBYSxFQUFFNVQsT0FBTyxDQUFDbEYsWUFBWSxDQUFDOFksYUFBYSxDQUFDLEVBQUV1QyxRQUFRLENBQUM1TSxRQUFRLENBQUM7SUFDdEc7RUFBQztJQUFBelAsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2akIsY0FBY0ksTUFBTSxFQUFFO01BQ2xCLElBQU1DLFdBQVcsR0FBRyxDQUFDLENBQUM7TUFDdEJELE1BQU0sQ0FBQ3BZLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3pKLE9BQU8sQ0FBQyxVQUFDc2UsS0FBSyxFQUFLO1FBQ2pDLElBQU1oVixLQUFLLEdBQUdnVixLQUFLLENBQUM3VSxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlCLElBQUlILEtBQUssQ0FBQ3JILE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDcEI7UUFDSjtRQUNBLElBQU04ZixRQUFRLEdBQUd6WSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQyxDQUFDO1FBQ2hDNFksV0FBVyxDQUFDQyxRQUFRLENBQUMsR0FBR3pZLEtBQUssQ0FBQ3JHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzZHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ1osSUFBSSxDQUFDLENBQUM7TUFDM0QsQ0FBQyxDQUFDO01BQ0YsT0FBTzRZLFdBQVc7SUFDdEI7RUFBQztJQUFBaGUsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF3aUIsNEJBQTRCcFcsT0FBTyxFQUFFO01BQ2pDLE9BQU9BLE9BQU8sQ0FBQ2dZLE9BQU8sS0FBSyxNQUFNLElBQUloWSxPQUFPLENBQUNsRixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssMEJBQTBCO0lBQ3JHO0VBQUM7RUFBQSxPQUFBMlosdUJBQUE7QUFBQTtBQUFBLElBR0N3RCxxQkFBcUIsZ0JBQUExYixZQUFBLENBQ3ZCLFNBQUEwYixzQkFBWWpXLFNBQVMsRUFBRWtXLGFBQWEsRUFBRTtFQUFBbmMsZUFBQSxPQUFBa2MscUJBQUE7RUFDbEMsSUFBSSxDQUFDalcsU0FBUyxHQUFHQSxTQUFTO0VBQzFCLElBQUksQ0FBQ2tXLGFBQWEsR0FBR0EsYUFBYTtBQUN0QyxDQUFDO0FBQUEsSUFFQ0MsU0FBUztFQUNYLFNBQUFBLFVBQVluWSxPQUFPLEVBQUUzSCxJQUFJLEVBQUUrRCxLQUFLLEVBQUVnYyxTQUFTLEVBQUVDLGVBQWUsRUFBRUMsV0FBVyxFQUFFbk8sRUFBRSxFQUFFb08sT0FBTyxFQUFFQyxhQUFhLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQUExYyxlQUFBLE9BQUFvYyxTQUFBO0lBQ25HLElBQUksQ0FBQ08sZUFBZSxHQUFHLEdBQUc7SUFDMUIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSTtJQUMxQixJQUFJLENBQUNDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLGdCQUFnQixHQUFHLEtBQUs7SUFDN0IsSUFBSSxDQUFDQyxzQkFBc0IsR0FBRyxJQUFJO0lBQ2xDLElBQUksQ0FBQ3RMLFFBQVEsR0FBRyxJQUFJVyxHQUFHLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUNuRCxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNqTCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDM0gsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ2dnQixlQUFlLEdBQUdBLGVBQWU7SUFDdEMsSUFBSSxDQUFDRSxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7SUFDbEMsSUFBSSxDQUFDck8sRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDbU8sV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0YsU0FBUyxHQUFHLElBQUloSyxHQUFHLENBQUMsQ0FBQztJQUMxQmdLLFNBQVMsQ0FBQ3BpQixPQUFPLENBQUMsVUFBQ2dqQixRQUFRLEVBQUs7TUFDNUIsSUFBSUMsRUFBRTtNQUNOLElBQUksQ0FBQ1IsTUFBSSxDQUFDTCxTQUFTLENBQUM3VCxHQUFHLENBQUN5VSxRQUFRLENBQUN6SixLQUFLLENBQUMsRUFBRTtRQUNyQ2tKLE1BQUksQ0FBQ0wsU0FBUyxDQUFDNVQsR0FBRyxDQUFDd1UsUUFBUSxDQUFDekosS0FBSyxFQUFFLEVBQUUsQ0FBQztNQUMxQztNQUNBLENBQUMwSixFQUFFLEdBQUdSLE1BQUksQ0FBQ0wsU0FBUyxDQUFDOVgsR0FBRyxDQUFDMFksUUFBUSxDQUFDekosS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJMEosRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxFQUFFLENBQUNyaEIsSUFBSSxDQUFDb2hCLFFBQVEsQ0FBQ3RhLE1BQU0sQ0FBQztJQUMzRyxDQUFDLENBQUM7SUFDRixJQUFJLENBQUN1QixVQUFVLEdBQUcsSUFBSWlFLFVBQVUsQ0FBQzlILEtBQUssQ0FBQztJQUN2QyxJQUFJLENBQUM4YyxxQkFBcUIsR0FBRyxJQUFJL0oscUJBQXFCLENBQUMsSUFBSSxFQUFFcUosYUFBYSxDQUFDO0lBQzNFLElBQUksQ0FBQ3JILEtBQUssR0FBRyxJQUFJRCxXQUFXLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNpSSxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNqTCx1QkFBdUIsR0FBRyxJQUFJdUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDelUsT0FBTyxFQUFFLFVBQUNBLE9BQU87TUFBQSxPQUFLK0IsNkJBQTZCLENBQUMvQixPQUFPLEVBQUV5WSxNQUFJLENBQUM7SUFBQSxFQUFDO0lBQ25JLElBQUksQ0FBQ3ZLLHVCQUF1QixDQUFDbUgsS0FBSyxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDK0QsMkJBQTJCLEdBQUcsSUFBSSxDQUFDQSwyQkFBMkIsQ0FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUM7RUFDbEY7RUFBQzdZLFlBQUEsQ0FBQTRiLFNBQUE7SUFBQXJlLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBeWxCLGFBQWFkLE9BQU8sRUFBRTtNQUNsQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUMxQjtFQUFDO0lBQUF6ZSxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTBsQixVQUFVQyxNQUFNLEVBQUU7TUFDZEEsTUFBTSxDQUFDQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDbEM7RUFBQztJQUFBMWYsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2bEIsUUFBQSxFQUFVO01BQ04sSUFBSSxDQUFDdEksS0FBSyxDQUFDSSxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztNQUN2QyxJQUFJLENBQUMySCxxQkFBcUIsQ0FBQ3RKLFFBQVEsQ0FBQyxDQUFDO01BQ3JDLElBQUksQ0FBQzFCLHVCQUF1QixDQUFDbUgsS0FBSyxDQUFDLENBQUM7SUFDeEM7RUFBQztJQUFBdmIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE4aEIsV0FBQSxFQUFhO01BQ1QsSUFBSSxDQUFDdkUsS0FBSyxDQUFDSSxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztNQUMxQyxJQUFJLENBQUNtSSwyQkFBMkIsQ0FBQyxDQUFDO01BQ2xDLElBQUksQ0FBQ1IscUJBQXFCLENBQUNsSixVQUFVLENBQUMsQ0FBQztNQUN2QyxJQUFJLENBQUM5Qix1QkFBdUIsQ0FBQ2hWLElBQUksQ0FBQyxDQUFDO0lBQ3ZDO0VBQUM7SUFBQVksR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUErbEIsR0FBR3RJLFFBQVEsRUFBRTdCLFFBQVEsRUFBRTtNQUNuQixJQUFJLENBQUMyQixLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFN0IsUUFBUSxDQUFDO0lBQzNDO0VBQUM7SUFBQTFWLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZ21CLElBQUl2SSxRQUFRLEVBQUU3QixRQUFRLEVBQUU7TUFDcEIsSUFBSSxDQUFDMkIsS0FBSyxDQUFDRyxVQUFVLENBQUNELFFBQVEsRUFBRTdCLFFBQVEsQ0FBQztJQUM3QztFQUFDO0lBQUExVixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTRRLElBQUk3RSxLQUFLLEVBQUUvTCxLQUFLLEVBQXNDO01BQUEsSUFBcENpbUIsUUFBUSxHQUFBeGYsU0FBQSxDQUFBcEMsTUFBQSxRQUFBb0MsU0FBQSxRQUFBRyxTQUFBLEdBQUFILFNBQUEsTUFBRyxLQUFLO01BQUEsSUFBRXlmLFFBQVEsR0FBQXpmLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsS0FBSztNQUNoRCxJQUFNMGYsT0FBTyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCO01BQ3ZDLElBQU0zSixTQUFTLEdBQUczUSxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDO01BQzNDLElBQUksQ0FBQyxJQUFJLENBQUNNLFVBQVUsQ0FBQ3NFLEdBQUcsQ0FBQzhMLFNBQVMsQ0FBQyxFQUFFO1FBQ2pDLE1BQU0sSUFBSTVaLEtBQUsseUJBQUF3SSxNQUFBLENBQXdCVSxLQUFLLFFBQUksQ0FBQztNQUNyRDtNQUNBLElBQU1zYSxTQUFTLEdBQUcsSUFBSSxDQUFDaGEsVUFBVSxDQUFDdUUsR0FBRyxDQUFDNkwsU0FBUyxFQUFFemMsS0FBSyxDQUFDO01BQ3ZELElBQUksQ0FBQ3VkLEtBQUssQ0FBQ0ksV0FBVyxDQUFDLFdBQVcsRUFBRTVSLEtBQUssRUFBRS9MLEtBQUssRUFBRSxJQUFJLENBQUM7TUFDdkQsSUFBSSxDQUFDc2xCLHFCQUFxQixDQUFDOUksaUJBQWlCLENBQUNDLFNBQVMsQ0FBQztNQUN2RCxJQUFJd0osUUFBUSxJQUFJSSxTQUFTLEVBQUU7UUFDdkIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0osUUFBUSxDQUFDO01BQ3hDO01BQ0EsT0FBT0MsT0FBTztJQUNsQjtFQUFDO0lBQUFqZ0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF1bUIsUUFBUXhhLEtBQUssRUFBRTtNQUNYLElBQU0wUSxTQUFTLEdBQUczUSxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDO01BQzNDLElBQUksQ0FBQyxJQUFJLENBQUNNLFVBQVUsQ0FBQ3NFLEdBQUcsQ0FBQzhMLFNBQVMsQ0FBQyxFQUFFO1FBQ2pDLE1BQU0sSUFBSTVaLEtBQUssb0JBQUF3SSxNQUFBLENBQW1CVSxLQUFLLFFBQUksQ0FBQztNQUNoRDtNQUNBLE9BQU8sSUFBSSxDQUFDTSxVQUFVLENBQUNLLEdBQUcsQ0FBQytQLFNBQVMsQ0FBQztJQUN6QztFQUFDO0lBQUF2VyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQThLLE9BQU9yRyxJQUFJLEVBQStCO01BQUEsSUFBN0IrQixJQUFJLEdBQUFDLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQUEsSUFBRXlmLFFBQVEsR0FBQXpmLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsS0FBSztNQUNwQyxJQUFNMGYsT0FBTyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCO01BQ3ZDLElBQUksQ0FBQ3BCLGNBQWMsQ0FBQ2hoQixJQUFJLENBQUM7UUFDckJTLElBQUksRUFBSkEsSUFBSTtRQUNKK0IsSUFBSSxFQUFKQTtNQUNKLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQzhmLHFCQUFxQixDQUFDSixRQUFRLENBQUM7TUFDcEMsT0FBT0MsT0FBTztJQUNsQjtFQUFDO0lBQUFqZ0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF3bUIsTUFBTXRnQixHQUFHLEVBQUU4QyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUNpYyxZQUFZLENBQUMvZSxHQUFHLENBQUMsR0FBRzhDLEtBQUs7SUFDbEM7RUFBQztJQUFBOUMsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF5bUIsT0FBQSxFQUFTO01BQ0wsSUFBTU4sT0FBTyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCO01BQ3ZDLElBQUksQ0FBQ00sa0JBQWtCLENBQUMsQ0FBQztNQUN6QixPQUFPUCxPQUFPO0lBQ2xCO0VBQUM7SUFBQWpnQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQStjLGtCQUFBLEVBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDdUkscUJBQXFCLENBQUN2SSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pEO0VBQUM7SUFBQTdXLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBb1gsU0FBU2pJLEtBQUssRUFBc0I7TUFBQSxJQUFwQm1WLGFBQWEsR0FBQTdkLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsRUFBRTtNQUM5QixJQUFJLENBQUMwSSxLQUFLLENBQUNvSCxFQUFFLEVBQUU7UUFDWCxNQUFNLElBQUkxVCxLQUFLLENBQUMsc0NBQXNDLENBQUM7TUFDM0Q7TUFDQSxJQUFJLENBQUNnWCxRQUFRLENBQUNqSixHQUFHLENBQUN6QixLQUFLLENBQUNvSCxFQUFFLEVBQUUsSUFBSThOLHFCQUFxQixDQUFDbFYsS0FBSyxFQUFFbVYsYUFBYSxDQUFDLENBQUM7TUFDNUVuVixLQUFLLENBQUNrSSxNQUFNLEdBQUcsSUFBSTtNQUNuQmxJLEtBQUssQ0FBQzRXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDUCwyQkFBMkIsQ0FBQztJQUMzRDtFQUFDO0lBQUF0ZixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTZYLFlBQVkxSSxLQUFLLEVBQUU7TUFDZixJQUFJLENBQUNBLEtBQUssQ0FBQ29ILEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSTFULEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztNQUMzRDtNQUNBLElBQUksQ0FBQ2dYLFFBQVEsVUFBTyxDQUFDMUssS0FBSyxDQUFDb0gsRUFBRSxDQUFDO01BQzlCcEgsS0FBSyxDQUFDa0ksTUFBTSxHQUFHLElBQUk7TUFDbkJsSSxLQUFLLENBQUM2VyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ1IsMkJBQTJCLENBQUM7SUFDNUQ7RUFBQztJQUFBdGYsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUEybUIsVUFBQSxFQUFZO01BQ1IsT0FBTyxJQUFJLENBQUN0UCxNQUFNO0lBQ3RCO0VBQUM7SUFBQW5SLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBdU8sWUFBQSxFQUFjO01BQ1YsSUFBTXNMLFFBQVEsR0FBRyxJQUFJVyxHQUFHLENBQUMsQ0FBQztNQUMxQixJQUFJLENBQUNYLFFBQVEsQ0FBQ3pYLE9BQU8sQ0FBQyxVQUFDb00sY0FBYyxFQUFFK0gsRUFBRSxFQUFLO1FBQzFDc0QsUUFBUSxDQUFDakosR0FBRyxDQUFDMkYsRUFBRSxFQUFFL0gsY0FBYyxDQUFDSixTQUFTLENBQUM7TUFDOUMsQ0FBQyxDQUFDO01BQ0YsT0FBT3lMLFFBQVE7SUFDbkI7RUFBQztJQUFBM1QsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE0bUIsS0FBS25pQixJQUFJLEVBQUVtTCxJQUFJLEVBQXNDO01BQUEsSUFBcENpWCwyQkFBMkIsR0FBQXBnQixTQUFBLENBQUFwQyxNQUFBLFFBQUFvQyxTQUFBLFFBQUFHLFNBQUEsR0FBQUgsU0FBQSxNQUFHLElBQUk7TUFDL0MsT0FBTyxJQUFJLENBQUNxZ0IsV0FBVyxDQUFDcmlCLElBQUksRUFBRW1MLElBQUksRUFBRSxLQUFLLEVBQUVpWCwyQkFBMkIsQ0FBQztJQUMzRTtFQUFDO0lBQUEzZ0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUErbUIsT0FBT3RpQixJQUFJLEVBQUVtTCxJQUFJLEVBQXNDO01BQUEsSUFBcENpWCwyQkFBMkIsR0FBQXBnQixTQUFBLENBQUFwQyxNQUFBLFFBQUFvQyxTQUFBLFFBQUFHLFNBQUEsR0FBQUgsU0FBQSxNQUFHLElBQUk7TUFDakQsT0FBTyxJQUFJLENBQUNxZ0IsV0FBVyxDQUFDcmlCLElBQUksRUFBRW1MLElBQUksRUFBRSxJQUFJLEVBQUVpWCwyQkFBMkIsQ0FBQztJQUMxRTtFQUFDO0lBQUEzZ0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFnbkIsU0FBU3ZpQixJQUFJLEVBQUVtTCxJQUFJLEVBQUU7TUFDakIsT0FBTyxJQUFJLENBQUNxWCxNQUFNLENBQUN4aUIsSUFBSSxFQUFFbUwsSUFBSSxDQUFDO0lBQ2xDO0VBQUM7SUFBQTFKLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBOG1CLFlBQVlyaUIsSUFBSSxFQUFFbUwsSUFBSSxFQUFFbVgsTUFBTSxFQUFFRyxZQUFZLEVBQUU7TUFDMUMsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQzFDLGVBQWUsQ0FBQyxJQUFJLEVBQUVzQyxNQUFNLEVBQUVHLFlBQVksQ0FBQztNQUNuRUMsVUFBVSxDQUFDL2tCLE9BQU8sQ0FBQyxVQUFDZ00sU0FBUyxFQUFLO1FBQzlCQSxTQUFTLENBQUM2WSxNQUFNLENBQUN4aUIsSUFBSSxFQUFFbUwsSUFBSSxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTFKLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBaW5CLE9BQU94aUIsSUFBSSxFQUFFbUwsSUFBSSxFQUFFO01BQUEsSUFBQXdYLE1BQUE7TUFDZixJQUFJLENBQUMsSUFBSSxDQUFDNUMsU0FBUyxDQUFDN1QsR0FBRyxDQUFDbE0sSUFBSSxDQUFDLEVBQUU7UUFDM0I7TUFDSjtNQUNBLElBQU00aUIsT0FBTyxHQUFHLElBQUksQ0FBQzdDLFNBQVMsQ0FBQzlYLEdBQUcsQ0FBQ2pJLElBQUksQ0FBQyxJQUFJLEVBQUU7TUFDOUM0aUIsT0FBTyxDQUFDamxCLE9BQU8sQ0FBQyxVQUFDMEksTUFBTSxFQUFLO1FBQ3hCc2MsTUFBSSxDQUFDdGMsTUFBTSxDQUFDQSxNQUFNLEVBQUU4RSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTFKLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZ2IscUNBQXFDN0csSUFBSSxFQUFFO01BQ3ZDLElBQU0zTCxLQUFLLEdBQUcsSUFBSSxDQUFDb2MsYUFBYSxDQUFDMEMsaUJBQWlCLENBQUNuVCxJQUFJLENBQUM7TUFDeEQsSUFBSTNMLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDaEI7TUFDSjtNQUNBLElBQU02ZCxTQUFTLEdBQUcsSUFBSSxDQUFDaGEsVUFBVSxDQUFDZ0YsdUJBQXVCLENBQUM3SSxLQUFLLENBQUM7TUFDaEUsSUFBTWtjLFdBQVcsR0FBR3ZRLElBQUksQ0FBQ2hILE9BQU8sQ0FBQ29hLG9CQUFvQjtNQUNyRCxJQUFJN0MsV0FBVyxLQUFLOWQsU0FBUyxFQUFFO1FBQzNCLElBQUksQ0FBQzhkLFdBQVcsR0FBR0EsV0FBVztNQUNsQztNQUNBLElBQUkyQixTQUFTLEVBQUU7UUFDWCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxDQUFDO01BQ2pCO0lBQ0o7RUFBQztJQUFBdmdCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd2xCLDRCQUE0Qi9JLFNBQVMsRUFBRXpjLEtBQUssRUFBRXdPLGNBQWMsRUFBRTtNQUFBLElBQUFnWixNQUFBO01BQzFELElBQUksQ0FBQ2haLGNBQWMsQ0FBQytILEVBQUUsRUFBRTtRQUNwQixNQUFNLElBQUkxVCxLQUFLLENBQUMsWUFBWSxDQUFDO01BQ2pDO01BQ0EsSUFBTTRrQixZQUFZLEdBQUcsSUFBSSxDQUFDNU4sUUFBUSxDQUFDbk4sR0FBRyxDQUFDOEIsY0FBYyxDQUFDK0gsRUFBRSxDQUFDO01BQ3pELElBQUksQ0FBQ2tSLFlBQVksRUFBRTtRQUNmLE1BQU0sSUFBSTVrQixLQUFLLENBQUMsZUFBZSxDQUFDO01BQ3BDO01BQ0E0a0IsWUFBWSxDQUFDbkQsYUFBYSxDQUFDbGlCLE9BQU8sQ0FBQyxVQUFDc2xCLFlBQVksRUFBSztRQUNqRCxJQUFNQyxjQUFjLEdBQUdELFlBQVksQ0FBQ0UsY0FBYyxJQUFJLE9BQU87UUFDN0QsSUFBSUQsY0FBYyxLQUFLbEwsU0FBUyxFQUFFO1VBQzlCO1FBQ0o7UUFDQStLLE1BQUksQ0FBQzVXLEdBQUcsQ0FBQzhXLFlBQVksQ0FBQ2pMLFNBQVMsRUFBRXpjLEtBQUssRUFBRTBuQixZQUFZLENBQUNHLFlBQVksRUFBRUgsWUFBWSxDQUFDeEIsUUFBUSxDQUFDO01BQzdGLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQWhnQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQThuQixlQUFBLEVBQWlCO01BQ2IsT0FBTyxPQUFPQyxLQUFLLEtBQUssV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDM2IsT0FBTyxDQUFDNkIsT0FBTyxDQUFDLHNCQUFzQixDQUFDO0lBQ3hGO0VBQUM7SUFBQS9ILEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBMG1CLG1CQUFBLEVBQXFCO01BQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMzQixjQUFjLEVBQUU7UUFDdEIsSUFBSSxDQUFDaUQsY0FBYyxDQUFDLENBQUM7UUFDckI7TUFDSjtNQUNBLElBQUksQ0FBQzlDLGdCQUFnQixHQUFHLElBQUk7SUFDaEM7RUFBQztJQUFBaGYsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFnb0IsZUFBQSxFQUFpQjtNQUFBLElBQUFDLE1BQUE7TUFDYixJQUFNQyxrQkFBa0IsR0FBRyxJQUFJLENBQUNDLHlCQUF5QjtNQUN6RCxJQUFJLENBQUM1QyxZQUFZLENBQUMsQ0FBQztNQUNuQixJQUFJLENBQUNELHFCQUFxQixDQUFDckksbUJBQW1CLENBQUMsQ0FBQztNQUNoRCxJQUFNbUwsV0FBVyxHQUFHLENBQUMsQ0FBQztNQUN0QixTQUFBQyxHQUFBLE1BQUFDLGdCQUFBLEdBQTJCNW9CLE1BQU0sQ0FBQytSLE9BQU8sQ0FBQyxJQUFJLENBQUN3VCxZQUFZLENBQUMsRUFBQW9ELEdBQUEsR0FBQUMsZ0JBQUEsQ0FBQWprQixNQUFBLEVBQUFna0IsR0FBQSxJQUFFO1FBQXpELElBQUFFLG1CQUFBLEdBQUE1Z0IsY0FBQSxDQUFBMmdCLGdCQUFBLENBQUFELEdBQUE7VUFBT25pQixHQUFHLEdBQUFxaUIsbUJBQUE7VUFBRXZvQixLQUFLLEdBQUF1b0IsbUJBQUE7UUFDbEIsSUFBSXZvQixLQUFLLENBQUN3bUIsS0FBSyxFQUFFO1VBQ2I0QixXQUFXLENBQUNsaUIsR0FBRyxDQUFDLEdBQUdsRyxLQUFLLENBQUN3bUIsS0FBSztRQUNsQztNQUNKO01BQ0EsSUFBSSxDQUFDekIsY0FBYyxHQUFHLElBQUksQ0FBQ0osT0FBTyxDQUFDNkQsV0FBVyxDQUFDLElBQUksQ0FBQ25jLFVBQVUsQ0FBQ3lFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNrVSxjQUFjLEVBQUUsSUFBSSxDQUFDM1ksVUFBVSxDQUFDMkUsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUN5WCx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDcGMsVUFBVSxDQUFDNEUseUJBQXlCLENBQUMsQ0FBQyxFQUFFbVgsV0FBVyxDQUFDO01BQ2xPLElBQUksQ0FBQzdLLEtBQUssQ0FBQ0ksV0FBVyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQ3ZSLE9BQU8sRUFBRSxJQUFJLENBQUMyWSxjQUFjLENBQUM7TUFDbEYsSUFBSSxDQUFDQyxjQUFjLEdBQUcsRUFBRTtNQUN4QixJQUFJLENBQUMzWSxVQUFVLENBQUM2RSx3QkFBd0IsQ0FBQyxDQUFDO01BQzFDLElBQUksQ0FBQ2dVLGdCQUFnQixHQUFHLEtBQUs7TUFDN0IsSUFBSSxDQUFDSCxjQUFjLENBQUNvQixPQUFPLENBQUN4akIsSUFBSTtRQUFBLElBQUErbEIsS0FBQSxHQUFBcmlCLGlCQUFBLGVBQUEvRyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFDLFNBQUFpa0IsU0FBTzVLLFFBQVE7VUFBQSxJQUFBNkssZUFBQSxFQUFBOVosSUFBQSxFQUFBK1osR0FBQSxFQUFBQyxjQUFBLEVBQUE5ZixLQUFBLEVBQUErZixPQUFBLEVBQUFDLFFBQUE7VUFBQSxPQUFBMXBCLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFvb0IsVUFBQUMsU0FBQTtZQUFBLGtCQUFBQSxTQUFBLENBQUEvakIsSUFBQSxHQUFBK2pCLFNBQUEsQ0FBQTFsQixJQUFBO2NBQUE7Z0JBQzVDeWtCLE1BQUksQ0FBQ2xELGNBQWMsR0FBRyxJQUFJO2dCQUNwQjZELGVBQWUsR0FBRyxJQUFJOUssZUFBZSxDQUFDQyxRQUFRLENBQUM7Z0JBQUFtTCxTQUFBLENBQUExbEIsSUFBQTtnQkFBQSxPQUNsQ29sQixlQUFlLENBQUMxSyxPQUFPLENBQUMsQ0FBQztjQUFBO2dCQUF0Q3BQLElBQUksR0FBQW9hLFNBQUEsQ0FBQWhtQixJQUFBO2dCQUNWLEtBQUEybEIsR0FBQSxNQUFBQyxjQUFBLEdBQW9CcHBCLE1BQU0sQ0FBQ3VDLE1BQU0sQ0FBQ2dtQixNQUFJLENBQUNoRCxZQUFZLENBQUMsRUFBQTRELEdBQUEsR0FBQUMsY0FBQSxDQUFBemtCLE1BQUEsRUFBQXdrQixHQUFBLElBQUU7a0JBQTNDN2YsS0FBSyxHQUFBOGYsY0FBQSxDQUFBRCxHQUFBO2tCQUNaN2YsS0FBSyxDQUFDaEosS0FBSyxHQUFHLEVBQUU7Z0JBQ3BCO2dCQUNNK29CLE9BQU8sR0FBR0gsZUFBZSxDQUFDN0ssUUFBUSxDQUFDZ0wsT0FBTztnQkFBQSxNQUM1Q0EsT0FBTyxDQUFDcmMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLHFDQUFxQyxJQUFJLENBQUNxYyxPQUFPLENBQUNyYyxHQUFHLENBQUMsaUJBQWlCLENBQUM7a0JBQUF3YyxTQUFBLENBQUExbEIsSUFBQTtrQkFBQTtnQkFBQTtnQkFDbEd3bEIsUUFBUSxHQUFHO2tCQUFFRyxZQUFZLEVBQUU7Z0JBQUssQ0FBQztnQkFDdkNsQixNQUFJLENBQUM1YixVQUFVLENBQUMrRSwyQkFBMkIsQ0FBQyxDQUFDO2dCQUM3QzZXLE1BQUksQ0FBQzFLLEtBQUssQ0FBQ0ksV0FBVyxDQUFDLGdCQUFnQixFQUFFaUwsZUFBZSxFQUFFSSxRQUFRLENBQUM7Z0JBQ25FLElBQUlBLFFBQVEsQ0FBQ0csWUFBWSxFQUFFO2tCQUN2QmxCLE1BQUksQ0FBQ21CLFdBQVcsQ0FBQ3RhLElBQUksQ0FBQztnQkFDMUI7Z0JBQ0FvWixrQkFBa0IsQ0FBQ1UsZUFBZSxDQUFDO2dCQUFDLE9BQUFNLFNBQUEsQ0FBQTdsQixNQUFBLFdBQzdCMGEsUUFBUTtjQUFBO2dCQUVuQmtLLE1BQUksQ0FBQ29CLGVBQWUsQ0FBQ3ZhLElBQUksRUFBRThaLGVBQWUsQ0FBQztnQkFDM0NWLGtCQUFrQixDQUFDVSxlQUFlLENBQUM7Z0JBQ25DLElBQUlYLE1BQUksQ0FBQy9DLGdCQUFnQixFQUFFO2tCQUN2QitDLE1BQUksQ0FBQy9DLGdCQUFnQixHQUFHLEtBQUs7a0JBQzdCK0MsTUFBSSxDQUFDRCxjQUFjLENBQUMsQ0FBQztnQkFDekI7Z0JBQUMsT0FBQWtCLFNBQUEsQ0FBQTdsQixNQUFBLFdBQ00wYSxRQUFRO2NBQUE7Y0FBQTtnQkFBQSxPQUFBbUwsU0FBQSxDQUFBNWpCLElBQUE7WUFBQTtVQUFBLEdBQUFxakIsUUFBQTtRQUFBLENBQ2xCO1FBQUEsaUJBQUFXLEVBQUE7VUFBQSxPQUFBWixLQUFBLENBQUFoaUIsS0FBQSxPQUFBRCxTQUFBO1FBQUE7TUFBQSxJQUFDO0lBQ047RUFBQztJQUFBUCxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXFwQixnQkFBZ0J2YSxJQUFJLEVBQUU4WixlQUFlLEVBQUU7TUFBQSxJQUFBVyxPQUFBO01BQ25DLElBQU1QLFFBQVEsR0FBRztRQUFFbkIsWUFBWSxFQUFFO01BQUssQ0FBQztNQUN2QyxJQUFJLENBQUN0SyxLQUFLLENBQUNJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTdPLElBQUksRUFBRThaLGVBQWUsRUFBRUksUUFBUSxDQUFDO01BQ3pFLElBQUksQ0FBQ0EsUUFBUSxDQUFDbkIsWUFBWSxFQUFFO1FBQ3hCO01BQ0o7TUFDQSxJQUFJZSxlQUFlLENBQUM3SyxRQUFRLENBQUNnTCxPQUFPLENBQUNyYyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDbEQsSUFBSSxJQUFJLENBQUNvYixjQUFjLENBQUMsQ0FBQyxFQUFFO1VBQ3ZCQyxLQUFLLENBQUN5QixLQUFLLENBQUNaLGVBQWUsQ0FBQzdLLFFBQVEsQ0FBQ2dMLE9BQU8sQ0FBQ3JjLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxDQUFDLE1BQ0k7VUFDRG1PLE1BQU0sQ0FBQzRPLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHZCxlQUFlLENBQUM3SyxRQUFRLENBQUNnTCxPQUFPLENBQUNyYyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtRQUNqRjtRQUNBO01BQ0o7TUFDQSxJQUFJLENBQUM2USxLQUFLLENBQUNJLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUN2UixPQUFPLENBQUM7TUFDOUQsSUFBTXVkLG1CQUFtQixHQUFHLENBQUMsQ0FBQztNQUM5QmpxQixNQUFNLENBQUNzRixJQUFJLENBQUMsSUFBSSxDQUFDcUgsVUFBVSxDQUFDMkUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDNU8sT0FBTyxDQUFDLFVBQUNxYSxTQUFTLEVBQUs7UUFDaEVrTixtQkFBbUIsQ0FBQ2xOLFNBQVMsQ0FBQyxHQUFHOE0sT0FBSSxDQUFDbGQsVUFBVSxDQUFDSyxHQUFHLENBQUMrUCxTQUFTLENBQUM7TUFDbkUsQ0FBQyxDQUFDO01BQ0YsSUFBSS9OLFVBQVU7TUFDZCxJQUFJO1FBQ0FBLFVBQVUsR0FBR0csYUFBYSxDQUFDQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDSixVQUFVLENBQUNrYixPQUFPLENBQUMseUJBQXlCLENBQUMsRUFBRTtVQUNoRCxNQUFNLElBQUkvbUIsS0FBSyxDQUFDLDBFQUEwRSxDQUFDO1FBQy9GO01BQ0osQ0FBQyxDQUNELE9BQU91RCxLQUFLLEVBQUU7UUFDVnlqQixPQUFPLENBQUN6akIsS0FBSyxDQUFDLHVEQUF1RCxDQUFDO1FBQ3RFLE1BQU1BLEtBQUs7TUFDZjtNQUNBLElBQU0wakIsUUFBUSxHQUFHLElBQUksQ0FBQ2xGLGFBQWEsQ0FBQzBDLGlCQUFpQixDQUFDNVksVUFBVSxDQUFDO01BQ2pFLElBQUksQ0FBQ3JDLFVBQVUsQ0FBQzhFLG9CQUFvQixDQUFDMlksUUFBUSxDQUFDO01BQzlDLElBQU1DLFlBQVksR0FBRyxJQUFJLENBQUNuRixhQUFhLENBQUNvRixlQUFlLENBQUN0YixVQUFVLENBQUM7TUFDbkUsSUFBTXViLHVCQUF1QixHQUFHLElBQUksQ0FBQ3JGLGFBQWEsQ0FBQ3NGLDBCQUEwQixDQUFDeGIsVUFBVSxDQUFDO01BQ3pGLElBQUksQ0FBQzRMLHVCQUF1QixDQUFDMEgsb0JBQW9CLENBQUMsQ0FBQztNQUNuRCxJQUFJLENBQUMxSCx1QkFBdUIsQ0FBQ2hWLElBQUksQ0FBQyxDQUFDO01BQ25Dd1UsZUFBZSxDQUFDLElBQUksQ0FBQzFOLE9BQU8sRUFBRXNDLFVBQVUsRUFBRSxJQUFJLENBQUM0VyxxQkFBcUIsQ0FBQ3pJLGlCQUFpQixDQUFDLENBQUMsRUFBRSxVQUFDelEsT0FBTztRQUFBLE9BQUtELG1CQUFtQixDQUFDQyxPQUFPLEVBQUVtZCxPQUFJLENBQUNsZCxVQUFVLENBQUM7TUFBQSxHQUFFcEUsS0FBSyxDQUFDNEIsSUFBSSxDQUFDLElBQUksQ0FBQzBFLFdBQVcsQ0FBQyxDQUFDLENBQUN0TSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDMmlCLGFBQWEsQ0FBQ3VGLHlCQUF5QixFQUFFLElBQUksQ0FBQ3ZGLGFBQWEsQ0FBQ3ZLLGlCQUFpQixFQUFFLElBQUksQ0FBQ0MsdUJBQXVCLENBQUM7TUFDaFQsSUFBSSxDQUFDQSx1QkFBdUIsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDO01BQ3BDL2hCLE1BQU0sQ0FBQ3NGLElBQUksQ0FBQzJrQixtQkFBbUIsQ0FBQyxDQUFDdm5CLE9BQU8sQ0FBQyxVQUFDcWEsU0FBUyxFQUFLO1FBQ3BEOE0sT0FBSSxDQUFDbGQsVUFBVSxDQUFDdUUsR0FBRyxDQUFDNkwsU0FBUyxFQUFFa04sbUJBQW1CLENBQUNsTixTQUFTLENBQUMsQ0FBQztNQUNsRSxDQUFDLENBQUM7TUFDRnNOLFlBQVksQ0FBQzNuQixPQUFPLENBQUMsVUFBQWdvQixLQUFBLEVBQTRDO1FBQUEsSUFBekN6TyxLQUFLLEdBQUF5TyxLQUFBLENBQUx6TyxLQUFLO1VBQUUvTCxJQUFJLEdBQUF3YSxLQUFBLENBQUp4YSxJQUFJO1VBQUVySCxNQUFNLEdBQUE2aEIsS0FBQSxDQUFON2hCLE1BQU07VUFBRThoQixhQUFhLEdBQUFELEtBQUEsQ0FBYkMsYUFBYTtRQUN0RCxJQUFJOWhCLE1BQU0sS0FBSyxJQUFJLEVBQUU7VUFDakJnaEIsT0FBSSxDQUFDeEMsTUFBTSxDQUFDcEwsS0FBSyxFQUFFL0wsSUFBSSxFQUFFeWEsYUFBYSxDQUFDO1VBQ3ZDO1FBQ0o7UUFDQSxJQUFJOWhCLE1BQU0sS0FBSyxNQUFNLEVBQUU7VUFDbkJnaEIsT0FBSSxDQUFDdkMsUUFBUSxDQUFDckwsS0FBSyxFQUFFL0wsSUFBSSxDQUFDO1VBQzFCO1FBQ0o7UUFDQTJaLE9BQUksQ0FBQzNDLElBQUksQ0FBQ2pMLEtBQUssRUFBRS9MLElBQUksRUFBRXlhLGFBQWEsQ0FBQztNQUN6QyxDQUFDLENBQUM7TUFDRkosdUJBQXVCLENBQUM3bkIsT0FBTyxDQUFDLFVBQUFrb0IsS0FBQSxFQUF3QjtRQUFBLElBQXJCM08sS0FBSyxHQUFBMk8sS0FBQSxDQUFMM08sS0FBSztVQUFFNE8sT0FBTyxHQUFBRCxLQUFBLENBQVBDLE9BQU87UUFDN0NoQixPQUFJLENBQUNuZCxPQUFPLENBQUNvZSxhQUFhLENBQUMsSUFBSUMsV0FBVyxDQUFDOU8sS0FBSyxFQUFFO1VBQzlDK08sTUFBTSxFQUFFSCxPQUFPO1VBQ2ZJLE9BQU8sRUFBRTtRQUNiLENBQUMsQ0FBQyxDQUFDO01BQ1AsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDcE4sS0FBSyxDQUFDSSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO0lBQ25EO0VBQUM7SUFBQXpYLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBNHFCLGtCQUFrQjFFLFFBQVEsRUFBRTtNQUN4QixJQUFJQSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSSxDQUFDcEIsZUFBZTtNQUMvQjtNQUNBLElBQUlvQixRQUFRLEtBQUssS0FBSyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQztNQUNaO01BQ0EsT0FBT0EsUUFBUTtJQUNuQjtFQUFDO0lBQUFoZ0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE4bEIsNEJBQUEsRUFBOEI7TUFDMUIsSUFBSSxJQUFJLENBQUNYLHNCQUFzQixFQUFFO1FBQzdCMEYsWUFBWSxDQUFDLElBQUksQ0FBQzFGLHNCQUFzQixDQUFDO1FBQ3pDLElBQUksQ0FBQ0Esc0JBQXNCLEdBQUcsSUFBSTtNQUN0QztJQUNKO0VBQUM7SUFBQWpmLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBc21CLHNCQUFzQkosUUFBUSxFQUFFO01BQUEsSUFBQTRFLE9BQUE7TUFDNUIsSUFBSSxDQUFDaEYsMkJBQTJCLENBQUMsQ0FBQztNQUNsQyxJQUFJLENBQUNYLHNCQUFzQixHQUFHdEssTUFBTSxDQUFDa1EsVUFBVSxDQUFDLFlBQU07UUFDbERELE9BQUksQ0FBQ3JFLE1BQU0sQ0FBQyxDQUFDO01BQ2pCLENBQUMsRUFBRSxJQUFJLENBQUNtRSxpQkFBaUIsQ0FBQzFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDO0VBQUM7SUFBQWhnQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQW9wQixZQUFZdGEsSUFBSSxFQUFFO01BQ2QsSUFBSWtjLEtBQUssR0FBR2hrQixRQUFRLENBQUNpa0IsY0FBYyxDQUFDLHNCQUFzQixDQUFDO01BQzNELElBQUlELEtBQUssRUFBRTtRQUNQQSxLQUFLLENBQUMvYixTQUFTLEdBQUcsRUFBRTtNQUN4QixDQUFDLE1BQ0k7UUFDRCtiLEtBQUssR0FBR2hrQixRQUFRLENBQUNnSSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3JDZ2MsS0FBSyxDQUFDelUsRUFBRSxHQUFHLHNCQUFzQjtRQUNqQ3lVLEtBQUssQ0FBQ3RLLEtBQUssQ0FBQ3dLLE9BQU8sR0FBRyxNQUFNO1FBQzVCRixLQUFLLENBQUN0SyxLQUFLLENBQUN5SyxlQUFlLEdBQUcsbUJBQW1CO1FBQ2pESCxLQUFLLENBQUN0SyxLQUFLLENBQUMwSyxNQUFNLEdBQUcsUUFBUTtRQUM3QkosS0FBSyxDQUFDdEssS0FBSyxDQUFDMkssUUFBUSxHQUFHLE9BQU87UUFDOUJMLEtBQUssQ0FBQ3RLLEtBQUssQ0FBQzRLLEdBQUcsR0FBRyxLQUFLO1FBQ3ZCTixLQUFLLENBQUN0SyxLQUFLLENBQUM2SyxNQUFNLEdBQUcsS0FBSztRQUMxQlAsS0FBSyxDQUFDdEssS0FBSyxDQUFDOEssSUFBSSxHQUFHLEtBQUs7UUFDeEJSLEtBQUssQ0FBQ3RLLEtBQUssQ0FBQytLLEtBQUssR0FBRyxLQUFLO1FBQ3pCVCxLQUFLLENBQUN0SyxLQUFLLENBQUNnTCxPQUFPLEdBQUcsTUFBTTtRQUM1QlYsS0FBSyxDQUFDdEssS0FBSyxDQUFDaUwsYUFBYSxHQUFHLFFBQVE7TUFDeEM7TUFDQSxJQUFNQyxNQUFNLEdBQUc1a0IsUUFBUSxDQUFDZ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMvQzRjLE1BQU0sQ0FBQ2xMLEtBQUssQ0FBQ21MLFlBQVksR0FBRyxLQUFLO01BQ2pDRCxNQUFNLENBQUNsTCxLQUFLLENBQUNvTCxRQUFRLEdBQUcsR0FBRztNQUMzQmQsS0FBSyxDQUFDL1YsV0FBVyxDQUFDMlcsTUFBTSxDQUFDO01BQ3pCNWtCLFFBQVEsQ0FBQzRNLElBQUksQ0FBQ21ZLE9BQU8sQ0FBQ2YsS0FBSyxDQUFDO01BQzVCaGtCLFFBQVEsQ0FBQzRNLElBQUksQ0FBQzhNLEtBQUssQ0FBQ3NMLFFBQVEsR0FBRyxRQUFRO01BQ3ZDLElBQUlKLE1BQU0sQ0FBQ0ssYUFBYSxFQUFFO1FBQ3RCTCxNQUFNLENBQUNLLGFBQWEsQ0FBQ2psQixRQUFRLENBQUNrbEIsSUFBSSxDQUFDLENBQUM7UUFDcENOLE1BQU0sQ0FBQ0ssYUFBYSxDQUFDamxCLFFBQVEsQ0FBQ21sQixLQUFLLENBQUNyZCxJQUFJLENBQUM7UUFDekM4YyxNQUFNLENBQUNLLGFBQWEsQ0FBQ2psQixRQUFRLENBQUNvbEIsS0FBSyxDQUFDLENBQUM7TUFDekM7TUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSXJCLEtBQUssRUFBSztRQUMxQixJQUFJQSxLQUFLLEVBQUU7VUFDUEEsS0FBSyxDQUFDM2IsU0FBUyxHQUFHLEVBQUU7UUFDeEI7UUFDQXJJLFFBQVEsQ0FBQzRNLElBQUksQ0FBQzhNLEtBQUssQ0FBQ3NMLFFBQVEsR0FBRyxTQUFTO01BQzVDLENBQUM7TUFDRGhCLEtBQUssQ0FBQzdPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU1rUSxVQUFVLENBQUNyQixLQUFLLENBQUM7TUFBQSxFQUFDO01BQ3hEQSxLQUFLLENBQUNwWSxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztNQUNuQ29ZLEtBQUssQ0FBQzdPLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFBNWMsQ0FBQyxFQUFJO1FBQ25DLElBQUlBLENBQUMsQ0FBQzJHLEdBQUcsS0FBSyxRQUFRLEVBQUU7VUFDcEJtbUIsVUFBVSxDQUFDckIsS0FBSyxDQUFDO1FBQ3JCO01BQ0osQ0FBQyxDQUFDO01BQ0ZBLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQyxDQUFDO0lBQ2pCO0VBQUM7SUFBQXBtQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXlvQix3QkFBQSxFQUEwQjtNQUN0QixJQUFNOEQsWUFBWSxHQUFHLENBQUMsQ0FBQztNQUN2QixJQUFJLENBQUMxUyxRQUFRLENBQUN6WCxPQUFPLENBQUMsVUFBQ29NLGNBQWMsRUFBSztRQUN0QyxJQUFNVyxLQUFLLEdBQUdYLGNBQWMsQ0FBQ0osU0FBUztRQUN0QyxJQUFJLENBQUNlLEtBQUssQ0FBQ29ILEVBQUUsRUFBRTtVQUNYLE1BQU0sSUFBSTFULEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDakM7UUFDQTBwQixZQUFZLENBQUNwZCxLQUFLLENBQUNvSCxFQUFFLENBQUMsR0FBRztVQUNyQm1PLFdBQVcsRUFBRXZWLEtBQUssQ0FBQ3VWLFdBQVc7VUFDOUI4SCxHQUFHLEVBQUVyZCxLQUFLLENBQUMvQyxPQUFPLENBQUNnWSxPQUFPLENBQUNxSSxXQUFXLENBQUM7UUFDM0MsQ0FBQztNQUNMLENBQUMsQ0FBQztNQUNGLE9BQU9GLFlBQVk7SUFDdkI7RUFBQztJQUFBcm1CLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBdWxCLGFBQUEsRUFBZTtNQUFBLElBQUFtSCxPQUFBO01BQ1gsSUFBSSxDQUFDdEcsa0JBQWtCLEdBQUcsSUFBSXJoQixPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBSztRQUMvQ2lxQixPQUFJLENBQUN2RSx5QkFBeUIsR0FBRzFsQixPQUFPO01BQzVDLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBOGhCLFNBQUE7QUFBQTtBQUVMLFNBQVNvSSxnQkFBZ0JBLENBQUN2ZSxTQUFTLEVBQUU7RUFDakMsT0FBTyxJQUFJd2UsS0FBSyxDQUFDeGUsU0FBUyxFQUFFO0lBQ3hCMUIsR0FBRyxXQUFBQSxJQUFDMEIsU0FBUyxFQUFFeWUsSUFBSSxFQUFFO01BQ2pCLElBQUlBLElBQUksSUFBSXplLFNBQVMsSUFBSSxPQUFPeWUsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMvQyxJQUFJLE9BQU96ZSxTQUFTLENBQUN5ZSxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7VUFDdkMsSUFBTUMsUUFBUSxHQUFHMWUsU0FBUyxDQUFDeWUsSUFBSSxDQUFDO1VBQ2hDLE9BQU8sWUFBYTtZQUFBLFNBQUFFLEtBQUEsR0FBQXRtQixTQUFBLENBQUFwQyxNQUFBLEVBQVRtQyxJQUFJLE9BQUF5QixLQUFBLENBQUE4a0IsS0FBQSxHQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO2NBQUp4bUIsSUFBSSxDQUFBd21CLEtBQUEsSUFBQXZtQixTQUFBLENBQUF1bUIsS0FBQTtZQUFBO1lBQ1gsT0FBT0YsUUFBUSxDQUFDcG1CLEtBQUssQ0FBQzBILFNBQVMsRUFBRTVILElBQUksQ0FBQztVQUMxQyxDQUFDO1FBQ0w7UUFDQSxPQUFPeW1CLE9BQU8sQ0FBQ3ZnQixHQUFHLENBQUMwQixTQUFTLEVBQUV5ZSxJQUFJLENBQUM7TUFDdkM7TUFDQSxJQUFJemUsU0FBUyxDQUFDL0IsVUFBVSxDQUFDc0UsR0FBRyxDQUFDa2MsSUFBSSxDQUFDLEVBQUU7UUFDaEMsT0FBT3plLFNBQVMsQ0FBQ21ZLE9BQU8sQ0FBQ3NHLElBQUksQ0FBQztNQUNsQztNQUNBLE9BQU8sVUFBQ3JtQixJQUFJLEVBQUs7UUFDYixPQUFPNEgsU0FBUyxDQUFDdEQsTUFBTSxDQUFDcEUsS0FBSyxDQUFDMEgsU0FBUyxFQUFFLENBQUN5ZSxJQUFJLEVBQUVybUIsSUFBSSxDQUFDLENBQUM7TUFDMUQsQ0FBQztJQUNMLENBQUM7SUFDRG9LLEdBQUcsV0FBQUEsSUFBQ3JJLE1BQU0sRUFBRTRiLFFBQVEsRUFBRW5rQixLQUFLLEVBQUU7TUFDekIsSUFBSW1rQixRQUFRLElBQUk1YixNQUFNLEVBQUU7UUFDcEJBLE1BQU0sQ0FBQzRiLFFBQVEsQ0FBQyxHQUFHbmtCLEtBQUs7UUFDeEIsT0FBTyxJQUFJO01BQ2Y7TUFDQXVJLE1BQU0sQ0FBQ3FJLEdBQUcsQ0FBQ3VULFFBQVEsRUFBRW5rQixLQUFLLENBQUM7TUFDM0IsT0FBTyxJQUFJO0lBQ2Y7RUFDSixDQUFDLENBQUM7QUFDTjtBQUFDLElBRUtrdEIsY0FBYztFQUNoQixTQUFBQSxlQUFZL0csT0FBTyxFQUFFa0IsT0FBTyxFQUFFOEYsWUFBWSxFQUFFO0lBQUEsSUFBQUMsT0FBQTtJQUFBamxCLGVBQUEsT0FBQStrQixjQUFBO0lBQ3hDLElBQUksQ0FBQ0csVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDbEgsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0EsT0FBTyxDQUFDeGpCLElBQUksQ0FBQyxVQUFDb2IsUUFBUSxFQUFLO01BQzVCcVAsT0FBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSTtNQUN0QixPQUFPdFAsUUFBUTtJQUNuQixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNzSixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDaUcsYUFBYSxHQUFHSCxZQUFZO0VBQ3JDO0VBQUN4a0IsWUFBQSxDQUFBdWtCLGNBQUE7SUFBQWhuQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXV0QixxQkFBcUJDLGVBQWUsRUFBRTtNQUNsQyxPQUFPLElBQUksQ0FBQ25HLE9BQU8sQ0FBQzVILE1BQU0sQ0FBQyxVQUFDM1UsTUFBTTtRQUFBLE9BQUswaUIsZUFBZSxDQUFDN2YsUUFBUSxDQUFDN0MsTUFBTSxDQUFDO01BQUEsRUFBQyxDQUFDekcsTUFBTSxHQUFHLENBQUM7SUFDdkY7RUFBQztJQUFBNkIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF5dEIsb0JBQW9CQyxjQUFjLEVBQUU7TUFDaEMsT0FBTyxJQUFJLENBQUNKLGFBQWEsQ0FBQzdOLE1BQU0sQ0FBQyxVQUFDMVQsS0FBSztRQUFBLE9BQUsyaEIsY0FBYyxDQUFDL2YsUUFBUSxDQUFDNUIsS0FBSyxDQUFDO01BQUEsRUFBQyxDQUFDMUgsTUFBTSxHQUFHLENBQUM7SUFDMUY7RUFBQztFQUFBLE9BQUE2b0IsY0FBQTtBQUFBO0FBQUEsSUFHQ1MsY0FBYztFQUNoQixTQUFBQSxlQUFZQyxHQUFHLEVBQW9CO0lBQUEsSUFBbEJDLFNBQVMsR0FBQXBuQixTQUFBLENBQUFwQyxNQUFBLFFBQUFvQyxTQUFBLFFBQUFHLFNBQUEsR0FBQUgsU0FBQSxNQUFHLElBQUk7SUFBQTBCLGVBQUEsT0FBQXdsQixjQUFBO0lBQzdCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7RUFDOUI7RUFBQ2xsQixZQUFBLENBQUFnbEIsY0FBQTtJQUFBem5CLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBOHRCLGFBQWF0bEIsS0FBSyxFQUFFNmUsT0FBTyxFQUFFMEcsT0FBTyxFQUFFbFUsUUFBUSxFQUFFcEosc0JBQXNCLEVBQUUrVixLQUFLLEVBQUU7TUFDM0UsSUFBTXdILFFBQVEsR0FBRyxJQUFJLENBQUNKLEdBQUcsQ0FBQy9oQixLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3BDLElBQUFvaUIsU0FBQSxHQUFBdG1CLGNBQUEsQ0FBWXFtQixRQUFRO1FBQWZKLEdBQUcsR0FBQUssU0FBQTtNQUNSLElBQUFDLFVBQUEsR0FBQXZtQixjQUFBLENBQXdCcW1CLFFBQVE7UUFBdkJHLFdBQVcsR0FBQUQsVUFBQTtNQUNwQixJQUFNRSxNQUFNLEdBQUcsSUFBSUMsZUFBZSxDQUFDRixXQUFXLElBQUksRUFBRSxDQUFDO01BQ3JELElBQU1HLFlBQVksR0FBRyxDQUFDLENBQUM7TUFDdkJBLFlBQVksQ0FBQ3ZGLE9BQU8sR0FBRztRQUNuQndGLE1BQU0sRUFBRSxxQ0FBcUM7UUFDN0Msa0JBQWtCLEVBQUU7TUFDeEIsQ0FBQztNQUNELElBQU1DLFVBQVUsR0FBRzl1QixNQUFNLENBQUMrUixPQUFPLENBQUMrVSxLQUFLLENBQUMsQ0FBQ2lJLE1BQU0sQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLE9BQU87UUFBQSxPQUFLRCxLQUFLLEdBQUdDLE9BQU8sQ0FBQ3RxQixNQUFNO01BQUEsR0FBRSxDQUFDLENBQUM7TUFDOUYsSUFBTXVxQixlQUFlLEdBQUdsdkIsTUFBTSxDQUFDc0YsSUFBSSxDQUFDNlUsUUFBUSxDQUFDLENBQUN4VixNQUFNLEdBQUcsQ0FBQztNQUN4RCxJQUFJZ2pCLE9BQU8sQ0FBQ2hqQixNQUFNLEtBQUssQ0FBQyxJQUNwQm1xQixVQUFVLEtBQUssQ0FBQyxJQUNoQixJQUFJLENBQUNLLGdCQUFnQixDQUFDMWUsSUFBSSxDQUFDRSxTQUFTLENBQUM3SCxLQUFLLENBQUMsRUFBRTJILElBQUksQ0FBQ0UsU0FBUyxDQUFDMGQsT0FBTyxDQUFDLEVBQUVLLE1BQU0sRUFBRWplLElBQUksQ0FBQ0UsU0FBUyxDQUFDd0osUUFBUSxDQUFDLEVBQUUxSixJQUFJLENBQUNFLFNBQVMsQ0FBQ0ksc0JBQXNCLENBQUMsQ0FBQyxFQUFFO1FBQ2pKMmQsTUFBTSxDQUFDeGQsR0FBRyxDQUFDLE9BQU8sRUFBRVQsSUFBSSxDQUFDRSxTQUFTLENBQUM3SCxLQUFLLENBQUMsQ0FBQztRQUMxQzRsQixNQUFNLENBQUN4ZCxHQUFHLENBQUMsU0FBUyxFQUFFVCxJQUFJLENBQUNFLFNBQVMsQ0FBQzBkLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUlydUIsTUFBTSxDQUFDc0YsSUFBSSxDQUFDeUwsc0JBQXNCLENBQUMsQ0FBQ3BNLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDaEQrcEIsTUFBTSxDQUFDeGQsR0FBRyxDQUFDLGlCQUFpQixFQUFFVCxJQUFJLENBQUNFLFNBQVMsQ0FBQ0ksc0JBQXNCLENBQUMsQ0FBQztRQUN6RTtRQUNBLElBQUltZSxlQUFlLEVBQUU7VUFDakJSLE1BQU0sQ0FBQ3hkLEdBQUcsQ0FBQyxVQUFVLEVBQUVULElBQUksQ0FBQ0UsU0FBUyxDQUFDd0osUUFBUSxDQUFDLENBQUM7UUFDcEQ7UUFDQXlVLFlBQVksQ0FBQ3ZyQixNQUFNLEdBQUcsS0FBSztNQUMvQixDQUFDLE1BQ0k7UUFDRHVyQixZQUFZLENBQUN2ckIsTUFBTSxHQUFHLE1BQU07UUFDNUIsSUFBTStyQixXQUFXLEdBQUc7VUFBRXRtQixLQUFLLEVBQUxBLEtBQUs7VUFBRXVsQixPQUFPLEVBQVBBO1FBQVEsQ0FBQztRQUN0QyxJQUFJcnVCLE1BQU0sQ0FBQ3NGLElBQUksQ0FBQ3lMLHNCQUFzQixDQUFDLENBQUNwTSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2hEeXFCLFdBQVcsQ0FBQ0MsZUFBZSxHQUFHdGUsc0JBQXNCO1FBQ3hEO1FBQ0EsSUFBSW1lLGVBQWUsRUFBRTtVQUNqQkUsV0FBVyxDQUFDalYsUUFBUSxHQUFHQSxRQUFRO1FBQ25DO1FBQ0EsSUFBSSxJQUFJLENBQUNnVSxTQUFTLEtBQ2J4RyxPQUFPLENBQUNoakIsTUFBTSxJQUFJbXFCLFVBQVUsQ0FBQyxFQUFFO1VBQ2hDRixZQUFZLENBQUN2RixPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDOEUsU0FBUztRQUN6RDtRQUNBLElBQUl4RyxPQUFPLENBQUNoakIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNwQixJQUFJZ2pCLE9BQU8sQ0FBQ2hqQixNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCeXFCLFdBQVcsQ0FBQ3RvQixJQUFJLEdBQUc2Z0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDN2dCLElBQUk7WUFDbENvbkIsR0FBRyxRQUFBdmlCLE1BQUEsQ0FBUTJqQixrQkFBa0IsQ0FBQzNILE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzVpQixJQUFJLENBQUMsQ0FBRTtVQUNwRCxDQUFDLE1BQ0k7WUFDRG1wQixHQUFHLElBQUksU0FBUztZQUNoQmtCLFdBQVcsQ0FBQ3pILE9BQU8sR0FBR0EsT0FBTztVQUNqQztRQUNKO1FBQ0EsSUFBTTRILFFBQVEsR0FBRyxJQUFJQyxRQUFRLENBQUMsQ0FBQztRQUMvQkQsUUFBUSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFaGYsSUFBSSxDQUFDRSxTQUFTLENBQUN5ZSxXQUFXLENBQUMsQ0FBQztRQUNwRCxTQUFBTSxHQUFBLE1BQUFDLGdCQUFBLEdBQTJCM3ZCLE1BQU0sQ0FBQytSLE9BQU8sQ0FBQytVLEtBQUssQ0FBQyxFQUFBNEksR0FBQSxHQUFBQyxnQkFBQSxDQUFBaHJCLE1BQUEsRUFBQStxQixHQUFBLElBQUU7VUFBN0MsSUFBQUUsbUJBQUEsR0FBQTNuQixjQUFBLENBQUEwbkIsZ0JBQUEsQ0FBQUQsR0FBQTtZQUFPbHBCLEdBQUcsR0FBQW9wQixtQkFBQTtZQUFFdHZCLEtBQUssR0FBQXN2QixtQkFBQTtVQUNsQixJQUFNanJCLE1BQU0sR0FBR3JFLEtBQUssQ0FBQ3FFLE1BQU07VUFDM0IsS0FBSyxJQUFJcEUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb0UsTUFBTSxFQUFFLEVBQUVwRSxDQUFDLEVBQUU7WUFDN0JndkIsUUFBUSxDQUFDRSxNQUFNLENBQUNqcEIsR0FBRyxFQUFFbEcsS0FBSyxDQUFDQyxDQUFDLENBQUMsQ0FBQztVQUNsQztRQUNKO1FBQ0FxdUIsWUFBWSxDQUFDMWEsSUFBSSxHQUFHcWIsUUFBUTtNQUNoQztNQUNBLElBQU1NLFlBQVksR0FBR25CLE1BQU0sQ0FBQ3hrQixRQUFRLENBQUMsQ0FBQztNQUN0QyxPQUFPO1FBQ0hna0IsR0FBRyxLQUFBdmlCLE1BQUEsQ0FBS3VpQixHQUFHLEVBQUF2aUIsTUFBQSxDQUFHa2tCLFlBQVksQ0FBQ2xyQixNQUFNLEdBQUcsQ0FBQyxPQUFBZ0gsTUFBQSxDQUFPa2tCLFlBQVksSUFBSyxFQUFFLENBQUU7UUFDakVqQixZQUFZLEVBQVpBO01BQ0osQ0FBQztJQUNMO0VBQUM7SUFBQXBvQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTZ1QixpQkFBaUJXLFNBQVMsRUFBRUMsV0FBVyxFQUFFckIsTUFBTSxFQUFFc0IsWUFBWSxFQUFFQyxtQkFBbUIsRUFBRTtNQUNoRixJQUFNQyxrQkFBa0IsR0FBRyxJQUFJdkIsZUFBZSxDQUFDbUIsU0FBUyxHQUFHQyxXQUFXLEdBQUdDLFlBQVksR0FBR0MsbUJBQW1CLENBQUMsQ0FBQy9sQixRQUFRLENBQUMsQ0FBQztNQUN2SCxPQUFPLENBQUNnbUIsa0JBQWtCLEdBQUd4QixNQUFNLENBQUN4a0IsUUFBUSxDQUFDLENBQUMsRUFBRXZGLE1BQU0sR0FBRyxJQUFJO0lBQ2pFO0VBQUM7RUFBQSxPQUFBc3BCLGNBQUE7QUFBQTtBQUFBLElBR0NrQyxPQUFPO0VBQ1QsU0FBQUEsUUFBWWpDLEdBQUcsRUFBb0I7SUFBQSxJQUFsQkMsU0FBUyxHQUFBcG5CLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsSUFBSTtJQUFBMEIsZUFBQSxPQUFBMG5CLE9BQUE7SUFDN0IsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSW5DLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFQyxTQUFTLENBQUM7RUFDNUQ7RUFBQ2xsQixZQUFBLENBQUFrbkIsT0FBQTtJQUFBM3BCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd29CLFlBQVloZ0IsS0FBSyxFQUFFNmUsT0FBTyxFQUFFMEcsT0FBTyxFQUFFbFUsUUFBUSxFQUFFcEosc0JBQXNCLEVBQUUrVixLQUFLLEVBQUU7TUFDMUUsSUFBQXVKLHFCQUFBLEdBQThCLElBQUksQ0FBQ0QsY0FBYyxDQUFDaEMsWUFBWSxDQUFDdGxCLEtBQUssRUFBRTZlLE9BQU8sRUFBRTBHLE9BQU8sRUFBRWxVLFFBQVEsRUFBRXBKLHNCQUFzQixFQUFFK1YsS0FBSyxDQUFDO1FBQXhIb0gsR0FBRyxHQUFBbUMscUJBQUEsQ0FBSG5DLEdBQUc7UUFBRVUsWUFBWSxHQUFBeUIscUJBQUEsQ0FBWnpCLFlBQVk7TUFDekIsT0FBTyxJQUFJcEIsY0FBYyxDQUFDOEMsS0FBSyxDQUFDcEMsR0FBRyxFQUFFVSxZQUFZLENBQUMsRUFBRWpILE9BQU8sQ0FBQ3BiLEdBQUcsQ0FBQyxVQUFDZ2tCLGFBQWE7UUFBQSxPQUFLQSxhQUFhLENBQUN4ckIsSUFBSTtNQUFBLEVBQUMsRUFBRS9FLE1BQU0sQ0FBQ3NGLElBQUksQ0FBQytvQixPQUFPLENBQUMsQ0FBQztJQUNqSTtFQUFDO0VBQUEsT0FBQThCLE9BQUE7QUFBQTtBQUFBLElBR0NLLHFCQUFxQjtFQUFBLFNBQUFBLHNCQUFBO0lBQUEvbkIsZUFBQSxPQUFBK25CLHFCQUFBO0VBQUE7RUFBQXZuQixZQUFBLENBQUF1bkIscUJBQUE7SUFBQWhxQixHQUFBO0lBQUFsRyxLQUFBLEVBQ3ZCLFNBQUEyYyxhQUFhdlEsT0FBTyxFQUFFO01BQ2xCLElBQU0rakIsY0FBYyxHQUFHM2pCLDRCQUE0QixDQUFDSixPQUFPLEVBQUUsS0FBSyxDQUFDO01BQ25FLElBQUksQ0FBQytqQixjQUFjLEVBQUU7UUFDakIsT0FBTyxJQUFJO01BQ2Y7TUFDQSxPQUFPQSxjQUFjLENBQUNybEIsTUFBTTtJQUNoQztFQUFDO0lBQUE1RSxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXNuQixrQkFBa0I4SSxXQUFXLEVBQUU7TUFDM0IsSUFBSS9LLEVBQUU7TUFDTixJQUFNbUssU0FBUyxHQUFHLENBQUNuSyxFQUFFLEdBQUcrSyxXQUFXLENBQUNqakIsT0FBTyxDQUFDa2pCLGNBQWMsTUFBTSxJQUFJLElBQUloTCxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUdBLEVBQUUsR0FBRyxJQUFJO01BQ2pHLE9BQU9sVixJQUFJLENBQUNDLEtBQUssQ0FBQ29mLFNBQVMsQ0FBQztJQUNoQztFQUFDO0lBQUF0cEIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFtcUIsMEJBQTBCNVQsRUFBRSxFQUFFbkssT0FBTyxFQUFFO01BQ25DLE9BQU9BLE9BQU8sQ0FBQ25GLGFBQWEsa0JBQUFvRSxNQUFBLENBQWtCa0wsRUFBRSxNQUFHLENBQUM7SUFDeEQ7RUFBQztJQUFBclEsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFxYSxrQkFBa0JqTyxPQUFPLEVBQUU7TUFDdkIsT0FBT0EsT0FBTyxDQUFDZSxPQUFPLENBQUNtakIsTUFBTSxJQUFJLElBQUk7SUFDekM7RUFBQztJQUFBcHFCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZ3FCLGdCQUFnQjVkLE9BQU8sRUFBRTtNQUNyQixJQUFJaVosRUFBRTtNQUNOLElBQU1rTCxVQUFVLEdBQUcsQ0FBQ2xMLEVBQUUsR0FBR2paLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDcWpCLFFBQVEsTUFBTSxJQUFJLElBQUluTCxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUdBLEVBQUUsR0FBRyxJQUFJO01BQ3hGLE9BQU9sVixJQUFJLENBQUNDLEtBQUssQ0FBQ21nQixVQUFVLENBQUM7SUFDakM7RUFBQztJQUFBcnFCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBa3FCLDJCQUEyQjlkLE9BQU8sRUFBRTtNQUNoQyxJQUFJaVosRUFBRTtNQUNOLElBQU1rTCxVQUFVLEdBQUcsQ0FBQ2xMLEVBQUUsR0FBR2paLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDc2pCLG1CQUFtQixNQUFNLElBQUksSUFBSXBMLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBR0EsRUFBRSxHQUFHLElBQUk7TUFDbkcsT0FBT2xWLElBQUksQ0FBQ0MsS0FBSyxDQUFDbWdCLFVBQVUsQ0FBQztJQUNqQztFQUFDO0VBQUEsT0FBQUwscUJBQUE7QUFBQTtBQUFBLElBR0NRLGFBQWE7RUFBQSxTQUFBQSxjQUFBO0lBQUF2b0IsZUFBQSxPQUFBdW9CLGFBQUE7RUFBQTtFQUFBL25CLFlBQUEsQ0FBQStuQixhQUFBO0lBQUF4cUIsR0FBQTtJQUFBbEcsS0FBQSxFQUNmLFNBQUE0bEIsa0JBQWtCeFgsU0FBUyxFQUFFO01BQUEsSUFBQXVpQixPQUFBO01BQ3pCdmlCLFNBQVMsQ0FBQzJYLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFDM1osT0FBTyxFQUFFd2tCLE9BQU8sRUFBSztRQUN4REQsT0FBSSxDQUFDRSxZQUFZLENBQUN6a0IsT0FBTyxFQUFFd2tCLE9BQU8sQ0FBQztNQUN2QyxDQUFDLENBQUM7TUFDRnhpQixTQUFTLENBQUMyWCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBQzNaLE9BQU8sRUFBSztRQUNoRHVrQixPQUFJLENBQUNHLGFBQWEsQ0FBQzFrQixPQUFPLENBQUM7TUFDL0IsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDMGtCLGFBQWEsQ0FBQzFpQixTQUFTLENBQUNoQyxPQUFPLENBQUM7SUFDekM7RUFBQztJQUFBbEcsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2d0IsYUFBYUUsYUFBYSxFQUFFaE0sY0FBYyxFQUFFO01BQ3hDLElBQUksQ0FBQ2lNLG1CQUFtQixDQUFDLElBQUksRUFBRUQsYUFBYSxFQUFFaE0sY0FBYyxDQUFDO0lBQ2pFO0VBQUM7SUFBQTdlLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBOHdCLGNBQWNDLGFBQWEsRUFBRTtNQUN6QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLEtBQUssRUFBRUQsYUFBYSxFQUFFLElBQUksQ0FBQztJQUN4RDtFQUFDO0lBQUE3cUIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFneEIsb0JBQW9CQyxTQUFTLEVBQUVGLGFBQWEsRUFBRWhNLGNBQWMsRUFBRTtNQUFBLElBQUFtTSxPQUFBO01BQzFELElBQUlELFNBQVMsRUFBRTtRQUNYLElBQUksQ0FBQ0UsYUFBYSxDQUFDSixhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUMvQyxDQUFDLE1BQ0k7UUFDRCxJQUFJLENBQUNLLGdCQUFnQixDQUFDTCxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNsRDtNQUNBLElBQUksQ0FBQ00sb0JBQW9CLENBQUNOLGFBQWEsQ0FBQyxDQUFDM3VCLE9BQU8sQ0FBQyxVQUFBa3ZCLEtBQUEsRUFBNkI7UUFBQSxJQUExQmxsQixPQUFPLEdBQUFrbEIsS0FBQSxDQUFQbGxCLE9BQU87VUFBRS9CLFVBQVUsR0FBQWluQixLQUFBLENBQVZqbkIsVUFBVTtRQUNuRSxJQUFJNG1CLFNBQVMsRUFBRTtVQUNYQyxPQUFJLENBQUNDLGFBQWEsQ0FBQy9rQixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pELENBQUMsTUFDSTtVQUNEOGtCLE9BQUksQ0FBQ0UsZ0JBQWdCLENBQUNobEIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RDtRQUNBL0IsVUFBVSxDQUFDakksT0FBTyxDQUFDLFVBQUN5TCxTQUFTLEVBQUs7VUFDOUJxakIsT0FBSSxDQUFDSyxzQkFBc0IsQ0FBQ25sQixPQUFPLEVBQUU2a0IsU0FBUyxFQUFFcGpCLFNBQVMsRUFBRWtYLGNBQWMsQ0FBQztRQUM5RSxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE3ZSxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXV4Qix1QkFBdUJubEIsT0FBTyxFQUFFNmtCLFNBQVMsRUFBRXBqQixTQUFTLEVBQUVrWCxjQUFjLEVBQUU7TUFBQSxJQUFBeU0sT0FBQTtNQUNsRSxJQUFNQyxXQUFXLEdBQUdDLGtCQUFrQixDQUFDN2pCLFNBQVMsQ0FBQy9DLE1BQU0sRUFBRW1tQixTQUFTLENBQUM7TUFDbkUsSUFBTXpELGVBQWUsR0FBRyxFQUFFO01BQzFCLElBQU1FLGNBQWMsR0FBRyxFQUFFO01BQ3pCLElBQUlpRSxLQUFLLEdBQUcsQ0FBQztNQUNiLElBQU1DLGNBQWMsR0FBRyxJQUFJcFgsR0FBRyxDQUFDLENBQUM7TUFDaENvWCxjQUFjLENBQUNoaEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFDaWhCLFFBQVEsRUFBSztRQUN0QyxJQUFJLENBQUNaLFNBQVMsRUFBRTtVQUNaO1FBQ0o7UUFDQVUsS0FBSyxHQUFHRSxRQUFRLENBQUM3eEIsS0FBSyxHQUFHOHhCLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDN3hCLEtBQUssQ0FBQyxHQUFHLEdBQUc7TUFDM0QsQ0FBQyxDQUFDO01BQ0Y0eEIsY0FBYyxDQUFDaGhCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQ2loQixRQUFRLEVBQUs7UUFDdkMsSUFBSSxDQUFDQSxRQUFRLENBQUM3eEIsS0FBSyxFQUFFO1VBQ2pCLE1BQU0sSUFBSTZDLEtBQUssbUdBQUF3SSxNQUFBLENBQWdHd0MsU0FBUyxDQUFDM0MsU0FBUyxDQUFDLENBQUMsT0FBRyxDQUFDO1FBQzVJO1FBQ0FzaUIsZUFBZSxDQUFDeHBCLElBQUksQ0FBQzZ0QixRQUFRLENBQUM3eEIsS0FBSyxDQUFDO01BQ3hDLENBQUMsQ0FBQztNQUNGNHhCLGNBQWMsQ0FBQ2hoQixHQUFHLENBQUMsT0FBTyxFQUFFLFVBQUNpaEIsUUFBUSxFQUFLO1FBQ3RDLElBQUksQ0FBQ0EsUUFBUSxDQUFDN3hCLEtBQUssRUFBRTtVQUNqQixNQUFNLElBQUk2QyxLQUFLLGlHQUFBd0ksTUFBQSxDQUE4RndDLFNBQVMsQ0FBQzNDLFNBQVMsQ0FBQyxDQUFDLE9BQUcsQ0FBQztRQUMxSTtRQUNBd2lCLGNBQWMsQ0FBQzFwQixJQUFJLENBQUM2dEIsUUFBUSxDQUFDN3hCLEtBQUssQ0FBQztNQUN2QyxDQUFDLENBQUM7TUFDRjZOLFNBQVMsQ0FBQzVDLFNBQVMsQ0FBQzdJLE9BQU8sQ0FBQyxVQUFDeXZCLFFBQVEsRUFBSztRQUN0QyxJQUFJeE0sRUFBRTtRQUNOLElBQUl1TSxjQUFjLENBQUNqaEIsR0FBRyxDQUFDa2hCLFFBQVEsQ0FBQ3B0QixJQUFJLENBQUMsRUFBRTtVQUNuQyxJQUFNcW9CLFFBQVEsR0FBRyxDQUFDekgsRUFBRSxHQUFHdU0sY0FBYyxDQUFDbGxCLEdBQUcsQ0FBQ21sQixRQUFRLENBQUNwdEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJNGdCLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBR0EsRUFBRSxHQUFJLFlBQU0sQ0FBRSxDQUFFO1VBQ3RHeUgsUUFBUSxDQUFDK0UsUUFBUSxDQUFDO1VBQ2xCO1FBQ0o7UUFDQSxNQUFNLElBQUlodkIsS0FBSyx1QkFBQXdJLE1BQUEsQ0FBc0J3bUIsUUFBUSxDQUFDcHRCLElBQUksZ0NBQUE0RyxNQUFBLENBQTJCd0MsU0FBUyxDQUFDM0MsU0FBUyxDQUFDLENBQUMsbUNBQUFHLE1BQUEsQ0FBK0JwRCxLQUFLLENBQUM0QixJQUFJLENBQUMrbkIsY0FBYyxDQUFDNXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ2tILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBRyxDQUFDO01BQ3JMLENBQUMsQ0FBQztNQUNGLElBQUkra0IsU0FBUyxJQUFJekQsZUFBZSxDQUFDbnBCLE1BQU0sR0FBRyxDQUFDLElBQUkwZ0IsY0FBYyxJQUFJLENBQUNBLGNBQWMsQ0FBQ3dJLG9CQUFvQixDQUFDQyxlQUFlLENBQUMsRUFBRTtRQUNwSDtNQUNKO01BQ0EsSUFBSXlELFNBQVMsSUFBSXZELGNBQWMsQ0FBQ3JwQixNQUFNLEdBQUcsQ0FBQyxJQUFJMGdCLGNBQWMsSUFBSSxDQUFDQSxjQUFjLENBQUMwSSxtQkFBbUIsQ0FBQ0MsY0FBYyxDQUFDLEVBQUU7UUFDakg7TUFDSjtNQUNBLElBQUlxRSxnQkFBZ0I7TUFDcEIsUUFBUU4sV0FBVztRQUNmLEtBQUssTUFBTTtVQUNQTSxnQkFBZ0IsR0FBRyxTQUFBQSxpQkFBQSxFQUFNO1lBQ3JCUCxPQUFJLENBQUNRLFdBQVcsQ0FBQzVsQixPQUFPLENBQUM7VUFDN0IsQ0FBQztVQUNEO1FBQ0osS0FBSyxNQUFNO1VBQ1AybEIsZ0JBQWdCLEdBQUcsU0FBQUEsaUJBQUE7WUFBQSxPQUFNUCxPQUFJLENBQUNTLFdBQVcsQ0FBQzdsQixPQUFPLENBQUM7VUFBQTtVQUNsRDtRQUNKLEtBQUssVUFBVTtVQUNYMmxCLGdCQUFnQixHQUFHLFNBQUFBLGlCQUFBO1lBQUEsT0FBTVAsT0FBSSxDQUFDalMsUUFBUSxDQUFDblQsT0FBTyxFQUFFeUIsU0FBUyxDQUFDckgsSUFBSSxDQUFDO1VBQUE7VUFDL0Q7UUFDSixLQUFLLGFBQWE7VUFDZHVyQixnQkFBZ0IsR0FBRyxTQUFBQSxpQkFBQTtZQUFBLE9BQU1QLE9BQUksQ0FBQzlSLFdBQVcsQ0FBQ3RULE9BQU8sRUFBRXlCLFNBQVMsQ0FBQ3JILElBQUksQ0FBQztVQUFBO1VBQ2xFO1FBQ0osS0FBSyxjQUFjO1VBQ2Z1ckIsZ0JBQWdCLEdBQUcsU0FBQUEsaUJBQUE7WUFBQSxPQUFNUCxPQUFJLENBQUNMLGFBQWEsQ0FBQy9rQixPQUFPLEVBQUV5QixTQUFTLENBQUNySCxJQUFJLENBQUM7VUFBQTtVQUNwRTtRQUNKLEtBQUssaUJBQWlCO1VBQ2xCdXJCLGdCQUFnQixHQUFHLFNBQUFBLGlCQUFBO1lBQUEsT0FBTVAsT0FBSSxDQUFDSixnQkFBZ0IsQ0FBQ2hsQixPQUFPLEVBQUV5QixTQUFTLENBQUNySCxJQUFJLENBQUM7VUFBQTtVQUN2RTtRQUNKO1VBQ0ksTUFBTSxJQUFJM0QsS0FBSyxrQ0FBQXdJLE1BQUEsQ0FBaUNvbUIsV0FBVyxPQUFHLENBQUM7TUFDdkU7TUFDQSxJQUFJRSxLQUFLLEVBQUU7UUFDUDlXLE1BQU0sQ0FBQ2tRLFVBQVUsQ0FBQyxZQUFNO1VBQ3BCLElBQUloRyxjQUFjLElBQUksQ0FBQ0EsY0FBYyxDQUFDc0ksVUFBVSxFQUFFO1lBQzlDMEUsZ0JBQWdCLENBQUMsQ0FBQztVQUN0QjtRQUNKLENBQUMsRUFBRUosS0FBSyxDQUFDO1FBQ1Q7TUFDSjtNQUNBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RCO0VBQUM7SUFBQTdyQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXF4QixxQkFBcUJqbEIsT0FBTyxFQUFFO01BQzFCLElBQU04bEIsaUJBQWlCLEdBQUcsRUFBRTtNQUM1QjlsQixPQUFPLENBQUMrbEIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQy92QixPQUFPLENBQUUsVUFBQWdLLE9BQU8sRUFBSTtRQUMzRCxJQUFJLEVBQUVBLE9BQU8sWUFBWXdDLFdBQVcsQ0FBQyxJQUFJLEVBQUV4QyxPQUFPLFlBQVlnbUIsVUFBVSxDQUFDLEVBQUU7VUFDdkUsTUFBTSxJQUFJdnZCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztRQUMzQztRQUNBLElBQU13SCxVQUFVLEdBQUdGLGVBQWUsQ0FBQ2lDLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDa2xCLE9BQU8sSUFBSSxNQUFNLENBQUM7UUFDckVILGlCQUFpQixDQUFDbHVCLElBQUksQ0FBQztVQUNuQm9JLE9BQU8sRUFBUEEsT0FBTztVQUNQL0IsVUFBVSxFQUFWQTtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUUsQ0FBQztNQUNILE9BQU82bkIsaUJBQWlCO0lBQzVCO0VBQUM7SUFBQWhzQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQWd5QixZQUFZNWxCLE9BQU8sRUFBRTtNQUNqQkEsT0FBTyxDQUFDc1UsS0FBSyxDQUFDZ0wsT0FBTyxHQUFHLFFBQVE7SUFDcEM7RUFBQztJQUFBeGxCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBaXlCLFlBQVk3bEIsT0FBTyxFQUFFO01BQ2pCQSxPQUFPLENBQUNzVSxLQUFLLENBQUNnTCxPQUFPLEdBQUcsTUFBTTtJQUNsQztFQUFDO0lBQUF4bEIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF1ZixTQUFTblQsT0FBTyxFQUFFa21CLE9BQU8sRUFBRTtNQUFBLElBQUFDLGtCQUFBO01BQ3ZCLENBQUFBLGtCQUFBLEdBQUFubUIsT0FBTyxDQUFDbVUsU0FBUyxFQUFDM0QsR0FBRyxDQUFBbFcsS0FBQSxDQUFBNnJCLGtCQUFBLEVBQUFqcEIsa0JBQUEsQ0FBSW1DLGtCQUFrQixDQUFDNm1CLE9BQU8sQ0FBQyxFQUFDO0lBQ3pEO0VBQUM7SUFBQXBzQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTBmLFlBQVl0VCxPQUFPLEVBQUVrbUIsT0FBTyxFQUFFO01BQUEsSUFBQUUsbUJBQUE7TUFDMUIsQ0FBQUEsbUJBQUEsR0FBQXBtQixPQUFPLENBQUNtVSxTQUFTLEVBQUNDLE1BQU0sQ0FBQTlaLEtBQUEsQ0FBQThyQixtQkFBQSxFQUFBbHBCLGtCQUFBLENBQUltQyxrQkFBa0IsQ0FBQzZtQixPQUFPLENBQUMsRUFBQztNQUN4RCxJQUFJbG1CLE9BQU8sQ0FBQ21VLFNBQVMsQ0FBQ2xjLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEMsSUFBSSxDQUFDK3NCLGdCQUFnQixDQUFDaGxCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO01BQzdDO0lBQ0o7RUFBQztJQUFBbEcsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFteEIsY0FBYy9rQixPQUFPLEVBQUU0RixVQUFVLEVBQUU7TUFDL0JBLFVBQVUsQ0FBQzVQLE9BQU8sQ0FBQyxVQUFDcXdCLFNBQVMsRUFBSztRQUM5QnJtQixPQUFPLENBQUN3RyxZQUFZLENBQUM2ZixTQUFTLEVBQUUsRUFBRSxDQUFDO01BQ3ZDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXZzQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQW94QixpQkFBaUJobEIsT0FBTyxFQUFFNEYsVUFBVSxFQUFFO01BQ2xDQSxVQUFVLENBQUM1UCxPQUFPLENBQUMsVUFBQ3F3QixTQUFTLEVBQUs7UUFDOUJybUIsT0FBTyxDQUFDNEcsZUFBZSxDQUFDeWYsU0FBUyxDQUFDO01BQ3RDLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBL0IsYUFBQTtBQUFBO0FBRUwsSUFBTWdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQWE1bUIsTUFBTSxFQUFFbW1CLFNBQVMsRUFBRTtFQUNwRCxRQUFRbm1CLE1BQU07SUFDVixLQUFLLE1BQU07TUFDUCxPQUFPbW1CLFNBQVMsR0FBRyxNQUFNLEdBQUcsTUFBTTtJQUN0QyxLQUFLLE1BQU07TUFDUCxPQUFPQSxTQUFTLEdBQUcsTUFBTSxHQUFHLE1BQU07SUFDdEMsS0FBSyxVQUFVO01BQ1gsT0FBT0EsU0FBUyxHQUFHLFVBQVUsR0FBRyxhQUFhO0lBQ2pELEtBQUssYUFBYTtNQUNkLE9BQU9BLFNBQVMsR0FBRyxhQUFhLEdBQUcsVUFBVTtJQUNqRCxLQUFLLGNBQWM7TUFDZixPQUFPQSxTQUFTLEdBQUcsY0FBYyxHQUFHLGlCQUFpQjtJQUN6RCxLQUFLLGlCQUFpQjtNQUNsQixPQUFPQSxTQUFTLEdBQUcsaUJBQWlCLEdBQUcsY0FBYztFQUM3RDtFQUNBLE1BQU0sSUFBSXB1QixLQUFLLGtDQUFBd0ksTUFBQSxDQUFpQ1AsTUFBTSxPQUFHLENBQUM7QUFDOUQsQ0FBQztBQUFDLElBRUk0bkIscUJBQXFCO0VBQUEsU0FBQUEsc0JBQUE7SUFBQXZxQixlQUFBLE9BQUF1cUIscUJBQUE7RUFBQTtFQUFBL3BCLFlBQUEsQ0FBQStwQixxQkFBQTtJQUFBeHNCLEdBQUE7SUFBQWxHLEtBQUEsRUFDdkIsU0FBQTRsQixrQkFBa0J4WCxTQUFTLEVBQUU7TUFBQSxJQUFBdWtCLE9BQUE7TUFDekJ2a0IsU0FBUyxDQUFDMlgsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDdEosU0FBUyxFQUFLO1FBQ3JDa1csT0FBSSxDQUFDQyxjQUFjLENBQUNuVyxTQUFTLEVBQUVyTyxTQUFTLENBQUMvQixVQUFVLENBQUM7TUFDeEQsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbkcsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE0eUIsZUFBZW5XLFNBQVMsRUFBRXBRLFVBQVUsRUFBRTtNQUNsQyxJQUFJQSxVQUFVLENBQUNzRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNuQyxJQUFNa2lCLGVBQWUsR0FBQXZwQixrQkFBQSxDQUFPK0MsVUFBVSxDQUFDSyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUNtbUIsZUFBZSxDQUFDbGxCLFFBQVEsQ0FBQzhPLFNBQVMsQ0FBQyxFQUFFO1VBQ3RDb1csZUFBZSxDQUFDN3VCLElBQUksQ0FBQ3lZLFNBQVMsQ0FBQztRQUNuQztRQUNBcFEsVUFBVSxDQUFDdUUsR0FBRyxDQUFDLGlCQUFpQixFQUFFaWlCLGVBQWUsQ0FBQztNQUN0RDtJQUNKO0VBQUM7RUFBQSxPQUFBSCxxQkFBQTtBQUFBO0FBQUEsSUFHQ0ksbUJBQW1CO0VBQ3JCLFNBQUFBLG9CQUFBLEVBQWM7SUFBQTNxQixlQUFBLE9BQUEycUIsbUJBQUE7SUFDVixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0VBQzVCO0VBQUNwcUIsWUFBQSxDQUFBbXFCLG1CQUFBO0lBQUE1c0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE0bEIsa0JBQWtCeFgsU0FBUyxFQUFFO01BQUEsSUFBQTRrQixPQUFBO01BQ3pCNWtCLFNBQVMsQ0FBQzJYLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDalgsSUFBSSxFQUFFaVAsUUFBUSxFQUFFaUwsUUFBUSxFQUFLO1FBQ3pELElBQUksQ0FBQ2dLLE9BQUksQ0FBQ0QsV0FBVyxFQUFFO1VBQ25CL0osUUFBUSxDQUFDbkIsWUFBWSxHQUFHLEtBQUs7UUFDakM7TUFDSixDQUFDLENBQUM7TUFDRnpaLFNBQVMsQ0FBQzJYLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBTTtRQUMxQmlOLE9BQUksQ0FBQ0QsV0FBVyxHQUFHLElBQUk7TUFDM0IsQ0FBQyxDQUFDO01BQ0Yza0IsU0FBUyxDQUFDMlgsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFNO1FBQzdCaU4sT0FBSSxDQUFDRCxXQUFXLEdBQUcsS0FBSztNQUM1QixDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUEsT0FBQUQsbUJBQUE7QUFBQTtBQUFBLElBR0NHLGVBQWU7RUFDakIsU0FBQUEsZ0JBQVk3a0IsU0FBUyxFQUFFO0lBQUFqRyxlQUFBLE9BQUE4cUIsZUFBQTtJQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBRyxJQUFJO0lBQzNCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMva0IsU0FBUyxHQUFHQSxTQUFTO0VBQzlCO0VBQUN6RixZQUFBLENBQUFzcUIsZUFBQTtJQUFBL3NCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBb3pCLFFBQVFDLFVBQVUsRUFBRUMsUUFBUSxFQUFFO01BQzFCLElBQUksQ0FBQ0MsS0FBSyxDQUFDdnZCLElBQUksQ0FBQztRQUFFcXZCLFVBQVUsRUFBVkEsVUFBVTtRQUFFQyxRQUFRLEVBQVJBO01BQVMsQ0FBQyxDQUFDO01BQ3pDLElBQUksSUFBSSxDQUFDSixlQUFlLEVBQUU7UUFDdEIsSUFBSSxDQUFDTSxZQUFZLENBQUNILFVBQVUsRUFBRUMsUUFBUSxDQUFDO01BQzNDO0lBQ0o7RUFBQztJQUFBcHRCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBeXpCLGdCQUFBLEVBQWtCO01BQUEsSUFBQUMsT0FBQTtNQUNkLElBQUksSUFBSSxDQUFDUixlQUFlLEVBQUU7UUFDdEI7TUFDSjtNQUNBLElBQUksQ0FBQ0EsZUFBZSxHQUFHLElBQUk7TUFDM0IsSUFBSSxDQUFDSyxLQUFLLENBQUNueEIsT0FBTyxDQUFDLFVBQUF1eEIsS0FBQSxFQUE4QjtRQUFBLElBQTNCTixVQUFVLEdBQUFNLEtBQUEsQ0FBVk4sVUFBVTtVQUFFQyxRQUFRLEdBQUFLLEtBQUEsQ0FBUkwsUUFBUTtRQUN0Q0ksT0FBSSxDQUFDRixZQUFZLENBQUNILFVBQVUsRUFBRUMsUUFBUSxDQUFDO01BQzNDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXB0QixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTR6QixlQUFBLEVBQWlCO01BQ2IsSUFBSSxDQUFDVixlQUFlLEdBQUcsS0FBSztNQUM1QixJQUFJLENBQUNDLGdCQUFnQixDQUFDL3dCLE9BQU8sQ0FBQyxVQUFDeXhCLFFBQVEsRUFBSztRQUN4Q0MsYUFBYSxDQUFDRCxRQUFRLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBM3RCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBK3pCLGFBQUEsRUFBZTtNQUNYLElBQUksQ0FBQ0gsY0FBYyxDQUFDLENBQUM7TUFDckIsSUFBSSxDQUFDTCxLQUFLLEdBQUcsRUFBRTtNQUNmLElBQUksQ0FBQ0UsZUFBZSxDQUFDLENBQUM7SUFDMUI7RUFBQztJQUFBdnRCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd3pCLGFBQWFILFVBQVUsRUFBRUMsUUFBUSxFQUFFO01BQUEsSUFBQVUsT0FBQTtNQUMvQixJQUFJcFksUUFBUTtNQUNaLElBQUl5WCxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQzFCelgsUUFBUSxHQUFHLFNBQUFBLFNBQUEsRUFBTTtVQUNib1ksT0FBSSxDQUFDNWxCLFNBQVMsQ0FBQ3FZLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7TUFDTCxDQUFDLE1BQ0k7UUFDRDdLLFFBQVEsR0FBRyxTQUFBQSxTQUFBLEVBQU07VUFDYm9ZLE9BQUksQ0FBQzVsQixTQUFTLENBQUN0RCxNQUFNLENBQUN1b0IsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO01BQ0w7TUFDQSxJQUFNWSxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQzVCdFksUUFBUSxDQUFDLENBQUM7TUFDZCxDQUFDLEVBQUUwWCxRQUFRLENBQUM7TUFDWixJQUFJLENBQUNILGdCQUFnQixDQUFDbnZCLElBQUksQ0FBQ2l3QixLQUFLLENBQUM7SUFDckM7RUFBQztFQUFBLE9BQUFoQixlQUFBO0FBQUE7QUFBQSxJQUdDa0IsYUFBYTtFQUFBLFNBQUFBLGNBQUE7SUFBQWhzQixlQUFBLE9BQUFnc0IsYUFBQTtFQUFBO0VBQUF4ckIsWUFBQSxDQUFBd3JCLGFBQUE7SUFBQWp1QixHQUFBO0lBQUFsRyxLQUFBLEVBQ2YsU0FBQTRsQixrQkFBa0J4WCxTQUFTLEVBQUU7TUFBQSxJQUFBZ21CLE9BQUE7TUFDekIsSUFBSSxDQUFDaG9CLE9BQU8sR0FBR2dDLFNBQVMsQ0FBQ2hDLE9BQU87TUFDaEMsSUFBSSxDQUFDaW9CLGVBQWUsR0FBRyxJQUFJcEIsZUFBZSxDQUFDN2tCLFNBQVMsQ0FBQztNQUNyRCxJQUFJLENBQUNrbUIsaUJBQWlCLENBQUMsQ0FBQztNQUN4QmxtQixTQUFTLENBQUMyWCxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQU07UUFDMUJxTyxPQUFJLENBQUNDLGVBQWUsQ0FBQ1osZUFBZSxDQUFDLENBQUM7TUFDMUMsQ0FBQyxDQUFDO01BQ0ZybEIsU0FBUyxDQUFDMlgsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFNO1FBQzdCcU8sT0FBSSxDQUFDQyxlQUFlLENBQUNULGNBQWMsQ0FBQyxDQUFDO01BQ3pDLENBQUMsQ0FBQztNQUNGeGxCLFNBQVMsQ0FBQzJYLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFNO1FBQ2xDcU8sT0FBSSxDQUFDRSxpQkFBaUIsQ0FBQyxDQUFDO01BQzVCLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXB1QixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQW96QixRQUFRQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtNQUMxQixJQUFJLENBQUNlLGVBQWUsQ0FBQ2pCLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFQyxRQUFRLENBQUM7SUFDdEQ7RUFBQztJQUFBcHRCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBK3pCLGFBQUEsRUFBZTtNQUNYLElBQUksQ0FBQ00sZUFBZSxDQUFDTixZQUFZLENBQUMsQ0FBQztJQUN2QztFQUFDO0lBQUE3dEIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFzMEIsa0JBQUEsRUFBb0I7TUFBQSxJQUFBQyxPQUFBO01BQ2hCLElBQUksQ0FBQ1IsWUFBWSxDQUFDLENBQUM7TUFDbkIsSUFBSSxJQUFJLENBQUMzbkIsT0FBTyxDQUFDZSxPQUFPLENBQUNxbkIsSUFBSSxLQUFLNXRCLFNBQVMsRUFBRTtRQUN6QztNQUNKO01BQ0EsSUFBTTZ0QixhQUFhLEdBQUcsSUFBSSxDQUFDcm9CLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDcW5CLElBQUk7TUFDL0MsSUFBTW5xQixVQUFVLEdBQUdGLGVBQWUsQ0FBQ3NxQixhQUFhLElBQUksU0FBUyxDQUFDO01BQzlEcHFCLFVBQVUsQ0FBQ2pJLE9BQU8sQ0FBQyxVQUFDeUwsU0FBUyxFQUFLO1FBQzlCLElBQUl5bEIsUUFBUSxHQUFHLElBQUk7UUFDbkJ6bEIsU0FBUyxDQUFDNUMsU0FBUyxDQUFDN0ksT0FBTyxDQUFDLFVBQUN5dkIsUUFBUSxFQUFLO1VBQ3RDLFFBQVFBLFFBQVEsQ0FBQ3B0QixJQUFJO1lBQ2pCLEtBQUssT0FBTztjQUNSLElBQUlvdEIsUUFBUSxDQUFDN3hCLEtBQUssRUFBRTtnQkFDaEJzekIsUUFBUSxHQUFHeEIsUUFBUSxDQUFDRCxRQUFRLENBQUM3eEIsS0FBSyxDQUFDO2NBQ3ZDO2NBQ0E7WUFDSjtjQUNJNnBCLE9BQU8sQ0FBQzZLLElBQUksdUJBQUFycEIsTUFBQSxDQUFzQndtQixRQUFRLENBQUNwdEIsSUFBSSx3QkFBQTRHLE1BQUEsQ0FBbUJvcEIsYUFBYSxRQUFJLENBQUM7VUFDNUY7UUFDSixDQUFDLENBQUM7UUFDRkYsT0FBSSxDQUFDbkIsT0FBTyxDQUFDdmxCLFNBQVMsQ0FBQy9DLE1BQU0sRUFBRXdvQixRQUFRLENBQUM7TUFDNUMsQ0FBQyxDQUFDO0lBQ047RUFBQztFQUFBLE9BQUFhLGFBQUE7QUFBQTtBQUFBLElBR0NRLDZCQUE2QjtFQUFBLFNBQUFBLDhCQUFBO0lBQUF4c0IsZUFBQSxPQUFBd3NCLDZCQUFBO0VBQUE7RUFBQWhzQixZQUFBLENBQUFnc0IsNkJBQUE7SUFBQXp1QixHQUFBO0lBQUFsRyxLQUFBLEVBQy9CLFNBQUE0bEIsa0JBQWtCeFgsU0FBUyxFQUFFO01BQUEsSUFBQXdtQixPQUFBO01BQ3pCLElBQUksQ0FBQ0MsNkJBQTZCLENBQUN6bUIsU0FBUyxDQUFDO01BQzdDQSxTQUFTLENBQUMyWCxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBTTtRQUNsQzZPLE9BQUksQ0FBQ0MsNkJBQTZCLENBQUN6bUIsU0FBUyxDQUFDO01BQ2pELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQWxJLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBNjBCLDhCQUE4QnptQixTQUFTLEVBQUU7TUFDckNBLFNBQVMsQ0FBQ2hDLE9BQU8sQ0FBQytsQixnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQy92QixPQUFPLENBQUMsVUFBQ2dLLE9BQU8sRUFBSztRQUNwRSxJQUFJLEVBQUVBLE9BQU8sWUFBWXdDLFdBQVcsQ0FBQyxFQUFFO1VBQ25DLE1BQU0sSUFBSS9MLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQztRQUN4RDtRQUNBLElBQUl1SixPQUFPLFlBQVkwb0IsZUFBZSxFQUFFO1VBQ3BDO1FBQ0o7UUFDQSxJQUFJLENBQUMzbUIsNkJBQTZCLENBQUMvQixPQUFPLEVBQUVnQyxTQUFTLENBQUMsRUFBRTtVQUNwRDtRQUNKO1FBQ0EsSUFBTStoQixjQUFjLEdBQUczakIsNEJBQTRCLENBQUNKLE9BQU8sQ0FBQztRQUM1RCxJQUFJLENBQUMrakIsY0FBYyxFQUFFO1VBQ2pCO1FBQ0o7UUFDQSxJQUFNMVQsU0FBUyxHQUFHMFQsY0FBYyxDQUFDcmxCLE1BQU07UUFDdkMsSUFBSXNELFNBQVMsQ0FBQzJPLGlCQUFpQixDQUFDLENBQUMsQ0FBQ3BQLFFBQVEsQ0FBQzhPLFNBQVMsQ0FBQyxFQUFFO1VBQ25EO1FBQ0o7UUFDQSxJQUFJck8sU0FBUyxDQUFDL0IsVUFBVSxDQUFDc0UsR0FBRyxDQUFDOEwsU0FBUyxDQUFDLEVBQUU7VUFDckNyUCxpQkFBaUIsQ0FBQ2hCLE9BQU8sRUFBRWdDLFNBQVMsQ0FBQy9CLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDK1AsU0FBUyxDQUFDLENBQUM7UUFDbkU7UUFDQSxJQUFJclEsT0FBTyxZQUFZVyxpQkFBaUIsSUFBSSxDQUFDWCxPQUFPLENBQUNZLFFBQVEsRUFBRTtVQUMzRG9CLFNBQVMsQ0FBQy9CLFVBQVUsQ0FBQ3VFLEdBQUcsQ0FBQzZMLFNBQVMsRUFBRXRRLG1CQUFtQixDQUFDQyxPQUFPLEVBQUVnQyxTQUFTLENBQUMvQixVQUFVLENBQUMsQ0FBQztRQUMzRjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBc29CLDZCQUFBO0FBQUE7QUFHTCxTQUFTSSxlQUFlQSxDQUFFNUUsY0FBYyxFQUFFO0VBQ3RDLElBQUl0SSxZQUFZLEdBQUcsSUFBSTtFQUN2QixJQUFJbU4sZUFBZSxHQUFHLElBQUk7RUFDMUIsSUFBSTlPLFFBQVEsR0FBRyxLQUFLO0VBQ3BCaUssY0FBYyxDQUFDbGxCLFNBQVMsQ0FBQzdJLE9BQU8sQ0FBQyxVQUFDeXZCLFFBQVEsRUFBSztJQUMzQyxRQUFRQSxRQUFRLENBQUNwdEIsSUFBSTtNQUNqQixLQUFLLElBQUk7UUFDTCxJQUFJLENBQUNvdEIsUUFBUSxDQUFDN3hCLEtBQUssRUFBRTtVQUNqQixNQUFNLElBQUk2QyxLQUFLLDJCQUFBd0ksTUFBQSxDQUF5QjhrQixjQUFjLENBQUNqbEIsU0FBUyxDQUFDLENBQUMseUNBQXNDLENBQUM7UUFDN0c7UUFDQSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUN5QyxRQUFRLENBQUNra0IsUUFBUSxDQUFDN3hCLEtBQUssQ0FBQyxFQUFFO1VBQy9DLE1BQU0sSUFBSTZDLEtBQUssMkJBQUF3SSxNQUFBLENBQXlCOGtCLGNBQWMsQ0FBQ2psQixTQUFTLENBQUMsQ0FBQyx5REFBa0QsQ0FBQztRQUN6SDtRQUNBOHBCLGVBQWUsR0FBR25ELFFBQVEsQ0FBQzd4QixLQUFLO1FBQ2hDO01BQ0osS0FBSyxVQUFVO1FBQ1g2bkIsWUFBWSxHQUFHLEtBQUs7UUFDcEI7TUFDSixLQUFLLFVBQVU7UUFDWDNCLFFBQVEsR0FBRzJMLFFBQVEsQ0FBQzd4QixLQUFLLEdBQUc4eEIsUUFBUSxDQUFDRCxRQUFRLENBQUM3eEIsS0FBSyxDQUFDLEdBQUcsSUFBSTtRQUMzRDtNQUNKO1FBQ0ksTUFBTSxJQUFJNkMsS0FBSyx1QkFBQXdJLE1BQUEsQ0FBc0J3bUIsUUFBUSxDQUFDcHRCLElBQUkseUJBQUE0RyxNQUFBLENBQW9COGtCLGNBQWMsQ0FBQ2psQixTQUFTLENBQUMsQ0FBQyxRQUFJLENBQUM7SUFDN0c7RUFDSixDQUFDLENBQUM7RUFDRixJQUFBK3BCLHFCQUFBLEdBQW9DOUUsY0FBYyxDQUFDcmxCLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUFBcXBCLHNCQUFBLEdBQUF2dEIsY0FBQSxDQUFBc3RCLHFCQUFBO0lBQTdEeFksU0FBUyxHQUFBeVksc0JBQUE7SUFBRXROLGNBQWMsR0FBQXNOLHNCQUFBO0VBQ2hDLE9BQU87SUFDSHpZLFNBQVMsRUFBVEEsU0FBUztJQUNUbUwsY0FBYyxFQUFFQSxjQUFjLElBQUksSUFBSTtJQUN0Q0MsWUFBWSxFQUFaQSxZQUFZO0lBQ1ozQixRQUFRLEVBQVJBLFFBQVE7SUFDUjhPLGVBQWUsRUFBZkE7RUFDSixDQUFDO0FBQ0w7QUFBQyxJQUVLRyxpQkFBaUI7RUFDbkIsU0FBQUEsa0JBQUEsRUFBYztJQUFBaHRCLGVBQUEsT0FBQWd0QixpQkFBQTtJQUNWLElBQUksQ0FBQ0MscUJBQXFCLEdBQUcsSUFBSXBVLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLElBQUksQ0FBQ3FVLHVCQUF1QixHQUFHLElBQUk3YSxHQUFHLENBQUMsQ0FBQztFQUM1QztFQUFDN1IsWUFBQSxDQUFBd3NCLGlCQUFBO0lBQUFqdkIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFzMUIsa0JBQWtCbHBCLE9BQU8sRUFBRWdDLFNBQVMsRUFBRTtNQUNsQyxJQUFJLENBQUNnbkIscUJBQXFCLENBQUN4a0IsR0FBRyxDQUFDeEUsT0FBTyxFQUFFZ0MsU0FBUyxDQUFDO01BQ2xELElBQUksQ0FBQ2luQix1QkFBdUIsQ0FBQ3prQixHQUFHLENBQUN4QyxTQUFTLEVBQUVBLFNBQVMsQ0FBQzNKLElBQUksQ0FBQztJQUMvRDtFQUFDO0lBQUF5QixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXUxQixvQkFBb0JubkIsU0FBUyxFQUFFO01BQzNCLElBQUksQ0FBQ2duQixxQkFBcUIsVUFBTyxDQUFDaG5CLFNBQVMsQ0FBQ2hDLE9BQU8sQ0FBQztNQUNwRCxJQUFJLENBQUNpcEIsdUJBQXVCLFVBQU8sQ0FBQ2puQixTQUFTLENBQUM7SUFDbEQ7RUFBQztJQUFBbEksR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUF3MUIsYUFBYXBwQixPQUFPLEVBQUU7TUFBQSxJQUFBcXBCLE9BQUE7TUFDbEIsT0FBTyxJQUFJMXdCLE9BQU8sQ0FBQyxVQUFDdEMsT0FBTyxFQUFFc0QsTUFBTSxFQUFLO1FBQ3BDLElBQUkydkIsS0FBSyxHQUFHLENBQUM7UUFDYixJQUFNQyxRQUFRLEdBQUcsRUFBRTtRQUNuQixJQUFNOUIsUUFBUSxHQUFHSyxXQUFXLENBQUMsWUFBTTtVQUMvQixJQUFNOWxCLFNBQVMsR0FBR3FuQixPQUFJLENBQUNMLHFCQUFxQixDQUFDMW9CLEdBQUcsQ0FBQ04sT0FBTyxDQUFDO1VBQ3pELElBQUlnQyxTQUFTLEVBQUU7WUFDWDBsQixhQUFhLENBQUNELFFBQVEsQ0FBQztZQUN2QnB4QixPQUFPLENBQUMyTCxTQUFTLENBQUM7VUFDdEI7VUFDQXNuQixLQUFLLEVBQUU7VUFDUCxJQUFJQSxLQUFLLEdBQUdDLFFBQVEsRUFBRTtZQUNsQjdCLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDO1lBQ3ZCOXRCLE1BQU0sQ0FBQyxJQUFJbEQsS0FBSyxvQ0FBQXdJLE1BQUEsQ0FBb0M2QyxtQkFBbUIsQ0FBQzlCLE9BQU8sQ0FBQyxDQUFFLENBQUMsQ0FBQztVQUN4RjtRQUNKLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDVCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFsRyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTQxQixlQUFlQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUU7TUFDekQsSUFBTTVPLFVBQVUsR0FBRyxFQUFFO01BQ3JCLElBQUksQ0FBQ2tPLHVCQUF1QixDQUFDanpCLE9BQU8sQ0FBQyxVQUFDaW9CLGFBQWEsRUFBRWpjLFNBQVMsRUFBSztRQUMvRCxJQUFJMG5CLFdBQVcsS0FDVkQsZ0JBQWdCLEtBQUt6bkIsU0FBUyxJQUFJLENBQUNBLFNBQVMsQ0FBQ2hDLE9BQU8sQ0FBQ2lDLFFBQVEsQ0FBQ3duQixnQkFBZ0IsQ0FBQ3pwQixPQUFPLENBQUMsQ0FBQyxFQUFFO1VBQzNGO1FBQ0o7UUFDQSxJQUFJMnBCLGFBQWEsSUFBSTFMLGFBQWEsS0FBSzBMLGFBQWEsRUFBRTtVQUNsRDtRQUNKO1FBQ0E1TyxVQUFVLENBQUNuakIsSUFBSSxDQUFDb0ssU0FBUyxDQUFDO01BQzlCLENBQUMsQ0FBQztNQUNGLE9BQU8rWSxVQUFVO0lBQ3JCO0VBQUM7RUFBQSxPQUFBZ08saUJBQUE7QUFBQTtBQUdMLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJcHBCLE9BQU87RUFBQSxPQUFLNHBCLHFCQUFxQixDQUFDQyxpQkFBaUIsQ0FBQ1QsWUFBWSxDQUFDcHBCLE9BQU8sQ0FBQztBQUFBO0FBQUMsSUFDMUY0cEIscUJBQXFCLDBCQUFBRSxXQUFBO0VBQUFDLFNBQUEsQ0FBQUgscUJBQUEsRUFBQUUsV0FBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBTCxxQkFBQTtFQUN2QixTQUFBQSxzQkFBQSxFQUFjO0lBQUEsSUFBQU0sT0FBQTtJQUFBbnVCLGVBQUEsT0FBQTZ0QixxQkFBQTtJQUNWTSxPQUFBLEdBQUFGLE1BQUEsQ0FBQTF2QixLQUFBLE9BQVNELFNBQVM7SUFDbEI2dkIsT0FBQSxDQUFLQyxnQ0FBZ0MsR0FBRyxJQUFJO0lBQzVDRCxPQUFBLENBQUs1YSxxQkFBcUIsR0FBRyxDQUN6QjtNQUFFQyxLQUFLLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ0QsS0FBSztRQUFBLE9BQUsyYSxPQUFBLENBQUt6YSxnQkFBZ0IsQ0FBQ0YsS0FBSyxDQUFDO01BQUE7SUFBQyxDQUFDLEVBQ3JFO01BQUVBLEtBQUssRUFBRSxRQUFRO01BQUVDLFFBQVEsRUFBRSxTQUFBQSxTQUFDRCxLQUFLO1FBQUEsT0FBSzJhLE9BQUEsQ0FBS0UsaUJBQWlCLENBQUM3YSxLQUFLLENBQUM7TUFBQTtJQUFDLENBQUMsRUFDdkU7TUFBRUEsS0FBSyxFQUFFLGNBQWM7TUFBRUMsUUFBUSxFQUFFLFNBQUFBLFNBQUNELEtBQUs7UUFBQSxPQUFLMmEsT0FBQSxDQUFLRyw4QkFBOEIsQ0FBQzlhLEtBQUssQ0FBQztNQUFBO0lBQUMsQ0FBQyxDQUM3RjtJQUNEMmEsT0FBQSxDQUFLclIsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUFDLE9BQUFxUixPQUFBO0VBQzNCO0VBQUMzdEIsWUFBQSxDQUFBcXRCLHFCQUFBO0lBQUE5dkIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFtSCxXQUFBLEVBQWE7TUFBQSxJQUFBdXZCLE9BQUE7TUFDVCxJQUFJLENBQUNDLHNDQUFzQyxHQUFHLElBQUksQ0FBQ0Esc0NBQXNDLENBQUNuVixJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BHLElBQU1qTCxFQUFFLEdBQUcsSUFBSSxDQUFDbkssT0FBTyxDQUFDZSxPQUFPLENBQUNtakIsTUFBTSxJQUFJLElBQUk7TUFDOUMsSUFBSSxDQUFDbGlCLFNBQVMsR0FBRyxJQUFJbVcsU0FBUyxDQUFDLElBQUksQ0FBQ25ZLE9BQU8sRUFBRSxJQUFJLENBQUN3cUIsU0FBUyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxFQUFFLFVBQUNqQixnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxhQUFhO1FBQUEsT0FBS0MscUJBQXFCLENBQUNDLGlCQUFpQixDQUFDTCxjQUFjLENBQUNDLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLGFBQWEsQ0FBQztNQUFBLEdBQUUsSUFBSSxDQUFDZ0IsZ0JBQWdCLEVBQUV4Z0IsRUFBRSxFQUFFLElBQUlzWixPQUFPLENBQUMsSUFBSSxDQUFDbUgsUUFBUSxFQUFFLElBQUksQ0FBQ0MsU0FBUyxDQUFDLEVBQUUsSUFBSS9HLHFCQUFxQixDQUFDLENBQUMsQ0FBQztNQUM5VixJQUFJLENBQUNnSCxnQkFBZ0IsR0FBR3ZLLGdCQUFnQixDQUFDLElBQUksQ0FBQ3ZlLFNBQVMsQ0FBQztNQUN4RCxJQUFJLENBQUNoQyxPQUFPLENBQUMrcUIsV0FBVyxHQUFHLElBQUksQ0FBQ0QsZ0JBQWdCO01BQ2hELElBQUksSUFBSSxDQUFDRSxnQkFBZ0IsRUFBRTtRQUN2QixJQUFJLENBQUNocEIsU0FBUyxDQUFDMFcsZUFBZSxHQUFHLElBQUksQ0FBQ3VTLGFBQWE7TUFDdkQ7TUFDQSxJQUFNQyxPQUFPLEdBQUcsQ0FDWixJQUFJNUcsYUFBYSxDQUFDLENBQUMsRUFDbkIsSUFBSWdDLHFCQUFxQixDQUFDLENBQUMsRUFDM0IsSUFBSUksbUJBQW1CLENBQUMsQ0FBQyxFQUN6QixJQUFJcUIsYUFBYSxDQUFDLENBQUMsRUFDbkIsSUFBSVEsNkJBQTZCLENBQUMsQ0FBQyxDQUN0QztNQUNEMkMsT0FBTyxDQUFDbDFCLE9BQU8sQ0FBQyxVQUFDdWpCLE1BQU0sRUFBSztRQUN4QitRLE9BQUksQ0FBQ3RvQixTQUFTLENBQUNzWCxTQUFTLENBQUNDLE1BQU0sQ0FBQztNQUNwQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUF6ZixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTZsQixRQUFBLEVBQVU7TUFBQSxJQUFBMFIsT0FBQTtNQUNOdkIscUJBQXFCLENBQUNDLGlCQUFpQixDQUFDWCxpQkFBaUIsQ0FBQyxJQUFJLENBQUNscEIsT0FBTyxFQUFFLElBQUksQ0FBQ2dDLFNBQVMsQ0FBQztNQUN2RixJQUFJLENBQUNBLFNBQVMsQ0FBQ3lYLE9BQU8sQ0FBQyxDQUFDO01BQ3hCLElBQUksQ0FBQ25LLHFCQUFxQixDQUFDdFosT0FBTyxDQUFDLFVBQUFvMUIsS0FBQSxFQUF5QjtRQUFBLElBQXRCN2IsS0FBSyxHQUFBNmIsS0FBQSxDQUFMN2IsS0FBSztVQUFFQyxRQUFRLEdBQUE0YixLQUFBLENBQVI1YixRQUFRO1FBQ2pEMmIsT0FBSSxDQUFDbnBCLFNBQVMsQ0FBQ2hDLE9BQU8sQ0FBQytQLGdCQUFnQixDQUFDUixLQUFLLEVBQUVDLFFBQVEsQ0FBQztNQUM1RCxDQUFDLENBQUM7TUFDRixJQUFJLENBQUM0TyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ2pDO0VBQUM7SUFBQXRrQixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQThoQixXQUFBLEVBQWE7TUFBQSxJQUFBMlYsT0FBQTtNQUNUekIscUJBQXFCLENBQUNDLGlCQUFpQixDQUFDVixtQkFBbUIsQ0FBQyxJQUFJLENBQUNubkIsU0FBUyxDQUFDO01BQzNFLElBQUksQ0FBQ0EsU0FBUyxDQUFDMFQsVUFBVSxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDcEcscUJBQXFCLENBQUN0WixPQUFPLENBQUMsVUFBQXMxQixLQUFBLEVBQXlCO1FBQUEsSUFBdEIvYixLQUFLLEdBQUErYixLQUFBLENBQUwvYixLQUFLO1VBQUVDLFFBQVEsR0FBQThiLEtBQUEsQ0FBUjliLFFBQVE7UUFDakQ2YixPQUFJLENBQUNycEIsU0FBUyxDQUFDaEMsT0FBTyxDQUFDbVEsbUJBQW1CLENBQUNaLEtBQUssRUFBRUMsUUFBUSxDQUFDO01BQy9ELENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQzRPLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDcEM7RUFBQztJQUFBdGtCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBMjNCLE9BQU9oYyxLQUFLLEVBQUU7TUFDVixJQUFJQSxLQUFLLENBQUN4YSxJQUFJLEtBQUssT0FBTyxJQUFJd2EsS0FBSyxDQUFDeGEsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUNuRCxNQUFNLElBQUkwQixLQUFLLGlIQUFBd0ksTUFBQSxDQUErRzZDLG1CQUFtQixDQUFDeU4sS0FBSyxDQUFDaWMsYUFBYSxDQUFDLENBQUUsQ0FBQztNQUM3SztNQUNBLElBQUksQ0FBQ0MsMkJBQTJCLENBQUNsYyxLQUFLLENBQUNpYyxhQUFhLEVBQUUsSUFBSSxDQUFDO0lBQy9EO0VBQUM7SUFBQTF4QixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQThLLE9BQU82USxLQUFLLEVBQUU7TUFBQSxJQUFBbWMsT0FBQTtNQUNWLElBQU1DLFNBQVMsR0FBR3BjLEtBQUssQ0FBQ2ljLGFBQWEsQ0FBQ3pxQixPQUFPLENBQUNrbUIsVUFBVTtNQUN4RCxJQUFNaHBCLFVBQVUsR0FBR0YsZUFBZSxDQUFDNHRCLFNBQVMsQ0FBQztNQUM3QyxJQUFJN1IsUUFBUSxHQUFHLEtBQUs7TUFDcEI3YixVQUFVLENBQUNqSSxPQUFPLENBQUMsVUFBQ3lMLFNBQVMsRUFBSztRQUM5QixJQUFJb1gsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFNMk0sY0FBYyxHQUFHLElBQUlwWCxHQUFHLENBQUMsQ0FBQztRQUNoQ29YLGNBQWMsQ0FBQ2hoQixHQUFHLENBQUMsU0FBUyxFQUFFLFlBQU07VUFDaEMrSyxLQUFLLENBQUNxYyxjQUFjLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7UUFDRnBHLGNBQWMsQ0FBQ2hoQixHQUFHLENBQUMsTUFBTSxFQUFFLFlBQU07VUFDN0IrSyxLQUFLLENBQUNzYyxlQUFlLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFDRnJHLGNBQWMsQ0FBQ2hoQixHQUFHLENBQUMsTUFBTSxFQUFFLFlBQU07VUFDN0IsSUFBSStLLEtBQUssQ0FBQ3BULE1BQU0sS0FBS29ULEtBQUssQ0FBQ2ljLGFBQWEsRUFBRTtZQUN0QztVQUNKO1FBQ0osQ0FBQyxDQUFDO1FBQ0ZoRyxjQUFjLENBQUNoaEIsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFDaWhCLFFBQVEsRUFBSztVQUN6QzNMLFFBQVEsR0FBRzJMLFFBQVEsQ0FBQzd4QixLQUFLLEdBQUc4eEIsUUFBUSxDQUFDRCxRQUFRLENBQUM3eEIsS0FBSyxDQUFDLEdBQUcsSUFBSTtRQUMvRCxDQUFDLENBQUM7UUFDRjR4QixjQUFjLENBQUNoaEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFDaWhCLFFBQVEsRUFBSztVQUN0QyxJQUFJLENBQUNBLFFBQVEsQ0FBQzd4QixLQUFLLEVBQUU7WUFDakJpbEIsWUFBWSxHQUFHNlMsT0FBSSxDQUFDN1MsWUFBWTtVQUNwQyxDQUFDLE1BQ0ksSUFBSTZTLE9BQUksQ0FBQzdTLFlBQVksQ0FBQzRNLFFBQVEsQ0FBQzd4QixLQUFLLENBQUMsRUFBRTtZQUN4Q2lsQixZQUFZLENBQUM0TSxRQUFRLENBQUM3eEIsS0FBSyxDQUFDLEdBQUc4M0IsT0FBSSxDQUFDN1MsWUFBWSxDQUFDNE0sUUFBUSxDQUFDN3hCLEtBQUssQ0FBQztVQUNwRTtRQUNKLENBQUMsQ0FBQztRQUNGNk4sU0FBUyxDQUFDNUMsU0FBUyxDQUFDN0ksT0FBTyxDQUFDLFVBQUN5dkIsUUFBUSxFQUFLO1VBQ3RDLElBQUl4TSxFQUFFO1VBQ04sSUFBSXVNLGNBQWMsQ0FBQ2poQixHQUFHLENBQUNraEIsUUFBUSxDQUFDcHRCLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQU1xb0IsUUFBUSxHQUFHLENBQUN6SCxFQUFFLEdBQUd1TSxjQUFjLENBQUNsbEIsR0FBRyxDQUFDbWxCLFFBQVEsQ0FBQ3B0QixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk0Z0IsRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHQSxFQUFFLEdBQUksWUFBTSxDQUFFLENBQUU7WUFDdEd5SCxRQUFRLENBQUMrRSxRQUFRLENBQUM7WUFDbEI7VUFDSjtVQUNBaEksT0FBTyxDQUFDNkssSUFBSSxxQkFBQXJwQixNQUFBLENBQXFCd21CLFFBQVEsQ0FBQ3B0QixJQUFJLG1CQUFBNEcsTUFBQSxDQUFlMHNCLFNBQVMsbUNBQUExc0IsTUFBQSxDQUErQnBELEtBQUssQ0FBQzRCLElBQUksQ0FBQytuQixjQUFjLENBQUM1c0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDa0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFHLENBQUM7UUFDekosQ0FBQyxDQUFDO1FBQ0YsU0FBQWdzQixHQUFBLE1BQUFDLGdCQUFBLEdBQTJCejRCLE1BQU0sQ0FBQytSLE9BQU8sQ0FBQ3dULFlBQVksQ0FBQyxFQUFBaVQsR0FBQSxHQUFBQyxnQkFBQSxDQUFBOXpCLE1BQUEsRUFBQTZ6QixHQUFBLElBQUU7VUFBcEQsSUFBQUUsbUJBQUEsR0FBQXp3QixjQUFBLENBQUF3d0IsZ0JBQUEsQ0FBQUQsR0FBQTtZQUFPaHlCLEdBQUcsR0FBQWt5QixtQkFBQTtZQUFFcHZCLEtBQUssR0FBQW92QixtQkFBQTtVQUNsQixJQUFJcHZCLEtBQUssQ0FBQ3dkLEtBQUssRUFBRTtZQUNic1IsT0FBSSxDQUFDMXBCLFNBQVMsQ0FBQ29ZLEtBQUssQ0FBQ3RnQixHQUFHLEVBQUU4QyxLQUFLLENBQUM7VUFDcEM7VUFDQSxPQUFPOHVCLE9BQUksQ0FBQzdTLFlBQVksQ0FBQy9lLEdBQUcsQ0FBQztRQUNqQztRQUNBNHhCLE9BQUksQ0FBQzFwQixTQUFTLENBQUN0RCxNQUFNLENBQUMrQyxTQUFTLENBQUMvQyxNQUFNLEVBQUUrQyxTQUFTLENBQUM3QyxLQUFLLEVBQUVrYixRQUFRLENBQUM7UUFDbEUsSUFBSTFaLDRCQUE0QixDQUFDbVAsS0FBSyxDQUFDaWMsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFO1VBQzFERSxPQUFJLENBQUN2QixnQ0FBZ0MsR0FBRzVhLEtBQUssQ0FBQ2ljLGFBQWE7UUFDL0Q7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUExeEIsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUFxNEIsUUFBQSxFQUFVO01BQ04sT0FBTyxJQUFJLENBQUNqcUIsU0FBUyxDQUFDcVksTUFBTSxDQUFDLENBQUM7SUFDbEM7RUFBQztJQUFBdmdCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBNG1CLEtBQUtqTCxLQUFLLEVBQUU7TUFBQSxJQUFBMmMsT0FBQTtNQUNSLElBQUksQ0FBQ0MsaUJBQWlCLENBQUM1YyxLQUFLLENBQUMsQ0FBQ3ZaLE9BQU8sQ0FBQyxVQUFBbzJCLE1BQUEsRUFBK0I7UUFBQSxJQUE1Qi96QixJQUFJLEdBQUErekIsTUFBQSxDQUFKL3pCLElBQUk7VUFBRW1MLElBQUksR0FBQTRvQixNQUFBLENBQUo1b0IsSUFBSTtVQUFFNm9CLFNBQVMsR0FBQUQsTUFBQSxDQUFUQyxTQUFTO1FBQzFESCxPQUFJLENBQUNscUIsU0FBUyxDQUFDd1ksSUFBSSxDQUFDbmlCLElBQUksRUFBRW1MLElBQUksRUFBRTZvQixTQUFTLENBQUM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBdnlCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBK21CLE9BQU9wTCxLQUFLLEVBQUU7TUFBQSxJQUFBK2MsT0FBQTtNQUNWLElBQUksQ0FBQ0gsaUJBQWlCLENBQUM1YyxLQUFLLENBQUMsQ0FBQ3ZaLE9BQU8sQ0FBQyxVQUFBdTJCLE1BQUEsRUFBK0I7UUFBQSxJQUE1QmwwQixJQUFJLEdBQUFrMEIsTUFBQSxDQUFKbDBCLElBQUk7VUFBRW1MLElBQUksR0FBQStvQixNQUFBLENBQUovb0IsSUFBSTtVQUFFNm9CLFNBQVMsR0FBQUUsTUFBQSxDQUFURixTQUFTO1FBQzFEQyxPQUFJLENBQUN0cUIsU0FBUyxDQUFDMlksTUFBTSxDQUFDdGlCLElBQUksRUFBRW1MLElBQUksRUFBRTZvQixTQUFTLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBdnlCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZ25CLFNBQVNyTCxLQUFLLEVBQUU7TUFBQSxJQUFBaWQsT0FBQTtNQUNaLElBQUksQ0FBQ0wsaUJBQWlCLENBQUM1YyxLQUFLLENBQUMsQ0FBQ3ZaLE9BQU8sQ0FBQyxVQUFBeTJCLE1BQUEsRUFBb0I7UUFBQSxJQUFqQnAwQixJQUFJLEdBQUFvMEIsTUFBQSxDQUFKcDBCLElBQUk7VUFBRW1MLElBQUksR0FBQWlwQixNQUFBLENBQUpqcEIsSUFBSTtRQUMvQ2dwQixPQUFJLENBQUN4cUIsU0FBUyxDQUFDNFksUUFBUSxDQUFDdmlCLElBQUksRUFBRW1MLElBQUksQ0FBQztNQUN2QyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUExSixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXU0QixrQkFBa0I1YyxLQUFLLEVBQUU7TUFDckIsSUFBTXZQLE9BQU8sR0FBR3VQLEtBQUssQ0FBQ2ljLGFBQWE7TUFDbkMsSUFBSSxDQUFDeHJCLE9BQU8sQ0FBQ2UsT0FBTyxDQUFDd08sS0FBSyxFQUFFO1FBQ3hCLE1BQU0sSUFBSTlZLEtBQUssOENBQUF3SSxNQUFBLENBQThDNkMsbUJBQW1CLENBQUM5QixPQUFPLENBQUMsQ0FBRSxDQUFDO01BQ2hHO01BQ0EsSUFBTTBzQixTQUFTLEdBQUcxc0IsT0FBTyxDQUFDZSxPQUFPLENBQUN3TyxLQUFLO01BQ3ZDLElBQU10UixVQUFVLEdBQUdGLGVBQWUsQ0FBQzJ1QixTQUFTLENBQUM7TUFDN0MsSUFBTUMsS0FBSyxHQUFHLEVBQUU7TUFDaEIxdUIsVUFBVSxDQUFDakksT0FBTyxDQUFDLFVBQUN5TCxTQUFTLEVBQUs7UUFDOUIsSUFBSTRxQixTQUFTLEdBQUcsSUFBSTtRQUNwQjVxQixTQUFTLENBQUM1QyxTQUFTLENBQUM3SSxPQUFPLENBQUMsVUFBQ3l2QixRQUFRLEVBQUs7VUFDdEMsUUFBUUEsUUFBUSxDQUFDcHRCLElBQUk7WUFDakIsS0FBSyxNQUFNO2NBQ1BnMEIsU0FBUyxHQUFHNUcsUUFBUSxDQUFDN3hCLEtBQUs7Y0FDMUI7WUFDSjtjQUNJLE1BQU0sSUFBSTZDLEtBQUsscUJBQUF3SSxNQUFBLENBQXFCd21CLFFBQVEsQ0FBQ3B0QixJQUFJLGtCQUFBNEcsTUFBQSxDQUFjeXRCLFNBQVMsUUFBSSxDQUFDO1VBQ3JGO1FBQ0osQ0FBQyxDQUFDO1FBQ0ZDLEtBQUssQ0FBQy8wQixJQUFJLENBQUM7VUFDUFMsSUFBSSxFQUFFb0osU0FBUyxDQUFDL0MsTUFBTTtVQUN0QjhFLElBQUksRUFBRS9CLFNBQVMsQ0FBQzdDLEtBQUs7VUFDckJ5dEIsU0FBUyxFQUFUQTtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztNQUNGLE9BQU9NLEtBQUs7SUFDaEI7RUFBQztJQUFBN3lCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBZzVCLGFBQWFqdEIsS0FBSyxFQUFFL0wsS0FBSyxFQUF3QztNQUFBLElBQXRDNm5CLFlBQVksR0FBQXBoQixTQUFBLENBQUFwQyxNQUFBLFFBQUFvQyxTQUFBLFFBQUFHLFNBQUEsR0FBQUgsU0FBQSxNQUFHLElBQUk7TUFBQSxJQUFFeWYsUUFBUSxHQUFBemYsU0FBQSxDQUFBcEMsTUFBQSxRQUFBb0MsU0FBQSxRQUFBRyxTQUFBLEdBQUFILFNBQUEsTUFBRyxJQUFJO01BQzNELE9BQU8sSUFBSSxDQUFDMkgsU0FBUyxDQUFDd0MsR0FBRyxDQUFDN0UsS0FBSyxFQUFFL0wsS0FBSyxFQUFFNm5CLFlBQVksRUFBRTNCLFFBQVEsQ0FBQztJQUNuRTtFQUFDO0lBQUFoZ0IsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2YixpQkFBaUJGLEtBQUssRUFBRTtNQUNwQixJQUFNcFQsTUFBTSxHQUFHb1QsS0FBSyxDQUFDcFQsTUFBTTtNQUMzQixJQUFJLENBQUNBLE1BQU0sRUFBRTtRQUNUO01BQ0o7TUFDQSxJQUFJLENBQUNzdkIsMkJBQTJCLENBQUN0dkIsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNyRDtFQUFDO0lBQUFyQyxHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQXcyQixrQkFBa0I3YSxLQUFLLEVBQUU7TUFDckIsSUFBTXBULE1BQU0sR0FBR29ULEtBQUssQ0FBQ3BULE1BQU07TUFDM0IsSUFBSSxDQUFDQSxNQUFNLEVBQUU7UUFDVDtNQUNKO01BQ0EsSUFBSSxDQUFDc3ZCLDJCQUEyQixDQUFDdHZCLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDdEQ7RUFBQztJQUFBckMsR0FBQTtJQUFBbEcsS0FBQSxFQUNELFNBQUE2M0IsNEJBQTRCenJCLE9BQU8sRUFBRTZzQixTQUFTLEVBQUU7TUFDNUMsSUFBSTVULEVBQUU7TUFDTixJQUFJLENBQUNsWCw2QkFBNkIsQ0FBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUNnQyxTQUFTLENBQUMsRUFBRTtRQUN6RDtNQUNKO01BQ0EsSUFBSSxFQUFFaEMsT0FBTyxZQUFZd0MsV0FBVyxDQUFDLEVBQUU7UUFDbkMsTUFBTSxJQUFJL0wsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO01BQ2pFO01BQ0EsSUFBSXVKLE9BQU8sWUFBWUUsZ0JBQWdCLElBQUlGLE9BQU8sQ0FBQ2pMLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDaEUsSUFBTStFLEdBQUcsR0FBR2tHLE9BQU8sQ0FBQzNILElBQUk7UUFDeEIsSUFBSSxDQUFDNGdCLEVBQUUsR0FBR2paLE9BQU8sQ0FBQ29hLEtBQUssTUFBTSxJQUFJLElBQUluQixFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLEVBQUUsQ0FBQ2hoQixNQUFNLEVBQUU7VUFDckUsSUFBSSxDQUFDNGdCLFlBQVksQ0FBQy9lLEdBQUcsQ0FBQyxHQUFHa0csT0FBTztRQUNwQyxDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUM2WSxZQUFZLENBQUMvZSxHQUFHLENBQUMsRUFBRTtVQUM3QixPQUFPLElBQUksQ0FBQytlLFlBQVksQ0FBQy9lLEdBQUcsQ0FBQztRQUNqQztNQUNKO01BQ0EsSUFBTWlxQixjQUFjLEdBQUczakIsNEJBQTRCLENBQUNKLE9BQU8sRUFBRSxLQUFLLENBQUM7TUFDbkUsSUFBSSxDQUFDK2pCLGNBQWMsRUFBRTtRQUNqQjtNQUNKO01BQ0EsSUFBTXpJLFlBQVksR0FBR3FOLGVBQWUsQ0FBQzVFLGNBQWMsQ0FBQztNQUNwRCxJQUFJLENBQUN6SSxZQUFZLENBQUNzTixlQUFlLEVBQUU7UUFDL0J0TixZQUFZLENBQUNzTixlQUFlLEdBQUcsT0FBTztNQUMxQztNQUNBLElBQUksSUFBSSxDQUFDdUIsZ0NBQWdDLEtBQUtucUIsT0FBTyxFQUFFO1FBQ25Ec2IsWUFBWSxDQUFDRyxZQUFZLEdBQUcsS0FBSztNQUNyQztNQUNBLElBQUlvUixTQUFTLEtBQUssUUFBUSxJQUFJdlIsWUFBWSxDQUFDc04sZUFBZSxLQUFLLE9BQU8sRUFBRTtRQUNwRXROLFlBQVksQ0FBQ3NOLGVBQWUsR0FBRyxRQUFRO01BQzNDO01BQ0EsSUFBSWlFLFNBQVMsSUFBSXZSLFlBQVksQ0FBQ3NOLGVBQWUsS0FBS2lFLFNBQVMsRUFBRTtRQUN6RDtNQUNKO01BQ0EsSUFBSSxLQUFLLEtBQUt2UixZQUFZLENBQUN4QixRQUFRLEVBQUU7UUFDakMsSUFBSXdCLFlBQVksQ0FBQ3NOLGVBQWUsS0FBSyxPQUFPLEVBQUU7VUFDMUN0TixZQUFZLENBQUN4QixRQUFRLEdBQUcsSUFBSTtRQUNoQyxDQUFDLE1BQ0k7VUFDRHdCLFlBQVksQ0FBQ3hCLFFBQVEsR0FBRyxDQUFDO1FBQzdCO01BQ0o7TUFDQSxJQUFNZ1QsVUFBVSxHQUFHL3NCLG1CQUFtQixDQUFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDZ0MsU0FBUyxDQUFDL0IsVUFBVSxDQUFDO01BQzFFLElBQUksQ0FBQytCLFNBQVMsQ0FBQ3dDLEdBQUcsQ0FBQzhXLFlBQVksQ0FBQ2pMLFNBQVMsRUFBRXljLFVBQVUsRUFBRXhSLFlBQVksQ0FBQ0csWUFBWSxFQUFFSCxZQUFZLENBQUN4QixRQUFRLENBQUM7SUFDNUc7RUFBQztJQUFBaGdCLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBeTJCLCtCQUErQjlhLEtBQUssRUFBRTtNQUNsQyxJQUFJQSxLQUFLLENBQUNwVCxNQUFNLEtBQUssSUFBSSxDQUFDNkQsT0FBTyxFQUFFO1FBQy9CO01BQ0o7TUFDQSxJQUFNK3NCLGVBQWUsR0FBR3hkLEtBQUssQ0FBQytPLE1BQU0sQ0FBQzBPLFVBQVU7TUFDL0MsSUFBSUQsZUFBZSxDQUFDL3FCLFNBQVMsQ0FBQ3VZLFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDdkM7TUFDSjtNQUNBLElBQU0wUyxlQUFlLEdBQUd6ckIsZ0NBQWdDLENBQUN1ckIsZUFBZSxDQUFDL3NCLE9BQU8sQ0FBQztNQUNqRixJQUFNa1ksYUFBYSxHQUFHK1UsZUFBZSxDQUFDcHRCLEdBQUcsQ0FBQzhvQixlQUFlLENBQUM7TUFDMUQsSUFBSSxDQUFDM21CLFNBQVMsQ0FBQ2dKLFFBQVEsQ0FBQytoQixlQUFlLENBQUMvcUIsU0FBUyxFQUFFa1csYUFBYSxDQUFDO01BQ2pFNlUsZUFBZSxDQUFDL3NCLE9BQU8sQ0FBQytQLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQ3dhLHNDQUFzQyxDQUFDO0lBQzVHO0VBQUM7SUFBQXp3QixHQUFBO0lBQUFsRyxLQUFBLEVBQ0QsU0FBQTIyQix1Q0FBdUNoYixLQUFLLEVBQUU7TUFDMUMsSUFBTXdkLGVBQWUsR0FBR3hkLEtBQUssQ0FBQytPLE1BQU0sQ0FBQzBPLFVBQVU7TUFDL0NELGVBQWUsQ0FBQy9zQixPQUFPLENBQUNtUSxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUNvYSxzQ0FBc0MsQ0FBQztNQUMzRyxJQUFJd0MsZUFBZSxDQUFDL3FCLFNBQVMsQ0FBQ3VZLFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDdlksU0FBUyxFQUFFO1FBQzFEO01BQ0o7TUFDQSxJQUFJLENBQUNBLFNBQVMsQ0FBQ3lKLFdBQVcsQ0FBQ3NoQixlQUFlLENBQUMvcUIsU0FBUyxDQUFDO0lBQ3pEO0VBQUM7SUFBQWxJLEdBQUE7SUFBQWxHLEtBQUEsRUFDRCxTQUFBd3FCLGNBQWMvbEIsSUFBSSxFQUFxRDtNQUFBLElBQW5EaW1CLE1BQU0sR0FBQWprQixTQUFBLENBQUFwQyxNQUFBLFFBQUFvQyxTQUFBLFFBQUFHLFNBQUEsR0FBQUgsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUFBLElBQUU2eUIsU0FBUyxHQUFBN3lCLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsSUFBSTtNQUFBLElBQUU4eUIsVUFBVSxHQUFBOXlCLFNBQUEsQ0FBQXBDLE1BQUEsUUFBQW9DLFNBQUEsUUFBQUcsU0FBQSxHQUFBSCxTQUFBLE1BQUcsS0FBSztNQUNqRWlrQixNQUFNLENBQUMwTyxVQUFVLEdBQUcsSUFBSTtNQUN4QjFPLE1BQU0sQ0FBQ3RjLFNBQVMsR0FBRyxJQUFJLENBQUM4b0IsZ0JBQWdCO01BQ3hDLElBQUksQ0FBQ3NDLFFBQVEsQ0FBQy8wQixJQUFJLEVBQUU7UUFBRWltQixNQUFNLEVBQU5BLE1BQU07UUFBRWhZLE1BQU0sRUFBRSxNQUFNO1FBQUU2bUIsVUFBVSxFQUFWQSxVQUFVO1FBQUU1TyxPQUFPLEVBQUUyTztNQUFVLENBQUMsQ0FBQztJQUNuRjtFQUFDO0VBQUEsT0FBQXRELHFCQUFBO0FBQUEsRUEzTytCOXJCLDJEQUFVO0FBNk85QzhyQixxQkFBcUIsQ0FBQy96QixNQUFNLEdBQUc7RUFDM0J3QyxJQUFJLEVBQUVzRSxNQUFNO0VBQ1o2a0IsR0FBRyxFQUFFN2tCLE1BQU07RUFDWFAsS0FBSyxFQUFFOUksTUFBTTtFQUNiKzVCLElBQUksRUFBRTF3QixNQUFNO0VBQ1p5YixTQUFTLEVBQUU7SUFBRXJqQixJQUFJLEVBQUU4RyxLQUFLO0lBQUUsV0FBUztFQUFHLENBQUM7RUFDdkNpZSxRQUFRLEVBQUU7SUFBRS9rQixJQUFJLEVBQUVrSSxNQUFNO0lBQUUsV0FBUztFQUFJLENBQUM7RUFDeENrTixFQUFFLEVBQUV4TixNQUFNO0VBQ1YyYixXQUFXLEVBQUU7SUFBRXZqQixJQUFJLEVBQUU0SCxNQUFNO0lBQUUsV0FBUztFQUFHO0FBQzdDLENBQUM7QUFDRGl0QixxQkFBcUIsQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSWQsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3I0RmpFOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmUubWluLmNzcz85NmMwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcyc7XG5cbmltcG9ydCAnLi9zY3JpcHRzL2NoZWNrb3V0LmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJjb25zdCBzdHJpcGUgPSBTdHJpcGUoXCJwa190ZXN0XzUxT0txQ0hFOVZQZmVDR3lQb2tVSE5aQTRHT0I5eG5henNZMHdpazlYWXRLQXNGbWh4bzR0Y0NzM29lRmNqSGxEeHVNbVlBZklLQlpsVThqQ3RDcHBadnpuMDA4VDI3SlZwRlwiKTtcclxuXHJcbmxldCBjbGllbnRTZWNyZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tvdXQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpZW50LXNlY3JldCcpO1xyXG5cclxuaW5pdGlhbGl6ZSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIFxyXG57XHJcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IHN0cmlwZS5pbml0RW1iZWRkZWRDaGVja291dCh7Y2xpZW50U2VjcmV0fSk7XHJcblxyXG4gICAgY2hlY2tvdXQubW91bnQoJyNjaGVja291dCcpO1xyXG59IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgIGxldCBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbmFtZWQ6IGN1cnJlbnROYW1lZEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50cyA9IHt9O1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1peGVkQXJnVHlwZXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm9ybWFsIGFuZCBuYW1lZCBhcmd1bWVudHMgY2Fubm90IGJlIG1peGVkIGluc2lkZSBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcImApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5hbWVkQXJndW1lbnRzW2N1cnJlbnRBcmd1bWVudE5hbWUudHJpbSgpXSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudE5hbWVkQXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG5hbWVkIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgc3RhdGUgPSAnYWN0aW9uJztcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gY29udGVudFtpXTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhZnRlcl9hcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi5wYXJ0LnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKCddJywgJycpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcuJykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdChtb2RlbFZhbHVlKSA9PT0gbW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIE9iamVjdC52YWx1ZXMobW9kZWxWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQgPyBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LnNlbGVjdGVkT3B0aW9ucykubWFwKChlbCkgPT4gZWwudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWU7XG4gICAgfVxuICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWVGb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiB2YWx1ZTtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50LmRhdGFzZXQubW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5tb2RlbCk7XG4gICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDAgfHwgZGlyZWN0aXZlLm5hbWVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2VsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShkaXJlY3RpdmUuYWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhyb3dPbk1pc3NpbmcgPSB0cnVlKSB7XG4gICAgY29uc3QgZGF0YU1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpO1xuICAgIGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGRhdGFNb2RlbERpcmVjdGl2ZXNbMF07XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGlmIChmb3JtRWxlbWVudCAmJiAnbW9kZWwnIGluIGZvcm1FbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbCB8fCAnKicpO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1swXTtcbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7Zm9ybUVsZW1lbnQuZGF0YXNldC5tb2RlbH1cIiBmb3JtYXQgaXMgaW52YWxpZDogaXQgZG9lcyBub3Qgc3VwcG9ydCBwYXNzaW5nIGFyZ3VtZW50cyB0byB0aGUgbW9kZWwuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRocm93T25NaXNzaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZXRlcm1pbmUgdGhlIG1vZGVsIG5hbWUgZm9yIFwiJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfVwiOiB0aGUgZWxlbWVudCBtdXN0IGVpdGhlciBoYXZlIGEgXCJkYXRhLW1vZGVsXCIgKG9yIFwibmFtZVwiIGF0dHJpYnV0ZSBsaXZpbmcgaW5zaWRlIGEgPGZvcm0gZGF0YS1tb2RlbD1cIipcIj4pLmApO1xufVxuZnVuY3Rpb24gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgICBjb21wb25lbnQuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoZm91bmRDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50IHx8IGNoaWxkQ29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICFmb3VuZENoaWxkQ29tcG9uZW50O1xufVxuZnVuY3Rpb24gY2xvbmVIVE1MRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgY2xvbmUgZWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGh0bWxUb0VsZW1lbnQoaHRtbCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBodG1sID0gaHRtbC50cmltKCk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBpZiAodGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgSFRNTCBjb250YWlucyAke3RlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnR9IGVsZW1lbnRzLCBidXQgb25seSAxIHJvb3QgZWxlbWVudCBpcyBhbGxvd2VkLmApO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZCA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENyZWF0ZWQgZWxlbWVudCBpcyBub3QgYW4gSFRNTEVsZW1lbnQ6ICR7aHRtbC50cmltKCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpIHtcbiAgICBjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZmluYWxWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBmaW5hbFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG59O1xuY29uc3QgaW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG59O1xuXG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRMZXZlbERhdGEsIGZpbmFsS2V5IH0gPSBwYXJzZURlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCk7XG4gICAgaWYgKGN1cnJlbnRMZXZlbERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudExldmVsRGF0YVtmaW5hbEtleV07XG59XG5jb25zdCBwYXJzZURlZXBEYXRhID0gZnVuY3Rpb24gKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGxldCBjdXJyZW50TGV2ZWxEYXRhID0gZmluYWxEYXRhO1xuICAgIGNvbnN0IHBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEsXG4gICAgICAgIGZpbmFsRGF0YSxcbiAgICAgICAgZmluYWxLZXksXG4gICAgICAgIHBhcnRzLFxuICAgIH07XG59O1xuXG5jbGFzcyBWYWx1ZVN0b3JlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQobm9ybWFsaXplZE5hbWUpO1xuICAgICAgICBpZiAoY3VycmVudFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHlQcm9wc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldE9yaWdpbmFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgZ2V0RGlydHlQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGlydHlQcm9wcyk7XG4gICAgfVxuICAgIGdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpO1xuICAgIH1cbiAgICBmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kaXJ0eVByb3BzKTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZUFsbFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBlbmRpbmdQcm9wcyksIHRoaXMuZGlydHlQcm9wcyk7XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgfVxuICAgIHN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSB7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHByb3BzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbn1cblxudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcblxuZnVuY3Rpb24gbW9ycGhBdHRycyhmcm9tTm9kZSwgdG9Ob2RlKSB7XG4gICAgdmFyIHRvTm9kZUF0dHJzID0gdG9Ob2RlLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJOYW1lO1xuICAgIHZhciBhdHRyTmFtZXNwYWNlVVJJO1xuICAgIHZhciBhdHRyVmFsdWU7XG4gICAgdmFyIGZyb21WYWx1ZTtcblxuICAgIC8vIGRvY3VtZW50LWZyYWdtZW50cyBkb250IGhhdmUgYXR0cmlidXRlcyBzbyBsZXRzIG5vdCBkbyBhbnl0aGluZ1xuICAgIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgZnJvbU5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSB0b05vZGVBdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhdHRyID0gdG9Ob2RlQXR0cnNbaV07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgIGF0dHJWYWx1ZSA9IGF0dHIudmFsdWU7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyLnByZWZpeCA9PT0gJ3htbG5zJyl7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lOyAvLyBJdCdzIG5vdCBhbGxvd2VkIHRvIHNldCBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgWE1MTlMgbmFtZXNwYWNlIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgYHhtbG5zYCBwcmVmaXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXRcbiAgICAvLyB3ZXJlbid0IGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICB2YXIgZnJvbU5vZGVBdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKHZhciBkID0gZnJvbU5vZGVBdHRycy5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xuICAgICAgICBhdHRyID0gZnJvbU5vZGVBdHRyc1tkXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcblxuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciByYW5nZTsgLy8gQ3JlYXRlIGEgcmFuZ2Ugb2JqZWN0IGZvciBlZmZpY2VudGx5IHJlbmRlcmluZyBzdHJpbmdzIHRvIGVsZW1lbnRzLlxudmFyIE5TX1hIVE1MID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuXG52YXIgZG9jID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xudmFyIEhBU19URU1QTEFURV9TVVBQT1JUID0gISFkb2MgJiYgJ2NvbnRlbnQnIGluIGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudmFyIEhBU19SQU5HRV9TVVBQT1JUID0gISFkb2MgJiYgZG9jLmNyZWF0ZVJhbmdlICYmICdjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQnIGluIGRvYy5jcmVhdGVSYW5nZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKSB7XG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgICByYW5nZSA9IGRvYy5jcmVhdGVSYW5nZSgpO1xuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGRvYy5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyKTtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpIHtcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgIGZyYWdtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFib3V0IHRoZSBzYW1lXG4gKiB2YXIgaHRtbCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gKiByZXR1cm4gaHRtbC5ib2R5LmZpcnN0Q2hpbGQ7XG4gKlxuICogQG1ldGhvZCB0b0VsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqL1xuZnVuY3Rpb24gdG9FbGVtZW50KHN0cikge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgaWYgKEhBU19URU1QTEFURV9TVVBQT1JUKSB7XG4gICAgICAvLyBhdm9pZCByZXN0cmljdGlvbnMgb24gY29udGVudCBmb3IgdGhpbmdzIGxpa2UgYDx0cj48dGg+SGk8L3RoPjwvdHI+YCB3aGljaFxuICAgICAgLy8gY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgLy8gPHRlbXBsYXRlPiBzdXBwb3J0IG5vdCBhdmFpbGFibGUgaW4gSUVcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpO1xuICAgIH0gZWxzZSBpZiAoSEFTX1JBTkdFX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHR3byBub2RlJ3MgbmFtZXMgYXJlIHRoZSBzYW1lLlxuICpcbiAqIE5PVEU6IFdlIGRvbid0IGJvdGhlciBjaGVja2luZyBgbmFtZXNwYWNlVVJJYCBiZWNhdXNlIHlvdSB3aWxsIG5ldmVyIGZpbmQgdHdvIEhUTUwgZWxlbWVudHMgd2l0aCB0aGUgc2FtZVxuICogICAgICAgbm9kZU5hbWUgYW5kIGRpZmZlcmVudCBuYW1lc3BhY2UgVVJJcy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYiBUaGUgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVOb2RlTmFtZXMoZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGZyb21Ob2RlTmFtZSA9IGZyb21FbC5ub2RlTmFtZTtcbiAgICB2YXIgdG9Ob2RlTmFtZSA9IHRvRWwubm9kZU5hbWU7XG4gICAgdmFyIGZyb21Db2RlU3RhcnQsIHRvQ29kZVN0YXJ0O1xuXG4gICAgaWYgKGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmcm9tQ29kZVN0YXJ0ID0gZnJvbU5vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG4gICAgdG9Db2RlU3RhcnQgPSB0b05vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSB2aXJ0dWFsIERPTSBub2RlIG9yIFNWRyBub2RlIHRoZW4gd2UgbWF5XG4gICAgLy8gbmVlZCB0byBub3JtYWxpemUgdGhlIHRhZyBuYW1lIGJlZm9yZSBjb21wYXJpbmcuIE5vcm1hbCBIVE1MIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgLy8gaW4gdGhlIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiXG4gICAgLy8gYXJlIGNvbnZlcnRlZCB0byB1cHBlciBjYXNlXG4gICAgaWYgKGZyb21Db2RlU3RhcnQgPD0gOTAgJiYgdG9Db2RlU3RhcnQgPj0gOTcpIHsgLy8gZnJvbSBpcyB1cHBlciBhbmQgdG8gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAodG9Db2RlU3RhcnQgPD0gOTAgJiYgZnJvbUNvZGVTdGFydCA+PSA5NykgeyAvLyB0byBpcyB1cHBlciBhbmQgZnJvbSBpcyBsb3dlclxuICAgICAgICByZXR1cm4gdG9Ob2RlTmFtZSA9PT0gZnJvbU5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCwgb3B0aW9uYWxseSB3aXRoIGEga25vd24gbmFtZXNwYWNlIFVSSS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgZWxlbWVudCBuYW1lLCBlLmcuICdkaXYnIG9yICdzdmcnXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZVVSSV0gdGhlIGVsZW1lbnQncyBuYW1lc3BhY2UgVVJJLCBpLmUuIHRoZSB2YWx1ZSBvZlxuICogaXRzIGB4bWxuc2AgYXR0cmlidXRlIG9yIGl0cyBpbmZlcnJlZCBuYW1lc3BhY2UuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWUsIG5hbWVzcGFjZVVSSSkge1xuICAgIHJldHVybiAhbmFtZXNwYWNlVVJJIHx8IG5hbWVzcGFjZVVSSSA9PT0gTlNfWEhUTUwgP1xuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudChuYW1lKSA6XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIGNoaWxkcmVuIG9mIG9uZSBET00gZWxlbWVudCB0byBhbm90aGVyIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1vdmVDaGlsZHJlbihmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGN1ckNoaWxkKTtcbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB0b0VsO1xufVxuXG5mdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgbmFtZSkge1xuICAgIGlmIChmcm9tRWxbbmFtZV0gIT09IHRvRWxbbmFtZV0pIHtcbiAgICAgICAgZnJvbUVsW25hbWVdID0gdG9FbFtuYW1lXTtcbiAgICAgICAgaWYgKGZyb21FbFtuYW1lXSkge1xuICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgT1BUSU9OOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBmcm9tRWwucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnROYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlICYmIHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnU0VMRUNUJyAmJiAhcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAmJiAhdG9FbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBNUyBFZGdlIGJ1ZyB3aGVyZSB0aGUgJ3NlbGVjdGVkJyBhdHRyaWJ1dGUgY2FuIG9ubHkgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlZCBpZiBzZXQgdG8gYSBub24tZW1wdHkgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMDg3Njc5L1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHNlbGVjdCBlbGVtZW50J3Mgc2VsZWN0ZWRJbmRleCB0byAtMSwgb3RoZXJ3aXNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBmcm9tRWwuc2VsZWN0ZWQgdXNpbmcgdGhlIHN5bmNCb29sZWFuQXR0clByb3AgYmVsb3cgaGFzIG5vIGVmZmVjdC5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY29ycmVjdCBzZWxlY3RlZEluZGV4IHdpbGwgYmUgc2V0IGluIHRoZSBTRUxFQ1Qgc3BlY2lhbCBoYW5kbGVyIGJlbG93LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnc2VsZWN0ZWQnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBcInZhbHVlXCIgYXR0cmlidXRlIGlzIHNwZWNpYWwgZm9yIHRoZSA8aW5wdXQ+IGVsZW1lbnQgc2luY2UgaXQgc2V0c1xuICAgICAqIHRoZSBpbml0aWFsIHZhbHVlLiBDaGFuZ2luZyB0aGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSB3aXRob3V0IGNoYW5naW5nIHRoZVxuICAgICAqIFwidmFsdWVcIiBwcm9wZXJ0eSB3aWxsIGhhdmUgbm8gZWZmZWN0IHNpbmNlIGl0IGlzIG9ubHkgdXNlZCB0byB0aGUgc2V0IHRoZVxuICAgICAqIGluaXRpYWwgdmFsdWUuICBTaW1pbGFyIGZvciB0aGUgXCJjaGVja2VkXCIgYXR0cmlidXRlLCBhbmQgXCJkaXNhYmxlZFwiLlxuICAgICAqL1xuICAgIElOUFVUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdjaGVja2VkJyk7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnZGlzYWJsZWQnKTtcblxuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSB0b0VsLnZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBURVhUQVJFQTogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBOZWVkZWQgZm9yIElFLiBBcHBhcmVudGx5IElFIHNldHMgdGhlIHBsYWNlaG9sZGVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gbm9kZSB2YWx1ZSBhbmQgdmlzZSB2ZXJzYS4gVGhpcyBpZ25vcmVzIGFuIGVtcHR5IHVwZGF0ZS5cbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IGZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT0gbmV3VmFsdWUgfHwgKCFuZXdWYWx1ZSAmJiBvbGRWYWx1ZSA9PSBmcm9tRWwucGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdENoaWxkLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTRUxFQ1Q6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBsb29wIHRocm91Z2ggY2hpbGRyZW4gb2YgZnJvbUVsLCBub3QgdG9FbCBzaW5jZSBub2RlcyBjYW4gYmUgbW92ZWRcbiAgICAgICAgICAgIC8vIGZyb20gdG9FbCB0byBmcm9tRWwgZGlyZWN0bHkgd2hlbiBtb3JwaGluZy5cbiAgICAgICAgICAgIC8vIEF0IHRoZSB0aW1lIHRoaXMgc3BlY2lhbCBoYW5kbGVyIGlzIGludm9rZWQsIGFsbCBjaGlsZHJlbiBoYXZlIGFscmVhZHkgYmVlbiBtb3JwaGVkXG4gICAgICAgICAgICAvLyBhbmQgYXBwZW5kZWQgdG8gLyByZW1vdmVkIGZyb20gZnJvbUVsLCBzbyB1c2luZyBmcm9tRWwgaGVyZSBpcyBzYWZlIGFuZCBjb3JyZWN0LlxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb3B0Z3JvdXA7XG4gICAgICAgICAgICB2YXIgbm9kZU5hbWU7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gY3VyQ2hpbGQubm9kZU5hbWUgJiYgY3VyQ2hpbGQubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBjdXJDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJDaGlsZC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1ckNoaWxkICYmIG9wdGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcm9tRWwuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgRUxFTUVOVF9OT0RFID0gMTtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEgPSAxMTtcbnZhciBURVhUX05PREUgPSAzO1xudmFyIENPTU1FTlRfTk9ERSA9IDg7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gIGlmIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSkgfHwgbm9kZS5pZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycykge1xuXG4gIHJldHVybiBmdW5jdGlvbiBtb3JwaGRvbShmcm9tTm9kZSwgdG9Ob2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0b05vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZnJvbU5vZGUubm9kZU5hbWUgPT09ICcjZG9jdW1lbnQnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnSFRNTCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICB2YXIgdG9Ob2RlSHRtbCA9IHRvTm9kZTtcbiAgICAgICAgdG9Ob2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgICAgdG9Ob2RlLmlubmVySFRNTCA9IHRvTm9kZUh0bWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b05vZGUgPSB0b0VsZW1lbnQodG9Ob2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRvTm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxKSB7XG4gICAgICB0b05vZGUgPSB0b05vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuXG4gICAgdmFyIGdldE5vZGVLZXkgPSBvcHRpb25zLmdldE5vZGVLZXkgfHwgZGVmYXVsdEdldE5vZGVLZXk7XG4gICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVBZGRlZCB8fCBub29wO1xuICAgIHZhciBvbk5vZGVBZGRlZCA9IG9wdGlvbnMub25Ob2RlQWRkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVFbFVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uRWxVcGRhdGVkID0gb3B0aW9ucy5vbkVsVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZU5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBvbk5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIHx8IG5vb3A7XG4gICAgdmFyIHNraXBGcm9tQ2hpbGRyZW4gPSBvcHRpb25zLnNraXBGcm9tQ2hpbGRyZW4gfHwgbm9vcDtcbiAgICB2YXIgYWRkQ2hpbGQgPSBvcHRpb25zLmFkZENoaWxkIHx8IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpeyByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTsgfTtcbiAgICB2YXIgY2hpbGRyZW5Pbmx5ID0gb3B0aW9ucy5jaGlsZHJlbk9ubHkgPT09IHRydWU7XG5cbiAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIGFzIGEgbG9va3VwIHRvIHF1aWNrbHkgZmluZCBhbGwga2V5ZWQgZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgIHZhciBmcm9tTm9kZXNMb29rdXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBrZXllZFJlbW92YWxMaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRLZXllZFJlbW92YWwoa2V5KSB7XG4gICAgICBrZXllZFJlbW92YWxMaXN0LnB1c2goa2V5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcykge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuXG4gICAgICAgICAgdmFyIGtleSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmIChza2lwS2V5ZWROb2RlcyAmJiAoa2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCkpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgc2tpcHBpbmcga2V5ZWQgbm9kZXMgdGhlbiB3ZSBhZGQgdGhlIGtleVxuICAgICAgICAgICAgLy8gdG8gYSBsaXN0IHNvIHRoYXQgaXQgY2FuIGJlIGhhbmRsZWQgYXQgdGhlIHZlcnkgZW5kLlxuICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVwb3J0IHRoZSBub2RlIGFzIGRpc2NhcmRlZCBpZiBpdCBpcyBub3Qga2V5ZWQuIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCB3ZSBsb29wIHRocm91Z2ggYWxsIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSB1bm1hdGNoZWRcbiAgICAgICAgICAgIC8vIGFuZCB0aGVuIGRpc2NhcmQgdGhlbSBpbiBvbmUgZmluYWwgcGFzcy5cbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICBpZiAoY3VyQ2hpbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyhjdXJDaGlsZCwgc2tpcEtleWVkTm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgYSBET00gbm9kZSBvdXQgb2YgdGhlIG9yaWdpbmFsIERPTVxuICAgICpcbiAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gICAgKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnROb2RlIFRoZSBub2RlcyBwYXJlbnRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNraXBLZXllZE5vZGVzIElmIHRydWUgdGhlbiBlbGVtZW50cyB3aXRoIGtleXMgd2lsbCBiZSBza2lwcGVkIGFuZCBub3QgZGlzY2FyZGVkLlxuICAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCBwYXJlbnROb2RlLCBza2lwS2V5ZWROb2Rlcykge1xuICAgICAgaWYgKG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgfVxuXG4gICAgLy8gLy8gVHJlZVdhbGtlciBpbXBsZW1lbnRhdGlvbiBpcyBubyBmYXN0ZXIsIGJ1dCBrZWVwaW5nIHRoaXMgYXJvdW5kIGluIGNhc2UgdGhpcyBjaGFuZ2VzIGluIHRoZSBmdXR1cmVcbiAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUocm9vdCkge1xuICAgIC8vICAgICB2YXIgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgLy8gICAgICAgICByb290LFxuICAgIC8vICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgIC8vXG4gICAgLy8gICAgIHZhciBlbDtcbiAgICAvLyAgICAgd2hpbGUoKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyAvLyBOb2RlSXRlcmF0b3IgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgIC8vICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAvLyAgICAgdmFyIGVsO1xuICAgIC8vICAgICB3aGlsZSgoZWwgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxKSB7XG4gICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgIGluZGV4VHJlZShjdXJDaGlsZCk7XG5cbiAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXhUcmVlKGZyb21Ob2RlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vZGVBZGRlZChlbCkge1xuICAgICAgb25Ob2RlQWRkZWQoZWwpO1xuXG4gICAgICB2YXIgY3VyQ2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHZhciB1bm1hdGNoZWRGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBba2V5XTtcbiAgICAgICAgICAvLyBpZiB3ZSBmaW5kIGEgZHVwbGljYXRlICNpZCBub2RlIGluIGNhY2hlLCByZXBsYWNlIGBlbGAgd2l0aCBjYWNoZSB2YWx1ZVxuICAgICAgICAgIC8vIGFuZCBtb3JwaCBpdCB0byB0aGUgY2hpbGQgbm9kZS5cbiAgICAgICAgICBpZiAodW5tYXRjaGVkRnJvbUVsICYmIGNvbXBhcmVOb2RlTmFtZXMoY3VyQ2hpbGQsIHVubWF0Y2hlZEZyb21FbCkpIHtcbiAgICAgICAgICAgIGN1ckNoaWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgICAgbW9ycGhFbCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2FsbCBmb3IgY3VyQ2hpbGQgYW5kIGl0J3MgY2hpbGRyZW4gdG8gc2VlIGlmIHdlIGZpbmQgc29tZXRoaW5nIGluXG4gICAgICAgICAgLy8gZnJvbU5vZGVzTG9va3VwXG4gICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckNoaWxkID0gbmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIFwidG8gbm9kZXNcIi4gSWYgY3VyRnJvbU5vZGVDaGlsZCBpc1xuICAgICAgLy8gbm9uLW51bGwgdGhlbiB3ZSBzdGlsbCBoYXZlIHNvbWUgZnJvbSBub2RlcyBsZWZ0IG92ZXIgdGhhdCBuZWVkXG4gICAgICAvLyB0byBiZSByZW1vdmVkXG4gICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICB2YXIgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgaWYgKChjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCkpKSB7XG4gICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vcnBoRWwoZnJvbUVsLCB0b0VsLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgIHZhciB0b0VsS2V5ID0gZ2V0Tm9kZUtleSh0b0VsKTtcblxuICAgICAgaWYgKHRvRWxLZXkpIHtcbiAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAvLyBET00gc28gY2xlYXIgaXQgb3V0IG9mIHRoZSBzYXZlZCBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICAgIGRlbGV0ZSBmcm9tTm9kZXNMb29rdXBbdG9FbEtleV07XG4gICAgICB9XG5cbiAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIGlmIChvbkJlZm9yZUVsVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVzIG9uIG9yaWdpbmFsIERPTSBlbGVtZW50IGZpcnN0XG4gICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgb25FbFVwZGF0ZWQoZnJvbUVsKTtcblxuICAgICAgICBpZiAob25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwZWNpYWxFbEhhbmRsZXJzLlRFWFRBUkVBKGZyb21FbCwgdG9FbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgIHZhciBza2lwRnJvbSA9IHNraXBGcm9tQ2hpbGRyZW4oZnJvbUVsKTtcbiAgICAgIHZhciBjdXJUb05vZGVDaGlsZCA9IHRvRWwuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgY3VyVG9Ob2RlS2V5O1xuICAgICAgdmFyIGN1ckZyb21Ob2RlS2V5O1xuXG4gICAgICB2YXIgZnJvbU5leHRTaWJsaW5nO1xuICAgICAgdmFyIHRvTmV4dFNpYmxpbmc7XG4gICAgICB2YXIgbWF0Y2hpbmdGcm9tRWw7XG5cbiAgICAgIC8vIHdhbGsgdGhlIGNoaWxkcmVuXG4gICAgICBvdXRlcjogd2hpbGUgKGN1clRvTm9kZUNoaWxkKSB7XG4gICAgICAgIHRvTmV4dFNpYmxpbmcgPSBjdXJUb05vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgY3VyVG9Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgLy8gd2FsayB0aGUgZnJvbU5vZGUgY2hpbGRyZW4gYWxsIHRoZSB3YXkgdGhyb3VnaFxuICAgICAgICB3aGlsZSAoIXNraXBGcm9tICYmIGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgaWYgKGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUgJiYgY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZShjdXJGcm9tTm9kZUNoaWxkKSkge1xuICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgIHZhciBjdXJGcm9tTm9kZVR5cGUgPSBjdXJGcm9tTm9kZUNoaWxkLm5vZGVUeXBlO1xuXG4gICAgICAgICAgLy8gdGhpcyBtZWFucyBpZiB0aGUgY3VyRnJvbU5vZGVDaGlsZCBkb2VzbnQgaGF2ZSBhIG1hdGNoIHdpdGggdGhlIGN1clRvTm9kZUNoaWxkXG4gICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IGN1clRvTm9kZUNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgRWxlbWVudCBub2Rlc1xuXG4gICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdGFyZ2V0IG5vZGUgaGFzIGEga2V5IHNvIHdlIHdhbnQgdG8gbWF0Y2ggaXQgdXAgd2l0aCB0aGUgY29ycmVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAhPT0gY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZyBrZXkgc29cbiAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGNoZWNrIG91ciBsb29rdXAgdG8gc2VlIGlmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgIC8vIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICBpZiAoKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tTmV4dFNpYmxpbmcgPT09IG1hdGNoaW5nRnJvbUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBzaW5nbGUgZWxlbWVudCByZW1vdmFscy4gVG8gYXZvaWQgcmVtb3ZpbmcgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIG5vZGUgb3V0IG9mIHRoZSB0cmVlIChzaW5jZSB0aGF0IGNhbiBicmVhayBDU1MgdHJhbnNpdGlvbnMsIGV0Yy4pLFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgaW5zdGVhZCBkaXNjYXJkIHRoZSBjdXJyZW50IG5vZGUgYW5kIHdhaXQgdW50aWwgdGhlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gdG8gcHJvcGVybHkgbWF0Y2ggdXAgdGhlIGtleWVkIHRhcmdldCBlbGVtZW50IHdpdGggaXRzIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgbWF0Y2hpbmcga2V5ZWQgZWxlbWVudCBzb21ld2hlcmUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIExldCdzIG1vdmUgdGhlIG9yaWdpbmFsIERPTSBub2RlIGludG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIG1vcnBoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaXQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBXZSB1c2UgaW5zZXJ0QmVmb3JlIGluc3RlYWQgb2YgcmVwbGFjZUNoaWxkIGJlY2F1c2Ugd2Ugd2FudCB0byBnbyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGByZW1vdmVOb2RlKClgIGZ1bmN0aW9uIGZvciB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGRpc2NhcmRlZCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIGxpZmVjeWNsZSBob29rcyBhcmUgY29ycmVjdGx5IGludm9rZWRcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5zZXJ0QmVmb3JlKG1hdGNoaW5nRnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IG1hdGNoaW5nRnJvbUVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbm9kZXMgYXJlIG5vdCBjb21wYXRpYmxlIHNpbmNlIHRoZSBcInRvXCIgbm9kZSBoYXMgYSBrZXkgYW5kIHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIG5vIG1hdGNoaW5nIGtleWVkIG5vZGUgaW4gdGhlIHNvdXJjZSB0cmVlXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBvcmlnaW5hbCBoYXMgYSBrZXlcbiAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGlzQ29tcGF0aWJsZSAhPT0gZmFsc2UgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBjb21wYXRpYmxlIERPTSBlbGVtZW50cyBzbyB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBcImZyb21cIiBub2RlIHRvIG1hdGNoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0IERPTSBub2RlLlxuICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBjdXJGcm9tTm9kZVR5cGUgPT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIFRleHQgb3IgQ29tbWVudCBub2Rlc1xuICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAvLyBTaW1wbHkgdXBkYXRlIG5vZGVWYWx1ZSBvbiB0aGUgb3JpZ2luYWwgbm9kZSB0b1xuICAgICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgdmFsdWVcbiAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlICE9PSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSA9IGN1clRvTm9kZUNoaWxkLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgLy8gQWR2YW5jZSBib3RoIHRoZSBcInRvXCIgY2hpbGQgYW5kIHRoZSBcImZyb21cIiBjaGlsZCBzaW5jZSB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgICAgICAgICAvLyBOb3RoaW5nIGVsc2UgdG8gZG8gYXMgd2UgYWxyZWFkeSByZWN1cnNpdmVseSBjYWxsZWQgbW9ycGhDaGlsZHJlbiBhYm92ZVxuICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE5vIGNvbXBhdGlibGUgbWF0Y2ggc28gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBET00gYW5kIGNvbnRpbnVlIHRyeWluZyB0byBmaW5kIGFcbiAgICAgICAgICAvLyBtYXRjaCBpbiB0aGUgb3JpZ2luYWwgRE9NLiBIb3dldmVyLCB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIGZyb20gbm9kZSBpcyBub3Qga2V5ZWRcbiAgICAgICAgICAvLyBzaW5jZSBpdCBpcyBwb3NzaWJsZSB0aGF0IGEga2V5ZWQgbm9kZSBtaWdodCBtYXRjaCB1cCB3aXRoIGEgbm9kZSBzb21ld2hlcmUgZWxzZSBpbiB0aGVcbiAgICAgICAgICAvLyB0YXJnZXQgdHJlZSBhbmQgd2UgZG9uJ3Qgd2FudCB0byBkaXNjYXJkIGl0IGp1c3QgeWV0IHNpbmNlIGl0IHN0aWxsIG1pZ2h0IGZpbmQgYVxuICAgICAgICAgIC8vIGhvbWUgaW4gdGhlIGZpbmFsIERPTSB0cmVlLiBBZnRlciBldmVyeXRoaW5nIGlzIGRvbmUgd2Ugd2lsbCByZW1vdmUgYW55IGtleWVkIG5vZGVzXG4gICAgICAgICAgLy8gdGhhdCBkaWRuJ3QgZmluZCBhIGhvbWVcbiAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgfSAvLyBFTkQ6IHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHt9XG5cbiAgICAgICAgLy8gSWYgd2UgZ290IHRoaXMgZmFyIHRoZW4gd2UgZGlkIG5vdCBmaW5kIGEgY2FuZGlkYXRlIG1hdGNoIGZvclxuICAgICAgICAvLyBvdXIgXCJ0byBub2RlXCIgYW5kIHdlIGV4aGF1c3RlZCBhbGwgb2YgdGhlIGNoaWxkcmVuIFwiZnJvbVwiXG4gICAgICAgIC8vIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdCBhcHBlbmQgdGhlIGN1cnJlbnQgXCJ0b1wiIG5vZGVcbiAgICAgICAgLy8gdG8gdGhlIGVuZFxuICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICYmIChtYXRjaGluZ0Zyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtjdXJUb05vZGVLZXldKSAmJiBjb21wYXJlTm9kZU5hbWVzKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCkpIHtcbiAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgIGlmKCFza2lwRnJvbSl7IGFkZENoaWxkKGZyb21FbCwgbWF0Y2hpbmdGcm9tRWwpOyB9XG4gICAgICAgICAgbW9ycGhFbChtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCA9IG9uQmVmb3JlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZSkge1xuICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZShmcm9tRWwub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkQ2hpbGQoZnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KTtcblxuICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwubm9kZU5hbWVdO1xuICAgICAgaWYgKHNwZWNpYWxFbEhhbmRsZXIpIHtcbiAgICAgICAgc3BlY2lhbEVsSGFuZGxlcihmcm9tRWwsIHRvRWwpO1xuICAgICAgfVxuICAgIH0gLy8gRU5EOiBtb3JwaENoaWxkcmVuKC4uLilcblxuICAgIHZhciBtb3JwaGVkTm9kZSA9IGZyb21Ob2RlO1xuICAgIHZhciBtb3JwaGVkTm9kZVR5cGUgPSBtb3JwaGVkTm9kZS5ub2RlVHlwZTtcbiAgICB2YXIgdG9Ob2RlVHlwZSA9IHRvTm9kZS5ub2RlVHlwZTtcblxuICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgYXJlIGdpdmVuIHR3byBET00gbm9kZXMgdGhhdCBhcmUgbm90XG4gICAgICAvLyBjb21wYXRpYmxlIChlLmcuIDxkaXY+IC0tPiA8c3Bhbj4gb3IgPGRpdj4gLS0+IFRFWFQpXG4gICAgICBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIGlmICghY29tcGFyZU5vZGVOYW1lcyhmcm9tTm9kZSwgdG9Ob2RlKSkge1xuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW92ZUNoaWxkcmVuKGZyb21Ob2RlLCBjcmVhdGVFbGVtZW50TlModG9Ob2RlLm5vZGVOYW1lLCB0b05vZGUubmFtZXNwYWNlVVJJKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBURVhUX05PREUgfHwgbW9ycGhlZE5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHsgLy8gVGV4dCBvciBjb21tZW50IG5vZGVcbiAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IG1vcnBoZWROb2RlVHlwZSkge1xuICAgICAgICAgIGlmIChtb3JwaGVkTm9kZS5ub2RlVmFsdWUgIT09IHRvTm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgIG1vcnBoZWROb2RlLm5vZGVWYWx1ZSA9IHRvTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1vcnBoZWROb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRleHQgbm9kZSB0byBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vcnBoZWROb2RlID09PSB0b05vZGUpIHtcbiAgICAgIC8vIFRoZSBcInRvIG5vZGVcIiB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgXCJmcm9tIG5vZGVcIiBzbyB3ZSBoYWQgdG9cbiAgICAgIC8vIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9Ob2RlLmlzU2FtZU5vZGUgJiYgdG9Ob2RlLmlzU2FtZU5vZGUobW9ycGhlZE5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBjaGlsZHJlbk9ubHkpO1xuXG4gICAgICAvLyBXZSBub3cgbmVlZCB0byBsb29wIG92ZXIgYW55IGtleWVkIG5vZGVzIHRoYXQgbWlnaHQgbmVlZCB0byBiZVxuICAgICAgLy8gcmVtb3ZlZC4gV2Ugb25seSBkbyB0aGUgcmVtb3ZhbCBpZiB3ZSBrbm93IHRoYXQgdGhlIGtleWVkIG5vZGVcbiAgICAgIC8vIG5ldmVyIGZvdW5kIGEgbWF0Y2guIFdoZW4gYSBrZXllZCBub2RlIGlzIG1hdGNoZWQgdXAgd2UgcmVtb3ZlXG4gICAgICAvLyBpdCBvdXQgb2YgZnJvbU5vZGVzTG9va3VwIGFuZCB3ZSB1c2UgZnJvbU5vZGVzTG9va3VwIHRvIGRldGVybWluZVxuICAgICAgLy8gaWYgYSBrZXllZCBub2RlIGhhcyBiZWVuIG1hdGNoZWQgdXAgb3Igbm90XG4gICAgICBpZiAoa2V5ZWRSZW1vdmFsTGlzdCkge1xuICAgICAgICBmb3IgKHZhciBpPTAsIGxlbj1rZXllZFJlbW92YWxMaXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICAgIHZhciBlbFRvUmVtb3ZlID0gZnJvbU5vZGVzTG9va3VwW2tleWVkUmVtb3ZhbExpc3RbaV1dO1xuICAgICAgICAgIGlmIChlbFRvUmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmVOb2RlKGVsVG9SZW1vdmUsIGVsVG9SZW1vdmUucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAobW9ycGhlZE5vZGUuYWN0dWFsaXplKSB7XG4gICAgICAgIG1vcnBoZWROb2RlID0gbW9ycGhlZE5vZGUuYWN0dWFsaXplKGZyb21Ob2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgLy8gcmVwbGFjZSB0aGUgb2xkIERPTSBub2RlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS4gVGhpcyBpcyBvbmx5XG4gICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgIGZyb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1vcnBoZWROb2RlLCBmcm9tTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vcnBoZWROb2RlO1xuICB9O1xufVxuXG52YXIgbW9ycGhkb20gPSBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpc0ZpbGVJbnB1dCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIGlmICghaXNGaWxlSW5wdXQpIHtcbiAgICAgICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGNoaWxkQ29tcG9uZW50cywgZmluZENoaWxkQ29tcG9uZW50LCBnZXRLZXlGcm9tRWxlbWVudCwgZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpIHtcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjaGlsZENvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgY2hpbGRDb21wb25lbnRNYXAuc2V0KGNoaWxkQ29tcG9uZW50LmVsZW1lbnQsIGNoaWxkQ29tcG9uZW50KTtcbiAgICB9KTtcbiAgICBtb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIHtcbiAgICAgICAgZ2V0Tm9kZUtleTogKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhZGRlZF9lbGVtZW50XycgKyBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEtleUZyb21FbGVtZW50KG5vZGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZUVsVXBkYXRlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tRWwuX194ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5BbHBpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuQWxwaW5lLm1vcnBoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIG1vcnBoIGZ1bmN0aW9uLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBBbHBpbmUuanMgTW9ycGggcGx1Z2luIGlzIGluc3RhbGxlZCBhbmQgbG9hZGVkLCBzZWUgaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy9tb3JwaCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQWxwaW5lLm1vcnBoKGZyb21FbC5fX3gsIHRvRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnRNYXAuaGFzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSBjaGlsZENvbXBvbmVudE1hcC5nZXQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnQudXBkYXRlRnJvbU5ld0VsZW1lbnRGcm9tUGFyZW50UmVuZGVyKHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkRWxlbWVudHMuaW5jbHVkZXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRDaGFuZ2VzID0gZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuZ2V0Q2hhbmdlZEVsZW1lbnQoZnJvbUVsKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ09QVElPTicgJiYgZnJvbUVsLmlzRXF1YWxOb2RlKHRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkVG9FbCA9IGNsb25lSFRNTEVsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIWZyb21FbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoYW5naW5nSXRlbXNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFJlY29yZCA9IHRoaXMucmVtb3ZlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHJlbW92ZWRSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogcHJldmlvdXNWYWx1ZSwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGxldCB0cnVlT3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRydWVPcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxSZWNvcmQub3JpZ2luYWw7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VkSXRlbXMucHVzaCh7IG5hbWU6IGtleSwgdmFsdWU6IHZhbHVlLm5ldyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VkSXRlbXM7XG4gICAgfVxuICAgIGdldFJlbW92ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVtb3ZlZEl0ZW1zO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkSXRlbXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnJlbW92ZWRJdGVtcy5zaXplID09PSAwO1xuICAgIH1cbn1cblxuY2xhc3MgRWxlbWVudENoYW5nZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZGVkQ2xhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzID0gW107XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlZENsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3NlcyA9IHRoaXMucmVtb3ZlZENsYXNzZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hZGRlZENsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5hZGRlZENsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSB0aGlzLmFkZGVkQ2xhc3Nlcy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IGNsYXNzTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFN0eWxlKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMuc2V0SXRlbShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgcmVtb3ZlU3R5bGUoc3R5bGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnJlbW92ZUl0ZW0oc3R5bGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5zZXRJdGVtKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnJlbW92ZUl0ZW0oYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGdldEFkZGVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRDbGFzc2VzO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlZENsYXNzZXM7XG4gICAgfVxuICAgIGdldENoYW5nZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWRkZWRDbGFzc2VzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmlzRW1wdHkoKSAmJlxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKSk7XG4gICAgfVxufVxuXG5jbGFzcyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrID0gc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuICAgIH1cbiAgICBnZXRBZGRlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzO1xuICAgIH1cbiAgICB3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpO1xuICAgIH1cbiAgICBoYW5kbGVQZW5kaW5nQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRlZEVsZW1lbnQgb2YgdGhpcy5hZGRlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkRWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCkuaW5jbHVkZXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMuc3BsaWNlKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gcHJldmlvdXNWYWx1ZSA/IHByZXZpb3VzVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xuICAgICAgICBwcmV2aW91c1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0cmltbWVkVmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZXNbaW5kZXhdID0gdHJpbW1lZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICBjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFZhbHVlcyA9IHByZXZpb3VzVmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFuZXdWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgYWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMocHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IE9iamVjdC5rZXlzKHByZXZpb3VzU3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gIW5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgYWRkZWRPckNoYW5nZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZFN0eWxlKHN0eWxlLCBuZXdTdHlsZXNbc3R5bGVdLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlU3R5bGUoc3R5bGUsIHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgfVxuICAgIGV4dHJhY3RTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIHN0eWxlcy5zcGxpdCgnOycpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBwYXJ0c1swXS50cmltKCk7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtwcm9wZXJ0eV0gPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICBpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSAnRk9OVCcgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPT09ICd2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsnO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hpbGRDb21wb25lbnRXcmFwcGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsQmluZGluZ3MpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxCaW5kaW5ncyA9IG1vZGVsQmluZGluZ3M7XG4gICAgfVxufVxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBjb21wb25lbnRGaW5kZXIsIGZpbmdlcnByaW50LCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmRlZmF1bHREZWJvdW5jZSA9IDE1MDtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRGaW5kZXIgPSBjb21wb25lbnRGaW5kZXI7XG4gICAgICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgICAgIHRoaXMuZWxlbWVudERyaXZlciA9IGVsZW1lbnREcml2ZXI7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsaXN0ZW5lci5ldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKGxpc3RlbmVyLmFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZShwcm9wcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyID0gbmV3IFVuc3luY2VkSW5wdXRzVHJhY2tlcih0aGlzLCBlbGVtZW50RHJpdmVyKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBIb29rTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyID0gbmV3IEV4dGVybmFsTXV0YXRpb25UcmFja2VyKHRoaXMuZWxlbWVudCwgKGVsZW1lbnQpID0+IGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMpKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSA9IHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIF9zd2FwQmFja2VuZChiYWNrZW5kKSB7XG4gICAgICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgfVxuICAgIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgIH1cbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdtb2RlbDpzZXQnLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgICAgICBpZiAocmVSZW5kZXIgJiYgaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldERhdGEobW9kZWwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgYWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZmlsZXMoa2V5LCBpbnB1dCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gaW5wdXQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnRyeVN0YXJ0aW5nUmVxdWVzdCgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZE1vZGVscygpO1xuICAgIH1cbiAgICBhZGRDaGlsZChjaGlsZCwgbW9kZWxCaW5kaW5ncyA9IFtdKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zZXQoY2hpbGQuaWQsIG5ldyBDaGlsZENvbXBvbmVudFdyYXBwZXIoY2hpbGQsIG1vZGVsQmluZGluZ3MpKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgY2hpbGQub24oJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbiBjb21wb25lbnRzIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZShjaGlsZC5pZCk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgIGNoaWxkLm9mZignbW9kZWw6c2V0JywgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUpO1xuICAgIH1cbiAgICBnZXRQYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkQ29tcG9uZW50LCBpZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGRyZW4uc2V0KGlkLCBjaGlsZENvbXBvbmVudC5jb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cbiAgICBlbWl0KG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRVcChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG4gICAgfVxuICAgIGVtaXRTZWxmKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgIH1cbiAgICBwZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRGaW5kZXIodGhpcywgZW1pdFVwLCBtYXRjaGluZ05hbWUpO1xuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRvRW1pdChuYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKSB8fCBbXTtcbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uKGFjdGlvbiwgZGF0YSwgMSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVGcm9tTmV3RWxlbWVudEZyb21QYXJlbnRSZW5kZXIodG9FbCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcyh0b0VsKTtcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKTtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSB0b0VsLmRhdGFzZXQubGl2ZUZpbmdlcnByaW50VmFsdWU7XG4gICAgICAgIGlmIChmaW5nZXJwcmludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUobW9kZWxOYW1lLCB2YWx1ZSwgY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRXcmFwcGVyID0gdGhpcy5jaGlsZHJlbi5nZXQoY2hpbGRDb21wb25lbnQuaWQpO1xuICAgICAgICBpZiAoIWNoaWxkV3JhcHBlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNoaWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRXcmFwcGVyLm1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCB2YWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVHVyYm9FbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIFR1cmJvICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXR1cmJvPVwiZmFsc2VcIl0nKTtcbiAgICB9XG4gICAgdHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwZXJmb3JtUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgdGhpc1Byb21pc2VSZXNvbHZlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5yZXNldFVuc3luY2VkRmllbGRzKCk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9TZW5kID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgZmlsZXNUb1NlbmRba2V5XSA9IHZhbHVlLmZpbGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QodGhpcy52YWx1ZVN0b3JlLmdldE9yaWdpbmFsUHJvcHMoKSwgdGhpcy5wZW5kaW5nQWN0aW9ucywgdGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSwgdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpLCB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLCBmaWxlc1RvU2VuZCk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLmZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRSZXNwb25zZSA9IG5ldyBCYWNrZW5kUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgIGlmIChoZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgIT09ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcgJiYgIWhlYWRlcnMuZ2V0KCdYLUxpdmUtUmVkaXJlY3QnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBkaXNwbGF5RXJyb3I6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlU3RvcmUucHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVzcG9uc2U6ZXJyb3InLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbHMuZGlzcGxheUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRXJyb3IoaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBzaG91bGRSZW5kZXI6IHRydWUgfTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOnN0YXJ0ZWQnLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKCFjb250cm9scy5zaG91bGRSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1R1cmJvRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RpZmllZE1vZGVsVmFsdWVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcbiAgICAgICAgICAgIGlmICghbmV3RWxlbWVudC5tYXRjaGVzKCdbZGF0YS1jb250cm9sbGVyfj1saXZlXScpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGxpdmUgY29tcG9uZW50IHRlbXBsYXRlIG11c3QgY29udGFpbiBhIHNpbmdsZSByb290IGNvbnRyb2xsZXIgZWxlbWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgY29tcG9uZW50IEhUTUwgcmV0dXJuZWQ6Jyk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRDb21wb25lbnRQcm9wcyhuZXdFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZUFsbFByb3BzKG5ld1Byb3BzKTtcbiAgICAgICAgY29uc3QgZXZlbnRzVG9FbWl0ID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEV2ZW50c1RvRW1pdChuZXdFbGVtZW50KTtcbiAgICAgICAgY29uc3QgYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2ggPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2gobmV3RWxlbWVudCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuaGFuZGxlUGVuZGluZ0NoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdG9wKCk7XG4gICAgICAgIGV4ZWN1dGVNb3JwaGRvbSh0aGlzLmVsZW1lbnQsIG5ld0VsZW1lbnQsIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkSW5wdXRzKCksIChlbGVtZW50KSA9PiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWVTdG9yZSksIEFycmF5LmZyb20odGhpcy5nZXRDaGlsZHJlbigpLnZhbHVlcygpKSwgdGhpcy5lbGVtZW50RHJpdmVyLmZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQsIHRoaXMuZWxlbWVudERyaXZlci5nZXRLZXlGcm9tRWxlbWVudCwgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlcik7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kaWZpZWRNb2RlbFZhbHVlcykuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgbW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50c1RvRW1pdC5mb3JFYWNoKCh7IGV2ZW50LCBkYXRhLCB0YXJnZXQsIGNvbXBvbmVudE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFVwKGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRTZWxmKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2guZm9yRWFjaCgoeyBldmVudCwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpmaW5pc2hlZCcsIHRoaXMpO1xuICAgIH1cbiAgICBjYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkge1xuICAgICAgICBpZiAoZGVib3VuY2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHREZWJvdW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVib3VuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVib3VuY2U7XG4gICAgfVxuICAgIGNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSkge1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCB0aGlzLmNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSk7XG4gICAgfVxuICAgIHJlbmRlckVycm9yKGh0bWwpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmUtY29tcG9uZW50LWVycm9yJyk7XG4gICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW9kYWwuaWQgPSAnbGl2ZS1jb21wb25lbnQtZXJyb3InO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucGFkZGluZyA9ICc1MHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC41KSc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS56SW5kZXggPSAnMTAwMDAwJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZmxleEdyb3cgPSAnMSc7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChtb2RhbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShodG1sKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwub3V0ZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgICAgICB9O1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwobW9kYWwpKTtcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICAgIGdldENoaWxkcmVuRmluZ2VycHJpbnRzKCkge1xuICAgICAgICBjb25zdCBmaW5nZXJwcmludHMgPSB7fTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZENvbXBvbmVudC5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5nZXJwcmludHNbY2hpbGQuaWRdID0ge1xuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBjaGlsZC5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICB0YWc6IGNoaWxkLmVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaW5nZXJwcmludHM7XG4gICAgfVxuICAgIHJlc2V0UHJvbWlzZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcHJveGlmeUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KGNvbXBvbmVudCwge1xuICAgICAgICBnZXQoY29tcG9uZW50LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjb21wb25lbnQgfHwgdHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSBjb21wb25lbnRbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxhYmxlLmFwcGx5KGNvbXBvbmVudCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldChjb21wb25lbnQsIHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuZ2V0RGF0YShwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgW3Byb3AsIGFyZ3NdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5zZXQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBCYWNrZW5kUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IocHJvbWlzZSwgYWN0aW9ucywgdXBkYXRlTW9kZWxzKSB7XG4gICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICB0aGlzLnByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVNb2RlbHM7XG4gICAgfVxuICAgIGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmZpbHRlcigoYWN0aW9uKSA9PiB0YXJnZXRlZEFjdGlvbnMuaW5jbHVkZXMoYWN0aW9uKSkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbmNsYXNzIFJlcXVlc3RCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY3NyZlRva2VuID0gY3NyZlRva2VuO1xuICAgIH1cbiAgICBidWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgICAgICBjb25zdCBzcGxpdFVybCA9IHRoaXMudXJsLnNwbGl0KCc/Jyk7XG4gICAgICAgIGxldCBbdXJsXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBbLCBxdWVyeVN0cmluZ10gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyB8fCAnJyk7XG4gICAgICAgIGNvbnN0IGZldGNoT3B0aW9ucyA9IHt9O1xuICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJyxcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdG90YWxGaWxlcyA9IE9iamVjdC5lbnRyaWVzKGZpbGVzKS5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbCArIGN1cnJlbnQubGVuZ3RoLCAwKTtcbiAgICAgICAgY29uc3QgaGFzRmluZ2VycHJpbnRzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgdG90YWxGaWxlcyA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KHByb3BzKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCksIHBhcmFtcywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzJywgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3VwZGF0ZWQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3Byb3BzRnJvbVBhcmVudCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdjaGlsZHJlbicsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7IHByb3BzLCB1cGRhdGVkIH07XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlZFByb3BzRnJvbVBhcmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLnByb3BzRnJvbVBhcmVudCA9IHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbiAmJlxuICAgICAgICAgICAgICAgIChhY3Rpb25zLmxlbmd0aCB8fCB0b3RhbEZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRoaXMuY3NyZlRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy9fYmF0Y2gnO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IGZvcm1EYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiBgJHt1cmx9JHtwYXJhbXNTdHJpbmcubGVuZ3RoID4gMCA/IGA/JHtwYXJhbXNTdHJpbmd9YCA6ICcnfWAsXG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHdpbGxEYXRhRml0SW5VcmwocHJvcHNKc29uLCB1cGRhdGVkSnNvbiwgcGFyYW1zLCBjaGlsZHJlbkpzb24sIHByb3BzRnJvbVBhcmVudEpzb24pIHtcbiAgICAgICAgY29uc3QgdXJsRW5jb2RlZEpzb25EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwcm9wc0pzb24gKyB1cGRhdGVkSnNvbiArIGNoaWxkcmVuSnNvbiArIHByb3BzRnJvbVBhcmVudEpzb24pLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiAodXJsRW5jb2RlZEpzb25EYXRhICsgcGFyYW1zLnRvU3RyaW5nKCkpLmxlbmd0aCA8IDE1MDA7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGNzcmZUb2tlbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0QnVpbGRlciA9IG5ldyBSZXF1ZXN0QnVpbGRlcih1cmwsIGNzcmZUb2tlbik7XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG4gICAgICAgIHJldHVybiBuZXcgQmFja2VuZFJlcXVlc3QoZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgT2JqZWN0LmtleXModXBkYXRlZCkpO1xuICAgIH1cbn1cblxuY2xhc3MgU3RhbmRhcmRFbGVtZW50RHJpdmVyIHtcbiAgICBnZXRNb2RlbE5hbWUoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgIH1cbiAgICBnZXRDb21wb25lbnRQcm9wcyhyb290RWxlbWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHByb3BzSnNvbiA9IChfYSA9IHJvb3RFbGVtZW50LmRhdGFzZXQubGl2ZVByb3BzVmFsdWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICd7fSc7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb3BzSnNvbik7XG4gICAgfVxuICAgIGZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQoaWQsIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGl2ZS1pZD0ke2lkfV1gKTtcbiAgICB9XG4gICAgZ2V0S2V5RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgIH1cbiAgICBnZXRFdmVudHNUb0VtaXQoZWxlbWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGV2ZW50c0pzb24gPSAoX2EgPSBlbGVtZW50LmRhdGFzZXQubGl2ZUVtaXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdbXSc7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGV2ZW50c0pzb24pO1xuICAgIH1cbiAgICBnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaChlbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZXZlbnRzSnNvbiA9IChfYSA9IGVsZW1lbnQuZGF0YXNldC5saXZlQnJvd3NlckRpc3BhdGNoKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnW10nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShldmVudHNKc29uKTtcbiAgICB9XG59XG5cbmNsYXNzIExvYWRpbmdQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIChlbGVtZW50LCByZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9hZGluZyhlbGVtZW50LCByZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LmVsZW1lbnQpO1xuICAgIH1cbiAgICBzdGFydExvYWRpbmcodGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKHRydWUsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICB9XG4gICAgZmluaXNoTG9hZGluZyh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZShmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdUb2dnbGUoaXNMb2FkaW5nLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldExvYWRpbmdEaXJlY3RpdmVzKHRhcmdldEVsZW1lbnQpLmZvckVhY2goKHsgZWxlbWVudCwgZGlyZWN0aXZlcyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGZpbmFsQWN0aW9uID0gcGFyc2VMb2FkaW5nQWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGlzTG9hZGluZyk7XG4gICAgICAgIGNvbnN0IHRhcmdldGVkQWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCB0YXJnZXRlZE1vZGVscyA9IFtdO1xuICAgICAgICBsZXQgZGVsYXkgPSAwO1xuICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWxheScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxheSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogMjAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdhY3Rpb24nLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImFjdGlvblwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIGFjdGlvbihmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkQWN0aW9ucy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnbW9kZWwnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm1vZGVsXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gbW9kZWwoZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZE1vZGVscy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IChfYSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiB1c2VkIGluIGRhdGEtbG9hZGluZz1cIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkQWN0aW9ucy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5jb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZE1vZGVscy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5hcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsb2FkaW5nRGlyZWN0aXZlO1xuICAgICAgICBzd2l0Y2ggKGZpbmFsQWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHtmaW5hbEFjdGlvbn1cImApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICB9XG4gICAgZ2V0TG9hZGluZ0RpcmVjdGl2ZXMoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBsb2FkaW5nRGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxvYWRpbmddJykuZm9yRWFjaCgoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEVsZW1lbnQgVHlwZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubG9hZGluZyB8fCAnc2hvdycpO1xuICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGxvYWRpbmdEaXJlY3RpdmVzO1xuICAgIH1cbiAgICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdyZXZlcnQnO1xuICAgIH1cbiAgICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnY2xhc3MnXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbiwgaXNMb2FkaW5nKSB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnaGlkZScgOiAnc2hvdyc7XG4gICAgICAgIGNhc2UgJ2FkZENsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnO1xuICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRBdHRyaWJ1dGUnIDogJ3JlbW92ZUF0dHJpYnV0ZSc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUF0dHJpYnV0ZScgOiAnYWRkQXR0cmlidXRlJztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcblxuY2xhc3MgVmFsaWRhdGVkRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdtb2RlbDpzZXQnLCAobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCB2YWx1ZVN0b3JlKSB7XG4gICAgICAgIGlmICh2YWx1ZVN0b3JlLmhhcygndmFsaWRhdGVkRmllbGRzJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldCgndmFsaWRhdGVkRmllbGRzJyldO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlZEZpZWxkcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZVN0b3JlLnNldCgndmFsaWRhdGVkRmllbGRzJywgdmFsaWRhdGVkRmllbGRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUGFnZVVubG9hZGluZ1BsdWdpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOnN0YXJ0ZWQnLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdEaXJlY3RvciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbHMucHVzaCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0b3BBbGxQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMuZm9yRWFjaCgoaW50ZXJ2YWwpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIHRoaXMucG9sbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICckcmVuZGVyJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGFjdGlvbk5hbWUsIHt9LCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5wdXNoKHRpbWVyKTtcbiAgICB9XG59XG5cbmNsYXNzIFBvbGxpbmdQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjb21wb25lbnQuZWxlbWVudDtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IgPSBuZXcgUG9sbGluZ0RpcmVjdG9yKGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLmFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLmNsZWFyUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWFsaXplUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5jbGVhclBvbGxpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhd1BvbGxDb25maWcgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd1BvbGxDb25maWcgfHwgJyRyZW5kZXInKTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IDIwMDA7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGF5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1wb2xsIFwiJHtyYXdQb2xsQ29uZmlnfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGRQb2xsKGRpcmVjdGl2ZS5hY3Rpb24sIGR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6ZmluaXNoZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kZWxdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmdldFVuc3luY2VkTW9kZWxzKCkuaW5jbHVkZXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiYgIWVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIGNvbXBvbmVudC52YWx1ZVN0b3JlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TW9kZWxCaW5kaW5nIChtb2RlbERpcmVjdGl2ZSkge1xuICAgIGxldCBzaG91bGRSZW5kZXIgPSB0cnVlO1xuICAgIGxldCB0YXJnZXRFdmVudE5hbWUgPSBudWxsO1xuICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgIG1vZGVsRGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ29uJzpcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSByZXF1aXJlcyBhIHZhbHVlIC0gZS5nLiBvbihjaGFuZ2UpLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIVsnaW5wdXQnLCAnY2hhbmdlJ10uaW5jbHVkZXMobW9kaWZpZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSBvbmx5IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBcImlucHV0XCIgb3IgXCJjaGFuZ2VcIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdub3JlbmRlcic6XG4gICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWJvdW5jZSc6XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLW1vZGVsPVwiJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFttb2RlbE5hbWUsIGlubmVyTW9kZWxOYW1lXSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbi5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGVsTmFtZSxcbiAgICAgICAgaW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG4gICAgICAgIHNob3VsZFJlbmRlcixcbiAgICAgICAgZGVib3VuY2UsXG4gICAgICAgIHRhcmdldEV2ZW50TmFtZVxuICAgIH07XG59XG5cbmNsYXNzIENvbXBvbmVudFJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50ID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZWdpc3RlckNvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuc2V0KGVsZW1lbnQsIGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xuICAgIH1cbiAgICB1bnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5RWxlbWVudC5kZWxldGUoY29tcG9uZW50LmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmRlbGV0ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBnZXRDb21wb25lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heENvdW50ID0gMTA7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IG1heENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBDb21wb25lbnQgbm90IGZvdW5kIGZvciBlbGVtZW50ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1gKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaW5kQ29tcG9uZW50cyhjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlDb21wb25lbnQuZm9yRWFjaCgoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAob25seVBhcmVudHMgJiZcbiAgICAgICAgICAgICAgICAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50IHx8ICFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbmx5TWF0Y2hOYW1lICYmIGNvbXBvbmVudE5hbWUgIT09IG9ubHlNYXRjaE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0Q29tcG9uZW50ID0gKGVsZW1lbnQpID0+IExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS5nZXRDb21wb25lbnQoZWxlbWVudCk7XG5jbGFzcyBMaXZlQ29udHJvbGxlckRlZmF1bHQgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW1xuICAgICAgICAgICAgeyBldmVudDogJ2lucHV0JywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2NoYW5nZScsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnbGl2ZTpjb25uZWN0JywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQgPSB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5lbGVtZW50LmRhdGFzZXQubGl2ZUlkIHx8IG51bGw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZVZhbHVlLCB0aGlzLnByb3BzVmFsdWUsIHRoaXMubGlzdGVuZXJzVmFsdWUsIChjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSkgPT4gTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LmZpbmRDb21wb25lbnRzKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSwgdGhpcy5maW5nZXJwcmludFZhbHVlLCBpZCwgbmV3IEJhY2tlbmQodGhpcy51cmxWYWx1ZSwgdGhpcy5jc3JmVmFsdWUpLCBuZXcgU3RhbmRhcmRFbGVtZW50RHJpdmVyKCkpO1xuICAgICAgICB0aGlzLnByb3hpZWRDb21wb25lbnQgPSBwcm94aWZ5Q29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Ll9fY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICBpZiAodGhpcy5oYXNEZWJvdW5jZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kZWZhdWx0RGVib3VuY2UgPSB0aGlzLmRlYm91bmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtcbiAgICAgICAgICAgIG5ldyBMb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUGFnZVVubG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBvbGxpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbigpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LnVucmVnaXN0ZXJDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIG51bGwpO1xuICAgIH1cbiAgICBhY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmF3QWN0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmFjdGlvbk5hbWU7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3QWN0aW9uKTtcbiAgICAgICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vZGlmaWVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgncHJldmVudCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3N0b3AnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc2VsZicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVib3VuY2UnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdmaWxlcycsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGVzID0gdGhpcy5wZW5kaW5nRmlsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdID0gdGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUobW9kaWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGFjdGlvbiBcIiR7cmF3QWN0aW9ufVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbignLCAnKX0uYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZmlsZXMoa2V5LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGRpcmVjdGl2ZS5uYW1lZCwgZGVib3VuY2UpO1xuICAgICAgICAgICAgaWYgKGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAkcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQucmVuZGVyKCk7XG4gICAgfVxuICAgIGVtaXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1pdFVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXRVcChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1pdFNlbGYoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXRTZWxmKG5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGlmICghZWxlbWVudC5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGRhdGEtZXZlbnQgYXR0cmlidXRlIGZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudEluZm8gPSBlbGVtZW50LmRhdGFzZXQuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcbiAgICAgICAgY29uc3QgZW1pdHMgPSBbXTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBuYW1lTWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBldmVudCBcIiR7ZXZlbnRJbmZvfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZW1pdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGlyZWN0aXZlLmFjdGlvbixcbiAgICAgICAgICAgICAgICBkYXRhOiBkaXJlY3RpdmUubmFtZWQsXG4gICAgICAgICAgICAgICAgbmFtZU1hdGNoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHM7XG4gICAgfVxuICAgICR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdjaGFuZ2UnKTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIG1vZGVsIGZvciBub24gSFRNTEVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIGlmICgoX2EgPSBlbGVtZW50LmZpbGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZyA9IGdldE1vZGVsQmluZGluZyhtb2RlbERpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2hhbmdlJyAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2NoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbFZhbHVlID0gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhjaGlsZENvbnRyb2xsZXIuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZ3MgPSBtb2RlbERpcmVjdGl2ZXMubWFwKGdldE1vZGVsQmluZGluZyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFkZENoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQsIG1vZGVsQmluZGluZ3MpO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICB9XG4gICAgaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSAhPT0gdGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW1vdmVDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG59XG5MaXZlQ29udHJvbGxlckRlZmF1bHQudmFsdWVzID0ge1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICB1cmw6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBsaXN0ZW5lcnM6IHsgdHlwZTogQXJyYXksIGRlZmF1bHQ6IFtdIH0sXG4gICAgZGVib3VuY2U6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxNTAgfSxcbiAgICBpZDogU3RyaW5nLFxuICAgIGZpbmdlcnByaW50OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSxcbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkgPSBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKTtcblxuZXhwb3J0IHsgQ29tcG9uZW50LCBMaXZlQ29udHJvbGxlckRlZmF1bHQgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJzdHJpcGUiLCJTdHJpcGUiLCJjbGllbnRTZWNyZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJpbml0aWFsaXplIiwiX2luaXRpYWxpemUiLCJfY2FsbGVlIiwiY2hlY2tvdXQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiaW5pdEVtYmVkZGVkQ2hlY2tvdXQiLCJtb3VudCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJmcm9tIiwidGVzdCIsIml0ZXIiLCJsZW4iLCJhcnIyIiwiQ29udHJvbGxlciIsInBhcnNlRGlyZWN0aXZlcyIsImNvbnRlbnQiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnROYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE5hbWVkQXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJhY3Rpb24iLCJwdXNoSW5zdHJ1Y3Rpb24iLCJuYW1lZCIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsIm1peGVkQXJnVHlwZXNFcnJvciIsImNvbmNhdCIsInRyaW0iLCJwdXNoTW9kaWZpZXIiLCJjaGFyIiwiY29tYmluZVNwYWNlZEFycmF5IiwicGFydHMiLCJmaW5hbFBhcnRzIiwicGFydCIsInNwbGl0Iiwibm9ybWFsaXplTW9kZWxOYW1lIiwibW9kZWwiLCJyZXBsYWNlIiwibWFwIiwiam9pbiIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJlbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250YWlucyIsImZvdW5kQ2hpbGRDb21wb25lbnQiLCJnZXRDaGlsZHJlbiIsImNoaWxkQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwib3V0ZXJIVE1MIiwiaW5kZXhPZiIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiVmFsdWVTdG9yZSIsImRpcnR5UHJvcHMiLCJwZW5kaW5nUHJvcHMiLCJ1cGRhdGVkUHJvcHNGcm9tUGFyZW50Iiwibm9ybWFsaXplZE5hbWUiLCJoYXMiLCJzZXQiLCJjdXJyZW50VmFsdWUiLCJnZXRPcmlnaW5hbFByb3BzIiwiYXNzaWduIiwiZ2V0RGlydHlQcm9wcyIsImdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmciLCJyZWluaXRpYWxpemVBbGxQcm9wcyIsInB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSIsInN0b3JlTmV3UHJvcHNGcm9tUGFyZW50IiwiY2hhbmdlZCIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJtb3JwaEF0dHJzIiwiZnJvbU5vZGUiLCJ0b05vZGUiLCJ0b05vZGVBdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiYXR0ck5hbWUiLCJhdHRyTmFtZXNwYWNlVVJJIiwiYXR0clZhbHVlIiwiZnJvbVZhbHVlIiwibm9kZVR5cGUiLCJuYW1lc3BhY2VVUkkiLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGVOUyIsInByZWZpeCIsInNldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlIiwiZnJvbU5vZGVBdHRycyIsImhhc0F0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyYW5nZSIsIk5TX1hIVE1MIiwiZG9jIiwiSEFTX1RFTVBMQVRFX1NVUFBPUlQiLCJIQVNfUkFOR0VfU1VQUE9SVCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUiLCJzdHIiLCJjaGlsZE5vZGVzIiwiY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2UiLCJzZWxlY3ROb2RlIiwiYm9keSIsImZyYWdtZW50IiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnRGcm9tV3JhcCIsInRvRWxlbWVudCIsImNvbXBhcmVOb2RlTmFtZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZnJvbU5vZGVOYW1lIiwibm9kZU5hbWUiLCJ0b05vZGVOYW1lIiwiZnJvbUNvZGVTdGFydCIsInRvQ29kZVN0YXJ0IiwiY2hhckNvZGVBdCIsInRvVXBwZXJDYXNlIiwiY3JlYXRlRWxlbWVudE5TIiwibW92ZUNoaWxkcmVuIiwiY3VyQ2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dENoaWxkIiwibmV4dFNpYmxpbmciLCJhcHBlbmRDaGlsZCIsInN5bmNCb29sZWFuQXR0clByb3AiLCJzcGVjaWFsRWxIYW5kbGVycyIsIk9QVElPTiIsInBhcmVudE5vZGUiLCJwYXJlbnROYW1lIiwic2VsZWN0ZWRJbmRleCIsIklOUFVUIiwiVEVYVEFSRUEiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwibm9kZVZhbHVlIiwicGxhY2Vob2xkZXIiLCJTRUxFQ1QiLCJvcHRncm91cCIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSIsIlRFWFRfTk9ERSIsIkNPTU1FTlRfTk9ERSIsIm5vb3AiLCJkZWZhdWx0R2V0Tm9kZUtleSIsIm5vZGUiLCJpZCIsIm1vcnBoZG9tRmFjdG9yeSIsIm1vcnBoZG9tIiwidG9Ob2RlSHRtbCIsImdldE5vZGVLZXkiLCJvbkJlZm9yZU5vZGVBZGRlZCIsIm9uTm9kZUFkZGVkIiwib25CZWZvcmVFbFVwZGF0ZWQiLCJvbkVsVXBkYXRlZCIsIm9uQmVmb3JlTm9kZURpc2NhcmRlZCIsIm9uTm9kZURpc2NhcmRlZCIsIm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQiLCJza2lwRnJvbUNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJwYXJlbnQiLCJjaGlsZHJlbk9ubHkiLCJmcm9tTm9kZXNMb29rdXAiLCJrZXllZFJlbW92YWxMaXN0IiwiYWRkS2V5ZWRSZW1vdmFsIiwid2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMiLCJza2lwS2V5ZWROb2RlcyIsInJlbW92ZU5vZGUiLCJyZW1vdmVDaGlsZCIsImluZGV4VHJlZSIsImhhbmRsZU5vZGVBZGRlZCIsInVubWF0Y2hlZEZyb21FbCIsInJlcGxhY2VDaGlsZCIsIm1vcnBoRWwiLCJjbGVhbnVwRnJvbUVsIiwiY3VyRnJvbU5vZGVDaGlsZCIsImN1ckZyb21Ob2RlS2V5IiwiZnJvbU5leHRTaWJsaW5nIiwidG9FbEtleSIsIm1vcnBoQ2hpbGRyZW4iLCJza2lwRnJvbSIsImN1clRvTm9kZUNoaWxkIiwiY3VyVG9Ob2RlS2V5IiwidG9OZXh0U2libGluZyIsIm1hdGNoaW5nRnJvbUVsIiwib3V0ZXIiLCJpc1NhbWVOb2RlIiwiY3VyRnJvbU5vZGVUeXBlIiwiaXNDb21wYXRpYmxlIiwiaW5zZXJ0QmVmb3JlIiwib25CZWZvcmVOb2RlQWRkZWRSZXN1bHQiLCJhY3R1YWxpemUiLCJvd25lckRvY3VtZW50Iiwic3BlY2lhbEVsSGFuZGxlciIsIm1vcnBoZWROb2RlIiwibW9ycGhlZE5vZGVUeXBlIiwidG9Ob2RlVHlwZSIsImVsVG9SZW1vdmUiLCJub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbiIsImlzRmlsZUlucHV0IiwiY2hpbGRyZW4iLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiY2hpbGRDb21wb25lbnRzIiwiZmluZENoaWxkQ29tcG9uZW50IiwiZ2V0S2V5RnJvbUVsZW1lbnQiLCJleHRlcm5hbE11dGF0aW9uVHJhY2tlciIsImNoaWxkQ29tcG9uZW50TWFwIiwiTWFwIiwid2FzRWxlbWVudEFkZGVkIiwiTWF0aCIsInJhbmRvbSIsIl9feCIsIndpbmRvdyIsIkFscGluZSIsIm1vcnBoIiwidXBkYXRlRnJvbU5ld0VsZW1lbnRGcm9tUGFyZW50UmVuZGVyIiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50IiwiaXNFcXVhbE5vZGUiLCJub3JtYWxpemVkRnJvbUVsIiwibm9ybWFsaXplZFRvRWwiLCJVbnN5bmNlZElucHV0c1RyYWNrZXIiLCJtb2RlbEVsZW1lbnRSZXNvbHZlciIsIl90aGlzIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJjYWxsYmFjayIsImhhbmRsZUlucHV0RXZlbnQiLCJ1bnN5bmNlZElucHV0cyIsIlVuc3luY2VkSW5wdXRDb250YWluZXIiLCJhY3RpdmF0ZSIsIl90aGlzMiIsIl9yZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVhY3RpdmF0ZSIsIl90aGlzMyIsIl9yZWYyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcmtNb2RlbEFzU3luY2VkIiwibW9kZWxOYW1lIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImFkZCIsImdldFVuc3luY2VkSW5wdXRzIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVscyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsIl90aGlzNCIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJyZWdpc3RlciIsImhvb2tOYW1lIiwidW5yZWdpc3RlciIsInRyaWdnZXJIb29rIiwiX2xlbiIsIl9rZXkiLCJCYWNrZW5kUmVzcG9uc2UiLCJyZXNwb25zZSIsIl9nZXRCb2R5IiwidGV4dCIsImdldEJvZHkiLCJDaGFuZ2luZ0l0ZW1zVHJhY2tlciIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsInNldEl0ZW0iLCJpdGVtTmFtZSIsInByZXZpb3VzVmFsdWUiLCJyZW1vdmVkUmVjb3JkIiwib3JpZ2luYWwiLCJvcmlnaW5hbFJlY29yZCIsInJlbW92ZUl0ZW0iLCJ0cnVlT3JpZ2luYWxWYWx1ZSIsImdldENoYW5nZWRJdGVtcyIsImdldFJlbW92ZWRJdGVtcyIsImlzRW1wdHkiLCJzaXplIiwiRWxlbWVudENoYW5nZXMiLCJhZGRlZENsYXNzZXMiLCJyZW1vdmVkQ2xhc3NlcyIsInN0eWxlQ2hhbmdlcyIsImF0dHJpYnV0ZUNoYW5nZXMiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsImZpbHRlciIsInJlbW92ZUNsYXNzIiwiYWRkU3R5bGUiLCJzdHlsZU5hbWUiLCJvcmlnaW5hbFZhbHVlIiwicmVtb3ZlU3R5bGUiLCJhZGRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiZ2V0QWRkZWRDbGFzc2VzIiwiZ2V0UmVtb3ZlZENsYXNzZXMiLCJnZXRDaGFuZ2VkU3R5bGVzIiwiZ2V0UmVtb3ZlZFN0eWxlcyIsImdldENoYW5nZWRBdHRyaWJ1dGVzIiwiZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjaGFuZ2UiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJXZWFrTWFwIiwiY2hhbmdlZEVsZW1lbnRzQ291bnQiLCJhZGRlZEVsZW1lbnRzIiwicmVtb3ZlZEVsZW1lbnRzIiwiaXNTdGFydGVkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbk11dGF0aW9ucyIsImJpbmQiLCJzdGFydCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiX3RoaXM1IiwiYWRkZWROb2RlcyIsIkVsZW1lbnQiLCJyZW1vdmVkTm9kZXMiLCJjaGFuZ2VkRWxlbWVudCIsImhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uIiwicHJldmlvdXNWYWx1ZXMiLCJ0cmltbWVkVmFsdWUiLCJuZXdWYWx1ZXMiLCJhZGRlZFZhbHVlcyIsInJlbW92ZWRWYWx1ZXMiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJzdHlsZXMiLCJzdHlsZU9iamVjdCIsInByb3BlcnR5IiwidGFnTmFtZSIsIkNoaWxkQ29tcG9uZW50V3JhcHBlciIsIm1vZGVsQmluZGluZ3MiLCJDb21wb25lbnQiLCJsaXN0ZW5lcnMiLCJjb21wb25lbnRGaW5kZXIiLCJmaW5nZXJwcmludCIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiX3RoaXM2IiwiZGVmYXVsdERlYm91bmNlIiwiYmFja2VuZFJlcXVlc3QiLCJwZW5kaW5nQWN0aW9ucyIsInBlbmRpbmdGaWxlcyIsImlzUmVxdWVzdFBlbmRpbmciLCJyZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwibGlzdGVuZXIiLCJfYSIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsIm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSIsIl9zd2FwQmFja2VuZCIsImFkZFBsdWdpbiIsInBsdWdpbiIsImF0dGFjaFRvQ29tcG9uZW50IiwiY29ubmVjdCIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsIm9uIiwib2ZmIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsInByb21pc2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJnZXREYXRhIiwiZmlsZXMiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJnZXRQYXJlbnQiLCJlbWl0Iiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJlbWl0VXAiLCJlbWl0U2VsZiIsImRvRW1pdCIsIm1hdGNoaW5nTmFtZSIsImNvbXBvbmVudHMiLCJfdGhpczciLCJhY3Rpb25zIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJsaXZlRmluZ2VycHJpbnRWYWx1ZSIsIl90aGlzOCIsImNoaWxkV3JhcHBlciIsIm1vZGVsQmluZGluZyIsImNoaWxkTW9kZWxOYW1lIiwiaW5uZXJNb2RlbE5hbWUiLCJzaG91bGRSZW5kZXIiLCJpc1R1cmJvRW5hYmxlZCIsIlR1cmJvIiwicGVyZm9ybVJlcXVlc3QiLCJfdGhpczkiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIm1ha2VSZXF1ZXN0IiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJfcmVmMyIsIl9jYWxsZWUyIiwiYmFja2VuZFJlc3BvbnNlIiwiX2kzIiwiX09iamVjdCR2YWx1ZXMiLCJoZWFkZXJzIiwiY29udHJvbHMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJkaXNwbGF5RXJyb3IiLCJyZW5kZXJFcnJvciIsInByb2Nlc3NSZXJlbmRlciIsIl94IiwiX3RoaXMxMCIsInZpc2l0IiwibG9jYXRpb24iLCJocmVmIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJjb25zb2xlIiwibmV3UHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiZmluZENoaWxkQ29tcG9uZW50RWxlbWVudCIsIl9yZWY0IiwiY29tcG9uZW50TmFtZSIsIl9yZWY1IiwicGF5bG9hZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJjYWxjdWxhdGVEZWJvdW5jZSIsImNsZWFyVGltZW91dCIsIl90aGlzMTEiLCJzZXRUaW1lb3V0IiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZm9jdXMiLCJmaW5nZXJwcmludHMiLCJ0YWciLCJ0b0xvd2VyQ2FzZSIsIl90aGlzMTIiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJfbGVuMiIsIl9rZXkyIiwiUmVmbGVjdCIsIkJhY2tlbmRSZXF1ZXN0IiwidXBkYXRlTW9kZWxzIiwiX3RoaXMxMyIsImlzUmVzb2x2ZWQiLCJ1cGRhdGVkTW9kZWxzIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwidGFyZ2V0ZWRNb2RlbHMiLCJSZXF1ZXN0QnVpbGRlciIsInVybCIsImNzcmZUb2tlbiIsImJ1aWxkUmVxdWVzdCIsInVwZGF0ZWQiLCJzcGxpdFVybCIsIl9zcGxpdFVybCIsIl9zcGxpdFVybDIiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsInRvdGFsRmlsZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJoYXNGaW5nZXJwcmludHMiLCJ3aWxsRGF0YUZpdEluVXJsIiwicmVxdWVzdERhdGEiLCJwcm9wc0Zyb21QYXJlbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiX2k0IiwiX09iamVjdCRlbnRyaWVzMyIsIl9PYmplY3QkZW50cmllczMkX2kiLCJwYXJhbXNTdHJpbmciLCJwcm9wc0pzb24iLCJ1cGRhdGVkSnNvbiIsImNoaWxkcmVuSnNvbiIsInByb3BzRnJvbVBhcmVudEpzb24iLCJ1cmxFbmNvZGVkSnNvbkRhdGEiLCJCYWNrZW5kIiwicmVxdWVzdEJ1aWxkZXIiLCJfdGhpcyRyZXF1ZXN0QnVpbGRlciQiLCJmZXRjaCIsImJhY2tlbmRBY3Rpb24iLCJTdGFuZGFyZEVsZW1lbnREcml2ZXIiLCJtb2RlbERpcmVjdGl2ZSIsInJvb3RFbGVtZW50IiwibGl2ZVByb3BzVmFsdWUiLCJsaXZlSWQiLCJldmVudHNKc29uIiwibGl2ZUVtaXQiLCJsaXZlQnJvd3NlckRpc3BhdGNoIiwiTG9hZGluZ1BsdWdpbiIsIl90aGlzMTQiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNSIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmNiIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE2IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwibW9kaWZpZXIiLCJwYXJzZUludCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsIl90aGlzMTciLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTgiLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWRkUG9sbCIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwic3RhcnRBbGxQb2xsaW5nIiwiX3RoaXMxOSIsIl9yZWY3Iiwic3RvcEFsbFBvbGxpbmciLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclBvbGxpbmciLCJfdGhpczIwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIlBvbGxpbmdQbHVnaW4iLCJfdGhpczIxIiwicG9sbGluZ0RpcmVjdG9yIiwiaW5pdGlhbGl6ZVBvbGxpbmciLCJfdGhpczIyIiwicG9sbCIsInJhd1BvbGxDb25maWciLCJ3YXJuIiwiU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4iLCJfdGhpczIzIiwic3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMiLCJIVE1MRm9ybUVsZW1lbnQiLCJnZXRNb2RlbEJpbmRpbmciLCJ0YXJnZXRFdmVudE5hbWUiLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8iLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8yIiwiQ29tcG9uZW50UmVnaXN0cnkiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJjb21wb25lbnRNYXBCeUNvbXBvbmVudCIsInJlZ2lzdGVyQ29tcG9uZW50IiwidW5yZWdpc3RlckNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIl90aGlzMjQiLCJjb3VudCIsIm1heENvdW50IiwiZmluZENvbXBvbmVudHMiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiY29tcG9uZW50UmVnaXN0cnkiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzMjUiLCJwZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50IiwiX3RoaXMyNiIsImhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50IiwibmFtZVZhbHVlIiwicHJvcHNWYWx1ZSIsImxpc3RlbmVyc1ZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZSIsInVybFZhbHVlIiwiY3NyZlZhbHVlIiwicHJveGllZENvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiaGFzRGVib3VuY2VWYWx1ZSIsImRlYm91bmNlVmFsdWUiLCJwbHVnaW5zIiwiX3RoaXMyNyIsIl9yZWY4IiwiX3RoaXMyOCIsIl9yZWY5IiwidXBkYXRlIiwiY3VycmVudFRhcmdldCIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsIl90aGlzMjkiLCJyYXdBY3Rpb24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIl9pNSIsIl9PYmplY3QkZW50cmllczQiLCJfT2JqZWN0JGVudHJpZXM0JF9pIiwiJHJlbmRlciIsIl90aGlzMzAiLCJnZXRFbWl0RGlyZWN0aXZlcyIsIl9yZWYxMCIsIm5hbWVNYXRjaCIsIl90aGlzMzEiLCJfcmVmMTEiLCJfdGhpczMyIiwiX3JlZjEyIiwiZXZlbnRJbmZvIiwiZW1pdHMiLCIkdXBkYXRlTW9kZWwiLCJldmVudE5hbWUiLCJmaW5hbFZhbHVlIiwiY2hpbGRDb250cm9sbGVyIiwiY29udHJvbGxlciIsIm1vZGVsRGlyZWN0aXZlcyIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJkaXNwYXRjaCIsImNzcmYiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==