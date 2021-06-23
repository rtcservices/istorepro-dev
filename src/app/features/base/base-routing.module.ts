import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BaseItemTypeComponent } from './base-item-type/base-item-type.component';
import { BaseItemComponent } from './base-item/base-item.component';
import { BaseStorageTypeComponent } from './base-storage-type/base-storage-type.component';
import { BaseZoneComponent } from './base-zone/base-zone.component';
import { BaseLocationComponent } from './base-location/base-location.component';
import { BaseReasonComponent } from './base-reason/base-reason.component';

const routes: Routes = [
  { path: 'item-type', component: BaseItemTypeComponent },
  { path: 'item', component: BaseItemComponent },
  { path: 'storage-type', component: BaseStorageTypeComponent },
  { path: 'zone', component: BaseZoneComponent },
  { path: 'location', component: BaseLocationComponent },
  { path: 'reason', component: BaseReasonComponent },
  { path: '', redirectTo: 'item-type', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
