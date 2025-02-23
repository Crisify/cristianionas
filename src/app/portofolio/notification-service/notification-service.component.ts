import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-notification-service',
  templateUrl: './notification-service.component.html',
  styleUrls: ['./notification-service.component.scss']
})
export class NotificationServiceComponent implements OnInit {
  images = [
    {
      src: 'assets/images/projects/notificationService/diagram.png',
      captionText: 'High-Level System Architecture Overview'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('NotificationServiceComponent Opened');
  }
}
