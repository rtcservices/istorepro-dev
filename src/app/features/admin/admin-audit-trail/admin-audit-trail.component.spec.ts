import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuditTrailComponent } from './admin-audit-trail.component';

describe('AdminAuditTrailComponent', () => {
  let component: AdminAuditTrailComponent;
  let fixture: ComponentFixture<AdminAuditTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuditTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuditTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
