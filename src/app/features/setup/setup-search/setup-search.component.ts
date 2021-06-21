import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs';
@Component({
  selector: 'rtc-setup-search',
  templateUrl: './setup-search.component.html',
  styleUrls: ['./setup-search.component.scss']
})
export class SetupSearchComponent implements OnInit {

  data!: any[];

  constructor(private http: HttpClient, private translate: TranslateService) { }

  ngOnInit(): void {
    this.data = []
  }
}
