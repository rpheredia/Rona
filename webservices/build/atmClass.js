"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
class ATM {
    constructor() { }
    setInitialBalance(acct, balance) {
        let url = "http://localhost:3000/atm/setbal/" + acct + "/amount/" + balance;
        got.get(url).then((data) => {
            console.log("Set Initial Balance\n");
            console.log(data.body);
            console.log("Finished!\n\n");
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    withdrawMoney(acct, amount1) {
        let url = "http://localhost:3000/atm/withdraw/" + acct + "/amount/" + amount1;
        got.get(url).then((data) => {
            console.log("Withdraw Money\n");
            console.log("Amount Withdrawn: " + amount1 + "\n");
            console.log(data.body);
            console.log("Finished!\n\n");
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    depositMoney(acct, amount2) {
        let url = "http://localhost:3000/atm/deposit/" + acct + "/amount/" + amount2;
        got.get(url).then((data) => {
            console.log("Deposit Money\n");
            console.log("Deposit Amount: " + amount2 + "\n");
            console.log("Balance " + data.body);
            console.log("Finished!\n\n");
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    currentBalance(acct) {
        let account = "http://localhost:3000/atm/" + acct;
        got.get(account).then((data) => {
            console.log("Current Balance from web backend " + data.body);
            console.log("finished!\n\n");
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    closeOperation() {
        this.initialBal = this.currentBal;
    }
}
exports.ATM = ATM;
