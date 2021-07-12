import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'ibe-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('SettingsTab', { static: false })
  SettingsTab!: MatTabGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
