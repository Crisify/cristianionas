import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-broker-cloud',
  templateUrl: './broker-cloud.component.html',
  styleUrls: ['./broker-cloud.component.scss']
})
export class BrokerCloudComponent implements OnInit {
  images = [
    {
      src: 'assets/images/projects/brokerCloud/diagram.png',
      captionText: 'System Architecture Diagram'
    },
    {
      src: 'assets/images/projects/brokerCloud/dynamicForm.png',
      captionText: 'Example of Dynamic Form Rendering'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('BrokerCloudComponent Opened');
  }
}
