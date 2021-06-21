import { TestBed } from '@angular/core/testing';

import { SiteTranslateService } from './site-translate.service';

describe('SiteTranslateService', () => {
  let service: SiteTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
