import { Component, OnInit , ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { carouselData } from '../mock-appdata';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() shareData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedObj: SharedserviceService
  ) { }
  sharedValues: any;
  carouselList: any = [];
  compList: Array<any> = [];
  sub: any = 0;
  startIndex: any = 0;
  endIndex: any = 0;
  indexVal: any = 5;
  carouselPos: any;
  routUrl: Array<any> = ['/productdetails'];
  staticId: any = 'anim_';
  @ViewChild('animId') carouselId: ElementRef;

  ngAfterViewInit() {
    console.log(this.carouselId, '   id of the element');
  }

  ngOnInit() {
    this.carouselList = this.shareData;
    this.compList = this.carouselList.slice(this.startIndex, this.indexVal );
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

  goTo (idx) {
    if ( idx === '24') { this.routUrl = ['/productdetail'];
    } else {
      this.routUrl = ['/productdetails'];
    }
    this.router.navigate(this.routUrl,{ queryParams: { id: idx } });
    this.sharedObj.globalObj.showBanner = true;
    this.sharedValues = this.sharedObj;
    console.log(this.sharedValues);
  }
}
