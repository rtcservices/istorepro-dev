import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';


@Component({
  selector: 'ibe-dashboards-mis',
  templateUrl: './dashboards-mis.component.html',
  styleUrls: ['./dashboards-mis.component.scss']
})
export class DashboardsMisComponent implements OnInit {
  MisForm!: FormGroup;
  constructor(  private fb: FormBuilder, public dialog: MatDialog) {
    this.createMisForm()
  }

  ngOnInit(): void {
  }

  createMisForm() {
    this.MisForm = this.fb.group({
      type: ['']
    });
  }

  get MisFormControls() {
    return this.MisForm.controls;
  }

  onMisFormSubmit() {}

  resetMisForm() {
    this.MisForm.reset();
  }


}
