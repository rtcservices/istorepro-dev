import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { DhmCellDialogComponent } from './dialog/dhm-cell-dialog/dhm-cell-dialog.component';

@Component({
  selector: 'ibe-dashboards-heatmap',
  templateUrl: './dashboards-heatmap.component.html',
  styleUrls: ['./dashboards-heatmap.component.scss']
})
export class DashboardsHeatmapComponent implements OnInit {
  HeatMapForm!: FormGroup;
  dummydata: any = [
    [
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"partial"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"free"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"free"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"partial"},
      {value:"2.7-2.3",status:"partial"},
      {value:"2.7-2.3",status:"partial"},

    ],
    [
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"free"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"partial"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
      {value:"2.7-2.3",status:"full"},
    ]
  ];
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createHeatMapForm();
  }

  ngOnInit(): void {}
  createHeatMapForm() {
    this.HeatMapForm = this.fb.group({
      warehouse: ['', [Validators.required]],
      po: [''],
      rowsplit: [''],
      item: [''],
      batchnumber: ['']
    });
  }

  get HeatMapFormControls() {
    return this.HeatMapForm.controls;
  }

  onHeatMapFormSubmit() {}

  resetHeatMapForm() {
    this.HeatMapForm.reset();
  }


  openCellDialog () {
    this.dialog.open(DhmCellDialogComponent, {
      width: '800px'
    });
  }
}
