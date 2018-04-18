webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-gims-home {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;;\r\n\tdisplay: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_material_module__ = __webpack_require__("./src/app/core/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gims_home_gims_home_component__ = __webpack_require__("./src/app/gims-home/gims-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_gims_routing_module__ = __webpack_require__("./src/app/core/gims-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appbar_appbar_component__ = __webpack_require__("./src/app/appbar/appbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_nav_menu_side_nav_menu_component__ = __webpack_require__("./src/app/side-nav-menu/side-nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gims_app_screen_gims_app_screen_component__ = __webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gims_app_immigrant_gims_app_immigrant_component__ = __webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__project_picker_project_picker_component__ = __webpack_require__("./src/app/project-picker/project-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__general_details_general_details_component__ = __webpack_require__("./src/app/general-details/general-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_gims_shared_service_service__ = __webpack_require__("./src/app/shared-services/gims-shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lca_initiation_lca_initiation_component__ = __webpack_require__("./src/app/lca-initiation/lca-initiation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__default_initiate_default_initiate_component__ = __webpack_require__("./src/app/default-initiate/default-initiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__work_progress_work_progress_component__ = __webpack_require__("./src/app/work-progress/work-progress.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__gims_home_gims_home_component__["a" /* GimsHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__appbar_appbar_component__["a" /* AppbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__side_nav_menu_side_nav_menu_component__["a" /* SideNavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__gims_app_screen_gims_app_screen_component__["a" /* GimsAppScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_13__gims_app_immigrant_gims_app_immigrant_component__["a" /* GimsAppImmigrantComponent */],
            __WEBPACK_IMPORTED_MODULE_15__project_picker_project_picker_component__["a" /* ProjectPickerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__general_details_general_details_component__["a" /* GeneralDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__lca_initiation_lca_initiation_component__["a" /* LcaInitiationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__default_initiate_default_initiate_component__["a" /* DefaultInitiateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__work_progress_work_progress_component__["a" /* WorkProgressComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9__core_gims_routing_module__["a" /* GimsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* ReactiveFormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__shared_services_gims_shared_service_service__["a" /* GimsSharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/appbar/appbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-widgets li {\r\n    padding-left: 20px;\r\n}\r\n.avtar{\r\n    width: 22px;\r\n    border-radius: 50%\r\n}\r\n.side-widgets {\r\n    position: relative;\r\n    top: 5px;\r\n}\r\n.side-widgets li a {\r\n    font-size: 22px;\r\n}\r\n\r\n.mat-sidenav-container {\r\n    background: rgba(172, 32, 32, 0.08);\r\n  }\r\n  \r\n  .blank-grow {\r\n    -ms-flex: 1 1 auto;\r\n        flex: 1 1 auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/appbar/appbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n  <div class=\"container-fluid\">\r\n    <h5 class=\"color-blue\"><a [routerLink]=\"['/WT_GIMS_E']\">Wipro GIMS</a></h5>\r\n  \r\n    <ul class=\"nav navbar-right side-widgets color-blue\">\r\n      <li><a href=\"#\"><i class=\"icon-info\"></i></a></li>\r\n      <li><img class=\"round shadow-box avtar\" aria-label=\"MyWipro\" src=\"assets\\user\\avtar.jpg\" /></li>\r\n      <li><a class=\"icon-logout\" routerlink=\"/\" title=\"Logout\"></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/appbar/appbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppbarComponent = (function () {
    function AppbarComponent(changeDetectorRef, media) {
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppbarComponent.prototype.ngOnInit = function () {
    };
    AppbarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    return AppbarComponent;
}());
AppbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-appbar',
        template: __webpack_require__("./src/app/appbar/appbar.component.html"),
        styles: [__webpack_require__("./src/app/appbar/appbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["a" /* MediaMatcher */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["a" /* MediaMatcher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["a" /* MediaMatcher */]) === "function" && _b || Object])
], AppbarComponent);

var _a, _b;
//# sourceMappingURL=appbar.component.js.map

/***/ }),

/***/ "./src/app/core/gims-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gims_home_gims_home_component__ = __webpack_require__("./src/app/gims-home/gims-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gims_app_screen_gims_app_screen_component__ = __webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gims_app_immigrant_gims_app_immigrant_component__ = __webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lca_initiation_lca_initiation_component__ = __webpack_require__("./src/app/lca-initiation/lca-initiation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_initiate_default_initiate_component__ = __webpack_require__("./src/app/default-initiate/default-initiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__ = __webpack_require__("./src/app/work-progress/work-progress.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
    { path: '', redirectTo: '/WT_GIMS_E', pathMatch: 'full' },
    { path: 'WT_GIMS_E', component: __WEBPACK_IMPORTED_MODULE_2__gims_home_gims_home_component__["a" /* GimsHomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__gims_app_screen_gims_app_screen_component__["a" /* GimsAppScreenComponent */],
                children: [
                    { path: '*', redirectTo: '/', pathMatch: 'full' },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__default_initiate_default_initiate_component__["a" /* DefaultInitiateComponent */] }
                ]
            },
            { path: 'immigriant', component: __WEBPACK_IMPORTED_MODULE_4__gims_app_immigrant_gims_app_immigrant_component__["a" /* GimsAppImmigrantComponent */],
                children: [
                    { path: '', redirectTo: '/lca', pathMatch: 'full' },
                    { path: 'lca', component: __WEBPACK_IMPORTED_MODULE_5__lca_initiation_lca_initiation_component__["a" /* LcaInitiationComponent */] }
                ]
            },
            { path: 'knowledge', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
            { path: 'application', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
            { path: 'task', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__work_progress_work_progress_component__["a" /* WorkProgressComponent */] },
        ]
    }
], { useHash: true });
var GimsRoutingModule = (function () {
    function GimsRoutingModule() {
    }
    return GimsRoutingModule;
}());
GimsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [routes],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], GimsRoutingModule);

