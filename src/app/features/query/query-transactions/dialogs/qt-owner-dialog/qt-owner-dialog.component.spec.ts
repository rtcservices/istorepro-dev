import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtOwnerDialogComponent } from './qt-owner-dialog.component';

describe('QtOwnerDialogComponent', () => {
  let component: QtOwnerDialogComponent;
  let fixture: ComponentFixture<QtOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtOwnerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
