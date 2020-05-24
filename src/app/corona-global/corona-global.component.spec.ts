import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaGlobalComponent } from './corona-global.component';

describe('CoronaGlobalComponent', () => {
  let component: CoronaGlobalComponent;
  let fixture: ComponentFixture<CoronaGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
