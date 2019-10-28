(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"app-footer\">\r\n    <div class=\"footer-wrapper\">\r\n        <div class=\"clr-row\">\r\n            <div class=\"clr-col-sm-12 clr-col-md-12 clr-col-lg-4 clr-col-xl-4\">\r\n                <img class=\"brand-logo-footer\" src=\"./assets/img/TS-Logo-1.png\" />\r\n            </div>\r\n            <div class=\"clr-col-sm-12 clr-col-md-12 clr-col-lg-4 clr-col-xl-4\">\r\n                <ul class=\"footer-nav\">\r\n                    <li>\r\n                        <a routerLink=\"/home\">Home</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/about-me\">About Me</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/newsletter\">Newsletter</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"clr-col-12-sm clr-col-12-md clr-col-4-lg clr-col-4-xl\">\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header header-6\">\r\n    <div class=\"branding\">\r\n        <img class=\"brand-logo\" src=\"./assets/img/TS-Logo-1.png\" />\r\n    </div>\r\n    <div class=\"header-actions\">\r\n        <a routerLink=\"/home\" class=\"nav-link nav-text\">Home</a>\r\n        <a routerLink=\"/about-me\" class=\"nav-link nav-text\">About Me</a>\r\n        <a routerLink=\"/newsletter\" class=\"nav-link nav-text\">Newsletter</a>\r\n    </div>\r\n    <div class=\"header-cart\" (click)=\"toggleCart()\">\r\n        <app-shopping-cart></app-shopping-cart>\r\n        <span class=\"cart-qty\">{{cartQty | async}}</span>\r\n        <clr-icon shape=\"shopping-cart\" size=\"18\" class=\"is-highlight\"></clr-icon>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-display/product-display.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-display/product-display.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clr-col-sm-12 clr-col-md-6 clr-col-lg-4 clr-col-xl-3\" *ngFor=\"let item of productList; let i = index\">\r\n    <!--Block Element and Modifer naming conventions-->\r\n    <div class=\"product-wrapper\">\r\n        <div class=\"product-item\">\r\n            <div class=\"product-item__image\">\r\n                <img class=\"product-img\" src=\"./{{item.productPhoto}}\" alt=\"\" (click)=\"productAction($event, item, 'views'); openLightbox(item, i)\" />\r\n            </div>\r\n            <div class=\"product-item__name\">\r\n                <span>{{item.productName}}</span>\r\n                <span><clr-icon shape=\"shopping-bag\" class=\"is-solid is-highlight\" (click)=\"addProductToCart(item)\"></clr-icon></span>\r\n            </div>\r\n            <div class=\"product-item__actions\">\r\n                    \r\n                <!-- <div (click)=\"productAction($event, item, 'likes')\">\r\n                    <span class=\"action-count\">{{item.likes}}</span>\r\n                    <clr-icon shape=\"heart\" class=\"is-solid is-highlight\" title=\"likes\"></clr-icon>\r\n                </div>\r\n                <div>\r\n                    <span class=\"action-count\">{{item.views}}</span>\r\n                    <clr-icon shape=\"eye\" class=\"is-solid is-highlight\" title=\"views\"></clr-icon>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shopping-cart\" *ngIf=\"showCart | async\">\r\n    <div class=\"shopping-cart__list\">\r\n        <ul class=\"list-items\">\r\n            <li class=\"list-item\" *ngFor=\"let item of cartItems | async\">\r\n                <div class=\"list-item__namePrice\">\r\n                    <div class=\"d-flex d-flex__center-sb product-info\">\r\n                        <span>{{item.productName}}</span> \r\n                        <span>{{item.productPrice}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <span>QTY: {{item.cartQty}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"list-item__desc\">\r\n                    <span>{{item.productDescription}}</span>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"shopping-cart__actions\">\r\n            <button *ngIf=\"cartItems.length > 0\" class=\"btn btn-primary btn-block\" (click)=\"clearCart()\">Purchase</button>\r\n    </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/about-me/about-me.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/about-me/about-me.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n    <div class=\"clr-row clr-justify-content-end mb-1\">\r\n        <div class=\"clr-col-sm-6 clr-sm-6\">\r\n            <div class=\"d-flex d-flex__row d-flex__center-end\">\r\n                <div class=\"about-me__img\">\r\n                    <img class=\"personal-img\" src=\"./assets/img/tSnopek.jpg\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"clr-col-sm-6 clr-sm-6\">\r\n\r\n                    <h2>At the right place at the right time</h2>\r\n                    <p>Born and raised in Waukesha, I have lived here all my life. \r\n                        I am an avid photographer and hunter reaching new audiences with the help of the internet every day. \r\n                        From Saturday night chicken fries at home to picking out our favorite 7oz flavors of Roxo soda, \r\n                        brought by the case, I am a classic Midwestern Photographer. \r\n                        Delivering the Waukesha Freeman on my paper route to now I sell pictures to the Freeman forty years later. \r\n                        With still some fuel left in my tank, enjoying the ride as long as I can.</p>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/error.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/error.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n        <div class=\"clr-row clr-justify-content-end mb-1\">\r\n            <div class=\"clr-col-sm-6 clr-sm-6\">\r\n                <div class=\"d-flex d-flex__row d-flex__center-end\">\r\n                    <div class=\"error-me__img\">\r\n                        <img class=\"error-img\" src=\"./assets/img/logoWhoops.PNG\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"clr-col-sm-6 clr-sm-6\">\r\n    \r\n                        <h2>I think you ran out of film...</h2>\r\n                        <p>Shoot, literally. The page you are looking for is not this page.\r\n                            In fact, I have no idea how you found this page, but found it you did.\r\n                            Just like any photographer worth their weight in recyclable film canisters, you have managed\r\n                            to shoot with your camera not completely closed. Or loaded your film wrong. Or left the lense cover on.\r\n                            It's okay, we all make mistakes. Find your way out of the dark room and back to the homepage.\r\n                        </p>\r\n            </div>\r\n        </div>\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n    <div class=\"clr-row clr-justify-content-end mb-1\">\r\n        <div class=\"clr-col-sm-6 clr-offset-sm-6\">\r\n            <div class=\"d-flex d-flex__row d-flex__center-end\">\r\n                <div class=\"dropdown\" [class.open]=\"openDropdown\">\r\n                    <button class=\"dropdown-toggle btn btn-primary-outline\" type=\"button\" (click)=\"toggleFilterBtn()\">\r\n                        Filter\r\n                        <clr-icon shape=\"caret down\"></clr-icon>\r\n                    </button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(0)\">Sort A to Z</div>\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(1)\">Sort Z to A</div>\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(2)\">Sort by most liked</div>\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(3)\">Sort by most views</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-product-display class=\"clr-row\" [products]=\"items\" (productSelected)=\"productSelected($event)\">\r\n    </app-product-display>\r\n</div>\r\n\r\n\r\n<!-- <span *ngIf=\"items.length > 0; else emptyContents\"></span>\r\n<span *ngFor=\"let item of items\">\r\n    {{item.name}}\r\n    {{item.value}}\r\n</span>\r\n\r\n<ng-template #emptyContents>\r\n    No items in array\r\n</ng-template> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newsletter/newsletter.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newsletter/newsletter.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view-wrapper\">\r\n        <div class=\"clr-row clr-justify-content-end mb-1\">\r\n            <div class=\"clr-col-sm-12\">\r\n                <p>So, this page is not finished-it will be for the next project. I want to\r\n                    have users sign-up for a Newsletter. Massive errors in the FOOTER of all things\r\n                    pushed back my timeline immensely. Because I didn't want to go and hide this \r\n                    page, I left it as it.\r\n                    Hope you find the Easter Egg!\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/shop/shop.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shop/shop.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shop\"> Hello ShopComponent! </div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
            /* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/error.component */ "./src/app/views/error/error.component.ts");
            /* harmony import */ var _views_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/about-me/about-me.component */ "./src/app/views/about-me/about-me.component.ts");
            /* harmony import */ var _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/newsletter/newsletter.component */ "./src/app/views/newsletter/newsletter.component.ts");
            /* harmony import */ var _views_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/shop/shop.component */ "./src/app/views/shop/shop.component.ts");
            var routes = [
                { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'about-me', component: _views_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"] },
                { path: 'newsletter', component: _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__["NewsletterComponent"] },
                { path: 'shop', component: _views_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
                //
                { path: '**', component: _views_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSIsImJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'web-app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
            /* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
            /* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/error/error.component */ "./src/app/views/error/error.component.ts");
            /* harmony import */ var _components_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-display/product-display.component */ "./src/app/components/product-display/product-display.component.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _views_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/about-me/about-me.component */ "./src/app/views/about-me/about-me.component.ts");
            /* harmony import */ var _views_shop_shop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/shop/shop.component */ "./src/app/views/shop/shop.component.ts");
            /* harmony import */ var _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/newsletter/newsletter.component */ "./src/app/views/newsletter/newsletter.component.ts");
            /* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/store */ "./src/app/store/store.ts");
            /* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
            /* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
            /* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule(ngRedux) {
                    this.ngRedux = ngRedux;
                    var logger = [Object(redux_logger__WEBPACK_IMPORTED_MODULE_23__["createLogger"])()];
                    ngRedux.configureStore(_store_store__WEBPACK_IMPORTED_MODULE_21__["rootReducer"], _store_store__WEBPACK_IMPORTED_MODULE_21__["InitialState"], logger);
                }
                return AppModule;
            }());
            AppModule.ctorParameters = function () { return [
                { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_22__["NgRedux"] }
            ]; };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                        _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                        _views_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                        _components_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_13__["ProductDisplayComponent"],
                        _views_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_18__["AboutMeComponent"],
                        _views_shop_shop_component__WEBPACK_IMPORTED_MODULE_19__["ShopComponent"],
                        _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_20__["NewsletterComponent"],
                        _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingCartComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"],
                        _angular_redux_store__WEBPACK_IMPORTED_MODULE_22__["NgReduxModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                        ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxModule"]
                    ],
                    providers: [
                        _service_data_service__WEBPACK_IMPORTED_MODULE_14__["DataRepositoryService"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestore"],
                        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__["APP_BASE_HREF"], useValue: '/' },
                        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_24__["HashLocationStrategy"] }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/footer/footer.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer-wrapper {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.brand-logo-footer {\n  max-height: 80px;\n  width: auto;\n}\n\nfooter.app-footer {\n  background: #eee;\n  padding: 1.5em 0;\n}\n\n.footer-nav {\n  list-style: none;\n}\n\n.footer-nav li > a {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDUSxnQkFBQTtBQ0hSOztBRElRO0VBQ0ksV0FBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG5cbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJyYW5kLWxvZ28tZm9vdGVye1xuICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbmZvb3Rlci5hcHAtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHBhZGRpbmc6IDEuNWVtIDA7XG59XG5cbi5mb290ZXItbmF2IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgJiBsaSA+IGF7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxufVxuIiwiLmZvb3Rlci13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJyYW5kLWxvZ28tZm9vdGVyIHtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmZvb3Rlci5hcHAtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMS41ZW0gMDtcbn1cblxuLmZvb3Rlci1uYXYge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmZvb3Rlci1uYXYgbGkgPiBhIHtcbiAgY29sb3I6ICMzMzM7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () { };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/header/header.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header {\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 2em;\n  position: fixed;\n  width: 100%;\n  background: #fff;\n  z-index: 1500;\n  top: 0;\n  left: 0;\n}\n\n.header .branding, header .branding {\n  position: relative;\n}\n\n.brand-logo {\n  max-height: 80px;\n  width: auto;\n  position: fixed;\n  top: 10px;\n}\n\n.nav-link {\n  color: #333 !important;\n}\n\n.header-cart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 65px;\n}\n\nspan.cart-qty {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiAxNTAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uaGVhZGVyIC5icmFuZGluZywgaGVhZGVyIC5icmFuZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnJhbmQtbG9nb3tcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5uYXYtbGlua3tcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNhcnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA2NXB4O1xufVxuXG5zcGFuLmNhcnQtcXR5e1xuICAgIGNvbG9yOiByZWQ7XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDE1MDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmhlYWRlciAuYnJhbmRpbmcsIGhlYWRlciAuYnJhbmRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbnNwYW4uY2FydC1xdHkge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
            /* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(ngRedux) {
                    this.ngRedux = ngRedux;
                }
                HeaderComponent.prototype.ngOnInit = function () { };
                HeaderComponent.prototype.toggleCart = function () {
                    this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].ShowCart });
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (s) { return s.totalCartQty; })
            ], HeaderComponent.prototype, "cartQty", void 0);
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/product-display/product-display.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/product-display/product-display.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".product-img {\n  width: 100%;\n  height: auto;\n  min-height: 160px;\n}\n\n.product-item__name {\n  width: 100%;\n  font-weight: 600;\n  padding: 0.15em 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.action-count {\n  padding-right: 5px;\n}\n\n.product-item__actions {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.product-item__image {\n  max-height: 160px;\n  overflow: hidden;\n}\n\n.product-item {\n  margin: 1.5em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRpc3BsYXkvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWRpc3BsYXlcXHByb2R1Y3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRpc3BsYXkvcHJvZHVjdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1kaXNwbGF5L3Byb2R1Y3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWRpc3BsYXkge1xuXG59XG5cbi5wcm9kdWN0LWltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTYwcHg7XG59XG5cbi5wcm9kdWN0LWl0ZW1fX25hbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogLjE1ZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWN0aW9uLWNvdW50e1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtaXRlbV9fYWN0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2R1Y3QtaXRlbV9faW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMS41ZW0gMDtcbn0iLCIucHJvZHVjdC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxNjBweDtcbn1cblxuLnByb2R1Y3QtaXRlbV9fbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwLjE1ZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWN0aW9uLWNvdW50IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ucHJvZHVjdC1pdGVtX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9kdWN0LWl0ZW1fX2ltYWdlIHtcbiAgbWF4LWhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWl0ZW0ge1xuICBtYXJnaW46IDEuNWVtIDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/product-display/product-display.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/product-display/product-display.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ProductDisplayComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDisplayComponent", function () { return ProductDisplayComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
            /* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
            /* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
            var ProductDisplayComponent = /** @class */ (function () {
                function ProductDisplayComponent(_lightbox, ngRedux) {
                    this._lightbox = _lightbox;
                    this.ngRedux = ngRedux;
                    this.productList = [];
                    this.productSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ProductDisplayComponent.prototype.ngOnInit = function () { };
                ProductDisplayComponent.prototype.ngOnChanges = function () {
                    this.productList = this.products.map(function (i) {
                        i.src = './' + i.productPhoto;
                        i.caption = i.productDescription;
                        return i;
                    });
                    console.log('=== ngOnChanges from ProductDisplayComponent ===');
                    console.log(this.products);
                };
                ProductDisplayComponent.prototype.selectedProduct = function (item) {
                    console.log(item);
                    console.log('item to be passed to parent');
                    this.productSelected.emit(item);
                };
                ProductDisplayComponent.prototype.productAction = function (event, item, type) {
                    var selection = {
                        event: event,
                        item: item,
                        type: type
                    };
                    this.productSelected.emit(selection);
                };
                ProductDisplayComponent.prototype.openLightbox = function (item, index) {
                    this._lightbox.open(this.productList, index);
                };
                ProductDisplayComponent.prototype.addProductToCart = function (item) {
                    this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__["ReduxStoreActions"].AddToCart, product: item });
                };
                return ProductDisplayComponent;
            }());
            ProductDisplayComponent.ctorParameters = function () { return [
                { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"] },
                { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProductDisplayComponent.prototype, "products", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProductDisplayComponent.prototype, "productSelected", void 0);
            ProductDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-product-display',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-display/product-display.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-display.component.scss */ "./src/app/components/product-display/product-display.component.scss")).default]
                })
            ], ProductDisplayComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shopping-cart/shopping-cart.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/shopping-cart/shopping-cart.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".shopping-cart {\n  position: fixed;\n  top: 62px;\n  right: 22px;\n  background: #fff;\n  width: 400px;\n  min-height: 80px;\n  padding: 0.5em;\n  border: 1px solid #eee;\n  z-index: 1000;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  color: #333;\n}\n\nli.list-item {\n  padding: 1em;\n  margin-bottom: 5px;\n}\n\n.list-item__namePrice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n}\n\nul.list-items {\n  list-style: none;\n}\n\n.list-item__desc {\n  font-size: 12px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.product-info {\n  width: 100%;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L0M6XFxVc2Vyc1xcYWJieS1cXERlc2t0b3BcXERldlxcanMyXFxqczJNaWR0ZXJtLVdlYkFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSwrR0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BwaW5nLWNhcnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYycHg7XG4gICAgcmlnaHQ6IDIycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbmxpLmxpc3QtaXRlbSB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxpc3QtaXRlbV9fbmFtZVByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnVsLmxpc3QtaXRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW1fX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0LWluZm97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iLCIuc2hvcHBpbmctY2FydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MnB4O1xuICByaWdodDogMjJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgei1pbmRleDogMTAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbmxpLmxpc3QtaXRlbSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGlzdC1pdGVtX19uYW1lUHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnVsLmxpc3QtaXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdC1pdGVtX19kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0LWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/shopping-cart/shopping-cart.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ShoppingCartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () { return ShoppingCartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
            /* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
            var ShoppingCartComponent = /** @class */ (function () {
                function ShoppingCartComponent(ngRedux) {
                    this.ngRedux = ngRedux;
                }
                ShoppingCartComponent.prototype.ngOnInit = function () { };
                ShoppingCartComponent.prototype.clearCart = function () {
                    this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].ClearCart });
                };
                return ShoppingCartComponent;
            }());
            ShoppingCartComponent.ctorParameters = function () { return [
                { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (s) { return s.showCart; })
            ], ShoppingCartComponent.prototype, "showCart", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (s) { return s.cart; })
            ], ShoppingCartComponent.prototype, "cartItems", void 0);
            ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shopping-cart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/components/shopping-cart/shopping-cart.component.scss")).default]
                })
            ], ShoppingCartComponent);
            /***/ 
        }),
        /***/ "./src/app/service/data.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.service.ts ***!
          \*****************************************/
        /*! exports provided: DataRepositoryService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRepositoryService", function () { return DataRepositoryService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DataRepositoryService = /** @class */ (function () {
                function DataRepositoryService(http) {
                    this.http = http;
                    // TODO - change out for firebase url
                    this.apiUrl = 'http://northwind.cooneycreative.net';
                }
                DataRepositoryService.prototype.getHttpHeaders = function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    headers = headers.set('Content-Type', 'application/json');
                    return headers;
                };
                DataRepositoryService.prototype.getRequest = function (uri) {
                    return this.http.get(this.apiUrl + uri, { headers: this.getHttpHeaders() });
                };
                DataRepositoryService.prototype.postRequest = function (uri, data) {
                    return this.http.post(this.apiUrl + uri, data, { headers: this.getHttpHeaders() });
                };
                return DataRepositoryService;
            }());
            DataRepositoryService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataRepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DataRepositoryService);
            /***/ 
        }),
        /***/ "./src/app/store/actions.ts": 
        /*!**********************************!*\
          !*** ./src/app/store/actions.ts ***!
          \**********************************/
        /*! exports provided: ReduxStoreActions */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxStoreActions", function () { return ReduxStoreActions; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ReduxStoreActions;
            (function (ReduxStoreActions) {
                ReduxStoreActions["ShowCart"] = "ShowCart";
                ReduxStoreActions["AddToCart"] = "AddToCart";
                ReduxStoreActions["UpdateCart"] = "UpdateCart";
                ReduxStoreActions["ClearCart"] = "ClearCart";
            })(ReduxStoreActions || (ReduxStoreActions = {}));
            /***/ 
        }),
        /***/ "./src/app/store/store.ts": 
        /*!********************************!*\
          !*** ./src/app/store/store.ts ***!
          \********************************/
        /*! exports provided: InitialState, rootReducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function () { return InitialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function () { return rootReducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
            /* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tassign */ "./node_modules/tassign/lib/index.js");
            /* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_2__);
            var InitialState = {
                cart: [],
                totalCartQty: 0,
                showCart: false,
                lastUpdated: null
            };
            function rootReducer(state, action) {
                switch (action.type) {
                    case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].AddToCart:
                        console.log(state);
                        console.log(action);
                        console.log(state.cart.length);
                        if (state.cart.length > 0) {
                            // state.cart.forEach((item, index) => {
                            //   if(item.productID === action.product.productID){
                            //     item.cartQty += 1;
                            //     state.totalCartQty +=1;
                            //   }
                            // });  
                            var product = state.cart.find(function (x) { return x.productID == action.product.productID; });
                            if (product) {
                                product.cartQty += 1;
                                state.totalCartQty += 1;
                            }
                            else {
                                state.totalCartQty += 1;
                                action.product.cartQty = 1;
                                state.cart.push(action.product);
                            }
                        }
                        else {
                            //push
                            state.totalCartQty += 1;
                            action.product.cartQty = 1;
                            state.cart.push(action.product);
                        }
                        return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                            cart: state.cart,
                            lastUpdated: new Date()
                        });
                    case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].UpdateCart:
                        console.log(state);
                        return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                            lastUpdated: new Date()
                        });
                    case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].ShowCart:
                        console.log(state);
                        return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                            showCart: !state.showCart,
                            lastUpdated: new Date()
                        });
                    case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].ClearCart:
                        console.log(state);
                        return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                            cart: [],
                            totalCartQty: 0,
                            lastUpdated: new Date()
                        });
                }
                return state;
            }
            /***/ 
        }),
        /***/ "./src/app/views/about-me/about-me.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/views/about-me/about-me.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".about-me__img {\n  padding: 0 2em;\n}\n\n.personal-img {\n  max-height: 500px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWJvdXQtbWUvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFx2aWV3c1xcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LW1lIHtcblxufVxuXG4uYWJvdXQtbWVfX2ltZ3tcbiAgICBwYWRkaW5nOiAwIDJlbTtcbn1cblxuLnBlcnNvbmFsLWltZyB7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsIi5hYm91dC1tZV9faW1nIHtcbiAgcGFkZGluZzogMCAyZW07XG59XG5cbi5wZXJzb25hbC1pbWcge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/views/about-me/about-me.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/views/about-me/about-me.component.ts ***!
          \******************************************************/
        /*! exports provided: AboutMeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () { return AboutMeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutMeComponent = /** @class */ (function () {
                function AboutMeComponent() {
                }
                AboutMeComponent.prototype.ngOnInit = function () { };
                return AboutMeComponent;
            }());
            AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'about-me',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/about-me/about-me.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.scss */ "./src/app/views/about-me/about-me.component.scss")).default]
                })
            ], AboutMeComponent);
            /***/ 
        }),
        /***/ "./src/app/views/error/error.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/views/error/error.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".error-me__img {\n  padding: 0 2em;\n}\n\n.error-img {\n  max-height: 500px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZXJyb3IvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFx2aWV3c1xcZXJyb3JcXGVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcblxufVxuXG4uZXJyb3ItbWVfX2ltZ3tcbiAgICBwYWRkaW5nOiAwIDJlbTtcbn1cblxuLmVycm9yLWltZyB7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsIi5lcnJvci1tZV9faW1nIHtcbiAgcGFkZGluZzogMCAyZW07XG59XG5cbi5lcnJvci1pbWcge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/views/error/error.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/views/error/error.component.ts ***!
          \************************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                }
                ErrorComponent.prototype.ngOnInit = function () { };
                return ErrorComponent;
            }());
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/views/error/error.component.scss")).default]
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/views/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/views/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var HomeComponent = /** @class */ (function () {
                // dependency injection (dpi) to user service based class
                function HomeComponent(db) {
                    this.db = db;
                    // public xx: string;
                    // public xy: boolean;
                    // public xz: number;
                    // public zz: any; -> Object
                    // public zzz: any[];
                    // initialized variable
                    this.openDropdown = false;
                    this.items = [];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.getDisplayProducts();
                };
                HomeComponent.prototype.getDisplayProducts = function () {
                    var _this = this;
                    this.products = this.db.collection('/products').valueChanges();
                    this.products.subscribe(function (result) {
                        console.log(result);
                        _this.items = result.map(function (item) {
                            item.cartQty = 0;
                            return item;
                        });
                    }, function (error) {
                        console.log(error);
                    });
                };
                HomeComponent.prototype.productSelected = function (data) {
                    console.log(data);
                    // if(data.type === "views"){
                    // 	this.db.collection('/products').doc(data.item.productID).update({
                    // 		"views": data.item.views += 1
                    // 	}).then(() => {
                    // 		this.getDisplayProducts();
                    // 	})
                    // }else{
                    // 	this.db.collection('/products').doc(data.item.productID).update({
                    // 		"likes": data.item.likes += 1
                    // 	}).then(() => {
                    // 		this.getDisplayProducts();
                    // 	})
                    // }
                };
                HomeComponent.prototype.getProductFromExternalDB = function () {
                    // // using service imported through dbi
                    // this.dataService.getRequest('/product').subscribe((result: any) => {
                    // 	//console.log(result);
                    // 	this.items = result;
                    // }, (error: any) => {
                    // 	console.log(error);
                    // });
                };
                HomeComponent.prototype.sendFilterQuery = function (type) {
                    this.toggleFilterBtn();
                    switch (type) {
                        case 0:
                            this.products = this.db.collection('products', function (ref) { return ref.orderBy('productName', 'asc'); }).valueChanges();
                            this.applyProductsToList(this.products);
                            break;
                        case 1:
                            this.products = this.db.collection('products', function (ref) { return ref.orderBy('productName', 'desc'); }).valueChanges();
                            this.applyProductsToList(this.products);
                            break;
                        case 2:
                            this.products = this.db.collection('products', function (ref) { return ref.orderBy('likes', 'desc'); }).valueChanges();
                            this.applyProductsToList(this.products);
                            break;
                        case 3:
                            this.products = this.db.collection('products', function (ref) { return ref.orderBy('views', 'desc'); }).valueChanges();
                            this.applyProductsToList(this.products);
                            break;
                    }
                };
                HomeComponent.prototype.applyProductsToList = function (products) {
                    var _this = this;
                    products.subscribe(function (result) {
                        console.log(result);
                        _this.items = result;
                    }, function (error) {
                        console.log(error);
                    });
                };
                HomeComponent.prototype.toggleFilterBtn = function () {
                    this.openDropdown = !this.openDropdown;
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html")).default
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/views/newsletter/newsletter.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/views/newsletter/newsletter.component.ts ***!
          \**********************************************************/
        /*! exports provided: NewsletterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function () { return NewsletterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NewsletterComponent = /** @class */ (function () {
                function NewsletterComponent() {
                }
                NewsletterComponent.prototype.ngOnInit = function () { };
                return NewsletterComponent;
            }());
            NewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'newsletter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newsletter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newsletter/newsletter.component.html")).default
                })
            ], NewsletterComponent);
            /***/ 
        }),
        /***/ "./src/app/views/shop/shop.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/views/shop/shop.component.ts ***!
          \**********************************************/
        /*! exports provided: ShopComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function () { return ShopComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ShopComponent = /** @class */ (function () {
                function ShopComponent() {
                }
                ShopComponent.prototype.ngOnInit = function () { };
                return ShopComponent;
            }());
            ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shop',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/shop/shop.component.html")).default
                })
            ], ShopComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: "AIzaSyDXqAYcerrj3t45L7VXfSMzg7XLtFe_iC0",
                    authDomain: "j2midtermwebapp.firebaseapp.com",
                    databaseURL: "https://j2midtermwebapp.firebaseio.com",
                    projectId: "j2midtermwebapp",
                    storageBucket: "j2midtermwebapp.appspot.com",
                    messagingSenderId: "645882432966",
                    appId: "1:645882432966:web:6e9a3a9e5f58fd798a36c7"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\abby-\Desktop\Dev\js2\js2Midterm-WebApp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map