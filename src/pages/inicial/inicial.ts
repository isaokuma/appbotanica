import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { StatusBar } from '@ionic-native/status-bar';
import { InicialBotoesPage } from '../inicial-botoes/inicial-botoes';
import { DatabaseProvider } from '../../providers/database/database';
import { Subscription } from 'rxjs/Subscription';



@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html'
})

export class InicialPage {
  public barcodeData;
  divColor: string;
  data: any = [];
  subscription: Subscription;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public scan: QrcodeProvider,
    public statusBar: StatusBar,
    public alertCtrl: AlertController,
    public bd: DatabaseProvider,
    public db: DatabaseProvider,
    public zone: NgZone) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.divColor = 'verdeMusgo';
  }

  ionViewDidLoad() {
    
    console.log(this.scan.barcodeData);
    this.scan.executado = false;
    this.divColor = 'verdeMusgo';
  }

  ionViewWillEnter() {
    this.db.openDatabase();
    console.log(this.scan.barcodeData);
    this.subscription = this.db.getDatabaseState()
      .subscribe(readyDB => {
        if (readyDB) {
          this.data = this.db.datas;
          console.log("Página Inicial 2");
          console.log(this.data);
        }
      });
  }

  ionViewDidLeave() {
    console.log("Página Inicial 1");
    console.log(this.scan.barcodeData);
    this.subscription.unsubscribe();
  }

  public scanCode() {
    console.log(this.scan.barcodeData);
    this.scan.scan();
    this.scan.executado = true;

    if (this.scan.executado = true) {
      this.navCtrl.push (InicialBotoesPage);


    }
    
  }
}
