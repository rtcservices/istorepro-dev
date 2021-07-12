import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
@Component({
  selector: 'ibe-settings-login-audit',
  templateUrl: './settings-login-audit.component.html',
  styleUrls: ['./settings-login-audit.component.scss']
})
export class SettingsLoginAuditComponent implements OnInit {
  LoginAuditForm!: FormGroup;
  constructor(  private fb: FormBuilder) {
    this.createLoginAuditForm()
  }

  ngOnInit(): void {
  }

  createLoginAuditForm() {
    this.LoginAuditForm = this.fb.group({
      loginname: ['',  [ Validators.pattern(patternsHelper.alphanumeric)]],
      ip: ['',  [ Validators.pattern(patternsHelper.alphanumeric)]],
      datefrom: [''],
      dateto: [''],
      success: [''],
      failure: ['']
    });
  }

  get LoginAuditFormControls() {
    return this.LoginAuditForm.controls;
  }

  saveLoginAuditFormData() {}

  resetLoginAuditForm() {
    this.LoginAuditForm.reset();
  }



}
