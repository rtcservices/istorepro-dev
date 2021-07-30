import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DsWarehouseDialogComponent } from './dialogs/ds-warehouse-dialog/ds-warehouse-dialog.component';

@Component({
  selector: 'ibe-scans-double-scan',
  templateUrl: './scans-double-scan.component.html',
  styleUrls: ['./scans-double-scan.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScansDoubleScanComponent implements OnInit {
  scanType: any = '';
    
    constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  changeScanType(scanType: string) {
    this.scanType = scanType;
  }

  openWarehouseDialog() {
    this.dialog.open(DsWarehouseDialogComponent, {
      width: '615px'
    });
  }
}
