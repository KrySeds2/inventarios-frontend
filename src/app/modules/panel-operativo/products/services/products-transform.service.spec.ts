import { TestBed } from '@angular/core/testing';

import { ProductsTransformService } from './products-transform.service';

describe('ProductsTransformService', () => {
  let service: ProductsTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
