import { TestBed } from '@angular/core/testing';

import { ProductsLotCrudService } from './products-lot-crud.service';

describe('ProductsLotCrudService', () => {
  let service: ProductsLotCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLotCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
