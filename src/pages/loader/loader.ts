import { Component } from '@angular/core';

import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'loader',
  templateUrl: 'loader.html'
})
export class Loaderpage {

  constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
