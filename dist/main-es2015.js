(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--For this page, I had to set up the components for the entire site.\nBy putting the app-header, the router-outlet and app-footer here, these components\nappear on all my views-->\n<clr-main-container>\n<div id=\"app\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n</clr-main-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Code for the Footer, as a component, I have the html here, and then I use the \r\napp.component.html to place it on my different views in the project. -->\r\n<footer class=\"app-footer\">\r\n    <div class=\"footer-wrapper\">\r\n        <div class=\"clr-row\">\r\n            <div class=\"clr-col-sm-12 clr-col-md-12 clr-col-lg-4 clr-col-xl-4\">\r\n                <img class=\"brand-logo-footer\" src=\"./assets/img/TS-Logo-1.png\" />\r\n            </div>\r\n            <div class=\"clr-col-sm-12 clr-col-md-12 clr-col-lg-4 clr-col-xl-4\">\r\n                <ul class=\"footer-nav\">\r\n                    <!-- This is one thing I really like about Angular is how it sets up its\r\n                    links-instead of href, you use the routerlink to connect to views in your code.\r\n                    You have to set this up in the app.component.html -->\r\n                    <li>\r\n                        <a routerLink=\"/home\">Home</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/about-me\">About Me</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/newsletter\">Newsletter</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"clr-col-12-sm clr-col-12-md clr-col-4-lg clr-col-4-xl\">\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <clr-header class=\"header-6 header\">\r\n        <button class=\"header-hamburger-trigger\" type=\"button\" aria-label=\"Open\" (click)=\"toggleNav()\"><span></span></button>\r\n        <div class=\"branding\">\r\n                <img class=\"brand-logo cursor-pointer\" src=\"./assets/img/TS-Logo-1.png\" routerLink=\"/home\"/>\r\n        </div>\r\n        <div class=\"header-nav clr-nav-level-1\">\r\n            <a class=\"nav-link\" routerLink=\"/home\" class=\"nav-link nav-text cursor-pointer\" id=\"home-link\" rel=\"noopener\">\r\n                <span class=\"nav-text\">Home</span>\r\n            </a>\r\n            <a class=\"nav-link active\" routerlink=\"/\" routerlinkactive=\"active\" routerLink=\"/about-me\" class=\"nav-link nav-text cursor-pointer\">\r\n                <span class=\"nav-text\">About Me</span>\r\n            </a>\r\n            <a class=\"nav-link\" routerLink=\"/newsletter\" class=\"nav-link nav-text cursor-pointer\" rel=\"noopener\">\r\n                <span class=\"nav-text\">Newsletter</span>\r\n            </a>\r\n            <a class=\"nav-link\" routerLink=\"/registration\" class=\"nav-link nav-text cursor-pointer\" rel=\"noopener\">\r\n                <span class=\"nav-text\">Registration</span>\r\n            </a>\r\n            <a class=\"nav-link\" routerLink=\"/admin/dashboard\" class=\"nav-link nav-text\" rel=\"noopener\" *ngIf=\"user | async\">\r\n                <span class=\"cursor-pointer\">{{(user | async)?.data?.firstName}} {{(user | async)?.data?.lastName}}</span>\r\n            </a>\r\n            <a class=\"nav-link\" class=\"nav-link nav-text\" rel=\"noopener\">\r\n                <span class=\"cursor-pointer\" (click)=\"loginPage()\" *ngIf=\"(isAuthenticated | async) == false\">Sign In</span>\r\n                <span class=\"cursor-pointer\" (click)=\"logout()\" *ngIf=\"isAuthenticated | async\">\r\n                        <clr-icon shape=\"power\"></clr-icon>\r\n                </span>\r\n            </a>\r\n\r\n        </div>\r\n        <div class=\"header-cart\" (click)=\"toggleCart()\">\r\n        <app-shopping-cart></app-shopping-cart>\r\n        <span class=\"cart-qty\">{{cartQty | async}}</span>\r\n        <clr-icon shape=\"shopping-cart\" size=\"18\" class=\"is-highlight\"></clr-icon>\r\n        </div>\r\n        <div class=\"header-backdrop\"></div>\r\n    </clr-header>\r\n\r\n\r\n\r\n    <!-- Code for the Header, as a component, I have the html here, and then I use the \r\napp.component.html to place it on my different views in the project. -->\r\n\r\n<!-- <div class=\"header header-6\">\r\n    <div class=\"branding\">\r\n        <img class=\"brand-logo cursor-pointer\" src=\"./assets/img/TS-Logo-1.png\" routerLink=\"/home\"/>\r\n    </div>\r\n    <div class=\"header-actions\"> -->\r\n        <!--Here is the different way Angular does routing between it's views, \r\n        I really like it because it when I read it, I know what a routerLink is without having to think too hard about it-->\r\n        <!-- <a routerLink=\"/home\" class=\"nav-link nav-text cursor-pointer\">Home</a>\r\n        <a routerLink=\"/about-me\" class=\"nav-link nav-text cursor-pointer\">About Me</a>\r\n        <a routerLink=\"/newsletter\" class=\"nav-link nav-text cursor-pointer\">Newsletter</a>\r\n        <a routerLink=\"/registration\" class=\"nav-link nav-text cursor-pointer\">Registration</a>\r\n        <a class=\"nav-link nav-text\">\r\n            <span class=\"cursor-pointer\" (click)=\"loginPage()\" *ngIf=\"(isAuthenticated | async) == false\">Sign In</span>\r\n            <span class=\"cursor-pointer\" (click)=\"logout()\" *ngIf=\"isAuthenticated | async\">Sign Out</span> \r\n        </a>\r\n    </div> -->\r\n    <!--This is the just the code for the display of the shopping cart but not the actual shopping cart itself\r\n    I have the class of \"is-highlight\" because the website I'm redoing uses a lot of blue. I wanted a more clean and \r\n    sleek website, but wanted to honor the blue in mine.-->\r\n    <!-- <div class=\"header-cart\" (click)=\"toggleCart()\">\r\n        <app-shopping-cart></app-shopping-cart>\r\n        <span class=\"cart-qty\">{{cartQty | async}}</span>\r\n        <clr-icon shape=\"shopping-cart\" size=\"18\" class=\"is-highlight\"></clr-icon>\r\n    </div>\r\n</div> -->\r\n\r\n<!--For next time, I would like to incorporate more of the business name bigger in the title. I would also like to \r\nadd something to tell the customers what they can do on the site, I just don't know how you do that so it doesn't happen everytime\r\nthey come to the website. Some sort of pop-up to what they can do? I'm not sure what, just something.-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-display/product-display.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-display/product-display.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clr-col-sm-12 clr-col-md-6 clr-col-lg-4 clr-col-xl-3\" *ngFor=\"let item of productList; let i = index\">\r\n    <!--Block Element and Modifer naming conventions-->\r\n    <div class=\"product-wrapper\">\r\n        <div class=\"product-item\">\r\n            <div class=\"product-item__image\">\r\n                <!--Within this is the Function OpenLightbox, which is the action of clicking on this image\r\n                and then the picture will display at its true size. It will also display its description beneath it-->\r\n                <span role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md\">\r\n                    <img class=\"product-img\" src=\"./{{item.payload.doc.data().productPhoto}}\"\r\n                        alt={{item.payload.doc.data().productDescription}}\r\n                        (click)=\"productAction($event, item, 'views'); openLightbox(item, i)\" />\r\n                    <span class=\"tooltip-content\">Click me to see the picture</span>\r\n                </span>\r\n\r\n            </div>\r\n            <div class=\"product-item__name\">\r\n                <span role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md\">\r\n                    <a\r\n                        routerLink=\"/image/{{item.payload.doc.data().productID}}\">{{item.payload.doc.data().productName}}</a>\r\n                    <span class=\"tooltip-content\">Click me to comment on my picture!</span>\r\n                </span>\r\n                <div>\r\n                    <span role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md\">\r\n                        <span class=\"action-count\">{{item.payload.doc.data().views}}</span>\r\n                        <clr-icon shape=\"eye\" class=\"is-solid is-highlight\" title=\"views\"></clr-icon>\r\n                        <span class=\"tooltip-content\">Total view count</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"product-item__actions\">\r\n                <!-- <div (click)=\"productAction($event, item, 'likes')\">\r\n                    <span class=\"action-count\">{{item.payload.doc.data().likes}}</span>\r\n                    <clr-icon shape=\"heart\" class=\"is-solid is-highlight\" title=\"likes\"></clr-icon>\r\n                </div> -->\r\n                <div>\r\n                    <!--This click function adds the product to the arraylist cartItem, passing the item-->\r\n                    <span role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md\">\r\n                        <button class=\"btn btn-primary btn-block\" (click)=\"addProductToCart(item)\">Add To Cart</button>\r\n                        <span class=\"tooltip-content\">Add To Cart</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <clr-icon shape=\"shopping-bag\" class=\"is-solid is-highlight\" (click)=\"addProductToCart(item)\">\r\n    </clr-icon>\r\n    <span class=\"tooltip-content\">Add To Cart</span> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--So any time you see *ngIf=\" | async\" its Redux returning the observable angular and processes\r\nit in the view using the async\r\nLiterally, the Redux Store is \"listening\" for a change. The Async pipe listens for the change and auto subscribes in the view\r\nReference: https://blog.angular-university.io/angular-reactive-templates/-->\r\n\r\n<!--Within this shopping cart, you see the html to set-up what the cart will look like. Eventually, I would like this to pull\r\nup in a new page-like Amazon or Etsy. For this project, I set it up to open up on a click on the shopping cart icon in the nav bar.\r\nIt displays the product, the price, description, and qty. It also displays the Purchase Button.\r\nIn the next project, my goal is to include icons which increase and decrese qty, another button to remove products-->\r\n<div class=\"shopping-cart\" *ngIf=\"showCart | async\">\r\n    <div class=\"shopping-cart__list\">\r\n        <ul class=\"list-items\">\r\n            <li class=\"list-item\" *ngFor=\"let item of cartItems | async\">\r\n                <div class=\"list-item__namePrice\">\r\n                    <div class=\"d-flex d-flex__center-sb product-info\">\r\n                        <!--The {{}} are interpolation. In Angular there are lots of different ways to use them. Here\r\n                        its saying I want the item in the row in the array and the productName or the productPrice is the array property-->\r\n                        <span>{{item.payload.doc.data().productName}}</span> \r\n                        <span>{{item.payload.doc.data().productPrice}}</span>\r\n                    </div>\r\n                    <div>\r\n                        <!--Reference for interpolation: https://angular.io/guide/template-syntax-->\r\n                        <span>QTY: {{item.cartQty}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"list-item__desc\">\r\n                    <span>{{item.payload.doc.data().productDescription}}</span>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!--This class is the actions of the cart. The only action in the cart currently is the button.\r\n        It's saying that if the array of cartItems(which Tyler, this array can be found in the cart array in the redux store) \r\n        is greater than 0, to display the the purchase button (if not, don't display the button). If the user clicks the button,\r\n        the function clearCart() will fire. Although at this point, clearCart() is not what I eventually want this button to do, \r\n        currently, it makes it looks like the user purchases the photos without actually putting in their info.-->\r\n    <div class=\"shopping-cart__actions\">\r\n            <button *ngIf=\"(cartItems | async).length > 0\" class=\"btn btn-primary btn-block\" (click)=\"clearCart()\">Purchase</button>\r\n            <!-- <button *ngIf=\"cartItems.length > 0\" class=\"btn btn-primary btn-block\" (click)=\"clearCart()\">Purchase</button> -->\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/about-me/about-me.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/about-me/about-me.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n    <div class=\"clr-row clr-justify-content-end mb-1\">\r\n        <div class=\"clr-col-sm-6 clr-sm-6\">\r\n            <div class=\"d-flex d-flex__row d-flex__center-end\">\r\n                <div class=\"about-me__img\">\r\n                    <img class=\"personal-img\" src=\"./assets/img/tSnopek.jpg\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"clr-col-sm-6 clr-sm-6\">\r\n\r\n                    <h2>At the right place at the right time</h2>\r\n                    <p>Born and raised in Waukesha, I have lived here all my life. \r\n                        I am an avid photographer and hunter reaching new audiences with the help of the internet every day. \r\n                        From Saturday night chicken fries at home to picking out our favorite 7oz flavors of Roxo soda, \r\n                        brought by the case, I am a classic Midwestern Photographer. \r\n                        Delivering the Waukesha Freeman on my paper route to now I sell pictures to the Freeman forty years later. \r\n                        With still some fuel left in my tank, enjoying the ride as long as I can.</p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view-wrapper\">\r\n        <div class=\"clr-row\">\r\n            <div class=\"clr-col-sm-12\">\r\n                <h1>Dashboard</h1>\r\n            </div>\r\n            <div class=\"clr-col-sm-12 clr-col-md-4\">\r\n                <div class=\"clr-col-sm-12\" *ngIf=\"forumData.length > 0\">\r\n                        <h3>User Posts</h3>\r\n                    </div>\r\n                    <div class=\"clr-col-sm-12\" *ngFor=\"let entry of forumData\">\r\n                        <div class=\"clr-row\">\r\n                            <div class=\"clr-col-md-12\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-block\">\r\n            \r\n                                        <div class=\"card-text\">\r\n                                            {{entry?.payload?.doc?.data().comments}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card-footer\">\r\n                                        <button class=\"btn btn-sm btn-link\" disabled>\r\n                                            <span>Likes: {{entry?.payload?.doc?.data().likes}}</span>\r\n                                        </button>\r\n                                        <button class=\"btn btn-sm btn-link\" disabled>\r\n                                            <span>Dislikes: {{entry?.payload?.doc?.data().dislikes}}</span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n            <div class=\"clr-col-sm-12 clr-col-md-8\" >\r\n                <div class=\"clr-row\">\r\n                    <div class=\"clr-col-sm-6\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"card-title\">\r\n                                    Forum Likes\r\n                                </div>\r\n                                <div class=\"card-count\">\r\n                                    {{likeTotal}}\r\n                                </div>\r\n                            </div>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clr-col-sm-6\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"card-title\">\r\n                                    Forum Dislikes\r\n                                </div>\r\n                                  <div class=\"card-count\">\r\n                                    {{dislikeTotal}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"clr-row\">\r\n                    <div class=\"clr-col-sm-12\">\r\n                        <h3 class=\"badge-likes-title\">Earned Like Badges</h3>\r\n                        <ng-container *ngFor=\"let item of badgeArray\">\r\n                            <span class=\"badge\" \r\n                                [class.badge-purple]=\"item == 5\" \r\n                                [class.badge-blue]=\"item == 10\"\r\n                                [class.badge-success]=\"item == 15\">\r\n                                {{item}} - \r\n                                <span *ngIf=\"item == 5\"> Cool Cool</span>\r\n                                <span *ngIf=\"item == 10\"> Awesome</span>\r\n                                <span *ngIf=\"item == 15\"> Spectacular</span>\r\n                                <span *ngIf=\"item == 20\"> Holy Comments Batman!</span>\r\n                            \r\n                            </span>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div class=\"clr-col-sm-12 mt-1\">\r\n                        <h3 class=\"badge-likes-title\">Earned Dislike Badges</h3>\r\n                        <ng-container *ngFor=\"let item of dislikeBadgeArray\">\r\n                            <span class=\"badge badge-danger\">\r\n                                {{item}} - \r\n                                <span *ngIf=\"item == 5\">Yikes</span>\r\n                                <span *ngIf=\"item == 10\">Woah</span>\r\n                                <span *ngIf=\"item == 15\">Probably need to fix something</span>\r\n                                <span *ngIf=\"item == 20\"><a href=\"https://youtu.be/YSvN3upoLDU\" target=\"_blank\">Shame Shame Shame</a></span>\r\n                                <span *ngIf=\"item == 25\">Why you being so mean!?</span>\r\n                            </span>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/error.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/error.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n        <div class=\"clr-row clr-justify-content-end mb-1\">\r\n            <div class=\"clr-col-sm-6 clr-sm-6\">\r\n                <div class=\"d-flex d-flex__row d-flex__center-end\">\r\n                    <div class=\"error-me__img\">\r\n                        <img class=\"error-img\" src=\"./assets/img/logoWhoops.PNG\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"clr-col-sm-6 clr-sm-6\">\r\n    \r\n                        <h2>I think you ran out of film...</h2>\r\n                        <p>Shoot, literally. The page you are looking for is not this page.\r\n                            In fact, I have no idea how you found this page, but found it you did.\r\n                            Just like any photographer worth their weight in recyclable film canisters, you have managed\r\n                            to shoot with your camera not completely closed. Or loaded your film wrong. Or left the lense cover on.\r\n                            It's okay, we all make mistakes. Find your way out of the dark room and back to the homepage.\r\n                        </p>\r\n            </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n    <div class=\"clr-row clr-justify-content-end mb-1\">\r\n        <div class=\"clr-col-sm-6 clr-offset-sm-6\">\r\n            <div class=\"d-flex d-flex__row d-flex__center-end\">\r\n                <div class=\"dropdown\" [class.open]=\"openDropdown\">\r\n                    <button class=\"dropdown-toggle btn btn-primary-outline\" type=\"button\" (click)=\"toggleFilterBtn()\">\r\n                        Filter\r\n                        <clr-icon shape=\"caret down\"></clr-icon>\r\n                    </button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(0)\">Sort A to Z</div>\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(1)\">Sort Z to A</div>\r\n                        <!-- <div class=\"dropdown-item\" (click)=\"sendFilterQuery(2)\">Sort by most liked</div> -->\r\n                        <div class=\"dropdown-item\" (click)=\"sendFilterQuery(3)\">Sort by most views</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-product-display class=\"clr-row\" [products]=\"items\" (productSelected)=\"productSelected($event)\">\r\n    </app-product-display>\r\n</div>\r\n\r\n<!--This Modal opens when the user first uses teh website to tell them about it.-->\r\n<clr-modal [(clrModalOpen)]=\"opened\" [clrModalClosable]=\"false\">\r\n    <h3 class=\"modal-title\">Welcome to TimSnopek.Com</h3>\r\n    <div class=\"modal-body\">\r\n        <p>Welcome to my Photography Website! You might be a digital photographer, or a film\r\n            snob, but all are welcome. I post the news in photos from Southeastern Wisconsin.\r\n            Check out my photos, make some comments, sign-up for my newsletter or \r\n            earn some badges. \r\n\r\n            Thanks for coming out!</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"closedDialog()\">\r\n            Okay\r\n        </button>\r\n    </div>\r\n</clr-modal>\r\n\r\n\r\n\r\n<!-- <span *ngIf=\"items.length > 0; else emptyContents\"></span>\r\n<span *ngFor=\"let item of items\">\r\n    {{item.name}}\r\n    {{item.value}}\r\n</span>\r\n\r\n<ng-template #emptyContents>\r\n    No items in array\r\n</ng-template> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/image/image.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/image/image.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- https://v2.clarity.design/grid -->\r\n<div class=\"view-wrapper\">\r\n    <div class=\"clr-row clr-justify-content-end mb-1\">\r\n        <div class=\"clr-col-sm-12\">\r\n            <img src=\"{{product?.productPhoto}}\" style=\"width: 100%; height: auto;\" alt=\"{{product?.productName}}\">\r\n            <div class=\"product-item__name\">\r\n                <h1>{{product?.productName}}</h1>\r\n                <p>{{product?.productDescription}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"clr-col-sm-12 p-0\" *ngIf=\"user !== null\">\r\n            <form #f=\"ngForm\" (ngSubmit)=\"submitForum(f)\">\r\n                <div class=\"clr-row\">\r\n                    <div class=\"clr-col-sm-12\">\r\n                        <clr-textarea-container>\r\n                            <label>Comments</label>\r\n                            <textarea clrTextarea style=\"width: 100%;\" [(ngModel)]=\"comment\" name=\"comment\" required></textarea>\r\n                        </clr-textarea-container>\r\n                    </div>\r\n                    <div class=\"clr-col-sm-12\">\r\n                        <button class=\"btn btn-primary\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"clr-col-sm-12\" *ngIf=\"forumData.length > 0\">\r\n            <h3>Forum</h3>\r\n        </div>\r\n        <div class=\"clr-col-sm-12\" *ngFor=\"let entry of forumData\">\r\n            <div class=\"clr-row\">\r\n                <div class=\"clr-col-lg-5 clr-col-md-8 clr-col-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-block\">\r\n\r\n                            <div class=\"card-text\">\r\n                                {{entry?.payload?.doc?.data().comments}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <span role=\"tooltip\" aria-haspopup=\"true\" class=\"tooltip tooltip-md\">\r\n                            <button class=\"btn btn-sm btn-link\" (click)=\"addLikeToForumComment(entry)\"><clr-icon shape=\"thumbs-up\"></clr-icon> Like</button>\r\n                            <button class=\"btn btn-sm btn-link\" (click)=\"addDislikeToForumComment(entry)\">\r\n                                <clr-icon shape=\"thumbs-down\"></clr-icon> DisLike\r\n                            </button>\r\n                            <span class=\"tooltip-content\">Click me to like or dislike this comment</span>\r\n                        </span>\r\n                            <!-- <button class=\"btn btn-sm btn-link\">\r\n                                    <clr-icon shape=\"star\" (click)=\"setStarRating(1, entry)\" [class.is-solid]=\"entry?.payload?.doc?.data().rating == 1 || entry?.payload?.doc?.data().rating == 2 || entry?.payload?.doc?.data().rating == 3 || entry?.payload?.doc?.data().rating == 4 || entry?.payload?.doc?.data().rating == 5\"></clr-icon>\r\n                                    <clr-icon shape=\"star\" (click)=\"setStarRating(2, entry)\" [class.is-solid]=\"entry?.payload?.doc?.data().rating == 2 || entry?.payload?.doc?.data().rating == 3 || entry?.payload?.doc?.data().rating == 4 || entry?.payload?.doc?.data().rating == 5\"></clr-icon>\r\n                                    <clr-icon shape=\"star\" (click)=\"setStarRating(3, entry)\" [class.is-solid]=\"entry?.payload?.doc?.data().rating == 3 || entry?.payload?.doc?.data().rating == 4 || entry?.payload?.doc?.data().rating == 5\"></clr-icon>\r\n                                    <clr-icon shape=\"star\" (click)=\"setStarRating(4, entry)\" [class.is-solid]=\"entry?.payload?.doc?.data().rating == 4 || entry?.payload?.doc?.data().rating == 5\"></clr-icon>\r\n                                    <clr-icon shape=\"star\" (click)=\"setStarRating(5, entry)\" [class.is-solid]=\"entry?.payload?.doc?.data().rating == 5\"></clr-icon>\r\n                            </button> -->\r\n                            <button class=\"btn btn-sm btn-link\" disabled>\r\n                                <span>Likes: {{entry?.payload?.doc?.data().likes}}</span>\r\n                            </button>\r\n                            <button class=\"btn btn-sm btn-link\" disabled>\r\n                                <span>Dislikes: {{entry?.payload?.doc?.data().dislikes}}</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view-wrapper\">\r\n        <div class=\"clr-row\">\r\n            <div class=\"clr-col-sm-6 clr-offset-sm-3\">\r\n                <h1>Login</h1>\r\n            </div>\r\n            <div class=\"clr-col-sm-6 clr-offset-sm-3\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error !== ''\">\r\n                    <div class=\"alert-items\">\r\n                        <div class=\"alert-item static\">\r\n                            <div class=\"alert-icon-wrapper\">\r\n                                <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\r\n                            </div>\r\n                            <span class=\"alert-text\">\r\n                                {{error}}\r\n                            </span>\r\n                        </div>                             \r\n                    </div>\r\n                </div>\r\n                <!-- #f is used to shorthand in order to access the ngForm model in the view state -->\r\n                <form class=\"clr-form\" #f=\"ngForm\" (ngSubmit)=\"login(f)\">\r\n                    <div class=\"clr-form-control\">\r\n                        <label for=\"example\" class=\"clr-control-label\">Email</label>\r\n                        <div class=\"clr-control-container\">\r\n                            <div class=\"clr-input-wrapper\">\r\n                                <input type=\"text\" id=\"email\" name=\"email\" required [(ngModel)]=\"formModel.email\" placeholder=\"Example Input\" class=\"clr-input\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clr-form-control\">\r\n                        <label for=\"example\" class=\"clr-control-label\">Password</label>\r\n                        <div class=\"clr-control-container\">\r\n                            <div class=\"clr-input-wrapper\">\r\n                                <input type=\"text\" id=\"password\" name=\"password\" required [(ngModel)]=\"formModel.password\" placeholder=\"Example Input\" class=\"clr-input\">\r\n                                <!-- <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon> -->\r\n                            </div>\r\n                            <!-- <span class=\"clr-subtext\">Error message</span> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clr-form-control\">\r\n                        <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newsletter/newsletter.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newsletter/newsletter.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view-wrapper\">\r\n    <div class=\"clr-row\">\r\n        <div class=\"clr-col-sm-12\">\r\n            <h1>Newsletter</h1>\r\n        </div>\r\n        <div class=\"clr-col-sm-6 clr-col-md-4 clr-col-lg-3\">\r\n            <!-- #f is used to shorthand in order to access the ngForm model in the view state -->\r\n            <form class=\"clr-form\" #f=\"ngForm\" (ngSubmit)=\"submitForm(f)\">\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">First Name</label>\r\n                    <div class=\"clr-control-container\" [class.clr-error]=\"!f.valid\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"firstName\" name=\"firstName\" required\r\n                                [(ngModel)]=\"formModel.firstName\" class=\"clr-input\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">Last Name</label>\r\n                    <div class=\"clr-control-container\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"lastName\" name=\"lastName\" required [(ngModel)]=\"formModel.lastName\"\r\n                                class=\"clr-input\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">Email</label>\r\n                    <div class=\"clr-control-container\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"email\" name=\"email\" required [(ngModel)]=\"formModel.email\"\r\n                                class=\"clr-input\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n                <div class=\"clr-col-sm-6 clr-sm-6\">\r\n\r\n                    <h2>Do you want to be at the right place at the right time?</h2>\r\n                    <p>Would you like news sent right to your email as it happens?\r\n                        Do you want to know what is going on in Waukesha county?\r\n                        Join my Newsletter emailing list and have everything sent directly to your email.\r\n                        If I'm at the right place at the right time, so can you!\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/registration/registration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/registration/registration.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view-wrapper\">\r\n    <div class=\"clr-row\">\r\n        <div class=\"clr-col-sm-6\">\r\n            <h1>Registration</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"clr-row\">\r\n        <!-- <div class=\"clr-col-sm-6 clr-offset-sm-3\"> -->\r\n        <!-- #f is used to shorthand in order to access the ngForm model in the view state -->\r\n        <div class=\"clr-col-sm-6 clr-col-md-4 clr-col-lg-3\">\r\n            <form class=\"clr-form\" #f=\"ngForm\" (ngSubmit)=\"submitForm(f)\">\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">First Name</label>\r\n                    <div class=\"clr-control-container\" [class.clr-error]=\"!f.valid\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"firstName\" name=\"firstName\" required\r\n                                [(ngModel)]=\"formModel.firstName\" class=\"clr-input\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">Last Name</label>\r\n                    <div class=\"clr-control-container\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"lastName\" name=\"lastName\" required [(ngModel)]=\"formModel.lastName\"\r\n                                class=\"clr-input\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">Email</label>\r\n                    <div class=\"clr-control-container\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"email\" name=\"email\" required [(ngModel)]=\"formModel.email\"\r\n                                class=\"clr-input\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <label for=\"example\" class=\"clr-control-label\">Password</label>\r\n                    <div class=\"clr-control-container\">\r\n                        <div class=\"clr-input-wrapper\">\r\n                            <input type=\"text\" id=\"password\" name=\"password\" required [(ngModel)]=\"formModel.password\"\r\n                                class=\"clr-input\">\r\n                            <!-- <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon> -->\r\n                        </div>\r\n                        <!-- <span class=\"clr-subtext\">Error message</span> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"clr-form-control\">\r\n                    <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"clr-col-sm-6 clr-sm-6\">\r\n            <h2>Join to Post</h2>\r\n            <p>As any good photographer knows, a picture is worth a thousand words. Well, I want to hear your words.\r\n                Register for my site and you'll be able to:</p>\r\n            <ul>\r\n                <li>Comment on photos</li>\r\n                <li>Like other people's posts</li>\r\n                <li>Earn Badges for your Comments!</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/shop/shop.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/shop/shop.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shop\"> Hello ShopComponent! </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/error.component */ "./src/app/views/error/error.component.ts");
/* harmony import */ var _views_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/about-me/about-me.component */ "./src/app/views/about-me/about-me.component.ts");
/* harmony import */ var _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/newsletter/newsletter.component */ "./src/app/views/newsletter/newsletter.component.ts");
/* harmony import */ var _views_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/shop/shop.component */ "./src/app/views/shop/shop.component.ts");
/* harmony import */ var _views_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/registration/registration.component */ "./src/app/views/registration/registration.component.ts");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "./src/app/views/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _guards_app_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/app.guard */ "./src/app/guards/app.guard.ts");
/* harmony import */ var _views_image_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/image/image.component */ "./src/app/views/image/image.component.ts");













