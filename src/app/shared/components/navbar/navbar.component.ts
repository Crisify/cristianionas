import {Component, HostListener, OnInit} from '@angular/core';
import {faLinkedinIn, faWhatsapp, faTelegram,} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faLinkedin = faLinkedinIn;
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

  protected readonly faWhatsapp = faWhatsapp;
  protected readonly faTelegram = faTelegram;
}
