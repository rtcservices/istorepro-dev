import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ibe-ds-putaway-dialog',
  templateUrl: './ds-putaway-dialog.component.html',
  styleUrls: ['./ds-putaway-dialog.component.scss']
})
export class DsPutawayDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
