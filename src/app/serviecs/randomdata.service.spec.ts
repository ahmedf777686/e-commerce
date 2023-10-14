import { TestBed } from '@angular/core/testing';

import { RandomdataService } from './randomdata.service';

describe('RandomdataService', () => {
  let service: RandomdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
