import { TestBed } from '@angular/core/testing';

import { ShelfsTransformService } from './shelfs-transform.service';

describe('ShelfsTransformService', () => {
  let service: ShelfsTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfsTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
