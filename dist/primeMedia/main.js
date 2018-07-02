(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mycollections_mycollections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mycollections/mycollections.component */ "./src/app/mycollections/mycollections.component.ts");
/* harmony import */ var _prod_details_prod_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prod-details/prod-details.component */ "./src/app/prod-details/prod-details.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _usercollections_usercollections_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usercollections/usercollections.component */ "./src/app/usercollections/usercollections.component.ts");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchresults/searchresults.component */ "./src/app/searchresults/searchresults.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'productlist', component: _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_7__["ProductlistComponent"] },
    { path: 'mycollections', component: _mycollections_mycollections_component__WEBPACK_IMPORTED_MODULE_3__["MycollectionsComponent"] },
    { path: 'productdetail', component: _prod_details_prod_details_component__WEBPACK_IMPORTED_MODULE_4__["ProdDetailsComponent"] },
    { path: 'productdetails', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_5__["ProductdetailsComponent"] },
    { path: 'myColection', component: _usercollections_usercollections_component__WEBPACK_IMPORTED_MODULE_6__["UsercollectionsComponent"] },
    { path: 'searchresults', component: _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_8__["SearchresultsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true
                })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-carousel{\r\n    text-align: center;\r\n}\r\n\r\n.tile img{\r\n    width: auto;\r\n    height: 400px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<app-banner *ngIf=\"sharedValues.showBanner\"></app-banner>\r\n<app-breadcrumb *ngIf = 'sharedValues.showBreadcrumb && sharedValues.breadcrumbList.length'></app-breadcrumb>\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharedservice.service */ "./src/app/sharedservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(sharedObj) {
        this.sharedObj = sharedObj;
        this.title = 'app';
        this.page = 4;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sharedValues = this.sharedObj.globalObj;
        this.sharedValues.breadcrumbList = [];
        /*this.sharedValues.showBreadcrumb = false;*/
        console.log(this.sharedValues);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedservice_service__WEBPACK_IMPORTED_MODULE_1__["SharedserviceService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _prod_details_prod_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prod-details/prod-details.component */ "./src/app/prod-details/prod-details.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _usercollections_usercollections_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usercollections/usercollections.component */ "./src/app/usercollections/usercollections.component.ts");
/* harmony import */ var _httprequest_httprequest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./httprequest/httprequest.component */ "./src/app/httprequest/httprequest.component.ts");
/* harmony import */ var _mycollections_mycollections_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mycollections/mycollections.component */ "./src/app/mycollections/mycollections.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _draggingslide_draggingslide_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./draggingslide/draggingslide.component */ "./src/app/draggingslide/draggingslide.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _service_call_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service-call.service */ "./src/app/service-call.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _prime_modal_prime_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./prime-modal/prime-modal.component */ "./src/app/prime-modal/prime-modal.component.ts");
/* harmony import */ var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./searchresults/searchresults.component */ "./src/app/searchresults/searchresults.component.ts");
/* harmony import */ var _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./grid-view/grid-view.component */ "./src/app/grid-view/grid-view.component.ts");
/* harmony import */ var _video_audio_modal_video_audio_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./video-audio-modal/video-audio-modal.component */ "./src/app/video-audio-modal/video-audio-modal.component.ts");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./audio/audio.component */ "./src/app/audio/audio.component.ts");
/* harmony import */ var _pipe_filter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipe-filter */ "./src/app/pipe-filter.ts");
/* harmony import */ var ng2_social_share__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng2-social-share */ "./node_modules/ng2-social-share/src/ng2-social-share.js");
/* harmony import */ var ng2_social_share__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ng2_social_share__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "./src/app/login-modal/login-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"],
                _usercollections_usercollections_component__WEBPACK_IMPORTED_MODULE_13__["UsercollectionsComponent"],
                _httprequest_httprequest_component__WEBPACK_IMPORTED_MODULE_14__["HttprequestComponent"],
                _mycollections_mycollections_component__WEBPACK_IMPORTED_MODULE_15__["MycollectionsComponent"],
                _prod_details_prod_details_component__WEBPACK_IMPORTED_MODULE_11__["ProdDetailsComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"],
                _usercollections_usercollections_component__WEBPACK_IMPORTED_MODULE_13__["UsercollectionsComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_16__["ProductdetailsComponent"],
                _draggingslide_draggingslide_component__WEBPACK_IMPORTED_MODULE_19__["DraggingslideComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbComponent"],
                _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_21__["ProductlistComponent"],
                _prime_modal_prime_modal_component__WEBPACK_IMPORTED_MODULE_26__["PrimeModalComponent"],
                _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_27__["SearchresultsComponent"],
                _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_28__["GridViewComponent"],
                _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_27__["SearchresultsComponent"],
                _video_audio_modal_video_audio_modal_component__WEBPACK_IMPORTED_MODULE_29__["VideoAudioModalComponent"],
                _audio_audio_component__WEBPACK_IMPORTED_MODULE_30__["AudioComponent"],
                _pipe_filter__WEBPACK_IMPORTED_MODULE_31__["FilterPipe"],
                ng2_social_share__WEBPACK_IMPORTED_MODULE_32__["CeiboShare"],
                _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_33__["LoginModalComponent"]
            ],
            entryComponents: [_prime_modal_prime_modal_component__WEBPACK_IMPORTED_MODULE_26__["PrimeModalComponent"], _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_33__["LoginModalComponent"]],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_carousel__WEBPACK_IMPORTED_MODULE_17__["NgxCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_service_call_service__WEBPACK_IMPORTED_MODULE_24__["ServiceCallService"], _localstorage_service__WEBPACK_IMPORTED_MODULE_25__["LocalstorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio/audio.component.html":
/*!********************************************!*\
  !*** ./src/app/audio/audio.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Video Audio</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"player\">\r\n        <audio controls>\r\n          <source src=\"https://apmedialibrary.s3.amazonaws.com/Media%20Library/songs/Sommer%20Learning%20Audio%20Files/Alphabet%20Song%2010%20Final%20Chicken%20Dance.mp3\" type=\"audio/mpeg\">\r\n          Your browser does not support the audio element.\r\n        </audio>\r\n      </div>\r\n  </div>\r\n</ng-template>\r\n<button class=\"btn btn-lg btn-outline-primary btn-audio\" (click)=\"open(content)\">{{actionName}}</button>\r\n"

/***/ }),

/***/ "./src/app/audio/audio.component.scss":
/*!********************************************!*\
  !*** ./src/app/audio/audio.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".player {\n  padding: 20px; }\n  .player video {\n    margin-bottom: 15px; }\n  .btn.btn-audio {\n  display: inline-block;\n  width: 115px;\n  height: 32px;\n  font: 14px \"MyriadPro-Bold\";\n  margin-right: 10px;\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 5px;\n  background: #1ea6dd;\n  text-align: center;\n  transition: 0.2s ease-in;\n  cursor: pointer;\n  border: 0;\n  margin-bottom: 10px; }\n  .btn.btn-audio:hover, .btn.btn-audio.active, .btn.btn-audio:focus {\n  background: #218db9;\n  color: #fff;\n  text-decoration: none;\n  box-shadow: none; }\n  @media (max-width: 767px) {\n  .checkVals ul li {\n    width: 50%; } }\n"

/***/ }),

