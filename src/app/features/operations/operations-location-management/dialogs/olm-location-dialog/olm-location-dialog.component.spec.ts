import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlmLocationDialogComponent } from './olm-location-dialog.component';

describe('OlmLocationDialogComponent', () => {
  let component: OlmLocationDialogComponent;
  let fixture: ComponentFixture<OlmLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlmLocationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlmLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
