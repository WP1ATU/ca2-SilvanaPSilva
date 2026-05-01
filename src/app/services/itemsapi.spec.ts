import { TestBed } from '@angular/core/testing';

import { ItemsapiService } from './itemsapi.service';;

describe('ItemsapiService', () => {
  let service: ItemsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
