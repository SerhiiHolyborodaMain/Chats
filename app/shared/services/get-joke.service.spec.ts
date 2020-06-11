import { TestBed } from '@angular/core/testing';

import { GetJokeService } from './get-joke.service';

describe('GetJokeService', () => {
  let service: GetJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
