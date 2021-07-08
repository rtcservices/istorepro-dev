import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-rudialog',
  templateUrl: './or-ru-dialog.component.html',
  styleUrls: ['./or-ru-dialog.component.scss']
})
export class OrRuDialogComponent implements OnInit {
  ruForm!: FormGroup;
  skuForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OrRuDialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService
  ) {
    this.createruForm();
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  createruForm() {
    this.ruForm = this.fb.group({
      rulength: '',
      rubreadth: '',
      ruheight: '',
      ruunit: '',
      skulength: '',
      skubreadth: '',
      skuheight: '',
      skuunit: ''
    });
  }

  onruFormSubmit() {}

  resetruForm() {
    this.ruForm.reset();
  }

  get ruFormControls() {
    return this.ruForm.controls;
  }
}
