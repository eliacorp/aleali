webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n.detail {\n  width: 100%;\n  height: auto; }\n\n.detail-cover {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n  .detail-cover img {\n    width: 100vw; }\n\n.detail-title {\n  position: fixed;\n  top: 25px;\n  right: 25px;\n  z-index: 4; }\n\n.detail-ul {\n  padding-top: 100vh;\n  z-index: 4;\n  position: relative;\n  padding-bottom: 150px; }\n  .detail-ul .detail-li {\n    width: 100vw;\n    height: auto;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    display: block; }\n    .detail-ul .detail-li:first-child {\n      padding-top: 150px;\n      margin-top: 0; }\n    .detail-ul .detail-li:last-child {\n      padding-bottom: 150px;\n      margin-bottom: 0; }\n    .detail-ul .detail-li .detail-img {\n      width: 100%;\n      margin: auto; }\n      .detail-ul .detail-li .detail-img img {\n        width: 50vw;\n        margin: auto;\n        display: block; }\n\n.detail-ul.styling {\n  padding: 0; }\n\n.detail-credits {\n  position: relative;\n  width: 100vw;\n  display: block;\n  height: auto;\n  z-index: 8;\n  margin-right: 25px; }\n  .detail-credits .detail-credits-ul {\n    position: relative;\n    display: block;\n    width: 100%;\n    right: 0; }\n    .detail-credits .detail-credits-ul .detail-credits-li {\n      text-align: right;\n      padding-right: 25px; }\n      .detail-credits .detail-credits-ul .detail-credits-li a {\n        display: inline-block; }\n\n.detail-gallery {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: scroll;\n  white-space: nowrap; }\n  .detail-gallery img {\n    display: inline-block;\n    width: 80vw; }\n\n.detail-video {\n  width: 100vw; }\n  .detail-video iframe {\n    width: 60vw;\n    height: 60vh;\n    display: block;\n    margin: auto; }\n"

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/main.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match_media_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = (function () {
    function GlobalService(_matchMediaService) {
        this._matchMediaService = _matchMediaService;
        this.pageLoading = true;
        this.isStyling = false;
        this.isAbout = false;
        this.isNav = '0';
    }
    GlobalService.prototype.setLoading = function (val) {
        this.pageLoading = val;
    };
    GlobalService.prototype.getValue = function (val) {
        return this.pageLoading;
    };
    GlobalService.prototype.toggleNav = function () {
        if (this._matchMediaService.IsPhone()) {
            if (this.isNav == '0') {
                this.isNav = '1';
            }
            else {
                this.isNav = '0';
            }
        }
        else {
            this.isNav = '3';
        }
        console.log(this.isNav);
        // if(DEVICES_DIRECTIVES.devices_directives_1.isMobile){
        //
        // }
    };
    return GlobalService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GlobalService.prototype, "isNav", void 0);
GlobalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__match_media_service__["a" /* MatchMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__match_media_service__["a" /* MatchMediaService */]) === "function" && _a || Object])
], GlobalService);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/variables.service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':enter', [
        // styles at start of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('1s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/fade-in.animation.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__(154);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_in_out_animation__ = __webpack_require__(156);
/* unused harmony namespace reexport */


//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/index.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(31);
/* unused harmony export slideInOutAnimation */
// import the required animation functions from the angular animations module

var slideInOutAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('slideInOutAnimation', [
    // end state styles for route container (host)
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':enter', [
        // styles at start of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':leave', [
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/slide-in-out.animation.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(_globalService, location) {
        this._globalService = _globalService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(false);
        this._globalService.pageLoading = false;
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(261),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _b || Object])
], AboutComponent);

var _a, _b;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/about.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {}
var AppComponent = (function () {
    function AppComponent(_globalService) {
        this._globalService = _globalService;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(262),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/app.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__share_share_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logo_logo_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logo_logotype_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_encodeURI_pipe__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_responsive__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_responsive__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__share_share_component__["a" /* ShareComponent */],
            __WEBPACK_IMPORTED_MODULE_12__logo_logo_component__["a" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__logo_logotype_component__["a" /* LogotypeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_encodeURI_pipe__["a" /* EncodeURIPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__feed_feed_module__["a" /* FeedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_responsive__["ResponsiveModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
                { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
                // {path:'', redirectTo:'home', pathMatch: 'full'},
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__shared_variables_service__["a" /* GlobalService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/app.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(_globalService) {
        this._globalService = _globalService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(false);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(263),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/contact.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedDetailComponent = (function () {
    function FeedDetailComponent(_route, _router, _feedService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
    }
    FeedDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        var type = this._route.snapshot.url["0"].path;
        console.log(type);
        this._feedService.getSingle(type, id)
            .subscribe(function (data) { return _this.detail = data; }, function (error) { return _this.error = error; });
    };
    return FeedDetailComponent;
}());
FeedDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-feed-detail',
        template: __webpack_require__(264),
        styles: [__webpack_require__(105)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _c || Object])
], FeedDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/feed-detail.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedGuard = (function () {
    function FeedGuard(_router) {
        this._router = _router;
    }
    FeedGuard.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid feed Id');
            this._router.navigate(['/feed']);
            return false;
        }
        ;
        return true;
    };
    return FeedGuard;
}());
FeedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FeedGuard);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/feed-guard.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_index__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import fade in animation

var FeedComponent = (function () {
    function FeedComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
    }
    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }
    FeedComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        console.log('ng on init');
        console.log(this.feed);
        if (!this.feed) {
            this.getPage(1);
        }
    };
    FeedComponent.prototype.concatResults = function (obj) {
        console.log("concat results");
        this.feed.results = this.feed.results.concat(obj.results);
        this.feed.page = obj.page;
        this.feed.total_pages = obj.total_pages;
        this.feed.prev_page = obj.prev_page;
        console.log(this.feed);
    };
    FeedComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getFeed('post', page)
            .subscribe(function (feed) {
            if (page == 1) {
                _this.feed = feed;
                _this._globalService.setLoading(false);
            }
            else {
                _this.concatResults(feed);
            }
        }, function (error) {
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    FeedComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        console.log(window.innerHeight);
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = window.innerHeight + window.pageYOffset;
        if ((windowBottom >= docHeight) && (this.paginationInProcess == false)) {
            // alert('bottom reached');
            if (this.feed) {
                if ((this.feed.page + 1) < this.feed.total_pages) {
                    this.getPage(this.feed.page + 1);
                }
            }
        }
    };
    return FeedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeedComponent.prototype, "onWindowScroll", null);
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'app-feed',
        template: __webpack_require__(265),
        styles: [__webpack_require__(254)],
        // make fade in animation available to this component
        animations: [__WEBPACK_IMPORTED_MODULE_4__animation_index__["a" /* fadeInAnimation */]],
        // attach the fade in animation to the host (root) element of this component
        host: { '[@fadeInAnimation]': '' }
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _b || Object, Object])
], FeedComponent);

