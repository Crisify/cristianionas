import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Output() closeModalEvent = new EventEmitter();

  @Input() projectTitle: string = '';
  @Input() image: string = '';
  @Input() projectNameRoute: any = "";
}
