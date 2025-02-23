import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-directory-sync',
  templateUrl: './directory-sync.component.html',
  styleUrls: ['./directory-sync.component.scss']
})
export class DirectorySyncComponent implements OnInit {
  images = [
    {
      src: 'assets/images/projects/directorySync/synchronization.png',
      captionText: 'High-Level System Architecture Overview'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('DirectorySyncComponent Opened');
  }
}
