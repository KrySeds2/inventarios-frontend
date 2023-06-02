import { TestBed } from '@angular/core/testing';

import { RawMaterialsTransformService } from './raw-materials-transform.service';

describe('RawMaterialsTransformService', () => {
  let service: RawMaterialsTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawMaterialsTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
