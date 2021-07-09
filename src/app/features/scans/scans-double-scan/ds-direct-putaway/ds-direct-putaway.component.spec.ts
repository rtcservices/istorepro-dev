import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDirectPutawayComponent } from './ds-direct-putaway.component';

describe('DsDirectPutawayComponent', () => {
  let component: DsDirectPutawayComponent;
  let fixture: ComponentFixture<DsDirectPutawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsDirectPutawayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDirectPutawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