//this is where I set up the routes for my website. By creating the paths here
//I easily could use the RouterLink in the rest of my website.
const routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about-me', component: _views_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"] },
    { path: 'newsletter', component: _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__["NewsletterComponent"] },
    { path: 'shop', component: _views_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: 'image/:id', component: _views_image_image_component__WEBPACK_IMPORTED_MODULE_12__["ImageComponent"] },
    { path: 'registration', component: _views_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'admin/dashboard', component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_guards_app_guard__WEBPACK_IMPORTED_MODULE_11__["AppGuard"]] },
    //This is for the Error page. A user could type in anything and be redirected to this page.
    { path: '**', component: _views_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  overflow-x: hidden;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.card-count {\n  font-size: 40px;\n  text-align: center;\n  font-weight: 800;\n  padding: 0.5em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy90aGlzIGlzIHRoZSBzY3NzIHBhZ2UgZm9yIHRoZSBlbnRpcmUgd2Vic2l0ZS4gVGhlIG9ubHkgdGhpbmcgSSBoYXZlIGluIGhlcmVcclxuLy9pcyB0byBoaWRlIHRoZSBzY3JvbGwgYmFyIGFjcm9zcyB0aGUgYm90dG9tIHdoZW4gdGhlIHdlYnNpdGUgaXMgYmVpbmcgcmVzaXplZFxyXG5cclxuYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wLTB7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY291bnQge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IC41ZW0gMDtcclxufSIsImJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWNvdW50IHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
//this is the app component.ts for the whole website. 
//the main piece for this page is the creation of the code
//for the routing for the website. 


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'web-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _views_registration_registration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/registration/registration.component */ "./src/app/views/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "./src/app/views/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./service/app.service */ "./src/app/service/app.service.ts");
/* harmony import */ var _guards_app_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/app.guard */ "./src/app/guards/app.guard.ts");
/* harmony import */ var _views_image_image_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/image/image.component */ "./src/app/views/image/image.component.ts");
//This page is the modules used throughout my website. I had to declare everything below-
//components, modules, and providers and then import in the respective libraries.


































