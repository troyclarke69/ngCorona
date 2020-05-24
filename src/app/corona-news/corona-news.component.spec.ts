import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaNewsComponent } from './corona-news.component';

describe('CoronaNewsComponent', () => {
  let component: CoronaNewsComponent;
  let fixture: ComponentFixture<CoronaNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
