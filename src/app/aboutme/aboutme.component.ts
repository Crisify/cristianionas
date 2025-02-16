import {Component, OnInit} from '@angular/core';
import {faFacebookF, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {MixpanelService} from "../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faFacebook = faFacebookF;
  faEnvelope = faEnvelope;

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('AboutMeComponent Opened');
  }
}
