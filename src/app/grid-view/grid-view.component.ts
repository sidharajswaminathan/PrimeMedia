import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedserviceService} from '../sharedservice.service';
import {LocalstorageService} from '../localstorage.service';
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
              private sharedObj: SharedserviceService,
              private localstorage: LocalstorageService) { }

  ngOnInit() {
  }

  /*goto product details*/
  goToProductDetails (idx) {
    this.routUrl = ['productdetails'];
    this.localstorage.setLocaldata('prodDetail', JSON.stringify(idx));
    this.router.navigate(this.routUrl,{ queryParams: { id: idx.id } });
    /*this.localstorage.setLocaldata('currentCategory', idx.name);*/
    this.sharedObj.globalObj.showBanner = false;
    this.sharedValues = this.sharedObj;
    console.log(this.sharedValues);
  }

}
