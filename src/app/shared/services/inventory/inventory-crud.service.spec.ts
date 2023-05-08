import { TestBed } from '@angular/core/testing';

import { InventoryCrudService } from './inventory-crud.service';

describe('InventoryCrudService', () => {
  let service: InventoryCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
