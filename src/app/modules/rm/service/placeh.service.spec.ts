import { TestBed } from '@angular/core/testing';

import { PlacehService } from './placeh.service';

describe('PlacehService', () => {
  let service: PlacehService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacehService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
