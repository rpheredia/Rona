"use strict";
exports.__esModule = true;
var atmClass_1 = require("./atmClass");
var atm = new atmClass_1.ATM();
atm.setInitialBalance("009", 500);
atm.withdrawMoney("009", 50);
atm.showBalance("009");
atm.closeOperation();
