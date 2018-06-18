import { Component, OnInit , ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { carouselData } from '../mock-appdata';
import * as $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }
  carouselList: any = carouselData;
  compList: Array<any> = [];
  startIndex: any = 0;
  endIndex: any = 0;
  indexVal: any = 6;
  carouselPos: any;
  staticId: any = 'anim_';
  @ViewChild('animId') carouselId: ElementRef;

  ngAfterViewInit() {
    console.log(this.carouselId, '   id of the element');
  }

  ngOnInit() {
    this.compList = this.carouselList.slice(this.startIndex, this.indexVal );
    console.log(this.carouselList)
  }
  Carouselwithoutanimation(param: string) {
    if (param === 'prev') {
      if (this.endIndex > this.indexVal && this.startIndex > 0) {
        this.startIndex = this.startIndex - this.indexVal;
        this.endIndex = this.endIndex - this.indexVal;
        $('.sliderContainer').eq(0).animate({left:'-1000px'},200).css({left:'1000px',opacity:0}).animate({left:'0px',opacity:1},200);
      }
    } else if (param === 'next') {
      if (this.endIndex < this.carouselList.length) {
        this.startIndex = this.startIndex + this.indexVal;
        this.endIndex = this.startIndex + this.indexVal;
        $('.sliderContainer').eq(0).animate({left:'1000px'},200).css({left:'-1000px',opacity:0}).animate({left:'0px',opacity:1},200);
      }
    }
    this.compList = this.carouselList.slice(this.startIndex, this.endIndex);
  }
  Carouselwithanimation(param: string) {
  }
}