/***/ "./src/app/audio/audio.component.ts":
/*!******************************************!*\
  !*** ./src/app/audio/audio.component.ts ***!
  \******************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioComponent = /** @class */ (function () {
    function AudioComponent(modalService) {
        this.modalService = modalService;
    }
    AudioComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AudioComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AudioComponent.prototype, "actionName", void 0);
    AudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-audio',
            template: __webpack_require__(/*! ./audio.component.html */ "./src/app/audio/audio.component.html"),
            styles: [__webpack_require__(/*! ./audio.component.scss */ "./src/app/audio/audio.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], AudioComponent);
    return AudioComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\"></div>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.scss":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/banner-media.jpg) no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  height: 250px;\n  transition: 1s all ease; }\n\n/* Media query for banner section */\n\n@media (max-width: 768px) {\n  .banner {\n    height: 200px; } }\n\n@media (max-width: 600px) {\n  .banner {\n    height: 160px; } }\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.html":
/*!******************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ul class=\"breadcrumb\"  *ngIf=\"breadcrumbList.length\">\r\n    <li *ngFor=\"let path of breadcrumbList; let i= index\">\r\n      <a [routerLink]=\"path.url\" [queryParams] = 'path.param?{id: path.param}:\"\"' *ngIf=\"i != breadcrumbList.length-1\">{{path.statename}}</a>\r\n      <a *ngIf=\"i == breadcrumbList.length-1\">{{path.statename}}</a>\r\n    </li>\r\n\r\n  </ul>\r\n"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.scss":
/*!******************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* breadcrumb */\n.breadcrumb {\n  margin: 0 0 20px;\n  padding: 20px 6%;\n  background: none;\n  font-size: 0.95em; }\n.breadcrumb li:after {\n    content: \"\\f105\";\n    font-family: FontAwesome;\n    display: inline-block;\n    padding: 0 5px; }\n.breadcrumb li:last-child:after {\n    display: none; }\n@media screen and (max-width: 1023px) {\n  .breadcrumb {\n    padding-left: 20px;\n    padding-right: 20px; } }\n"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, router, sharedValues, localstorage) {
        this.route = route;
        this.router = router;
        this.sharedValues = sharedValues;
        this.localstorage = localstorage;
        this.constructedUrl = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        /*this.localstorage.removeLocaldata('currentCategory');*/
    };
    BreadcrumbComponent.prototype.ngDoCheck = function () {
        this.breadcrumbList = this.sharedValues.globalObj.breadcrumbList;
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__["SharedserviceService"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"carouselframe\">\r\n  <!--<a routerLink=\"/home\">back</a><br>-->\r\n  <!-- Carousel component with animation starts here-->\r\n  <h3 class=\"carouselTitle\"></h3>\r\n<section class=\"main-wrapper\">\r\n  <!--<a routerLink=\"/home\">back</a><br>-->\r\n  <!-- Carousel component with animation starts here-->\r\n  <a [routerLink]=\"['/productdetail']\" >see more</a>\r\n <div class=\"frame\" id=\"basicSly\">\r\n    <button class=\"prevBtn\" (click)=\"Carouselwithoutanimation('prev')\" *ngIf=\"endIndex > 0 && startIndex > 0\">Previous</button>\r\n    <div class=\"sliderContainer\">\r\n      <button (click)=\"editCarousel()\">{{changebutton}}</button>\r\n      <ul class=\"clearfix\" #animId>\r\n        <li routerLink=\"/productdetails\" *ngFor=\"let carousel of compList; let last = last;\">\r\n          <!--appCarouselSlider [last]=\"last\" [carousellistData]=\"carousel\" [id]=\"staticId+carousel.id\"-->\r\n          <button *ngIf=\"editView\" (click)=\"deleteCarouselObj(carousel)\">click me</button>\r\n          <a (click) = goTo(carousel.id) ><img [src]=\"carousel.src\" [id] = \"carousel.id\" alt=\"\"/></a>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <button class=\"nextBtn\" (click)=\"Carouselwithoutanimation('next')\" *ngIf=\"carouselList.length > indexVal && endIndex <= carouselList.length\">Next</button>\r\n  </div>\r\n</section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carouselframe {\n  text-align: center; }\n\n.frame {\n  width: calc(100% - 130px);\n  padding: 0px 70px;\n  height: 282px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n  margin: 30px;\n  border: 1px solid #2ab8e7 !important;\n  text-align: center;\n  background: #f2f2f2; }\n\n.frame .prevBtn {\n    position: absolute;\n    top: 50%;\n    left: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-indent: -9999px;\n    background: transparent;\n    border: none;\n    width: 45px;\n    overflow: hidden;\n    outline: none;\n    color: #2ab8e7;\n    height: 45px;\n    cursor: pointer;\n    z-index: 999;\n    border: 1px solid #ddd;\n    border-radius: 50%; }\n\n.frame .prevBtn:before {\n      content: \"<\";\n      display: inline-block;\n      text-indent: 9999px;\n      font-size: 35px;\n      line-height: 35px; }\n\n.frame .nextBtn {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    text-indent: -9999px;\n    background: transparent;\n    border: none;\n    width: 45px;\n    overflow: hidden;\n    color: #2ab8e7;\n    outline: none;\n    height: 45px;\n    cursor: pointer;\n    z-index: 999;\n    border: 1px solid #ddd;\n    border-radius: 50%; }\n\n.frame .nextBtn:before {\n      content: \">\";\n      display: inline-block;\n      text-indent: 9999px;\n      font-size: 35px;\n      line-height: 35px; }\n\n.frame .sliderContainer {\n    position: relative;\n    height: 280px;\n    overflow: hidden;\n    display: inline-block;\n    width: 100%; }\n\n.frame .sliderContainer ul {\n      position: relative;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      height: 100%;\n      font-size: 50px;\n      padding-left: 0px; }\n\n.frame .sliderContainer ul li {\n        float: left;\n        width: 18%;\n        height: 100%;\n        margin: 0;\n        padding: 0px;\n        color: #ddd;\n        text-align: center;\n        cursor: pointer; }\n\n.frame .sliderContainer ul li img {\n          width: auto;\n          height: 100%;\n          padding: 10px; }\n\napp-draggingslide {\n  width: 100%;\n  display: block;\n  margin: auto;\n  text-align: center; }\n\napp-draggingslide > div {\n    margin: auto;\n    width: 90%; }\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(route, router, sharedObj) {
        this.route = route;
        this.router = router;
        this.sharedObj = sharedObj;
        this.carouselList = [];
        this.compList = [];
        this.sub = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        this.indexVal = 5;
        this.changebutton = 'edit';
        this.routUrl = ['/productdetails'];
        this.staticId = 'anim_';
    }
    CarouselComponent.prototype.ngAfterViewInit = function () {
        console.log(this.carouselId, '   id of the element');
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.carouselList = this.shareData;
        this.compList = this.carouselList.slice(this.startIndex, this.indexVal);
    };
    CarouselComponent.prototype.Carouselwithoutanimation = function (param) {
        if (param === 'prev') {
            if (this.endIndex > this.indexVal && this.startIndex > 0) {
                this.startIndex = this.startIndex - this.indexVal;
                this.endIndex = this.endIndex - this.indexVal;
                jquery__WEBPACK_IMPORTED_MODULE_2__('.sliderContainer').eq(0).animate({ left: '-1000px' }, 200).css({ left: '1000px', opacity: 0 }).animate({ left: '0px', opacity: 1 }, 200);
            }
        }
        else if (param === 'next') {
            if (this.endIndex < this.carouselList.length) {
                this.startIndex = this.startIndex + this.indexVal;
                this.endIndex = this.startIndex + this.indexVal;
                jquery__WEBPACK_IMPORTED_MODULE_2__('.sliderContainer').eq(0).animate({ left: '1000px' }, 200).css({ left: '-1000px', opacity: 0 }).animate({ left: '0px', opacity: 1 }, 200);
            }
        }
        this.compList = this.carouselList.slice(this.startIndex, this.endIndex);
    };
    CarouselComponent.prototype.Carouselwithanimation = function (param) {
    };
    /*button to change edit and save view*/
    CarouselComponent.prototype.editCarousel = function () {
        this.editView = !this.editView;
        this.changebutton = this.changebutton == 'edit' ? 'save' : 'edit';
    };
    /*method to delete carousel obj*/
    CarouselComponent.prototype.deleteCarouselObj = function (obj) {
        console.log(obj.id);
        this.compList = underscore__WEBPACK_IMPORTED_MODULE_4__["_"].filter(this.compList, function (x) {
            return x.id != obj.id;
        });
    };
    CarouselComponent.prototype.goTo = function (idx) {
        if (idx === '24') {
            this.routUrl = ['/productdetail'];
        }
        else {
            this.routUrl = ['/productdetails'];
        }
        this.router.navigate(this.routUrl, { queryParams: { id: idx } });
        this.sharedObj.globalObj.showBanner = false;
        this.sharedValues = this.sharedObj;
        console.log(this.sharedValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "shareData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('animId'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselComponent.prototype, "carouselId", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__["SharedserviceService"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/draggingslide/draggingslide.component.html":
/*!************************************************************!*\
  !*** ./src/app/draggingslide/draggingslide.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carouselSliderCont\">\r\n    <h3 class=\"slideTitle\">{{productData.title}} <a [routerLink]=\"['/productdetail']\" *ngIf=\"productData.data.length && productData.title> 25\">See more</a></h3>\r\n    <button (click)=\"editCarousel()\" *ngIf=\"shareData.configuration.editsave\" [ngClass]=\"{'edit':changebutton == 'edit','save':changebutton == 'save'}\" class=\"editsaveBtn\">\r\n     <i class=\"fa\" [ngClass] = \"{'fa-pencil':changebutton == 'edit','fa-floppy-o':changebutton == 'save'}\" ></i>\r\n    </button>\r\n   <!-- <a [routerLink]=\"['/productdetail']\" *ngIf=\"carouselTileItems.length > 25\">see more</a>-->\r\n    <ngx-carousel [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\">\r\n        <ngx-tile NgxCarouselItem *ngFor=\"let Tile of productData.data\">\r\n            <div class=\"carousel-item\" *ngIf=\"Tile.is_active\">\r\n                <button *ngIf=\"editView\" (click)=\"deleteCarouselObj(Tile)\" class=\"close-icon\"><i class=\"fa fa-times-circle\"></i></button>\r\n                {{Tile.book_type}}\r\n                <div class=\"carousel-item\" (click)=\"shareData.configuration.itemevent && goToProductDetails(Tile)\">\r\n                    <img class=\"carousel-img\" src=\"{{Tile.src}}\" id=\"{{Tile.id}}\" alt=\"\" *ngIf=\"Tile.id != '26'\">\r\n                    <div class=\"see-more\" *ngIf=\"Tile.id == '26'\"><p style=\"position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 30px; word-break: break-all; text-align: center;\">See more</p></div>\r\n                </div>\r\n            </div>\r\n        </ngx-tile>\r\n        <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n        <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n    </ngx-carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/draggingslide/draggingslide.component.scss":
/*!************************************************************!*\
  !*** ./src/app/draggingslide/draggingslide.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  min-height: 200px;\n  background-color: #ccc;\n  text-align: center;\n  line-height: 200px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  left: -25px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 7px; }\n\n.leftRs:hover {\n    background: rgba(0, 0, 0, 0.4);\n    color: #fff; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 999px;\n  right: -25px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 7px; }\n\n.rightRs:hover {\n    background: rgba(0, 0, 0, 0.4);\n    color: #fff; }\n\n.ngxcarousel-inner {\n  width: 90%;\n  margin: auto; }\n\n.carouselSliderCont {\n  width: 95%;\n  margin: auto;\n  position: relative;\n  margin-bottom: 20px; }\n\n.carouselSliderCont ngx-carousel {\n    border: 2px solid #ddd;\n    border-radius: 15px;\n    padding-top: 50px;\n    padding-bottom: 40px; }\n\n.carouselSliderCont ngx-carousel .ngxcarousel {\n      background: red; }\n\n.carouselSliderCont .slideTitle {\n    padding-left: 10px;\n    position: absolute;\n    left: 0;\n    top: 15px;\n    right: 0;\n    display: block;\n    width: 90%;\n    text-align: left;\n    z-index: 9999;\n    margin: auto; }\n\n.carouselSliderCont .slideTitle a {\n      font-size: 16px;\n      color: #2a254c;\n      font-weight: bold; }\n\n.carouselSliderCont .carousel-item {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n    touch-action: pan-y; }\n\n.carouselSliderCont .carousel-img, .carouselSliderCont .see-more {\n    pointer-events: none;\n    touch-action: pan-y;\n    width: 100%;\n    height: auto; }\n\n.tile img {\n  width: auto;\n  height: 400px; }\n\n.tile {\n  display: inline-block;\n  width: 100%; }\n\n.tile img {\n    width: 100%;\n    height: 400px; }\n"

/***/ }),

/***/ "./src/app/draggingslide/draggingslide.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/draggingslide/draggingslide.component.ts ***!
  \**********************************************************/
/*! exports provided: DraggingslideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggingslideComponent", function() { return DraggingslideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _usertype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usertype */ "./src/app/usertype.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DraggingslideComponent = /** @class */ (function () {
    function DraggingslideComponent(route, router, sharedObj, localstorage) {
        this.route = route;
        this.router = router;
        this.sharedObj = sharedObj;
        this.localstorage = localstorage;
        this.changebutton = 'edit';
        this.routUrl = ['/productdetails'];
        this.lastObject = _usertype__WEBPACK_IMPORTED_MODULE_4__["carouselDragData"];
    }
    DraggingslideComponent.prototype.ngOnInit = function () {
        this.carouselTileItems = this.productData.data;
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            // animation: 'lazy',
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
    };
    /*button to change edit and save view*/
    DraggingslideComponent.prototype.editCarousel = function () {
        this.editView = !this.editView;
        this.changebutton = this.changebutton === 'edit' ? 'save' : 'edit';
    };
    /*method to delete carousel obj*/
    DraggingslideComponent.prototype.deleteCarouselObj = function (obj) {
        console.log(obj.id);
        this.carouselTileItems = underscore__WEBPACK_IMPORTED_MODULE_1__["_"].filter(this.carouselTileItems, function (x) {
            return x.id !== obj.id;
        });
    };
    /*goto product details*/
    DraggingslideComponent.prototype.goToProductDetails = function (idx) {
        if (idx.id === '24') {
            this.routUrl = ['productdetail'];
        }
        else {
            this.routUrl = ['productdetails'];
        }
        this.localstorage.setLocaldata('prodDetail', JSON.stringify(idx));
        this.router.navigate(this.routUrl, { queryParams: { id: idx.id } });
        /*this.localstorage.setLocaldata('currentCategory', idx.name);*/
        this.sharedObj.globalObj.showBanner = false;
        this.sharedValues = this.sharedObj;
        console.log(this.sharedValues);
    };
    DraggingslideComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.carouselTileItems.length;
        if (len <= 24) {
            for (var i = len; i < len; i++) {
                this.carouselTileItems.push(i);
            }
        }
        console.log(this.carouselTileItems);
        this.carouselTileItems = underscore__WEBPACK_IMPORTED_MODULE_1__["_"].filter(this.carouselTileItems, function (x, count) {
            return count < 25;
        });
        this.carouselTileItems.push(this.lastObject = { 'src': 'https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/img1.png', 'id': '26' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggingslideComponent.prototype, "shareData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggingslideComponent.prototype, "productData", void 0);
    DraggingslideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draggingslide',
            template: __webpack_require__(/*! ./draggingslide.component.html */ "./src/app/draggingslide/draggingslide.component.html"),
            styles: [__webpack_require__(/*! ./draggingslide.component.scss */ "./src/app/draggingslide/draggingslide.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__["SharedserviceService"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]])
    ], DraggingslideComponent);
    return DraggingslideComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"row\">\r\n      <li class=\"col-sm-4 col-md-2\">\r\n         <h3>Number Success</h3>\r\n        <ul>\r\n          <li><a>Addition</a></li>\r\n          <li><a>Subtraction</a></li>\r\n          <li><a>Multiplication</a></li>\r\n          <li><a>Division</a></li>\r\n          <li><a>Decimal &amp; Percents</a></li>\r\n          <li><a>Calculator Achievement</a></li>\r\n          <li><a>Life Skill Math Power</a></li>\r\n          <li><a>Algebra 1</a></li>\r\n          <li><a>Algebra 2</a></li>\r\n          <li><a>Geometry</a></li>\r\n          <li><a>Trigonometry</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"col-sm-4 col-md-2\">\r\n        <h3>Phonics Adventure</h3>\r\n        <ul>\r\n          <li><a>Foundational Principles for Phonics Adventure</a></li>\r\n          <li><a>Alphabet Songs and Videos</a></li>\r\n          <li><a>Level 1</a></li>\r\n          <li><a>Level 2</a></li>\r\n          <li><a>Level 3</a></li>\r\n          <li><a>Level 4</a></li>\r\n          <li><a>Level 5</a></li>\r\n          <li><a>Level 6</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"col-sm-4 col-md-3\">\r\n        <h3>Writing Success</h3>\r\n        <ul>\r\n          <li><a>Manuscript Writing</a></li>\r\n          <li><a>Cursive writing</a></li>\r\n          <li><a>Blending Letters &amp; Sounds</a></li>\r\n          <li><a>Writing Tips &amp; Lessons</a></li>\r\n          <li><a>Writing Sentences</a></li>\r\n        </ul>\r\n        <div class=\"social-icons\">\r\n          <span>Connect with Us</span>\r\n          <a class=\"facebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n          <a class=\"twitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n          <a class=\"gplus\" title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a>\r\n        </div>\r\n      </li>\r\n      <li class=\"col-sm-6 col-md-2\">\r\n        <h3>Reading Success</h3>\r\n        <ul>\r\n          <li><a>Level 1</a></li>\r\n          <li><a>Level 2</a></li>\r\n          <li><a>Level 3</a></li>\r\n          <li><a>Level 4</a></li>\r\n          <li><a>Level 5</a></li>\r\n          <li><a>Level 6</a></li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"col-sm-6 col-md-2\">\r\n        <h3>Quick Links</h3>\r\n        <ul>\r\n          <li><a>Sommer-Time Stories Home</a></li>\r\n          <li><a>Video &amp; Song Library Home</a></li>\r\n          <li><a>E-Book Library Home</a></li>\r\n          <li><a>About Us</a></li>\r\n          <li><a>Awards</a></li>\r\n          <li><a>Testimonials</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <strong>&copy; 2018 Sommer Learning Group. All rights Reserved.</strong>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 5px 0 0;\n  background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/footer-bg.png) repeat;\n  background-position: 0 0; }\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0 0 20px;\n    text-align: center; }\n  footer ul li h3 {\n      margin-top: 20px;\n      margin-bottom: 20px;\n      font-size: 18px;\n      color: #595a5a;\n      text-transform: capitalize;\n      font-weight: 600; }\n  footer ul li a {\n      font-size: 15px;\n      color: #595a5a; }\n  footer ul li .social-icons {\n      padding: 30px 0 10px; }\n  footer ul li .social-icons > span {\n        display: block;\n        margin-bottom: 10px;\n        font-size: 18px;\n        color: #595a5a;\n        font-weight: 600; }\n  footer ul li .social-icons a {\n        display: inline-block;\n        vertical-align: middle;\n        width: 34px;\n        height: 34px;\n        margin: 0 5px;\n        padding: 0;\n        line-height: 34px;\n        text-align: center;\n        font-size: 16px;\n        color: #fff;\n        transition: all 0.7s ease;\n        cursor: pointer; }\n  footer ul li .social-icons a.facebook {\n          background-color: #3b5999; }\n  footer ul li .social-icons a.facebook:hover {\n            background-color: #234180; }\n  footer ul li .social-icons a.twitter {\n          background-color: #6db9e7; }\n  footer ul li .social-icons a.twitter:hover {\n            background-color: #56a1ce; }\n  footer ul li .social-icons a.gplus {\n          background-color: #f05241; }\n  footer ul li .social-icons a.gplus:hover {\n            background-color: #f05241; }\n  footer ul ul {\n      padding: 0; }\n  footer .bottom {\n    padding: 22px 0;\n    color: #fff;\n    text-align: center;\n    background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/footer-bg2.png) no-repeat;\n    background-position: 0 0;\n    background-size: cover; }\n  footer .bottom strong {\n      font-weight: normal;\n      line-height: 34px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/grid-view/grid-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/grid-view/grid-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"grid-list\">\r\n  <li class=\"item\" *ngFor=\"let gridItem of shareData.data\">\r\n    <div class=\"gridlist-inner\">\r\n      <div class=\"fig-info\" (click)=\"shareData.configuration.itemevent && goToProductDetails(gridItem)\">\r\n        <img src=\"https://www.advancepublishing-dev.com/ecommerce/pub/media/catalog/product/cache/1/small_image/300x350/e9c3970ab036de70892d86c6d221abfe/s/t/sts_b_androcles.jpg\">\r\n      </div>\r\n      <div class=\"content-info\">\r\n        <h3>Androcles and the Lion</h3>\r\n        <span> Sommer-Time Stories for Phonics Adventure (16 books part of program) </span>\r\n        <ul>\r\n          <li> <span class=\"fa fa-book\"></span> </li>\r\n          <li> <label>EN</label> </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/grid-view/grid-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/grid-view/grid-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* productlist alphabetical*/\n.grid-list li {\n  display: inline-block;\n  width: 25%;\n  padding: 0;\n  text-align: center;\n  vertical-align: middle;\n  margin-bottom: 30px; }\n.grid-list li .gridlist-inner {\n    border: 1px solid #ccc;\n    margin: 0 25px;\n    padding: 20px;\n    transition: 0.3s ease-in; }\n.grid-list li .gridlist-inner .fig-info {\n      padding: 0;\n      background: #f0f0f0;\n      height: 348px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      vertical-align: middle;\n      margin-bottom: 20px; }\n.grid-list li .gridlist-inner .fig-info img {\n        margin: 0 auto;\n        max-height: 100%;\n        max-width: 100%;\n        cursor: pointer; }\n.grid-list li .gridlist-inner .content-info span {\n      display: block;\n      font: 15px \"MyriadPro-Regular\";\n      color: #666; }\n.grid-list li .gridlist-inner .content-info h3 {\n      display: inline-block;\n      max-width: 100%;\n      font: 18px \"MyriadPro-Bold\";\n      color: #333; }\n.grid-list li .gridlist-inner .content-info span, .grid-list li .gridlist-inner .content-info h3 {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      margin: 0; }\n.grid-list li .gridlist-inner .content-info ul {\n      margin: 10px 0 0; }\n.grid-list li .gridlist-inner .content-info ul li {\n        width: 38px;\n        height: 38px;\n        border: 2px solid #c7c7c7;\n        border-radius: 50%;\n        line-height: 34px;\n        margin: 0 9px 0 0; }\n.grid-list li .gridlist-inner .content-info ul li label {\n          font: 16px/34px \"MyriadPro-Bold\";\n          color: #ff4800;\n          margin: 0;\n          text-transform: uppercase; }\n.grid-list li .gridlist-inner .content-info ul li span.fa-book {\n          font-family: fontAwesome;\n          font-size: 20px;\n          line-height: 34px;\n          color: #1fa3db; }\n@media screen and (max-width: 1024px) {\n  .grid-list li {\n    width: 33.33%;\n    margin-bottom: 15px; }\n    .grid-list li .gridlist-inner {\n      margin: 0 5px; } }\n@media screen and (min-width: 501px) and (max-width: 767px) {\n  .grid-list li {\n    width: 50%; }\n    .grid-list li .gridlist-inner {\n      margin: 0 5px; } }\n@media screen and (max-width: 500px) {\n  .grid-list li {\n    width: 100%;\n    margin-bottom: 15px; }\n    .grid-list li .gridlist-inner {\n      margin: 0; } }\n"

/***/ }),

/***/ "./src/app/grid-view/grid-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/grid-view/grid-view.component.ts ***!
  \**************************************************/
/*! exports provided: GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return GridViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridViewComponent = /** @class */ (function () {
    function GridViewComponent(route, router, sharedObj, localstorage) {
        this.route = route;
        this.router = router;
        this.sharedObj = sharedObj;
        this.localstorage = localstorage;
        this.routUrl = ['/productdetails'];
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    /*goto product details*/
    GridViewComponent.prototype.goToProductDetails = function (idx) {
        this.routUrl = ['productdetails'];
        this.localstorage.setLocaldata('prodDetail', JSON.stringify(idx));
        this.router.navigate(this.routUrl, { queryParams: { id: idx.id } });
        /*this.localstorage.setLocaldata('currentCategory', idx.name);*/
        this.sharedObj.globalObj.showBanner = false;
        this.sharedValues = this.sharedObj;
        console.log(this.sharedValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridViewComponent.prototype, "shareData", void 0);
    GridViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-view',
            template: __webpack_require__(/*! ./grid-view.component.html */ "./src/app/grid-view/grid-view.component.html"),
            styles: [__webpack_require__(/*! ./grid-view.component.scss */ "./src/app/grid-view/grid-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__["SharedserviceService"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], GridViewComponent);
    return GridViewComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row header-top\">\r\n      <div class=\"col-md-2\"><a class=\"logo\" href=\"https://www.advancepublishing-stg.com/sommer_learning/publicsite/sommerlearning\" target=\"_blank\"><img src=\"https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/sommer-learning-logo.png\"/></a></div>\r\n      <div class=\"col-md-3 offset-md-3\">\r\n        <input (input) = \"searchText = $event.target.value\" (keypress)=\" searchInput($event)\" type=\"search\" class=\"form-control\" id=\"search\" placeholder=\"Search\">\r\n        <a (click)=\"searchResult($event)\" class=\"search-icon\"><i></i></a>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <ul class=\"user-collections float-right\">\r\n\r\n          <!--<li><a href=\"#\"><i class=\"fa fa-question\"></i> <span> Help </span> </a></li>-->\r\n          <li (click)=\"openVerticallyCentered()\"><a href=\"#\"><i class=\"fa fa-lock\"></i> <span> Login </span> </a></li>\r\n          <li (click)=\"openVerticallyCentered()\"><a href=\"#\"><i class=\"fa fa-pencil\"></i> <span> Sign Up </span> </a></li>\r\n          <!-- After logged in -->\r\n            <li><a routerLink=\"/mycollections\"><i class=\"fa fa-files-o\"></i> <span> My Collections </span> </a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-heart\"></i> <span> Favorites </span> </a></li>\r\n            <!--<li><a href=\"#\"><i class=\"fa fa-user\"></i> <span> My Profile </span> </a></li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <nav class=\"navbar navbar-expand-lg\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbar-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon fa fa-bars\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n      <ul class=\"container-fluid navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" *ngFor=\"let cnt of contentData.mediaType\" (click)=\"headerNavigation(cnt)\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': cnt.isSelected}\">{{cnt.name | uppercase}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Logo and search bar section */\n.header-top {\n  padding: 15px; }\n.header-top .logo {\n    display: inline-block;\n    margin-top: 8px; }\n.header-top .form-control {\n    margin-top: 15px;\n    padding-right: 38px;\n    background-color: #f4f4f4;\n    border: 2px solid #d1d1d1; }\n.header-top .search-icon {\n    position: absolute;\n    top: 16px;\n    right: 17px;\n    width: 38px;\n    height: 38px;\n    cursor: pointer;\n    background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/search.png) center center no-repeat; }\n.header-top .user-collections {\n    margin: 6px 0 0;\n    padding: 0;\n    text-align: center; }\n.header-top .user-collections li {\n      float: left;\n      padding: 0 12px; }\n.header-top .user-collections li i {\n        width: 37px;\n        height: 37px;\n        font-size: 24px;\n        border: 3px solid #000;\n        padding: 3px;\n        border-radius: 8px;\n        margin-bottom: 4px;\n        color: #000; }\n.header-top .user-collections li span {\n        display: block;\n        font-size: 14px;\n        color: #000; }\n/* Header menu section */\n.navbar {\n  width: 100%;\n  padding: 7px 0;\n  background-color: #2a254c;\n  text-align: center; }\n.navbar ul {\n    margin: 0 auto;\n    padding: 0 5%;\n    justify-content: space-between; }\n.navbar ul li a {\n      color: #fff;\n      margin: 0 15px;\n      padding: 5px 15px;\n      border-radius: 5px;\n      font-size: 18px;\n      transition: 0.2s ease-in;\n      cursor: pointer; }\n.navbar ul li a:hover, .navbar ul li a.active {\n        background-color: #ffe3c1;\n        color: #333;\n        text-decoration: none;\n        cursor: pointer; }\n.navbar .fa-bars {\n    color: #fff;\n    line-height: 30px; }\n/* Media query for menu responsive */\n@media (min-width: 992px) and (max-width: 1280px) {\n  .navbar ul li a {\n    margin: 0 5px;\n    padding: 5px 10px;\n    font-size: 12px; } }\n@media (min-width: 1281px) and (max-width: 1600px) {\n  .navbar ul li a {\n    margin: 0 10px;\n    padding: 5px 13px;\n    font-size: 14px; } }\n@media (max-width: 767px) {\n  .header-top .user-collections {\n    margin-top: 15px; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _service_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-call.service */ "./src/app/service-call.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-modal/login-modal.component */ "./src/app/login-modal/login-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(serviceCall, modalService, route, router, sharedObj, localstorage) {
        this.serviceCall = serviceCall;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.sharedObj = sharedObj;
        this.localstorage = localstorage;
        this.showModal = false;
        this.routUrl = ['/productlist'];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceCall.getConfig('medialibv2.productcategories')
            .subscribe(function (data) {
            _this.sharedObj.globalObj.headerTabdata = data['data'];
            _this.contentData = _this.sharedObj.globalObj.headerTabdata;
            _this.sharedObj.resetTabs(_this.contentData, false);
        });
    };
    HeaderComponent.prototype.openVerticallyCentered = function () {
        this.showModal = true;
        var modalRef = this.modalService.open(_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_6__["LoginModalComponent"]);
        modalRef.componentInstance.name = 'login modal';
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.contentData = this.sharedObj.globalObj.headerTabdata;
    };
    HeaderComponent.prototype.searchInput = function (event) {
        if (event.keyCode === 13) {
            this.routUrl = ['/searchresults'];
            this.router.navigate(this.routUrl);
            this.sharedObj.globalObj.searchTxt = this.searchText;
            this.localstorage.setLocaldata('searchTxt', this.searchText);
        }
    };
    HeaderComponent.prototype.searchResult = function (event) {
        if (this.searchText) {
            this.routUrl = ['/searchresults'];
            this.router.navigate(this.routUrl);
            this.sharedObj.globalObj.searchTxt = this.searchText;
            this.localstorage.setLocaldata('searchTxt', this.searchText);
        }
    };
    HeaderComponent.prototype.headerNavigation = function (headerItem) {
        this.routUrl = ['/productlist'];
        /*[routerLink]="['/productlist']" [queryParams]="{ id: cnt.id}";*/
        if (headerItem.name === 'Number success') {
            window.open('https://www.advancepublishing-dev.com/sommer_learning/publicsite/numbersuccess');
        }
        else {
            this.router.navigate(this.routUrl, { queryParams: { id: headerItem.id } });
            this.localstorage.setLocaldata('currentCategory', headerItem.name);
            this.sharedObj.resetTabs(this.contentData, false);
            /*headerItem.isSelected = true;*/
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "shareData", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_call_service__WEBPACK_IMPORTED_MODULE_4__["ServiceCallService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__["SharedserviceService"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <div class=\"newhome-section\">\r\n    <ul class=\"program-list\" *ngIf=\"contentData\">\r\n      <li  *ngFor=\"let cnt of contentData.mediaType\">\r\n        <div class=\"homenew-list\">\r\n          <div class=\"newhome-image\">\r\n            <img [src]=\"'https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/'+cnt.img+'.png'\" [srcset]=\"'https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/'+cnt.img+'2x.png 2x'\">\r\n            <div class=\"img-info\">\r\n              <h3>{{cnt.name | uppercase}}</h3>\r\n             <ul class=\"book-info\">\r\n                <li>All pages</li>\r\n                <li>42 Award-winning</li>\r\n                <li>{{cnt.name}}</li>\r\n              </ul>\r\n              <div class=\"see-all-wrap\"><a title=\"See All\" class=\"new-seelink\" (click)=\"headerNavigation(cnt)\">See All</a></div>\r\n              <div class=\"see-all-wrap\"><a id=\"a_se_allbtn{{$index+1}}\" title=\"See All\" class=\"new-seelink\" (click)=\"headerNavigation(cnt)\">See All</a></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Home page style */\n.newhome-section {\n  padding: 50px 6% 0;\n  text-align: center; }\n.newhome-section h2 {\n    margin: 20px 0 30px;\n    color: #666;\n    text-transform: uppercase;\n    font: normal 32px/28px \"MyriadPro-Bold\"; }\n.newhome-section ul {\n    margin: 0; }\n.newhome-section ul li {\n      display: inline-block;\n      width: 33.33%;\n      padding: 0 12px;\n      margin: 0 0 60px;\n      vertical-align: top; }\n.newhome-section ul li .homenew-list {\n        position: relative; }\n.newhome-section ul li .homenew-list .img-info {\n          position: absolute;\n          width: 100%;\n          height: 25%;\n          bottom: 55px; }\n.newhome-section ul li .homenew-list h3,\n        .newhome-section ul li .homenew-list strong {\n          font-size: 2.2vmin;\n          font-family: \"MyriadPro-Bold\";\n          color: #353535;\n          margin: 0;\n          position: relative;\n          text-align: center;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n.newhome-section ul li .homenew-list h3 {\n          margin-bottom: 3px; }\n.newhome-section ul li .homenew-list strong {\n          font-size: 14px; }\n.newhome-section ul li .homenew-list .book-info {\n          margin: 0;\n          padding: 0; }\n.newhome-section ul li .homenew-list .book-info li {\n            display: block;\n            width: auto;\n            margin: 0;\n            padding: 0;\n            font-size: 14px; }\n.newhome-section ul li .homenew-list .newhome-image {\n          margin-bottom: 10px;\n          position: relative; }\n.newhome-section ul li .homenew-list .newhome-image img {\n            max-width: 100%;\n            height: auto; }\n.newhome-section ul li .see-all-wrap {\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: -30px; }\n.newhome-section ul li a.new-seelink {\n        padding: 7px 25px;\n        background: #fff;\n        border: 2px solid #a94f39;\n        border-radius: 8px;\n        text-transform: capitalize;\n        font-size: 16px;\n        color: #a94f39;\n        margin: 0 auto;\n        vertical-align: top;\n        transition: all 0.3s ease 0s;\n        cursor: pointer; }\n.newhome-section ul li a.new-seelink:hover {\n          text-decoration: none;\n          color: #fff;\n          background: #a94f39; }\n.newhome-section ul li.procolor2 a.new-seelink {\n        color: #3a783c;\n        border-color: #39773b; }\n.newhome-section ul li.procolor2 a.new-seelink:hover {\n          color: #fff;\n          background: #39773b; }\n.newhome-section ul li.procolor3 a.new-seelink {\n        color: #5265b6;\n        border-color: #5265b6; }\n.newhome-section ul li.procolor3 a.new-seelink:hover {\n          color: #fff;\n          background: #5265b6; }\n.newhome-section ul li.procolor4 a.new-seelink {\n        color: #96701e;\n        border-color: #a07822; }\n.newhome-section ul li.procolor4 a.new-seelink:hover {\n          color: #fff;\n          background: #a07822; }\n.newhome-section ul li.procolor5 a.new-seelink {\n        color: #a43b4e;\n        border-color: #a43b4e; }\n.newhome-section ul li.procolor5 a.new-seelink:hover {\n          color: #fff;\n          background: #a43b4e; }\n.newhome-section ul li.mtcolor1 a.new-seelink {\n        color: #4f3e7e;\n        border-color: #4a3a77; }\n.newhome-section ul li.mtcolor1 a.new-seelink:hover {\n          color: #fff;\n          background: #4a3a77; }\n.newhome-section ul li.mtcolor2 a.new-seelink {\n        color: #5b5239;\n        border-color: #54482b; }\n.newhome-section ul li.mtcolor2 a.new-seelink:hover {\n          color: #fff;\n          background: #54482b; }\n.newhome-section ul li.mtcolor3 a.new-seelink {\n        color: #8e4966;\n        border-color: #91506c; }\n.newhome-section ul li.mtcolor3 a.new-seelink:hover {\n          color: #fff;\n          background: #91506c; }\n.newhome-section ul li.mtcolor4 a.new-seelink {\n        color: #2c8b99;\n        border-color: #3196a5; }\n.newhome-section ul li.mtcolor4 a.new-seelink:hover {\n          color: #fff;\n          background: #3196a5; }\n.newhome-section ul li.mtcolor5 a.new-seelink {\n        color: #737911;\n        border-color: #737911; }\n.newhome-section ul li.mtcolor5 a.new-seelink:hover {\n          color: #fff;\n          background: #737911; }\n.newhome-section ul.mediatype-list li .img-info {\n      height: 19.5%; }\n/* Media query for home page */\n@media (min-width: 2000px) {\n  .newhome-section ul li .homenew-list h3, .newhome-section ul li .mediatype-list h3 {\n    font-size: 26px; }\n  .newhome-section ul li a.new-seelink {\n    font-size: 22px; } }\n@media (max-width: 1499px) {\n  .newhome-section ul li a.new-seelink {\n    font-size: 2.2vmin; } }\n@media screen and (max-width: 1024px) and (orientation: landscape) {\n  .newhome-section ul li a.new-seelink {\n    font-size: 13px; }\n  .newhome-section ul li .homenew-list h3, .newhome-section ul li .mediatype-list h3 {\n    margin-bottom: -3px;\n    font-size: 16px; }\n  .newhome-section ul li .homenew-list strong, .newhome-section ul li .mediatype-list strong {\n    font-size: 11px; }\n  .newhome-section ul li .homenew-list .img-info, .newhome-section ul li .mediatype-list .img-info {\n    bottom: 45px; } }\n@media screen and (max-width: 991px) {\n  .newhome-section ul li {\n    width: 33.33%; }\n    .newhome-section ul li a.new-seelink {\n      font-size: 14px; }\n    .newhome-section ul li .homenew-list h3, .newhome-section ul li .mediatype-list h3 {\n      font-size: 15px; }\n    .newhome-section ul li .homenew-list strong, .newhome-section ul li .mediatype-list strong {\n      font-size: 13px; }\n    .newhome-section ul li .homenew-list .img-info, .newhome-section ul li .mediatype-list .img-info {\n      bottom: 40px; }\n    .newhome-section ul li .homenew-list .book-info, .newhome-section ul li .mediatype-list .book-info {\n      margin-top: -3px; }\n      .newhome-section ul li .homenew-list .book-info li, .newhome-section ul li .mediatype-list .book-info li {\n        line-height: 14px;\n        font-size: 13px; } }\n@media screen and (max-width: 767px) {\n  .newhome-section ul li {\n    margin-bottom: 30px;\n    width: 49.5%; } }\n@media screen and (max-width: 600px) {\n  .newhome-section h2 {\n    font-size: 20px; }\n  .newhome-section ul li {\n    width: 90%; }\n    .newhome-section ul li .homenew-list h3, .newhome-section ul li .mediatype-list h3 {\n      font-size: 18px; }\n    .newhome-section ul li .homenew-list strong, .newhome-section ul li .mediatype-list strong {\n      font-size: 13px; }\n    .newhome-section ul li .homenew-list .book-info, .newhome-section ul li .mediatype-list .book-info {\n      margin-top: 0; }\n      .newhome-section ul li .homenew-list .book-info li, .newhome-section ul li .mediatype-list .book-info li {\n        line-height: 16px;\n        font-size: 15px; }\n    .newhome-section ul li .homenew-list .img-info, .newhome-section ul li .mediatype-list .img-info {\n      bottom: 50px; } }\n@media screen and (max-width: 600px) {\n  .newhome-section h2 {\n    font-size: 20px; }\n  .newhome-section ul li .homenew-list .book-info, .newhome-section ul li .mediatype-list .book-info {\n    margin-top: 0; }\n    .newhome-section ul li .homenew-list .book-info li, .newhome-section ul li .mediatype-list .book-info li {\n      line-height: 18px;\n      font-size: 14px; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_appdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-appdata */ "./src/app/mock-appdata.ts");
/* harmony import */ var _service_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-call.service */ "./src/app/service-call.service.ts");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(serviceCall, sharedObj, router, localstorage) {
        this.serviceCall = serviceCall;
        this.sharedObj = sharedObj;
        this.router = router;
        this.localstorage = localstorage;
        this.routUrl = ['/productlist'];
        this.data = JSON.stringify(_mock_appdata__WEBPACK_IMPORTED_MODULE_1__["carouselData"]);
        this.sharedObj.globalObj.showBreadcrumb = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceCall.getConfig('medialibv2.productcategories')
            .subscribe(function (data) {
            _this.sharedObj.globalObj.headerTabdata = data['data'];
            _this.config = data['data'];
            _this.contentData = _this.sharedObj.globalObj.headerTabdata;
            _this.localstorage.removeLocaldata('currentCategory');
            _this.sharedObj.resetTabs(_this.contentData, false);
        });
    };
    HomeComponent.prototype.headerNavigation = function (headerItem) {
        /*[routerLink]="['/productlist']" [queryParams]="{ id: cnt.id}";*/
        if (headerItem.name === 'Number success') {
            window.open('https://www.advancepublishing-dev.com/sommer_learning/publicsite/numbersuccess');
        }
        else {
            this.router.navigate(this.routUrl, { queryParams: { id: headerItem.id } });
            this.localstorage.setLocaldata('currentCategory', headerItem.name);
            this.sharedObj.resetTabs(this.contentData, false);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_call_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCallService"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__["SharedserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/httprequest/httprequest.component.css":
/*!*******************************************************!*\
  !*** ./src/app/httprequest/httprequest.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/httprequest/httprequest.component.html":
/*!********************************************************!*\
  !*** ./src/app/httprequest/httprequest.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  httprequest works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/httprequest/httprequest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/httprequest/httprequest.component.ts ***!
  \******************************************************/
/*! exports provided: HttprequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttprequestComponent", function() { return HttprequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttprequestComponent = /** @class */ (function () {
    function HttprequestComponent() {
    }
    HttprequestComponent.prototype.ngOnInit = function () {
    };
    HttprequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-httprequest',
            template: __webpack_require__(/*! ./httprequest.component.html */ "./src/app/httprequest/httprequest.component.html"),
            styles: [__webpack_require__(/*! ./httprequest.component.css */ "./src/app/httprequest/httprequest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HttprequestComponent);
    return HttprequestComponent;
}());



/***/ }),

/***/ "./src/app/localstorage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/localstorage.service.ts ***!
  \*****************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalstorageService = /** @class */ (function () {
    function LocalstorageService() {
    }
    LocalstorageService.prototype.setLocaldata = function (key, val) {
        localStorage.setItem(key, val);
    };
    LocalstorageService.prototype.getLocaldata = function (key) {
        return localStorage.getItem(key);
    };
    LocalstorageService.prototype.removeLocaldata = function (key) {
        return localStorage.removeItem(key);
    };
    LocalstorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalstorageService);
    return LocalstorageService;
}());



/***/ }),

/***/ "./src/app/login-modal/login-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap\">\n  <button type=\"button\" class=\"close\"> </button>\n  <div class=\"modal-body\">\n    <div class=\"login-left\">\n      <div class=\"md-toolbar-tools\">\n        <label class=\"learninggrp-logo\"></label>\n        <h2>Have Fun Learning</h2>\n        <span>Join Today</span>\n      </div>\n    </div>\n    <div class=\"login-right\">\n      <form>\n\n        <div class=\"login\">\n          <div class=\"loginShow\">\n            <ul class=\"login-social-icons\">\n              <li><button><i class=\"fb-icon\"></i></button></li>\n              <li><button><i class=\"gplus-icon\"></i></button></li>\n            </ul>\n          </div>\n          <div class=\"or\"> or </div>\n          <div class=\"user-login\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"username\">\n              <label for=\"username\">User name / Email</label>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"pswd\">\n              <label for=\"pswd\" class=\"label\">Password</label>\n              <a href=\"javascript:void(0);\"> <i class=\"fa fa-eye-slash\"></i> </a>\n            </div>\n            <div class=\"clearfix\"> <a href=\"#\" class=\"pw-text\">Oops! Forgot my password?</a> </div>\n            <div class=\"text-right\"> <button type=\"submit\" class=\"btn btn-primary\">Login</button> </div>\n          </div>\n          <div class=\"login-bottom\">\n            <p>Don't have an account? <a class=\"sign-inlink\" href=\"javascript:void(0);\">JOIN NOW</a> </p>\n          </div>\n        </div>\n\n        <div class=\"right-wrap\">\n\n          <div class=\"letsstared-wrap hide\">\n            <div class=\"letsstared\">\n              <h3>Let's Get Started</h3>\n              <span>Sign up to get Progress, Media, Reports <br>and access to Premium content</span>\n              <div class=\"loguser-type type1\"><p>Student</p></div>\n              <div class=\"loguser-type type2\"><p>Teacher</p></div>\n              <div class=\"loguser-type type3\"><p>Parent</p></div>\n            </div>\n            <div class=\"login-bottom\">\n              <p>Already have an account? <a class=\"sign-inlink\" href=\"javascript:void(0);\">LOGIN</a> </p>\n            </div>\n          </div>\n\n          <div class=\"parent-signup login-scroll hide\">\n            <ul class=\"login-social-icons\">\n              <li><button><i class=\"fb-icon\"></i></button></li>\n              <li><button><i class=\"gplus-icon\"></i></button></li>\n            </ul>\n            <div class=\"or\"> or </div>\n            <form class=\"signup-form\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" id=\"email\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group nameCls\">\n                  <div class=\"first-name\">\n                    <input type=\"text\" class=\"form-control\" id=\"first-name\">\n                    <label for=\"first-name\">First name</label>\n                  </div>\n                  <div class=\"last-name\">\n                    <input type=\"text\" class=\"form-control\" id=\"last-name\">\n                    <label for=\"last-name\">Last name</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" id=\"username\">\n                  <label for=\"username\">User Name</label>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" id=\"pwsd\">\n                  <label for=\"pwsd\">Password</label>\n                  <a href=\"javascript:void(0);\" title=\"Show password\"><i class=\"fa fa-eye-slash\"></i></a>\n                  <ul class=\"pswdStrength\">\n                    <li class=\"point\"></li>\n                    <li class=\"point\"></li>\n                    <li class=\"point\"></li>\n                    <li class=\"point\"></li>\n                    <li class=\"point\"></li>\n                  </ul>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" id=\"confirm-pwsd\">\n                  <label for=\"confirm-pwsd\">Confirm Password</label>\n                  <a href=\"javascript:void(0);\" title=\"Show password\"><i class=\"fa fa-eye-slash\"></i></a>\n                </div>\n                <div class=\"text-right\"> <button type=\"submit\" class=\"btn btn-primary\"> Sign up</button> </div>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"student-login-wrap hide\">\n            <div class=\"student-age\">\n              <div class=\"student-login belowage\">\n                <p>I am Kid</p>\n                <p>My age is below 13</p>\n              </div>\n              <div class=\"student-login aboveage\">\n                <p>I am Teen</p>\n                <p>My age is above 13</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"student-login-wrap activemain hide\">\n            <div class=\"student-age\">\n              <div class=\"student-login belowage active\">\n                <p>I am Kid</p>\n                <p>My age is below 13</p>\n              </div>\n              <div class=\"student-login aboveage\">\n                <p>I am Teen</p>\n                <p>My age is above 13</p>\n              </div>\n            </div>\n            <div class=\"content\">\n              <p>You're under 13.We would request you to add your parent email, so that they can create account for you</p>\n              <form class=\"signup-form\">\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" id=\"parent-email\">\n                  <label for=\"parent-email\">Parent / Guardian email</label>\n                </div>\n                <div class=\"text-right\"> <button type=\"submit\" class=\"btn btn-primary\"> Sign Up</button> </div>\n              </form>\n            </div>\n          </div>\n\n          <div class=\"student-login-wrap activemain1 login-scroll hide\">\n            <div class=\"student-age\">\n              <div class=\"student-login belowage\">\n                <p>I am Kid</p>\n                <p>My age is below 13</p>\n              </div>\n              <div class=\"student-login aboveage active\">\n                <p>I am Teen</p>\n                <p>My age is above 13</p>\n              </div>\n            </div>\n            <div class=\"student-signup\">\n              <ul class=\"login-social-icons\">\n                <li><button><i class=\"fb-icon\"></i></button></li>\n                <li><button><i class=\"gplus-icon\"></i></button></li>\n              </ul>\n              <div class=\"or\"> or </div>\n              <form class=\"signup-form\">\n                <div class=\"\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" id=\"email\">\n                    <label for=\"email\">Email</label>\n                  </div>\n                  <div class=\"form-group nameCls\">\n                    <div class=\"first-name\">\n                      <input type=\"text\" class=\"form-control\" id=\"first-name\">\n                      <label for=\"first-name\">First name</label>\n                    </div>\n                    <div class=\"last-name\">\n                      <input type=\"text\" class=\"form-control\" id=\"last-name\">\n                      <label for=\"last-name\">Last name</label>\n                    </div>\n                  </div>\n                  <div class=\"form-group dob\">\n                    <div class=\"month\">\n                      <select class=\"form-control\">\n                        <option>Month</option>\n                        <option>January</option>\n                      </select>\n                    </div>\n                    <div class=\"day\">\n                      <select class=\"form-control\">\n                        <option>Day</option>\n                        <option>1</option>\n                      </select>\n                    </div>\n                    <div class=\"year\">\n                      <select class=\"form-control\">\n                        <option>Year</option>\n                        <option>2018</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"username\">\n                    <label for=\"username\">User Name</label>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"pwsd\">\n                    <label for=\"pwsd\">Password</label>\n                    <a href=\"javascript:void(0);\" title=\"Show password\"><i class=\"fa fa-eye-slash\"></i></a>\n                    <ul class=\"pswdStrength\">\n                      <li class=\"point\"></li>\n                      <li class=\"point\"></li>\n                      <li class=\"point\"></li>\n                      <li class=\"point\"></li>\n                      <li class=\"point\"></li>\n                    </ul>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"confirm-pwsd\">\n                    <label for=\"confirm-pwsd\">Confirm Password</label>\n                    <a href=\"javascript:void(0);\" title=\"Show password\"><i class=\"fa fa-eye-slash\"></i></a>\n                  </div>\n                  <div class=\"text-right\"> <button type=\"submit\" class=\"btn btn-primary\"> Sign up</button> </div>\n                </div>\n              </form>\n            </div>\n          </div>\n\n          <div class=\"forgotpw-wrap hide\">\n            <form class=\"user-login\">\n              <h2>Forgot password</h2>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"email1\">\n                <label for=\"email1\">Email</label>\n              </div>\n              <div class=\"clearfix\">\n                <button type=\"submit\" class=\"btn btn-primary\"> Back </button>\n                <button type=\"submit\" class=\"btn btn-primary pull-right\"> Submit </button>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"login-bottom hide\">\n            <p>Already have an account? <a class=\"sign-inlink\" href=\"javascript:void(0);\">LOGIN</a> </p>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrap {\n  width: 970px;\n  min-height: 564px;\n  overflow: visible;\n  padding: 25px;\n  max-height: inherit;\n  border-radius: 10px;\n  position: relative;\n  margin: 0 auto;\n  background: #77d5ef;\n  font-family: Montserrat;\n  background: linear-gradient(to bottom, #77d5ef 0%, #97e0f3 50%, #c4eff8 100%); }\n  .login-wrap:after {\n    position: absolute;\n    bottom: -2px;\n    left: -1px;\n    right: -1px;\n    content: \"\";\n    background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/grass-bg-login.png) no-repeat top center;\n    background-size: 100%;\n    height: 104px;\n    border-radius: 0 0 10px 10px; }\n  .login-wrap button.close {\n    display: block;\n    position: absolute;\n    top: -12px;\n    right: -12px;\n    width: 34px;\n    height: 34px;\n    min-height: 20px;\n    font-weight: normal;\n    padding: 0;\n    margin: 0;\n    background: #d44331;\n    border-radius: 10px;\n    color: #fff;\n    opacity: 1;\n    z-index: 5;\n    outline: 0; }\n  .login-wrap button.close:hover, .login-wrap button.close:focus {\n      background: #444 !important; }\n  .login-wrap button.close:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: -6px auto 0;\n      font-size: 10px;\n      top: 50%;\n      background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/cross-symbol.png) no-repeat;\n      background-size: 100%;\n      width: 12px;\n      height: 12px; }\n  .login-left {\n  display: block;\n  float: left;\n  width: 48.5%;\n  background: none;\n  margin-top: 90px;\n  height: auto;\n  text-align: center; }\n  .login-left .learninggrp-logo {\n    display: block;\n    width: 100px;\n    height: 81px;\n    background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/learning_group_popup.png) no-repeat;\n    margin: 0 auto 36px;\n    clear: both; }\n  .login-left h2 {\n    color: #db3c70 !important;\n    font-size: 40px;\n    font-weight: normal;\n    font-family: \"Chocolate Bar Demo\";\n    margin-bottom: 8px;\n    text-transform: uppercase; }\n  .login-left span {\n    font-size: 44px;\n    font-family: \"mf-sippin-on-sunshine\";\n    font-weight: normal;\n    color: #175a6d; }\n  .login-right {\n  position: relative;\n  float: left;\n  width: 51.5%;\n  background: #fff;\n  border-radius: 6px;\n  z-index: 1;\n  overflow: inherit;\n  top: 0; }\n  .login-right .loginShow {\n    padding: 30px 25px 0; }\n  .login-right .login-social-icons {\n    margin: 0;\n    padding: 0px 0 0;\n    text-align: center; }\n  .login-right .login-social-icons li {\n      display: inline-block;\n      padding: 0px;\n      margin: 0;\n      width: 100%;\n      text-align: center; }\n  .login-right .login-social-icons li button {\n        display: block;\n        cursor: pointer;\n        border: 0;\n        outline: 0;\n        background: none;\n        margin: 0 auto; }\n  .login-right .login-social-icons li button i {\n          width: 324px;\n          height: 44px;\n          display: block; }\n  .login-right .login-social-icons li button i.fb-icon {\n            display: block;\n            background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/fbIcontxt.png) no-repeat center center; }\n  .login-right .login-social-icons li button i.gplus-icon {\n            background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/gpIcontxt.png) no-repeat center center; }\n  .login-right .or {\n    position: relative;\n    display: block;\n    margin: 20px 0 25px;\n    color: #E04462;\n    font-size: 14px;\n    overflow: hidden;\n    text-align: center; }\n  .login-right .or:before {\n      content: \"\";\n      position: absolute;\n      top: 57%;\n      left: 27%;\n      width: 19%;\n      border-bottom: 1px solid #f9a79f; }\n  .login-right .or:after {\n      border-bottom: 1px solid #f9a79f;\n      content: \"\";\n      left: auto;\n      right: 27%;\n      position: absolute;\n      top: 57%;\n      width: 19%; }\n  .login-right .user-login, .login-right .signup-form {\n    margin: 0 auto;\n    max-width: 82%; }\n  .login-right .user-login .form-group, .login-right .signup-form .form-group {\n      position: relative;\n      margin-bottom: 1.7rem; }\n  .login-right .user-login .form-group label, .login-right .signup-form .form-group label {\n        margin-bottom: 0px;\n        color: #B4B4B4;\n        font-size: 14px;\n        position: absolute;\n        top: 9px;\n        left: 12px;\n        transition: 0.5s ease-in-out; }\n  .login-right .user-login .form-group label:after, .login-right .signup-form .form-group label:after {\n          content: ' *';\n          font-size: 13px;\n          vertical-align: top; }\n  .login-right .user-login .form-group .form-control, .login-right .signup-form .form-group .form-control {\n        height: 40px;\n        line-height: 38px;\n        font-size: 14px;\n        padding: 2px 15px;\n        padding-right: 35px;\n        cursor: text;\n        color: #B4B4B4;\n        border-color: #C0EBF6; }\n  .login-right .user-login .form-group .form-control:hover, .login-right .user-login .form-group .form-control:focus, .login-right .signup-form .form-group .form-control:hover, .login-right .signup-form .form-group .form-control:focus {\n          box-shadow: none; }\n  .login-right .user-login .form-group .form-control:focus + label, .login-right .signup-form .form-group .form-control:focus + label {\n        top: -15px;\n        font-size: 10px; }\n  .login-right .user-login .form-group .fa-eye-slash, .login-right .signup-form .form-group .fa-eye-slash {\n        position: absolute;\n        right: 10px;\n        top: 0;\n        margin-top: 11px;\n        color: #337ab7; }\n  .login-right .user-login .pw-text, .login-right .signup-form .pw-text {\n      color: #eab1ac;\n      font-size: 14px;\n      float: right;\n      margin-bottom: 20px; }\n  .login-right .user-login .btn-primary, .login-right .signup-form .btn-primary {\n      background: #41cdf1 !important;\n      padding: 7px 35px;\n      border-radius: 5px;\n      border: 0;\n      margin: 12px 0; }\n  .login-right .user-login .btn-primary:hover, .login-right .user-login .btn-primary:focus, .login-right .signup-form .btn-primary:hover, .login-right .signup-form .btn-primary:focus {\n        background-color: #d82013 !important;\n        box-shadow: none; }\n  .login-right .user-login .nameCls, .login-right .signup-form .nameCls {\n      display: inline-block;\n      width: 100%;\n      padding: 0; }\n  .login-right .user-login .nameCls .first-name, .login-right .user-login .nameCls .last-name, .login-right .signup-form .nameCls .first-name, .login-right .signup-form .nameCls .last-name {\n        float: left;\n        width: calc(50% - 4px); }\n  .login-right .user-login .nameCls .first-name, .login-right .signup-form .nameCls .first-name {\n        margin-right: 4px; }\n  .login-right .user-login .nameCls .last-name, .login-right .signup-form .nameCls .last-name {\n        margin-left: 4px;\n        position: relative; }\n  .login-right .user-login .dob, .login-right .signup-form .dob {\n      display: inline-block;\n      width: 100%; }\n  .login-right .user-login .dob .month, .login-right .user-login .dob .day, .login-right .user-login .dob .year, .login-right .signup-form .dob .month, .login-right .signup-form .dob .day, .login-right .signup-form .dob .year {\n        float: left;\n        width: calc(32%); }\n  .login-right .user-login .dob .month, .login-right .user-login .dob .day, .login-right .signup-form .dob .month, .login-right .signup-form .dob .day {\n        margin-right: 6px; }\n  .login-right .login-bottom {\n    color: #a9a9a9;\n    letter-spacing: 1.5px;\n    text-align: center;\n    border-top: 1px solid rgba(238, 238, 238, 0.68);\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-top: 25px; }\n  .login-right .login-bottom P {\n      margin-top: 10px;\n      font-size: 16px;\n      color: #999; }\n  .login-right .login-bottom .sign-inlink {\n      color: #50c7e8; }\n  .login-right .right-wrap .pswdStrength {\n    list-style: none;\n    padding: 0;\n    vertical-align: 2px;\n    display: block;\n    margin: 10px 0 18px 0; }\n  .login-right .right-wrap .point {\n    background: #DDD;\n    border-radius: 2px;\n    display: inline-block;\n    height: 5px;\n    margin-right: 4px;\n    width: 47px; }\n  .login-right .right-wrap .parent-signup, .login-right .right-wrap .student-signup {\n    padding-top: 10px; }\n  .login-right .right-wrap .parent-signup .or, .login-right .right-wrap .student-signup .or {\n      margin: 10px 0 15px; }\n  .login-right .right-wrap .student-signup .signup-form {\n    max-width: 100%; }\n  .login-right .right-wrap .student-login-wrap {\n    padding: 160px 46px 50px;\n    min-height: 415px;\n    display: block; }\n  .login-right .right-wrap .student-login-wrap.activemain {\n      padding: 50px 46px 0; }\n  .login-right .right-wrap .student-login-wrap.activemain1 {\n      padding: 18px 46px 0; }\n  .login-right .right-wrap .student-login-wrap .content {\n      margin-top: 40px;\n      text-align: left; }\n  .login-right .right-wrap .student-login-wrap .content p {\n        font-size: 13px;\n        color: #3cdbbf; }\n  .login-right .right-wrap .student-login-wrap .content .signup-form {\n        max-width: 100%; }\n  .login-right .right-wrap .student-login-wrap .content .signup-form .form-group {\n          margin-bottom: 100px; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login {\n      border: 0;\n      display: inline-block;\n      background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/agebg.png) no-repeat;\n      color: #3cdbbf;\n      width: 174px;\n      height: 68px;\n      cursor: pointer;\n      text-align: center;\n      outline: 0; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login.aboveage {\n        margin-left: 4px;\n        width: 176px;\n        background-position: 0 -165px; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login.aboveage.active {\n          background-position: 0 -259px; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login.belowage {\n        margin-right: 6px; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login.active {\n        background-position: 0 -74px; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login.active p {\n          color: #fff; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login p {\n        font-size: 13px !important;\n        color: #3cdbbf;\n        line-height: 20px; }\n  .login-right .right-wrap .student-login-wrap .student-age .student-login p:first-of-type {\n          font-size: 16px !important;\n          font-weight: 600;\n          margin: 12px 0 0; }\n  .login-right .forgotpw-wrap {\n    width: 100%;\n    padding: 35% 25px 35.5%; }\n  .login-right .forgotpw-wrap h2 {\n      margin: 0 0 25px;\n      color: #4295ad;\n      font-weight: 500;\n      font-size: 23px;\n      text-align: center; }\n  .login-right .forgotpw-wrap .user-login {\n      max-width: 100%; }\n  .letsstared-wrap {\n  padding-top: 25px; }\n  .letsstared-wrap .letsstared {\n    text-align: center;\n    margin-bottom: 60px; }\n  .letsstared-wrap .letsstared h3 {\n      margin: 0 0 25px;\n      color: #4295ad;\n      font-weight: 600;\n      font-size: 23px; }\n  .letsstared-wrap .letsstared span {\n      color: #8699ac;\n      font-size: 16px;\n      display: inline-block;\n      margin-bottom: 40px; }\n  .letsstared-wrap .letsstared .loguser-type {\n      margin: 0 0 25px; }\n  .letsstared-wrap .letsstared .loguser-type p {\n        color: #50c7e8;\n        font-size: 16px;\n        line-height: 54px;\n        font-weight: bold;\n        margin: 0;\n        outline: 0;\n        cursor: pointer;\n        display: inline-block;\n        background: url(https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/images/loguser-bg.png) no-repeat;\n        width: 228px;\n        height: 54px; }\n  .letsstared-wrap .letsstared .loguser-type p:hover {\n          background-position: 0 -79px;\n          color: #fff; }\n  .letsstared-wrap .letsstared .loguser-type.type2 p {\n        background-position: 0 -159px; }\n  .letsstared-wrap .letsstared .loguser-type.type2 p:hover {\n          background-position: 0 -233px; }\n  .letsstared-wrap .letsstared .loguser-type.type3 p {\n        background-position: 0 -309px; }\n  .letsstared-wrap .letsstared .loguser-type.type3 p:hover {\n          background-position: 0 -387px; }\n  .hide {\n  display: none !important; }\n  .login-scroll {\n  border-radius: 6px;\n  height: 507px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n  .login-scroll::-webkit-scrollbar {\n    width: 7px; }\n  .login-scroll::-webkit-scrollbar-track {\n    border-radius: 5px;\n    background-color: #b5b5b5; }\n  .login-scroll::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background-color: #838383; }\n"

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.ts ***!
  \******************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginModalComponent.prototype, "name", void 0);
    LoginModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-modal',
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/login-modal/login-modal.component.html"),
            styles: [__webpack_require__(/*! ./login-modal.component.scss */ "./src/app/login-modal/login-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/mock-appdata.ts":
/*!*********************************!*\
  !*** ./src/app/mock-appdata.ts ***!
  \*********************************/
/*! exports provided: appData, carouselData, productAllInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appData", function() { return appData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselData", function() { return carouselData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productAllInfo", function() { return productAllInfo; });
var appData = [
    { 'name': "sidharaj" }, { 'name': "usman" }, { 'name': "parthiban" }
];
var carouselData = [
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '1', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '2', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img4.png', 'id': '3', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img4.png', 'id': '4', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img2.png', 'id': '5', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '6', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img4.png', 'id': '7', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img2.png', 'id': '8', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '9', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img2.png', 'id': '10', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img2.png', 'id': '11', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '12', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img4.png', 'id': '13', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img2.png', 'id': '14', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '15', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '16', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '17', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '18', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '19', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '20', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '21', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img3.png', 'id': '22', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '23', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img2.png', 'id': '24', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img4.png', 'id': '25', 'is_active': true },
    { 'src': 'https://www.advancepublishing-dev.com/PrimeMedia/dist/primeMedia/assets/images/img1.png', 'id': '26', 'is_active': true }
];
var productAllInfo = [
    {
        'title': 'Ebook1',
        'description': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibul.'
    },
    {
        'title': 'Ebook2', 'description': 'XYZ'
    },
    {
        'title': 'Ebook3',
        'description': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibul.'
    },
    {
        'title': 'Ebook4', 'description': 'XYZ'
    },
    {
        'title': 'Ebook5',
        'description': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibul.'
    },
    {
        'title': 'Ebook6', 'description': 'XYZ'
    },
    {
        'title': 'Ebook7',
        'description': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibul.'
    },
    {
        'title': 'Ebook8', 'description': 'XYZ'
    },
    {
        'title': 'Ebook9',
        'description': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibul.'
    },
    {
        'title': 'Ebook10', 'description': 'XYZ'
    },
    {
        'title': 'Ebook11',
        'description': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibul.'
    },
    {
        'title': 'Ebook12', 'description': 'XYZ'
    },
    {
        'title': 'Ebook13', 'description': 'XYZ'
    },
    {
        'title': 'Ebook14', 'description': 'XYZ'
    },
    {
        'title': 'Ebook15', 'description': 'XYZ'
    },
    {
        'title': 'Ebook16', 'description': 'XYZ'
    },
    {
        'title': 'Ebook17', 'description': 'XYZ'
    },
    {
        'title': 'Ebook18', 'description': 'XYZ'
    },
    {
        'title': 'Ebook19', 'description': 'XYZ'
    },
    {
        'title': 'Ebook20', 'description': 'XYZ'
    },
    {
        'title': 'Ebook21', 'description': 'XYZ'
    }
];


/***/ }),

/***/ "./src/app/mycollections/mycollections.component.html":
/*!************************************************************!*\
  !*** ./src/app/mycollections/mycollections.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../../../../../sommer_learning/publicsite/pa/PA_UI/karma-config.js\"></script>\r\n<section class=\"main-wrapper\">\r\n  <ngb-tabset class=\"collection-tabs\">\r\n    <ngb-tab title=\"Favorites\">\r\n      <ng-template ngbTabContent>\r\n        <app-draggingslide [shareData]=\"carousel\" [productData] =\"carousel\" class=\"mycolletions\"></app-draggingslide>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"My Collections\">\r\n      <ng-template ngbTabContent>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Recent Products\">\r\n      <ng-template ngbTabContent>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</section>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/mycollections/mycollections.component.scss":
/*!************************************************************!*\
  !*** ./src/app/mycollections/mycollections.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mycollections/mycollections.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mycollections/mycollections.component.ts ***!
  \**********************************************************/
/*! exports provided: MycollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycollectionsComponent", function() { return MycollectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _mock_appdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-appdata */ "./src/app/mock-appdata.ts");
/* harmony import */ var _usertype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usertype */ "./src/app/usertype.ts");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MycollectionsComponent = /** @class */ (function () {
    function MycollectionsComponent(config, sharedObj) {
        this.sharedObj = sharedObj;
        this.carousel = _usertype__WEBPACK_IMPORTED_MODULE_3__["carouselDragData"];
        config.justify = 'start';
        config.type = 'tabs';
        this.sharedObj.globalObj.showBreadcrumb = false;
        this.sharedObj.resetTabs(this.sharedObj.globalObj.headerTabdata, true);
    }
    MycollectionsComponent.prototype.ngOnInit = function () {
        this.carousel = {
            'configuration': { 'deleteoption': true, 'editsave': true, 'itemevent': false },
            'data': _mock_appdata__WEBPACK_IMPORTED_MODULE_2__["carouselData"]
        };
        this.producctListdata = _mock_appdata__WEBPACK_IMPORTED_MODULE_2__["carouselData"];
        console.log(this.carousel);
    };
    MycollectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mycollections',
            template: __webpack_require__(/*! ./mycollections.component.html */ "./src/app/mycollections/mycollections.component.html"),
            styles: [__webpack_require__(/*! ./mycollections.component.scss */ "./src/app/mycollections/mycollections.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"], _sharedservice_service__WEBPACK_IMPORTED_MODULE_4__["SharedserviceService"]])
    ], MycollectionsComponent);
    return MycollectionsComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<ngb-pagination [collectionSize]=\"Shareddata.length\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"page\" (pageChange)=\"pageChange()\"></ngb-pagination>\r\n{{page}}\r\n-->\r\n\r\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #000;\n  border-color: #000; }\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 1;
    }
    PaginationComponent.prototype.pageChange = function () {
    };
    PaginationComponent.prototype.ngOnInit = function () {
        console.log(this.Shareddata, 'data');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "Shareddata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "pageNation", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/pipe-filter.ts":
/*!********************************!*\
  !*** ./src/app/pipe-filter.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchResultTxt) {
        if (!items)
            return [];
        if (!searchResultTxt)
            return items;
        searchResultTxt = searchResultTxt.toLowerCase();
        return items.filter(function (it) {
            return it.categoryTitle.toLowerCase().includes(searchResultTxt);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/prime-modal/prime-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/prime-modal/prime-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Add to Collection</h4>\r\n  <button (click)=\"showAdd = !showAdd\" [disabled]=\"showAdd\" class=\"btn btn-video removeposition\" style=\"float:right;position: absolute;right: 50px;background: #218db9;border: navajowhite;color: #fff;padding: 2px 10px;border-radius: 6px;\">Add New</button>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n   <div id=\"modalBody\" class=\"checkbox_customize\">\r\n        <form name=\"collections\">\r\n            <div *ngIf=\"!showAdd\" class=\"checkVals\">\r\n              <ul>\r\n                  <li *ngFor=\"let checkval of checkData\"><label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"{{checkval.CollectionId}}\" [id]=\"checkval.CollectionId\" (click)=\"checkboxChecked($event)\">{{checkval.name}}</label></li>\r\n              </ul>\r\n            </div>\r\n            <div *ngIf=\"showAdd\" class=\"addCollect\">\r\n                  Collection Name: <input type=\"text\" (input) = \"colName = $event.target.value\">\r\n            </div>\r\n\r\n            <div class=\"FooterSection\">\r\n              <button type=\"button\" *ngIf=\"!showAdd\" class=\"btn btn-outline-dark marright15\" (click)=\"addCollection(name.value)\" >Add</button>\r\n              <button type=\"button\" *ngIf=\"!showAdd\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n              <div class=\"addNewCont\" *ngIf=\"showAdd\">\r\n                <button type=\"button\" class=\"btn btn-outline-dark marright15\" (click)=\"saveCollection(name.value)\" >Save</button>\r\n                <button type=\"button\" class=\"btn btn-outline-dark\">Cancel</button>\r\n              </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!--<div class=\"modal-footer\">\r\n\r\n  <button type=\"button\" *ngIf=\"!showAdd\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>-->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/prime-modal/prime-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/prime-modal/prime-modal.component.ts ***!
  \******************************************************/
/*! exports provided: PrimeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeModalComponent", function() { return PrimeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-call.service */ "./src/app/service-call.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrimeModalComponent = /** @class */ (function () {
    function PrimeModalComponent(activeModal, serviceCall) {
        this.activeModal = activeModal;
        this.serviceCall = serviceCall;
        this.showAdd = false;
        this.collectionIds = [];
    }
    PrimeModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.name);
        this.serviceCall.getConfig('medialibv2.getMyCollections').subscribe(function (data) {
            console.log(data);
            _this.checkData = data.data.collections;
        });
    };
    PrimeModalComponent.prototype.saveCollection = function () {
        var _this = this;
        console.log('lew');
        this.serviceCall.postMethod('medialibv2.addCollection', { name: this.colName }).subscribe(function (data) {
            _this.checkData = data.data.collections;
        });
        this.checkData.push({ 'name': this.colName, 'id': this.colName });
        this.showAdd = false;
        localStorage.setItem('this.currentUser', this.checkData);
    };
    PrimeModalComponent.prototype.addCollection = function (id) {
        var _this = this;
        if (this.collectionIds.length > 0) {
            this.serviceCall.postMethod('medialibv2.addCollectionItems', {
                'collection': this.collectionIds,
                'bookDetails': { 'name': 'ebook1', 'id': this.name, 'img': 'program1' }
            }).subscribe(function (data) {
                _this.checkData = data.data.collections;
            });
            this.activeModal.close('Close click');
        }
    };
    PrimeModalComponent.prototype.checkboxChecked = function (event) {
        if (event.target.checked) {
            this.collectionIds.push(event.target.id);
            console.log(this.collectionIds);
        }
        else {
            this.collectionIds = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].without(this.collectionIds, event.target.id);
            console.log(this.collectionIds);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrimeModalComponent.prototype, "name", void 0);
    PrimeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prime-modal',
            template: __webpack_require__(/*! ./prime-modal.component.html */ "./src/app/prime-modal/prime-modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _service_call_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCallService"]])
    ], PrimeModalComponent);
    return PrimeModalComponent;
}());



