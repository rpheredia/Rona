"use strict";
exports.__esModule = true;
var ATM = /** @class */ (function () {
    function ATM() {
    }
    ATM.prototype.setInitialBalance = function (acct, balance) {
        this.accountNumber = acct;
        this.initialBal = balance;
        this.currentBal = balance;
    };
    ATM.prototype.withdrawMoney = function (acct, amount) {
        if (acct == this.accountNumber) {
            this.currentBal = this.currentBal - amount;
            console.log('********************');
            console.log('Account Number:  ' + this.accountNumber);
            console.log('Initial Balance: ' + this.initialBal);
            console.log('Withdrawing:     ' + amount);
            console.log('New Balance:     ' + this.currentBal + '\n');
        }
        else {
            console.log('**Error, wrong account number');
        }
    };
    ATM.prototype.depositMoney = function (acct, amount) {
        if (acct == this.accountNumber) {
            this.currentBal = this.currentBal + amount;
            console.log('********************');
            console.log('Account Number:  ' + this.accountNumber);
            console.log('Initial Balance: ' + this.initialBal);
            console.log('Depositing:      ' + amount);
            console.log('New Balance:     ' + this.currentBal + '\n');
        }
        else {
            console.log('**Error, wrong account number');
        }
    };
    ATM.prototype.showBalance = function (acct) {
        if (acct == this.accountNumber) {
            console.log('********************');
            console.log('Account Number: ' + this.accountNumber);
            console.log('Balance: ' + this.currentBal);
        }
        else {
            console.log('**Error, wrong account number');
        }
    };
    ATM.prototype.closeOperation = function () {
        this.initialBal = this.currentBal;
    };
    return ATM;
}());
exports.ATM = ATM;
