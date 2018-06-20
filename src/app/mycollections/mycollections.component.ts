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
      'configuration' : {'deleteoption' : true, 'editsave': true},
      'data': [
        {'src': '../assets/images/img1.png', 'id': '1'  },
        {'src': '../assets/images/img3.png', 'id': '2'  },
        {'src': '../assets/images/img4.png', 'id': '3' },
        {'src': '../assets/images/img4.png', 'id': '4' },
        {'src': '../assets/images/img2.png', 'id': '5' },
        {'src': '../assets/images/img3.png', 'id': '6' },
        {'src': '../assets/images/img4.png', 'id': '7' },
        {'src': '../assets/images/img2.png', 'id': '8' },
        {'src': '../assets/images/img3.png', 'id': '9'},
        {'src': '../assets/images/img2.png', 'id': '10' },
        {'src': '../assets/images/img2.png', 'id': '11'},
        {'src': '../assets/images/img1.png', 'id': '12'},
        {'src': '../assets/images/img4.png', 'id': '13'},
        {'src': '../assets/images/img2.png', 'id': '14'},
        {'src': '../assets/images/img1.png', 'id': '15'},
        {'src': '../assets/images/img3.png', 'id': '16'},
        {'src': '../assets/images/img1.png', 'id': '17'},
        {'src': '../assets/images/img3.png', 'id': '18'},
        {'src': '../assets/images/img1.png', 'id': '19'},
        {'src': '../assets/images/img3.png', 'id': '20'},
        {'src': '../assets/images/img1.png', 'id': '21'},
        {'src': '../assets/images/img3.png', 'id': '22'},
        {'src': '../assets/images/img1.png', 'id': '23'},
        {'src': '../assets/images/img2.png', 'id': '24'}
      ]
    }
    console.log(this.carousel);
  }

}
