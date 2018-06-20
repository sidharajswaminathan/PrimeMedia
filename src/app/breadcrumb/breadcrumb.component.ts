import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  urlArr: any;
  constructedUrl: any = [];
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.urlArr = this.route.url;
    this.urlArr = this.urlArr._value;
  }

}