//# sourceMappingURL=gims-routing.module.js.map

/***/ }),

/***/ "./src/app/core/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "./src/app/default-initiate/default-initiate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tip-container{\r\n    background-color:#f6f6f6;\r\n    border-radius: 10px 10px 10px 10px;    \r\n}\r\n.div-tips>h6{\r\ncolor: chartreuse;\r\nmargin-top: 10px;\r\n\r\n}\r\n.tip-container>div,.tip-container>span{\r\n  margin-bottom:10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n.proj-details{\r\n  margin-top:10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.navbtn{\r\n  background-color: #0e3570;\r\n  color: white;\r\n}\r\nhr{\r\n  margin-top:3px;\r\n  padding: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/default-initiate/default-initiate.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"firstFormGroup\">\r\n    <mat-card class=\"example-card\" style=\"margin-top:20px;\">\r\n      <mat-card-header>\r\n        <!--  Card Header starts  -->\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <router-outlet></router-outlet>\r\n        <section class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 header\">\r\n              <h6>Initiation</h6>\r\n              <p>1/2 Select Request Type</p>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n              <button mat-raised-button class=\"navbtn\" (click)=\"navToLca()\">LCA Initiation</button>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n              <!-- General Information  Section-->\r\n              <div class=\"\">\r\n                <div class=\"\">\r\n                  <h6>General Details</h6>\r\n                </div>\r\n                <div class=\"\">\r\n                  <app-general-details></app-general-details>\r\n                </div>\r\n                <!-- Customer Information Section -->\r\n                <div class=\"\">\r\n                  <h6>Customer Details</h6>\r\n                </div>\r\n                <div class=\"proj-details\">\r\n                  <app-project-picker></app-project-picker>\r\n                </div>\r\n                <!-- Post Project selection area -->\r\n                <div class=\" row\">\r\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Customer Name\" disabled value=\"Credit Suisse\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Project Name\" disabled value=\"Myriad\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Approving Authority\" disabled value=\"Anand Desai\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Address(Assignment)\" formControlName=\"assignmentAddress\">\r\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                          {{ food.viewValue }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"\">\r\n                  <h6>Other Details</h6>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker1\" formControlName=\"startDate\" placeholder=\"Start date (dd/mm/yyyy)\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker1></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date (dd/mm/yyyy)\" formControlName=\"endDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\" ></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Address(Assignment)\" formControlName=\"assignmentAddress\">\r\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                          {{ food.viewValue }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Tips and Disclaimer section -->\r\n            <div class=\"col-4\">\r\n              <!-- on Desktop and large screens -->\r\n              <div class=\"container tip-container d-none d-lg-block\">\r\n                <div class=\"div-tips hidden-xs row\">\r\n                  <h6>Tips</h6>\r\n                </div>\r\n                <div class=\"row hidden-xs\">\r\n                  <p>\r\n                    {{screenHint}}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"container  d-block d-lg-none\">\r\n                <mat-icon aria-label=\"Example icon-button info\" class=\"float-right\" (click)=\"tooltip.show()\">info</mat-icon>\r\n                <span matTooltip=\"{{screenHint}}\" #tooltip=\"matTooltip\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n          <div class=\"col-md-8 col-sm-2 col-xs-2\">\r\n          <button mat-raised-button class=\"float-left\">Back</button>                 \r\n            </div>\r\n            \r\n            <div class=\"col-md-4 col-sm-10 col-xs-10 float-right\">\r\n                <button mat-raised-button color=\"warn\">Reset</button>\r\n                <button mat-raised-button color=\"primary\"  class=\"float-right\" [disabled]=\"!firstFormGroup.valid\">Find</button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <!--  General Details Section -->\r\n        <!-- <h5> General Details</h5> -->\r\n        <div>\r\n\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <div class=\"col-12\">\r\n          <div>\r\n           \r\n          </div>\r\n\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>"

/***/ }),

