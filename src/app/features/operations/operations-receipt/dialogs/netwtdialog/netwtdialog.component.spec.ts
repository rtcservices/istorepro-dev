import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetwtdialogComponent } from './netwtdialog.component';

describe('NetwtdialogComponent', () => {
  let component: NetwtdialogComponent;
  let fixture: ComponentFixture<NetwtdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetwtdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetwtdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
