import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOwnerComponent } from './setup-owner.component';

describe('SetupOwnerComponent', () => {
  let component: SetupOwnerComponent;
  let fixture: ComponentFixture<SetupOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
