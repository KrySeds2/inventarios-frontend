import { TestBed } from '@angular/core/testing';

import { OrdersCrudService } from './orders-crud.service';

describe('OrdersCrudService', () => {
  let service: OrdersCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
