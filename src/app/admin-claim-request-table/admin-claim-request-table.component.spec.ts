import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClaimRequestTableComponent } from './admin-claim-request-table.component';

describe('AdminClaimRequestTableComponent', () => {
  let component: AdminClaimRequestTableComponent;
  let fixture: ComponentFixture<AdminClaimRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClaimRequestTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClaimRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
