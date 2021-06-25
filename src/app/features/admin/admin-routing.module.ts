import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSystemControlComponent } from './admin-system-control/admin-system-control.component';
import { AdminConsistencyComponent } from './admin-consistency/admin-consistency.component';
import { AdminLoginAuditComponent } from './admin-login-audit/admin-login-audit.component';
import { AdminAuditTrailComponent } from './admin-audit-trail/admin-audit-trail.component';

const routes: Routes = [
  { path: 'system-control', component: AdminSystemControlComponent },
  { path: 'consistency', component: AdminConsistencyComponent },
  { path: 'login-audit', component: AdminLoginAuditComponent },
  { path: 'audit-trail', component: AdminAuditTrailComponent },
  { path: '', redirectTo: 'system-control', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
