import { ATM } from './atmClass';

var atm : ATM =new ATM();

atm.currentBalance("009");
atm.setInitialBalance("009",1500.65);
atm.depositMoney("009",540.25);
atm.withdrawMoney("009",50.50);
atm.closeOperation();