var _a, _b;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/feed.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styling_styling_detail_styling_detail_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feed_guard_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_safeUrl_pipe__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_draggable__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_draggable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ProductFilterPipe } from './product-filter.pipe';





var FeedModule = (function () {
    function FeedModule() {
    }
    return FeedModule;
}());
FeedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__["a" /* StylingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__styling_styling_detail_styling_detail_component__["a" /* StylingDetailComponent */]
            // ProductFilterPipe
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular_draggable__["NgDraggableModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                // { path: '/event', component: EventComponent },
                { path: 'look/:id', component: __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */] },
                { path: 'fw/:id', component: __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */] },
                // { path: '/look', component: LookComponent },
                // { path: '/fashionweek', component: FashionweekComponent },
                { path: 'editorial', component: __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */] },
                { path: 'styling/:styling', component: __WEBPACK_IMPORTED_MODULE_4__styling_styling_detail_styling_detail_component__["a" /* StylingDetailComponent */] },
                { path: 'styling', component: __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__["a" /* StylingComponent */] },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__feed_component__["a" /* FeedComponent */] }
                // { path: 'fashionweek/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__feed_guard_service__["a" /* FeedGuard */],
            __WEBPACK_IMPORTED_MODULE_7__shared_safeUrl_pipe__["a" /* SafePipe */]
        ]
    })
], FeedModule);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/feed.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StylingDetailComponent = (function () {
    function StylingDetailComponent(_route, _router, _stylingService) {
        this._route = _route;
        this._router = _router;
        this._stylingService = _stylingService;
    }
    StylingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['styling'];
        var type = this._route.snapshot.url["0"].path;
        console.log(type);
        this._stylingService.getSingle(type, id)
            .subscribe(function (data) { return _this.styling_detail = data; }, function (error) { return _this.error = error; });
    };
    return StylingDetailComponent;
}());
StylingDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(266),
        styles: [__webpack_require__(105), __webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _c || Object])
], StylingDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/styling-detail.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StylingComponent = (function () {
    function StylingComponent(_globalService, _prismicService, document) {
        this._globalService = _globalService;
        this._prismicService = _prismicService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.isBackgroundStyling = false;
    }
    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }
    StylingComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        console.log('ng on init');
        console.log(this.styling);
        if (!this.styling) {
            this.getPage(0);
        }
    };
    StylingComponent.prototype.concatResults = function (obj) {
        this.styling.results = this.styling.results.concat(obj.results);
        this.styling.next_page = obj.next_page;
        this.styling.page = obj.page;
        this.styling.total_pages = obj.total_pages;
        this.styling.prev_page = obj.prev_page;
    };
    StylingComponent.prototype.getPage = function (page) {
        var _this = this;
        this._prismicService.getFeed('styling', page)
            .subscribe(function (styling) {
            if (page == 0) {
                _this.styling = styling;
                _this._globalService.setLoading(false);
            }
            else {
                _this.concatResults(styling);
            }
        }, function (error) {
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    StylingComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        console.log(window.innerHeight);
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = window.innerHeight + window.pageYOffset;
        if ((windowBottom >= docHeight) && (this.paginationInProcess == false)) {
            // alert('bottom reached');
            if (this.styling) {
                if ((this.styling.page + 1) < this.styling.total_pages) {
                    this.getPage(this.styling.next_page);
                }
            }
        }
    };
    StylingComponent.prototype.showBackgroundStyling = function (value) {
        this.isBackgroundStyling = value;
    };
    return StylingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StylingComponent.prototype, "onWindowScroll", null);
StylingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // selector: 'app-styling',
        template: __webpack_require__(267),
        styles: [__webpack_require__(256)]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _b || Object, Object])
], StylingComponent);

var _a, _b;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/styling.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoComponent = (function () {
    function LogoComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    return LogoComponent;
}());
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logo',
        template: __webpack_require__(268),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object])
], LogoComponent);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/logo.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogotypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogotypeComponent = (function () {
    function LogotypeComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogotypeComponent.prototype.ngOnInit = function () {
    };
    return LogotypeComponent;
}());
LogotypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logotype',
        template: __webpack_require__(269),
        styles: [__webpack_require__(258)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* trigger */])('navLiState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    height: '0px',
                    position: 'absolute'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    height: '50px',
                    position: 'relative'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* trigger */])('navUlState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object])
], LogotypeComponent);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/logotype.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_responsive__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_match_media_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavComponent = (function () {
    function NavComponent(location, router, _globalService, _responsiveModule, _matchMediaService) {
        var _this = this;
        this._globalService = _globalService;
        this._responsiveModule = _responsiveModule;
        this._matchMediaService = _matchMediaService;
        this.getSegment = function (url, index) {
            return url.replace(/^https?:\/\//, '').split('/')[index];
        };
        router.events.subscribe(function (val) {
            if (_this.getSegment(location.path(), 1) == 'styling') {
                _this.route = '/styling';
                _this._globalService.isStyling = true;
            }
            else if (location.path() != '') {
                _this.route = location.path();
                _this._globalService.isStyling = false;
            }
            else {
                _this.route = location.path();
                _this._globalService.isStyling = false;
            }
            if (location.path() == '/about') {
                _this._globalService.isAbout = true;
            }
            else {
                _this._globalService.isAbout = false;
            }
            //  else {
            //    this.route = 'Home'
            //  }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this._globalService.toggleNav();
        // if(RESPONSIVE_DIRECTIVE.IsMobile){
        //   this.isNav=true;
        // }
    };
    // openNav() {
    //   this.isNav=1;
    // }
    //
    // closeNav() {
    //   setTimeout(() => {
    //     this.isNav=0;
    //   }, 3000);
    // }
    NavComponent.prototype.onResize = function (event) {
        console.log(event);
        event.target.innerWidth;
        this._globalService.toggleNav();
    };
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavComponent.prototype, "onResize", null);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(270),
        styles: [__webpack_require__(259)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["f" /* trigger */])('navState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* style */])({
                    top: '-100vh'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* style */])({
                    top: '0'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* style */])({
                    top: 'auto'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* animate */])('500ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["f" /* trigger */])('navUlState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_variables_service__["a" /* GlobalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_responsive__["ResponsiveModule"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_responsive__["ResponsiveModule"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_match_media_service__["a" /* MatchMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_match_media_service__["a" /* MatchMediaService */]) === "function" && _e || Object])
], NavComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/nav.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { EncodeURIPipe } from './../shared/encodeURI.pipe';

