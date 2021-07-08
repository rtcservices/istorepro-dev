import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrOwnerDialogComponent } from './or-owner-dialog.component';

describe('OrOwnerDialogComponent', () => {
  let component: OrOwnerDialogComponent;
  let fixture: ComponentFixture<OrOwnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrOwnerDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrOwnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
