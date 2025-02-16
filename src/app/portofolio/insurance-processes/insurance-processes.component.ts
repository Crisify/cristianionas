import {Component, OnInit} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-insurance-processes',
  templateUrl: './insurance-processes.component.html',
  styleUrls: ['./insurance-processes.component.scss']
})
export class InsuranceProcessesComponent implements OnInit{
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/insurance/diagram.png',
      type: CarouselItemType.image
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('InsuranceProcessesComponent Opened');
  }
}
