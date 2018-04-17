import { atmInterface } from './atmInterface';
export declare class ATM implements atmInterface {
    currentBal: number;
    initialBal: number;
    accountNumber: string;
    constructor();
    setInitialBalance(acct: string, balance: number): void;
    withdrawMoney(acct: string, amount1: number): void;
    depositMoney(acct: string, amount2: number): void;
    currentBalance(acct: string): void;
    closeOperation(): void;
}
