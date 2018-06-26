import { Component, OnInit, Input } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {carouselData} from '../mock-appdata';
import {carouselDragData} from '../usertype';
import {SharedserviceService} from '../sharedservice.service';

@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.scss'],
  providers: [NgbTabsetConfig]
})
export class MycollectionsComponent implements OnInit {
  carousel: object = carouselDragData;
  producctListdata: any;


  constructor(config: NgbTabsetConfig, private sharedObj: SharedserviceService ) {
    config.justify = 'start';
    config.type = 'tabs';
    this.sharedObj.globalObj.showBreadcrumb = false;
    this.sharedObj.resetTabs(this.sharedObj.globalObj.headerTabdata, true );
  }

  ngOnInit() {

    this.carousel = {
      'configuration' : {'deleteoption' : true, 'editsave': true, 'itemevent': false},
      'data': carouselData
    }
    this.producctListdata = carouselData;
    console.log(this.carousel);
  }

}
