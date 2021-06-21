import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionReceiptModalComponent } from './transaction-receipt-modal/transaction-receipt-modal.component';
import { TransactionReceiptComponent } from './transaction-receipt/transaction-receipt.component';


@NgModule({
  declarations: [
    TransactionReceiptModalComponent,
    TransactionReceiptComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
