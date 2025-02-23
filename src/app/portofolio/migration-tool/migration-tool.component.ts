import {Component, OnInit} from '@angular/core';
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-migration-tool',
  templateUrl: './migration-tool.component.html',
  styleUrls: ['./migration-tool.component.scss']
})
export class MigrationToolComponent implements OnInit {
  images = [
    {
      src: 'assets/images/projects/migrationTool/initial.png',
      captionText: 'Select the Source Database to Begin the Migration'
    },
    {
      src: 'assets/images/projects/migrationTool/choose-db.png',
      captionText: 'Configure the Destination Database for Data Transfer'
    },
    {
      src: 'assets/images/projects/migrationTool/migration-in-progress.png',
      captionText: 'Monitor the Migration Process in Real-Time'
    },
    {
      src: 'assets/images/projects/migrationTool/db-configuration.png',
      captionText: 'Complete the Final Configuration for Successful Migration'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('MigrationToolComponent Opened');
  }
}