let AppModule = class AppModule {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
        let logger = [Object(redux_logger__WEBPACK_IMPORTED_MODULE_23__["createLogger"])()];
        ngRedux.configureStore(_store_store__WEBPACK_IMPORTED_MODULE_21__["rootReducer"], _store_store__WEBPACK_IMPORTED_MODULE_21__["InitialState"], logger);
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_22__["NgRedux"] }
];
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
            _views_image_image_component__WEBPACK_IMPORTED_MODULE_33__["ImageComponent"],
            _views_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_20__["NewsletterComponent"],
            _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingCartComponent"],
            _views_registration_registration_component__WEBPACK_IMPORTED_MODULE_27__["RegistrationComponent"],
            _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_22__["NgReduxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxModule"]
        ],
        providers: [
            _guards_app_guard__WEBPACK_IMPORTED_MODULE_32__["AppGuard"],
            _service_app_service__WEBPACK_IMPORTED_MODULE_31__["AppService"],
            _service_data_service__WEBPACK_IMPORTED_MODULE_14__["DataRepositoryService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestore"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__["APP_BASE_HREF"], useValue: '/' },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_24__["HashLocationStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-wrapper {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.brand-logo-footer {\n  max-height: 80px;\n  width: auto;\n}\n\nfooter.app-footer {\n  background: #e6e8eb;\n  padding: 1.5em 0;\n}\n\n.footer-nav {\n  list-style: none;\n}\n\n.footer-nav li > a {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRGFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDVko7O0FEYUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDVko7O0FEYUE7RUFDUSxnQkFBQTtBQ1ZSOztBRFdRO0VBQ0ksV0FBQTtBQ1RaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSSBoYXZlIGEgc2ltcGxlIGZvb3RlciBmb3IgdGhpcyBwcm9qZWN0LCBidXQgSSBwbGFuIG9uIGV4cGFuZGluZyBpdCBmb3IgdGhlIG5leHQgcHJvamVjdC4gRm9yXG4vLyBzb21lIHJlYXNvbiB3aGVuIEkgZmlyc3QgZGlkIHRoaXMgZm9vdGVyLCBJIGJyb2tlIG15IHdlYnNpdGUgaW4gdGhlIHdvcnN0IHdheT4gSSB3YXMgZ2V0dGluZ1xuLy8gZXJyb3JzIGZvciB0aGluZ3MgSSBkaWRuJ3QgZXZlbiBoYXZlIGluIG15IGNvZGUuIEkgZGVsZXRlZCBldmVyeXRoaW5nLCBhbmQgc3RhcnRlZCBmcm9tIHNjcmF0Y2gga2VlcGluZyBpdFxuLy8gc3VwZXIgc2ltcGxlLlxuXG4vLyBJbiB0aGUgbmV4dCBwcm9qZWN0LCBJIHdvdWxkIGxpa2UgbXkgZm9vdGVyIHRvIGxvb2sgbW9yZSBwcm9mZXNzaW9uYWwsIG1vcmUgaW5mb3JtYXRpb24gb24gY29udGFjdGluZyB0aGUgY29tcGFueVxuLy8gYXMgd2VsbCBhcyBzb2NpYWwgbWVkaWEgbGlua3MuXG4uZm9vdGVyIHtcblxufVxuXG4uZm9vdGVyLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnJhbmQtbG9nby1mb290ZXJ7XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuZm9vdGVyLmFwcC1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNmU4ZWI7XG4gICAgcGFkZGluZzogMS41ZW0gMDtcbn1cblxuLmZvb3Rlci1uYXYge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAmIGxpID4gYXtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgfSIsIi5mb290ZXItd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5icmFuZC1sb2dvLWZvb3RlciB7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5mb290ZXIuYXBwLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNlNmU4ZWI7XG4gIHBhZGRpbmc6IDEuNWVtIDA7XG59XG5cbi5mb290ZXItbmF2IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5mb290ZXItbmF2IGxpID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// This is the typescript component page of the Footer. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.


let FooterComponent = class FooterComponent {
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background: #ffffff;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 2em;\n  position: fixed;\n  width: 100%;\n  z-index: 1500;\n  top: 0;\n  left: 0;\n}\n\n.header .branding, header .branding {\n  position: relative;\n}\n\n.brand-logo {\n  max-height: 80px;\n  width: auto;\n  position: fixed;\n  top: 10px;\n}\n\n.nav-link {\n  color: #333 !important;\n}\n\n.header-cart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 65px;\n}\n\nspan.cart-qty {\n  color: #0077B8;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n  .brand-logo {\n    display: none;\n  }\n\n  .header-hamburger-trigger > span, .header-hamburger-trigger > span::after, .header-hamburger-trigger > span::before {\n    background: #333;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0hKOztBRE1BO0VBQ0ksc0JBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRFNBO0VBQ0k7SUFDSSxhQUFBO0VDTk47O0VEU0U7SUFDSSxnQkFBQTtFQ05OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL015IGhlYWRlciB3YXMgc2ltcGxpc3RpYy4gSSB3YW50ZWQgaXQgdG8gYmUgY2xlYW4gYW5kIHNpbXBsZS4gV2hlbiBJIGZpcnN0IHN0YXJ0ZWQgYnVpbGRpbmcsIHRoZSBoZWFkZXIgd2FzIGdvaW5nIFxuLy90byBiZSBvbiB0aGUgbGVmdCBzaWRlIGJlZm9yZSBJIG1vdmVkIGl0IGJhY2sgdXAgdG8gdGhlIHRvcC4gSXQgbWlnaHQgcmV0dXJuIHRvIHRoZSBsZWZ0IHNpZGUgZHVyaW5nIHRoZSBzZWNvbmQgXG4vL3BhcnQgb2YgdGhpcyBwcm9qZWN0LlxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTUwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmhlYWRlciAuYnJhbmRpbmcsIGhlYWRlciAuYnJhbmRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJyYW5kLWxvZ297XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1jYXJ0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNjVweDtcbn1cblxuLy9cbnNwYW4uY2FydC1xdHl7XG4gICAgY29sb3I6ICMwMDc3Qjg7XG59XG5cbi5jdXJzb3ItcG9pbnRlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLmJyYW5kLWxvZ297XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhlYWRlci1oYW1idXJnZXItdHJpZ2dlcj5zcGFuLCAuaGVhZGVyLWhhbWJ1cmdlci10cmlnZ2VyPnNwYW46OmFmdGVyLCAuaGVhZGVyLWhhbWJ1cmdlci10cmlnZ2VyPnNwYW46OmJlZm9yZXtcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE1MDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmhlYWRlciAuYnJhbmRpbmcsIGhlYWRlciAuYnJhbmRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbnNwYW4uY2FydC1xdHkge1xuICBjb2xvcjogIzAwNzdCODtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnJhbmQtbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5oZWFkZXItaGFtYnVyZ2VyLXRyaWdnZXIgPiBzcGFuLCAuaGVhZGVyLWhhbWJ1cmdlci10cmlnZ2VyID4gc3Bhbjo6YWZ0ZXIsIC5oZWFkZXItaGFtYnVyZ2VyLXRyaWdnZXIgPiBzcGFuOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/app.service */ "./src/app/service/app.service.ts");
// This is the typescript component page of the Header. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.






let HeaderComponent = 
//cartQty is the reference to the cartQty array in the Redux Store
//Redux allows for easier passing between parent and children. Instead of passing up and down 
//huge chains of parents and children, Redux is more circular.
class HeaderComponent {
    constructor(ngRedux, router, route, appService) {
        this.ngRedux = ngRedux;
        this.router = router;
        this.route = route;
        this.appService = appService;
        if (this.appService.getUser()) {
            this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].StoreUser, body: { user: this.appService.getUser() } });
            this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].Authenticated, body: { isAuthenticated: true } });
        }
    }
    ngOnInit() {
        console.log('header comp init');
        console.log(this.isAuthenticated);
        console.log(this.user);
    }
    toggleCart() {
        this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].ShowCart });
    }
    toggleNav() {
        document.querySelector('.main-container').classList.toggle('open-hamburger-menu');
    }
    logout() {
        localStorage.clear();
        this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].Authenticated, body: { isAuthenticated: false } });
        this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].RemoveUser });
        if (this.router.url === '/admin/dashboard') {
            this.router.navigate(['/']);
        }
    }
    loginPage() {
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_service_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])((s) => s.totalCartQty)
], HeaderComponent.prototype, "cartQty", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])((s) => s.isAuthenticated)
], HeaderComponent.prototype, "isAuthenticated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])((s) => s.user)
], HeaderComponent.prototype, "user", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
    //cartQty is the reference to the cartQty array in the Redux Store
    //Redux allows for easier passing between parent and children. Instead of passing up and down 
    //huge chains of parents and children, Redux is more circular.
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/product-display/product-display.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/product-display/product-display.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-img {\n  width: 100%;\n  height: auto;\n  min-height: 160px;\n}\n\n.product-item__name {\n  width: 100%;\n  font-weight: 600;\n  padding: 0.15em 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.action-count {\n  padding-right: 5px;\n}\n\n.product-item__actions {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.product-item__image {\n  max-height: 160px;\n  overflow: hidden;\n}\n\n.product-item {\n  margin: 1.5em 0;\n}\n\nclr-icon.is-solid.is-highlight {\n  cursor: pointer;\n}\n\nimg.product-img {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRpc3BsYXkvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWRpc3BsYXlcXHByb2R1Y3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRpc3BsYXkvcHJvZHVjdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1JKOztBRFdBO0VBQ0ksa0JBQUE7QUNSSjs7QURZQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDVEo7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDVko7O0FEYUE7RUFDSSxlQUFBO0FDVko7O0FEYUE7RUFDSSxlQUFBO0FDVko7O0FEYUE7RUFDSSxlQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtZGlzcGxheS9wcm9kdWN0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoZXJlIHdhcyBhIGxvdCBvZiBwbGF5aW5nIHdpdGggdGhlIHByb2R1Y3QtZGlzcGxheS5jb21wb25lbnQuIEkgd2Fzbid0IHN1cmUgaG93IEkgd2FudGVkIG15IHBpY3R1cmVzLiBJIHdvdWxkIGV2ZW50dWFsbHlcbi8vcmVhbGx5IGxpa2UgdG8gYXR0ZW1wdCBtYXNvbnJ5IHdpdGggbXkgcGhvdG9zIChodHRwczovL3d3dy5zaXRlcG9pbnQuY29tL3VuZGVyc3RhbmRpbmctbWFzb25yeS1sYXlvdXQvKSBidXQgSSBqdXN0IGNvdWxkbid0IFxuLy9maWd1cmUgaXQgb3V0LiBJdCB3YXMgZ29pbmcgdG8gYmUgdGhlIGxhc3QgdGhpbmcgSSBkaWQuIEkgYWxzbyB3YW50ZWQgdG8gZmlndXJlIG91dCBQaW50ZXJlc3QncyBuZXdlc3QgdXBkYXRlLCB3aGVyZVxuLy9hZnRlciB5b3UgcGluIHNvbWV0aGluZywgeW91IGFjdHVhbGx5IHNlZSBpdCBzd29vc2ggaW50byB5b3VyIGFjY291bnQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuIEkgd291bGQgbG92ZSB0byBhdHRlbXB0IGFuIGFuaW1hdGlvbi5cblxuLnByb2R1Y3QtZGlzcGxheSB7XG5cbn1cblxuLnByb2R1Y3QtaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxNjBweDtcbn1cblxuLnByb2R1Y3QtaXRlbV9fbmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAuMTVlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hY3Rpb24tY291bnR7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4vL2ZsZXgtZGlyZWN0aW9uIGhhcyBiZWNvbWUgb25lIG9mIG15IGZhdm9yaXRlIFNDU1MgdG9vbHMgdG8gZ2V0IG15IGl0ZW1zL3RleHQgd2hlcmUgSSB3YW50ZWQgdGhlbSB0byBnb1xuLnByb2R1Y3QtaXRlbV9fYWN0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4ucHJvZHVjdC1pdGVtX19pbWFnZSB7XG4gICAgbWF4LWhlaWdodDogMTYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3QtaXRlbSB7XG4gICAgbWFyZ2luOiAxLjVlbSAwO1xufVxuXG5jbHItaWNvbi5pcy1zb2xpZC5pcy1oaWdobGlnaHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nLnByb2R1Y3QtaW1nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLnByb2R1Y3QtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMTYwcHg7XG59XG5cbi5wcm9kdWN0LWl0ZW1fX25hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMC4xNWVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFjdGlvbi1jb3VudCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtaXRlbV9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtaXRlbV9faW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3QtaXRlbSB7XG4gIG1hcmdpbjogMS41ZW0gMDtcbn1cblxuY2xyLWljb24uaXMtc29saWQuaXMtaGlnaGxpZ2h0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcucHJvZHVjdC1pbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/product-display/product-display.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-display/product-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDisplayComponent", function() { return ProductDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
// This is the typescript component page of the Header. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.





let ProductDisplayComponent = class ProductDisplayComponent {
    //this is the constructor for lightbox. Lightbox is the widget I found to make my pictures expand in my Home View.
    constructor(_lightbox, ngRedux) {
        this._lightbox = _lightbox;
        this.ngRedux = ngRedux;
        this.productList = [];
        this.productSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    //this function is used to be a defined callback function on each element of an array, 
    //and returns an array that contains the results
    ngOnChanges() {
        this.productList = this.products.map(i => {
            i.src = './' + i.payload.doc.data().productPhoto;
            i.caption = i.payload.doc.data().productDescription;
            return i;
        });
        console.log('=== ngOnChanges from ProductDisplayComponent ===');
        console.log(this.products);
    }
    //originally when I was trying to figure out how to pass the product to the parent view, but 
    //then I switched to using the Redux Store instead.
    // selectedProduct(item: any){
    // 	console.log(item);
    // 	console.log('item to be passed to parent');
    // 	this.productSelected.emit(item)
    // }
    //This function also is part of the Lightbox widget. I did not write this code, it was the widget's code.
    productAction(event, item, type) {
        let selection = {
            event: event,
            item: item,
            type: type
        };
        this.productSelected.emit(selection);
    }
    //This is the function is for the Lightbox widget I'm using. It's passing in the product and the index number
    //while saying open the lightbox of this product from the productList from this index
    openLightbox(item, index) {
        this._lightbox.open(this.productList, index);
    }
    //This is the function to add the Product to the Cart 
    //the Dispatch triggers a State Change(the only function to do so)
    //We want to let the Redux Store know we added a product to a cart-so we must dispatch it.
    addProductToCart(item) {
        this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__["ReduxStoreActions"].AddToCart, product: item });
    }
};
ProductDisplayComponent.ctorParameters = () => [
    { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
];
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



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".shopping-cart {\n  position: fixed;\n  top: 62px;\n  right: 22px;\n  background: #fff;\n  width: 400px;\n  min-height: 80px;\n  padding: 0.5em;\n  border: 1px solid #eee;\n  z-index: 1000;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  color: #333;\n}\n\nli.list-item {\n  padding: 1em;\n  margin-bottom: 5px;\n}\n\n.list-item__namePrice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n}\n\nul.list-items {\n  list-style: none;\n}\n\n.list-item__desc {\n  font-size: 12px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.product-info {\n  width: 100%;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L0M6XFxVc2Vyc1xcYWJieS1cXERlc2t0b3BcXERldlxcanMyXFxqczJNaWR0ZXJtLVdlYkFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSwrR0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BwaW5nLWNhcnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYycHg7XG4gICAgcmlnaHQ6IDIycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbmxpLmxpc3QtaXRlbSB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxpc3QtaXRlbV9fbmFtZVByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnVsLmxpc3QtaXRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW1fX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0LWluZm97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iLCIuc2hvcHBpbmctY2FydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MnB4O1xuICByaWdodDogMjJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgei1pbmRleDogMTAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbmxpLmxpc3QtaXRlbSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGlzdC1pdGVtX19uYW1lUHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnVsLmxpc3QtaXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdC1pdGVtX19kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0LWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");




let ShoppingCartComponent = 
//This has to do with the State Management of the Redux Store.
class ShoppingCartComponent {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ngOnInit() { }
    //here is the function for clearingcart(). Once again, dispatching this 
    //information to the state to change it.
    clearCart() {
        this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["ReduxStoreActions"].ClearCart });
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])((s) => s.showCart)
], ShoppingCartComponent.prototype, "showCart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])((s) => s.cart)
], ShoppingCartComponent.prototype, "cartItems", void 0);
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/components/shopping-cart/shopping-cart.component.scss")).default]
    })
    //This has to do with the State Management of the Redux Store.
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/guards/app.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guards/app.guard.ts ***!
  \*************************************/
