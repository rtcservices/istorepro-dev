import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetvoldialogComponent } from './netvoldialog.component';

describe('NetvoldialogComponent', () => {
  let component: NetvoldialogComponent;
  let fixture: ComponentFixture<NetvoldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetvoldialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetvoldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
