import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSystemControlComponent } from './settings-system-control.component';

describe('SettingsSystemControlComponent', () => {
  let component: SettingsSystemControlComponent;
  let fixture: ComponentFixture<SettingsSystemControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSystemControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSystemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
