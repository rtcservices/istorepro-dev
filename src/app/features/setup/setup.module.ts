import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { SetupAddComponent } from './setup-add/setup-add.component';
import { SetupSearchComponent } from './setup-search/setup-search.component';


@NgModule({
  declarations: [
    SetupAddComponent,
    SetupSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SetupRoutingModule,
  ]
})
export class SetupModule { }
