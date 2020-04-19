import { TestBed } from '@angular/core/testing';

import { AirlockService } from './airlock.service';

describe('AirlockService', () => {
  let service: AirlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
