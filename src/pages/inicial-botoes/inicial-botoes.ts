import { Component, ChangeDetectorRef, ApplicationRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FotosPage } from '../fotos/fotos';
import { InfoPage } from '../info/info';
import { Http } from '@angular/http';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { Subscription } from 'rxjs/Subscription';
import { DatabaseProvider } from '../../providers/database/database';
import { NgZone } from '@angular/core';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-inicial-botoes',
  templateUrl: 'inicial-botoes.html',
})
export class InicialBotoesPage {

  contatosDb2;
  data: any = [];
  subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public scan: QrcodeProvider,
    public db: DatabaseProvider,
    public events: Events,
    public alertCtrl: AlertController,
    private zone: NgZone,
    private ref: ChangeDetectorRef,
    ) {
      
      
      

  }


  ionViewWillEnter() {
    this.db.openDatabase();
    this.subscription = this.db.getDatabaseState()
      .subscribe(readyDB => {
        if (readyDB) {
             this.data = this.db.datas;
             window.location;
             console.log("Inicial Botoes");
             console.log(this.data);
        }
      });
      

  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  goToFotos() {
    this.navCtrl.push(FotosPage);

  }

  goToInfo() {

    this.navCtrl.push(InfoPage);
  }

  public scanCode() {
    this.scan.scan();
    if (this.scan.executado = true) {
      this.navCtrl.push(InicialBotoesPage);
      console.log(this.data.nome_popular);


    }
  }



}
