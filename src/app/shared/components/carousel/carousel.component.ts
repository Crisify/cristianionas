import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  constructor(private _sanitizer: DomSanitizer) {

  }

  getSafeVideoURL(videoURL: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }

  @Input() carouselItems: CarouselItem[] = [];
  @Input() dataInterval: number = 0;
  @Input() description?: string;
  @Input() height: number = 1060;
  @Input() width: number = 715;
}

export interface CarouselItem {
  src: string;
  alt?: string;
  captionTitle?: string;
  captionText?: string;
  type: CarouselItemType;
}

export enum CarouselItemType {
  image,
  video
}
