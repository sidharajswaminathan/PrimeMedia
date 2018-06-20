import { Component, OnInit, Input } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {carouselData} from '../mock-appdata';
import {carouselDragData} from '../usertype';

@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.scss'],
  providers: [NgbTabsetConfig]
})
export class MycollectionsComponent implements OnInit {
  carousel: object = carouselDragData;


  constructor(config: NgbTabsetConfig) {
    config.justify = 'start';
    config.type = 'tabs';
  }

  ngOnInit() {

    this.carousel = {
      'configuration' : {'deleteoption' : true, 'editsave': true, 'itemevent': false},
      'data': carouselData
    }
    console.log(this.carousel);
  }

}