/***/ "./src/app/default-initiate/default-initiate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultInitiateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultInitiateComponent = (function () {
    function DefaultInitiateComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'India' },
            { value: 'pizza-1', viewValue: 'USA' },
            { value: 'tacos-2', viewValue: 'New York' }
        ];
        this.screenHint = "This is a one stop shop providing immigration assistance\n   for all your business related travel and onsite assignments.\n   This is a consolidated app, wherein you can create, edit and\n   view visa/work permit application for self/reportee; upload supporting\n    documents;check status and lifecycle of application; dashboard with overall reports\n    on LCA initiation, availability and approval;pending task actions and a\n    repository for immigration related information on any source destination or visa\n     type as news and information.\n     You can also take a print out of your application which is just a click away.";
    }
    DefaultInitiateComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    DefaultInitiateComponent.prototype.navToLca = function () {
        this._router.navigate(['/WT_GIMS_E/immigriant/lca']);
    };
    return DefaultInitiateComponent;
}());
DefaultInitiateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gims-app-screen',
        template: __webpack_require__("./src/app/default-initiate/default-initiate.component.html"),
        styles: [__webpack_require__("./src/app/default-initiate/default-initiate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DefaultInitiateComponent);

var _a, _b;
//# sourceMappingURL=default-initiate.component.js.map

/***/ }),

/***/ "./src/app/general-details/general-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    width:100%;\r\n   }\r\n   .mat-input-wrapper{ width:400px !important; } \r\n   .twin-select div:first-child {\r\n    padding-left: 0px; float: left;\r\n   }\r\n   .twin-select div:last-child {\r\n        padding-right: 0px; float: left\r\n    }\r\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/general-details/general-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <form [formGroup]=\"generalForm\">\r\n    <div class=\"\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Assignment Location\" formControlName=\"assignmentLoaction\">\r\n          <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n            {{ country.viewValue }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Assignment For\" formControlName=\"assignmentFor\">\r\n          <mat-option *ngFor=\"let assignment of assignmentFor\" [value]=\"assignment.value\">\r\n            {{ assignment.viewValue }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Wipro Divisions\" formControlName=\"wiproDivision\">\r\n          <mat-option *ngFor=\"let division of divisions\" [value]=\"division.value\">\r\n            {{ division.viewValue }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 \">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Source Country\" formControlName=\"sourceCountry\">\r\n            <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n              {{ country.viewValue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Destination country\" formControlName=\"destCountry\">\r\n            <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n              {{ country.viewValue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Visa Sub Type\" formControlName=\"visaType\">\r\n  <mat-option *ngFor=\"let visa of visaType\" [value]=\"visa.value\">\r\n            {{ visa.viewValue }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/general-details/general-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralDetailsComponent = (function () {
    function GeneralDetailsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.countries = [
            { value: 'steak-0', viewValue: 'USA' },
            { value: 'pizza-1', viewValue: 'ZURICH' },
            { value: 'tacos-2', viewValue: 'CANADA' }
        ];
        this.assignmentFor = [
            { value: 'steak-0', viewValue: 'Wipro Internal Assignment' },
            { value: 'pizza-1', viewValue: 'Wipro Onsite Assignment' },
            { value: 'tacos-2', viewValue: 'Wipro Dummy Assignment' }
        ];
        this.divisions = [
            { value: 'steak-0', viewValue: 'Wipro Technologies' },
            { value: 'pizza-1', viewValue: 'Wipro InfoTech' },
            { value: 'tacos-2', viewValue: 'Wipro Digital' }
        ];
        this.visaType = [
            { value: 'steak-0', viewValue: 'Work Permit Processing' },
            { value: 'pizza-1', viewValue: 'H1B1' },
            { value: 'tacos-2', viewValue: 'H1B2' }
        ];
    }
    GeneralDetailsComponent.prototype.ngOnInit = function () {
        this.generalForm = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            managerEmpId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            AssignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            ApprovingAutority: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
    };
    return GeneralDetailsComponent;
}());
GeneralDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-general-details',
        template: __webpack_require__("./src/app/general-details/general-details.component.html"),
        styles: [__webpack_require__("./src/app/general-details/general-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object])
], GeneralDetailsComponent);

