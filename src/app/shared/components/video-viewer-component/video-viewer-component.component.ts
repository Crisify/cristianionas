import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SafeUrlPipe} from "../../pipes/safe-url/safe-url-pipe.pipe";

@Component({
  selector: 'app-video-viewer-component',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './video-viewer-component.component.html',
  styleUrl: './video-viewer-component.component.scss'
})
export class VideoViewerComponent {
  @Input() src!: string;
  @Input() captionText?: string;
}
