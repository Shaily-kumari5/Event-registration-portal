import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecords } from './manage-records';

describe('ManageRecords', () => {
  let component: ManageRecords;
  let fixture: ComponentFixture<ManageRecords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRecords],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageRecords);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
