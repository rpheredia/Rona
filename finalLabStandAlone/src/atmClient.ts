import {Atm} from './atm/atm';

var atmInstance : Atm = new Atm();
var balance = 0;
var accountToQuery = '23232-2';
var result : any;

balance = atmInstance.getCurrentBalance(accountToQuery);
console.log('Balance of ' + accountToQuery + ' = ' + balance);

balance = atmInstance.withDraw(accountToQuery, 300);
console.log('Balance of ' + accountToQuery + ' = ' + balance + ' After Withdraw Money. ');

balance = atmInstance.deposit(accountToQuery, 50);
console.log('Balance of ' + accountToQuery + ' = ' + balance + ' After Deposit Money. ');

result = atmInstance.getLastOperations(accountToQuery).transactions;
console.log ( '*****Showing operations');
console.log(result);
