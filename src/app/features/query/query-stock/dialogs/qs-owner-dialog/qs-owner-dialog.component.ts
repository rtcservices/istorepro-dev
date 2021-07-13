import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ibe-qs-owner-dialog',
  templateUrl: './qs-owner-dialog.component.html',
  styleUrls: ['./qs-owner-dialog.component.scss']
})
export class QsOwnerDialogComponent implements OnInit {

  dataOwnerForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createDataOwnerForm();
  }

  ngOnInit(): void {
  }
  
  createDataOwnerForm() {
    this.dataOwnerForm = this.fb.group({
      code: '',
      name: ''
    });
  }
  onDataOwnerSubmit() {}

  resetDataOwnerForm() {
    this.dataOwnerForm.reset();
  }
  get dataFormOwnerControls() {
    return this.dataOwnerForm.controls;
  }
}