var _a;
//# sourceMappingURL=general-details.component.js.map

/***/ }),

/***/ "./src/app/gims-app-immigrant/gims-app-immigrant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-title {\r\n    padding : 10px 0;\r\n    font-weight: bold\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/gims-app-immigrant/gims-app-immigrant.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container stepper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <h4 class=\"color-blue page-title\">Initiate a New Request</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    \r\n  </div>\r\n<!-- Grid row -->\r\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\" >\r\n      <mat-step [stepControl]=\"firstFormGroup\" disableRipple>\r\n          <ng-template matStepLabel>Initiate</ng-template>\r\n        <router-outlet></router-outlet>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"secondFormGroup\">\r\n        <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Online Non-Immigrant Visa</ng-template>\r\n          <div>\r\n            <app-work-progress></app-work-progress>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Questionnire</ng-template>\r\n        <div>\r\n         <app-work-progress></app-work-progress>\r\n        </div>\r\n        <div #test></div>\r\n      </mat-step>\r\n      <mat-step>\r\n          <ng-template matStepLabel>Forms</ng-template>\r\n          <div>\r\n              <app-work-progress></app-work-progress>\r\n          </div>\r\n          <div #test></div>\r\n        </mat-step>\r\n        <mat-step>\r\n            <ng-template matStepLabel>Documents Upload</ng-template>\r\n            <div>\r\n             <app-work-progress></app-work-progress>\r\n            </div>\r\n            <div #test></div>\r\n          </mat-step>\r\n          <mat-step>\r\n              <ng-template matStepLabel>Application Life Cycle</ng-template>\r\n              <div>\r\n                <app-work-progress></app-work-progress>\r\n              </div>\r\n              <div #test></div>\r\n            </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </section>"

/***/ }),

/***/ "./src/app/gims-app-immigrant/gims-app-immigrant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animation__ = __webpack_require__("./src/app/router-animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsAppImmigrantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GimsAppImmigrantComponent = (function () {
    function GimsAppImmigrantComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.urlStatus = false;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.screenHint = "Lorem ipsum dolor sit amet\n  consectetur adipisicing elit. Deserunt voluptate dolores saepe non, cumque ad officia alias distinctio\n  quibusdam laboriosam nihil quos eius minus aut tempore repellendus rem tempora ducimus! Lorem ipsum\n  dolor sit amet consectetur adipisicing elit. Ut sunt iusto ipsum nobis commodi similique fuga earum?\n  Alias iste dolorum, aspernatur impedit esse aliquid. Recusandae nihil exercitationem deleniti mollitia\n  veniam";
    }
    GimsAppImmigrantComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    return GimsAppImmigrantComponent;
}());
GimsAppImmigrantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gims-app-screens',
        template: __webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.html"),
        styles: [__webpack_require__("./src/app/gims-app-immigrant/gims-app-immigrant.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animation__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GimsAppImmigrantComponent);

var _a, _b;
//# sourceMappingURL=gims-app-immigrant.component.js.map

/***/ }),

/***/ "./src/app/gims-app-screen/gims-app-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-title {\r\n    padding : 10px 0;\r\n    font-weight: bold\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/gims-app-screen/gims-app-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container stepper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <h4 class=\"color-blue page-title\">Initiate a New Request</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">    \r\n  </div>\r\n<!-- Grid row -->\r\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\" >\r\n      <mat-step [stepControl]=\"firstFormGroup\" disableRipple>\r\n          <ng-template matStepLabel>Initiate</ng-template>\r\n        <router-outlet></router-outlet>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Questionnire</ng-template>\r\n        <div>\r\n         <app-work-progress></app-work-progress>\r\n        </div>\r\n        <div #test></div>\r\n      </mat-step>\r\n      <mat-step>\r\n          <ng-template matStepLabel>Forms</ng-template>\r\n          <div>\r\n              <app-work-progress></app-work-progress>\r\n          </div>\r\n          <div #test></div>\r\n        </mat-step>\r\n        <mat-step>\r\n            <ng-template matStepLabel>Documents Upload</ng-template>\r\n            <div>\r\n             <app-work-progress></app-work-progress>\r\n            </div>\r\n            <div #test></div>\r\n          </mat-step>\r\n          <mat-step>\r\n              <ng-template matStepLabel>Application Life Cycle</ng-template>\r\n              <div>\r\n                <app-work-progress></app-work-progress>\r\n              </div>\r\n              <div #test></div>\r\n            </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </section>"

