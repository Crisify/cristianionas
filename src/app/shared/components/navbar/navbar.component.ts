import {Component, HostListener, OnInit} from '@angular/core';
import {faFacebookF, faLinkedinIn, faInstagram,} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faFacebook = faFacebookF;
  faEnvelope = faEnvelope;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isNavbarOpen) {
      this.closeNavbar();
    }
  }

  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

}
