import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaTotalsComponent } from './corona-totals.component';

describe('CoronaTotalsComponent', () => {
  let component: CoronaTotalsComponent;
  let fixture: ComponentFixture<CoronaTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
