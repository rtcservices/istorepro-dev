import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrNetvolDialogComponent } from './or-net-vol-dialog.component';

describe('OrNetvolDialogComponent', () => {
  let component: OrNetvolDialogComponent;
  let fixture: ComponentFixture<OrNetvolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrNetvolDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrNetvolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
