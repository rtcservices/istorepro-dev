import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QsOwnerDialogComponent } from './qs-owner-dialog.component';

describe('QsOwnerDialogComponent', () => {
  let component: QsOwnerDialogComponent;
  let fixture: ComponentFixture<QsOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QsOwnerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QsOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
