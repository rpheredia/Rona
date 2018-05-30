import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmTransaction } from '../../models/atm.interface';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  transactions: Array<AtmTransaction> = [];

  constructor(public navCtrl: NavController, public atmService: AtmserviceProvider) {

  }

  ionViewWillEnter() {
    this.atmService.getLastOperations(this.atmService.getAccountNumber()).subscribe(data => {
      this.transactions = data.transactions;
    });
  }

  gotoDetails(item: AtmTransaction) {
    this.navCtrl.push("TransactionDetailPage", { item: item });
  }

  dismissThis() {
    this.navCtrl.push(TabsPage);
  }
}
