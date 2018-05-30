import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentBalance : number = 0;
  accountNumber : string = '';

  constructor(public navCtrl: NavController, public atmService : AtmserviceProvider) {
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance         = resp.currentBalance;
      this.atmService.accountName = resp.accountName;
      this.accountNumber = resp.accountNumber;
    });

  }
  ngOnInit(){
    this.atmService.onUpdatedTransactions$.subscribe(resp => {
      this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
        this.currentBalance         = resp.currentBalance;
        
      });
    })
  }

  ionViewCanEnter() : boolean{
    return this.atmService.accountValid;
  }
  getAccountName() : string {
    return this.atmService.accountName;
  }
  getCurrentBalance()  {
    return this.currentBalance;

  }
  
  gotoDeposit(){
    this.navCtrl.push("DepositPage",{acct: this.atmService.getAccountNumber()});
  }
  
  gotoWithdraw(){
    this.navCtrl.push("WithdrawPage",{acct: this.atmService.getAccountNumber(), currBal:this.currentBalance});
  }
  
  

}
