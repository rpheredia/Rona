
import * as got from "got";
import { atmInterface } from './atmInterface';

export class ATM implements atmInterface {
    
    currentBal : number;
    initialBal : number;
    accountNumber : string;
    
    constructor() { }

    setInitialBalance(acct:string, balance : number) : void {
        let url = "http://localhost:3000/atm/setbal/" + acct + "/amount/" + balance;
        got.get(url).then(
            (data) => {
            console.log("Set Initial Balance\n");
            console.log(data.body);
            console.log("Finished!\n\n");
            },
            (err) => {
            console.log("Error from web backend " + err.message);
            });
    }

    withdrawMoney(acct:string, amount1 : number) : void {
        let url = "http://localhost:3000/atm/withdraw/" + acct + "/amount/" + amount1;
        got.get(url).then(
            (data) => {
            console.log("Withdraw Money\n");
            console.log("Amount Withdrawn: " + amount1 + "\n");
            console.log(data.body);
            console.log("Finished!\n\n");
            },
            (err) => {
            console.log("Error from web backend " + err.message);
            });
    }
    
    depositMoney(acct:string, amount2 : number) : void {
        let url = "http://localhost:3000/atm/deposit/" + acct + "/amount/" + amount2;
        got.get(url).then(
            (data) => {
            console.log("Deposit Money\n");
            console.log("Deposit Amount: " + amount2 + "\n");
            console.log("Balance " + data.body);
            console.log("Finished!\n\n");
            },
            (err) => {
            console.log("Error from web backend " + err.message);
            });
    }
    
    currentBalance(acct:string) : void {
        let account = "http://localhost:3000/atm/" + acct;
        got.get(account).then(
            (data) => {
            console.log("Current Balance from web backend " + data.body);
            console.log("finished!\n\n");
            },
            (err) => {
            console.log("Error from web backend " + err.message);
            });
    }
    closeOperation() : void {
        this.initialBal = this.currentBal;
    }
    
}