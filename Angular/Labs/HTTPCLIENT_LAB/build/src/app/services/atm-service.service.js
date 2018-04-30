"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AtmServiceService = /** @class */ (function () {
    function AtmServiceService(http) {
        this.http = http;
        this.URLAlive = 'http://localhost:3000/atm/';
        this.URLWithdraw = 'http://localhost:3000/atm/withdraw/';
        this.URLDeposit = 'http://localhost:3000/atm/deposit/';
        this.URLGetTxns = 'http://localhost:3000/atm/transactions/';
        //this.URLAlive = this.URLAlive;
        //this.URLWithdraw = this.URLWithdraw;
        //this.URLDeposit = this.URLDeposit;
        //this.URLGetTxns = this.URLGetTxns;
    }
    AtmServiceService.prototype.isAive = function () {
        return this.http.get(this.URLAlive);
    };
    AtmServiceService.prototype.getCurrentBalance = function (acct) {
        return this.http.get(this.URLAlive + acct);
    };
    AtmServiceService.prototype.withDraw = function (acct, amount) {
        return this.http.get(this.URLWithdraw + acct + '/amount/' + amount);
    };
    AtmServiceService.prototype.deposit = function (acct, amount) {
        return this.http.get(this.URLDeposit + acct + '/amount/' + amount);
    };
    AtmServiceService.prototype.getLastOperations = function (acct) {
        return this.http.get(this.URLGetTxns + acct);
    };
    AtmServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AtmServiceService);
    return AtmServiceService;
}());
exports.AtmServiceService = AtmServiceService;
//# sourceMappingURL=atm-service.service.js.map