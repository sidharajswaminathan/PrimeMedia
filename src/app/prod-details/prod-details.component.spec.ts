import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VideoAudioModalComponent} from '../video-audio-modal/video-audio-modal.component';
import {AudioComponent} from '../audio/audio.component';
import { ProdDetailsComponent } from './prod-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdDetailsComponent', () => {
  let component: ProdDetailsComponent;
  let fixture: ComponentFixture<ProdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, NgbModule.forRoot()],
      declarations: [ ProdDetailsComponent, VideoAudioModalComponent, AudioComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
