import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPutawayComponent } from './ds-putaway.component';

describe('DsPutawayComponent', () => {
  let component: DsPutawayComponent;
  let fixture: ComponentFixture<DsPutawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPutawayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPutawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
