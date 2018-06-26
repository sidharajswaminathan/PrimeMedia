import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxCarouselModule } from 'ngx-carousel';
import { carouselDragData } from '../usertype';

import { DraggingslideComponent } from './draggingslide.component';

describe('DraggingslideComponent', () => {
  let component: DraggingslideComponent;
  let fixture: ComponentFixture<DraggingslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        NgxCarouselModule],
      declarations: [ DraggingslideComponent ],
      providers: [carouselDragData]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggingslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
