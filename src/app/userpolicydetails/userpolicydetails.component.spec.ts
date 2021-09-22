import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpolicydetailsComponent } from './userpolicydetails.component';

describe('UserpolicydetailsComponent', () => {
  let component: UserpolicydetailsComponent;
  let fixture: ComponentFixture<UserpolicydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpolicydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpolicydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
