import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrNetwtdialogComponent } from './or-net-wt-dialog.component';

describe('OrNetwtdialogComponent', () => {
  let component: OrNetwtdialogComponent;
  let fixture: ComponentFixture<OrNetwtdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrNetwtdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrNetwtdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
