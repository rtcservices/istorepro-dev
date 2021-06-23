import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { SetupCompanyComponent } from './setup-company/setup-company.component';
import { SetupWarehouseComponent } from './setup-warehouse/setup-warehouse.component';
import { SetupOwnerComponent } from './setup-owner/setup-owner.component';
import { SetupSecurityComponent } from './setup-security/setup-security.component';


@NgModule({
  declarations: [
    SetupCompanyComponent,
    SetupWarehouseComponent,
    SetupOwnerComponent,
    SetupSecurityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SetupRoutingModule,
  ]
})
export class SetupModule { }
