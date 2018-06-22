import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAudioModalComponent } from './video-audio-modal.component';

describe('VideoAudioModalComponent', () => {
  let component: VideoAudioModalComponent;
  let fixture: ComponentFixture<VideoAudioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAudioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAudioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
