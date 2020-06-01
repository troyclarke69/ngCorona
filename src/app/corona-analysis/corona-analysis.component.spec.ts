import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaAnalysisComponent } from './corona-analysis.component';

describe('CoronaAnalysisComponent', () => {
  let component: CoronaAnalysisComponent;
  let fixture: ComponentFixture<CoronaAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
