import { TestBed } from '@angular/core/testing';

import { CoronaNewsApiService } from './corona-news-api.service';

describe('CoronaNewsApiService', () => {
  let service: CoronaNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaNewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
