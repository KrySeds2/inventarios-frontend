import { TestBed } from '@angular/core/testing';

import { RecipesCrudService } from './recipes-crud.service';

describe('RecipesCrudService', () => {
  let service: RecipesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
