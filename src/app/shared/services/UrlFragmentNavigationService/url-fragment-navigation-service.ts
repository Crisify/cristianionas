import {Injectable} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlFragmentNavigationService {

  constructor(private router: Router) {
  }

  handleUrlFragmentNavigation() {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.includes('#broker-cloud')) {
          await this.router.navigate(['/projects/broker-cloud']);
        } else if (url.includes('#directory-sync')) {
          await this.router.navigate(['/projects/directory-sync']);
        } else if (url.includes('#insurance-processes')) {
          await this.router.navigate(['/projects/insurance-processes']);
        } else if (url.includes('#voting-system')) {
          await this.router.navigate(['/projects/voting-system']);
        } else if (url.includes('#migration-tool')) {
          await this.router.navigate(['/projects/migration-tool']);
        } else if (url.includes('#one-directory-sync')) {
          await this.router.navigate(['/projects/one-directory-sync']);
        } else if (url.includes('#notification-service')) {
          await this.router.navigate(['/projects/notification-service']);
        }
      }
    });
  }
}
