import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountProfileComponent } from './user-account-profile/user-account-profile.component';


@NgModule({
  declarations: [
    UserAccountProfileComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ]
})
export class UserAccountModule { }
