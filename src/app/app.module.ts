import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';

//Páginas

import { InicialBotoesPage } from '../pages/inicial-botoes/inicial-botoes';
import { FotosPage } from '../pages/fotos/fotos';
import { InfoPage } from '../pages/info/info';
import { InicialPage } from '../pages/inicial/inicial';


import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

//Providers
import { QrcodeProvider } from '../providers/qrcode/qrcode';
import { DatabaseProvider } from '../providers/database/database';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    InicialBotoesPage,
    FotosPage,
    InfoPage,
    InicialPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    ComponentsModule,
    HttpModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicialBotoesPage,
    FotosPage,
    InfoPage,
    InicialPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    BarcodeScanner,
    QrcodeProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrcodeProvider,
    DatabaseProvider,
    SQLite,
    SQLitePorter
    
  ]
})
export class AppModule {}
