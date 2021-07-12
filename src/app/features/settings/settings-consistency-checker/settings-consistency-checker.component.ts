import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

@Component({
  selector: 'ibe-settings-consistency-checker',
  templateUrl: './settings-consistency-checker.component.html',
  styleUrls: ['./settings-consistency-checker.component.scss']
})
export class SettingsConsistencyCheckerComponent implements OnInit {
  ConsistencyForm!: FormGroup;
  constructor(  private fb: FormBuilder) {
    this.createConsistencyForm()
  }

  ngOnInit(): void {
  }

  createConsistencyForm() {
    this.ConsistencyForm = this.fb.group({
      stock: [''],
      item: [''],
      deliverycancel: [''],
      delivery: [''],
      zerosubzero: ['']
    });
  }

  get ConsistencyFormControls() {
    return this.ConsistencyForm.controls;
  }

  saveConsistencyFormData() {}

  resetConsistencyForm() {
    this.ConsistencyForm.reset();
  }

}
