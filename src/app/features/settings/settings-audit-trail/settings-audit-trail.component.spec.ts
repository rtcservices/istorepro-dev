import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAuditTrailComponent } from './settings-audit-trail.component';

describe('SettingsAuditTrailComponent', () => {
  let component: SettingsAuditTrailComponent;
  let fixture: ComponentFixture<SettingsAuditTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAuditTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAuditTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
