import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {carouselData} from '../mock-appdata';


@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.css'],
  providers: [NgbTabsetConfig]
})
export class MycollectionsComponent implements OnInit {
  data=[];
  carousel:any = carouselData;

  constructor(config: NgbTabsetConfig) {
    config.justify = 'start';
    config.type = 'tabs';
    this.data = [
      {'src': '../assets/images/img1.png', 'id': '1'  },
      {'src': '../assets/images/img3.png', 'id': '2'  },
      {'src': '../assets/images/img4.png', 'id': '3' }
    ];
  }

  ngOnInit() {
  }

}