/***/ }),

/***/ "./src/app/prod-details/prod-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/prod-details/prod-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-page\">\r\n\t\t<ul><!--*ngFor=\"let prodItem of prodList\"-->\r\n\t\t\t<li *ngFor=\"let prodItem of prodList |  slice:startval:endVal\">\r\n\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t<div class=\"list-left-item\">\r\n\t\t\t\t\t\t  <img class=\"align-self-start\" src=\"https://www.advancepublishing-dev.com/ecommerce/pub/media/catalog/product/cache/1/small_image/300x350/e9c3970ab036de70892d86c6d221abfe/a/_/a_great_hit.jpg\" alt=\"Generic placeholder image\">\r\n\t\t\t\t\t</div>\r\n          <div class=\"media-body\">\r\n              <h4 class=\"mt-0\">{{prodItem.title}}</h4>\r\n              <p>{{prodItem.description}}</p>\r\n            <div>\r\n              <button type=\"button\" class=\"btn btn-primary btn-circle\">EN</button>\r\n              <button type=\"button\" class=\"btn btn-secondary btn-circle\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n\r\n   <!-- <app-pagination [Shareddata] = \"prodList\" ></app-pagination>-->\r\n  <ngb-pagination [collectionSize]=\"prodList.length\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"page\" (pageChange)=\"pageChange()\"></ngb-pagination>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/prod-details/prod-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/prod-details/prod-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-page ul {\n  padding: 0px 15%;\n  margin-top: 15px; }\n  .list-page ul li {\n    padding: 20px;\n    border-bottom: 1px solid #ddd; }\n  .list-page ul li .media .list-left-item {\n      border: 1px solid #ccc;\n      margin: 0 25px;\n      padding: 20px;\n      transition: 0.3s ease-in;\n      width: 300px;\n      height: 214px;\n      display: table-cell;\n      text-align: center;\n      vertical-align: middle;\n      margin-left: 0px; }\n  .list-page ul li .media .list-left-item img {\n        max-width: 100%;\n        height: 100%; }\n  .list-page ul li .media .media-body .btn-circle {\n      width: 38px;\n      height: 38px;\n      border-radius: 50%;\n      margin-right: 10px;\n      background: #fff;\n      border: 2px solid #c7c7c7;\n      color: #ff4800;\n      font-weight: 600;\n      padding: 0; }\n  .list-page ul li .media .media-body .btn-circle i {\n        font-size: 1em;\n        color: #1ea6dd; }\n  .list-page ul li .media .media-body .btn-circle:focus {\n        outline: none;\n        box-shadow: none; }\n  .page-link {\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #fff;\n  background-color: #000;\n  border: 1px solid #dee2e6; }\n  /* Portrait */\n  @media only screen and (max-width: 768px) {\n  .list-page ul {\n    padding: 0px 5%; }\n  .list-page ul li .media .list-left-item {\n    border: 1px solid #ccc;\n    margin: 0 25px;\n    padding: 15px;\n    transition: 0.3s ease-in;\n    width: 200px;\n    height: 145px;\n    margin-left: 0px; } }\n  @media only screen and (max-width: 550px) {\n  .list-page ul li .media .list-left-item {\n    border: 1px solid #ccc;\n    margin: 0 25px;\n    padding: 15px;\n    transition: 0.3s ease-in;\n    width: 170px;\n    height: 125px;\n    margin-left: 0px; }\n  .list-page ul {\n    padding: 0px; } }\n  @media only screen and (max-width: 414px) {\n  .list-page ul {\n    padding: 0px; }\n  .media {\n    flex-wrap: wrap; }\n  .list-page ul li .media .list-left-item {\n    border: 1px solid #ccc;\n    padding: 15px;\n    transition: 0.3s ease-in;\n    width: 100%;\n    height: auto;\n    margin: 0px auto 15px; }\n  .list-page ul li .media .list-left-item img {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/prod-details/prod-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/prod-details/prod-details.component.ts ***!
  \********************************************************/
