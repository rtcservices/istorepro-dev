import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudialogComponent } from './rudialog.component';

describe('RudialogComponent', () => {
  let component: RudialogComponent;
  let fixture: ComponentFixture<RudialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RudialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
