import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { BaseRoutingModule } from './base-routing.module';
import { BaseItemTypeComponent } from './base-item-type/base-item-type.component';
import { BaseItemComponent } from './base-item/base-item.component';
import { BaseStorageTypeComponent } from './base-storage-type/base-storage-type.component';
import { BaseZoneComponent } from './base-zone/base-zone.component';
import { BaseLocationComponent } from './base-location/base-location.component';
import { BaseReasonComponent } from './base-reason/base-reason.component';

@NgModule({
  declarations: [
    BaseItemTypeComponent,
    BaseItemComponent,
    BaseStorageTypeComponent,
    BaseZoneComponent,
    BaseLocationComponent,
    BaseReasonComponent
  ],
  imports: [CommonModule, SharedModule, BaseRoutingModule]
})
export class BaseModule {}
