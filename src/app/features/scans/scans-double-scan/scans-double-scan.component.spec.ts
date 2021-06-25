import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScansDoubleScanComponent } from './scans-double-scan.component';

describe('ScansDoubleScanComponent', () => {
  let component: ScansDoubleScanComponent;
  let fixture: ComponentFixture<ScansDoubleScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScansDoubleScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScansDoubleScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
