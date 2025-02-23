import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-one-directory-sync',
  templateUrl: './one-directory-sync.component.html',
  styleUrls: ['./one-directory-sync.component.scss']
})
export class OneDirectorySyncComponent implements OnInit {
  images = [
    {
      src: 'assets/images/projects/ods/diagram.png',
      captionText: 'High-Level System Architecture Diagram'
    },
    {
      src: 'assets/images/projects/ods/main.png',
      captionText: 'Main Dashboard Interface'
    },
    {
      src: 'assets/images/projects/ods/addEdit.png',
      captionText: 'Add and Edit Entry Page'
    },
    {
      src: 'assets/images/projects/ods/addEditOption.png',
      captionText: 'Configuration Options Management Page'
    }
  ];


  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('OneDirectorySyncComponent Opened');
  }
}
