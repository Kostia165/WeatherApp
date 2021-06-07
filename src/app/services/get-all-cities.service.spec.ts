import { TestBed } from '@angular/core/testing';

import { GetAllCitiesService } from './get-all-cities.service';

describe('GetAllCitiesService', () => {
  let service: GetAllCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
