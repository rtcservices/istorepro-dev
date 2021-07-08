import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrNetvoldialogComponent } from './or-net-vol-dialog.component';

describe('OrNetvoldialogComponent', () => {
  let component: OrNetvoldialogComponent;
  let fixture: ComponentFixture<OrNetvoldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrNetvoldialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrNetvoldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
