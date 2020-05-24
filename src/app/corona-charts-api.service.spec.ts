import { TestBed } from '@angular/core/testing';

import { CoronaChartsApiService } from './corona-charts-api.service';

describe('CoronaChartsApiService', () => {
  let service: CoronaChartsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaChartsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
