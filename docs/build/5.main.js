webpackJsonp([5],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageModule", function() { return UnitsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UnitsPageModule = (function () {
    function UnitsPageModule() {
    }
    return UnitsPageModule;
}());
UnitsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__units__["a" /* UnitsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__units__["a" /* UnitsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__units__["a" /* UnitsPage */]
        ]
    })
], UnitsPageModule);

//# sourceMappingURL=units.module.js.map

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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsPage; });
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
 * Generated class for the UnitsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UnitsPage = (function () {
    function UnitsPage(navCtrl, navParams, gameData) {
        //https://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.units = [
            { name: "Warrior", description: "Weak ancient era Melee unit" },
            { name: "Slinger", description: "Primitive ranged unit which slings rocks" }
        ];
        this.keyGet = Object.keys;
        //eras:Array<any>=["ancient","classical","medieval","renaissance","industrial","modern","atomic","information"]
        this.eras = ["Ancient", "Classical", "Medieval", "Renaissance", "Industrial", "Modern", "Atomic", "Information"];
        this.classes = ["Civilian", "Recon", "Melee", "Ranged", "Anti-Cavalry",
            "Light Cavalry", "Heavy Cavalry", "Siege", "Naval Melee", "Naval Ranged",
            "Naval Raider", "Naval Carrier"];
        this.selected = "unsort";
        //console.log(this.gameData.getJSON('fakeUnits.json'));
        //this.gameData.getUnits().subscribe( data => {console.log(data)});
    }
    UnitsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UnitsPage');
        this.gameData.getUnits().subscribe(function (data2) {
            console.log(data2);
            _this.units = data2;
        });
    };
    UnitsPage.prototype.stuff = function () {
        //this.units.filter();
    };
    UnitsPage.prototype.changeFilter = function () {
        console.log(this.selected);
        if (this.selected === "era") {
            this.filterent = this.eras;
        }
        else {
            this.filterent = this.classes;
        }
        this.prop = this.selected;
    };
    UnitsPage.prototype.openPage = function (id) {
        this.navCtrl.push("unit", { "unitId": id });
    };
    return UnitsPage;
}());
UnitsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: "units"
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-units',template:/*ion-inline-start:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\units\units.html"*/'<!--\n  Generated template for the UnitsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Units</ion-title>\n    <button ion-button menuToggle="right" end>\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-menu [content]="unitContent" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Unit Sort</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list radio-group (ionChange)="changeFilter()" [(ngModel)]="selected">\n      <ion-item>\n        <ion-label>Unsorted</ion-label><ion-radio value="unsort"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Era</ion-label><ion-radio value="era"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Class</ion-label><ion-radio value="class"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>(Under construction) Alphabetical</ion-label><ion-radio value="alpha"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-content #unitContent padding>\n  <ion-list *ngIf="!(selected===\'unsort\')">\n    <div *ngFor="let f of filterent">\n      <ion-card>\n        <ion-item>\n          <ion-title style="">\n            {{f}}\n          </ion-title>\n        </ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col *ngFor="let unit of units|filter:prop:f">\n              <ion-card (click)="openPage(unit.id)" style="max-width:300px">\n                <ion-item text-wrap>\n                  <h2>{{unit.name}}</h2>\n                  <p>{{unit.description}}</p>\n                  <ion-thumbnail item-end>\n                    <img src="./assets/images/unit/{{unit.id}}_portrait.png" />\n                  </ion-thumbnail>\n                </ion-item>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </ion-list>\n  <ion-grid *ngIf="selected===\'unsort\'">\n    <ion-row>\n      <ion-col *ngFor="let unit of units" col-xl-3>\n        <ion-card (click)="openPage(unit.id)">\n          <ion-item text-wrap>\n            <h2>\n              {{unit.name}}\n            </h2>\n            <p>\n              {{unit.description}}\n            </p>\n            <ion-thumbnail item-end>\n              <img src="./assets/images/unit/{{unit.id}}_portrait.png" />\n            </ion-thumbnail>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Wesley\Code\CivilopediaSix\src\pages\units\units.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_game_data_game_data__["a" /* GameDataProvider */]])
], UnitsPage);

//# sourceMappingURL=units.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map