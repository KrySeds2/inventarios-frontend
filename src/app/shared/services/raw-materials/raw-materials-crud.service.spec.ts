import { TestBed } from '@angular/core/testing';

import { RawMaterialsCrudService } from './raw-materials-crud.service';

describe('RawMaterialsCrudService', () => {
  let service: RawMaterialsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawMaterialsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
