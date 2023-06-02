import { TestBed } from '@angular/core/testing';

import { ReceptionsTransformService } from './receptions-transform.service';

describe('ReceptionsTransformService', () => {
  let service: ReceptionsTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionsTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
