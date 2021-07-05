import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibe-data-audit',
  templateUrl: './data-audit.component.html',
  styleUrls: ['./data-audit.component.scss']
})
export class DataAuditComponent implements OnInit {
  @Input() insertedBy!: string;
  @Input() updatedBy!: string;

  constructor() {}

  ngOnInit(): void {
    if (!this.insertedBy) {
      this.insertedBy = 'AmitB-07/05/2019 14:56:32';
    }
    if (!this.updatedBy) {
      this.updatedBy = 'Shankar-30/01/2021 12:55:03';
    }
  }
}
