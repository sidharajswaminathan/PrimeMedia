import {Component, OnInit} from '@angular/core';
import { SharedserviceService } from './sharedservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  sharedValues: any;
  title = 'app';
  page = 4;
  constructor(private sharedObj: SharedserviceService) { }
  ngOnInit() {
    this.sharedValues = this.sharedObj.globalObj;
    this.sharedValues.breadcrumbList = [];
    /*this.sharedValues.showBreadcrumb = false;*/
    console.log(this.sharedValues);
  }
}
