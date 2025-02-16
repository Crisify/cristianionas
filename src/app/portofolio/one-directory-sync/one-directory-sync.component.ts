import {Component, OnInit} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-one-directory-sync',
  templateUrl: './one-directory-sync.component.html',
  styleUrls: ['./one-directory-sync.component.scss']
})
export class OneDirectorySyncComponent implements OnInit {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/ods/diagram.png',
      captionText: 'System architecture',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/ods/main.png',
      captionText: 'Main Page',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/ods/addEdit.png',
      captionText: 'Add/Edit Page',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/ods/addEditOption.png',
      captionText: 'Options Page',
      type: CarouselItemType.image
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('OneDirectorySyncComponent Opened');
  }
}
