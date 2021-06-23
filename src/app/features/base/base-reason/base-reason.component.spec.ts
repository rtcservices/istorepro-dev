import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseReasonComponent } from './base-reason.component';

describe('BaseReasonComponent', () => {
  let component: BaseReasonComponent;
  let fixture: ComponentFixture<BaseReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
