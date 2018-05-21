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
  public title              : string = '';
  public currentOperation   : string = '';
  public currentBalance     : number = 0;
  public txnAmount             : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

  private operation         : number = 0;
  private amount            : number = 0;

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute, public router : Router) {     
        
  }

  ngOnInit() {
            
    let acctNumber = this.atmService.getAccountNumber();
    this.route.params.subscribe(data=>{
      
      console.log("received parameter",data['arg']);

         switch (data['arg']) {
               case 'deposit'   : { this.operation = 1; this.title = "Deposit"; break }
               case 'withdrawl' : { this.operation = 2; this.title = "Witdraw"; break}
               
         }
    });

    this.theForm = new FormGroup({
      amount : new FormControl('',Validators.required)});

      
      this.atmService.onUpdatedTransactions$.subscribe(data=>{

        this.theForm.setValue({amount:0});

   });
  }


  doOperation(theForm : FormGroup) {   
      this.amount = this.theForm.get("amount").value;
      console.log ("Current Amount received: " + this.amount);

      if (this.operation == 1 ) {
        this.makeADeposit(this.atmService.getAccountNumber(),this.amount);   
      } else {
       this.makeAWithdraw(this.atmService.getAccountNumber(),this.amount);
      }
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
