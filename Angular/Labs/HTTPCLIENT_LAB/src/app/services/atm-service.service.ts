import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { aliveStatus,AccountList,AccountModel , TransactionList} from '../interfaces/atm.interface';

@Injectable()
export class AtmServiceService {
 
  private URLAlive : string = 'http://localhost:3000/atm/'; 
  private URLWithdraw : string = 'http://localhost:3000/atm/withdraw/'; 
  private URLDeposit : string = 'http://localhost:3000/atm/deposit/'; 
  private URLGetTxns : string = 'http://localhost:3000/atm/transactions/';

  constructor(private http : HttpClient){
    //this.URLAlive = this.URLAlive;
    //this.URLWithdraw = this.URLWithdraw;
    //this.URLDeposit = this.URLDeposit;
    //this.URLGetTxns = this.URLGetTxns;
  }
  
  isAive(){
    return this.http.get<aliveStatus>(this.URLAlive);
  }
  getCurrentBalance(acct : string)  {
    return this.http.get<AccountModel>(this.URLAlive + acct);
  }

  withDraw(acct : string, amount:number) {
    return this.http.get<AccountModel>(this.URLWithdraw + acct + '/amount/' + amount);
  }

  deposit(acct : string, amount:number)  {
    return this.http.get<AccountModel>(this.URLDeposit + acct + '/amount/' + amount);

  }
  
  getLastOperations(acct:string) {
    return this.http.get<TransactionList>(this.URLGetTxns + acct);
  }

}
