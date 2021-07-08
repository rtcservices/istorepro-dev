import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { SiteTranslateService } from 'src/app/services/site-translate.service';

@Component({
  selector: 'ibe-netvoldialog',
  templateUrl: './netvoldialog.component.html',
  styleUrls: ['./netvoldialog.component.scss']
})
export class NetvoldialogComponent implements OnInit {
  netvolForm!: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NetvoldialogComponent>,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService) {
    this.createnetvolForm()
  }

  ngOnInit(): void {
  }


  onCancel(): void {
    this.dialogRef.close();
  }

  createnetvolForm() {
    this.netvolForm = this.fb.group({
      item: '',
      quantity: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      length: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      breadth: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      height: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],
      unitvol: [
        '', [
          Validators.pattern(patternsHelper.numeric)
        ]
      ],

      dimensions: '',
      netvol: [
        '', [
          Validators.pattern(patternsHelper.numeric), Validators.required
        ]
      ]
    });
  }
  onnetvolFormSubmit() { }

  resetnetvolForm() {
    this.netvolForm.reset();
  }
  get netvolFormControls() {
    return this.netvolForm.controls;
  }

}