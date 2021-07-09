import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ibe-ds-putaway-item-assistance-dialog',
  templateUrl: './ds-putaway-item-assistance-dialog.component.html',
  styleUrls: ['./ds-putaway-item-assistance-dialog.component.scss']
})
export class DsPutawayItemAssistanceDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
