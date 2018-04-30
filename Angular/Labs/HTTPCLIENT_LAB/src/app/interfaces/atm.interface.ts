export interface aliveStatus {
        status : number;
        description : string;
    };

    export interface AccountModel {
        accountNumber : string;
        currentBalance : number;
    };
    
    export interface AccountList {
        accounts : Array<AccountModel>;
    };
    
    export interface TransactionModel {
        accountNumber : string;
        dateOfTransaction : Date;
        transactionType : string;
        amount : number;
    
    };
    
    export interface TransactionList {
        transactions : Array<TransactionModel>;
    };
