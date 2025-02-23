import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-insurance-processes',
  templateUrl: './insurance-processes.component.html',
  styleUrls: ['./insurance-processes.component.scss']
})
export class InsuranceProcessesComponent implements OnInit{
  images = [
    {
      src: 'assets/images/projects/insurance/diagram.png',
      captionText: 'High-Level System Architecture Overview'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('InsuranceProcessesComponent Opened');
  }
}
