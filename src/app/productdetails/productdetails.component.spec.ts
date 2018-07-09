import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoAudioModalComponent } from '../video-audio-modal/video-audio-modal.component';
import { AudioComponent } from '../audio/audio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductdetailsComponent } from './productdetails.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GridViewComponent } from '../grid-view/grid-view.component';
import { CeiboShare } from 'ng2-social-share';

describe('ProductdetailsComponent', () => {
  let component: ProductdetailsComponent;
  let fixture: ComponentFixture<ProductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      declarations: [ ProductdetailsComponent, VideoAudioModalComponent, AudioComponent, GridViewComponent, CeiboShare]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

