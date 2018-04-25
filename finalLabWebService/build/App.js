"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var atm_1 = require("./atm/atm");
var App = /** @class */ (function () {
    function App() {
        this.webService = express();
        this.atm = new atm_1.Atm();
        this.mountAtmRoutes();
    }
    App.prototype.mountAtmRoutes = function () {
        var _this = this;
        var atmLive = express.Router();
        var atmWithDraw = express.Router();
        var atmDeposit = express.Router();
        var atmBalance = express.Router();
        var atmTransactions = express.Router();
        atmLive.get('/atm', function (req, resp) {
            resp.json({
                status: 0,
                message: 'ok'
            });
        });
        atmBalance.get('/atm/:acct', function (req, resp) {
            resp.json({
                accountNumber: req.params.acct,
                currentBalance: _this.atm.getCurrentBalance(req.params.acct)
            });
        });
        atmTransactions.get('/atm/transactions/:acct', function (req, resp) {
            resp.json({
                accountNumber: req.params.acct,
                transactions: _this.atm.getLastOperations(req.params.acct).transactions
            });
        });
        atmDeposit.get('/atm/deposit/:acct/amount/:amount', function (req, resp) {
            resp.json({
                accountNumber: req.params.acct,
                currentBalance: _this.atm.deposit(req.params.acct, parseFloat(req.params.amount))
            });
        });
        atmWithDraw.get('/atm/withdraw/:acct/amount/:amount', function (req, resp) {
            resp.json({
                accountNumber: req.params.acct,
                currentBalance: _this.atm.deposit(req.params.acct, parseFloat(req.params.amount))
            });
        });
        //We have to make sure express knows about our routes
        this.webService.use(atmLive);
        this.webService.use(atmWithDraw);
        this.webService.use(atmDeposit);
        this.webService.use(atmBalance);
        this.webService.use(atmTransactions);
    };
    return App;
}());
exports.App = App;
exports.default = new App().webService;
