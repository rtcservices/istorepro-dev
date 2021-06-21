import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSearchComponent } from './setup-search.component';

describe('SetupSearchComponent', () => {
  let component: SetupSearchComponent;
  let fixture: ComponentFixture<SetupSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
