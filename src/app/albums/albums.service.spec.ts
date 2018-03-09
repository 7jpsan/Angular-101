import { TestBed, inject } from '@angular/core/testing';

import { AlbumsService } from './albums.service';

describe('AlbumsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsService]
    });
  });

  it('should be created', inject([AlbumsService], (service: AlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
