import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionReceiptComponent } from './transaction-receipt/transaction-receipt.component';


const routes: Routes = [
  {
    path: 'receipt',
    component: TransactionReceiptComponent,
    data: { animation: 'TransactionReceiptPage' }
  },
  { path: '', redirectTo: 'receipt', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
