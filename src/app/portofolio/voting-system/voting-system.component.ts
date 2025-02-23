import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-voting-system',
  templateUrl: './voting-system.component.html',
  styleUrls: ['./voting-system.component.scss']
})
export class VotingSystemComponent implements OnInit {
  images = [
    {
      src: 'assets/images/projects/votingSystem/system.png',
      captionText: 'High-Level System Architecture Overview'
    },
    {
      src: 'assets/images/projects/votingSystem/diagram.png',
      captionText: 'Detailed Blockchain Transaction Flow Diagram'
    }
  ];

  videos = [
    {
      src: 'https://www.youtube.com/embed/bGDrMOk5eaw?si=ETRWD2DntKpgVxlS',
      captionText: 'High-Level System Architecture Overview'
    },
    {
      src: 'https://www.youtube.com/embed/TgTjTtFZrF0?si=haIPmBb4mZV8uBU_',
      captionText: 'Detailed Blockchain Transaction Flow Diagram'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('VotingSystemComponent Opened');
  }
}
