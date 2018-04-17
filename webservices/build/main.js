"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atmClass_1 = require("./atmClass");
var atm = new atmClass_1.ATM();
atm.currentBalance("009");
atm.setInitialBalance("009", 1500.65);
atm.depositMoney("009", 540.25);
atm.withdrawMoney("009", 50.50);
atm.closeOperation();
