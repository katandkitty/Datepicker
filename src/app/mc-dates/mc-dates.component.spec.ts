import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McDatesComponent } from './mc-dates.component';

describe('McDatesComponent', () => {
  let component: McDatesComponent;
  let fixture: ComponentFixture<McDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
