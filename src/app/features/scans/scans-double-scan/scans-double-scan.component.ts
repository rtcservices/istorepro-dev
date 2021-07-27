import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ibe-scans-double-scan',
  templateUrl: './scans-double-scan.component.html',
  styleUrls: ['./scans-double-scan.component.scss']
})
export class ScansDoubleScanComponent implements OnInit {
  scanType: any = '';
  constructor() {}

  ngOnInit(): void {}

  changeScanType(scanType: string) {
    this.scanType = scanType;
  }
}
