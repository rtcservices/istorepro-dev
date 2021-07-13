import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ibe-ri-assign-operator-dialog',
  templateUrl: './ri-assign-operator-dialog.component.html',
  styleUrls: ['./ri-assign-operator-dialog.component.scss']
})
export class RiAssignOperatorDialogComponent implements OnInit {
  assignOperatorForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createAssignOperatorForm();
  }
  ngOnInit(): void {}

  createAssignOperatorForm() {
    this.assignOperatorForm = this.fb.group({
      storageType: '',
      operator: ''
    });
  }
  onDataOwnerSubmit() {}

  resetAssignOperatorForm() {
    this.assignOperatorForm.reset();
  }
  get assignOperatorFormControls() {
    return this.assignOperatorForm.controls;
  }
}
