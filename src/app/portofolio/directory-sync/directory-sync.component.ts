import {Component, OnInit} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-directory-sync',
  templateUrl: './directory-sync.component.html',
  styleUrls: ['./directory-sync.component.scss']
})
export class DirectorySyncComponent implements OnInit {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/directorySync/synchronization.png',
      captionText: 'System architecture',
      type: CarouselItemType.image
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('DirectorySyncComponent Opened');
  }
}
