import { TestBed } from '@angular/core/testing';

import { InventoryTransformService } from './inventory-transform.service';

describe('InventoryTransformService', () => {
  let service: InventoryTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
