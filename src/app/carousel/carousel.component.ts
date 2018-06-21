import { Component, OnInit , ViewChild, ElementRef, AfterViewInit,Input} from '@angular/core';
import { carouselData } from '../mock-appdata';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() shareData:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }
  carouselList: any = carouselData;
  compList: Array<any> = [];
  sub: any = 0;
  startIndex: any = 0;
  endIndex: any = 0;
  indexVal: any = 4;
  carouselPos: any;
  routUrl: Array<any> = ['/productdetails'];
  staticId: any = 'anim_';
  @ViewChild('animId') carouselId: ElementRef;

  ngAfterViewInit() {
    console.log(this.carouselId, '   id of the element');
  }

  ngOnInit() {
    this.compList = this.carouselList.slice(this.startIndex, this.indexVal );
    console.log(this.carouselList);
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        console.log(params['id']);
       // this.page = +params['page'] || 0;
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

  goTo (idx){
    if(idx === '24'){this.routUrl = ['/productdetail'];
    }else{
      this.routUrl = ['/productdetails'];
    }

    this.router.navigate(this.routUrl,{ queryParams: { id: idx } });
  }
}
