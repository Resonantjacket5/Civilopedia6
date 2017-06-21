webpackJsonp([4],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__civic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivicPageModule", function() { return CivicPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CivicPageModule = (function () {
    function CivicPageModule() {
    }
    return CivicPageModule;
}());
CivicPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__civic__["a" /* CivicPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__civic__["a" /* CivicPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__civic__["a" /* CivicPage */]
        ]
    })
], CivicPageModule);

//# sourceMappingURL=civic.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CivIconComponent; });
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
 * Generated class for the CivIconComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CivIconComponent = (function () {
    function CivIconComponent() {
        console.log('Hello CivIconComponent Component');
    }
    return CivIconComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", String)
], CivIconComponent.prototype, "category", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", String)
], CivIconComponent.prototype, "id", void 0);
CivIconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'civ-icon',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\components\civ-icon\civ-icon.html"*/'<!-- Generated template for the CivIconComponent component -->\n<img class="civ-icon" src="assets/images/{{category}}/{{id}}.png"/>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\components\civ-icon\civ-icon.html"*/
    }),
    __metadata("design:paramtypes", [])
], CivIconComponent);

//# sourceMappingURL=civ-icon.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_card_info_card__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__civ_icon_civ_icon__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__info_card_info_card__["a" /* InfoCardComponent */], __WEBPACK_IMPORTED_MODULE_2__civ_icon_civ_icon__["a" /* CivIconComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__info_card_info_card__["a" /* InfoCardComponent */], __WEBPACK_IMPORTED_MODULE_2__civ_icon_civ_icon__["a" /* CivIconComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// no idea why below line works but above doesnt?
//import { Observable } from 'rxjs/Rx';
/**
 * Generated class for the InfoCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var InfoCardComponent = (function () {
    function InfoCardComponent(navCtrl, gameData) {
        this.navCtrl = navCtrl;
        this.gameData = gameData;
        this.id = "unchanged";
        this.name = "not loaded name";
        this.description = "not loaded";
        this.tag = ""; //image tage if needed
        console.log('Hello InfoCardComponent Component');
    }
    InfoCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.id);
        ;
        console.log(this.category);
        switch (this.category) {
            case "technology":
                // this.gameData.getJSON("technologies.json").subscribe((data)=>{
                //   this.name = data[this.id].name;
                //   this.description = data[this.id].description;
                // });
                this.header = "Prerequisite Tech";
                this.gameData.getTechnology(this.id).subscribe(function (data) {
                    _this.name = data.name;
                    _this.description = data.description;
                });
                break;
            case "civics":
                this.gameData.getCivic(this.id).subscribe(function (data) {
                    _this.name = data.name;
                    _this.description = data.description;
                });
                break;
            case "tecivic":
                var s1 = this.gameData.getCivic(this.id);
                var s2 = this.gameData.getTechnology(this.id);
                // wait on both results
                __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin(s1, s2).subscribe(function (arr) {
                    //console.log(arr[0]);
                    //console.log(arr[1]);
                    var found = {};
                    // civics not found
                    if (arr[0] === undefined) {
                        found = arr[1];
                        _this.header = "Prerequisite Tech";
                        _this.category = "technology";
                    }
                    else if (arr[1] === undefined) {
                        found = arr[0];
                        _this.header = "Prerequisite Civic";
                        _this.category = "civics";
                    }
                    else {
                        console.error("both found error");
                        throw Error("id not found in tech nor civic");
                    }
                    _this.name = found.name;
                    _this.description = found.description;
                });
                break;
            case "unit":
                this.header = "Unit";
                this.gameData.getUnit(this.id).subscribe(function (data) {
                    _this.name = data.name;
                    _this.description = data.description;
                    _this.tag = "_portrait";
                });
                break;
            default:
                console.error("category not found", this.category);
        }
    };
    InfoCardComponent.prototype.openPage = function () {
        switch (this.category) {
            case "technology":
                this.navCtrl.push("technology", { "techId": this.id });
                break;
            case "civics":
                console.error("civics page not impleented in info card yet");
                this.navCtrl.push("civics", { "civicId": this.id });
                break;
            default:
                console.error("category not found for opening page");
        }
    };
    return InfoCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", String)
], InfoCardComponent.prototype, "category", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", String)
], InfoCardComponent.prototype, "id", void 0);
InfoCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'info-card',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\components\info-card\info-card.html"*/'<!-- Generated template for the InfoCardComponent component -->\n<div (click)="openPage()">\n  <!-- <ion-card-header>\n    {{header}}\n  </ion-card-header> -->\n  <!-- <ion-card-content>\n    <ion-item>\n      <ion-thumbnail item-end>\n        <img src="./assets/images/{{category}}/{{id}}.png" />\n      </ion-thumbnail>\n      <p>\n        {{description}}\n      </p>\n    </ion-item>\n  </ion-card-content> -->\n  <ion-item>\n    <ion-thumbnail item-end>\n      <img src="./assets/images/{{category}}/{{id}}{{tag}}.png" />\n    </ion-thumbnail>\n    <h2>{{name}}</h2>\n    <p>\n      {{description}}\n    </p>\n\n\n  </ion-item>\n</div>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\components\info-card\info-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__["a" /* GameDataProvider */]])
], InfoCardComponent);

//# sourceMappingURL=info-card.js.map

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var forkJoin_1 = __webpack_require__(198);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CivicPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/***
 * Generated class for the CivicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CivicPage = (function () {
    function CivicPage(navCtrl, navParams, gameData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        var id = this.navParams.get("civicId");
        this.gameData.getCivic(id).subscribe(function (data) {
            _this.civic = data;
        });
    }
    CivicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CivicPage');
    };
    return CivicPage;
}());
CivicPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'civic',
        segment: 'civics/:civicId'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-civic',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\civic\civic.html"*/'<!--\n  Generated template for the CivicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Civic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="civic" text-wrap>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title style="text-align:center">\n          {{civic.name}}\n        </ion-card-title>\n        <img class="large-icon" src="./assets/images/civics/{{civic.id}}.png"/>\n\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          <ion-row>\n            {{civic.description}}\n          </ion-row>\n        </ion-list>\n\n      </ion-card-content>\n    </ion-card>\n    <div *ngIf="civic.requires">\n      <ion-card>\n        <ion-card-header>\n          Required Civics\n        </ion-card-header>\n        <info-card  *ngFor="let req of civic.requires" category="civics" [id]="req">\n        </info-card>\n      </ion-card>\n    </div>\n    <ion-card>\n      {{civic.unlocks}}\n    </ion-card>\n    <ion-card>\n      <ion-list inset>\n        <ion-card-header>\n          <ion-item no-padding>\n            <ion-card-title>\n              Title\n            </ion-card-title>\n            <button ion-button item-end>aljskdf</button>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          aklsjdfjaklsjfl ajfklj asdjlfjask;dfjlk;\n          asldfkja;l dsfjlkasfasdf jlkasjkfdlkal;dsjfls\n          aklkfdj;laf sjfljasdfjll aksdfj;lkajslkdf\n          dsflkasd fjjlkjf;klasjdlf jlakjdfs\n        </ion-card-content>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\civic\civic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__["a" /* GameDataProvider */]])
], CivicPage);

//# sourceMappingURL=civic.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map