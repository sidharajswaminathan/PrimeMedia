import { Component, OnInit, AfterViewInit } from '@angular/core';
import { productAllInfo } from '../mock-appdata';
import { PaginationComponent } from '../pagination/pagination.component';
import { LocalstorageService } from '../localstorage.service';
import {SharedserviceService} from '../sharedservice.service';
@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  prodList = productAllInfo;
  page = 1;
  maxList = 10;
  endVal = 10;
  startval = 0;
  constructor(private sharedObj: SharedserviceService,
              private localstorage: LocalstorageService) {
    this.sharedObj.globalObj.breadcrumbList = [
      {'url': '/home', 'statename': 'Home', 'param': ''},
      {'url': '/productlist', 'statename': 'ProductList', 'param': this.localstorage.getLocaldata('catId')},
      {'url': '/productdetails', 'statename': 'ProductDetails', 'param': ''}
    ];
    this.sharedObj.globalObj.showBreadcrumb = true;
  }

  pageChange() {
    console.log(this.page * this.maxList);
    this.startval = (this.page * this.maxList) - this.maxList;
    this.endVal = this.page * this.maxList;
  }

ngOnInit() {
  }

}
