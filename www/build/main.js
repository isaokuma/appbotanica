webpackJsonp([3],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_qrcode_qrcode__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(78);
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
 * Generated class for the FotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FotosPage = /** @class */ (function () {
    function FotosPage(navCtrl, navParams, scan, db, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scan = scan;
        this.db = db;
        this.data = [];
        this._imageViewerCtrl = imageViewerCtrl;
    }
    FotosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.db.abrirBaseDatos();
        this.subscription = this.db.getDatabaseState()
            .subscribe(function (readyDB) {
            if (readyDB) {
                _this.data = _this.db.datos;
                console.log("Fotos");
                console.log(_this.data);
            }
        });
        console.log(this.scan.barcodeData);
    };
    FotosPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    FotosPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    FotosPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    FotosPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], FotosPage.prototype, "mySlider", void 0);
    FotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fotos',template:/*ion-inline-start:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\fotos\fotos.html"*/'<ion-header>\n  <ion-navbar color="verde3">\n    <ion-title *ngFor="let dato of data">{{dato.nome_popular}}</ion-title>\n  </ion-navbar>\n</ion-header>  \n\n\n <ion-content class="card-background-page"  *ngFor="let dato of data" > \n\n\n  <ion-card>\n    <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/1.png" #myImage\n    (click)="presentImage(myImage)"/>\n</ion-card> \n\n<ion-card>\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/2.png" #myImage2\n  (click)="presentImage(myImage2)"/>\n</ion-card>\n\n\n<ion-card>\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/3.png" #myImage3\n  (click)="presentImage(myImage3)"/>\n</ion-card>\n\n\n<ion-card>\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/4.png" #myImage4\n  (click)="presentImage(myImage4)"/>\n</ion-card>\n                                                                                                                                                              \n<ion-card [hidden] = "this.dato.qrcode2 != \'QR-Chorão\'">\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/5.png" #myImage5\n  (click)="presentImage(myImage5)"/>\n</ion-card>\n\n<ion-card [hidden] = "this.dato.qrcode2 != \'QR-BordoJapones\'">\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/5.png" #myImage5\n  (click)="presentImage(myImage5)"/>\n</ion-card>\n\n<ion-card [hidden] = "this.dato.qrcode2 != \'QR-BordoVermelho\'">\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/5.png" #myImage5\n  (click)="presentImage(myImage5)"/>\n</ion-card>\n\n\n<!-- <ion-card [hidden] = "this.dato.qrcode2 != \'QR-BordoJapones\'">\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/6.jpg" #myImage4\n  (click)="presentImage(myImage6)"/>\n</ion-card>\n\n\n<ion-card [hidden] = "this.dato.qrcode2 != \'QR-BordoVermelho\'">\n  <img class ="image" src="../../assets/imgs/galeria/{{this.dato.qrcode2}}/6.jpg" #myImage4\n  (click)="presentImage(myImage6)"/>\n</ion-card> -->\n</ion-content> \n\n'/*ion-inline-end:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\fotos\fotos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_qrcode_qrcode__["a" /* QrcodeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], FotosPage);
    return FotosPage;
}());

