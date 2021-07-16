import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { OhmCellDialogComponent } from './dialogs/ohm-cell-dialog/ohm-cell-dialog.component';

@Component({
  selector: 'ibe-operations-heat-map',
  templateUrl: './operations-heat-map.component.html',
  styleUrls: ['./operations-heat-map.component.scss']
})
export class OperationsHeatMapComponent implements OnInit {
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
    this.dialog.open(OhmCellDialogComponent, {
      width: '800px'
    });
  }
}
