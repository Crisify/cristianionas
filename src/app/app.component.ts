import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {
  UrlFragmentNavigationService
} from "./shared/services/UrlFragmentNavigationService/url-fragment-navigation-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2, private urlFragmentNavigationService: UrlFragmentNavigationService) {
  }

  ngOnInit() {
    const mastHeadHeight = this.elRef.nativeElement.querySelector('.ci-header').offsetHeight;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.ci-banner'), 'marginTop', `${mastHeadHeight}px`);
    this.urlFragmentNavigationService.handleUrlFragmentNavigation();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset >= 10) {
      this.renderer.addClass(this.elRef.nativeElement.querySelector('.ci-header'), 'ci-fixed-header');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.querySelector('.ci-header'), 'ci-fixed-header');
    }
  }
}