/*! exports provided: AppGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGuard", function() { return AppGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/app.service */ "./src/app/service/app.service.ts");




let AppGuard = class AppGuard {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
        this.user = null;
    }
    canActivate(route, state) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log('App Guard');
                this.user = yield this.appService.getUser();
                console.log(this.user);
                if (this.user) {
                    resolve(true);
                }
                else {
                    this.router.navigate(['/login']);
                    resolve(false);
                }
            }
            catch (e) {
                this.router.navigate(['/login']);
                resolve(false);
            }
        }));
    }
};
AppGuard.ctorParameters = () => [
    { type: _service_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppGuard);



/***/ }),

/***/ "./src/app/service/app.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppService = class AppService {
    //using local storage due to time constraints. Will NEVER do this in real life
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    getUser() {
        this.appUser = localStorage.getItem('user');
        return JSON.parse(this.appUser);
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRepositoryService", function() { return DataRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataRepositoryService = 
//This page is to set up using the Firebase Database in my code.
class DataRepositoryService {
    //this constructor is for the HttpClient
    constructor(http) {
        this.http = http;
        // this is the apiURL for Firebase
        this.apiUrl = 'AIzaSyDXqAYcerrj3t45L7VXfSMzg7XLtFe_iC0';
    }
    //
    getHttpHeaders() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }
    //these are setting up the get and post requests for the database
    getRequest(uri) {
        return this.http.get(this.apiUrl + uri, { headers: this.getHttpHeaders() });
    }
    postRequest(uri, data) {
        return this.http.post(this.apiUrl + uri, data, { headers: this.getHttpHeaders() });
    }
};
DataRepositoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataRepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    //This page is to set up using the Firebase Database in my code.
], DataRepositoryService);