/***/ }),

/***/ "./src/app/gims-app-screen/gims-app-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animation__ = __webpack_require__("./src/app/router-animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsAppScreenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GimsAppScreenComponent = (function () {
    function GimsAppScreenComponent(_formBuilder, _router) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.screenHint = "Lorem ipsum dolor sit amet\n  consectetur adipisicing elit. Deserunt voluptate dolores saepe non, cumque ad officia alias distinctio\n  quibusdam laboriosam nihil quos eius minus aut tempore repellendus rem tempora ducimus! Lorem ipsum\n  dolor sit amet consectetur adipisicing elit. Ut sunt iusto ipsum nobis commodi similique fuga earum?\n  Alias iste dolorum, aspernatur impedit esse aliquid. Recusandae nihil exercitationem deleniti mollitia\n  veniam";
    }
    GimsAppScreenComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    return GimsAppScreenComponent;
}());
GimsAppScreenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gims-app-screens',
        template: __webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.html"),
        styles: [__webpack_require__("./src/app/gims-app-screen/gims-app-screen.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animation__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GimsAppScreenComponent);

var _a, _b;
//# sourceMappingURL=gims-app-screen.component.js.map

/***/ }),

/***/ "./src/app/gims-home/gims-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\r\n    height: inherit;    \r\n}\r\nsection, aside {\r\n    transition: width 1.25s;\r\n}\r\narticle, menuActive > article  {\r\n    transition: padding 1.25s;\r\n}\r\naside {\r\n    background-color: #ffda29;\r\n    padding: 0;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    float: left;\r\n    position: fixed;\r\n    width: 40px;\r\n    z-index: 99;\r\n}\r\narticle { width: 100%; min-height: 1000px; overflow: hidden; float: left; \r\n    background-color: #f0f0f0; box-shadow: 0px 0px 7px -2px #333 inset;\r\n    padding-left: 40px;\r\n}\r\n.menuActive > article {\r\n    padding-left: 200px;  \r\n}\r\n.menuActive > aside {\r\n    width: 200px;    \r\n}\r\napp-appbar {\r\n    box-shadow: 0px 0px 7px -2px #000;\r\n    display: block;\r\n}\r\napp-gims-app-screen {\r\n    padding: 20px 0;\r\n    display: block;\r\n    min-height: 800px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/gims-home/gims-home.component.html":
/***/ (function(module, exports) {

module.exports = "<section [ngClass]=\"{'menuActive': menuStatus}\">\r\n  <aside>\r\n    <app-side-nav-menu (slideMenu)=\"menuSlide($event)\"></app-side-nav-menu>\r\n  </aside>\r\n  <article>\r\n    <app-appbar></app-appbar>\r\n    <router-outlet></router-outlet>\r\n  </article>\r\n</section>"

/***/ }),

/***/ "./src/app/gims-home/gims-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GimsHomeComponent = (function () {
    function GimsHomeComponent() {
        this.title = 'GIMS';
        this.menuStatus = false;
    }
    GimsHomeComponent.prototype.ngOnInit = function () {
    };
    GimsHomeComponent.prototype.menuSlide = function (event) {
        this.menuStatus = event;
    };
    return GimsHomeComponent;
}());
GimsHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gims-home',
        template: __webpack_require__("./src/app/gims-home/gims-home.component.html"),
        styles: [__webpack_require__("./src/app/gims-home/gims-home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GimsHomeComponent);

//# sourceMappingURL=gims-home.component.js.map

/***/ }),

