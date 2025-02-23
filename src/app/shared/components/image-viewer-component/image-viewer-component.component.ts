import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-image-viewer-component',
  templateUrl: './image-viewer-component.component.html',
  styleUrl: './image-viewer-component.component.scss'
})
export class ImageViewerComponent {
  isViewerOpen = false;

  @Input() src!: string;
  @Input() captionText?: string;

  openViewer(): void {
    this.isViewerOpen = true;
  }

  closeViewer(): void {
    this.isViewerOpen = false;
  }
}
