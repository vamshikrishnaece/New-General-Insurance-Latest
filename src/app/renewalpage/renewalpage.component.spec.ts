import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalpageComponent } from './renewalpage.component';

describe('RenewalpageComponent', () => {
  let component: RenewalpageComponent;
  let fixture: ComponentFixture<RenewalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
