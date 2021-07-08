import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrNetwtDialogComponent } from './or-net-wt-dialog.component';

describe('OrNetwtDialogComponent', () => {
  let component: OrNetwtDialogComponent;
  let fixture: ComponentFixture<OrNetwtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrNetwtDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrNetwtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
