import { TestBed } from '@angular/core/testing';

import { WarehousesCrudService } from './warehouses-crud.service';

describe('WarehousesCrudService', () => {
  let service: WarehousesCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousesCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
