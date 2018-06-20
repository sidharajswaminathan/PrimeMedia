import {Component, OnDestroy, OnInit} from '@angular/core';
import { carouselData } from '../mock-appdata';
import { ActivatedRoute, Router } from '@angular/router';
import {carouselDragData} from '../usertype';
import { ServiceCallService } from '../service-call.service';
import {Config} from '../config';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy {
  carousel: object = carouselDragData;
  constructor(private route: ActivatedRoute, private router: Router, private serviceCall: ServiceCallService) { }
  data: Array<any> = [];
  sub: any;
  config: Config;
  carouselData: any;
  curId: any;
  isloaded: any = false;
  ngOnInit() {
    /*this.data = carouselData;*/
    this.sub = this.route
      .queryParams
      .subscribe(params => {
          console.log(params['id']);
          this.curId = params['id'];
            this.serviceCall.postMethod('medialibv2.productlist', { 'id' : this.curId}).subscribe((data: Config) => {
                  this.carouselData =  data['data'].content.contents[0].data;
                  this.isloaded = true;
                  console.log(data['data'].content.categoryName, 'productList' , this.carouselData);
                  this.carousel = {
                    'configuration': {'deleteoption': false, 'editsave': false, 'itemevent': true},
                    'data': this.carouselData,
                    'title': data['data'].content.categoryName
                  };
          });
      });

 }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
