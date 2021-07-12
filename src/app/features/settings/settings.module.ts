import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsSystemControlComponent } from './settings-system-control/settings-system-control.component';
import { SettingsConsistencyCheckerComponent } from './settings-consistency-checker/settings-consistency-checker.component';
import { SettingsLoginAuditComponent } from './settings-login-audit/settings-login-audit.component';
import { SettingsAuditTrailComponent } from './settings-audit-trail/settings-audit-trail.component';

@NgModule({
  declarations: [SettingsProfileComponent, SettingsComponent, SettingsSystemControlComponent, SettingsConsistencyCheckerComponent, SettingsLoginAuditComponent, SettingsAuditTrailComponent],
  imports: [CommonModule, SettingsRoutingModule,SharedModule]
})
export class SettingsModule {}
