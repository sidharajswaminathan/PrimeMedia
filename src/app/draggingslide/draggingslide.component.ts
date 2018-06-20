import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { _ } from 'underscore';

@Component({
  selector: 'app-draggingslide',
  templateUrl: './draggingslide.component.html',
  styleUrls: ['./draggingslide.component.scss']
})
export class DraggingslideComponent implements OnInit {

  @Input() shareData: any;

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit(){
    console.log(this.shareData)
    this.carouselTileItems = [

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
    ];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      //animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 24) {
      for (let i = len; i < len; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel

}
