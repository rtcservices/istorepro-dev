import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSecurityComponent } from './setup-security.component';

describe('SetupSecurityComponent', () => {
  let component: SetupSecurityComponent;
  let fixture: ComponentFixture<SetupSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
