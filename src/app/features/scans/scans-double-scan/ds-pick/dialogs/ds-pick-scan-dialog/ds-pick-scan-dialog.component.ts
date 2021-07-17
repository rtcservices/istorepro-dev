import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ibe-ds-pick-scan-dialog',
  templateUrl: './ds-pick-scan-dialog.component.html',
  styleUrls: ['./ds-pick-scan-dialog.component.scss']
})
export class DsPickScanDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

  

}
