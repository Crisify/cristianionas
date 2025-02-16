import {Component, OnInit} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-migration-tool',
  templateUrl: './migration-tool.component.html',
  styleUrls: ['./migration-tool.component.scss']
})
export class MigrationToolComponent implements OnInit {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/migrationTool/initial.png',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/migrationTool/choose-db.png',
      type: CarouselItemType.image
    }, {
      src: 'assets/images/projects/migrationTool/migration-in-progress.png',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/migrationTool/db-configuration.png',
      type: CarouselItemType.image
    },
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('MigrationToolComponent Opened');
  }
}
