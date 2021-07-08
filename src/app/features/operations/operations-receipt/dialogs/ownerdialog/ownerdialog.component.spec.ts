import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerdialogComponent } from './ownerdialog.component';

describe('OwnerdialogComponent', () => {
  let component: OwnerdialogComponent;
  let fixture: ComponentFixture<OwnerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
