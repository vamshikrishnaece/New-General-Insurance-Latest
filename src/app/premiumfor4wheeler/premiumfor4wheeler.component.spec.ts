import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Premiumfor4wheelerComponent } from './premiumfor4wheeler.component';

describe('Premiumfor4wheelerComponent', () => {
  let component: Premiumfor4wheelerComponent;
  let fixture: ComponentFixture<Premiumfor4wheelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Premiumfor4wheelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Premiumfor4wheelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
