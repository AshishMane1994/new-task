import { TestBed } from '@angular/core/testing';

import { InfoServicesService } from './info-services.service';

describe('InfoServicesService', () => {
  let service: InfoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
