export interface atmInterface {
    /*
    *  
    * */
    currentBal : number,
    initialBal : number,
    accountNumber : string,

    /*
    *  
    * */
   setInitialBalance(acct:string, balance : number) : void,
   withdrawMoney (acct:string,amount:number) : void ;
   depositMoney (acct:string,amount:number) : void ;
   currentBalance (acct:string) : void;
   closeOperation() : void;
    

}
