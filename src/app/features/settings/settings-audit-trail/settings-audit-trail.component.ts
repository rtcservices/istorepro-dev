import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';

@Component({
  selector: 'ibe-settings-audit-trail',
  templateUrl: './settings-audit-trail.component.html',
  styleUrls: ['./settings-audit-trail.component.scss']
})
export class SettingsAuditTrailComponent implements OnInit {
  AuditTrailForm!: FormGroup;
  constructor(  private fb: FormBuilder) {
    this.createAuditTrailForm()
  }

  ngOnInit(): void {
  }

  createAuditTrailForm() {
    this.AuditTrailForm = this.fb.group({
      loginname: ['',  [Validators.pattern(patternsHelper.alphanumeric)]],
      context: [''],
      datefrom: [''],
      dateto: [''],
      update: [''],
      delete: ['']
    });
  }

  get AuditTrailFormControls() {
    return this.AuditTrailForm.controls;
  }

  saveAuditTrailFormData() {}

  resetAuditTrailForm() {
    this.AuditTrailForm.reset();
  }

}