/***/ "./src/app/lca-initiation/lca-initiation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tip-container{\r\n    background-color:#f6f6f6;\r\n    border-radius: 10px 10px 10px 10px;    \r\n}\r\n.div-tips>h6{\r\ncolor: chartreuse;\r\nmargin-top: 10px;\r\n\r\n}\r\n.tip-container>div,.tip-container>span{\r\n  margin-bottom:10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n.proj-details{\r\n  margin-top:10px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n.left-align-div{\r\n margin-left:-43px;\r\n}\r\nhr{\r\n  margin-top:3px;\r\n  padding: 3px;\r\n}\r\n.visa{\r\n  margin-left:-29px;\r\n}\r\n.form-header{\r\n   font-weight: 800;\r\n}\r\n.activeBg > div {\r\n  float: left;\r\n}\r\n.activeBg {\r\n  background-color: #e8f8ff;\r\n  margin-bottom: 20px;\r\n  padding-top: 20px;\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/lca-initiation/lca-initiation.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n<form [formGroup]=\"firstFormGroup\">\r\n  <mat-card class=\"example-card\" style=\"margin-top:20px;\">\r\n    <mat-card-header>\r\n      <!--  Card Header starts  -->\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <section class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 header\">\r\n            <h6>Initiation</h6>\r\n            <p>Internal Assignment</p>\r\n          </div>\r\n          <div class=\"col-md-6 text-right\">\r\n            <button mat-button color=\"primary\" (click)=\"back()\">Back</button>\r\n          </div>\r\n        </div>\r\n        <span layout=\"row\">\r\n          <hr flex/>\r\n        </span>\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <!-- General Information  Section-->\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                  <mat-radio-group>\r\n                    <mat-radio-button value=\"1\" [checked]=\"true\">For Self</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                  <mat-radio-group>\r\n                    <mat-radio-button value=\"1\">For Others</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n\r\n              </div>\r\n              <div>\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Work Permit/ Visa Type\" formControlName=\"visaType\">\r\n                    <mat-option *ngFor=\"let food of permitType\" [value]=\"food.value\">\r\n                      {{ food.viewValue }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"row key-field\" *ngIf=\"firstFormGroup.value.visaType==1\">\r\n                <div class=\"col-md-12\" style=\"margin-bottom:20px\">\r\n                  <h6>Base Application Details</h6>\r\n                </div>\r\n                <div class=\"col-md-12 \">\r\n                  <div class=\"activeBg\">\r\n                    <div class=\"col-md-1 col-sm-12 col-xs-12\">\r\n                      <span>\r\n                        <mat-radio-group>\r\n                          <mat-radio-button value=\"1\" [checked]=\"true\"></mat-radio-button>\r\n                        </mat-radio-group>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-12\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"# Application\" disabled value=\"IN-329296\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Destination Country\" disabled value=\"USA\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Request Sub Type\" disabled value=\"H1B Cap Exepmt\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>  \r\n                </div>\r\n              </div>\r\n              <div class=\"\">\r\n                <h6>General Details</h6>\r\n              </div>\r\n              <div class=\"\">\r\n                <app-general-details></app-general-details>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"state\" formControlName=\"state\">\r\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\r\n                        {{ state }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"City\" formControlName=\"city\">\r\n                      <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                        {{ city }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <!-- Customer Information Section -->\r\n              <div class=\"\">\r\n                <h6>Customer Details</h6>\r\n              </div>\r\n\r\n              <!-- Post Project selection area -->\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Customer Name\" disabled value=\"Credit Suisse\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Project Name\" disabled value=\"Myriad\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Approving Authority\" disabled value=\"Anand Desai\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Address(Assignment)\" formControlName=\"assignmentAddress\">\r\n                      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                        {{ food.viewValue }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\" \">\r\n                <h6>Other Details</h6>\r\n              </div>\r\n              <div class=\"row \">\r\n                <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker1\" formControlName=\"startDate\" placeholder=\"Start date (dd/mm/yyyy)\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date (dd/mm/yyyy)\" formControlName=\"endDate\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6 \">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Employee Role\" formControlName=\"imgRole\">\r\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\r\n                        {{ state }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Immigiration  Role\" formControlName=\"assignmentAddress\">\r\n                      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\r\n                        {{ state }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"IMS Eligiblity\" disabled value=\"Primary\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Competency Eligiblity\" disabled value=\"Secondary\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Tips and Disclaimer section -->\r\n          <div class=\"col-4\">\r\n            <!-- on Desktop and large screens -->\r\n            <div class=\"container tip-container d-none d-sm-block\">\r\n              <div class=\"div-tips hidden-xs row\">\r\n                <h6>Tips</h6>\r\n              </div>\r\n              <div class=\"row hidden-xs\">\r\n                <p>\r\n                  {{screenHint}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"container d-block d-sm-none\">\r\n              <mat-icon aria-label=\"Example icon-button\" (click)=\"tooltip.show()\">info</mat-icon>\r\n              <span matTooltip=\"{{screenHint}}\" #tooltip=\"matTooltip\" [matTooltipPosition]=\"below\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n            <button mat-raised-button class=\"float-left\">Back</button>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-12 col-xs-12 float-right\">\r\n            <button mat-raised-button color=\"warn\">Reset</button>\r\n            <button mat-raised-button class=\"float-right\" color=\"primary\" [disabled]=\"!firstFormGroup.valid\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <!--  General Details Section -->\r\n      <!-- <h5> General Details</h5> -->\r\n      <div>\r\n\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <div class=\"col-12\">\r\n        <div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/lca-initiation/lca-initiation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LcaInitiationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LcaInitiationComponent = (function () {
    function LcaInitiationComponent(_formBuilder, _location, _router) {
        this._formBuilder = _formBuilder;
        this._location = _location;
        this._router = _router;
        this.isLinear = false;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.permitType = [{ value: '0', viewValue: 'Work Permit Processing' },
            { value: '1', viewValue: 'Extension/Amendment/Transfer' },
            { value: '2', viewValue: 'Others' }];
        this.states = ['Boston', 'Oston', 'Toston'];
        this.cities = ['New York', 'California', 'Los Angles'];
        this.screenHint = "Lorem ipsum dolor sit amet\n  consectetur adipisicing elit. Deserunt voluptate dolores saepe non, cumque ad officia alias distinctio\n  quibusdam laboriosam nihil quos eius minus aut tempore repellendus rem tempora ducimus! Lorem ipsum\n  dolor sit amet consectetur adipisicing elit. Ut sunt iusto ipsum nobis commodi similique fuga earum?\n  Alias iste dolorum, aspernatur impedit esse aliquid. Recusandae nihil exercitationem deleniti mollitia\n  veniam";
    }
    LcaInitiationComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            assignmentLoaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            wiproDivision: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            sourceCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            destCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            visaType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            assignmentAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            imgRole: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    LcaInitiationComponent.prototype.back = function () {
        this._router.navigate(['/WT_GIMS_E']);
    };
    return LcaInitiationComponent;
}());
LcaInitiationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-lca-initiation',
        template: __webpack_require__("./src/app/lca-initiation/lca-initiation.component.html"),
        styles: [__webpack_require__("./src/app/lca-initiation/lca-initiation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LcaInitiationComponent);

var _a, _b, _c;
//# sourceMappingURL=lca-initiation.component.js.map

/***/ }),

