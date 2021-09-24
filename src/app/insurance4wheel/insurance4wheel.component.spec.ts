import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance4wheelComponent } from './insurance4wheel.component';

describe('Insurance4wheelComponent', () => {
  let component: Insurance4wheelComponent;
  let fixture: ComponentFixture<Insurance4wheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Insurance4wheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Insurance4wheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
