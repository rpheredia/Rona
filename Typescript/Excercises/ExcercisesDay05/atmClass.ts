
import { atmInterface } from './atmInterface';

export class ATM implements atmInterface {
    
    currentBal : number;
    initialBal : number;
    accountNumber : string;
    
    constructor() { }

    setInitialBalance(acct:string, balance : number) : void {
        this.accountNumber = acct;
        this.initialBal = balance;
        this.currentBal = balance;
    }

    withdrawMoney(acct:string, amount : number) : void {
        if (acct == this.accountNumber) {
            this.currentBal = this.currentBal - amount;
            console.log('********************');
            console.log('Account Number:  ' + this.accountNumber);
            console.log('Initial Balance: ' + this.initialBal );
            console.log('Withdrawing:     ' + amount);
            
            console.log('New Balance:     ' + this.currentBal + '\n');
        }
        else {
            console.log('**Error, wrong account number');
        }
    }
    
    depositMoney(acct:string, amount : number) : void {
        if (acct == this.accountNumber) {
            this.currentBal = this.currentBal + amount;
            console.log('********************');
            console.log('Account Number:  ' + this.accountNumber);
            console.log('Initial Balance: ' + this.initialBal );
            console.log('Depositing:      ' + amount);
            console.log('New Balance:     ' + this.currentBal + '\n');
        }
        else {
            console.log('**Error, wrong account number');
        }
    }
    
    showBalance(acct:string) : void {
        if (acct == this.accountNumber) {
            console.log('********************');
            console.log('Account Number: ' + this.accountNumber);
            console.log('Balance: ' + this.currentBal);
        }
        else {
            console.log('**Error, wrong account number');
        }
    }
    closeOperation() : void {
        this.initialBal = this.currentBal;
    }
    
}