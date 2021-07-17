import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ibe-ds-putaway-scan-dialog',
  templateUrl: './ds-putaway-scan-dialog.component.html',
  styleUrls: ['./ds-putaway-scan-dialog.component.scss']
})
export class DsPutawayScanDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
