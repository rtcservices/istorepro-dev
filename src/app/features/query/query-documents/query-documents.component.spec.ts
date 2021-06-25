import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDocumentsComponent } from './query-documents.component';

describe('QueryDocumentsComponent', () => {
  let component: QueryDocumentsComponent;
  let fixture: ComponentFixture<QueryDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
