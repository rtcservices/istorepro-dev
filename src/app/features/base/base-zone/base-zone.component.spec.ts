import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseZoneComponent } from './base-zone.component';

describe('BaseZoneComponent', () => {
  let component: BaseZoneComponent;
  let fixture: ComponentFixture<BaseZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
