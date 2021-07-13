import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { QueryStockComponent } from './query-stock/query-stock.component';
import { QueryTransactionsComponent } from './query-transactions/query-transactions.component';
import { QueryDocumentsComponent } from './query-documents/query-documents.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QdOwnerDialogComponent } from './query-documents/dialogs/qd-owner-dialog/qd-owner-dialog.component';
import { QsOwnerDialogComponent } from './query-stock/dialogs/qs-owner-dialog/qs-owner-dialog.component';
import { QtOwnerDialogComponent } from './query-transactions/dialogs/qt-owner-dialog/qt-owner-dialog.component';

@NgModule({
  declarations: [

    QueryStockComponent,
       QueryTransactionsComponent,
       QueryDocumentsComponent,
       QdOwnerDialogComponent,
       QsOwnerDialogComponent,
       QtOwnerDialogComponent
  ],
  imports: [
    CommonModule,
    QueryRoutingModule,
    SharedModule
  ]
})
export class QueryModule { }
