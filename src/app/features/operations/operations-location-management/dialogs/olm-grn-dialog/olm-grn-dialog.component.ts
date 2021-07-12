import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';


@Component({
  selector: 'ibe-olm-grn-dialog',
  templateUrl: './olm-grn-dialog.component.html',
  styleUrls: ['./olm-grn-dialog.component.scss']
})
export class OlmGrnDialogComponent implements OnInit {
  GrnForm!: FormGroup;
  constructor(  private fb: FormBuilder, public dialog: MatDialog) {
    this.createGrnForm()
  }

  ngOnInit(): void {
  }

  createGrnForm() {
    this.GrnForm = this.fb.group({
      warehouse: [''],
      owner: [''],
      grn: [''],
      dateoperator: [''],
      date: [''],
      po: ['',  [Validators.pattern(patternsHelper.alphanumeric)]],
      item: [''],
      status: ['']
    });
  }

  get GrnFormControls() {
    return this.GrnForm.controls;
  }

  saveGrnFormData() {}

  resetGrnForm() {
    this.GrnForm.reset();
  }

}
