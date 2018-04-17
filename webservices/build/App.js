"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const _ = require("lodash");
const atmArray_1 = require("./atmArray");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const alive = express.Router();
        const setInitBal = express.Router();
        const balance = express.Router();
        const withdraw = express.Router();
        const deposit = express.Router();
        alive.get('/atm', (req, resp) => {
            let x = { status: 0, message: "OK" };
            resp.json(x);
        });
        balance.get('/atm/:accountID', (req, res) => {
            let x = _.findIndex(atmArray_1.accountNumbers, function (o) { return o.account == req.params.accountID; });
            if (x >= 0) {
                res.json({
                    account: atmArray_1.accountNumbers[x].account,
                    balance: atmArray_1.accountNumbers[x].balance
                });
            }
            else {
                res.json({ status: 1, message: "Account Not Found: " + req.params.accountID });
            }
        });
        setInitBal.get('/atm/setbal/:accountID/amount/:amount', (req, resp) => {
            let x = _.findIndex(atmArray_1.accountNumbers, function (o) { return o.account == req.params.accountID; });
            if (x >= 0) {
                atmArray_1.accountNumbers[x].balance = parseFloat((req.params.amount));
                resp.json({ account: atmArray_1.accountNumbers[x].account, balance: atmArray_1.accountNumbers[x].balance });
            }
            else {
                resp.json({ status: 1, message: "Account Not Found: " + req.params.accountID });
            }
        });
        withdraw.get('/atm/withdraw/:accountID/amount/:amount', (req, resp) => {
            let x = _.findIndex(atmArray_1.accountNumbers, function (o) { return o.account == req.params.accountID; });
            if (x >= 0) {
                atmArray_1.accountNumbers[x].balance = atmArray_1.accountNumbers[x].balance - req.params.amount;
                resp.json({ account: atmArray_1.accountNumbers[x].account, balance: atmArray_1.accountNumbers[x].balance });
            }
            else {
                resp.json({ status: 1, message: "Account Not Found: " + req.params.accountID });
            }
        });
        deposit.get('/atm/deposit/:accountID/amount/:amount', (req, resp) => {
            let x = _.findIndex(atmArray_1.accountNumbers, function (o) { return o.account == req.params.accountID; });
            let newBal = 0;
            if (x >= 0) {
                atmArray_1.accountNumbers[x].balance = atmArray_1.accountNumbers[x].balance.valueOf() + parseInt(req.params.amount);
                resp.json({ account: atmArray_1.accountNumbers[x].account, balance: atmArray_1.accountNumbers[x].balance });
            }
            else {
                resp.json({ status: 1, message: "Account Not Found: " + req.params.accountID });
            }
        });
        this.express.use('/', alive);
        this.express.use('/', balance);
        this.express.use('/', setInitBal);
        this.express.use('/', withdraw);
        this.express.use('/', deposit);
    }
}
exports.default = new App().express;
