import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConsistencyCheckerComponent } from './settings-consistency-checker.component';

describe('SettingsConsistencyCheckerComponent', () => {
  let component: SettingsConsistencyCheckerComponent;
  let fixture: ComponentFixture<SettingsConsistencyCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsConsistencyCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConsistencyCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
