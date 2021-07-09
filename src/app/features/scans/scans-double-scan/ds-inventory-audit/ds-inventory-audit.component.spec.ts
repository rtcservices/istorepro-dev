import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsInventoryAuditComponent } from './ds-inventory-audit.component';

describe('DsInventoryAuditComponent', () => {
  let component: DsInventoryAuditComponent;
  let fixture: ComponentFixture<DsInventoryAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsInventoryAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsInventoryAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
