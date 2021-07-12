import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'profile', component: SettingsProfileComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