/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: ReduxStoreActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxStoreActions", function() { return ReduxStoreActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
//these are the various Redux Store reducers I use in my code. I need to set these up here
//to be used in the rest of the code.

var ReduxStoreActions;
(function (ReduxStoreActions) {
    ReduxStoreActions["ShowCart"] = "ShowCart";
    ReduxStoreActions["AddToCart"] = "AddToCart";
    ReduxStoreActions["UpdateCart"] = "UpdateCart";
    ReduxStoreActions["ClearCart"] = "ClearCart";
    ReduxStoreActions["Authenticated"] = "Authenticated";
    ReduxStoreActions["StoreUser"] = "StoreUser";
    ReduxStoreActions["RemoveUser"] = "RemoveUser";
})(ReduxStoreActions || (ReduxStoreActions = {}));


/***/ }),

/***/ "./src/app/store/store.ts":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: InitialState, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tassign */ "./node_modules/tassign/lib/index.js");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_2__);
//Redux allows for a programmer to create a function that takes a state and return a state.
//Redux has different tools which make it really easy to code
//Redux is useful when you're building a medium to large single page application 
//with complex views.



const InitialState = {
    cart: [],
    totalCartQty: 0,
    isAuthenticated: false,
    showCart: false,
    user: null,
    lastUpdated: null
};
//This code controls the State of the application, in regards to what the 
//shopping cart does. The action determines how the state is changed.
//This returns a new State after the switch statement.
//In reducers (function below) you always have two arguments, the return State and then the action
function rootReducer(state, action) {
    //This switch helps return a new state, this is easy to test
    //
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].AddToCart:
            console.log(state);
            console.log(action);
            console.log(state.cart.length);
            if (state.cart.length > 0) {
                //This was code I had to try and total how many qty were in the cart.
                //This code blew UP my cart. It was like the fibonacci sequence, everything just kept multipling
                //I kept checking the console and could see the code was constantly adding, but never the right way
                //so I commented out and went searching the internet, and reached out for help.
                // state.cart.forEach((item, index) => {
                //   if(item.productID === action.product.productID){
                //     item.cartQty += 1;
                //     state.totalCartQty +=1;
                //   }
                // });  
                //this is how I ended up putting the qty in front of the shopping cart.
                //using the the state's cart, we find the parameter x, x being the ProductID,
                //and it must match the action product.productID from above
                let product = state.cart.find((x) => x.docId == action.product.docId);
                //these if statements controls the cartQty and the state of the totalCartQty
                //these reducers returns the new state, and internally updates the state
                //the store will internally update the state across the app
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
        //here are more of the switch statements
        //you see the function UpdateCart, ShowCart, ClearCart,
        //it returns the new state
        //the return of the tassign is a simple wrapper, subset-typed, non-mutating object.assign
        //aka returning the new state
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
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].Authenticated:
            console.log(state);
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                isAuthenticated: action.body.isAuthenticated,
                lastUpdated: new Date()
            });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].StoreUser:
            console.log(state);
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                user: action.body.user,
                lastUpdated: new Date()
            });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ReduxStoreActions"].RemoveUser:
            console.log(state);
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                user: null,
                lastUpdated: new Date()
            });
    }
    return state;
}


