import { Component, OnInit, AfterViewInit } from '@angular/core';
import { productAllInfo } from '../mock-appdata';
import { PaginationComponent } from '../pagination/pagination.component';

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
  constructor() { }

  pageChange() {
    console.log(this.page * this.maxList);
    this.startval = (this.page * this.maxList) - this.maxList;
    this.endVal = this.page * this.maxList;
  }

ngOnInit() {
  }

}
