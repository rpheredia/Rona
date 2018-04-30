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
var atm_service_service_1 = require("./services/atm-service.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(atmService) {
        var _this = this;
        this.atmService = atmService;
        this.title = 'ATM';
        this.alivestatus = 0;
        this.alivedescription = '';
        this.currentOperation = '';
        this.account = '';
        this.balance = 0;
        this.depositamount = 0;
        this.withdrawamount = 0;
        this.lastTransactions = [];
        this.showBalance('23232-1');
        setTimeout(function () {
            _this.makeADeposit('23232-1', 100);
        }, 2000);
        setTimeout(function () {
            _this.makeAWithdraw('23232-1', 50);
        }, 4000);
        setTimeout(function () {
            _this.getLastOperations('23232-1');
        }, 6000);
    }
    AppComponent.prototype.aliveStatus = function () {
        var _this = this;
        this.currentOperation = 'Test Connection';
        this.atmService.isAive().subscribe(function (result) {
            _this.alivestatus = result.status;
            _this.alivedescription = result.description;
        });
    };
    AppComponent.prototype.showBalance = function (acct) {
        var _this = this;
        this.currentOperation = 'Querying Balance';
        this.atmService.getCurrentBalance(acct).subscribe(function (result) {
            _this.account = result.accountNumber;
            _this.balance = result.currentBalance;
        });
    };
    AppComponent.prototype.makeADeposit = function (acct, amount) {
        var _this = this;
        this.currentOperation = "Making a Deposit";
        this.atmService.deposit(acct, amount).subscribe(function (result) {
            _this.account = result.accountNumber;
            _this.balance = result.currentBalance;
        });
    };
    AppComponent.prototype.makeAWithdraw = function (acct, amount) {
        var _this = this;
        this.currentOperation = "Making a Withdrawal";
        this.atmService.withDraw(acct, amount).subscribe(function (result) {
            _this.account = result.accountNumber;
            _this.balance = result.currentBalance;
        });
    };
    AppComponent.prototype.getLastOperations = function (acct) {
        var _this = this;
        this.currentOperation = "Showing last Transactions";
        this.atmService.getLastOperations(acct).subscribe(function (result) {
            _this.lastTransactions = result.transactions;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [atm_service_service_1.AtmServiceService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map