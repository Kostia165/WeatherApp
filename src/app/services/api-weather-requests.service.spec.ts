import { TestBed } from '@angular/core/testing';

import { ApiWeatherRequestsService } from './api-weather-requests.service';

describe('ApiWeatherRequestsService', () => {
  let service: ApiWeatherRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWeatherRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
