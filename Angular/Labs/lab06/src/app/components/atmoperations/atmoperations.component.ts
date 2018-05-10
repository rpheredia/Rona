import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  //selector: 'app-atmoperations',
  templateUrl: './atmoperations.component.html',
  styleUrls: ['./atmoperations.component.css']
})
export class AtmoperationsComponent implements OnInit {
  
  theForm : FormGroup;
  public currentOperation   : string = '';
  public currentBalance     : number = 0;
  public txnAmount             : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute, public router : Router) {     
        
    this.theForm = new FormGroup({
      amount : new FormControl('',Validators.required)});
  }

  ngOnInit() {
            
  }

  doOperation(theForm : FormGroup): void {   
      let currentAmount = this.theForm.get("amount").value;
      console.log ("Current Amount received: " + currentAmount);

    let acctNumber = this.atmService.getAccountNumber();

    this.route.params.subscribe(data=>{
      
      console.log("received parameter",data['arg']);

         switch (data['arg']) {
               case 'deposit'   : { this.makeADeposit(acctNumber,currentAmount); break }
               case 'withdrawl' : { this.makeAWithdraw(acctNumber,currentAmount); break }
               
         }
    });

    this.theForm = new FormGroup({
      amount : new FormControl('',Validators.required)});
      currentAmount = 0;
  }
  showBalance(acct:string) {

    this.currentOperation = 'Querying Balance';

    this.atmService.getCurrentBalance(acct).subscribe(result => {
            this.atmResponseBalance = result;
            this.currentBalance = result.currentBalance;
      });

  }

  makeADeposit(acct:string,amount:number) {

    this.currentOperation = "Making a Deposit";

    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
               this.currentBalance = result.currentBalance;
    });
    
  }

  makeAWithdraw(acct:string,amount:number) {

       this.currentOperation = "Making a Withdrawl";

        this.atmService.withDraw(acct,amount).then( result => {
                this.atmResponse = result;
                this.currentBalance = result.currentBalance;

      });  
  }

  showPanel(){
    return this.atmService.accountValid;
  }

}
