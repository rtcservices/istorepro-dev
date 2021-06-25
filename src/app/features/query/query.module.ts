import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { QueryStockComponent } from './query-stock/query-stock.component';
import { QueryTransactionsComponent } from './query-transactions/query-transactions.component';
import { QueryDocumentsComponent } from './query-documents/query-documents.component';

@NgModule({
  declarations: [
  
    QueryStockComponent,
       QueryTransactionsComponent,
       QueryDocumentsComponent
  ],
  imports: [
    CommonModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
