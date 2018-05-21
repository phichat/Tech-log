import { TestBed, inject } from '@angular/core/testing';

import { PictureCategoriesService } from './picture-categories.service';

describe('PictureCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictureCategoriesService]
    });
  });

  it('should be created', inject([PictureCategoriesService], (service: PictureCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
