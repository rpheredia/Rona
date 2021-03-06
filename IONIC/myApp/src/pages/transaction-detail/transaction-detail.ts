import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtmTransaction } from '../../models/atm.interface';


@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  transaction : AtmTransaction;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transaction = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage');
  }
  
dismissThis(){
  this.navCtrl.pop();
}

}
