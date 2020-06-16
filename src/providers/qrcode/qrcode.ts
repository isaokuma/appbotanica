import { Injectable, ViewChild } from '@angular/core';
import { InicialBotoesPage } from '../../pages/inicial-botoes/inicial-botoes';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController, NavController } from 'ionic-angular';
import { InicialPage } from '../../pages/inicial/inicial';
import { App, ViewController } from 'ionic-angular';
import { ApplicationRef } from '@angular/core'


@Injectable()
export class QrcodeProvider {

  public barcodeData;
  public executado: boolean = false;
  // @ViewChild(Nav) nav: Nav;

  private nav: NavController;

  constructor(public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
    private app: App,
    private applicationRef : ApplicationRef) {

  }


  scan() {

    console.log("Provider QR Code - Função Scan");


    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: 'Posicione o QR Code dentro da área limitada', // Android
      // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 1000,
      formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
      // Android only (portrait|landscape), default unset so it rotates with the device
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    this.barcodeScanner
      .scan(options)
      .then((data) => {
        this.barcodeData = data.text;
        console.log("Leitura QR Code");
      })
      .catch((err) => {
        const alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Ocorreu algum erro na leitura :(',
          buttons: ['Fechar']
        });
        alert.present();

      });

  }






}