/*! exports provided: ProdDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDetailsComponent", function() { return ProdDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_appdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-appdata */ "./src/app/mock-appdata.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdDetailsComponent = /** @class */ (function () {
    function ProdDetailsComponent() {
        this.prodList = _mock_appdata__WEBPACK_IMPORTED_MODULE_1__["productAllInfo"];
        this.page = 1;
        this.maxList = 10;
        this.endVal = 10;
        this.startval = 0;
    }
    ProdDetailsComponent.prototype.pageChange = function () {
        console.log(this.page * this.maxList);
        this.startval = (this.page * this.maxList) - this.maxList;
        this.endVal = this.page * this.maxList;
    };
    ProdDetailsComponent.prototype.ngOnInit = function () {
    };
    ProdDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prod-details',
            template: __webpack_require__(/*! ./prod-details.component.html */ "./src/app/prod-details/prod-details.component.html"),
            styles: [__webpack_require__(/*! ./prod-details.component.scss */ "./src/app/prod-details/prod-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProdDetailsComponent);
    return ProdDetailsComponent;
}());



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<script src=\"productdetails.component.ts\"></script>\r\n<section class=\"container-fluid\">\r\n  <div class=\"productdetail_individual_screen\">\r\n    <h2 class=\"category-title ng-binding\">Ebooks</h2>\r\n    <div class=\"bookdetail-main\">\r\n      <div class=\"row mb30\">\r\n        <div class=\"col-md-5 col-sm-5 col-xl-3 mb20 bookimage\">\r\n          <img src=\"https://www.advancepublishing-dev.com/ecommerce/pub/media/catalog/product/s/t/sts_e_androcles.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-md-7 col-sm-7 col-xl-8 offset-xl-1 d-flex\">\r\n            <div class=\"bookimage_content align-self-center\">\r\n              <h3 class=\"booktitle ng-binding ng-scope\" ng-if=\"bookDetails.coursename\">Androcles and the Lion</h3>\r\n              <h5 class=\"author-title ng-scope\" ng-if=\"bookDetails.author\">Author: <span class=\"ng-binding\">Carl Sommer</span></h5>\r\n              <div class=\"bookdetail-btn ng-scope\" ng-if=\"!$root.appLoader &amp;&amp; action\" ng-disabled=\"btnDisable\" aria-disabled=\"true\" disabled=\"disabled\">\r\n                <a id=\"a_readbook_id\" (click)=\"authenticatePlayer()\" class=\"ng-binding ng-scope\" *ngIf=\"(prodDetails.book_type.toLocaleLowerCase() === 'ebooks' || prodDetails.book_type.toLocaleLowerCase() === 'worksheets' || prodDetails.book_type.toLocaleLowerCase() === 'games')\">{{prodDetailLabel}}</a>\r\n                <app-video-audio-modal *ngIf=\"prodDetails.book_type.toLocaleLowerCase() === 'videos'\" [actionName]=\"this.prodDetailLabel\"></app-video-audio-modal>\r\n                <app-audio  *ngIf=\"prodDetails.book_type.toLocaleLowerCase() === 'songs'\" [actionName]=\"this.prodDetailLabel\"></app-audio>\r\n              </div>\r\n              <div class=\"fav_menus\">\r\n                <ul>\r\n                  <li> <div class=\"fav_iconsdiv\"><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i></div><span>Favourite</span></li>\r\n                  <li (click)=\"openVerticallyCentered()\"> <div class=\"fav_iconsdiv\"><i class=\"fa fa-files-o\" aria-hidden=\"true\"></i></div><span>My collections</span></li>\r\n                  <li> <div class=\"fav_iconsdiv\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\" ceiboShare  [facebook]=\"{u: repoUrl}\"></i></div><span>Share</span></li>\r\n                 </ul>\r\n              </div>\r\n              <h6 class=\"avaialbe-title\">Available in:</h6>\r\n              <div class=\"available_in_menus\">\r\n                <ul>\r\n                  <li> <div class=\"available_iconsdiv\"><a href=\"https://itunes.apple.com/us/book/id1318206765\" target=\"_blank\"><i class=\"fa fa-apple\" aria-hidden=\"true\"></i></a></div></li>\r\n                  <li> <div class=\"available_iconsdiv\"><a href=\"https://play.google.com/store/books/details?id=J3JADwAAQBAJ\" target=\"_blank\"><i class=\"fa fa-play\" aria-hidden=\"true\"></i></a></div></li>\r\n                  <li> <div class=\"available_iconsdiv\"><a href=\"https://www.amazon.com/dp/B077SYH937\" target=\"_blank\"><i class=\"fa fa-amazon\" aria-hidden=\"true\"></i></a></div></li>\r\n                  <li> <div class=\"available_iconsdiv\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></div></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h6 ng-if=\"bookDetails.description\" class=\"ng-scope bold\">Description:</h6>\r\n          <p ng-if=\"bookDetails.description\" class=\"detail-desc ng-binding ng-scope\" ng-bind=\"bookDetails.description\">Androcles lives a miserable life as the slave of a cruel and unjust master. Even though runaway slaves face the death penalty, he flees to the nearby woods. There Androcles delights in his new-found freedom. He also makes an unusual friend: a lion with an injured paw. The two live together happily, but the lion gets captured, and shortly afterwards Androcles, too. Androcles is punished by being fed to a lion.\r\n            Androcles prepares to die, glad that he has enjoyed a few weeks of freedom. To his surprise, the ferocious lion doesn't attack. It's the lion he helped! The emperor, amazed at what he observed, frees both Androcles and the lion. Androcles then spreads the message that everyone should appreciate their freedom and that slavery should be abolished. This retelling of Aesop's classic fable demonstrates the importance of freedom and friendship.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h6 class=\"bold\">Product Details:</h6>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <ul class=\"detail-list\">\r\n           <li ng-if=\"bookDetails.age_range\" class=\"ng-scope\">\r\n            <label>Age Range :</label>\r\n            <span class=\"ng-binding\">N/A</span>\r\n          </li>\r\n            <li ng-if=\"bookDetails.grade\" class=\"ng-scope\">\r\n            <label>Grade Level:</label>\r\n            <span class=\"ng-binding\">Kindergarten, Grade 1, Grade 2, Grade 3, Grade 4, Grade 5</span>\r\n          </li><li ng-if=\"bookDetails.author\" class=\"ng-scope\">\r\n            <label>Author:</label>\r\n            <span class=\"ng-binding\">Carl Sommer</span>\r\n          </li><li ng-if=\"bookDetails.language\" class=\"ng-scope\">\r\n            <label>Language:</label>\r\n            <span class=\"ng-binding\">English</span>\r\n          </li><li ng-if=\"bookDetails.format\" class=\"ng-scope\">\r\n            <label>Format:</label>\r\n            <span class=\"ng-binding\">Digital</span>\r\n          </li><li ng-if=\"bookDetails.product_dimensions\" class=\"ng-scope\">\r\n            <label>Product Dimensions:</label>\r\n            <span class=\"ng-binding\">N/A</span>\r\n          </li><li ng-if=\"bookDetails.shipping_weight\" class=\"ng-scope\">\r\n            <label>Shipping Weight:</label>\r\n            <span class=\"ng-binding\">N/A</span>\r\n          </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productdetail_individual_screen {\n  padding: 20px 6%; }\n\n.category-title {\n  font: 20px \"MyriadPro-Bold\";\n  color: #666;\n  text-transform: uppercase;\n  margin: 0 0 15px; }\n\n.bookimage img {\n  padding: 18px;\n  border: 1px solid #d6d6d6;\n  max-width: 100%;\n  height: auto; }\n\n.booktitle {\n  font: 25px \"MyriadPro-Bold\";\n  color: #666;\n  margin: 0;\n  text-transform: none;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.author-title {\n  font-size: 14px;\n  margin: 0 0 15px; }\n\n.author-title span {\n  color: #000; }\n\n.bookdetail-btn {\n  margin-bottom: 15px; }\n\n.bookdetail-btn a {\n    display: inline-block;\n    width: 115px;\n    height: 32px;\n    font: 14px \"MyriadPro-Bold\";\n    line-height: 34px;\n    color: #fff !important;\n    text-transform: uppercase;\n    border-radius: 5px;\n    background: #1ea6dd;\n    text-align: center;\n    transition: 0.2s ease-in;\n    cursor: pointer;\n    vertical-align: top;\n    margin-bottom: 15px;\n    margin-right: 10px; }\n\n.bookdetail-btn a:hover {\n      background: #218db9;\n      color: #fff;\n      text-decoration: none; }\n\n.fav_menus {\n  width: 100%;\n  margin-bottom: 20px;\n  float: left; }\n\n.fav_menus .fav_iconsdiv {\n    width: 45px;\n    height: 45px;\n    border: 1px solid #ccc;\n    border-radius: 50px;\n    padding: 11px 9px;\n    margin: 0px auto; }\n\n.fav_menus .fav_iconsdiv .fa.fa-heart-o {\n      font-size: 24px;\n      color: #ccc; }\n\n.fav_menus .fav_iconsdiv .fa.fa-share-alt {\n      font-size: 23px;\n      color: #ccc; }\n\n.fav_menus .fav_iconsdiv .fa.fa-files-o {\n      font-size: 23px;\n      color: #ccc; }\n\n.fav_menus ul li {\n    float: left;\n    text-align: center;\n    margin-right: 20px; }\n\n.avaialbe-title, .bookdetail-main h6 {\n  font-size: 14px;\n  margin: 0 0 5px;\n  color: #3f3f3f; }\n\n.available_in_menus {\n  width: 100%;\n  margin-bottom: 20px;\n  float: left; }\n\n.available_in_menus ul {\n    margin-top: 5px; }\n\n.available_in_menus ul li {\n      float: left;\n      text-align: center;\n      margin-right: 15px; }\n\n.available_in_menus ul li .available_iconsdiv {\n        width: 45px;\n        height: 45px;\n        border: 1px solid #ccc;\n        border-radius: 50px;\n        padding: 11px 9px;\n        margin: 0px auto; }\n\n.available_in_menus ul li .available_iconsdiv .fa-apple {\n          font-size: 21px;\n          color: #ccc; }\n\n.available_in_menus ul li .available_iconsdiv .fa-play {\n          font-size: 21px;\n          color: #ccc;\n          position: relative;\n          left: 4px; }\n\n.available_in_menus ul li .available_iconsdiv .fa-amazon {\n          font-size: 21px;\n          color: #ccc; }\n\n.available_in_menus ul li .available_iconsdiv .fa-share-alt {\n          font-size: 21px;\n          color: #ccc; }\n\n.detail-list {\n  display: inline-block;\n  width: 100%;\n  margin: 5px 0 0; }\n\n.detail-list li {\n    margin-bottom: 4px;\n    float: left;\n    width: 100%; }\n\n.detail-list li label {\n      font: 14px \"MyriadPro-Regular\";\n      color: #000;\n      min-width: 200px;\n      padding-right: 15px;\n      margin: 0;\n      float: left; }\n\n.detail-list li span {\n      float: left;\n      font: 14px \"MyriadPro-Regular\";\n      color: #000;\n      width: calc(100% - 260px); }\n\n.mb30 {\n  margin-bottom: 30px; }\n\n.mb20 {\n  margin-bottom: 20px; }\n\n.detail-desc {\n  font: 14px/18px \"MyriadPro-Regular\";\n  color: #666;\n  margin: 0 0 10px; }\n\n.bold {\n  font-weight: bold; }\n\n/* Resonsive style */\n\n@media screen and (max-width: 1023px) {\n  .productdetail_individual_screen {\n    padding: 20px; } }\n"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _prime_modal_prime_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prime-modal/prime-modal.component */ "./src/app/prime-modal/prime-modal.component.ts");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent(sharedObj, modalService, localstorage, route, router) {
        this.sharedObj = sharedObj;
        this.modalService = modalService;
        this.localstorage = localstorage;
        this.route = route;
        this.router = router;
        this.showModal = false;
        this.repoUrl = 'https://www.advancepublishing-dev.com/ereadermedialibrary/#/eReaderPlayer?url=https://apmedialibrary.s3-accelerate.amazonaws.com/Media%20Library/ebooks/Companion%20Reader/The_Rock_1_1';
        this.imageUrl = 'http://apcourseplayer.s3-accelerate.amazonaws.com/phonicadventure/textbook1/images/apple.png';
        console.log(this.localstorage.getLocaldata('catId'));
        this.sharedObj.globalObj.breadcrumbList = [
            { 'url': '/home', 'statename': 'Home', 'param': '' },
            { 'url': '/productlist', 'statename': 'ProductList', 'param': this.localstorage.getLocaldata('catId') },
            { 'url': '/productdetails', 'statename': 'ProductDetails', 'param': '' }
        ];
        this.sharedObj.globalObj.showBreadcrumb = true;
    }
    ProductdetailsComponent.prototype.openVerticallyCentered = function () {
        this.showModal = true;
        var modalRef = this.modalService.open(_prime_modal_prime_modal_component__WEBPACK_IMPORTED_MODULE_2__["PrimeModalComponent"]);
        modalRef.componentInstance.name = this.curId;
    };
    ProductdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodDetails = this.localstorage.getLocaldata('prodDetail') && JSON.parse(this.localstorage.getLocaldata('prodDetail'));
        console.log(this.prodDetails);
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.curId = params['id'];
        });
        this.authenticate();
    };
    ProductdetailsComponent.prototype.authenticatePlayer = function () {
        if (this.prodDetailLabel === 'Buy Now') {
            if (!this.loggedIn) {
                alert('you have to login first to continue further!');
            }
            else {
                if (this.prodDetails.is_purchased) {
                    this.launchPlayer();
                }
            }
        }
        else if (this.prodDetailLabel === 'Explore Now' || this.prodDetailLabel === 'Play Now' || this.prodDetailLabel === 'Download Now') {
            this.launchPlayer();
        }
        else if (this.prodDetailLabel === 'Register Now') {
            if (!this.loggedIn) {
                alert('you have to login first to continue further!');
            }
            else {
                if (this.prodDetails.is_purchased) {
                    this.launchPlayer();
                }
            }
        }
    };
    ProductdetailsComponent.prototype.launchPlayer = function () {
        var mediaurl = '';
        var currentCategory = this.localstorage.getLocaldata('currentCategory');
        if (this.prodDetails.book_type.toLocaleLowerCase() === 'ebooks') {
            if (currentCategory === 'Sommer time stories') {
                mediaurl = 'http://sommerlearning.com/books/androcles-and-the-lion/';
                window.open(mediaurl);
            }
            else {
                mediaurl = 'https://www.advancepublishing-dev.com/ereadermedialibrary/#/eReaderPlayer';
                this.localstorage.setLocaldata('coursename', this.prodDetails.coursename);
                this.localstorage.setLocaldata('category_name', this.prodDetails.category_name);
                this.localstorage.setLocaldata('book_url', this.prodDetails.book_url);
                /* this.localstorage.setLocaldata('mediaUserid',this.prodDetails.mediaUserid);*/
                window.open(mediaurl + '/ereadermedialibrary/#/eReaderPlayer');
            }
        }
        else if (this.prodDetails.book_type.toLocaleLowerCase() === 'videos' || this.prodDetails.book_type.toLocaleLowerCase() === 'songs') {
            alert('Video/audio player will be launched!');
        }
        else if (this.prodDetails.book_type.toLocaleLowerCase() === 'worksheets') {
            /*alert('Worksheet will be donwloaded!');*/
            window.open('http://spiglobaltestingbucket.s3.amazonaws.com/Testing/assets/unit1/documents/B10U1P10.pdf');
        }
        else if (this.prodDetails.book_type.toLocaleLowerCase() === 'games') {
            /*alert('games page will be lauched!');*/
            var gamesObj = {
                'activity': { 'isPreview': true, 'id': 2 },
                'data': {
                    'name': 'Connect the Dots A-E',
                    'isActive': false,
                    'url': 'Data to come',
                    'scormurl': 'https://www.advancepublishing-dev.com/lms/lms/mod/scorm/player.php?scoid=3972&cm=36',
                    'section': 1,
                    'lesson': '1B',
                    'sectionname': 'Section1AlphabetAtoE',
                    'lessonname': 'lesson1',
                    'text': 'Data to come',
                    'scormstatus': 'not attempted',
                    'activityType': 'game',
                    'activityid': 2,
                    'bookclass': 'text-book1',
                    'bookname': 'textbook1',
                    'isadded': true,
                    'directive': [
                        {
                            'url': 'connectthedots',
                            'json': 'PA_UI/courseJson/JsonFiles/textbook1/Section1AlphabetAtoE/lesson1/connectthedotsgame-ae'
                        }
                    ],
                    'bookLevel': 0,
                    'sectLevel': 0,
                    'lessLevel': 0,
                    '$$hashKey': 'object:32'
                }
            };
            this.localstorage.setLocaldata('mlGames', JSON.stringify(gamesObj));
            window.open('https://www.advancepublishing-dev.com/courseplayer');
        }
    };
    ProductdetailsComponent.prototype.authenticate = function () {
        if (this.prodDetails && this.prodDetails.is_active) {
            if (this.prodDetails.is_premium) {
                this.prodDetailLabel = 'Buy Now';
            }
            else {
                if (!this.prodDetails.is_premium && !this.prodDetails.is_featured) {
                    if (this.prodDetails.book_type.toLocaleLowerCase() === 'ebooks') {
                        this.prodDetailLabel = 'Explore Now';
                    }
                    else if (this.prodDetails.book_type.toLocaleLowerCase() === 'videos') {
                        this.prodDetailLabel = 'Play Now';
                    }
                    else if (this.prodDetails.book_type.toLocaleLowerCase() === 'songs') {
                        this.prodDetailLabel = 'Play Now';
                    }
                    else if (this.prodDetails.book_type.toLocaleLowerCase() === 'worksheets') {
                        this.prodDetailLabel = 'Download Now';
                    }
                    else if (this.prodDetails.book_type.toLocaleLowerCase() === 'games') {
                        this.prodDetailLabel = 'Play Now';
                    }
                    else {
                        this.prodDetailLabel = 'Explore Now';
                    }
                }
                else if (!this.prodDetails.is_premium && this.prodDetails.is_featured) {
                    this.prodDetailLabel = 'Register Now';
                }
            }
        }
    };
    ProductdetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.scss */ "./src/app/productdetails/productdetails.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_sharedservice_service__WEBPACK_IMPORTED_MODULE_3__["SharedserviceService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/productlist/productlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/productlist/productlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isloaded\" class=\"main-wrapper\">\r\n  <!--sommer time stories template starts here-->\r\n  <ngb-tabset class=\"collection-tabs\" *ngIf=\"carousel.title == 'sommer time stories'\">\r\n    <ngb-tab title=\"English\">\r\n      <ng-template ngbTabContent>\r\n        <ngb-tabset class=\"collection-tabs\">\r\n          <ngb-tab title=\"By Alphabetical\">\r\n            <ng-template ngbTabContent>\r\n              <app-grid-view [shareData]=\"carousel\"></app-grid-view>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"By Age\">\r\n            <ng-template ngbTabContent>\r\n              <app-draggingslide *ngFor=\"let list of loopData | slice:0:10 \" [shareData]=\"carousel\" [productData]=\"list\"></app-draggingslide>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Spanish\">\r\n      <ng-template ngbTabContent>\r\n        <!--<app-draggingslide  [shareData]=\"carousel\"></app-draggingslide>-->\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"bilingual\">\r\n      <ng-template ngbTabContent>\r\n        <!--<app-draggingslide  [shareData]=\"carousel\"></app-draggingslide>-->\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n  <!--sommer time stories template ends here-->\r\n  <!--Phonics adventrue template starts here-->\r\n  <div *ngIf=\"carousel.title == 'phonics adventure'\">\r\n    <app-draggingslide *ngFor=\"let list of loopData | slice:0:10 \" [shareData]=\"carousel\" [productData]=\"list\"></app-draggingslide>\r\n  </div>\r\n  <!--Phonics adventrue template ends here-->\r\n  <!--Writing success template starts here-->\r\n  <div *ngIf=\"carousel.title == 'writing success'\">\r\n    Writing success page content yet to be developed!\r\n  </div>\r\n  <!--Writing success template ends here-->\r\n  <!--Reading success template starts here-->\r\n  <div *ngIf=\"carousel.title == 'reading success'\">\r\n    Reading success page content yet to be developed!\r\n  </div>\r\n  <!--Reading success template ends here-->\r\n  <!--Games template starts here-->\r\n  <div *ngIf=\"carousel.title == 'games'\">\r\n    <app-grid-view [shareData]=\"carousel\"></app-grid-view>\r\n  </div>\r\n  <!--Games template ends here-->\r\n</div>\r\n<!--<app-carousel ></app-carousel>-->\r\n"

