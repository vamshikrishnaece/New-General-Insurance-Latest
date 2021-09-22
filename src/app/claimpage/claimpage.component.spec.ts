import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimpageComponent } from './claimpage.component';

describe('ClaimpageComponent', () => {
  let component: ClaimpageComponent;
  let fixture: ComponentFixture<ClaimpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
