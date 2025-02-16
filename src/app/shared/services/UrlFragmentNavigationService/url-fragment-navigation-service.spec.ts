import { UrlFragmentNavigationService } from './url-fragment-navigation-service';
import { Router } from '@angular/router';

describe('UrlFragmentNavigationService', () => {
  let service: UrlFragmentNavigationService;
  let router: Router;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);

    service = new UrlFragmentNavigationService(router);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