/***/ }),

/***/ "./src/app/productlist/productlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/productlist/productlist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/productlist/productlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usertype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usertype */ "./src/app/usertype.ts");
/* harmony import */ var _service_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-call.service */ "./src/app/service-call.service.ts");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductlistComponent = /** @class */ (function () {
    function ProductlistComponent(route, router, serviceCall, sharedObj, config, localstorage) {
        this.route = route;
        this.router = router;
        this.serviceCall = serviceCall;
        this.sharedObj = sharedObj;
        this.localstorage = localstorage;
        this.carousel = _usertype__WEBPACK_IMPORTED_MODULE_2__["carouselDragData"];
        this.data = [];
        this.isloaded = false;
        this.loopData = [];
        this.sharedObj.globalObj.breadcrumbList = [
            { 'url': '/home', 'statename': 'Home', 'param': '' },
            { 'url': '', 'statename': 'Product list', 'param': '' }
        ];
        this.sharedObj.globalObj.showBreadcrumb = true;
        config.justify = 'start';
        config.type = 'tabs';
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.data = carouselData;*/
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.curId = params['id'];
            _this.serviceCall.postMethod('medialibv2.productlist', { 'id': _this.curId }).subscribe(function (data) {
                _this.carouselData = data['data'].content.contents[0].data;
                _this.loopData = data['data'].content.contents;
                _this.isloaded = true;
                _this.carousel = {
                    'configuration': { 'deleteoption': false, 'editsave': false, 'itemevent': true },
                    'data': _this.carouselData,
                    'title': data['data'].content.categoryName.toLocaleLowerCase()
                };
                /*this.carousel.title = this.carousel.title.toLocaleLowerCase();*/
            });
            _this.localstorage.setLocaldata('catId', _this.curId);
        });
    };
    ProductlistComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! ./productlist.component.html */ "./src/app/productlist/productlist.component.html"),
            styles: [__webpack_require__(/*! ./productlist.component.scss */ "./src/app/productlist/productlist.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabsetConfig"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_call_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCallService"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_4__["SharedserviceService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabsetConfig"], _localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"]])
    ], ProductlistComponent);
    return ProductlistComponent;
}());



