import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoronaChartsComponent } from './corona-charts.component';

describe('CoronaChartsComponent', () => {
  let component: CoronaChartsComponent;
  let fixture: ComponentFixture<CoronaChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
