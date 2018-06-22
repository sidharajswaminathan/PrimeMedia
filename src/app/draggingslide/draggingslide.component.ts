import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { _ } from 'underscore';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { SharedserviceService } from '../sharedservice.service';
import {carouselDragData} from '../usertype';

@Component({
  selector: 'app-draggingslide',
  templateUrl: './draggingslide.component.html',
  styleUrls: ['./draggingslide.component.scss']
})
export class DraggingslideComponent implements OnInit {

  @Input() shareData: any;
  @Input() productData: any;
  sharedValues: any;
  changebutton: string = 'edit';
  editView: any;
  routUrl: Array<any> = ['/productdetails'];
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedObj: SharedserviceService
  ) { }
  setData: any[];
  lastObject: object = carouselDragData;
  ngOnInit() {

    this.carouselTileItems = this.productData;



    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      // animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    };
  }


  /*button to change edit and save view*/
  editCarousel() {
    this.editView = !this.editView;
    this.changebutton = this.changebutton === 'edit' ? 'save' : 'edit';
  }
  /*method to delete carousel obj*/
  deleteCarouselObj(obj) {
    console.log(obj.id);
    this.carouselTileItems = _.filter(this.carouselTileItems, function (x) {
      return x.id !== obj.id;
    });
  }
  /*goto product details*/
  goToProductDetails (idx) {
    if ( idx === '24') { this.routUrl = ['productdetail'];
    } else {
      this.routUrl = ['productdetails'];
    }
    this.router.navigate(this.routUrl,{ queryParams: { id: idx } });
    this.sharedObj.globalObj.showBanner = false;
    this.sharedValues = this.sharedObj;
    console.log(this.sharedValues);
  }
  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 24) {
      for (let i = len; i < len; i++) {
        this.carouselTileItems.push(i);
      }
    }
    console.log(this.carouselTileItems)
    this.carouselTileItems = _.filter(this.carouselTileItems, function(x, count) {
      return count < 25;
    })
    this.carouselTileItems.push(this.lastObject = {'src': '../assets/images/img1.png', 'id': '26'});

  }


     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel

}
