import { TestBed, inject } from '@angular/core/testing';

import { NavigationItemsService } from './navigation-items.service';

describe('NavigationItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationItemsService]
    });
  });

  it('should be created', inject([NavigationItemsService], (service: NavigationItemsService) => {
    expect(service).toBeTruthy();
  }));
});
