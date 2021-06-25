import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSystemControlComponent } from './admin-system-control.component';

describe('AdminSystemControlComponent', () => {
  let component: AdminSystemControlComponent;
  let fixture: ComponentFixture<AdminSystemControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSystemControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSystemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
