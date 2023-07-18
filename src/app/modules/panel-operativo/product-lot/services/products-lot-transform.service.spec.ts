import { TestBed } from '@angular/core/testing';

import { ProductsLotTransformService } from './products-lot-transform.service';

describe('ProductsLotTransformService', () => {
  let service: ProductsLotTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLotTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