/***/ }),

/***/ "./src/app/searchresults/searchresults.component.html":
/*!************************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-wrapper\">\r\n  <h2>Search Results for \"{{searchResultTxt}}\"</h2>\r\n  <ngb-tabset class=\"collection-tabs\">\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Sommer Time Stories</b></ng-template>\r\n      <ng-template ngbTabContent >\r\n          <ul class=\"search-result-wrap\">\r\n            <li *ngFor=\"let name of arrBooks | filter: searchResultTxt ; let i = index\">\r\n              <div>\r\n                <h3 class=\"title\">{{name.categoryTitle}}</h3>\r\n                <ul class=\"book-lists\">\r\n                  <li *ngFor=\"let subname of name.results; let i=index\">\r\n                    <div *ngIf=\" i < name.loadcnt \">\r\n                      <div class=\"bl-wrap\">\r\n                        <figure><img src=\"{{subname.src}}\"/></figure>\r\n                        <strong>{{subname.name}}</strong>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"text-center\"><button type=\"button\" class=\"btn\" (click)=\"loadMore(i)\">Load more</button></div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Phonics Adventure</b></ng-template>\r\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n          craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n          cillum PBR.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Reading Success</b></ng-template>\r\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n          craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n          cillum PBR.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Number Success</b></ng-template>\r\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n          craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n          cillum PBR.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Writing Success</b></ng-template>\r\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n          craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n          cillum PBR.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.scss":
/*!************************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-result-wrap > li {\n  padding: 20px 0; }\n\n.search-result-wrap .book-lists {\n  margin: 0 -15px;\n  padding: 0; }\n\n.search-result-wrap .book-lists li {\n    display: inline-block;\n    width: 20%;\n    vertical-align: bottom; }\n\n.search-result-wrap .book-lists li .bl-wrap {\n      padding: 20px;\n      text-align: center; }\n\n.search-result-wrap .book-lists li .bl-wrap figure {\n        margin-bottom: 20px; }\n\n.search-result-wrap .book-lists li .bl-wrap figure img {\n          max-width: 100%; }\n\n.search-result-wrap .book-lists li .bl-wrap strong {\n        font-size: 16px; }\n\n/* Media query */\n\n@media screen and (max-width: 768px) {\n  h2 {\n    font-size: 22px; }\n  h3 {\n    font-size: 20px; }\n  .search-result-wrap .book-lists li {\n    width: 33.33%; } }\n\n@media screen and (max-width: 600px) {\n  .search-result-wrap .book-lists li {\n    width: 50%; } }\n"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/searchresults/searchresults.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultsComponent", function() { return SearchresultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-call.service */ "./src/app/service-call.service.ts");
/* harmony import */ var _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedservice.service */ "./src/app/sharedservice.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(loaclCall, sharedObj, localstorage) {
        this.loaclCall = loaclCall;
        this.sharedObj = sharedObj;
        this.localstorage = localstorage;
        this.counter = 5;
        this.arrBooks = [];
        this.sharedObj.globalObj.breadcrumbList = [
            { 'url': '/home', 'statename': 'Home', 'param': '' },
            { 'url': '/searchresults', 'statename': 'Search results', 'param': '' },
        ];
        this.sharedObj.globalObj.showBreadcrumb = true;
    }
    SearchresultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaclCall.localService('book-list.json').subscribe(function (data) {
            _this.arrBooks = data.searchResults;
        });
    };
    SearchresultsComponent.prototype.loadMore = function (index) {
        this.arrBooks[index].loadcnt = this.arrBooks[index].loadcnt + 5;
    };
    SearchresultsComponent.prototype.ngDoCheck = function () {
        if (this.sharedObj.globalObj.searchTxt) {
            this.searchResultTxt = this.sharedObj.globalObj.searchTxt;
        }
        else {
            this.searchResultTxt = this.localstorage.getLocaldata('searchTxt');
            this.sharedObj.globalObj.searchTxt = this.searchResultTxt;
        }
    };
    SearchresultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchresults',
            template: __webpack_require__(/*! ./searchresults.component.html */ "./src/app/searchresults/searchresults.component.html"),
            styles: [__webpack_require__(/*! ./searchresults.component.scss */ "./src/app/searchresults/searchresults.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_call_service__WEBPACK_IMPORTED_MODULE_1__["ServiceCallService"],
            _sharedservice_service__WEBPACK_IMPORTED_MODULE_2__["SharedserviceService"],
            _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
    ], SearchresultsComponent);
    return SearchresultsComponent;
}());



