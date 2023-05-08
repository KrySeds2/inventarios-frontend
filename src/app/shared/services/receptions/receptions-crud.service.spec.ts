import { TestBed } from '@angular/core/testing';

import { ReceptionsCrudService } from './receptions-crud.service';

describe('ReceptionsCrudService', () => {
  let service: ReceptionsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
