import { TestBed, inject } from '@angular/core/testing';

import { ReligionsService } from './religions.service';

describe('ReligionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReligionsService]
    });
  });

  it('should be created', inject([ReligionsService], (service: ReligionsService) => {
    expect(service).toBeTruthy();
  }));
});
