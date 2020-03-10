import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language-service.service';

describe('RfiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });
});
