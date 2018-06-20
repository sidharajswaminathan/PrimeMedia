import { Component, OnInit, Input } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {carouselData} from '../mock-appdata';
import {carouselDragData} from '../usertype';

@Component({
  selector: 'app-mycollections',
  templateUrl: './mycollections.component.html',
  styleUrls: ['./mycollections.component.css'],
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
      'configuration' : {'deleteoption' : true, 'editsave': true}
    }
    console.log(this.carousel);
    this.carousel.configuration.data = [
      {'src': '../assets/images/img1.png', 'id': '1'  },
      {'src': '../assets/images/img3.png', 'id': '2'  },
      {'src': '../assets/images/img4.png', 'id': '3' }
    ];
  }

}
