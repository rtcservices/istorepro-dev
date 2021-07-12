import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlmGrnDialogComponent } from './olm-grn-dialog.component';

describe('OlmGrnDialogComponent', () => {
  let component: OlmGrnDialogComponent;
  let fixture: ComponentFixture<OlmGrnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlmGrnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlmGrnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
