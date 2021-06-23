import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';

const routes: Routes = [
  { path: 'profile', component: SettingsProfileComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
