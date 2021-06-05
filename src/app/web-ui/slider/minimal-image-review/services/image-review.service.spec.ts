import { TestBed } from '@angular/core/testing';

import { ImageReviewService } from './image-review.service';

describe('ImageReviewService', () => {
  let service: ImageReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
