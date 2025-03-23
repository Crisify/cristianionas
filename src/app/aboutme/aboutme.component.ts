import {Component, OnInit} from '@angular/core';
import {faLinkedinIn, faWhatsapp, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {MixpanelService} from "../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faEnvelope = faEnvelope;
  faPhone=faPhone;

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('AboutMeComponent Opened');
  }

  protected readonly faWhatsapp = faWhatsapp;
  protected readonly faTelegram = faTelegram;
}
