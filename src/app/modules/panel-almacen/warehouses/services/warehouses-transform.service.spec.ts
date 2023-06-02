import { TestBed } from '@angular/core/testing';

import { WarehousesTransformService } from './warehouses-transform.service';

describe('WarehousesTransformService', () => {
  let service: WarehousesTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousesTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
