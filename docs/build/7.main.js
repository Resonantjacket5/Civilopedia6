webpackJsonp([7],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__improvements__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprovementsPageModule", function() { return ImprovementsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImprovementsPageModule = (function () {
    function ImprovementsPageModule() {
    }
    return ImprovementsPageModule;
}());
ImprovementsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__improvements__["a" /* ImprovementsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__improvements__["a" /* ImprovementsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__improvements__["a" /* ImprovementsPage */]
        ]
    })
], ImprovementsPageModule);

//# sourceMappingURL=improvements.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImprovementsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ImprovementsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImprovementsPage = (function () {
    function ImprovementsPage(navCtrl, navParams, gameData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.gameData.getImprovements().subscribe(function (data) {
            _this.improvements = data;
            _this.keys = Object.keys(data);
            console.log(data);
        });
    }
    ImprovementsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImprovementsPage');
    };
    ImprovementsPage.prototype.openPage = function (id) {
        this.navCtrl.push("improvement", { "improvementId": id });
    };
    return ImprovementsPage;
}());
ImprovementsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: "improvements"
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-improvements',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\improvements\improvements.html"*/'<!--\n  Generated template for the ImprovementsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Improvements</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-card *ngFor="let improvement of improvements" (click)="openPage(improve.id)">\n    <ion-item>\n      <ion-thumbnail item-end>\n        <img src="./assets/images/improvements/{{improvement.id}}.png" />\n      </ion-thumbnail>\n      <h2>\n        {{improvement.name}}\n      </h2>\n    </ion-item>\n  </ion-card> -->\n  <ion-card *ngFor="let key of keys" (click)="openPage(key)">\n    <ion-item>\n      <ion-thumbnail item-end>\n        <img src="./assets/images/improvements/{{key}}.png" />\n      </ion-thumbnail>\n      <h2>\n        {{improvements[key].name}}\n      </h2>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\improvements\improvements.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__["a" /* GameDataProvider */]])
], ImprovementsPage);

//# sourceMappingURL=improvements.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map