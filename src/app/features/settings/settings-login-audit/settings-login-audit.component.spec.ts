import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLoginAuditComponent } from './settings-login-audit.component';

describe('SettingsLoginAuditComponent', () => {
  let component: SettingsLoginAuditComponent;
  let fixture: ComponentFixture<SettingsLoginAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLoginAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLoginAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
