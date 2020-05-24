import { TestBed } from '@angular/core/testing';

import { CoronaGlobalApiService } from './corona-global-api.service';

describe('CoronaGlobalApiService', () => {
  let service: CoronaGlobalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaGlobalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
