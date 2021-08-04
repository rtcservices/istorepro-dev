import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { patternsHelper } from 'src/app/helpers/patterns.helper';
import { QdOwnerDialogComponent } from './dialogs/qd-owner-dialog/qd-owner-dialog.component';
import { TitleService } from '../../../services/title.service';
import { TranslateService } from '@ngx-translate/core';
import { SiteTranslateService } from '../../../services/site-translate.service';

@Component({
  selector: 'ibe-query-documents',
  templateUrl: './query-documents.component.html',
  styleUrls: ['./query-documents.component.scss']
})
export class QueryDocumentsComponent implements OnInit {
  DocumentForm!: FormGroup;
  
  formErrorTranslated = '';
  filterErrorTranslated = '';

  constructor(private fb: FormBuilder,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
     public dialog: MatDialog) {
    this.createDocumentForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.queryDocuments');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createDocumentForm() {
    this.DocumentForm = this.fb.group({
      warehouse: [''],
      documenttype: [''],
      documentnumber: [''],
      datefromoperator: [''],
      datefrom: [''],
      dateto: [''],
      datetooperator: [''],
      owner: ['']
    });
  }

  get DocumentFormControls() {
    return this.DocumentForm.controls;
  }

  saveDocumentFormData() {}

  resetDocumentForm() {
    this.DocumentForm.reset();
  }

  openOwnerDialog() {
    this.dialog.open(QdOwnerDialogComponent, {
      width: '800px'
    });
  }
}
