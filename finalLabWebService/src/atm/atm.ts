import * as _ from 'lodash';
import { AtmInterface } from './atm.interface';
import {InitialData} from './atm.data';
import {AccountList, AccountModel, TransactionList, TransactionModel} from './atm.model';


export class Atm implements AtmInterface {
    private localDB : AccountList;
    private transactionList : TransactionList;
    constructor () {
        this.localDB = new AccountList();
        this.localDB.accounts = InitialData;
        this.transactionList = new TransactionList();
    }

    accountExists(acct:string) : boolean {
        return _.some(this.localDB.accounts, {'accountNumber': acct});
        
    }

    getCurrentBalance(acct : string ) : number {
        if (this.accountExists(acct)){
            let result = _.filter(this.localDB.accounts, {'accountNumber' : acct});
            return result[0].currentBalance;
           
        } else {
            return -100; //not found
        }
    }
    withDraw(acct : string, amount : number) : number{
        if (this.accountExists(acct)) {
            let result = _.findIndex(this.localDB.accounts,{'accountNumber' : acct});
            this.localDB.accounts[result].currentBalance -= amount;
            /*record the txn inside txnlist*/
            let newTransaction = new TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "withdraw";
            this.transactionList.transactions.push(newTransaction);

            return this.localDB.accounts[result].currentBalance;
        } else {
            return -100;
        }
    }
    deposit(acct : string, amount : number) : number{
        if (this.accountExists(acct)) {
            let result = _.findIndex(this.localDB.accounts,{'accountNumber' : acct});
            this.localDB.accounts[result].currentBalance += amount;
            /*record the txn inside txnlist*/
            let newTransaction = new TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "deposit";
            this.transactionList.transactions.push(newTransaction);
            
            return this.localDB.accounts[result].currentBalance;
        } else {
            return -100;
        }
    }

    getLastOperations(acct:string) : TransactionList {
        let result : TransactionList = new TransactionList();

        if (this.accountExists(acct)) {
            result.transactions = _.filter(this.transactionList.transactions, {'accountNumber' :acct}); 
        }
                
        return result;
        
    }

}