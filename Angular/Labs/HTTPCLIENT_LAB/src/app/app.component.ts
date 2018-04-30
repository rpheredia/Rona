import { Component } from '@angular/core';
import {AtmServiceService} from './services/atm-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATM';
  alivestatus = 0
  alivedescription = '';
  currentOperation = '';
  account = '';
  balance = 0;
  depositamount = 0;
  withdrawamount = 0;
  lastTransactions = [];

  constructor (public atmService : AtmServiceService) {
       
     this.showBalance('23232-1');

     setTimeout(() => {
          this.makeADeposit('23232-1',100); 

     }, 2000);

     setTimeout(() => {
       this.makeAWithdraw('23232-1',50);
       
     }, 4000);

     setTimeout(() => {
         this.getLastOperations('23232-1');
       
     }, 6000);


    }

aliveStatus(){
  this.currentOperation = 'Test Connection';
  
  this.atmService.isAive().subscribe( result => {      
   this.alivestatus   = result.status;
   this.alivedescription = result.description;
  }); 
}

showBalance(acct:string) {
 this.currentOperation = 'Querying Balance';

 this.atmService.getCurrentBalance(acct).subscribe( result => {      
 this.account   = result.accountNumber;
 this.balance = result.currentBalance;
}); 
}

makeADeposit(acct:string,amount:number) {
 this.currentOperation = "Making a Deposit";
 
 this.atmService.deposit(acct,amount).subscribe( result => {      
  this.account   = result.accountNumber;
  this.balance = result.currentBalance;
 }); 
}

makeAWithdraw(acct:string,amount:number) {
 this.currentOperation = "Making a Withdrawal";
 
 this.atmService.withDraw(acct,amount).subscribe( result => {      
  this.account   = result.accountNumber;
  this.balance = result.currentBalance;
 }); 
}

getLastOperations(acct:string) {

 this.currentOperation = "Showing last Transactions";

 this.atmService.getLastOperations(acct).subscribe( result => {      
  this.lastTransactions =  result.transactions;
 }); 

}

}