/***/ }),

/***/ "./src/app/views/about-me/about-me.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/about-me/about-me.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-me__img {\n  padding: 0 2em;\n}\n\n.personal-img {\n  max-height: 500px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWJvdXQtbWUvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFx2aWV3c1xcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LW1lIHtcblxufVxuXG4uYWJvdXQtbWVfX2ltZ3tcbiAgICBwYWRkaW5nOiAwIDJlbTtcbn1cblxuLnBlcnNvbmFsLWltZyB7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsIi5hYm91dC1tZV9faW1nIHtcbiAgcGFkZGluZzogMCAyZW07XG59XG5cbi5wZXJzb25hbC1pbWcge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/about-me/about-me.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/about-me/about-me.component.ts ***!
  \******************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutMeComponent = class AboutMeComponent {
    ngOnInit() { }
};
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/about-me/about-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.scss */ "./src/app/views/about-me/about-me.component.scss")).default]
    })
], AboutMeComponent);



/***/ }),

/***/ "./src/app/views/admin/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/app.service */ "./src/app/service/app.service.ts");





let DashboardComponent = 
//setting up the variables for the Dashboard page
class DashboardComponent {
    constructor(route, db, appService) {
        this.route = route;
        this.db = db;
        this.appService = appService;
        this.likeTotal = 0;
        this.dislikeTotal = 0;
        this.badgeArray = [];
        this.dislikeBadgeArray = [];
        this.forumData = [];
        this.user = this.appService.getUser();
        this.getForumData();
        this.getForumDataWithImages();
    }
    ngOnInit() { }
    //function to subscribe to the changes happening on this page. Making a request to Firebase for data
    getForumData() {
        let data = this.db.collection("forums", ref => ref.where('userDocID', '==', this.user.docId))
            .snapshotChanges();
        //subscribing to the result of the query to get actual data out of it
        data.subscribe((result) => {
            console.log(result);
            this.totalLikes(result);
            this.calculateBadgeCounts(result);
            this.forumData = result.map(item => {
                console.log(item.payload.doc.id);
                console.log(item.payload.doc.data());
                item.docId = item.payload.doc.id;
                return item;
            });
        });
    }
    //function to add up the total likes and the total dislikes on the comments
    totalLikes(data) {
        data.forEach(item => {
            this.likeTotal += item.payload.doc.data().likes;
            this.dislikeTotal += item.payload.doc.data().dislikes;
        });
    }
    //this function counts the total likes and dislikes to assign badges.
    calculateBadgeCounts(data) {
        let totalLikeCount = 0;
        let totalDislikeCount = 0;
        data.forEach(item => {
            console.log(item.payload.doc);
            totalLikeCount += item.payload.doc.data().likes;
            totalDislikeCount += item.payload.doc.data().dislikes;
        });
        console.log(totalLikeCount);
        let badgesTotal = Math.ceil(totalLikeCount / 5) * 5;
        console.log(badgesTotal);
        let badgesDislikeTotal = Math.ceil(totalDislikeCount / 5) * 5;
        this.addItemsToBadgeArray(badgesTotal, badgesDislikeTotal);
    }
    //create a function to add the items to the badge array, this way I can assign badges
    addItemsToBadgeArray(likeTotal, dislikeTotal) {
        for (var i = likeTotal; i > 0; i--) {
            if (i % 5) {
            }
            else {
                this.badgeArray.push(i);
            }
        }
        for (var i = dislikeTotal; i > 0; i--) {
            if (i % 5) {
            }
            else {
                this.dislikeBadgeArray.push(i);
            }
        }
        console.log(this.badgeArray);
        console.log(this.dislikeBadgeArray);
    }
    getForumDataWithImages() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html")).default
    })
    //setting up the variables for the Dashboard page
], DashboardComponent);



