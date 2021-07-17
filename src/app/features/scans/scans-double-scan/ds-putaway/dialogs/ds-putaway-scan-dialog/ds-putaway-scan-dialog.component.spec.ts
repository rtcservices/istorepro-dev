import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPutawayScanDialogComponent } from './ds-putaway-scan-dialog.component';

describe('DsPutawayScanDialogComponent', () => {
  let component: DsPutawayScanDialogComponent;
  let fixture: ComponentFixture<DsPutawayScanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPutawayScanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPutawayScanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
