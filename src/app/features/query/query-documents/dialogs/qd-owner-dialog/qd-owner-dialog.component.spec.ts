import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdOwnerDialogComponent } from './qd-owner-dialog.component';

describe('QdOwnerDialogComponent', () => {
  let component: QdOwnerDialogComponent;
  let fixture: ComponentFixture<QdOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QdOwnerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QdOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
