import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, DoCheck {
  breadcrumbList: any;
  constructedUrl: any = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sharedValues: SharedserviceService) { }

  ngOnInit() {
    //this.breadcrumbList = this.sharedValues.globalObj.breadcrumbList;
    /*this.breadcrumbList = this.urlArr._value;*/
  }

  ngDoCheck() {
    this.breadcrumbList = this.sharedValues.globalObj.breadcrumbList;
  }
}
