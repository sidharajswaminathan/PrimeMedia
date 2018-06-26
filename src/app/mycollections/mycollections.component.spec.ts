import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DraggingslideComponent } from '../draggingslide/draggingslide.component';
import { NgbTab, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {NgxCarouselComponent} from 'ngx-carousel/src/ngx-carousel/ngx-carousel.component';
import { NgxTileComponent } from 'ngx-carousel/src/ngx-tile/ngx-tile.component';

import { MycollectionsComponent } from './mycollections.component';

describe('MycollectionsComponent', () => {
  let component: MycollectionsComponent;
  let fixture: ComponentFixture<MycollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MycollectionsComponent, DraggingslideComponent, NgbTab, NgbTabset, NgxCarouselComponent, NgxTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
