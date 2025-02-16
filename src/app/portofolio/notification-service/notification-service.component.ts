import {Component, OnInit} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-notification-service',
  templateUrl: './notification-service.component.html',
  styleUrls: ['./notification-service.component.scss']
})
export class NotificationServiceComponent implements OnInit {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/notificationService/diagram.png',
      type: CarouselItemType.image
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('NotificationServiceComponent Opened');
  }
}