var ShareComponent = (function () {
    function ShareComponent(location, router, _globalService) {
        var _this = this;
        this._globalService = _globalService;
        router.events.subscribe(function (val) {
            _this.encodedRoute = encodeURI('http://alealimay.com' + location.path());
        });
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.isShare = false;
    };
    ShareComponent.prototype.openShare = function () {
        this.isShare = !this.isShare;
    };
    return ShareComponent;
}());
ShareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-share',
        template: __webpack_require__(271),
        styles: [__webpack_require__(260)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* trigger */])('shareState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({
                    left: '-200px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({
                    left: '0px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_variables_service__["a" /* GlobalService */]) === "function" && _c || Object])
], ShareComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/share.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncodeURIPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var EncodeURIPipe = (function () {
    function EncodeURIPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EncodeURIPipe.prototype.transform = function (value) {
        console.log(value);
        var url = encodeURI(value);
        console.log(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return EncodeURIPipe;
}());
EncodeURIPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'encodeURI' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], EncodeURIPipe);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/encodeURI.pipe.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prismic_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variables_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_media_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__safeUrl_pipe__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__youtubeEmbed_pipe__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__safeUrl_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_7__youtubeEmbed_pipe__["a" /* YoutubeEmbedPipe */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__prismic_service__["a" /* PrismicService */], __WEBPACK_IMPORTED_MODULE_4__variables_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_5__match_media_service__["a" /* MatchMediaService */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__safeUrl_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_7__youtubeEmbed_pipe__["a" /* YoutubeEmbedPipe */]
        ]
    })
], SharedModule);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/shared.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeEmbedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeEmbedPipe = (function () {
    function YoutubeEmbedPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeEmbedPipe.prototype.transform = function (id) {
        var url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return YoutubeEmbedPipe;
}());
YoutubeEmbedPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'youtubeEmbed' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], YoutubeEmbedPipe);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/youtubeEmbed.pipe.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/environment.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.about {\n  position: relative;\n  width: 100vw;\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.about-text {\n  position: relative;\n  width: 40vw;\n  margin: auto;\n  display: inline-block;\n  vertical-align: top;\n  padding: 150px 0;\n  margin-left: 50vw; }\n  .about-text p {\n    font-size: 10px;\n    line-height: 26px;\n    font-family: helvetica;\n    letter-spacing: 1px;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    margin-top: 20px; }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .about-text p {\n        font-size: 12px;\n        line-height: 17px; } }\n    .about-text p:nth-child(1) {\n      margin-top: 0; }\n\n.about-logo {\n  width: 35vw;\n  height: 60vh;\n  top: 150px;\n  display: inline-block;\n  position: fixed;\n  left: 15vw; }\n  .about-logo svg {\n    width: 100%;\n    height: auto;\n    float: right; }\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\nhtml {\n  background-color: #000000; }\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = ".contact {\n  width: 100vw;\n  height: 100vh; }\n\n.contact-content {\n  position: relative;\n  margin: auto;\n  width: 200px; }\n  .contact-content a {\n    width: 100%;\n    display: block;\n    text-align: left;\n    clear: both; }\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.feed {\n  width: 100vw;\n  height: auto; }\n\n.feed-content {\n  width: 100vw; }\n\n.feed-ul {\n  width: 100vw;\n  padding-bottom: 20vh; }\n  .feed-ul .feed-li {\n    z-index: 7;\n    position: relative;\n    margin-top: 100px; }\n    .feed-ul .feed-li:first-child {\n      margin-top: 150px; }\n    .feed-ul .feed-li:last-child {\n      margin-bottom: 150px; }\n    .feed-ul .feed-li a {\n      width: auto;\n      display: block;\n      position: relative; }\n      .feed-ul .feed-li a:hover .title_left {\n        left: -10%; }\n      .feed-ul .feed-li a:hover .title_right {\n        right: -10%; }\n    .feed-ul .feed-li img {\n      display: block;\n      width: 50vw;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n      @media only screen and (min-width: 0px) and (max-width: 767px) {\n        .feed-ul .feed-li img {\n          width: 100vw !important; } }\n    .feed-ul .feed-li h1 {\n      transition: all 0.5s ease;\n      -webkit-transition: all 0.5s ease;\n      -moz-transition: all 0.5s ease;\n      -ms-transition: all 0.5s ease;\n      -o-transition: all 0.5s ease; }\n\n.feed-title {\n  position: absolute;\n  top: 50%;\n  right: -1%; }\n\n.title_left {\n  right: auto;\n  left: -5%; }\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.styling-detail {\n  width: 100%;\n  height: auto;\n  background-color: #000000; }\n\n.styling-detail-title {\n  color: #FFFFFF; }\n\n.styling-detail-cover {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n  .styling-detail-cover img {\n    width: 100vw; }\n\n.styling-detail-title {\n  position: fixed;\n  top: 25px;\n  right: 25px;\n  z-index: 4; }\n\n.styling-detail-ul {\n  z-index: 4;\n  position: relative;\n  color: #FFFFFF; }\n  .styling-detail-ul .styling-detail-li {\n    width: 100vw;\n    height: auto;\n    display: block; }\n    .styling-detail-ul .styling-detail-li:first-child {\n      padding-top: 150px;\n      margin-top: 0; }\n    .styling-detail-ul .styling-detail-li:last-child {\n      padding-bottom: 150px;\n      margin-bottom: 0; }\n    .styling-detail-ul .styling-detail-li .styling-detail-img {\n      width: 100%;\n      margin: auto; }\n      .styling-detail-ul .styling-detail-li .styling-detail-img img {\n        width: 100vw;\n        margin: auto;\n        display: block; }\n\n.styling-detail-credits {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n  width: auto;\n  height: auto;\n  display: block;\n  z-index: 8; }\n  .styling-detail-credits .detail-credits-ul {\n    width: auto;\n    margin: auto;\n    display: block; }\n\n.styling-detail-gallery {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: scroll;\n  white-space: nowrap; }\n  .styling-detail-gallery img {\n    display: inline-block;\n    width: 80vw; }\n\n.styling-detail-video {\n  width: 100vw; }\n  .styling-detail-video iframe {\n    width: 100vw;\n    height: 60vh;\n    display: block;\n    margin: auto; }\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.styling {\n  width: 100vw;\n  height: 100vh;\n  background-color: #000000; }\n\n.styling-content {\n  width: 100vw; }\n\n.styling-ul {\n  width: 100vw;\n  height: 100vh;\n  display: block;\n  padding-bottom: 20vh;\n  overflow-x: hidden; }\n  .styling-ul .styling-li {\n    position: relative;\n    max-width: 30vw;\n    background-color: transparent;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .styling-ul .styling-li {\n        width: 100vw; } }\n    .styling-ul .styling-li .styling-cover {\n      width: 200px;\n      height: auto;\n      display: block;\n      position: absolute; }\n    .styling-ul .styling-li .styling-a .styling-title {\n      color: #FFFFFF; }\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.logo {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  top: 50%;\n  left: 50%;\n  margin-left: -30px;\n  margin-top: -30px;\n  z-index: 0; }\n  .logo svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block; }\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.logotype {\n  position: fixed;\n  width: 150px;\n  height: 60px;\n  top: 50%;\n  left: 50%;\n  margin-left: -75px;\n  margin-top: -30px;\n  z-index: 0; }\n  .logotype svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block; }\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.nav {\n  position: fixed;\n  bottom: 25px;\n  left: 25px;\n  width: 100px;\n  z-index: 10;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n  @media only screen and (min-width: 0px) and (max-width: 767px) {\n    .nav {\n      height: 100vh;\n      width: 100vw;\n      background-color: #FFFFFF;\n      left: 0;\n      bottom: auto;\n      top: 0;\n      z-index: 10;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.nav-ul {\n  width: 100%;\n  display: block;\n  height: auto;\n  position: relative;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n  @media only screen and (min-width: 0px) and (max-width: 767px) {\n    .nav-ul {\n      width: 80vw;\n      display: block;\n      margin: auto; } }\n  .nav-ul .nav-li {\n    width: 100px;\n    position: relative;\n    display: inline-block;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .nav-ul .nav-li {\n        width: 100%;\n        display: block;\n        text-align: center; } }\n    .nav-ul .nav-li a {\n      width: 100%;\n      display: block;\n      height: auto;\n      line-height: auto;\n      vertical-align: middle;\n      transition: margin 0.5s ease;\n      -webkit-transition: margin 0.5s ease;\n      -moz-transition: margin 0.5s ease;\n      -ms-transition: margin 0.5s ease;\n      -o-transition: margin 0.5s ease;\n      font-size: 22px;\n      line-height: 36px;\n      font-family: \"didot\";\n      letter-spacing: 0px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n      @media only screen and (min-width: 0px) and (max-width: 767px) {\n        .nav-ul .nav-li a {\n          font-size: 20px;\n          line-height: 36px; } }\n      .nav-ul .nav-li a:hover {\n        margin-left: 5px; }\n      .nav-ul .nav-li a.nav_active {\n        margin-left: 5px !important; }\n\n.nav-ul.open .nav-li {\n  position: relative; }\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.share {\n  position: fixed;\n  top: 25px;\n  left: 25px;\n  z-index: 13;\n  width: 200px; }\n\n.share-button {\n  cursor: pointer; }\n\n.share-ul {\n  position: absolute;\n  left: -200px; }\n  .share-ul .share-li {\n    display: inline-block; }\n    .share-ul .share-li a {\n      font-size: 22px;\n      line-height: 36px;\n      font-family: \"didot\";\n      letter-spacing: 0px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n      @media only screen and (min-width: 0px) and (max-width: 767px) {\n        .share-ul .share-li a {\n          font-size: 20px;\n          line-height: 36px; } }\n\n.share-ul.share_open {\n  left: 0; }\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n\n\n\n\n  <div class=\"about-logo\">\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    \t viewBox=\"0 0 2078.53 2326.819\" style=\"enable-background:new 0 0 2078.53 2326.819;\" xml:space=\"preserve\">\n    <g>\n    \t<path d=\"M1675.819,2326.819l-303.116-789.241H540.211l-250.421,641.66c-43.993,115.498-47.377,134.748-27.074,134.748H492.44\n    \t\tc6.768,0,6.768,12.834,0,12.834H5.076c-6.768,0-6.768-12.834,0-12.834h186.573c30.462,0,37.229-9.624,84.603-134.748\n    \t\tl839.26-2172.02c3.384-9.624,13.535-9.624,16.919,0l946.1,2319.601H1675.819z M956.457,462.796L543.599,1524.744h822.337\n    \t\tL956.457,462.796z\"/>\n    </g>\n    </svg>\n\n\n  </div>\n\n\n\n    <div class=\"about-text\">\n      <p>A native of Los Angeles, Aleali made her first foray into fashion working for Don C and Virgil Abloh's RSVP Gallery in Chicago while attending Columbia College Chicago. She has since emerged as a respected style consultant within the entertainment industry, gathering clients such as Lil' Yachty and more within her repertoire.</p>\n      <p>Most known for her personal style, Aleali showcases effortless fusions of streetwear and luxury on a consistent basis. In October of 2014, she launched her fashion diary, AlealiMay.com. This self titled blog takes you through Aleali's outfits, work and leisure life.</p>\n      <p>In August of 2017, Aleali signed with top modeling/creative agency, \"The Society Management\". Also serving as collaborator and consultant with renowned global brands, October of 2017 marks the day Aleali's first design collaboration hit the global market. Teaming up with Nike's Jordan Brand, this \" Air Jordan 1 Aleali May\" design ranks her as the second woman to collaborate, the first woman to release both men's and women's sizing with the Jordan Brand.</p>\n      <p>\"When it comes to Louboutins, most women purchase heels as their first pair, but I got the sneakers instead\"</p>\n\n      <p>-The Covetuer</p>\n    </div>\n\n\n\n</div>\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<app-logo></app-logo>\n<app-logotype></app-logotype>\n\n<div class=\"pop\" (click)=\"_globalService.toggleNav()\" *xs>\n</div>\n\n<app-nav></app-nav>\n<app-share></app-share>\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <table>\n    <tr>\n      <td>\n        <div class=\"contact-content\">\n          <a class=\"a-hover\" href=\"mailto:c.ngai@thesocietymanagement.com?subject=inquiry Aleali May\">c.ngai@thesocietymanagement.com</a>\n          <a class=\"a-hover\" href=\"https://www.instagram.com/alealimay/\" target=\"_blank\">instagram</a>\n          <a class=\"a-hover\" href=\"https://twitter.com/alealimay\" target=\"_blank\">twitter</a>\n          <a class=\"a-hover\" href=\"http://laleali.tumblr.com/\" target=\"_blank\">tumblr</a>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n</div>\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\n<h1 class=\"detail-title\">{{detail.data.post.title.value[\"0\"].text}}</h1>\n\n<div class=\"detail-cover\" [ngStyle]=\"{'background-image': 'url(' + detail.data.post.cover.value[0].image.value.main.url + ')'}\">\n  <!-- <img [src]=\"detail.data['post.cover'].value[0].image.value.main.url\" alt=\"\"> -->\n</div>\n  <!-- <h1>{{detail.data['post.title'].value[0].text}}</h1> -->\n\n  <div class=\"detail-content\" *ngIf=\"detail.data.post.post.value\">\n\n    <ul class=\"detail-ul\">\n      <li class=\"detail-li\" *ngFor=\"let d of detail.data.post.post.value\" >\n\n\n        <div class=\"detail-img\" *ngIf=\"d.slice_type=='image'\">\n          <img src=\"{{d.value.value[0].image?.value.main.url}}\" alt=\"\">\n        </div>\n\n        <div class=\"detail-gallery\" *ngIf=\"d.slice_type=='gallery'\">\n          <img src=\"{{g.image.value.main.url}}\" alt=\"\" *ngFor=\"let g of d.value.value\">\n        </div>\n        <!-- <img src=\"d.value.value[0].image.value.main.url\" alt=\"\" *ngIf=\"d.slice_type =='image'\"> -->\n\n\n      <!-- detail -->\n\n    </li>\n    <div class=\"detail-credits\">\n      <ul class=\"detail-credits-ul\" *ngIf=\"detail.data.post.credits.value[0]\">\n        <li class=\"detail-credits-li\" *ngFor=\"let c of detail.data.post.credits?.value\">\n          {{c.role?.value[0].text}}: <p *ngFor=\"let n of c.name?.value\" >{{n.text}}</p>\n          <a [href]=\"c.weblink?.value.url\">link</a>\n        </li>\n      </ul>\n    </div>\n    </ul>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n\n  <div class=\"feed-content\" *ngIf=\"feed\">\n    <ul class=\"feed-ul\">\n      <li *ngFor='let f of feed.results' class=\"feed-li\">\n        <a *ngIf=\"f.data.post.type\" [routerLink]=\"['/',f.data.post.type.value, f.uid]\" class=\"feed-a\"\n        [style.width]=\"f.data.post.cover?.value[0].width?.value + 'vw'\"\n        [style.margin-left]=\"f.data.post.cover?.value[0].left?.value + 'vw'\">\n          <img class=\"feed-img\" [src]=\"f.data.post.cover?.value[0].image?.value.main.url\"\n          [style.width]=\"f.data.post.cover?.value[0].width?.value + 'vw'\"\n          alt=\"aleali {{f.data.post.title?.value['0'].text}}\" >\n          <h1 class=\"feed-title\"\n          [class.title_left]=\"f.data.post.cover?.value[0].left?.value>0\"\n          [class.title_right]=\"f.data.post.cover?.value[0].left?.value==0\">\n            {{f.data.post.title.value['0'].text}}\n          </h1>\n        </a>\n        <!-- <a *ngIf=\"!f.data.post.type\">\n        </a> -->\n\n       <!-- | productFilter:listFilter -->\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<div class=\"styling-detail\" *ngIf=\"styling_detail\" >\n  <!-- [style.background-color]=\"styling_detail.data['styling.background'].value\" -->\n\n<h1 class=\"styling-detail-title\">{{styling_detail.data.styling.title.value[0].text}}</h1>\n\n\n  <div class=\"styling-detail-cover styling-detail\" *ngIf=\"styling_detail.data.styling.cover.value[0].image\"\n  [ngStyle]=\"{'background-image': 'url(' + styling_detail.data.styling.cover.value[0].image.value.main.url + ')'}\">\n  </div>\n\n\n  <!-- <h1>{{styling_detail.data['styling.title'].value[0].text}}</h1> -->\n\n  <div class=\"styling-detail-content\">\n\n    <ul class=\"styling-detail-ul\">\n       <li class=\"styling-detail-li\" *ngFor=\"let d of styling_detail.data.styling.post.value\">\n\n        <div class=\"styling-detail-img\" *ngIf=\"d.slice_type=='image'\">\n          <img src=\"{{d['non-repeat']?.image.value.main.url}}\" alt=\"\">\n        </div>\n\n        <div class=\"styling-detail-gallery\" *ngIf=\"d.slice_type=='gallery'\">\n          <img src=\"{{g['repeat'].image.value.main.url}}\" alt=\"\" *ngFor=\"let g of d.value.value\">\n        </div>\n\n        <div class=\"styling-detail-video\" *ngIf=\"d.slice_type=='video'\">\n          <iframe [src]=\"d['non-repeat']?.id.value | youtubeEmbed\" width=\"\" height=\"\"></iframe>\n          <!-- {{d['non-repeat'].id.value | youtubeEmbed}} -->\n        </div>\n\n      </li>\n    </ul>\n\n\n    <!-- <div class=\"detail-credits\">\n      <ul class=\"detail-credits-ul\">\n        <li class=\"detail-credits-li\" *ngFor=\"let c of styling_detail.data['styling.credits'].value\">\n          {{c.role.value[\"0\"].text}}: {{c.name.value[\"0\"].text}}\n        </li>\n      </ul>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<div class=\"styling\">\n\n  <div class=\"styling-content\" *ngIf=\"styling\">\n    <ul class=\"styling-ul\">\n      <li *ngFor='let s of styling.results' class=\"styling-li\"\n      [style.left]=\"s.data.styling.position.value[0].left?.value+'vw'\"\n      [style.margin-top]=\"s.data.styling.position.value[0].top?.value+'vh'\"\n      draggable\n      >\n      <!-- on-mouseover='showBackgroundStyling(true)' on-mouseout=\"showBackgroundStyling(false)\" -->\n      <!-- <img [src]=\"s.data.styling.cover.value[0].image.value.main.url\" alt=\"\" class=\"styling-cover\"\n      *ngIf=\"isBackgroundStyling\"\n      > -->\n        <a [routerLink]=\"['/styling', s.uid]\" class=\"styling-a\">\n          <h1 class=\"styling-title\" [style.font-size]=\"s.data.styling.position.value[0].pixels.value+'px'\">\n            {{s.data.styling.title.value[0].text}}\n          </h1>\n        </a>\n\n        <!-- [class.title_left]=\"s.data['styling.cover'].value[0].left.value>0\"\n        [class.title_right]=\"s.data['styling.cover'].value[0].left.value==0\" -->\n <!-- | productFilter:listFilter -->\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" *ngIf=\"!_globalService.pageLoading && !_globalService.isAbout\">\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n     width=\"4000px\" height=\"4000px\" viewBox=\"0 0 4000 4000\" style=\"enable-background:new 0 0 4000 4000;\" xml:space=\"preserve\">\n  <g>\n    <path [class.blacked_path]=\"_globalService.isStyling\" d=\"M2720.9,3160.1l-329.4-789.2h-904.6l-272.1,641.7c-47.8,115.5-51.5,134.7-29.4,134.7H1435c7.4,0,7.4,12.8,0,12.8H905.5\n      c-7.4,0-7.4-12.8,0-12.8h202.7c33.1,0,40.5-9.6,91.9-134.7l911.9-2172c3.7-9.6,14.7-9.6,18.4,0l1028,2319.6H2720.9z M1939.2,1296.1\n      l-448.6,1061.9h893.5L1939.2,1296.1z\"/>\n  </g>\n  </svg>\n</div>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"logotype\" *ngIf=\"_globalService.pageLoading\">\n\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n  \t width=\"4000px\" height=\"1500px\" viewBox=\"0 0 4000 1500\" style=\"enable-background:new 0 0 4000 1500;\" xml:space=\"preserve\">\n  <g>\n  \t<rect y=\"467.747\" style=\"fill:none;\" width=\"4000\" height=\"564.506\"/>\n  \t<path d=\"M663.843,993.78c-34.706,0-54.884-19.824-60.534-46.728c-10.493,30.443-50.848,46.728-93.625,46.728\n  \t\tc-54.077,0-107.346-17.699-107.346-73.631c0-74.34,71.833-87.084,103.311-89.916c44.391-3.539,94.432-6.371,94.432-21.239v-53.808\n  \t\tc0-56.639-33.092-70.799-62.147-70.799c-21.792,0-35.513,9.203-35.513,30.443c0,12.035,5.65,15.576,5.65,26.195\n  \t\tc0,12.036-9.686,24.072-33.899,24.072c-23.406,0-32.285-15.576-32.285-30.443c0-24.072,33.092-54.516,96.047-54.516\n  \t\tc82.325,0,126.717,39.647,126.717,128.146v150.803c0,16.283,8.878,23.363,20.985,23.363c13.721,0,25.021-10.619,28.249-17.699\n  \t\tc0-1.416,4.036,0.707,3.229,2.123C713.077,979.62,693.707,993.78,663.843,993.78z M600.081,819.614\n  \t\tc-18.563,10.619-55.691,10.619-79.097,14.16c-27.442,4.955-55.691,21.239-55.691,86.375c0,57.347,31.478,67.259,58.919,67.259\n  \t\tc39.549,0,75.869-25.487,75.869-53.1V819.614z\"/>\n  \t<path d=\"M755.848,988.116c-2.421,0-2.421-4.248,0-4.248h44.392c3.229,0,5.649-0.708,5.649-2.832V474.822\n  \t\tc0-2.124-2.421-2.832-5.649-2.832h-44.392c-2.421,0-2.421-4.248,0-4.248h112.189c1.614,0,1.614,0.708,1.614,2.124v511.17\n  \t\tc0,2.124,1.614,2.832,5.65,2.832h44.391c1.614,0,1.614,4.248,0,4.248H755.848z\"/>\n  \t<path d=\"M1277.24,820.321h-233.256c-0.807,5.664-0.807,11.328-0.807,17.701c0,83.543,8.878,116.109,34.706,136.643\n  \t\tc16.949,12.035,38.741,16.283,59.726,16.283c57.305,0,101.697-26.904,129.945-65.844c0.807-0.707,4.036,0.709,3.229,2.125\n  \t\tc-29.863,40.355-76.676,67.259-133.174,67.259c-92.818,0-162.229-70.091-162.229-156.466c0-87.084,69.412-157.883,162.229-157.883\n  \t\tc100.889,0,142.052,85.667,142.052,138.059C1279.662,819.614,1278.854,820.321,1277.24,820.321z M1186.037,700.671\n  \t\tc-13.721-12.744-30.67-16.283-48.427-16.283c-20.985,0-42.777,3.539-59.726,16.283c-23.406,18.408-32.285,54.516-33.899,115.403\n  \t\th170.301C1212.671,755.187,1206.214,719.079,1186.037,700.671z\"/>\n  \t<path d=\"M1615.421,993.78c-34.706,0-54.884-19.824-60.534-46.728c-10.493,30.443-50.848,46.728-93.625,46.728\n  \t\tc-54.077,0-107.346-17.699-107.346-73.631c0-74.34,71.833-87.084,103.311-89.916c44.391-3.539,94.432-6.371,94.432-21.239v-53.808\n  \t\tc0-56.639-33.092-70.799-62.147-70.799c-21.792,0-35.513,9.203-35.513,30.443c0,12.035,5.65,15.576,5.65,26.195\n  \t\tc0,12.036-9.686,24.072-33.899,24.072c-23.406,0-32.285-15.576-32.285-30.443c0-24.072,33.092-54.516,96.047-54.516\n  \t\tc82.325,0,126.717,39.647,126.717,128.146v150.803c0,16.283,8.878,23.363,20.985,23.363c13.721,0,25.021-10.619,28.249-17.699\n  \t\tc0-1.416,4.036,0.707,3.229,2.123C1664.655,979.62,1645.284,993.78,1615.421,993.78z M1551.659,819.614\n  \t\tc-18.563,10.619-55.691,10.619-79.097,14.16c-27.442,4.955-55.691,21.239-55.691,86.375c0,57.347,31.478,67.259,58.919,67.259\n  \t\tc39.549,0,75.869-25.487,75.869-53.1V819.614z\"/>\n  \t<path d=\"M1707.425,988.116c-2.421,0-2.421-4.248,0-4.248h44.392c3.229,0,5.649-0.708,5.649-2.832V474.822\n  \t\tc0-2.124-2.421-2.832-5.649-2.832h-44.392c-2.421,0-2.421-4.248,0-4.248h112.189c1.614,0,1.614,0.708,1.614,2.124v511.17\n  \t\tc0,2.124,1.614,2.832,5.65,2.832h44.391c1.614,0,1.614,4.248,0,4.248H1707.425z\"/>\n  \t<path d=\"M1918.886,988.116c-1.614,0-1.614-4.248,0-4.248h44.392c3.229,0,4.843-0.708,4.843-2.832V693.591\n  \t\tc0-2.123-1.614-2.832-4.843-2.832h-44.392c-1.614,0-1.614-4.248,0-4.248h112.188c1.614,0,1.614,0.709,1.614,2.125v292.4\n  \t\tc0,2.124,1.614,2.832,5.65,2.832h44.391c1.614,0,1.614,4.248,0,4.248H1918.886z M1999.597,543.497\n  \t\tc-23.406,0-41.97-16.992-41.97-37.524c0-21.24,18.563-38.231,41.97-38.231c24.213,0,43.584,16.992,43.584,38.231\n  \t\tC2043.182,526.505,2023.811,543.497,1999.597,543.497z\"/>\n  \t<path d=\"M2736.483,988.116c-2.422,0-2.422-4.248,0-4.248h43.584c4.035,0,5.649-0.708,5.649-2.832V756.603\n  \t\tc0-50.268-40.355-72.215-68.604-72.215c-58.92,0-91.204,38.939-91.204,67.259v229.39c0,2.124,0.808,2.832,4.843,2.832h44.392\n  \t\tc2.421,0,2.421,4.248,0,4.248h-163.845c-1.614,0-1.614-4.248,0-4.248h44.392c3.229,0,4.843-0.708,4.843-2.832V756.603\n  \t\tc0-50.268-40.355-72.215-67.798-72.215c-51.655,0-79.097,26.195-91.204,60.887v235.762c0,2.124,1.614,2.832,4.843,2.832h44.392\n  \t\tc1.614,0,1.614,4.248,0,4.248h-163.037c-2.421,0-2.421-4.248,0-4.248h43.584c4.036,0,5.65-0.708,5.65-2.832V692.884\n  \t\tc0-1.416-1.614-2.125-5.65-2.125h-43.584c-2.421,0-2.421-4.248,0-4.248h111.382c1.614,0,2.421,0.709,2.421,2.125v46.727\n  \t\tc14.528-40.355,54.884-55.223,91.204-55.223c73.447,0,114.61,22.656,129.945,60.18c11.3-41.064,58.112-60.18,94.433-60.18\n  \t\tc82.325,0,133.174,27.611,133.174,103.367v197.529c0,2.124,1.614,2.832,4.843,2.832h44.391c1.614,0,1.614,4.248,0,4.248H2736.483z\"\n  \t\t/>\n  \t<path d=\"M3215.903,993.78c-34.706,0-54.884-19.824-60.533-46.728c-10.493,30.443-50.849,46.728-93.626,46.728\n  \t\tc-54.076,0-107.346-17.699-107.346-73.631c0-74.34,71.833-87.084,103.311-89.916c44.392-3.539,94.433-6.371,94.433-21.239v-53.808\n  \t\tc0-56.639-33.092-70.799-62.148-70.799c-21.792,0-35.513,9.203-35.513,30.443c0,12.035,5.649,15.576,5.649,26.195\n  \t\tc0,12.036-9.685,24.072-33.898,24.072c-23.406,0-32.284-15.576-32.284-30.443c0-24.072,33.091-54.516,96.046-54.516\n  \t\tc82.326,0,126.717,39.647,126.717,128.146v150.803c0,16.283,8.879,23.363,20.985,23.363c13.721,0,25.021-10.619,28.249-17.699\n  \t\tc0-1.416,4.035,0.707,3.229,2.123C3265.137,979.62,3245.767,993.78,3215.903,993.78z M3152.142,819.614\n  \t\tc-18.564,10.619-55.691,10.619-79.098,14.16c-27.441,4.955-55.69,21.239-55.69,86.375c0,57.347,31.478,67.259,58.919,67.259\n  \t\tc39.549,0,75.869-25.487,75.869-53.1V819.614z\"/>\n  \t<path d=\"M3608.96,690.759c-5.649,0-8.07,2.832-19.37,29.736l-182.408,435.416c-17.756,42.479-34.706,57.347-66.99,57.347\n  \t\ts-57.305-14.868-57.305-40.355c0-22.655,16.949-38.939,37.127-38.939c20.985,0,32.284,11.327,32.284,24.779\n  \t\tc0,16.284-15.335,20.532-15.335,34.692c0,7.08,10.492,9.203,23.406,9.203c10.492,0,25.828-8.496,41.163-45.311l68.604-161.423\n  \t\tl-158.194-302.313c-0.807-2.123-2.421-2.832-6.457-2.832h-37.935c-2.421,0-2.421-4.248,0-4.248h159.809\n  \t\tc1.614,0,1.614,4.248,0,4.248h-42.776c-4.036,0-4.843,0.709-4.036,2.832l116.225,234.346l87.976-207.441\n  \t\tc11.3-27.611,10.492-29.736,5.649-29.736h-43.584c-1.614,0-1.614-4.248,0-4.248h105.731c1.615,0,1.615,4.248,0,4.248H3608.96z\"/>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  </svg>\n\n\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\" [@navState]=\"_globalService.isNav\">\n\n\n   <!-- (mouseenter)='openNav()' (mouseout)='closeNav()' -->\n  <ul class=\"nav-ul\">\n     <!-- [@navUlState]=\"isNav\" -->\n    <li class=\"nav-li\" >\n       <!-- [@navLiState]=\"isNav\" -->\n       <!-- [class.blacked_text]=\"_globalService.isStyling\" -->\n      <a [routerLink]=\"['/']\" class=\"nav-a\" [class.nav_active]=\"route === '/'\" (click)=\"_globalService.toggleNav()\" [class.blacked_text]=\"_globalService.isStyling  && !_matchMediaService.IsPhone()\">home</a>\n    </li>\n    <li class=\"nav-li\">\n      <a [routerLink]=\"['/styling']\" class=\"nav-a\" [class.nav_active]=\"route === '/styling'\" (click)=\"_globalService.toggleNav()\" [class.blacked_text]=\"_globalService.isStyling  && !_matchMediaService.IsPhone()\">styling</a>\n    </li>\n    <li class=\"nav-li\">\n      <a [routerLink]=\"['/about']\" class=\"nav-a\" [class.nav_active]=\"route === '/about'\" (click)=\"_globalService.toggleNav()\" [class.blacked_text]=\"_globalService.isStyling  && !_matchMediaService.IsPhone()\">about</a>\n    </li>\n    <li class=\"nav-li\">\n      <a [routerLink]=\"['/contact']\" class=\"nav-a\" [class.nav_active]=\"route === '/contact'\" (click)=\"_globalService.toggleNav()\" [class.blacked_text]=\"_globalService.isStyling && !_matchMediaService.IsPhone()\">contact</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div class=\"share\">\n  <h2 class=\"share-button\" (click)=\"openShare()\" [class.blacked_text]=\"_globalService.isStyling\">share</h2>\n\n  <ul [class.share_open]=\"isShare\" [@shareState]=\"isShare\" class=\"share-ul\">\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'https://twitter.com/intent/tweet?url='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">tw</a>\n    </li>\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'http://www.tumblr.com/share/link?url='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">tm</a>\n    </li>\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'https://www.facebook.com/sharer/sharer.php?u='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">fb</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Feed} from './feed';




var PrismicService = (function () {
    function PrismicService(_http) {
        this._http = _http;
        this._getUrl = 'api/prismic/get/all';
    }
    PrismicService.prototype.getFeed = function (type, page) {
        console.log(type, page);
        return this._http.get(this._getUrl + '?page=' + page + '&type=' + type)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("prismic", data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getSingle = function (type, uid) {
        return this._http.get('api/prismic/get/single?type=' + type + '&uid=' + uid)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.handleError = function (error) {
        console.log("error", error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PrismicService;
}());
PrismicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PrismicService);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/prismic.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchMediaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchMediaService = (function () {
    function MatchMediaService() {
        this.rules = {
            print: "print",
            screen: "screen",
            phone: '(max-width: 767px)',
            tablet: '(min-width: 768px) and (max-width: 1024px)',
            desktop: '(min-width: 1025px)',
            portrait: '(orientation: portrait)',
            landscape: '(orientation: landscape)',
            retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
        };
        this.Check = function (mq) {
            if (!mq) {
                return;
            }
            return window.matchMedia(mq).matches;
        };
        this.IsTablet = function () {
            return window.matchMedia(this.rules.tablet).matches;
        };
        this.IsDesktop = function () {
            return window.matchMedia(this.rules.desktop).matches;
        };
        this.IsPortrait = function () {
            return window.matchMedia(this.rules.portrait).matches;
        };
        this.IsLandscape = function () {
            return window.matchMedia(this.rules.landscape).matches;
        };
        this.IsRetina = function () {
            return window.matchMedia(this.rules.retina).matches;
        };
    }
    /**********************************************
        METHODS FOR CHECKING TYPE
     **********************************************/
    MatchMediaService.prototype.IsPhone = function () {
        return window.matchMedia(this.rules.phone).matches;
    };
    ;
    /**********************************************
        EVENT LISTENERS BY TYPE
     **********************************************/
    MatchMediaService.prototype.OnPhone = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.phone);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnTablet = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.tablet);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnDesktop = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.desktop);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnPortrait = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.portrait);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnLandscape = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.landscape);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    return MatchMediaService;
}());
MatchMediaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MatchMediaService);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/match-media.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 88;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/aleali/src/safeUrl.pipe.js.map

/***/ })

},[533]);
//# sourceMappingURL=main.bundle.map