/***/ }),

/***/ "./src/app/service-call.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service-call.service.ts ***!
  \*****************************************/
/*! exports provided: ServiceCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCallService", function() { return ServiceCallService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceCallService = /** @class */ (function () {
    function ServiceCallService(http) {
        this.http = http;
        this.APIurl = '';
        this.posUrl = '';
        this.localUrl = '';
    }
    /* get method http request*/
    ServiceCallService.prototype.getConfig = function (url) {
        // now returns an Observable of Config
        this.APIurl = 'https://www.advancepublishing-testing.com/sommer_learning/index.php?option=com_sommer&task=' + url;
        console.log(url);
        return this.http.get(this.APIurl);
    };
    /* post method http request*/
    ServiceCallService.prototype.postMethod = function (url, data) {
        this.posUrl = 'https://www.advancepublishing-testing.com/sommer_learning/index.php?option=com_sommer&task=' + url;
        return this.http.post(this.posUrl, data);
    };
    /* get method local http request*/
    ServiceCallService.prototype.localService = function (url) {
        this.localUrl = 'https://spiglobaltestingbucket.s3.amazonaws.com/PrimeMedia/json-files/' + url;
        return this.http.get(this.localUrl);
    };
    ServiceCallService.prototype.getConfigResponse = function () {
        return this.http.get(this.APIurl, { observe: 'response' });
    };
    ServiceCallService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ServiceCallService);
    return ServiceCallService;
}());



