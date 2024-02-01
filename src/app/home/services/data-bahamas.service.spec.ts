import { TestBed } from '@angular/core/testing';

import { DataBahamasService } from './data-bahamas.service';

describe('DataBahamasService', () => {
  let service: DataBahamasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBahamasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