//# sourceMappingURL=fotos.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_qrcode_qrcode__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicial_botoes_inicial_botoes__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(78);
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
 * Generated class for the InicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicialPage = /** @class */ (function () {
    function InicialPage(navCtrl, navParams, scan, statusBar, alertCtrl, bd, db, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scan = scan;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.bd = bd;
        this.db = db;
        this.zone = zone;
        this.data = [];
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.divColor = 'verde3';
    }
    InicialPage.prototype.ionViewDidLoad = function () {
        console.log(this.scan.barcodeData);
        this.scan.executado = false;
        this.divColor = 'verde3';
    };
    InicialPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.db.abrirBaseDatos();
        console.log(this.scan.barcodeData);
        this.subscription = this.db.getDatabaseState()
            .subscribe(function (readyDB) {
            if (readyDB) {
                _this.data = _this.db.datos;
                console.log("Página Inicial 2");
                console.log(_this.data);
            }
        });
    };
    InicialPage.prototype.ionViewDidLeave = function () {
        console.log("Página Inicial 1");
        console.log(this.scan.barcodeData);
        this.subscription.unsubscribe();
    };
    InicialPage.prototype.scanCode = function () {
        console.log(this.scan.barcodeData);
        this.scan.scan();
        this.scan.executado = true;
        if (this.scan.executado = true) {
            // this.navCtrl.push(InicialBotoesPage);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicial_botoes_inicial_botoes__["a" /* InicialBotoesPage */]);
        }
    };
    InicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicial',template:/*ion-inline-start:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\inicial\inicial.html"*/'<!--\n  Generated template for the InicialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar text-center color="verde3" hideBackButton>\n    <ion-title>BioEduca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<div>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col>\n        <img src=\'../../assets/imgs/logo-completo3.jpg\' class="img-inicial">\n      </ion-col>\n\n      <ion-footer>\n        <ion-toolbar text-center="" class= "botaoPrincipal" [color]="divColor">\n          <ion-buttons>\n            <!-- <button tappable (click)="scanCode()"> -->\n                <button  (tap)="scanCode()" ion-button full outline>\n              <ion-label class="textoBotaoPrincipal">Escanear QR Code</ion-label>\n              <ion-icon class="iconeBotaoPrincipal" name="qr-scanner" end></ion-icon>\n            </button>\n            <!-- </button> -->\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content> '/*ion-inline-end:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\inicial\inicial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_qrcode_qrcode__["a" /* QrcodeProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], InicialPage);
    return InicialPage;
}());

//# sourceMappingURL=inicial.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicialBotoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fotos_fotos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_qrcode_qrcode__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(78);
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
 * Generated class for the InicialBotoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicialBotoesPage = /** @class */ (function () {
    function InicialBotoesPage(navCtrl, navParams, http, scan, db, events, alertCtrl, zone, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.scan = scan;
        this.db = db;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.ref = ref;
        this.data = [];
    }
    InicialBotoesPage_1 = InicialBotoesPage;
    InicialBotoesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.db.abrirBaseDatos();
        this.subscription = this.db.getDatabaseState()
            .subscribe(function (readyDB) {
            if (readyDB) {
                _this.data = _this.db.datos;
                window.location;
                console.log("Inicial Botoes");
                console.log(_this.data);
            }
        });
    };
    InicialBotoesPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    InicialBotoesPage.prototype.goToFotos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fotos_fotos__["a" /* FotosPage */]);
    };
    InicialBotoesPage.prototype.goToInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* InfoPage */]);
    };
    InicialBotoesPage.prototype.scanCode = function () {
        this.scan.scan();
        if (this.scan.executado = true) {
            this.navCtrl.push(InicialBotoesPage_1);
            console.log(this.data.nome_popular);
        }
    };
    InicialBotoesPage = InicialBotoesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicial-botoes',template:/*ion-inline-start:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\inicial-botoes\inicial-botoes.html"*/'\n <!-- <ion-header>\n\n  <ion-navbar text-center color="verde3" hideBackButton>\n    <ion-title >BioEduca</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="scanCode()">\n        <ion-icon ios="ios-qr-scanner" md="md-qr-scanner"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header>\n  <ion-navbar color="verde3">\n    <ion-title *ngFor="let dato of data" class="titulo">{{dato.binomio}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row class="row">\n      <ion-col col-12>\n        <ion-card text-center padding color="verde" class="myCard" (click)="goToInfo()">\n          <img src=\'../../assets/imgs/icones/informacoes.png\' class="imagem-card">\n          <h2 class="texto-card">Informações da Espécie</h2>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n    <ion-row class="row">\n      <ion-col col-12>\n        <ion-card text-center padding color="verde" class="myCard" (click)="goToFotos()">\n          <img src=\'../../assets/imgs/icones/galeria.png\' class="imagem-card">\n          <h2 class="texto-card">Imagens</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n </ion-content>\n<!--<ion-content>\n\n  <ion-grid>\n    <ion-row class="row">\n      <ion-col col-6>\n        <ion-card text-center padding color="azul" class="myCard" (click)="goToFotos()">\n          <img src=\'../../assets/imgs/icones/teste.jpg\' class="imagem-card">\n          <h2 class="texto-card">Galeria de Fotos</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding color="laranja" class="myCard" (click)="goToOcorrencias()">\n          <img src=\'../../assets/imgs/icones/teste2.jpg\' class="imagem-card">\n          <h2 class="texto-card">Ocorrência / Centro de origem</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row class="row">\n      <ion-col col-6>\n        <ion-card text-center padding color="vermelho" class="myCard" (click)="goToDatas()">\n          <img src=\'../../assets/imgs/icones/calendar.png\' class="imagem-card">\n          <h2 class="texto-card">Época de frutificação e floração</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card text-center padding color="verde-agua" class="myCard" (click)="goToInfo()">\n          <img src=\'../../assets/imgs/icones/info.png\' class="imagem-card">\n          <h2 class="texto-card">Informações</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content> -->'/*ion-inline-end:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\inicial-botoes\inicial-botoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_qrcode_qrcode__["a" /* QrcodeProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], InicialBotoesPage);
    return InicialBotoesPage;
    var InicialBotoesPage_1;
}());

//# sourceMappingURL=inicial-botoes.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fotos/fotos.module": [
		845,
		2
	],
	"../pages/inicial-botoes/inicial-botoes.module": [
		847,
		1
	],
	"../pages/inicial/inicial.module": [
		846,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 261;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_qrcode_qrcode__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, db, scan, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.scan = scan;
        this.alertCtrl = alertCtrl;
        this.data = [];
    }
    InfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("Página Info - 1");
        this.db.abrirBaseDatos();
        console.log("Página Info - 2");
        this.subscription = this.db.getDatabaseState()
            .subscribe(function (readyDB) {
            console.log("Página Info - 3");
            if (readyDB) {
                console.log("Página Info - 4");
                _this.data = _this.db.datos;
                console.log("Página Info - 5");
            }
        });
    };
    InfoPage.prototype.ionViewDidLeave = function () {
        console.log("Página Info - 6");
        this.subscription.unsubscribe();
        console.log("Página Info - 7");
    };
    InfoPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    InfoPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], InfoPage.prototype, "mySlider", void 0);
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\info\info.html"*/'<ion-header>\n  <ion-navbar color="verde3">\n    <ion-title>Informações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- \n<ion-content padding class="bg-style">\n  <ion-slides #mySlider pager="true" paginationType="bullets">\n   \n    <ion-slide>\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Nome popular\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data" class="teste">\n                  <h1 class="titulo-nome">{{ dato.nome_popular  }}</h1>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Espécie\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2 class="especie">{{ dato.nome_cientifico  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Família\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2>{{ dato.familia  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n\n    \n    <ion-slide>\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Grupo Ecológico\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2>{{ dato.grupo_ecologico  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Origem\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2>{{ dato.origem  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Bioma\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2>{{ dato.bioma  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n\n   \n    <ion-slide>\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Sexo da Planta\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2>{{ dato.sexo  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card class="myCard">\n            <ion-card-header class="titulo">\n              Síndrome de polinização\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item *ngFor="let dato of data">\n                  <h2>{{ dato.s_polinizacao  }}</h2>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-card class="myCard">\n              <ion-card-header class="titulo">\n                Tipo de fruto\n              </ion-card-header>\n              <ion-card-content>\n                <ion-list>\n                  <ion-item *ngFor="let dato of data">\n                    <h2>{{ dato.tipo_fruto  }}</h2>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n    </ion-slide>\n\n    \n    \n    <ion-slide>\n        <ion-row>\n          <ion-col>\n            <ion-card class="myCard">\n              <ion-card-header class="titulo">\n                Síndrome de dispersão\n              </ion-card-header>\n              <ion-card-content>\n                <ion-list>\n                  <ion-item *ngFor="let dato of data">\n                    <h2>{{ dato.s_dispersao  }}</h2>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col>\n            <ion-card class="myCard">\n              <ion-card-header class="titulo">\n                Tipo de folha\n              </ion-card-header>\n              <ion-card-content>\n                <ion-list>\n                  <ion-item *ngFor="let dato of data">\n                    <h2>{{ dato.tipo_folha  }}</h2>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <ion-card class="myCard">\n                <ion-card-header class="titulo">\n                  Filotaxia\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-list>\n                    <ion-item *ngFor="let dato of data">\n                      <h2>{{ dato.filotaxia  }}</h2>\n                    </ion-item>\n                  </ion-list>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-slide>\n  </ion-slides>\n  <div class="swiper-button-next swiper-button-black" (click)="slideNext()"></div>\n  <div class="swiper-button-prev swiper-button-black" (click)="slidePrev()"></div>\n\n</ion-content>\n  -->\n\n\n<ion-content *ngFor="let dato of data">\n \n   <!-- <img class="image" src="../../assets/imgs/galeria/{{dato.qrcode2}}/Adulto.jpg"> -->\n\n    \n\n  <ion-list>\n\n\n    <ion-item>\n      <h2>Nome Científico</h2>\n      <p>{{dato.nome_cientifico}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Nome Científico</h2>\n      <p>{{dato.nome_cientifico}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Nome popular</h2>\n      <h2>{{dato.nome_popular}}</h2>\n    </ion-item>\n\n    <ion-item>\n      <h2>Família</h2>\n      <p>{{dato.familia}}</p>\n    </ion-item>\n\n\n    <ion-item>\n      <h2>Grupo Ecológico</h2>\n      <p>{{dato.grupo_ecologico}}</p>\n    </ion-item>\n\n\n    <ion-item>\n      <h2>Origem</h2>\n      <p>{{dato.origem}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Bioma</h2>\n      <p>{{dato.bioma}}</p>\n    </ion-item>\n\n\n    <ion-item text-wrap *ngIf="dato.centro_origem == \'\'">\n      <h2>Ocorrencia</h2>\n      {{dato.ocorrencia}}\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="dato.centro_origem != \'\'">\n      <h2>Centro de origem</h2>\n      {{dato.centro_origem}}\n    </ion-item>\n    \n\n    <ion-item>\n      <h2>Sistema sexual</h2>\n      <p>{{dato.sexo}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Época de floração</h2>\n      <p>{{dato.floracao}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Época de frutificação</h2>\n      <p>{{dato.frutificacao}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Síndrome de polinização</h2> \n      <p>{{dato.s_polinizacao}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Síndrome de dispersão</h2>\n      <p>{{dato.s_dispersao}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Tipo de Fruto</h2>\n      <p>{{dato.tipo_fruto}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Tipo de Folha</h2>\n      <p>{{dato.tipo_folha}}</p>\n    </ion-item>\n\n    <ion-item>\n      <h2>Filotaxia</h2>\n      <p>{{dato.filotaxia}}</p>\n    </ion-item>\n\n\n    <ion-item text-wrap>\n      <h2>Utilizações</h2>\n      {{dato.utilizacoes}}\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\pages\info\info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_qrcode_qrcode__["a" /* QrcodeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicial_inicial__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inicial_inicial__["a" /* InicialPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // this.pages = [
        //   // { title: 'Home', component: HomePage },
        //   // { title: 'Cadastro', component: CadastroPage },
        //   // { title: 'Fotos', component: FotosPage} ,
        //   { title: 'Ler novo QR Code', component: CodeReaderPage} 
        //   // { title: 'Inicio', component: InicialBotoesPage }
        // ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus  -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(433);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_inicial_botoes_inicial_botoes__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fotos_fotos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_info_info__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_inicial_inicial__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_sqlite_porter__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_qrcode_qrcode__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_img_viewer__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//Páginas






//Providers



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inicial_botoes_inicial_botoes__["a" /* InicialBotoesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fotos_fotos__["a" /* FotosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_inicial_inicial__["a" /* InicialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fotos/fotos.module#FotosPageModule', name: 'FotosPage', segment: 'fotos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicial/inicial.module#InicialPageModule', name: 'InicialPage', segment: 'inicial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicial-botoes/inicial-botoes.module#InicialBotoesPageModule', name: 'InicialBotoesPage', segment: 'inicial-botoes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inicial_botoes_inicial_botoes__["a" /* InicialBotoesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fotos_fotos__["a" /* FotosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_inicial_inicial__["a" /* InicialPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_18__providers_qrcode_qrcode__["a" /* QrcodeProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_qrcode_qrcode__["a" /* QrcodeProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_sqlite_porter__["a" /* SQLitePorter */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QrcodeProvider = /** @class */ (function () {
    function QrcodeProvider(barcodeScanner, alertCtrl, app, applicationRef) {
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.applicationRef = applicationRef;
        this.executado = false;
    }
    QrcodeProvider.prototype.scan = function () {
        var _this = this;
        console.log("Provider QR Code - Função Scan");
        var options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Posicione o QR Code dentro da área limitada',
            // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            resultDisplayDuration: 1000,
            formats: 'QR_CODE,PDF_417',
            // Android only (portrait|landscape), default unset so it rotates with the device
            orientation: 'portrait',
            disableAnimations: true,
            disableSuccessBeep: false // iOS
        };
        this.barcodeScanner
            .scan(options)
            .then(function (data) {
            _this.barcodeData = data.text;
            console.log("Leitura QR Code");
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Erro',
                subTitle: 'Ocorreu algum erro na leitura :(',
                buttons: ['Fechar']
            });
            alert.present();
        });
    };
    QrcodeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], QrcodeProvider);
    return QrcodeProvider;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contato_form_contato_form__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__contato_form_contato_form__["a" /* ContatoFormComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__contato_form_contato_form__["a" /* ContatoFormComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(405);
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
 * Generated class for the ContatoFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ContatoFormComponent = /** @class */ (function () {
    function ContatoFormComponent(formbuilder, http, db) {
        this.formbuilder = formbuilder;
        this.http = http;
        this.db = db;
        this.contatoForm = this.formbuilder.group({
            nome: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)]],
            empresa: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            telefone: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11)]],
            cep: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(8)]],
            rua: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            bairro: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            numero: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            cidade: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            uf: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    ContatoFormComponent.prototype.buscaCep = function () {
        var cepValue = this.contatoForm.controls['cep'].value;
        var isValid = this.contatoForm.controls['cep'].valid;
        if (isValid) {
            this.http.get("https://viacep.com.br/ws/" + cepValue + "/json/")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
            });
        }
    };
    ContatoFormComponent.prototype.cadastraContato = function () {
        var _this = this;
        this.db.database.ref('/contatos')
            .push(this.contatoForm.value)
            .then(function () {
            _this.contatoForm.reset();
            console.log("salvou");
        });
    };
    ContatoFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'contato-form',template:/*ion-inline-start:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\components\contato-form\contato-form.html"*/'<!-- Generated template for the ContatoFormComponent component -->\n<div>\n    <form novalidate [formGroup]="contatoForm" (ngSubmit)="cadastraContato()">\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Nome" formControlName="nome"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Empresa" formControlName="empresa"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="tel" placeholder="Telefone" formControlName="telefone"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="number" placeholder="CEP" formControlName="cep" (ionBlur)="buscaCep()"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Rua" formControlName="rua"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Bairro" formControlName="bairro"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="number" placeholder="Número" formControlName="numero"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Cidade" formControlName="cidade"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Estado" formControlName="uf"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button type="submit" ion-button block [disabled]="contatoForm.invalid">Salvar</button>\n    </form>\n  </div>'/*ion-inline-end:"C:\Users\Isa Okuma\Desktop\Ionic\FUNCIONANDO\App Botanica - teste\src\components\contato-form\contato-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ContatoFormComponent);
    return ContatoFormComponent;
}());

//# sourceMappingURL=contato-form.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__qrcode_qrcode__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, platform, sqlite, sqliteporter, alertCtrl, scan) {
        this.http = http;
        this.platform = platform;
        this.sqlite = sqlite;
        this.sqliteporter = sqliteporter;
        this.alertCtrl = alertCtrl;
        this.scan = scan;
        this.datos = [];
        this.primeiraVez = false;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
    }
    DatabaseProvider.prototype.abrirBaseDatos = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            _this.sqlite.create({
                name: 'addddddd5.db',
                location: 'default'
            })
                .then(function (db) {
                // Consulta para verificar se existem dados
                db.executeSql('SELECT * FROM plantas2 where qrcode = ? ', [_this.scan.barcodeData])
                    .then(function (res) {
                    _this.datos = _this.obtenerDatos(db);
                    // Informa que a base de dados está na fila
                    _this.databaseReady.next(true);
                })
                    .catch(function (res) {
                    _this.primeiraVez = true;
                    // this.alertCtrl.create({
                    //   title: 'Informação!',
                    //   message: 'Os dados estão sendo importados do banco',
                    //   buttons: ['OK']
                    // }).present();
                    //Os dados não estão no banco, necessário importá-los
                    _this.http.get('assets/db2.sql')
                        .map(function (res) { return res.text(); })
                        .subscribe(function (sql) {
                        _this.sqliteporter.importSqlToDb(db, sql)
                            .then(function () {
                            _this.datos = _this.obtenerDatos(db);
                        }).catch(function (e) {
                            alert("Erro!");
                            console.error("Erro!", e.message);
                        });
                    });
                });
            });
        }).catch(function (e) { return alert('Erro!'); });
    };
    DatabaseProvider.prototype.obtenerDatos = function (baseDatos) {
        var resultado = [];
        baseDatos.executeSql('SELECT * FROM plantas2 where qrcode = ?', [this.scan.barcodeData])
            .then(function (resSelect) {
            for (var i = 0; i < resSelect.rows.length; i++) {
                resultado.push({
                    qrcode: resSelect.rows.item(i).qrcode,
                    qrcode2: resSelect.rows.item(i).qrcode2,
                    familia: resSelect.rows.item(i).familia,
                    binomio: resSelect.rows.item(i).binomio,
                    autores: resSelect.rows.item(i).autores,
                    nome_cientifico: resSelect.rows.item(i).nome_cientifico,
                    nome_popular: resSelect.rows.item(i).nome_popular,
                    grupo_ecologico: resSelect.rows.item(i).grupo_ecologico,
                    origem: resSelect.rows.item(i).origem,
                    centro_origem: resSelect.rows.item(i).centro_origem,
                    ocorrencia: resSelect.rows.item(i).ocorrencia,
                    bioma: resSelect.rows.item(i).bioma,
                    floracao: resSelect.rows.item(i).floracao,
                    frutificacao: resSelect.rows.item(i).frutificacao,
                    sexo: resSelect.rows.item(i).sexo,
                    s_polinizacao: resSelect.rows.item(i).s_polinizacao,
                    tipo_fruto: resSelect.rows.item(i).tipo_fruto,
                    s_dispersao: resSelect.rows.item(i).s_dispersao,
                    tipo_folha: resSelect.rows.item(i).tipo_folha,
                    filotaxia: resSelect.rows.item(i).filotaxia,
                    descricao: resSelect.rows.item(i).descricao,
                    utilizacoes: resSelect.rows.item(i).utilizacoes
                });
            }
        }).catch(function (e) {
            alert("Erro ao consultar os dados");
            console.error("Erro ao consultar os dados", e.message);
        });
        return resultado;
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__qrcode_qrcode__["a" /* QrcodeProvider */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAlbNWoxxu6UwE4GQjbREse351MrpJE0HA',
        authDomain: 'crud-ionic-63644.firebaseapp.com',
        databaseURL: 'https://crud-ionic-63644.firebaseio.com',
        projectId: 'crud-ionic-63644',
        storageBucket: 'crud-ionic-63644.appspot.com',
        messagingSenderId: '807026325905'
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map