/***/ }),

/***/ "./src/app/sharedservice.service.ts":
/*!******************************************!*\
  !*** ./src/app/sharedservice.service.ts ***!
  \******************************************/
/*! exports provided: SharedserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedserviceService", function() { return SharedserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedserviceService = /** @class */ (function () {
    function SharedserviceService(localstorage) {
        this.localstorage = localstorage;
        this.globalObj = { 'showBanner': true, 'breadcrumbList': [], 'showBreadcrumb': false, 'searchTxt': '', 'headerTabdata': [] };
    }
    /*Funtion to reset the collection property*/
    SharedserviceService.prototype.resetTabs = function (tabCollection, isReset) {
        var localRefTothis = this;
        underscore__WEBPACK_IMPORTED_MODULE_2__["_"].each(tabCollection.mediaType, function (item) {
            item.isSelected = false;
            if (!isReset) {
                if ((localRefTothis.localstorage.getLocaldata('currentCategory') && localRefTothis.localstorage.getLocaldata('currentCategory').toLocaleLowerCase()) === item.name.toLocaleLowerCase()) {
                    item.isSelected = true;
                }
            }
        });
        console.log(this.globalObj.headerTabdata['mediaType'], '  -> check the header data   ', tabCollection.mediaType);
    };
    SharedserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"]])
    ], SharedserviceService);
    return SharedserviceService;
}());



/***/ }),

/***/ "./src/app/usercollections/usercollections.component.html":
/*!****************************************************************!*\
  !*** ./src/app/usercollections/usercollections.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-wrapper\">\r\n  <app-breadcrumb></app-breadcrumb>\r\n  <div class=\"uc-tabs\">\r\n  <ngb-tabset #t=\"ngbTabset\">\r\n    <ngb-tab id=\"tab-id1\">\r\n      <ng-template ngbTabTitle><b>Favorites</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <app-carousel></app-carousel>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"tab-id2\">\r\n      <ng-template ngbTabTitle><b>My Collections</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n          master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n          dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n          iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"tab-id3\">\r\n      <ng-template ngbTabTitle><b>Recent Products</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n       <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n         craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n         cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n         yr, vero magna velit sapiente labore stumptown.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/usercollections/usercollections.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/usercollections/usercollections.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/usercollections/usercollections.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/usercollections/usercollections.component.ts ***!
  \**************************************************************/
/*! exports provided: UsercollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercollectionsComponent", function() { return UsercollectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsercollectionsComponent = /** @class */ (function () {
    function UsercollectionsComponent() {
    }
    UsercollectionsComponent.prototype.ngOnInit = function () {
    };
    UsercollectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usercollections',
            template: __webpack_require__(/*! ./usercollections.component.html */ "./src/app/usercollections/usercollections.component.html"),
            styles: [__webpack_require__(/*! ./usercollections.component.scss */ "./src/app/usercollections/usercollections.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsercollectionsComponent);
    return UsercollectionsComponent;
}());



/***/ }),

/***/ "./src/app/usertype.ts":
/*!*****************************!*\
  !*** ./src/app/usertype.ts ***!
  \*****************************/
/*! exports provided: userDetails, carouselProp, breadCrumbObj, sharedValues, carouselDragData, productAllinfoType, CollectionList, Bookdetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDetails", function() { return userDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselProp", function() { return carouselProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breadCrumbObj", function() { return breadCrumbObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedValues", function() { return sharedValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselDragData", function() { return carouselDragData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productAllinfoType", function() { return productAllinfoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionList", function() { return CollectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookdetail", function() { return Bookdetail; });
var userDetails = /** @class */ (function () {
    function userDetails() {
    }
    return userDetails;
}());

var carouselProp = /** @class */ (function () {
    function carouselProp() {
    }
    return carouselProp;
}());

var breadCrumbObj = /** @class */ (function () {
    function breadCrumbObj() {
    }
    return breadCrumbObj;
}());

var sharedValues = /** @class */ (function () {
    function sharedValues() {
    }
    return sharedValues;
}());

var carouselDragData = /** @class */ (function () {
    function carouselDragData() {
    }
    return carouselDragData;
}());

var productAllinfoType = /** @class */ (function () {
    function productAllinfoType() {
    }
    return productAllinfoType;
}());

var CollectionList = /** @class */ (function () {
    function CollectionList() {
    }
    return CollectionList;
}());

var Bookdetail = /** @class */ (function () {
    function Bookdetail() {
    }
    return Bookdetail;
}());



/***/ }),

/***/ "./src/app/video-audio-modal/video-audio-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/video-audio-modal/video-audio-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Video Audio</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"player\">\r\n        <embed width=\"100%\" height=\"380\" src=\"http://www.youtube.com/embed/oy5IU2nvZew?rel=0&autoplay=1\">\r\n      </div>\r\n  </div>\r\n</ng-template>\r\n<button class=\"btn btn-lg btn-outline-primary btn-video\" (click)=\"open(content)\">{{actionName}}</button>\r\n"

/***/ }),

/***/ "./src/app/video-audio-modal/video-audio-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/video-audio-modal/video-audio-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".player {\n  padding: 20px; }\n  .player video {\n    margin-bottom: 15px; }\n  .btn.btn-video {\n  display: inline-block;\n  width: 115px;\n  height: 32px;\n  font: 14px \"MyriadPro-Bold\";\n  margin-right: 10px;\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 5px;\n  background: #1ea6dd;\n  text-align: center;\n  transition: 0.2s ease-in;\n  cursor: pointer;\n  border: 0;\n  margin-bottom: 10px; }\n  .btn.btn-video:hover, .btn.btn-video.active, .btn.btn-video:focus {\n  background: #218db9;\n  color: #fff;\n  text-decoration: none;\n  box-shadow: none; }\n"

/***/ }),

/***/ "./src/app/video-audio-modal/video-audio-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/video-audio-modal/video-audio-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: VideoAudioModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAudioModalComponent", function() { return VideoAudioModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoAudioModalComponent = /** @class */ (function () {
    function VideoAudioModalComponent(modalService) {
        this.modalService = modalService;
    }
    VideoAudioModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    VideoAudioModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideoAudioModalComponent.prototype, "actionName", void 0);
    VideoAudioModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-audio-modal',
            template: __webpack_require__(/*! ./video-audio-modal.component.html */ "./src/app/video-audio-modal/video-audio-modal.component.html"),
            styles: [__webpack_require__(/*! ./video-audio-modal.component.scss */ "./src/app/video-audio-modal/video-audio-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], VideoAudioModalComponent);
    return VideoAudioModalComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\PrimeMedia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map