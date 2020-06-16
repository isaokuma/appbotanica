import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrcodeProvider } from '../../providers/qrcode/qrcode';
import { ImageViewerController } from 'ionic-img-viewer';
import { Subscription } from 'rxjs/Subscription';
import { DatabaseProvider } from './../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html',
})
export class FotosPage {
  _imageViewerCtrl: ImageViewerController;
  @ViewChild('mySlider') mySlider: any;
  data: any = [];
  subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public scan: QrcodeProvider,
    public db: DatabaseProvider,
    imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewWillEnter() {
    this.db.openDatabase();
    this.subscription = this.db.getDatabaseState()
      .subscribe(readyDB => {

        if (readyDB) {

          this.data = this.db.datas;
          console.log("Fotos");
          console.log(this.data);
        }
      });
      console.log(this.scan.barcodeData);
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  slideNext() {
    this.mySlider.slideNext();
  }

  slidePrev() {
    this.mySlider.slidePrev();
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}
