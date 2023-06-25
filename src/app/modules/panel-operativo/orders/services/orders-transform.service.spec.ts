import { TestBed } from '@angular/core/testing';

import { OrdersTransformService } from './orders-transform.service';

describe('OrdersTransformService', () => {
  let service: OrdersTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
