import { ATM } from './atmClass';

var atm : ATM =new ATM();

atm.setInitialBalance("009",500);
atm.withdrawMoney("009",50);
atm.showBalance("009");
atm.closeOperation();