/***/ "./src/app/project-picker/project-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".done>button{\r\n    margin-right: 29px;\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/project-picker/project-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\r\n<mat-accordion>\r\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon> work</mat-icon><span class=\"color-primary\">Choose Customer/Project</span>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"projectForm\" (submit)=\"saveAssignment(projectForm)\">\r\n      <div class=\"col-md-12\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" placeholder=\"Manager Emp. No/Email Id\" aria-label=\"Number\" matInput formControlName=\"manager\" [matAutocomplete]=\"auto\">\r\n                  <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let manager of managerArray\" [value]=\"manager.value\">\r\n                      {{ manager.value }}\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n              <mat-form-field> \r\n                  <mat-select placeholder=\"Assignment For\" formControlName=\"AssignmentFor\">\r\n                    <mat-option *ngFor=\"let assignment of assignments\" [value]=\"assignment.client\">\r\n                      {{ assignment.viewValue }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Customer Name\" disabled value=\"{{projectForm.value.AssignmentFor}}\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Approving Authority\" disabled value=\"{{projectForm.value.manager}}\">\r\n                </mat-form-field>\r\n                  </div>\r\n                 <div class=\"col-md-12 done\">\r\n                    <button mat-raised-button color=\"primary\" class=\"float-right\">Done</button>      \r\n                 </div> \r\n                 </form>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</article>"

/***/ }),

/***/ "./src/app/project-picker/project-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectPickerComponent = (function () {
    function ProjectPickerComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.assignments = [
            { client: 'Suman Sikandar', viewValue: 'Dummy_Wipro_internal_Projects' },
            { client: 'Sundar Marikani', viewValue: 'Credit Suisse' },
            { client: 'MArck Taco', viewValue: 'Telstra' }
        ];
        this.managerArray = [
            { empid: '329123', value: 'Karthikeyan' },
            { empid: '329124', value: 'Suman Sikandar' },
            { empid: '329122', value: 'Alex Reynolds' },
            { empid: '329128', value: 'Varun Singh' },
            { empid: '329120', value: 'Basav Raj' },
        ];
        this.step = 1;
        this.options = ['One', 'Two', 'Three'];
    }
    ProjectPickerComponent.prototype.ngOnInit = function () {
        this.projectForm = this._formBuilder.group({
            manager: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            AssignmentFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            ApprovingAutority: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
    };
    ProjectPickerComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ProjectPickerComponent.prototype.saveAssignment = function (formdata) {
        console.log('form data', formdata.value);
        this.step = 1;
    };
    return ProjectPickerComponent;
}());
ProjectPickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-project-picker',
        template: __webpack_require__("./src/app/project-picker/project-picker.component.html"),
        styles: [__webpack_require__("./src/app/project-picker/project-picker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object])
], ProjectPickerComponent);

