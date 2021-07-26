import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhmCellDialogComponent } from './dhm-cell-dialog.component';

describe('DhmCellDialogComponent', () => {
  let component: DhmCellDialogComponent;
  let fixture: ComponentFixture<DhmCellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhmCellDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhmCellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
