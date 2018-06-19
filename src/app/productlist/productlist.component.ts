import { Component, OnInit } from '@angular/core';
import { carouselData } from '../mock-appdata';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }
  data: Array<any> = [];
  ngOnInit() {
console.log(carouselData);
    this.data = carouselData;
  }

}
