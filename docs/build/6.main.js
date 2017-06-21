webpackJsonp([6],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__technologies__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesPageModule", function() { return TechnologiesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TechnologiesPageModule = (function () {
    function TechnologiesPageModule() {
    }
    return TechnologiesPageModule;
}());
TechnologiesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__technologies__["a" /* TechnologiesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__technologies__["a" /* TechnologiesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__technologies__["a" /* TechnologiesPage */]
        ]
    })
], TechnologiesPageModule);

//# sourceMappingURL=technologies.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (items) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var property = args[0], value = args[1];
        console.log(property);
        console.log(value);
        return items.filter(function (item) { return item[property] == value; });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Pipe */])({
        name: 'filter',
    })
], FilterPipe);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_filter__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologiesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { TechnologyPage } from '../technology/technology';
/**
 * Generated class for the TechnologiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TechnologiesPage = (function () {
    function TechnologiesPage(navCtrl, navParams, gameData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.eras = ["Ancient", "Classical", "Medieval", "Renaissance", "Industrial", "Modern", "Atomic", "Information"];
        this.gameData.getTechnologies().subscribe(function (data) {
            _this.technologies = data;
        });
    }
    TechnologiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechnologiesPage');
    };
    TechnologiesPage.prototype.openPage = function (id) {
        this.navCtrl.push("technology", { "techId": id });
    };
    return TechnologiesPage;
}());
TechnologiesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'technologies'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-technologies',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\technologies\technologies.html"*/'<!--\n  Generated template for the TechnologiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Technologies</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <!-- <ion-toolbar>\n    <ion-buttons>\n      <button ion-button>\n        era\n      </button>\n      <button ion-button>\n        a-z\n      </button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-menu [content]="techContent" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Settings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list radio-group>\n      <ion-item-divider>\n        Filter Eras\n      </ion-item-divider>\n      <ion-item>\n        <ion-label>Show All</ion-label><ion-radio value="all"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Ancient Era</ion-label><ion-radio value="ancient"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label></ion-label><ion-radio></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label></ion-label><ion-radio></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item-divider>\n        Sort by\n      </ion-item-divider>\n      <ion-item>\n        <ion-label>Cost</ion-label><ion-radio value="none"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Alphabetical</ion-label><ion-radio value="ancient"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-content #techContent padding text-wrap>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let tech of technologies" col-sm>\n        <ion-card (click)="openPage(tech.id)">\n          <ion-item>\n            <ion-thumbnail item-end>\n              <img src="./assets/images/technology/{{tech.id}}.png" />\n            </ion-thumbnail>\n            <h2>\n              {{tech.name}}\n            </h2>\n            <p>\n              {{tech.description}}\n            </p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\technologies\technologies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__["a" /* GameDataProvider */]])
], TechnologiesPage);

//# sourceMappingURL=technologies.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map