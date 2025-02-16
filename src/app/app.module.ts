import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PortfolioPageComponent} from './portofolio/portfolio-page/portfolio-page.component';
import {FormsModule} from "@angular/forms";
import {ProjectComponent} from './shared/components/project/project.component';
import {CarouselComponent} from './shared/components/carousel/carousel.component';
import {VotingSystemComponent} from './portofolio/voting-system/voting-system.component';
import {MigrationToolComponent} from './portofolio/migration-tool/migration-tool.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {DirectorySyncComponent} from './portofolio/directory-sync/directory-sync.component';
import {OneDirectorySyncComponent} from './portofolio/one-directory-sync/one-directory-sync.component';
import {NotificationServiceComponent} from './portofolio/notification-service/notification-service.component';
import {InsuranceProcessesComponent} from './portofolio/insurance-processes/insurance-processes.component';
import {BrokerCloudComponent} from './portofolio/broker-cloud/broker-cloud.component';
import {NavigationEnd, Router} from "@angular/router";
import {RecommendationsComponent} from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioPageComponent,
    ProjectComponent,
    CarouselComponent,
    VotingSystemComponent,
    MigrationToolComponent,
    DirectorySyncComponent,
    OneDirectorySyncComponent,
    NotificationServiceComponent,
    InsuranceProcessesComponent,
    BrokerCloudComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    NgbCarouselModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
