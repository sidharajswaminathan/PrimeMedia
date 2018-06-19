import { Component, OnInit } from '@angular/core';
import { carouselData } from '../mock-appdata';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  data: any = JSON.stringify(carouselData);


  ngOnInit() {

  }

}
