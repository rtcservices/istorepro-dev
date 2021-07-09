import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPickItemAssistanceDialogComponent } from './ds-pick-item-assistance-dialog.component';

describe('DsPickItemAssistanceDialogComponent', () => {
  let component: DsPickItemAssistanceDialogComponent;
  let fixture: ComponentFixture<DsPickItemAssistanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPickItemAssistanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPickItemAssistanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
