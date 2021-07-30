import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsWarehouseDialogComponent } from './ds-warehouse-dialog.component';

describe('DsWarehouseDialogComponent', () => {
  let component: DsWarehouseDialogComponent;
  let fixture: ComponentFixture<DsWarehouseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsWarehouseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsWarehouseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
