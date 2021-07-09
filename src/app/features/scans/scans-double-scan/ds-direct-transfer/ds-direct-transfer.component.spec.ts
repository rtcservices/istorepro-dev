import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectTransferComponent } from './ds-direct-transfer.component';

describe('DsDirectTransferComponent', () => {
  let component: DsDirectTransferComponent;
  let fixture: ComponentFixture<DsDirectTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
