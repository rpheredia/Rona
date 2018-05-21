import {Pipe, PipeTransform } from '@angular/core';
import {AtmTransaction} from '../models/atm.interface';

@Pipe ( { name: 'depositOnly'})

export class DepositOnlyPipe implements PipeTransform {
    transform(transaction2 : Array<AtmTransaction>  ) {
        return transaction2.filter (transaction =>
        transaction.transactionType=='WithDraw');
    }
}
