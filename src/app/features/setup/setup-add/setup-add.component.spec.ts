import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAddComponent } from './setup-add.component';

describe('SetupAddComponent', () => {
  let component: SetupAddComponent;
  let fixture: ComponentFixture<SetupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
