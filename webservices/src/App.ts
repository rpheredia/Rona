import * as express from 'express';
import * as got from 'got';
import * as _ from 'lodash';
import  {accountNumbers} from './atmArray';

class App {
  public express;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {

    const alive = express.Router();
    const setInitBal = express.Router();
    const balance = express.Router();
    const withdraw = express.Router();
    const deposit = express.Router();

     
    alive.get('/atm', (req, resp) => {
      let x = {status : 0, message : "OK"};
      resp.json(x);
    })


    balance.get('/atm/:accountID', (req, res) => { 
      let x = _.findIndex(accountNumbers, function(o) { return o.account == req.params.accountID; });
      if ( x >= 0) {
        res.json({
              account : accountNumbers[x].account,
              balance : accountNumbers[x].balance
        });
      } else {
        res.json({status : 1, message : "Account Not Found: " + req.params.accountID});   
      }

    })

    setInitBal.get('/atm/setbal/:accountID/amount/:amount', (req, resp) => {
      let x = _.findIndex(accountNumbers, function(o) { return o.account == req.params.accountID; });
      if ( x >= 0) {
        accountNumbers[x].balance = parseFloat((req.params.amount));        
        resp.json({account : accountNumbers[x].account, balance : accountNumbers[x].balance}); 
      } else {        
        resp.json({status : 1, message : "Account Not Found: " + req.params.accountID});      
      }
    })
 
    withdraw.get('/atm/withdraw/:accountID/amount/:amount', (req, resp) => {
      let x = _.findIndex(accountNumbers, function(o) { return o.account == req.params.accountID; });
      if ( x >= 0) {        
        accountNumbers[x].balance = accountNumbers[x].balance - req.params.amount;         
        resp.json({account : accountNumbers[x].account, balance : accountNumbers[x].balance});
      } else {
        resp.json({status : 1, message : "Account Not Found: " + req.params.accountID}); 
      }
    })
    
    deposit.get('/atm/deposit/:accountID/amount/:amount', (req, resp) => {
      let x = _.findIndex(accountNumbers, function(o) { return o.account == req.params.accountID; });
      let newBal = 0;
      if ( x >= 0) {  
        accountNumbers[x].balance = accountNumbers[x].balance.valueOf() + parseInt(req.params.amount);
        resp.json({account : accountNumbers[x].account, balance : accountNumbers[x].balance});
      } else {
        resp.json({status : 1, message : "Account Not Found: " + req.params.accountID}); 
      }
    })
    
    this.express.use('/',alive);
    this.express.use('/',balance);
    this.express.use('/',setInitBal);
    this.express.use('/',withdraw);
    this.express.use('/',deposit);

      
    }

}

export default new App().express
