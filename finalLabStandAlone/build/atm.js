"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var atm_data_1 = require("./atm.data");
var atm_model_1 = require("./atm.model");
var Atm = /** @class */ (function () {
    function Atm() {
        this.localDB = new atm_model_1.AccountList();
        this.localDB.accounts = atm_data_1.InitialData;
        this.transactionList = new atm_model_1.TransactionList();
    }
    Atm.prototype.accountExists = function (acct) {
        return _.some(this.localDB.accounts, { 'accountNumber': acct });
    };
    Atm.prototype.getCurrentBalance = function (acct) {
        if (this.accountExists(acct)) {
            var result = _.filter(this.localDB.accounts, { 'accountNumber': acct });
            return result[0].currentBalance;
        }
        else {
            return -100; //not found
        }
    };
    Atm.prototype.withDraw = function (acct, amount) {
        if (this.accountExists(acct)) {
            var result = _.findIndex(this.localDB.accounts, { 'accountNumber': acct });
            this.localDB.accounts[result].currentBalance -= amount;
            /*record the txn inside txnlist*/
            var newTransaction = new atm_model_1.TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "withdraw";
            this.transactionList.transactions.push(newTransaction);
            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100;
        }
    };
    Atm.prototype.deposit = function (acct, amount) {
        if (this.accountExists(acct)) {
            var result = _.findIndex(this.localDB.accounts, { 'accountNumber': acct });
            this.localDB.accounts[result].currentBalance += amount;
            /*record the txn inside txnlist*/
            var newTransaction = new atm_model_1.TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "deposit";
            this.transactionList.transactions.push(newTransaction);
            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100;
        }
    };
    Atm.prototype.getLastOperations = function (acct) {
        var result = new atm_model_1.TransactionList();
        if (this.accountExists(acct)) {
            result.transactions = _.filter(this.transactionList.transactions, { 'accountNuber': acct });
        }
        return result;
    };
    return Atm;
}());
exports.Atm = Atm;
