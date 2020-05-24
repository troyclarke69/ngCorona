import { TestBed } from '@angular/core/testing';

import { CoronaTotalsApiService } from './corona-totals-api.service';

describe('CoronaTotalsApiService', () => {
  let service: CoronaTotalsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaTotalsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
