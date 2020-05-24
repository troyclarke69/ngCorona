import { TestBed } from '@angular/core/testing';

import { CoronaDayApiService } from './corona-day-api.service';

describe('CoronaDayApiService', () => {
  let service: CoronaDayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaDayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
