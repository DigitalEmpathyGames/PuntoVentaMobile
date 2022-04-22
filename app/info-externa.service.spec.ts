import { TestBed } from '@angular/core/testing';

import { InfoExternaService } from './info-externa.service';

describe('InfoExternaService', () => {
  let service: InfoExternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoExternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