var _a;
//# sourceMappingURL=project-picker.component.js.map

/***/ }),

/***/ "./src/app/router-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToRight() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'relative', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router-animation.js.map

/***/ }),

/***/ "./src/app/shared-services/gims-shared-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimsSharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GimsSharedService = (function () {
    function GimsSharedService() {
    }
    GimsSharedService.prototype.saveGeneralDetails = function (generalDetails) {
        this.generalDetails = generalDetails;
    };
    GimsSharedService.prototype.getGeneralDetails = function () {
        return this.generalDetails;
    };
    return GimsSharedService;
}());
GimsSharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GimsSharedService);

//# sourceMappingURL=gims-shared-service.service.js.map

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-nav li i {\r\n    padding: 10px 15px 10px 8px;\r\n}\r\n.navbar-nav {\r\n    width: 300px;\r\n}\r\n.menu {\r\n    cursor: pointer;\r\n}\r\n.navbar-nav li span{\r\n    top: -5px;\r\n    position: relative;\r\n}\r\n.navbar-nav li i {\r\n    font-size: 22px\r\n}\r\nli.nav-item.active {\r\n    color: #fff;\r\n    background-color: #0e3570;\r\n}\r\n\r\nli.nav-item.menu {\r\n    padding: 15px 0;\r\n}\r\nli.nav-item {\r\n    padding: 10px 0;\r\n}\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n.nav-item:hover:not(:first-child){\r\n    background-color: #0e3570;\r\ncolor: white;    \r\n}\r\nli>a{\r\n    text-decoration: none;\r\n}\r\nli>a:hover{\r\ncolor:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\r\n\t<li class=\"nav-item menu\"><i class=\"icon-menu\" (click)='openMenu(menuFlag)'></i> <span>Wipro GIMS</span></li>\r\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-home\"></i><span>Home</span></a></li>\r\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/WT_GIMS_E']\"><i class=\"icon-circle_add\"></i> <span>Initiate</span></a></li>\r\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-application\"></i><span>My Applications</span></a></li>\r\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-task\"></i><span>My Tasks</span></a></li>\r\n\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a><i class=\"icon-knowledge\"></i><span>Knowledge Base</span></a></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/side-nav-menu/side-nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavMenuComponent = (function () {
    function SideNavMenuComponent() {
        this.menuFlag = false;
        this.slideMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    SideNavMenuComponent.prototype.ngOnInit = function () { };
    SideNavMenuComponent.prototype.openMenu = function (status) {
        this.menuFlag = !status;
        this.slideMenu.emit(this.menuFlag);
    };
    return SideNavMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], SideNavMenuComponent.prototype, "slideMenu", void 0);
SideNavMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-side-nav-menu',
        template: __webpack_require__("./src/app/side-nav-menu/side-nav-menu.component.html"),
        styles: [__webpack_require__("./src/app/side-nav-menu/side-nav-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideNavMenuComponent);

var _a;
//# sourceMappingURL=side-nav-menu.component.js.map

/***/ }),

/***/ "./src/app/work-progress/work-progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "article>h1{\r\n    margin:100px;\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/work-progress/work-progress.component.html":
/***/ (function(module, exports) {

module.exports = "  <article>\r\n      <h1>Coming  soon..!</h1>\r\n  </article>  "

/***/ }),

/***/ "./src/app/work-progress/work-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animation__ = __webpack_require__("./src/app/router-animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkProgressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkProgressComponent = (function () {
    function WorkProgressComponent() {
    }
    WorkProgressComponent.prototype.ngOnInit = function () {
    };
    return WorkProgressComponent;
}());
WorkProgressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-work-progress',
        template: __webpack_require__("./src/app/work-progress/work-progress.component.html"),
        styles: [__webpack_require__("./src/app/work-progress/work-progress.component.css")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animation__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], WorkProgressComponent);

//# sourceMappingURL=work-progress.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map