import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoViewerComponentComponent } from './video-viewer-component.component';

describe('VideoViewerComponentComponent', () => {
  let component: VideoViewerComponentComponent;
  let fixture: ComponentFixture<VideoViewerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoViewerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
