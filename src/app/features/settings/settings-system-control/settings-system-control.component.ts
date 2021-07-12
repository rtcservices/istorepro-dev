import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

@Component({
  selector: 'ibe-settings-system-control',
  templateUrl: './settings-system-control.component.html',
  styleUrls: ['./settings-system-control.component.scss']
})
export class SettingsSystemControlComponent implements OnInit {
  SystemControlForm!: FormGroup;
  constructor(  private fb: FormBuilder) {
    this.createSystemControlForm()
  }

  ngOnInit(): void {
  }

  createSystemControlForm() {
    this.SystemControlForm = this.fb.group({
      companycode: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      companydescription: ['', [Validators.pattern(patternsHelper.alphanumeric)]],
      options: ['']
    });
  }

  get SystemControlFormControls() {
    return this.SystemControlForm.controls;
  }

  saveSystemControlFormData() {}

  resetSystemControlForm() {
    this.SystemControlForm.reset();
  }

}
