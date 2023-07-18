import { TestBed } from '@angular/core/testing';

import { RecipesTransformService } from './recipes-transform.service';

describe('RecipesTransformService', () => {
  let service: RecipesTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
