import { TestBed, inject } from '@angular/core/testing';

import { QueerService } from './queer.service';

describe('QueerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueerService]
    });
  });

  it('should be created', inject([QueerService], (service: QueerService) => {
    expect(service).toBeTruthy();
  }));
});
