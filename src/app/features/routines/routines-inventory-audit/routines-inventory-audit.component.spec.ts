import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesInventoryAuditComponent } from './routines-inventory-audit.component';

describe('RoutinesInventoryAuditComponent', () => {
  let component: RoutinesInventoryAuditComponent;
  let fixture: ComponentFixture<RoutinesInventoryAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesInventoryAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesInventoryAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
