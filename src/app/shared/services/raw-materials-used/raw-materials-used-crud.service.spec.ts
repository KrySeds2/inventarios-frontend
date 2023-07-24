import { TestBed } from '@angular/core/testing';

import { RawMaterialsUsedCrudService } from './raw-materials-used-crud.service';

describe('RawMaterialsUsedCrudService', () => {
  let service: RawMaterialsUsedCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawMaterialsUsedCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
