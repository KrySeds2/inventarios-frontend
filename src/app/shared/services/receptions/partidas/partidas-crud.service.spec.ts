import { TestBed } from '@angular/core/testing';

import { PartidasCrudService } from './partidas-crud.service';

describe('PartidasCrudService', () => {
  let service: PartidasCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidasCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
