import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-netwtdialog',
  templateUrl: './netwtdialog.component.html',
  styleUrls: ['./netwtdialog.component.scss']
})
export class NetwtdialogComponent implements OnInit {
  netwtForm!: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NetwtdialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService) {
    this.createnetwtForm()
  }

  ngOnInit(): void {
  }


  onCancel(): void {
    this.dialogRef.close();
  }

  createnetwtForm() {
    this.netwtForm = this.fb.group({
      item: '',
      unitweight: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      quantity: '',
      netwt: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ]
    });
  }
  onnetwtFormSubmit() { }

  resetnetwtForm() {
    this.netwtForm.reset();
  }
  get netwtFormControls() {
    return this.netwtForm.controls;
  }

}
