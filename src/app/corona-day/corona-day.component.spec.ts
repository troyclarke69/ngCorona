import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaDayComponent } from './corona-day.component';

describe('CoronaDayComponent', () => {
  let component: CoronaDayComponent;
  let fixture: ComponentFixture<CoronaDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
