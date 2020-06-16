import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { InicialBotoesPage } from '../pages/inicial-botoes/inicial-botoes';
import { InicialPage } from '../pages/inicial/inicial';
import { QrcodeProvider } from '../providers/qrcode/qrcode';
import { FotosPage } from '../pages/fotos/fotos';



@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = InicialPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  
}
