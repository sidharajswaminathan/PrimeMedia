import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedserviceService} from '../sharedservice.service';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  @Input() shareData: any;
  sharedValues: any;
  routUrl: Array<any> = ['/productdetails'];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sharedObj: SharedserviceService) { }

  ngOnInit() {
  }

  /*goto product details*/
  goToProductDetails (idx) {
    if ( idx === '24') { this.routUrl = ['productdetail'];
    } else {
      this.routUrl = ['productdetails'];
    }
    this.router.navigate(this.routUrl,{ queryParams: { id: idx } });
    this.sharedObj.globalObj.showBanner = false;
    this.sharedValues = this.sharedObj;
    console.log(this.sharedValues);
  }

}