/***/ }),

/***/ "./src/app/views/error/error.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/error/error.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-me__img {\n  padding: 0 2em;\n}\n\n.error-img {\n  max-height: 500px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZXJyb3IvQzpcXFVzZXJzXFxhYmJ5LVxcRGVza3RvcFxcRGV2XFxqczJcXGpzMk1pZHRlcm0tV2ViQXBwL3NyY1xcYXBwXFx2aWV3c1xcZXJyb3JcXGVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcblxufVxuXG4uZXJyb3ItbWVfX2ltZ3tcbiAgICBwYWRkaW5nOiAwIDJlbTtcbn1cblxuLmVycm9yLWltZyB7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsIi5lcnJvci1tZV9faW1nIHtcbiAgcGFkZGluZzogMCAyZW07XG59XG5cbi5lcnJvci1pbWcge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    ngOnInit() { }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/views/error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let HomeComponent = class HomeComponent {
    // dependency injection (dpi) to user service based class
    constructor(db) {
        this.db = db;
        // public xx: string;
        // public xy: boolean;
        // public xz: number;
        // public zz: any; -> Object
        // public zzz: any[];
        // initialized variable
        this.openDropdown = false;
        this.opened = false;
        this.items = [];
        //this loop sets up the dialogue box to let users know what to do on the website
        let dialogStatus = localStorage.getItem("first_visit");
        if (dialogStatus === "true") {
        }
        else {
            this.opened = true;
        }
    }
    ngOnInit() {
        this.getDisplayProducts();
    }
    getDisplayProducts() {
        //Had to use snapshotChanges to get documentID for updating the record.
        //In order to access the data, you have to use item.payload.doc.data().productPhoto in the HTML file
        this.products = this.db.collection('/products').snapshotChanges();
        this.products.subscribe((result) => {
            console.log(result);
            this.items = result.map(item => {
                console.log(item.payload.doc.id);
                item.docId = item.payload.doc.id;
                return item;
            });
        }, (error) => {
            console.log(error);
        });
    }
    productSelected(data) {
        console.log(data);
        console.log(data.item.docId);
        console.log(data.item.payload.doc.data());
        if (data.type === "views") {
            this.db.collection('/products').doc(data.item.docId).update({
                "views": data.item.payload.doc.data().views += 1
            }).then(() => {
                this.getDisplayProducts();
            });
        }
        else {
            this.db.collection('/products').doc(data.item.docId).update({
                "likes": data.item.payload.doc.data().likes += 1
            }).then(() => {
                this.getDisplayProducts();
            });
        }
    }
    getProductFromExternalDB() {
        // // using service imported through dbi
        // this.dataService.getRequest('/product').subscribe((result: any) => {
        // 	//console.log(result);
        // 	this.items = result;
        // }, (error: any) => {
        // 	console.log(error);
        // });
    }
    sendFilterQuery(type) {
        this.toggleFilterBtn();
        switch (type) {
            case 0:
                this.products = this.db.collection('products', ref => ref.orderBy('productName', 'asc')).snapshotChanges();
                this.applyProductsToList(this.products);
                break;
            case 1:
                this.products = this.db.collection('products', ref => ref.orderBy('productName', 'desc')).snapshotChanges();
                this.applyProductsToList(this.products);
                break;
            case 2:
                this.products = this.db.collection('products', ref => ref.orderBy('likes', 'desc')).snapshotChanges();
                this.applyProductsToList(this.products);
                break;
            case 3:
                this.products = this.db.collection('products', ref => ref.orderBy('views', 'desc')).snapshotChanges();
                this.applyProductsToList(this.products);
                break;
        }
    }
    applyProductsToList(products) {
        products.subscribe((result) => {
            console.log(result);
            this.items = result.map(item => {
                console.log(item.payload.doc.id);
                item.docId = item.payload.doc.id;
                return item;
            });
        }, (error) => {
            console.log(error);
        });
    }
    toggleFilterBtn() {
        this.openDropdown = !this.openDropdown;
    }
    //this function changes the variable opened to false so it closes and doesn't reopen using Local Storage
    closedDialog() {
        localStorage.setItem("first_visit", "true");
        this.opened = false;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html")).default
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/views/image/image.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/image/image.component.ts ***!
  \************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/app.service */ "./src/app/service/app.service.ts");





