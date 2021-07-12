import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { patternsHelper } from '../../../helpers/patterns.helper';
import { LoaderService } from '../../../services/loader.service';
import { NotificationService } from '../../../services/notification.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';
import { QueryStockModel } from '../models/query-stock.model';

@Component({
  selector: 'ibe-query-stock',
  templateUrl: './query-stock.component.html',
  styleUrls: ['./query-stock.component.scss']
})
export class QueryStockComponent implements OnInit {

  formErrorTranslated = '';
  filterErrorTranslated = '';

  stockForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private translate: TranslateService,
    private titleService: TitleService,
    private notification: NotificationService
  ) { 
    this.createStockForm();
  }

  ngOnInit(): void {
    this.titleService.changeTitleTranslated('menu.setupWarehouse');
    const language = this.siteTranslateService.defaultLanguage;
    this.translate.use(language).subscribe((res) => {
      this.formErrorTranslated = this.translate.instant('error.form');
      this.filterErrorTranslated = this.translate.instant('error.filter');
    });
  }

  createStockForm() {
    this.stockForm = this.fb.group({
      warehouse: [
        '',
        [Validators.required, Validators.pattern(patternsHelper.alphanumeric)]
      ],
      owner: [
        '',
        [Validators.maxLength(10),Validators.pattern(patternsHelper.alphanumeric)]
      ],
      item: [
        '',
        [Validators.maxLength(50), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      batchNo: [
        '',
        [Validators.maxLength(35), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      poRefNo: [
        '',
        [Validators.maxLength(18), Validators.pattern(patternsHelper.alphanumeric)]
      ],
      expiryFrom: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ],
      expiryTo: [
        '',
        [Validators.pattern(patternsHelper.alphanumeric)]
      ]
    });
  }

  get dataStockFormControls() {
    return this.stockForm.controls;
  }

  onStockSubmit() {}

  openOwnerDialog() {
    
  }

}
