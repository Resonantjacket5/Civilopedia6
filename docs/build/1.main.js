webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__technology__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyPageModule", function() { return TechnologyPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { InfoCardComponentModule } from '../../components/info-card/info-card.module';

var TechnologyPageModule = (function () {
    function TechnologyPageModule() {
    }
    return TechnologyPageModule;
}());
TechnologyPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__technology__["a" /* TechnologyPage */],
        ],
        imports: [
            //InfoCardComponentModule,
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__technology__["a" /* TechnologyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__technology__["a" /* TechnologyPage */]
        ]
    })
], TechnologyPageModule);

//# sourceMappingURL=technology.module.js.map

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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyPage; });
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
 * Generated class for the TechnologyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TechnologyPage = (function () {
    function TechnologyPage(navCtrl, navParams, gameData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.techString = "technology";
        var id = this.navParams.get("techId");
        console.log(id);
        if (id != null) {
            this.gameData.getTechnology(id).subscribe(function (data) {
                _this.technology = data;
            });
        }
        else {
            console.error("tech id not found");
        }
    }
    TechnologyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechnologyPage');
    };
    return TechnologyPage;
}());
TechnologyPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'technology',
        segment: 'technologies/:techId'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-technology',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\technology\technology.html"*/'<!--\n  Generated template for the TechnologyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Technology</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="technology" text-wrap>\n    <!-- <ion-card>\n      <ion-row><h1 class="text-center">{{technology.name}}</h1></ion-row>\n      <ion-row>\n        <ion-col>\n          {{technology.description}}\n        </ion-col>\n        <ion-col>\n\n\n          <img src="./assets/images/technology/{{technology.id}}.png"/>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card>\n      <ion-list>\n        <ion-row>\n          <ion-item>\n            <h2>{{technology.name}}</h2>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            {{technology.description}}\n          </ion-col>\n          <ion-col>\n\n\n            <img src="./assets/images/technology/{{technology.id}}.png"/>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card> -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-end>\n          <img src="./assets/images/technology/{{technology.id}}.png"/>\n        </ion-thumbnail>\n        <h2>\n          {{technology.name}}\n        </h2>\n          {{technology.description}}\n          <p>\n            Cost: {{technology.cost}}\n          </p>\n      </ion-item>\n    </ion-card>\n    <ion-card *ngIf="technology.eureka">\n      <ion-card-header>Eureka Bonus</ion-card-header>\n      <ion-card-content>{{technology.eureka}}</ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header *ngIf="technology.requires">\n        Required tech\n      </ion-card-header>\n      <div *ngFor="let prereq of technology.requires">\n        <info-card category="technology" [id]="prereq">\n        </info-card>\n      </div>\n    </ion-card>\n    <div *ngIf="technology.unlocks">\n      <ion-item-divider>\n      </ion-item-divider>\n      <ion-item>\n        <h2>Unlocks</h2>\n      </ion-item>\n      <ion-item *ngFor="let i of technology.unlocks.improvements">\n        {{i}}\n      </ion-item>\n      <ion-card *ngFor="let unit of technology.unlocks.units">\n        {{unit}} <a href="/#/units/{{unit}}">goto</a>\n      </ion-card>\n\n      <!-- <div *ngFor="let unit of technology.unlocks.units">\n        <info-card  category="unit" [id]="unit">\n        </info-card>\n      </div> -->\n    </div>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\technology\technology.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__["a" /* GameDataProvider */]])
], TechnologyPage);

//# sourceMappingURL=technology.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map