let ImageComponent = class ImageComponent {
    //default class constructor, the firebase connection and the parameter of the route to get the info out.
    //pulling the imageID from the Angular Route Param, which is used to make a request to get the product
    //details.
    constructor(route, db, appService) {
        this.route = route;
        this.db = db;
        this.appService = appService;
        this.forumData = [];
        this.route.params.subscribe(parms => {
            this.imageId = parms.id;
            this.getForumData(this.imageId);
            this.imageData = this.db.collection('products', ref => ref.where('productID', '==', this.imageId).limit(1))
                .snapshotChanges();
            this.user = this.appService.getUser();
            console.log(this.user);
        });
    }
    //this is setting up listening for the changes to the database
    ngOnInit() {
        console.log(this.imageData);
        this.imageData.subscribe((result) => {
            this.product = result[0].payload.doc.data();
        });
    }
    //this function is setting up how to push a new doc to the database
    submitForum(f) {
        console.log(f);
        console.log(this.user);
        let newDoc = {
            comments: f.value.comment,
            dislikes: 0,
            likes: 0,
            photoDocID: this.imageId,
            rating: 0,
            userDocID: this.user.docId
        };
        this.db.collection("forums").add(newDoc);
        console.log(newDoc);
        f.reset();
    }
    //this function is setting up 
    getForumData(id) {
        let data = this.db.collection("forums", ref => ref.where('photoDocID', '==', id))
            .snapshotChanges();
        data.subscribe((result) => {
            console.log(result);
            this.forumData = result.map(item => {
                console.log(item.payload.doc.id);
                console.log(item.payload.doc.data());
                item.docId = item.payload.doc.id;
                return item;
            });
        });
    }
    //adding likes to the count in the database
    addLikeToForumComment(item) {
        // add new like to previous count and update in database
        console.log(item);
        this.db.collection('forums').doc(item.docId).update({ likes: item.payload.doc.data().likes += 1 });
        this.getForumData(this.imageId);
    }
    //adding dislikes to the count in the database
    addDislikeToForumComment(item) {
        // add new dislike to prevous count and update in database.
        console.log(item);
        let dislikes = item.payload.doc.data().dislikes;
        this.db.collection('forums').doc(item.docId).update({ dislikes: dislikes += 1 });
        this.getForumData(this.imageId);
    }
    setStarRating(rating, item) {
        // calculate previous rating with new rating to determine average. update in database
        console.log(rating);
        console.log(item);
        this.db.collection('forums').doc(item.docId).update({ rating: rating });
        this.getForumData(this.imageId);
    }
};
ImageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/image/image.component.html")).default
    })
], ImageComponent);



/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ "./src/app/service/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");







let LoginComponent = class LoginComponent {
    constructor(appService, router, db, ngRedux) {
        this.appService = appService;
        this.router = router;
        this.db = db;
        this.ngRedux = ngRedux;
        this.formModel = {};
        this.error = '';
    }
    ngOnInit() { }
    login(form) {
        this.user = this.db.collection('users', ref => ref.where('email', '==', form.value.email).limit(1))
            .snapshotChanges();
        this.user.subscribe((result) => {
            if (result[0].payload.doc.data().password === form.value.password) {
                this.error = '';
                let user = {
                    data: result[0].payload.doc.data(),
                    docId: result[0].payload.doc.id
                };
                this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_5__["ReduxStoreActions"].Authenticated, body: { isAuthenticated: true } });
                this.ngRedux.dispatch({ type: src_app_store_actions__WEBPACK_IMPORTED_MODULE_5__["ReduxStoreActions"].StoreUser, body: { user: user } });
                this.appService.setUser(user);
                this.router.navigate(['/admin/dashboard']);
            }
            else {
                this.error = 'Invalid user credentials. Please try again.';
            }
        });
        // make request to Firebase DB with a WHERE caluse. searching for existing user email.
        // if user is found return the record and compare passwords of user to database
        // if match then set the app user in the serivce as shown above
        // navigate the user to previous route.
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/views/newsletter/newsletter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/newsletter/newsletter.component.ts ***!
  \**********************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let NewsletterComponent = class NewsletterComponent {
    constructor(db) {
        this.db = db;
        //formModel for view
        this.formModel = {};
    }
    ngOnInit() { }
    submitForm(form) {
        console.log(form);
        this.db.collection("/users").add(form.value).then(() => {
            this.resetForm(form);
        });
    }
    resetForm(f) {
        f.reset();
    }
};
NewsletterComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
NewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'newsletter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newsletter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newsletter/newsletter.component.html")).default
    })
], NewsletterComponent);



/***/ }),

/***/ "./src/app/views/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let RegistrationComponent = class RegistrationComponent {
    constructor(db) {
        this.db = db;
        //formModel for view
        this.formModel = {};
    }
    ngOnInit() { }
    submitForm(form) {
        console.log(form);
        this.db.collection("/users").add(form.value).then(() => {
            this.resetForm(form);
        });
    }
    resetForm(f) {
        f.reset();
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/registration/registration.component.html")).default
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/views/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShopComponent = class ShopComponent {
    ngOnInit() { }
};
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/shop/shop.component.html")).default
    })
], ShopComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\abby-\Desktop\Dev\js2\js2Midterm-WebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map