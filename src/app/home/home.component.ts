import { Component, OnInit } from '@angular/core';
import { carouselData } from '../mock-appdata';
import { ServiceCallService } from '../service-call.service';
import {Config} from '../config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: Config;
  contentData: any;
  constructor( private serviceCall: ServiceCallService ) { }
  data: any = JSON.stringify(carouselData);


  ngOnInit() {
    this.serviceCall.getConfig('medialibv2.productcategories')
      .subscribe((data: Config) => {
        this.config = data['data'];
        console.log( data['data'] );
        this.contentData = data['data'];
      });
  }

}
