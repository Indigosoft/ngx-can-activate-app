import { TestBed, inject } from '@angular/core/testing';

import { NgxCanActivateApp } from './ngx-can-activate-app.service';

describe('NgxCanActivateApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCanActivateApp]
    });
  });

  it('should be created', inject([NgxCanActivateApp], (service: NgxCanActivateApp) => {
    expect(service).toBeTruthy();
  }));
});
