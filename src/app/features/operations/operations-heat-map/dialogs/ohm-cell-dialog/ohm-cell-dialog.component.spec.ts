import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmCellDialogComponent } from './ohm-cell-dialog.component';

describe('OhmCellDialogComponent', () => {
  let component: OhmCellDialogComponent;
  let fixture: ComponentFixture<OhmCellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhmCellDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmCellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
