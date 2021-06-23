import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupCompanyComponent } from './setup-company/setup-company.component';
import { SetupOwnerComponent } from './setup-owner/setup-owner.component';
import { SetupSecurityComponent } from './setup-security/setup-security.component';
import { SetupWarehouseComponent } from './setup-warehouse/setup-warehouse.component';

const routes: Routes = [
  { path: 'company', component: SetupCompanyComponent },
  { path: 'warehouse', component: SetupWarehouseComponent },
  { path: 'owner', component: SetupOwnerComponent },
  { path: 'security', component: SetupSecurityComponent },
  { path: '', redirectTo: 'company', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
