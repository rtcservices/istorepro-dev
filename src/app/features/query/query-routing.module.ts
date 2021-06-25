import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueryStockComponent } from './query-stock/query-stock.component';
import { QueryTransactionsComponent } from './query-transactions/query-transactions.component';
import { QueryDocumentsComponent } from './query-documents/query-documents.component';

const routes: Routes = [
  { path: 'stock', component: QueryStockComponent },
  { path: 'transactions', component: QueryTransactionsComponent },
  { path: 'documents', component: QueryDocumentsComponent },
  { path: '', redirectTo: 'stock', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
