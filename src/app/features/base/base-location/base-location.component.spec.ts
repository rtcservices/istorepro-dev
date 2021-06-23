import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLocationComponent } from './base-location.component';

describe('BaseLocationComponent', () => {
  let component: BaseLocationComponent;
  let fixture: ComponentFixture<BaseLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
