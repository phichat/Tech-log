import { TestBed, inject } from '@angular/core/testing';

import { NationalitiesService } from './nationalities.service';

describe('NationalitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationalitiesService]
    });
  });

  it('should be created', inject([NationalitiesService], (service: NationalitiesService) => {
    expect(service).toBeTruthy();
  }));
});
