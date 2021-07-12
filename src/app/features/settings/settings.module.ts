import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsProfileComponent, SettingsComponent],
  imports: [CommonModule, SettingsRoutingModule]
})
export class SettingsModule {}
