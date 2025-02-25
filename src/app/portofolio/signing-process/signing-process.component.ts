import {Component, OnInit} from '@angular/core';
import {ImageViewerComponent} from "../../shared/components/image-viewer-component/image-viewer-component.component";
import {NgForOf} from "@angular/common";
import {MixpanelService} from "../../shared/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-signing-process',
  standalone: true,
  imports: [
    ImageViewerComponent,
    NgForOf
  ],
  templateUrl: './signing-process.component.html',
  styleUrl: './signing-process.component.scss'
})
export class SigningProcessComponent implements OnInit{
  images = [
    {
      src: 'assets/images/projects/signatureProcess/diagram.png',
      captionText: 'High-Level System Architecture Overview'
    }
  ];

  constructor(private mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.mixpanelService.track('SigningProcessComponent Opened');
  }
}
