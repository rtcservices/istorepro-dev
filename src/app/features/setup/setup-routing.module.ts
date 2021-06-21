import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupAddComponent } from './setup-add/setup-add.component';
import { SetupSearchComponent } from './setup-search/setup-search.component';

const routes: Routes = [
  {
    path: 'add',
    component: SetupAddComponent,
    data: { animation: 'TransactionReceiptPage' }
  },
  { path: 'search', component: SetupSearchComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
