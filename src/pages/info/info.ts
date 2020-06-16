import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { DatabaseProvider } from './../../providers/database/database';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { Subscription } from 'rxjs/Subscription';
import { ItemSliding } from 'ionic-angular';

 

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  @ViewChild('mySlider') mySlider: any;

  data: any = [];
  subscription: Subscription;
 


  constructor(public navCtrl: NavController,
    public db: DatabaseProvider,
    public scan: QrcodeProvider,
    public alertCtrl: AlertController
  ) {
  
  }


  ionViewWillEnter() {
    console.log("Página Info - 1");
    this.db.openDatabase();
    console.log("Página Info - 2");
    this.subscription = this.db.getDatabaseState()
       .subscribe(readyDB => {
        console.log("Página Info - 3");
         
        if (readyDB) {
          console.log("Página Info - 4");
          
          this.data = this.db.datas;
          console.log("Página Info - 5");
        }
      });
    }
    
    ionViewDidLeave() {
      console.log("Página Info - 6");
    this.subscription.unsubscribe();
    console.log("Página Info - 7");
    }


    slideNext(){
      this.mySlider.slideNext();
    }

    slidePrev(){
      this.mySlider.slidePrev();
    }
    

}