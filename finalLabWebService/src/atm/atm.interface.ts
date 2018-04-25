import {TransactionList} from './atm.model';
export interface AtmInterface {
    getCurrentBalance (acct : string ) : number;
    withDraw(acct : string, amount : number) : number;
    deposit(acct : string, amount : number) : number;
    getLastOperations(acct : string) : TransactionList;
    accountExists(acct:string) : boolean;
}