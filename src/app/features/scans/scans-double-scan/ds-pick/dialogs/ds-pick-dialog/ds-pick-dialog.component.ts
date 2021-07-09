import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ibe-ds-pick-dialog',
  templateUrl: './ds-pick-dialog.component.html',
  styleUrls: ['./ds-pick-dialog.component.scss']
})
export class DsPickDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

  

}
