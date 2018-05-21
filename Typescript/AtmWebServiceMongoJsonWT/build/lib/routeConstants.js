"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeConstants = {
    ALIVE: '/atm',
    AUTHENTICATE: '/atm/find/:acct/pin/:pin',
    BALANCE: '/atm/:acct',
    DEPOSIT: '/atm/deposit/:acct/amount/:amount',
    WITHDRAW: '/atm/withdraw/:acct/amount/:amount',
    TRANSACTIONS: '/atm/transactions/:acct'
};
