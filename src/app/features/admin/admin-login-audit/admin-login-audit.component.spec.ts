import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginAuditComponent } from './admin-login-audit.component';

describe('AdminLoginAuditComponent', () => {
  let component: AdminLoginAuditComponent;
  let fixture: ComponentFixture<AdminLoginAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
