import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Premiumfor2wheelerComponent } from './premiumfor2wheeler.component';

describe('Premiumfor2wheelerComponent', () => {
  let component: Premiumfor2wheelerComponent;
  let fixture: ComponentFixture<Premiumfor2wheelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Premiumfor2wheelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Premiumfor2wheelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
