import { Component, OnInit } from '@angular/core';
import { carouselData } from '../mock-appdata';
import {carouselDragData} from '../usertype';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  carousel: object = carouselDragData;
  constructor() { }
  data: Array<any> = [];
  ngOnInit() {
console.log(carouselData);
    /*this.data = carouselData;*/
    this.carousel = {
      'configuration': {'deleteoption': false, 'editsave': false},
      'data': carouselData
    }

  }

}
