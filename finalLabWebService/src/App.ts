import * as express from 'express';

import {Atm} from './atm/atm';

export class App {
    public webService;
    private atm : Atm;

    constructor() {
        this.webService = express();
        this.atm = new Atm();
        this.mountAtmRoutes();
    }

    private mountAtmRoutes() {
        const atmLive = express.Router();
        const atmWithDraw = express.Router();
        const atmDeposit = express.Router();
        const atmBalance = express.Router();
        const atmTransactions = express.Router();

        atmLive.get('/atm', (req,resp) => {
            resp.json({
                status : 0,
                message : 'ok'
            });
        });

        atmBalance.get('/atm/:acct', (req,resp) => {
            resp.json({
                accountNumber : req.params.acct,
                currentBalance : this.atm.getCurrentBalance(req.params.acct)
            });
        });

        atmTransactions.get('/atm/transactions/:acct', (req,resp) => {
            resp.json({
                accountNumber : req.params.acct,
                transactions : this.atm.getLastOperations(req.params.acct).transactions
            });
        });

        atmDeposit.get('/atm/deposit/:acct/amount/:amount', (req,resp) => {
            resp.json( {
                accountNumber : req.params.acct,
                currentBalance : this.atm.deposit(req.params.acct, 
                                parseFloat(req.params.amount))
            });
        });
        atmWithDraw.get('/atm/withdraw/:acct/amount/:amount', (req,resp) => {
            resp.json( {
                accountNumber : req.params.acct,
                currentBalance : this.atm.deposit(req.params.acct, 
                                parseFloat(req.params.amount))
            });
        });

        //We have to make sure express knows about our routes

        this.webService.use(atmLive);
        this.webService.use(atmWithDraw);
        this.webService.use(atmDeposit);
        this.webService.use(atmBalance);
        this.webService.use(atmTransactions);
    }    
}

export default new App().webService;