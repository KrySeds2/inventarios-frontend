import { TestBed } from '@angular/core/testing';

import { ShelfsCrudService } from './shelfs-crud.service';

describe('ShelfsCrudService', () => {
  let service: ShelfsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
