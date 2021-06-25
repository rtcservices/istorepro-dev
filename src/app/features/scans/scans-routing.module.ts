import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ScansDoubleScanComponent } from './scans-double-scan/scans-double-scan.component';

const routes: Routes = [
  { path: 'double-scan', component: ScansDoubleScanComponent },
  { path: '', redirectTo: 'double-scan', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScansRoutingModule { }
