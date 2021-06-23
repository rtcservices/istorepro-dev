import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseItemTypeComponent } from './base-item-type.component';

describe('BaseItemTypeComponent', () => {
  let component: BaseItemTypeComponent;
  let fixture: ComponentFixture<BaseItemTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseItemTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
