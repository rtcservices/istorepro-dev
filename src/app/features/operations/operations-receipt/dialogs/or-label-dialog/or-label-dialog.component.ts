import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-or-label-dialog',
  templateUrl: './or-label-dialog.component.html',
  styleUrls: ['./or-label-dialog.component.scss']
})
export class OrLabelDialogComponent implements OnInit {
  searchDataSource=[]
  labelForm!: FormGroup;
  constructor(private fb: FormBuilder) {
this.createlabelForm()
   }

  ngOnInit(): void {
  }



  createlabelForm() {
    this.labelForm = this.fb.group({
      warehouse: [''],
      owner: [''],
      po: [''],
      grn: ['']
    });
  }

  get labelFormControls() {
    return this.labelForm.controls;
  }





}