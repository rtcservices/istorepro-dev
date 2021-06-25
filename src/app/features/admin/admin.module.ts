import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSystemControlComponent } from './admin-system-control/admin-system-control.component';
import { AdminConsistencyComponent } from './admin-consistency/admin-consistency.component';
import { AdminLoginAuditComponent } from './admin-login-audit/admin-login-audit.component';
import { AdminAuditTrailComponent } from './admin-audit-trail/admin-audit-trail.component';


@NgModule({
  declarations: [
  
    AdminSystemControlComponent,
       AdminConsistencyComponent,
       AdminLoginAuditComponent,
       AdminAuditTrailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
