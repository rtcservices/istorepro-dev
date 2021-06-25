import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScansRoutingModule } from './scans-routing.module';
import { ScansDoubleScanComponent } from './scans-double-scan/scans-double-scan.component';


@NgModule({
  declarations: [
  
    ScansDoubleScanComponent
  ],
  imports: [
    CommonModule,
    ScansRoutingModule
  ]
})
export class ScansModule { }
