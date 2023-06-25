import { TestBed } from '@angular/core/testing';

import { PartidasTransformService } from './partidas-transform.service';

describe('PartidasTransformService', () => {
  let service: PartidasTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidasTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
